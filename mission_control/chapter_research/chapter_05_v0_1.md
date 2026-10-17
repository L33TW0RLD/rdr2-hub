# Chapter 05 — Guarma and Return: Mission Control Research & GameGuide Transfer Pack v0.1

**Record:** `MISSION_RESEARCH.CH05.v0.1` · **Task:** `mission-guarma-040` · [Issue #54](https://github.com/L33TW0RLD/rdr2-hub/issues/54) · **Status:** **RESEARCHED — REVIEW PENDING / NOT ADOPTED**.  
**Checked:** 2026-10-17 (research date, NOT game patch date) · **Scope:** Red Dead Redemption 2 **Story Mode** (original PS4/Xbox One, later PC/console Story where consistent). Not Red Dead Online.  
**Spoiler policy:** Entire document **T2/T3 FUTURE STORY SPOILERS**; it is a **private future-chapter research/transfer package**, NOT suitable for default Chapter 2 Adventure Companion display. Only load individual mission when reached and selected through canonical GameGuide.  
**Research chapter boundary:** Nine **Gold-eligible named entries** are normally catalogued in Chapter 5, but the diagnostic encounter **A Fork in the Road** can occur in either late Chapter 5 or early Chapter 6 depending on when the player enters the relevant Saint Denis area. **Five** entries are on Guarma; **four** cover mainland return, Lakay, Saint Denis and camp relocation. PowerPyx counts nine Gold-eligible entries in Ch5, RDR2.org calls it eight fixed missions plus one variably placed encounter, and GTA Base labels nine in shelf order. This is **one** dynamic entry, not a duplicated Ch5/Ch6 Gold medal. [S01–S04]  
**Authority:** All mission identities, phases, tactics and timers are **research inputs**. `L33TW0RLD/rdr2/missions/` owns authored, approved canonical full Field Guide v1.1; `rdr2/campaign/` alone owns actual status/Gold/save/loot. Nothing below asserts a mission started, reached, completed, saved or Gold earned by the player. The original GameGuide `missions/README.md` currently prepared Chapters 1–2 only; **no Chapter 5 dossier/folder found** at research startup. Every entry below is `NEEDS_GAMEGUIDE_AUTHORING` pending authorized original-repo writer.

## 1. Identity/eligibility and source map — no shelf-number-as-medal arithmetic

| Research key (not engine/operation ID) | Mission identity / locale | Entry type and Gold eligibility | Safe trigger / prerequisites | Per-mission external evidence |
|---|---|---|---|---|
| CH05-M01 | **Welcome to the New World** — Guarma beach, chain gang, rebels | Mandatory; **1** eligible medal, **2** criteria | **Automatic** after Ch4 `Banking, the Old American Art`; no normal free-roam preparation once started | [S01],[S02],[S05],[S06] |
| CH05-M02 | **Savagery Unleashed** — Guarma jungle/factory workers | Mandatory story; **1** eligible medal, **3** criteria | Guarma `?` after M01; ordering relative to M03 **variable**; safer to complete before triggering Dutch if seeking island exploration pause | [S01],[S02],[S07],[S19] |
| CH05-M03 | **A Kind and Benevolent Despot** — Guarma fortress/sugar refinery/Javier | Mandatory; **1** eligible medal, **2** criteria | Dutch after M01; **may be selectable alongside M02**; dependency to M04 includes both M02 and M03 | [S01],[S02],[S08],[S19] |
| CH05-M04 | **Hell Hath No Fury** — Cinco Torres fort | Mandatory; **1** eligible medal, **3** criteria | Automatically after **both** M02 and M03 (exact ordering of the two previous missions not mandatory) | [S01],[S02],[S09] |
| CH05-M05 | **Paradise Mercifully Departed** — shore artillery / Guarma departure | Mandatory; **1** eligible medal, **4** criteria | Automatically after M04; **hard practical end of ordinary Guarma access** | [S01],[S02],[S10] |
| CH05-M06 | **Dear Uncle Tacitus** — Van Horn to Shady Belle to Lakay | Mandatory; **1** eligible medal, **2** criteria | Automatically follows M05 / reaches American mainland; letter at former camp yields destination | [S01],[S02],[S11] |
| CH05-M07 | **Fleeting Joy** — Lakay ambush | Mandatory; **1** eligible medal, **4** criteria | Automatically after M06, little pre-mission re-equipment time by described sequence | [S01],[S02],[S12] |
| CH05-M08 | **A Fork in the Road** — Saint Denis doctor | Mandatory **conditional-timing** chapter classification; **1** eligible medal, **1** criterion | After M07, approaching Saint Denis / relevant waypoint; **may trigger late Ch5 or early Ch6**; not a second count | [S01],[S02],[S13],[S19] |
| CH05-M09 | **That's Murfree Country** (also “That's Murfee Country” spelling in sources) — Lakay, Beaver Hollow, Annesburg | Mandatory Ch5 exit/camp relocation; **1** eligible medal, **4** criteria | Dutch in Lakay after M07; access/sequence relative to M08 varies with travel | [S01],[S02],[S14],[S19] |

**9 mission names × 1 eligible Gold opportunity = nine chapter-catalogued candidate medals; 25 discrete checklist conditions across these nine entries.** This is a **research inventory**, not any increase to the player's 104-target ledger. The PowerPyx “104 Gold” list, GTA Base “110 Story missions / 105 medal-bearing” catalogue and RDR2.org “eight + floating ninth” differ in global accounting. **Do not reconcile by making up internal IDs or counting no-medal stages elsewhere.** The player can validate a specific medal via **Pause → Progress → Story → mission name → medal requirements**. [S01,S02,S03,S04]

**Not additional Gold mission entries:** the Ch4 shipwreck transition as a separate “Guarma prologue”, chain-gang segments, Dutch's hidden refinery stages, John/Sadie follow-up setup, `Dear Uncle Tacitus` note as a standalone mission, informal refugee rescues, island snake/bird collection, and story-world encounters. These may be gameplay, narrative or collectible actions **within/alongside** eligible entries, not independently credited medals. No Chapter 5 optional **Honor Story** Gold mission was established by these three independent medal lists; do not mislabel mainland Stranger missions as Ch5 medal quests. [S01–S04]

**GameGuide transfer path for each row:** `L33TW0RLD/rdr2/missions/chapter_05/<GameGuide-assigned_filename>.md` **PROPOSED DESTINATION ONLY**; exact future filenames and operation numbers must be allocated by GameGuide after adoption. Original repository Chapter 5 directory absent at initial read. Original `protocol/walkthrough_presentation.md` mandates a complete single selected mission A→final, actual per-phase 2–5 actionable checkboxes, Gold metric tiles, one progress rail, critical warnings at their action window and optional topic-specific Intel with evidence footers; **these research phase outlines are content seeds, not a deployed interactive guide**. [R01–R03]

## 2. Chapter transition, access gates and preservation-first routing

```text
CH4 “Banking, the Old American Art” COMPLETE
    ↓ automatic / story-forced transition
M01 Welcome to the New World [beach → chain gang → rebels]
    ├── M02 Savagery Unleashed [worker rescue]      ┐
    └── M03 A Kind and Benevolent Despot [Javier]   ├ both resolve → M04
                                                   ┘
M04 Hell Hath No Fury → M05 Paradise Mercifully Departed [Guarma EXITS]
    ↓ automatic mainland return
M06 Dear Uncle Tacitus → M07 Fleeting Joy
    ├── M08 A Fork in the Road: **dynamic Saint Denis trigger**, late Ch5 or early Ch6
    └── M09 That's Murfree Country: Lakay Dutch → Chapter 6 camp transition
    [ordering/exact moment M08 triggers depends on player route; DO NOT force serial M08→M09]
```

