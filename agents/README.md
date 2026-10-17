# Persistent specialists, disposable tasks — GitHub-first coordination

**Status:** ACTIVE COORDINATION WORKFLOW · governance PR #1 merged on 2026-10-16. Read the current `main` registry for assignments and exclusive leases. Neither Agent 001's UX nor Agent 002's taxonomy was ratified by this merge.

- [Registry](registry.md) — coordinator-owned task-to-branch routing index, status, write leases, dependencies and review gate.
- [Specialist Agent / Disposable Task Contract](disposable_agent_contract.md) — scoped permissions, task lifecycle and branch recovery.
- [Persistent Specialist Threads](persistent_specialist_threads_v0_1.md) — reuse one conversation across separately assigned tasks.
- [Parallel Agent Workflow](../protocol/parallel_agent_workflow.md) — read-first startup, checkpoint cadence, owner approvals, conflict checks and integration.
- [Checkpoint Template](checkpoint_template.md) — branch-local `agents/checkpoints/<task_id>.md`; durable **next exact action** for unfinished threads.
- [Task & Final Handoff Template](handoff_template.md) — scoped assignment and completion report.
- [Recovery Rehearsal](recovery_rehearsal_v0_1.md) — documentary cold-start checks and remaining real-client test.

## Startup or transition in a reusable specialist thread

Given an assigned `task_id` and the repo, in an existing or new chat:

1. Read **current `main`** and registry to locate lane, branch, permitted paths and approval status.
2. Fetch **assigned branch by explicit `ref`**; compare branch against `main`; read checkpoint and/or final handoff.
3. If `IN_PROGRESS`, recover committed work and exact next permitted action. If delivered, **stop that task**; use the same conversation for another task only when coordinator registers/selects its new branch and lease. Missing or conflicting checkpoint means **do not write** until resolved.
4. Confirm dependencies and protected path leases. Use GitHub readback before declaring committed work.

## Role boundary

Agent lanes are reusable conversations, not continuously executing bots that can be detected as online. Never depend on prior chat memory, graphical checkbox, background execution or hidden state as evidence of work. The original `L33TW0RLD/rdr2` remains the only gameplay-progress authority.

Completed existing branches `agent/hub-ux-001` and `agent/atlas-taxonomy-002` have final handoffs but **no mid-task checkpoints** because they predate this workflow. Do not retroactively alter those branches. The existing Atlas specialist conversation can instead handle separately registered tasks 007, 008 and 009 sequentially.


## Product-first specialist production (remaster 2026-10-17)

See [content and dashboard workstream map](content_workstream_plan_v1.md). Existing registered Atlas D01/D02/D04 tasks are **sequential work packages in a reusable specialist conversation**; Living Adventure Model B is task 010. Workers do not create independent mini-products. Deliver source-backed reusable records, then integrate through Companion/Dashboard after owner review.

Proposed content folders, new interface scaffolds and sample outings are **not** fresh automatic agent assignments. Existing exclusive leases and review gates remain controlling.
