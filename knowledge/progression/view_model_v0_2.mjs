// Progression & Opportunity Engine v0.2 — read-side hierarchy projection.
// SYNTHETIC simulation ONLY. Does not open game saves, call network or read campaign state.
import { evaluateScenario } from "./evaluate_v0_1.mjs";

function indexById(records){ return Object.fromEntries(records.map(r=>[r.id,r])); }

function nodeAncestors(nodes, nodeId){
 const byId=indexById(nodes);
 if(!byId[nodeId])throw Error("Unknown hierarchy node: "+nodeId);
 const route=[],visited=new Set();
 for(let item=byId[nodeId];item;item=item.parent?byId[item.parent]:null){
   if(visited.has(item.id))throw Error("Navigation cycle at "+item.id);
   visited.add(item.id);
   route.unshift({id:item.id,title:item.title,type:item.type});
 }
 return route;
}
function flagState(s,key){
 const yes=s.flags_true||[],no=s.flags_false||[];
 if(yes.includes(key))return true;
 if(no.includes(key))return false;
 return null;
}
function featureStatus(node, projection, scenario){
 if(node.primary_capability||node.capability_ref){
   const id=node.primary_capability||node.capability_ref;
   const cap=projection.capabilities.find(x=>x.id===id);
   if(!cap)throw Error("Broken capability pointer from "+node.id+" to "+id);
   switch(cap.status){
     case "observed_in_simulation":return {kind:"observed_in_fixture",note:"Explicitly supplied in synthetic fixture"};
     case "normal_rule_met_not_observed":return {kind:"eligible_not_verified",note:"Normal rule satisfied; interface/equipment unobserved"};
     case "necessary_condition_not_met":return {kind:"prerequisite_unmet",note:"Prerequisite not met according to fictional facts"};
     case "explicitly_unavailable":return {kind:"explicitly_unavailable",note:"Fixture explicitly says unavailable"};
     default:return {kind:"unknown",note:"Cannot infer access or ownership from sources"};
   }
 }
 if(node.primary_flag||node.flag_ref){
   const key=(node.primary_flag||node.flag_ref).replace(/^flag:/,"");
   const val=flagState(scenario,key);
   return val===true?{kind:"observed_in_fixture",note:"Explicitly supplied simulated event"}:val===false?{kind:"explicitly_unavailable",note:"Fixture explicitly negates event"}:{kind:"check_if_observed",note:"Conditional availability; no activity is assumed active"};
 }
 return {kind:"reference_only",note:"Source knowledge, not evidence of activity or ownership"};
}
function trackCard(node, projection, scenario){
 const status=featureStatus(node,projection,scenario);
 const stageKey=({observed_in_fixture:"observed",eligible_not_verified:"eligible",prerequisite_unmet:"unmet",explicitly_unavailable:"unmet",unknown:"unconfirmed",check_if_observed:"unconfirmed",reference_only:"unconfirmed"})[status.kind];
 return {id:node.id,label:node.title,description:node.description,
   availability:status.kind,confidence_boundary:status.note,
   guidance:node.summary_by_stage?.[stageKey]||node.description,
   atlas_refs:node.atlas_refs||[],source_refs:node.source_refs||[],
   has_children:false};
}
function chooseProject(hierarchy,projection,scenario,opts){
 const requested=opts.project_id;
 if(requested){
   const item=hierarchy.nodes.find(x=>x.id===requested&&x.type==="project");
   if(!item)throw Error("Requested project not found: "+requested);
   return item;
 }
 const focus=opts.focus_node_id||"";
 const node=hierarchy.nodes.find(x=>x.id===focus);
 if(node){
   const route=nodeAncestors(hierarchy.nodes,node.id);
   const parentProject=route.find(x=>x.type==="project");
   if(parentProject)return hierarchy.nodes.find(x=>x.id===parentProject.id);
 }
 const intent=(opts.intent||scenario.intent||"").toLowerCase();
 if(intent==="horses"||intent==="horse")return hierarchy.nodes.find(x=>x.id==="project.horse");
 return hierarchy.nodes.find(x=>x.id==="project.camp");
}
function computeTransition(graph,current,previous){
 if(!previous)return [];
 const before=evaluateScenario(graph,previous),after=evaluateScenario(graph,current);
 const old=indexById(before.capabilities);
 return after.capabilities.filter(c=>{
   const a=c.status,b=old[c.id]?.status;
   return ["observed_in_simulation","normal_rule_met_not_observed"].includes(a)&&a!==b;
 }).map(c=>({id:c.id,from:old[c.id]?.status||"unknown",to:c.status,evidence:"Only relative to two supplied fictional scenarios"}));
}
export function composeProgressionView(graph,hierarchy,scenario,opts={}){
 if(hierarchy.scope!=="SYNTHETIC_DESIGN_ONLY_NO_PLAYER_STATE")throw Error("Only synthetic hierarchy supported");
 const evaluated=evaluateScenario(graph,scenario);
 const surface=opts.surface||"trailhead";
 if(!["trailhead","missions","project","atlas"].includes(surface))throw Error("Invalid view surface");
 const nodes=hierarchy.nodes,byId=indexById(nodes);
 const focus=opts.focus_node_id||null;
 if(focus&&!byId[focus])throw Error("Unknown focus node "+focus);
 const project=chooseProject(hierarchy,evaluated,scenario,opts);
 const projectResult=evaluated.projects.find(p=>p.id===project.project_ref);
 const missionChoices=evaluated.missions.filter(m=>["marker_observed_in_simulation","marker_observed_but_control_unavailable"].includes(m.status));
 const candidates=evaluated.missions.filter(m=>["opening_candidate_marker_unconfirmed","necessary_conditions_met_marker_unconfirmed"].includes(m.status));
 const riskPriorities={activated_urgent:1,pre_exit_audit:2,observed_optional_window:3};
 const warnings=[...evaluated.warnings].sort((a,b)=>(riskPriorities[a.severity]||9)-(riskPriorities[b.severity]||9));
 const topAlert=warnings[0]||null;
 const isUrgent=topAlert?.severity==="activated_urgent";
 const isBlocked=evaluated.outings_suppressed;
 const outingCandidates=evaluated.opportunities.filter(o=>o.project_id===project.project_ref);
 // The current irreversible chapter-exit event outranks older, still generically applicable arrival windows.
 const beforeExit=topAlert?.severity==="pre_exit_audit";
 const exitAudit=evaluated.opportunities.find(o=>o.id==="chapter2_exit_audit");
 const preferred=(beforeExit&&exitAudit)?exitAudit:(outingCandidates[0]||evaluated.opportunities[0]||null);
 // When a player has hypothetically purchased Pearson's tools, move from repeatedly inspecting the Ledger to planning a specific recipe-related hunt.
 // This remains an optional existing Heartlands outing reference: no newly crafted satchel or specific owned weapon is inferred.
 const targetedMaterials=project.id==="project.camp"&&projectResult?.stage==="satchel_tools";
 const chosenOuting=targetedMaterials?(preferred?.outings.find(a=>a==="heartlands_recon")||preferred?.outings[0]):preferred?.outings[0];
 const chosenRationale=targetedMaterials?"Choose one Pearson recipe first; then use a suitable Heartlands reconnaissance outing to learn and gather only relevant materials.":preferred?.title;
 const suggestedOuting=!isBlocked&&preferred?{source_window:preferred.id,activity_ref:chosenOuting,why_now:chosenRationale,confidence:preferred.confidence}:null;
 const trailhead={
   source:"SYNTHETIC_SCENARIO_ONLY",
   chapter_label:"Chapter 2 · Horseshoe Overlook",
   surface:"Living Adventure Companion",
   control:scenario.control,
   story_choices:missionChoices.slice(0,hierarchy.policy.max_visible_story_markers).map(m=>({id:m.id,title:m.title,status:"MARKER_OBSERVED_IN_FIXTURE",original_dossier:m.source_ref})),
   additional_observed_count:Math.max(0,missionChoices.length-hierarchy.policy.max_visible_story_markers),
   unresolved_candidates:(missionChoices.length?[]:candidates.slice(0,hierarchy.policy.max_uncertain_candidates)).map(m=>({id:m.id,title:m.title,status:m.status})),
   featured_project:isBlocked?null:{id:project.id,title:project.title,stage:projectResult?.stage||"not_evaluated",next_action:projectResult?.next_action||"Explore this project when useful"},
   outing:suggestedOuting,
   one_primary_alert:topAlert?{id:topAlert.id,severity:topAlert.severity,title:topAlert.title,action:topAlert.action}:null,
   other_warnings_count:Math.max(0,warnings.length-1),
   marker_rule_conflicts:evaluated.missions.filter(m=>m.conflicts.length).map(m=>({id:m.id,issues:m.conflicts})),
   before_advancing:topAlert?topAlert.action:null,
   can_wait:isUrgent?"Optional projects and repeatable outings until the active time-sensitive Story stage is handled":topAlert?.severity==="pre_exit_audit"?"Repeatable hunting and convenience upgrades; verify any chapter-specific requests before leaving":"No mandatory repeatable-activity quota; confirm specific active or expiring offers rather than assuming safety",
   default_next:evaluated.priority_next
 };
 const domainRoot=focus&&nodeAncestors(nodes,focus).some(x=>x.id===project.id)?focus:project.id;
 const directChildren=nodes.filter(n=>n.parent===domainRoot);
 const detail={
   focused_id:domainRoot,
   breadcrumbs:nodeAncestors(nodes,domainRoot),
   project:{id:project.id,title:project.title,stage:projectResult?.stage||"not_evaluated",next_action:projectResult?.next_action||null},
   children:directChildren.slice(0,hierarchy.policy.project_tracks_visible_on_open).map(n=>{
      const card=trackCard(n,evaluated,scenario);
      card.has_children=nodes.some(x=>x.parent===n.id);
      return card;
   }),
   selected_track:(byId[domainRoot].type==="track"||byId[domainRoot].type==="feature")?trackCard(byId[domainRoot],evaluated,scenario):null,
   atlas_entry_points:domainRoot.startsWith("camp.")||domainRoot==="project.camp"?["atlas.camp","atlas.hunting"]:["atlas.horses"],
   disclosure_level:(byId[domainRoot].type==="feature"?"L3":"L2")
 };
 const chapterBoard={
   entries:evaluated.missions.filter(m=>["marker_observed_in_simulation","marker_observed_but_control_unavailable"].includes(m.status)).map(m=>({id:m.id,title:m.title,eligibility:m.status,source_ref:m.source_ref})),
   may_require_observation:[...candidates].sort((a,b)=>Number(b.status==="necessary_conditions_met_marker_unconfirmed")-Number(a.status==="necessary_conditions_met_marker_unconfirmed")).slice(0,hierarchy.policy.max_uncertain_candidates).map(m=>({id:m.id,title:m.title,reason:m.status})),
   completed_in_simulation:evaluated.missions.filter(m=>m.status==="completed_in_simulation").map(m=>m.id),
   conflicts:evaluated.missions.filter(m=>m.conflicts.length).map(m=>({id:m.id,notes:m.conflicts})),
   never_infer_story_order_from_id:true
 };
 const atlasView={
   families:nodes.filter(x=>x.parent==="atlas").map(n=>({id:n.id,title:n.title,atlas_refs:n.atlas_refs||[],source_maturity:n.source_maturity||"REVIEW_PENDING"})),
   selected:focus?.startsWith("atlas.")?{id:focus,title:byId[focus].title,atlas_refs:byId[focus].atlas_refs||[],source_refs:byId[focus].source_refs||[]}:null,
   mode:"READ_ONLY_EXPLANATION"
 };
 const delta=computeTransition(graph,scenario,opts.previous_scenario||null);
 return {version:"0.2.0",source:"SIMULATION_ONLY",scenario_id:scenario.scenario_id||"anonymous",surface,
   trailhead,
   content:surface==="project"?detail:surface==="missions"?chapterBoard:surface==="atlas"?atlasView:trailhead,
   related:{mission_board:chapterBoard,project_detail:detail,atlas_navigation:atlasView},
   newly_relevant_since_supplied_prior_scenario:delta,
   source_authority:"Original GameGuide mission files own full guide, Hub Atlas owns mechanic explanations",
   writes_performed:0,actual_game_state_connected:false
 };
}


