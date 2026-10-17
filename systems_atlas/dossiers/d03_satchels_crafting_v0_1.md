# D03 — Pearson Satchels, Material Banking and Whole-Carcass Boundaries

**Status:** RESEARCHED — REVIEW PENDING (`RESEARCHED_REVIEW_PENDING`, not ADOPTED)  
**Research date / checked:** 2026-10-17  
**Scope:** Red Dead Redemption 2 **Story Mode**; Chapter 2 practical application (T0/T1) across PS4/PS5-compatibility, Xbox One/Series-compatibility and PC; no direct game-session or edition-by-edition testing conducted. Control glyphs, costs, menus, special editions and later access require inspection in the player's version.  
**Task / authority:** `atlas-satchels-011`, [GitHub issue #11](https://github.com/L33TW0RLD/rdr2-hub/issues/11), branch `agent/atlas-satchels-011`. General mechanic research only. Player possessions, chapter flags, satchels owned and any completed mission remain **UNKNOWN** unless established by the live original `rdr2/campaign/` and player evidence.  
**Atlas coverage (proposed ID registry, not yet ratified):** **S10.M01** carrying-capacity satchel types; **S10.M02** recipes, tools and unlock tasks; **S10.M03** donations/material stocks and recipient separation; **S10.M04** decorative camp crafts; **S12.M04** skin versus whole carcass; **S17.M03** reserve, donate, sell. Gate **U03** conditional.  
**Explicitly out of scope:** D02/S09.M01–M04 Ledger purchasing and camp funds; D04/S12.M01–M03, M05 weapon-by-species, clean kills, decay and hauling; D06/S17.M01/M04 inventory taxonomy/rare valuables; any player's live progression; Trapper legendary-animal recovery research and full hunting-request route. Links to those **unmerged** specialist dossiers are provisional, read-only.

## 0. Practical answer and safety rule (T0)

**Inspect Pearson's `Crafting Upgrades → Satchels` menu before planning a hunt.** There are **seven** satchels. Each recipe needs **one perfect deer pelt plus two other specified perfect ordinary-animal materials**. To obtain a satchel from Pearson, the camp needs access to the Ledger, the **Leather Working Tools** purchase, that satchel's **separate unlock task**, and its **donated crafting materials**. These conditions are independently checkable; opening the menu is not proof that tools were purchased or that the item was crafted. [C01–C04]

**Default material-routing decision:** preserve a perfect pelt until you know the recipe; at Pearson's butcher wagon/table, distinguish a `Donate for Crafting` item from `Donate for Provisions` or `Donate for Funds`. Do not assume that ordinary donations to the butcher, Trapper or camp box reserve a specific satchel input. Previously donated *crafting* pelts remain in **Pearson's** usable crafting inventory, not the player's carried satchel and not the **Trapper's** inventory. Inspect the crafting requirement counter after donation. [C05–C06]

**Before skinning any animal:** if the target recipe/request explicitly names a **perfect carcass**, keep the entire animal **unskinned**. Pearson decor examples: **ram**, **pronghorn** and **wolf** skulls. Separate hunting-request objectives can likewise require **perfect intact carcasses**. A perfect pelt is **not** an interchangeable carcass. For the Ingredients Satchel's **squirrel**, reputable recipe sources disagree on the noun; the stronger multi-source reading is **perfect squirrel pelt** (not necessarily whole carcass), but **inspect the exact in-game material name before processing it**. [C07–C09]

### Fast diagnostic (do not assume the answers)
| Observed condition | Safe interpretation / next check |
|---|---|
| Ledger not present | U02 is not evidenced; confirm first qualifying Strauss debt recovery **and deposit** rather than completing the entire debt storyline by assumption. D02 owns exact purchase path. |
| Ledger present, tools absent | Buy `Leather Working Tools` from Ledger when actually available; this is a separate purchase, **not** the same thing as donating pelts or improving provisions. |
| Tools present, recipe locked | Read **that satchel's** independent milestone in Pearson's screen; animal materials alone cannot bypass it. |
| Recipe available, ingredient missing | Inspect the required material and Pearson's donated amount. The material might still be carried, routed to another vendor, or never donated. Do not assign a cause without observation. |
| Pearson shows `Donate for Crafting` | Candidate material to bank at **Pearson**; confirm updated ingredient count in upgrade menu after donation. |
| Item shows `Donate for Provisions` / `Donate for Funds` | Do not promise crafting credit; preserve another qualified material if required. |
| Obtained a three-star carcass for a skull/request | Keep **unskinned** until the actual target and recipient are confirmed. |
| Already crafted a satchel | Observe upgraded category limit in inventory, rather than treating wardrobe appearance or local planning ticks as the acquisition proof. |

## 1. Definitions, access and UI feedback — S10.M01/M02

- **Pearson:** gang camp cook/butcher; he accepts animal materials and offers `Crafting Upgrades` including satchel capacity upgrades and camp decorations. He also handles meat/provisions; those functions are related but **not identical inventory stocks**. Gameplay interaction occurs at his camp table/wagon. Context actions (including `Donate`, `Crafting Upgrades`) and input buttons depend on platform and current situation. [C01,C05]
- **Leather Working Tools:** a **camp Ledger upgrade**, frequently listed at **$225 base** by GameFAQs/PCGamesN; RDR2.org quotes **$180** without a clearly matched edition/discount scenario. Price is a **D02 interface detail**, not an asserted universal amount here: **read the actual Ledger price** and discount before purchase. [C02,C14]
- **Gate U02 → U03:** source-backed normal route: complete a **qualifying Strauss debt recovery and return/deposit** into the camp donation box to enable the Ledger; then buy Leather Working Tools, rather than waiting for all debts, and inspect Pearson. This describes **normal conditions, not current ownership**. [C02]
- **Per-recipe milestone:** separate from U03 and perfect materials: cash vs three valuables vs five carcasses vs three campfire crafts vs two wagon upgrades vs all preceding satchels. All must be established independently by the visible UI. [C03]
- **Capacity:** each regular satchel upgrades the **named item category**, not every class. Sources describe permanent benefits for acquired upgrades even if a different satchel cosmetic is worn; **Legend of the East** increases **most ordinary item stacks** up to **99** once crafted. Avoid universal claims about all unique/quest objects, weapons or horse cargo. [C04]
- **Actual feedback:** Pearson's crafting menu lists recipe requirements / locked condition and donated amounts; the donate interface displays the destination label for selected materials; the character's inventory/Compendium reflects acquired equipment. These are actionable check surfaces, **not** remote save-state data. [C05]

## 2. Exact seven-satchel recipe + unlock matrix — S10.M02

Each material count is **one**, and **all are perfect quality**. Names below use the more widely corroborated **pelt/skin/hide** form; the *Squirrel* row remains specifically disputed. A deer is needed **for each satchel**, including the final one. [C03,C07]

| Satchel / category benefit | 3 required perfect materials (1 each) | Additional *individual* prerequisite after tools | Checks / cited claims |
|---|---|---|---|
| **Tonics** — carry more tonics | **Deer pelt + Buck pelt + Elk pelt** | Upgrade **Medicine** supply wagon **twice** | C03,C04 |
| **Ingredients** — carry more edible/crafting ingredients | **Deer pelt + Badger pelt + Squirrel pelt** (pelt/carcass wording **DISPUTED**) | Donate **5 animal carcasses** to Pearson (ordinary donor milestone, separate from the recipe ingredient) | C03,C07,C08 |
| **Kit** — carry more kit-use items | **Deer pelt + Elk pelt + Panther pelt** | Donate **3 valuables** to camp contribution/tithing box | C03,C10 |
| **Provisions** — carry more provisions/food | **Deer pelt + Bison pelt + Raccoon pelt** | Upgrade **Provisions** wagon **twice** | C03,C04 |
| **Materials** — carry more mostly inedible crafting materials | **Deer pelt + Boar pelt + Iguana skin** | Craft **3 recipes/items at Scout campfire** | C03,C11 |
| **Valuables** — carry more valuables | **Deer pelt + Beaver pelt + Rabbit pelt** | Donate **$50 cash** to the camp tithing box (not equivalent to three valuable *objects*) | C03,C10 |
| **Legend of the East** — major cross-category capacity, typically up to **99** for most items | **Deer pelt + Cougar pelt + Wolf pelt** | **Craft the other six satchels first**, then gather/submit the final recipe | C03,C04 |

**Seven-satchel distinct-item totals (not decorative camp upgrades):** **7 perfect deer pelts; 2 perfect elk pelts; 1 each of** buck, badger, squirrel, panther, bison, raccoon, boar, iguana, beaver, rabbit, cougar and wolf: **21 required material units from 14 animal types** (7+2+12 = 21). These are recipe aggregates, **not** claims about what the player has collected, or guaranteed numbers of hunts. The five-carcass *milestone* is separate and is not an additional five **perfect pelts**. [C03]

**Do not merge this with camp decor**: the wolf and cougar hides for the final satchel are separate from hides/carcasses needed by cosmetic projects. An intact wolf carcass delivered for a skull should not be counted **also** as a pelt for the final satchel unless actual crafting UI independently credits it.

### Recipe reliability nuances

1. **Squirrel pelt vs squirrel carcass:** GameFAQs (2019), GamesRadar, Gameskinny, GameRevolution and a picture-led Ingredients Satchel guide specify **Perfect Squirrel Pelt**. RDR2.org Pearson/Satchel pages repeatedly say **Perfect Squirrel Carcass**. No Rockstar-authored recipe screenshot or repeatable same-version in-game test was obtained. **Operational priority:** inspect Pearson Ingredients Satchel recipe noun. If it says *pelt*, a whole squirrel is **not** safely presumed credited to the pelt line; in some play contexts a squirrel can be broken down from the satchel. If it explicitly says *carcass*, do not skin it; donate **whole**. Keep game UI as the final branch-specific authority. [C07,C08]
2. **Kit prerequisite:** Red Dead Wiki Pearson page's quick list says `None`, while GameFAQs, GamesRadar, High Ground Gaming and RDR2.org explicitly require **3 valuables donated**. Treat the latter as well corroborated; if the visible Pearson screen differs, label the field observation and re-review rather than forcing that lock. [C10]
3. **Leather Working Tools price:** *base vs discounted/edition* cannot be reconciled from the $225 GameFAQs price and $180 RDR2.org quote alone. Price is not necessary to get the recipe correct; follow D02's separately reviewed cost policy. [C14]

## 3. Three recipient systems and resource accounting — S10.M03 / S17.M03

| Action / destination | What it can accomplish | What it **does not** prove |
|---|---|---|
| **Pearson → Donate for Crafting** with needed eligible perfect material | Banks eligible material **at Pearson**, can be used later when sufficient recipe components/gates exist; GameFAQs describes material remaining there after separate trips. | It was already **crafted**, the relevant unlock task is done, or the Trapper owns the material. |
| **Pearson → Donate for Provisions** or other non-crafting donation | Supplies camp food/economic value as interface indicates. | Reservation for a satchel. |
| **Camp tithing / contribution box** | Pays cash or accepts valuables; relevant to **$50 cash** or **3 valuables** satchel unlock tasks; also camp finances. | That Pearson received **perfect skins** or that tools were purchased. |
| **Pearson → Crafting Upgrades → Satchels** | Consumes banked eligible recipe stock when all requirements satisfied; creates **one equipped/unlocked satchel upgrade**. | A mere open/visible recipe proves ownership. |
| **Pearson → Crafting Upgrades → Camp decorations** | Makes an eligible **cosmetic camp object** from its own recipe inputs. | Satchel capacity or official 100% obligation. |
| **Trapper → Sell qualifying hides/materials** | Banks that stock for **Trapper** garment/tack recipes, often with a further item price. | Pearson ingredient reservation or automatic satchel construction. |
| **Butcher ordinary sale** | Converts a resource to money. | That either Pearson or Trapper has the material for crafting. |
| **Other recipient (e.g. hunting request)** | Credits **its specified carcass/item** only under that objective's particular hand-in rules. | That a pelt donated to Pearson counts for the request. |

**Persistence scope:** multiple reputable guides document that **Pearson retains *donated-for-crafting* eligible materials across trips until crafting**, even where the other recipe pieces are absent. This is *recipient-specific stock*, not an extra physical pelt on Arthur or an item shared with Trapper. Exact accounting for duplicate donations, surplus, material losses across story moves, and all UI localization variations **was not directly tested**; verify counters and do not promise refunds or vendor transfers. [C05,C06]

**Decision rule for a precious three-star hide:** recipe of interest → intended **recipient** → actual donate prompt → return to that recipient's craft list to verify count. If you wish to use it at the Trapper, **don't sell it elsewhere**. If the material serves no selected near-term objective, ordinary food/money donations are a valid player choice, not a failure.

## 4. Pearson's decorative crafts and intact-carcass boundaries — S10.M04/S12.M04

Decorative camp items are **cosmetics, not satchel slots**. D02 owns Ledger/tool purchase details, and some decor lines may be craftable without Leather Working Tools; inspect Pearson's recipe-level gate rather than asserting every decor item is tools-locked. The following **17-item** matrix is sourced from RDR2.org's Pearson guide, substantially matched by Red Dead Wiki. Distinguish *carcass* from pelt and even antler; **do not skin** when recipe says carcass. [C09,C12]

| Pearson decoration (location) | Required exact components (RDR2.org) | Route warning |
|---|---|---|
| Alligator Skull (Arthur's lodging) | **1 Perfect Alligator Skin** | Skin; not carcass |
| Big Horn Ram Skull (Arthur's lodging) | **1 Perfect Ram Carcass** | **WHOLE** |
| Cougar Pelt Covered Chest (Arthur's lodging) | **2 Perfect Cougar Pelts** | 2 distinct pelts; competes with satchel cougar |
| Boar Skin Table Cover (Arthur's lodging) | **1 Perfect Boar Pelt** | Separate from boar rug/satchel |
| Ox Hide Rug (Arthur's lodging) | **2 Perfect Ox Hides** | Two hides |
| Boar Skin Rug (John's lodging) | **4 Perfect Boar Pelts** | Four extra hides |
| Pronghorn Leather Table Tops (camp tables) | **2 Perfect Pronghorn Hides** | Skin for hides |
| Pronghorn Skull (chuckwagon) | **1 Perfect Pronghorn Carcass** | **WHOLE** |
| Moose Antlers (main campfire) | **1 Moose Antler** | Antler; not perfect pelt |
| Wolf Skull (main campfire) | **1 Perfect Wolf Carcass** | **WHOLE**; competes with final satchel wolf |
| Snake Skin Banjo Head (main campfire) | **2 Perfect Snake Skins** | Two skins |
| Campfire Seat Cover (main campfire) | **1 Perfect Beaver + 1 Perfect Muskrat + 1 Perfect Fox Pelt** | Three separate species |
| Campfire Log Seat Cover (main campfire) | **2 Perfect Wolf Pelts** | Pelts, not whole carcasses |
| Lean-to Cow Hide Ground Cover (main campfire) | **1 Perfect Cow Hide** | Hide |
| Scout Fire Ground Covers (scout fire) | **2 Perfect Goat Hides** | Two hides |
| Elk Antlers (scout fire) | **1 Elk Antler** | Antler; no assumption of perfect pelt |
| Hanging Bones (scout fire) | **1 Buck Antler** | Antler; not the buck pelt required for Tonics |

**Competing extra camp-entrance lines:** GameFAQs lists `Buck Skull = 1 Perfect Buck Carcass` and `Fur Horse Blankets = 2 Perfect Coyote Pelts + 1 Perfect Bison Pelt`. These **do not appear in RDR2.org or Red Dead Wiki's 17-craft lists**. Status **DISPUTED/edition-or-catalog mismatch**; do **not** promise them as universally craftable without a matching visible Pearson menu. If the player's menu shows a *Buck Skull* requirement, preserve the **whole buck** rather than a pelt. [C13]

**Non-Pearson intact-carcass requirement:** train-station **hunting requests** explicitly require particular **perfect, unskinned, intact carcasses** as part of separately staged hand-ins; the requesting recipient is **not Pearson**. The animal list and later unlock/collection steps are outside this dossier (D20). Skinning one is a consequential error; a perfect pelt is not a substitute. Consult the exact request list before harvest. [C09]

**Important distinction:** the Ingredients Satchel's **5 donated carcasses** are an **unlock count** and do not equal five special *perfect whole-carcass crafting components*. Even if an acceptable carcass donation increments that milestone, do not infer a different carcass stored for a decoration. [C03,C09]

## 5. Gates, typed relationships and spoiler handling

The **typed edge directions below are candidates under the unratified Atlas schema**; no hard gate propagates to live player status:

| Source mechanic | Proposed edge → target | Basis / scope |
|---|---|---|
| S10.M02 | `REQUIRES → U03` (U02 + Leather Working Tools) | General Pearson satchel crafting; **read-only** D02 `S09.M01`, `S09.M04` [C02] |
| S10.M02 | `REQUIRES → individual recipe milestone` | Table of 7 satchels, not a single universal prerequisite [C03] |
| S10.M02 | `MATERIAL_FOR ← S12.M03` | Appropriate-quality result from ordinary hunting; D04 owns how it is obtained |
| S10.M03 | `OUTPUT_TO → Pearson`, `INTERACTS_WITH → S17.M03` | Recipient-specific crafting donation; D06 owns general preservation |
| S10.M03 | `CONFLICTS_WITH → S13.M03 ordinary Trapper sale` | One pelt cannot be donated to Pearson and separately held at Trapper [C06] |
| S10.M04 | `INTERACTS_WITH → S12.M04` | Whole carcass / pelt / antler distinctions [C09] |
| S10.M01 | `IMPROVES → S17.M01` | Category carrying capacity; no horse cargo or ammunition capacity implied [C04] |
| S10.M01 | `CONTRIBUTES_TO → Compendium Equipment subset` | Qualified acquisition may help **10 equipment obtained** criterion, not all-seven requirement [C15] |
| S10.M02 | `INTERACTS_WITH → S16.M03/S16.M05` | Three scout-fire crafts milestone is **not** the official six-category crafting threshold [C11,C15] |

**Chapter / availability risks (T0/T1):** Story Mode camp and Ledger systems are conditional; **do not assume current availability solely from Chapter 2**. Hunting/money spend is optional and can be done gradually, with predator risk if pursuing panther/cougar; D04 governs field safety. Crafting can consume scarce material; preserve the intended receiver. Camp cosmetics do **not** have identified chapter-irreversible risk proven here; if a player cares about all optional camp appearances, review active chapter/camp UI before advancing story. Source(s) are not enough to assert all decor stays craftable later.

**Later-game exception (T2 — do not surface unprompted in early Chapter 2 UX):** several secondary guides describe buying previously uncrafed satchels from a **Fence in the Epilogue**. This is an eventual alternative, **not an early-game substitute or proof the player has access**; verify story/edition in-game, no future plot details included. [C16]

## 6. Completion tags with precise scopes

| Tag | Actual researched criterion and evidence | D03 interpretation |
|---|---|---|
| **CONVENIENCE** | Upgraded item-type carrying capacity; Legend of the East normally 99 for many ordinary item categories [C04] | Strong practical benefit; no compulsory purchase |
| **OPTIONAL_EXHAUSTIVE** | Obtain each of 7 named Pearson satchels + desired 17 documented cosmetics (and investigate 2 disputed GameFAQs extra designs) [C03,C12,C13] | Player-chosen collection goal; **not official 100%** |
| **OFFICIAL_100 / equipment subset** | Obtain **10 pieces of Equipment**, checked via in-game `Progress → Total Completion` and `Compendium → Equipment`; satchels are among Equipment listings [C15] | Individual satchels *can contribute to* eligible equipment acquisition; **all 7 satchels not a named mandatory threshold** |
| **OFFICIAL_100 / six recipes** | One each of 6 specific crafting categories (cooking, tonic, ammo, hunting, horse care, weapon) [C15] | **3 recipes at Scout Fire** is only a **Materials Satchel gate**; don't silently credit any official Total Completion craft categories |
| **IMMERSION** | Optional Pearson camp decorative appearance [C12] | Aesthetic preference; not capacity, Gold or achievement |
| **ALL_GOLD** | No satchel-specific Gold mission requirement established by evidence reviewed | **NONE**; mission detours may threaten time objectives |
| **ACHIEVEMENT** | No proven dedicated story trophy requiring **all seven** satchels | **UNKNOWN/NONE** for all-seven claim; do not confuse with `Best in the West` 100% threshold |

**No official or informal goal is marked completed here.**

## 7. Three common mistakes + three organic Chapter 2 examples

**Mistakes:**
1. **Mixing currencies / milestones:** donating valuables for the **Kit** lock isn't the **$50 cash** for **Valuables**, and neither purchases Leather Working Tools.
2. **Mistaking a donation destination:** selling a perfect beaver skin to Trapper or donating it as provisions does not bank it **at Pearson** for Valuables.
3. **Skinning a whole-carcass target:** a perfect pronghorn pelt does not fulfill Pearson's **Pronghorn Skull** request for a perfect *carcass*; source-specified whole carcasses for hunting requests must likewise remain intact. The squirrel source conflict needs a recipe-menu check, not guesswork.

**Example A — casual deer near camp (T0):** Player observes a clean **perfect deer pelt**. If targeting a satchel and Pearson is available, open his satchel recipes, keep or donate it **for crafting** and verify that recipe's stored-material count. **Do not** infer a new satchel or any purchased tools from the donation. A deer pelt is useful across all 7 recipes, but each recipe needs its own donated instance.

**Example B — a small-animal outing (T0):** Player observes a three-star squirrel and plans **Ingredients Satchel**. Preserve the carcass during collection while checking the intended objective; then inspect Pearson's exact *squirrel pelt/carcass* line before choosing skin/breakdown or direct donation. If also working the **5 carcass milestone**, track that separately from the **one squirrel recipe material**. Use D04's source-backed small-game weapon guidance, not a magic guaranteed pelt strategy.

**Example C — camp decor vs satchel (T0/T1):** Player returns with a **perfect unskinned wolf** and wants an attractive camp skull *and* progress on Legend of the East. Pearson's wolf-skull decor asks for **whole carcass**, Legend of the East asks for **pelt**; one routed donation should **not** be counted twice. Choose target first. If uncertain and either goal matters, preserve intact and inspect both menus before donation; don't assume Trapper stock or another camp donation is shared.

## 8. Evidence sources and claim ledger

**Classes:** `E1` official Rockstar text (none sufficiently specific found for exact satchel recipes), `E2` directly observed game UI (none supplied or independently tested for this task), `E3` independent established walkthrough/guide, `E4` researched legacy Hub/GameGuide documentation **REVIEW PENDING** (not automatically adopted), `E5` wiki/community reports (supporting, dispute lead). All URLs checked **2026-10-17**, which is *not* a game patch date; pages may predate this check. `CORROBORATED` means at least two editorially independent references; RDR2.org's multiple guides are **one publisher**, not two independent confirmations.

| Claim | Exact proposition | Class / URL / publisher | Evidential status; confidence |
|---|---|---|---|
| **C01** | Pearson offers satchel/camp decoration crafting at camp, distinct from food hand-ins | E3 [GameFAQs camp](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/camp); E3 [RDR2.org Pearson guide](https://www.rdr2.org/guides/story-mode/pearson-crafting-guide/) | CORROBORATED / HIGH |
| **C02** | Normal U02 Ledger after qualifying first Strauss debt returned/deposited; Leather Working Tools purchased separately for satchel crafting | E3 [PowerPyx camp upgrades](https://www.powerpyx.com/red-dead-redemption-2-how-to-upgrade-camp/); E3 [GameFAQs camp](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/camp) | CORROBORATED / HIGH for rule; player's state UNKNOWN |
| **C03** | Exact seven recipe materials, 7 individual unlock tasks, 7 deer + 2 elk + 12 other material units | E3 [GamesRadar satchels](https://www.gamesradar.com/red-dead-redemption-2-satchel-upgrades/); E3 [GameFAQs camp](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/camp); E3 [RDR2.org satchels](https://www.rdr2.org/guides/red-dead-redemption-2-satchel-crafting-guide-increase-inventory-space/) | CORROBORATED / HIGH **except squirrel noun**, see C07 |
| **C04** | Individual satchels increase category capacity; Legend of the East to 99 for most; acquired bonuses persist despite cosmetic changes | E3 [GamesRadar](https://www.gamesradar.com/red-dead-redemption-2-satchel-upgrades/); E5 [Red Dead Wiki satchel](https://reddead.fandom.com/wiki/Satchel) | CORROBORATED for category/99 / HIGH; permanence specific source E5 / MEDIUM |
| **C05** | Pearson `Donate for Crafting` materials remain credited until craft on separate trips | E3 [GameFAQs camp](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/camp); E5 [Steam donation discussion](https://steamcommunity.com/app/1174180/discussions/0/2949285188565785010/) | CORROBORATED / MEDIUM-HIGH (no in-game serial tests of edge cases) |
| **C06** | Ordinary Pearson crafting, Trapper sold/crafting stock and butcher sale are not shared | E3 [RDR2.org satchel guide](https://www.rdr2.org/guides/red-dead-redemption-2-satchel-crafting-guide-increase-inventory-space/); E4 [legacy Pearson-v-Trapper research](https://github.com/L33TW0RLD/rdr2/blob/main/guides/hunting/pearson_vs_trapper.md); E3 [RDR2.org Trapper](https://www.rdr2.org/guides/trapper-crafting-materials-guide/) | CORROBORATED / HIGH |
| **C07** | Ingredient Satchel asks for a **Perfect Squirrel Pelt** per multiple sources | E3 [GameFAQs camp](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/camp); E3 [GamesRadar](https://www.gamesradar.com/red-dead-redemption-2-satchel-upgrades/); E3 [GameRevolution](https://www.gamerevolution.com/guides/453601-red-dead-redemption-2-leather-working-tools-satchels-upgrade-guide); E3 [Meshcontent screenshot guide](https://meshcontent.com/red-dead-redemption-2-how-to-upgrade-ingredients-satchel/) | CORROBORATED / MEDIUM; **DISPUTED** by C08 |
| **C08** | RDR2.org labels the same squirrel input **Perfect Squirrel Carcass**, not pelt | E3 [RDR2.org Pearson](https://www.rdr2.org/guides/story-mode/pearson-crafting-guide/); E3 [RDR2.org satchel guide](https://www.rdr2.org/guides/red-dead-redemption-2-satchel-crafting-guide-increase-inventory-space/) | DISPUTED / MEDIUM; same publisher (not independent corroboration) |
| **C09** | Pearson Ram/Pronghorn/Wolf Skulls use *perfect carcasses*, and separate hunting requests require unskinned perfect carcasses | E3 [RDR2.org Pearson](https://www.rdr2.org/guides/story-mode/pearson-crafting-guide/); E3 [GameFAQs camp](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/camp); E3 [PowerPyx hunting requests](https://www.powerpyx.com/red-dead-redemption-2-all-hunting-request-locations/) | CORROBORATED / HIGH |
| **C10** | Kit milestone 3 valuables and Valuables milestone $50 cash, distinct | E3 [GamesRadar](https://www.gamesradar.com/red-dead-redemption-2-satchel-upgrades/); E3 [High Ground Gaming](https://www.highgroundgaming.com/rdr2-satchel-upgrade-guide/); E3 [GameFAQs camp](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/camp) | CORROBORATED / HIGH; Red Dead Wiki Pearson entry's Kit `None` listed as dispute |
| **C11** | Materials gate needs three Scout Fire crafted recipes/items; distinct from six official crafting types | E3 [GamesRadar](https://www.gamesradar.com/red-dead-redemption-2-satchel-upgrades/); E3 [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) | CORROBORATED / HIGH |
| **C12** | 17 listed Pearson decorative recipes and ingredient quantities; some do not need tools | E3 [RDR2.org Pearson](https://www.rdr2.org/guides/story-mode/pearson-crafting-guide/); E5 [Red Dead Wiki Pearson](https://reddead.fandom.com/wiki/Simon_Pearson) | CORROBORATED for recipe list / MEDIUM-HIGH; inspect individual gate |
| **C13** | GameFAQs lists extra Buck Skull and Fur Horse Blankets missing from other lists | E3 [GameFAQs camp](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/camp) versus E3 [RDR2.org Pearson](https://www.rdr2.org/guides/story-mode/pearson-crafting-guide/) | DISPUTED / LOW until UI test |
| **C14** | Leather Working Tools price appears **$225** or **$180** in different guides | E3 [GameFAQs camp](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/camp); E3 [PCGamesN satchels](https://www.pcgamesn.com/red-dead-redemption-2/satchel-upgrades); E3 [RDR2.org Pearson](https://www.rdr2.org/guides/story-mode/pearson-crafting-guide/) | DISPUTED price context / MEDIUM; D02 owns |
| **C15** | Total Completion uses 10 equipment obtained and six specific crafting *categories*; satchels appear in equipment compendium, all-seven not demanded as a named criterion | E3 [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/); E3 [PowerPyx compendium](https://www.powerpyx.com/red-dead-redemption-2-full-compendium/) | CORROBORATED / HIGH for distinction |
| **C16** | Later epilogue may permit Fence purchase of otherwise uncrafted satchels | E3 [GameFAQs camp](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/camp); E5 [Red Dead Wiki satchel](https://reddead.fandom.com/wiki/Satchel) | CORROBORATED / MEDIUM; T2 only; no current availability asserted |

**Legacy provenance:** `L33TW0RLD/rdr2/guides/hunting/pearson_vs_trapper.md` was **RESEARCHED — REVIEW PENDING** on 2026-10-12 and is not a ratified mechanic authority. `rdr2/guides/inventory/system_blueprint.md` remains a **DRAFT architectural blueprint**; it is not evidence for mechanics. The Atlas taxonomy/schema and Gate U03 are **proposed / review pending**, not a final product contract.

## 9. Contradictions, uncertainty, test plan and safe fallbacks

| Issue | Conflicting statements | Disposition / exact test |
|---|---|---|
| **D03-X01 squirrel** | RDR2.org `squirrel carcass` vs four independent references `squirrel pelt` | **DISPUTED**. Inspect `Ingredients Satchel` menu screenshot in active Story Mode; compare pelt count after controlled skin/breakdown vs intact donation if ethically feasible. Until then, retain the intact animal and check recipe. |
| **D03-X02 Kit milestone** | Red Dead Wiki Pearson table `None` vs GameFAQs/GamesRadar/HGG `3 valuables` | Use 3 valuables as researched normal gate; compare **actual lock text**. No unilateral schema edit. |
| **D03-X03 tools price** | $225 vs $180, discounts/editions not controlled | D02 verify normal, honor/edition discount and actual Ledger screenshot; **no global price** asserted. |
| **D03-X04 optional decor list** | 17 RDR2.org/Red Dead Wiki recipes vs 19 GameFAQs entries (extra entrance items) | Treat two extras provisional; inspect actual Pearson cosmetic category per version. |
| **D03-X05 crafting-stock edge cases** | Stored material normally persists across trips, but no authoritative controlled test of all categories across camp moves / excess donation | Trust documented normal banking, verify Pearson material counter after returning; do not promise refund, cap, cross-vendor transfer, or automatic credit for all whole carcasses. |
| **D03-X06 appearance / capacity limits** | Wiki says upgrades persist under wardrobe cosmetics and Legend of East 99; item-specific exceptions not comprehensively measured | Verify relevant inventory item max in UI; avoid `99 of every single item` literal. |
| **D03-X07 camp skull carcass handling** | Some guides may interpret whole animal as harvested pelt+carcass; actual donation UI varies | Preserve animal unskinned until recipient requirement is verified, never instruct pre-skinning. |
| **D03-X08 direct official source** | No on-point accessible Rockstar-published recipe matrix located in this research pass | Independent guides triangulated; direct on-screen Pearson UI is proposed highest-priority verification, not claimed performed. |

**Observed vs universal:** No actual player screenshot, UI test, saved file, owned satchel, stored material counter or cash amount supplied for this task. Therefore **UNKNOWN** for U02, U03, any satchel unlock/craft, camp cosmetics or milestone. An individual game screenshot can establish the player's case but should not overwrite cross-edition research silently. External webpages checked 2026-10-17; no release/patch compatibility audit performed.

## 10. GameGuide / Free Roam / dashboard handoff (read-only, not a progress write)

Suggested response pattern on an optional Chapter 2 satchel question:
1. Ask/inspect **Pearson satchel recipe** (which recipe and on-screen lock?). If tools/ledger missing, report conditional gate U03 and link **D02 read-only**; never declare unlocked.
2. Select **one target satchel** rather than launch a mandatory 21-pelt route. Show its exact 3-material + independent unlock recipe row.
3. If the player has a material in hand, warn against wrong **recipient** and distinguish pelt/carcass; use D04 for species-specific clean-kill equipment and actual hauling, D06 for item dispositions.
4. If the squirrel, intact decor or special price discrepancy affects a decision, say **DISPUTED** and have player read/photograph the relevant in-game UI.
5. If player reports craft and save, **GameGuide/campaign** alone handles any verified progress; a D03 checklist cannot grant an inventory item.
6. Present only T0/T1 content by default; keep future fence access behind opt-in. Never force a crafting detour during a timed Gold mission.

**Suggested consumer data fields (not a new shared schema):** `target_satchel`, `general_rule`, `required_materials`, `observed_menu_gate` (ephemeral, UNKNOWN by default), `per_recipe_milestone`, `recipient`, `whole_carcass_warning`, `claim_ids`, `crosslink_maturity`, `followup_in_game_verification`. Do not persist player progress on Atlas records.

## 11. Remaining bounded questions / owner-review request

- Verify D03-X01 exact squirrel noun and whether unskinned squirrel donation can fulfill the *pelt* line; photograph the Pearson menu and donor credit before/after on the same version.
- Verify D03-X04 whether the two GameFAQs-only entrance decor lines are accessible in ordinary Story Mode, perhaps dependent on edition/chapter.
- Review D03-X05 cross-camp transition and donated-material persistence only if the product plans to promise uninterrupted banking.
- Obtain edition/platform-specific screenshots for price and capacity edge cases before promoting exact UI constants (D02 leads price).
- Confirm D02/D04/D06 branch maturity and final approved crosslinks during **coordinator integration**, not inside this leased dossier.

**Requested reviewer action:** fact-check matrix, source independence, disputed squirrel/extra decor handling, proposed S10/S12/S17 crosslinks and completion scope. Then coordinator may stage an integration review and shared-index update **under separate authorization**. This branch itself is **RESEARCHED — REVIEW PENDING**, never adopted by the specialist.

**Stop rule:** once dossier/checkpoint/final handoff are verified on `agent/atlas-satchels-011`, report `DELIVERED_REVIEW_PENDING`, no PR merge, no changes to registry/taxonomy/index or original `rdr2`, and do not self-assign further work.