**Chapter-window warning (material):** In normal Story Mode Guarma is **not ordinarily revisitable** after departure. Study/skin/pluck *desired* Guarma-specific Compendium wildlife and check personally important rare equipment before intentionally starting the departure chain, **not** because official 100% or Zoologist/Skin Deep require all Guarma wildlife. Native wildlife/exhaustive items are an **OPTIONAL_EXHAUSTIVE** collection goal. Original Gameplay Save pre-Guarma and local Guarma manual saves are potentially useful but **do not claim any save exists or can be made during a forced sequence**. [S15,S16,S17,S18,R04]

**Practical encounter-order risk — sources conflict:** PowerPyx individually says both M02 and M03 unlock after M01 and M04 follows their completion; RDR2.org prints Dutch's M03 before M02 in its article; an independent 2026 guide recommends **M02 first** because after completing it the player can pause before triggering M03 and subsequent automatic missions. This is a *conservative scheduling suggestion*, **not a verified universal hard prerequisite**. When the player actually reaches the island: if free control exists and optional Guarma wildlife matters, explore within safe accessible area **before selecting the final available catalyst mission**, and secure a legitimate save if possible. Do not claim every branch permits the same window or that `Savagery Unleashed` is mechanically permanently missable without in-game evidence. [S07,S08,S09,S19]

**Equipment and resource risk:** After the shipwreck, early Guarma play uses limited weapons and medicine; target headshot criteria cannot assume the user has their mainland longarms, tonics, horse, familiar equipment or upgraded Dead Eye. Some chained missions begin automatically. On **replay**, PowerPyx reports preset loadout and limited/no tonics, and medal conditions must all be met on one attempt, so **replay ≠ restoration of region free roam, optional chapter-only Compendium study, original inventory, or missable pickups**. [S01,S04,S05,R04]

**Honor / story choices:** Dutch/Gloria/Javier scenes have scripted outcomes, **not** a freely assignable honorable branch that an analyst may “fix.” The mission `That's Murfree Country` contains a rescue/delivery of Meredith; do not invent an additional favorable Honor point or alternative reward without proof. `A Fork in the Road` has honor-reactive imagery/dialogue; content changes with actual Honor, not a Gold metric. Chapter 6 optional Honor Story missions have separate eligibility under D08 and original mission authority; no automatic migration into Ch5. [S13,S14,R04]

## 3. M01 — Welcome to the New World: Field Guide seed

**Identity:** CH05-M01; one Story Gold; `AUTOMATIC` after Ch4 Banking. No map-click required. No preplaced weapon/tonic assumption. **Gold contract (2):** (G1) remain close enough to chain-gang line not to fall behind (no published meter); (G2) obtain **10 headshots** over the combat portions. Corroborated PowerPyx, RDR2.org, GTA Base. [S05,S01,S02]

| Phase | Practical chronological action seeds (all planning only, 2–5 each) | Inline action-critical warning / optional Intel |
|---|---|---|
| **A — WASHED ASHORE** | (1) Once control returns, orient on the beach. (2) Walk toward smoke/campfire/familiar survivors. (3) Follow dialogue until capture sequence begins. | **SAVE:** This chapter entered automatically; no guarantee of normal menu preparation here. **Intel / World:** island resource restrictions [S05,S04]. |
| **B — CHAIN GANG** | (1) Keep advancing immediately with the line. (2) Follow bends with the others instead of stopping to look around. (3) Continue until scripted rebel intervention. | **GOLD CRITICAL:** Chain-follow objective has **no explicit time threshold**; don't fall behind. **Intel / Mechanics:** walk/follow prompts contextual; no invented sprint shortcut [S05]. |
| **C — RESCUE FIREFIGHT** | (1) Acquire the weapon supplied by the rescue. (2) Prioritize deliberate enemy headshots using available Dead Eye where applicable. (3) Follow the retreat prompt when reinforcements intensify. | **GOLD CRITICAL:** 10 total headshots; limited early consumables. Don't mistake survival for automatic headshot count. **Intel / Combat:** no weapon-buying option [S05]. |
| **D — HILL DEFENSE AND EXIT** | (1) Take cover at the rebel-supplied weapon position. (2) Check soldiers emerging/flanking both sides; add needed headshots. (3) Clear sufficient attackers and follow Hercule to camp. | **GOLD:** Don't allow retreating final enemies to erase headshot opportunity. **Intel / Time:** no chapter-wide timer claimed [S05]. |

**Medal evidence:** Only the after-mission Story results screen or explicit player report can identify success. **Missable:** no independently proven named one-time physical loot in the mission; island-only Compendium goals require later free-roam observation. No item/Gold/state automatically credited.

**Transfer checklist:** Author GameGuide masthead + 2 metric tiles; phases A–D with 11 above planning actions adjusted during full source audit; verify chain proximity indicator and actual Dead Eye/weapon availability before label “confirmed”; optional Intel: Combat, Mechanics, Save. **Status:** `NEEDS_GAMEGUIDE_AUTHORING`.

## 4. M02 — Savagery Unleashed: Field Guide seed

**Identity:** CH05-M02; `?` on Guarma after M01; variable selection order against M03. **Gold contract (3):** (G1) release **all hanging workers within 4 seconds** (rope sequence window); (G2) complete in **5 min 40 sec** overall; (G3) **8 headshots**. PowerPyx uses typo “Compete”; RDR2.org and GTA Base reflect **complete**. [S07,S01,S02]

| Phase | Actionable steps in scene order | Warning / topic-specific Intel |
|---|---|---|
| **A — SEARCH / CAPTURE** | (1) Approach the marked jungle scene and inspect the hanging body. (2) Allow scripted capture; resistance to dart is not a documented alternative. (3) When detained, look toward restraints, attempt to free hands when prompted. | **TIME CRITICAL:** Overall **5:40** is strict; skip only *skippable* cutscenes if aiming Gold. **Intel / Mechanics:** forced initial capture, no stealth-free mission route [S07]. |
| **B — BREAK FREE** | (1) Follow hands → rocking chair controls as they appear. (2) Break chair, grapple the guard and escape. (3) Free fellow prisoners according to cinematic/interaction prompts. | **GOLD:** Avoid repeated failed prompt attempts; remappable button icons are platform-specific. **Intel / Controls:** context-based, not fixed keyboard mappings. |
| **C — FOLLOW LEON** | (1) Follow Leon crouched through patrol openings. (2) Stay at the archway and wall cover as instructed. (3) Approach the workers' execution area and identify **three ropes** before opening fire. | **SAVE/MISSABLE:** The rescue itself is scripted, no leisurely wildlife stop mid-mission. **Intel / Stealth:** don't alert guards early [S07]. |
| **D — CUT ROPES / CLEAR GUARDS** | (1) Trigger Dead Eye or precise aim at **all three ropes** as soon as release prompt/window starts. (2) Cut the ropes within **4 sec**; hitting workers is not a safe substitution. (3) Turn toward guards and acquire **8 headshots**; address elevated sniper promptly. (4) Clear remaining attackers and finish without lingering. | **GOLD CRITICAL:** Seconds are for **releasing all workers**, not individually 4 sec each; 8 headshots and total 5:40 simultaneously. **Intel / Combat:** guide's “all ropes in Dead Eye” is **tactic**, not mandatory interface state. [S07] |

