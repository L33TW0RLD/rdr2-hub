# Atlas Inventory 013 — Initial Checkpoint

**Task ID:** `atlas-inventory-013`  
**Lane:** Systems Atlas D06, item identity, capacity and safe disposition  
**Branch:** `agent/atlas-inventory-013`  
**Registration baseline:** `e549cc963a0e8dabb918bfecd7f1b8ace8f829dc`  
**Latest main inspected before start:** `6246ab38eede37d64b29e6a259238d65efc48006` (branch is one main commit behind; no changed branch files; latest main is coordination-only)  
**Checkpoint date:** 2026-10-17  
**Workflow status:** `IN_PROGRESS`  
**Content status:** `DRAFT` / not yet researched

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
| Initial checkpoint | This path, on assigned branch | COMMIT IN PROGRESS; verify after write |

**Last verified commit before checkpoint:** `e549cc963a0e8dabb918bfecd7f1b8ace8f829dc`.  
**No substantive research has begun;** uncommitted research is not recoverable.  
**Dependency status:** D03 satchels and D04 hunting are independent, unmerged specialist work; any links are read-only provisional. No hard dependency discovered.

## Exact resumption instruction
1. **Current phase:** Initial checkpoint before research.
2. **Exact next permitted action:** Verify this checkpoint's commit and readback on `agent/atlas-inventory-013`, then research D06 using official gameplay sources and independent verification.
3. **Subsequent actions:** Draft dossier in leased path; review claim-by-claim source quality, disputed mechanics and loss precautions; commit; update checkpoint and write final handoff; verify final branch-only diff and all readbacks.
4. **Blockers:** None known; acknowledge parallel pre-scaling gate as coordinator-level requirement, do not infer other agents are active.
5. **Assumptions:** No player-owned quantities, unlocked upgrades or collected rare items may be inferred. T0/T1 visible, T2/T3 gated. Taxonomy schema is PROPOSED, not adopted.
6. **Handoff destination:** `agents/handoffs/2026-10-17_atlas_inventory_013.md`.
7. **Stop condition:** `DELIVERED_REVIEW_PENDING` after verified dossier/checkpoint/handoff on this branch; do not write main or original `rdr2`.
