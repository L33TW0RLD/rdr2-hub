// RDR2 Hub Opportunity Lifecycle v0.4
// Pure synthetic fixture evaluation. This module does NOT connect to RDR2, the campaign, game saves or a clock.
import { evaluateScenario } from "./evaluate_v0_1.mjs";
import { planProgressionWindow } from "./window_planner_v0_3.mjs";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const COMPLETED="completed:";
function triListed(positive,negative,key){
 if((positive||[]).includes(key))return true;
 if((negative||[]).includes(key))return false;
 return null;
}
function completed(s,id){return triListed(s.completed,s.not_completed,id);}
function marker(s,id){return triListed(s.observed_markers,s.markers_absent,id);}
function flag(s,id){return triListed(s.flags_true,s.flags_false,id);}
function indexed(records){return Object.fromEntries(records.map(x=>[x.id,x]));}
function capsule(op,status,notes,extra={}){
 return {id:op.id,title:op.title,kind:op.kind,
   status,notes:[...new Set(notes)],project_ref:op.project_ref,goal_tags:op.goal_tags,source_refs:op.source_refs,
   maturity:"GENERAL_RULES_RESEARCH_REVIEW_PENDING",
   source_of_availability:"SYNTHETIC_FIXTURE",
   confirmed_actual_player_progress:false,
   ...extra
 };
}
function opportunityState(op,graph,simulation,scenario){
 const selector=op.selector||{},type=selector.type,ref=selector.ref;
 const chapterEnded=completed(scenario,"m024")===true;
 let status="UNKNOWN",notes=[],conflict=false,observable=false,confidence="UNKNOWN";
 if(type==="capability"){
   const cap=simulation.capabilities.find(x=>x.id===ref);
   if(!cap)throw Error("Missing capability "+ref);
   const map={
     observed_in_simulation:"OBSERVED_ACCESS",
     normal_rule_met_not_observed:"ELIGIBLE_UNCONFIRMED",
     necessary_condition_not_met:"NORMAL_GATE_UNMET",
     explicitly_unavailable:"UNAVAILABLE_IN_FIXTURE",
     availability_unknown:"UNKNOWN"
   };
   status=map[cap.status]||"UNKNOWN";observable=status==="OBSERVED_ACCESS";
   confidence=cap.status==="observed_in_simulation"?"EXPLICIT_FIXTURE_OBSERVATION":"GENERAL_ROUTE_NOT_LIVE_VALIDATED";
   if(cap.conflict){
     status="EVIDENCE_CONFLICT";conflict=true;observable=true;
     notes.push("The fixture observes a capability whose documented necessary route is explicitly unmet; inspect source and menu rather than silently overriding.");
   }else if(status==="ELIGIBLE_UNCONFIRMED")notes.push("Normal prerequisite appears satisfied in the fictional facts, but access or ownership was not observed.");
   else if(status==="NORMAL_GATE_UNMET")notes.push("A documented normal-route prerequisite is explicitly unmet in the fictional facts.");
   else if(status==="UNAVAILABLE_IN_FIXTURE")notes.push("The fictional scenario explicitly says this system is unavailable now; no permanent lock is implied.");
   else if(status==="UNKNOWN")notes.push("No decisive observation or prerequisite evidence.");
   else notes.push("Feature access explicitly observed in the fictional scenario; no equipment, purchase, achievement or crafting result inferred.");
 }else if(type==="warning"){
   const active=simulation.warnings.some(x=>x.id===ref);
   const resolved=op.resolved_by?.startsWith(COMPLETED)?completed(scenario,op.resolved_by.slice(COMPLETED.length)):null;
   const explicitOffer=ref==="camp_activity_window"?flag(scenario,"camp_companion_activity_observed"):null;
   const rawIndicator=ref==="urgent_john_wagon"?flag(scenario,"john_wagon_task_active"):ref==="before_chapter_exit"?
       (flag(scenario,"chapter2_exit_imminent")===true||marker(scenario,"m024")===true?true:null):explicitOffer;
   if(resolved===true&&rawIndicator===true){status="EVIDENCE_CONFLICT";conflict=true;observable=true;notes.push("Fixture simultaneously reports resolved and still-active status; no automatic conclusion.");}
   else if(resolved===true){status="RESOLVED_IN_FIXTURE";notes.push("A named fictional Story completion is supplied, but no Gold medal or save is inferred.");}
   else if(active){status=ref==="camp_activity_window"?"OFFER_OBSERVED":"ACTIVE_RISK";observable=true;notes.push(ref==="camp_activity_window"?
     "Camp invitation explicitly observed in the fixture; achievement qualification still requires checking.":
     "Credible Story/chapter warning activated by explicit fictional facts, not a clock estimate.");}
   else if(ref==="camp_activity_window"&&chapterEnded){status="CHAPTER_WINDOW_PASSED_UNVERIFIED";notes.push("Chapter departure supplied; the general camp-opportunity window may have closed, but individual losses and missed activities are NOT confirmed.");}
   else if(ref==="camp_activity_window"&&explicitOffer===false){status="OFFER_NOT_VISIBLE_NOW";notes.push("The fixture says no current camp offer; this is not evidence of permanent expiry.");}
   else if(ref==="urgent_john_wagon"&&rawIndicator===false){status="OFFER_NOT_VISIBLE_NOW";notes.push("Wagon assignment explicitly not active, which is not proof of Gold completion or irreversible skip.");}
   else {status="UNKNOWN";notes.push("No current observed risk. Absence of evidence is not proof that all future events are safe.");}
   confidence=observable?"EXPLICIT_FIXTURE_EVENT":"UNCONFIRMED_OR_CONTEXTUAL";
 }else if(type==="story_marker"){
   const done=completed(scenario,ref),m=marker(scenario,ref);
   const graphMission=simulation.missions.find(x=>x.id===ref);
   if(!graphMission)throw Error("Missing mission "+ref);
   if(done===true&&m===true){status="EVIDENCE_CONFLICT";conflict=true;observable=true;notes.push("The same fictional mission is both completed and still offered; stage mapping or input may be stale.");}
   else if(done===true){status="RESOLVED_IN_FIXTURE";notes.push("This source stage is completed in the fictional scenario; medal outcome is NOT known.");}
   else if(m===true){
     status=graphMission.conflicts.length?"EVIDENCE_CONFLICT":"OFFER_OBSERVED";
     conflict=graphMission.conflicts.length>0;
     observable=true;
     notes.push(conflict?"A marker is observed even though a supposed prerequisite is disputed; the marker remains visible.":"The optional Story marker is explicitly visible in the fictional scenario.");
   }
   else if(m===false){status="OFFER_NOT_VISIBLE_NOW";notes.push("This marker is not visible now in the fixture. It is NOT automatically completed, closed or permanently missable.");}
   else if(graphMission.status==="necessary_conditions_met_marker_unconfirmed"){
     status="ELIGIBLE_UNCONFIRMED";notes.push("Necessary conditions appear satisfied, not sufficient to prove a visible Story marker.");
   }
   else {status="UNKNOWN";notes.push("Exact Story availability is not established by this fictional snapshot.");}
   if(chapterEnded&&!["RESOLVED_IN_FIXTURE","EVIDENCE_CONFLICT"].includes(status))
     notes.push("Later-chapter availability/expiry is not proven for this optional strand; do not auto-label it lost.");
   confidence=observable?"EXPLICIT_FIXTURE_MARKER":"PUBLISHED_PRECONDITIONS_INCOMPLETE";
 }else if(type==="project"){
   const proj=simulation.projects.find(x=>x.id===ref);if(!proj)throw Error("Missing project "+ref);
   if(proj.stage==="prerequisites_unconfirmed"){status="PROJECT_GATE_UNKNOWN";notes.push("The project is discoverable but its first milestone has no confirmed fictional prerequisite.");}
   else {status="PROJECT_MILESTONE_CONTEXT";notes.push("Fictional project milestone: "+proj.stage+". A project-stage label is NOT proof of a finished upgrade.");}
   return capsule(op,status,notes,{conflict:false,observable:false,milestone:proj.stage,project_next_step:proj.next_action,confidence:"OPTIONAL_PROJECT_GUIDANCE"});
 }else if(type==="opportunity"){
   const available=simulation.opportunities.some(x=>x.id===ref);
   if(chapterEnded){status="OUTSIDE_WINDOW";notes.push("The scenario passed the Chapter 2 finale; reusing Chapter 2 arrival orientation is inappropriate.");}
   else if(scenario.control==="mission_chained"||scenario.control==="unknown"){status="CONTROL_UNAVAILABLE";notes.push("The scenario does not establish normal free-roam control.");}
   else if(scenario.control==="camp_limited"){status="CONTROL_UNAVAILABLE";notes.push("Camp-only control is not permission for an outdoor reconnaissance outing.");}
   else if(available){status="GENERAL_WINDOW";notes.push("This is a general optional free-roam context, not a specific observed quest or user completed action.");}
   else if(flag(scenario,"chapter2_open")===false){status="OUTSIDE_WINDOW";notes.push("Chapter 2 is explicitly not open in the fixture.");}
   else{status="UNKNOWN";notes.push("General arrival opportunity not established by fixture.");}
   confidence="GENERAL_ROUTE_NOT_LIVE_VALIDATED";
 }else throw Error("Unsupported lifecycle selector "+String(type));
 return capsule(op,status,notes,{conflict,observable,confidence});
}
function transition(before,after,hasPrevious){
 if(!hasPrevious)return "NO_PRIOR_COMPARISON";
 if(after.status==="EVIDENCE_CONFLICT")return "CONTRADICTORY_EVIDENCE";
 if(before.status===after.status&&before.milestone===after.milestone)return "UNCHANGED";
 if(before.status==="ACTIVE_RISK"&&after.status==="RESOLVED_IN_FIXTURE")return "RISK_RESOLVED";
 if(after.status==="ACTIVE_RISK")return "ACTIVATED_RISK";
 if(["OFFER_OBSERVED","OBSERVED_ACCESS"].includes(after.status)&&
   !["OFFER_OBSERVED","OBSERVED_ACCESS"].includes(before.status))return "BECAME_OBSERVED";
 if(before.status==="OFFER_OBSERVED"&&after.status==="OFFER_NOT_VISIBLE_NOW")return "OFFER_NO_LONGER_VISIBLE";
 if(after.status==="CHAPTER_WINDOW_PASSED_UNVERIFIED")return "CHAPTER_WINDOW_PASSED_UNVERIFIED";
 if(after.status==="PROJECT_MILESTONE_CONTEXT"&&after.milestone!==before.milestone)return "STAGE_CHANGED";
 if(after.status==="ELIGIBLE_UNCONFIRMED"&&before.status!=="ELIGIBLE_UNCONFIRMED")return "BECAME_ELIGIBLE";
 if(after.status==="UNKNOWN")return "WENT_UNKNOWN";
 return "STATE_CHANGED";
}
function goalsMatch(op,goalScope,intent){
 const goal=op.goal_tags||[];
 const selected=(goalScope||[]).some(x=>goal.includes(x));
 const interest=(intent==="camp"&&op.project_ref==="project.camp")||
   (["horse","horses"].includes(intent)&&op.project_ref==="project.horse")||
   (["mission","story"].includes(intent)&&["optional_story","urgent_story"].includes(op.kind));
 return selected||interest;
}
export function validateOpportunityPolicy(graph,hierarchy,policy){
 const errors=[],capIds=new Set(graph.capabilities.map(x=>x.id)),warningIds=new Set(graph.warnings.map(x=>x.id)),
   missions=new Set(graph.missions.map(x=>x.id)),projects=new Set(graph.projects.map(x=>x.id)),
   windows=new Set(graph.opportunities.map(x=>x.id)),parentIds=new Set(hierarchy.nodes.map(x=>x.id)),
   sourceIds=new Set(Object.keys(graph.sources));
 const known={capability:capIds,warning:warningIds,story_marker:missions,project:projects,opportunity:windows};
 const ids=new Set();
 if(policy.scope!=="SYNTHETIC_SCENARIO_ONLY")errors.push("Policy is not simulation only");
 for(const op of policy.opportunities||[]){
   if(ids.has(op.id))errors.push("Duplicate lifecycle opportunity "+op.id);ids.add(op.id);
   if(!known[op.selector?.type]?.has(op.selector.ref))errors.push("Unknown selector "+op.id);
   if(op.project_ref&&!parentIds.has(op.project_ref))errors.push("Broken hierarchy reference "+op.id);
   for(const src of op.source_refs||[])if(!sourceIds.has(src))errors.push("Broken source ref "+op.id+" "+src);
   for(const g of op.goal_tags||[])if(!policy.goals.includes(g))errors.push("Unrecognized goal "+g);
   if(op.resolved_by){
     if(!op.resolved_by.startsWith(COMPLETED)||!missions.has(op.resolved_by.slice(COMPLETED.length)))errors.push("Bad resolution predicate "+op.id);
   }
 }
 for(const id of Object.values(policy.planner_key_mappings||{}))if(!ids.has(id))errors.push("Planner mapping to unknown opportunity "+id);
 if(policy.hard_safety?.no_live_campaign_connection!==true)errors.push("Must prohibit actual campaign connections");
 if(policy.hard_safety?.claim_no_permanent_loss_without_explicit_proof!==true)errors.push("Must prohibit inferred permanent loss");
 return {passed:errors.length===0,errors,count:ids.size,source:"SYNTHETIC_ONLY"};
}
export function composeOpportunityLifecycle(graph,hierarchy,plannerPolicy,lifecyclePolicy,scenario,options={}){
 if(lifecyclePolicy.scope!=="SYNTHETIC_SCENARIO_ONLY")throw Error("Only synthetic lifecycle policy supported");
 if(!scenario?.synthetic||scenario.source!=="SIMULATION_FIXTURE")throw Error("Lifecycle input must be explicit synthetic fixture");
 const prevScenario=options.previous_scenario||null;
 if(prevScenario&&(!prevScenario.synthetic||prevScenario.source!=="SIMULATION_FIXTURE"))throw Error("Lifecycle previous input must be synthetic");
 const plannerOptions={...options};delete plannerOptions.requested_opportunity_id;
 const planner=planProgressionWindow(graph,hierarchy,plannerPolicy,scenario,plannerOptions);
 const now=evaluateScenario(graph,scenario);
 const prev=prevScenario?evaluateScenario(graph,prevScenario):null;
 const opIds=new Set(lifecyclePolicy.opportunities.map(x=>x.id));
 if(options.requested_opportunity_id&&!opIds.has(options.requested_opportunity_id))throw Error("Unknown requested opportunity ID");
 const records=lifecyclePolicy.opportunities.map(op=>{
   const current=opportunityState(op,graph,now,scenario);
   const previous=prev?opportunityState(op,graph,prev,prevScenario):null;
   return {...current,previous_status:previous?.status??null,
      previous_milestone:previous?.milestone??null,
      transition:transition(previous||{status:"UNKNOWN",milestone:null},current,!!prev)};
 });
 const index=indexed(records);
 const activeRisks=records.filter(x=>x.status==="ACTIVE_RISK");
 const riskRank=new Map(lifecyclePolicy.hard_safety.risk_foreground_ids.map((x,i)=>[x,i]));
 activeRisks.sort((a,b)=>(riskRank.get(a.id)??99)-(riskRank.get(b.id)??99));
 const selectedByPlanner=lifecyclePolicy.planner_key_mappings?.[planner.primary?.id]||null;
 const urgent=activeRisks[0]||null;
 let featured=null,reason=null;
 if(urgent){featured=urgent;reason="Activated Story/chapter risk outranks optional opportunities";}
 else if(options.requested_opportunity_id){featured=index[options.requested_opportunity_id];reason="Explicit request; lifecycle status still remains conditional";}
 else if(selectedByPlanner){featured=index[selectedByPlanner];reason="Chosen by the v0.3 event planner";}
 const goalScope=options.goals||[];
 const intent=options.intent||"passive";
 const context=records.filter(x=>x.id!==featured?.id&&(
   x.status==="OFFER_OBSERVED"&&goalsMatch(x,goalScope,intent)||
   x.status==="EVIDENCE_CONFLICT"||
   ["OFFER_NO_LONGER_VISIBLE","CHAPTER_WINDOW_PASSED_UNVERIFIED"].includes(x.transition)||
   x.status==="ELIGIBLE_UNCONFIRMED"&&x.transition==="BECAME_ELIGIBLE"&&goalsMatch(x,goalScope,intent)
 )).slice(0,lifecyclePolicy.hard_safety.max_context_items)
   .map(x=>({id:x.id,title:x.title,status:x.status,transition:x.transition,note:x.notes[0]}));
 const unverifiedLoss=records.filter(x=>x.status==="CHAPTER_WINDOW_PASSED_UNVERIFIED").map(x=>x.id);
 const inconsistent=records.filter(x=>x.status==="EVIDENCE_CONFLICT").map(x=>x.id);
 const attention=featured?{
   state:"FOREGROUND",id:featured.id,title:featured.title,lifecycle_status:featured.status,
   transition:featured.transition,reason,notes:featured.notes
 }:{state:"SILENT",id:null,title:null,reason:"No new verified fictional opportunity or explicit request requires the foreground"};
 // A presentation receipt may suppress repeated text; it must NEVER change the actual lifecycle status.
 const contradictions=[];
 if(featured&&["RESOLVED_IN_FIXTURE","OUTSIDE_WINDOW","OFFER_NOT_VISIBLE_NOW"].includes(featured.status)){
   contradictions.push("Planner/explicit request selected a resolved, outside-window or currently unavailable item; display needs confirmation rather than action");
 }
 if(urgent&&planner.mode!=="urgent_story"&&planner.mode!=="chapter_exit_review")
   contradictions.push("Lifecycle safety priority differs from planner safety mode");
 return {
   version:"0.4.0",source:"SIMULATION_ONLY",scenario_id:scenario.scenario_id||"anonymous",
   attention,context,opportunities:records,urgent_risks:activeRisks.map(x=>x.id),
   ambiguous_closure_not_counted_as_missed:unverifiedLoss,
   evidence_conflicts:inconsistent,diagnostics:contradictions,
   planner:{mode:planner.mode,primary_id:planner.primary?.id??null,alert_id:planner.alert?.id??null,
     story_choices:planner.story_choices,featured_project:planner.featured_project,
     suggested_outing:planner.suggested_outing,receipts:planner.next_receipts},
   actual_game_state_connected:false,writes_performed:0,
   no_gameplay_results_inferred:true
 };
}