**Research caveat:** Exact start-of-timer for all-encompassing 5:40 / rescue 4-sec counter isn't independently frame-tested. Some players report rope-cut Gold failing despite visual near-instant hits; do not promise Dead Eye guarantees credit. Player must inspect Gold screen to verify. [S07,S03]

**Mission preservation:** If choosing free exploration first, this mission is one of two post-M01 choices; conservative research route does it **before Dutch's M03**, but the two mission identities remain distinct and neither is credited by walking into the other. **Unique item:** Guarma **Sun Hat** on enemy heads has wiki-backed possible pickup; potential risk to timer and Headshot Gold, so do **not** add obligatory corpse-search to Gold phase. Inspect fallen hat only if actually within safe non-timed opportunity; D22 owns special clothing classification. [S17,S19]

**Transfer:** Four full phases, three compact Gold metrics; Intel Mechanics, World, Equipment; `NEEDS_GAMEGUIDE_AUTHORING`.

## 5. M03 — A Kind and Benevolent Despot: Field Guide seed

**Identity:** CH05-M03; Dutch on Guarma after M01; both M02 and M03 needed for M04. **Gold (2):** (G1) get Javier to safety in **under 2 min**, timed after cage rescue/evacuation; (G2) **10 headshots** (count throughout combat). [S08,S01,S02]

| Phase | Chronological actions | Inline Gold/SAVE/Intel |
|---|---|---|
| **A — MEET DUTCH / APPROACH FORT** | (1) Climb to Dutch's concealed path/ledge. (2) Follow along cliff and guide through caves. (3) Help open the gate/door when prompted; keep close as mission directs. | **CHAPTER WINDOW:** Depending on M02 order, starting this mission can remove useful normal Guarma prep interval; if interested in optional wildlife, reconsider before activation. **Intel / World:** region normally nonrevisitable after departure. |
| **B — STEALTH / REFINERY** | (1) Stay crouched behind Dutch; synchronize first guard kill. (2) Carry corpse to designated cover. (3) In refinery, wait for guards to separate and silently eliminate when Dutch signals. (4) Operate valve, close shutters and slash sugar sack; exit with Dutch. | **STEALTH / MISSION FAIL RISK:** Follow Dutch's prompt sequence rather than invent an all-guns blazing shortcut. **Intel / Controls:** exact kill/input remaps. [S08] |
| **C — JAVIER RESCUE / FAST EXTRACTION** | (1) Approach prison cages when guards respond to refinery distraction. (2) Follow Dutch while he carries Javier once released. (3) Remove **priority blockers** Dutch identifies while moving. (4) Continue to exit through gate/cane field without stopping for surplus kills. | **GOLD CRITICAL:** Javier safety **under 2:00**; overusing Dead Eye or staying behind to farm headshots can cost time. **Intel / Combat:** elapsed time continues while Dead Eye slows view [S08]. |
| **D — RIVER REARGUARD / EXIT** | (1) When ordered to cover the retreat, use the river position for remaining headshots. (2) Watch incoming guards to avoid being overrun. (3) Clear required pursuers, regroup with Dutch/Javier. | **GOLD:** 10 headshots; guide suggests river defense as a safe place for remaining headshots, **not** a guaranteed number of enemies. **Intel / Gold:** no accuracy requirement for this mission [S08]. |

**Honor narrative caution:** the scripted Dutch/Gloria sequence has unpleasant fixed events; no source supports a selectable morality alternative that avoids those scripted outcomes. Do not tell a High Honor player that a tactical delay changes an authored scene. Do not promise unique gold bar recovery from the guide's cutscene; this is not a player-owned item. [S08]

**Known source disagreement:** PowerPyx's link labels propose A Kind then Savagery, while GTA Base shelf places Savagery first; treat order as player-choice with M04 after both. **Transfer:** four phases, 2 Gold tiles; Intel Story/Honor, Stealth, Gold; `NEEDS_GAMEGUIDE_AUTHORING`.

## 6. M04 — Hell Hath No Fury: Field Guide seed

**Identity:** CH05-M04; automatic once both M02 and M03 resolved, Cinco Torres defense. **Gold (3):** (G1) stop **4 landing boats** from reaching shore; (G2) destroy attacking warship **without a missed cannon shot**; (G3) finish **≥70% accuracy**. [S09,S01,S02]

| Phase | Checklist-ready actions | Inline timing/intel |
|---|---|---|
| **A — FORT UNDER ATTACK** | (1) Move into cover and engage troops on beach/bridge. (2) Keep deliberate fire to protect **≥70% accuracy**. (3) Help Hercule position artillery when prompted. | **GOLD:** Accuracy across the mission is not a headshot quota; firing without target confidence risks denominator. **Intel / Combat:** rifle vs artillery phase accuracy potentially tracked differently, confirm result. |
| **B — LANDING BOATS** | (1) Follow Dutch to lower defenses. (2) Watch west then east approaches/minimap for approaching boats. (3) Stop **four** before landing, focusing on rowers/crews and using Dead Eye deliberately. (4) Return to Hercule/Dutch when directed. | **GOLD CRITICAL:** Four boats must be *prevented from reaching the shore*—killing four soldiers **after** landfall is not the same. Guide says several boats on each side, not a fixed guaranteed extra quota. [S09] |
| **C — ASCENT TO NAVAL CANNON** | (1) Join Hercule and follow new path past blocked sections. (2) Ascend to cannon position without detours. (3) Align sights toward the warship. | **SAVE / FLOW:** Auto-chain follows preceding two missions; do not promise manual save at intermediate staging. **Intel / Route:** path changes due to destruction. |
| **D — SINK SHIP** | (1) Aim slightly above ship to compensate for drop, using guide as starting heuristic. (2) Fire only when confident of hit; re-adjust after recoil. (3) Reload on prompt, sink ship without a miss. | **GOLD CRITICAL:** “without missing a shot” refers to cannon engagement; no verified guarantee of aim coordinate/hitbox in all platform versions. **Intel / Gunnery:** PowerPyx aiming guidance tactical, not engine proof. [S09] |

**Conflicts/unknown:** Some community commenters report a warship destroying a boat; whether it counts toward the player's **four** is **UNVERIFIED**—plan four player-prevented landings. Cannon projectile travel, hit confirmation and cross-weapon 70% denominator are not independently instrumented; use named medal objectives and exact results as truth. [S09]

**Reward/missable:** Enemy Sun Hat possibility if one naturally falls, but ship/boat objectives take priority over clothing. No additional named one-time key item independently verified. **Transfer:** four phases, three Gold metrics, Combat/Gunnery/Save Intel; `NEEDS_GAMEGUIDE_AUTHORING`.

## 7. M05 — Paradise Mercifully Departed: Field Guide seed

**Identity:** CH05-M05; forced follows M04; **last standard playable Guarma mission/region exit**. **Gold (4):** (G1) kill **first two sentries unseen**; (G2) escort freed captain to ship **within 1:45**; (G3) finish mission **within 6:45**; (G4) land **25 headshots**. [S10,S01,S02]

