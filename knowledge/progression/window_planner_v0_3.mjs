// RDR2 Hub Progression Window Planner v0.3
// Only synthetic Story Mode scenarios. NO reads from the user's campaign, saves or network.
import { evaluateScenario } from "./evaluate_v0_1.mjs";
import { composeProgressionView } from "./view_model_v0_2.mjs";

const EMPTY_RECEIPTS = {kind:"SYNTHETIC_PRESENTATION_RECEIPTS",displayed_prompt_keys:[],displayed_alert_keys:[]};
function includesOne(haystack, needles){return (needles||[]).some(v=>(haystack||[]).includes(v));}
function fullCandidate(status){return status==="observed_in_simulation"||status==="normal_rule_met_not_observed";}
function eventInterest(event, interest){return (event.focus_interests||[]).includes(interest);}
function validatedReceipts(r){
 if(r===undefined||r===null)return {...EMPTY_RECEIPTS};
 if(r.kind!==EMPTY_RECEIPTS.kind)throw Error("Planner receipts must be marked SYNTHETIC_PRESENTATION_RECEIPTS");
 for(const key of ["displayed_prompt_keys","displayed_alert_keys"]){
   if(!Array.isArray(r[key])||r[key].some(x=>typeof x!=="string"))throw Error("Invalid receipts."+key);
 }
 return {kind:EMPTY_RECEIPTS.kind,displayed_prompt_keys:[...new Set(r.displayed_prompt_keys)],displayed_alert_keys:[...new Set(r.displayed_alert_keys)]};
}
function chooseProjectFocus(intent,requested){
 if(requested==="project.horse"||requested==="project.camp")return requested;
 if(["horse","horses"].includes(intent))return "project.horse";
 return "project.camp";
}
function goalEligibleWarning(w,policy,options){
 if(w.id!=="camp_activity_window")return true;
 const rule=policy.goal_rules?.camp_activity_window||{};
 return includesOne(options.goals||[],rule.only_if_any)||includesOne(rule.or_explicit_intent,[options.intent])||options.requested_focus==="camp.life";
}
function riskSelection(current,previous,policy,receipts,options){
 const warnings=current.warnings.filter(w=>goalEligibleWarning(w,policy,options));
 const priorities=policy.alert_priority||[];
 const warning=[...warnings].sort((a,b)=>priorities.indexOf(a.id)-priorities.indexOf(b.id))[0]||null;
 if(!warning)return {warning:null,introduced:false,display_kind:"none"};
 const justActivated=!!previous&&!previous.warnings.some(w=>w.id===warning.id);
 const beforeAdvance=options.advancing_to==="chapter_exit"&&warning.id==="before_chapter_exit";
 const urgentChoice=options.advancing_to==="m017"&&warning.id==="urgent_john_wagon";
 const wasPresented=receipts.displayed_alert_keys.includes(warning.id);
 const newPresentation=(!wasPresented||justActivated||beforeAdvance||urgentChoice);
 const isCritical=["urgent_john_wagon","before_chapter_exit"].includes(warning.id);
 let displayKind=isCritical?"pinned_warning":"optional_notice";
 if(options.verbosity==="quiet"&&!isCritical&&!options.requested_focus)displayKind="suppressed_in_quiet";
 if(newPresentation&&displayKind!=="suppressed_in_quiet")displayKind="foreground_interrupt";
 return {warning,introduced:displayKind==="foreground_interrupt",display_kind:displayKind};
}
function candidateEvents(graph,policy,current,previous,receipts){
 const curCaps=Object.fromEntries(current.capabilities.map(x=>[x.id,x.status]));
 const previousCaps=previous?Object.fromEntries(previous.capabilities.map(x=>[x.id,x.status])):{};
 const curOpp=new Set(current.opportunities.map(x=>x.id));
 const previousOpp=new Set((previous?.opportunities||[]).map(x=>x.id));
 const eligible=policy.event_catalog.filter(event=>{
    if(event.type==="capability")return fullCandidate(curCaps[event.source_id]);
    if(event.type==="opportunity")return curOpp.has(event.source_id);
    return false;
 }).map(event=>{
    const previouslyEligible=event.type==="capability"?fullCandidate(previousCaps[event.source_id]):previousOpp.has(event.source_id);
    const newlyEligible=!!previous&&!previouslyEligible;
    const alreadyShown=receipts.displayed_prompt_keys.includes(event.id);
    return {...event,
      detected_kind:!previous?"currently_eligible_no_prior_comparison":newlyEligible?"newly_eligible_from_supplied_scenarios":"still_eligible",
      newly_eligible:newlyEligible,
      previously_eligible:!!previouslyEligible,
      already_shown:alreadyShown};
 });
 const suppressed=[];
 for(const d of policy.deferred_relations||[]){
   const superseding=eligible.some(x=>x.id===d.when);
   if(superseding)for(const id of d.defer){if(eligible.some(x=>x.id===id))suppressed.push(id);}
 }
 return {considered:eligible,allowed:eligible.filter(x=>!suppressed.includes(x.id)),deferred_due_to_more_advanced_stage:suppressed};
}
function chooseEvent(eligible,policy,opts){
 const tierIdx=tier=>Math.max(0,policy.levels.indexOf(tier));
 const interest=opts.interest||opts.intent||"";
 const candidates=eligible.filter(x=>!x.already_shown);
 candidates.sort((a,b)=>{
   if(a.newly_eligible!==b.newly_eligible)return a.newly_eligible?-1:1;
   const am=eventInterest(a,interest)?0:1,bm=eventInterest(b,interest)?0:1;
   if(am!==bm)return am-bm;
   const p=tierIdx(a.tier)-tierIdx(b.tier);
   if(p!==0)return p;
   return a.id.localeCompare(b.id);
 });
 return candidates[0]||null;
}
export function validateWindowPlannerPolicy(graph,policy){
 const issues=[],caps=new Set(graph.capabilities.map(x=>x.id)),windows=new Set(graph.opportunities.map(x=>x.id)),src=new Set(Object.keys(graph.sources));
 const names=new Set();
 if(policy.scope!=="SYNTHETIC_FIXTURES_ONLY")issues.push("policy scope is not synthetic");
 for(const e of policy.event_catalog||[]){
   if(e.opportunity_ref&&!windows.has(e.opportunity_ref))issues.push("unknown related outing window "+e.opportunity_ref);
   if(names.has(e.id))issues.push("duplicate event "+e.id);
   names.add(e.id);
   if(e.type==="capability"&&!caps.has(e.source_id))issues.push("unknown capability for "+e.id);
   if(e.type==="opportunity"&&!windows.has(e.source_id))issues.push("unknown opportunity for "+e.id);
   if(!policy.levels.includes(e.tier))issues.push("unknown tier for "+e.id);
   for(const id of e.source_refs||[])if(!src.has(id))issues.push("unknown source "+id+" for "+e.id);
 }
 for(const d of policy.deferred_relations||[]){
   if(!names.has(d.when))issues.push("unknown defer winner "+d.when);
   for(const n of d.defer||[])if(!names.has(n))issues.push("unknown deferred event "+n);
 }
 for(const id of policy.alert_priority||[])if(!graph.warnings.some(x=>x.id===id))issues.push("unknown warning "+id);
 return {passed:!issues.length,errors:issues,events:names.size,chapters:1,actual_game_state_connected:false};
}
export function planProgressionWindow(graph,hierarchy,policy,scenario,options={}){
 if(policy.scope!=="SYNTHETIC_FIXTURES_ONLY")throw Error("Planner only accepts synthetic policy");
 if(!scenario?.synthetic||scenario.source!=="SIMULATION_FIXTURE")throw Error("Only explicit synthetic fixtures permitted");
 const opts={verbosity:"adaptive",goals:[],intent:"unspecified",...options};
 if(!["quiet","adaptive","active"].includes(opts.verbosity))throw Error("Invalid verbosity");
 if(!Array.isArray(opts.goals)||opts.goals.some(g=>typeof g!=="string"||!policy.supported_goals.includes(g)))throw Error("Unknown or malformed goal scope");
 if(opts.requested_focus&&!hierarchy.nodes.some(n=>n.id===opts.requested_focus))throw Error("Requested focus must be an actual hierarchy node");
 if(!["free_roam","camp_limited","mission_chained","unknown"].includes(scenario.control))throw Error("Unsupported control");
 if(opts.previous_scenario&&(!opts.previous_scenario.synthetic||opts.previous_scenario.source!=="SIMULATION_FIXTURE"))throw Error("Prior scenario must be synthetic");
 const receipts=validatedReceipts(opts.receipts);
 const projectFocus=chooseProjectFocus(opts.intent,opts.requested_focus);
 let projection=composeProgressionView(graph,hierarchy,scenario,{surface:"trailhead",project_id:projectFocus,previous_scenario:opts.previous_scenario||null,intent:opts.intent});
 const now=evaluateScenario(graph,scenario);
 const prev=opts.previous_scenario?evaluateScenario(graph,opts.previous_scenario):null;
 const risk=riskSelection(now,prev,policy,receipts,opts);
 const eventPool=candidateEvents(graph,policy,now,prev,receipts);
 const availableObserved=projection.trailhead.story_choices;
 const blocked=now.outings_suppressed||scenario.control==="camp_limited";
 const hasIntent=opts.intent!=="unspecified"&&opts.intent!=="passive"&&opts.intent!=="none";
 const requestedFocus=!!opts.requested_focus||["camp","crafting","horses","horse","fishing","explore","story","mission","completion","activities"].includes(opts.intent);
 const riskMode=risk.warning?.id==="urgent_john_wagon"?"urgent_story":risk.warning?.id==="before_chapter_exit"?"chapter_exit_review":risk.warning?"observed_optional_window":null;
 let primary=null,mode="quiet_no_new_prompt";
 let keepProject=false,outing=null;
 const isCritical=risk.warning&&["urgent_john_wagon","before_chapter_exit"].includes(risk.warning.id);
 // Genuine active timed risk overrides general leisure, regardless of chat verbosity.
 if(riskMode==="urgent_story"){
   mode="urgent_story";
   primary={kind:"protect_skippable_story",id:"m017",title:"Prioritize John's active wagon-delivery opportunity",reason:risk.warning.action,evidence:"activated task supplied by synthetic fixture"};
 }else if(riskMode==="chapter_exit_review"){
   mode="chapter_exit_review";
   primary={kind:"before_chapter_exit",id:"chapter2_exit_audit",title:"Review chapter-sensitive opportunities before departure",reason:risk.warning.action,evidence:"chapter-exit marker or explicit stage in synthetic fixture"};
   keepProject=opts.verbosity!=="quiet"||requestedFocus;
   if(scenario.control==="free_roam"&&opts.verbosity!=="quiet")outing=projection.trailhead.outing?.activity_ref==="observed_camp_opportunity_review"?projection.trailhead.outing:null;
 }else if(scenario.control==="mission_chained"){
   mode="mission_in_progress";
   primary={kind:"continue_story",id:"MISSION_CHAINED",title:"Continue active Story mission",reason:"Free-roam control is unavailable in this synthetic scenario"};
 }else if(scenario.control==="unknown"){
   mode="control_unknown";
   primary={kind:"observation_needed",id:"CHECK_CONTROL",title:"Confirm whether Arthur has free-roam control",reason:"The scenario does not establish a safe outing window"};
 }else if(opts.intent==="story"||opts.intent==="mission"){
   mode="story_choices_only";
   primary={kind:"select_observed_mission",id:null,title:"Choose an observed Story mission",reason:"The supplied fiction has "+availableObserved.length+" observed Story marker(s); no shelf order inferred"};
 }else if(opts.requested_focus||["camp","crafting","horses","horse","activities"].includes(opts.intent)){
   mode="user_requested_project";
   primary={kind:"open_requested_project",id:projectFocus,title:projectFocus==="project.horse"?"Horse Care":"Develop the Camp",reason:"Explicit fictional player interest; no system or upgrade presumed owned"};
   keepProject=true;
   outing=!blocked?projection.trailhead.outing:null;
 }else{
   const event=chooseEvent(eventPool.allowed,policy,opts);
   const unsolicitedPermitted=opts.verbosity!=="quiet";
   if(event&&unsolicitedPermitted){
     const specificCap=event.type==="capability"?now.capabilities.find(x=>x.id===event.source_id):null;
     const observed=specificCap?.status==="observed_in_simulation";
     const confidence=specificCap?observed?"explicitly_observed_in_fixture":"normal_rule_met_marker_unconfirmed":"contextual_open_window_in_fixture";
     const introVerb=event.detected_kind==="newly_eligible_from_supplied_scenarios"?"Became relevant after the supplied fictional milestone":"Relevant option at the supplied fictional checkpoint (not a verified fresh unlock)";
     mode=event.tier==="project_revisit"?"project_revisit":event.tier==="routine_orientation"?"arrival_orientation":"system_introduction";
     primary={kind:event.type==="capability"?"introduce_system":"introduce_window",id:event.id,title:event.label,
       reason:introVerb+". "+event.evidence_note,
       detected_kind:event.detected_kind,confidence,
       project_ref:event.project_id,source_refs:event.source_refs};
     keepProject=!!event.project_id;
     if(event.project_id&&event.project_id!==projectFocus){
       // Introduce the owning project, not whatever project the generic Trailhead last happened to feature.
       projection=composeProgressionView(graph,hierarchy,scenario,{
         surface:"trailhead",project_id:event.project_id,previous_scenario:opts.previous_scenario||null,intent:opts.intent
       });
     }
     // Use the window attached to this introduction; a Fence introduction must never inherit a satchel Ledger outing.
     const eventWindow=event.opportunity_ref?now.opportunities.find(o=>o.id===event.opportunity_ref):null;
     const preferProjectOuting=event.id==="event.pearson_tools_milestone";
     outing=blocked?null:preferProjectOuting?projection.trailhead.outing:eventWindow?{
       source_window:eventWindow.id,activity_ref:eventWindow.outings[0],why_now:eventWindow.title,confidence:eventWindow.confidence
     }:projection.trailhead.outing;
   }else if(hasIntent&&opts.intent==="explore"&&!blocked){
     mode="user_requested_outing";
     const x=projection.trailhead.outing;
     primary={kind:"optional_outing",id:x?.activity_ref||null,title:x?"Explore a suitable outing":"Choose where to explore",reason:"Only the current fictional control window is used; no unseen location is invented"};
     keepProject=true;outing=x;
   }else if(opts.intent==="completion"){
     mode="user_requested_completion_review";
     primary={kind:"review_options",id:"completion_check",title:"Review available opportunities",reason:"Differentiate 100%, Gold, achievements and exhaustive extras; no fake progress counted"};
   }
 }
 // Observed optional camp invitation is relevant to explicitly requested achievements/activities;
 // optional warnings NEVER override the active Story safety precedence.
 if(riskMode==="observed_optional_window"&&risk.introduced&&opts.verbosity!=="quiet"&&!["urgent_story","chapter_exit_review"].includes(mode)){
   mode="observed_optional_window";
   primary={kind:"consider_observed_camp_offer",id:"camp_activity_window",title:risk.warning.title,reason:risk.warning.action};
   keepProject=opts.intent==="camp"||opts.intent==="activities";
   outing=null;
 }
 if(mode==="quiet_no_new_prompt"){
   primary=null;
   keepProject=false;
 }
 const promptKey=primary?.id&&primary.id.startsWith("event.")?primary.id:null;
 const alertKey=risk.introduced?risk.warning.id:null;
 const nextReceipts={
   kind:EMPTY_RECEIPTS.kind,
   displayed_prompt_keys:[...new Set([...receipts.displayed_prompt_keys,...(promptKey?[promptKey]:[])])],
   displayed_alert_keys:[...new Set([...receipts.displayed_alert_keys,...(alertKey?[alertKey]:[])])]
 };
 const seenKeys=new Set(nextReceipts.displayed_prompt_keys);
 const pending=eventPool.allowed.filter(x=>!seenKeys.has(x.id)).map(x=>({id:x.id,label:x.label,detected_kind:x.detected_kind}));
 const storyChoices=projection.trailhead.story_choices.slice(0,policy.render_caps.story_choices);
 const riskOutput=risk.warning?{id:risk.warning.id,title:risk.warning.title,action:risk.warning.action,
   presentation:risk.display_kind,source_status:"RESEARCH_REVIEW_PENDING_WITH_SYNTHETIC_ACTIVATION",active_in_fixture:true}:null;
 return {
   version:"0.3.0",source:"SIMULATION_ONLY",scenario_id:scenario.scenario_id||"anonymous",
   mode,control:scenario.control,verbosity:opts.verbosity,goal_scope:opts.goals,
   primary,
   alert:riskOutput,
   story_choices:storyChoices,
   additional_observed_story_count:projection.trailhead.additional_observed_count,
   featured_project:keepProject?projection.related.project_detail.project:null,
   suggested_outing:outing,
   can_wait:riskMode==="urgent_story"?"Optional camp, hunting and shopping until the active wagon task is handled":riskMode==="chapter_exit_review"?"Repeatable excursions and convenience improvements; check actual chapter-limited offers":"Long-term projects and repeatable tasks need not be completed before the next mission",
   selection_explanation:{considered_events:eventPool.considered.map(x=>({id:x.id,detected_kind:x.detected_kind,already_shown:x.already_shown})),
     deferred_stale_event_ids:eventPool.deferred_due_to_more_advanced_stage,
     still_eligible_unshown:pending,
     suppression:blocked?"Current synthetic control or activated risk prohibits normal outings":opts.verbosity==="quiet"?"Optional unsolicited prompts suppressed":"No general free-roam suppression"},
   next_receipts:nextReceipts,
   game_progress_changed:false,actual_game_state_connected:false,writes_performed:0
 };
}
