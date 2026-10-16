# Disposable agents — GitHub-first coordination

**Status:** ACTIVE COORDINATION WORKFLOW · governance PR #1 merged on 2026-10-16. Read the current `main` registry for assignments and exclusive leases. Neither Agent 001's UX nor Agent 002's taxonomy was ratified by this merge.

- [Registry](registry.md) — coordinator-owned task-to-branch routing index, status, write leases, dependencies and review gate.
- [Disposable Agent Contract](disposable_agent_contract.md) — minimal permissions, lifecycle and fresh-thread recovery.
- [Parallel Agent Workflow](../protocol/parallel_agent_workflow.md) — read-first startup, checkpoint cadence, owner approvals, conflict checks and integration.
- [Checkpoint Template](checkpoint_template.md) — branch-local `agents/checkpoints/<task_id>.md`; durable **next exact action** for unfinished threads.
- [Task & Final Handoff Template](handoff_template.md) — scoped assignment and completion report.
- [Recovery Rehearsal](recovery_rehearsal_v0_1.md) — documentary cold-start checks and remaining real-client test.

## Worker startup (when this workflow is adopted)

Given just `task_id` and the repo:

1. Read **current `main`** and registry to locate lane, branch, permitted paths and approval status.
2. Fetch **assigned branch by explicit `ref`**; compare branch against `main`; read checkpoint and/or final handoff.
3. If `IN_PROGRESS`, recover completed commits and exact next permitted action. If delivered, stop and recommend a **new task/branch**. Missing or contradictory checkpoint means **do not write** until coordinator resolves.
4. Confirm dependencies and protected path leases. Use GitHub readback before declaring committed work.

## Role boundary

Agent lanes are disposable research/design workers, not concurrently executing bots that can be detected as online. Do not depend on a prior chat memory, graphical checkbox, background execution or hidden state. The original `L33TW0RLD/rdr2` remains the only gameplay-progress authority.

Completed existing branches `agent/hub-ux-001` and `agent/atlas-taxonomy-002` have final handoffs but **no mid-task checkpoints** because they predate this workflow. Do not retroactively alter those branches.