export function verifyOpportunityLifecycleSuite(graph,hierarchy,plannerPolicy,lifecyclePolicy,suite){
 const passed=[],failed=[],outputs={};
 const byId=records=>Object.fromEntries(records.map(x=>[x.id,x]));
 for(const t of suite.cases||[]){
   const scenario=suite.states?.[t.state];
   if(!scenario){failed.push({id:t.id,errors:["Missing scenario fixture "+t.state]});continue;}
   const options={...t.options};
   if(t.previous_state)options.previous_scenario=suite.states?.[t.previous_state];
   if(t.receipts_from){
     if(!outputs[t.receipts_from]){failed.push({id:t.id,errors:["Missing presentation-receipt source "+t.receipts_from]});continue;}
     options.receipts=outputs[t.receipts_from].planner.receipts;
   }
   let output;
   try{output=composeOpportunityLifecycle(graph,hierarchy,plannerPolicy,lifecyclePolicy,scenario,options);}
   catch(e){failed.push({id:t.id,errors:[String(e)]});continue;}
   outputs[t.id]=output;
   const all=byId(output.opportunities),expected=t.expect||{},errs=[];
   for(const [key,exp] of Object.entries(expected)){
     if(key==="statuses"||key==="transitions"){
       for(const [id,want] of Object.entries(exp)){
         const actual=key==="statuses"?all[id]?.status:all[id]?.transition;
         if(actual!==want)errs.push(key+" "+id+" expected "+want+" received "+actual);
       }
     }else if(["context_ids","conflict_ids","unverified_loss_ids"].includes(key)){
       const values=key==="context_ids"?output.context.map(x=>x.id):key==="conflict_ids"?output.evidence_conflicts:output.ambiguous_closure_not_counted_as_missed;
       for(const want of exp)if(!values.includes(want))errs.push(key+" missing "+want);
     }else if(key==="context_excludes"){
       const values=output.context.map(x=>x.id);
       for(const unwanted of exp)if(values.includes(unwanted))errs.push(key+" unexpectedly includes "+unwanted);
     }else if(key==="forbid_observed"){
       for(const id of exp)if(all[id]?.observable===true)errs.push("Unobserved marker falsely observed "+id);
     }else if(key==="forbid_resolved"){
       for(const id of exp)if(all[id]?.status==="RESOLVED_IN_FIXTURE")errs.push("Unconfirmed mission falsely resolved "+id);
     }else if(key==="foreground_not"||key==="forbid_foreground"){
       const disallowed=Array.isArray(exp)?exp:[exp];
       if(disallowed.includes(output.attention.id))errs.push("Undesired foreground "+output.attention.id);
     }else{
       const value={
         attention_id:output.attention.id,
         attention_state:output.attention.state,
         attention_status:output.attention.lifecycle_status,
         project_id:output.planner.featured_project?.id??null,
         unverified_loss_count:output.ambiguous_closure_not_counted_as_missed.length,
         planner_mode:output.planner.mode,
         alert_id:output.planner.alert_id,
         no_gameplay_results_inferred:output.no_gameplay_results_inferred
       }[key];
       if(JSON.stringify(value)!==JSON.stringify(exp))errs.push(key+" expected "+JSON.stringify(exp)+" received "+JSON.stringify(value));
     }
   }
   if(output.actual_game_state_connected!==false||output.writes_performed!==0||output.no_gameplay_results_inferred!==true)errs.push("No live-state connection invariant broken");
   if(output.attention.state!=="SILENT"&&output.attention.state!=="FOREGROUND")errs.push("Unrecognized headline state");
   if(output.urgent_risks.length&&output.attention.id!==output.urgent_risks[0])errs.push("Activated highest-priority risk not foreground");
   if(new Set(output.opportunities.map(x=>x.id)).size!==output.opportunities.length)errs.push("Repeated opportunity record IDs");
   if(output.ambiguous_closure_not_counted_as_missed.some(id=>all[id]?.status!=="CHAPTER_WINDOW_PASSED_UNVERIFIED"))errs.push("Inaccurate ambiguous closure label");
   if(errs.length)failed.push({id:t.id,errors:errs});else passed.push(t.id);
 }
 const rejected=[],notRejected=[];
 for(const t of suite.negative_tests||[]){
   const base=suite.states?.[t.state];
   if(!base){notRejected.push({id:t.id,reason:"Unknown base fixture"});continue;}
   const state=JSON.parse(JSON.stringify(base)),options={intent:"passive",goals:["all_gold"],verbosity:"adaptive"};
   let policy=lifecyclePolicy;
   switch(t.mutation){
     case "source_wrong":state.source="REAL_GAME";break;
     case "synthetic_false":state.synthetic=false;break;
     case "prior_source_wrong":options.previous_scenario={...state,source:"REAL_GAME"};break;
     case "requested_id_bad":options.requested_opportunity_id="OP.C2.NOT_REGISTERED";break;
     case "receipt_kind_bad":options.receipts={kind:"REAL_GAME_ACTION",displayed_prompt_keys:[],displayed_alert_keys:[]};break;
     case "conflicting_flag":state.flags_false=[...(state.flags_false||[]),"chapter2_open"];break;
     case "policy_scope_wrong":policy={...lifecyclePolicy,scope:"REAL_PLAYER_STATE"};break;
     default:notRejected.push({id:t.id,reason:"Unknown mutation type "+t.mutation});continue;
   }
   try{
     composeOpportunityLifecycle(graph,hierarchy,plannerPolicy,policy,state,options);
     notRejected.push({id:t.id,reason:"Invalid input accepted"});
   }catch(e){
     const err=String(e);
     if(err.includes(t.message))rejected.push(t.id);
     else notRejected.push({id:t.id,reason:"Unexpected failure: "+err});
   }
 }
 return {passed:failed.length===0&&notRejected.length===0,scenarios:(suite.cases||[]).length,
   passing:passed.length,passing_ids:passed,
   invalid_inputs:(suite.negative_tests||[]).length,rejected_invalid_inputs:rejected.length,
   failures:failed,guard_failures:notRejected,source:"SYNTHETIC_ONLY",writes_performed:0};
}

// Node CLI reads only the exact registered, repository-local JSON contracts and test fixtures.
if(process.argv[1]&&fileURLToPath(import.meta.url)===process.argv[1]){
 const path=dirname(fileURLToPath(import.meta.url)),load=name=>JSON.parse(readFileSync(join(path,name),"utf8"));
 const graph=load("chapter_02_graph_v0_1.json");
 const hierarchy=load("hierarchy_v0_2.json");
 const previousPolicy=load("planner_policy_v0_3.json");
 const lifecyclePolicy=load("opportunity_policy_v0_4.json");
 const suite=load("opportunity_scenarios_v0_4.json");
 const integrity=validateOpportunityPolicy(graph,hierarchy,lifecyclePolicy);
 const tests=verifyOpportunityLifecycleSuite(graph,hierarchy,previousPolicy,lifecyclePolicy,suite);
 console.log(JSON.stringify({integrity,tests},null,2));
 if(!integrity.passed||!tests.passed)process.exitCode=1;
}
