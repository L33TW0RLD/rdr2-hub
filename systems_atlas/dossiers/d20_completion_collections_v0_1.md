# D20 — Collection Families, Mailing, Hand-ins and Completion Credit

> **Research maturity: RESEARCHED — REVIEW PENDING; NOT ADOPTED.** Game-fact research only. No claim about a player's possession, encounter, letters, posted items, side-mission outcomes, saves, completion percentage, or trophies. The eight main collection systems are related but **not interchangeable**, and an observed collectible is not necessarily a delivered or completed collection.

| Record property | Value |
|---|---|
| Record / version / kind | `ATLAS.D20` · `v0.1` · Story Mode collection-system research |
| Assigned issue / branch | [Issue #34](https://github.com/L33TW0RLD/rdr2-hub/issues/34) · `atlas-collections-024` · `agent/atlas-collections-024` |
| Research date | **2026-10-17** — source consultation date, NOT patch version |
| Mode / platform | **Red Dead Redemption 2 single-player Story Mode**, baseline PS4/Xbox One, PC/later console builds to the extent shared. Bonus-edition treasures are conditional. **Not** Red Dead Online or RDR1; no mods or exploit routes. |
| Primary proposed mechanic leaves | `S18.M01–M04`, `S27.M01–M05`. Connected `S29.M01` completion goals remain D15-owned; `S14.M01–M04` fishing technique and `S27.M03` technical overlap D16-owned. |
| Spoiler filter | **T0/T1** in sections 1–7 and 10. **T2/T3** later access separated in §4B (no story outcome details). |
| Evidence unit | **Goal-definition / recipient rule** only. Actual player's `found`, `mailed`, `delivered`, `claimed`, `completed` stay **UNKNOWN** unless visible in-game evidence is independently reconciled by GameGuide. |
| Related read-only sources | [D15 Compendium tracker](d15_compendium_trackers_v0_1.md) (main, research REVIEW PENDING), [D08 Chapter 2 windows](d08_chapter2_limited_windows_v0_1.md) (main, REVIEW PENDING), D04 hunting/D06 item preservation main (REVIEW PENDING); [D16 fishing branch](https://github.com/L33TW0RLD/rdr2-hub/tree/agent/atlas-fishing-021) (active checkpoint-only when checked, no dossier available; not integrated). |
| Author / adoption | Assigned D20 researcher; coordinator and owner decide final adoption. Repository `main` / taxonomy design not changed. |

## 1. Definitions, action stages and the correct proof surface

A collectible chain has a **type-specific state machine**, not one universal “collected” state. The source-checked common vocabulary is:

| Stage / verb | Observable meaning, by family | What it does **not** prove |
|---|---|---|
| **DISCOVER / LOCATE** | Player sees a rock inscription, bones, Dreamcatcher, map/treasure clue, card or animal; optional symbol in Eagle Eye | Registered an interaction; copied coordinates; possesses an item; mission accepted |
| **INSPECT / EXAMINE** | Deliberate action at dinosaur bone, rock face, Dreamcatcher, journal/treasure clue. May add a journal/map mark or collectible subcounter | Bones/carving **mailed**; secret reward obtained; a treasure cache physically taken |
| **PICK UP / COLLECT / OBTAIN** | Actual named card, map, exotic ingredient, animal body or caught fish enters proper satchel/horse/object system, where applicable | The quest stage is active; full set physically available; the recipient acknowledges it |
| **ASSEMBLE A SET / LIST** | One named group has its required **distinct components**, correct item condition and quantities; “12 cards” means 12 different cards **in one set** | Mailed/handed in; entire 144-card quest finished; 100% row awarded |
| **MAIL / SEND** | Select **eligible complete pack/set** or coordinates/fish at a real **Post Office** `Send Mail` prompt. Different collections have different permitted partial batches | Reward already arrived, invitation read, final scene played, all quest stages done |
| **HAND IN / GIVE** | Personally return the **exact active** Exotic list to Algernon, or deliver required materials when a specified recipient accepts them | Mailing to post office was valid for every family; finding flowers before the assignment equals a completed Exotic list |
| **CLAIM REWARD / READ INVITATION** | Collect recipient's post, invitation or reward; in some strands return to a person for final scene | The first finding/mailed record automatically completes final side mission; rare gift physically picked up |
| **COMPLETE** | The appropriate **in-game Total Completion > Collectibles** row ticks; if relevant, named Stranger strand / trophy independently finished | Another completion universe (every card, Zoologist, It's Art trophy, all treasures) necessarily finished |

**The safest field procedure:** `what is the named goal?` → inspect relevant quest/log and available gates → collect *right objects* → verify *correct stage and recipient UI* → check mailing/turn-in → check mail/final appointment if required → verify **Total Completion** category checkbox. The game's current UI beats a publisher's use of “found.” [C01–C04, C06–C14]

**Important type distinction:** Dinosaur bones and rock carvings generally generate **coordinate/location letters**, not bones or rock blocks for shipping. Perfect carcass lists require **unskinned physical bodies** and cannot be posted one animal at a time. Cigarette card and legendary-fish mailables likewise remain materially different. Dreamcatchers require **inspection in place**, without a postal hand-in. Treasure chain credit requires the **final claimed cache**, not merely inspecting maps. Exotics use **direct Algernon returns**, not mail. [C04–C16]

### Compact context-dependent stage matrix

| Family | Inspect/collect | Recipient requirement | Final completion evidence |
|---|---|---|---|
| Cards | 12 **different named cards** in one set | **Mail a complete set** to **Phineas T. Ramsbottom** after suitable quest activation (conservative rule) | `Total Completion > Collectibles > Cigarette Card Sets` (one set); all 12 sets = larger Stranger quest [C04] |
| Dinosaur bones | Examine **30** in-world sites → recorded bone coordinates | Post the **30 location records** to **Deborah MacGuiness**; retrieve invitation; return to specialist to finish [C05] | Final `Dinosaur Bones` checkmark / Stranger strand completion |
| Rock carvings | Inspect **10** physical carvings → written coordinates | Mail **10 locations** to **Francis Sinclair**; await invitation; return for scene [C06] | `Rock Carvings` / `Geology for Beginners` completion; unique compass pickup is distinct |
| Dreamcatchers | Investigate all **20** hanging tree formations | **No postal recipient**; final hidden arrowhead is a separate item claim [C07] | `Dreamcatchers` 20/20 under Total Completion |
| Treasure | Obtain map → **decode** successive clues → **claim final cache** | **No postal hand-in**, no Fence sale required for chain | At least **one full named treasure chain**, verified under Total Completion; challenges separate [C08] |
| Legendary fish | Catch each required **13** large/unique fish | **Post each eligible fish to Jeremy Gill**; physical fish may require horse transport [C09] | All **13** posted / `A Fisher of Fish` chain and Total Completion; optional 14th finale distinct |
| Hunting requests | Accept notice; obtain **every correct perfect UNskinned carcass** in *active list* | Mail **entire filled batch** at once to **Ms. L. Hobbs**, check next letter/list [C10–C11] | Five request stages completed with subsequent acceptance; optional `It's Art` statue recovery ≠ 100% row |
| Exotics | Receive active Exotic Collector's List; gather exact **orchids/plumes/eggs** | **Direct hand-in** to **Algernon Wasp**; repeat sequentially for five lists [C12–C13] | All **five** lists turned in and final side-mission completion |

## 2. Normal unlock conditions and evidence-bound gates

These `D20.Gxx` identifiers are dossier-local research labels, **not approved new taxonomy IDs or actual player state**. “Available in Chapter 2” means a *normal route*; the player still must observe the source/mission/interaction.

| Gate | Normal availability and precise prerequisite | Strength / player's status | Safe check |
|---|---|---|---|
| **G01: Total Completion** | `Pause → Progress → Total Completion → Collectibles` for the current game | **HIGH rule / player UNKNOWN** [C01,C02] | Read exact row/checkmark; do not infer from Atlas or an interactive route checklist |
| **G02: Cards strand** | `Smoking and Other Hobbies` normally offered by **Phineas T. Ramsbottom** at **Flatneck Station**, after Chapter 2 mission `Who Is Not Without Sin` | **HIGH normal gate / player UNKNOWN** [C04] | Confirm actual Stranger offer, set in cards Compendium and `Send Mail` availability |
| **G03: Bones** | `A Test of Faith`, **Deborah MacGuiness** near Heartlands / Horseshoe Overlook, can start Chapter 2 | **HIGH / player UNKNOWN** [C05] | Observe introductory conversation and in-world `Inspect` bone prompt; `Send Mail` for location records |
| **G04: Rock carvings** | `Geology for Beginners`, **Francis Sinclair** northwest of Strawberry, sources support Chapter 2 | **HIGH from PowerPyx / player UNKNOWN**; GTA Base timing contradicts (see §9) [C06] | Observe named Stranger offer; don't impose a hard Chapter 3 delay |
| **G05: Dreamcatchers** | Can be investigated independently from **Chapter 2**, no Stranger acceptance necessary | **HIGH / player UNKNOWN** [C07] | Look for hanging formation and contextual Inspect, then 20/20 count |
| **G06: Treasure chain** | **Jack Hall Gang** map via **Maximo** / `All That Glitters` near Flatneck in Chapter 2; alternative **Poisonous Trail** first-map pickup; High Stakes often later | **HIGH normal cases / player UNKNOWN** [C08] | Check actual physical map in Satchel/Documents and clue continuity; no forced purchase or guaranteed encounter |
| **G07: Fishing mechanics and collectible fish** | Normal Story rod teaching via **A Fisher of Men** in Chapter 2; separate `A Fisher of Fish` Jeremy Gill strand and **appropriate Special Lures** | **HIGH normal route; D16 owns fishing details; player UNKNOWN** [C09] | Is rod truly on item wheel? Is Gill strand active? Are specific lures/catches/Send Mail available? |
| **G08: Hunting requests** | Any one eligible station **Hunters Sought** notice to launch `A Better World, A New Friend`; first four lists can be progressed earlier; fifth is later-story gated | **HIGH normal chain / player UNKNOWN** [C10,C11] | Read actual `Wildlife Art Exhibition` request; verify all intact perfect carcasses and mail enabled |
| **G09: Exotics** | `Duchesses and Other Animals` offered by **Algernon Wasp** in Saint Denis **after `The Gilded Cage` (Chapter 4)**; 5 active sequential lists | **HIGH / player UNKNOWN** [C12,C13] | Meet Algernon, read `Satchel → Documents → Exotic Collector's List`, hand in only current completed list |
| **G10: late region / memorials** | Some bone and fish locations require **New Austin / Epilogue** in normal unmodified play; **nine graves** appear as later-story memorials | **HIGH / player UNKNOWN**, **T2+ details in §4B** [C05,C09,C14] | Do not map chapter-locked item as available; no exploits or save-state assertions |
| **G11: mailing and inbox** | Reach real functioning Post Office, correct quest/item state, eligible `Send Mail` option. Return later to collect a physical **letter/reward** when a strand requires it. | **HIGH broad**, delay varies by strand, **live UNKNOWN** [C04,C06,C11] | Check outgoing mail prompt, after-post log entry, and recipient reply. Mailing coordinates ≠ claiming reward. |

**Gate fallback:** absence of a marker or a Send Mail option is not proof an entire collectible permanently failed; first check named active quest, correct current list, satchel/horse state, actual stage and correct service. Do **not** force a reload or assume an untested bug. D08 Chapter 2 urgent-story opportunities may override leisurely collecting if a *specific observed* active stage is time-sensitive.

## 3. Benefits, costs, item disposition, recipient routing, recoverability

### A. Cigarette cards — S27.M01

There are **12 named card sets × 12 unique cards = 144 different cards**. A set of *12 arbitrary cards*, 12 duplicate cards, or one card from 12 sets is **not** a complete set. **For official Total Completion: only ONE complete named 12-card set**. Finishing the entire `Smoking and Other Hobbies` quest and its all-set rewards is the **OPTIONAL_EXHAUSTIVE** target. The Compendium's “discovered” art may persist independently from *physically held, mail-eligible copies*; follow D15 and D06 read-only item rules. [C01,C03,C04]

**Acquisition:** visible fixed world pickups or **Premium Cigarette** packs purchased at General Stores; packs generate possible **duplicates**, entail expenditure and Satchel-capacity issues, and are not evidence of any particular card. Mission-gated fixed spawns are reported (one per set in PowerPyx), but **Premium pack workaround** does not prove quest activation/hand-in. [C04] **Route:** inspect named set → preserve one of each needed card → verify physically held copies and active stranger → Post Office **mail completed named set** to Phineas → check post/reward and Collectibles row. The hand-in reward is distinct from actual 100% row: if one-set criterion ticks earlier/later than expected on a particular build, report what the game displayed, not an assumed hidden trigger.

**Risk:** Selling the *sole* copy at a Fence may make the card unavailable for mailing despite a Compendium record. Do not broadly “sell all duplicates” unless the set and exact copy are verified; a new Premium pack is not a guaranteed replacement for the specific lost card. Physical cards vs recorded discoveries remain separate.

### B. Dinosaur bones — S27.M01

**30** Dinosaur Bones for **Deborah MacGuiness**, `A Test of Faith`. Examine site with the in-world interaction: the valuable payload is **bone location/coordinates** to send, **not a physical dinosaur bone in Satchel**. Mail the location records at Post Office; guides allow multiple mailings as found, unlike Ms. Hobbs' atomic full-carcass batches. Once all **30** records have been posted, allow the game's reply delay and **read invitation**, then attend the final scene with Deborah to close the Stranger mission and verify the 100% row. Reward items such as Jaw Bone Knife are **distinct** from registration/mailed state. [C05]

**Region gate:** in normal unmodified play **8 New Austin bones** remain inaccessible until later region access; **22 other bones** can be approached before that. Do not advertise 30/30 as achievable in Chapter 2 or suggest illegal crossing/exploits. Do not assume “I saw a fossil” equals the Inspect interaction firing.

### C. Rock carvings — S27.M01

`Geology for Beginners` from **Francis Sinclair**: find and interact with **10** rock carvings; mail the **coordinates** to Francis via Post Office as discovered or together. After all 10 mailed, receive/read invitation and return to original cabin to complete the named Strand. All normal carving locations are reachable in the northern Story Mode map, without New Austin; Chapter 2 route appears in specialist guides, despite one GTA Base page reporting a Chapter 3 gate (DISPUTED; see §9). [C06]

**Preservation warning:** the **Old Brass Compass** after the final interior visit is **missable as a unique optional crafting component** according to specialist mission guide. The safe instruction after actually reaching the final scene: **check visible table prompt immediately before leaving**. This warning concerns **personal exhaustive / talisman** goals and is **not a claim that missing the compass invalidates the 10-carvings official row**. D06/D22 own final scarce-object disposition and replay.

### D. Dreamcatchers — S27.M01

**20** collections of hanging objects in trees, counted via **in-place Investigate / Examine**. No poster, post office, physical mail to send, or named recurring list. Investigation marks location/Compendium-/map-related feedback and increments `Progress → Total Completion → Dreamcatchers`. They are discoverable from Chapter 2 and can be found in any order. On all 20, a clue points to an optional **Ancient Arrowhead** in a waterfall cave; **claim the separate artifact** if desired and safe. Do not confuse the arrowhead pickup with the **20 inspections**, or promise the item was picked up automatically. [C07] Follow environmental safety (dark cave/lantern) without claiming unlocked equipment or forcing a risky detour.

### E. Treasure maps and valuables — S18.M01–M04 / S27.M05

A treasure map is a **clue**, not claimed cash. For **one official Total Completion Treasure Hunter row**: obtain first valid map → interpret successive clue maps/landmarks → physically **claim final cache** of **one entire eligible chain** (e.g. **Jack Hall Gang** starting near Flatneck Station via `All That Glitters`; **Poisonous Trail** map from found box). Having map 1, seeing final location, or selling unrelated gold bars at a Fence **does not establish** completed treasure chain. No general Post Office turn-in. [C08]

**Crucial two-layer distinction:** `Total Completion > Collectibles > Treasure Hunter` asks for **one chain**, while the **Explorer challenge strand** is a **separate Player target** and may involve other treasure-map steps/chains. PowerPyx's treasure guide loosely says **three hunts needed for 100%** via Explorer; GameFAQs/GTA Base still correctly say **one** for the Collectibles row. This is a difference in **criteria/goal universe**, not “three for the treasure-row.” D27 owns Explorer active ranks and precise credit. [C01,C08,C15]

**Costs and edition:** Maximo's map involves a purchase/encounter; treasure valuables can have financial impact. The **Le Trésor Des Morts** treasure line has edition/preorder access restrictions in PowerPyx (historical edition terms, possibly patched/market-dependent); no requirement to own paid edition for one of the standard eligible chains. A complete world map/hidden treasure and every gold bar are **OPTIONAL_EXHAUSTIVE**, not official one-chain gate. Exact detailed solution coordinates belong optional spoiler expansion, not default guidance.

### F. Legendary fish — S27.M03 (delivery ownership only; D16 read-only fishing)

**13 required collectible legendary fish** for **Jeremy Gill** (`A Fisher of Fish`) are **caught and MAILED** through Post Office after a qualifying quest; **14th mentioned fish** relates to a separate later finale and **is not a fourteenth post-office collectible requirement** for official 100%. Big fish may ride on horse until posting; smaller species can enter satchel. A **catch animation**, visible fish entry, ordinary `Compendium > 10 fish` or release is **not mail proof**. Check `A Fisher of Fish` list, actual `Send Mail`, and final collector state. [C09] 

**Fishing specifics belong to D16:** rod acquisition/controls, bite/hook/reel tactics, precise lure purchases, bait comparison, locations, regional catches, repeat catch on loss and honor effects are **not rewritten or independently adopted here**. D16 was checked on its separate Wave 3 branch at startup: **initial checkpoint exists; dossier not yet published**. Until it arrives, the consumer must treat exact mechanics as an **independent specialist research boundary**. Normal rod route is Chapter 2 `A Fisher of Men`; Gill mission and Special Lures additional prerequisites; player access UNKNOWN.

### G. Hunting requests — S27.M02 (delivery ownership; D04 hunting read-only)

`A Better World, A New Friend` / **Wildlife Art Exhibition** consists of **five sequential Hunting Requests** issued through a **Hunters Sought** poster at train/post offices (one accessible starting poster is sufficient to launch). Each request is a **different active list**; after the correct materials are collected **in full**, take **all perfect, unskinned carcasses at once** to Post Office and choose **Send Mail to Ms. L. Hobbs**. **Partial batches are not mail-eligible** even if game lists the collected subset. Claim expected reply/reward/next list according to the in-game sequence; don't assume immediately after mailing it all completed. [C10,C11]

**Exact requested animals (safe species list; no spawn-site prescriptions):**

| Stage | Required intact, perfect carcasses | Availability / delivery |
|---|---|---|
| **1** | Squirrel, Rabbit | Can start with a Chapter 2 station notice; **2** items; mail together |
| **2** | Cardinal, Rat, Woodpecker | Next-stage list after current is credited; **3** items; mail together |
| **3** | Chipmunk, Oriole, Robin, Opossum | Next-stage list; **4** items; mail together |
| **4** | Sparrow, Songbird, Toad, Bullfrog, Skunk | Next-stage list; **5** items; mail together |
| **5** | Cedar Waxwing, Bat, Blue Jay, Crow, Beaver | **Epilogue-gated normal availability**; **5** items; mail together |

Five batches = **19 specific whole carcasses** overall. This is a request specification, **not** any guarantee the player has that many or can immediately find them. D04 owns optimal species weapon, clean kill and 3★/Trinket debates; this dossier only applies the **recipient's requirement: item quality must actually be `Perfect` and the carcass must remain WHOLE**. Skinning/plucking a request animal can make it invalid. Larger carcasses risk decay/horse cargo issues and should be obtained **last, then delivered promptly**. [C10,C11]

**Hunting-request completion versus `It's Art`:** after five mailing stages there is an additional Squirrel Statue gift/follow-up activity and a distinct **`It's Art` trophy/achievement** involving repeatedly retrieving the moved statue. **That trophy's extra six recovery steps are not the official 100% hunting-request criterion**. However guides and player reports disagree about **precisely when** the `Hunting Requests` Total Completion row ticks (fifth posting vs appointment vs statue placement/recovery); the safe requirement is **all five requests plus verify the actual row**. Don't claim a medal/100% from the last posting alone. See §9 [C11,C16].

**Potential progression issues:** PowerPyx reports old player cases of next request failing after carrying future-stage carcasses, horse-carried bodies vanishing after reload, or notice availability conflicts while other Rhodes poster mission active. These are *reported issues, not established current universal bugs*. Avoid pre-hoarding a future list, check the real active list and existing complete batch; before advising save operations, consult GameGuide (no general guaranteed recovery). PowerPyx's suggestion that Ch6 advanced Dead Eye is *necessary* is contradicted in its own comments and by basic perfect-kill mechanics; don't impose it as a hard gate. [C11,C17]

### H. Exotics — S27.M02 (direct delivery, NOT post)

`Duchesses and Other Animals` begins with **Algernon Wasp** in a north Saint Denis greenhouse after Chapter 4 `The Gilded Cage`. There are **five consecutive Exotic Collector's Lists** (not five **random** piles, and not a universal sixth material request). The **current** document in `Satchel → Documents → Exotic Collector's List` names eligible orchids, plume types, and sometimes eggs. Return the complete list **directly to Algernon**, accept/observe next list, repeat. The whole five-list commission must be finished for the official Exotics row. [C12,C13]

**Verified five-list contract:** 

| List | Required items | Hand-in/continuity |
|---|---|---|
| **I** | 5 Little Egret Plumes; 5 Reddish Egret Plumes; 5 Snowy Egret Plumes; 15 Lady of the Night Orchids | Turn in **30 items** to Algernon |
| **II** | 20 Heron Plumes; 7 Lady Slipper Orchids; 10 Moccasin Flower Orchids | **37 items**, then receive list III |
| **III** | 25 Gator Eggs; 3 Acuna's Star Orchids; 7 Cigar Orchids; 5 Ghost Orchids | **40 items**, then list IV |
| **IV** | 30 Spoonbill Plumes; 5 Night Scented Orchids; 10 Rat Tail Orchids; 5 Spider Orchids | **50 items**, then list V |
| **V** | 5 Clamshell Orchids; 5 Dragon's Mouth Orchids; 5 Queen's Orchids; 10 Sparrow's Egg Orchids | **25 items**, final Algernon delivery |

These entries sum to **182 individual required items**: **92 orchid specimens + 65 bird plumes + 25 alligator eggs**. **This number is a derived total of the five independently published lists, not an on-screen single 182-item checklist.** GTA Base publishes all quantities; PowerPyx confirms 5 stages and Chapter 4 gate. [C12,C13]

**Before the gate:** feasible incidental plume/herb collection may be convenient but does **not** imply Exotics quest active or stock sufficient. Plants/birds may have unusual spawn/collection behavior; community reports of orchids stopping at requested quantity minus one until list activation are **UNVERIFIED EDGE** (see §9), not a hard universal gate. The first four lists' inventory details belong only in on-demand T1/T2 active-list consultation, not as Chapter 2 goals. Algernon's final reward items including a unique Revolver are separate optional collectible records; D22 owns missable/weapon-compendium implications.

## 4. Story, time, regional and edition risks — default versus spoiler partition

### 4A. Default T0/T1 gate policy

**Safe now, conditional:** Examining a visible Dreamcatcher; starting one named Chapter 2 cards/bones/carvings/treasure/animal-request strand **if the actual offer/prompt exists**, or following a safe local clue. **Not safely presumed now:** fishing rod, active Gill letter, a fully mail-ready card set, a first hunting poster, an already triggered Stranger, list unlocks, expensive gear or enough cash.

**Can wait:** most world collectibles and their queues normally persist; do not call them a Chapter 2 disappearing opportunity merely because they are side activities. **If D08 or GameGuide confirms a real short window** (e.g., active oil-wagon task, camp request/honor story marker), that observed commitment takes precedence over leisurely collection. Do not assert “all must be cleared before Chapter 3.”

**Physical risks:** horse loss/death, long travel, carriage/carcass decay, missing one physical card, accidentally selling unique item, and early chapter river/cave hazards. Avoid the unsourced claim that all mailed, cached, quest and reward items restore after death or manual reload.

**Edition and title update:** standard 100% checklist subset is corroborated across PS4/Xbox One/PC guides; specialized extra treasure maps may be edition-specific (PowerPyx Le Trésor Des Morts). Do not treat that bonus as a hard required chain.

### 4B. **T2/T3 — future-stage details; only present on request**

- In normal story progression, the **final eight dinosaur bones** require New Austin access, and **at least some of 13 legendary fish** also require later access; completion cannot be promised in Chapter 2. No exploit bypass is sanctioned. [C05,C09]
- **Five** hunting-request batches include a **fifth Epilogue-gated list**; don't classify the first four requests as a finished official 100% chain. [C10]
- **Nine Graves** of departed companions belong to the `Total Completion > Collectibles` checklist but are **post-main-story memorials**. Do **not** reveal identities, grave sites or deaths in T0/T1. Each grave is a separate visit/pay-respects action, not a mailed item. [C02,C14]
- Exotics require a **Chapter 4** story gate, and all **five** item lists; no need to reveal plot of `The Gilded Cage`. [C12]
- The `It's Art` statue's extra retrieval cycle is **achievement-specific**, not mandatory to treat as Chapter 2 collectible objective; later home details withheld by default. [C16]
- The **14th/finale fish** is not a required extra 13-item mailing. Treat late event resolution as Story/Stranger consumer concern, not D20 fishing mechanics. [C09]

## 5. Typed provisional dependencies, crosslinks and game-state-safe data contract

All edges below refer to **unratified** `systems_atlas/taxonomy_schema_v0_1.md`; they are *proposed research links*, not new approved family IDs. `INTERACTS_WITH` does not imply `REQUIRES`; `COMPLETED` is **never a persistent Atlas definition property**.

| From → to | Proposed edge / status | Interpretation |
|---|---|---|
| `S27.M01 → S23.M02` | `INTERACTS_WITH` | Inspect in-world carvings/bones/Dreamcatchers; inspect prompt must actually fire [C05–C07] |
| `S27.M01 → S28.M02` | `INTERACTS_WITH` | Cigarette card catalog entry ≠ physically mail-eligible collection; **D15** source, REVIEW PENDING [C04] |
| `S27.M02 → S12.M04` | `REQUIRES` **per active hunting-request only** | Intact perfect carcasses for Ms. Hobbs; D04 owns kill technique, not mailing [C10] |
| `S27.M02 → S15.M01` | `INTERACTS_WITH` | Algernon's orchids/plumes/eggs gathered under active stage; finding plant not delivery [C12] |
| `S27.M03 → S14.M01–M04` | `INTERACTS_WITH`, D16 READ ONLY | Fish caught with rod/lure vs posted legendary collection to Gill [C09] |
| `S27.M04 → S29.M01` | `CONTRIBUTES_TO` | Nine grave memorials are a late-access official row, with future spoilers separated [C14] |
| `S18.M01 → S18.M02` | `LEADS_TO` (proposed) | Actual clue/map opens relevant next clue, not a guaranteed location known [C08] |
| `S18.M02 → S18.M03` | `LEADS_TO` | Correct treasure clue progression to **actual cache pickup**, not independent 100% credit |
| `S18.M03 → S27.M05` | `CONTRIBUTES_TO` | Finishing one full chain fulfills Collectibles treasure criterion [C08] |
| `S27.M05 → S17.M03` | `INTERACTS_WITH` | Gold bars/unique objects held or sold; sale is distinct from treasure-chain finish, D06 read-only [C08] |
| `S27.M01/02/03/04/05 → S29.M01` | `CONTRIBUTES_TO` (per named external criterion only) | Goal type maps to game `Total Completion` row; no player completion state |
| `S27.M05 → S26 Explorer` | `INTERACTS_WITH` | Full Explorer challenge may require more maps/treasures than one-chain Collectibles row; D27 future/active ownership [C15] |
| `S27.M02 → D08` | `INTERACTS_WITH` | Chapter-sensitive external obligations override optional route only on observed active gate |

**Hypothetical collection record contract (read-only example, not a player observation):**
```yaml
collection_type: rock_carvings
research_status: RESEARCHED_REVIEW_PENDING
gate: D20.G04
target_count: 10
item_stage: inspected_coordinates  # general possible stage; NOT a stored count
delivery_channel: post_office
recipient: Francis_Sinclair
next_step: await_invitation_then_return
actual_discovered: UNKNOWN
actual_mailed: UNKNOWN
actual_quest_complete: UNKNOWN
```

No property such as `mailed_now=true`, `inventory_cards=12`, `save_confirmed` or `percent_complete` belongs in Atlas records. GameGuide's `L33TW0RLD/rdr2/campaign/` remains sole progress authority.

## 6. Completion goal categories and precise official row boundaries

**Source corroboration:** [GTA Base](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist), [GameFAQs](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion), and [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) independently support the categories. This matrix states a **threshold**, not any player's state.

| `OFFICIAL_100` / Collectibles row | Exact threshold | What is OPTIONAL or belongs elsewhere |
|---|---|---|
| Point of Interest | **1** identified/registered | All journal landmarks, exhaustive POIs, five shacks (separate Miscellaneous) |
| Graves | **9** memorials (later-story access) | Pre-epilogue grave visits (not normally available); spoilers in default T0/T1 |
| Cigarette Card Sets | **1 complete named 12-card set** | Remaining **11** sets and whole 144-card Stranger collection, detailed Compendium |
| Dinosaur Bones | **30 of 30** with mailed records and strand finalization | 22/30 before region gate as “complete” |
| Legendary Fish | **13 required fish** caught and mailed/strand finalized | 14th finale as if required for 13 mail; ordinary 10 fish species Compendium threshold |
| Exotics | **All 5 Algernon requests** complete | Six-th informal description / unactivated plants |
| Rock Carvings | **10 of 10** inscriptions, mailed coordinates, visit to conclude named strand | Unique Old Brass Compass as automatic 100%-blocking item |
| Hunting Requests | **All 5 complete lists** mailed plus appropriate conclusion/actual row readback | **Six** extra squirrel-statue recovery cycles for `It's Art` trophy |
| Treasure Hunter | **1 entire qualifying map-to-cache chain** | **Explorer challenge's** additional treasure requirements; every existing treasure map |
| Dreamcatchers | **20 of 20** examined | Claiming Ancient Arrowhead separately without 20 inspections |

**Cross-system separation:** `Progress > Total Completion > Compendium` thresholds (e.g. 50 animals, 10 regular fish species) belong **D15**. `Player > all nine challenge strands/90 ranks` belongs D27. `Misc > 5 legendary animals` ≠ collectible **13 legendary fish**, and does not substitute for either. All-Gold and Gold Rush belong D24 and are not collection progress. `It's Art` is a trophy, not a source to infer hunting-request Total Completion. [C01–C03,C14–C16]

**Goal tags per claim:** `OFFICIAL_100` for the exact ten Collectibles rows; `ACHIEVEMENT` for Best in the West via all game rows and separate `It's Art`; `OPTIONAL_EXHAUSTIVE` for every card set, all other cache routes, unique rewards; `CONVENIENCE` for partial foraging/preparation; `IMMERSION` for discovering environmental sites. Not `ALL_GOLD`. Each may coexist without implying one is necessary for the other.

## 7. Three common errors and three organic spoiler-light Chapter 2 examples

### Error A — "A journal mark means the entire collection or 100% is done"

**Correction:** bones/carvings/dreamcatchers use `inspect` but **not the same delivery contract**. Mailing location coordinates is separate from inspection for bones/carvings; Dreamcatchers don't require mailing. One picked-up treasure map is not a complete map chain. [C05–C08]

**Chapter 2 example 1 — One local fossil reconnaissance.** **If** the named `A Test of Faith` offer was actually encountered near Heartlands, on an ordinary local ride inspect a visible fossil **without relying on a guide-spawn guarantee**; check journal/map/log mark and whether a **location letter** is offered at Post Office. If mailing isn't enabled, record only *observed fossil*, not `mailed`. **Stop after one discovery**, return to free roam/Story; don't demand all 30 or New Austin. No actual player discovery recorded.

### Error B — "I have enough items, therefore my collection was mailed"

**Correction:** a full physical named **12-card set** and all exact whole carcasses in an active Ms. Hobbs list require separate post prompts; physical amounts and eligible recipients differ. A physically present plume stack does not count as completed **Algernon list** before accepting and personally handing in. [C04,C10,C12]

**Chapter 2 example 2 — A single card without a card grind.** **If** a card is actually found, open its *named* `Cigarette Cards` Compendium group and Satchel entry. Verify if `Smoking and Other Hobbies` has visibly started. Keep any only copy and learn **found vs cataloged vs held vs set complete vs posted**. Do **not** purchase Premium packs or stamp an official 100% tick by assumption. One learned card is a sufficient outing.

### Error C — "It's in the journal, so the treasure or recipient reward is finished"

**Correction:** a map shows *clue*, not *treasure claimed*; a sent bone letter is not an invitation/final scene; an arrowhead hidden after dreamcatchers is separate from inspecting 20 trees. [C05–C08]

**Chapter 2 example 3 — An optional first clue.** **If** a visibly available `All That Glitters` encounter/Jack Hall map offer appears in free roam, decide whether to accept/buy it only after seeing the offer and price. Inspect the map and compare a scenic landmark; stop after **reading the clue** or finding the next map. No claim of gold-bar acquisition, completion credit, money change, save or theft. Keep geographical solution details behind opt-in.

**General play priority:** zero-compulsion. If GameGuide confirms an active time-sensitive story/companion window, do that first; collection activities normally can wait. All three examples are *conditional planning*, not fabricated personal outcomes.

## 8. Claim ledger, source register and verification class

**Checked/accessed:** **2026-10-17** (applies to every entry below). Publication date given where visible, otherwise “date unverified.” Class `PRIMARY` would mean actual Rockstar official game/help source; no Rockstar public machine-readable 100% collection ledger was located for these exact quest-stage details. The matrix instead uses **independently corroborated specialist game guides**, ranked HIGH/MEDIUM by scope. `Wave 1/2 REVIEW PENDING` is internal cross-reference only, not an independent source or an adoption.

| Claim | Exact verifiable fact, bounded to Story Mode | Source URL, publisher/date, class | Confidence / status |
|---|---|---|---|
| **C01** | Ten official Collectibles rows including one card set, 30 bones, 13 fish, 5 exotics, 10 carvings, 5 requests, 1 treasure, 20 dreamcatchers | [GTA Base 100%](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist) (date unverified, independent); [GameFAQs Total Completion](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion) (2019, independent); [Gamer Guides 100%](https://www.gamerguides.com/red-dead-redemption-2/guide/extras/trophy-guide/100-completion-checklist) (2018, independent) | **CORROBORATED HIGH** threshold scope |
| **C02** | Pause → Progress → Total Completion provides individual row/checkmark; 5 top-level groups | [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) (2018-10-25); [GTA Base 100%](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist) | **CORROBORATED HIGH** goal definition, not live status |
| **C03** | Cigarette catalog has 12×12 =144 but one **completed named set of 12** suffices for official 100% row; whole 144 stranger quest differs | [PowerPyx all cards](https://www.powerpyx.com/red-dead-redemption-2-all-cigarette-card-locations/) (2018-10-26); [GameFAQs Total Completion](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion) (2019); [Red Dead Wiki Cigarette Cards](https://reddead.fandom.com/wiki/Cigarette_Cards) (community, ancillary) | **CORROBORATED HIGH** (PowerPyx summary contradictory; §9) |
| **C04** | Phineas after `Who Is Not Without Sin`; Premium packs grant random cards; complete sets post to Phineas | [GTA Base Smoking and Other Hobbies](https://www.gtabase.com/side-missions/red-dead-redemption-2/strangers/smoking-and-other-hobbies-cigarette-cards-collectible) (date unverified); [PowerPyx card guide](https://www.powerpyx.com/red-dead-redemption-2-all-cigarette-card-locations/) (2018-10-26) | **CORROBORATED HIGH**; exact “mail now” prompt case-specific |
| **C05** | Chapter 2 `A Test of Faith` Deborah; 30 bone sites, coordinates mailed; 8 in New Austin, final reply/visit | [PowerPyx A Test of Faith](https://www.powerpyx.com/red-dead-redemption-2-a-test-of-faith-stranger-mission-walkthrough/) (2018-10-27); [RDR2.org Dinosaur Bones](https://www.rdr2.org/guides/a-test-of-faith-stranger-mission-dinosaur-bones-locations-guide/) (2018, updated 2023-01-09) | **CORROBORATED HIGH** ordinary regional gate and post/return |
| **C06** | Geology for Beginners Francis; 10 carvings, mail coordinates, invitation after delay, return; optional missable Old Brass Compass | [PowerPyx Geology](https://www.powerpyx.com/red-dead-redemption-2-geology-for-beginners-stranger-mission-walkthrough/) (2018-10-27); [Guides4Gamers](https://guides4gamers.com/red-dead-redemption-2/quests/geology-for-beginners/) (2019); [GTA Base Geology](https://www.gtabase.com/red-dead-redemption-2/strangers/geology-for-beginners-rock-carvings) (date unverified, conflicting gate) | **HIGH** locations/hand-in; **DISPUTED** Chapter 2 vs 3 gate |
| **C07** | 20 inspectable Dreamcatcher trees, no mailing, optional Ancient Arrowhead after all 20 | [PowerPyx Dreamcatchers](https://www.powerpyx.com/red-dead-redemption-2-all-dreamcatchers-locations/) (2018-10-26); [GameFAQs Collectables](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/collectables) (2019) | **CORROBORATED HIGH** |
| **C08** | One completed map-to-cache chain for Treasure Hunter Collectibles row; multiple/bonus chains and Explorer criterion separate | [GTA Base 100%](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist); [PowerPyx Treasure Map solutions](https://www.powerpyx.com/red-dead-redemption-2-treasure-map-locations-solutions/) (2018-10-28); [GameFAQs Total Completion](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion) | **CORROBORATED HIGH** one-chain row; challenge interactions **MEDIUM**, D27 |
| **C09** | Jeremy Gill requires **13 mailed legendary fish**; 14 locations/extra finale; fish transport distinction | [PowerPyx Legendary Fish](https://www.powerpyx.com/red-dead-redemption-2-all-legendary-fish-locations/) (2018-10-27); [GamesRadar 100%](https://www.gamesradar.com/red-dead-redemption-2-100-completion-guide/) (2020) | **CORROBORATED HIGH** delivery; tackle mechanics outside scope, D16 |
| **C10** | 5 sequential Hobbs lists, all perfect **unskinned carcasses**, mail full batch; list 5 epilogue gated | [PowerPyx Hunting Requests](https://www.powerpyx.com/red-dead-redemption-2-all-hunting-request-locations/) (2018-10-29); [RDR2.org Hunting](https://www.rdr2.org/guides/hunting-request-guide/) (2019, updated 2023-01-09); [Gamer Guides Hunting Requests](https://www.gamerguides.com/red-dead-redemption-2/guide/side-missions/hunting-requests) (2018) | **CORROBORATED HIGH** |
| **C11** | Exact 2+3+4+5+5 animal contract and after-batch mail/reply; 3★/Trinket/carcass quest bugs anecdotal | [PowerPyx Hunting Requests](https://www.powerpyx.com/red-dead-redemption-2-all-hunting-request-locations/); [Red Dead Wiki A Better World](https://reddead.fandom.com/wiki/A_Better_World%2C_A_New_Friend) (community) | **HIGH** list species, **DISPUTED** 2★/bugs and final tick |
| **C12** | `Duchesses and Other Animals` after `The Gilded Cage` Chapter 4; **five** stages **direct** Algernon hand-ins | [PowerPyx Exotics](https://www.powerpyx.com/red-dead-redemption-2-all-exotics-locations/) (2018-10-31); [PowerPyx Duchesses walkthrough](https://www.powerpyx.com/red-dead-redemption-2-duchesses-and-other-animals-walkthrough/) (2018-10-31); [GTA Base Exotics](https://www.gtabase.com/red-dead-redemption-2/strangers/duchesses-and-other-animals-exotics) | **CORROBORATED HIGH** |
| **C13** | Exact five Algernon lists, 182-item derived total (92 orchids, 65 plumes, 25 eggs), sequential hand-ins | [GTA Base Exotics](https://www.gtabase.com/red-dead-redemption-2/strangers/duchesses-and-other-animals-exotics) (date unverified); [PowerPyx Exotics](https://www.powerpyx.com/red-dead-redemption-2-all-exotics-locations/) (2018-10-31) | **CORROBORATED HIGH** values; orchid spawn cap **UNKNOWN** |
| **C14** | 9 late-story graves and one POI in Collectibles; neither normal Chapter 2 exhaustive route | [Gamer Guides 100%](https://www.gamerguides.com/red-dead-redemption-2/guide/extras/trophy-guide/100-completion-checklist); [GameFAQs Total Completion](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion) | **CORROBORATED HIGH**, spoilers held T2/T3 |
| **C15** | Player all-90 challenges are additional 100% criterion, not automatically completed by one Treasure Hunter chain | [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) (2018-10-25); [PowerPyx Treasure Map](https://www.powerpyx.com/red-dead-redemption-2-treasure-map-locations-solutions/) (2018-10-28) | **CORROBORATED HIGH** separation; exact Explorer progress D27 |
| **C16** | `It's Art` statue recovery sequence achievement differs from Hunting Requests 100% checklist; timing of row tick contested | [PowerPyx Hunting Requests](https://www.powerpyx.com/red-dead-redemption-2-all-hunting-request-locations/) (guide and author replies 2018); [Red Dead Wiki A Better World](https://reddead.fandom.com/wiki/A_Better_World%2C_A_New_Friend) | **HIGH** distinction; **DISPUTED** exact row timing |
| **C17** | Historical report of future-carcass hoarding bug, horse-carcass save/reload loss, and inaccurate `advanced Dead Eye required` wording | [PowerPyx Hunting Requests](https://www.powerpyx.com/red-dead-redemption-2-all-hunting-request-locations/) (2018, guide & comments); [D04 review-pending hunting](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d04_hunting_transport_v0_1.md) | **DISPUTED anecdotal**; avoid hard gates/no guaranteed saves |

**Evidence quality limits:** These internet materials are *guidance on general mechanics*, not a direct capture of the user's game. Claim-specific URL and access dates establish provenance; they don't magically prove every reward was posted on the user's build. Historical original game and patch/re-release denominators may differ. For precise delivery state, prefer `Total Completion`, `active quest/collector list`, `Post Office Send Mail` and actual letter/final scene, as observed by the player. D15 owns that evidence hierarchy; D20 supplies type-specific hand-in predicates.

## 9. Contradictions, exceptions, and reproducible future tests (not performed)

| Conflict / suspected exception | Claim comparison | Safe fallback and what a legitimate future test would verify |
|---|---|---|
| **144 cards vs 1 set** | PowerPyx **100% summary** says “144 Cigarette Cards,” its own dedicated card guide and GTA Base/GameFAQs say **one 12-card set** for official 100%. | **Resolved criterion: one named completed 12-card set**. Broader 144 belongs Stranger/personal exhaustive; observe in-game card row after mailing. [C01,C03] |
| **All exotics “six requests”** | Some GameFAQs prose calls “six exotic requests,” but PowerPyx and GTA Base document **five item lists**, with the encounter/mission-start potentially counted as another part. | **Five lists** is source-specific reliable unit; inspect actual Exotic Collector's List stages. Do not invent sixth ingredient list. [C12,C13] |
| **Geology Chapter 2 vs “after completing Chapter 2”** | PowerPyx Geology says available Chapter 2; GTA Base landing page says after Chapter 2. | **DISPUTED precise earliest gate.** Show named Stranger **if actually observed**, not a hard chapter-3 gate; verify on-screen map/letter. [C06] |
| **Hunting Requests all mailing done vs row / statue achievement** | PowerPyx author says statue search is trophy-only, some guide commenters claim 100% checkmark lagged until statue placement/recovery. | All five batches remain **nonnegotiable**; verify actual Collectibles row and expected final meeting, avoid claiming 100% at “mailed request #5.” Extra six theft recoveries **not automatically required** for game 100%. [C16] |
| **Perfect carcasses from 1★/2★** | PowerPyx claims possible, RDR2.org cautions low probability, D04 Wave 1 says Buck Trinket rescue uncertain. | **No guaranteed conversion**: target naturally **3★**, correct species weapon, one clean shot, verify **item reads Perfect**. D04 owns quality, not D20. [C10,C11,C17] |
| **Dead Eye Ch6 necessary for early requests** | PowerPyx recommends waiting due to vital highlight, but own comments and ability guides confirm early possible. | **Not a prerequisite** for first four; player can postpone on preference, not a mechanical hard lock. Fifth is truly late-gated. [C10,C17] |
| **Full-chain treasure row vs 3 maps/challenge** | PowerPyx Treasure guide loosely says 3 hunts for 100% Explorer, official Collectibles row says one complete chain. | Track two different goal rows: **one Collectibles chain**, plus separate **Player Explorer active-rank challenges**. D27 owns challenge mechanic. [C08,C15] |
| **13 vs 14 legendary fish** | PowerPyx says 14 locations but first **13** for 100% and mail task, extra finale unique. | Only **13 required mailed** for Collectibles; 14th is NOT mandatory additional delivery; D16 for actual fish handling. [C09] |
| **Exotic orchids stop at N-1 early** | Some community/newer guides report spawn cap until active list; PowerPyx says pre-collect next stages is useful. | **UNRESOLVED** precise spawn eligibility; do not promise all rare orchids obtainable early. Check active list and returned hand-in count rather than forcing endless pre-gate foraging. [C12,C13] |
| **Coordinates sent one by one vs filled batch** | Fossils and carvings support mailing individual **locations**; Hobbs accepts **only complete active group** of intact carcasses. | Use **family-specific post UI**; if Send Mail absent, verify category, current quest and required objects; never treat individual animal shot as a mailed request. [C05,C06,C10] |
| **Progress not incrementing / missing post item** | Old comment threads include alleged bugs; source does not establish modern game state. | Capture before/after screenshot, exact platform/patch, active request and mail options. Do not claim corrupted save, advise risky reset, or assert a delivery succeeded. [C17] |

**Priority controlled tests requiring player-authorized in-game observation** (NOT conducted by this researcher): exact point when one mailed set ticks card row; fossil/carving mail action after inspecting before Stranger initiation; fifth Hobbs row tick (mailed / invite / statuette vs trophy); time for mail rewards by family; anomalous orchid spawn caps by current Exotic list; treasure cache pickup vs Explorer rank; horse-carried large legendary fish lost/recatch behavior (D16). Current answers deliberately label ambiguity rather than fabricate an experiment.

## 10. Read-only GameGuide / Free Roam / Companion handoff

**GameGuide (actual player authority):** Before saying “you have mailed X,” “quest is complete,” “100% achieved,” “saved,” or “you have the rod,” check **user's own evidence** and the original [`L33TW0RLD/rdr2/campaign/`](https://github.com/L33TW0RLD/rdr2/tree/main/campaign) workflow. Inspect actual **`Progress > Total Completion > Collectibles`** checkbox, named Stranger **task log**, exact current **Satchel/horse objects**, actual Post Office outgoing mail screen, recipient acknowledgment/inbox/final return as appropriate. Never award achievement from a planning checklist or general guide. Mission Gold/Stranger replay stays with GameGuide/D24/D18, not D20.

**Free Roam (optional activity proposer):** Identify the player's chosen goal: one pleasant discovery, official 100%, personal whole-world collecting, or trophy/exhaustive. Prefer a *single local conditional opportunity* (one Dreamcatcher, a first map, a bone inspection) and get back to the adventure. Never force all 30 bones, 13 fish or all 144 cards in Chapter 2, presume active quests/lures/posters, or reveal later-story graves. D08's **specific active chapter windows** outrank a collectible outing.

**Living Adventure Companion/dashboard:** Surface collection state as separate reversible labels: `DISCOVERED` / `INSPECTED` / `HELD` / `SET_COMPLETE` / `MAILED` / `ACKNOWLEDGED` / `CHAIN_COMPLETE` / `OFFICIAL_ROW_VERIFIED`. These are **semantic placeholders** for UI—not a live player data structure; no asserted player flags. Present **three surfaces separately**: current in-game criteria, quest-specific delivery action, and optional exhaustive interest. On uncertain progress offer a *check instruction* instead of inferred credit. Default T0/T1 privacy of future storyline.

**Non-overlap enforcement:** [D15 (read-only)](d15_compendium_trackers_v0_1.md) owns definitions and tracker evidence; D16 owns fishing control/rod/special tackle/catch techniques and actual fish-specific exceptions, currently active on separate branch with initial checkpoint only when checked; D04 owns perfect-pelt/clean kill; D06 owns inventory/capacity/sale preservation; D08 owns optional Chapter 2 story windows; D18 owns Stranger strand general taxonomy; D27 owns challenge progress. This D20 file **owns the multi-family post, hand-in and 100%-eligible collection framework** only. No other dossier or shared indexes edited.

## 11. Next bounded questions and explicit owner-review gate

**Owner/coordinator review requested:**

1. Compare the **ten official Collectibles threshold rows** with an actual in-game `Total Completion` menu on an eligible Story Mode edition; specifically settle the “144 vs one set,” all-five Exotics lists, and exactly when posted hunting requests tick.
2. Verify and approve **family-specific delivery stages** as read-only D20 consumer knowledge, including skull/carving coordinate letters, two forms of mail batching, direct Algernon delivery, and Dreamcatcher inspection-only.
3. Independently recheck the **Geology Chapter 2 vs Chapter 3** source discrepancy; classify the optional Old Brass Compass warning separately from official 100%.
4. Review **treasure one chain vs Explorer player challenges** with D27 specialist, **legendary fish mailing** with D16 after its dossier is delivered, and **animal-quality** with D04 without borrowing unratified data as authority.
5. Confirm **later access** is T2/T3-hidden by default; graves and New Austin items cannot be advertised as presently available in Chapter 2.
6. Confirm **source ledger C01–C17** confidence and review-pending maturity; no current save/achievement/tracker evidence was supplied or invented.

**Unassigned future tests:** A first-party UI-snapshot crosswalk for one current game version, item-specific mailing/inbox timing, orchid spawn cap behavior, anomalous carcass-batch loss cases and edition-specific treasure access. These are **research leads, not permission for this agent to run extra tasks, alter GameGuide or claim gameplay progress**.

**Closure:** Commit this D20 dossier, update ONLY assigned checkpoint/handoff, verify exact three-path branch diff/readback and terminal SHA, stop at `DELIVERED_REVIEW_PENDING`. No merge, rebase, reset, force push, registry/index changes, original `rdr2` writes or autonomous ratification.
