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
 const suggestedOuting=!isBlocked&&preferred?{source_window:preferred.id,activity_ref:preferred.outings[0],why_now:preferred.title,confidence:preferred.confidence}:null;
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
