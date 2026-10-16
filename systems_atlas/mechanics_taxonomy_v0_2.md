# RDR2 Story Mode — Mechanics Taxonomy v0.2

**State:** PROPOSED / DRAFT / INDEXED — NOT RATIFIED, NOT AN ADOPTED GUIDE  
**Prepared:** 2026-10-16 · **Agent:** Atlas Taxonomy 002 · **Scope:** single-player Story Mode, mechanics only  
**Source baseline:** [v0.1 S01–S30](mechanics_taxonomy_v0_1.md); [audit and migration](taxonomy_coverage_audit_v0_1.md); [record schema](taxonomy_schema_v0_1.md).  
**Default spoiler boundary:** Chapter 2-friendly T0/T1; later-story mechanics are described generically, without plot or outcome detail.

## How to navigate this draft

- **Family** Sxx is a permanent broad topic address. **Leaf** Sxx.Mnn is a new *provisional* stable mechanic ID, not an accomplishment or chapter objective. Each leaf is a coherent research subject, not a completed deep-dive.
- Each leaf states **what/how**, then a **gate/consequence/cross-link**. For exact controls, prices, quantities, duration or exceptional behavior, consult a sourced dossier or in-game menu.
- **Gate U01–U11** refers to the existing [conditional Chapter 2 dependency map](unlock_and_dependency_map_v0_1.md). It never asserts that the player has satisfied the gate.
- **Goal tags** in headings indicate *potential relevance*, not whole-family requirements: 100 = official Total Completion subset; G = all-eligible mission Gold support; A = separate trophy/achievement; X = optional exhaustive collection; C = convenience; I = immersion. A leaf's detailed criteria may differ.
- **Research maturity** for every leaf below is INDEXED unless explicitly linked to an existing sourced and still-unadopted study. Generic family descriptions are not a substitute for source-checked exact rules.
- **Ownership:** one primary family per leaf. A secondary topic is a link, not a duplicate source of truth. Story results, inventory quantities and active unlock flags remain entirely outside the Atlas.

## A. Character, survival, equipment and combat

### S01 — Vitals, cores and character growth [100, G, C]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S01.M01 Cores and outer gauges | Read the separate Health, Stamina and Dead Eye core/bar displays; recover via suitable food, rest or consumables. | Resource uses S02/S16/S17; do not assume one replenishes every gauge identically. |
| S01.M02 Attribute XP and capacities | Gain attribute XP through actions and inspect the Player menu for current level and maximums. | S26 challenge/reinforced gear links; maximum levels are an official 100% Player criterion. |
| S01.M03 Dead Eye ability stages | Activate Dead Eye and learn manual/automatic marking and ability differences as the story teaches them. | Stage gates are story-contextual; S04 aiming and mission Gold conditions link here. |
| S01.M04 Consumable buffs and recovery | Choose tonics and provisions deliberately according to visible effect and resource cost. | S16 recipes, S17 inventory; exact duration/effect requires dosage-specific research. |

### S02 — Nutrition, condition, rest and environment [C, I]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S02.M01 Food, weight and metabolism | Eat and inspect weight/condition where available; food restores more than hunger as a narrative flavor. | Ties S01 core recovery and S16 cooking; exact weight change interval unverified here. |
| S02.M02 Sleep and passage of time | Rest at a valid bed or field camp when available, affecting rest and in-world time. | S07.M05 temporary camps, S08 gang camp; may change NPC/time-window visibility S11/S22. |
| S02.M03 Temperature and exposure | Match clothing to hot/cold conditions using garment descriptions and character status indicators. | S03 clothing loadout; no invented universal damage threshold. |
| S02.M04 Cleanliness and temporary condition | Bathe, groom or recover after rough travel/combat; distinguish cosmetics from proven gameplay effects. | S25 hotel bath, S03 hygiene, S01 status. |

### S03 — Appearance, clothing and wearable effects [C, I, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S03.M01 Outfits and wardrobe | Choose clothing/saved looks; manage outfits carried on the horse for environmental shifts. | S02 temperature and S06 saddle storage. |
| S03.M02 Grooming and cosmetic services | Use a barber, haircut/beard styles and bathing facilities where accessible. | S25 town facilities; do not treat looks as a mission-completion claim. |
| S03.M03 Face coverings and identity | Equip bandana or mask for chosen roleplay/outlaw activities. | Whether witnesses identify the player is governed by S05; a mask is not guaranteed immunity. |
| S03.M04 Wearable special effects | Inspect trinkets, talismans and equipment effects separately from purely cosmetic items. | Craft/acquire with S13 or S26; no unsourced stacking claims. |

