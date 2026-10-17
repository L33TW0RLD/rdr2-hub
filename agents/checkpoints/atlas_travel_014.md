# Atlas Travel 014 — Initial Specialist Checkpoint

**Task ID:** `atlas-travel-014`  
**Task/Issue:** [Atlas Wave 2 #17](https://github.com/L33TW0RLD/rdr2-hub/issues/17)  
**Branch:** `agent/atlas-travel-014`  
**Registration baseline / starting branch SHA:** `9931058e69ac3c6e7923841da87813de7f015f41`  
**Latest main inspected:** `6f08f4ed60abde51831f8b72cf6c363aa49feb2d` (coordination commit only; branch one behind, no changed paths)  
**Started:** 2026-10-17 UTC  
**Workflow state:** `IN_PROGRESS` · **Research maturity:** `DRAFT`

## Scope and authorization
User explicitly assigned this **conversation** Issue #17 / `atlas-travel-014` and reiterated continuation on its own Wave 2 branch after coordinator's conflict recovery message. **Routing discrepancy:** current coordinator Wave 2 chart labels thread 007 as the travel specialist, while this conversation previously delivered specialist 013. This checkpoint does **not** revise the registry or claim it matches that thread label. Issue #17, travel branch and exclusive file lease are internally consistent. `atlas-compendium-019` is already active under a separate specialist conversation, so this task does not edit it.

Deliver one full research dossier for S07.M01–M05: on-foot/mounted traversal, route planning, railway/stagecoach versus camp fast travel, boats/wagons, temporary wilderness camps, practical constraints, Chapter 2 unlock/gate conditions, patch/edition risks, optional examples and exact source/claim ledger. T0/T1 default.

**Exclusive permitted write paths — exactly three:**
1. `systems_atlas/dossiers/d11_travel_wilderness_camps_v0_1.md`
2. `agents/checkpoints/atlas_travel_014.md`
3. `agents/handoffs/2026-10-17_atlas_travel_014.md`

**Protected/read-only:** previous agent task branches, `agents/registry.md`, other governance/shared indexes, Atlas taxonomy/manifest, `save_intelligence/` and PR #24, original `L33TW0RLD/rdr2` campaign/mission/guides, D01/D02/D06 Wave 1 and D13 law/robbery research. No rebase, force push, self-merge or ratification.

## Verified at recovery
- Latest main, registry, Wave 2 launch and Issue #17 read; owner explicitly waived the known one-commit-behind-main nonissue.
- Exact travel branch exists at registered baseline with `main...agent/atlas-travel-014`: ahead 0, behind 1, no changed files.
- All three leased files absent before this initial checkpoint.
- Wave 1 D01/D02/D04/D06 are merged **RESEARCHED — REVIEW PENDING**, not adopted; crosslinks read-only.
- No claimed player map/horse/fast-travel unlock or movement state.
- No substantive research yet; only task/authority recovery.

## Recovery contract
- **Last verified commit before this checkpoint:** `9931058e69ac3c6e7923841da87813de7f015f41`.
- **Exact next permitted action:** Verify this initial checkpoint's commit by fetching its file with explicit `ref=agent/atlas-travel-014`, then independently source-check D11 Story Mode travel and temporary wilderness camp mechanics.
- **Remaining sequence:** Produce full 11-section D11 dossier; evidence/contradiction audit; commit and verify; advance checkpoint; write final handoff; branch compare and exact 3-file readback; stop.
- **Unresolved:** fast travel/cargo behavior, player fast-travel map activation, train/stagecoach fare/availability and temporary camp restrictions all need independent verification.
- **Hard blockers:** none identified; routing label discrepancy documented for coordinator.
- **Stop:** `DELIVERED_REVIEW_PENDING` upon verified deliverables, without merge, index edits, or unverified game-state claims.
