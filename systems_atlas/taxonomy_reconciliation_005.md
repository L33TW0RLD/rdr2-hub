# Systems Atlas — Agent 005 Integration Reconciliation

**Status:** PROPOSED / REVIEW PENDING — no owner ratification · 2026-10-16
**Sources:** Agent 002 taxonomy/schema and handoff, Agent 001 `architecture/module_integration_v0_1.md`, Agent 004 joint review; all read by explicit branch ref.
**Scope:** Contract reconciliation only; no new mechanic research or player progress.

## Corrections and audit
- I01: schema's horse-care illustration now uses `S06.M02`; `S06.M03` remains tack/stables/services. The generic example of an ID now uses `S06.M02` as well.
- I03: `REQUIRES` is directed **dependent -> prerequisite**. Graph row now reads `S10.M02 -> S09.M04` as a **conditional candidate**, not an enforceable sourced hard gate. The prerequisite may also involve U03, actual purchase, and recipe-specific conditions; verify separately.
- I02: the crosswalk below is a *human-authored transient adapter sample*, not a Markdown parser, approved API, persistent alias registry or verified mechanics dossier.
- The source taxonomy's 136 unique indexed leaves (including four proposed S31 leaves) were previously counted by Agent 004. Agent 005 preserves those rows/IDs and only changes graph prose/one row; no new duplicate ID was introduced.
- S01–S30 retained; S31 and all leaf ID permanence remain owner decisions. Cross-family graph references to S29 goals are topical, not automatic completion-credit predicates.
- Research status INDEXED means *classified, not fully researched*. Claim-specific source confidence must not be inferred from that status. A linked legacy research file may be REVIEW PENDING without upgrading this indexed leaf.
- Story Mode only; default T0/T1, T2/T3 opt-in. A chapter label is not evidence of an actual unlock. No owned items, save, Gold, chapter advancement, balances, or completion counts are stored.
- Schema evidence anchors are not automatically resolved per-claim provenance: illustrative `HC-01/HC-02`, `Uxx`, and `C100.*` need claim-level verification before executable ingestion. `C*` catalogue is deferred, not created.
- No permanent completion-criterion database; no unsupported conversion of `IMPROVES`, `INTERACTS_WITH` or descriptive links to hard `REQUIRES`.

## Transient consumer mapping (proposal)

| MechanicRequest / MechanicAnswer | Atlas mapping and safeguard |
|---|---|
| `query_or_ref` | Resolve ID first if supplied; otherwise hand-authored alias -> canonical proposed leaf ID; ambiguous aliases require clarification |
| `depth` / `context` / `return_to` | Hub-controlled request and presentation metadata, never persisted as Atlas player state |
| `display_name` / `summary` / `procedure` | Leaf name/summary; procedure only where researched and sourced, else mark unavailable |
| `availability` / `verified_prerequisites` | Generic `unlock` and `dependencies` plus independent player observation; absence of observation => `player_gate_unknown=true` |
| `research_status` | `research.maturity` or INDEXED from the v0.2 index; never convert to ADOPTED implicitly |
| `source_status` / `confidence` | Claim-level evidence status and confidence; UNKNOWN where the leaf has no resolved source |
| `spoiler_horizon` | Request budget intersected with record tier; default T0/T1 |
| `related_topics` | Leaf references / typed relations; no hierarchy hardcoding in the Hub |
| `citations` / `checked_at` | Exact evidence link and its checked date when available; never manufacture either |
| `risks` / `completion_relevance` | Claim-scoped caveats and category, not an assertion of player progress |

## Three illustrative, non-executable contract tests

| Query / ID / aliases | Safe answer and general gate | Player gate | Maturity / evidence / spoiler | Related |
|---|---|---|---|---|
| horse bonding / `S06.M02` / horse care, horse affinity | Feeding, calming and other available horse interactions may support bonding. Brush access under U01 needs verification; no assumed stable/horse ownership | UNKNOWN; ask what horse menu/actions are visible if action-dependent | INDEXED; exact bonding reward/brush gate claim not resolved in this leaf; confidence UNKNOWN for exacts; T0 | `S06.M01`, `S06.M03`, `S07.M02` |
| camp Ledger / `S09.M01` / Ledger activation, camp book | Normal access follows qualifying Strauss debt recovery **and deposit** (U02); do not equate Ledger availability with tools purchase | UNKNOWN; verify visible Ledger/deposit, never claim player has purchased anything | INDEXED leaf; PowerPyx camp-upgrade guide is a supporting external research anchor, not automatic claim-level adoption; conditional gate confidence pending scoped evidence; T0/T1 | `S09.M04`, `S10.M02` |
| perfect pelts / `S12.M03` / clean kills, hunting quality | Study initial quality, use species-appropriate weapon/ammunition and shot placement, inspect resulting pelt; no guaranteed perfect outcome | UNKNOWN; verify available weapon and observed quality | INDEXED leaf; legacy perfect-pelt study RESEARCHED / REVIEW PENDING, not ADOPTED; exact species rules require sourced lookup; T0 | `S12.M01`, `S04.M01`, `S10.M03` |

**Expected test invariant:** All three return a stable proposed ID and a useful bounded summary, with `player_gate_unknown=true`; no hidden spoiler, claimed unlock, confirmed completion, unsupported hard-gating or invented citation. This is static contract inspection, **not** an executed consumer adapter or gameplay field test.

## Remaining owner approvals / integration gates
1. Approve or revise `Sxx.Mnn` stable namespace and typed-edge/status/spoiler vocabularies.
2. Decide S31 in-game contextual controls, S07 and S27 internal ownership refinements.
3. Keep `C*` goal-criterion catalogue deferred unless separately commissioned.
4. Assign a later independent implementation/test task for a real lookup adapter with resolved per-claim sources, alias collisions, gating and spoiler behavior.
5. Review Agent 002 integration order against current main; do not infer design adoption from merging files.

**Result:** I01 and I03 reconciled; I02 mapped for review. Not a full factual audit of every mechanic, and not a ratification.
