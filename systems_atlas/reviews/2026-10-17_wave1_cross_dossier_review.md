# Systems Atlas — Wave 1 Cross-Dossier Integration Review

**Date:** 2026-10-17 · **Coordinator review:** `atlas-wave1-integration`
**Status:** **STRUCTURE VERIFIED / RESEARCH INTEGRATED AS REVIEW PENDING** — source claims not independently exhaustively validated; no dossier is ADOPTED, no taxonomy/S31 ratification, no player-state write.

## 1. Source receipts and boundaries

All six specialist branches were inspected against latest `main` and their three-file exclusive leases verified (dossier, checkpoint, final handoff). Each completed task reports `DELIVERED_REVIEW_PENDING`, while its content says `RESEARCHED — REVIEW PENDING`. The integration copies **exactly the committed Markdown dossier blobs**, without silently editing specialists' research or changing disputed findings.

| Dossier | Specialist / task | Terminal branch commit verified | Exact imported dossier blob |
|---|---|---|---|
| [D01 Horse lifecycle](../dossiers/d01_horse_lifecycle_v0_1.md) | 007 / `atlas-horses-007` | `503a59134653853b5932f6037c8e67eac89d09ed` | `95becdc8b8c044e81fc17044a8ef9dba48557eb7` |
| [D02 Camp Ledger](../dossiers/d02_camp_ledger_upgrades_v0_1.md) | 008 / `atlas-camp-008` | `06cf030bb729e343e86faf457a5ca79bd3555d18` | `cbb104f6c7010396aa5af11b856ca22f3afbf3a9` |
| [D03 Satchels/Pearson](../dossiers/d03_satchels_crafting_v0_1.md) | 011 / `atlas-satchels-011` | `689a3902db5e88c308941d8ab721b51444acb2db` | `58b683a4dd4d6b320f315be9656a98ac1d8bfd28` |
| [D04 Hunting](../dossiers/d04_hunting_transport_v0_1.md) | 009 / `atlas-hunting-009` | `9917dbfcf3c678e1608f298497c19cf3f173798a` | `2853322e51e57fcc8ef4c59d775a83cbb520df5c` |
| [D05 Camp life](../dossiers/d05_camp_life_opportunities_v0_1.md) | 012 / `atlas-camplife-012` | `36df71c27750820b88e39becb787582c8b554b18` | `042fc6976f89e38da02ec0d06ed9c3a2ac914333` |
| [D06 Inventory](../dossiers/d06_inventory_items_v0_1.md) | 013 / `atlas-inventory-013` | `84c29148e30050b2d3684347007fc2b3a6b879df` | `1c6f9e68c02ef37a0187b49a0cd269a705a4946d` |

**What was checked:** present files, exact branch refs/blob content, scope and author status, 11–15 substantive sections per dossier, source/claim ledgers, optional Chapter 2 examples, named issue acceptance, changed paths and major cross-dossier contradictions. **Not independently checked:** every external source URL, every recipe ingredient, every numeric capacity, every edition variant or actual player/save observation. Treat this as a *review gate*, not six unqualified fact approvals.

## 2. Cross-dossier owner-of-truth matrix

| Mechanic | Primary researched owner | Other dossiers may say | Consumer rule |
|---|---|---|---|
| Horse identities, saddles, bonding, death, horse-cargo persistence | **D01** | D04 field material transport; D06 general satchel contents | Consult D01 for horse effects; do not promise cargo retrieval after swap/death |
| Camp Ledger unlock, purchasing, money sources, wagon/bed upgrades | **D02** | D03 needs Leather Working Tools gate | Separate returned/deposited Strauss debt, unlocked Ledger, actually bought tools, and crafted satchel; current player flags UNKNOWN |
| Exact seven satchel recipes, unlocks, Pearson reserved materials | **D03** | D02 camp purchase prerequisite; D04 hunt outcome; D06 inventory categories | Use D03 ingredient details with flagged squirrel conflict; check visible Pearson crafting menu before consuming |
| Animal quality, matching weapons, clean kills, field carcass/pelt logistics | **D04** | D01 mounted cargo; D03 required recipe/object; D06 material disposal | Three-star starting animal + Show Info + suitable clean kill + observed quality is reliable process; no guaranteed bait or trinket repair |
| Camp companion activities, favors, chapter-limited offers | **D05** | D02 funds/donations; D06 gifts/unique items | Activate warnings only on observed relevant interaction/approaching known chapter gate, not folklore |
| General valuables, item classification, stack limits, safe recipients | **D06** | D03 exact satchel recipe; D04 hunt cargo; D01 horse-specific carriage | Protect named/unique/craft-use items; no imaginary valuables chest or universal 99-item limit |

Dossiers remain independent source records. This map prevents double-maintaining recipes, prices, Gold/achievement criteria or player-owned assets in six competing places.

## 3. Decision-sensitive disputes retained

