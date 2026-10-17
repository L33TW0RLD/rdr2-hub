# D04 — Hunting, Clean Kills & Material Transport (Story Mode)

> **RESEARCHED — REVIEW PENDING.** Research is a specialist deliverable, **not ADOPTED gameplay authority** and not evidence of the player's progress.

| Field | Value |
|---|---|
| `record_id` | `ATLAS.D04` · version `0.1` · kind `mechanic` |
| Assignment / lease | `atlas-hunting-009` · Issue [#7](https://github.com/L33TW0RLD/rdr2-hub/issues/7) · `agent/atlas-hunting-009` |
| Research checked | **2026-10-17** (access date, not a game patch/version) |
| Applicability | **Red Dead Redemption 2 single-player Story Mode**; baseline console PS4/Xbox One and PC Story Mode mechanics where corroborated. Exact input prompts vary by controller/platform; no Online role, Naturalist, hunting wagon, mods or random-inventory claims apply. |
| Visibility | **T0/T1 default**, Chapter 2-friendly; future-story details deliberately omitted |
| Owning provisional leaf IDs | **S12.M01, S12.M02, S12.M03, S12.M04, S12.M05** |
| Read-only adjacent leaves | **S06.M04** horse cargo; **S04.M01** weapon classes; **S10.M03** Pearson donations; **S13.M02–M04** legendary/Trapper/Fence; **S17.M01/M03** inventory disposition; **S16.M03** ammo craft; **S28.M01** Compendium; **S27.M02** requests; **S26.M02** challenges |
| Schema authority | IDs and typed edges follow Hub's proposed, **unratified** taxonomy/record contract. No new canonical schema, unlock ledger or player field added. |
| Content owner / review | Specialist 009 researches; coordinator/owner and GameGuide must review for adoption; Free Roam and Mission Control consume read-only claims. |
| Actual player state | **UNKNOWN**: owned weapons, ammo, horse access, chapter gates, crafting tools, recipes, trinket, hunted animals, requested carcasses, rewards and saves. Nothing in this file establishes them. |

## Field answer first — 30-second decision card (T0)

**3★ living target → Study / Show Info → correct species-specific weapon + suitable ammo → one clean fatal shot → verify corpse/pelt quality → choose whole carcass or skin → deliver to the correct recipient.** [H01][H02][H03][H04][H05]

This is a **reliable procedure, not a guarantee**: animal movement, range, shot placement, weapon selection, accidental damage, cargo loss, and uncertain trinket behavior can affect the outcome. **The animal's own in-game Show Info/Compendium recommendation outranks a generic species table.** [H02][H03]

| If you need… | Safe move | Verify onscreen |
|---|---|---|
| A *perfect pelt/skin* | Target an initially **★★★** ordinary animal, check Show Info, single clean lethal shot; **skin only once the destination is clear** | After kill, examine remaining quality; after skinning, inspect exact pelt quality/material in satchel/horse inventory |
| A *perfect intact carcass* | Meet clean-kill conditions, **do not skin**, pick up or stow intact | Check quality and the request/recipe's exact wording; do not confuse a pelt with a carcass |
| Food / camp provisions | Hunt legally/safely, process or donate according to actual menu | Meat/carcass appears in the expected menu; do not infer reserved crafting stock |
| A Pearson craft | Check his actual item recipe/gates and donation label | `Donate for Crafting` / material requirement shows credit; `Donate for Funds/Provisions` is not interchangeable |
| A Trapper craft | Inspect Trapper requirements; sell the qualifying material **to the Trapper**, then buy/craft the item when available | Trapper recipe requirement decreases/satisfies; material sold to Pearson is not shared |
| A hunting request | Read active request; retain all specified **unskinned perfect carcasses** and use the stated delivery mechanism | Request checklist/hand-in success, not just a successful shot |
| A legendary material | Treat under a different exception system; transport normally if feasible | Trapper's legendary material recipe; do not use ordinary three-star assumptions |

**Safety defaults:** if the animal is 1★/2★, do not promise perfect material. If a reward needs a whole body, preserve it whole. If a recipient's crafting flag is unclear, **do not spend the material yet**. If a threat/mission constraint makes the kill unsafe, skip the hunt. [H01][H04][H06]

---

## 1. S12.M01 — Observe, study and classify (T0)

### Action and feedback

1. Find an animal from a safe viewing distance; use **binoculars or a suitably aimed weapon** and the context-specific **Study** prompt when available. The prompt layout depends on platform and whether that species has been studied. [H01][H02]
2. Read **species and quality stars** (★ Poor, ★★ Good, ★★★ Pristine) and inspect its **Show Info / Animal Compendium** entry for a recommended clean-kill weapon. Check the live screen rather than making a universal assertion from its apparent size. [H01][H02]
3. Separate the **living animal's initial rating** from the **post-kill carcass rating** and eventual **skinned material quality**. These are three observations, not one permanent value. [H03][H11]
4. A successful **Study**, **Track**, **Kill** or **Skin** should be treated as its own Compendium/goal verb. Do not equate discovering a species with completing all its records or collecting crafting material. [H10]

**Gate:** wildlife observation is usable where the gameplay prompt appears; a particular animal/species/location is **not guaranteed**. No Story Mode stable, Legendary map, Pearson tools, Varmint Rifle, or advanced Dead Eye skill is assumed merely from being in Chapter 2.

**Consequences:** three-star **starting quality** is the dependable prerequisite for a perfect ordinary pelt, but not sufficient by itself. Poor/good wildlife is still suitable for food, sale, photography/Compendium learning or immersive encounters; decline it only when perfect material is the explicit objective. [H02][H03]

## 2. S12.M02 — Find, approach and track (T0)

| Mechanic | Player action / feedback | Limit or risk |
|---|---|---|
| Binocular search | Scan without disturbing the animal; study at range | Scope/bino quality ratings only after observing correctly; an unseen species is not owed a spawn |
| Eagle Eye track | Activate Eagle Eye using the current input hint and choose the highlighted trail's **Track** action | Trail visualization needs refresh; losing trail ≠ vanished animal and does not prove the quality of an offscreen specimen |
| Wind/scent | Note wind direction, crouch, approach from cover; use **Cover Scent Lotion** when accessible | Reduces detection pressure; not invisibility and not a quality multiplier |
| Herbivore/predator bait | Place appropriate bait in habitat, move to cover, wait; inspect attracted animal before shooting | Attraction is contextual. **Do not advertise any guaranteed spawn, specific species, 3★ rating or fixed waiting time** |
| Call/positioning | If the game's aim/target prompt offers a call, use it to improve the angle, then aim deliberately | Prompt and reaction vary; the animal may flee |
| Threat response | Recognize predators/terrain/horse vulnerability and abandon a perfect-pelt attempt when threatened | Safety and lawful/high-Honor play outrank material collection |

**Evidence:** Rockstar's wildlife description recognizes tracking, wind, tool and shot placement; independent guides describe Eagle Eye/trail and scent. RDR2.org explicitly rejects bait as a remote animal-spawn generator. A potent bait's effective radius and exact response times have **not** been established as universal Story Mode values. [H01][H07][H08]

**Spoiler-safe observation priority:** already-visible species → correct tool → safe approach → shot. Do not send the player to a purported farm/spawn point without regional and chapter checks. If a trail is lost, re-scan the habitat rather than promising a repeatable scripted spawn.

## 3. S12.M03 — Clean kills, weapons and damaged outcomes (T0)

### 3.1 The four gates

| Gate | Why | Failure / safe fallback |
|---|---|---|
| **Q — natural quality** | Ordinary 3★ is the reliable perfect source | A 1★/2★ animal: observe/leave if perfect is required; see disputed Buck Trinket exception below |
| **W — proper weapon class** | Overpowered/underpowered hits can spoil quality | Study → Show Info; do not use a revolver/shotgun/explosive as a universal shortcut |
| **A — compatible ammo and effective range** | Wrong arrow/cartridge/weak hit can wound rather than kill cleanly | Inspect weapon wheel and species advice; move closer or change ammo/tool |
| **K — clean fatal result** | One aimed head/vital-area shot is the standard baseline | Wait for clear angle; **one shot is a tactic, not proof of a perfect result**; inspect after the kill |

[H01][H02][H03]

### 3.2 Pocket weapon menu, not an exhaustive species database

| Observed ordinary wildlife | Start with | Evidence/exception |
|---|---|---|
| Squirrel, chipmunk, rat; many small songbirds | **Bow + Small Game Arrows** | Guide consensus for very small game; check species' own Show Info. Unskinned carcass might be the real objective. |
| Rabbit, raccoon, badger, skunk, beaver, many bigger birds | **Varmint Rifle** | Several publishers group these as small; exceptions and birds vary. A regular bow arrow is not a safe default for rabbits. |
| Fox, coyote, ordinary pig | **Repeater** with eligible rounds or appropriate bow arrow | This is a broad middle class; check exact species for clean-kill recommendation. |
| Deer, buck, pronghorn, wolves and other large wildlife | **Suitable rifle** or species-approved bow/arrow | A deer is not a rabbit; use a proper fatal head/vital shot. |
| Elk, moose, bison, large bear | **Rifle/long-scoped rifle** or explicitly species-approved strong arrow | Large-game equipment recommendations differ; do not declare one named rifle mandatory without Show Info. |

[H02][H03][H09] The grouping is **general navigation**, not a claimed verified per-species matrix. The legacy `species_weapon_reference.md` is also **REVIEW PENDING**, and the exact weapon prompt takes priority over either document.

**Important distinctions:**
- **Weapon and ammunition are separable inputs.** Ordinary bullets/arrows are frequently adequate, but Small Game / Improved / Poison variants serve different species. Incendiary or explosive ammunition should not be used when normal perfect hide is the goal. Availability of any ammunition recipe is **UNKNOWN** for the player. [H02][H03]
- **Death versus injury matters.** A clean single lethal head/vital strike is the reliable default. A bleeding animal, repeated follow-up shot, or damaged carcass should not be certified perfect until the resulting item quality is observed. [H02][H03]
- **Dead Eye is an aiming aid, not a generic Chapter 2 hard gate for perfect hunting.** Some later ability stages highlight critical organs, but early precise headshots can work. Guide claims about exact chapter and mission for organ highlights contradict each other; D04 does **not** encode an unlock requirement. [H02][H04][H09]
- **Weapon maintenance:** cleaning improves weapon performance; a separate, direct hidden `dirty gun lowers pelt grade` formula is **UNPROVEN** here. Treat condition as a practical shooting issue, not a verified independent pelt-quality penalty. [H14]
- **Lasso/knife** methods appear in guides for some larger prey, but without species-specific, contextual confirmation they must not be treated as an automatic perfect-carcase trick. [H09]

### 3.3 Outcome evidence before routing

- If dead **3★**, classify the carcass as a **candidate** perfect item; select whether whole or skin depending on the goal.
- If the carcass is **below 3★**, avoid promising a perfect output on skinning. Only a verified item readback may establish an exceptional outcome.
- If the animal escaped/wounded, **outcome unknown**, not a perfect result. Do not infer a body, pelt or compendium kill credit.
- If a skinning animation played, **do not infer** a specific named material, quantity, recipe credit or camp donation; inspect inventory and recipient menu.

## 4. S12.M04 — Whole carcass vs skinning (T0/T1)

**This is an irreversible decision for the particular hunted animal.** The output must match the objective type. [H04][H06]

```text
After confirming species, quality and kill:
  Is a live objective / Pearson recipe asking for an INTACT, WHOLE carcass?
    YES -> DO NOT SKIN. Pick up or stow unskinned.
           Confirm perfect carcass and deliver to specified recipient.
    NO  -> Does recipe explicitly require PELT/SKIN or another skinned part?
              YES -> skin if safe, verify exact grade in satchel/horse cargo,
                     route to chosen crafter.
              NO  -> for food, cash, Compendium or exploration, choose
                     skin / carry whole / leave intentionally.
Never substitute a perfect pelt for a requirement saying whole carcass.
```

**Distinct outputs:** a skinned animal may yield pelt/skin, meat, feathers, antlers or other parts appropriate to species; the **quantity and grade** are item-dependent, not inferred here. A **whole unskinned** small carcass may go into Arthur's bag, while other carcasses/pelts require horse cargo and prompt-specific placement. Consult inventory/horse HUD each time; do not assume all bodies use the same slot. [H01][H05][H06]

**Hunting requests:** external completion request chains can demand perfect **unskinned carcasses** and specified postal delivery. The exact request/poster/recipient and unlock status are separate from D04 hunting. One completed perfect-pelt hunt is **not** automatically a Hunting Request tick. [H04][H10]

**Pearson edge:** some Pearson crafting recipes may call for a **whole perfect small carcass** rather than a skinned pelt. D03 owns all exact ingredient matrix and item prerequisites. Look at Pearson's displayed recipe instead of generalizing `Pearson always wants pelts`. [H06][H12]

## 5. S12.M05 — Carrying, preservation and material destinations (T0/T1)

### 5.1 Transport and decay

1. **Identify the object**: personal satchel item, folded ordinary pelt, large rolled/laid-over hide, small carcass hung at horse side, larger body behind saddle. Use the offered **Pick Up**, **Skin**, **Stow**, **Remove** and vendor prompts rather than a single assumed inventory operation. [H01][H05]
2. **Horse storage is finite and object-class-specific**. Several guides describe roughly one full-sized back carcass and small side-hung carcasses, with multiple ordinary stacked pelts; **do not generalize this into a precise universal numerical cargo allowance**. In-game failure to stow and visible current load decide the trip. [H05][H13]
3. **Unprocessed carcasses can degrade/rot over time** and attract scavengers. Bring a time-sensitive whole carcass to the destination promptly; no tested universal countdown, fixed number of in-game hours, exact value-loss schedule, or guarantee against interruption is in this dossier. [H01][H05]
4. **Avoid risky retention**: long detours, hostile ambushes, horse loss, death/reload, dropping an item or moving between modes may jeopardize unbanked cargo; the specific save/restore exception is not established here. Prefer delivering prized materials in manageable outings. [H05][H13]
5. **Skinned pelts vs fresh whole carcasses:** the reliable documented decay warning is strongest for carcasses. Sources vary in casually saying pelts also `decay`; do not claim that every correctly stored pelt follows the same decomposition timer as a whole carcass. Inspect item quality and delivery availability, not a guessed preservation clock. [H01][H05][H13]

### 5.2 Recipient / consumption pathways

```text
Observe wildlife (S12.M01–M02)
      ↓  clean kill (S12.M03)
Choose whole vs skin (S12.M04)
      ├─ intact perfect body ──────> specified Hunting Request / Pearson recipe
      ├─ perfect pelt/skin/parts ──> Pearson crafting donation [S10, D03]
      │                          OR Trapper sale/recipe [S13]
      ├─ meat and provisions ─────> cook personally [S16], Pearson camp food [S08]
      ├─ surplus ordinary loot ───> Butcher / eligible shop cash [S17]
      ├─ legendary parts ─────────> Trapper / relevant Fence recipes [S13]
      └─ catalog/goal observation ─> Compendium / criterion evidence [S28/S29]
                                 (not proof of completed goal)
```

| Route | Input & action | Material credit and warning |
|---|---|---|
| **Pearson — craft** | Donate exact eligible material for a displayed satchel/camp item | `Donate for Crafting` is not `Donate for Provisions` or `Funds`; verify requirement. D03 owns tools/recipes/gates. |
| **Pearson — camp food** | Deliver compatible carcass/meat to gang provisions | Does not automatically satisfy a **perfect pelt crafting** requirement; personal satchel not a substitute for recipient hand-in. |
| **Trapper** | Sell eligible pelts/skins/parts to him for his own stored crafting requirements; subsequently select/purchase crafted item | Trapper and Pearson do **not share ordinary stock**; sale does not mean garment automatically bought. Recipes often need further materials and cash. |
| **Butcher / ordinary sale** | Sell surplus where accepted | Financial sale only; **not** a reservation for Pearson/Trapper crafting. |
| **Hunting Request** | Retain exact perfect unskinned carcasses and mail/turn in as stated | No pelt substitution; specific request gate can be unknown; verify checklist/hand-in. |
| **Fence** | For eligible distinct trinket/talisman components after normal source/gate checks | Fence is not a generic pelt bank; no trinket is presumed acquired. |
| **Personal cooking/crafting** | Use skinned meat and accessible fire/recipe | Consumes inventory; six recipe **types** in official 100% have distinct criteria. |

[H06][H10][H12][H15] **Recipient-first triage** is a recommendation, not game-directed mandatory priority: select a desired upgrade before handing over an uncommon perfect hide. Nothing in the text claims a particular item is in the player's bag or stored with Pearson.

## 6. Exceptional branches: legendary animals & Buck Antler Trinket (T1; no locations or plot)

### Legendary wildlife — different resource system

- Legendary wildlife is a different `S13` family, not ordinary 1–3★ perfection farming; do not apply the normal perfect-pelt checklist as an absolute rule for legendary drops. [H09][H16]
- **Official Rockstar Support:** if a killed legendary animal cannot be skinned or its pelt/carcass is lost **before reaching the Trapper**, the materials appear in the Trapper's inventory **after a short delay**. This is a **narrow crafting-material recovery rule**, not a general ordinary-pelt insurance policy. The support text does **not confirm retaining sale proceeds**, so never promise cash. [H16]
- Normal recommendation: collect/deliver a legendary material properly when possible; do not intentionally discard it or infer that all related Fence/Trapper recipes are already available. D17/S13 owns precise reward recipes, gates, spawn/encounter conditions and recoverability extensions.

### Buck Antler Trinket — probability unresolved

- An in-game-style effect description, repeated in secondary sources, is **`higher quality skinned animal parts`**. It is a **conditional equipment effect**, not a universal quality guarantee. [H11]
- **Competing statements:** PowerPyx's general perfect-pelt guide says lower-star spawns cannot yield perfect pelts, while its Hunting Requests guide says lower-star carcasses sometimes can be perfect, particularly with the Trinket. The community/wiki explanation instead describes a chance to **recover degraded pelt grade only up to the animal's natural starting grade**; anecdotes contradict that. No authoritative, tested probability or full rule has been found. [H02][H04][H11]
- **Resolution for player guidance:** do not promise `2★→3★`, a fixed percentage, increased 3★ spawn rate, or automatic salvage of a badly shot 3★ animal. Prefer naturally **3★** wildlife and correct clean kills; only an actual *post-skin item label* proves an exceptional perfect output.
- **No implicit ownership/gate:** Legendary Buck, usable Fence, required part, and purchased Trinket are **all UNKNOWN** for the player. D17/S13 owns that acquisition chain.

## 7. General gates, impacts and dependencies

| Gate | Rule requirement | Gate status | Player-state status / safe check |
|---|---|---|---|
| `D04.G01` ordinary perfect candidate | 3★ living animal + recommended weapon/ammo + clean fatal shot | **CORROBORATED**, normal rule; outcome not guaranteed | **UNKNOWN**; inspect living animal, Show Info and resulting quality |
| `D04.G02` target species opportunity | Locate appropriate wildlife in accessible habitat/time | Contextual; **no deterministic spawn guarantee** | **UNKNOWN**; use current field sighting/track |
| `D04.G03` specific small-game ammo | Have suitable bow/ammo/recipe where relevant | Conditional; recipe ownership not assumed | **UNKNOWN**; inspect wheel and crafting menu |
| `D04.G04` Pearson material application | Recipe present and material accepted for crafting; tools/other gate if applicable | General consumer gate, **D03 owns exact requirements** | **UNKNOWN**; inspect Pearson craft/donate menu |
| `D04.G05` Trapper material application | Service available, material sold, recipe/cash conditions satisfied | General consumer gate, **S13 owns details** | **UNKNOWN**; inspect active Trapper menu |
| `D04.G06` specific hunting request | Accepted/active specified order and exact whole perfect carcass | Conditional, **S27 owns activation/hand-in** | **UNKNOWN**; inspect request and checklist |
| `D04.G07` legendary material recovery | Legendary animal already killed and lost/unskinnable pelt/body | **Rockstar-supported narrow exception** | **UNKNOWN**; Trapper readback after a short delay |
| `D04.G08` Buck Trinket effect | Trinket actually crafted/equipped or active per game mechanics | Effect reported; **edge behavior DISPUTED** | **UNKNOWN**; read equipment/inventory, inspect resulting item |

**Typed read-only links (proposed, no schema ratification):**

| From → to | Edge type | Defensible interpretation |
|---|---|---|
| S12.M03 → S12.M01 | **REQUIRES** *for normal perfect strategy*, not for killing wildlife | Initial quality/weapon info needed to plan a reliable perfect attempt [H02] |
| S12.M03 → S04.M01 | **INTERACTS_WITH** | Species-appropriate weapon class; does not assert owned loadout [H02] |
| S12.M05 → S06.M04 | **INTERACTS_WITH** | Horse carrying and saddle/weapon access, without overwriting D01 cargo rules [H05] |
| S12.M04 → S10.M03 | **OUTPUT_TO** | Conditional Pearson crafting material, exact recipe owned by D03 [H06] |
| S12.M05 → S13.M03 | **OUTPUT_TO** | Material sold for distinct Trapper stock [H15] |
| S12.M04 → S27.M02 | **MATERIAL_FOR** | Perfect whole carcass for particular active hunting orders [H04] |
| S12.M01 → S28.M01 | **RECORDED_IN** | Study/track/kill/skin are separate observation verbs [H10] |
| S12.M05 → S17.M03 | **INTERACTS_WITH** | Reserve/donate/sell decision; inventory rules owned by D06 |
| S13.M02 → Rockstar support source | **RECOVERABLE** *(risk notation, not a proposed edge type)* | Only official lost-legendary material exception [H16] |

**Gating discipline:** Only generic rules are encoded; a player report/menu inspection is required to decide whether a particular hunt, equipment, recipient or reward is currently available. Crosslinks to D01, D02, D03, D06 and D17 work are **provisional/read-only** until merged, reviewed and adopted.

## 8. Completion relevance: definitions, NOT awarded progress

| Category | Criterion scope backed by source | What D04 does **not** prove |
|---|---|---|
| `OFFICIAL_100` / Compendium | **50 animals discovered**; not every animal studied/skinned/killed | No 50-species player count inferred |
| `OFFICIAL_100` / Collectibles | **All five hunting requests** in the external quest chain; delivery-specific perfect carcasses are relevant | A perfect pelt does not mean a request mailed/completed |
| `OFFICIAL_100` / Miscellaneous | **5 legendary animals killed** is its own requirement | Ordinary D04 kills not equivalent to legendary kills |
| `OFFICIAL_100` / Challenges | Complete all **nine challenge strands**, including relevant hunting tasks | No rank earned retroactively or inferred from a successful hunt |
| `OFFICIAL_100` / Crafting | **Six recipe categories** each require an eligible crafted recipe, including a hunting item; not six copies of the same type | Owning meat, arrows, pelts or materials does not prove that a qualifying recipe was crafted |
| `OPTIONAL_EXHAUSTIVE` | Hunting/skin/track complete Compendium, all outfits, full satchel materials if player opts in | Not synonymous with official total completion |
| `CONVENIENCE` / `IMMERSION` | Food, cash, camp benefit, ecological observation, route planning | Voluntary outcomes are not automatic achievements |

[H10][H17] These are **goal criterion definitions**, not player records; actual progress must come from `Pause > Progress > Total Completion` and canonical GameGuide campaign reports. A goal label does not imply in-game credit.

## 9. Three organic, spoiler-light Chapter 2 outings (conditional examples, not compulsory tasks)

### Outing A — Quiet grassland deer reconnaissance
**Start if:** the player has free-roam control, a species-approved rifle or bow and a clear, safe hunting environment. **Do not assume those conditions.** Walk rather than rush; observe an ordinary deer through binoculars, **Study**, compare 2★ to 3★ specimens, read Show Info, and only fire at a safe 3★ if a planned material need warrants it. Inspect remaining grade; decide Pearson-vs-Trapper **before** donation. **Learning outcome:** quality and recipient are separate decisions. **Stop:** one verified observation or delivery; no fixed pelt quota, no automatic progress entry. [H02][H06]

### Outing B — A rabbit and the weapon-class lesson
**Start if:** Varmint Rifle and free-roam context are evidenced; otherwise **observe without purchasing on assumption**. Study a rabbit, read quality and Show Info, note why a sidearm or generic arrow is a poor perfect-pelt default. Make one deliberate shot only when position/range justify it; verify carcass quality; skin only if destination requests a pelt. **Learning outcome:** small-game tool specificity, not aggressive quantity farming. **Stop:** after the first quality readback, or sooner if animal escapes. [H02][H03]

### Outing C — Small game, the whole-body dilemma
**Start if:** a suitably tiny animal and Small Game Arrow setup are actually available; **an active exact carcass objective must be explicitly verified, not invented**. Study a squirrel/small bird. If an active requirement says `perfect whole carcass`, keep it unskinned; otherwise decide whether to skin or simply observe. Inspect satchel/carrying prompts and deliver promptly where applicable. **Learning outcome:** perfect carcass ≠ perfect pelt and item type decides the handoff. **Stop:** when requirement is safely verified or observation suffices; do not turn this into an assumed hunting-request completion. [H04][H06]

**Free Roam integration:** recommend at most one suitable outing alongside an optional wider PROJECT; permit discovery/detours, weather/horse/wildlife safety and an immediate return to Story Mode. None of these examples sets a player-specific route, inventory flag, mission state or save status.

## 10. Errors to prevent (at least three)

1. **`3★ spawn = automatically perfect pelt`** → false. Also match weapon/ammo and fatal placement; read back the corpse/item. [H02]
2. **`Skin everything before checking the goal`** → may destroy an intact carcass request; select object type first. [H04]
3. **`Donate any perfect pelt to camp; Trapper can use it later`** → ordinary stock is not shared. Check recipe, recipient and donation wording before surrender. [H06][H15]
4. **`Bait generates a guaranteed pristine target`** → it is an attraction/positioning tactic without confirmed spawn or star guarantee. [H08]
5. **`There is exactly N minutes before every carcass rots`** → unverified. Preserve through prompt delivery instead of relying on an invented timer. [H01][H05]
6. **`Buck Trinket always saves a 2★/damaged pelt`** → sources conflict and odds unknown. [H11]
7. **`Advanced organ-highlighting Dead Eye must be unlocked before Chapter 2 hunting is possible`** → overstates the gate. [H02][H04]

## 11. Evidence/source register and claim ledger

**All external sources checked 2026-10-17; source publication/update dates are distinct from access date.** Official publisher source is narrow and preferential where available. Credible specialist guides corroborate mechanics, not player-specific state. `HIGH` means well supported *for the exact wording in the row*, not permanent universal truth.

### Source IDs

- **[E01] Rockstar Games, [Wildlife / Hunting & Fishing](https://www.rockstargames.com/reddeadredemption2/features/wildlife)**, official promotional gameplay description (2018; checked 2026-10-17). Text describes wind, weapon/shot placement, field choice between skin/whole carcass, transport and scavenger risk. Rockstar page is script-heavy; mirrored publisher copy is visible at [GameStop product page](https://www.gamestop.com/video-games/products/red-dead-redemption-2/10162941.html). **PRIMARY**.
- **[E02] Rockstar Support, [Unable to skin Legendary Animals or losing their pelts](https://support.rockstargames.com/articles/480idh1zECJ0ojrheApV1U/unable-to-skin-legendary-animals-or-losing-their-pelts-in-red-dead-redemption-2)**, updated 2024-05-01. **PRIMARY / precise exceptional rule**.
- **[E03] PowerPyx, [How to Get Perfect Pelts](https://www.powerpyx.com/red-dead-redemption-2-how-to-get-perfect-pelts/)**, 2018-11-02. **INDEPENDENT GUIDE**; some Dead Eye/2★ claims conflict with E04.
- **[E04] PowerPyx, [All Hunting Request Locations](https://www.powerpyx.com/red-dead-redemption-2-all-hunting-request-locations/)**, 2018-10-29. **INDEPENDENT GUIDE**; carcass requirements and contested 2★ exception; later plot labels excluded from default text.
- **[E05] Fullclear, [Perfect Pelt Guide](https://fullclear.gg/rdr2/articles/perfect-pelt-guide)**, accessed 2026-10-17, current publication date not reliably determined. **INDEPENDENT guide** for Show Info, weapon families, ordinary 3★ baseline.
- **[E06] PowerPyx, [FAQ, Tips & Tricks](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/)**, 2018. **INDEPENDENT** for Eagle Eye tracking, cargo, carcass rot, field hunting.
- **[E07] Shacknews, [Complete Hunting Guide](https://www.shacknews.com/article/108167/complete-hunting-guide-red-dead-redemption-2)**, 2018-10-26. **INDEPENDENT** for Eagle Eye trails.
- **[E08] RDR2.org, [Potent Predator Bait Guide](https://www.rdr2.org/guides/potent-predator-bait-guide/)**, updated 2023-01-09. **INDEPENDENT** for attraction vs guaranteed spawning.
- **[E09] RDR2.org, [Hunting Request Guide](https://www.rdr2.org/guides/hunting-request-guide/)**, access 2026-10-17. **INDEPENDENT** for intact carcasses and hand-ins; weapon grouping conflicts with E03 in places.
- **[E10] RDR2.org, [Pearson Crafting Guide](https://www.rdr2.org/guides/story-mode/pearson-crafting-guide/)** and [Satchel Crafting Guide](https://www.rdr2.org/guides/red-dead-redemption-2-satchel-crafting-guide-increase-inventory-space/), checked 2026-10-17. **INDEPENDENT**; precise recipes delegated D03.
- **[E11] RDR2.org, [Trapper Crafting, Materials Guide](https://www.rdr2.org/guides/trapper-crafting-materials-guide/)**, updated 2023-01-09. **INDEPENDENT** for Trapper recipes/costs.
- **[E12] GameFAQs player discussion, [Donating Animal Parts for Crafting or Funds](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/77171897)** and [When You Have a Pelt, Can You Store It?](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/77174775), 2018. **COMMUNITY corroboration**, not authoritative on UI edge behavior.
- **[E13] Red Dead Wiki, [Buck Antler Trinket](https://reddead.fandom.com/wiki/Buck_Antler_Trinket)**, accessed 2026-10-17. **COMMUNITY / disputable interpretation** of limited quality recovery.
- **[E14] Red Bull, [RDR2 Hunting Guide: 12 Essential Tips](https://www.redbull.com/us-en/red-dead-redemption-2-hunting)**, 2019-12-20. **INDEPENDENT editorial** for typical horse load categories / carcass rot; no precision claim.
- **[E15] PowerPyx, [100% Guide & Checklist](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/)**, 2018-10-25; and [GameFAQs Total Completion](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion). **INDEPENDENT** for goal categories/thresholds, not actual player credit.
- **[E16] Legacy RDR2 main [Perfect Pelts](https://github.com/L33TW0RLD/rdr2/blob/main/guides/hunting/perfect_pelts.md), [Species Weapon Reference](https://github.com/L33TW0RLD/rdr2/blob/main/guides/hunting/species_weapon_reference.md), [Pearson vs Trapper](https://github.com/L33TW0RLD/rdr2/blob/main/guides/hunting/pearson_vs_trapper.md)**, checked 2026-10-17; source statuses **RESEARCHED — REVIEW PENDING**. Historical context only, not approved authority.
- **[E17] PowerPyx, [Weapon Maintenance FAQ](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/)**; corroboration of practical handling, no demonstrated separate direct pelt-quality formula. **INDEPENDENT**.

### Decision-level claims

| ID | Exact asserted rule / limit | Evidence | Epistemic label | Confidence |
|---|---|---|---|---|
| **H01** | Rockstar describes hunting as wind-aware tracking, weapon/shot effects on material quality and whole vs skinned transportation; carcasses/scavengers pose a delay risk | E01, E06 | **CONFIRMED** for source wording | **HIGH** |
| **H02** | For **reliable ordinary perfect material**, target a naturally 3★ animal, inspect species weapon advice, land a clean fatal hit and verify result | E03, E05, E09 | **CORROBORATED** normal procedure | **HIGH** |
| **H03** | Different wildlife classes call for different weapons/ammo; species Show Info is preferred over coarse charts | E03, E05, E16 | **CORROBORATED** principle; exact edge cases conditional | **HIGH / per-species MEDIUM** |
| **H04** | A perfect **whole unskinned carcass** is necessary for certain hunting requests; skinning it is wrong for that purpose | E04, E09 | **CORROBORATED** | **HIGH** |
| **H05** | Horse carries pelts/parts/carcasses; capacity depends on object; fresh animal body may decay, so prompt delivery preferable | E01, E06, E14 | **CORROBORATED** broad; no exact universal quantities/timer | **HIGH / numeric UNKNOWN** |
| **H06** | Pearson satchel/camp materials and Trapper clothes/equipment are different hand-in systems; ordinary materials don't auto-transfer | E10, E11, E12, E16 | **CORROBORATED** broad; label details conditional | **HIGH / some UI subtleties MEDIUM** |
| **H07** | Eagle Eye tracking follows signs/trails; wind and cover scent assist stealth | E01, E06, E07 | **CORROBORATED** | **HIGH** |
| **H08** | Bait is a contextual lure, not a proven guaranteed spawn/quality trigger | E08, E03 | **SINGLE_SOURCE** on zero spawn-rate effect; safe fallback corroborated | **MEDIUM** |
| **H09** | Weapon class/Dead Eye/lasso details vary; no universal late-Dead-Eye or lasso prerequisite for ordinary perfect hunting | E03, E05, E09, E16 | **CORROBORATED** broad; precise special cases need testing | **MEDIUM** |
| **H10** | Hunt-request completion and species catalog observation are distinct from taking a pelt | E04, E09, E15 | **CORROBORATED** | **HIGH** |
| **H11** | Buck Trinket boosts chance of better skinned parts, but exact 2★→3★ behavior/odds is disputed | E13 vs E03/E04 + E16 | **DISPUTED** limits | **LOW** for edge |
| **H12** | Some Pearson crafting recipes require a **whole perfect small carcass**, not a pelt | E10, E16 | **CORROBORATED**, D03 controls exact recipe | **MEDIUM–HIGH** |
| **H13** | Exact cargo maxima/decay timers/retention after loss are not established universally here | E01, E06, E14; no reliable numerical test | **UNKNOWN** numerical edge | **UNKNOWN** |
| **H14** | Weapon dirt is practically undesirable; an independent hidden pelt-quality multiplier was not established | E17, E16 | **UNKNOWN** direct grade formula | **UNKNOWN** |
| **H15** | Selling to Trapper supplies recipe materials, usually with separate item cost; Pearson donation is not Trapper credit | E11, E12 | **CORROBORATED** | **HIGH** |
| **H16** | Lost or unskinnable **legendary** material reaches Trapper after short delay, even before sale; proceeds not promised | **E02 PRIMARY** | **CONFIRMED** narrow support claim | **HIGH** |
| **H17** | Official 100% subsets: 50 animal discoveries, all hunting requests, 5 legendary kills, all 9 challenge strands and 6 specified crafting categories | E15 | **CORROBORATED** | **HIGH** |

## 12. Contradictions, inference limits and unresolved tests

| Dispute / alternative claim | Observed evidence conflict | Current disposition / safe fallback | Owner or later research requirement |
|---|---|---|---|
| **Naturally 2★ → perfect via Buck Trinket?** | E03 explicitly rejects natural 2★ perfection; E04 says 1–2★ sometimes yields perfect carcasses with Trinket; E13 says recovery cannot exceed initial grade | **DISPUTED**. Require natural 3★ for reliable attempts. Do not assert an upgrade or probability. | Controlled source/console capture: starting stars, same species/weapon, post-kill and post-skin exact labels, Trinket state |
| **When do visible critical organs unlock?** | E03 describes different later Story gate from E04; E09 also uses differing chapter framing | **DISPUTED precise gate**. Head/vital shot does not depend on claiming late-stage unlock. | D09 Dead Eye dossier; verified in-game ability UI across story milestones, spoiler-gated |
| **Rifle vs scoped rifle vs bow for a given large animal** | Class chart E03 conflicts with more flexible species entries E05 and E16 | **SPECIES-SPECIFIC**, not one universal gear requirement. Show Info wins. | Capture each species' actual advice on supported build |
| **RDR2.org deer/medium weapon group** | E09 hunting request description groups deer with sidearm/repeater-like advice; E03 groups deer with rifle category | **CONFLICT**. Do not use E09's broad group to recommend handgun for perfect deer. Read in-game recommendation; conservative rifle/eligible bow. | Confirm precise animal Compendium text and a clean result |
| **Cargo capacity count/decay clock** | E06/E14 offer broad placement and decomposition guidance; counts differ with carcass size and stacked hides | **UNVERIFIED exact numbers**. Deliver priority material promptly, confirm stow prompt and grade in situ. | D01 horse cargo expert and game capture, separately for small carcass, large carcass, bulky pelt, folded pelt |
| **Do skinned pelts rot like whole carcasses?** | Some guides conflate `carcass and pelts` with carcass degradation; Rockstar's advice does not give grade/timer curves | **NO universal equivalence asserted**. Preserve and deliver; do not print timer. | Controlled item/time reads for skinned pelt vs intact carcass |
| **Pearson `Donate for Crafting` means always permanently reserved?** | E12 community UI anecdotes differ over surplus/feathers/special recipes | **CONDITIONAL UI**. Inspect target recipe remaining requirement and actual donation label; don't assume every donation credited. | D03 Pearson specialist verifies menu/credit per material |
| **Bait definitely does not affect game spawn logic?** | E08 rejects spawn-rate effect; anecdotes say some animals appear when bait is set | **SINGLE GUIDE**, not authoritative code proof. No guaranteed targeted spawn; treat as lure. | In-game trials and/or official source for attraction range/algorithm |
| **Lasso/knife delivers 3★ every time for large wildlife** | Informal guides report eligible examples, not full species/target matrix | **NOT GENERALIZED**. Use normal species-approved weapon and verify result. | Per-species controlled observation |
| **Horse death/death/reload automatically retains cargo** | Community observations variable, no authoritative broad rule here | **UNKNOWN**. Bank valuable cargo promptly; consult D01; never promise restore. | D01 horse lifecycle and observed save semantics |
| **Lost ordinary vs legendary pelt recovery** | Rockstar E02 explicitly says **legendary**; user guides sometimes generalize recovery | **Do not generalize**. E02 protects only named lost legendary case. | D17 legendary dedicated scope; no ordinary claim without authoritative support |

**Observed versus universal:** This research accessed web source text and GitHub; **no new in-game test, save-file decode, player screenshot, controlled kill or vendor transaction was performed by Agent 009**. A future player's UI screenshot may support their case but is not sufficient to rewrite a universal mechanic. The live context, chapter and edition remain UNKNOWN in the dossier.

## 13. GameGuide / Free Roam / Companion handoff and requested review

**GameGuide (read-only; original `rdr2` campaign authority):** when a mission requires hunting, show the concrete **3★ → Show Info → appropriate tool → clean hit → verify material type** instructions inside its actual chronological phase only if consistent with existing Gold conditions. Never insert an optional hunting detour into a timed mission, falsely award material/compendium/medal credit, or skin a required whole carcass. Player-reported loot/save/progression only through the existing campaign evidence workflow.

**Free Roam Control:** present hunting as an optional, purposeful Chapter 2 **OUTING**, not a demanded exhaustive run. Conditionally ask/inspect equipment, map access, recipe intention and available free-roam window; suggest one natural encounter, allow interruption or returning to Story, and route a useful perfect material to its **real recipient**. The Hub's provisional Heartlands hunting outing is an example consumer, not task scope to edit.

**Living Adventure Companion / dashboard:** brief field card by default; expand to weapon-class table, destination flow, contested trinket or claim ledger on explicit request. Communicate `UNKNOWN` rather than casting unsatisfied gates as locked or unlocked. Provisional schema IDs are references, **not current activity state**.

**Owner/coordinator review gate (required):**
1. Inspect this single dossier's accurate ordinary-vs-legendary separation, recipient routing, carcass preservation, evidenced 100% criterion scope, dispute ledger and T0/T1 default.
2. Decide whether to accept D04 as **RESEARCHED — REVIEW PENDING**, request corrections, or approve adoption in a **separately authorized action**. This agent cannot ratify or update the index.
3. Reconcile crosslinks with independent D01 horse, D03 satchels and D06 inventory deliverables **after** each branch is available; no unmerged text is silently normative.

**Next bounded research questions (NOT self-assigned):** D01 cargo capacities by object and retention after loss; D03 recipe-specific intact-carcass credit and menu label; D17 Buck Trinket controlled test/legendary reward exceptions; D09 exact Dead Eye staging; D15 Compendium verb requirements. These are separate future coordinator decisions, not permission to edit elsewhere.

**Terminal rule:** deliver on task branch only, commit/read back and compare; stop at `DELIVERED_REVIEW_PENDING`. No edits to taxonomy, shared indexes, Free Roam, Mission Control, main, or original `L33TW0RLD/rdr2`.
