// RDR2 Hub Progression v0.1 — ONLY synthetic scenario simulation.
// This module never reads user files, game saves or campaign state.
// Run: node knowledge/progression/evaluate_v0_1.mjs
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function truth(predicate,state){
 let key,type;
 if(predicate.startsWith("completed:")){key=predicate.slice(10);type="completed";} 
 else if(predicate.startsWith("flag:")){key=predicate.slice(5);type="flag";}
 else if(predicate.startsWith("observed_marker:")){key=predicate.slice(16);type="marker";}
 else if(predicate.startsWith("observed_capability:")){key=predicate.slice(20);type="capability";}
 else throw Error("Unknown predicate: "+predicate);
 const pos=type==="completed"?state.completed:type==="flag"?state.flags_true:type==="marker"?state.observed_markers:state.observed_capabilities;
 const neg=type==="completed"?state.not_completed:type==="flag"?state.flags_false:type==="marker"?state.markers_absent:state.unavailable_capabilities;
 return (pos||[]).includes(key)?true:(neg||[]).includes(key)?false:null;
}

function triAll(predicates,state){const a=(predicates||[]).map(p=>truth(p,state));return a.includes(false)?false:a.includes(null)?null:true;}

function triAny(predicates,state){const a=(predicates||[]).map(p=>truth(p,state));return a.includes(true)?true:a.includes(null)?null:false;}

function verifyScenario(graph,state){
 if(!state||!state.synthetic||state.source!=="SIMULATION_FIXTURE")throw Error("Scenario must be explicitly synthetic");
 if(state.chapter!=="02")throw Error("v0.1 evaluator supports Chapter 02 only");
 if(!["free_roam","camp_limited","mission_chained","unknown"].includes(state.control))throw Error("Invalid control");
 const pairs=[["completed","not_completed"],["flags_true","flags_false"],["observed_markers","markers_absent"],["observed_capabilities","unavailable_capabilities"]];
 for(const [yes,no] of pairs){const p=new Set(state[yes]||[]);for(const x of state[no]||[])if(p.has(x))throw Error("Contradictory scenario truth: "+x);}
 const ids=new Set(graph.missions.map(m=>m.id));
 for(const m of [...(state.observed_markers||[]),...(state.markers_absent||[]),...(state.completed||[]),...(state.not_completed||[])])if(!ids.has(m))throw Error("Unknown mission ID: "+m);
}

export function evaluateScenario(graph,state){
 verifyScenario(graph,state);
 const missions=graph.missions.map(m=>{
  const done=truth("completed:"+m.id,state),marker=truth("observed_marker:"+m.id,state);
  const gate=triAll(m.necessary_all||[],state);
  const conflicts=[];
  if(marker===true&&gate===false)conflicts.push("observed marker contradicts documented necessary prerequisite; inspect source");
  if(done===true&&marker===true)conflicts.push("mission both completed and still has marker; multiple stages or stale evidence possible");
  let status;
  if(done===true)status="completed_in_simulation";
  else if(marker===true)status=(state.control==="mission_chained"?"marker_observed_but_control_unavailable":"marker_observed_in_simulation");
  else if(marker===false)status="marker_explicitly_absent";
  else if(gate===false)status="necessary_prerequisite_not_met";
  else if(gate===null)status="necessary_prerequisite_unknown";
  else if(m.necessary_all.length)status="necessary_conditions_met_marker_unconfirmed";
  else if(m.classification==="story_opening"&&truth("flag:chapter2_open",state)===true)status="opening_candidate_marker_unconfirmed";
  else status=m.prerequisite_confidence==="disputed"?"prerequisites_disputed_marker_unconfirmed":"prerequisites_unresolved_marker_unconfirmed";
  return {id:m.id,title:m.title,gold_identity:m.gold_identity,status,gate_evaluation:gate,source_ref:m.canonical_dossier,conflicts};
 });
 const capabilities=graph.capabilities.map(c=>{
  const observed=truth("observed_capability:"+c.id,state),gate=triAll(c.requires_all||[],state);
  let status=observed===true?"observed_in_simulation":observed===false?"explicitly_unavailable":gate===true?"normal_rule_met_not_observed":gate===false?"necessary_condition_not_met":"availability_unknown";
  return {id:c.id,status,rule_evaluation:gate,conflict:observed===true&&gate===false};
 });
 const warnings=graph.warnings.filter(w=>{
  const matches=w.when_all?triAll(w.when_all,state)===true:triAny(w.when_any||[],state)===true;
  return matches&&!((w.unless_any||[]).some(p=>truth(p,state)===true));
 }).map(w=>({id:w.id,title:w.title,severity:w.severity,action:w.action}));
 const urgent=warnings.some(w=>w.id==="urgent_john_wagon");
 const controlBlocked=state.control==="mission_chained"||state.control==="unknown";
 const opportunities=(urgent||controlBlocked)?[]:graph.opportunities.filter(o=>{
  const base=o.when_all?triAll(o.when_all,state)===true:triAny(o.when_any||[],state)===true;
  if(!base)return false;
  if((o.when_none||[]).some(p=>truth(p,state)===true))return false;
  return true;
 }).map(o=>({id:o.id,title:o.title,confidence:(o.when_none||[]).some(p=>truth(p,state)===null)?"conditional":"rule_met_synthetic",project_id:o.project_id,outings:o.outings}));
 const next=urgent?"m017":state.control==="mission_chained"?"CONTINUE_ACTIVE_MISSION":warnings.some(w=>w.id==="before_chapter_exit")?"REVIEW_BEFORE_CHAPTER_EXIT":"PLAYER_CHOICE";
 return {scenario_id:state.scenario_id||"anonymous",source:"SIMULATION_ONLY",chapter:"02",missions,capabilities,warnings,opportunities,outings_suppressed:urgent||controlBlocked,priority_next:next,requested_intent:state.intent||"unspecified",writes_performed:0};
}

