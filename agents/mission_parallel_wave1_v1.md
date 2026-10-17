# Mission Control — Parallel Chapter Research Wave 1

**Registered:** 2026-10-17 · **State:** COORDINATOR REGISTERED / WORKERS NOT AUTOMATICALLY STARTED · **Repository:** `L33TW0RLD/rdr2-hub`.
**Goal:** Eight isolated chapter specialists prepare a complete source-backed, transfer-ready mission research layer for RDR2 Story Mode while protecting the approved complete GameGuide Field Guide v1.1 and the original campaign authority.

## Responsibility boundary

- **Canonical owner:** `L33TW0RLD/rdr2` retains `campaign/`, `missions/`, `guides/`, mission preflight and the player-approved `protocol/walkthrough_presentation.md` Field Guide v1.1. No Hub worker may edit it or infer current played/unlocked/Gold/save state.
- **Hub ownership:** a single **research/transfer chapter pack** in `mission_control/chapter_research/` per lane, plus that lane's checkpoint and handoff. Packs are substantial per-mission source references and a clear GameGuide transfer/QA queue, **not** a parallel canonical mission shelf, game completion ledger, shipped adapter or adopted tactics.
- **Chapter 1–2:** audit and close documentation/research gaps without overwriting already approved mission dossiers. State whether something is PRESENT, NEEDS SOURCE CHECK, MISSING or DISPUTED; cite exact original paths.
- **Chapter 3–6, Epilogues I–II:** create thorough per-mission authored research suitable for later GameGuide chapter-dossier production, not hollow names/checklists. Preserve spoilers in the package but never auto-display a future chapter to the player.
- **Progress:** user-confirmed observations and original GameGuide records are the only player-specific authority. Research can describe Gold requirements, not award medals.

## Eight exclusive lanes

| Task ID | Chapter | Branch | Writable chapter research pack | Checkpoint | Handoff |
|---|---|---|---|---|---|
| `mission-colter-036` | Chapter 1 — Colter | `agent/mission-colter-036` | `mission_control/chapter_research/chapter_01_v0_1.md` | `agents/checkpoints/mission_colter_036.md` | `agents/handoffs/2026-10-17_mission_colter_036.md` |
| `mission-horseshoe-037` | Chapter 2 — Horseshoe Overlook | `agent/mission-horseshoe-037` | `mission_control/chapter_research/chapter_02_v0_1.md` | `agents/checkpoints/mission_horseshoe_037.md` | `agents/handoffs/2026-10-17_mission_horseshoe_037.md` |
| `mission-clemens-038` | Chapter 3 — Clemens Point | `agent/mission-clemens-038` | `mission_control/chapter_research/chapter_03_v0_1.md` | `agents/checkpoints/mission_clemens_038.md` | `agents/handoffs/2026-10-17_mission_clemens_038.md` |
| `mission-shady-belle-039` | Chapter 4 — Shady Belle | `agent/mission-shady-belle-039` | `mission_control/chapter_research/chapter_04_v0_1.md` | `agents/checkpoints/mission_shady_belle_039.md` | `agents/handoffs/2026-10-17_mission_shady_belle_039.md` |
| `mission-guarma-040` | Chapter 5 — Guarma | `agent/mission-guarma-040` | `mission_control/chapter_research/chapter_05_v0_1.md` | `agents/checkpoints/mission_guarma_040.md` | `agents/handoffs/2026-10-17_mission_guarma_040.md` |
| `mission-beaver-hollow-041` | Chapter 6 — Beaver Hollow | `agent/mission-beaver-hollow-041` | `mission_control/chapter_research/chapter_06_v0_1.md` | `agents/checkpoints/mission_beaver_hollow_041.md` | `agents/handoffs/2026-10-17_mission_beaver_hollow_041.md` |
| `mission-epilogue1-042` | Epilogue Part I | `agent/mission-epilogue1-042` | `mission_control/chapter_research/epilogue_01_v0_1.md` | `agents/checkpoints/mission_epilogue1_042.md` | `agents/handoffs/2026-10-17_mission_epilogue1_042.md` |
| `mission-epilogue2-043` | Epilogue Part II | `agent/mission-epilogue2-043` | `mission_control/chapter_research/epilogue_02_v0_1.md` | `agents/checkpoints/mission_epilogue2_043.md` | `agents/handoffs/2026-10-17_mission_epilogue2_043.md` |