| Phase | Ordered live-guide steps | Immediate warnings / relevant Intel |
|---|---|---|
| **A — FOLLOW HERCULE / SILENT OPENING** | (1) Stay with Hercule toward first gun position. (2) Coordinate silent takedown of the first sentry with Micah eliminating the other. (3) Avoid firing publicly before both sentries are dealt with. | **GOLD CRITICAL:** First **two** sentries unseen; a later perfect stealth segment does **not** replace them. **Intel / Stealth:** PowerPyx directs melee takedown. |
| **B — SABOTAGE ARTILLERY** | (1) Plant explosives on first gun position. (2) Follow Micah/Dutch toward second cannon and continue forward rather than looting. (3) Use enemy waves to accumulate deliberate headshots; deal with snipers promptly. (4) Let companions complete required planted charges and follow. | **GOLD:** Total 6:45 overlaps headshots 25; headshot hunt must happen during advancing fights. **Intel / Combat:** no published accuracy quota; do not invent one. |
| **C — CAPTAIN RESCUE** | (1) Push into workers' compound on Dutch's signal. (2) Approach the blue holding building, survive scripted standoff. (3) Follow scene-specific prompt to free captain (kick gun to him when offered). | **LOOT / HONOR:** Narrative scene scripted; no invented alternative “save everyone” morality branch. **Intel / Mechanics:** scripted look/target prompts, not ordinary gun shot. [S10] |
| **D — ESCORT / DEPART** | (1) Start moving with captain immediately once freed. (2) Remove enemies who block captain's movement on route toward ship. (3) At tower, use available artillery solution to defeat final threat. (4) Finish departure within overall 6:45. | **GOLD CRITICAL:** Escort captain **within 1:45** after rescue, independent of overall **6:45**. **NO NORMAL RETURN:** this mission ends the usual Guarma wildlife/personal collection window. [S10,S15] |

**Consequence and exception:** The PowerPyx author states artillery is required for final tower threat; a comment claims sniper shots can work. **DISPUTED**, not a universal guarantee or Gold requirement. **Safe tactic** follow clearly prompted cannon solution and don't waste limited overall time experimenting unless player explicitly opts in. [S10]

**Missable:** This is the **island point-of-no-return** for optional Guarma-only wildlife study/skin/pluck, possible Sun Hat and speculative turtle journal sketch. The entire **personal exhaustive** sweep is elective and not part of four mission Gold conditions. When the player first reaches Guarma and has safe free time, do not wait until this automatic chain to raise that optional warning. No decoder/replay-based return promise. [S15–S19]

**Transfer:** four phases, four Gold tiles; Save, Combat, Missables, Mechanics drawers; inline Guarma-exit notice in this and pre-chain mission. `NEEDS_GAMEGUIDE_AUTHORING`.

## 8. M06 — Dear Uncle Tacitus: Field Guide seed

**Identity:** CH05-M06; automatic Guarma-return continuation starts near Van Horn; former camp Shady Belle to relocated gang Lakay. **Gold (2):** (G1) **leave Shady Belle without Pinkerton detection**; (G2) finish **within 8 min**. [S11,S01,S02]

| Phase | Steps | Immediate warning / Intel |
|---|---|---|
| **A — MAINLAND ARRIVAL** | (1) Regain control near Van Horn. (2) Use the nearby horse when offered; follow route to Shady Belle. (3) Avoid sightseeing and combat if chasing the 8:00 limit. | **GOLD TIME:** An 8:00 whole-mission timer applies. **Intel / Horse:** supplied temporary horse, NOT proof canonical horse/gear restored. |
| **B — FIND THE NOTE** | (1) Enter camp house and inspect appropriate room/table. (2) Read the note addressed to “Uncle Tacitus.” (3) Note destination revealed by mission and be ready for patrol. | **SCRIPT / DOCUMENT:** This letter conveys gang relocation; reading it does not make it an independently counted Gold mission or necessarily a permanent satchel collectible. Check actual inventory if collection is claimed. [S11] |
| **C — AVOID PINKERTONS** | (1) When patrol approaches, avoid confronting/trespassing near them. (2) Move out using clear path **without detection**. (3) Mount and follow new destination without stopping to fight. | **GOLD CRITICAL:** Unseen exit—killing the patrol is **not** equivalent to no detection. If detected, Gold status uncertain until actual medal. |
| **D — FIND RELOCATED GANG** | (1) Travel quickly to Lakay. (2) Find Pearson/Abigail/Sadie in objective area. (3) Follow ensuing story transition. | **FLOW:** Sources say next Fleeting Joy may begin automatically; don't promise free-roam save or merchant detour before next battle. [S11,S12] |

**Honor:** temporary horse borrowing/theft may have legal consequences in free-roam analogies; in this scripted mission use actual prompts, not invented stolen horse bounty. **Gold critical** is invisibility from Pinkertons; intentionally fighting defeats safe guidance. **GameGuide phase transfer:** four, two Gold; World, Horse, Save Intel. `NEEDS_GAMEGUIDE_AUTHORING`.

## 9. M07 — Fleeting Joy: Field Guide seed

**Identity:** CH05-M07; automatic after M06 at Lakay under Pinkerton attack. **Gold (4):** (G1) eliminate **2 Pinkertons during the triggered Dead Eye ambush**; (G2) **5 headshots with the Gatling Gun**; (G3) **≥70% Gatling Gun accuracy**; (G4) **no Health items used**. [S12,S01,S02]

| Phase | Steps | Immediate warnings / optional Intel |
|---|---|---|
| **A — ESCAPE INITIAL FIRE** | (1) React to automatic Gatling ambush. (2) Follow Sadie through back route toward shore. (3) Take cover/enter through trapdoor and prepare for scripted counterattack. | **NO HEALTH ITEMS:** Runs entire mission. Don't assume full starting Health or tonics and do not confuse “Dead Eye item” with Health-restoring tonic; verify exact item effect. **Intel / Survival** [S12]. |
| **B — TRIGGERED DEAD EYE BURST** | (1) When Sadie triggers entry, prepare for automatic Dead Eye. (2) Kill at least **two separate Pinkertons** during this initial ambush. (3) Prefer first removal of machine-gunner if available. | **GOLD CRITICAL:** Two **kills during triggered ambush**, not merely two marked targets after the Dead Eye has ended. A later manual Dead Eye activation may not retroactively count; PowerPyx language ambiguous, confirm actual result. |
| **C — FLANK AND SURVIVE** | (1) Advance with Sadie/Bill under cover as directions change. (2) Defeat waves without consuming Health items. (3) When Dutch calls back, head to camp-mounted Gatling. | **MEDAL:** Gatling-specific objectives are not the same as pre-Gatling revolver accuracy; conserve ammunition/damage. **Intel / Combat:** enemy waves conditionally spawn [S12]. |
| **D — GATLING AND WITHDRAWAL** | (1) Man Gatling; avoid spraying empty ground. (2) Secure **5 headshots with Gatling**. (3) Maintain **≥70% Gatling accuracy** with short controlled bursts. (4) Clear the announced waves and follow end-of-mission evacuation. | **GOLD CRITICAL:** 5 Gatling headshots AND ≥70% accuracy AND zero Health items. Coarse suppressive sweep can fail accuracy objective. **Intel / Medal:** verify instrumented post-mission result [S12]. |

**Source conflict:** PowerPyx suggests if two initial Dead Eye kills are missed, another manual activation *might* work; mission objective wording strongly anchors to “during the Dead Eye ambush.” **Safest play** secure two kills **in the triggered scene**, not rely on cleanup. Whether every Dead Eye-restoring consumable is non-Health must be checked per item's effect (D09/D12 reviewed, not global license). [S12,S03]

**Forced transition:** After combat, the camp must move; mission M09 is available, but M08 may trigger from entering Saint Denis before/after M09 depending on route. Do not force precise player chapter. **Transfer:** four phases, 4 Gold tiles; Combat, Resource, Save, Mission chronology Intel. `NEEDS_GAMEGUIDE_AUTHORING`.