// Pure regression utilities. Caller supplies local JSON (no campaign, save or network reads).
export function validateProgressionHierarchy(graph,hierarchy){
 const errors=[];
 const nodes=hierarchy.nodes||[];
 const byId=indexById(nodes);
 if(Object.keys(byId).length!==nodes.length)errors.push("duplicate hierarchy node IDs");
 if(nodes.filter(n=>n.parent===null).length!==1)errors.push("expected exactly one navigation root");
 const sourceCatalog=hierarchy.source_catalog||{};
 const capabilityIds=new Set((graph.capabilities||[]).map(c=>c.id));
 const types=new Set(hierarchy.node_types||[]);
 const relTypes=new Set(hierarchy.relationship_types||[]);
 for(const n of nodes){
   if(!types.has(n.type))errors.push("unknown node type "+n.id);
   if(n.parent!==null&&!byId[n.parent])errors.push("parent missing for "+n.id);
   for(const x of n.source_refs||[])if(!sourceCatalog[x])errors.push("source missing: "+n.id+" "+x);
   for(const x of [n.capability_ref,n.primary_capability].filter(Boolean))if(!capabilityIds.has(x))errors.push("capability missing: "+n.id+" "+x);
   const visited=new Set();let cur=n;
   while(cur){
     if(visited.has(cur.id)){errors.push("navigation cycle "+n.id);break;}
     visited.add(cur.id);
     cur=cur.parent?byId[cur.parent]:null;
   }
 }
 for(const e of hierarchy.relationships||[]){
   if(!byId[e.from]||!byId[e.to])errors.push("relationship endpoint missing "+e.from+" -> "+e.to);
   if(!relTypes.has(e.type))errors.push("relationship type unknown "+e.type);
   for(const src of e.source_refs||[])if(!sourceCatalog[src])errors.push("relationship source missing "+src);
 }
 const gold=graph.missions||[];
 if(gold.length!==18||new Set(gold.map(x=>x.id)).size!==18||gold.some(x=>x.gold_identity!==1))errors.push("Chapter 2 base Gold identity invariant failed");
 if((graph.non_medal_stages||[]).some(x=>x.gold_identity!==0))errors.push("Non-medal stage has Gold identity");
 const campTracks=nodes.filter(x=>x.parent==="project.camp").map(x=>x.id);
 for(const expected of ["camp.economy","camp.facilities","camp.pearson","camp.life"])if(!campTracks.includes(expected))errors.push("camp track missing "+expected);
 return {passed:errors.length===0,errors,nodes:nodes.length,typed_relationships:(hierarchy.relationships||[]).length,camp_tracks:campTracks.length};
}

