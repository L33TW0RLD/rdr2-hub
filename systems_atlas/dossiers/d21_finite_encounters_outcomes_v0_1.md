# D21 — Finite and Ambient World Encounters, Decisions, and One-Time Outcomes

**Record/version:** `ATLAS.D21` / `v0.1` · **Kind:** Story Mode mechanics research · **Maturity:** **RESEARCHED — REVIEW PENDING** (`RESEARCHED_REVIEW_PENDING`), **NOT ADOPTED**.  
**Issue:** [#40](https://github.com/L33TW0RLD/rdr2-hub/issues/40) · **Task:** `atlas-world-events-031` · **Checked:** **2026-10-17** (research access date; not the game's build/patch date).  
**Scope:** *Red Dead Redemption 2 Story Mode* on PS4/Xbox One, PC and later console releases where applicable; **Red Dead Online Free Roam Events/roles are excluded**. Default **T0/T1** (Chapter 2/ordinary exploration and nearby risk); later plot-sensitive appearances and region access **T2**, never default advice. Control labels depend on actual platform/context.  
**Provisional owned leaves:** `S22.M01` assistance, `S22.M02` deceptive threats/ambush interfaces, `S22.M03` repeatability/variability, `S22.M04` social resolution, `S23.M03` environmental event puzzles/scene discoveries, `S23.M04` encounter letters/notes/sketches. IDs and edge vocabulary are **unratified research references**, not adopted taxonomy.  
**Excluded primary ownership:** D08 chapter-exit urgency; D13 Honor, witnesses and wanted bounties; D18 authored Stranger mission strands; D22 unique weapon/hat/letter and pickup recoverability; D25 gang ambush vs hideout/camp; D05 camp favors; D15 Total Completion/Compendium; D26 dedicated exploration secrets/shacks. All references are **READ-ONLY**, including currently developing D25.  
**Player-specific facts:** actual chapter, place, time, prior NPC help, event count, named documents, Honor, bounties, encounter resolutions, rewards, game edition and save flags are **UNKNOWN** until the user or canonical GameGuide supplies observation. This record is never a progress log.

## 1. Definitions and interaction surfaces — six distinct concepts [T0/T1]

**Chance/ambient encounter:** A contextually spawned, short non-primary-world event, often marked by a **flashing white/grey radar dot** and voiced appeal, confrontation or social invitation. These can include help for a sick traveller, a runaway horse, a challenge to race or shoot, a fleeing prisoner, staged robber deception and town incidents. The *category* “Chance Encounter” contributes to the official 25-event subset; the specific NPC/variant may not recur. Merely riding past a dot, viewing a scene, agreeing to a task or obtaining loot are **not synonyms** for a confirmed credited encounter. [E01,E02,E03,E04]

**Repeatable family:** A template may recur with different individuals/locations or even a returning character. GameFAQs reports that some repeated encounters can contribute more than once toward the **25-count**; that **does not** mean a specific rescue victim, payment promise, encounter letter or one-off stage respawns on command. [E02,E03,E04]

**Finite scene / finite chain:** A specific NPC event or staged world construction progresses through a limited sequence of states, sometimes disappearing after the area advances. The strongest examples are **Castor's Ridge**, **Appleseed Timber Company**, and **Central Union Railroad Camp**. Construction scenes, worker help, mutually exclusive payments and location-specific letters can be skipped even while ordinary roadside chance events remain widely available. These are **finite-location variants**, not 25 required unique checkboxes. [E07,E08,E09,E10]

**Player choice vs result:** A scene can offer **help / ignore / threaten / report / release / restrain / attack / walk away**. Result is context-specific and potentially mutually exclusive. One choice can forfeit a *reward* without removing the encounter from the world's classification: e.g. helping a snakebite sufferer can lead to a later store gift; walking past may leave no later gift even if other injured travellers appear. Claims about one exact per-action Honor-point value are guide estimates, not reproduced official patch-invariant units. [E03,E05,E06]

**Authored Stranger strand:** A **white “?” objective and named quest log** generally mean D18's staged optional mission, not automatically an ambient white radar dot. Some encounters **unlock a Stranger strand** (Night Folk precursor example); a prerequisite scene is still not the same thing as completing the subsequent mission. The 10-Stranger official criterion is distinct from the 25-Chance criterion. [E01,E04,E13,E14]

**Encounter-associated inspectable:** A letter, pamphlet, dropped weapon, trinket part, scene-specific sketch, witness account or clue can be found at/after a scene. **Seeing, reading, physically picking up, keeping, and collecting a goal credit are separate verbs**. A document at a construction camp may vanish with workers even if other chances to encounter passers-by remain. Rare-item disposition belongs D22/D06, and puzzle inference belongs D26. [E07,E09,E10,E11,D22]

**Player-facing detection:** Watch radar dot/approach audio, actual focus options, target state, item pickup name, Satchel → Documents, Journal, map, temporary Honor feedback and **Pause → Progress → Total Completion**. A flashing dot is a *candidate* event; check actual outcome or tracker rather than fabricate a `completed` flag.

## 2. Conditional triggers, availability and recurrence classification

### 2A. Classification vocabulary (apply to a particular opportunity, never every member of a family)

| Class | Operational meaning | Evidence threshold and safe guidance |
|---|---|---|
| **CONFIRMED FINITE** | Independent reliable descriptions agree a **specific staged scene/finite named reward source** exists and moves/ends; not identical to complete worldwide disappearance of its encounter *type*. | Protect while actually present; verify event identity and choice/reward before irreversible action. Source-backed *single-scene* risk does not require visiting every location in advance. |
| **CONDITIONAL** | Availability or consequence depends on **mission/chapter, region, clock, previous encounter, target's current state, choices, context or luck**, but irrecoverability **not established**. | Inspect local prompt/log and the named trigger; do not force urgency before an actual gate/window. |
| **REPEATABLE** | Multiple independent examples/recounts demonstrate the **archetype** can recur and contribute to normal free-roam interactions (not proof the same character/loot repeats). | Engage organically; official 25 is reachable without clearing every unique scene. |
| **DISPUTED** | Competing sources or inadequate reproducible evidence for repeat interval, last chance, stage skip, item permanence, exact Honor change, replay rescue or definitive reward outcome. | Mark `UNKNOWN`; if scene is active and desired reward is named, preserve first safe opportunity; no fabricated countdown or guaranteed second attempt. |

### 2B. Trigger and decision matrix

| World-event family | General gate/feedback | Availability / reward class | Safe outcome handling and evidence |
|---|---|---|---|
| Roadside cry for help, sick/injured person, snakebite, attack by animal | Random roadside white dot; some have a **rapid response window** once visibly active, medicine/help or departure choice. [E01,E03,E05] | **REPEATABLE family**; each specific victim and potential follow-up **CONDITIONAL / finite scene** | If interested, respond before travelling away. Verify actual treatment and Honor icon, not generic cure/money count. Later gift requires meeting that same helper again. |
| Snakebite rescue → town gunsmith gift | Stranger *actually rescued*, later appears near associated shop after some time; shop may offer one free eligible weapon. [E05] | **CONFIRMED FINITE reward redemption per witnessed rescue**; exact spawn delay/expiry **CONDITIONAL** | Check identity and shop “on my tab” dialogue plus offered catalog price. Do not assume a free gun is already available or force a single-item purchase. |
| Fleeing shackle prisoner / transport prisoner | Roadside chained fugitive or guarded NPC; options might include release, arrest/turn-in, ignore. [E04,E06] | **REPEATABLE archetype**, **CONDITIONAL** report/tip or law response per distinct prisoner | Freeing and delivering to law are **mutually exclusive for that particular encounter**; verify offered tip and actual legal classification. Sheriff target work/posters belong D19, not generic D21. |
| Wagon/rider lost horse, stranded traveller, directions, rides, shooting challenge | Open road/near town, white dot and objective-specific interaction. [E01,E02,E04] | **REPEATABLE types**, individual persons/outcomes **CONDITIONAL** | Accept or decline when observed; races/shooting games may have participation cost or reward; don't assume infinite repeat of same challenge NPC. |
| Hostile “help me” bait, false helpless traveller, town alley trap | Contextual invitation may turn into robbery or horse theft; hazard reveals itself after interaction. [E03,E06] | **REPEATABLE threat family** / individually **CONDITIONAL** | Check weapon/horse safety, leave if desired, avoid needless retaliation against uninvolved civilians; criminal/Legal classification D13. |
| Gang roadside ambush | Enter group turf, roadblock/attack; D25 defines gang/classification and hideout differences. [E01,E12] | Family **CONDITIONAL/REPEATABLE**, an individual scripted ambush **CONDITIONAL or FINITE**, not universally respawning | Escape or fight as needed; **one Bushwhacked** official criterion separate from 25 encounters and 6 hideouts; avoid automatic credit. |
| **Castor's Ridge house building** | Location north/east of Valentine, staged build site; next visits advance construction, possible confrontation and request for money/timber. [E07,E10] | **CONFIRMED FINITE stage series**; stage timings/skip extent **DISPUTED** | When *actually* involved, choose help/cash/timber/leave knowing finite site state. Do not urge involuntary spending or steal timber merely to preserve a scene. |
| **Appleseed Timber Company logging camp** | Big Valley logging site; provisions request, worker accident/help, wolf problem, subsequent abandoned site. [E08,E10] | **CONFIRMED FINITE** worksite progression; individual woodcutting animation may repeat | If player wants worker rescue, visit as encountered and help promptly; optional worker-only **Letter from St. Luke's Academy** / **Bucket Hat** acquisition is a D22 ethics/item-risk decision, not required for official 100%. |
| **Central Union Railroad Camp construction** | Railroad project moves over successive stages; stolen wages investigation, worksite threats, supply access [E09,E10]. | **CONFIRMED FINITE** site stage sequence; **DISPUTED** special deed handling/skip or stall bug | Interact according to normal quest prompt; avoid grabbing/disposing **Property Deed** without player preference and source check; later site closure doesn't imply failed 25 chance encounters. |
| Ranters, Ravers and Campaigners | Distinct locally/clock-gated speakers/characters; inspect speaking/in-person interactions [E11,E01]. | **CONDITIONAL** encounters, recurring speech or one-time sequence varies per named character | Official 100% separately tracks **five** interactions; don't assume every generic stranger/white dot substitutes. |
| Bayou Night Folk incidents | Bayou area **at night**, Night Folk type chance encounters [E13,E14]. | **CONDITIONAL** region + time + local encounter; subsequent Stranger strand has separate gate | Normal ambient meeting can enable D18’s authored “A Fine Night For It”; don't mark Stranger mission complete based on ambush. Default Chapter 2 need not enter dangerous swamps to clear it. |
| Saint Denis wall-writing / vampire event | Inspect **five** writings to produce journal clue; a later **night** alley encounter offers the **Ornate Dagger** if successfully obtained [E15,E16]. | **CONFIRMED FINITE** named encounter/reward opportunity, time **CONDITIONAL**; missed physical weapon **DISPUTED recovery** | **[T2 / optional horror content]** Do not expose location/time by default. If naturally at confrontation and wants item, pick up named weapon before leaving; exact recovery/respawn belongs D22. |
| Gavin's friend / roaming conversational NPC | Variable regions, repeated search-for-Gavin dialogue, possible named letter if illicitly looted [E10]. | **CONDITIONAL** roaming repeats, named document pickup **DISPUTED / ethics-dependent** | Do not suggest harming peaceful NPC solely for exhaustive papers; D22 owns optional rare letter preservation and D13 legal risks. |
| Ambient wildlife, passing campfire, random overheard talk | Ordinary unmarked natural world life [E04] | **REPEATABLE ambient ambience**, but **not necessarily** a *credited* Chance Encounter | Don't count nonprompt wildlife, a seen NPC or general greeting as one of 25 without game tracker evidence. |

**Chapter/time/region discipline:** A requirement such as **Bayou at night** is backed by specialist guides, but a random variant's *spawn* is not guaranteed on a fixed pass. A specific script may require a prior meeting or stage. A site may progress while unseen; event stage number is not reliably inferred from buildings alone without interaction. No universal “visit at noon every three days,” fixed spawn rate, or mandatory all-event itinerary exists. [E03,E07–E10,E13]

**T2 optional details:** A few scenes and characters change after later storyline/epilogue. Never apply “Arthur-only worker letter/hat”, later-region danger or a post-chapter voice line as proof current Chapter 2 opportunity is gone. Event area stages may change or skip after long absence; when relevant warn about the **active specific stage**, not a global chapter-2 deadline. [E08,E10]

## 3. Benefits, costs, recipient routing and recoverability

**Possible returns:** Honor changes, direct cash/consumable, directions/robbery tip, subsequent free shop credit, newspaper/document, horse stat/relationship opportunities, a world site progressing, or simply story flavor. This is an **outcome menu, not a guarantee**: event-specific offered prompts and receipts outrank the generic family description. [E03–E06,E11]

| Result kind | Where proof lives | Preservation/recoverability |
|---|---|---|
| Immediate **assistance / mercy / rescue** | NPC response, short-term Honor icon, possibly encounter tracker | Once the **specific** sufferer leaves or dies, cannot assume that exact person can be rescued again. Another victim template may later appear. |
| Deferred **town thank-you / free gun** | Named person outside Gunsmith, catalog shows selected eligible zero-cost item [E05] | **CONDITIONAL** until repeat meeting and purchase. A shop thank-you is distinct from rescue itself; free stock remains story/weapon unlock dependent. |
| **Criminal/prisoner tip** | Actual on-screen dialogue, map marker, Log or inspected subsequent task | Free and arrest are mutually exclusive for the same prisoner; tips are not guaranteed for each fugitive. D13 decides witness/Honor legal effects, D19 formal bounty poster requirements. |
| **Cash, medicine, ordinary loot** | Satchel/Wallet visible item counts | Usually consumed/sold/replaced elsewhere. Not inherently unique; inspect named identity before donating/selling (D06/D22). |
| **Construction site optional payment** | Witnessed choice, site state, wallet/cargo | $100 versus timber arrangement at Castor's Ridge is choice-dependent, and staged reward can be skipped. Published prices come from community catalogue E07; verify live dialogue/menu before spending. |
| **Named letter, unique hat or weapon** | **Physical** pickup name and inventory/wardrobe, Document Read action [E08,E10,E15] | A one-time **reward** may disappear when scene/NPC/area advances while category remains available. D22 owns permanence; avoid harming peaceful NPC merely to force a collectible. |
| **Honor + legal consequence** | In-game Honor indicator vs Wanted/witness alert/map debt separately [E06,E17] | Helping someone can be beneficial; violence/threats/theft may have independent witness penalty and high-Honor conflict. Never invent numeric fixed Honor net. |
| **Compendium/official count** | Pause → Progress → Total Completion specific field; named Compendium entry when applicable [E01,E02] | A scene observed without interaction might not count; a checked count need not imply a unique item was collected. |

**Preservation-first choice rule:** If a unique named object is actually on offer and the player wants personal exhaustive collecting, inspect and preserve **before ending the scene** where safe and consensual. If the only way to get a paper is robbing/killing a peaceful NPC, label **optional and incompatible with low-violence/high-Honor goals**, not a mandatory objective. For ordinary repeatable encounters, let the player continue the story freely. Physical replay restoration cannot be promised (D24). [E08,E10,D22]

## 4. Time, chapter, risk and edition exceptions

- **Finite availability vs finite reward:** A snakebite **type** can return, but a particular rescued person and his free purchase may not. An Appleseed **location** continues to exist even when a worker scene/loot source is no longer present. A named letter may vanish while the Chance Encounter 25/25 target remains obtainable. This is the central D21 distinction. [E03,E05,E08,E10]
- **Stage progression:** Castor's Ridge, Appleseed and Central Union develop with visits/story time; secondary/community evidence says some intermediate scenes are missed on long absences. There is **no primary Rockstar day-by-day guarantee**. Avoid a countdown like “must revisit in exactly two days”; inspect when naturally in region and player values the vignette. [E07–E10]
- **Urgent once active vs mandatory beforehand:** A visibly suffering road victim can die if ignored once event activated [E05], but the user **does not have to ride to every possible road** to maximize chances. A specific live short-lived request is locally urgent only when the player elects to save that victim; no generic D08 chapter-window promotion.
- **Chance/randomness:** Not seeing an event at a reported map coordinate/time is **not** proof it has been permanently consumed. Variables include region, clock, prior stage, player state, RNG, proximity, active mission and edition. Exact spawn odds and distance are **UNKNOWN**; don't invent recurrence guarantees. [E03,E04]
- **Honor/legal branching:** Positive rescue and witness response may not align when using force; Rockstar's public Honor description qualitatively praises rescue/mercy and warns about harming innocents/theft [E06]. Honor points in RDR2.org tables are **secondary**, not a universal certified +10 rule. D13 owns law/Honor and accurate arrest distinctions. [E06,E17]
- **Edition/time variants:** The base PS4/Xbox One 2018 game and patched PC/console releases do not necessarily expose identical Stranger catalogs, bonus items or photo controls; sources here primarily describe base Story Mode. **No sourced exact edition difference for every event**; do not add unsupported “PC exclusive” flags. Online random encounters and Collector/Naturalist systems are out of scope. [E03,E04]
- **Environmental puzzles & secret letters:** Some require several inspections or specific night hours, and may culminate in one-time weapons/notes (e.g. Saint Denis wall writing, categorized D26/D22). Not every Journal sketch has finite pickups or counts toward 25. Preserve named pieces only when seen and the player's collection goal warrants. [E15,E16,D22]
- **Spoiler boundary:** explicit future/epilogue world-stage outcomes, restricted regions and hidden horror reveals remain opt-in T2. The **default** hints at "a distinct one-off night-time clue chain" without revealing plot/location.
- **Scope collision with D25:** A roadside gang **ambush** might be both an emergent encounter and a separate official **Bushwhacked** tracker, but the exact D25 classification/credit is **READ-ONLY** and currently under separate Wave 4 research; don't make 25 Chance and 1 Bushwhacked interchangeable. [E01,E12]

## 5. Typed provisional relations / source-of-truth boundaries

| From → target | Edge | Evidence and limitation |
|---|---|---|
| `S22.M01 -> S05.M01` (D13) | `INTERACTS_WITH` | Help/mercy may affect Honor [E06]; D13 controls law mechanics and exact uncertainty. |
| `S22.M01 -> S17.M04` (D06/D22) | `INTERACTS_WITH` | Deferred gift, one-off item or letter may arise, not guaranteed for every encounter. |
| `S22.M02 -> S24.M01–M04` (D25) | `INTERACTS_WITH` | Ambush ≠ fixed hideout; sibling D25 is research-only, not incorporated as adopted truth. |
| `S22.M03 -> S29.M01` (D15) | `CONTRIBUTES_TO` | **25 chance encounters** in official Total Completion. No event or player count assumed. |
| `S22.M04 -> S05.M02/M03` (D13) | `INTERACTS_WITH` | Intimidation or attack can trigger witnesses and bounty [E06,E17]; no universal result. |
| `S22.M01 -> S21.M01` (D18) | **Conditional `ENABLES`** | Night Folk chance encounter prerequisite to authored Stranger *A Fine Night For It* [E13,E14]; completing ambient event ≠ Stranger success. |
| `S23.M03 -> S23.M04` (S23) | `INTERACTS_WITH` | Environmental clue chain → journal sketch / inspectable note, after observed inputs [E15,E16]. |
| `S23.M04 -> S17.M04` (D22) | `INTERACTS_WITH` | Written document acquired vs read vs retained; named letter rarity belongs D22. |
| `S22.M03 -> S30.M05` (D08) | `INTERACTS_WITH` | Site/chapter may close certain stages, but D08 decides chapter urgency, not 25-event class. |
| `S22.M02 -> C100.EVENTS.BUSHWHACKED` | `CONTRIBUTES_TO` **PROVISIONAL** | 1 gang ambush criterion independently tracked, exact credit D25/D15 (not automatic). |
| `S22.M04 -> C100.MISC.RANTERS` | `CONTRIBUTES_TO` **PROVISIONAL** | 5 ranters/ravers/campaigners independently; don't count generic chance without UI. |

**Rule:** Typed edges are candidate schema relationships; no `REQUIRES` edge introduced from a mere coincidence of time/place. No live `unlocked_now`, `encounter_completed`, `unique_item_owned`, `honor_score` or `player_location` field is authored.

## 6. Total Completion, achievements and personally exhaustive goals

| Goal universe | Exact researched requirement / source | Not implied |
|---|---|---|
| **`OFFICIAL_100` — Missions and Events** | **25 Chance Encounters**, *counted by* **Pause → Progress → Total Completion**. Sources [E01,E02,E04,E12] corroborate. Repeatable/reused event classes suffice; 25 **different named NPCs** not required. | Seeing 25 white dots or witnessing all finite construction stages; don't count without game tracker. |
| **`OFFICIAL_100` — separate Missions and Events** | **1 Gang Ambush (Bushwhacked)**, **6 Gang Hideouts**, **10 completed Stranger mission strands**, **5 bounty posters**, all their own rows [E01,E12]. | An ambush scene is not automatically a Stranger strand, a hideout or a bounty. D25/D18/D19 own definitions. |
| **`OFFICIAL_100` — Miscellaneous** | Interact with **5 Ranters, Ravers and Campaigners**, separate category [E01,E11]. | Not every white dot, greet, random town resident, or fifth encounter in a named NPC's sequence. |
| **`OFFICIAL_100` — exploration** | **1 Point of Interest** and **5 shacks found** are separate goals [E01]; full puzzles and all scenic sites are not prerequisites. | A letter found at a one-time encounter does not automatically count as a shack or POI. D26/ D15 primary. |
| **`ACHIEVEMENT`** | Best in the West requires all official checklist rows; chapter-sensitive `Lending a Hand` is authored Honor **Story** missions (D08/D18/D13), not generic 25 roadside rescues [E01,D08]. | A good deed, a rare gun, 25 events, or all outfits alone does not award 100%/platform trophy. |
| **`OPTIONAL_EXHAUSTIVE`** | Self-chosen record of every unique dialogue, roadside rescue, construction scene, document, reward and mutual-exclusion branch. | Not guaranteed achievable **in one save**: incompatible choices and time-variant scripts may prevent all outcomes. No universal definitive scene count from reliable first-party evidence. |
| **`CONVENIENCE / IMMERSION`** | Helps and organic exploration, relationships, unique sights and occasional gifts [E03,E05]. | No formal checklist obligation, no need to sacrifice High Honor for a rare named document. |

**No completion credit asserted for this user**; no save file has been inspected. If the objective is only official 100%, the *25-count* is the scope, and PowerPyx explicitly describes ongoing chance encounters as available during ordinary exploration [E01]; finite vignettes need not all be forced.

## 7. Three common mistakes and three organic Chapter 2 scenarios [T0/T1]

**Common mistakes**
1. **“Every random event is a one-time missable; I must explore the whole map before doing any story.”** False as a system-wide inference. Official 25 is achievable through repeated chance families. Finite specific stages exist, especially building sites, so protect the **observed local** opportunity that matters to the player, not every hypothetical event [E01,E02,E07,E08].
2. **“Saving someone automatically gives me a free gun now.”** No. Aid first, the same NPC's later town appearance second, eligible free catalog redemption third. Identity, availability and selection must be witnessed; the help event doesn't create a gun in inventory [E05].
3. **“I saw a paper, white dot or ambush, so I completed a Strand / received the unique letter / got a 100% count.”** Viewing ≠ talking ≠ accepting ≠ completion ≠ picking up. Use the precise source-owned GameGuide/UI record and Total Completion category [E01,E10,D18,D22,D25].

**Scenario A — Horseback ride outside Valentine:** If a white dot appears and a road traveller is injured or calls for help, offer a **single optional rescue**. Slow down; inspect without prematurely drawing a weapon. If the specific person accepts help and survives, observe real Honor feedback and note any promised later gift, but don't assume it is already available. If no event appears, continue travelling; do not repeatedly reload for a victim. The player may opt for Story immediately. [E03,E05,E06]

**Scenario B — Castor's Ridge on a normal errands route:** If the player **naturally passes** the unfinished house and workers are actually there, observe the present construction stage and optional interaction. A later stage may offer distinct **cash support vs timber delivery**, but explain that the offer is conditional, prices come from guides, and *no payment has been made*. If preserving all optional short vignettes is the personal aim, return occasionally while travelling nearby, not on invented day-specific alarms. If the event stage already advanced, don't mark the save irreversibly ruined: official 25 Chance Encounters still remains feasible. [E07,E10]

**Scenario C — A shackled fugitive near an open road:** If an actual prisoner requests release, give a spoiler-light choice: **help**, **decline**, or **respond according to live lawful options**. Freeing may yield a tip; delivering an eligible fugitive to the sheriff may offer money, but these resolutions are mutually exclusive for that scene and legality/Honor are situational. Check the prompt and current Good, Honest, Snake Oil/bounty service state without implying that task was completed. For High Honor, the player is free to walk away rather than escalate. D13 owns legal classification; no guarantee any exact tip/reward will recur. [E04,E06,D13]

## 8. Claim ledger — independent sources, date and confidence

**Evidence classes:** `PRIMARY` Rockstar qualitative Honor rule; `GUIDE_CORROBORATED` ≥2 independent relevant specialist guides, `GUIDE_SINGLE` one secondary guide, `COMMUNITY_WIKI` contributed mechanism/background, `DISPUTED` opposing claims/versions, `UNKNOWN` no proven universal rule. **All URLs inspected 2026-10-17** (not publication date). Confidence HIGH/MEDIUM/LOW applies to the **precise claim**, not the entire event family or user's playthrough.

| Claim ID | Bounded factual assertion | Sources | Checked | Status / confidence |
|---|---|---|---|---|
| EV21-C01 | 25 Chance Encounters are required by official Story Total Completion, tracked separately | E01 PowerPyx; E02 GameFAQs; E12 GamesRadar | 2026-10-17 | GUIDE_CORROBORATED / HIGH |
| EV21-C02 | Some repeatable encounter types/reused events can increment Chance criterion | E02 GameFAQs; E01 PowerPyx | 2026-10-17 | GUIDE_CORROBORATED / HIGH for category, per-event credit only UI |
| EV21-C03 | A nearby white/grey flashing radar blip often represents Chance Encounter | E01 PowerPyx; E02 GameFAQs; E03 RDR2.org | 2026-10-17 | GUIDE_CORROBORATED / HIGH |
| EV21-C04 | Town/road event families include rescue, prisoner, animal help, directions and challenge | E01 PowerPyx; E03 RDR2.org; E04 Red Dead Wiki | 2026-10-17 | GUIDE_CORROBORATED / HIGH for types |
| EV21-C05 | Helping snakebite stranger can trigger later free eligible gun reward at Gunsmith | E05 GamesRadar; E03 RDR2.org | 2026-10-17 | GUIDE_CORROBORATED / HIGH, exact date/stock CONDITIONAL |
| EV21-C06 | Specific sufferer can die if aid delayed once active; not universal 24-hour spawn | E05 GamesRadar | 2026-10-17 | GUIDE_SINGLE / MEDIUM; timing numeric UNKNOWN |
| EV21-C07 | Fleeing prisoners can give tip if freed; lawful turn-in and release are choices | E04 Red Dead Wiki; E03 RDR2.org | 2026-10-17 | GUIDE_CORROBORATED / MEDIUM–HIGH; legality version/quest conditional |
| EV21-C08 | Rockstar gives positive Honor examples for rescue/mercy; negative for harm/theft | E06 Rockstar | 2026-10-17 | PRIMARY / HIGH qualitative |
| EV21-C09 | Exact +2/+10 or -5 event Honor point amounts are safe across all editions | E03 RDR2.org points; E06 Rockstar gives no such fixed tables | 2026-10-17 | **DISPUTED / LOW**; don't promise exact |
| EV21-C10 | Castor's Ridge follows a finite construction/optional payment vs timber series | E07 Red Dead Wiki; E10 missable event index | 2026-10-17 | COMMUNITY_WIKI corroboration / MEDIUM–HIGH |
| EV21-C11 | Specific Castor's Ridge intermediate stage may be skipped even without direct first visit | E07 Red Dead Wiki; E10 Red Dead Wiki; E18 Reddit | 2026-10-17 | DISPUTED specific skip mechanism / MEDIUM |
| EV21-C12 | Appleseed worksite has finite worker rescue, wolves, supplies stages and later abandonment | E08 Red Dead Wiki; E10 Red Dead Wiki | 2026-10-17 | COMMUNITY_WIKI / MEDIUM–HIGH |
| EV21-C13 | Appleseed **Letter from St. Luke's Academy** and **Bucket Hat** are possible site-limited items | E08 Red Dead Wiki; E10 missable index | 2026-10-17 | COMMUNITY_WIKI / MEDIUM; D22 verifies acquisition risk |
| EV21-C14 | Central Union Railroad moves through wage/thug/supplies stages before end | E09 Red Dead Wiki; E10 missable index | 2026-10-17 | COMMUNITY_WIKI / MEDIUM |
| EV21-C15 | Railroad **Property Deed** can stall/skip stages in all releases | E09 contributor bug notice | 2026-10-17 | DISPUTED / LOW universal; no irreversible prediction |
| EV21-C16 | Individual construction-event skip can occur from elapsed stage progress | E07,E08,E09,E10; E18 Reddit anecdotes | 2026-10-17 | CORROBORATED broad / MEDIUM; fixed timer UNKNOWN |
| EV21-C17 | False help requests and territory roadblocks are ambush subtypes | E03 RDR2.org; E19 Wiki ambush | 2026-10-17 | GUIDE_CORROBORATED / MEDIUM–HIGH; D25 class owned |
| EV21-C18 | One **Bushwhacked**, 6 hideouts, 10 Stranger strands and 5 poster bounties are separate from 25 | E01 PowerPyx; E12 GamesRadar | 2026-10-17 | GUIDE_CORROBORATED / HIGH |
| EV21-C19 | 5 Ranters/Ravers/Campaigners are distinct from Chance category | E01 PowerPyx; E11 RDR2.org characters | 2026-10-17 | GUIDE_CORROBORATED / HIGH |
| EV21-C20 | Bayou night Night Folk chance encounter can unlock subsequent Stranger strand | E13 RDR2.org; E14 GTA Base | 2026-10-17 | GUIDE_CORROBORATED / HIGH; exact Chapter 2 gate varies by guide |
| EV21-C21 | Named vampire requires five writing inspections then night encounter, may yield Ornate Dagger | E15 RDR2.org; E16 Gameranx | 2026-10-17 | GUIDE_CORROBORATED / HIGH broad, spawn clock CONDITIONAL |
| EV21-C22 | Vampire weapon loss/respawn is always permanently irreversible | E15 RDR2.org; E16 Gameranx; D22 discusses uncertainty | 2026-10-17 | DISPUTED/UNKNOWN recovery; protect pickup when actually offered |
| EV21-C23 | Most ordinary Stranger strands differ from chance dots/are deferred after chapter | E14 GTA Base and E01 PowerPyx; D18/D08 | 2026-10-17 | GUIDE_CORROBORATED / HIGH for distinct classes; per-strand exception |
| EV21-C24 | All RDR2 random encounters spawn infinitely at exact same scene coordinates | E01 generalized “spawn infinitely” vs E07–E10 limited site evidence | 2026-10-17 | **DISPUTED/FALSE universal**; type vs instance distinction |
| EV21-C25 | Scene can be available while a separate named reward is no longer accessible | E05 deferred gun; E08 limited worker items; E15 named dagger; D22 | 2026-10-17 | CORROBORATED mechanism / MEDIUM–HIGH, actual player UNKNOWN |
| EV21-C26 | Every white-dot encounter counts as 25 once merely witnessed | E02 GameFAQs says engage; E01 white dots | 2026-10-17 | **UNKNOWN** automatic UI event threshold; require tracker |
| EV21-C27 | Some ranters and voiced regional characters have time windows and scene sequences | E11 RDR2.org; E03 random event guide | 2026-10-17 | GUIDE_CORROBORATED / MEDIUM |
| EV21-C28 | No ordinary replay guarantees restoring original world's exclusive encounter reward | D08/D22/D24 repo research only, no universal tested restoration evidence | 2026-10-17 | RESEARCH_BOUNDARY / HIGH conservative |
| EV21-C29 | Chapter 2 roadside help always expires at Chapter 2 end | E01,E02 generic repeatable vs E07–E10 exceptions | 2026-10-17 | **DISPUTED/FALSE blanket**; named gate required |
| EV21-C30 | Exact fixed 3-day, 24-hour or 5-visit stage increment is universal | E07–E10 stage sources and E18 personal anecdotes | 2026-10-17 | **UNKNOWN**; never enforce |
| EV21-C31 | “A Fine Night For It” named Stranger credit automatically follows Night Folk chance event | E13,E14 separate events/quest | 2026-10-17 | **FALSE**; encounter prerequisite, subsequent Strand separately |
| EV21-C32 | A specific spawned NPC's free gun, rare note and actual Honor reward can be credited without observation | No player screenshot or GameGuide report; source authority contract | 2026-10-17 | **UNKNOWN PLAYER STATE** |

### Source register (all checked 2026-10-17; dates reflect sources, not game patch)

- **[E01] PowerPyx**, *Red Dead Redemption 2 – 100% Guide & Checklist*, **2018-10-25**, specialist checklist and Chance Encounter discussion: https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/
- **[E02] GameFAQs / Suprak_the_Stud**, *Missions and Events — Chance Encounters* in detailed Story guide, **updated 2019**, specialist individual walkthrough, repeated event count: https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/missions-and-events
- **[E03] RDR2.org / Matt Gibbs**, *Chance Encounters Guide*, **2018-11-12; updated 2023-01-09**, specialist event descriptions and estimated Honor deltas (not Rockstar primary): https://www.rdr2.org/guides/red-dead-redemption-2-chance-encounters-guide/ and https://www.rdr2.org/guides/red-dead-redemption-2-chance-encounters-guide/2/
- **[E04] Red Dead Wiki contributors**, *Random Encounters in Red Dead Redemption 2*, undated (crawled 2026), community catalog incl. prisoner repeat choices: https://reddead.fandom.com/wiki/Random_Encounters_in_Red_Dead_Redemption_2
- **[E05] GamesRadar+**, *How to Get a Free Gun in Red Dead Redemption 2*, available guide indexed **2022** in search metadata; rescue/gunsmith deferred scenario: https://www.gamesradar.com/how-to-get-a-free-gun-in-red-dead-redemption-2/
- **[E06] PRIMARY Rockstar Games Newswire**, *Honor in Red Dead Redemption 2*, **2018-10-22**, official qualitative praise for rescue/mercy and penalty for harm/theft: https://www.rockstargames.com/newswire/article/ak14o88389271k/Honor-in-Red-Dead-Redemption-2
- **[E07] Red Dead Wiki contributors**, *Castor's Ridge*, undated community staged site events, optional $100/$75 timber choice: https://reddead.fandom.com/wiki/Castor%27s_Ridge
- **[E08] Red Dead Wiki contributors**, *Appleseed Timber Company*, undated community staged site and limited worker items: https://reddead.fandom.com/wiki/Appleseed_Timber_Company
- **[E09] Red Dead Wiki contributors**, *Central Union Railroad Camp*, undated community stages and Property Deed bug/dispute: https://reddead.fandom.com/wiki/Central_Union_Railroad_Camp
- **[E10] Red Dead Wiki contributors**, *Missable Content in Redemption 2*, undated community catalog, explicitly not primary; chapter/event-area/doc/hat leads: https://reddead.fandom.com/wiki/Missable_Content_in_Redemption_2
- **[E11] RDR2.org**, *Special Characters Guide*, **2019-01-29; updated 2023-01-09**, Ranters/Ravers/Campaigners and conditional nighttime dialogue: https://www.rdr2.org/guides/special-characters-guide/
- **[E12] GamesRadar+**, *Red Dead Redemption 2 100% Completion Guide*, guide published circa **2020**; chance/bushwhacked/strands count: https://www.gamesradar.com/red-dead-redemption-2-100-completion-guide/
- **[E13] RDR2.org**, *A Fine Night For It Stranger Mission Guide*, **2018-11-15; updated 2023-01-09**, Night Folk nighttime chance encounter prerequisite: https://www.rdr2.org/guides/red-dead-redemption-2-a-fine-night-for-it-stranger-mission-guide/
- **[E14] GTA Base**, *A Fine Night For It Stranger Mission*, undated specialist quest breakdown, chapter and night/encounter eligibility: https://www.gtabase.com/red-dead-redemption-2/strangers/a-fine-night-for-it
- **[E15] RDR2.org**, *How To Locate the Saint Denis Vampire*, **2018-11-27; updated 2023-01-09**, five writings / night encounter / Ornate Dagger: https://www.rdr2.org/guides/saint-denis-vampire-guide/
- **[E16] Gameranx**, *How To Find the Secret Vampire | Chance Encounter Guide*, **2018**, corroborating clues and night finale; contains non-universal “three days” suggestion: https://gameranx.com/features/id/164753/article/red-dead-redemption-2-how-to-find-the-secret-vampire-chance-encounter-guide/
- **[E17] GTA Base**, *Red Dead Redemption 2 Gameplay Guide*, **2018**, public Honor/Stranger quest behavior summary: https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-gameplay-guide-features-missions-health-satchel-and-more
- **[E18] Reddit / r/reddeadredemption**, *How to not miss random encounters at Appleseed, Castor Ridge and Central Union?*, **2024-05-09**, discussion includes 2026 anecdote; **community-only, disputed stage skips**: https://www.reddit.com/r/reddeadredemption/comments/1cnxjmm/how_to_how_to_not_miss_random_encounters_at/
- **[E19] Red Dead Wiki contributors**, *Ambush*, undated category/roadblock context (D25 owns exact mechanics): https://reddead.fandom.com/wiki/Ambush

**Read-only local crossreferences on `main`**: `systems_atlas/dossiers/d08_chapter2_limited_windows_v0_1.md`, `d13_law_honor_robbery_v0_1.md`, `d18_stranger_strands_quests_v0_1.md`, `d22_unique_equipment_compendium_v0_1.md`; `d25_gang_hideouts_ambushes_v0_1.md` **not yet present on `main` at research startup**, therefore dependency **PENDING / peer owner**, not inventively imported. Also `systems_atlas/taxonomy_schema_v0_1.md`, `knowledge/record_contract_v1.md`, Wave 3 cross-review. Every such dossier is **RESEARCHED — REVIEW PENDING**, never treated as ADOPTED just because merged.

## 9. Contradictions, outcomes versus availability, and unresolved tests

| ID | Source-level disagreement / failure mode | Safe classification and test |
|---|---|---|
| D21-X01 | PowerPyx E01 says “Chance Encounters spawn infinitely,” yet E07/E08/E09 enumerate finite multi-stage worksite scenarios. | **REPEATABLE category != repeatable exact vignette**; 25 Count feasible; one-time worksite stage optional/finite. No universal claim every event can replay. |
| D21-X02 | E07/E10 say Castor's Ridge first stage may skip before directly visiting; E18 anecdotes say merely passing nearby can trigger. | **CONDITIONAL + DISPUTED precise skip trigger.** If player values all scenes, inspect naturally while nearby; no deterministic day or immediate demand to reload. |
| D21-X03 | E08/E09 and player reports conflict on exactly which intermediate worksite stages skipped, including Railroad Property Deed bug. | **CONFIRMED finite chain; DISPUTED stage-by-stage recovery.** Avoid irreversible object disposal; record actual site stage if observed. |
| D21-X04 | RDR2.org E03 prints precise positive/negative Honor point deltas for every micro-response; Rockstar E06 qualitative only, and individual event contexts vary. | **MEDIUM/LOW numeric universality**; D13 owns outcome rules. Watch Honor icon; no +2/-5 fixed “law of nature”. |
| D21-X05 | A lost deferred free gun after rescue could reflect no later NPC spawn, locked story gun, expiring single redemption or never-rescued NPC. | **CONDITIONAL**; three separate gates: rescued person, later shop contact, eligible $0 catalog purchase. No automatic item claimed. |
| D21-X06 | GameFAQs E02 reused events count; some “25 chance encounters” guides say simply witness/ride into white dot, others say interact. | **DISPUTED/UNKNOWN micro-credit predicate**; user can check `Progress → Total Completion` before/after organically. Do not turn encounter observation alone into credit. |
| D21-X07 | D08 authored Chapter 2 story windows and D18 authored Stranger follow-ups sometimes called “random encounters” in generic articles. | **DISTINCT DOMAINS:** original mission/quest log controls. Do not promote ordinary roadside events to Honor Story mandatory or treat white “?” as random dot. |
| D21-X08 | Night Folk ambush is random but also unlocks formal Stranger in later step (E13/E14 have slightly different earliest-story framing). | **CONDITIONAL precursor only**. D18 owns Stranger availability and chapter gate; count/mission progress separate. |
| D21-X09 | Saint Denis vampire wall writings require late-night meeting but individual guides suggest fixed three-day rest or instantly after notes (E15/E16). | **CONDITIONAL time, DISPUTED universal wait**. Night + five inspected writings + actual observed icon required; no clock guarantee, pickup D22. |
| D21-X10 | One finite NPC appears several times (Gavin's friend), and his possible letter is loot from violence, not always friendly reward. | **CONDITIONAL persistent NPC vs finite document opportunity**; honor/law cost may outweigh personally exhaustive object; no compelled assault. |
| D21-X11 | Same gang attack might be counted under Chance and/or Bushwhacked; precise tracking of special ambush categories not established by D21. | **OWNERSHIP DEFERRAL**: D25 and D15 determine UI semantics, require separate tracker evidence. |
| D21-X12 | Replay or loading a chapter mission lets player revisit original free-roam chance event and keep a unique pickup. | **UNSUPPORTED**; save/replay D24 read-only. Only an actual earlier full save can possibly restore prior world conditions, at cost of later save progress. |
| D21-X13 | One famous worker letter/hat is sometimes found from other late NPCs; E10 notes variants and rarity. | **CONDITIONAL alternate acquisition** for item, **finite original worksite**; D22 owns whether true alternate edition/region pickup exists. Do not assert globally unrecoverable. |
| D21-X14 | Every region/time/category variant has a known fixed spawn chance. | **UNKNOWN** internal RNG; avoid certainty, coordinates, grinding or forced rest loops. |
| D21-X15 | Later patch/build changes all chance encounters exactly the same way across PC/console. | **UNVERIFIED**; Story Mode base shared mechanics only, specific edition differences disclosed if directly sourced. |

**Observed versus rule:** A player screenshot of an event marker proves a possible interaction at that moment. A video of a successful rescue proves one outcome, not every save. A visible named item in inventory after pickup proves possession, not all Compendium flags, event replayability or achievement credit. If local event disappears, distinguish “NPC left for now,” “specific stage progressed,” “event complete,” and “specific reward permanently unavailable” as separate predicates.

## 10. Exact GameGuide / Free Roam / Adaptive Companion handoff

**Consume one moment, not a compulsory checklist.** Start with the user's reported objective and current activity:
- If they see a **white radar dot or cries**, identify event by nearby context. Offer **engage / watch / decline / carry on** and name just one salient safety/preservation risk. No fictional NPC ID.
- If **specific sufferer in danger now**, conditional locally time-sensitive guidance: if player wants to save this person, act before leaving; no demand to save everyone or manufacture a rescue.
- If **construction worksite appears**, ask whether they care about **seeing its scenes** or only **official 100%**. If scenes matter, caution that staged sites can progress; optionally revisit during existing trips. If only 100%, say 25 Chance Encounters can be met with many events and not all site stages are necessary.
- If **new named letter/gun/hat physically appears**, ask whether personal unique collection matters and **verify pickup before leaving** if safe. D22 owns rare identity/recoverability; do not recommend killing peaceful workers for a document by default.
- If law/Honor icon appears, consult **D13**. If scene turns out to be a formal **white '?' Stranger strand**, transfer to **D18**. If gang camp/hideout/ambush classification is the issue, consult **D25** once that agent's review-pending dossier is delivered; don't invent its conclusions.
- If player asks "Have I done 25?": direct to **Progress → Total Completion** or current GameGuide campaign authority, **not** inferred counts from the chat or seen map dots.
- If user prefers Gold mission, return to original full Mission Control preflight; no event detour or chance-rescue advice should trump an active one-shot mission timer. D08 owns chapter-critical urgency and optional Honor story windows.

**Example conditional compact answer:**

```text
ADVENTURE | Free roam observed by player? UNKNOWN.
SPOTTED   | Chance event candidate: yes only if actual white dot / help prompt is reported.
TYPE      | REPEATABLE family / SPECIFIC resolution conditional; not an assumed one-time missable.
CHOICE    | [Approach carefully] [Observe] [Keep travelling]
PRESERVE  | If a named letter/weapon becomes physically available and collecting it matters, inspect before leaving.
HONOR     | Helping may be positive; law/Honor exact result depends on player actions [D13].
PROGRESS  | 25 Chance Encounters is official 100% criterion; current count UNKNOWN.
RETURN    | Resume story/outing; player-confirmed outcome only to original GameGuide campaign.
```

**Authorized knowledge consumer boundary:** Hub Atlas supplies researched general rules, not an event logging database, persistent game-state monitor or binary save decoder. `L33TW0RLD/rdr2/campaign/` remains sole canonical player-state authority; screenshots/player reports must be interpreted by GameGuide and never written from this task. UI controls are provisional proposals, no functional implementation implied.

## 11. Reviewer questions, precise follow-ups and stop request

1. **Coordinator/source audit:** Validate 32 claim IDs against the 19 named links; distinguish the one **Rockstar** primary Honor source from specialist and community-reported spawn/skip details. No unsupported stage timer or numeric Honor score promotion.
2. **D25 cross-review once present:** Agree distinct meanings of gang ambush, ambient gang camp, fixed hideout, **one Bushwhacked**, and chance event. D21's provisional relations aren't hard dependencies and make no claim D25 delivered.
3. **D08/D18 alignment:** Verify which named Stage/Stranger is *actually chapter-window limited* and what one live event could be urgent; no global “finish all Chapter 2 encounters” requirement.
4. **D22 preservation review:** Check worker-only Letter from St Luke's Academy, Bucket Hat, Ornate Dagger, repeatable NPC document and exact recovery alternatives separately before issuing any irreversible warning. No High-Honor-incompatible forced robbery advice.
5. **In-game bounded observation if organically encountered:** With player consent, inspect **25 Chance Encounter** tracker before/after one repeated rescue, optional construction stage reward or a nonviolent late thank-you at the gunsmith. Do not stage/reload/grind merely for science; observed result stays with GameGuide.
6. **Owner decision requested:** Approve the *research reference* package for coordinator integration as **RESEARCHED — REVIEW PENDING**, preserving contradictions and provisional taxonomy. Ratification/ADOPTED requires separate owner action. Do not authorize feature, save monitor, original campaign write or changed reward claim through mere merge.

**Task stop:** `atlas-world-events-031` finishes only when three leased GitHub files and branch SHA are independently read back, checkpoint/handoff state `DELIVERED_REVIEW_PENDING`; no self-merge, rebase, reset, force-push, or self-assignment.