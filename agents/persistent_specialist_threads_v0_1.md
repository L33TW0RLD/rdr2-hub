# Persistent Specialist Threads — GitHub Task Lifecycle v0.1

**Status:** OWNER-APPROVED COORDINATION MODEL · 2026-10-17. Scope is agent workflow only, not game-research adoption, architecture ratification or permission to write campaign data.

## Thread, task and branch are different lifetimes

- **Specialist conversation:** a reusable ChatGPT thread for a durable lane (Systems Atlas, Living Adventure, Integration, Audit). Do not retire a useful conversation just because one task is delivered. A conversation is not a continuously running background agent.
- **Task:** a bounded registered work package, with unique ID, issue, explicit acceptance tests, initial checkpoint, completed handoff and owner-review gate.
- **Branch:** one task = one isolated branch with an exclusive write lease. Never reuse a closed task's branch or permissions when moving to the next task.
- **Coordinator:** registers and explicitly activates work, allocates nonoverlapping paths, reviews outputs and controls owner approvals/merges.

**Closure rule:** `DELIVERED_REVIEW_PENDING` stops edits to that **task**, not use of the specialist conversation. A handoff's suggested next task is not an authorization to self-assign.

## Same-thread task transition

1. Complete task N, commit all leased files, verify exact-branch readback, and finish the immutable handoff with terminal branch SHA. No merge or self-ratification.
2. Obtain coordinator activation for task N+1: unique ID, issue, branch, baseline SHA, exclusive paths, checkpoint/handoff paths and acceptance tests.
3. In **the same conversation**, recover latest `main`, `agents/registry.md`, the new issue and new branch by explicit ref. Check dependencies and potential overlap with unfinished or unmerged work.
4. Commit task N+1's **own initial checkpoint before research/design edits**, then work only in its lease. Reference task N by stable ref; never silently treat its pending dossier as adopted.
5. Stop edits to each task at `DELIVERED_REVIEW_PENDING`. Review/merge status for earlier tasks may remain open while independent, newly authorized task work continues.
6. Replace the specialist conversation only when it becomes unwieldy, changes specialization or fails cold-recovery checks. New/reused threads have identical GitHub verification duties.

## Initial registered workstream routing

| Reusable specialist conversation | Task sequence | Rule |
|---|---|---|
| Systems Atlas Researcher, optionally the existing Agent 002 conversation | `atlas-horses-007` (#5), then `atlas-camp-008` (#6), then `atlas-hunting-009` (#7) | **Superseded 2026-10-17:** the owner now directs [six parallel Atlas specialists](atlas_parallel_wave1_v1.md), rather than the initial sequential allocation. The tasks still retain independent branches and task checkpoints; each specialist conversation may take new coordinator-assigned work later. Do not reopen `atlas-taxonomy-002`. |
| Living Adventure Architect, optionally existing architecture thread | `adaptive-companion-010` (#8) | Reuse its conversation for future *separately assigned* tasks, not automatically. |
| Hub Integrator / Quality Auditor | No new tasks registered | Can later reuse their own threads once explicit task registration exists. |

These are routing intentions, **not worker launches**. The four tasks remain `PLANNED` until started; no live process tracking, background task scheduling or continuous execution is implied.

## Unchanged controls

- `L33TW0RLD/rdr2/campaign/` is the sole gameplay authority. No worker writes it without separate explicit approval.
- Research `INDEXED` / `RESEARCHED — REVIEW PENDING` / `ADOPTED` are distinct; a task's delivery is not mechanic adoption.
- Existing Mission Control Field Guide v1.1 and preflight remain authoritative for mission presentation.
- Coordinator retains `agents/registry.md`, shared index ownership and integration rights. Workers cannot self-merge or move shared branches.
- The third-simultaneous-specialist pre-scaling gate still applies; three *sequential* Atlas tasks are not three simultaneous workers.
- No UI tick or conversation-only outcome proves a save, medal, item, unlock or GitHub commit.

## Next-task message pattern

`Continue in this SAME specialist conversation with task <task_id>. Read latest main, registry, exact assigned branch and issue; verify write lease and sources; commit your new task checkpoint before substantive edits. Do not reuse previous branch, permissions, conclusions or task status. Finish this task at DELIVERED_REVIEW_PENDING without retiring the conversation.`
