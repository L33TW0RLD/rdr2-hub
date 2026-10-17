# RDR2 Hub — Content and Dashboard Workstreams v1

**Status:** COORDINATOR-OWNED PRODUCTION MAP / PROPOSED · 2026-10-17. Not a task registry and not worker auto-launch.

## Why specialists exist

The end product is **one gameplay companion**. Specialists produce pieces that the Hub consumes: mission content and research, Free Roam activities, Atlas mechanics, adaptive reasoning and dashboard polish. They must not build competing player progress trackers or a self-standing mini-app.

| Specialist lane | Main artifact | What it must NOT own | Current source/task |
|---|---|---|---|
| Atlas mechanics researcher | Deep, sourced `systems_atlas/dossiers/` | Free Roam UX, live campaign or mission medal ledger | Issues #5, #6, #7: D01 → D02 → D04 sequentially |
| Free Roam content author | Project/outings/intermission/discovery records under leased `free_roam/content/` paths | General mechanic truth or original mission guides | Conditional examples in remaster branch; future tasks unassigned |
| Living Adventure architect | Adaptive intervention Model B + contextual header contract | Dashboard rendering code, Atlas taxonomy, player-state writes | Issue #8, task 010, leased `free_roam/adaptive_companion/` |
| Dashboard/UX designer | Native ChatGPT interaction surfaces and visual language | Source research, claim adoption, fake persistence | New assignment only after owner accepts blueprint |
| Mission integration specialist | Complete original Field Guide adapter and route behavior | Alternate short mission guides | `mission_control/source_adapter_v1.md`; new dedicated task not registered |
| Independent quality reviewer | Repo/UX evidence matrix, status and regression review | Automatic ratification or merges | `quality/acceptance_matrix_v1.md`; new task later |

## How to generate bulk work without creating junk

- Work from established `systems_atlas/taxonomy_research_backlog_v0_1.md` with **narrow, source-checkable dossier questions**.
- Research once; consumers link to source record. Horse ownership is documented in S06, not re-explained differently in camp, hunting and three dashboard documents.
- Give each specialist a persistent thread, **one registered task at a time**, exclusive file lease and branch, with milestone commits and a final handoff.
- Task delivered `DELIVERED_REVIEW_PENDING` closes that task. Reuse the conversation after coordinator authorization for the next unique task/branch; avoid discarding useful context.
- Separate evidence validity from visual product readiness. A polished UI must not make `INDEXED` research appear `ADOPTED`.
- Reviewer can merge approved documentation while research remains `REVIEW PENDING`; explicitly label the latter status rather than collapsing it into product readiness.

## Recommended initial dependency order

```text
Remaster structure (this PR)
   ├── Atlas D01 horses ──┐
   ├── Atlas D02 camp ────┤
   ├── Atlas D04 hunting ─┤→ Evidence-aware Free Roam content
   └── Companion Model B ─┘             |
                      ↓                 ↓
                  Unified dashboard / ChatGPT navigation
                                  ↓
                      Real player UX verification
```

**No new task is activated by this roadmap.** Registered workers are planned until their actual branch checkpoint and status are verified. Future QA/integration tasks require coordinator registration before writes.
