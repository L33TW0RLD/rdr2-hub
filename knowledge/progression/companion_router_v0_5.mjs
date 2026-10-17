// Living Adventure Companion v0.5 — synthetic route and source-request composer.
// Requires explicit fictional scenario fixtures. NO GameGuide/Atlas fetch or gameplay file writes.
import { composeProgressionView } from "./view_model_v0_2.mjs";
import { composeOpportunityLifecycle } from "./opportunity_lifecycle_v0_4.mjs";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const NAV_KIND="SYNTHETIC_NAV_SESSION";
function nodeIndex(hierarchy){return Object.fromEntries(hierarchy.nodes.map(n=>[n.id,n]));}
function missionIndex(graph){return Object.fromEntries(graph.missions.map(m=>[m.id,m]));}
function ensureScenario(scenario){
 if(!scenario?.synthetic||scenario.source!=="SIMULATION_FIXTURE")throw Error("Only synthetic Chapter 2 scenario input is allowed");
 if(scenario.chapter!=="02")throw Error("Unsupported chapter fixture");
}
function ensureSession(session,route){
 if(session?.kind!==NAV_KIND||!session.screen||!Array.isArray(session.stack))throw Error("Navigation session must be synthetic");
 if(session.stack.length>route.scenario_guard.max_depth)throw Error("Navigation depth exceeded");
}
function createFrame(type,extras={}){
 return {type,...extras};
}
function validateFrame(frame,hierarchy,graph){
 const n=nodeIndex(hierarchy),m=missionIndex(graph);
 if(!["home","story_board","project","track","atlas_reference","mission_reference"].includes(frame.type))throw Error("Unsupported navigation frame");
 if(["project","track","atlas_reference"].includes(frame.type)&&!n[frame.node_id])throw Error("Navigation frame references unknown hierarchy node");
 if(frame.type==="project"&&n[frame.node_id].type!=="project")throw Error("Project frame must point at a project node");
 if(frame.type==="track"&&!["track","feature"].includes(n[frame.node_id].type))throw Error("Track frame must point at a track or feature");
 if(frame.type==="atlas_reference"&&n[frame.node_id].type!=="atlas_group")throw Error("Atlas frame must point at an existing family grouping");
 if(frame.type==="mission_reference"){
   if(!m[frame.mission_id])throw Error("Mission frame must point at an existing standard Chapter 2 Gold identity reference");
   if(!["observed_marker","reference_only"].includes(frame.launch_class))throw Error("Mission launch class missing");
 }
}
function pathRoot(parentId,nodes){
 let x=nodes[parentId];const seen=new Set();
 while(x){if(seen.has(x.id))throw Error("Navigation cycle detected");seen.add(x.id);
   if(x.type==="project")return x.id;
   x=x.parent?nodes[x.parent]:null;
 }
 return null;
}
function allowedAtlasLink(current,topic,route,hierarchy){
 const n=nodeIndex(hierarchy);
 if(!n[topic]||n[topic].type!=="atlas_group")return false;
 if(current.type==="home"||current.type==="story_board"||current.type==="mission_reference")return true;
 if(current.type==="atlas_reference")return true;
 if(current.type==="project"||current.type==="track"){
   const related=route.atlas_crosslinks[current.node_id];
   return related===topic||hierarchy.relationships.some(e=>e.from===current.node_id&&e.to===topic&&e.type==="EXPLAINED_BY");
 }
 return false;
}
function sourceMetadata(frame,graph,hierarchy,contract,returning){
 const node=nodeIndex(hierarchy)[frame.node_id];
 if(frame.type==="mission_reference"){
   const m=missionIndex(graph)[frame.mission_id];
   const prefix="L33TW0RLD/rdr2/";
   if(!m.canonical_dossier.startsWith(prefix))throw Error("Untrusted original GameGuide source path");
   const path=m.canonical_dossier.slice(prefix.length);
   if(!path.startsWith(contract.authority.story.file_namespace)||!path.endsWith(".md")||path.includes(".."))throw Error("GameGuide dossier outside expected namespace");
   return {
     status:"NEEDS_EXTERNAL_SOURCE_READ",contents_loaded:false,
     owner:"ORIGINAL_GAMEGUIDE",repository:contract.authority.story.repository,path,
     protocol:contract.authority.story.protocol,render_requirement:contract.authority.story.full_guide_requirement,
     access_reason:frame.launch_class==="reference_only"?"REFERENCE_NOT_GAME_AVAILABILITY":"OBSERVED_MARKER_IN_FICTIONAL_FIXTURE",
     needs_full_reload_on_return:returning===true,
     selection_title:m.title,medal_outcome:"UNKNOWN_NOT_READ_FROM_REAL_CAMPAIGN",
     checklist_restored:false
   };
 }
 if(frame.type==="atlas_reference"){
   const sourceKeys=node.source_refs||[];
   const urls=sourceKeys.map(k=>hierarchy.source_catalog[k]).filter(Boolean);
   if(!urls.length)throw Error("Atlas group has no owning research source reference");
   return {
     status:"NEEDS_EXTERNAL_SOURCE_READ",contents_loaded:false,
     owner:"HUB_SYSTEMS_ATLAS",repository:contract.authority.atlas.repository,
     source_urls:urls,atlas_refs:node.atlas_refs||[],
     research_status:contract.authority.atlas.research_maturity,
     source_topic:node.title,
     needs_full_reload_on_return:returning===true,
     source_research_adopted:false,
     lesson_output:"PENDING_EXTERNAL_SOURCE_READ_NO_TACTICS_GENERATED"
   };
 }
 return null;
}
function currentFrame(session){return session.screen;}
function appHeader(scenario,screen,life,route){
 const major=life.urgent_risks[0]||null;
 const label=screen.type==="home"?"Free Roam":screen.type==="story_board"?"Mission Control":screen.type==="mission_reference"?"Mission Control / Full Field Guide":
 screen.type==="atlas_reference"?"Systems Atlas":"Free Roam / Projects";
 return {
   chapter:"Chapter 2",known_area:"Horseshoe Overlook (fictional scenario)",area_is_live_location:false,
   content_source:"SIMULATION_FIXTURE",surface_label:label,
   selected_focus:screen.type==="mission_reference"?screen.mission_id:screen.node_id||null,
   one_active_safety_alert:major?{opportunity_id:major,source:"synthetic activation; claim still research pending"}:null,
   spoiler_budget:route.scenario_guard.default_spoiler_budget
 };
}
function presentScreen(session,scenario,graph,hierarchy,plannerPolicy,lifecyclePolicy,route,opts={},returning=false){
 ensureScenario(scenario);ensureSession(session,route);
 const screen=currentFrame(session);validateFrame(screen,hierarchy,graph);
 const life=composeOpportunityLifecycle(graph,hierarchy,plannerPolicy,lifecyclePolicy,scenario,{
   verbosity:opts.verbosity||"adaptive",goals:opts.goals||["all_gold","immersion"],intent:opts.intent||"passive",
   previous_scenario:opts.previous_scenario||null,receipts:opts.receipts||undefined
 });
 const story=composeProgressionView(graph,hierarchy,scenario,{surface:"missions"});
 const project=(screen.type==="project"||screen.type==="track")?
   composeProgressionView(graph,hierarchy,scenario,{surface:"project",focus_node_id:screen.node_id}):null;
 const observed=story.related.mission_board.entries.map(x=>x.id);
 let content;
 if(screen.type==="home"){
   const view=composeProgressionView(graph,hierarchy,scenario,{surface:"trailhead"});
   content={
     kind:"CONTEXTUAL_TRAILHEAD",observed_story_choices:view.trailhead.story_choices,
     additional_observed_count:view.trailhead.additional_observed_count,
     uncertain_marker_candidates:view.trailhead.unresolved_candidates,
     featured_project:life.planner.featured_project,
     one_suggested_outing:life.planner.suggested_outing,
     presentational_prompt:life.attention.state==="FOREGROUND"?life.attention:null,
     can_wait:view.trailhead.can_wait
   };
 }else if(screen.type==="story_board"){
   content={kind:"STORY_CHOICES",observed_missions:story.related.mission_board.entries,
     marker_unconfirmed_candidates:story.related.mission_board.may_require_observation,
     shelf_order_never_forces_sequence:true};
 }else if(screen.type==="project"||screen.type==="track"){
   content={kind:"PROJECT_OR_TRACK",focus_node:screen.node_id,
     breadcrumbs:project.content.breadcrumbs,
     project:project.content.project,children:project.content.children,
     selected_track:project.content.selected_track,
     related_atlas_groups:project.content.atlas_entry_points,
     stage_is_not_progress_confirmation:true};
 }else if(screen.type==="atlas_reference"){
   content={kind:"EXTERNAL_ATLAS_LESSON_REQUEST",topic_node:screen.node_id,
     learning_depth:screen.depth||"practical",
     source_read_pending:true,
     original_source_to_reconstruct_on_return:session.stack.at(-1)?.type==="mission_reference"?"FULL_GAMEGUIDE":"PREVIOUS_PROJECT_OR_SURFACE"};
 }else if(screen.type==="mission_reference"){
   content={kind:"EXTERNAL_FULL_MISSION_REQUEST",mission_id:screen.mission_id,
     marker_observed_now:observed.includes(screen.mission_id),
     selection_class:screen.launch_class,
     may_start_current_story:screen.launch_class==="observed_marker"&&observed.includes(screen.mission_id),
     full_guide_rendered:false,requires_original_guide_fetch:true,
     gold_result:"UNKNOWN_IN_SYNTHETIC_SESSION"};
 }
 const source_request=sourceMetadata(screen,graph,hierarchy,route,returning);
 return {
   version:"0.5.0",source:"SIMULATION_ONLY",scenario_id:scenario.scenario_id||"anonymous",
   header:appHeader(scenario,screen,life,route),
   screen:JSON.parse(JSON.stringify(screen)),stack_depth:session.stack.length,can_return:session.stack.length>0,
   content,source_request,
   warnings_never_hidden:life.urgent_risks,
   research_conflicts:life.evidence_conflicts,
   lifecycle_attention:life.attention,
   note:"An external full guide/Atlas source request is NOT itself source content. Navigation clicks are NOT gameplay actions.",
   actual_game_state_connected:false,writes_performed:0,gameplay_progress_changed:false,
   session:JSON.parse(JSON.stringify(session))
 };
}
export function createSyntheticCompanionSession(scenario,contracts,options={}){
 const {graph,hierarchy,planner_policy,lifecycle_policy,route_contract}=contracts;
 if(route_contract?.scope!=="SYNTHETIC_SCENARIO_ONLY")throw Error("Route contract must be simulation-only");
 ensureScenario(scenario);
 const session={kind:NAV_KIND,screen:createFrame("home"),stack:[],pending_writes:0,
   scenario_id:scenario.scenario_id||"anonymous",default_spoiler_budget:route_contract.scenario_guard.default_spoiler_budget};
 return presentScreen(session,scenario,graph,hierarchy,planner_policy,lifecycle_policy,route_contract,options);
}
export function navigateSyntheticCompanion(session,action,scenario,contracts,options={}){
 const {graph,hierarchy,planner_policy,lifecycle_policy,route_contract}=contracts;
 ensureScenario(scenario);ensureSession(session,route_contract);
 if(!action||typeof action!=="object")throw Error("Navigation action must be a structured object");
 if(!route_contract.actions.some(x=>x.id===action.type))throw Error("Unregistered navigation action");
 validateFrame(session.screen,hierarchy,graph);
 const current=currentFrame(session),n=nodeIndex(hierarchy),mission=missionIndex(graph);
 const observed=composeProgressionView(graph,hierarchy,scenario,{surface:"missions"}).related.mission_board.entries.map(x=>x.id);
 let next;const stack=[...session.stack.map(x=>({...x}))];
 if(action.type==="return"){
   if(stack.length===0)throw Error("No semantic return target");
   next=stack.pop();
 }else if(action.type==="show_home"){
   next=createFrame("home");stack.length=0;
 }else{
   if(stack.length>=route_contract.scenario_guard.max_depth)throw Error("Navigation depth exceeded");
   if(action.type==="show_story")next=createFrame("story_board");
   else if(action.type==="open_project"){
     if(!n[action.node_id]||n[action.node_id].type!=="project")throw Error("Unknown project node");
     next=createFrame("project",{node_id:action.node_id});
   }else if(action.type==="open_track"){
     if(!n[action.node_id]||!["track","feature"].includes(n[action.node_id].type))throw Error("Unknown project track or feature");
     if(!["project","track"].includes(current.type)||n[action.node_id].parent!==current.node_id)
       throw Error("Track must be a direct child of active project or track");
     next=createFrame("track",{node_id:action.node_id});
   }else if(action.type==="open_atlas"){
     if(!allowedAtlasLink(current,action.node_id,route_contract,hierarchy))throw Error("Atlas route must use a known source-linked group");
     if(!["quick","practical","comprehensive"].includes(action.depth||"practical"))throw Error("Unsupported Atlas lesson depth");
     next=createFrame("atlas_reference",{node_id:action.node_id,depth:action.depth||"practical"});
   }else if(action.type==="select_mission"||action.type==="open_mission_reference"){
     if(!mission[action.mission_id])throw Error("Unknown Chapter 2 mission ID");
     if(action.type==="select_mission"&&!observed.includes(action.mission_id))throw Error("Cannot select a mission not explicitly observed in the fictional scenario");
     next=createFrame("mission_reference",{mission_id:action.mission_id,
       launch_class:action.type==="select_mission"?"observed_marker":"reference_only"});
   }
   stack.push({...current});
 }
 if(!next)throw Error("Navigation action has no defined target");
 validateFrame(next,hierarchy,graph);
 const result={kind:NAV_KIND,screen:next,stack,pending_writes:0,
   scenario_id:scenario.scenario_id||"anonymous",default_spoiler_budget:route_contract.scenario_guard.default_spoiler_budget};
 return presentScreen(result,scenario,graph,hierarchy,planner_policy,lifecycle_policy,route_contract,options,action.type==="return");
}
export function transitionSyntheticCompanion(session,nextScenario,contracts,options={}){
 ensureScenario(nextScenario);
 ensureSession(session,contracts.route_contract);
 return presentScreen({...session,scenario_id:nextScenario.scenario_id||"anonymous"},nextScenario,
   contracts.graph,contracts.hierarchy,contracts.planner_policy,contracts.lifecycle_policy,contracts.route_contract,options,false);
}
export function validateCompanionRouteContract(graph,hierarchy,route){
 const errors=[],n=nodeIndex(hierarchy),act=new Set(),m=missionIndex(graph);
 if(route.scope!=="SYNTHETIC_SCENARIO_ONLY")errors.push("Route contract must be synthetic");
 if(route.authority.gameplay?.read_in_this_prototype!==false||route.authority.gameplay?.write_in_this_prototype!==false)
   errors.push("Campaign source must remain disconnected");
 for(const x of route.actions||[]){if(act.has(x.id))errors.push("Duplicate route action "+x.id);act.add(x.id);}
 for(const [from,to] of Object.entries(route.atlas_crosslinks||{})){
   if(!n[from]||!n[to]||n[to].type!=="atlas_group")errors.push("Unknown source-linked Atlas link "+from+" -> "+to);
 }
 if((graph.missions||[]).length!==18||Object.keys(m).length!==18)errors.push("Unexpected Chapter 2 Gold identity set");
 if(!route.authority.story.full_guide_requirement.includes("FULL_ORIGINAL"))errors.push("Full original guide requirement missing");
 if(route.return_semantics.checklist_persistence!==false||route.return_semantics.full_guide_on_return!==true)
   errors.push("Return might imply stale checklist persistence");
 if(!route.source_requests.mission.status.includes("SOURCE_READ")||!route.source_requests.atlas.status.includes("SOURCE_READ"))
   errors.push("Source reload requirement missing");
 return {passed:errors.length===0,errors,actions:act.size,atlas_links:Object.keys(route.atlas_crosslinks||{}).length,missions:Object.keys(m).length,read_only:true};
}