### S04 — Firearms, melee and tactical action [G, C, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S04.M01 Weapon classes and combat handling | Choose firearm, bow, throwable or melee tool to suit range, concealment and target type. | S12 hunting matching, S01 Dead Eye; not every class suits clean pelts. |
| S04.M02 Loadout, wheel and ammunition | Access weapon-wheel categories, ammo variants, carried long guns and horse-stowed weapons. | S06 horse cargo, S17 ammunition holdings; check access before a long ride/mission. |
| S04.M03 Condition, customization and familiarity | Clean firearms, choose gun-shop upgrades and examine effects of use and customization. | S17 spending; exact weapon familiarity progression needs a dossier. |
| S04.M04 Melee, grappling and restraints | Use fistfights, blocking, grapples, takedowns, lasso/hogtie or non-lethal control as prompted. | S19 living bounty capture, S05 legal/honor consequences. |
| S04.M05 Stealth, cover and quickdraw | Use crouch, cover, positioning and triggered draw/action mechanics as applicable. | S22 hostile encounters, S30 Gold constraints; prompt-driven duels are not identical to ordinary free-aim. |

### S05 — Honor, witnesses, bounty and enforcement [A, C, I]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S05.M01 Honor choices and reputation | Choose dialogue, assistance, restraint, donations and other eligible acts; read resulting honor feedback when shown. | S11/S22 interactions; never guarantee exact honor points for generic acts. |
| S05.M02 Witnesses and identification | Observe witness reporting, law awareness and identification cues around crimes. | S03 face coverings, S20 robbery; concealment is contextual. |
| S05.M03 Wanted response and escape | Deal with search areas, pursuit, surrender and bounty implications. | S04 combat, S07 travel routes and S17 costs. |
| S05.M04 Settlement of monetary bounties | Pay fines where available and distinguish player bounty from hunting NPC bounties. | S17 money; S19 sheriff poster jobs unrelated to paying personal bounty. |

## B. Horses and movement

### S06 — Horse acquisition, bonding and transport [100, C, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S06.M01 Acquisition and identity | Identify breed/coat, tame wild mounts, purchase or transfer an eligible horse; distinguish owned, temporary and stolen status. | Ordinary stable introduction conditional U01; Compendium observation S28 is separate. |
| S06.M02 Care, bonding and commands | Feed, brush, pat, calm, hitch, whistle, and inspect horse cores/affinity/level. | U01 brush availability must be verified; maximum bond on a horse is official 100% Player criterion. |
| S06.M03 Tack, stable and horse services | Manage saddle assignment, tack/stirrups, sale/buy and stable slots as actually accessible. | S17 spending, S13 crafted saddles; normal gate U01 with exceptions research pending. |
| S06.M04 Horse cargo, weapons and carcasses | Manage long guns, pelt/carcass loading, carrying limits and saddle access during excursions. | S04 equipment, S12 field hunting, S07 travel. |
| S06.M05 Injury, revival and replacement | Recognize horse danger/revival prompts and potential permanent loss; distinguish horse condition from player health. | S01/S17 resources; exact recovery edge cases and horse loss require caution. |

### S07 — Navigation, field camps and transportation [C, I; internal split proposed]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S07.M01 Maps and route planning | Read map, waypoint/minimap/compass, region markers, trails and point discovery. | S23 exploration and S30 mission markers; a map marker is not an unlocked achievement. |
| S07.M02 Mounted/on-foot traversal | Ride, lead, walk, sprint, negotiate terrain and environmental obstacles. | S06 horse condition, S02 exposure; water/terrain hazards conditional. |
| S07.M03 Paid travel and fast travel | Use available train/stagecoach services or unlocked camp fast travel; distinguish normal paid travel from owning/delivering a wagon. | Camp fast travel gated U04; S09 facilities; verify location and cost. |
| S07.M04 Vehicle and boat handling | Control accessible carts, wagons, stagecoaches, rowing boats and traversable water as context permits. | S20 robberies, S19 transport targets; ownership/access rules need source checking. |
| S07.M05 Temporary wilderness camp | Create eligible field camp for cooking/crafting/sleep without confusing it with gang camp. | S16 campfire crafting, S02 rest; placement restrictions vary. |

## C. Gang camp and upgrades

### S08 — Camp provisions and operational resources [C, I]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S08.M01 Contributions and common funds | Donate eligible money or valuables and distinguish camp balance from wallet and vendor funds. | S17 economy; no implicit Ledger ownership. |
| S08.M02 Provision and resource wagons | Inspect food, medicine and ammunition supply condition and available resupply actions. | S09 camp upgrades; purchased supply ≠ Pearson crafting credit. |
| S08.M03 Pearson food delivery and meals | Bring eligible meat/carcasses for provisions, separate from reserved perfect crafting stock. | S12 hunt, S10 craft donation, S17 item routing. |
| S08.M04 Chores and camp upkeep | Perform contextual chores for immersion and supported small benefits; do not overstate rank/credit. | S11 social routines, S01 attribute/honor feedback if observed. |

