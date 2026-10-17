# Wave 2 — Owner-Directed Five-Dossier Integration / D09 Deferral

**Date:** 2026-10-17 · **Decision:** Publish D08, D11, D12, D13 and D15 as Wave 2 research; **carry D09 forward to Wave 3**. This resolution supersedes the earlier *all six before integration* hold in [interim review](2026-10-17_wave2_partial_cross_review.md) and [integration gate](2026-10-17_wave2_integration_gate.md).

## What changed

Owner instruction explicitly moved **Dead Eye / D09** to the next research batch. The delivery arithmetic is **6 + 5 + 9 + 8 = 28**. Wave 2 now has **five completed and independently checked specialist research dossiers**, not six. **No D09 work has been invented, canceled or silently replaced.**

The D09 task is still [Issue #19](https://github.com/L33TW0RLD/rdr2-hub/issues/19) / `atlas-deadeye-016` / `agent/atlas-deadeye-016`; preserve exact checkpoint/dossier/handoff lease and re-activate in Wave 3. At last inspection its branch was still at registration commit `9931058e69ac3c6e7923841da87813de7f015f41`, with no committed checkpoint. No worker branch was reset or force-pushed.

## Five-source receipt and editorial handling

| Dossier | Imported from task | Source blob | Integration |
|---|---|---|---|
| [D08 Chapter 2 windows](../dossiers/d08_chapter2_limited_windows_v0_1.md) | `atlas-chapter2-018` | `ad9ff4a6698f21dfb4d59e9595df147794d5109a` | Exact original source |
| [D11 Travel](../dossiers/d11_travel_wilderness_camps_v0_1.md) | `atlas-travel-014` | `52db99a9ce1d5bf892f23a27be20e336ceed030d` | Presentation correction only: remove 100 literal backslash-before-backtick characters; staged blob `ce1ac2c7b45106767a31af44d646197d61714df7` |
| [D12 Herbs / Cooking](../dossiers/d12_herbs_food_crafting_v0_1.md) | `atlas-foraging-017` | `a5fbc57b262e37e184582a61d9a1652e142d4059` | Exact original source |
| [D13 Law / Honor](../dossiers/d13_law_honor_robbery_v0_1.md) | `atlas-law-015` | `a762a65f65b835f908137484a98919628bcd73d8` | Exact original source |
| [D15 Compendium](../dossiers/d15_compendium_trackers_v0_1.md) | `atlas-compendium-019` | `8891889a2ca27f0b100244eb62a6f6f487b74198` | Exact original source |

Previous interim source spot-checks and disputes remain in force. This reference merge leaves all five dossiers **RESEARCHED — REVIEW PENDING**, with unresolved claims explicitly labeled; no full claim-by-claim gameplay reproduction or player-save validation. In particular, do not claim automatic legal anonymity under a mask, automatic pelt/carcass return, proof of every mission missable boundary, universally fixed in-game recipe lists, or automatic Compendium credit from a single action.

## Integration outcome and later work

- The canonical `systems_atlas/README.md`, `knowledge/content_manifest_v1.md`, root project overview and coordinator registry should list **eleven** researched/merged dossiers once the integration PR merges. **Task `MERGED` ≠ research `ADOPTED`.**
- **Wave 3 plan:** [9 dossiers including requeued D09](../../agents/atlas_waves3_4_plan_v1.md). **Wave 4:** 8 dossiers; neither batch launched by this decision.
- Save Intelligence PR #24 remains entirely separate, not merged or ratified by this work.
- The original `L33TW0RLD/rdr2` GameGuide is unchanged and retains sole canonical player progress authority.

**Coordinator authorization:** owner requested D09 be moved into Wave 3 to create a 9+8 finish, allowing the five verified Wave 2 dossiers to integrate without falsely marking D09 delivered.