function checkExpected(actual,expected){
 const errs=[];
 const missions=Object.fromEntries(actual.missions.map(x=>[x.id,x]));
 const capabilities=Object.fromEntries(actual.capabilities.map(x=>[x.id,x]));
 for(const [id,status] of Object.entries(expected.missions||{}))if(missions[id]?.status!==status)errs.push("mission "+id+" expected "+status+" received "+missions[id]?.status);
 for(const [id,status] of Object.entries(expected.capabilities||{}))if(capabilities[id]?.status!==status)errs.push("capability "+id+" expected "+status+" received "+capabilities[id]?.status);
 for(const id of expected.include_warnings||[])if(!actual.warnings.some(x=>x.id===id))errs.push("missing warning "+id);
 for(const id of expected.exclude_warnings||[])if(actual.warnings.some(x=>x.id===id))errs.push("unexpected warning "+id);
 for(const id of expected.include_opportunities||[])if(!actual.opportunities.some(x=>x.id===id))errs.push("missing opportunity "+id);
 for(const id of expected.exclude_opportunities||[])if(actual.opportunities.some(x=>x.id===id))errs.push("unexpected opportunity "+id);
 for(const id of expected.conflict_ids||[])if(!missions[id]?.conflicts.length)errs.push("expected conflict "+id);
 if("outings_suppressed" in expected&&actual.outings_suppressed!==expected.outings_suppressed)errs.push("outing suppression mismatch");
 if(expected.priority_next&&actual.priority_next!==expected.priority_next)errs.push("expected priority "+expected.priority_next+" received "+actual.priority_next);
 return errs;
}
if(process.argv[1]&&fileURLToPath(import.meta.url)===process.argv[1]){
 const dir=dirname(fileURLToPath(import.meta.url));
 const graph=JSON.parse(readFileSync(join(dir,"chapter_02_graph_v0_1.json"),"utf8"));
 const fixtures=JSON.parse(readFileSync(join(dir,"scenario_fixtures_v0_1.json"),"utf8"));
 if(graph.missions.length!==18||graph.missions.some(m=>m.gold_identity!==1))throw Error("18 Gold identities required");
 if(graph.non_medal_stages.some(x=>x.gold_identity!==0))throw Error("Nonmedal stage cannot earn Gold");
 let failures=0;
 for(const f of fixtures.scenarios){
   const out=evaluateScenario(graph,f.scenario);
   const errs=checkExpected(out,f.expected);
   if(errs.length){failures++;console.error("FAIL",f.scenario.scenario_id,errs.join(" | "));}
   else console.log("PASS",f.scenario.scenario_id);
 }
 console.log(JSON.stringify({scenarios:fixtures.scenarios.length,failures,source:"SIMULATION_ONLY"}));
 if(failures)process.exitCode=1;
}