export function verifyHierarchyScenarioSuite(graph,hierarchy,baseFixtures,hierarchyFixtures){
 const errors=[],passed=[];
 const base=Object.fromEntries((baseFixtures.scenarios||[]).map(x=>[x.scenario.scenario_id,x.scenario]));
 for(const test of hierarchyFixtures.scenarios||[]){
   let input=base[test.fixture];
   if(!input){errors.push({id:test.id,reason:"missing baseline fixture"});continue;}
   input=JSON.parse(JSON.stringify(input));
   if(test.scenario_patch)Object.assign(input,test.scenario_patch);
   input.scenario_id=test.id;
   const opts={...test.options};
   if(opts.previous_fixture){
     const previous=base[opts.previous_fixture];
     if(!previous){errors.push({id:test.id,reason:"previous fixture missing"});continue;}
     opts.previous_scenario=previous;
     delete opts.previous_fixture;
   }
   let view;
   try{view=composeProgressionView(graph,hierarchy,input,opts);}
   catch(e){errors.push({id:test.id,reason:String(e)});continue;}
   const t=view.trailhead,d=view.related.project_detail,a=view.related.atlas_navigation;
   const obs={
     surface:view.surface,
     observed_ids:t.story_choices.map(x=>x.id),
     project_id:t.featured_project?.id??null,
     project_stage:d.project.stage,
     outing_ref:t.outing?.activity_ref??null,
     alert_id:t.one_primary_alert?.id??null,
     priority:t.default_next,
     control:t.control,
     focus:d.focused_id,
     child_ids:d.children.map(x=>x.id),
     track_availability:Object.fromEntries(d.children.map(x=>[x.id,x.availability])),
     selected_track_status:d.selected_track?.availability??null,
     newly_relevant_ids:view.newly_relevant_since_supplied_prior_scenario.map(x=>x.id),
     marker_rule_conflicts:t.marker_rule_conflicts.map(x=>x.id),
     additional_observed_count:t.additional_observed_count,
     atlas_selected:a.selected?.id||null,
     atlas_family_refs:a.selected?.atlas_refs||[],
     board_candidate_first:view.related.mission_board.may_require_observation[0]?.id||null,
     actual_state_connected:view.actual_game_state_connected,
     outgoing_user_state_writes:view.writes_performed,
     no_forced_next_mission:t.default_next==="PLAYER_CHOICE",
     gold_awarded_claim:!!view.earned_gold_claim,
     all_unobserved_missions_hidden:t.unresolved_candidates.length===0
   };
   const fail=[];
   for(const [key,expected] of Object.entries(test.expect||{})){
     if(key==="track_availability"){
       for(const [id,expectStatus] of Object.entries(expected))if(obs.track_availability[id]!==expectStatus)fail.push(key+"."+id+" expected "+expectStatus+" actual "+obs.track_availability[id]);
     } else if(JSON.stringify(obs[key])!==JSON.stringify(expected))fail.push(key+" expected "+JSON.stringify(expected)+" actual "+JSON.stringify(obs[key]));
   }
   if(view.writes_performed!==0||view.actual_game_state_connected!==false)fail.push("violated no-game-connection invariant");
   if(fail.length)errors.push({id:test.id,reason:fail});
   else passed.push(test.id);
 }
 return {passed:errors.length===0,checks:(hierarchyFixtures.scenarios||[]).length,passing:passed.length,passing_ids:passed,errors};
}