### S09 — Camp Ledger and improvements [C, G]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S09.M01 Ledger activation | After qualifying debt recovery/deposit, inspect Ledger when available; not automatic at Chapter 2 entry. | U02, legacy trigger map; exact live state is unknown. |
| S09.M02 Functional camp improvements | Purchase food, ammunition, medical, lodging and other facilities after inspecting prerequisites. | S08 supplies, S17 wallet/camp funds. |
| S09.M03 Fast-travel infrastructure | Unlock the appropriate lodging path before claiming camp fast-travel utility. | U04, S07 transport; buying an unrelated upgrade does not prove access. |
| S09.M04 Crafting infrastructure | Purchase Leather Working Tools where Ledger offers them. | U03 leads to S10 Pearson satchels; purchase must be player-confirmed. |

### S10 — Pearson satchel and camp crafting [C, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S10.M01 Satchel types and capacity | Inspect each carrying-capacity upgrade rather than assuming unrestricted stack space. | S17 inventory; Legend of the East satchel is later goal, not owned by default. |
| S10.M02 Recipe prerequisites | Read Pearson's recipes, including Leather Working Tools and task/recipe-specific conditions. | U03 after S09.M04; S26 challenges may affect conditions. |
| S10.M03 Material reservation and donation | Choose proper Pearson crafting donation for correct perfect pelts/carcasses; keep requested unskinned carcasses intact. | S12 quality, S17 decision; **not** transferable ordinary stock at Trapper S13. |
| S10.M04 Camp decorative crafts | Donate materials for eligible cosmetic camp objects independently of capacity upgrades. | S08 camp services, S12 gathering; convenience vs immersion tag matters. |

### S11 — Gang social life and limited camp opportunities [A, X, I]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S11.M01 Conversations and ambient routines | Listen, greet, interact, view optional scenes/campfire activity; some are transient. | S30 chapter windows; do not promise every scene replays. |
| S11.M02 Marked companion activities | Join eligible camp companion hunting/fishing/robbery/recreation invitations when actually marked/available. | Friends With Benefits chapter-specific achievement route; ordinary S25 game isn't automatic credit. |
| S11.M03 Item requests and deliveries | Receive a specific request through camp interaction, note task-log entry, source and deliver correct item. | Errand Boy five deliveries achievement; S17 item identity, S15 ingredients, S30 windows. |
| S11.M04 Camp celebration and social games | Witness meals, stories, songs and table-game invites without inventing permanent collectible requirements. | S25 rules, S08 upkeep; classify optional-exhaustive/immersion separately. |

## D. Wilderness and production

### S12 — Ordinary hunting, tracking and materials [C, 100, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S12.M01 Animal study and quality | Inspect animal species, quality stars and weapon guidance before engaging. | S28 animal Compendium; S04 weapon choice; not all three-star outcomes stay perfect. |
| S12.M02 Tracking, behavior and approach | Use Eagle Eye/trails, binoculars, cover/scent, calls or bait as appropriate. | S31 contextual controls proposal; bait/spawn efficacy uncertain without dossier. |
| S12.M03 Clean kills and quality preservation | Select species-appropriate weapon/ammunition and a deliberate lethal shot; verify carcass/pelt result. | S04/S26; legacy perfect-pelt study still REVIEW PENDING. |
| S12.M04 Skinning versus whole carcass | Decide whether to skin or transport intact based on destination; do not ruin a whole-carcass request. | S10 Pearson, S27 hunting requests, S06 horse cargo. |
| S12.M05 Spoilage, cargo and material routing | Inspect storage, decay risk and intended recipient before additional hunts. | S17 destinations; numeric spoilage/horse load limits require research. |

### S13 — Legendary wildlife and specialist crafting [100, X, C]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S13.M01 Legendary encounter and track | Investigate known clues/legendary map if unlocked, separate from ordinary three-star hunting. | U01 map normal route; S12 observation; no scripted encounter = guaranteed kill. |
| S13.M02 Legendary reward and recovery | Skin/carry unique animal material; lost legendary pelts are recovered for Trapper crafting after delay according to Rockstar Support. | S17 economy; crafting material recovery does **not** prove sale cash retained. |
| S13.M03 Trapper clothing, saddles, equipment | Sell qualifying materials to Trapper, then inspect recipes/cost of desired garment or tack. | S06 equipment, S12 pelts, S17 payments; ordinary Trapper/Pearson banks separate. |
| S13.M04 Fence-crafted talismans/trinkets | Preserve verified ingredients and use accessible Fence recipes where offered. | S17 rare-item classification, S03 wearable effects; Fence services have regional/gate distinctions U05. |

