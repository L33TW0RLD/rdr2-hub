# Mission Control — Epilogue Part I: Pronghorn Ranch · Chapter Research / Transfer Pack v0.1

> **RESEARCHED — REVIEW PENDING · NOT ADOPTED · NOT A LIVE FIELD GUIDE.**  
> **Task:** `mission-epilogue1-042` · [Issue #56](https://github.com/L33TW0RLD/rdr2-hub/issues/56) · **Branch:** `agent/mission-epilogue1-042` · **Checked:** 2026-10-17.  
> **Spoilers:** **T3 — complete later-story spoilers including Chapter 6 ending, John, Abigail, Jack, Sadie, ranch attack, Beecher's Hope and Epilogue progression.** Do **not** render as a default Chapter 2 player briefing. Consult only for approved future research/adaptation or explicit later-story request.
> **Applies to:** RDR2 **Story Mode**, original console versions and updated PC/console play where shared. Text descriptions are device-agnostic; contextual PC/controller prompts, cutscene handling and replay loadouts require confirmation in the actual client. Not Red Dead Online.
> **Evidence boundary:** all mission availability/Gold requirements are general game knowledge. **Nothing below says the player has reached the Epilogue, earned any medal, saved, picked up a weapon, chosen violence or obtained an item.** The original [GameGuide campaign](https://github.com/L33TW0RLD/rdr2/blob/main/campaign/current_state.md) remains sole actual-play authority. This Hub file is **research/transfer preparation**, not a competing mission shelf, 104-denominator ledger, or active checklist.
> **Status of original GameGuide:** No `rdr2/missions/epilogue_01/` directory exists as of the 2026-10-17 source check; all ten eligible mission dossiers therefore require **NEEDS_GAMEGUIDE_AUTHORING** after separate owner authorization. Existing [approved Field Guide v1.1](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/walkthrough_presentation.md) and [mission preflight](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/mission_preflight.md) must remain intact.

## 0. Executive chapter reconciliation — ten medals, eleven named stages

**Supported chapter identity:** **10 separately Gold-eligible Story entries** in Epilogue I. Some guides list **11 narrative mission names** because **The Landowning Classes** is a distinct no-medal bank scene that leads to **Home of the Gentry?**, which carries one Gold medal; GTA Base groups the two under one numbered Story entry. Never count both as distinct Gold medals. PowerPyx's **104** is the full-game Gold target in its checklist, **not** a repository shelf count or player result. [E01,E02,E03,E04,E16]

### Medal identity / branching table

| Research key (local only) | Exact in-game name or naming nuance | Gold entries | Eligibility / relationship | Transfer status |
|---|---|---:|---|---|
| EP1-01 | **The Wheel** | **1** | Forced transition after Chapter 6 **Red Dead Redemption**; no optional Chapter 2 start | NEEDS_GAMEGUIDE_AUTHORING |
| EP1-02 | **Simple Pleasures** | **1** | Follows The Wheel, Tom Dickens | NEEDS_GAMEGUIDE_AUTHORING |
| EP1-03 | **Farming, for Beginners** | **1** | After Simple Pleasures; parallel with Fatherhood, for Beginners | NEEDS_GAMEGUIDE_AUTHORING |
| EP1-04 | **Fatherhood, for Beginners** | **1** | After Simple Pleasures; parallel with Farming, for Beginners | NEEDS_GAMEGUIDE_AUTHORING |
| EP1-05 | **Old Habits** | **1** | Automatically begins once **both** EP1-03 and EP1-04 completed | NEEDS_GAMEGUIDE_AUTHORING |
| EP1-06 | **Jim Milton Rides, Again?** | **1** | After Old Habits; parallel with Fatherhood, for Idiots | NEEDS_GAMEGUIDE_AUTHORING |
| EP1-07 | **Fatherhood, for Idiots** | **1** | After Old Habits; parallel with Jim Milton Rides, Again? | NEEDS_GAMEGUIDE_AUTHORING |
| EP1-08 | **Motherhood** | **1** | Automatically begins after **both** EP1-06 and EP1-07 | NEEDS_GAMEGUIDE_AUTHORING |
| EP1-09A | **The Landowning Classes** | **0 — SETUP** | Bank/loan conversation after Motherhood; leads to Home of the Gentry? | NEEDS_GAMEGUIDE_AUTHORING **non-medal reference** |
| EP1-09B | **Home of the Gentry?** | **1** | After The Landowning Classes; mission with $10/pay-or-violence choice; transitions toward Epilogue II | NEEDS_GAMEGUIDE_AUTHORING |
| EP1-10 | **Gainful Employment** | **1** | After Motherhood; independent of bank branch; **may be completed in Epilogue I or II** | NEEDS_GAMEGUIDE_AUTHORING |
| **Total** | **11 narrative names / stages** | **10 medal entries** | **21 individual Gold criteria** across ten missions | 10 new medal dossiers + one separate no-medal stage mapping |

**Sources for identity / nonmedal discrepancy:** [PowerPyx complete Gold list](https://www.powerpyx.com/red-dead-redemption-2-gold-medals-guide/) (E01) enumerates exactly ten; [GameFAQs Epilogue I](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/epilogue-part-i-pronghorn-ranch) (E02) separately lists non-medal **The Landowning Classes** and medal **Home of the Gentry?**; [GTA Base](https://www.gtabase.com/red-dead-redemption-2/story/epilogue-part-1) (E03) combines those two titles as one entry; [Red Dead Wiki](https://reddead.fandom.com/wiki/The_Landowning_Classes) (E16) calls the bank conversation an intermediary not in Story progress with no Gold. **Confidence: HIGH** for 10 medal entries; **naming/bookkeeping differences: DOCUMENTED**, do not invent a Rockstar backend ID. An outlet's “88th / 90th / 99th mission” numbers differ by inclusion of optional branches; those are guide-specific ordinals, never identifiers.

### Branch graph — not a forced single order

```text
Chapter 6 final story (Red Dead Redemption)
              |
            The Wheel [G]
              |
         Simple Pleasures [G]
            /        \\
   Farming [G]     Fatherhood, for Beginners [G]     (either order)
            \\        /
            Old Habits [G] (automatic)
             /       \\
    Jim Milton [G]    Fatherhood, for Idiots [G]     (either order)
             \\       /
             Motherhood [G] (automatic)
                /           \\
    The Landowning Classes   Gainful Employment [G]
         [NO MEDAL]            (possible in Epilogue II)
                |
      Home of the Gentry? [G] → Epilogue II transition
```

*If the story transitions before Gainful Employment is played, its Gold opportunity remains associated with the named Story entry, not automatically lost or awarded in Epilogue I. A live GameGuide must follow the player's actual in-game Story menu.* [E02,E10,E11]

### Source / verification key

- **E01:** PowerPyx master Gold Medal Guide, all ten criteria. **E02:** independent long-form GameFAQs Epilogue I chapter walkthrough/branching. **E03:** GTA Base chapter/mission taxonomy. **E04:** RDR2.org two-page Epilogue I guide. **P01–P10:** PowerPyx individual named mission walkthroughs. **G01:** Gamer Guides Epilogue I. **E16:** Red Dead Wiki Landowning Classes. Source URLs and claim ledger in **§12**.  
- **HIGH:** two or more independent credible guides agree, typically supported by in-game medal text reproduced in walkthroughs. **MEDIUM:** specific tactical/technical inference or only one detailed source. **DISPUTED:** incompatible sources or unreplicated behavior. **UNKNOWN:** cannot determine on current player's save or client. GameGuide must still check the actual Story medal conditions and current availability.

---

## 1. EP1-01 — The Wheel

**Identity:** `The Wheel` · **MANDATORY**, **1 medal** · auto-start immediately after Chapter 6 final mission; John, Abigail and Jack relocate, seeking work in Strawberry/Pronghorn Ranch. **Location:** Strawberry → Pronghorn Ranch, West Elizabeth. **No optional opening marker assumed.** [P01,E02,E04,G01]

**Gold contract:**
1. **Reach Pronghorn Ranch without dropping any supplies.** Qualitative **zero supply drops**, not “finish drive in X minutes.”
2. **Reclaim the stolen wagon within 1 minute (60 seconds).** This is a **local pursuit clock**, not an overall mission time requirement.  
Both separately supported by [P01][E01][E02][E04][G01]. **HIGH**.

**Field Guide-ready phases:**
- **A — Forced transition / wagon into Strawberry.**
  1. Once control returns, follow destination route toward Strawberry safely.
  2. Park the wagon near the general store objective; dismount and talk with the proprietor.
  3. **GOLD:** no timer on this first portion; do not risk collisions for speed.
- **B — Find work / prepare the delivery.**
  1. Visit Abigail at the doctor as prompted.
  2. Return to your supplied wagon after the loading sequence.
  3. Identify narrow bends and obstacles before departing; supplies must remain intact.
- **C — Deliver the supplies.**
  1. Follow roads to Pronghorn Ranch rather than cutting rough cross-country lines.
  2. Slow before turns, rocks/trees and wagon-width obstacles.
  3. **GOLD CRITICAL:** arrive without **dropping any supplies**; evaluate mission's actual checklist rather than assuming that a minor bump always fails.
- **D — Sudden theft / timed wagon recovery.**
  1. When attackers steal the wagon, move **immediately** to the nearby horse.
  2. Gallop abreast of the wagon and use the on-screen jump/board interaction.
  3. **GOLD CRITICAL:** reclaim **within 1:00**; avoid ramming horses/wagon while catching up.
- **E — Return to ranch / mission end.**
  1. Recover control of the wagon; guide it back to indicated drop-off.
  2. Finish the handover/cutscene, verify mission result separately.
  3. **SAVE/REPLAY:** no manual save during forced scenes assumed; later Gold can be replayed, but replay does not necessarily reconstruct original inventory/state.

**Missables and choices:** **No uniquely identified collectible required by these two Gold criteria.** Do not claim a generic mission-scene pickup exists. **Forced handoff** from Chapter 6 is genuine; GameGuide must protect actual pre-Epilogue save/status *before* initiating the previous chapter's finale, not manufacture an intermission during The Wheel. **Honor:** don't invent a mercy decision tied to wagon pursuers. **Intel seeds:** Wagon inertia / defensive boarding; auto-chain save semantics. [P01,E02,G01]

**Source confidence and authoring note:** HIGH two criteria and phase order; exact timing start for 1:00 should be verified against Story checklist if mission replay differs. **GameGuide path:** **NONE** (`rdr2/missions/epilogue_01/` absent). **Transfer:** create dedicated `the_wheel` Field Guide v1.1 with all phases after authorized migration, not from this document directly.

## 2. EP1-02 — Simple Pleasures

**Identity:** `Simple Pleasures` · **MANDATORY, 1 medal** · **requires The Wheel**, activation by **Tom Dickens** at Pronghorn Ranch, John uses “Jim Milton.” [P02,E02,E04,G01]

**Gold contract (HIGH):**
1. **Fill a bucket within 10 seconds when milking.** Timed activity segment; RDR2.org and Gamer Guides describe **multiple bucket attempts**. Do not assume first failed milking run irreparably ruins the objective until game feedback/checklist confirms.
2. **Complete mission within 5 minutes 15 seconds.** **Overall elapsed mission time**, not just cow work. Cinematic skipping recommended for a dedicated Gold attempt but player may prefer full story on first run. [P02,E01,E02,E04,G01]

**Chronological phases:**
- **A — Dickens and the ranch tour.**
  1. Talk to Dickens; follow Abe's introduction.
  2. Move directly to tour waypoint without unnecessary wandering **when timing Gold**.
  3. **GOLD / 5:15:** long dialogue scenes may consume time; cutscene timing has platform/behavior caveats, inspect Story result.
- **B — Meet the family / relocate.**
  1. Stop by the assigned home and meet Abigail/Jack.
  2. Resume following Abe when control returns.
  3. Do not open lengthy menu activity while on an overall clock.
- **C — Milking tutorial.**
  1. Follow the on-screen alternation rhythm for the two inputs; PC prompts override console glyphs.
  2. Rapidly repeat the milking action until a full bucket is produced.
  3. **GOLD CRITICAL / 0:10:** measure each bucket attempt against actual criterion; RDR2.org says two later attempts can still qualify.
- **D — Stable mucking.**
  1. Follow Abe to the stable; pick up pitchfork.
  2. Shovel marked piles into cart as game directs; guide reports some repeated work auto-completes.
  3. Replace pitchfork when the mission marker indicates.
- **E — Return to the house.**
  1. Sprint back to the house after final pile.
  2. Enter and complete scene; check total **≤5:15** in medal readback.
  3. Record Gold vs narrative completion vs actual save separately.

**Unique/Gold risk:** no verified one-time item at this job. **Ranch work mechanics (milking, shoveling)** become playable activities and are not themselves a chapter-wide collectible requirement. **High Honor:** no meaningful optional aggression. **Intel:** contextual milking inputs, cutscene-vs-clock uncertainty, ranch chore access. **Sources:** P02, E02, E04, G01. **GameGuide:** **NEEDS_GAMEGUIDE_AUTHORING**.

## 3. EP1-03 — Farming, for Beginners

**Identity:** `Farming, for Beginners` · **MANDATORY, 1 medal** · unlocked after Simple Pleasures, **parallel** to Fatherhood, for Beginners; **Tom Dickens**. [P03,E02,E04,G01]

**Gold contract (HIGH):**
1. **Fix the first section of fence within 1 minute 30 seconds.** Clock applies to first repair section, not whole ranch construction.
2. **Avoid being hit by the bull.** Qualitative **no successful bull impact**; do not conflate lasso dragging with “hit” without observed checklist evidence. [P03,E01,E02,E04,G01]

**Chronological phases:**
- **A — Begin fence lesson.**
  1. Start mission at Dickens' marker, listen to first assembly prompt.
  2. Hammer initial post and align each rail using current control hints.
  3. **GOLD CRITICAL / 1:30:** finish **first section** promptly; don't read unrelated menus while placement input active.
- **B — Continue ranch fence.**
  1. Complete remaining section prompts the game offers.
  2. Follow the sound/call for help as the scripted repair sequence ends.
  3. Do not invent a second timed fence medal.
- **C — The bull breaks loose.**
  1. Stay outside its direct charge line; observe body turn before closing.
  2. Chase as prompted and lasso at a safe opening.
  3. **GOLD CRITICAL:** don't allow a bull hit; move laterally/jump clear when it commits to a charge.
- **D — Calm and return livestock.**
  1. Re-lasso if scripted resistance breaks first capture.
  2. Approach carefully while using **Calm** until lead prompt appears.
  3. Lead animal back to indicated pen/barn and end.
  4. After the **other** parallel ranch lesson is complete, the next mission may auto-chain. A separate save between them is **not guaranteed**.

**Missable/Honor:** No researched distinct unique object in fence/bull scene. Avoid harming bull as a supposed Gold shortcut; the test is avoiding an impact, not killing livestock. **Intel:** two different clocks/conditions; lasso & calming. **Sources:** P03, E02, E04, G01. **GameGuide:** NEEDS_GAMEGUIDE_AUTHORING.

## 4. EP1-04 — Fatherhood, for Beginners

**Identity:** `Fatherhood, for Beginners` · **MANDATORY, 1 medal** · unlocked after Simple Pleasures; **David Geddes** at Pronghorn Ranch; parallel with Farming. [P04,E02,E04,G01]

**Gold contract (HIGH):**
1. **Tire out Jeremiah within 45 seconds.**
2. **Feed Jeremiah a treat.** No separate source-backed numerical timer; treat must be actually fed, not merely selected.
3. **Teach Jack to ride without his horse bucking him off.**
4. **Win race back to Pronghorn Ranch.** [P04,E01,E02,E04,G01]

**Chronological phases:**
- **A — Geddes, Duncan and Jeremiah.**
  1. Follow Abe to the boy with his difficult horse.
  2. Target Jeremiah and use the contextual **Calm/Pat** prompts until mountable.
  3. Recognize *mount/tire* is the timed phase, not the whole first discussion.
- **B — Tire Jeremiah and feed before transfer.**
  1. Once mounted, push horse's stamina down rapidly; jumping repeatedly is a corroborated tactic.
  2. **GOLD CRITICAL / 0:45:** finish tiring during the active timing window.
  3. **GOLD CRITICAL:** feed a legitimate horse treat **while still accessible**, before handing control back to Duncan (PowerPyx), or after Duncan's lesson if horse remains accessible (GameFAQs); these routes are an **explicit timing disagreement**, see §11.
- **C — Duncan's lesson / deliver foal.**
  1. Return Jeremiah and watch guided riding practice.
  2. Follow Mrs. Geddes into stable; follow prompts during mare/foal tutorial.
  3. Do not treat correct foal assistance as an extra unlisted Gold objective.
- **D — Jack learns to ride.**
  1. Return to Abigail's house and join Jack on the pony outing.
  2. Match Jack's speed; keep at controlled trot/canter, not excessive gallop.
  3. **GOLD CRITICAL:** ensure Jack is **never bucked off** and stay close enough to prevent mission failure.
- **E — Race back.**
  1. At stream/ride change, identify the **separate race** prompt.
  2. Accelerate and reach Pronghorn before Jack.
  3. Verify all four medal ticks and record only player-reported result.

**Honor/roleplay:** choosing to let Jack win conflicts with **Gold win-race** requirement; explain trade-off plainly. No forced moral “good father” verdict. **Potential resource:** horse treat assumed available by mission per guides, **actual player's item wheel may differ**; don't assert one owned outside this phase. **Intel:** horse tiring vs bonding; foal controls; choosing win vs narrative empathy. **Sources:** P04, E02, E04, G01. **GameGuide:** NEEDS_GAMEGUIDE_AUTHORING.

## 5. EP1-05 — Old Habits

**Identity:** `Old Habits` · **MANDATORY, 1 medal**, **automatically triggers immediately after BOTH** Farming and Fatherhood for Beginners; fight at Pronghorn. No ordinary player-selected new marker guaranteed. [P05,E02,E04]

**Gold contract (HIGH):**
1. **Defeat the Laramie without taking a hit.**
2. **Defeat the Laramie within 25 seconds.** Applies to **fist fight**, not the time to run over to disturbance; use actual Gold readback for uncertainty. [P05,E01,E02,E04]

**Chronological phases:**
- **A — Last ranch lesson ends / forced disturbance.**
  1. Recognize that second of the two prior missions may chain directly.
  2. Follow gunshot/disturbance marker to Abe's attackers.
  3. **PRE-FLIGHT:** prepare the no-hit/25-second fist fight *before* completing the second branch if possible; no assumed save gap.
- **B — Fight the Laramie leader.**
  1. Start defensive stance / block first incoming punch.
  2. Counter with compact combinations; avoid extended grapples or running far from opponent.
  3. **GOLD CRITICAL:** **zero hits taken** and opponent beaten within **0:25**.
- **C — Ground finish and outcome.**
  1. Continue prompted ground-combat action until scripted intervention.
  2. Let required scene resolve and verify medal result; don't invent a second kill/loot option.
  3. Next parallel Story missions become possible; actual markers still require live check.

**Tactical conflict:** PowerPyx recommends block-then-3-hit; GameFAQs mentions occasional opponent attack pattern variability. This is **not** evidence of impossible Gold or a guaranteed exploit. If Gold fails, log which of two objectives missed; repeat/replay through normal Story menu after mission completion. **Honor:** fist fight is scripted, not a suggestion to assault NPCs. **Intel:** melee block/counter mechanics, Gold counter timing. **Sources:** P05, E02, E04. **GameGuide:** NEEDS_GAMEGUIDE_AUTHORING.

## 6. EP1-06 — Jim Milton Rides, Again?

**Identity:** `Jim Milton Rides, Again?` · **MANDATORY, 1 medal** · after Old Habits, start via David Geddes; sibling Fatherhood, for Idiots can be done in either order. **Story:** Laramie ranch assault and raid on Hanging Dog Ranch. [P06,E02,G01]

**Gold contract (HIGH):**
1. **Get 10 kills while dual wielding sidearms.**
2. **Get 15 headshots.**
3. **Complete without taking any health items.** This prohibits **health-restoring consumption**, not every possible Dead Eye-only item; the item-health ambiguity must be tested before using consumables. [P06,E01,E02,G01]

**Chronological phases:**
- **A — Accept Geddes' thanks / night alarm.**
  1. Start at Geddes, return home per story and follow nocturnal alarm.
  2. Find Tom Dickens being attacked by Laramies near ranch buildings.
  3. **GOLD:** don't use Health-restoring provisions/tonics from start to final scene.
- **B — Defend Dickens without guns.**
  1. Engage first attacking ranch hands in hand-to-hand combat.
  2. Block/counter to avoid excessive damage and finish quickly.
  3. Gather with Geddes and prepare the cattle recovery; do not treat melee knockouts as “dual wield kills.”
- **C — Re-arm and ride to Hanging Dog Ranch.**
  1. Follow scripted return for firearms, then ride with allies toward the ranch.
  2. **GOLD CRITICAL:** select two compatible sidearms in the wheel **before** firing at the first Laramie guard.
  3. Confirm dual-wield display visually; do not assume a long gun meets this condition.
- **D — Opening gate firefight.**
  1. Engage from appropriate range, prioritizing precise headshots and protection from initial guards.
  2. **GOLD CRITICAL:** count **10 dual-wield kills** across the fight and **15 headshots** across the mission; they may overlap if headshots are scored with dual sidearms.
  3. Keep using dual sidearms until >=10 confirmed by medal result; avoid relying on allied kills.
- **E — Advance through ranch toward barn.**
  1. Move cover-to-cover; watch elevated tower/barn threats.
  2. Pursue additional headshots to reach **15**; approximately twenty hostiles is guide estimate, not a guaranteed kill count.
  3. **GOLD:** no Health items; Dead Eye-only tobacco advice is **conditional** on real wheel availability and whether it has no Health-restoring effect.
- **F — Leader confrontation / return.**
  1. Enter barn once firefight ends and respond to scripted ambush/grapple.
  2. Defeat leader in close combat; proceed through required narrative resolution.
  3. **LOOT OPPORTUNITY (OPTIONAL; not Gold):** GameFAQs locates a cash lockbox upstairs in the east-side ranch house and jewelry nearby. This is a source-backed **possible** in-mission find, **not claimed unique or guaranteed missable**. Loot only if genuinely accessible and desired; do not count cash/items until physically taken.
  4. Ride back and finish; separately reconcile Gold/headshots/dual kills, actual money and save status.

**Critical trade-off:** Guide reports suggest no whole-mission timer and no accuracy metric; optionally searching after combat should **not** be framed as Gold failure, but forced transition/accessibility must be verified. This mission is **not** a license to infer John's regular weapon ownership or specific ammo outside gameplay. **Sources:** P06, E02, G01. **GameGuide:** NEEDS_GAMEGUIDE_AUTHORING.

## 7. EP1-07 — Fatherhood, for Idiots

**Identity:** `Fatherhood, for Idiots` · **MANDATORY, 1 medal** · after Old Habits, starts at Abigail; sibling Jim Milton can be completed in either order. Drive with Jack to Strawberry for mail, then hostile confrontation and return. [P07,E02,G01]

**Gold contract (HIGH):**
1. **Kill all 3 enemies in Dead Eye.** Some guides recommend **one activation**, but literal Gold source says “all 3 in Dead Eye,” not a separate “one activation” metric; do not invent a stronger criterion.
2. **After the confrontation, return to Pronghorn Ranch within 1 minute 30 seconds.** Clock begins in the **post-fight return window**, not during the whole wagon tour. [P07,E01,E02,G01]

**Chronological phases:**
- **A — Abigail and ranch errands.**
  1. Start at family home; discuss trip and take Jack in wagon.
  2. Follow marked route into Strawberry and hand reins to Jack when required.
  3. No unlisted Gold requirement to drive perfectly or avoid every dialogue.
- **B — Strawberry post office.**
  1. Park by post-office marker, dismount and claim mail/package as prompted.
  2. Resume wagon, following Jack's driving and scripted concern.
  3. Do not attempt to “shake” followers prematurely; guide describes it as unavoidable.
- **C — Three-man confrontation.**
  1. At the fallen log/tree, dismount and face pursuing men.
  2. **GOLD CRITICAL:** use Dead Eye and eliminate **all three enemies while in Dead Eye**.
  3. Avoid an attempted pacifist conversation as a supposed alternative route; independent guides say combat is scripted and unavoidable.
- **D — Tight return trip.**
  1. Rejoin Jack and wagon **immediately**, skip dialogue/cinematic during dedicated timed Gold attempts if desired.
  2. **GOLD CRITICAL / 1:30:** guide-backed route starts **left of fallen tree**, cuts through a hairpin / between trees, then rejoins normal road. Do not drive straight into trees to save a second.
  3. Keep safe speed after shortcut; reach Pronghorn within the **post-confrontation** clock.
- **E — Report / resume.**
  1. Complete family scene and inspect two Gold criteria.
  2. Mission completion is not proof of a new save or of all mail/unique objects being physically retained.
  3. If other sibling still open, no claim the chapter has transitioned.

**Potential disagreement:** GameFAQs first-person commentary reports occasional abrupt wagon steering after cutscene; anecdotal, **NOT a universal mechanic**. A checkpoint restart may be attempted after miss, but no source establishes that all replay/cutscene/checkpoint rules are identical. **High Honor:** confrontation is unavoidable; no recommendation to shoot civilians/animals. **Sources:** P07, E02, G01. **GameGuide:** NEEDS_GAMEGUIDE_AUTHORING.

## 8. EP1-08 — Motherhood

**Identity:** `Motherhood` · **MANDATORY, 1 medal**, **auto-start after BOTH** Fatherhood for Idiots and Jim Milton Rides Again. Sadie's telegram, family separation and ranch-work time jump. [P08,E02,E04,G01]

**Gold contract (HIGH):** **Complete within 1 minute 30 seconds (90 s)**. Only **one** listed medal condition; this is a mission-wide timed objective despite story duration/time montage. [P08,E01,E02,G01]

**Chronological phases:**
- **A — Telegram at ranch.**
  1. From automatic start, follow the telegram prompt immediately to read message.
  2. **GOLD CRITICAL / 1:30:** during a dedicated medal attempt, move promptly through controllable windows; skip lengthy cinematics if player elects to prioritize timer.
- **B — Abigail's departure.**
  1. Return to John/Abigail house and observe letter/conversation.
  2. **PRESERVATION:** this is an authored story letter/scene; *do not claim* the letter has been separately retained as an inventory collectible without Satchel/Documents evidence.
  3. Transition to next work objective without side detour.
- **C — Choose one chore / montage.**
  1. Choose **one** of three available ranch chores (cow milking, mucking or fencing).
  2. **GOLD / timing:** cow milking is the closer, faster option in GameFAQs/Gamer Guides; do just enough for scripted montage to begin.
  3. Let time passage cinematic occur; do not invent extra completed chores or money paid.
- **D — Geddes conversation / transition to branch missions.**
  1. Head immediately to Geddes when prompted, finish loan recommendation scene.
  2. Verify medal result; **next branches** Landowning bank and Sadie's Valentine mission become available.
  3. **SAVE/CONTINUITY:** some previous item/weapon access changes through the Epilogue; after regaining control inspect actual current wheel and save, not assumed inherited equipment.

**Replay and enjoyment trade-off:** this mission contains pivotal family dialogue. **For first-time immersive play**, preserve cinematics if desired and later replay for **1:30 Gold**; guides recommending skipping cutscenes are tactics, not mandatory story experience. **Don't call “all scenes watched” Gold impossible** without actual test. **Sources:** P08, E02, E04, G01. **GameGuide:** NEEDS_GAMEGUIDE_AUTHORING.

## 9. EP1-09A — The Landowning Classes (supporting stage, NO medal)

**Identity:** `The Landowning Classes` · story setup after Motherhood, bank/loan introduction with **Ansel Atherton** in Blackwater. GameFAQs and Red Dead Wiki treat it as separate narrative interaction that **does not show as a Gold-eligible Story medal entry**; GTA Base groups it with Home of the Gentry. [E02,E03,E16]

**Gold eligibility:** **NONE / 0**. **DO NOT** attach the subsequent **2:30** time criterion to this opening cutscene unless in-game mission replay log explicitly combines them; GameFAQs clearly distinguishes stage names.

**Field Guide-ready supporting phases:**
- **A — Travel to the bank.**
  1. After Motherhood, select Blackwater bank marker **if actually available**.
  2. Enter and speak to Atherton concerning the land loan.
  3. No fabricated cutscene Gold timer or property purchase in player inventory.
- **B — Loan arrangement / new location.**
  1. Complete conversation.
  2. Observe the new objective at Beecher's Hope where squatters must be addressed.
  3. Proceed to **separate Gold-bearing Home of the Gentry?** stage when ready.
- **C — Handoff.**
  1. GameGuide should show a **no-medal Story setup tile**, not Gold target.
  2. If a player sees combined title in actual Story menu, map it to one composite shelf reference with only **one** Gold identity. Capture title as screenshot when authoring.

**One-time opportunities:** the American Inferno, Burnt Out Stranger chain is reported to unlock after this bank/property strand, exact first-marker after setup vs final mission depends on source and player observation. **No claim of a necessary urgency or a vanishing chance**. **Honor:** merely arranging loan is not a moral choice. **Sources:** E02, E03, E16, E17. **GameGuide:** NEEDS_GAMEGUIDE_AUTHORING *supporting phase/reference*, not medal-bearing tenth or eleventh.

## 10. EP1-09B — Home of the Gentry?

**Identity:** `Home of the Gentry?` · **MANDATORY, 1 medal** · starts at Beecher's Hope after the Landowning Classes bank scene. Some directories call composite **The Landowning Classes / Home of the Gentry?**; that composite still carries **one medal**. [P09,E02,E03,E16]

**Gold contract (HIGH):** **Complete within 2 minutes 30 seconds (150 s).** Do not add cash spent, squatters killed or honor choices as extra Gold requirements. [P09,E01,E02,E03,G01]

**Chronological phases:**
- **A — Beecher's Hope / squatters.**
  1. Enter the indicated property scene and approach squatters.
  2. **HONOR CRITICAL:** Choose peaceful **$10 payment** to remove them without violence and gain Honor per guides, OR choose force with Honor loss. **For a High Honor first playthrough, favor $10** if available.
  3. **GOLD / 2:30:** respond promptly; both approaches are reported feasible within limit, although shooting can be faster. There is no need to kill for Gold.
- **B — Bank signing.**
  1. Follow scripted return/transition to Blackwater bank after squatters leave.
  2. Finish loan/purchase scene; do not treat “loan approved” as immediately earned cash.
  3. Maintain quick transitions if aiming for Gold; cinematic skipping is an optional time strategy.
- **C — Uncle encounter.**
  1. Speak/meet Uncle outside the bank.
  2. Mount up for ranch return when prompted.
  3. No reported unique collectible or different Gold task tied to this interaction.
- **D — Return to Beecher's Hope.**
  1. Ride back along a practical straight/open route, avoiding hard collisions and not losing Uncle far behind.
  2. **GOLD / 2:30 overall:** GameFAQs suggests a direct cross-field cut instead of blindly following long yellow trail; route is advice, not a guaranteed seconds claim.
  3. Finish ranch montage and chapter transition; after player report verify medal and **actual save** separately.

**Chapter boundary:** This may usher Epilogue II **even when Gainful Employment remains available to be played there**; do not claim the optional order automatically forfeits that mission's Gold. **Side opportunity:** Evelyn Miller Stranger strand relates to property unlock but is **not an extra Gold-bearing Story entry**; its physical rare pocket watch belongs Atlas D22 after actual stage. **High Honor and financial note:** $10 spending is **reported possible** at this choice, not automatically deducted from user's account. **Sources:** P09, E02, E03, E17, G01. **GameGuide:** NEEDS_GAMEGUIDE_AUTHORING.

## 11. EP1-10 — Gainful Employment

**Identity:** `Gainful Employment` · **MANDATORY Story entry / 1 Gold**, **after Motherhood**, can be taken **before or after Home of the Gentry? chapter transition**. Begins by speaking with **Sadie Adler in Valentine saloon**, travels to Strawberry for fugitive **Nathan Kirk**. PowerPyx's visible “Quest Giver: Ansel Atherton” conflicts with its **own** description of Sadie; GameFAQs, GTA Base and RDR2.org explicitly support **Sadie**. **Do not copy Atherton as giver.** [P10,E02,E03,E04,G01]

**Gold contract (HIGH):**
1. **After arriving in Strawberry, locate bounty within 30 seconds.** It's a local arrival/search clock.
2. **After mounting your horse, catch AND hogtie bounty within 1 minute 15 seconds.** **Both capture and hogtie** must fit clock; do not stop at merely lassoing. [P10,E01,E02,E04,G01]

**Chronological phases:**
- **A — Accept Sadie's work at Valentine.**
  1. Approach actual Sadie marker in saloon and begin mission.
  2. Ride with Sadie towards Strawberry; do not assume the rider can pre-capture Kirk before town arrival.
  3. Review the forthcoming **two separately triggered clocks**, equip lasso on demand.
- **B — Find the target in Strawberry.**
  1. At arrival/control handoff, go **immediately to the Welcome Center/hotel**; don't interview unrelated townspeople.
  2. Head upstairs to **room 3**, confront door when prompted; Nathan escapes via balcony.
  3. **GOLD CRITICAL / 0:30:** register discovering him within the time budget; check actual mission log for precise moment.
- **C — Mount and track Kirk.**
  1. Jump/descend from balcony safely and mount promptly.
  2. Follow fugitive while maintaining a clean line; anticipate his later turn toward Sadie, cutting across open approach as corroborated by GameFAQs/PowerPyx.
  3. **GOLD CRITICAL / 1:15 after mounting:** lasso *and then hogtie* before window closes; don't treat an uncuffed lasso throw as finished.
- **D — Transport / finish.**
  1. Secure Kirk and place him on **Sadie's horse** as directed.
  2. Complete debrief and verify payout separately from promised reward.
  3. Report mission Gold and saved-game status independently; if completed during Epilogue II, classify Story mission by its **actual named identity**, not which chapter is currently being played.

**Honor/preservation conflict:** Some guides propose **shooting the fugitive's horse** to shortcut the chase; commenters report mission failure if rider dies under fallen horse and guides acknowledge Honor loss. **Do not recommend animal shooting to a High Honor player by default**. The normal lasso route is independently documented and meets both Gold clocks with planning. **No verified uniquely missable item** tied to Kirk that is required for official 100%. **Sources:** P10, E02, E04, G01, E03. **GameGuide:** NEEDS_GAMEGUIDE_AUTHORING.

---

## 12. Chapter evidence, conflicts, dependencies, completion and transfer

### 12A. Evidence/source register — independently checked 2026-10-17

**Evidence classes:** independent detailed editorial guides **G**; dated specialist how-to **W**; community wiki **C** (corroboration only); original GameGuide/Hub contracts **R** (coordination, not independent gameplay evidence). Confidence is **claim-scoped**, not a guarantee all UI behavior has been tested. All external sources listed here were reviewed as published web references on **2026-10-17**; these are historical guides and **not** 2026 patch or player-play observations.

| ID | Publisher/source / URL | Source date and scope | Narrow use |
|---|---|---|---|
| **E01** | [PowerPyx complete Gold Guide](https://www.powerpyx.com/red-dead-redemption-2-gold-medals-guide/) | 2018-10-25 · G | Ten Epilogue I Gold entries, 21 Gold criteria, full-game 104 and replay caveat |
| **E02** | [GameFAQs Epilogue I chapter](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/epilogue-part-i-pronghorn-ranch) | 2019-09-13 v1.00 · G | Branches, no-medal bank scene, chronological phase-level steps, First-play vs replay economy |
| **E03** | [GTA Base Epilogue I overview](https://www.gtabase.com/red-dead-redemption-2/story/epilogue-part-1) | date not stated; current web listing · G | Composite Landowning/Home name, 10 grouped entries, epilogue region context |
| **E04** | [RDR2.org Epilogue I Pt 1](https://www.rdr2.org/guides/epilogue-1-missions-and-gold-medals-guide/) and [Pt 2](https://www.rdr2.org/guides/epilogue-1-missions-and-gold-medals-guide/2/) | 2019-02-08; updated 2023-01-09 · G | Cross-check all missions, time windows and course; **author's ordinal numbers differ** |
| **G01** | [Gamer Guides Epilogue I guide](https://www.gamerguides.com/red-dead-redemption-2/guide/walkthrough/epilogue-part-1/) | guide release 2018-10-28; update 2021-01-31 · G | Independent Gold/phase confirmation; Jack and horse-treat timings; Home of Gentry route |
| **P01** | [PowerPyx — The Wheel](https://www.powerpyx.com/red-dead-redemption-2-the-wheel-walkthrough/) | 2018-11-25 · W | Supplies intact and one-minute stolen wagon; phase order |
| **P02** | [PowerPyx — Simple Pleasures](https://www.powerpyx.com/red-dead-redemption-2-simple-pleasures-walkthrough/) | 2018-11-25 · W | Milk 10s and mission 5:15; ranch tour/shoveling |
| **P03** | [PowerPyx — Farming, for Beginners](https://www.powerpyx.com/red-dead-redemption-2-farming-for-beginners-walkthrough/) | 2018-11-25 · W | Fence first section 1:30 and bull no-hit |
| **P04** | [PowerPyx — Fatherhood, for Beginners](https://www.powerpyx.com/red-dead-redemption-2-fatherhood-for-beginners-walkthrough/) | 2018-11-25 · W | Jeremiah 45s, treat, Jack bucking/race, foal birth |
| **P05** | [PowerPyx — Old Habits](https://www.powerpyx.com/red-dead-redemption-2-old-habits-walkthrough/) | 2018-11-25 · W | Forced chain after both branches, melee 0 hits/25s |
| **P06** | [PowerPyx — Jim Milton Rides, Again?](https://www.powerpyx.com/red-dead-redemption-2-jim-milton-rides-again-walkthrough/) | 2018-11-25 · W | Dual-wield ten, fifteen headshots, zero Health items; barn and ranch phases |
| **P07** | [PowerPyx — Fatherhood, for Idiots](https://www.powerpyx.com/red-dead-redemption-2-fatherhood-for-idiots-walkthrough/) | 2018-11-25 · W | Three Dead Eye kills and 1:30 return |
| **P08** | [PowerPyx — Motherhood](https://www.powerpyx.com/red-dead-redemption-2-motherhood-walkthrough/) | 2018-11-25 · W | Forced chain and 1:30 timer |
| **P09** | [PowerPyx — Home of the Gentry?](https://www.powerpyx.com/red-dead-redemption-2-home-of-the-gentry-walkthrough/) | 2018-11-25 · W | 2:30 mission; $10 bribery; original title confusion in comments |
| **P10** | [PowerPyx — Gainful Employment](https://www.powerpyx.com/red-dead-redemption-2-gainful-employment-walkthrough/) | 2018-11-25 · W | 30s discovery, 1:15 catch+hogtie, **giver heading mislabels Ansel** |
| **E16** | [Red Dead Wiki — The Landowning Classes](https://reddead.fandom.com/wiki/The_Landowning_Classes) | community maintained · C | Explicit *intermediary bank scene; not in Story progress; no medal* |
| **E17** | [GTA Base — The Landowning Classes/Home of Gentry](https://www.gtabase.com/red-dead-redemption-2/missions/home-of-the-gentry) | current listing · G | Grouped identity, mission giver Atherton, one Gold 2:30 |
| **E18** | [GTA Base — The American Inferno, Burnt Out](https://www.gtabase.com/red-dead-redemption-2/strangers/the-american-inferno-burnt-out) | current listing · G | Separate Stranger chain unlock and **Platinum Pocket Watch** late personal-preservation note |
| **E19** | [Guides4Gamers — Home of the Gentry?](https://guides4gamers.com/red-dead-redemption-2/quests/home-of-the-gentry/) | 2019 guide; updated online · G | $10 vs violent squatters, Honor effect, direct return to Beecher's Hope |
| **R01** | [Original GameGuide Field Guide v1.1](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/walkthrough_presentation.md) and [Preflight](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/mission_preflight.md) | player-approved 2026-10-13 · R | Binding presentation/Gold/missable/save contract, **not an Epilogue-specific played guide** |
| **R02** | [Hub mission source adapter](../source_adapter_v1.md), [Wave 1 plan](../../agents/mission_parallel_wave1_v1.md), [Knowledge contract](../../knowledge/record_contract_v1.md) | 2026-10-17 · R | Read-only source mapping, exact task limits, research vs adoption distinction |
| **R03** | [Hub Atlas D22 rare equipment](../../systems_atlas/dossiers/d22_unique_equipment_compendium_v0_1.md), [D24 replay/saves](../../systems_atlas/dossiers/d24_replay_saves_medals_v0_1.md), [D08 chapter windows](../../systems_atlas/dossiers/d08_chapter2_limited_windows_v0_1.md), [D18 Stranger strands](../../systems_atlas/dossiers/d18_stranger_strands_quests_v0_1.md) | REVIEW PENDING · R | Preservation / recovery / external completion boundaries, **not automatically adopted tactics** |

**No game footage inspected frame-by-frame and no live Epilogue attempt conducted.** Material numerical Gold text was independently cross-checked between E01 + per-mission Pxx + E02/E04/G01. More than one reference in a paragraph corroborates the *core* criterion but may disagree on tactic or control timing. “Checked” ≠ source was published in 2026.

### 12B. Claim ledger — decisive points with evidence and confidence

| Claim | Narrow supported statement | Sources | Confidence/required check |
|---|---|---|---|
| **M42-C01** | Epilogue I has **10 Gold entries**, not 11 | E01,E03,E04 | **HIGH**, separately protect no-medal Landowning stage |
| **M42-C02** | Landowning Classes is no-medal bank stage before Home of Gentry | E02,E16,E17 | **HIGH** concept, grouped menu presentation varies |
| **M42-C03** | Farming/Fatherhood for Beginners can be taken in either order; Old Habits follows BOTH automatically | E02,P03,P04,P05 | **HIGH** |
| **M42-C04** | Jim Milton/Fatherhood for Idiots can be taken either order; Motherhood after BOTH automatically | E02,P06,P07,P08 | **HIGH** |
| **M42-C05** | Gainful Employment may be completed in Epilogue I or Epilogue II | E02,P10,G01 | **HIGH**, don't mark missed at chapter switch |
| **M42-C06** | Wagon supplies zero drops and 1:00 recovery | E01,P01,E02,E04 | **HIGH**, specific 1:00 timer trigger based on scene |
| **M42-C07** | Milking 0:10, overall Simple Pleasures 5:15 | E01,P02,E02,G01 | **HIGH**, extra attempts source-specific |
| **M42-C08** | Fence first section 1:30 and zero bull hits | E01,P03,E02,E04 | **HIGH** |
| **M42-C09** | Jeremiah 0:45, actual feed, Jack no bucking, win race | E01,P04,E02,G01 | **HIGH**, treat timing nuanced |
| **M42-C10** | Laramie melee 0 hits within 0:25 | E01,P05,E02 | **HIGH** |
| **M42-C11** | Jim Milton 10 dual-sidearm kills, 15 headshots, zero Health items | E01,P06,E02 | **HIGH**, conditional Dead Eye-only consumable distinction |
| **M42-C12** | Fatherhood for Idiots 3 Dead Eye kills and 1:30 wagon return | E01,P07,E02,G01 | **HIGH**, single activation not verbatim extra requirement |
| **M42-C13** | Motherhood overall <=1:30 | E01,P08,E02,G01 | **HIGH**, speed/cutscene advice not binding for plot |
| **M42-C14** | Home of the Gentry? <=2:30; payment of $10 peaceful alternative | E01,P09,E02,E19 | **HIGH**, player cash never assumed |
| **M42-C15** | Gainful 0:30 find bounty, <=1:15 after mount catch+hogtie | E01,P10,E02,G01 | **HIGH**, Honor-hostile horse-shot shortcut optional/rejected |
| **M42-C16** | Main-save inventory and mission-replay Gold are distinct; cinematics may be skipped tactically | E01,R01,R03 | **HIGH** separation; client-specific timing **NEEDS_RECHECK** |
| **M42-C17** | Evelyn Miller chain separate Stranger after property strand; unique watch only at later request | E18,R03 | **MEDIUM-HIGH** chain, item timing requires Stranger dossier confirmation |
| **M42-C18** | Home of Gentry chapter transition may precede Gainful; GameGuide can't assume forced order | E02,P09,P10 | **HIGH** |
| **M42-C19** | PowerPyx Gainful Employment giver metadata “Ansel Atherton” contradicts story's Sadie | P10,E02,E03,E04 | **HIGH** mismatch documented; Sadie is actual encounter |
| **M42-C20** | Optional Hanging Dog Ranch loot listed, not mandatory Gold or proved one-time asset | E02,P06 | **MEDIUM** physical contents; player pickup **UNKNOWN** |

### 12C. Contradiction and misclassification register

| ID | Disagreement / ambiguous interpretation | Safe transfer resolution |
|---|---|---|
| **M42-X01** | GameFAQs + Wiki separate **The Landowning Classes (no medal)**, GTA Base groups with **Home** and PowerPyx primarily names Home | **11 story-stage titles / 10 Gold entries**, one composite identity if actual Story menu combines. Never invent a medal for bank scene. |
| **M42-X02** | Guide-specific ordinal: PowerPyx calls The Wheel “88th,” RDR2.org “83rd,” GTA Base “90th” | Numbers are author ordering conventions, not persistent mission IDs. Use exact names + in-game Story menu. |
| **M42-X03** | Gainful Employment described as final Epilogue I mission, yet GameFAQs confirms it can occur Epilogue II | Label **epilogue cross-boundary**; potential chapter-migration of quest doesn't remove Gold eligibility. |
| **M42-X04** | PowerPyx `Gainful Employment` heading says **Quest Giver: Ansel Atherton** while quest/body/story is **Sadie** | **Metadata typo**; corroborate Sadie through actual Valentine marker/independent GameFAQs/GTA Base. |
| **M42-X05** | Jeremiah treat advised **before Duncan** in PowerPyx, **after foaling lesson** in GameFAQs | **TIMING CONDITION:** feed when safely accessible; prefer **before return to Duncan** if treat wheel works. If missing, check horse near corral after Duncan; don't guarantee either window for every replay. |
| **M42-X06** | “Skip all cutscenes” speed tactic vs player's first-play immersion and some user reports about timers | Offer **first-view narrative / replay for time Gold** option. Do not imply cutscene skipping is mandatory for story or identical across clients. |
| **M42-X07** | GameFAQs recommends stopping wagon by threatening pursuer; PowerPyx/Gamer Guides emphasize leap onto wagon | Both are guide routes; **reclaim within 1:00** is the fixed criterion. Choose on-screen boarding/threaten prompt as available. |
| **M42-X08** | “All 3 Dead Eye kills” vs Gamer Guides “one Dead Eye sequence” | Only count literal **all 3 enemies in Dead Eye** unless Story screen shows same-use requirement. One activation is **recommended tactic**, not extra criterion. |
| **M42-X09** | “No health items” interpreted as “no tonics whatsoever” vs Dead Eye-only item suggestion | Distinguish **Health-restoring effect** from Dead Eye-only replenishment, but verify item details on equipped wheel before use. For highest certainty, avoid consumables during Gold. |
| **M42-X10** | Nathan Kirk horse shooting is advised as shortcut; reported risks include **Honor loss and accidental bounty death / mission failure** | For High Honor, use **lasso and route-intercept**, no horse cruelty needed. Don't claim specific NPC spawn/damage reproducible. |
| **M42-X11** | “Old Habits 25s melee always easy” vs GameFAQs account of variable grapples | Strict <=0:25 and no-hit are real; **guaranteed timing based on punches** is not. |
| **M42-X12** | Shack/hideout loot after Jim Milton fight vs “unique must grab” alarm | Only generic optional lockbox/jewelry reported in guide. Preserve when observed, but no verified chapter-exclusive rare item or official 100% requirement. |
| **M42-X13** | Epilogue I unlocks areas/gear; guides differ on **when** John's complete satchel/weapons become usable | Don't write ownership/unlock record from narrative mission alone. Inspect actual wheel after Motherhood and current original campaign if needed. |
| **M42-X14** | “No Gold requirement” for Landowning vs Home's 2:30 can be accidentally attached to bank cutscene | Separate no-medal intro from Home's active timed mission; display them as linked pieces, not two Gold tiles. |
| **M42-X15** | Completion of some Stranger chains after property gate vs suggestion all Epilogue I side content must be cleared before chapter exit | No documented blanket irreversible Epilogue I deadline. Reserve actual Stranger chains/unique watch by their own observed phases, not chapter panic. |

### 12D. Chapter-level missable / preservation / side content classification

| Opportunity | Classification | Condition / actionable note | Gold or completion universe |
|---|---|---|---|
| **Previous Chapter 6 exit** | **HARD story transition** | The Wheel follows final Chapter 6 mission automatically; original GameGuide must assess Arthur-era unique/optional mission windows **before** Chapter 6 finale. Not an Epilogue I free-roam activity. | Mission safety, optional exhaustive / separate earlier achievements |
| **The Wheel supplies intact** | **ACTION-CRITICAL GOLD**, reversible through later replay | No collisions losing cargo; timed pursuit is separate. | 1 Gold criterion each; not collectible proof |
| **Jeremiah treat** | **GOLD opportunity window** | Feed the specific horse during appropriate mission interaction, not just buy/hold treat. | One Gold criterion |
| **Two automatic mission chains** | **NO-MANUAL-PAUSE ASSUMPTION** | Completing both ranch-lesson siblings triggers Old Habits; completing both second siblings triggers Motherhood; warn before final sibling if saving desired. | Save / Gold prep, not rare loot |
| **Jim Milton Ranch interior valuables** | **OPTIONAL; item-level unknown** | GameFAQs describes a lockbox/jewelry at Hanging Dog Ranch. Physical acquisition and future revisitability **unverified**. No named unique weapon proven here. | Economy/optional exhaustive; not Epilogue I Gold |
| **Motherhood family letter/scene** | **STORY / DOCUMENT OBSERVATION** | Player may view important letter, but no sourced mandatory physical pickup or proven one-time document claim in mission. | Story/immersion; don't invent missable |
| **Home of Gentry squatters** | **REAL HONOR/RESOURCE CHOICE** | $10 peaceful payment gains Honor; shooting is possible but undermines High Honor; both reportedly feasible under Gold time. | Honor / money choice; no different Gold task |
| **Gainful Employment horse harm** | **AVOIDABLE Honor + failure risk** | Horse-shooting “shortcut” not necessary. Normal lasso capture supports Gold. | High Honor + capture objective |
| **The American Inferno, Burnt Out** | **SEPARATE STRANGER CHAIN, not Gold** | After land/property strand, may remain into Epilogue II. Unique Platinum Pocket Watch reward later if personally preserving; verify exact action at actual chapter/window. | Stranger / personal exhaustive, not an eleventh Gold |
| **New Austin / West Elizabeth roam** | **GENERAL UNLOCK/REGION EXPANSION**, not item credit | Map accessibility changes after earlier Story. No particular POI, bone, horse, recipe or rare gun is acquired merely by opening region. | Other Atlas goals and official subsets on their own evidence |
| **Epilogue II handoff** | **STORY CHAPTER CHANGE** | Home of Gentry transitions; Gainful may carry forward. Neither authoring research nor passage of time is proof of Gold saved. | Mission progress only after player report |

**Honor-first rule:** gold quality often **does not demand morally worse choices**; for Home choose peaceful payment (cost $10) and still ride quickly; for Gainful capture human bounty with lasso instead of shooting a horse. Confirm live availability and player's actual funds only at scene. **No hard missable unique equipment has been independently established for these ten Gold missions** by this research. That is a bounded research finding, not proof no one-time voice lines/items exist.

### 12E. GameGuide transfer queue — no double records, no migration by this worker

**Current source check:** [Original mission directory](https://github.com/L33TW0RLD/rdr2/tree/main/missions) contains `chapter_01`, `chapter_02`, `templates`, **no epilogue directory**. Every Gold-bearing entry above has status `NEEDS_GAMEGUIDE_AUTHORING`, NOT “missing from a player's save” or “failed medal.”

**Proposed future authoring paths** (names intentionally **not** official operation IDs and **not created here**):
- `rdr2/missions/epilogue_01/<the_wheel>.md`
- `rdr2/missions/epilogue_01/<simple_pleasures>.md`
- `rdr2/missions/epilogue_01/<farming_for_beginners>.md`
- `rdr2/missions/epilogue_01/<fatherhood_for_beginners>.md`
- `rdr2/missions/epilogue_01/<old_habits>.md`
- `rdr2/missions/epilogue_01/<jim_milton_rides_again>.md`
- `rdr2/missions/epilogue_01/<fatherhood_for_idiots>.md`
- `rdr2/missions/epilogue_01/<motherhood>.md`
- `rdr2/missions/epilogue_01/<landowning_classes_setup_and_home_of_gentry>.md` (**one medal-bearing Home; bank no-medal step**)
- `rdr2/missions/epilogue_01/<gainful_employment>.md` (actual completion may happen in Epilogue II).

**No filenames/operation IDs ratified.** Decide final shelf names only after checking GameGuide naming conventions, actual mission Story display and Epilogue II specialist crosslinks. The next owner-authorized GameGuide writer must:
1. Run approved preflight on each named mission against future live campaign evidence.
2. Convert A→final **research phases** to full Field Guide v1.1 phases with typically **2–5 actionable rows per phase**, gold metric tiles, inline risks at exactly active scene, optional independent Intel and a simple medal/note report.
3. Cross-check *every timer's trigger* and medal wording with **in-game Story checklist**, not merely sources; never use unrelated “Chapter Gold 10/10” to increment current campaign.
4. Keep no-medal Landowning as a supporting stage and *Gainful* cross-boundary possibility.
5. Mark any source conflict needing on-screen test, especially Jeremiah feed window, cutscene timer, no-health items, one-Dead-Eye-use assertion, and Home honor-vs-timer route.
6. Verify no later Epilogue II author counted Gainful again; complete coverage reconciliation by **mission identity** across both packs.
7. Retain report integrity: medal **earned**, Story-menu medal **visible**, and save/slot **persisted** are separate player observations.
8. Leave optional Stranger/collector content in correct domain; integrate only a **specific**, actually active irreversible warning, not a spoiler-heavy side-content sweep.

### 12F. Acceptance / open questions / bounded handoff

**Research coverage audit:** **10** medal-bearing identities, **1** explicitly nonmedal setup, **21** independently cross-checked Gold conditions, named conditional gates and branching, **chronological A→final phases** for **all 11** narrative stages, High Honor/save/optional reward warnings, original repo transfer status for each, independent dated source register and contradiction ledger. No source reports that this author's research itself confers Story completion.

**Remaining factual questions to verify in gameplay or later GameGuide authoring:**
- Exactly which in-game Story mission card labels the composite bank/land mission in the player's installed version.
- Which reward/pickup counters persist through Gold **replay** versus original Story inventory (D24 review pending).
- Timer boundaries including cutscenes/checkpoints, especially **Motherhood** and **Home**.
- Jeremiah's exact treat-access window if first opportunity skipped.
- Whether optional Hanging Dog Ranch lockbox remains accessible later, and exact physical loot if picked up.
- Whether a character's unique letter becomes a Documents inventory item after Motherhood.
- Epilogue I→II edge when Gainful still pending and which mission card appears in player's Story record.

**Source disagreements are not ratified gameplay instructions.** All claims are `RESEARCHED — REVIEW PENDING`; no owner decision recorded, no GameGuide file edited, no player progress inferred. **Coordinator next action:** verify exact 3-file lease, independent source checklist, reconcile Epilogue II overlap, then review for research integration, not direct game-authority migration.