## 10. M08 — A Fork in the Road: dynamic/conditional identity

**Identity:** CH05-M08; **unique medal-bearing mission despite atypical scene, often catalogued Ch5 and potentially triggered early Ch6**. Described by PowerPyx as near relevant Saint Denis waypoint after Fleeting Joy; RDR2.org lists Chapter 5, GTA Base catalogues #67; no fixed Dutch camp marker. **Gold (1): complete within 3 min 5 sec.** [S13,S01,S02,S19]

| Phase | Steps | Inline critical warning / Intel |
|---|---|---|
| **A — SAINT DENIS TRIGGER** | (1) After M07, if travelling toward eligible Saint Denis region/mission marker, expect a story-triggered encounter. (2) Park/stop as scene takes control. (3) Do not assume ability to defer it once triggered. | **GOLD TIME:** 3:05 timer; no combat objective. **STORY:** Health/story disclosure in this event is mandatory narrative, not player-approved medical choice. |
| **B — GET TO DOCTOR** | (1) Skip skippable opening cinematic if prioritizing Gold. (2) Follow helper straight toward doctor's surgery after control returns. (3) Enter and approach the receptionist. | **TIME CRITICAL:** No optional city shopping/distraction during Gold attempt. **Intel / Controls:** staggered movement, prompts. |
| **C — EXAMINATION** | (1) Follow instructions into doctor room. (2) Sit in marked green chair when prompted. (3) Let required non-skippable dialogue proceed; skip other cinematic when possible. | **GOLD:** A seemingly cinematic segment still needs a movement/sit input. **Intel / Story:** Honor may alter subjective imagery later; no Gold impact proven. |
| **D — EXIT / END** | (1) After medicine, turn and walk out of building. (2) Continue walking until the street vision sequence ends. (3) Confirm map/waypoints return; use Story result afterward to check actual completion. | **GOLD:** 3:05 overall. **UNUSUAL END:** no big “Mission Completed” banner may appear; use journal/map/results, not assumption. [S13] |

**Dispute:** Author reports gold “forgiving”, while commenters on PowerPyx report route/cutscene variability and failures. A player suggestion says following a particular street direction improved Gold; **NOT a vetted deterministic route**. Recommendation: use skippable scene skip, prompt-driven shortest observed route, and only actual result validates medal. No unrequested exploit advice. [S13]

**High Honor:** Scene's specific vision can differ by current Honor; no way to infer user's rating. The health revelation is plot content and this entire entry is T3; never show early to current Chapter 2 player. M08 should not be counted again if it triggers while GameGuide has classified player as Ch6. **Transfer:** four phases, 1 tile and age-appropriate story/Save topic; `NEEDS_GAMEGUIDE_AUTHORING`.

## 11. M09 — That's Murfree Country: chapter closing mission and Gold

**Identity:** CH05-M09; `Murfree` official/PowerPyx; some RDR2.org headings spell **“Murfee”**, **same mission**. Dutch in Lakay after M07, scouts Beaver Hollow with Charles, ending Chapter 5 camp transfer. **Gold (4):** (G1) **deliver Meredith to her mother within 2:00**; (G2) **15 headshots**; (G3) **≥85% overall accuracy**; (G4) **no Health items**. [S14,S01,S02]

| Phase | Action-ready outline | Inline critical warning/Intel |
|---|---|---|
| **A — DUTCH / TRAVEL CHOICE** | (1) Speak to Dutch then Charles in Lakay. (2) Ride toward Roanoke/Butcher Creek region. (3) When Charles asks horse vs canoe, prefer **horse** for access to saddle weapons and subsequent Meredith delivery if gear choice matters. | **RESOURCE/GOLD:** Horse route is **tactical recommendation**, not a mandatory Medal criterion. Canoe forfeits normal saddle weapon changes until reunited; check current carried gear. [S14] |
| **B — OUTER MURFREE CAMP** | (1) Crouch behind Charles approaching guards. (2) Eliminate assigned sentry silently with suitable held tool/weapon. (3) Follow Charles to cave route without noisy free-roam detours. | **GOLD:** Begin accumulating **15 headshots** without damaging accuracy **85%**; zero Health items from mission start. **Intel / Stealth:** avoid party trigger/fail. |
| **C — ENTER/SECURE CAVE** | (1) When choice appears, prefer stealth infiltration if preserving accuracy/Health. (2) Take aimed headshots on stationed enemies. (3) Watch minimap/tunnels for rushing flankers; use cover and Dead Eye rather than blind fire. (4) Clear enemies and find captive at rear. | **GOLD CRITICAL:** **15 headshots and ≥85% accuracy** simultaneously; high-damage body sprays may lower hit rate/headshots. **SURVIVAL:** Some melee attackers are dangerous; no Health tonics. [S14] |
| **D — RESCUE MEREDITH** | (1) Use calm/defuse dialogue to reassure captive. (2) Unlock/open holding cage when prompt appears. (3) Once rescued, start return promptly; if an automatic scene can be skipped, avoid delay when pursuing Gold. | **TIME CRITICAL:** 2:00 delivery timer begins around rescue/transport, not the start of the entire mission; exact frame trigger not independently profiled. **HONOR:** preserve her safety as story requires. |
| **E — FAST RETURN / CAMP TRANSFER** | (1) Mount with Meredith as passenger. (2) Take direct objective route to Annesburg. (3) Stop at specified mother's location, trigger safe handover. (4) Follow closing relocation cinematic and confirm story result. | **GOLD CRITICAL:** Meredith home **within 2:00**; no local optional robbery/hunting/photo stops. **CHAPTER TRANSITION:** camp moves; previous Chapter 5 Guarma free roam already gone. [S14] |

**Conflict:** Some walkthroughs imply chronological M08 must precede M09, but M08 is conditional on Saint Denis trigger and may instead occur in early Ch6. Gold attributes remain tied to **named entry**, never force an artificial 5→6 shelf division. No unique weapon pickup definitively tied to M09 independently proven in guide; GTA Base lists later unlock items which are NOT proof user acquired them. [S13,S14,S02]

**Transfer:** five phases, four Gold metrics; Horse, Combat, Honor, Save Intel; `NEEDS_GAMEGUIDE_AUTHORING`.

## 12. Chapter-wide missables: urgency by objective, not indiscriminate exploration

