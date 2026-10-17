# D11 — Travel, Wayfinding & Temporary Wilderness Camps (Story Mode)

**Record ID:** ATLAS.D11 · **Version:** v0.1 · **Kind:** mechanics dossier  
**Research status:** **RESEARCHED — REVIEW PENDING / NOT ADOPTED**  
**Evidence checked:** **2026-10-17** (the checked date is *not* a game patch date)  
**Task:** \`atlas-travel-014\`, [Issue #17](https://github.com/L33TW0RLD/rdr2-hub/issues/17), branch \`agent/atlas-travel-014\`  
**Applicability:** Red Dead Redemption 2 **single-player Story Mode** on updated PC/PS4/Xbox One and later compatible installations, with patch, platform, edition and mission exceptions called out. **Red Dead Online travel systems are excluded.**  
**Default spoiler budget:** **T0/T1**, useful at Horseshoe Overlook / Chapter 2. Future-area and future-character specifics are not discussed by default.  
**Primary provisional Atlas leaves:** \`S07.M01–M05\`; adjacent read-only \`S06.M02/M04/M05\`, \`S09.M01/M03\`, \`S02.M02/M03\`, \`S12.M04\`, \`S17.M02\`, \`S20.M01–M05\`, \`S30.M05\`. These identifiers/edge types come from the **unratified** Atlas schema.  
**Campaign facts:** current player's chapter, map discoveries, available train/coach stops, horse, wanted status, money, lodging purchases, camp activity and save status are **UNKNOWN** here. Only [original GameGuide campaign records](https://github.com/L33TW0RLD/rdr2/tree/main/campaign) plus new player evidence may resolve them.

**Scope owner:** D11 establishes movement and travel availability only. Wave 1 **D01 horse**, **D02 Ledger**, **D04 hunting cargo** and **D06 inventory** are read-only, **RESEARCHED — REVIEW PENDING**, not adopted. D13 separately owns criminal consequences of coach/train actions, bounties and robberies; D10 clothing/temperature, D12 cooking recipes and D24 replay/save accounting are outside this dossier. The original RDR2 missions are not copied or altered.

## 1. Definitions, controls and observed feedback — a clear taxonomy

“Travel” is several distinct mechanisms. A route marker, a purchased ticket, a camp map and riding in cinematic camera do **not** establish the same authority or behavior. Never label a route “unlocked” because a general guide explains it.

| Mode / provisional leaf | Player interaction in Story Mode | What the player should actually see | Cost / important bound | Claim |
|---|---|---|---|---|
| **Map / waypoint** — S07.M01 | Pause → Map; inspect roads, rail lines, settlements, mission markers, selected waypoint / planned path | Map label, road path and player marker; specific destination may be undiscovered | Planning only: drawing a route does **not** unlock paid stations or count travel as completed | T01 |
| **Walk, run, lead horse** — S07.M02 | Use normal movement and terrain choices; lead/dismount when terrain threatens | Movement speed, stamina feedback and terrain; proximity interactions | Flexible, local, naturally exposes encounters; cannot guarantee cliff or water safety | T02 |
| **Mounted ride** — S07.M02 | Travel using the horse's available pace on roads or cross-country | Horse cores/stamina, direction, terrain, possible danger/encounter | Horse condition, bonding, traffic, theft/law and horse injury belong to D01/D13 | T02, T03 |
| **Cinematic waypoint ride** — S07.M01/M02 | Set a waypoint; start mounted on a road in the route's direction; hold Cinematic Camera (Touchpad/View controller in older published guides; keyboard control is remappable) | Cinematic bars, horse follows road toward waypoint while movement inputs do not intervene | **NOT fast travel**, not invulnerable, can collide or be attacked; remain attentive | T04 |
| **Train ticket** — S07.M03 | At a **railway station** with a relevant ticket clerk / post-office service, inspect destination list and buy a ticket | Actual station menu, selected rail destination, fare, travel transition | Paid, rail-connected destination set; not any map waypoint, may involve connection | T05 |
| **Stagecoach ticket** — S07.M03 | Approach an operational stagecoach stand; choose supported town/stop | Stand icon and actual fare/destination menu | Paid, often more towns than railway; bounty/wanted constraints contextual and disputed | T06 |
| **Gang-camp fast-travel map** — S07.M03 | At Arthur's lodging, interact with the map *only if* purchased through Ledger | Fast-travel destination list of normally discovered places | Normal Chapter 2 U02 → Dutch lodging → Arthur lodging U04; no generic free teleport from game start | T07, T08 |
| **Player-founded wilderness camp** — S07.M05 | Outside disallowed activity/town/road zones: open item wheel and choose **Crafting Camp / Set Up Camp**, not gang camp | Scene relocates to a valid temporary campsite; menu for sleep, cook, craft/rest | No global move of gang camp; site placement may shift from chosen coordinates | T09, T10 |
| **Wilderness-camp fast travel** — S07.M03/M05 | On updated Story Mode after same lodging/fast-travel unlock, enter the field camp fast-travel option | Fast-travel menu lists unlocked destinations | Added in **Rockstar Title Update 1.15 (December 2019)**; original launch guides omit it | T11 |
| **Wagon/cart driving** — S07.M04 | Only where a wagon/cart is genuinely enterable/drivable, handle reins using platform prompts | Vehicle steering, horse team, collision and road feedback | Ordinary drivable vehicle is NOT a stagecoach fast-travel service, and taking an owned vehicle may create legal risk (D13) | T12 |
| **Rowboat/canoe/other accessible craft** — S07.M04 | Board an available **controllable** craft where the game offers controls; row/steer to shoreline | Steering or rowing prompt, real-world movement across water | Availability and controllability vary; boats can despawn, and not all visible vessels can be operated | T13 |

**PC controls:** default keyboard mappings and alternate/controller mappings may differ; use **Settings → Controls / Key Mapping** rather than asserting a button applies to every installation. A platform-specific example (PS4 Touchpad) is a documented variant, not a universal UI contract. [T04,T09]

**Meaning of “fast”:** train/coach and map/field-camp transports jump to a supported destination via a transition; Cinematic Camera follows a route in simulated real time. It does not pause dangers, nor add a background guarantee that a player can leave the keyboard unattended. [T04,T05,T07]

## 2. Normal unlock gates, dependencies and conditional early Chapter 2 availability

| Gate | Known general Story Mode conditions | What NOT to infer | In-game verification |
|---|---|---|---|
| **U00 / free roam** | Arrive at Horseshoe Overlook after Chapter 1 to gain general free roaming | This does NOT imply U02 Ledger, U04 map, ticket clerk availability in every town, or any route completed | Check chapter and ability to open Map / item wheel |
| **Map & waypoint** | Standard open-world interface after free-roam access; controls mode/context dependent | Setting a waypoint does **not** mark the town visited or enable a later travel destination | Observe Map route and eligible destination list separately |
| **Train / stagecoach** | No **camp lodging purchase** required for ticket travel; use appropriate active station/stand, destination and money; wanted/lockdown/mission states may bar some services | A service at one settlement does not prove every settlement connected. No source-verified universal ticket availability during active combat | Inspect ticket/coach prompt, fare, destination, crime state [T05,T06,T15] |
| **U02 — Ledger** | Chapter 2 Strauss opening debt: recover **one** initial qualifying debt and **deposit** it to camp box; normal Ledger appears after return/deposit | Do not demand the entire Strauss debt chain or infer Ledger from Chapter number alone | Actual Ledger by contribution box, player-confirmed deposit [T07,T08] |
| **U04 — camp fast-travel map** | U02 Ledger + **First Things First** Dutch lodging ($220 standard/base) → **Next in Line** Arthur lodging ($325 standard/base); ~$545 baseline **subject to edition/discount** | Dutch lodging alone, Ledger alone, Leather Working Tools or just arriving in Chapter 2 do **not** confer fast travel; purchase not assumed | Ledger shows both completed; map is present near Arthur lodging and opens destination list [T07,T08] |
| **Field camp: sleep/craft** | Available in open wilderness when wheel option enabled and game accepts context/location; no premium Story Mode **Online pamphlet** prerequisite | A failed camp prompt near a town or danger does not prove the player lacks a permanent item, nor that the personal camp can be placed at exact clicked coordinate | Item wheel selection and successful camp setup, or exact error text [T09,T10] |
| **Field camp: fast travel** | Appropriate U04 lodging/map actually unlocked **and** updated Story Mode with Title Update 1.15 or later; select at field camp | **Do not claim it exists in unpatched 2018 launch builds**; do not require Red Dead Online Naturalist/Harriet/Fence pamphlet | With actual camp built and U04 proven, inspect \`Fast Travel\` prompt [T11] |
| **Boats/wagons** | Encounter a usable boat/wagon in current area and relevant contextual action | Boat on map ≠ accessible boat, large decorative steamship ≠ ownable/drivable craft; wagon ≠ generic public passenger service | Board/steer prompt; active quest restrictions; inspect vehicle rather than presume purchase [T12,T13] |

**Base-price caveat:** The two lodging amounts $220 and $325 are corroborated standard references, not authoritative for a particular edition's final Ledger quote. Wave 1 D02 documents some 20%-discount displays and wallet/camp-money source uncertainties; check visible price and payment confirmation, never represent a price as already spent. [T08, D02 read-only]

**Map destination gate:** Updated [RDR2.org Story Mode guide](https://www.rdr2.org/guides/red-dead-redemption-2-unlock-fast-travel-guide/) specifies *discovered* destinations rather than freely chosen waypoint teleport. Older 2018 guides cannot be used to rule out field-camp travel, because of 1.15. Do not promise a specific settlement as selectable until its actual entry is observed. [T07,T11]

## 3. Cost, weather/time, animal cargo, passengers and recoverability

### 3A — Mode comparison and compact decision guide

| What matters most? | Good default (conditional) | Why / price model | Major caution |
|---|---|---|---|
| **Short, nearby errand or organic discovery** | Walk or controlled horse ride | Free; maximizes side encounters and map familiarity | Inspect terrain, horse condition, witness/mission state |
| **Long, scenic road trip without manual steering every metre** | Ride with optional Cinematic Camera | No ticket/upgrade; route follows road waypoint | Still live gameplay: ambush/animal/traffic and misrouting remain possible |
| **Long town-to-town trip, camp map not purchased** | Compare available **train ticket** and **stagecoach** | Pay price on active kiosk; rail vs road network differ | Train may not connect all stops; coach access affected by bounties |
| **Discovered distant location, U04 confirmed** | Gang-camp map or updated wilderness camp map | Camp-map travel generally no per-use ticket charge | One-way outbound service; not arbitrary coordinates; return options depend on actual updated menu |
| **Need to return from remote forest after crafting/sleep** | Field camp **if** valid campsite and U04 actually active; otherwise ride to nearest station/road | Allows rest/craft and, on updated build, outbound fast travel | Site can be refused/auto-relocated; do not strand the player by assuming map is present |
| **Fragile horse or valuable perfect carcass/pelt** | **Direct controlled ride to recipient**, especially if short | Allows observation and reduces uncertainty of scripted/fast-travel cargo handling | No guarantee from D01/D04 that every loaded object persists; deliver before experimenting |
| **Water crossing / island curiosity** | Prefer an accessible, verified rowboat or a clearly safe land route | Controlled crossing if craft actually usable | Horse/player stamina, deep currents, loss of boat, drowning, irreversible cargo loss |
| **Mission-required wagon/passenger transport** | Follow current Mission Control Field Guide, not free-roam ticket assumptions | Mission prompt defines vehicle/cargo/time/Gold requirements | No D11 promise that skip or teleport maintains passenger or timed-objective validity |

**Fares:** PowerPyx's launch-era guide gives illustrative train/stagecoach prices roughly **$5–$15** by distance. These are reference ranges, **not a price quote, upper bound, or an instruction to buy**. Exact cost/discount/route must be taken from live service UI. [T05,T06]

### 3B — Passage of time and weather (scope-limited)

- **Sleep at valid temporary camp** advances in-game time and can restore condition. Rest/craft does not imply a quest stage, collectible or save happened; sleep length/time selection may be UI-specific. **Don't guarantee weather clears after sleep**, or promise a precise spawn/window timer. [T09,T16]
- Horse/walking travel exposes Arthur and mount to world **temperature, precipitation, stamina and terrain**. Clothing exposure/temperature mechanics belong to future D10; nutritional recovery to D09/D12. Suggest checking the outfit/temperature indicator before long cold/hot excursions, not inventing a numeric threshold or declaring a coat owned. [T03]
- A paid travel transition and field-camp sleep can affect apparent game time. **Exact simulated-hours delta, day/night availability of clerks/coaches and the handling of active time-sensitive missions are UNKNOWN.** A mission Gold timer must follow its own Field Guide, not a general “teleport saves time” promise.
- **Do not treat sunset/night as a universal lockdown.** Inspect actual ticket office/stand and current event state; a location can be blocked for story, threat, wanted status or menu context. [T05,T06]

### 3C — Passengers, horse and precious carried cargo

- **Passenger** means a coach/train-ticket ride or a contextual vehicle/NPC interaction. A coach ticket for Arthur is not a universal “carry captive bounty, rescued NPC, or wagon mission passengers” transfer mechanic. Such content is mission/job-specific and D13/D19/Mission Control owned. [T05,T06,T12]
- **Horse presence:** updated RDR2.org says a sufficiently nearby horse accompanies fast travel; this is a guide-level normal expectation, **not a proof** a currently distant, stolen, temporary or stabled horse will teleport with cargo. Verify horse icon, callability, and proximity before purchasing/choosing travel. D01 remains read-only authority on horse identity and recovery. [T14]
- **Pelts/carcasses:** Story Mode community answers report ordinary skins commonly surviving rail/coach/fast travel, while others report missing/stuck pelts or carcasses and cargo glitches. This is a **DISPUTED, type/patch/state-dependent persistence issue**, not a reason to claim guaranteed loss or safety. D01/D04's preserved safe default: for valuable ordinary large pelts, intact request carcasses and rare live cargo, ride directly to the recipient when feasible; check **Horse Cargo and Pearson/Trapper/Butcher screen** after travel, *before* representing the material as delivered. [T17,T18]
- **Exception is narrow:** Rockstar Support documents lost **legendary pelts/carcasses** eventually available to Trapper crafting; it does **not** guarantee sale revenue, ordinary perfect pelts, NPC bodies, mission cargo or every rare object. See D04/D06 read-only. [T19]
- **Horse injury or death** is D01's serious recovery issue. Cliff, moving train, river/current and obstructed bridges are reasons to slow, dismount or choose established road/boat rather than gambling with a permanent mount. **No guaranteed rescue, teleport or reload** is declared. [T02,T03,T13]

## 4. Gang camp versus field camp: deliberate player interaction

| Attribute | Gang camp (Horseshoe Overlook, Chapter 2) | Temporary wilderness camp |
|---|---|---|
| Placement | Established by story, **not repositionable at will** | Wheel action, placed by game near valid outdoor location |
| Purpose | Companion routines, Pearson, donation/available Ledger, gang facilities | Sleep, cook, craft, tent and short trip rest |
| Fast travel starting point | Map by/behind Arthur's wagon **after U04** | Separate \`Fast Travel\` prompt **after U04 plus patched Story Mode** |
| Destination | Eligible unlocked/discovered locations in actual map | Eligible unlocked locations; not arbitrary waypoint |
| Resource implications | Ledger purchases/donations matter, no generic field-camp stock transfer | Consumes appropriate ingredients when cooking/crafting; creates no separate valuables or pelt warehouse |
| Placement restriction | No player choice to shift location | Not in town/combat/incompatible nearby road/hideout context; safe auto-placement may move campsite |
| Time behavior | Camp bed and world routines | Sleep shifts time; weather resolution not guaranteed |
| Evidence/ownership | Actual Ledger and map purchased status must be observed | Camp successfully deployed / prompt visible must be observed |

**How to try safely (T0):**
1. Check there is no active mission or nearby immediate threat, and that the selected setting is an open wilderness location rather than near a settlement.
2. Open **Item Wheel** (platform button from Settings) and select **Crafting Camp / Set Up Camp**; choose the prompt offered in your installed version. [T09,T10]
3. Once placed, inspect **Sleep / Cook / Craft**. Food and item recipes have separate ingredient/availability gates (D12), and sleeping changes in-world time; avoid when a current time-sensitive optional opportunity is confirmed.
4. If U04 is **actually purchased** and version includes the 1.15 change, inspect the **Fast Travel** action at the field camp. If absent, check patch/version, upgraded lodging, whether already in a valid field camp and exact on-screen help. **Do not immediately infer a corrupted save**.
5. After any transition, **check the horse marker and Horse Cargo** if the excursion involved valuable material.

### Critical Story Mode versus Online distinction

Rockstar's [Title Update 1.15](https://support.rockstargames.com/articles/28AmlyPGLVKsJ8OpdN8myn/red-dead-redemption-2-title-update-1-15-notes-ps4-xbox-one-pc-stadia) explicitly added a Story Mode camp fast-travel ability after purchase. **Do not import** Red Dead Online “Naturalist Rank 5 wilderness camp,” paid Fence **Wilderness Travel Skill pamphlet**, or post-based Online fast travel to Story Mode. Sources about Cripps, camps with flags, trader wagons, Online role rank or lobby/session transfer are not evidence for this dossier. [T11,T20]

**Negative-source trap:** Rockstar's “Fast-travel in Single-player Red Dead Redemption” support article (not RDR2) describes choosing a custom map waypoint from a camp. It applies to the **first Red Dead Redemption**, and must not be used to claim RDR2 camp maps teleport to waypoint pins. [T21]

## 5. Vehicles, navigation and physical risk boundaries (S07.M01/M02/M04)

### Roads, rails and map markers
- Compare waypoint path with **actual topography**. A route may cross a river, railroad track or unsafe steep ground even if a straight-line map distance looks short. Choose roads or trails for predictable early Chapter 2 riding and reassess blocked bridges, rough water and cliffs. [T02,T03]
- Cinematic travel is a convenient **autopilot-like road following**, not the same as ticket/map fast travel and not “safe unattended playback.” Predator and enemy interruptions remain active; collisions and roadside encounters can occur. [T04]
- Stagecoach stand and train-station icons signal potential services, not guaranteed open UI, universal reachable station list or immunity from state bounties. [T05,T06,T15]

### Water, boats and lost access
- Accessible **rowboats/canoes** are locally useful, but their availability, reboarding and respawn are NOT guaranteed. Some larger boat types are scenery/non-drivable. A boat can disappear when left unattended; avoid a one-way water crossing without inspecting the return route. [T13]
- **Swimming costs stamina and carries a drowning risk**; mounted swimming uses horse stamina with its own limits. Do not advise attempting long river/lake crossings solely because map water looks narrow; fall-back is shoreline, bridge, verified boat or safer ford. [T22]
- No fixed promise that a boat remains where left, that a horse loads aboard, that a live passenger follows, or that cargo will survive a water transition. Those are item/vehicle/mission-specific **UNKNOWN** mechanics here. [T13,T17]

### Wagons, coaches, passenger interaction and legal ownership
- A controllable NPC vehicle may be driven where accessible, but this does **not** turn it into a paid travel service or into a personal persistent/stable-owned wagon. Mission-bound delivery cargo is separate. [T12,T13]
- Wagon collision/tipping, abandoned passengers and road obstructions can be consequential. Theft, witnesses, Honor, Wanted and robbery eligibility belong to D13. The safe Chapter 2 baseline is **use paid coach service if offered rather than steal one to travel quickly**.
- Do not give a carriage route for a Gold medal without opening the **complete canonical GameGuide Field Guide**; transportation “shortcuts” may break timer/mission triggers. [T23]

## 6. Typed relationships, completion tags and research maturity

Relationships are **provisional mappings**, not ratified engine rules or player state. \`REQUIRES\` below indicates independently source-corroborated *general* gating only, never \`unlocked_now\`.

| Source | Edge | Target | Type/status and authority |
|---|---|---|---|
| \`S07.M03\` | \`REQUIRES\` | \`U04\` | Gang-camp map/wilderness fast travel need lodging unlock; corroborated Rockstar and guides [T07,T08,T11] |
| \`U04\` | \`REQUIRES\` | \`U02\` | Ledger before lodging purchases; D02 read-only reviewed research, current player state UNKNOWN |
| \`S07.M03\` | \`INTERACTS_WITH\` | \`S09.M03\` | Camp purchased facilities enable mode; D02 owns prices and Ledger |
| \`S07.M02\` | \`INTERACTS_WITH\` | \`S06.M02/M05\` | Mounted traversal consumes horse endurance/exposes injury risk; D01 owns mount detail |
| \`S07.M03\` | \`INTERACTS_WITH\` | \`S06.M04\` | Fast travel and horseback loaded cargo may intersect; persistence **DISPUTED**, not hard dependency |
| \`S07.M05\` | \`ENABLES\` | \`S16.M01/M03\` | Field camp cook/craft affordances when recipes available; D12 owns recipe requirements |
| \`S07.M05\` | \`INTERACTS_WITH\` | \`S02.M02/M03\` | Sleep/time and weather exposure; D09/D10 own effects |
| \`S07.M04\` | \`INTERACTS_WITH\` | \`S05.M02/M03\` | Vehicle theft and witness/law context; future D13 owner, not sourced criminal route here |
| \`S07.M01\` | \`INTERACTS_WITH\` | \`S23.M01/M02\` | Exploration discoverability and waypoint planning; does not confer discovered/visited status |
| \`S07.M03\` | \`HAZARD_TO\` | \`S12.M04\` | Conditional physical pelt/carcass risks, not guaranteed loss; D04 read-only |
| \`S07.M03\` | \`INTERACTS_WITH\` | \`S30.M05\` | Optional time-sensitive activity/mission may supersede travel convenience; status unknown |

**Goal labels:**
- **CONVENIENCE / IMMERSION:** waypoint planning, controlled rides, public tickets, field camp and optional lodging fast travel.
- **OFFICIAL_100:** **no separate requirement to buy fast-travel map or fully upgrade camp** in the published Total Completion checklist. Other movement-dependent tasks (such as reaching a shack/point of interest, and using a vehicle for a separately defined robbery) are *separately counted criteria*, not this travel feature itself. [T24]
- **ALL_GOLD:** no default medal for riding or fast travel. Individual replay/mission objectives exist elsewhere (D24/Mission Control). Do not grant Gold or claim timer skip from a travel method.
- **ACHIEVEMENT:** a distinct trophy might count a delivery, timed ride or total completion, but this dossier **does not** assign arbitrary travel credit. Read exact in-game/trophy criteria where relevant.
- **OPTIONAL_EXHAUSTIVE:** experiencing every railway route, town waypoint, boat or scenic camp is a personal exploration objective, not an official 100% demand based on this dossier.

## 7. Three practical, T0/T1 Chapter 2 situations and common mistakes

### Scenario A — Horseshoe Overlook ↔ Valentine, ordinary errand
**Observed conditions needed:** Chapter 2 free roam; whether player has a nearby horse; waypoint and camp/town state.  
**Decision:** For a short ride to Valentine, choose an easy road route and inspect any discoveries; optional Cinematic Camera when safe if desired. **No need to purchase $545 of lodging solely for this errand.** If the player has confirmed wanted restrictions or fragile horse cargo, prefer hands-on control.  
**On-screen checks:** actual map path; horse stamina and rider threat; active mission/timer.  
**Don't assume:** stable/brush already unlocked, Ledger purchased, or fast travel map present. [T02,T04,T08]

### Scenario B — Want to make a small woodland campsite before hunting
**Observed conditions needed:** no active mission, in open wilderness, enough safety to stop; whether overnight sleeping would miss a specific observed optional camp opportunity.  
**Decision:** Select temporary Crafting Camp from the Item Wheel; if the game relocates the campsite nearby, this is normal. Cook/prepare only what the menu and ingredients permit. Sleep only if the new time is acceptable. **Use Fast Travel** only when U04 plus patched Story Mode is verified.  
**On-screen checks:** wheel option / refusal message; sleep/cook/craft and possibly Fast Travel menu; current horse cargo.  
**Don't assume:** an Online “Naturalist camp,” tent at a fixed GPS point, legendary map unlock, unlocked ingredient recipes or weather changes. [T09,T10,T11]

### Scenario C — Need to return with a prized perfect pelt or intact small carcass
**Observed conditions needed:** exact pelt/carcass on the horse; recipient and optional request type; road/distance to Pearson/Trapper/butcher; available paid service and player cash.  
**Decision:** **Controlled riding straight to the correct recipient** is the preservation-first option when practical. Train or field-camp fast travel may work normally, but reports of missing/stuck cargo mean no universal guarantee; for any transition check **both horse cargo and recipient's accepted materials** at arrival. If player chooses a ticket, compare actual fare/destination and coach wanted restrictions first.  
**On-screen checks:** item grade and physical form, horse marker, ticket/coach/menu availability, Pearson **Donate for Crafting** versus provisions.  
**Don't assume:** all cargo survives or is lost, a carcass remains perfect indefinitely, or an ordinary pelt gets Rockstar's unique legendary-loss recovery. D01/D04/D06 remain read-only [T14,T17,T18,T19].

### Three costly patterns to prevent
1. **“I have a waypoint, so the camp map takes me there.”** Wrong system: RDR2 Story Mode fast travel targets an eligible destination list, not an arbitrary player pin. [T07]
2. **“A 2018 guide says no wilderness fast travel exists, so my current game cannot have it.”** Historical/version error: Rockstar 1.15 changed Story Mode. [T11]
3. **“A stagecoach is free/available despite any bounty; pelts definitely survive.”** Prices and wanted restrictions are context/region dependent; cargo is genuinely disputed. Inspect live menu and verify item on arrival. [T06,T15,T17]

## 8. Dossier source register (independently accessed 2026-10-17)

**Evidence classes** in this dossier: **E1 = game publisher's exact patch/support statement**, **E3 = established independently published specialist guide**, **E4 = mixed-mode community wiki** (must isolate Story section), **E5 = dated player reports/forum corroboration and reproduction lead only**, **E6 = RDR2 Hub research in main, read-only/unratified**, **X = wrong-game/Online source retained to prevent import, never affirmative Story Mode evidence**. Source publication/update date is separated from **checked 2026-10-17**; Story Mode/platform noted. Sources cited per claim in §9.

| E-ID | Title, publisher and exact URL | Publication/update known | Relevance and limits |
|---|---|---|---|
| **E01** | [Rockstar Games Support — Red Dead Redemption 2 Title Update 1.15 Notes](https://support.rockstargames.com/articles/28AmlyPGLVKsJ8OpdN8myn/red-dead-redemption-2-title-update-1-15-notes-ps4-xbox-one-pc-stadia) | December 13, 2019 release, support last updated December 17, 2024 | **E1 / HIGH**; explicit updated Story Mode wilderness-camp fast travel **after camp upgrade** |
| **E02** | [PowerPyx — How to Unlock Fast Travel](https://www.powerpyx.com/red-dead-redemption-2-how-to-unlock-fast-travel/) | October 25, 2018 (pre-1.15) | **E3 / HIGH** Ledger → lodging + trains/coach; **historically incomplete** on field-camp fast travel; stagecoach global-bounty phrasing disputed |
| **E03** | [RDR2.org — How to Unlock Fast Travel & All Methods](https://www.rdr2.org/guides/red-dead-redemption-2-unlock-fast-travel-guide/) | October 29, 2018; **updated August 5, 2026** | **E3 / HIGH** current Story Mode gates, unlocked destinations, updated field camp; near-horse condition |
| **E04** | [PowerPyx — Automatic Horse Travel](https://www.powerpyx.com/red-dead-redemption-2-how-to-use-automatic-horse-travel-autopilot/) | October 25, 2018 | **E3 / HIGH** PS4/Xbox road waypoint cinematic setup and attack risk; PC mappings vary |
| **E05** | [RDR2.org — Horse Autopilot Guide](https://www.rdr2.org/guides/red-dead-redemption-2-horse-autopilot-guide/) | 2018-era guide | **E3 / HIGH** independent cinematic description; control keybind caution |
| **E06** | [GameWith — Crafting & Cooking in Camp](https://gamewith.net/red-dead-redemption2/article/show/1284) | October 4, 2019 | **E3 / HIGH** temporary camp action, sleep, craft and recipe context; specific ingredients outside D11 |
| **E07** | [SuperCheats — How to Set Up Camp](https://www.supercheats.com/red-dead-redemption-2/walkthrough/how-to-set-up-camp) | December 9, 2018 | **E3 / MEDIUM/HIGH** item-wheel and campsite automatic relocation, immediate-danger/town restrictions; direct article has access variability |
| **E08** | [Red Dead Wiki — Fast Travel](https://reddead.fandom.com/wiki/Fast_Travel) | community-edited; revision date unknown | **E4 / MEDIUM** RDR2 sections: train/stagecoach/town unlock, Cinematic hazards; source mixes RDR1/RDR2, isolate explicitly |
| **E09** | [Red Dead Wiki — Camps](https://reddead.fandom.com/wiki/Camps) | community-edited; revision date unknown | **E4 / MEDIUM** Story field camps vs separate Online section, placement and patch-based travel |
| **E10** | [RDR2.org — Bounty System](https://www.rdr2.org/wiki/bounty-system/) | older mechanics guide, date not reliably established | **E3 / MEDIUM** wanted/lockdown can interrupt shops and stagecoach; D13 owns exact legal thresholds |
| **E11** | [GameFAQs — Can You Fast Travel with Pelts?](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/77191156) | 2018 forum, Story Mode | **E5 / LOW-MEDIUM** reports both success and carcass loss; never promote one as universal |
| **E12** | [Reddit — Horse pelts and train/stagecoach travel](https://www.reddit.com/r/reddeadredemption/comments/1d90egq) | June 5–6, 2024 | **E5 / LOW-MEDIUM** mixed Story player experiences, transport bugs and ordinary cargo |
| **E13** | [Reddit — Missing perfect elk pelt after fast travel](https://www.reddit.com/r/RDR2/comments/1j7de0r) | March 9, 2025 | **E5 / LOW** cautionary anecdote only; not a universal loss mechanic |
| **E14** | [Red Dead Wiki — Transport](https://reddead.fandom.com/wiki/Transport) | community-edited; mixed titles | **E4 / MEDIUM** several Story Mode boat classes/controls and noncontrollable decorative craft; avoid catalog guarantee |
| **E15** | [PowerPyx — Total Completion Checklist](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) | October 25, 2018 | **E3 / HIGH** absence of mandatory fast-travel purchase; separate robbery/vehicle goals |
| **E16** | [GTA Base — Total Completion Checklist](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist) | publication date not precisely established | **E3 / HIGH** corroborates camp-upgrade nonrequirement |
| **E17** | [RDR2-Hub D01 horse lifecycle](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d01_horse_lifecycle_v0_1.md) and [D04 hunting transport](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d04_hunting_transport_v0_1.md) | merged 2026-10-17 | **E6 / REVIEW PENDING**, read-only horse and carcass preservation advice, **not game-fact confirmation alone** |
| **E18** | [RDR2-Hub D02 Ledger](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d02_camp_ledger_upgrades_v0_1.md) and [Wave 1 cross-review](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/reviews/2026-10-17_wave1_cross_dossier_review.md) | 2026-10-17 | **E6 / REVIEW PENDING**, base price/edition caveat and recipient boundaries; not adopted |
| **E19** | [Rockstar Support — Unable to Skin Legendary Animals or Losing Pelts](https://support.rockstargames.com/articles/480idh1zECJ0ojrheApV1U/unable-to-skin-legendary-animals-or-losing-their-pelts-in-red-dead-redemption-2) | updated May 1, 2024 | **E1 / HIGH** **only** documented legendary Trapper material exception, not ordinary cargo |
| **E20** | [Rockstar Support — Wilderness Camp in Red Dead Online](https://support.rockstargames.com/articles/5pWqkoni4i87wG8qP5oSrZ/red-dead-redemption-2-title-update-1-25-notes-ps4-xbox-one-pc-stadia) | March 2021 notes | **X / WRONG MODE**: mentions Online wilderness pamphlet; not applicable to Story Mode |
| **E21** | [Rockstar Support — Fast-travel in single-player Red Dead Redemption](https://support.rockstargames.com/articles/2gFdbg7E7XVaNnftKOOJpB/fast-travel-in-single-player-red-dead-redemption) | updated March 28, 2024 | **X / WRONG GAME (RDR1)**; waypoint travel rule must NEVER be imported into RDR2 |
| **E22** | [GameFAQs — Fast travel with pelts, carcass?](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/77161877) | 2018 Story Mode player accounts | **E5 / LOW-MEDIUM** successes, no loss guarantee |
| **E23** | [Reddit — Cinematic waypoint risks](https://www.reddit.com/r/reddeadredemption2/comments/13xyh71) | June 2, 2023 | **E5 / LOW** collisions/switchback anecdote, independent caution |

## 9. Claim-level assertion ledger (source URL is resolved in §8; checked 2026-10-17)

Each proposition is confined to **RDR2 Story Mode unless explicitly labeled wrong-mode/cross-genre**. \`CORROBORATED\` means at least two suitably independent relevant sources, not every nuance proved by user gameplay. E1 official applies only to exact statement. **No in-game observations occurred in this research task.**

| ID | Decision-relevant proposition | Sources | Epistemic status | Confidence / limits |
|---|---|---|---|---|
| **T01** | Map waypoint is route planning; RDR2 camp fast travel lists eligible visited/unlocked destinations, not arbitrary custom waypoint | E03 E02; E21 **negative** | CORROBORATED | HIGH for distinction |
| **T02** | Walking/mounted routes expose world terrain and encounters; not an instant teleport | E04 E05 E17 | CORROBORATED broad | HIGH |
| **T03** | Horse riding/terrain, water and traffic can threaten horse health and cargo | E17 E04 E23 | CORROBORATED broad; detail D01 | MEDIUM/HIGH |
| **T04** | Cinematic road waypoint ride follows a route but is unsafe unattended and not ticket fast travel | E04 E05 E23 | CORROBORATED | HIGH core / MEDIUM traffic edge |
| **T05** | Train tickets are paid at eligible railway/post-office stations, destinations/links limited | E02 E03 E08 | CORROBORATED | HIGH; actual fare/connection menu |
| **T06** | Stagecoach offers paid supported town links and normally restricted when relevant bounty/wanted | E02 E03 E10 | CORROBORATED broad / DISPUTED extent | HIGH for service, MEDIUM locality |
| **T07** | Camp fast-travel map follows Ledger → two lodging purchases; destination eligibility contingent | E02 E03 E18 | CORROBORATED | HIGH |
| **T08** | Normal base prices Dutch $220 + Arthur $325 ($545 total); edition/discount variants possible | E02 E03 E18 | CORROBORATED baseline / CONDITIONAL actual price | HIGH baseline, UNKNOWN this save |
| **T09** | Temporary Story Mode wilderness campsite enables sleep, cook/craft/rest where applicable | E06 E07 E09 | CORROBORATED | HIGH |
| **T10** | Camp placement rejected near towns/danger/context and may shift to nearby eligible position | E07 E09 | CORROBORATED broad; exact radius UNKNOWN | MEDIUM/HIGH |
| **T11** | Rockstar **1.15 (Dec 2019)** added fast travel from player wilderness camp **once camp upgrade purchased** | E01 E03 | CONFIRMED_IN_PUBLISHER_PATCH + independent | HIGH narrow statement |
| **T12** | Player-driven carts/wagons are traversable vehicles; paid coach is distinct from stolen/manned wagon | E14 E08 | CORROBORATED broad | MEDIUM, legal results D13 |
| **T13** | Some boats are controllable, other ships non-driveable; nearby rowboats may disappear and water transitions are risky | E14 + E09 | SINGLE_SOURCE for boat taxonomy | MEDIUM/LOW for respawn |
| **T14** | Nearby horse generally accompanies updated camp fast travel; cargo and temporary horse exceptions not assured | E03 E17 | SINGLE_SOURCE normal behavior | MEDIUM |
| **T15** | Wanted/bounty impacts stagecoach; train may be less affected, but local lockdown may still block services | E02 E10 E08 | DISPUTED blanket scope | MEDIUM for restriction; UNKNOWN exact threshold |
| **T16** | Camping/resting can advance time and restore condition; no fixed weather/mission-window guarantee | E06 E07 E09 | CORROBORATED for sleep; inferred caution | MEDIUM/HIGH |
| **T17** | Some Story Mode pelts survive train/coach/fast travel; some players experience disappearance/stuck cargo | E11 E12 E13 E22 | DISPUTED universal retention | LOW-MEDIUM; important safe default |
| **T18** | Loaded horse pelts/carcasses and recipient stock are not a general portable warehouse; verify material before/after trips | E17 E18 E11 | REVIEW_PENDING external dependency | MEDIUM as preservation process |
| **T19** | Rockstar lost-legendary-pelt/carcass Trapper exception is not general recovery for ordinary/quest items | E19 E17 | CONFIRMED_IN_PUBLISHER_PATCH/SUPPORT narrow | HIGH |
| **T20** | Online Naturalist/Fence wilderness camp pamphlet is NOT Story Mode's Arthur-ledger unlock | E01 E03 E20 **negative** | CORROBORATED game-mode distinction | HIGH |
| **T21** | RDR1 camp fast travel to a user waypoint is **wrong-game** evidence for RDR2 | E21 E03 **negative** | CONFIRMED source identity | HIGH |
| **T22** | Deep-water swimming risks stamina depletion/drowning; horse crossing and boat availability require actual route inspection | E14 E17; limited direct-source detail | SINGLE_SOURCE + safety inference | MEDIUM; no exact stamina rate |
| **T23** | General free-roam transport cannot override mission-specific route, character, timer or cargo rules | E18; original GameGuide authority | PROPOSED consumer control, not universal game mechanic | HIGH governance / UNKNOWN each mission |
| **T24** | Neither fast-travel lodging purchase nor fully maxing the camp is a distinct official Total Completion requirement | E15 E16 | CORROBORATED | HIGH, other completion row may reference travel action |

## 10. Contradiction / special-case / irreversible-risk ledger

| Conflict / competing sources | Evidentiary resolution | Safe fallback + bounded verification |
|---|---|---|
| **Camp map only (2018) versus field-camp fast travel (post-2019)** | E02 predates **Rockstar 1.15 E01**. Not an actual same-version contradiction; changed by update. | Updated Story Mode with U04 → check field camp Fast Travel; unpatched build use gang-camp map, train/coach or horse |
| **Every bounty anywhere forbids coach (PowerPyx) versus state-local bounty restriction (RDR2.org / Red Dead Wiki)** | E02 wording global; E10/E08 indicate state/region applicability. **DISPUTED exact restriction**, no universal hard gate. | Inspect current coach list and actual Wanted/bounty UI; no automatic legal-state deduction; D13 later owns |
| **Train allowed with bounty versus ticket office closed while wanted** | E02 says train works with bounty; local lockdown / active pursuit can close service context per E10. A *persistent bounty* != currently being pursued in that station. | Try legitimate clerk menu when not in combat; do not promise ticket sale in active Wanted or lockout |
| **Fast travel saves all cargo versus removes all pelts** | E11/E12/E22 reports successful transfer, E13 and other replies report missing/stuck or decayed cargo. **Neither universal claim justified.** | Prioritize direct hand-in for valuable ordinary item; screenshot Cargo and vendor receipt after any travel |
| **“Set camp at this exact map point” versus actual auto-relocation** | E07 records auto-placement to nearby safe site; E09 town/road exclusions; exact radius unexplored. | Read refusal reason; relocate gradually away from settlement/road/threat; no fake campsite placement coordinates |
| **Cinematic route is safe hands-off autopilot** | Guides E04/E05 confirm road-following; both note live predators/attack; players E23 report traffic collision. | Maintain attention, low/moderate pace on hazardous roads, interrupt at danger. Do not encourage unattended AFK |
| **Boats are persistent/owned vs borrowed local actors** | E14 boat catalog mixes controllable and non-controllable types, respawn unknown. | Verify one boat controls and return plan before crossing; do not treat a spotted steamer as a transport ticket |
| **Water always fordable vs swimming harmless** | D01 safety and transport reports conflict with guaranteed rescue; game route and stamina matter. | Use bridge/ford/verified boat; monitor horse/person stamina, protect cargo. No guaranteed recovery |
| **All camp-related advice sourced in RDR2 wiki vs Online/RDR1 blended material** | E20 is Online, E21 is **RDR1**; E08/E09 contain separated sections and need precise quote origin. | Explicitly filter to RDR2 Story Mode; never import Online pamphlets, Naturalist, trader wagons or RDR1 custom-pin travel |
| **Field camp always available while mission/wanted or at night** | E07 notes immediate danger/town restrictions; special story/mission state not exhaustively sourced. | Current on-screen wheel and exact error take priority. UNKNOWN does not mean bug |
| **Camp return by fast travel from every location** | Older guide E02 says original gang-camp map one-way; updated field camp often exposes broader destination list. | Inspect actual updated destination menu; do not claim a reverse trip or main-camp icon where absent |
| **Price/discount and payment fund** | E18 Wave 1 records displayed discounts and funding-source dispute | Actual Ledger quote and both balances first; D02 retains finance ownership, no hidden fee invented |

**Never declare a route safe under an active Gold timer or transport an unrecoverable unique/quest item through an untested cargo mechanic.** Such decisions require actual mission/recipient UI. A manual save is a separate player choice governed by game's save rules, not a replacement for evidence.

## 11. Read-only GameGuide / Free Roam / Companion handoff and next validation

### 11A — Consumer input contract
Ask for only what is decision-relevant:
- objective & location/region (if user or original campaign actually reported);
- destination eligibility **observed** in map/coach/rail/camp list, not inferred from guide;
- whether this is free roam, a timed mission, companion outing, wanted pursuit or actual optional chapter risk;
- whether player has confirmed Ledger, **both lodging purchases** and field Fast Travel menu (otherwise **UNKNOWN**);
- whether horse cargo / passengers / quest objects create an unacceptable loss risk;
- whether fare/budget matters and which station/stand menu is visible.

### 11B — Suitable read-only output
\`Observed origin/destination | feasible modes (conditional) | gate status (verified / not observed / disputed) | approximate purpose not invented cost | dangerous cargo/horse/time concern | exact one-screen check | relevant Txx claim IDs | source URL | optional outing\`.

**Example response:** “If you are in Chapter 2 at Horseshoe Overlook and planning Valentine, ride directly for a nearby outing; you need no camp fast-travel unlock. If you want longer-distance travel later, inspect the camp Ledger for Dutch → Arthur lodging. If the map isn't there, I cannot infer whether you've completed U02 or purchased U04. On an updated Story Mode build, wilderness camp adds a Fast Travel option after that purchase [T07–T11].” No claim that the player already owns anything.

### 11C — Ownership and return path
- **GameGuide** selects and validates the full canonical **mission** Field Guide and recorded evidence. This Atlas record supplies **only general movement rules**; never grants Gold, marks saves, moves the campaign state or changes existing mission route.
- **Free Roam Control** can choose a scenic ride, paid train/coach or field-camp outing **only after confirming** user constraints and observed gate. It should privilege naturally discovered sights, and not penalize player for skipping fast-travel spending.
- **Living Adventure Companion / dashboard** may show a compact “Travel Choice” comparison with risk visibility and expandable verified method. Preserve the return path to the exact full Mission Control field guide. Never store ephemeral button/checklist state as a completed trip.

### 11D — Bounded next tests, not work authorized here
1. **Patch observation:** screenshot installed Story Mode wilderness camp menu with U04 known; verify \`Fast Travel\` label and destinations, including whether gang-camp return is offered.
2. **Passenger/coach legality:** non-crime coach fare and Wanted/bounty exceptions in a controlled, natural player situation, then reconcile with future D13; never fabricate a legal test result.
3. **Horse cargo:** with ordinary surplus material only (no unique/personal mission pelt), compare pre/post Horse Cargo and recipient list for **horse ride, train, coach, camp** across current PC/controller build.
4. **Weather/time:** observe clock change after sleep/ticket ride and site refusal reason while naturally traveling; don't force environmental or missing-content events.
5. **Boat handling:** observe accessible local boat/return/boarding prompt and the mount's water-stamina indicator without trying dangerous out-of-bounds travel.
6. **Coordinator cross-check:** review D01/D02/D04 claims, prospective D13 criminal constraints, and unresolved Wave 1 content conflicts with **REVIEW PENDING** labels; approve or return for correction without this agent changing shared indexes.

**Owner review required:** exact source sampling, U04/patch menu proof, cargo and wanted disputes, proposed typed links and concise Free Roam travel-card wording. No source-backed conclusion on a user-specific unlock or a live route was manufactured.

**Acceptance summary:** Five primary S07 leaves; 11 research sections; 24 scoped claims; 23 source entries including Rockstar official patch; explicit patch/Online/RDR1 differentiation; train/coach/camp/wagon/boat decision matrix; time/weather/passenger/horse cargo risk; U02/U04 conditionals; three spoiler-safe Chapter 2 cases; contradictions and consumer handoff. Content status is **RESEARCHED — REVIEW PENDING** only.