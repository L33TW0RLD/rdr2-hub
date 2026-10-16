# Disposable Agent Contract v0.2 — PROPOSED

**Status:** DRAFT / OWNER REVIEW REQUIRED. Complements [Parallel Workflow](../protocol/parallel_agent_workflow.md) and [Registry](registry.md). No change to gameplay authority.

## Principle

**Repository is durable; agent threads are disposable.** Every agent is a bounded worker, never a second campaign commander. A task branch holds work; a branch-local checkpoint holds the *exact recoverable next action*; a final handoff closes the assignment.

## Start / recover

1. Read latest `L33TW0RLD/rdr2-hub` `main`: README, this contract, [parallel workflow](../protocol/parallel_agent_workflow.md), source authority, decisions and the **adopted** agent registry (if available).
2. Resolve the assigned `task_id` to its branch, allowed write paths, current task status, dependencies, checkpoint and handoff. Use only an owner-provided scope when registry is not yet operative on `main`.
3. **Read the task branch explicitly by `ref`; do not mistake `main` for that agent's working files.** Read and validate its `agents/checkpoints/<task_id>.md` and/or final handoff; compare `main` versus branch.
4. Consult `L33TW0RLD/rdr2` read-only as needed. Preserve established campaign and mission research/adoption status.
5. Before writes, state task, exact allowed paths, protected paths, starting SHA, deliverables, acceptance tests, dependency references, exact next action and stop condition. Record an initial checkpoint on the assigned branch.
6. If a completed task has `DELIVERED_REVIEW_PENDING` or has merged, **STOP**: no more work on that task unless the coordinator explicitly reopens review/correction. New scope means a new task ID and branch.

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
4. Stop. Another fresh thread recovers from the registry, branch checkpoint and handoff — never from assumed prior conversation context.

## Agent lanes

- **Atlas Researcher:** mechanics taxonomy, evidence, source-aware guides; no campaign changes.
- **Free Roam Designer:** activity planning and Chapter-safe organic play loop; no mission results.
- **Mission Interface Reviewer:** audit Field Guide patterns; no duplicate mission authority.
- **Hub Architect:** UX, navigation, integration contracts; no Atlas taxonomy ownership.
- **Architecture Auditor / Coordinator:** isolate responsibilities, review compatibility, maintain registry and workflow; prefer no edits when consistent.

Lanes are responsibilities, not live autonomous bots or background workers. Specific assignment paths override broad lane labels.
