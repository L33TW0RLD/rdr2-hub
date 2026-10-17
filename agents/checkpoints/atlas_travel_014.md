# Atlas Travel 014 — Specialist Checkpoint (post-research)

**Task ID:** \`atlas-travel-014\` · **Issue:** [#17](https://github.com/L33TW0RLD/rdr2-hub/issues/17)  
**Branch:** \`agent/atlas-travel-014\`  
**Registered baseline:** \`9931058e69ac3c6e7923841da87813de7f015f41\`  
**Main inspected at startup:** \`6f08f4ed60abde51831f8b72cf6c363aa49feb2d\`  
**Checkpoint day:** 2026-10-17 UTC  
**Workflow state:** \`IN_PROGRESS\`, final handoff pending  
**Research maturity:** \`RESEARCHED_REVIEW_PENDING\` — **NOT ADOPTED**

## Exact lease, owner and protected paths
1. \`systems_atlas/dossiers/d11_travel_wilderness_camps_v0_1.md\`
2. \`agents/checkpoints/atlas_travel_014.md\`
3. \`agents/handoffs/2026-10-17_atlas_travel_014.md\`

All other Hub paths, prior tasks and branches, \`save_intelligence/\` PR #24, original \`L33TW0RLD/rdr2\`, D01/D02/D04/D06 Wave 1 sources and D13 law/robbery work are **READ ONLY**. No rebase, force push, merge or direct edits to main.

## Context and routing discrepancy
Owner gave this persistent conversation Issue #17 explicitly, then reiterated coordinator conflict recovery / continue on the **travel** branch; however the Wave 2 registry routes travel to specialist 007 while this conversation previously held specialist 013. The registry remains unchanged and coordinator should review thread identity before integration. The separate compendium-019 branch was found already checkpointed by another specialist chat and was **not edited**. The travel branch had no prior worker changes on initial recovery.

## Durable, verified work

| Milestone | Commit or exact readback | Verification |
|---|---|---|
| Initial **pre-research** checkpoint | \`ab5e643f174aab2c20a9ec62a0f82d813150b14e\` | VERIFIED explicit branch readback |
| D11 complete evidence dossier | \`057a449afb2b5b341dd5b8b736962ef3390a4d2b\` | VERIFIED readback blob \`52db99a9ce1d5bf892f23a27be20e336ceed030d\`, 289 lines |
| D11 scope/content checks | 11 numbered sections, S07.M01–M05, 24 claim IDs, 23 source IDs, 3 Chapter 2 examples, primary Rockstar 1.15 link and RDR1/Online negative proof | PASSED programmatic readback |
| Allowed-path compare before this checkpoint update | ahead 2 / behind 1, only checkpoint + dossier changed | VERIFIED |

**Last verified commit BEFORE this update:** \`057a449afb2b5b341dd5b8b736962ef3390a4d2b\`.

## Research limits and disputes to transfer
- Stagecoach blocking with bounty “anywhere” versus state-local restrictions — **DISPUTED** (PowerPyx, RDR2.org bounty and wiki); inspect current coach menu and crime state.
- Horse loaded-pelt/carcass retention after fast travel — **DISPUTED**; normal successful travel stories conflict with loss/stuck reports. Deliver valuable ordinary cargo directly, verify Horse Cargo and vendor after any transition; D01/D04 are read-only.
- Rockstar 1.15 formally adds player-founded camp fast travel after lodging upgrade: **HIGH** primary; launch-era guides are version-bound. RDR1 waypoint camp travel and Red Dead Online pamphlets must never leak into Story Mode.
- Temporary camp exact placement radius, cost/clock for paid transport, available boat/persistent return craft and mission passenger handling not fully verified: **UNKNOWN**.
- Base lodging prices $220 + $325 subject to actual Ledger/edition/discount; D02 owns spending.

## Exact successor action
1. **Current phase:** dossier written, committed, read back; final handoff not yet written.
2. **Exact next permitted action:** Create **only** \`agents/handoffs/2026-10-17_atlas_travel_014.md\` on this branch, including main baseline, two verified commits, source disputes, owner review choices, scoped comparison and later exact verification requirement.
3. **Then:** read handoff, dossier and checkpoint by explicit \`ref=agent/atlas-travel-014\`, compare to freshest main, update this checkpoint to \`DELIVERED_REVIEW_PENDING\`, verify three-path lease, report terminal SHA in chat.
4. **Blockers:** no GitHub write conflict or gameplay hard dependency encountered; routing label discrepancy is disclosed, not silently fixed.
5. **Stop:** \`DELIVERED_REVIEW_PENDING\`; no self-merging/ratifying/index changes.
6. **Live player progress:** current unlocks, route history, horses, cargo, saves, medals and camp purchases remain **UNKNOWN**.
