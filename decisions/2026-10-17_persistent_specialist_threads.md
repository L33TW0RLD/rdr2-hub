# Owner Decision — Persistent Specialist Conversations

**Approved:** 2026-10-17 · **Scope:** RDR2 Hub agent operating model, not a gameplay or UX feature ratification.

The owner chose reusable specialist ChatGPT conversations instead of retiring a thread after each single dossier. This changes the **thread lifetime**, not the task-level safety contracts.

**Approved:** (1) a specialist thread may carry multiple successive bounded assignments; (2) each task retains its own ID, exclusive branch/lease, checkpoint and handoff; (3) `DELIVERED_REVIEW_PENDING` closes the task, not the conversation; (4) a coordinator must select/register the next assignment before it starts; (5) an existing Atlas specialist thread may handle tasks 007 → 008 → 009 sequentially, while Companion 010 occupies a reusable architecture lane; (6) unmerged work, research maturity, original campaign authority and owner-only merge/ratification rules are unchanged.

The original Agent 002 taxonomy task stays closed even if its conversation performs new tasks. No automatic agent launch or background execution is authorized.

**Implementation:** [Persistent Specialist Workflow](../agents/persistent_specialist_threads_v0_1.md) and updated coordination contracts.