| Item / opportunity | Goal relevance | Source status and Chapter 5 window | Safe recommendation |
|---|---|---|---|
| Guarma-specific **3 macaws** (Blue-and-Yellow, Great Green, Scarlet) | Personal exhaustive Animal Compendium (study/pluck/etc.), **not** normal official 100%/Zoologist/Skin Deep | HIGH broad with PowerPyx + GTA Base; species naming stable [S15,S16] | If player wants exhaustive Guarma catalog, **Study** a live bird then obtain corresponding verb flags while free roam persists. No forced hunt for official 100%. |
| **Red-footed Booby** | Same optional exhaustive species completion | HIGH [S15,S16] | Look/Study in sky if desired; don't claim seen from generic shore bird. |
| **3 native boas** (Red Boa, Rainbow Boa, Sunglow Boa) | Optional full Animal Compendium, not 100% or trophies | HIGH [S15,S16] | Study → track/skin only if actual species/compendium goal and safe encounter, no legendary/perfect skin requirement. |
| **Fer-de-Lance snake** | Compendium/catalog nuance: PowerPyx lists as Chapter 5 island exclusive; later reports/mainland sightings dispute strict exclusivity | **DISPUTED location exclusivity**, no trophy necessity [S15,S16,S21] | If conveniently encountered, study/skin; don't impose dangerous prolonged grind or claim permanent failure if not. |
| **Cuban Land Crab and Green Iguana** | Ordinary Compendium animal category; appear in Guarma and **also mainland islands** according to PowerPyx | HIGH [S15,S16] | **CAN WAIT** for mainland; not Guarma emergency. |
| **Green Turtle journal sketch** | Personal journal-only discovery, **not Compendium entry/official 100%** | Community guide + specialist 2026 article, some replay/account reports inconsistent [S17,S18] | Optional T2 curiosity, binoculars/Study when naturally possible, check Journal later; **no guarantee sketch appears immediately** or every patch. |
| **Guarma military Sun Hat** | Optional unique/storable cosmetic, not an official 100% requirement | Red Dead Wiki community documents military pickup in Guarma missions [S17] | If hat physically falls and a save-safe acquisition is feasible, inspect/pick up and verify wardrobe storage. **Don't break Gold timer** or force lethal violence for cosmetic goal. |
| “Letter to Caroline”/other elusive Guarma paper | Personal document-exhaustive claim **not independently verified for a named source/item** | Community mention only; unclear actual spawn/retention/publisher provenance [S17,S22] | **UNKNOWN**, no map pin or “must pick now” created; if a named physical letter appears, inspect without discarding. |
| Mission-specific Gold and automatic chains | Personal every-eligible-Gold ambition; **Gold Rush 70** separate | Strong specialist guide thresholds [S01–S04] | Priority to in-mission critical windows; a valid manual pre-chain save only if actually possible and separately confirmed. Replay may pursue Gold but not replay unbounded world access. |
| Chapter 5 Honor Story/Stranger warnings | Lending a Hand and named Chapter 6 optional windows are separate | D08/D18/D22/D24 read-only; no blanket Chapter 5 Honor Story added [R04] | Do not pre-clear all mainland side missions just because M05 ends Guarma; inspect real named time-bound trigger. |

**Important non-equivalences:** Guarma animals are **Compendium optional extras** by common trophy-guide interpretation, **not required** for ordinary 100%, `Skin Deep`, or `Zoologist`. “All 178 animals in Compendium” is a different user-imposed goal. Original Guarma region not normally re-entered, and mission replay does **not** guarantee wildlife study or rare hat back into original save. Preserve only when user selects that goal. [S15–S18,R04]

## 13. Source disagreements, confidence and tactical guardrails

| Dispute ID | Exact competing claim | Verdict / what to tell player |
|---|---|---|
| CH05-X01 | PowerPyx 104 Gold medals vs GTA Base 105 Gold objectives/110 named missions; Gold catalogue includes optional/edition entries [S01,S02] | **UNRESOLVED GLOBAL COUNT**. Nine named candidates locally align; canonical player's **104** ambition retained by GameGuide. Never change global denominator or duplicate M08. |
| CH05-X02 | PowerPyx per-page mission numbers disagree with GTA Base Chapter 5 #60–68 and RDR2.org #57–65 [S02,S03,S04] | **NUMBERS ARE NOT STABLE ID**. Key by exact mission title and in-game Progress label; our CH05-Mnn keys local research only. |
| CH05-X03 | RDR2.org orders Dutch M03 then M02, GTA Base M02 then M03; PowerPyx says M04 after both [S04,S07–S09] | Both post-M01 options may be available; **M02 before M03 is preservation-oriented tactic**, not guaranteed imposed order. Confirm map/current state. |
| CH05-X04 | Some guides/community say Dutch-before-Savagery prematurely triggers automatic M04 or misses M02 [S19,S20] | **CONDITIONAL/DISPUTED exact lockout**. A prudent player seeking exploration can do M02 first, explore/save if possible, then choose M03. Do **not** universally claim skipped Gold possible or impossible without observed Story log. |
| CH05-X05 | Guarma “8 exclusive animals” PowerPyx including Fer-de-Lance vs community mainland sightings for Fer-de-Lance [S15,S21] | Main story location **not normally revisitable**, but exact Fer-de-Lance exclusivity **DISPUTED**. Optional exhaustive preservation only. |
| CH05-X06 | Last tower threat in M05 must be killed by cannon (PowerPyx author) vs commenter reports rifle option [S10] | **DISPUTED** alternative. Follow visible cannon prompt for robust route, not a guaranteed required weapon. |
| CH05-X07 | M08 appears Ch5 in GTA Base but PowerPyx explicitly says “Chapter 5 or 6,” source sequence differs [S02,S13] | **DYNAMIC-TRIGGER STORY**, exactly one medal; no forced `M08 before M09` assumption. |
| CH05-X08 | M08 3:05 allegedly impossible on some route/skip variation vs PowerPyx author reports easy [S13,S01 comment] | **REPRODUCTION NOT DONE**. Skip scenes when allowed, walk shortest prompted route, assess medal; not promise auto-Gold. |
| CH05-X09 | Savagery rope 4 sec reportedly failed despite three Dead Eye hits by player comment [S07,S03] | **DISPUTED internal timer/selection**, no absolute success from one animation. Try fast all-ropes shot; postgame checklist controls proof. |
| CH05-X10 | Fleet Joy two “during Dead Eye ambush” may allow later manual Dead Eye per PowerPyx wording [S12] | **CONSERVATIVE** kill two in scripted trigger, don't rely on after-event cleanup. |
| CH05-X11 | Guarma green turtle journal marker appearance, hidden animal, immediate sketch vs delayed journal after return [S17,S18] | **COMMUNITY-SOURCED / CONDITIONAL** and not official achievement. Inspect Journal after normal progression; no exploit. |
| CH05-X12 | Guarma Sun Hat available in multiple battles; item name/wardrobe flag might differ by edition [S17] | **COMMUNITY GUIDE ONLY**; collect only if already safe, verify physical named item and wardrobe. Not required for Gold. |
| CH05-X13 | Mission replay preserves item/equipment/Gold/saves/wildlife research under one rule [S01,R04] | **FALSE BLANKET**: medal replay possible; free-roam/collectible persistence and main-save inventory require separate evidence. |
| CH05-X14 | No-Health-item objective permits every dead-eye supplement [S04,S12] | **ITEM-SPECIFIC**: consumables restoring Health should be avoided; exact use/effect verify against item display; never guarantee all tonics permissible. |

**Player-facing uncertainty tokens:** `GOLD VERIFIED` = precise condition independently corroborated from specialist Gold lists (not actual run); `TACTIC RESEARCHED` = route guidance, may need testing; `DISPUTED` = guides disagree; `MISSION AVAILABILITY UNKNOWN` = no actual player marker; `PRESERVATION CHOICE` = optional user-goal-specific warning; `PLAYER RESULT UNREPORTED` = no earned medal, save or item inferred.

## 14. Claim/evidence register — exact source links and applicability

**All web sources below checked 2026-10-17.** “Checked” identifies evidence review date, NOT game version; source publication dates are historical. No actual gameplay, save decoder or mission replay test was performed by this researcher.

