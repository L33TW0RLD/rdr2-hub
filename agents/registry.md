# RDR2 Hub — Agent Registry v0.1 (proposed)

**Status:** DRAFT / NOT OPERATIONAL ON MAIN UNTIL APPROVED AND MERGED · snapshot 2026-10-16.
**Steward:** Owner / delegated coordinator only. Worker agents **must not** update this shared registry.
**Rule:** Branches and their last-verified handoffs establish what has actually been committed; this is a routing index, not an agent process monitor or gameplay ledger.

| Task ID | Lane and scope | Branch | Baseline main | Observed branch head | Status | Exclusive write paths | Checkpoint / handoff | Next gate |
|---|---|---|---|---|---|---|---|---|
| `hub-ux-001` | Hub UX, routing, integration; design only | `agent/hub-ux-001` | `91588ef` | `ac5b05b` | `DELIVERED_REVIEW_PENDING` | `architecture/`; `free_roam/`; own `agents/handoffs/2026-10-16_hub_architect_001.md` | [Final handoff](https://github.com/L33TW0RLD/rdr2-hub/blob/agent/hub-ux-001/agents/handoffs/2026-10-16_hub_architect_001.md) **on agent branch** | Owner review + compare with taxonomy; no further writes as same finished task |
| `atlas-taxonomy-002` | Atlas schema, taxonomy, coverage, backlog | `agent/atlas-taxonomy-002` | `91588ef` | `b5920a1` | `DELIVERED_REVIEW_PENDING` | `systems_atlas/`; own `agents/handoffs/2026-10-16_atlas_taxonomy_002.md` | [Final handoff](https://github.com/L33TW0RLD/rdr2-hub/blob/agent/atlas-taxonomy-002/agents/handoffs/2026-10-16_atlas_taxonomy_002.md) **on agent branch** | Owner schema/ID/S31 decision; then integration review |
| `multi-agent-infra-003` | Coordinator: registry, checkpoint and integration workflow | `agent/multi-agent-infra-003` | `91588ef` | Latest head: inspect branch | `DELIVERED_REVIEW_PENDING` in this draft snapshot | `agents/registry.md`, `agents/README.md`, `agents/disposable_agent_contract.md`, `agents/handoff_template.md`, `agents/checkpoint_template.md`, `agents/checkpoints/multi_agent_infra_003.md`, `agents/handoffs/2026-10-16_multi_agent_infra_003.md`, `agents/recovery_rehearsal_v0_1.md`, `protocol/parallel_agent_workflow.md` | [Final handoff](handoffs/2026-10-16_multi_agent_infra_003.md) and [checkpoint](checkpoints/multi_agent_infra_003.md) on this branch | Owner review and explicit approval before merging; no self-merge |

## Registry invariants

1. **New threads start from `main` registry and then recover their assigned branch by exact ref**; `main` alone will not show another agent's unmerged work.
2. Status is a **last-known coordinator classification**, not proof a ChatGPT thread is executing. Mark a task `IN_PROGRESS` only because it has an assigned open scope, not because a worker is online.
3. A task is `DELIVERED_REVIEW_PENDING` when handoff is committed and verified, **not** when the artifacts are ratified or merged.
4. On final close, coordinator records exact terminal head SHA and PR/merge identifiers; if branch advances after this snapshot, fetch actual GitHub head and reconcile before approving.
5. **Do not follow relative handoff links through `main` for unmerged branches.** Read exact branch: `https://github.com/L33TW0RLD/rdr2-hub/blob/agent/hub-ux-001/agents/handoffs/2026-10-16_hub_architect_001.md` and `https://github.com/L33TW0RLD/rdr2-hub/blob/agent/atlas-taxonomy-002/agents/handoffs/2026-10-16_atlas_taxonomy_002.md`.
6. If any two agents need to modify a common file, pause and reassign exclusive ownership or use a separate coordinator integration task. Do not create a race on this registry.

## Allowed statuses

`PLANNED` (not begun), `IN_PROGRESS` (assigned open work), `PAUSED` (checkpointed), `BLOCKED` (cannot safely continue), `DELIVERED_REVIEW_PENDING`, `APPROVED_FOR_INTEGRATION`, `MERGED`, `RETIRED`, `CANCELLED`.

**Important:** These statuses are for **agent tasks**, not mechanic-guide adoption. No automated agent presence detection, background scheduler, or GitHub branch protection is implied.

## How to onboard another agent

Coordinator assigns a new ID, branch, baseline SHA, narrow deliverables and exclusive paths; creates a task row; supplies exact `task_id` and repository in the opening instruction. A worker creates/commits its own branch-local checkpoint and follows [parallel workflow](../protocol/parallel_agent_workflow.md). **Only after owner acceptance of this governance proposal** should this registry be treated as active on `main`.
