# D18 — Stranger Strands, Optional Quest Continuity and Real Closing Windows

**Record ID:** `ATLAS.D18` · **Version:** 0.1 · **Kind:** Story Mode mechanics dossier  
**Maturity:** **RESEARCHED — REVIEW PENDING**, not ADOPTED, not an authorized GameGuide walkthrough  
**Source-check date:** **2026-10-17** (source consultation; NOT a current game-version or patch verification)  
**Task:** `atlas-strangers-023`, [Issue #30](https://github.com/L33TW0RLD/rdr2-hub/issues/30) · **Lease branch:** `agent/atlas-stranger-023`  
**Applicability:** Red Dead Redemption 2 **Story Mode**, PS4/Xbox One and PC-era gameplay; corresponding backward-compatible devices generally. No platform-specific menu test or original-game save was inspected. Do **not** import Red Dead Online Stranger-giver/rank rules.  
**Spoiler budget:** T0/T1 first; future chapter/epilogue cases in clearly separated **T2** subsection (§4). No plot outcomes or walkthrough routes.  
**Primary proposed taxonomy leaves:** `S21.M01` Stranger introductions, `S21.M02` staged continuity, `S21.M03` choices/rewards, `S21.M04` time-limited/honor-linked borderline cases; `S30.M05` chapter opportunity windows is **read-only D08 ownership**, not rewritten. Sxx IDs/typed edges still **PROPOSED/INDEXED**; an independent adopter must ratify.  
**Progress authority:** the existing original [`L33TW0RLD/rdr2/campaign/`](https://github.com/L33TW0RLD/rdr2/tree/main/campaign), supported by player observation/GameGuide. Current chapter, white markers, quest stages, time, account achievements, save slots, mission completion and unique items all **UNKNOWN** here. A source describing an available mission cannot prove the player saw or finished it.

> **Safe rule:** a white `?` may **introduce** a Stranger, while a named follow-up, task prompt, mailed item or environmental precondition may **continue** one. For official 100%, qualify and **finish 10 complete Stranger strands**; do not multiply the initial conversations by 10. Ordinary chance encounters and optional Honor **Story** stages are different categories. A specific source-backed disappearing opportunity receives an urgency warning only when the player's **observed circumstances** meet that window. [C01–C06]

## 1. Definitions, interactions and confirmation — S21.M01/M02

### Separate five superficially similar systems

| Encounter type | Entry signal / example | Meaning and reliable check | Never automatically infer |
|---|---|---|---|
| **Named Stranger introduction** | **White question-mark** map/minimap prompt (some guides call it grey `?`); approach a person, listen and accept/perform initial interaction | A named multi-part questline **may** begin; inspect exact title, journal/tasks, later named marker | That the entire strand is complete or `Western Stranger` counted |
| **Multi-stage Stranger continuation** | New **named white marker**, follow-up NPC, mail invitation, discovered evidence, return after elapsed time or a story gate | Investigate **that strand's** next stage; completed stage is not necessarily completed *strand* | Stage automatically returns tomorrow, or earlier objectives will count if omitted |
| **Ordinary chance encounter** | **Small white/grey ambient dot**, cries for help, passing injured traveler/robbery/race, night-time ambush | Distinct **25 Chance Encounters** Total Completion subset, not one of ten Stranger strands | That engaging with a random stranger confers a full named questline |
| **Optional Honor Story mission** | Could be yellow **or white** marker or a camp/letter activity; appears under Story mission tracking | **Lending a Hand** is a different, chapter-sensitive achievement; read-only D08 owns its expiry map | White symbol by itself equals Stranger progression; any Story replay retroactively repairs it |
| **Collectible/request Strand** | A `?` introduces collector, then hunt / mail / return / hand in requested materials | One questline may overlap **separate** official collection targets (carvings, bones, fish, etc.) | Merely collecting the items completes the chain without relevant mail/return/receipt |

[Sources C01,C02,C03,C05,C06,C07,C08,C20.]

**Observed feedback:** map icon/quest giver name; in-game `Tasks`/journal (platform prompt varies); `Pause → Progress → Total Completion → Strangers` counter/check; `Progress → Story` for optional Honor Story where present; relevant collectible check and platform trophy **separately**. A named white marker may disappear temporarily after completion of one part. **Disappearance alone is not proof that the whole strand expired**, nor that it advanced. [C01,C03,C04,C10]

**Controls:** approach and follow the displayed talk/inspect/pick-up prompt; PC remaps and console button glyphs differ. The `?` colour varies across writers' terminology and map state; **name and context**, not hue alone, govern classification. [C01,C03]

## 2. Conditional access, initiation and stage-to-stage unlock rules

**Availability rule template:** `INITIAL_STAGE = MAP_REGION + STORY_GATE(if any) + TIME_WEATHER(if any) + WORLD_TRIGGER(if any) + PLAYER_OBSERVED(actual marker/person)`. `NEXT_STAGE = current_stage actually finished + per-strand event/wait/reply/story/region gate + actual new in-game evidence`. These are **generic research predicates**; no player's actual eligibility is asserted.

| Source-backed strand / family | Normal earliest context / condition | Stage-specific gate and observable verification | Risk class / maturity |
|---|---|---|---|
| **The Noblest of Men, and a Woman** | Initiates around **Valentine in Chapter 2** (saloon interview) [C09] | Initial portraits/interactions are not the last stage; a later continuation is gated by a **Chapter 4 Story mission**, independently cited. Observe new mission label; exact route GameGuide only [C09] | **CAN WAIT** for the story, **ONE-TIME UNIQUE-ITEM** risk during encounters |
| **All That Glitters** | Available **Chapter 2** via a named Stranger/treasure initiation [C10] | Following clue stages and reward must be verified in named task, not assumed upon first talk | **CAN WAIT**, not automatic 10-strand credit until eligible completion |
| **Arcadia for Amateurs** | Starts **Chapter 2**; outdoor encounter with a photographer [C11] | Five-part source lists; new portions may require **a few in-game days**, some daylight conditions [C11] | **CAN WAIT** overall early game; **T2 stage variation** later |
| **Geology for Beginners** | Starts **Chapter 2**, introduces rock-carving collection [C12] | Collect/record **10 carvings**, mail coordinates, wait for invitation, revisit/finish; manual **Old Brass Compass** pickup is **separate item risk** [C12] | **CAN WAIT** for early 100% pursuit; **ONE-TIME OBJECT** at observed final return |
| **A Test of Faith** | Dinosaur-bone collecting introduced from **Chapter 2** [C13] | Distinct bones and hand-in/return; later region access may constrain full 30; D20 owns hand-in checklist | **CAN WAIT** if simply met collector; not all regions accessible at once |
| **Smoking and Other Hobbies** | Introduces cigarette-card collecting during early free roam [C13] | A card pickup alone doesn't mean required set mailed; D20 owns full card hand-in detail | **CAN WAIT** and track separately under collectibles |
| **American Dreams** | Triggered by **three murder scene clues** rather than a simple already-active map question mark [C14] | Each clue collected and map assembled; named objective after evidence; check task state | **CAN WAIT** unless a supported personal one-off risk observed; don't treat ambient crime as one counted chance encounter/strand |
| **A Fine Night for It** | **Chapter 2+**, requires at least one **Night Folk chance encounter** in the Bayou [C15] | Old Cajun Stranger marker available at **night, approximately 10 p.m.–5 a.m.** after qualifying encounter; confirm time and actual marker | **CAN WAIT** by chapter; **TIME-OF-DAY CONDITION**, not permanent miss |
| **Fundraiser** | Sources disagree **Chapter 2 onward** vs **after Chapter 2** for first appearance [C16] | One-stage optional donation/choice, **not a reliable ten-multi-stage-trophy candidate**; disappears by epilogue in multiple guides | **LATER CLOSING WINDOW**, no Chapter 2 immediate deadline; first-trigger **DISPUTED** |
| **Other later-starting named strands** | Various Chapters **3–epilogue** | Individual prerequisite, weather, mail, return, named NPC and accessibility vary | **T2** details held in §4; don't infer from Ch2 map absence |

**Very important:** a `Chapter 2` label on a guide often means **earliest known start**, not **ends in Chapter 2**. Likewise, completing one chapter of a multi-part Stranger isn't proof its concluding step is currently available. [C03,C09,C11,C13,C15]

## 3. Benefits, costs, rewards, choices and irreversibility — S21.M03

Named Stranger questlines offer story vignettes, collectibles/rewards, possible Honor consequences and access to unique equipment. **Rewards are claim-specific**: do not infer every person offers cash, Honor, a weapon or percentage progress. Fundraiser's **$20 donation** offers positive Honor versus **looting its collection** for cash and negative Honor/wanted risk, per two specialist sources; this is an **optional personal choice**, not a universally necessary quest or 100% blocker. [C16]

**One-time opportunity / preservation matrix:**

| Condition | Consequence | Safe default |
|---|---|---|
| A **gunslinger** encounter in `The Noblest of Men, and a Woman` ends with a named dropped firearm | Published specialist guides say these are **unique and cannot be reclaimed** after leaving encounter; loot must be picked up then [C17] | If personally collecting rare weapons, **inspect the ground and acquire the named weapon before leaving**, verify inventory; D22 owns exhaustive equipment research |
| Final **Geology for Beginners** interior available after return scene | `Old Brass Compass` can be missed; cabin may later lock. Historical save/load tricks have inconsistent patch-sensitive reports [C12,C18] | **During observed final return**, take and verify compass before departing; D06/D22 own rare-item disposition |
| Stranger introduces collectible family | Card/bone/fish/rock carving **collection progress** and `Strangers` row are separate | Mail/return/complete when required and inspect *each* relevant tracker; D20 owns explicit hand-ins |
| A stage offers a decision/role or Honor gain/loss | Different responses may have reputation or item effects; not always reversible | Decide based on desired roleplay; ask for spoiler opt-in for consequential outcome rather than improvising a guaranteed optimal ending |
| A completed staged mission is absent from Story replay | **Normal Story replay does not list ordinary Stranger side stages** in many reports [C19] | Preserve actual manual save if a personal exhaustive choice matters; do **not** promise a `Replay` fix |

**Distinguish irreversibility types:** `strand permanently unavailable`, `one stage skipped but quest continues`, `unique pickup missed`, `temporary time/weather gated`, and `branch/choice-exclusive scene` are **five different facts**. None automatically destroys official 100% because ten alternate qualifying strands exist. [C03,C04,C17,C18,C21]

## 4. Story/chapter and edition-specific risk windows — S21.M04 / S30.M05 (D08 read-only)

### T0/T1 decision classes (avoid spoiler claims)

- **NOW** = only if a **named, positively observed active** Stranger stage has a **documented immediate deadline** or **one-time material moment**. Example: player **actually stands in a unique-gun encounter** with the named dropped weapon in view; **collect it before leaving if desired**. Or actual post-quest return interior with compass. **NEVER** classify a bare newly visible `?` as NOW.
- **BEFORE CHAPTER EXIT** = a **source-backed** window with a known closing chapter when **the player's observed story is approaching that boundary** and the goal matters. For D18, Fundraiser before epilogue and the late stranger exceptions below; D08 owns Chapter 2 Honor Story/camp-stage warnings.
- **CAN WAIT** = most Chapter 2 Stranger introductions and longer-lived strands with no named current deadline: photographer, rock carvings, gunslinger initiation, treasure, Night Folk side quest (night access conditional).
- **DISPUTED** = source conflict on exact first-appearance chapter, later part omissions, one-stage trophy credit, recipe/tracker entitlement or missed stage recovery. State the dispute and safe observation; do not invent a timer.

**Read-only D08 [Chapter 2 window research](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d08_chapter2_limited_windows_v0_1.md):** John's observed active oil-wagon task is D08 **NOW**; Mary/Strauss optional Honor opportunities and camp companion invitation closures are **not D18 Stranger primary research**. White markers sometimes denote optional Honor Story; when title belongs to that class, route to D08 / Mission Control, not an invented Stranger-list urgency. D08 research is **RESEARCHED — REVIEW PENDING**, not an adopted live alarm. [C06,C08]

### Source-specific window map

| Opportunity | Earliest source-backed start | End / dependency | Class for present Chapter 2 player (without observed active trigger) |
|---|---|---|---|
| **Fundraiser** (single-stage) | **Chapter 2 or after completing Ch2** (source disagreement) [C16] | **Before epilogue** reliably across PowerPyx, GTA Base, RDR2.org. Not automatically eligible for Western Stranger because single encounter [C16] | **CAN WAIT** now; **BEFORE late-story exit** only when that closing boundary is evidenced |
| **Arcadia for Amateurs — stage III** | Strand begins Ch2; installments separated by wait [C11,C21] | Wiki / actual player reports say **one mid-strand stage skipped in epilogue** although later stages can continue | **CAN WAIT** to begin, **T2 PARTIAL MISS** for personal exhaustive |
| **The Mercies of Knowledge** | **Chapter 4** [C22] | Red Dead Wiki says must complete before late-story terminal mission; not available afterwards | **T2 BEFORE STORY EXIT**; not Ch2 urgent |
| **The Widow of Willard's Rest** | **Chapter 6** according to RDR2.org; some other indexes put it under Ch5 [C23] | Some guide claims *epilogue introduction* possible, but **full interaction sequence** differs depending on earlier visits; chapter designation and exact stage count **DISPUTED** | **T2 CONDITIONAL / DISPUTED**; no Ch2 action |
| **The Noblest of Men, and a Woman** | Intro Ch2; later continuation after Ch4 gate [C09,C17] | One-time gunslinger **weapon drop** is missable *when encounter is actually completed*, not simply because chapter advances | **CAN WAIT** until active one-time encounter; **NOW if player sees particular weapon drop** |
| **Geology for Beginners** | Ch2 introduction [C12] | The **final return interior** can close after leaving; reward-specific rather than strand-wide chapter expiry | **CAN WAIT** until observed final return, then **NOW for compass pickup** |
| **A Fine Night for It** | Ch2+ after Night Folk encounter [C15] | Only shows at night **10 p.m.–5 a.m.**; absence by day not evidence of expiration | **CAN WAIT / CONDITIONAL CLOCK** |
| **D08 optional Honor Story** | Letter, person, mission-specific Chapter 2 gate [D08] | May expire at camp/story exit | **REFER D08**, never reclassify solely as a Stranger |

**T2+ later chapter facts — do NOT show this section by default to an early player:** `Arcadia for Amateurs` stage III is reported to be skipped in the epilogue while the strand's later portions may still run; `The Mercies of Knowledge` is a Chapter 4-starting Stranger absent after a late Chapter 6 mission; `The Widow of Willard's Rest` has chapter-sensitive individual visits and alternate epilogue availability. These are **future encounter mechanics**, not plot descriptions. The exact extent of Widow replay/return availability is **contested** between the 2019 RDR2.org guide and wiki/player reports, so don't say the entire strand is categorically impossible later. [C21–C23]

## 5. Typed provisional dependencies and read-only crosslinks

| From this dossier | Proposed edge → target | Rule; source maturity |
|---|---|---|
| `S21.M01` Stranger introduction | `INTERACTS_WITH → S07.M01` map/navigation, `S30.M01` story gates | White `?` + real actor observed; no inferred completion [C01] |
| `S21.M01` | `INTERACTS_WITH → S22.M01` chance encounter | Category distinction; **not** interchangeable 10 strands and 25 events [C02] |
| `S21.M02` next stage | `REQUIRES → verified preceding strand stage`, plus `EVENT/TIME/CHAPTER` per mission | Only when cited; avoid a blanket 1-day timer [C03,C11,C15] |
| `S21.M02` | `CONTRIBUTES_TO → S29.M01` Total Completion, `S29.M03` Western Stranger | Different tracker/provider counters, exact 10 full qualifying strands [C04,C05] |
| `S21.M03` reward choice | `INTERACTS_WITH → S17.M04` rare inventory, `S05.M04` Honor | D06/D13/D22 own item/law detail, read-only [C16–C18] |
| `S21.M04` late-window exception | `INTERACTS_WITH → S30.M05` D08 / chapter risks | D08 primary for Chapter 2 Honor windows; D18 for Stranger-specific exceptions only |
| `S21.M02` collectible task | `INTERACTS_WITH → S27.M01–M05` D20 | Bones, carvings, fish, cards have own official goal and delivery criteria |
| `S21.M02` replay | `INTERACTS_WITH → S30.M03/M04` D24 | Normal side replay limitations; do not assume archived mission stage or available manual save [C19] |
| `S21.M02` named quest | `RECORDED_IN → Progress → Total Completion → Strangers` | **Observable UI check**, not automatic proof of current 10/10 |

No edge is injected into a shared taxonomy. Proposed IDs may lack adopted target records; coordinator must inspect. A `REQUIRES` edge is **general game rule**, never a stored `player_has_done` fact.

## 6. Exact completion tags, tracker scope and attainment boundaries

| Goal / status | Exact criterion | Distinction / observation |
|---|---|---|
| **OFFICIAL_100 — Strangers** / `Best in the West` | **10 completed Stranger mission strands**, not every available strand, not ten first meetings and not all stranger-like interactions [C04] | `Pause → Progress → Total Completion → Strangers`; check actual row/checkmark. Most official 100% can be cleaned after story [C04]. |
| **ACHIEVEMENT — Western Stranger** | **10 completed multi-part qualifying Stranger strands**; some single one-visit encounters **do not count**. Some guides report **trophy delay / needing 12+** despite apparent ten, **DISPUTED platform/account behavior** [C05] | Account trophy/achievement unlock **separate from** Total Completion and Social Club count; record only when observed. |
| **ACHIEVEMENT — Lending a Hand** | **All eligible optional Honor Story missions** during appropriate narrative window, some with **white** markers [C06] | **D08 owned**. A white `?` is not guarantee it belongs to `Western Stranger`; replay does not reliably repair missed original-run Honor achievement. |
| **OFFICIAL_100 — Chance Encounters** | **25** qualifying ambient encounters, separate from 10 Stranger strands [C02] | White/grey *blip* + encounter result; no equivalence to named quest. |
| **OFFICIAL_100 — Collections** | Carvings, dinosaur bones, fish and other required hand-in families have **separate checklist rows** [C07,C08] | Completing a Stranger collector's introduction alone is not hand-in; D20 primary. |
| **OPTIONAL_EXHAUSTIVE** | Every named Stranger, *every* branch/stage, alternative dialogues, rare pickups and epilogue variants | Some stages/items are legitimately missable or mutually exclusive even where official 100% remains feasible. |
| **CONVENIENCE / IMMERSION** | Meet people organically, engage a curious side story at your pace | No compulsory route, no player save result inferred. |
| **ALL_GOLD / Gold Rush** | Not equivalent to ten Stranger strands; Gold scoring normally pertains to eligible Story missions and achievement separate | D24/GameGuide governs Gold; **no automatic Stranger Gold medal**. |

**Evidence standards:** a checked UI row for `10 Strangers` supports that category, but is **not** proof of `Western Stranger` trophy unlock; similarly earning the trophy does **not automatically** establish every collectible or personal exhaustive goal. [C04,C05,C07]

## 7. Three common mistakes and three spoiler-light Chapter 2 examples

**Mistake 1 — icon = entitlement:** A random survivor/white dot isn't one of ten full Stranger strands. Conversely, an opening white `?` is not ten-percent completion of a strand until finished. **Safer:** identify named person and inspect `Total Completion → Strangers` after actual finale.

**Mistake 2 — earliest chapter = missable now:** `Arcadia` begins in Chapter 2 and pauses between parts; that does not mean it expires on Chapter 2 exit. **Safer:** distinguish initial chapter, intermediate stage wait and true later part variation.

**Mistake 3 — replay or one item will repair everything:** Normal Stranger replay isn't broadly available, unique gunslinger weapons/compass may be lost after leaving, and collection families may require mailed/returned proof. **Safer:** inspect optional one-time loot before leaving and keep a verified manual save if desired; no assumed save exists.

**Scenario A — a new question mark around Valentine (T0):** Player **observes** an unfamiliar white `?` near town. Approach naturally and read the NPC/mission name if comfortable; it could introduce `The Noblest of Men, and a Woman`. If accepted, the first conversation creates **a longer thread**, not completed 100% credit. A later part is story-gated, so **CAN WAIT** rather than compulsively clearing all steps tonight. If an actual unique firearm drop occurs in a later encounter, inspect/pick it up before departing (optional personal collection). No current completion is asserted. [C01,C09,C17]

**Scenario B — one quiet outing finds a rock-carving researcher (T0):** If the player encounters `Geology for Beginners`, learn the purpose and collect any nearby carving opportunistically. No need to hunt all ten immediately or assume every region is accessible. Keep separate flags for `carving discovered`, `coordinate mailed`, `invitation received`, `return scene completed`, `Old Brass Compass obtained`. Only **when actually at the final interior** does the manual compass pickup become an immediate rare-item warning; the ordinary Chapter 2 meeting is **CAN WAIT**. [C12,C18]

**Scenario C — chance encounter leads to a real quest (T0/T1):** During voluntary exploration, the player meets unusual strangers after dark. An ambient encounter is **not automatically** a full Stranger strand. If the exact **Night Folk** precursor is observed, later check for the named `A Fine Night for It` prompt **at night** (no guaranteed spawn; do not send a cautious High-Honor player into danger solely for quota). The condition is local **time/precursor**, not a Chapter 2 closing deadline. [C02,C15]

## 8. Claim-by-claim source register (independent, checked 2026-10-17)

**Evidence classes:** `E1` Rockstar-authored source/direct game UI (NOT obtained for full quest taxonomy); `E2` actual player observation (NONE in this specialist task); `E3` independently edited guide (PowerPyx, GTA Base, GameFAQs authored guide, GamesRadar, Push Square, RDR2.org); `E4` wiki/community case report (supporting and contradictory, not universal rule); `E5` `rdr2-hub` prior research REVIEW PENDING, read-only. Same publisher's multiple pages = **one editorial source**, not two independent confirmations.

| Claim | Narrow assertion / URL(s) | Class / epistemic status / confidence |
|---|---|---|
| **C01** | White `?` introduces named Stranger; named later markers; [Red Dead Wiki Strangers](https://reddead.fandom.com/wiki/Strangers), [GameFAQs Total Completion](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion), [GamesRadar 100%](https://www.gamesradar.com/red-dead-redemption-2-100-completion-guide/) | E3+E4 / CORROBORATED / HIGH (icon colour platform/guide variant) |
| **C02** | Named `Strangers` 10 vs **25 chance encounters**; [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/), [GameFAQs missions/events](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/missions-and-events), [GamesRadar 100%](https://www.gamesradar.com/red-dead-redemption-2-100-completion-guide/) | E3 / CORROBORATED / HIGH |
| **C03** | Multi-part stages need final part for strand credit; [GameFAQs missions/events](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/missions-and-events), [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) | E3 / CORROBORATED / HIGH |
| **C04** | Official in-game ten full Stranger strands; can post-story cleanup of 100% subset; [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/), [GameFAQs Total Completion](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion) | E3 / CORROBORATED / HIGH |
| **C05** | `Western Stranger` 10 multi-part completed strands, single encounter exclusion, possible late trophy pop; [PowerPyx Trophy Roadmap](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap/), [GTA Base Stranger Missions](https://www.gtabase.com/red-dead-redemption-2/strangers/), [Push Square 10 Strands](https://www.pushsquare.com/guides/red-dead-redemption-2-how-to-complete-10-stranger-mission-strands) | E3 / CORROBORATED threshold / HIGH; delayed trophy **DISPUTED / MEDIUM** |
| **C06** | `Lending a Hand` optional Honor Story distinction; white markers sometimes; [PowerPyx Roadmap](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap/), [TrueAchievements](https://www.trueachievements.com/a262339/lending-a-hand-achievement), [D08 read-only](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d08_chapter2_limited_windows_v0_1.md) | E3+E5 / CORROBORATED / HIGH |
| **C07** | Bones, carvings, fish, cards separate collection rows rather than guaranteed Stranger credit; [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/), [GameFAQs Total Completion](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion) | E3 / CORROBORATED / HIGH |
| **C08** | Chance encounter / bounty / Story classes separate; [GamesRadar 100%](https://www.gamesradar.com/red-dead-redemption-2-100-completion-guide/), [GTA Base Stranger index](https://www.gtabase.com/red-dead-redemption-2/strangers/) | E3 / CORROBORATED / HIGH |
| **C09** | `The Noblest of Men, and a Woman` intro Chapter 2, continuation gated late Chapter 4; [PowerPyx Gunslinger](https://www.powerpyx.com/red-dead-redemption-2-the-noblest-of-man-and-a-woman-walkthrough/), [RDR2.org Gunslinger](https://www.rdr2.org/guides/the-noblest-of-men-and-a-woman-stranger-mission-guide/) | E3 / CORROBORATED / HIGH |
| **C10** | `All That Glitters` Ch2-start treasure Strand example; [PowerPyx Stranger Missions](https://www.powerpyx.com/red-dead-redemption-2-stranger-missions-walkthrough/), [Push Square Strands](https://www.pushsquare.com/guides/red-dead-redemption-2-how-to-complete-10-stranger-mission-strands) | E3 / CORROBORATED earliest / MEDIUM exact credit count |
| **C11** | `Arcadia for Amateurs` starts Ch2, five parts with days wait; [RDR2.org Arcadia](https://www.rdr2.org/guides/red-dead-redemption-2-arcadia-for-amateurs-stranger-mission-guide/), [Red Dead Wiki Arcadia](https://reddead.fandom.com/wiki/Arcadia_for_Amateurs) | E3+E4 / CORROBORATED / HIGH generally; specific future omission C21 |
| **C12** | `Geology for Beginners` ten carvings/mail/invitation/cabin and compass; [PowerPyx Geology](https://www.powerpyx.com/red-dead-redemption-2-geology-for-beginners-stranger-mission-walkthrough/), [Red Dead Wiki Geology](https://reddead.fandom.com/wiki/Geology_for_Beginners) | E3+E4 / CORROBORATED / HIGH; historical workaround DISPUTED |
| **C13** | Collectible-named Stranger initiations (bones/cards, fish later) and staged hand-ins; [PowerPyx Strangers](https://www.powerpyx.com/red-dead-redemption-2-stranger-missions-walkthrough/), [GameFAQs missions/events](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/missions-and-events) | E3 / CORROBORATED / HIGH broad; exact counts D20 owned |
| **C14** | `American Dreams` initiation after three separate murder clues; [GameFAQs missions/events](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/missions-and-events), [PowerPyx Stranger locations](https://www.powerpyx.com/red-dead-redemption-2-all-stranger-locations-map/) | E3 / CORROBORATED / HIGH |
| **C15** | `A Fine Night for It` Night Folk **chance encounter prerequisite** and nighttime 10PM–5AM access; [PowerPyx Fine Night](https://www.powerpyx.com/red-dead-redemption-2-a-fine-night-for-it-stranger-mission-walkthrough/), [RDR2.org Fine Night](https://www.rdr2.org/guides/red-dead-redemption-2-a-fine-night-for-it-stranger-mission-guide/) | E3 / CORROBORATED / HIGH for conditional rule, no deterministic spawn |
| **C16** | Fundraiser **one-part** Honor choice; cutoff by epilogue (not Ch2); Ch2 vs after Ch2 first gate disagreement; [PowerPyx Fundraiser](https://www.powerpyx.com/red-dead-redemption-2-donation-stranger-encounter/), [RDR2.org Fundraiser](https://www.rdr2.org/guides/red-dead-redemption-2-fundraiser-stranger-mission-guide/), [GTA Base Fundraiser](https://www.gtabase.com/red-dead-redemption-2/strangers/fundraiser) | E3 / CORROBORATED on epilogue cutoff & one-part / HIGH; **DISPUTED initial gate** |
| **C17** | Unique Gunslinger weapons disappear if not retrieved at scene; [PowerPyx Gunslinger](https://www.powerpyx.com/red-dead-redemption-2-the-noblest-of-man-and-a-woman-walkthrough/), [GTA Base Gunslingers](https://www.gtabase.com/side-missions/red-dead-redemption-2/strangers/the-noblest-of-men-and-a-woman-gunslingers), [RDR2.org Gunslinger](https://www.rdr2.org/guides/the-noblest-of-men-and-a-woman-stranger-mission-guide/) | E3 / CORROBORATED / HIGH for one-time pickup; exact list D22 |
| **C18** | Cabin `Old Brass Compass` at final return may be lost after leaving; save/load bug workaround patch-sensitive; [PowerPyx Geology](https://www.powerpyx.com/red-dead-redemption-2-geology-for-beginners-stranger-mission-walkthrough/), [Red Dead Wiki Geology](https://reddead.fandom.com/wiki/Geology_for_Beginners) | E3+E4 / CORROBORATED item risk / HIGH; workaround DISPUTED |
| **C19** | Standard replay lacks ordinary Stranger stages; [GameFAQs side mission replay](https://gamefaqs.gamespot.com/ps4/200179-red-dead-redemption-2/answers/501883-does-the-game-allow-you-to-replay-the-gunslinger-missions-after-youve-beaten-the), [RDR2.org forum replay](https://www.rdr2.org/forums/topic/8002-replay-side-missions/) | E4 / CORROBORATED reports / MEDIUM-HIGH; D24 is replay owner, in-game menu verify |
| **C20** | Reappearing named markers after initial `?`; distinction from random events; [Red Dead Wiki Strangers](https://reddead.fandom.com/wiki/Strangers), [GamesRadar 100%](https://www.gamesradar.com/red-dead-redemption-2-100-completion-guide/) | E3+E4 / CORROBORATED / MEDIUM; UI conditional |
| **C21** | `Arcadia` stage III skipped in epilogue; remaining sequence may continue; [Red Dead Wiki Arcadia](https://reddead.fandom.com/wiki/Arcadia_for_Amateurs), [Steam user case](https://steamcommunity.com/app/1174180/discussions/0/3105775128748291499/), [Reddit case](https://www.reddit.com/r/reddeadredemption/comments/djh0vc) | E4 / CORROBORATED COMMUNITY / MEDIUM; direct platform/patch recheck |
| **C22** | `The Mercies of Knowledge` becomes inaccessible after late Chapter 6; [Red Dead Wiki Mercies](https://reddead.fandom.com/wiki/The_Mercies_of_Knowledge), [Red Dead Wiki Missable Content](https://reddead.fandom.com/wiki/Missable_Content_in_Redemption_2) | E4 SAME-PUBLISHER / SINGLE_SOURCE / MEDIUM; verify independent game source |
| **C23** | `Widow of Willard's Rest`: RDR2.org says future introduction possible in epilogue, wiki says full early sequence depends on visits, conflicting entry chapter in indexes; [RDR2.org Widow](https://www.rdr2.org/guides/the-widow-of-willards-rest-stranger-mission-guide/), [Red Dead Wiki Missables](https://reddead.fandom.com/wiki/Missable_Content_in_Redemption_2), [PowerPyx Strangers](https://www.powerpyx.com/red-dead-redemption-2-stranger-missions-walkthrough/) | E3+E4 / **DISPUTED stage reachability** / MEDIUM |
| **C24** | A guide's `22 of 26` trophy-eligible pool is a source-defined estimate, not independently verified 2026 catalog; [PowerPyx Trophy Roadmap](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap/), [Push Square Strands](https://www.pushsquare.com/guides/red-dead-redemption-2-how-to-complete-10-stranger-mission-strands) | E3 / DISPUTED catalog scope / MEDIUM; don't present as canonical count |

**Publisher dates:** PowerPyx 100%/Stranger/Trophy initial articles October 25, **2018**, other individual PowerPyx encounters Oct–Nov 2018; RDR2.org guides originally **2018–2019**, with several updated January **2023**; Push Square 10 Strands article published **2024** per its page; GameFAQs authored guide approximately **2019**. Undated wiki, GTA Base and other community pages are **date unverified**. All links were consulted **2026-10-17**; publisher dates are **not** installed-client patch attestations. No first-party Rockstar quest code or edition-comparison testing located, and no on-screen player record supplied.

## 9. Contradictions, scope exceptions, observed-vs-general and research tests

| ID | Competing claims / ambiguity | Disposition and safe operational fallback |
|---|---|---|
| **D18-X01** | Guides use `grey ?`, `white ?`, sometimes `white circular dot`; named icons can denote Honor Story | **Category ambiguity**, not universal color rule. Identify person and exact quest title; read Story and Stranger trackers independently. |
| **D18-X02** | `10 Strangers` in Total Completion vs Western Stranger trophy often unlocks after **12+** per PowerPyx | **Tracker/provider DISPUTED delay**. Finish verified qualifying multi-stage strands; trophy only proved by actual platform popup/account record; do not say 10/10 UI guarantees it. |
| **D18-X03** | PowerPyx says `26 total / 22 trophy-eligible`; other lists show different number of named starts | **Catalog version/eligibility ambiguous**; threshold of 10 stable, do not ratify total pool size or count one-off `Fundraiser` as award. |
| **D18-X04** | Fundraiser first appears **Chapter 2** (PowerPyx/RDR2.org) versus `after Chapter 2` (GTA Base) | **DISPUTED first gate**, cutoff by epilogue HIGH. Check actual marker and late-story risk, no early urgency. |
| **D18-X05** | `Arcadia` generally can continue after story vs **Part III skipped** in epilogue | **PARTIAL-STAGE MISS**, not wholly missable strand; protect full-sequence personal exhaustive goal only. |
| **D18-X06** | `Mercies` future closing timing supported mainly by wikis and player reports | **MEDIUM/NEEDS RECHECK** before hard completion-window alarm; treat approach to late-story transition conservatively if personally interested. |
| **D18-X07** | `Widow` entire strand available in epilogue vs full specific earlier sequence available only with earlier visits | **DISPUTED** and chapter-start indexing differs (Ch5/Ch6). No T0 Chapter 2 alert; T2 conditional disclaimer. |
| **D18-X08** | Many Strangers deferrable vs true unique gunslinger pickup or one-time final cabin item | **ITEM RISK ≠ STRAND EXPIRY**; only NOW at observed item-specific moment, regardless of prior chapter. |
| **D18-X09** | `Geology` compass cabin locked forever vs historical save/reload exploit | **Patch-dependent workaround unverified**. Claim high risk, **not absolute impossibility**; do not recommend exploit or promise it works. |
| **D18-X10** | `A Fine Night for It` seems missing after precursor, but guide requires nighttime `10 p.m.–5 a.m.` | **TIME CONDITION not closure**; observe clock and eligible precursor; no guaranteed event spawn. |
| **D18-X11** | Ordinary Story mission replay menu sometimes contains optional Honor Story, whereas completed Strangers aren't replayable | **Different categories**; D24 owns details. Never treat replay as proof of recovered items/altered original story flags. |
| **D18-X12** | Earliest chapter in guide mistaken for compulsory Chapter 2 deadline | **DESIGN RISK**; separate start and last known availability; D08 owns chapter-specific Honor urgency. |

**Not observed:** zero current game screenshots/save/quest flags, player inventory, trophy notifications or platform patch versions. Each row above is a **general researched hypothesis/rule** with confidence only for its supporting source, not player state. In-game concrete evidence outranks unsupported blanket guesses without becoming a universal patch rule.

**Priority bounded tests:** photograph new Stranger `?` before/after speaking and inspect named task; capture `Total Completion → Strangers` before/after a **full finale** and platform trophy separately; if naturally at stage III Arcadia near later story, log whether skipped; compare identical client replay menu for completed Stranger and optional Honor Story; record `Fundraiser` first appearance by chapter/version; observe rare item pickup with actual inventory readback. Do **not** manufacture a new player milestone just to complete this research file.

## 10. GameGuide, Free Roam and Companion read-only consumer handoff

**Input contract** (ephemeral/player-reported, never Atlas-written): `reported_chapter`, `observed_marker_type`, `observed_person_or_strand_title`, `active_stage_or_task_label`, `clock_or_weather_if_material`, `goal_profile` (official 100%, Western Stranger, optional exhaustive, immersion), `reported_story_transition`, `in_game_progress_counter`, `save_confirmed_by_authority?`. Every unknown defaults **UNKNOWN**.

**Recommended ChatGPT-native answer behavior:**
1. First classify **Stranger vs chance encounter vs optional Honor Story vs collectible stage** using exact name/person and observed UI, not colour alone.
2. Explain **what may be available now** (general game gate) separately from **what the player currently has** (unknown until report). If no observed stage, suggest an optional discovery without fabricating a white marker.
3. For an actual completed Stranger stage, **don't report official strand complete** unless entire named sequence is verified and player/Total Completion evidence supports it.
4. Apply **NOW** only for **observed** one-off reward/expiry; use **CAN WAIT** for ordinary first Ch2 `?`. For Mary's letter/oil-wagon/camp activity, defer time-sensitive classification to [D08](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d08_chapter2_limited_windows_v0_1.md) (REVIEW PENDING). For unique inventory, D22/D06; hand-ins D20; replay D24.
5. Protect spoilers: default T0/T1 tells only the **kind** of later gate, not future chapter person/fate/scene; T2 must be explicitly opted into.
6. If playing for a Gold medal, **Mission Control** owns complete mission briefing, timers and result evidence. D18 cannot substitute a Stranger synopsis for the canon Story Field Guide, log Gold, or advance/save the campaign.
7. Offer a single organic choice when possible: explore the visible `?`, continue named thread if currently available, or return to Story. No forced map completion or invented deadline.

**Hard failure avoiders:** no `already collected`, `already rescued`, `completed 10`, `saved`, `Western Stranger earned`, `Lending a Hand secured`, `this NPC is here today` without actual compatible evidence. Research output is not a new progress database.

## 11. Reviewer questions, bounded gaps, deliverable boundaries and stop condition

1. **Owner/coordinator** should separately verify Stranger/optional Honor tagging in **specific in-game menus**; mixed white-icon semantics are a high-stakes interface failure mode.
2. **Trophy vs Total Completion mismatch:** validate historical PowerPyx `10 yet 12+` trophy delay on an available edition/account before claiming reproducibility.
3. **Last windows:** verify Fundraiser first chapter (Chapter 2 vs after), later epilogue cutoff, `Mercies` cutoff, and the exact possible `Widow`/Arcadia stage continuations; keep source-dependent and T2-gated in the meantime.
4. **Replay and one-time rewards:** consult dedicated D24/D22 reviews once those specialists deliver, but don't overwrite their content or imply ratification. Prefer observing actual one-time loot at its natural opportunity over speculative reload tricks.
5. **Collectible hand-ins:** D20 owns exact cardinality and post-office mechanics. D18 should never expand to a copy of those quest checklists.
6. **Schema approval:** proposed `S21.M01–M04`/`S30.M05` and edge labels need independent owner decision; this committed Markdown itself grants no canonical authority.

**Acceptance requested:** source audit of C01–C24, D18-X01–X12, chapter-window classification, Goal separation, T2 isolation, cross-domain read-only links and three safe Chapter 2 examples. Reviewer may stage integration in a **separately authorized PR**; no worker self-merge or ratification.

**Stop:** On verified delivery of **this D18 dossier**, `agents/checkpoints/atlas_strangers_023.md` and `agents/handoffs/2026-10-17_atlas_strangers_023.md` on `agent/atlas-stranger-023`, mark the **task only** `DELIVERED_REVIEW_PENDING` and release write lease. The persistent specialist conversation can accept a *new coordinator-assigned* task but **must not self-assign one**.
