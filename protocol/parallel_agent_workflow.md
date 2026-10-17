# Parallel Specialist-Thread / Disposable-Task Workflow v0.2 — ACTIVE

**Status:** OPERATIVE COORDINATION CONTRACT · governance PR #1 merged on 2026-10-16. This does not approve any gameplay or design proposals.
**Repository:** `L33TW0RLD/rdr2-hub`
**Purpose:** Make specialist conversations reusable across bounded tasks while keeping independent branches, checkpoints, review and safe integration. This is a **coordination protocol**, not a new gameplay authority or automatic execution system. See [Persistent Specialist Threads](../agents/persistent_specialist_threads_v0_1.md).

## 1. Authority and the two axes of state

- `main` is the accepted **Hub source baseline** only. A design on a task branch is not approved simply because it has a commit or PR.
- `agents/registry.md` on **main** is the coordinator-maintained **task routing index** under this now-merged workflow. A copy on an unmerged proposal branch is *not an operative registry*.
- Every task branch owns its own `agents/checkpoints/<task_id>.md` (work-in-progress recovery) and a final `agents/handoffs/<date>_<task_id>.md` (completed assignment).
- **Thread lifetime ≠ task lifetime.** A specialist ChatGPT conversation can serve multiple tasks in sequence, but each task retains a unique ID, new branch/lease, checkpoint, handoff and owner review. `DELIVERED_REVIEW_PENDING` stops task work, not conversation use.
- `L33TW0RLD/rdr2/campaign/` remains the only authoritative gameplay-state record. No Hub registry, checkpoint, draft, PR, chat, or checkbox can confer medals, unlocks, inventory, saves, or player progress.
- **Agent status** (`IN_PROGRESS`, `DELIVERED_REVIEW_PENDING`) is different from **content maturity** (`DRAFT`, `RESEARCHED_REVIEW_PENDING`, `ADOPTED`). Neither implies the other.

## 2. Required task registration (coordinator only)

Before assigning a new worker, the coordinator adds/updates one registry row with: unique `task_id`, mission and lane, branch name, base `main` SHA, **exact allowed write paths**, protected/read-only paths, dependencies, checkpoint path, final handoff path, status, and next review gate. One author at a time owns a writable path; cross-references are read-only. Avoid assigning two agents the same README/index or handoff file.

- Branch naming: `agent/<short-lane>-<three-digit-id>`. Never reuse a retired task ID/branch as though it were a new assignment.
- **Branch creation:** from a verified SHA of current `main`, not from another worker's unpublished branch without explicit owner-approved dependency.
- **Shared governance paths:** `agents/registry.md`, `agents/disposable_agent_contract.md`, `agents/README.md`, and `protocol/parallel_agent_workflow.md` are coordinator-owned, not general worker write targets.
- **Directory indexes:** when two tasks could both edit `systems_atlas/README.md` (or any other shared index), grant a single owner. Others record proposed index changes in their handoff instead of writing them.
- Registration does not launch, schedule, or monitor an agent. Humans activate work in **new or existing specialist chats**; no thread automatically begins the next registered task.

## 3. New-thread startup and same-thread task transition

A new conversation **or reused specialist thread changing tasks**, given `task_id` and repository, must follow this sequence **before writing**:

1. Read `main` README, source-authority contract, agent contract, registry, and this workflow. Verify whether the registry has been adopted on `main`. If not, use the *explicit original assignment* and task branch; do not infer permissions from a draft registry.
2. Resolve `task_id` to its specific branch, lane, scope, permitted paths, dependency versions, status, checkpoint path and intended deliverables. Confirm that branch exists.
3. **Read the assigned branch by explicit `ref`**, not default `main`. Read its latest checkpoint and any final handoff. Compare the branch with `main` for file changes, ahead/behind and likely ownership collisions.
4. Read the committed deliverables and their indexes. Check that the checkpoint's `last_verified_work` is actually on the branch. Recover unanswered questions and exact next action; never fabricate work not present on the branch.
5. Recheck external dependencies against their published commit SHA or the current branch as appropriate. If a dependency is unmerged, label it as unapproved branch material. Do not import an unratified schema as authority.
6. State recovered status and **the next permitted action**. If `DELIVERED_REVIEW_PENDING` or `MERGED`, do not continue writing to that finished task; request separate coordinator activation of another registered branch, potentially in the **same thread**. If `IN_PROGRESS`, resume the checkpoint's next action only within its lease.

