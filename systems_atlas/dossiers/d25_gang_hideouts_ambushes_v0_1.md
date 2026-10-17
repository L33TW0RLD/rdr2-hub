# D25 — Gang Hideouts, Ambient Camps, Ambushes and Faction Credit

> **RESEARCHED — REVIEW PENDING; NOT ADOPTED.** General **Red Dead Redemption 2 Story Mode** rules and evidence, never a claim that any particular player has encountered, survived or cleared a gang event. Gang combat is **not** a mandatory roaming pastime: one official 100% hideout requirement and one ambush requirement are **separate** from the Gang Compendium and from optional exhaustive discovery.

| Metadata | Scope / authority |
|---|---|
| Record / version / type | `ATLAS.D25` · `v0.1` · mechanics reference |
| Task / issue | `atlas-hideouts-033` · [Issue #42](https://github.com/L33TW0RLD/rdr2-hub/issues/42) · `agent/atlas-hideouts-033` |
| Checked | **2026-10-17**, meaning source verification date **not** title-update version |
| Modes / platforms | **Story Mode**, original PS4/Xbox One and subsequent PC/updated builds with appropriately marked edition differences. **Red Dead Online** roaming-hideout counts, dynamic bounty events, multiplayer posses and mods are OUT OF SCOPE. |
| Provisional leaf ownership | `S24.M01` Gang encounters/faction recognition; `S24.M02` named hideout recognition/clearance; `S24.M03` ambush threat response; `S24.M04` temporary non-hideout camp; `S22.M02` ambiguous roadside bait/ambush classification. IDs are proposed/unratified. |
| Crosslinked owners | [D13 Law/Honor](d13_law_honor_robbery_v0_1.md), [D15 Compendium](d15_compendium_trackers_v0_1.md), D21 finite encounters on [separate Wave 4 branch](https://github.com/L33TW0RLD/rdr2-hub/tree/agent/atlas-world-events-031), [D24 replay/medals](d24_replay_saves_medals_v0_1.md): all **READ ONLY** and, where existing, **RESEARCHED — REVIEW PENDING**. |
| Spoiler policy | **T0/T1 default** in the field guidance; future chapters/region/faction names confined to §§4B and 6 as **T2+** reference. Do not announce later events during Chapter 2 companion use. |
| Completion authority | Player's actual **Pause → Progress → Total Completion → Missions & Events** and **Pause → Progress → Compendium → Gangs**, plus GameGuide/player screenshots when accepted. No automatic counters here. |
| User-specific state | **UNKNOWN**: current chapter/mission, gang discoveries, hideout clearances, ambush survival, 25 Chance Encounters, Honor, Wanted, ammo, companions, save or Gold outcomes. |
| Evidence register | Section 8 claim IDs `C01–C22`, publisher URLs, dated source access, confidence and contradictions. |

**Essential crosswalk:** Official 100% checks **6 gang hideouts cleared**, **1 gang ambush survived** (`Bushwhacked`) and **6 gang factions discovered** (Compendium), with a distinct **25 Chance Encounters** goal. **No official 100% requirement to attack every roadside camp or finish every gang's detailed Compendium camp/ambush/kill subcounters.** [C01,C02,C03,C05]

## 1. Definitions and player interaction: what event is this? (S24.M01–M04; S22.M02)

### Operational classification table

| Category | Persistent property / typical observation | Possible on-screen evidence | What it **does not** prove |
|---|---|---|---|
| **A. Named fixed gang hideout** | Named, authored hostile settlement/cabin/cave/fort/ranch in **canonical base six**; attacking and *fully clearing* its eligible enemy group or progressing the corresponding authored capture should be tracked separately from visiting. Location fixed, gang occupation may vary by chapter. [C02,C06] | `Progress → Total Completion → Gang Hideouts` **6-target row**, and sometimes encounter/notification or Compendium `Hideout Found`. | Entering its map polygon or seeing buildings = clearance; killing a couple guards = successful clearing; enemy respawn revokes earlier credit. |
| **B. Smaller ambient gang camp** | A few hostile faction members around a **campfire/smoke**, bedrolls/wagons; appears from a set of possible local spawn sites **conditionally/randomly**. May be associated with gang Compendium `Camps Found` or `Unique Encounters`, depending on specific game flag. [C03,C07] | `Compendium → Gangs → [faction]` **camp/encounter detail**, if increased. | Being a required `Gang Hideouts` checklist site; new unique camp credit every time same campfire reappears; a 100%-required fight. |
| **C. Roadside gang ambush / roadblock** | Gang initiates attack against traveler near known danger point: sudden emergence from cover, demanding toll, blocked wagon, bridge blockade, deceptive scene or trap. Trigger is contextual/chance/story-conditioned. [C04,C08] | `Total Completion → Bushwhacked` check (one survived) and potentially faction `Ambushes Survived` / `Unique Encounters`. | Every hostile road encounter automatically qualifies; killing all attackers required; completing 25 **Chance Encounters** instead. |
| **D. Gang-controlled location / contested site** | Any defended house, abandoned church, homestead, ranch approach, road barrier or meeting site. Sometimes populated by a recognized rival gang, sometimes scripted NPCs. [C03,C09] | Hostile silhouettes/faction dialogue, discovered location or scene marker; possibly another mission/log entry | A **canonical named hideout** merely because many enemies stand there; instant Compendium credit without new faction recognized. |
| **E. Scripted Story/Stranger/bounty battle** | Encounter staged by named mission, with companions, mission prompt and optional medal objectives. May deliberately overlap a **canonical hideout** (four such story sites in the standard six). [C02,C10] | `Progress → Story` mission completion/medal; potentially hideout row **when actual tracked mission site cleared**. | That all **mission gunfights** count as `Bushwhacked`; mission Gold or Honor proved by a hideout tick; replay carries persistent original-world loot. |
| **F. Repeat or repopulated enemy activity** | Revisiting a fixed previously hostile site or its nearby road after story progression/time may show enemies again; faction and activity can change. [C11,C12] | Enemies and combat shown **now**, possibly encounter credit in gang detail | That it is a new unique hideout toward 6/6, the same enemies respawn on a known clock, or that clearance previously reported was erased. |

### Identification protocol (default spoiler-safe)

1. **Observe first:** actual named story mission on screen? A marked fixed place? A few people and smoke? A deliberate roadblock/sudden attack? Only a game prompt/log can establish the active event context. [C03,C04]
2. **Distinguish eligible goal:** If the user is pursuing **OFFICIAL_100 hideouts**, compare actual named location to canonical **six**; for ambush, check the single **Bushwhacked** row **after surviving**; for **Compendium**, check the *Gang faction card* rather than a hideout location guess. [C01,C02,C05]
3. **Do not claim success from participation:** Fight, flee or negotiate only when valid for the actual scenario, then independently view the corresponding progress entry. A location may be visited while remaining uncleared. A recognized gang encounter may add its faction without clearing any headquarters. [C03,C04,C05]
4. **Mission-constraint boundary:** A story mission using a gang hideout may have a prescribed engagement with Gold objectives. Defer mission-specific instructions to GameGuide; D25 supplies classification only. [C10,C19]

## 2. Normal unlocks, conditional gates and exception model

Dossier-local `D25.Gxx` are **descriptive gate labels**, not adopted machine IDs or evidence that *this player* meets them.

| Gate | General Story Mode rule / condition | Evidence strength | Live verification (status UNKNOWN) |
|---|---|---|---|
| **G01** Compendium factions | Six included enemy factions are discovered via genuine gang encounters; some are encountered through normal story progression including the Epilogue. [C05] | HIGH for six; exact method of recognition per scripted event MEDIUM | Pause → Progress → Compendium → Gangs, named entry count |
| **G02** Six Point Cabin | **Chapter 2**, `Paying a Social Call` is a normal story trip into an O'Driscoll hideout in Cumberland Forest (New Hanover). [C02,C06] | HIGH | Actual named mission/Progress Story evidence + 6-hideout row |
| **G03** Shady Belle | **Chapter 3** main story hideout conflict, Lemoyne Raiders, southeast of Rhodes in Lemoyne. [C02,C06] | HIGH | Story Progress and hideout count; **not** an instruction to raid early |
| **G04** Beaver Hollow | Normal clearing around the **Chapter 5** story transition; Murfree Brood northeast New Hanover / Roanoke Ridge. [C02,C06] | HIGH general; precise mission stage delegated to GameGuide | Named story encounter and 6-hideout row |
| **G05** Hanging Dog Ranch | Big Valley, West Elizabeth; O'Driscoll-occupied during earlier Story, **Laramie** later. Specialist sources describe an optional Chapter 6 raid and an **Epilogue Part I** story battle; avoid asserting `must raid Ch6`. [C06,C09] | HIGH location; HIGH phase occupant difference; conditional timing | Actual story mission or post-raid checklist |
| **G06** Thieves' Landing | **New Austin**, Del Lobo faction; normal access after main story/Epilogue. [C02,C06] | HIGH | Arrive in accessible Story world, *clear*, inspect 6-hideout count |
| **G07** Fort Mercer | **New Austin (Rio Bravo)**, Del Lobo faction; normal access after story/Epilogue. [C02,C06] | HIGH | Same; not a prerequisite for early Chapter 2 free roam |
| **G08** roadside ambush | Must actually **trigger a recognized enemy gang ambush** in a supported region/stage; preset candidate positions + conditional/random occurrence. [C04,C08] | HIGH general; no guaranteed time/location | `Bushwhacked` after escape/survival; see if faction `Ambushes Survived` changes |
| **G09** ambient camp | Possible smaller campfire at documented regional sites; may or may not spawn on arrival. [C03,C07] | HIGH conditional spawning; individual triggers unknown | Observe actual camp; inspect unique site/camp Compendium detail only if deliberately pursuing optional depth |
| **G10** added Story hideouts | Special/Ultimate edition **Twin Rocks**, patch-era **Gaptooth Breach / Solomon's Folly** addition; no global equation between available hideout count and baseline required six. [C13,C14] | HIGH official addition/edition presence, MEDIUM name association from secondary sources | Inspect installed edition/Story Mode build and **actual 6/6 row** |
| **G11** story missions and replay | Specific authored hideout fights are normal mission instances; replay accesses scoring, not a guaranteed rewrite of original-world hideout state. [C10,C19] | HIGH broad; replay effect on individual gang subflags untested | Original `Progress → Story` and separate `Total Completion` readback; D24 owns replay rules |

**Hard-gate policy:** `G02` through `G07` are **normal routes** rather than instructions to trigger a mission or to kill enemies immediately. Early exploration can discover a site before its story event, but cannot be assumed to have granted unique official clearance. New Austin is **not** normally an ordinary Chapter 2 roaming area. Neither favorable Honor nor campfire smoke changes fixed quest gates. [C02,C06,C09]

## 3. Benefits, costs, recipient and recovery effects

**Potential benefit / why the system exists:** faction reconnaissance helps recognize territory and avoid hostile approaches; an actual *cleared canonical hideout* can move `Missions & Events → Gang Hideouts`; a **survived** eligible ambush can move `Bushwhacked`; simply meeting a new faction can advance `Compendium → Gangs`. Some hostile areas may yield weapons, loot, documents or opportunities to rescue someone, but these are **not guaranteed payout types or completion substitutes**. [C01,C03,C04,C05]

**Costs / irreversible risk:** hostile firearms, concentrated crossfire, thrown explosives, fire and ambush roadblocks endanger Arthur **and horse**; tall-country terrain and narrow caves reduce room to withdraw. Looting bodies or harming bystanders can create separate wanted/Honor effects. Time spent in voluntary gang fights risks postponing a currently active Chapter 2 mission/camp opportunity; a story battle's optional **Gold** criterion is distinct from clearance. High Honor is not a numeric combat quota. [C17,C18,C19]

**Recommended evidence-first, High Honor-compatible choices:** prioritize withdrawal, route adjustment or avoidance when no obligatory mission is active. If a recognized ambush occurs, **survival/escape is supported as enough for the official Bushwhacked row** per GameFAQs; systematically slaughtering attackers is **not** a requirement. Defend against immediate hostile threat if needed, but never advise intentionally threatening innocents or forcing a roadblock encounter to get a checkbox. Inspect actual Honor/Wanted afterward if it matters; don't promise every hostile kill always neutral. [C04,C17]

**Loot / recurrence limits:** some named hideouts may host more enemies on future visits; their return is **not proof** the original 6-hideout credit was revoked. The extent/timer of hostile repopulation depends on location/story and community accounts conflict (see §9). No guaranteed time-to-respawn, number of enemies, particular loot chest restock, repeatable formal credit, or firearm repair formula is established. [C11,C12]

## 4. Regional faction and named-hideout atlas (edition, chapter and story risks)

### 4A. Default T0/T1 Chapter 2 region logic, no route forcing

- **O'Driscolls — Cumberland Forest/Heartlands, New Hanover, and portions of Big Valley.** Gang is regularly visible in early Story; **Six Point Cabin** is canonical in a Chapter 2 story mission. Smaller smoke-marked roadside camps and occasional roadside toll/cover ambushes are **conditional**, not guaranteed by passing an intersection. You do **not** need to clear all camps. [C02,C03,C07,C08]
- **Lemoyne Raiders — Scarlett Meadows / Rhodes–Lemoyne territory.** Their **Shady Belle** hideout is a future story site; smaller camps/roadblocks exist in their wider territory. Do not identify every abandoned church/campfire shootout as a separate required gang hideout. [C03,C06,C07]
- **Murfree Brood — Roanoke Ridge / northeastern New Hanover.** Later story emphasis; northeastern forest traps/camps/roadside scenes can appear earlier; their canonical cave is **Beaver Hollow**. Unknown time of day and random spawn never form mandatory first-visit advice. [C03,C08]
- **Other hostile groups:** opportunistic outlaw families, Night Folk, bounty hunters, lawmen, Pinkertons or apparent armed strangers can be present. They do **not automatically count as one of the six named Gang Compendium factions** or as one of six hideouts. Determine the faction from actual context/Compendium; D21 owns non-gang encounters. [C05,C16]
- **Ambient gangs are a threat, not a task queue:** watch smoke, rider behavior, map and road; reroute without penalty claims; protect horse/companion and active mission timing. Repeated gunfights are **not** a valid substitute for official row inspection. [C03,C04]

### 4B. T2+ coordinator reference (never auto-surface in active Chapter 2)

**Core six standard Story hideout sites (fixed locations, NOT one per faction):**

| Canonical site | Geography | Faction / normal Story access | Official 6/6 evidence contract |
|---|---|---|---|
| **1. Six Point Cabin** | Cumberland Forest, northwest New Hanover (northeast of Valentine) | O'Driscolls; **Ch2 Paying a Social Call** normal main mission [C06] | Progression through eligible story capture; separately check hideout row |
| **2. Shady Belle** | Scarlett Meadows, Lemoyne (southeast of Rhodes) | Lemoyne Raiders; **Chapter 3** normal main story [C06] | Story capture is normally recognized, but no player credit inferred |
| **3. Beaver Hollow** | Roanoke Ridge near Annesburg, northeastern New Hanover | Murfree Brood; **end Ch5 / transition** authored mission [C06] | Not equivalent to random Murfree campsite kill |
| **4. Hanging Dog Ranch** | Big Valley, West Elizabeth, north of Little Creek River | O'Driscolls in earlier story; **Laramie** later. Optional earlier raid / Ch6 context or Epilogue I story visit [C06,C09] | One canonical **place**, not a seventh site when occupier changes |
| **5. Thieves' Landing** | Eastern New Austin near San Luis/river shore | Del Lobos; normal **Epilogue access** [C06] | Needs eligible clearance and row readback, not map discovery |
| **6. Fort Mercer** | Rio Bravo, New Austin | Del Lobos; normal **Epilogue access** [C06] | Same; not automatic from one Del Lobo encounter |

**The six Compendium gangs (NOT same as six sites):**

| Faction in Compendium | Main region and normal progression | Fixed-hideout tie | Important boundary |
|---|---|---|---|
| **O'Driscoll Boys** | New Hanover / Big Valley; encountered early Story | **Six Point Cabin**, earlier **Hanging Dog Ranch** | Two sites under one faction; other armed encounters do not become new locations [C03,C05] |
| **Lemoyne Raiders** | Lemoyne, often encountered after traveling south | **Shady Belle** | A series of smaller campfires does not create official hideout count |
| **Murfree Brood** | Roanoke Ridge, New Hanover | **Beaver Hollow** | Their ominous roadside scenes may be ambushes/camp incursions, not automatically cave clearance |
| **Skinner Brothers** | Tall Trees, western West Elizabeth, prominently later story | **No canonical named hideout in the baseline six**, per GameFAQs [C03,C05] | Discovering faction **is** needed for six-gang Compendium; no corresponding fixed-hideout demand |
| **Laramie Gang** | Big Valley / later story (Epilogue) | Occupies **Hanging Dog Ranch** after earlier O'Driscoll period | A new occupier is not a seventh geographical hideout |
| **Del Lobo Gang** | New Austin, normally later Story | **Thieves' Landing + Fort Mercer**; added optional locations on updated builds | Two sites under one faction; special Stranger encounter may reveal faction earlier, not unrestricted New Austin access |

**Caveat:** one GameFAQs source reports Del Lobos may be seen earlier through a named Chapter 2 Stranger. This is **a faction-discovery exception only**: do not label Fort Mercer/Thieves' Landing naturally accessible in Chapter 2, or claim the player has seen the faction. [C05,C09]

### 4C. Platform, edition and patched additional hideouts

- **Twin Rocks:** Special/Ultimate edition Story Mode **bonus Del Lobo hideout** identified by PowerPyx; **Rockstar Support** independently confirms that a Special/Ultimate **Del Lobos hideout** becomes available through Story progression, but does *not* name Twin Rocks in its support text. Default Standard edition 2018 guides show non-gang NPCs there. **Do not add a universal seventh requirement to 6/6**. [C13]
- **Gaptooth Breach and Solomon's Folly:** additional **Del Lobo Story Mode hideouts** cited by Red Dead Wiki/game release reporting for PC-era/console title updates. **Rockstar Title Update 1.15 support** expressly says **two added Story Mode gang hideouts** became available to PS4 and later Xbox One; official notes cited here **do not name these two**. Thus **HIGH** existence of two additions; **MEDIUM/HIGH** secondary association with named locations. The baseline checklist **six** is not thereby automatically changed to 8 or 9. [C14,C15]
- **Story Mode vs Online contamination:** Online has far more free-roam random hideout positions and posses; an Online map highlighting Pike's Basin, Bacchus Station or other possible hideouts is **NOT** proof that Story Mode Total Completion requires them. Mods such as *Bandit Hideouts* permit custom .ini respawn timers; mod settings **must never** be cited as vanilla game rules. [C16,C22]
- **Temporal occupier shifts:** Shady Belle and Beaver Hollow have story-stage roles beyond enemy occupancy; Hanging Dog Ranch changes occupant; do not promise an identical enemy list or uninterrupted access after story movement. [C06,C09]

## 5. Provisional typed relationships, dependencies and risk graph

Proposed `Sxx.Mnn` relations use the unratified Hub taxonomy contract and **do not** create new official IDs, permanent player status, or unsourced hard gates. Suggested types/meaning:

| From → to | Proposed edge | Specific meaning / evidence |
|---|---|---|
| `S24.M01 → S28.M02` | `RECORDED_IN` | Encountering **one of six gangs** contributes to Gang Compendium discovery, not necessarily complete faction detail [C05] |
| `S24.M02 → S29.M01` | `CONTRIBUTES_TO` | Eligible canonical hideout clearance **6/6** needed for `Missions & Events`, not each ambient camp [C01,C02] |
| `S24.M03 → S29.M01` | `CONTRIBUTES_TO` | Survive **one recognized gang ambush** for `Bushwhacked`, not total kill count [C01,C04] |
| `S24.M04 → S28.M02` | `INTERACTS_WITH` | Small camp/unique-encounter subcounters may change for **personal detailed Compendium**; not six-hideout row [C03,C07] |
| `S22.M02 → S24.M03` | `INTERACTS_WITH` | Some deceptive encounters are **gang ambushes**; not every chance encounter is a gang ambush; D21 read-only [C04,C08] |
| `S24.M01 → S07.M01` | `INTERACTS_WITH` | Region/route planning and travel safety support avoiding gang threat [C03] |
| `S24.M02 → S30.M02` | `INTERACTS_WITH` | When an authored mission clears a hideout, **Gold medal objectives** are separate GameGuide scoring [C10,C19] |
| `S24.M03 → S05.M01–M04` | `INTERACTS_WITH` | Honor, witnesses, Wanted and possible bounties are context-dependent **D13 read-only**, not fixed moral penalty per enemy [C17] |
| `S24.M03 → S06.M05` | `INTERACTS_WITH` | Horse danger/death and dismount risk under ambush, D01 read-only [C18] |
| `S24.M02 → D24` | `INTERACTS_WITH` only | Replay helps mission medal practice, **not** proof that an unrecorded original-world hideout was cleared [C19] |
| `S24.M04 → D21` | `INTERACTS_WITH` only | D21 owns finite/camp/rescue outcomes when a scene is more than gang presence [C20] |

**No implied REQUIRES edge** from *killing members of every rival camp* to `S29.M01`, `S28` gang discovery, a specific Chapter 2 unlock, or `Bushwhacked`. The existence of a path does not mean the user traveled it. [C01–C05]

A consumer's generic classification record **might** have `event_type: AMBUSH`, `faction: UNKNOWN`, `campaign_credit: UNKNOWN`, `source: D25-C04`; it must **not** store `ambush_survived_now=true` or `hideouts_cleared=4` without independent player evidence and GameGuide authority.

## 6. Official 100% vs Gang Compendium vs achievements vs optional exhaustive

**There are three different gang-linked official game requirements.** All are part of separate menu rows and verified with the applicable readback. Independent sources GTA Base, PowerPyx, GameFAQs and Gamer Guides concur on their **counts**. [C01,C02,C05]

| Goal universe | Exact requirement | In-game verification | What **does NOT count** |
|---|---|---|---|
| `OFFICIAL_100` / `Missions & Events → Gang Hideouts` | **Clear six canonical gang hideouts** | `Pause → Progress → Total Completion → Gang Hideouts` reaching six/check | Visit/sightseeing; ambush only; clearing 6 ordinary campfires; returning to one respawning hideout six times; every DLC location being mandatory |
| `OFFICIAL_100` / `Missions & Events → Bushwhacked` | **Survive one recognized gang ambush** | `Total Completion → Bushwhacked` checked | Simply crossing a possible ambush location; fighting a generic mission gang battle; killing enemies at a static campsite. **Escape/survival can count** per GameFAQs. |
| `OFFICIAL_100` / `Compendium → Gangs` | **Discover all six named factions** | `Progress → Compendium → Gangs`, and corresponding Total Completion gang criterion | Clear every faction camp; fill every gang card to 100%; treat Van der Linde/Pinkertons/Night Folk as six official factions |
| `OFFICIAL_100` / `Missions & Events → Chance Encounters` | **25 qualifying chance encounters** | Its own 25-target Total Completion row | Assume every ambush, hideout, gang kill or ordinary campsite contributes automatically; D21 owns event-specific credit |
| `ACHIEVEMENT` / Best in the West | Entire in-game 100% checklist (including the three gang-linked subcriteria) | Platform trophy and overall Total Completion, not an individual shootout | Every catalog subaction complete, “all campfires” or Gold Medal count |
| `ACHIEVEMENT` / Gold Rush | 70 eligible Story mission Gold medals, **separate from 100%**, D24-owned | `Progress → Story` medal + platform achievement | Gang hideout count, ambush survival, kill tally |
| `OPTIONAL_EXHAUSTIVE` / personal faction encyclopedia | Finish **each gang's detailed** camps/ambushes/hideout/unique-encounter/kill/bounty entries where applicable and actually possible | `Compendium → Gangs → [faction]` sub-fields; owner chooses scope | Not a prerequisite for baseline game 100% and may include context-limited encounters |
| `CONVENIENCE` / `IMMERSION` | Learn territorial risks, avoid ambush, preserve horse and High Honor | Route/safety observation, not an official checkbox | Any imposed kill quota or fabricated achievement |

**Important mathematical non-equivalence:** **6 gangs ≠ 6 unique gang factions with exactly one hideout each.** O'Driscolls and Del Lobos have more than one fixed site; the Skinner Brothers have **no** standard named hideout. Hence `6/6 discovered gangs`, `6/6 cleared hideouts` and `one survived ambush` are deliberately different measures. [C03,C05]

**Clearance credit:** PowerPyx says to defeat all enemies at the New Austin sites, and GameFAQs says discover *and clear*. For narrated story raids, eligible mission event may mark clearance. If a player merely rides past, kills one guard, leaves half alive, or revisits a currently empty place, **treat clearance UNKNOWN** until `Total Completion` actually increments. A generic toast/map pin is not necessarily the authoritative six-hideout counter. [C02,C06]

**No compulsory camp checklist:** The individual `Gang camps` or `Unique encounters` boxes in a gang Compendium page may tempt exhaustive collectors, but **do not create a 100% official requirement** to loot or eradicate each faction's small temporary camps. GameFAQs explicitly calls full gang entry completion *optional*. [C03]

## 7. Three mistakes and three Chapter 2 organic, spoiler-light examples

### Frequent errors

1. **“I found a camp with four O'Driscolls, so hideout +1.”** Camps are **smaller random occupied sites**; only a named canonical location clearing and in-game official row readback establishes a hideout. [C02,C03]
2. **“Ambush = kill everyone.”** For official `Bushwhacked`, **survive the recognized ambush**; GameFAQs permits riding away. Do not seek lethal combat solely for a progress tick. [C04]
3. **“I have killed a gang in a story mission so I must have cleared one hideout, obtained Gold and completed their entire Compendium.”** Location, relevant mission, Story medal, and gang-category tracker are separate; check all respective menus. [C03,C10,C19]

### Example A — Observe the smoke, not a kill quota (T0)

**Condition:** Chapter 2 free roam and a distant **campfire smoke plume** in New Hanover; no active time-sensitive mission obligation. Pause at a safe distance, use binoculars if actually equipped and observe rather than immediately ride into a camp. If the site proves to hold hostile O'Driscolls, classify it **small gang camp**, not one of the six named hideouts. **Optional** `Compendium → Gangs` readback if pursuing a personal catalog. Continue the planned outing or leave safely; no fabricated `Camp Found` or `Hideout Cleared` result. [C03,C07,C17]

### Example B — When a toll becomes an actual ambush (T1)

**Condition:** Riding near an observed New Hanover road/intersection and armed strangers **actually spring a toll demand or blockade**. No claim a specific spawn or ambush will occur. If it becomes a recognized gang ambush, prioritize horse safety: slow/turn away, avoid being pinned; leave scene without harming bystanders if feasible. Once safe, open **`Total Completion → Bushwhacked`** and `Compendium → Gangs` to see **if** the corresponding event was credited. A missing check is **UNKNOWN/unsupported trigger**, not proof the player failed to kill enough. [C04,C08,C17,C18]

### Example C — A story trip to a cabin is not a planned new raid (T1)

**Condition:** The actual **`Paying a Social Call`** Story mission is available/actively chosen and GameGuide is directing the current mission. **Six Point Cabin** is an O'Driscoll named hideout connected to that mission. Follow the **full current Mission Control field guide** and its own medal/honor constraints rather than D25 improvising a separate attack. **After** the mission, if requested, check the official `Gang Hideouts` row and relevant `Progress → Story` medal **as independent observations**. Do not mark the hideout cleared from a wiki walkthrough, or assume any mission Gold or save. [C02,C06,C10,C19]

**Consumer principle:** High Honor is a player preference, not an excuse to misstate mechanics. Avoid confrontation where optional; defend yourself responsibly in genuine ambush; let scripted story missions dictate their actual tasks and Gold conditions. No exploit, compelled forced combat tour or automatic last-chapter warning.

## 8. Claim and source ledger — individual provenance / independent cross-check

**Every source below checked 2026-10-17.** Publication/update year appears where verified; date checked is **not** a patch/version date. Sources are **narrowly bounded**: Rockstar Support is **PRIMARY** for actual added Story hideout and edition statements, not a complete gameplay event definition; specialist guides are **INDEPENDENT** evidence for baseline tracker details; fan discussion is **ANECDOTAL**, never a timer guarantee. No current game, save or UI test was conducted by this researcher.

### Source register

- **E01** [GTA Base — Red Dead Redemption 2: 100% Completion Checklist](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist), independent guide, original publication date unverified; checked **2026-10-17**. Describes six hideouts, one ambush, six gangs, 25 encounters and names four story/two New Austin locations.
- **E02** [PowerPyx — All Gang Hideout Locations](https://www.powerpyx.com/red-dead-redemption-2-all-gang-hideout-locations/), **2018-11-01**, independent specialist guide; six named locations + bonus Twin Rocks + specific clearance advice.
- **E03** [GameFAQs — Total Completion](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion), **updated 2019-09-13**, independent guide, required 6 cleared / 1 survived / six factions / 25 Chance Encounters.
- **E04** [GameFAQs — Compendium: Gangs](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/gangs), **updated 2019-09-13**, independent detailed gang-by-gang guide: encounter/ambush/camp/hideout subfields, six faction names, regional spawns, recurrence qualified.
- **E05** [GameFAQs — Missions & Events](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/missions-and-events), **2019-09-13**, independent guide, Bushwhacked **survival/escape** and named six hideouts, contested Hanging Dog Ranch timing.
- **E06** [Gamer Guides — 100% Completion Checklist](https://www.gamerguides.com/red-dead-redemption-2/guide/extras/trophy-guide/100-completion-checklist), publication ~2018, independent guide; corroborates all three gang goal counts, 25 encounter distinction.
- **E07** [Rockstar Support — Special/Ultimate bank robbery mission and gang hideout](https://support.rockstargames.com/articles/31iB7h4naf6QzqfMdtamH0/accessing-the-bank-robbery-mission-and-gang-hideout-as-part-of-the-special-or-ultimate-editions-of-red-dead-redemption-2), **updated 2024-05-01**, **PRIMARY** narrow: Special/Ultimate Del Lobos Story Mode hideout availability through progression; no name given there.
- **E08** [Rockstar Support — Red Dead Redemption 2 Title Update 1.15](https://support.rockstargames.com/articles/28AmlyPGLVKsJ8OpdN8myn/red-dead-redemption-2-title-update-1-15-notes-ps4-xbox-one-pc-stadia), game updates **Dec 2019–Jan 2020**, support page updated **2024-12-17**, **PRIMARY** narrow: **two added Story Mode gang hideouts** rolled to PlayStation and Xbox; careful not to mix Online content in same notes.
- **E09** [Red Dead Wiki — Gang Hideouts](https://reddead.fandom.com/wiki/Gang_Hideouts), community-maintained, date unverified, **ANCILLARY** named Gaptooth Breach/Solomon's Folly vs Rockstar unnamed additions, faction changes, population exception after certain story mission.
- **E10** [GTA Base — Gangs & Factions](https://www.gtabase.com/red-dead-redemption-2/gangs/), publication date unverified, independent gang index, six Compendium factions vs many broader hostile groups and territories.
- **E11** [PowerPyx — 100% Completion Checklist](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/), **2018-10-25**, independent general guide, criteria 1 Bushwhacked / 6 hideouts / 6 gang discovery / 25 Chance Encounters.
- **E12** [GameFAQs — Compendium and Gang subfields](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/gangs), 2019-09-13; same detailed source as E04 used for precise camp and repopulation limitations, NOT independent second confirmation.
- **E13** [Red Dead Wiki — Gangs in RDR2](https://reddead.fandom.com/wiki/Gangs_in_Red_Dead_Redemption_2), community-maintained, date unverified, six named Compendium factions vs other story antagonists; ancillary.
- **E14** [Red Dead Wiki — Gang Hideouts](https://reddead.fandom.com/wiki/Gang_Hideouts), community-maintained, date unverified; original PC extras and later patch links; ancillary same family as E09.
- **E15** [Red Dead Wiki community discussion — Hideouts respawn?](https://reddead.fandom.com/f/p/3114360318722150550), started **2018-11-05**, **ANECDOTAL** reports both returns and missing returns, numeric days inconsistent.
- **E16** [Steam community — Do hideouts respawn?](https://steamcommunity.com/app/1174180/discussions/0/592895161856443745/), **2025-04-21**, **ANECDOTAL CONTRARY** general no-respawn claim, does not supersede GameFAQs or verified in-game behavior.
- **E17** [Wave 2 D13 Law/Honor](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d13_law_honor_robbery_v0_1.md), **internal RESEARCHED — REVIEW PENDING**, not independent official proof, checked 2026-10-17; controls the law/Honor boundary.
- **E18** [Wave 2 D15 Compendium](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d15_compendium_trackers_v0_1.md), **internal RESEARCHED — REVIEW PENDING**, checked 2026-10-17; controls gang discovery vs Total Completion semantics.
- **E19** [Wave 3 D24 Replay/Saves](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d24_replay_saves_medals_v0_1.md), **internal RESEARCHED — REVIEW PENDING**, checked 2026-10-17; replay does not reauthor original world/save/Gold.
- **E20** [Wave 4 D21 separate specialist branch](https://github.com/L33TW0RLD/rdr2-hub/tree/agent/atlas-world-events-031), checked **2026-10-17**; dossier **not yet present** on its branch at check, so no D21 event result imported; future reviewer must reconcile.
- **E21** [PowerPyx — Full Compendium](https://www.powerpyx.com/red-dead-redemption-2-full-compendium/), **2018-11-21**, independent index; lists six official Gangs and distinguishes their presence from catalog-full completion.
- **E22** [RDR2 Mod Nexus — Ambush and Hideout configuration](https://www.nexusmods.com/reddeadredemption2/articles/547), **2024–2025**, **NON-VANILLA MOD**; cited **ONLY AS EXCLUSION**: user-configurable respawn cooldowns absolutely cannot be used as evidence for unmodified Story Mode timing.

### Claim ledger

| Claim | Bounded proposition (no personal status asserted) | Supporting sources | Status / confidence |
|---|---|---|---|
| **C01** | Official 100% includes **six hideouts**, **one Bushwhacked**, **25 Chance Encounters** as separate Missions & Events criteria | E01, E03, E06, E11 | **CORROBORATED / HIGH** |
| **C02** | Six baseline canonical hideouts: Six Point, Shady Belle, Beaver Hollow, Hanging Dog, Thieves' Landing, Fort Mercer; four story-connected, two New Austin later | E01, E02, E05 | **CORROBORATED / HIGH** |
| **C03** | Small gangfire camps are distinct from large fixed hideouts; present at candidate sites with stochastic/conditional activation | E04, E10 | **RESEARCHED / HIGH category, MEDIUM precise per-site triggers** |
| **C04** | One **recognized** ambush **survived**, including escape, is sufficient for Bushwhacked; no total kill requirement | E03, E05, E06 | **CORROBORATED / HIGH** |
| **C05** | Official gang Compendium requires discovery of **six named factions**, not full sub-counter page for 100% | E04, E10, E18, E21 | **CORROBORATED / HIGH** |
| **C06** | Four story-linked hideouts at normal Ch2/3/5/6 or Epilogue timing; Hanging Dog Ch6 vs Epilogue nuance | E01, E02, E05 | **CORROBORATED broad / HIGH**; **specific optional Ch6 dependency MEDIUM** |
| **C07** | Gang campfire site occupancy may randomly vary; identical revisits need not add distinct `Camps Found` count | E04; PowerPyx comment thread E02 ancillary | **RESEARCHED / MEDIUM**, individual unique-site dedup UNKNOWN |
| **C08** | Gang ambushes use region-specific candidate road spots, sometimes conditional on earlier gangs/story; chance timing not guaranteed | E04, E05 | **RESEARCHED / MEDIUM–HIGH** |
| **C09** | Hanging Dog occupier shifts O'Driscolls → Laramies; Skinner Brothers have no standard fixed named hideout | E04, E09, E10 | **CORROBORATED / HIGH** |
| **C10** | Scripted story battles may overlap canonical hideout, but mission Gold is a distinct `Progress → Story` predicate | E02, E05, E19 | **CORROBORATED / HIGH** |
| **C11** | Hostile enemies sometimes reoccupy a cleared hideout after playtime/story progression; repeat combat does not create new unique 6/6 entries | E04; E15 (anecdotal) | **RESEARCHED broad / MEDIUM**, persistence variants disputed |
| **C12** | Exact universal repopulation time (`4–5 days`, `one week`, restart/reset) is not verified; faction/story exceptions plausible | E04, E09, E15 vs E16 | **DISPUTED / LOW** numerical timers; do not publish |
| **C13** | Special/Ultimate edition includes a **bonus Del Lobo hideout**, Twin Rocks per secondary source; not one of required original six | E07 (official narrow), E02 (name) | **CONFIRMED official existence / HIGH**, location corroborated guide **HIGH** |
| **C14** | Title Update 1.15 provided **two more Story Mode gang hideouts** on consoles, with later Xbox availability | E08 (official) | **CONFIRMED PRIMARY / HIGH** two-addition statement |
| **C15** | Gaptooth Breach/Solomon's Folly correspond to additional Del Lobo sites on patched builds, not independent required 7th/8th criterion | E09, E14 and E08 broad | **RESEARCHED / MEDIUM** name matching; explicit count is STILL 6 from independent checklists |
| **C16** | Online hideout pools, third-party mods, unscripted lawmen/Night Folk do **not** define Story Mode six-hideout tally | E10, E09, E22; official E08 Online separate | **CORROBORATED / HIGH** scope split |
| **C17** | Honor/witness/Wanted consequences depend on action and context, not simply the number of hostile members killed; avoid harming bystanders | E17 read-only, contextual Rockstar evidence cited there | **RESEARCHED / MEDIUM–HIGH** broad; exact honor delta UNKNOWN |
| **C18** | Ambushes may threaten horse and rider, so withdrawal is a legitimate safety-first response | E04, E05, D01 Wave 1 read-only | **RESEARCHED / HIGH** practical effect, no guaranteed escape |
| **C19** | Mission replay/medals do not automatically reauthor live original-world hideout outcomes or unique loot | E19 (read-only), E05 (mission distinctions) | **RESEARCHED / HIGH** caution; exact Compendium replay flags UNKNOWN |
| **C20** | Some gang-associated scenes may be finite/random/conditional vs repeatable; ownership of mutual exclusions belongs D21 | E04, D21 issue/ref E20 | **RESEARCHED / MEDIUM** until D21 published |
| **C21** | A completed gang Compendium detailed card has different camp/kill/ambush/hideout subfields from official 6/6 discovery criterion | E04, E21 | **CORROBORATED / HIGH** |
| **C22** | A mod configuration file's spawn cooldown is **not** an authoritative vanilla respawn rule | E22 | **CONFIRMED logical scope / HIGH** |

## 9. Contradictions, uncertain event recognition and reproducible future tests

| Conflict / claim | What sources actually say | Safe fallback, no invented player test |
|---|---|---|
| **“There are only 6 Gang Hideout locations” vs bonus and updates** | 2018 PowerPyx documents six + Special/Ultimate Twin Rocks; Rockstar later publishes two added Story hideouts; wiki lists Gaptooth and Solomon. | **Six official base-clearances remain the documented 100% row.** Additional sites may exist on particular patched/paid editions; don't require them all or pretend only six sites can ever appear. [C02,C13–C15] |
| **Six Compendium gangs vs six hideouts means one hideout each?** | GameFAQs detailed gang entries show 2 O'Driscoll sites, 2 Del Lobo sites, Laramies using same place in later story, Skinners none. | **Separate entity types**; one faction card discovered does not certify a hideout, and one location may change faction. [C05,C09] |
| **“Cleared” by entering, killing a guard, leaving, or finding name?** | Specialty guides say defeat/capture hideout and verify official check; mere discovery may mark Compendium hideout *found*. | **UNVERIFIED until 6-hideout progress row changes**; visit, Compendium hideout-found and official cleared are distinct. [C02,C03,C21] |
| **“All gang camps required for total 100%”?** | GameFAQs says full details such as camp, ambush, unique encounter, bounties and kills are OPTIONAL ultra-completion; only faction discovered for Compendium. | **False for official 100%**. Camp clearing may serve player's optional exhaustive goal only. [C03,C05] |
| **One ambush survival vs fully defeat gang / other encounters** | GameFAQs says flee is okay; general guides list separate single Bushwhacked row. | Survival and verified row count; avoid imposing a kill quota. Do not count an ordinary scripted mission ambush without HUD proof. [C01,C04] |
| **25 chance encounters vs single gang ambush** | Checklists show both as separate rows; possible overlap of some events not proven for every case. | **Do not double-award**. Inspect each separate row, defer finite-world encounter taxonomy to D21. [C01,C20] |
| **Hideouts respawn vs stay empty forever** | GameFAQs says enemies return; some fan users confirm repeat fights; another forum claims no respawn and other reports depend on chapter. | **Conditional rather than absolute**. No guaranteed clock/spawn/faction loot. A repopulated site is not a new seventh canonical clearance. [C11,C12] |
| **Camp site smoke guaranteed and repeat equals new unique camp** | GameFAQs initial sentence says campfire visible when spawned, elsewhere incorrectly says Lemoyne “guaranteed every time” but also calls camp spawns random; comments report revisits don't advance Compendium. | Site is **possible location**, camp occupancy/context random. Confirm actual faction's `Camps Found` change; no spawn or increment guarantee. [C07] |
| **Hanging Dog Ch6 mandatory vs automatic Epilogue** | PowerPyx calls Ch6 automatic, GameFAQs differentiates optional Ch6 activity and Epilogue I mandatory visit. | **Mark Ch6 as possible, Epilogue I as supported normal fallback**. Do not order a Chapter 6 raid to protect official 100%. [C06,C09] |
| **Special/Ultimate Twin Rocks vs Rockstar named special hideout** | Rockstar confirms edition-exclusive Del Lobos hideout but omits name in its support answer; PowerPyx names Twin Rocks. | State name/source separation, keep **HIGH** official bonus, **HIGH** secondary location, no universal standard availability. [C13] |
| **Patch additions vs online random hideouts** | Rockstar 1.15 page intermixes separately labeled `Story Mode` and `Red Dead Online` lines. | Cite only **Story Mode** two-addition lines; no Online hideout map or mod respawn data imported. [C14,C16,C22] |
| **Ambush after a prior gang fight guaranteed next ride?** | GameFAQs says some triggers follow story/gang fighting but candidate sites/occurrence random. | No deterministic spawn route, countdown or attack promise; encounter classification verified only when it actually occurs. [C08] |
| **Gang Compendium 100% subentries can all be completed any time?** | Some factions/hideout/camp/bounty events are story-conditional; later occupant changes and late gang availability. | `OPTIONAL_EXHAUSTIVE` requires separate item/region/edition missability review; not an official 100% gate. [C05,C09,C20] |

**Future player-authorized test plan (NOT performed):** (1) capture hideout row before/after an actual named clearance, including site revisits; (2) capture `Bushwhacked` row before/after fleeing recognized roadside ambush (no induced violence); (3) check a previously unrecognized faction's `Gangs` card on initial encounter and compare subactions; (4) compare small campfire arrival and `Camps Found` counter across two **different** sites; (5) check updated Story Mode builds for Twin Rocks/Gaptooth/Solomon and whether the required progress row remains six; (6) observe if/when specific hideouts reoccupy without publishing a speculative universal timer. No current player values, locations, loot or medals asserted.

## 10. Read-only GameGuide, Free Roam and Living Adventure Companion handoff

**GameGuide:** Only the original [`L33TW0RLD/rdr2/campaign/`](https://github.com/L33TW0RLD/rdr2/tree/main/campaign) owns actual progress. For each candidate report, request **the exact observed site/event + chapter and active mission** and relevant `Total Completion` **Gang Hideouts/Bushwhacked** readback and `Compendium → Gangs` when deciding credit. A player note “I fought near Shady Belle” is not enough to set `hideout_cleared=true`. Story mission/medal details are D24/GameGuide-owned. No saved game, Honor delta or 100% claim from this dossier. **Never transform a Compendium camp-detail tally into official six-hideout completed state.**

**Free Roam:** Do not fill Chapter 2 with a compulsory gang eradication route. The player prefers **High Honor, exploration and slow immersion**. A safe observation of an unfamiliar campfire, a quiet alternate trail away from a blockade, or a brief check of `Compendium → Gangs` may be enough. An actually active chapter-sensitive Story mission or companion invitation takes priority; defer the source-specific window to D08 and scripted operation to Mission Control. When optional violence conflicts with immersion, offer **skip / observe / leave / defend only if attacked**. Avoid inventing nearby gang locations or forcing an ambush spawn for 1/1. [C03,C04,C17–C18]

**Companion/dashboard:** A small contextual field annotation can show:
- `EVENT_CLASS = CANONICAL_HIDEOUT | AMBIENT_GANG_CAMP | AMBUSH | SCRIPTED_BATTLE | OTHER | UNKNOWN`
- `FACTION = recognized name | UNKNOWN`
- `EVIDENCE = visually_observed | compendium_entry_seen | total_completion_row_verified | UNKNOWN`
- `OUTCOME = NOT_REPORTED | OBSERVED | SURVIVED | CLEARED_VERIFIED` — these are **conceptual options**, not factual player state or an authorized external data schema.

Do **not** use the UI to claim all camps/ambushes counted merely because a screen/card was clicked. Render distinct goal panels: **6 required hideouts**, **1 Bushwhacked**, **6 gang factions**, optional **detailed gang encyclopedia**. A missing player screenshot means all current counts **UNKNOWN**.

**Cross-domain read-only:** D13 Law/Honor controls legality; D15 Compendium/Total Completion semantics; D21 finite events and chance-encounter classification (not published at initial check); D24 replay/medals; D01 horse loss and D08 chapter urgency. D25 owns **gang-context classification**, not those other mechanics. All reference documents carry **RESEARCHED — REVIEW PENDING**, no implicit adoption.

## 11. Remaining bounded questions and explicit owner/coordinator review

1. **Verify baseline core-six names, Story mission overlap and six-hideout menu rule** on a standard current Story Mode build; check patched/edition extras *without* silently changing the `6` official criterion.
2. Reconcile **Hanging Dog Ranch optional Chapter 6 vs automatic Epilogue I**, and Faction `Laramie` occupancy change; prefer GameFAQs' precise stage distinction over blanket “mandatory Ch6.”
3. Cross-review GameFAQs' **ambush survives if fleeing** against D21 when its separate dossier is delivered; no assumption that an arbitrary scripted shootout or one of 25 chance events ticks Bushwhacked.
4. Independently check **gang camp unique-sites versus repeated counters** and **hideout respawn/occupation behavior** by an actual consenting player/game build. Keep numeric reset times and exact spawn probabilities **UNKNOWN** pending reproducible observations.
5. Confirm **one discovered faction ≠ a full gang Compendium entry**, no requirement to murder everyone at every campsite. Test if Gang Compendium `Hideout Found` and `Total Completion → Hideouts Cleared` update in different stages.
6. Check source ledger C01–C22, all Story-vs-Online exclusions, T0/T1 versus future T2+, practical High Honor choices, and exact lease/branch readbacks.
7. **Review gate only:** coordinator may integrate research and update shared indexes; owner ratifies gameplay instructions separately. No unilateral adoption, merge, new issue, main modification or inferred user progress from this research.

**Acceptance/stop:** complete exactly **three leased** D25/checkpoint/handoff files, fetch all three from `agent/atlas-hideouts-033`, compare to current `main` and verify precise diff, report terminal SHA, finish `DELIVERED_REVIEW_PENDING`. Source evidence remains independently reviewable, not a declaration that the player has cleared any hideout.
