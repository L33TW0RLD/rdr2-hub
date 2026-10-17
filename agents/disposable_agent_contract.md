# Specialist Agent / Disposable Task Contract v0.3 — ACTIVE

**Status:** OPERATIVE COORDINATION CONTRACT after governance PR #1 merged on 2026-10-16. Complements [Parallel Workflow](../protocol/parallel_agent_workflow.md) and [Registry](registry.md). No change to gameplay authority.

## Principle

**GitHub tasks are disposable; specialist ChatGPT threads are reusable.** A conversation can handle successive coordinator-assigned tasks, but never becomes a second campaign commander or background worker. Each task has its own branch, checkpoint, exclusive file lease and final handoff. The handoff closes the **task**, not the conversation. See [Persistent Specialist Threads](persistent_specialist_threads_v0_1.md).

## Start / recover

1. Read latest `L33TW0RLD/rdr2-hub` `main`: README, this contract, [parallel workflow](../protocol/parallel_agent_workflow.md), source authority, decisions and the **adopted** agent registry (if available).
2. Resolve the assigned `task_id` to its branch, allowed write paths, current task status, dependencies, checkpoint and handoff. Use only an owner-provided scope when registry is not yet operative on `main`.
3. **Read the task branch explicitly by `ref`; do not mistake `main` for that agent's working files.** Read and validate its `agents/checkpoints/<task_id>.md` and/or final handoff; compare `main` versus branch.
4. Consult `L33TW0RLD/rdr2` read-only as needed. Preserve established campaign and mission research/adoption status.
5. Before writes, state task, exact allowed paths, protected paths, starting SHA, deliverables, acceptance tests, dependency references, exact next action and stop condition. Record an initial checkpoint on the assigned branch.
6. If a task is `DELIVERED_REVIEW_PENDING` or merged, **STOP EDITING THAT TASK**. The same conversation can begin a separately registered and coordinator-assigned task on a new branch after checking current main, registry, dependencies and lease. Never self-assign or carry over permissions.

## Permissions and path leases

- Research and propose within assigned scope, commit only allowed **design/research** files and assigned checkpoint/handoff.
- No other agent's branch edits, no uncontrolled shared README/index writes, and no direct agent-to-`main` writes.
- Never edit `L33TW0RLD/rdr2` without separate explicit owner approval.
- Never ratify proposals, change approved scope, merge conflicting decisions, or assert gameplay progress.
- Do not add frameworks, apps, dashboards, backends or dependencies unless authorized.
- Never turn a temporary UI checkbox or an uncommitted report into evidence of an in-game result.
- The registry is coordinator-owned. Only the coordinator changes task status/ownership and stages governance updates for review.

## During work

Commit a checkpoint after meaningful milestones and before ending an unfinished thread. Every checkpoint names the last verified durable result, unresolved blockers and **one exact next permitted action**. Re-read GitHub on success; do not claim continuity for unsaved ChatGPT thought/UI state.

If current `main`, another branch or a dependency changes, compare and document uncertainty. Do not silently incorporate an unratified schema or overwrite conflicting work. Escalate overlapping paths and contradictory branch status to coordinator.

## Finish

1. Verify all changed files by **explicit branch ref** and compare against latest `main` and allowed path list.
2. Publish a final handoff with starting main SHA, branch, deliverables, verification, evidence limits, owner decisions, compatibility dependencies and next *proposed separate task*.
3. Report terminal branch SHA in completion message; no self-ratification or merge.
4. Stop editing this task and release its scope for review; **do not automatically retire the specialist conversation**. A next task can run here after coordinator activation, with a new task ID, branch and checkpoint. Whether reused or fresh, recover evidence from GitHub, not assumed ChatGPT state.

## Agent lanes

- **Atlas Researcher:** mechanics taxonomy, evidence, source-aware guides; no campaign changes.
- **Free Roam Designer:** activity planning and Chapter-safe organic play loop; no mission results.
- **Mission Interface Reviewer:** audit Field Guide patterns; no duplicate mission authority.
- **Hub Architect:** UX, navigation, integration contracts; no Atlas taxonomy ownership.
- **Architecture Auditor / Coordinator:** isolate responsibilities, review compatibility, maintain registry and workflow; prefer no edits when consistent.

Lanes are reusable specialist responsibilities, not live autonomous bots or background workers. A lane can execute successive task branches, never unregistered scope. Exact task write paths override broad lane labels.
