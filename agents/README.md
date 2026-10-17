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

Completed early branches `agent/hub-ux-001` and `agent/atlas-taxonomy-002` have final handoffs but **no mid-task checkpoints** because they predate this workflow. Do not retroactively alter those branches. The owner's subsequent [parallel research Wave 1](atlas_parallel_wave1_v1.md) superseded the 007→008→009 sequential routing: six distinct reusable specialist threads delivered D01–D06 and retain separate terminal handoffs. No new assignments are automatic.


## Current state — Wave 2 integrated; future 9 + 8 planned

Wave 2 integrated five delivered research dossiers (D08, D11, D12, D13, D15) as **RESEARCHED — REVIEW PENDING**. D09 (task `atlas-deadeye-016`, [Issue #19](https://github.com/L33TW0RLD/rdr2-hub/issues/19)) remains **PLANNED** and was requeued into Wave 3, *not* marked complete. [Wave 3/4 reservation](atlas_waves3_4_plan_v1.md) lists nine then eight research topics; no worker launch or file leases are created by that plan.

## Original assignment routing — Wave 2 (historical registration)

Six previous Wave 1 specialists can now receive their NEW bounded tasks (014–019) **in the same individual conversations**. See [Wave 2 registration and ownership](atlas_parallel_wave2_v1.md) and the operative [registry](registry.md). Prior task branches remain closed; each new task has its own issue, branch, checkpoint and handoff. Registration is not automatic execution.

## Product-first specialist production (remaster 2026-10-17)

See [content and dashboard workstream map](content_workstream_plan_v1.md). The owner superseded the initial sequence: Atlas D01/D02/D04/D03/D05/D06 now form [six separately leased parallel research tasks](atlas_parallel_wave1_v1.md), each in a reusable specialist conversation; Living Adventure Model B is task 010. Workers do not create independent mini-products. Deliver source-backed reusable records, then integrate through Companion/Dashboard after owner review.

Proposed content folders, new interface scaffolds and sample outings are **not** fresh automatic agent assignments. Existing exclusive leases and review gates remain controlling.
