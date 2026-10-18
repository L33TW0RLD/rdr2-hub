export const chapter2Operations = [
  [
    "007",
    "Polite Society, Valentine Style"
  ],
  [
    "008",
    "Americans at Rest"
  ],
  [
    "009",
    "Exit Pursued by a Bruised Ego"
  ],
  [
    "010",
    "Paying a Social Call"
  ],
  [
    "011",
    "A Quiet Time"
  ],
  [
    "012",
    "Who Is Not Without Sin"
  ],
  [
    "013",
    "The Spines of America"
  ],
  [
    "014",
    "Money Lending and Other Sins III"
  ],
  [
    "015",
    "Blessed Are the Meek?"
  ],
  [
    "016",
    "The First Shall Be Last"
  ],
  [
    "017",
    "Pouring Forth Oil II"
  ],
  [
    "018",
    "A Fisher of Men"
  ],
  [
    "019",
    "Pouring Forth Oil IV"
  ],
  [
    "020",
    "We Loved Once and True III"
  ],
  [
    "021",
    "Good, Honest, Snake Oil"
  ],
  [
    "022",
    "An American Pastoral Scene"
  ],
  [
    "023",
    "The Sheep and the Goats"
  ],
  [
    "024",
    "A Strange Kindness"
  ]
];

export const composeFieldDesk = function composeFieldDesk(record,observation={}){
 if(!record || record.authority!=="GAMEGUIDE_READ_ONLY" || record.schema!=="field_desk_snapshot_v1")throw Error("A sourced read-only GameGuide snapshot is required.");
 if(observation && Object.keys(observation).length && observation.source!=="PLAYER_OBSERVATION")throw Error("Only explicitly identified player observations may augment the snapshot.");
 const o=observation||{};
 const val=k=>(o[k]===true?"YES":o[k]===false?"NO":"UNKNOWN");
 const opIds=new Set(chapter2Operations.map(m=>m[0]));
 const markers=(Array.isArray(o.mapMarkers)?o.mapMarkers:[]).filter((id,i,a)=>opIds.has(id)&&a.indexOf(id)===i);
 const rail=chapter2Operations.map(m=>({id:m[0],name:m[1],medal:record.medals.chapter2_best[m[0]]||"UNVERIFIED",marker:markers.includes(m[0])?"PLAYER_OBSERVED":"UNKNOWN"}));
 const tallies=rail.reduce((a,m)=>{if(m.medal!=="UNVERIFIED")a[m.medal.toLowerCase()]++;return a;},{gold:0,silver:0,bronze:0});
 const activeWagon=val("johnWagonTaskActive")==="YES";
 const chapterExit=val("chapterExitMarkerVisible")==="YES";
 const risk=activeWagon?{type:"ACTIVE_GOLD_RISK",message:"John's oil-wagon delivery is active; prioritize the skippable Part II Gold job, postpone outing."}:chapterExit?{type:"CHAPTER_EXIT_REVIEW",message:"Chapter-exit marker observed; check actual camp requests and optional activities before leaving."}:null;
 const ledger=val("ledgerVisible"),debt=val("straussDebtDeposited"),tools=val("leatherToolsPurchased"),hosea=val("hoseaMissionCompleted");
 let campStage="CONFIRM_STRAUSS_AND_LEDGER",campNext="Check the camp Ledger and Strauss debt marker; one qualifying debt must be deposited in the normal route.";
 if(debt==="YES"&&ledger!=="YES"){campStage="VERIFY_LEDGER";campNext="Qualifying Strauss debt reported deposited; inspect whether Ledger appears, without assuming a purchase.";}
 if(ledger==="YES"){campStage="LEDGER_OBSERVED";campNext="Inspect Leather Working Tools price and choose whether to fund the $225 reference upgrade; actual menu controls.";}
 if(ledger==="YES"&&tools==="YES"){campStage="TOOLS_OBSERVED";campNext="Select one Pearson satchel and verify its task gate and perfect pelt stock. For Tonics: deer, buck, elk; two medicine wagon upgrades.";}
 const conflicts=[];
 if(tools==="YES"&&ledger==="NO")conflicts.push("Leather Working Tools reported bought but Ledger explicitly reported absent.");
 if(hosea==="YES"&&val("horseBrushVisible")==="NO")conflicts.push("Hosea completion reported but Horse Brush unavailable: inspect actual equipment/menu before asserting access.");
 const horseStage=hosea==="YES"?"HOSEA_COMPLETED_PLAYER_REPORT":"HOSEA_UNVERIFIED";
 const horseNext=hosea==="YES"?"Check actual stable, brush and Legendary Animal Map availability, then select a riding/hunting objective.":"Hosea's Exit Pursued by a Bruised Ego is a candidate Story mission; verify its live marker. Normal completion introduces stables, brush and legendary map.";
 const suggested=activeWagon?"STORY_OIL_WAGON":chapterExit?"CHAPTER_EXIT_AUDIT":markers.length?"CHOOSE_OBSERVED_MISSION":"CHECK_MAP_OR_CHOOSE_FREE_ROAM";
 const purpose=[
  {id:"BOOK",name:"Rambles Through Woods and Plains",gate:"Horseshoe Overlook camp access",target:"Look near Arthur's sleeping area; collection unverified.",goal:"PERSONAL_EXHAUSTIVE",urgency:"CHAPTER_SENSITIVE"},
  {id:"NOTES",name:"Dutch's Speech Notes",gate:"Chapter 2 camp access",target:"Check broken wagon near camp cliff edge; collection unverified.",goal:"PERSONAL_EXHAUSTIVE",urgency:"CHAPTER_SENSITIVE"},
  {id:"TREASURE",name:"All That Glitters / Jack Hall treasure",gate:"Check Satchel > Documents > Treasure Maps",target:"Verify current treasure-map stage before pursuing next clue; the 14.6% save label is not completion evidence.",goal:"OFFICIAL_100",urgency:"OPTIONAL"},
  {id:"HERBALIST",name:"Herbalist Rank 1",gate:"Confirm rank 1 is active in Progress > Challenges",target:"Pick 6 Yarrow while rank 1 is active; repeated Yarrow counts as one plant species.",goal:"CHALLENGES_90",urgency:"OPTIONAL"},
  {id:"SATCHEL",name:"Tonics Satchel project",gate:"Ledger + tools purchase + medicine wagon upgrades",target:"Medical upgrades $30+$50; 1 each perfect deer, buck, elk pelts, delivered to Pearson for crafting.",goal:"OPTIONAL_PROJECT",urgency:"CONDITIONAL"}
 ];
 return {source:"GAMEGUIDE_SNAPSHOT_PLUS_EXPLICIT_PLAYER_OBSERVATION_ONLY",save_metadata_status:"LABELS_ONLY_NOT_DECODED",header:{chapter:record.chapter,global_gold:record.medals.global_gold},rail,tallies,recorded:rail.filter(m=>m.medal!=="UNVERIFIED").length,observed_markers:markers,risk,suggested,outings_suppressed:Boolean(risk&&risk.type==="ACTIVE_GOLD_RISK"),replays:record.medals.gold_replay_pending,camp:{stage:campStage,next:campNext},horse:{stage:horseStage,next:horseNext},purpose,conflicts,observations_not_persisted:true};
};
