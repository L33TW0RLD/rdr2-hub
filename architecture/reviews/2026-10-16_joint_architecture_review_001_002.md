# RDR2 Hub — Joint Architecture Review: Agent 001 + Agent 002

**Review date:** 2026-10-16
**Status:** REVIEWED / RECOMMENDATIONS ONLY — NO OWNER RATIFICATION, NO DESIGN-BRANCH MERGE
**Task:** `architecture-review-004`
**Base:** `main` after [multi-agent infrastructure PR #1](https://github.com/L33TW0RLD/rdr2-hub/pull/1), merge commit `9bd4ba566015c771058bf84e2284425e97ae22be`
**Sources:** `agent/hub-ux-001` (8 commits from old base `91588ef`), `agent/atlas-taxonomy-002` (6 commits from same base), the adopted original GameGuide Field Guide v1.1/preflight and latest campaign state. Reviewed by explicit refs, not by default `main`.

## Executive decision

**Recommend CONDITIONAL APPROVAL of the joint design direction, not indiscriminate full ratification.** Agent 001 and Agent 002 are complementary and do not duplicate canonical game state or change the approved live Field Guide. No fundamental architecture rewrite required. Fix one incorrect example ID, define a thin lookup/adapter contract with a real tested sample, and keep product ratification distinct from research dossier adoption. Neither branch has been merged as part of this review.

## Compatibility matrix

| Topic | Agent 001 | Agent 002 | Verdict / integration rule |
|---|---|---|---|
| Product role | ChatGPT conversation-first Contextual Trailhead, intent routing | Read-only mechanics reference, no gameplay commander | **PASS**: Hub router decides surface, Atlas answers knowledge queries |
| Live campaign truth | Only old `rdr2/campaign/` + GameGuide writes | Explicitly forbids player progress fields in mechanics definitions | **PASS**: no duplicate Gold/save/inventory/horse progress |
| Mission Control | Complete approved v1.1 A→final Field Guide with mandatory in-phase warnings | S30 scoring, chapter gates and references, not mission authoring | **PASS**: original GameGuide remains sole mission authority |
| Free Roam | PROJECT / OUTING / DISCOVERY; risk before leisure, player choice preserved | Mechanic/gate/relationship evidence (Sxx.Mnn/Uxx) | **PASS**: feasibility is read from Atlas plus player-verified gates |
| Atlas UX | Quick, Practical, Comprehensive; opt-in browse and phase return | Families, leaves, relationships, research metadata, dossier backlog | **PASS** as design; browse/aliases need a consumer adapter before implementation |
| Spoilers | Contextual current-chapter limit; urgent warning only when credible and active | T0/T1 default, T2/T3 opt-in; claim-scoped missable and gate uncertainty | **PASS**: never surface later-story details in default navigation |
| Completion | Distinguishes official 100%, all eligible Gold, achievements and exhaustive personal goals | Definition-only S29 plus source-specific tags, no completed counts | **PASS**: use goal tags on *specific criteria*, not whole-family completion credit |
| Continuity | Reconstruct from current canonical repository; no persistent UI assumption | Stable knowledge references only, not saves or active session state | **PASS**: separate conversation focus from durable gameplay state |
| Evidence | Rich claim statuses and readback; research pending not promoted | Claim-level evidence + maturity + confidence | **PASS with translation**: map status vocabularies, avoid pretending INDEXED leaves are verified dossiers |
| Integration | Transient `MechanicRequest/MechanicAnswer`, schema-agnostic | Draft `Sxx.Mnn` leaf schema, typed edges, aliases | **CONDITIONAL**: define a mapping example and alias resolution without treating Markdown as a stable machine API |
| UI execution | Native ChatGPT controls plus text fallback; no live testing performed | Research only, no UI implementation | **NOT TESTED**: later separate client pilot required |

## Concrete issues

### I01 — Incorrect illustrative horse mechanic ID (must fix before formal schema adoption)

In Agent 002 `systems_atlas/taxonomy_schema_v0_1.md` section 5 the record says **`id: S06.M03`, `name: Horse care and bonding`**. In Agent 002 `mechanics_taxonomy_v0_2.md`, `S06.M02` is **Care, bonding and commands**, whereas `S06.M03` is **Tack, stable and horse services**. The sample also links bonding to the Level-4 goal.

**Resolution:** Change illustrative bonding example to `S06.M02` and preserve `S06.M03` for stable/tack services. Re-audit every sample/consumer alias referring to either. Correct on a **new authorized reconciliation branch** or during review integration with exact file ownership, rather than rewriting completed Agent 002's branch unilaterally.

### I02 — Lookup adapter not yet instantiated (integration gate before executable prototype)

Agent 001's transient `MechanicRequest/MechanicAnswer` calls for aliases, procedures, availability, confidence, research status, citations and return target. Agent 002 defines namespaced IDs, gates, typed links, claim-level evidence, maturity and spoiler tiers; however `v0.2` is an **INDEXED Markdown taxonomy**, not fully populated schema records or an established searchable alias index.

**Resolution:** Approve the semantics, then test a minimal hand-authored read-only adapter crosswalk with 3 cases:
- `horse bonding` / `S06.M02` — show general care rules, no assumed brush or owned horse.
- `camp Ledger` / `S09.M01` — player gate conditional on actual Strauss-debt deposit; do not claim purchase.
- `perfect pelts` / `S12.M03` — species and appropriate weapon must be sourced; no guaranteed results.

Mapping must provide: `mechanic_id | aliases | display_name | summary | general_gate | player_gate_unknown | source_status | confidence | spoiler_tier | related_topic_ids | evidence_links`. The UI determines requested depth and return context; Atlas never writes campaign data. **Do not automatically treat INDEXED entries as verified complete guides or parse brittle Markdown heading positions as an API.**

### I03 — Example dependency notation requires direction normalization

The `mechanics_taxonomy_v0_2.md` cross-family graph contains example notation such as `S09.M04 Tools purchase | REQUIRES for | S10.M02 Pearson satchel recipe access`. Under Agent 002's typed-edge vocabulary `REQUIRES` should have an unambiguous dependent-to-prerequisite direction. Keep written prose but normalize structured edges so that `S10.M02 REQUIRES S09.M04`, subject to separately sourced conditions and actual player-observed unlock. Only source-backed hard gates may suppress opportunities.

### I04 — Proposed labels/ID namespaces must be distinguished from adopted names

- Retain S01–S30 family keys unchanged.
- Propose approving `Sxx.Mnn` addresses as stable **after** I01 correction and sample validation.
- Approve S31 for *in-game contextual controls*, distinct from ChatGPT interactive controls. Until explicit owner ratification it remains optional/proposed; hide its unratified family from an `ADOPTED` default index.
- Approve S07 travel/wilderness subcategory and S27 collection contracts without renumbering.
- **Defer C* criterion namespace** (`C100.*`, `CGOLD.*` etc.) until a separate proven goal-criterion research task. Tags suffice for now. The schema's `C100.PLAYER_HORSE_BOND` is **illustrative**, not a defined canonical ID.

### I05 — No live end-to-end test / scope of adoption

Agent 001's ten Chapter 2 scenario cases PASS as **paper simulations**. There has been no actual ChatGPT interactive client/mobile+desktop validation, no tested Atlas adapter, no real report write/readback test and no field pilot using changing mission state.

**Resolution:** Accept the architecture as a *draft design baseline* if owner approves, but withhold any claim that it is an implemented/ratified GameGuide interface. First prototype must test real actions, complete v1.1 mission return, unknown-unlock handling, player report persistence honesty, and spoiler-safe Atlas browsing.

### I06 — Governance post-merge housekeeping (nonblocking architecture)

PR #1 is merged, but `main/agents/registry.md` still says `DRAFT / NOT OPERATIONAL ON MAIN UNTIL APPROVED AND MERGED`, the infrastructure task row still reads `DELIVERED_REVIEW_PENDING`, and the workflow/contract headers still say `PROPOSED`. This is a misleading **status metadata issue**, not a merge failure. Coordinator should record the explicit owner-approved *governance adoption* and PR #1 merge SHA, update infrastructure task to `MERGED` and avoid inferring that the 001/002 content was approved.

## Suggested owner decisions (high-leverage package)

1. **UX default — ACCEPT recommended:** Contextual Trailhead; PROJECT/OUTING/DISCOVERY; one featured Project + one suggested Outing + no more than 2 alternatives; discovery interruptions welcome; always offer Story when safely available. Mission Control retains full approved Field Guide v1.1. Mechanics depths Quick/Practical/Comprehensive.
2. **Taxonomy structure — ACCEPT with I01 fix:** Stable S01–S30 and proposed leaf `Sxx.Mnn`; approve S31 as in-game interaction family, S07 travel partition and S27 collection contract partition; typed edges represent **general rules only** with sourced gates. Require unique ownership, aliases and migration reference.
3. **Defer premature complexity — ACCEPT deferral:** No `C*` persistent criterion catalogue, no durable Project-focus store, no separate dashboard/app, and no new gameplay-authority migration until independently justified and owner approved.
4. **Implementation gate — REQUIRE:** Build and test small Atlas lookup adapter (three named samples) and ChatGPT-native Contextual Trailhead pilot. Treat owner approval of these **design principles** separately from approval of exact mechanic claims or live UI behavior.
5. **Governance upkeep:** Coordinator fixes stale merged-PR metadata on `main`, preferably as a small isolated coordinator change.

No gameplay result, Gold medal, save, in-world unlock or owned item is accepted by the Hub merely because these choices are adopted.

## Integration order (after explicit owner approval)

1. Capture accepted design decisions in an owner-reviewed `decisions/` record (may approve part of a branch while leaving research INDEXED).
2. Reconcile I01 and I03; document I02 mapping and status vocabulary; test 3 read-only cases.
3. Open review PRs for Agent 002 then Agent 001 (either order works at path level; Atlas schema first reduces semantic drift). Refresh against **latest** `main`; after infrastructure merge both are behind main, but their changed file paths have no current overlapping infrastructure paths.
4. Reviewer verifies branch compare, no unauthorized changes, intact source authority and exact ref readback. Merge only with owner approval; label proposals as DRAFT/INDEXED unless specifically adopted.
5. Prototype as a **new** bounded agent assignment, not a reopening of finished 001/002 tasks. Run live ChatGPT client acceptance before claiming deployed UX.

## Static research-integrity check

- `mechanics_taxonomy_v0_2.md` currently declares **136 unique mechanic leaves**, including **4 provisional S31 leaves**. No duplicate leaf declarations in its family tables were detected.
- Both branches are based on `91588ef...`. Post-PR #1 `main` at `9bd4ba5...` has advanced; branch compare showed Agent 001 **8 ahead / 12 behind** and Agent 002 **6 ahead / 12 behind**, with nonoverlapping changed paths and no merge of either.
- Source of truth and approved Mission Control design were corroborated against old `L33TW0RLD/rdr2` `protocol/walkthrough_presentation.md`, `protocol/mission_preflight.md`, and `campaign/current_state.md` (read-only).
- This review **does not verify** every factual RDR2 mechanic assertion or every cited external guide; it audits architecture, representation, boundaries, and integration only.

**Reviewer verdict:** `CONDITIONAL_PASS` — no architecture rewrite. Owner can approve a concise direction package, after which a bounded reconciliation pilot addresses the issues before operative implementation. No self-ratification or merge.