// Source-linked end-to-end navigation regression. Requires only explicitly supplied JSON fixtures.
export function verifyCompanionJourneys(contracts,previousScenarios,journeySuite){
 const errors=[],passing=[],rejected=[],guardErrors=[];
 const states={...previousScenarios.states,...journeySuite.additional_states};
 const check=(actual,expect,key)=>{
   if(key==="unknown_not_in_observed")return expect.every(x=>!actual.observed.includes(x));
   if(key==="warning_ids"||key==="child_ids"||key==="observed")return JSON.stringify(actual[key])===JSON.stringify(expect);
   return JSON.stringify(actual[key])===JSON.stringify(expect);
 };
 const observedView=output=>({
   screen:output.screen.type,
   focus:output.screen.node_id||output.screen.mission_id||null,
   depth:output.stack_depth,
   child_ids:output.content.children?.map(x=>x.id)||null,
   observed:(output.content.observed_missions||output.content.observed_story_choices||[]).map(x=>x.id),
   source_owner:output.source_request?.owner??null,
   source_path:output.source_request?.path??null,
   source_load:output.source_request?.contents_loaded??false,
   source_reload:output.source_request?.needs_full_reload_on_return??false,
   checkboxes_restored:output.source_request?.checklist_restored??false,
   full_guide_rendered:output.content.full_guide_rendered??false,
   atlas_status:output.source_request?.research_status??null,
   reference_class:output.screen.launch_class??null,
   may_start:output.content.may_start_current_story??null,
   project_stage:output.content.project?.stage??null,
   track_availability:output.content.selected_track?.availability??null,
   warning_ids:output.warnings_never_hidden,
   writes:output.writes_performed,
   no_source:output.source_request===null
 });
 let totalSteps=0;
 for(const journey of journeySuite.journeys||[]){
   let scenario=states[journey.state],output;
   try{output=createSyntheticCompanionSession(scenario,contracts,journey.options||{});}
   catch(e){errors.push({id:journey.id,reason:"Setup: "+String(e)});continue;}
   const localErrors=[];
   for(let i=0;i<journey.steps.length;i++){
     const step=journey.steps[i],expected=step.expect||{};
     try{
       if(step.transition_state){
         scenario=states[step.transition_state];
         output=transitionSyntheticCompanion(output.session,scenario,contracts,journey.options||{});
       }else output=navigateSyntheticCompanion(output.session,step.action,scenario,contracts,journey.options||{});
       totalSteps++;
       const actual=observedView(output);
       for(const [key,value] of Object.entries(expected)){
         if(!check(actual,value,key))localErrors.push({
           step:i+1,key,expected:value,actual:actual[key]
         });
       }
       if(output.actual_game_state_connected!==false||output.writes_performed!==0||
         output.gameplay_progress_changed!==false) localErrors.push({step:i+1,reason:"Unauthorized game-state effect"});
       if(output.source_request&&output.source_request.contents_loaded!==false)
         localErrors.push({step:i+1,reason:"Source declared fetched without actual read"});
       if(output.screen.type==="mission_reference"&&
          (output.content.full_guide_rendered!==false||!output.source_request?.render_requirement.startsWith("FULL_ORIGINAL")))
         localErrors.push({step:i+1,reason:"Original complete Field Guide contract lost"});
       if(output.screen.type==="atlas_reference"&&
          (output.source_request?.source_research_adopted!==false||output.source_request?.research_status!=="RESEARCHED_REVIEW_PENDING"))
         localErrors.push({step:i+1,reason:"Atlas research improperly promoted"});
     }catch(e){localErrors.push({step:i+1,reason:String(e)});break;}
   }
   if(localErrors.length)errors.push({id:journey.id,failures:localErrors});
   else passing.push(journey.id);
 }
 for(const bad of journeySuite.invalid_actions||[]){
   const state=JSON.parse(JSON.stringify(states[bad.state]||{}));
   let output;
   try{
     output=createSyntheticCompanionSession(state,contracts);
     for(const action of bad.pre_actions||[])output=navigateSyntheticCompanion(output.session,action,state,contracts);
   }catch(e){guardErrors.push({id:bad.id,reason:"Setup failed: "+String(e)});continue;}
   let session=output.session;
   switch(bad.mutation){
     case "source_wrong":state.source="REAL_GAME";break;
     case "synthetic_false":state.synthetic=false;break;
     case "chapter_wrong":state.chapter="03";break;
     case "session_kind_wrong":session={...session,kind:"LIVE_GAME_SESSION"};break;
     case "session_forged_mission":session={...session,screen:{type:"mission_reference",mission_id:"m999",launch_class:"observed_marker"}};break;
     case "deep_nav":session={...session,stack:Array.from({length:9},()=>({type:"home"}))};break;
     case undefined:break;
     default:guardErrors.push({id:bad.id,reason:"Unknown mutation"});continue;
   }
   try{
     navigateSyntheticCompanion(session,bad.action,state,contracts);
     guardErrors.push({id:bad.id,reason:"Invalid input was not rejected"});
   }catch(e){
     if(String(e).includes(bad.contains))rejected.push(bad.id);
     else guardErrors.push({id:bad.id,reason:"Unexpected exception: "+String(e)});
   }
 }
 return {passed:errors.length===0&&guardErrors.length===0,
   journey_cases:(journeySuite.journeys||[]).length,journeys_passed:passing.length,steps_exercised:totalSteps,
   invalid_cases:(journeySuite.invalid_actions||[]).length,rejected_invalid:rejected.length,
   failures:errors,guard_failures:guardErrors,
   source:"SIMULATION_ONLY",actual_game_state_connected:false,writes_performed:0};
}

// CLI consumes only static JSON fixture/contract inputs in the same isolated directory.
if(process.argv[1]&&fileURLToPath(import.meta.url)===process.argv[1]){
 const dir=dirname(fileURLToPath(import.meta.url));
 const load=name=>JSON.parse(readFileSync(join(dir,name),"utf8"));
 const contracts={
   graph:load("chapter_02_graph_v0_1.json"),
   hierarchy:load("hierarchy_v0_2.json"),
   planner_policy:load("planner_policy_v0_3.json"),
   lifecycle_policy:load("opportunity_policy_v0_4.json"),
   route_contract:load("companion_route_contract_v0_5.json")
 };
 const previous=load("planner_scenarios_v0_3.json");
 const journeys=load("companion_journeys_v0_5.json");
 const integrity=validateCompanionRouteContract(contracts.graph,contracts.hierarchy,contracts.route_contract);
 const tests=verifyCompanionJourneys(contracts,previous,journeys);
 console.log(JSON.stringify({integrity,tests},null,2));
 if(!integrity.passed||!tests.passed)process.exitCode=1;
}
