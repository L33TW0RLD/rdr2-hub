# Atlas Unique Equipment 025 — Task Checkpoint

## Identity and baseline
- **Task ID:** `atlas-unique-025` · Issue [#31](https://github.com/L33TW0RLD/rdr2-hub/issues/31)
- **Lane:** Systems Atlas D22 — unique equipment and full-Compendium edge cases
- **Branch:** `agent/atlas-rare-items-025`
- **Registration/branch baseline SHA:** `d3bc807c75633fec042f4a34af72515a24cc2696`
- **Latest main inspected:** `b578aec6f1edab1279f2f2c5989326d4e86231ed` (one newer Wave 3 coordination commit)
- **Recorded:** 2026-10-17 · **Task status:** `IN_PROGRESS`
- **Objective:** deliver one fully sourced 11-section D22 dossier distinguishing unique weapons/equipment, one-time items, possible and verified missables, completion scopes and editions, plus final handoff.

### Exclusive writable lease
1. `systems_atlas/dossiers/d22_unique_equipment_compendium_v0_1.md`
2. `agents/checkpoints/atlas_unique_025.md`
3. `agents/handoffs/2026-10-17_atlas_unique_025.md`

**Read only / protected:** `main`, `agents/registry.md`, `agents/atlas_parallel_wave3_v1.md`, shared indexes, taxonomy, all other dossiers/agents, original `L33TW0RLD/rdr2`, GameGuide, `save_intelligence/`; no rebase/reset/force-push/self-merge/ratification.

## Durable progress (repository-verified)
| Milestone | Durable artifact | Status | Meaning |
|---|---|---|---|
| Registration and source recovery | Main Wave 3 plan, Issue #31, agent workflow and D06/D08/D15 read-only | VERIFIED read at startup | Branch initially zero commits ahead of registration baseline |
| Initial checkpoint | This file on assigned branch | WRITE IN PROGRESS; re-fetch after commit | Not proof of any completed dossier research |

- **Last verified branch commit before checkpoint:** `d3bc807c75633fec042f4a34af72515a24cc2696`.
- **Uncommitted/not recoverable:** No research deliverable yet.
- **Dependences:** D06 inventory, D08 chapter windows, D15 Compendium (main read-only); D17 legendary rewards is assigned concurrently and unavailable on main at startup; do not assert its findings.

## Exact resumption instruction
1. **Current phase:** initial checkpoint then external primary/independent research.
2. **Exact next permitted action:** After verifying this checkpoint by explicit branch ref, research authoritative Story Mode unique weapons, items and exception sources; draft the D22 **11-section** dossier under its exclusive path.
3. **Remaining:** source and contradiction audit; update this checkpoint; final three-file handoff; readback and exact diff verification.
4. **Risks/open:** weapon Compendium denominators vary by platform/patch; some supposed one-time weapons may be obtainably repeated; Zoologist/Skin Deep exclusions and literal full Compendium are different goal definitions; future D17 facts not yet available.
5. **Stop:** `DELIVERED_REVIEW_PENDING` only after 11-section dossier, handoff, checked sources and exactly three changed paths. No merge.

## Successor startup check
Read latest main coordination, Issue #31, this checkpoint from the **exact branch**; compare changes, then resume only from the last **verified** commit and explicit task phase. If checkpoint conflicts with a concurrent writer or shows `DELIVERED_REVIEW_PENDING`, STOP instead of overwriting.

**No player progress, inventory, medal, save or unlock updates authorized.**
