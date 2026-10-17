# D12 — Plants, Herbs, Cooking and Personal Crafting (RDR2 Story Mode)

**Record:** `ATLAS.D12` / v0.1 · **Kind:** mechanic dossier  
**Status:** **RESEARCHED — REVIEW PENDING** (`RESEARCHED_REVIEW_PENDING`; NOT ADOPTED)  
**Checked:** **2026-10-17** (source access/check date, **not** a game patch date)  
**Owner/task:** Specialist 011 → `atlas-foraging-017`; [authoritative Issue #20](https://github.com/L33TW0RLD/rdr2-hub/issues/20), `agent/atlas-foraging-017`.  
**Applicability:** **Red Dead Redemption 2 Story Mode** on base console (PS4, Xbox One) and PC / backward-compatible versions generally. No hands-on same-version validation of key mappings, menu position, recipe availability, or platform-specific UI; *Online-only rank upgrades, roles and equipment are excluded*.  
**Spoiler policy:** **T0/T1** by default; future region/story-dependent access only in segregated **T2** section. No mission plots, future route instructions or required exploits.  
**Primary provisional leaf IDs:** **S15.M01–S15.M04**, **S16.M01–S16.M05**. Proposed identifiers, schema and typed edges **not owner-ratified**. Adjacent read-only **D03** Pearson upgrades, **D06** inventory identity/capacity, **D04** hunting inputs, **D09** general cores, **D15** Compendium semantics (Wave 2 unmerged). D03/D04/D06 are `main` **RESEARCHED — REVIEW PENDING** despite Wave 1 merger; not ADOPTED.  
**Player state:** **UNKNOWN** for found/picked plants, cooked food, pamphlets read, recipe permissions, particular ingredients, Herbalist ranks, six-category tracker, chapter/mission triggers and saved outcomes. No Atlas record modifies `L33TW0RLD/rdr2/campaign/`.

## 1. Definitions, interaction and readable feedback (S15.M01, S16.M01–M04)

A **plant occurrence** is vegetation found in-world; using **Eagle Eye** highlights gatherable plants with the visual particle effect. At close range the displayed interaction can let the player **pick** (acquire to satchel) or **eat** (consume immediately), depending on species and controls. Read the displayed name after interaction; visual colour alone does not prove species. Picked or otherwise identified types may populate the **Plants Compendium**. This is distinct from a particular Herbalist challenge accepting the action. Sources [C01,C02,C03].

Distinguish four observable verbs rather than silently treating them as synonyms:

| Verb / context | What can be observed | What cannot automatically be inferred |
|---|---|---|
| **See / focus / identify** a plant | Plant target, field prompt or name when close enough; Eagle Eye clue | A **pick**, acquired inventory, Compendium plant count or challenge credit. |
| **Pick / gather** | On-screen gather animation, acquired item / possible Compendium plant entry | That a later Herbalist rank was active, or that a recipe learned/created an item. |
| **Eat** at plant or consume carried herb | Consumption action and possibly player condition feedback | That the plant remains in satchel or that a *pick*-worded rank recorded it. Berry rank explicitly needs **pick and eat**, so verify both prompts. |
| **Craft** from known recipe | Crafting output and ingredient consumption in an applicable category | Six-category Total Completion credit for a different category, or a Pearson camp-upgrade craft. |

**Personal crafting** takes place at a valid campfire/crafting interface (gang camp's Scout Fire or an eligible wilderness campsite). Some simple crafting actions are offered by the fire; **seasoning requires a grill** at an eligible station, and generic wilderness camp grill access is normally taught/enabled by Hosea's Chapter 2 `Exit Pursued by a Bruised Ego` (U01). The camp Scout Fire can offer crafting before that wilderness convenience. At the fire select `Craft/Cook`, inspect category, learned state, ingredients, missing component and resulting item. Exact controls are platform-specific; don't hard-code buttons. [C04,C05]

**Recipe knowledge:** certain plain cooking combinations need only a valid meat and fire; **nontrivial personal craft pamphlets** can be given, found or purchased after variable gates. Possessing a pamphlet is **not always the same as reading/learning it**. Check `Satchel → Documents → Recipe Pamphlets`; open/read then return to crafting; if an entry is absent check the menu's **Show All** option where present. Do not presume it was read or that the item was successfully made. [C06,C07]

**Item effects are not the recipe gates:** Food sustains Arthur and affects Health/Stamina/Dead Eye **cores**, while tonics and crafted horse care items have corresponding condition effects. Exact strength, duration, stacking and whether a *bar* rather than a *core* is modified are item/version-specific **D09/D01** questions. Read the on-screen item description and results rather than assigning a universal status modifier. [C08]

### Chapter 2 field reference (T0)
**Spot → identify → choose PICK vs EAT → inspect satchel/Compendium → choose purpose → check recipe category and ingredients → craft at supported fire → verify output and optional tracker.** This is an **optional** excursion, not a chapter-exit checklist or mission route.

## 2. General gates, exceptions and source-backed unlock map

| Activity/rule | Normal general access | Required current observation / exception |
|---|---|---|
| **Basic foraging** (S15.M01) | Chapter 2 free roam: gathering prompts and Eagle Eye; species must grow in current habitat. | Confirm player can approach/pick target and name; rare species/regions and weather are not guaranteed. [C01,C02] |
| **Herbalist rank sequence** (S15.M04) | First rank begins with **Yarrow** picking; further rank unlock follows prior rank completion. | Challenge page must show **current active rank** and specific progress; earlier picks may not credit later ranks. [C03,C09] |
| **Cook plain food** (S16.M02) | Valid fire and eligible meat; plain cooking recipes generally not special-pamphlet gated. | Confirm currently selected station offers item and the listed meat is available. [C04,C05] |
| **Season food** | Seasonable meat **plus** Wild Mint, Oregano or Creeping Thyme and **grill-capable** fire. Wilderness grill normally follows U01 Hosea activity. | Confirm seasoning variant appears at current camp, recipe has correct meat/herb, and effect preview. U01 player's completion **UNKNOWN**. [C04,C08] |
| **Potent tonics / horse-care** | Simple recipes widely documented as available at/around Chapter 2, sometimes through automatically supplied pamphlets; e.g. Potent Health Cure and Potent Horse Stimulant. | If `Recipe Unknown`, check satchel pamphlet/learning state; do not infer a purchased pamphlet or present ingredients. [C06,C10] |
| **Ammunition / hunting / weapon** | Categories are distinct; some recipes supplied early (Split Point, Small Game Arrow, Cover Scent, Improved Throwing Knife), others require a pamphlet/mission or found cache. | Check actual learned entry and category; **do not classify by the real-world object's use alone**. [C11,C12,C13] |
| **Fence recipes** | Some pamphlets can be bought once relevant **individual story gate** is met; some can be found separately. | See the *specific recipe* and the Fence's current inventory; U05 (Emerald Ranch wagon commerce intro) is **not a universal claim that all Fences/services were inaccessible**. [C06,C14] |
| **Official recipe count** | In-game `Progress → Total Completion → Miscellaneous/Recipes` is the authority for six types. | Craft **one item each** from six categories; no credit assumed merely from owning a recipe or buying a premade item. [C15] |

**Gate expression (proposal only):** `craft(item) REQUIRES ALL(known_recipe [unless plain cooking], supporting_station, available_components, player_action)`; `learn(pamphlet) REQUIRES owned_or_acquired_pamphlet AND read`; `season(meat) REQUIRES grill AND eligible_meat AND listed_herb`; `Herbalist_rank_N REQUIRES preceding_rank_confirmed AND criterion_actions_during_current_rank`. A `REQUIRES` edge is a **research generality** and **not** a save-state `unlocked_now` flag.

## 3. Food, herb and recipe benefits; ingredient routing; costs and recoverability

**Three common culinary herbs:** **Wild Mint → Health**, **Oregano → Stamina**, **Creeping Thyme → Dead Eye** food-core effect. For example, **Minty Big Game** requires **1 Big Game Meat + 1 Wild Mint** and is described by RDR2.org as fully restoring cores and yielding a gold Health core for a day. **Oregano Big Game** uses **1 Big Game Meat + 1 Oregano** and applies the corresponding Stamina benefit; **Thyme Big Game** uses **1 Big Game Meat + 1 Creeping Thyme** for Dead Eye. This is a **Big Game** recipe result, not a promise that *every* herb-seasoned meat grants a full-day gold core. For other meats, exact enhancement can be smaller: read item preview. [C04,C08,C16]

**Ordinary ingredient routes:** wild gathered plants/berries/mushrooms may be (a) consumed as herbs, (b) saved for relevant personal recipes (tonics, horse products, bait or food) or (c) disposed of/sold where allowed. Meat comes from appropriate animal processing or sometimes commerce, not every perfect-carcass route; D04 controls harvesting and intact-carcass preservation, D03 controls Pearson recipe materials. **Do not skin/consume a unique perfect carcass** needed by an active separate request just for ordinary meat. [C04,C17]

**Basic, non-exhaustive ingredient exemplars (source-specific and menu-check required):**
- **Potent Health Cure** (tonic): **1 Ginseng + 1 Yarrow** in multiple ingredient lists. Distinct from eating Yarrow itself. [C10]
- **Potent Bitters** (tonic): **1 Sage + 1 Burdock Root**. Which Sage variants the specific recipe accepts should be read on the screen. [C10,C18]
- **Potent Horse Stimulant** (horse care): **1 Sage + 1 Common Bulrush**. Tied to horse condition, not a claim about current horse ownership/health. [C10]
- **Small Game Arrow** (ammunition): **1 Arrow + 1 Flight Feather + 1 Regular Shotgun Shell** according to RDR2.org and Red Dead Wiki. This is a preservation tool, but whether a given animal yields a perfect result is **D04**. A separate Gamepressure table **omits the shell**, so in-game ingredient readback is decisive. [C11,C19]
- **Cover Scent Lotion** (hunting): **1 Scent Gland** in RDR2.org/Gamepressure. Helps reduce detection; **not guaranteed invisibility** or a bait-driven spawn. [C12]
- **Improved Throwing Knife** (weapon): RDR2.org says **1 Throwing Knife + 2 Eagle *or* 2 Hawk Feathers**, Gamepressure abbreviates to **1 Eagle Feather**. **DISPUTED component quantity:** verify in-game; don't burn scarce feathers based solely on printed articles. [C13,C19]
- **Split Point Cartridge** (ammo): documented as crafted from an eligible **regular cartridge**; don't assign an unsourced unlimited conversion ratio or claim it counts without observing ammo-category craft. [C11]

**Resource cost:** crafting **consumes components** and yields an output item; cooking can hold cooked food for later consumption. Buying ready-made provisions is not proof of an actual *craft* action. Materials consumed in Arthur's personal crafting system are not automatically `Donate for Crafting` stock at Pearson, and a Pearson satchel is **not** a personal six-category campfire item. D03 owns exact materials/persistence at Pearson and D06 owns satchel quantities and disposition. [C04,C17]

**Sage vs Oleander:** guide ingredient labels often simply say `Sage` although the plant catalog distinguishes **Hummingbird, Desert and Red Sage**; species and region availability vary, so confirm **accepted ingredient name** rather than assuming substitution. **Oleander Sage** is a *different toxic plant* used in poison crafting; **do not eat it**. Poison Arrow/Poison Throwing Knife availability and herb route depend on separate pamphlet/gates; avoid recommending poison ammunition in an everyday Chapter 2 gathering outing. [C02,C14,C20]

## 4. Availability, chapters, platform/edition and one-way risks (T0/T1)

1. **Not all 43 plants are interchangeable or immediately nearby.** PowerPyx lists **43 plant species**, including common herbs and orchids. Different biomes and inaccessible/late areas prevent a normal early-game `all 43 tonight` promise. For **official 100% plant entry**, only **20 distinct plants** are required — not all 43. [C02,C15]
2. **Herbalist is rank-sensitive:** walking past a plant, looting it from a bag or having it already entered in the Compendium does not prove credit for a later **pick** challenge. Some specialty berries require **pick and eat**, other ranks **craft** then **use**. Screenshot the current rank before wasting materials on a prospective requirement. [C03,C09]
3. **Pamphlets are item-and-story dependent.** An early player may receive certain recipes but not have read them; later Fence-stock gates are recipe-specific. A found pamphlet is an alternative to purchasing **only if** that recipe legitimately has a world find. No global requirement to complete every Chapter 2 mission before any personal crafting. [C06,C07,C14]
4. **Fire availability is conditional:** whether wilderness grilling/seasoning appears depends on Hosea U01 normal progression and actual station access; a Scout Fire at gang camp offers an earlier safer check. Guide descriptions of outdoor grills differ in breadth. [C04,C05]
5. **Natural progression vs time deadline:** basic herbs/cooking normally do not have a Chapter 2-only countdown. Do not classify ordinary Yarrow/food preparation `MISSABLE` just because the player is in Chapter 2. Region-specific plants are a *later/access* challenge, not a reason to cheat or leave the intended playable region. [C02,C03]
6. **Horse feeding / crafting:** a horse-care item recipe's presence is not proof of owning a certain horse or horse health; D01 owns that state/animal-care. Do not use a recipe as a horse reviver substitute without reading the specific effect. [C10]
7. **Version/platform:** PC keys vs gamepad, special or ultimate editions, menu glyphs and modded saves differ. RDR2.org publishes joint **Story Mode/Online** lists; **Online rank-lock requirements are explicitly excluded**, and some old guide tables contain typos/contradictions (see §9). Tested in-game platform/edition: **none**.

## 5. Proposed typed cross-system relations and leaf mapping

**These are candidate directed links; ID convention remains PROPOSED, not ratified. `REQUIRES` never means actual player eligibility/ownership.**

| Primary leaf | Candidate relationship | Conditionality / boundary |
|---|---|---|
| `S15.M01` spot/pick | `INTERACTS_WITH → S28.M01` plant Compendium | `PICK` evidence distinct from simply viewing plant; D15 Compendium owner. |
| `S15.M01` | `OUTPUT_TO → S17.M01` inventory | Only if actual pick/acquisition; D06 inventory numbers. |
| `S15.M02` culinary inputs | `MATERIAL_FOR → S16.M02` cooking | Listed meat/plant and grill must be supported. |
| `S15.M03` poison/specialty | `MATERIAL_FOR → S16.M03` / `INTERACTS_WITH → S04.M03` | Specific acquired/read pamphlet required; no broad poison unlock. |
| `S15.M04` Herbalist | `CONTRIBUTES_TO → S26.M0x` | Ten sequential ranks; not identical to 20 Plants subset; target individual leaf stays provisional. |
| `S16.M01` pamphlet | `REQUIRES → recipe-specific acquisition/read gate` | Source-backed by pamphlet behavior, gate not a universal story mission. |
| `S16.M02` season | `REQUIRES → qualifying grill / eligible meat / herb`; `INTERACTS_WITH → U01` | Normal wilderness grill depends on early Hosea lesson; gang Scout Fire may be available already. |
| `S16.M03` ammo/hunting/weapon | `INTERACTS_WITH → S12.M03` and `S04.M03` | D04 has quality weapon/animal outcome, not D12. |
| `S16.M04` tonic/horse items | `INTERACTS_WITH → S01.M01–M04`, `S06.M02` | D09/D01 own bar/core and horse effects. |
| `S16.M05` 6 recipe types | `CONTRIBUTES_TO → C100.MISC.RECIPES (placeholder)` | Exact criterion is `one each of 6`; placeholder goal ID **not ratified**, do not index/write. |
| `S15.M01` / `S15.M04` | `CONTRIBUTES_TO → C100.COMPENDIUM.PLANTS (placeholder)` | Exactly 20 *different* collected plants vs all-43 personal objective. |
| `S16.M02–M04` | `INTERACTS_WITH → D03 Pearson/D06 Inventory` | **Read-only** and distinct crafting inventories. |

**Do not fabricate mechanic IDs for unassigned D15 or new criteria.** The provisional goal labels in this table are examples for later approved cataloguing, not shared schema migrations.

## 6. Total Completion, Herbalist, Compendium and individual goals (exact scope)

| Goal classification | What counts / threshold | How to verify / caveat |
|---|---|---|
| **OFFICIAL_100 — Misc. Recipes** | **Exactly one crafted item from each of SIX categories:** **Cooking, Tonic, Ammunition, Hunting, Horse Care, Weapon**. This is **NOT six arbitrary recipes** or six different tonic varieties. [C15] | Observe category-qualified craft and check `Progress → Total Completion → Miscellaneous → Recipes` (menu naming varies). **6/6 only after all six distinct categories**; don't infer from having used a bought product. |
| **OFFICIAL_100 — Compendium Plants** | **Collect 20 distinct kinds of plants (out of 43)**. [C02,C15] | Inspect `Progress → Compendium → Plants` and Total Completion check; six duplicated Yarrow picks do not make six different types. |
| **OFFICIAL_100 — Challenges** | Complete all challenge strands / ranks as required by the broader game's 100% condition; **Herbalist ranks 1–10 are sequential**. [C03,C15] | This larger challenge commitment is different from the 20-plant subset; Herbalist 9 is not `pick 20`. An early player does not have all regions open. |
| **OPTIONAL_EXHAUSTIVE** | Find/pick all **43** plants, discover/craft every eligible recipe, complete Herbalist ranks, collect named pamphlets. | Personal goals, not blanket requirements for the 6-recipes or 20-plants official subset. No proof all items available in Chapter 2. |
| **CONVENIENCE** | Cook rations, prepare tonics and horse aid, make ammo/bait at useful moments. | No mandatory outing or progress ledger. |
| **IMMERSION** | Observe flora, gather naturally, cook at appropriate camp, learn the craft UI. | No completion obligation. |
| **ALL_GOLD** | No separately established Gold-mission criterion fulfilled by a personal cooking recipe. | **NONE in D12**; do not encourage cooking during a timed mission unless Mission Control explicitly permits it. |

### Herbalist ranks — semantic map, not an early-game forced route

1. **Pick 6 Yarrow.** Starts Herbalist; no assumption challenge previously began.
2. **Pick and eat 4 berry species.** **Both verbs** matter.
3. **Craft 7 items using Sage.** Type/component check; ingredient accepted as Sage in actual recipe.
4. **Pick 5 mushrooms and feed them to horse.** Collection **and feeding**, not storage alone.
5. **Craft 9 items using Indian Tobacco.** Making 9 distinct recipes **not** specified; 9 qualifying crafted items.
6. **Pick 15 different herb species.** Not 15 copies of one herb.
7. **Craft and use 5 Special Miracle Tonics.** **Use** as well as craft, with that exact variant.
8. **Use Oleander to craft 6 poison weapons.** Specific crafting action; do not confuse with eating the toxic plant.
9. **Pick one of each plant species.** A later, broad 43-type task; earlier Compendium entries aren't automatically stage credit.
10. **Season and cook all 11 types of meat** named by rank. Not 11 copies of any one type.

Source: [RDR2.org Herbalist](https://www.rdr2.org/guides/herbalist-challenge-guide/) and [GameFAQs Challenges](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/challenges). The exact counts are guide-described; in-game active tracker is decisive. Several community reports indicate Herbalist 9 credits only **picks after it activates**, so treat retroactivity as **NOT ESTABLISHED**, and safely start a personal list at that rank instead of promising past work counts. [C03,C09]

## 7. Six-category small practical recipe matrix (not an exhaustive recipe dump)

**Every row is a *candidate example* for the relevant category, not an assertion the user has its recipe, ingredients or a qualifying craft.** For the contentious Weapon category, validate the in-game **category tab** before depending on the completion credit. Recipe-form details are drawn from the cited sources; the conflicts are surfaced explicitly.

| Total Completion category | Spoiler-light example and ingredients | Access check / signal to watch |
|---|---|---|
| **Cooking** | **Plain Venison** — **1 Mature Venison Meat**; or **Minty Big Game** — **1 Big Game Meat + 1 Wild Mint** if grill accessible. [C04,C08] | Valid fire; herb/grill only for the seasoned variant. Watch cooking output, not merely meat in satchel. |
| **Tonic** | **Potent Health Cure** — **1 Ginseng + 1 Yarrow**. [C10] | Check tonic tab, recipe known, component count, craft result. |
| **Ammunition** | **Split Point Cartridge** — **regular non-shotgun cartridge**, worked with knife; alternatively **Small Game Arrow** — **1 Arrow + 1 Flight Feather + 1 Regular Shotgun Shell** (conflict noted). [C11,C19] | Verify craft listed in Ammo tab and actual finished ammo, not weapon ownership. |
| **Hunting** | **Cover Scent Lotion** — **1 Scent Gland**. [C12] | Hunting category selected and output made; no guaranteed concealment or animal spawn. |
| **Horse Care** | **Potent Horse Stimulant** — **1 Sage + 1 Common Bulrush**. [C10] | Category/recipe shown, ingredient accepted, product crafted; no horse-care action assumed. |
| **Weapon** | **Improved Throwing Knife** — **1 Throwing Knife + feather(s)** (RDR2.org: **2 Eagle/Hawk feathers**; Gamepressure: **1 Eagle feather**; conflict). [C13,C19] | **Do not treat external category labels as proof**. Verify the actual `Weapon` tab, ingredient quantity and output. If absent, choose another in-game Weapon-labelled recipe rather than forcing this entry. |

**Six-category diagnostic:** A 5/6 Total Completion recipe counter despite many cooked/tonic items most likely warrants a **category-by-category in-game inspection**, not simply crafting six more of an already-completed type. Screenshot active category before and after craft if trying to resolve an unknown credit. [C15]

## 8. Three common mistakes and three playable Chapter 2 scenarios

### Common errors
1. **Category confusion:** `6 Recipes` means one of **each of six categories**, not six meals, six ammo cartridges or Pearson's seven satchels. In-game completion tracker is the evidence.
2. **Action confusion:** Compendium knows a plant or the satchel contains it, but an active Herbalist rank needs `pick`, `eat`, `craft` or `use` **as worded**. Early untracked picking doesn't establish later Herbalist 9 credit.
3. **Unlock/component confusion:** You have a pamphlet but have not **read** it; or a wilderness fire lacks a **grill**; or a guide's recipe omits a component. Inspect Recipe Pamphlets → campfire **Show All** → actual ingredients, don't assume the mechanic is broken.

### Scenario A — first stroll beside Horseshoe Overlook (T0)
Player sees an unidentified red-flowered plant near grassy terrain. **If** Eagle Eye and close inspection identify **Yarrow**, choose **Pick** (rather than only look). **If** Herbalist 1 is currently active, watch the **6 Yarrow** count; independently check Plants Compendium after first acquisition. The player can then store that Yarrow for a later **Potent Health Cure**, but **nothing** in this example records the item as already obtained. No spoiler locations or forced challenges. [C01,C03,C10]

### Scenario B — returning with meat to camp (T0)
A player has eligible meat (unconfirmed until inspected), sees an available **Scout Fire** and wants to cook. **If** the station supports **plain meat**, choose one recipe and check output. **If** the UI offers a grill/seasoning and the player has **Wild Mint**, try an eligible **Minty** variant, preview Health benefit and verify consumption/recipe output separately. If grill absent, make plain food **now** and defer seasoning, rather than falsely announcing recipe locked forever or demanding story progression. [C04,C05,C08]

### Scenario C — practical first recipe-category progress (T0/T1)
Player wants to learn crafting but has not reported a Total Completion score. At a valid fire, inspect **Craft → categories**. **If** `Potent Horse Stimulant` is displayed and Sage/Common Bulrush are present, crafting it is a **horse-care-type attempt**; afterward check the actual Recipes counter if pursuing official 100%. If a Pamphlet is missing or menu hidden, read/inspect Documents and Show All; do not instruct buying something already granted, and do not infer a horse is currently injured. The player can leave the other five categories for enjoyable future outings. [C06,C10,C15]

## 9. Contradiction ledger, evidence limits and next observational tests

| ID | Conflicting/uncertain proposition | Evidence comparison, disposition, safe fallback |
|---|---|---|
| **D12-X01 — small-game arrow** | **3 materials** (Arrow + Flight Feather + Regular Shell) vs **2** (Arrow + Feather) | RDR2.org/Red Dead Wiki list **3**; Gamepressure repeats the **2**-material form in its table. **DISPUTED guide error; likely 3**, verify screen and don't assert universal 2. [C11,C19] |
| **D12-X02 — improved knife** | **2 Eagle/Hawk feathers** vs **1 eagle feather** | RDR2.org vs Gamepressure; **DISPUTED**. Preserve rare feathers, read real Weapon tab. [C13,C19] |
| **D12-X03 — horse meal** | RDR2.org/Gamepressure say `3 Hay OR 3 Beets`; Red Dead Wiki pamphlet table says `3 Currant + 3 Beets + 3 Hay` | **DISPUTED / low confidence on printed OR formulation**. **Do not supply Horse Meal as reliable starter recipe**; verify real Story Mode menu. [C19] |
| **D12-X04 — Poison Arrow pamphlet timing** | Some guides say after Chapter 2, others specific Fence mission / found chest potentially early | **CONDITIONAL**; avoid all-player early unlock promise, inspect specific pamphlet and recipe. [C06,C14] |
| **D12-X05 — grill rule** | Source descriptions vary on whether all fires can season, and on when wilderness grill becomes available | **CONDITIONAL**; normal Hosea U01 source-supported but not player verified. Inspect current fire/grill menu; gang Scout Fire may already provide menu. [C04,C05] |
| **D12-X06 — Compendium vs Herbalist 9** | 43/43 plant Compendium vs 42/43 active challenge reported by players | Consistent with **rank-local picking**; community evidence, not controlled patch study. **Treat earlier picks as unproven**, track new picks after rank activation. [C09] |
| **D12-X07 — source typos/categories** | Gamepressure ingredient errors (e.g. duplicate Small Game row); RDR2.org groups throwing items under webpage `Ammo` while six-category UI calls for `Weapon` | **DISPUTED table/interface mapping**; exact in-game category and components control completion guidance, never web section title alone. [C13,C15,C19] |
| **D12-X08 — named sage** | `Sage` generic recipe shorthand vs three different Sage Compendium plants and poisonous Oleander Sage | **CONDITIONAL accepted variant**. Examine actual item recipe, avoid poisoning/forced travel for a named herb. [C02,C20] |
| **D12-X09 — primary evidence and platforms** | No on-point accessible Rockstar-authored exhaustive ingredient matrix and no direct game UI in this task | Secondary independent guides corroborate broad rules. The **same-platform player's UI** wins for observed recipe state; leave disputed specifics marked for review. |
| **D12-X10 — three Sage/Herbalist ranks vs recipes** | Whether multiple early crafts before relevant Herbalist rank credit later | Sources say sequential challenges; **do not promise retroactive completion**. Verify active challenge tracker before high-volume crafting. [C03,C09] |

**Suggested bounded in-game verification:** (a) screenshot Scout Fire category view with Show All and labels, (b) read one starter pamphlet and compare visible recipe status, (c) capture current `Small Game Arrow` and `Improved Throwing Knife` actual ingredient counts, (d) inspect six-recipe Total Completion before/after one category craft; (e) if naturally reaching Herbalist 9 later, compare picked-since-rank tracker to prior Compendium. Do not manufacture a gameplay result for the user.

## 10. Source/claim ledger (per-claim provenance; checked 2026-10-17)

**Classes:** `E1` official developer/in-game text (no new direct primary screenshot in this task), `E2` direct player observation (NONE), `E3` independent editorial game guides (main evidence), `E4` wiki/community (supporting or dispute), `E5` prior project sources (read-only, REVIEW PENDING). Epistemic status: **CORROBORATED / SINGLE_SOURCE / DISPUTED / UNKNOWN**; confidence is separate. Web **access date is not publication/update date nor game-version validation**.

| ID | Independently bounded claim | Source(s) with original URL, publication / update where known | Class · epistemic · confidence |
|---|---|---|---|
| **C01** | Plants can be spotted via Eagle Eye then picked/eaten; picking populates species info | [RDR2.org Plants & Herbs](https://www.rdr2.org/guides/herbs-and-orchids-guide/) (guide originally 2018, site updated 2023); [PowerPyx Plants Locations](https://www.powerpyx.com/red-dead-redemption-2-plants-locations/) (2018-10-31) | E3 / CORROBORATED / HIGH |
| **C02** | 43 documented plant types, 20 collected types for official 100%; habitat-specific species | [PowerPyx Plants Locations](https://www.powerpyx.com/red-dead-redemption-2-plants-locations/) (2018-10-31); [GTA Base 100%](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist) (date not shown); [RDR2.org Plants & Herbs](https://www.rdr2.org/guides/herbs-and-orchids-guide/) (updated 2023) | E3 / CORROBORATED / HIGH |
| **C03** | Herbalist rank list, counts/verbs, sequential ranks | [RDR2.org Herbalist](https://www.rdr2.org/guides/herbalist-challenge-guide/) (2019-01-04, updated 2023); [GameFAQs Challenges](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/challenges) (guide circa 2019) | E3 / CORROBORATED / HIGH for rank wording; retroactivity separate |
| **C04** | Fire access, simple cooking, grill/spice requirement and cooking effects | [RDR2.org Cooking & Crafting](https://www.rdr2.org/guides/cooking-and-crafting-guide/) (2018-12-25, updated 2023); [Gamepressure Crafting](https://www.gamepressure.com/red-dead-redemption-2/crafting-and-recipes/zfb7db) (updated 2020-05-08) | E3 / CORROBORATED / HIGH on basic mechanics, MEDIUM grill timing |
| **C05** | Scout camp offers early crafting; wilderness grill differs / normal Hosea gate | [Red Dead Wiki Cooking Recipes](https://reddead.fandom.com/wiki/Cooking_recipes) (undated wiki); [RDR2.org Cooking](https://www.rdr2.org/wiki/cooking/) (updated 2023); [RDR2.org Crafting](https://www.rdr2.org/guides/cooking-and-crafting-guide/) (updated 2023) | E3+E4 / CORROBORATED / MEDIUM for precise gate |
| **C06** | Pamphlets found/bought/given, per-recipe Fence restrictions; must read obtained pamphlet | [Red Dead Wiki Pamphlets in Redemption 2](https://reddead.fandom.com/wiki/Pamphlets_in_Redemption_2) (undated); [RDR2.org Cooking & Crafting](https://www.rdr2.org/guides/cooking-and-crafting-guide/3/) (updated 2023); [Gamers.Wiki Arrow Recipes Missing](https://gamers.wiki/en/games/red-dead-redemption-2/guides/rdr2-arrow-recipes-missing-read-craft-recover) (2026-08-26) | E3+E4 / CORROBORATED / MEDIUM-HIGH; version test pending |
| **C07** | `Satchel → Documents → Recipe Pamphlets` reading and UI `Show All` diagnostic | [Red Dead Wiki Pamphlets](https://reddead.fandom.com/wiki/Pamphlets_in_Redemption_2); [Gamers.Wiki Campfire Not Working](https://gamers.wiki/en/games/red-dead-redemption-2/guides/rdr2-campfire-crafting-not-working-what-to-check) (2026) | E3+E4 / CORROBORATED / MEDIUM; show-all platform variant |
| **C08** | Wild Mint Health / Oregano Stamina / Thyme Dead Eye; big-game seasoned gold-core example, item-specific strength | [RDR2.org cooking](https://www.rdr2.org/guides/cooking-and-crafting-guide/) and [page 2](https://www.rdr2.org/guides/cooking-and-crafting-guide/2/) (updated 2023); [Red Dead Wiki Big Game Meat](https://reddead.fandom.com/wiki/Big_Game_Meat) | E3+E4 / CORROBORATED / HIGH for 3 mapping |
| **C09** | Challenge 9 current-rank pickups differ from historic Compendium pickups; pick-eat/craft-use rank distinctions | [RDR2.org Herbalist](https://www.rdr2.org/guides/herbalist-challenge-guide/) (updated 2023); [GameFAQs Challenges](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/challenges) (circa 2019); [Reddit firsthand cases](https://www.reddit.com/r/reddeadredemption/comments/1f3br2a/) (2024-08-28), [second case](https://www.reddit.com/r/reddeadredemption/comments/1bno0lc/) (2024-03-25) | E3+E4 / CORROBORATED for sequential rank / MEDIUM for non-retroactivity |
| **C10** | Potent Health Cure (Ginseng+Yarrow); Potent Bitters (Sage+Burdock); Potent Horse Stimulant (Sage+Bulrush) | [SegmentNext recipes](https://segmentnext.com/red-dead-redemption-2-crafting-guide/) (site revised), [RankedBoost Crafting](https://rankedboost.com/red-dead-redemption-2/crafting-cooking-recipes/) (undated); [Gamepressure](https://www.gamepressure.com/red-dead-redemption-2/crafting-and-recipes/zfb7db) (2020); [RDR2.org page 4](https://www.rdr2.org/guides/cooking-and-crafting-guide/4/) (2023) | E3 / CORROBORATED / HIGH for ingredient pairs; spellings/variants verify |
| **C11** | Split Point uses regular cartridge; Small Game Arrow recipe normally 3 components | [RDR2.org crafting page 3](https://www.rdr2.org/guides/cooking-and-crafting-guide/3/) (2023); [Red Dead Wiki tools](https://reddead.fandom.com/wiki/Tools_recipes) (undated); [Gamepressure](https://www.gamepressure.com/red-dead-redemption-2/crafting-and-recipes/zfb7db) (2020; conflicted small-arrow line) | E3+E4 / CORROBORATED Split Point + arrow 3 items, arrow competing table flagged |
| **C12** | Cover Scent Lotion 1 Scent Gland; hunting bait/cover scent non-spawn guarantee | [RDR2.org crafting page 4](https://www.rdr2.org/guides/cooking-and-crafting-guide/4/) (2023); [Gamepressure](https://www.gamepressure.com/red-dead-redemption-2/crafting-and-recipes/zfb7db) (2020); [legacy hunting research](https://github.com/L33TW0RLD/rdr2/blob/main/guides/hunting/perfect_pelts.md) (REVIEW PENDING) | E3+E5 / CORROBORATED for ingredient / HIGH; bait-spawn guarantee NOT ESTABLISHED |
| **C13** | Improved Throwing Knife listed with 2 hawk/eagle feathers vs 1 eagle elsewhere | [RDR2.org crafting page 3](https://www.rdr2.org/guides/cooking-and-crafting-guide/3/) (2023) vs [Gamepressure](https://www.gamepressure.com/red-dead-redemption-2/crafting-and-recipes/zfb7db) (2020) | E3 / DISPUTED / LOW for exact quantity |
| **C14** | Recipe pamphlets have item-specific story and alternative world/Fence source gates | [Red Dead Wiki Pamphlets](https://reddead.fandom.com/wiki/Pamphlets_in_Redemption_2); [RDR2.org crafting page 3](https://www.rdr2.org/guides/cooking-and-crafting-guide/3/); [SegmentNext recipes](https://segmentnext.com/red-dead-redemption-2-crafting-guide/) | E3+E4 / CORROBORATED broad / MEDIUM for special availability |
| **C15** | Official 100% six exact recipe categories, 20 plants and challenge family; not 6 arbitrary crafts | [PowerPyx 100% Checklist](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) (2018); [GamesRadar 100% guide](https://www.gamesradar.com/red-dead-redemption-2-100-completion-guide/) (2020); [GameFAQs Total Completion](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion) (circa 2019); [Gamer Guides](https://www.gamerguides.com/red-dead-redemption-2/guide/extras/trophy-guide/100-completion-checklist) (2018) | E3 / CORROBORATED / HIGH |
| **C16** | Big Game Mint/Oregano/Thyme uses 1 meat+1 herb and yields stronger named effects | [RDR2.org cooking guide](https://www.rdr2.org/guides/cooking-and-crafting-guide/) and [page 2](https://www.rdr2.org/guides/cooking-and-crafting-guide/2/); [Red Dead Wiki Big Game Meat](https://reddead.fandom.com/wiki/Big_Game_Meat) | E3+E4 / CORROBORATED / HIGH |
| **C17** | Personal crafting materials vs Pearson donations / perfect carcass reservation are different | [RDR2.org Pearson](https://www.rdr2.org/guides/story-mode/pearson-crafting-guide/); [main D03](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d03_satchels_crafting_v0_1.md) (2026-10-17, REVIEW PENDING); [main D06](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d06_inventory_items_v0_1.md) (2026-10-17, REVIEW PENDING) | E3+E5 / CORROBORATED for separation / HIGH, no adoption |
| **C18** | Sage plant types and exact accepted variant are not identical to Oleander Sage | [PowerPyx Plants Locations](https://www.powerpyx.com/red-dead-redemption-2-plants-locations/); [RDR2.org plants](https://www.rdr2.org/guides/herbs-and-orchids-guide/) | E3 / CORROBORATED for different names / HIGH; recipe substitution conditional |
| **C19** | Ingredient/catalog conflicts: Small Game arrow, Improved Knife, Horse Meal | [Gamepressure](https://www.gamepressure.com/red-dead-redemption-2/crafting-and-recipes/zfb7db) (2020) vs [RDR2.org](https://www.rdr2.org/guides/cooking-and-crafting-guide/3/), [page 4](https://www.rdr2.org/guides/cooking-and-crafting-guide/4/) (2023), [Red Dead Wiki](https://reddead.fandom.com/wiki/Pamphlets_in_Redemption_2) | E3+E4 / DISPUTED / LOW for competing row |
| **C20** | Oleander Sage toxic when eaten and a poison-crafting ingredient | [Red Dead Wiki Oleander Sage](https://reddead.fandom.com/wiki/Oleander_Sage) (undated wiki); [RDR2.org poison-arrow crafting](https://www.rdr2.org/guides/cooking-and-crafting-guide/3/) | E3+E4 / CORROBORATED for danger / MEDIUM-HIGH |

**Source independence note:** Three pages on RDR2.org are **one publisher**, not three independent confirmations. Repeated wiki tables can copy old guide errors. No on-point first-party ingredient table or controlled in-game screenshots were obtained; claim confidence is bounded accordingly. Other user-file/adoption material was read-only; it is NOT an external confirmation.

## 11. GameGuide / Free Roam handoff, unresolved owner decisions, stop rule

**GameGuide consumer flow (read-only):** If user asks about an herb or recipe, answer **source-backed recipe/general gate** first; ask for/inspect **actual displayed name, active challenge rank, satchel quantity, recipe learned/unavailable and station category** only when necessary. For current live missions, prioritize complete mission Field Guide; no improvised off-mission crafting detour during Gold timer. If a craft is actually performed and a save is reported, the **original** `L33TW0RLD/rdr2/campaign/` and GameGuide evidence workflow alone determine any recorded outcome; Atlas cannot.

**Free Roam / Companion (read-only) suggestion:** Offer one **short, optional** herb learning walk or cook/tonic demonstration and preserve discoveries. Never mandate collecting all 43 species in Chapter 2. Do not claim unlocked U01 grill, a horse, read pamphlet or 6/6 status. If player expresses 100% intent, remind them **six categories** + **20 distinct plants** and that challenges are a separate longer route; use observed UI for progress.

**Open bounded evidence questions for coordinator review:**
1. Same-version confirmation of **three** Small Game Arrow components vs the incorrect two-line table.
2. Confirm exact **Improved Throwing Knife** feather count and actual `Weapon` crafting category.
3. Check real **Horse Meal** 3-and-3-and-3 vs guide OR error; do not recommend without inspection.
4. Confirm `Show All`, pamphlet reading and grill conditions for a fresh Chapter 2 session across PC vs controllers; no fixed control glyph.
5. When player organically reaches Herbalist 9, document whether prior picks are excluded; don't request grinding/replaying prematurely.
6. D09 and D15 Wave 2 specialist compatibility review by coordinator when delivered, with **provisional** leaf names and source conflicts intact.

**Owner-review request:** audit the cross-publisher evidence, completion semantics, interface/classification risk and typed candidate links. Coordinator alone may promote into shared Atlas index through a separately authorized integration review; `RESEARCHED — REVIEW PENDING` must remain visible until an actual owner/GameGuide decision. No task author self-adopts or self-merges.

**Task stop:** deliver this substantive dossier plus separately committed task checkpoint and final handoff at `DELIVERED_REVIEW_PENDING`. Do **not** touch shared indexes/registry/old D03, alter `rdr2`, merge, or self-assign a follow-up. The persistent Specialist 011 conversation may be reused only after a new coordinator assignment.