| Claim code | Proposition and applicability | Independent evidence | Confidence |
|---|---|---|---|
| C05-01 | Named Chapter 5 nine Gold candidate missions and their **25** objective slots | [S01],[S02],[S03],[S04] | **HIGH** for local names/Gold objectives; global number disputed |
| C05-02 | M01 begins automatically after Ch4 Banking; chain + 10 headshots | [S05],[S02],[S04] | **HIGH** |
| C05-03 | M02 time 5:40, 3 hanging ropes within 4 sec, 8 headshots | [S07],[S01],[S04] | **HIGH** thresholds; exact timer start **UNKNOWN** |
| C05-04 | M03 Javier safety 2:00 and 10 headshots; rescue timer follows cage | [S08],[S01],[S04] | **HIGH** threshold, **MEDIUM** start frame |
| C05-05 | M04 both predecessors; 4 boats, no missed warship shot, 70% accuracy | [S09],[S01],[S04] | **HIGH**; warship/boat credit detail **UNKNOWN** |
| C05-06 | M05 2 sentries unseen, captain 1:45, whole mission 6:45, 25 headshots | [S10],[S01],[S02],[S04] | **HIGH** |
| C05-07 | M06 8:00, no Pinkerton detection, “Uncle Tacitus” note, Lakay | [S11],[S02],[S04] | **HIGH** |
| C05-08 | M07 two Dead Eye ambush kills, 5 Gatling headshots, ≥70% Gatling hit rate, no Health items | [S12],[S01],[S02],[S04] | **HIGH** objectives, **MEDIUM** re-entry into Dead Eye semantics |
| C05-09 | M08 3:05, conditional Saint Denis/Ch5 or Ch6 transition | [S13],[S02],[S04] | **HIGH** time, **CORROBORATED conditional chapter** |
| C05-10 | M09 2:00 Meredith, 15 headshots, ≥85% accuracy, no Health items | [S14],[S01],[S02],[S04] | **HIGH** |
| C05-11 | Forced island access and departure, limited equipment | [S04],[S15],[S16],[S19] | **HIGH** normal route; exact save window **CONDITIONAL** |
| C05-12 | Guarma wildlife not required for Zoologist, Skin Deep or standard 100% | [S15],[S16],[S18] | **HIGH** for trophy exclusion; “all fauna” personal goal different |
| C05-13 | Three macaws, four snake guide entries, red-footed booby catalog; Fer-de-Lance mainland alternative | [S15],[S16],[S21] | **HIGH** taxonomy; **DISPUTED** strict Fer-de-Lance exclusivity |
| C05-14 | Sun Hat can be picked up from Guarma military | [S17] | **COMMUNITY SINGLE / MEDIUM** item/edition check |
| C05-15 | Green Turtle journal without standard compendium slot | [S18],[S17] | **COMMUNITY / MEDIUM**, some visibility/late entry uncertainty |
| C05-16 | M02-first exploration/save interval recommended | [S19],[S07],[S08],[S09] | **TACTICAL / MEDIUM**, no universal mission-lock proof |
| C05-17 | Story replay grants medal attempt with preset equipment, not chapter-world rollback | [S01],[R04] | **HIGH** general; exact per-mission replay variation UNKNOWN |
| C05-18 | M09 route horse vs canoe and stealth cave tactical choices | [S14],[S04] | **CORROBORATED / HIGH** as options, NOT Gold requirements |
| C05-19 | M05 tower cannon-vs-rifle conflict | [S10] author vs on-page commenter | **DISPUTED**, follow game prompt |
| C05-20 | A Fork in the Road Honor imagery/cinematic shifts without Gold objective | [S13],[S04] | **CORROBORATED / MEDIUM** |

### Independent source bibliography

- **[S01] PowerPyx**, *Red Dead Redemption 2 Gold Medals Guide*, **2018-10-25**, full Chapter 5 list and 104 Gold/70 Gold Rush conventions: https://www.powerpyx.com/red-dead-redemption-2-gold-medals-guide/
- **[S02] GTA Base**, *Chapter 5 Story Missions List*, original date unknown, list #60–68 and narrative scope: https://www.gtabase.com/red-dead-redemption-2/story/chapter-5 ; **mission detail index** https://www.gtabase.com/red-dead-redemption-2/missions/
- **[S03] GTA Base**, *Story Gold Medal Guide*, gold rule, edition/global 105/110 claims: https://www.gtabase.com/red-dead-redemption-2/missions/
- **[S04] RDR2.org / Matt Gibbs**, *Chapter 5 Missions and Gold Medals Guide*, published 2019-01-24; updated **2023-01-09**; **8 fixed + 1 flexible** and full route narrative: https://www.rdr2.org/guides/chapter-5-missions-and-gold-medals-guide/ ; page 2 https://www.rdr2.org/guides/chapter-5-missions-and-gold-medals-guide/2/ ; page 3 https://www.rdr2.org/guides/chapter-5-missions-and-gold-medals-guide/3/
- **[S05] PowerPyx**, *Welcome to the New World Walkthrough*, 2018-11-11: https://www.powerpyx.com/red-dead-redemption-2-welcome-to-the-new-world-walkthrough/ ; cross-check [GTA Base M01](https://www.gtabase.com/red-dead-redemption-2/missions/welcome-to-the-new-world)
- **[S07] PowerPyx**, *Savagery Unleashed Walkthrough*, 2018-11-11, 4-second/5:40/8 headshots: https://www.powerpyx.com/red-dead-redemption-2-savagery-unleashed-walkthrough/
- **[S08] PowerPyx**, *A Kind and Benevolent Despot Walkthrough*, 2018-11-11, Javier 2:00/10 headshots: https://www.powerpyx.com/red-dead-redemption-2-a-kind-and-benevolent-despot-walkthrough/ ; cross-check [GTA Base M03](https://www.gtabase.com/red-dead-redemption-2/missions/a-kind-and-benevolent-despot)
- **[S09] PowerPyx**, *Hell Hath No Fury Walkthrough*, 2018-11-11, boat-cannon-gun objectives: https://www.powerpyx.com/red-dead-redemption-2-hell-hath-no-fury-walkthrough/
- **[S10] PowerPyx**, *Paradise Mercifully Departed Walkthrough*, 2018-11-12, stealth/25 headshots/escort/mission timers: https://www.powerpyx.com/red-dead-redemption-2-paradise-mercifully-departed-walkthrough/ ; [GTA Base M05](https://www.gtabase.com/red-dead-redemption-2/missions/paradise-mercifully-departed)
- **[S11] PowerPyx**, *Dear Uncle Tacitus Walkthrough*, 2018-11-12: https://www.powerpyx.com/red-dead-redemption-2-dear-uncle-tacitus-walkthrough/ ; [GTA Base M06](https://www.gtabase.com/red-dead-redemption-2/missions/dear-uncle-tacitus)
- **[S12] PowerPyx**, *Fleeting Joy Walkthrough*, 2018-11-13: https://www.powerpyx.com/red-dead-redemption-2-fleeting-joy-walkthrough/ ; [GTA Base M07](https://www.gtabase.com/red-dead-redemption-2/missions/fleeting-joy)
- **[S13] PowerPyx**, *A Fork in the Road Walkthrough*, 2018-11-17, conditional Chapter 5/6 trigger: https://www.powerpyx.com/red-dead-redemption-2-a-fork-in-the-road-walkthrough/ ; [GTA Base M08](https://www.gtabase.com/red-dead-redemption-2/missions/a-fork-in-the-road)
- **[S14] PowerPyx**, *That's Murfee Country Walkthrough*, 2018-11-18, horseback vs canoe, cave and Meredith timing: https://www.powerpyx.com/red-dead-redemption-2-thats-murfee-country-walkthrough/ ; [GTA Base M09](https://www.gtabase.com/red-dead-redemption-2/missions/that-s-murfree-country)
- **[S15] PowerPyx**, *RDR2 Trophy Guide / Skin Deep and Zoologist*, 2018-10-25, Guarma not needed for trophies: https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap
- **[S16] PowerPyx**, *All Animal Locations / Zoologist & Skin Deep*, 2018-12-12, Guarma entries as trophy optional extras: https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/ ; **GTA Base Guarma island** https://www.gtabase.com/red-dead-redemption-2/locations/guarma
- **[S17] Red Dead Wiki**, *Missable Content in Redemption 2*, contributed/undated, Guarma Sun Hat and item nuances: https://reddead.fandom.com/wiki/Missable_Content_in_Redemption_2 ; *Hats/Masks* https://reddead.fandom.com/wiki/Hats/Masks_in_Redemption_2
- **[S18] Red Dead Wiki**, *Guarma* contributed location/creature catalog and journal-only Green Turtle note: https://reddead.fandom.com/wiki/Guarma ; **secondary specialist 2026 guide** https://fullclear.gg/rdr2/articles/missables ; individual community disagreements remain.
- **[S19] Gamers.Wiki / Christian Kuri**, *Chapter 5 Mission Order: Guarma Wildlife & Gold Medals*, **2026-08-25**, independent but untested tactical planning guidance to finish Savagery first and save before Dutch: https://gamers.wiki/en/games/red-dead-redemption-2/guides/rdr2-chapter-5-mission-order-guarma-wildlife-gold-medals
- **[S20] Red Dead Wiki**, *Welcome to the New World*, contributor guide on two post-intro mission unlocks, chronology: https://reddead.fandom.com/wiki/Welcome_to_the_New_World
- **[S21] Reddit community discussion**, *Which animals are Guarma exclusive?*, **2025-12-21** discussion, Fer-de-Lance mainland possibility and original player counts: https://www.reddit.com/r/RDR2/comments/1prujls/is_there_anything_in_guarma_that_i_cant_study/
- **[S22] Reddit community anecdote**, *Things to look for in chapter 5?*, 2026-02-05, unverified “Letter to Caroline” mention; **not accepted as confirmed item location**: https://www.reddit.com/r/reddeadredemption/comments/1qx1gdf/things_to_look_for_in_chapter_5/