### S14 — Fishing [100, C, I]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S14.M01 Rod and tackle access | Obtain/use rod and inspect bait/lure options; standard tutorial normally opens with Chapter 2 mission. | U06; no assumed early rod ownership. |
| S14.M02 Cast, hook, reel and land | Use fish behavior, positioning and reeling controls; confirm caught species in game. | S28 fish Compendium, S01 attribute activity. |
| S14.M03 Keep, release and process catch | Choose release or retention; evaluate food and possible honor consequences where supported. | S05 honor, S16 cooking, S17 resources. |
| S14.M04 Legendary fish and special routes | Investigate separate clue/quest/lure requirements and mail/hand-in sequence. | S27 collectible request chain; 100% fish collectibles distinct from fish-species discovery. |

### S15 — Plants, herbs and ingredients [100, C, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S15.M01 Spot and collect | Detect plants in the world, pick identifiable specimens and examine their catalog entry. | S28 Compendium, S07 habitat/time; full-region plans may be gated. |
| S15.M02 Culinary and tonic inputs | Reserve herb variants for seasoning, healing and useful recipes. | S16 crafting, S02 nutrition, S17 inventory. |
| S15.M03 Specialty/poison uses | Research context-dependent poison and specialized ingredients with safe handling in-game. | S04 throwables, S16 recipe pamphlets; do not imply every plant is immediately usable. |
| S15.M04 Herbalist progression | Distinguish plant discovery from the sequential Herbalist challenge ranks. | S26; 20-plant Total Completion subset independent of Herbalist 10-rank family. |

### S16 — Personal recipes, cooking and campfire crafting [100, C]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S16.M01 Recipe discovery and reading | Find/buy eligible pamphlets and read/learn them where required before assuming recipe available. | S17 item acquisition; location and availability dossier-specific. |
| S16.M02 Food preparation/seasoning | Cook obtained meat, optionally season with eligible herbs, inspect result and provision use. | S12 hunting + S15 herbs + S02 condition. |
| S16.M03 Ammunition and weapon/hunting craft | Use accessible crafting menu and exact components to make arrows, ammo, bait or related tools. | S04 equipment, S12 clean kill; recipe availability conditional. |
| S16.M04 Tonics and horse-care craft | Combine ingredients for eligible player/horse effects, inspecting recipe and tool access. | S01 cores, S06 horse care, S15 plants. |
| S16.M05 Six-category Total Completion crafting | Track conceptual *types* (cooking, tonic, ammunition, hunting, horse care, weapon), not every recipe. | S29 C100_MISC recipe criterion; actual crafting evidence outside Atlas. |

## E. Money, markets and outlaw trade

### S17 — Inventory, valuables and economics [C, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S17.M01 Item identity, carrying and stacks | Read satchel categories/limits and distinguish personal, horse-carried and vendor-held material. | S10 satchel effects, S06 cargo, S08 camp stock. |
| S17.M02 Funds, stores and services | Compare cash, camp funds, prices, shop specialization and opportunity cost; no hypothetical balance credited. | S09 upgrades, S05 bounty payments and S25 town services. |
| S17.M03 Reserve / use / sell / donate | Determine each item's potential recipe, request, unique and sale destinations before consumption. | S10/S13 recipients, S11 requests; old inventory blueprint DRAFT only. |
| S17.M04 Scarce valuables and documents | Protect uncertain unique items, jewelry ingredients and chapter-limited rewards rather than universal 'sell all' rules. | S18 treasure and S27 collectibles; confirmed exact variant required. |
| S17.M05 Vendor restrictions and fences | Discover accessible buyers, butcher/gunsmith/store/fence roles and conditional story introductions. | U05 Emerald Ranch wagon fence is **not** proof all other fences were locked. |

### S18 — Treasure maps and hidden wealth [100, C, I]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S18.M01 Treasure chain initiation | Obtain a clue/map through an eligible encounter or discovery. | S21/S22/S23; owning a map does not imply treasure obtained. |
| S18.M02 Clue decoding and landmark search | Inspect sketches/map fragments and look for matching geography; route solutions behind optional spoilers. | S07 navigation, S23 exploration. |
| S18.M03 Discovery, pickup and disposition | Claim cache or valuables, inspect inventory and choose safe conversion if available. | S17 preservation; one completed treasure chain counts toward official 100%. |
| S18.M04 Optional caches and unique loot | Distinguish named 100% treasure chains from other hidden stashes and collectibles. | S27 collection objective definition, S29 optional-exhaustive goal. |

### S19 — Bounty hunting and sheriff work [100, C, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S19.M01 Sheriff posters and availability | Find active wanted notices/job offers at appropriate towns as story state allows. | Introductory optional Story job U07 is not the whole job system. |
| S19.M02 Tracking and apprehension | Pursue leads, incapacitate or lasso targets and assess alive/dead consequences where specified. | S04 restraints and S06 horse transport. |
| S19.M03 Delivery and payment | Hand in eligible wanted targets; verify payout and completion in-game. | S17 cash, S05 law; five bounties are a Total Completion event criterion. |
| S19.M04 Job scarcity and chapter gating | Separate finite authored bounty jobs from claims of unlimited/repeatable income. | S30 progression; actual availability needs proof. |