If branch, registry, checkpoint, or manifest disagrees, **STOP WRITE** and raise the discrepancy to coordinator/owner. Missing checkpoint means inspect committed work and request a coordinator recovery decision; do not assume a milestone was completed.

## 4. Incremental checkpoint discipline

Use `agents/checkpoint_template.md`. Commit an initial task checkpoint before substantive design work, then update it:

- whenever one planned milestone is committed;
- before a major dependency handoff or research branch switch;
- before stopping or yielding the thread;
- after an interruption **if a successor can verify what was already committed**.

Fields include baseline SHA, verified committed artifacts, pending work, exact next action, blockers, assumptions, evidence class, dependencies, current owner decisions, write lease and stop condition. **Only committed changes are recoverable.** Keep an unresolved task explicit rather than describing it as finished.

The checkpoint cannot reliably include the SHA of its *own* commit. Record the prior verified SHA or a named verified file, and report actual latest branch head SHA separately in the agent's completion message / downstream review.

## 5. Review, conflict resolution, integration

1. Agent finalizes and verifies branch readback and compares against `main`; writes handoff and stops at `DELIVERED_REVIEW_PENDING`. No unilateral ratification, self-merge, or propagation to the legacy `rdr2` repository.
2. Coordinator reviews scope, evidence, source authority, changed paths, dependencies and mismatch with other drafts. Request specific corrections on the same branch if necessary while its ownership lease is maintained.
3. An integration PR may be opened with base `main`; PR should identify task ID, baseline/head SHA, changed paths, exact acceptance tests, unresolved choices, authority status, and linked handoff. A PR is a review vehicle, **not approval**.
4. **Owner explicitly approves** each architectural/taxonomy decision to be adopted. Record approval in `decisions/` through a separately authorized action. Mere branch merge does not automatically make all underlying research `ADOPTED`; distinguish workflow adoption from design approval.
5. Recheck latest `main` and compare immediately before integration. If another PR merged first, reassess outdated docs, IDs, overlapping indexes and references; do not force-push/rebase blindly or automatically choose a winner. Resolve conflicting designs through a coordinator-authored integration decision, and ask owner for material choices.
6. After explicitly approved integration, merge and verify readback, then coordinator updates registry status and links exact merged commit. Stop editing the **closed task**; any follow-up uses a **new task ID and branch** but may run within the existing specialist chat after coordinator assignment. Retain immutable handoffs.
7. Avoid concurrent mutations to `main` or to the same path. Even where technical GitHub permissions permit direct writes, this protocol disallows worker direct-to-main commits.

## 6. Failure and risk controls

- **Stale main:** fetch and compare before any update, and again at handoff. Never treat an old `main` snapshot as live.
- **Stale registry:** GitHub branch/head and latest handoff can supersede *observed commit facts*, but only coordinator updates task status; stop on material inconsistency.
- **Cross-branch disagreement:** record a precise interface mismatch (for example Agent 001 `MechanicAnswer` vs Agent 002 `Sxx.Mnn` schema); do not edit another branch or silently ratify either.
- **Protected paths breached:** flag and request revert/correction on the agent branch before approval.
- **GitHub read/write failure:** no claim of durable save until exact ref readback verifies the content.
- **Chat memory/UI ephemeral:** not evidence of repo commits, active agents, or actual gameplay.
- **Secret/private data:** do not put credentials, user identifiers, or gameplay uploads into public status documents.
- **Branch protection limitations:** these are documented workflow controls, not a claim GitHub branch protection, required reviews, or CI is configured.

## 7. Pre-scaling gate

Before adding a third **simultaneously executing** specialist worker (not just a third registered sequential task), verify:
- coordinator-visible registry row and nonoverlapping file leases;
- each worker has an initial committed checkpoint and an explicit handoff path;
- a fresh-thread dry run locates each branch and reconstructs `completed -> exact next action -> blocked/open` without the original chat;
- no unfinished review claims owner ratification;
- a plan exists for ordered integration/README ownership.

See `agents/recovery_rehearsal_v0_1.md` for an initial document-only rehearsal and its limits.
