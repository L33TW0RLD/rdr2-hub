# Atlas Specialist 011 — Wave 2 Task 017 Final Handoff

**Task:** `atlas-foraging-017` · [Issue #20](https://github.com/L33TW0RLD/rdr2-hub/issues/20)  
**Specialist:** existing reusable Agent 011 (Wave 1 D03 already MERGED; its research still REVIEW PENDING)  
**Branch:** `agent/atlas-foraging-017` · **Registered baseline:** `9931058e69ac3c6e7923841da87813de7f015f41`  
**Status:** **DELIVERED_REVIEW_PENDING** *task lifecycle*; D12 **RESEARCHED — REVIEW PENDING** (NOT ADOPTED)  
**Completed:** 2026-10-17 · **Scope:** RDR2 Story Mode, default T0/T1 spoiler-light Chapter 2, later access T2 isolated, no live game state asserted.  
**At startup:** main `6f08f4ed60abde51831f8b72cf6c363aa49feb2d` vs Wave 2 branch one commit behind. Main advanced independently during research; **no rebase, reset, force push or merge attempted**.

## 1. Exact exclusive deliverables (three paths only)

1. **D12 researched dossier:** `systems_atlas/dossiers/d12_herbs_food_crafting_v0_1.md` — [branch file](https://github.com/L33TW0RLD/rdr2-hub/blob/agent/atlas-foraging-017/systems_atlas/dossiers/d12_herbs_food_crafting_v0_1.md). Committed `fed5ef3714655b014285d1e02847da68d9522aa0`; verified content blob `a5fbc57b262e37e184582a61d9a1652e142d4059` (40,968 chars, 220 lines).
2. **Durable checkpoint:** `agents/checkpoints/atlas_foraging_017.md` — [branch file](https://github.com/L33TW0RLD/rdr2-hub/blob/agent/atlas-foraging-017/agents/checkpoints/atlas_foraging_017.md). Initial checkpoint before research `8c279f515f3ef2977ca3d53cb100f908aba70fba`; source research milestone checkpoint `a509f872630b25363ff6ba621f904eee4e55e962`. Final closure checkpoint will update separately.
3. **This handoff:** `agents/handoffs/2026-10-17_atlas_foraging_017.md` — [branch file](https://github.com/L33TW0RLD/rdr2-hub/blob/agent/atlas-foraging-017/agents/handoffs/2026-10-17_atlas_foraging_017.md). Final commit/ref to be independently verified after writing.

**Protected:** no writes to original `L33TW0RLD/rdr2` (campaign or any path), `main`, shared registry/index/taxonomy, old D03 branch, Agent 012's Issue #21/branch, other Atlas branches, or Save Intelligence/PR #24.

## 2. Main findings and acceptance

- All assigned **S15.M01–M04**, **S16.M01–M05** researched as nine provisional mechanic leaves with conditional gates, source labels and consequences; no live `unlocked_now` state created.
- **Study/identify vs pick/gather vs eat/consume vs craft** split, plant Compendium and later rank-local tracker semantic caveats.
- Foraging detection, habitat limitations, sage variants and toxic Oleander Sage; no promise of full regional access or every plant in early Chapter 2.
- Basic plain cooking and seasoning on a **grill-capable station**, including Wild Mint → Health, Oregano → Stamina, Creeping Thyme → Dead Eye; actual effect item-specific and D09 general bar/core mechanics read-only.
- Personal craft pamphlets: acquire **and read**; recipe-specific Fence/world acquisition conditions; distinguish known recipe from available ingredients, category and supported station; menu `Show All` diagnostic where present.
- **Six OFFICIAL_100 craft categories exactly:** Cooking, Tonic, Ammunition, Hunting, Horse Care, Weapon. **Not** six arbitrary items, six recipes owned, purchased tonics, or Pearson satchels. **20 of 43 distinct plants** in Compendium 100%-subset vs **all 10 sequential Herbalist ranks** for the challenge obligation.
- Concise six-category **candidate recipe matrix**, with specific ingredient examples and visible gate checks; no unverified exhaustive recipe dump, three optional Chapter 2 scenarios, three practical mistakes.
- Claim ledger **C01–C20** with source URLs, date checked, editorial-source independence/confidence, direct player-observation absence. Contradiction ledger **D12-X01–X10** and safe fallback; only T0/T1 surfaced by default, T2+ access kept separate.
- Proposed typed crosslinks to D01/D03/D04/D06/D09/D15 are **read-only**, content maturation distinct from Wave 1 merge; no changes to original `rdr2` or invented inventory/gathering/mission/GOLD evidence.

## 3. Source quality and named disputes needing reviewer decisions

**External research cross-checked 2026-10-17:** independent PowerPyx, GameFAQs, GamesRadar, Gamepressure, Gamer Guides, SegmentNext, plus RDR2.org and wiki/community support. **No first-party Rockstar recipe-matrix audit or direct in-game screenshots** completed. Publishing a checked date is not asserting current patch/edition. Full per-claim URLs in §10 of dossier; multiple RDR2.org pages do **not** count as independent publishers.

**Keep these unresolved rather than silently 'correcting':**
1. **D12-X01:** Small Game Arrow ingredient list: 3 components (Arrow/Flight Feather/Shell) vs shortened 2-component Gamepressure table. Multi-source preference **3**, *UI verification still required*.
2. **D12-X02/X07:** Improved Throwing Knife: 2 Eagle/Hawk feathers vs 1 Eagle feather; secondary website classifies throwable crafting with Ammo while in-game six types distinguish **Weapon**. Verify actual Weapon tab/item composition before counting it.
3. **D12-X03:** Horse Meal: `3 Hay OR 3 Beets` vs `3 Currant + 3 Beets + 3 Hay`. Do not recommend as default starter until real screen comparison.
4. **D12-X04/X05:** Poison Arrow Fence vs found pamphlet timing and wilderness grill availability; inspect recipe U01/state/actual station.
5. **D12-X06/X10:** Compendium 43/43 plants does **not** prove Herbalist 9 rank-specific 43/43 (players report prior pick exclusion); only current rank UI evidences stage credit.
6. **D12-X08/X09:** `Sage` variant/poisonous Oleander distinction, guide table typographical errors and no official recipe-first-hand verification.

**Caveat:** The dossier's sample **Improved Throwing Knife** is intentionally **conditional** and must *not* be promoted as guaranteed six-category Weapon progress without category evidence. Plant and recipe source confidence are at claim granularity, not one global endorsement.

## 4. Read-only dependencies and consumer handoff

- **D03** (`main`): Pearson satchels/camp decorations and recipient-material donation, no duplicate precise satchel matrix. Wave 1 **MERGED** but D03 still **RESEARCHED — REVIEW PENDING**.
- **D06** (`main`): item types, carrying and safe disposition; only referenced.
- **D04** (`main`): species-appropriate hunting, perfect pelt and field material recovery; not rewritten.
- **D01** (`main`): horse lifecycle/equipment; **D09** Wave 2 owns bar/core growth; **D15** Wave 2 owns Compendium verbs/trackers; the latter two have no assumed adoption, even if delivered elsewhere.
- **GameGuide** alone controls player current campaign/saves/results. **Free Roam** may offer one optional forage/cook outing conditioned on observed fire/ingredients; not mandatory completion grind.
- Proposed `Sxx.Mnn`, `C100.*` names and edge vocabulary in D12 must remain provisional until explicit owner decision.

## 5. Verification performed and pending final closure

Initial checkpoint committed *before* D12 research. D12 committed and read back at **exact branch ref**; validator confirmed **11 numbered sections, nine assigned leaves, six named official categories, 20 ledger claims, ten disputes, three scenarios and player-state protections**. Compare after dossier showed only checkpoint and dossier paths: ahead 2/behind 2 (main independently advanced to `1d956b5bb210f8ce57e17e29aab7d859d731ad80`). Milestone checkpoint then committed `a509f872630b25363ff6ba621f904eee4e55e962`.

**Final verification after this handoff and closure checkpoint:** independently fetch all three exact branch files; compare `main...agent/atlas-foraging-017`, enforce diff allowlist; report exact terminal head SHA in final chat (a commit cannot reliably include itself in its Markdown).

## 6. Owner/coordinator review and terminal boundary

Coordinator should source-audit the disputes, verify any later D09/D15 crosslink compatibility, decide candidate taxonomy IDs, and control shared-index updates or an authorized integration PR. No content self-ratification; merging research would not by itself grant ADOPTED gameplay authority.

**Suggested future evidence work (not a self-assignment):** one narrow observational Story Mode test of crafting tabs, Small Game Arrow ingredients, improved weapon feather requirements and 6-type Recipes credit, using a player-provided screenshot of naturally encountered menus; requires new assigned issue/branch/lease.

**Stop:** task `DELIVERED_REVIEW_PENDING`, no further worker edits after checkpoint closure; persistent Specialist 011 thread remains available for coordinator-assigned future work.