**Three-file exact lease per agent:** only the single row's pack, checkpoint and handoff. The shared plan, registry, indexes, adapter, main branch, GameGuide and all sibling agent files are coordinator-/owner-owned. The eight branch bases and GitHub issue IDs are recorded in `agents/registry.md`; each worker must read the current registry.

## Chapter pack delivery contract

Produce a source-backed, mission-by-mission research inventory across **every relevant chapter story mission** (including chapter-sensitive optional/side story missions that carry medals). Explicitly split: required story progression, optional chapter-sensitive story, stranger/world events, non-medal setup stages, replay-only and edition-specific content. Do not force one fixed gameplay order, count operation shelf numbers as Gold missions, or invent an exact 104-total reconciliation.

For **every confirmed medal-bearing mission** capture:
1. Official name, alternative name/part grouping, mission identity (no invented internal ID), actual stage / eligible Gold count, and primary/independent citations with checked date.
2. Spoiler-safe availability/trigger and prerequisites, branch or chapter exit hazards, whether replay is possible and what replay cannot restore.
3. **Gold contract:** every discrete criterion, numerical thresholds/units, timers, accuracy/headshots, optional/skippable criteria, known ambiguous interpretations and evidence class. Never invent exact values or call a claim verified on one weak source.
4. **Field Guide-ready chronological A→final outline:** practical actionable phase order, 2–5 action steps per phase where supportable, Gold-critical inline actions, immediate save/unique item/Honor/irreversible warnings, and relevant optional Intel topics. Mark uncertain tactical details; do not mechanically reuse the Old Friends phase count or checkbox total.
5. Unique loot and missables, relevant Honor or preservation choice, forced transition and save/replay limits, separating real risks from optional exploratory finds.
6. Source disagreement table for consequential conflicts; safest player-observable confirmation and user-visible uncertainty language.
7. Forward link/cross-reference to original GameGuide dossier if present; if absent, explicit `NEEDS_GAMEGUIDE_AUTHORING` transfer queue item. Never fake adoption or mission completion.

Chapter-level footer: verified inventory counts and exceptions (clearly state uncertainty), relevant Atlas D08/D18/D22/D24 and other sources as **RESEARCHED — REVIEW PENDING**, spoiler-horizon guidance, transfer priority, GameGuide source-file QA deltas, claim/evidence register, and clear overall status **RESEARCHED — REVIEW PENDING / NOT ADOPTED**. The pack must be deep enough to become a useful source for a future original-repo mission author; generic chapter summaries fail review.

## Workflow and acceptance

1. In a dedicated specialist conversation, read **latest main**, `agents/registry.md`, this coordination plan, exact GitHub issue, `mission_control/source_adapter_v1.md`, `mission_control/README.md`, `knowledge/record_contract_v1.md`, `protocol/parallel_agent_workflow.md`, and original `L33TW0RLD/rdr2` `missions/README.md`, `protocol/walkthrough_presentation.md`, `protocol/mission_preflight.md`, relevant chapters. Verify canonical mission state but **do not write** it.
2. Work strictly on assigned branch and exact three paths. First commit branch-local **initial checkpoint**; when a file already exists, read SHA before update. Do not rebase, reset, force-push or merge.
3. Research autonomously, corroborating numerical Gold and irreversible hazards with strong independent game sources; cite links and checked dates. Record unknown/disputed rather than guessing; do not claim to have played/tests not performed.
4. Complete chapter pack, update checkpoint/handoff with findings, coverage gaps, original GameGuide transfer notes, exact branch SHA; read back all three committed files; compare branch with its initial baseline and current `main`. Any baseline drift is expected and is not permission to reset.
5. Stop `DELIVERED_REVIEW_PENDING`. **Coordinator** inspects cross-chapter boundaries, Gold/mission double counts, optional eligibility, source conflicts and exact three-path diffs. Research delivery does not ratify tactics, integrate dossiers or modify GameGuide. No worker self-merge.
6. **Separate adoption gate:** only an owner-authorized GameGuide writer may produce/modify original `rdr2/missions/` chapter dossiers, following Field Guide v1.1, after source review. Only explicit player reports may update `rdr2/campaign/`.

**One agent per chapter, one active conversation per agent.** Registration in GitHub does not start worker conversations or background work. Reuse those threads for later improvements, on newly assigned tasks only.