### S20 — Robbery, theft and illicit exchange [100, A, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S20.M01 Shop and person robbery | Threaten/steal/loot in permitted contexts; assess legal and honor consequences. | S05 witnesses/law, S17 items. |
| S20.M02 Coach and train robbery | Intercept, control or board transportation and handle timing/escape. | S07 vehicle/rail handling; 100% four robbery *types* include coach and train. |
| S20.M03 Home and homestead robbery | Follow eligible leads or discover sites and inspect hidden stashes; don't conflate with simple burglary prompts. | S23 discovery, S11 marked companion activity; chapter-sensitive content may exist. |
| S20.M04 Stolen goods and fencing | Transfer eligible stolen wagons/valuables only to services actually accessible. | U05 and S17 vendor restrictions; no universal profit assumption. |
| S20.M05 Bandit challenge interactions | Treat an outlaw action as possible input to active sequential ranks, never pre-credit locked ranks. | S26 Bandit; consequences S05. |

## F. World, discovery and recreation

### S21 — Stranger quest strands [100, A, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S21.M01 Stranger introductions | Discover available white quest markers/people and interact when nearby/eligible. | S30 story and S07 map; not every white dot is a named Stranger strand. |
| S21.M02 Multi-stage quest continuity | Return when the strand reappears under appropriate conditions and follow stages. | S30 chapter/region gates; ten completed *strands*, not ten interactions, for 100%. |
| S21.M03 Optional choices and gifts | Evaluate honor, rewards, unique items or mutually exclusive outcomes as documented. | S05 honor/S17 preservation; spoilery consequences gated. |
| S21.M04 Limited-time or honor-linked strands | Protect conditional side story opportunities before a chapter exit if specific evidence warrants it. | S29 achievements and S30 window research; no invented universal expiry. |

### S22 — Dynamic chance encounters [100, I, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S22.M01 Ambient interaction and assistance | Respond to passersby, help requests, campfires, races, rescues or local challenges as offered. | S05 honor and S17 resources; distinguish chance from story markers. |
| S22.M02 Ambushes and deceptive encounters | Assess threats, baited approaches and context-dependent escalation. | S24 gang threats, S04 restraint/combat, S06 escape. |
| S22.M03 Recurrence and ambient variability | Observe where/when encounters may appear without asserting deterministic spawn rates. | S07 time/terrain; 25 encounters are a Total Completion event threshold. |
| S22.M04 Social interaction choices | Greet, antagonize, defuse, respond to provocation or disengage in contextual social prompts. | S31 interaction grammar proposal, S05 honor/law. |

### S23 — Exploration, inspection and secrets [100, X, I]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S23.M01 Shack and interior exploration | Enter eligible buildings, look, inspect environmental storytelling and discover stashes. | S17 object preservation; five shacks are official 100% subset. |
| S23.M02 Points of Interest and world marks | Inspect notable views/landmarks and check journal/map sketches. | S28 observation, S07 map; one Point of Interest is an official target. |
| S23.M03 Environmental puzzles and secrets | Trace clues, documents, easter eggs and scene evidence at a self-selected spoiler level. | S18 treasure, S27 collectibles; no all-secrets completion promise. |
| S23.M04 Journal, letters and sketches | Read observed records and distinguish information gained from a uniquely retained collectible. | S17 item identity and S28 Compendium; some written content is chapter-sensitive. |

### S24 — Gang threats, ambushes and hideouts [100, C, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S24.M01 Gang encounters and recognition | Identify rival factions and their regional world presence without assuming every skirmish is identical. | S28 gang Compendium, S07 travel safety. |
| S24.M02 Hideout approach and clearance | Enter/hit eligible hostile hideouts and verify resulting event credit. | S04 combat; six hideout target per official 100% checklist, not every hostile camp. |
| S24.M03 Ambush and threat response | Navigate roadblocks or attacks, choose escape/defense and manage loot/honor risks. | S22 chance events, S05 law and S06 horse safety. |
| S24.M04 Non-hideout rival camp distinction | Distinguish repeatable world gang camps from fixed hideout/event milestones. | S29 goal specificity; exact respawn behavior requires dossier. |

### S25 — Minigames, venues and town experiences [100, I, C]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S25.M01 Four table games | Learn Poker, Blackjack, Dominoes, Five Finger Fillet; join where offered and inspect rules. | Official 100% asks that all four types be played; S11 marked *companion* activity is different. |
| S25.M02 Town amenities | Visit saloon, barber, bath/hotel, doctor, post office, shop and relevant settlement services. | S03 hygiene, S05 personal bounty payments, S17 spending. |
| S25.M03 Shows, theaters and print culture | Attend available shows/theater, read newspapers and enjoy world detail as desired. | Official 100% asks specified show/theater/bath experiences, not every performance. |
| S25.M04 Photography and visual leisure | Use available camera/photo mode if applicable, compose images and document sightings for personal immersion. | S23 scenes/S28 observation; photo mode availability/edition differences not verified here. |
| S25.M05 Ranters and town social life | Engage eligible public speakers/characters, overhear dialogue and observe local routines. | S22 interaction; five such contacts are an official Miscellaneous target. |