| ID | Cross-check | Review verdict | Safe player-facing default |
|---|---|---|---|
| **W1-X01** | D03 ingredient wording: `Perfect Squirrel Pelt` versus `Perfect Squirrel Carcass`; D04/D06 require item form to match the actual target. The same RDR2.org guide uses **carcass** in its recipe and **pelt** in its material-finding section. Reviewed [RDR2.org Pearson guide](https://www.rdr2.org/guides/story-mode/pearson-crafting-guide/) and [satchel guide](https://www.rdr2.org/guides/red-dead-redemption-2-satchel-crafting-guide-increase-inventory-space/) 2026-10-17. | **UNRESOLVED**, source-level inconsistency verified; D03 C07/C08 are not silently unified. | Keep a perfect squirrel intact until player can inspect the exact Pearson ingredient/hand-in prompt; then follow the actual version's menu. |
| **W1-X02** | D02 vs D03: Leather Working Tools list **$225 base**, but some sources show **$180**, likely edition discount or guide-version difference. | **CONDITIONAL PRICE**, not universally $225 for every player's menu. | Explain normally `$225 base`, check user's actual Ledger price before paying; never infer tools bought. |
| **W1-X03** | D02 Ledger consumes camp funds before Arthur-wallet shortfall or requires donation first. | **DISPUTED** for wallet shortfall; guides and player reports differ. | Show camp and Arthur wallet as separate balances; ask player to inspect purchase confirmation if relevant, never assert auto-payment. |
| **W1-X04** | D01 horse-saddle swap/death/reload physical cargo; D04 hauling; D06 item permanence. | **UNVERIFIED item/type-dependent retention**; Rockstar lost-legendary-pelt Trapper recovery is a **narrow exception**, not general property. | Deliver ordinary valuable material promptly; inspect horse cargo and the receiving vendor; no guaranteed recovery after horse loss. |
| **W1-X05** | D04 Buck Antler Trinket appears to repair lower-grade results in some sources; others reject natural 2★ → perfect. | **DISPUTED** probability/quality boundary; no guaranteed upgrade. | Start with naturally 3★ animals and correct weapons; assess outcome in-game. |
| **W1-X06** | D05 marked Lenny Five Finger Fillet and other table games counting toward **Friends With Benefits**; some trophy guides and community reports conflict. See [TrueAchievements](https://www.trueachievements.com/a262346/friends-with-benefits-achievement) checked 2026-10-17. | **MIXED EVIDENCE**, no universal credit claim; distinguish marked special invitation from casual games. | If seeking reliable camp achievement credit, prioritize confirmed companion hunting/robbery activities; use in-game activity/achievement evidence before counting a marked table invitation. |
| **W1-X07** | D05 Pearson rabbit special stew/Scout Jacket: chapter/health/timing triggers folklore versus multiple anecdotes. | **DISPUTED / PERSONAL EXHAUSTIVE**, not generally required for official 100%. | Observe Pearson/camp dialogues naturally; do not force deliberate health depletion or invent a countdown. |
| **W1-X08** | D06 Old Brass Compass and talisman component missability, `99 everything` with Legend of East. | **DISPUTED universal statements**; D03 says "most" regular capacity; D06 warns named components. | Protect unique talisman ingredients; treat 99 as category-dependent and confirm actual inventory UI. |
| **W1-X09** | D03 seven vs possible 17/19 Pearson cosmetic designs; D02 camp improvements; D04 carcass recipients. | **DISPUTED secondary catalog completeness**; only the directly corroborated item rows may guide ordinary crafting. | Inspect actual Pearson menu; preserve an intact carcass where the *specific* recipe requires it; do not treat cosmetic catalogue as mandatory for official 100%. |

## 4. Consistency conclusions

**Compatible enough for reference integration:** the six scope owners are clear and their conditional usage rules do not require a new mutable campaign ledger. Overlaps can be handled via read-only crosslinks and the consumer rules above. Reference integration into `main` can proceed with **RESEARCHED — REVIEW PENDING** retained and the disputes visible.

**Not ready for automatic tactical authority:** no direct in-game validation of contentious recipes/gates; proposed `Sxx.Mnn` leaf IDs and S31 are **not owner-ratified**; full game UI clients/save extraction untested here. Consumers must expose uncertainty and prefer actual visible in-game menus and player reports for irreversible item decisions.

**No gameplay record updated.** Original `L33TW0RLD/rdr2` retains sole campaign authority. Research integration does not mean player owns a horse, brush, purchased satchel, donated carcass, obtained 100% progress or a Gold medal.

## 5. Next independent decisions

1. Confirm proposed taxonomy leaf IDs/edge conventions or continue treating IDs as **provisional aliases**, without blocking reading the research.
2. Assign targeted **observational** menu checks for squirrel material form, Ledger price/shortfall and one-off camp invitation credit when user naturally encounters them (no artificial replay or forced injury).
3. After research reference merge, update Free Roam's *conditional* Chapter 2 examples to consume the six dossiers and develop a coherent Atlas browse interface.
4. Future deeper research gaps (D07–D28) remain available but should not delay playing with the first six references.

**Review policy:** authoritative adoption needs separate recorded owner/GameGuide approval. Neither merging this crosswalk nor linking a dossier counts as such approval.