**Repository / canonical sources (read-only, checked 2026-10-17):**
- **[R01] Original GameGuide** `L33TW0RLD/rdr2/main/missions/README.md`, confirms prepared **only** Chapter 1–2 mission briefings; no `missions/chapter_05/README.md` at checked main. https://github.com/L33TW0RLD/rdr2/blob/main/missions/README.md
- **[R02] PLAYER-APPROVED original Field Guide v1.1**, complete A→final and Gold/phase/Intel design: https://github.com/L33TW0RLD/rdr2/blob/main/protocol/walkthrough_presentation.md
- **[R03] Original mission preflight**, verify actual state/medal identity/source and Gold/missable timing: https://github.com/L33TW0RLD/rdr2/blob/main/protocol/mission_preflight.md
- **[R04] Hub read-only research**, `systems_atlas/dossiers/d08_chapter2_limited_windows_v0_1.md`, `d18_stranger_strands_quests_v0_1.md`, `d22_unique_equipment_compendium_v0_1.md`, `d24_replay_saves_medals_v0_1.md`; **RESEARCHED — REVIEW PENDING**, not ratified. `mission_control/source_adapter_v1.md` is proposed integration boundary.

**Evidence scope:** `S01,S02,S04` independently corroborate every named numerical Gold condition, while `S05,S07–S14` provide **one detailed walkthrough per entry**, and others address missability. No source claims direct access to this user's save, owned items, successful Gold or unlocked mission. Source links may age; coordinator/GameGuide recheck critical figures on adoption.

## 15. Original GameGuide transfer, Field Guide v1.1 acceptance and owner decisions

### Proposed per-entry transfer queue — NO original-repo files created

| Mission | Original Chapter 5 source-file QA | Transfer priority | Source to validate |
|---|---|---|---|
| M01 Welcome | **MISSING** / `NEEDS_GAMEGUIDE_AUTHORING` | P0 (automatic chapter entry, 10 headshots) | S05 / S01 / S04 |
| M02 Savagery | **MISSING** | P0 (4-second worker rescue, forced sequence) | S07 / S04 |
| M03 Benevolent Despot | **MISSING** | P0 (2:00 extraction + 10 headshots, exploration gate) | S08 / S04 |
| M04 Hell Hath | **MISSING** | P0 (four boats and perfect cannon shot) | S09 / S04 |
| M05 Paradise | **MISSING** | P0 (Guarma exit, 25 headshots and two timers) | S10 / S04 |
| M06 Dear Uncle | **MISSING** | P1 (stealth/time during forced return) | S11 / S04 |
| M07 Fleeting Joy | **MISSING** | P0 (scripted Dead Eye, 70% Gatling, no Health) | S12 / S04 |
| M08 Fork | **MISSING**, variable chapter | P0 identity QA (Ch5/6 counted once) | S13 / S04 |
| M09 Murfree | **MISSING**, chapter handoff | P0 (85%, 15 headshots, Meredith 2:00) | S14 / S04 |

**All nine are substantive research entries** intended to become complete separate canonical mission files, **not** nine empty placeholders nor nine adopted GameGuide routes. One mission briefed at a time when actually relevant; don't disclose T3 future story in Chapter 2. 

**When owner authorizes original GameGuide writer**, apply this acceptance to **each** mission:
1. Load actual named mission and `rdr2/campaign/current_state.md` first; confirm active/replay/historical with explicit evidence.
2. Cross-check all numerical Gold criteria and edition/game-menu nomenclature against S01/S02/S04 **and** the actual in-game Story Gold checklist (where applicable). If a detail conflicts, label `DISPUTED` with conservative option rather than silently assert.
3. Author one **complete** Field Guide v1.1: compact masthead, exact 1–4 Gold metric tiles, one rail reflecting **actual** checklist count, **all chronological A→last** phases with 2–5 ordered checkboxes and **critical timing/Honor/loot warnings in the relevant phase**; optional independent Intel drawers with source/footer and collapsing as approved. The above phase counts are **source-specific**, not copied from Operation 004.
4. Protect choice and optional exploration: show Guarma optional missable-warning before last free-roam moment, not every mission as an immutable 'complete all' checklist. No fabricated automatic progress from ticking research prompts.
5. Preserve after-action state ownership: medal, save, Honor, unique loot, player location and stage outcomes only by GameGuide after actual player report/screenshots. A Gold on replay, a saved Gold and optional full-game completion remain distinct.
6. Check overlaps with neighboring Chapter 4 `Banking` automatic exit and Chapter 6 `Icarus and Friends` or other mission ordering. Especially confirm M08 flexible grouping and M02/M03 branch to M04 **before** new canonical numbering.
7. Owner/coordinator independently reviews this Hub branch's **three-file lease**, evidence ledger, exact nine entries, per-entry objectives and contradictions, then authorizes any original-repo transfer separately. A Hub branch merge leaves **RESEARCHED — REVIEW PENDING**, not **ADOPTED**. No user progress or implementation implied.

**Chapter-pack stop condition:** This document is the only chapter research deliverable for Issue #54; final checkpoint and handoff record exact committed branch receipt. This researcher will not self-merge, edit `rdr2`, modify shared mission indexes, or issue player-specific mission claims.