## G. Long-form progress and records (definitions, not a live ledger)

### S26 — Nine challenge strands [100, C, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S26.M01 Sequential ranks and activation | Examine Progress > Challenges; each family has 10 sequential ranks; only active rank can accrue its action. | No retroactive credit assumptions; S29 official 100% requires all nine strands. |
| S26.M02 Wilderness/sport strands | Herbalist, Horseman, Master Hunter, Survivalist and Explorer actions pull from gathering, horseback, hunting, fishing and treasure. | S15/S06/S12/S14/S18; actual category-specific gate may vary. |
| S26.M03 Tactical/outlaw strands | Bandit, Sharpshooter and Weapons Expert use crime, weapon skill and combat conditions. | S20/S04/S05; no unsolicited High Honor crime grind. |
| S26.M04 Gambling strand | Gambler challenge ranks use particular games/conditions beyond simply playing each minigame once. | S25; stage and RNG uncertainty may affect efficiency. |
| S26.M05 Reinforced equipment and max attributes | Research whether and when unlocked equipment raises final attribute limits; inspect specific rewards before purchases. | S01 Player maximum, S13 Trapper gear; no assumed ownership. |

### S27 — Collection objective chains and hand-ins [100, A, X; internal ownership proposal]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S27.M01 Environmental collectible sets | Locate and inspect card sets, dinosaur bones, rock carvings and dreamcatchers under distinct rule contracts. | S23 discovery; one **complete** cigarette-card set is 100% criterion, not all 144 cards. |
| S27.M02 Specialist request hand-ins | Manage post, transport and turn-in for hunting requests, exotic orders and other structured collecting tasks. | S12 intact carcasses, S15 plants, S17 items; not S11 gang favor requests. |
| S27.M03 Legendary-fish and wildlife objectives | Track multi-stage collection goal definitions distinct from the action of fishing or hunting. | S14 legendary fishing, S13 animals; category thresholds vary. |
| S27.M04 Late-access collections and memorials | Preserve spoiler-gated completion requirements (e.g. graves) without describing future plot in default views. | S30 chapter windows, S29 official goal subset; mark T2/T3 in dossier. |
| S27.M05 Treasury and rare-collection accounting | Describe named treasure-chain criteria, collectible rewards and claim-vs-obtain distinctions. | S18 actual treasure puzzles, S17 valuables; chain credit not inferred from found map. |

### S28 — Compendium and observation [100, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S28.M01 Species observation verbs | Distinguish study, track, kill, skin, inspect, fish and their separate in-game evidence where applicable. | S12 hunting, S14 fishing; one action is not every completion verb. |
| S28.M02 Catalog categories | View Animals, Fish, Plants, Horses, Weapons, Equipment, Gangs, Cigarette Cards in Progress > Compendium. | S06/S04/S15/S24; official 100% requires specified subsets in seven classes. |
| S28.M03 Discovery vs use/acquisition | Recognize that study/discover/use/obtain have different checklist semantics. | S29 goals; weapon 'used' differs from a found unused weapon. |
| S28.M04 Full Compendium exceptions | Treat 100% subset separately from optional exhaustive recording, including possible limited region/window subjects. | S30 spoiler/chapter gates, S27 collectibles; missability claims need specific proof. |

### S29 — Completion goals and achievement definitions [100, G, A, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S29.M01 Official Total Completion | Read the in-game Progress > Total Completion checklist, five top-level categories and exact subset criteria. | PowerPyx/GTA Base cross-check; no inferred 'all side content required.' |
| S29.M02 Personal all-Gold goal | Define a campaign objective covering all eligible story medal entries as player chooses; avoid conflating mission shelf parts. | S30 medals; *not* an official Total Completion condition. |
| S29.M03 Achievement/trophy contracts | Distinguish Gold Rush **70 Gold medals**, Best in the West, camp missables and story/online achievement scope. | S11 camp activities/requests; Story Mode Atlas does not implement Online mechanics. |
| S29.M04 Optional exhaustive completion | Categorize every unique, scene, Compendium entry and optional discovery as a separate preservation objective. | S17 item loss, S23 secrets, S28 records; some outcomes are mutually exclusive. |
| S29.M05 Convenience and immersion | Describe benefits/playstyle interests without presenting them as required completion milestones. | Free Roam designer may consume this tag; Atlas makes no recommendations. |

