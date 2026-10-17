# Atlas Inventory 013 — Initial Checkpoint

**Task ID:** `atlas-inventory-013`  
**Lane:** Systems Atlas D06, item identity, capacity and safe disposition  
**Branch:** `agent/atlas-inventory-013`  
**Registration baseline:** `e549cc963a0e8dabb918bfecd7f1b8ace8f829dc`  
**Latest main inspected before start:** `6246ab38eede37d64b29e6a259238d65efc48006` (branch is one main commit behind; no changed branch files; latest main is coordination-only)  
**Checkpoint date:** 2026-10-17  
**Workflow status:** `IN_PROGRESS`  
**Content status:** `RESEARCHED_REVIEW_PENDING` (review and adoption outstanding)

## Authorized scope
Source-check RDR2 Story Mode D06 inventory rules and deliver spoiler-light item classification (inspect/preserve/store/sell/donate/use/craft), carrying and satchel effects, horse-vs-satchel distinction, unique/quest items, costs, destination boundaries, and losses. Cover `S17.M01–M05` and references `S13.M04`, `S18.M03`. Provide claim-level source ledger, contradictions, three scenarios and read-only consumer handoff.

## Exact exclusive write lease
- `systems_atlas/dossiers/d06_inventory_items_v0_1.md`
- `agents/checkpoints/atlas_inventory_013.md`
- `agents/handoffs/2026-10-17_atlas_inventory_013.md`

**Protected:** all other files, including `agents/registry.md`, Atlas indexes/taxonomy, Free Roam, Mission Control, other specialists' files and the entire original `L33TW0RLD/rdr2` repository. No merge, ratification or PR approval.

## Recovery and durable progress
| Milestone | Evidence | Status |
|---|---|---|
| Registry and Issue #13 lease recovered | `main` registry, issue #13 | VERIFIED read-only |
| Explicit branch inspection and main comparison | `agent/atlas-inventory-013` at `e549cc9`, 0 ahead / 1 behind main | VERIFIED read-only |
| Initial checkpoint | `0837c3c2591adca2abfd7d5d112a8e0e07704f70`, exact branch readback | VERIFIED | Initial checkpoint preceded substantive research |
| D06 dossier | `systems_atlas/dossiers/d06_inventory_items_v0_1.md` @ `c7cfcff2ab7057e7c6b0a3f4627ca6be0ec66211` | VERIFIED | 253 lines, 23 claim ledger rows, 3 scenarios, official exception, explicit disputes |

**Last verified commit before this checkpoint update:** `c7cfcff2ab7057e7c6b0a3f4627ca6be0ec66211`.  
**Substantive research dossier is committed and read back**; no uncommitted research or player observations are represented as durable.  
**Dependency status:** D03 satchels and D04 hunting are independent, unmerged specialist work; any links are read-only provisional. No hard dependency discovered.

## Exact resumption instruction
1. **Current phase:** D06 research delivered to branch, final handoff / closeout pending.
2. **Exact next permitted action:** Write the final branch-only handoff at `agents/handoffs/2026-10-17_atlas_inventory_013.md`, naming verified dossier commit, source conflicts, pending tests, unchanged protected files and coordinator review.
3. **Subsequent actions:** Verify handoff commit, inspect final compare against latest main, check exact three-path lease and final readbacks; stop this task.
4. **Blockers:** No hard research blocker; remaining disputed Old Brass Compass/unique-item recovery and storage cap details require later in-game verification. Parallel pre-scaling gate remains coordinator-owned.
5. **Assumptions:** No player-owned quantities, unlocked upgrades or collected rare items may be inferred. T0/T1 visible, T2/T3 gated. Taxonomy schema is PROPOSED, not adopted.
6. **Handoff destination:** `agents/handoffs/2026-10-17_atlas_inventory_013.md`.
7. **Stop condition:** `DELIVERED_REVIEW_PENDING` after verified dossier/checkpoint/handoff on this branch; do not write main or original `rdr2`. Initial checkpoint `0837c3c`; dossier `c7cfcff`; final terminal SHA reported in chat, not self-referentially inside handoff.
