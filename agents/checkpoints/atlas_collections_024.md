# Atlas Collections 024 — Initial Recovery Checkpoint

**Task ID:** `atlas-collections-024` · [Issue #34](https://github.com/L33TW0RLD/rdr2-hub/issues/34)  
**Work lane:** D20, Story Mode collectible families, progress/turn-in/completion evidence  
**Working branch:** `agent/atlas-collections-024`  
**Checkpoint date:** 2026-10-17 UTC  
**Workflow:** `IN_PROGRESS` — INITIAL CHECKPOINT, **created before researching**  
**Content status:** `NOT_STARTED`; expected final `RESEARCHED — REVIEW PENDING`, not adopted

## Exact authority, branch and lease

- **Registered branch baseline/head:** `d3bc807c75633fec042f4a34af72515a24cc2696`.
- **Latest main at startup:** `b578aec6f1edab1279f2f2c5989326d4e86231ed`; branch **behind 1 / ahead 0** (normal Wave 3 baseline; no rebase/reset).
- **Recovered:** current `main` registry, `agents/atlas_parallel_wave3_v1.md`, agent contract v0.3, parallel workflow v0.2, source authority, backlog/schema/record contract, Issue #34. Issue/registry/branch and three-file lease match. Wave 3 requires single writer on this task; user explicitly assigned this conversation only the D20 task.
- **Exclusive write paths:**
  1. `systems_atlas/dossiers/d20_completion_collections_v0_1.md`
  2. `agents/checkpoints/atlas_collections_024.md`
  3. `agents/handoffs/2026-10-17_atlas_collections_024.md`
- **Protected:** all other `rdr2-hub` paths, `agents/registry.md`, indexes, sibling worker files/branches, Wave 1/2 files, `save_intelligence/`, and original `L33TW0RLD/rdr2` gameplay/campaign authority. No direct-main writes.
- **Read-only dependencies:** D15 Compendium tracker `systems_atlas/dossiers/d15_compendium_trackers_v0_1.md` on main (**RESEARCHED — REVIEW PENDING**); D16 fishing on separate `agent/atlas-fishing-021`, potentially unmerged; D08 Chapter 2 windows read-only on main; original game's evidence only as guides, not player completion proof.
- **Research scope:** proposed `S18.M01–M04` and `S27.M01–M05`; cards, bones, carvings, dreamcatchers, treasure, legendary fish, hunting requests, exotics, hand-in proof, normal/later unlocks, 100% vs exhaustive.

## Required acceptance

Complete independently source-checked **11-section** D20 Story Mode dossier, default T0/T1 with T2/T3 separated, exact families and meaningful item/hand-in stages, confidence/source URL and checked date per consequential claim, contradictions/missability/edition and chapter gates, completion matrix, 3 spoiler-light Chapter 2 examples, typed provisional links, precise GameGuide / Free Roam handoff. No claims of actual player discoveries or delivery. Commit dossier/handoff, update this checkpoint, verify exact three-file diff and branch readbacks, stop `DELIVERED_REVIEW_PENDING`; no merge/ratification.

## Durable progress

| Milestone | Artifact | State |
|---|---|---|
| Startup GitHub authority and issue | `main` `b578aec6...`; branch `d3bc807...`; Issue #34 | **VERIFIED** |
| New task branch initial lease | All three paths absent at startup; diff empty | **VERIFIED** |
| Initial checkpoint | This file | **COMMIT PENDING** |
| External source research | No claims yet | **NOT STARTED** |
| Complete D20 & terminal handoff | None | **NOT STARTED** |

- **Last verified commit before checkpoint:** `d3bc807c75633fec042f4a34af72515a24cc2696`.
- **Uncommitted research:** none claimed durable.
- **Actual player state:** items, activity triggers, deliveries, mail, saves, trophies and completion UNKNOWN.

## Exact next permitted action

1. Read back **this checkpoint on exact branch**; verify successful initial commit.
2. Research collectible families from official Total Completion/game evidence plus independent detailed sources; inspect D15/D16/D08 as read-only with adoption caveats.
3. Commit complete eleven-section D20; verify branch readback and scope; write handoff, terminal checkpoint, compare to current main.
4. Stop `DELIVERED_REVIEW_PENDING`; send coordinator exact terminal branch SHA and outstanding contradictions. Future tasks require separate explicit activation.

**Blockers:** none at startup. Branch one commit behind main is expected, not write collision; if another writer appears on this exact branch, stop and report.
