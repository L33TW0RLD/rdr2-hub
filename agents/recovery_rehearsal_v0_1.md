# Multi-Agent Recovery Rehearsal v0.1

**Date:** 2026-10-16 · **Status:** DOCUMENTARY TEST / OWNER REVIEW REQUIRED
**Mode:** GitHub-only source inspection and reasoning from the **proposed** `agents/registry.md` on `agent/multi-agent-infra-003` plus explicit worker branch refs.
**Important limitation:** This was **not** an independently initialized replacement ChatGPT thread, automated test runner, GitHub PR check, or a live UI/mobile test. No agent process state is observable.

## Test procedure (reproducible by a fresh thread)

For each task, start with only the repo and task ID. Read current `main` governance context; while this draft is unmerged, use the explicitly supplied **draft registry branch** to resolve the task. Fetch assigned branch by ref, read final handoff and branch compare relative to `main`, reconstruct:
- scope and ownership;
- verified durable completed work;
- forbidden paths;
- status and unresolved decisions;
- **exact allowed next action** (`STOP` for a completed assignment, then *propose* separate bounded work).

## T01 — Completed Agent 001

- **Lookup:** `hub-ux-001` → `agent/hub-ux-001`; handoff `agents/handoffs/2026-10-16_hub_architect_001.md`.
- **Baseline:** `91588ef`; observed branch head `ac5b05b`. Compare: **8 commits ahead, 0 behind**, eight changed files limited to `architecture/`, `free_roam/` and agent's own handoff.
- **Recovered deliverables:** Hub Experience, Module Integration, Navigation/State, ChatGPT Interface Spec, ten UX scenarios, two README indexes and handoff. Owner approval absent.
- **Next permitted action as this task:** **STOP; no further worker changes to completed branch.** Coordinator reviews with taxonomy output; a distinct authorized prototype task may later start on another branch.
- **Result:** PASS for completed-task document recovery, path isolation and scope; not a test of agent runtime continuity.

## T02 — Completed Agent 002

- **Lookup:** `atlas-taxonomy-002` → `agent/atlas-taxonomy-002`; handoff `agents/handoffs/2026-10-16_atlas_taxonomy_002.md`.
- **Baseline:** `91588ef`; observed branch head `b5920a1`. Compare: **6 commits ahead, 0 behind**, six changed files within `systems_atlas/` and own handoff.
- **Recovered deliverables:** provisional taxonomy schema, v0.2 taxonomy, coverage audit, prioritized dossier backlog, README index and handoff.
- **Decisions outstanding:** S31, provisional Sxx.Mnn IDs, S07/S27 partition, typed C* criterion namespace, evidence/spoiler vocabulary; none ratified.
- **Next permitted action as this task:** **STOP; do not start D01 inside the completed 002 task.** D01 horse lifecycle requires separately assigned task/branch and owner schema direction.
- **Result:** PASS for completed-task document recovery, path isolation and proposal-vs-approval distinction.

## T03 — In-progress checkpoint mechanism (this infrastructure assignment)

- **Lookup:** `multi-agent-infra-003` → `agent/multi-agent-infra-003`, `agents/checkpoints/multi_agent_infra_003.md`.
- **Recovered committed milestones:** draft registry, workflow protocol, checkpoint template, contract/template/index alignment, prior verified commit `21d321ab`.
- **Checkpoint's exact next action at test:** write this recovery rehearsal, then verify/read back and finalize.
- **Result:** PASS for *document-format and current branch availability*. **Not tested:** a different ChatGPT thread resuming the task with zero chat context. Such a live cold-start test remains an explicit pre-scaling acceptance requirement if the owner wants stronger proof.

## T04 — Branch collision / file-lease evaluation

- Agent 001 files: `architecture/`, `free_roam/` and one own handoff.
- Agent 002 files: `systems_atlas/` and one own handoff.
- Infrastructure 003 files: `agents/` governance and `protocol/parallel_agent_workflow.md`.
- **Observed overlap:** None among changed file paths. `main` remains at `91588ef` in observed compares, and none of the three deliverables have been merged.
- **Result:** PASS as current observed diff; not proof that future agents won't create collisions.

## T05 — Negative recovery controls (rule review, not executed adversarial writes)

| Condition | Expected safe response | Verified as documented? |
|---|---|---|
| Branch missing | Stop; coordinator reconciles entry | Yes, protocol |
| Checkpoint absent during unfinished task | Stop write; inspect only committed files; request decision | Yes, protocol |
| Checkpoint says delivered | Do not resume as same task | Yes, protocol |
| Registry stale / branch differs | Compare, do not guess current status; coordinator corrects registry | Yes, protocol |
| Two writers need same README | Reassign exclusive lease; integration proposal | Yes, protocol |
| Agent 001 semantic interface vs Agent 002 taxonomy mismatch | Record adapter issue; neither agent edits other's branch | Yes, protocol |
| GitHub write without readback | Do not claim saved delivery | Yes, protocol |

These are design contract tests, **not** forced-failure experiments.

## Remaining adoption and proof gates

1. Owner approves/revises this protocol and an authorized reviewer merges the infrastructure branch before treating the registry as operative on `main`.
2. Perform **one genuinely fresh-thread rehearsal** with only `task_id` and repo (no original assignment/chat memory): inspect branch, recover exact next action and identify protected paths. Compare its report with the committed checkpoint.
3. Give a new specialist agent an initial checkpoint **before** substantial work; exercise mid-task stop/resume once, without losing uncommitted work.
4. Use a real PR for the first integration review and record decisions/merge status without prematurely adopting underlying research.

**Verdict:** The completed agents' GitHub continuity is recoverable from handoffs; infrastructure's startup/checkpoint rules are documented and committed to an isolated branch. Real cold-start behavior and governance adoption still require separate confirmation.
