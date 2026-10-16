# Disposable-Agent Mid-Task Checkpoint Template v0.1

**Status:** ACTIVE COORDINATION TEMPLATE · governance PR #1 merged 2026-10-16; no automatic state monitoring.

Use one file per task at `agents/checkpoints/<task_id>.md` **inside that task's own branch**. This is distinct from its immutable final handoff. Replace example values before using; write checkpoints only with authorization for this exact path.

## Identity and baseline

- **Task ID:** `<unique-task-id>`
- **Lane / responsibility:** `<short-role>`
- **Branch:** `agent/<lane>-<NNN>`
- **Starting main SHA:** `<full-sha>`
- **Checkpoint recorded:** `<YYYY-MM-DD HH:MM UTC>`
- **Workflow status:** `IN_PROGRESS | PAUSED | BLOCKED | DELIVERED_REVIEW_PENDING`
- **Task objective:** `<single bounded outcome>`
- **Allowed write paths:** `<explicit files or unshared directories>`
- **Protected/read-only paths:** `<explicit>`
- **Dependencies:** `<branch/ref + specific commit/status, or none>`
- **Stop condition / acceptance tests:** `<verifiable>`

## Durable progress (only repository-verified facts)

| Milestone | Committed artifact/ref | Verification state | Notes |
|---|---|---|---|
| `<M1>` | `<path @ exact branch ref>` | `VERIFIED | NEEDS_RECHECK` | `<decision or limitation>` |

- **Last verified commit BEFORE this checkpoint:** `<commit_sha or N/A>`
- **Uncommitted / not recoverable:** `<list or UNKNOWN>` — do not claim unrecoverable notes exist.
- **Files intentionally not touched:** `<relevant protected paths>`

## Exact resumption instruction

1. **Current phase:** `<specific phase and status>`
2. **Exact next permitted action:** `<imperative, bounded file/task; one action>`
3. **Subsequent tasks after action:** `<brief ordered remaining acceptance steps>`
4. **Blockers and owner decisions:** `<none or exact disputed choice>`
5. **Assumptions / uncertainties:** `<what must be rechecked; avoid invented conclusion>`
6. **Handoff destination:** `agents/handoffs/<date>_<task_id>.md` or defined alternative.
7. **Required verification:** `<branch compare, file readback, evidence/scope checks>`

## Successor's startup check (mandatory)

- Resolve task via **adopted `main` registry**; if registry is still draft, recover from owner-provided assignment.
- Fetch latest `main`, this **assigned branch**, and checkpoint by explicit `ref`.
- Compare actual branch changes to `main`; check last verified evidence and completion criteria.
- If this checkpoint is stale, missing, conflicted, or states `DELIVERED_REVIEW_PENDING`, **do not autonomously write**. Escalate to coordinator for correction/new task.
- Resume `exact next permitted action` only after reconciling any changed dependencies.

### Closure rule

A final handoff documents all delivered files, known limitations, required decisions, branch/readback verification, and an *advisory* next task. It closes the existing task; it does not authorize a new agent to keep working on the same completed scope. Report the terminal SHA in the final chat message; a self-referential SHA inside the commit that creates this checkpoint/handoff cannot reliably be known.

**Evidence boundary:** checkpoint completion refers to *repository work only*. It cannot confirm player actions, save state, medals, unlocks, or in-game purchases.
