# Systems Atlas Wave 2 — Integration Gate and Five-Dossier Staging Receipt

**Date:** 2026-10-17
**Decision:** **HOLD FULL WAVE 2 INTEGRATION** — Five research dossiers ready, D09 **not committed** on its assigned branch as of latest GitHub readback.
**Branch:** `coordinator/atlas-wave2-integration` · **Base main at start:** `1d956b5bb210f8ce57e17e29aab7d859d731ad80`.
**Status:** Staged for review only; this branch is not a publication of a complete Wave 2 or a mechanic adoption.

## A. Verified research receipts

| Task | Dossier | Source branch content blob | Import behavior |
|---|---|---|---|
| `atlas-chapter2-018`, Issue #21 | [D08](../dossiers/d08_chapter2_limited_windows_v0_1.md) | `ad9ff4a6698f21dfb4d59e9595df147794d5109a` | Unmodified |
| `atlas-travel-014`, Issue #17 | [D11](../dossiers/d11_travel_wilderness_camps_v0_1.md) | `52db99a9ce1d5bf892f23a27be20e336ceed030d` | Formatting-only correction to imported copy |
| `atlas-foraging-017`, Issue #20 | [D12](../dossiers/d12_herbs_food_crafting_v0_1.md) | `a5fbc57b262e37e184582a61d9a1652e142d4059` | Unmodified |
| `atlas-law-015`, Issue #18 | [D13](../dossiers/d13_law_honor_robbery_v0_1.md) | `a762a65f65b835f908137484a98919628bcd73d8` | Unmodified |
| `atlas-compendium-019`, Issue #22 | [D15](../dossiers/d15_compendium_trackers_v0_1.md) | `8891889a2ca27f0b100244eb62a6f6f487b74198` | Unmodified |

All five original branch comparisons showed only the specialist's **three exclusive task paths**: dossier, checkpoint and handoff. All five final handoffs were fetched directly from their assigned branch and say `DELIVERED_REVIEW_PENDING`; all dossiers remain **RESEARCHED — REVIEW PENDING**, NOT `ADOPTED`. The original `L33TW0RLD/rdr2` campaign, any original branches and experimental Save Intelligence PR #24 are untouched.

## B. Explicit D11-only editorial correction

D11 import source `52db99a9ce1d5bf892f23a27be20e336ceed030d` had **100 literal backslash-before-backtick escapes** in inline Markdown. Integration copy is Git blob `ce1ac2c7b45106767a31af44d646197d61714df7`. Only those **100 backslashes** were removed; zero other characters altered; resulting markup restores normal Markdown inline code (mechanic IDs and interface labels). Specialist D11 branch and final handoff are unchanged. This is a presentation repair and **not evidence/source factual correction**.

## C. Remaining substantive acceptance/cross-check gates

- **D08 vs D05/D13:** Chapter 2 missable opportunity timing and separate Honor/achievement/Gold scopes are conditional. Original GameGuide owns mission strategy; D05 owns companion invites; D13 owns general law/Honor effects. Do not silently resolve John's wagon precise timeout or Good, Honest, Snake Oil chapter-end expiry.
- **D11 vs D01/D02/D04:** fast-travel map purchases/standard pricing belong D02; horse status/cargo D01; hunting recipient/delivery D04. Rockstar 1.15 field camp fast travel is Story Mode patch-specific, not Online pamphlet functionality. Never guarantee cargo persistence or a current purchased upgrade.
- **D12 vs D15:** official Total Completion needs one **crafted item of each of six categories** (cooking, tonic, ammunition, hunting, horse care, weapon); D12 owns eligible crafting candidates and disputed ingredients; D15 owns completion tracker and observation semantics. A website's ammo/weapon item heading does not prove in-game category credit.
- **D12 vs pending D09:** food seasoning effects, tonics and Dead Eye/core mechanics must not be promoted as known live gauges, unlocked abilities or owned recipes before D09 is reviewed; retain conditional effects and read-only consumer interfaces.
- **D13 vs D11:** travel-ticket availability under Wanted/bounties and masking/reidentification are conditional; D13 owns criminal systems, D11 transport selection. D10 clothing/disguise specifics are not yet fully researched.
- **D15 vs D08/D12:** official 100% thresholds must remain distinct from exhaustively filling Compendium, chapter-limited optional trophies and Herbalist rank-local pick/craft verbs. Always verify actual in-game checkboxes/achievement evidence.

### D12 supplemental review (after interim four-dossier report)

D12 dossier is **220 lines**, 11 contracted primary sections, source/claim ledger `C01–C20`, 10 explicit contradiction IDs `D12-X01–X10`, three spoiler-light Chapter 2 scenarios and a six-recipe-category comparison. It was verified at exact branch blob `a5fbc57b262e37e184582a61d9a1652e142d4059`; source handoff `3ea9b1e08534144ef8cccf9ac223c3ba9214740d` is committed. **Editorial acceptance for integration as review-pending research** is supported, but ingredient uncertainty is *not* resolved:

1. Small Game Arrow conflicting 2-vs-3 component table, actual UI controls.
2. Improved Throwing Knife feather amounts and crafting category; do not make it a guaranteed weapon-category completion suggestion.
3. Horse Meal contradictory ingredient table; avoid default guaranteed recipe.
4. Herbalist 9 previous plant pickups: retroactivity NOT verified.
5. Oleander Sage toxic; not generic cooking Sage.

Previous four-dossier review is [Wave 2 interim review](2026-10-17_wave2_partial_cross_review.md). Full six-dossier factual review and manifest/index updates remain **pending D09 evidence**.

## D. Exact unblock condition

The assigned branch `agent/atlas-deadeye-016` / [Issue #19](https://github.com/L33TW0RLD/rdr2-hub/issues/19) must contain **all three committed leased paths**:
- `agents/checkpoints/atlas_deadeye_016.md`
- `systems_atlas/dossiers/d09_cores_deadeye_growth_v0_1.md`
- `agents/handoffs/2026-10-17_atlas_deadeye_016.md`

At the latest check, the branch head remained `9931058e69ac3c6e7923841da87813de7f015f41`, with **zero branch-only commits**; no branch evidence of D09 research delivery. Do not invent or silently substitute another thread's files.

**Next coordinator action, when D09 exists:** fetch terminal branch SHA, exact dossier/three-file lease, source/caveat review; append D09 **unmodified** to this integration branch; finish six-dossier cross-review; update Atlas README/content manifest/registry deliberately; check Markdown links and protected paths; open integration PR, verify mergeability, merge only if it is actually complete. Finish with GitHub `main` readback. Do not mark any research `ADOPTED` or write campaign state by merging.