### S30 — Chapter flow, performance, replay and saves [G, A, X]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S30.M01 Mission and chapter gates | Read in-game available markers, journal/task info and chapter transitions; missions may unlock other mechanics. | U00–U11, S21 stranger missions; avoid assuming shelf order is gameplay order. |
| S30.M02 Gold and scoring | Understand medal objective types (timing, accuracy, damage, items) without writing guides or results. | S04 combat/S01 Dead Eye; Mission Control owns live tactical guide and medal ledger. |
| S30.M03 Replay vs original run | Access eligible replay/scoring from menus while preserving separation from original-run pickups, save state and side outcomes. | S17 unique items, S29 all-Gold; replay success isn't proof of new campaign inventory. |
| S30.M04 Autosave, manual save, checkpoint | Understand saving availability and protected mission/transition moments; rely on actual UI for save proof. | S29 optional exhaustive risk; Atlas holds no current slot or last-save timestamp. |
| S30.M05 Chapter windows and missables | Flag *specific sourced* irreversible opportunity windows, including selected camp activities, letters or skippable story steps. | S11/S21/A criteria, U08/U09/U11; exact countdowns may remain DISPUTED. |

## H. New proposed family (owner approval required)

### S31 — Contextual interaction and information feedback [C, I; **PROPOSED ONLY**]

| Leaf | Mechanic and player interaction | Dependency / consequence / relation |
|---|---|---|
| S31.M01 Contextual prompts | Learn how interaction targets, focused actions and available prompts change with state, tool and distance. | S04 lasso, S06 horse care, S11 camp NPC requests; interface varies by platform. |
| S31.M02 Observation tools | Distinguish ordinary focus, binoculars, Study/Show Info, Eagle Eye tracking and Dead Eye combat ability. | S12 tracking, S28 Compendium, S01 Dead Eye; neither Eye mode is interchangeable. |
| S31.M03 Information surfaces | Identify map/journal/task log/Compendium/Player/Progress and their differing evidence roles. | S07 map, S28 Compendium, S29 completion, S30 objectives. |
| S31.M04 Context/action safety | Handle conflicting prompts, nearby pickups, wagon/horse contextual actions and situations where input is suppressed by missions. | S04 combat, S06 interaction, S17 inventory; mechanics dossier must be device-specific. |

**Alternative if owner declines S31:** Keep a non-authoritative controls cross-index pointing to S01/S04/S06/S07/S12/S28/S30 without allocating S31.Mnn canonical addresses. Do not collapse unrelated rule ownership into a single catch-all guide.

## Cross-family typed pathways (examples; provisional edges)

| Input / entry | Typed relation | Destination / effect | Gate / evidence requirement |
|---|---|---|---|
| S09.M01 Ledger | ENABLES | S09.M04 Leather Working Tools purchase route | U02, only after qualifying deposit |
| S09.M04 Tools purchase | REQUIRES for | S10.M02 Pearson satchel recipe access | U03 and actual in-game purchase |
| S12.M03 Clean kill | MATERIAL_FOR | S10.M03 Pearson craft or S13.M03 Trapper craft | Correct pelt quality; destination inventory exclusive |
| S12.M04 Intact carcass | MATERIAL_FOR | S27.M02 hunting-request turn-in | Item must satisfy recipient contract |
| S06.M02 Horse bonding | CONTRIBUTES_TO | S29.M01 official Player goal | In-game Level 4 on one horse |
| S07.M03 Camp fast travel | REQUIRES | S09.M03 lodging infrastructure | U04, verify purchased upgrade |
| S11.M02 Marked activity | CONTRIBUTES_TO | S29.M03 Friends With Benefits achievement | Qualifying chapter activity, not generic table play |
| S11.M03 Request delivery | CONTRIBUTES_TO | S29.M03 Errand Boy achievement | Five accepted-and-delivered requests |
| S25.M01 Four game types | CONTRIBUTES_TO | S29.M01 official Misc | Played each type, not necessarily won |
| S16.M05 Six recipe types | CONTRIBUTES_TO | S29.M01 official Misc | Six specific craft categories, not any six items |
| S18.M03 Finished treasure chain | CONTRIBUTES_TO | S29.M01 official Collectibles | At least one full chain |
| S27.M01 Cigarette-card set | CONTRIBUTES_TO | S29.M01 official Collectibles | One full set, not all 144 |
| S28.M03 Observation verb | RECORDED_IN | S28.M02 Compendium | Type-specific use/discovery rule |
| S30.M02 Medal score | CONTRIBUTES_TO | S29.M02 all-Gold; S29.M03 Gold Rush | Eligible entries vs 70 Gold threshold DIFFER |
| S30.M05 Chapter windows | HAZARD_TO | S11.M02/03 and S21.M04 | Only if specific time/mission risk independently verified |
| S13.M02 Lost legendary material | OUTPUT_TO | S13.M03 Trapper stock | Official Rockstar after-delay exception; not ordinary pelt rule |
| S04.M02 Long guns | INTERACTS_WITH | S06.M04 horse cargo | Horse/saddle context; availability must be checked |
| S03.M03 Mask wearing | INTERACTS_WITH | S05.M02 witness identity | No universal immunity |
| S12.M02 Tracking | INTERACTS_WITH | S31.M02 tool taxonomy proposal | Does not mean Dead Eye target marking |

