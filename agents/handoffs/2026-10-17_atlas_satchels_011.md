# Final Specialist Handoff — Atlas 011: Pearson Satchels & Crafting

**Task:** `atlas-satchels-011` · [Issue #11](https://github.com/L33TW0RLD/rdr2-hub/issues/11)  
**Repository:** `L33TW0RLD/rdr2-hub` · **Branch:** `agent/atlas-satchels-011`  
**Status:** `DELIVERED_REVIEW_PENDING` **for task only**; dossier `RESEARCHED_REVIEW_PENDING`, **not ADOPTED**.  
**Registered baseline:** `e549cc963a0e8dabb918bfecd7f1b8ace8f829dc`.  
**Main inspected at start and dossier verification:** `6246ab38eede37d64b29e6a259238d65efc48006` (one coordinator commit later).  
**Date:** 2026-10-17; Story Mode, T0/T1 Chapter 2 by default; T2 separately labelled; platforms PC/PlayStation/Xbox generally, no direct per-platform session test.

## Exclusive files delivered

1. [D03 fully sourced Pearson & satchel dossier](../../systems_atlas/dossiers/d03_satchels_crafting_v0_1.md) — `systems_atlas/dossiers/d03_satchels_crafting_v0_1.md` (created at commit `90d87ba52cc855d019362d8485fa26468353bf40`).
2. [Durable task checkpoint](../checkpoints/atlas_satchels_011.md) — `agents/checkpoints/atlas_satchels_011.md` (initial checkpoint commit `b16ae6e3619b0b1f63b29bdc8dfdaf75c5f3e8c3`, milestone update commit `8914fb71a18033095c00fcf1aa24f3cc523a9fb4`).
3. This handoff — `agents/handoffs/2026-10-17_atlas_satchels_011.md` (self-referential commit SHA intentionally excluded).

**No other permitted write paths**; no edits to original `L33TW0RLD/rdr2`, shared registry, indexes, taxonomy, Mission Control, Free Roam, or other specialist branches.

## Core delivered research and review criteria

- **7 individual satchels** with exact **1+1+1** perfect-material recipes, individual unlock tasks, category-specific benefits; aggregate **7 deer + 2 elk + 12 singles = 21 material units / 14 species**, *without* pretending any player already owns them.
- **U02/U03 chain:** one qualifying Strauss debt recovery **and deposit** unlocks Ledger normally; Leather Working Tools need distinct Ledger purchase; satchel-specific unlock prerequisites separately checked.
- Pearson `Donate for Crafting` and **persistent Pearson-held crafting inventory** distinguished from provisions, tithing box (cash/valuables unlocks), ordinary butcher sales, and Trapper sold/crafting stock.
- **17 independently documented Pearson cosmetic recipes** with material counts, including the three corroborated whole-carcass skull recipes (ram/pronghorn/wolf), plus two **disputed GameFAQs-only** camp-entrance decoration entries.
- **Squirrel ingredient conflict:** RDR2.org calls it *perfect squirrel carcass*, GameFAQs/GamesRadar/GameRevolution/other sources *perfect squirrel pelt*. Recipe matrix uses multi-source pelt wording, explicitly marks **DISPUTED** and requires in-game menu check before skinning.
- Distinct **five carcasses donated** recipe **milestone** versus named perfect ingredient; hunting requests require intact perfect carcasses and are **not** Pearson recipe credit.
- Precise completion relevance: seven satchels not a universally required named official 100% target; Compendium equipment contributes to **10 pieces** category, and **3 Scout Fire crafts** does not replace the **six category-specific crafted recipes** criterion.
- Spoiler-tier guarding of later purchase alternative; 3 conditional organic examples, 3 mistakes, 8 contradiction/test records, candidate typed edges using **unratified** proposed S10/S12/S17 schema, claim/source ledger **C01–C16** with checked dates and source classes.

## Evidence quality and primary gaps

**Evidence:** independently triangulated GameFAQs, GamesRadar, PowerPyx, RDR2.org, and supporting wiki/community sources, all checked 2026-10-17; **no direct UI/playtest or accessible on-point official Rockstar satchel recipe matrix** verified. Source checking means comparing the documented references, **not** proving that every modern platform/edition menu behaves identically. Original `rdr2/guides/hunting/pearson_vs_trapper.md` is **RESEARCHED — REVIEW PENDING**, not adopted; `rdr2/guides/inventory/system_blueprint.md` is design-only **DRAFT**.

**Decision-sensitive disputes to review before adoption:**
1. **D03-X01:** pelt vs carcass for squirrel Ingredients Satchel input, highest priority **direct in-game menu screenshot**.
2. **D03-X02:** Kit satchel three-valuables unlock vs one wiki table's `None`.
3. **D03-X03:** Leather Working Tools **$225 vs $180** per source (D02 specialist owns price).
4. **D03-X04:** 17 vs 19 Pearson decorative items (GameFAQs adds Buck Skull and Fur Horse Blankets).
5. **D03-X05/06/07:** material persistence edge cases, exceptions to 99/permanent capacity descriptions, exact whole-carcass donor credit — not direct-tested.
6. **D03-X08:** Rockstar first-party ingredient matrix unavailable to this pass; don't mislabel a secondary guide official.

**Default for uncertainty:** inspect the **actual Pearson Crafting Upgrades and Donate menus** before a material-consuming action; route based on visible requirement and do not infer player inventory from general research.

## Dependencies, maturity and integration boundary

- **D02 `agent/atlas-camp-008`** owns Ledger purchase and prices; **D04 `agent/atlas-hunting-009`** owns three-star hunting/hauling; **D06 `agent/atlas-inventory-013`** owns general inventory/unique resource triage. Crosslinks only, **provisional until coordinator reviews their terminal states**. Do not treat concurrent branch content as `ADOPTED`.
- Proposed IDs `S10.M01–M04`, `S12.M04`, `S17.M03` and U03 are from `main` Atlas taxonomy/research queue, whose **schema proposal remains unratified**. The dossier did not assign or migrate IDs, assert campaign flags, or create new criteria.
- Neither this dossier nor branch creates a new gameplay save, player progress, mission completion, Gold medal, inventory count, or tool purchase.

## Verification and closure

**Verified before handoff creation:** exact-ref dossier readback blob `58b683a4dd4d6b320f315be9656a98ac1d8bfd28`, full content length 36,394 characters; seven recipes/21 count and claim ledger C01–C16 present; T2 guarded; stop rule present. `main...agent/atlas-satchels-011` compare at that point: **2 ahead, 1 behind**, only `agents/checkpoints/atlas_satchels_011.md` and `systems_atlas/dossiers/d03_satchels_crafting_v0_1.md`. Milestone checkpoint update was separately committed. **Final branch/ref and three-path readback to be re-verified after this handoff commit and terminal checkpoint.** Terminal SHA must be reported in completion message (cannot predict handoff's SHA inside the handoff).

**No unresolved hard dependency prevents delivery.** Coordinator owns six-worker pre-scaling gate and index integration, and remains responsible for any schema decisions or PR work.

## Reviewer decisions / next action (not self-assignment)

**Coordinator/owner:** review and adjudicate squirrel requirement, decor list and cost/Kit edge cases; confirm read-only compatibility with D02/D04/D06; decide if schema crosslinks and sourced claims warrant **separate reviewed adoption** and shared index work. An integration PR may be opened by authorized coordinator; do **not** treat this deliverable itself as ratification.

**Possible later registered specialist task (advisory only):** a small **D03 in-game UI evidence check** comparing squirrel pelt versus carcass wording and Pearson donated-material counters across one known Story Mode platform/version; would need **new issue, branch and lease**. The present specialist conversation remains reusable but must **not** self-assign.

**Task closure:** `DELIVERED_REVIEW_PENDING` on branch, no merge/ratification. Await coordinator review.
