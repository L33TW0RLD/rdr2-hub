# Disposable Agent Handoff — Atlas Researcher / Task 001

**Repository:** `L33TW0RLD/rdr2-hub`  
**Lane:** atlas-research  
**Scope:** Mechanics inventory and high-level Chapter 2 dependencies; no live-game writes  
**Date:** 2026-10-16  
**Status:** Research deliverables completed; owner adoption **NOT requested/assumed**.

## Input inspected

- This repository's main README, agent contract, source-authority contract, decisions and Atlas initial brief.
- Read-only legacy `L33TW0RLD/rdr2` mission/campaign state, research index, hunting, horse, inventory and completion research, especially the existing intermission and Chapter 2 trigger map.
- Independent specialist sources linked in the research deliverables.

## Files delivered

- [Mechanics taxonomy](../../systems_atlas/mechanics_taxonomy_v0_1.md) — S01–S30 reference families with major submechanics and cross-system paths.
- [Chapter 2 unlock map](../../systems_atlas/unlock_and_dependency_map_v0_1.md) — gated availability and important exceptions; no state updates.
- [Research queue](../../systems_atlas/research_queue_v0_1.md) — proposed per-dossier work and a draft Free Roam input contract.

## Key findings

1. A full Atlas should be navigable as 30 major **topic families**, but activities are not checklist items and most are not required for official 100%.
2. Camp Ledger, stables, fencing and fishing arrive through different story gates; player must confirm actual access.
3. A truly organic Free Roam planner needs current **availability, urgency, interest and consequences**, not merely a list of collectibles.
4. Existing old-repo hunting/intermission research is *review pending*, not transferred/adopted.
5. Camp optional content and skippable Gold opportunities require safeguards against overly long free-roam detours.

## Disputes / unfinished research

- Specific camp request triggers, marker variability, scarce/rare random encounter probabilities, exact item/satchel material mapping and availability of many later-game systems.
- The 30 family inventory is broad but intentionally not an exhaustive item-level encyclopaedia.

## Verification

Record exact commit IDs in agent delivery message; verify the three Atlas files and this handoff by GitHub readback. Do not rely on the last local UI state.

## Stop / next task

**STOP** at indexed taxonomy, unlock research and queued priorities. Recommended next disposable agent: **Free Roam Designer**, to draft the organic activity-decision model in `free_roam/`; no UI implementation or live campaign migration yet.