These graph edges are illustrative research architecture. Before any automated gate inference, every REQUIRES/HAZARD_TO relation needs a confirmed rule, mode and evidence claim ID under the [schema](taxonomy_schema_v0_1.md).

## Examples of human discovery without creating a progress ledger

- **Horse lesson, spoiler-light:** S06 -> S06.M01 acquisition -> S06.M02 care/bonding -> verify U01 from the currently visible menu. Related mechanics S07.M02 and S12.M05. No assumption about owned horses.
- **First satchel project:** S09.M01 -> S09.M04 -> S10.M02 -> S12.M01/M03 -> S10.M03 -> S17.M01. Verify the actual Ledger, tools and ingredients separately.
- **First careful hunt:** S12.M01 study/quality -> S12.M03 appropriate kill -> S12.M04 skin-or-keep -> S06.M04 transport -> S17.M03 recipient choice.
- **Camp missed-opportunity check:** S11.M02 vs S11.M03 are different achievement classes; S30.M05 determines a *sourced* time-window warning, not an imaginary required camp checklist.
- **Unclear completion status:** S29.M01 links to relevant criterion and in-game progress screen; never stamps the criterion achieved.

## Dossier and evidence pointers

**Existing, unadopted local research:** [Chapter 2 gates](unlock_and_dependency_map_v0_1.md), [legacy hunting guide](https://github.com/L33TW0RLD/rdr2/blob/main/guides/hunting/perfect_pelts.md), [legacy Pearson-vs-Trapper](https://github.com/L33TW0RLD/rdr2/blob/main/guides/hunting/pearson_vs_trapper.md), [legacy inventory blueprint](https://github.com/L33TW0RLD/rdr2/blob/main/guides/inventory/system_blueprint.md) and [legacy completion targets](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/completion_targets.md). Their existing REVIEW PENDING/DRAFT classifications are unchanged.

**Independent/primary mechanics evidence for indexed claims:**
- [PowerPyx — Story Mode Total Completion](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) (five categories, subset thresholds, 90 challenge ranks), cross-checked with [GTA Base](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist).
- [PowerPyx — Trophy Roadmap](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap) (70 Gold Rush and separate chapter-sensitive camp achievements).
- [PowerPyx — Camp Ledger](https://www.powerpyx.com/red-dead-redemption-2-how-to-upgrade-camp/) (one debt recovered and deposited, Ledger access).
- [Rockstar Support — Lost Legendary Animal Pelts](https://support.rockstargames.com/articles/480idh1zECJ0ojrheApV1U/unable-to-skin-legendary-animals-or-losing-their-pelts-in-red-dead-redemption-2) (specific lost-material Trapper exception).
- [PowerPyx — Full Compendium](https://www.powerpyx.com/red-dead-redemption-2-full-compendium/) (the in-game observation index categories and ordering).
- [RDR2.org — Companion item requests](https://www.rdr2.org/guides/item-requests-guide/) (conditional requests; separate achievement).
- [GameFAQs — Chapter 2 walkthrough](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/chapter-2-horseshoe-overlook) (chapter progression context).
- [PowerPyx — Hunting requests](https://www.powerpyx.com/red-dead-redemption-2-all-hunting-request-locations/) (carcass hand-in).
- [Legacy Chapter 2 map](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/chapter_02_trigger_map.md) (review-pending gate research and skippable wagon concern).

## Explicit unknowns, conflicts and next steps

- Provisional Sxx.Mnn IDs must be accepted before being embedded in application contracts. S31 is not owner approved.
- Exact feature/weapon/horse/recipe prices and available controls are intentionally not presented without source-level dossiers and live in-game checks.
- Known disputed subjects: exact oil-wagon expiry timing, camp invitation/trophy-credit edge cases, individual item-request trigger windows, Buck Antler Trinket quality effects, normal pelt loss vs legendary auto-transfer, replay vs original-save pickups.
- Date/edition/platform must be attached to specific research claims, not inferred from a generic guide.
- Follow the independent [taxonomy research backlog](taxonomy_research_backlog_v0_1.md) for bounded investigations. This v0.2 document is a navigable **index**, not a guide adoption, player inventory, task execution engine or new mission authority.

**Stop:** Owner review required before schema/ID adoption. No mission, campaign, architectural decision or gameplay source was changed by this taxonomy.
