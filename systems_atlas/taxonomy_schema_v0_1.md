# Systems Atlas — Taxonomy Record Schema v0.1

**Status:** PROPOSED / DRAFT — NOT RATIFIED · **Date:** 2026-10-16  
**Scope:** Red Dead Redemption 2 Story Mode mechanics; reusable Atlas knowledge, not the player's save or an interface implementation.  
**Compatibility:** Preserves S01–S30. See [coverage audit](taxonomy_coverage_audit_v0_1.md) for proposed S31 and migration.

## 1. Separation of authorities

| Data class | Stores | Does NOT store | Responsible authority |
|---|---|---|---|
| Atlas family | Stable topical address, scope, navigation children | Unlocked or completed status | Systems Atlas |
| Mechanic definition | Rules, controls, gates, consequences, relationships, source claims | Player's current chapter, items, money, Gold medals | Systems Atlas |
| Unlock/dependency rule | Conditions under which a mechanic is normally usable; caveats | Claim a player has satisfied those conditions | Systems Atlas research |
| Completion criterion | The external condition for a *type* of goal; exact thresholds where sourced | Number player has completed or trophy earned | Atlas definition; in-game Progress screen for verification |
| Gameplay observation | What the actual player saw/did, with screenshot, save and timestamp | Universal game rule inferred from one playthrough | Existing legacy campaign authority until owner approves migration |
| Activity recommendation | Contextual proposal derived from read-only state and Atlas | Independent game-state writes | Free Roam Control / Mission Control (different agent) |

**Hard rule:** There is NO completed, collected, current_balance, unlocked_now, visited, active_mission, gold_earned, owned_horse, save_slot, or player_progress property in an Atlas definition. A separate caller may pass live observations as *ephemeral input*; Atlas records are unchanged.

## 2. Key spaces and permanence

- **Family ID:** S01 through S30 immutable; a new proposed family starts at S31. Never silently reuse an ID. Family renames preserve their ID.
- **Mechanic ID:** Sxx.Mnn (for example S06.M03). Allocate from 01, append new numbers; IDs do not encode story chapter, mission sequence, or priority. Once published, IDs remain mapped even when a mechanic is moved.
- **Subcategory code:** human-readable stable slug, e.g. horse-care; free to rename via recorded alias migration, but not an ID.
- **Dossier:** one or more mechanic IDs point to a separately versioned deep-dive document. A dossier is not a new family and cannot write campaign state.
- **External goal criterion ID:** C100.*, CGOLD.*, CACH.*, CEXH.*, CCONV.*, CIMM.*. These belong to a criterion catalogue if commissioned later; avoid inventing a completed-goal ledger now.
- **Source ID:** E001, E002 etc scoped to each dossier; each source records publisher, title, URL, date checked, media/platform and type. Never assign one blanket source citation to unverified details.
- **Alias / redirect:** old_id -> canonical_id; reason, effective_version, approval, no loss of provenance. Only add redirect when the owner authorizes a move.
- **Removed mechanics:** deprecate and link replacement instead of deleting or recycling historical keys.

**S31 is a PROPOSAL; the approved namespace still ends at S30.**

## 3. Required mechanic definition

| Field | Type | Meaning / rules |
|---|---|---|
| id | stable string | Sxx.Mnn, unique, immutable |
| name | string | Searchable in-game language, no speculative unlock claim |
| parent_family | family ID | Single primary owner; other families are cross-references |
| subcategory | slug | Logical grouping within family |
| summary | 1–3 sentences | Concrete function or decision it affects |
| player_interaction | array of action objects | Action, interface/context, prerequisites, observable feedback; control buttons are platform-specific, not universal |
| unlock | structured rule | gate_id, all/any requirements, earliest known context, exceptions, status and evidence |
| dependencies | typed edges | Prerequisite mechanics or gate rules, not their completion in a save |
| relationships | typed edges | Related systems, input/output, competition, enables and hazards |
| benefits_and_costs | array | Effects, rewards, honor/financial/resource consequences, conditionality |
| risks | array | Missable, irreversible, unique-resource, chapter-window, law, death, spoilage, save, edition |
| availability | object | story_mode, chapter window as explicit range/unknown, geographic/time conditions, spoiler tier |
| completion_relevance | array | OFFICIAL_100, ALL_GOLD, ACHIEVEMENT, OPTIONAL_EXHAUSTIVE, CONVENIENCE, IMMERSION or NONE; each with exact scope and evidence; multi-tag valid |
| evidence_claims | array | Claim ID, evidence class/source, URL/local path, quote-free precise paraphrase, confidence and dispute |
| research | object | maturity, checked_on, open_questions, next_dossier and possible NEEDS_RECHECK |
| notes | array | Optional bounded clarifications; never narrative future plot in default tier |

Null/unknown is preferable to a guessed prerequisite or value. A family entry may initially be INDEXED with brief summaries but must not masquerade as a researched dossier.

## 4. Controlled vocabularies

**Research maturity:** NOT_STARTED (brief only); INDEXED (discovery classification); DRAFT (unresolved); RESEARCHED_REVIEW_PENDING (sourced, not approved); ADOPTED (explicit owner/GameGuide signoff with reference); NEEDS_RECHECK (suspected obsolete/wrong). The status is not a measure of whether the player performed an action.

**Claim epistemic status:** CONFIRMED_IN_GAME_FOR_RULE (reproducible documented game UI/manual); CORROBORATED (at least two independent suitable sources); SINGLE_SOURCE; DISPUTED; UNKNOWN; PROPOSED_DESIGN. A single player screenshot proves a player observation, not a universally repeatable mechanic.

**Confidence:** HIGH / MEDIUM / LOW / UNKNOWN. Keep separate from epistemic status and overall dossier maturity.

**Spoiler tier:** T0 = controls, system descriptions, presently available Chapter 2 examples; T1 = nearby gate/optional chapter risk without future-story outcome; T2 = future chapter, region or quest details requiring opt-in; T3 = future plot/outcome spoilers. Default Atlas navigation returns T0/T1 only. Gated subjects may have T2/T3 sections but no default display.

**Gate expression:** ALL, ANY, ONE_OF, EVENT, CHAPTER_WINDOW, REGION, TIME_WINDOW, PLAYER_OBSERVED; each subcondition has a documented assertion status. Gate predicates describe *rule dependencies*, never write unlock flags to player state.

**Typed edges:** REQUIRES (hard prerequisite); ENABLES (new mechanic access); MATERIAL_FOR (inventory/craft input); OUTPUT_TO (receiving service); IMPROVES (optional enhancement); INTERACTS_WITH (bidirectional noncausal); CONFLICTS_WITH (mutually exclusive destination/choice); HAZARD_TO (may close opportunity); CONTRIBUTES_TO (goal); RECORDED_IN (in-game reference screen). Use REQUIRES only where researched, not merely because things are convenient together. Cross-reference target may be an Sxx.Mnn, Gate Uxx, criterion C*, or external read-only source URI; dangling edges flagged.

**Risk:** irreversible / missable / chapter_sensitive / conditional / recoverable / disputed / ordinary. A 'missable' label is **claim-scoped**, not inferred from a chapter number alone.

**Availability state for research:** known_by_reliable_rule / conditional / disputed / unknown. Actual *current* state is never present.

## 5. Reference record (illustrative, proposal; not a player assertion)

    id: S06.M03
    name: Horse care and bonding
    parent_family: S06
    subcategory: ownership-care
    summary: Feeding, calming, grooming and riding support horse condition and bonding; identify the current horse before taking action.
    player_interaction:
      - action: feed_or_brush
        context: horse proximity/horse interaction menu
        controls: platform_specific
        observed_feedback: bonding or condition display, if shown
    unlock:
      gate_id: U01
      logic: conditional_normal_stable_tutorial
      earliest_known_context: Chapter 2
      exceptions: [brush_access_must_be_verified]
      status: CORROBORATED
      evidence_claims: [HC-01]
    dependencies: [{type: INTERACTS_WITH, target: S07.M02}]
    relationships:
      - {type: CONTRIBUTES_TO, target: C100.PLAYER_HORSE_BOND}
      - {type: INTERACTS_WITH, target: S12.M04}
    benefits_and_costs: [improved_horse_relationship, feed_consumes_item]
    risks: [{kind: irreversible, condition: permanent_horse_death, confidence: MEDIUM}]
    availability: {mode: STORY, chapters: conditional, spoiler_tier: T0}
    completion_relevance:
      - {goal: OFFICIAL_100, scope: reach_maximum_bond_with_one_horse, evidence_claims: [HC-02]}
      - {goal: CONVENIENCE, scope: travel_and_hunting_utility}
    evidence_claims:
      - {id: HC-01, source: legacy_unlock_map_U01, status: CORROBORATED, confidence: HIGH}
      - {id: HC-02, source: powerpyx_completion_checklist, status: CORROBORATED, confidence: HIGH}
    research:
      maturity: INDEXED
      checked_on: 2026-10-16
      open_questions: [exact_bond_rewards_by_rank, stable_vs_temporary_horse_exception]
      next_dossier: D01

All YAML-like examples are **non-executable illustration** and evidence IDs must be resolved to source records before ingestion. The example does not mean the player's horse is bonded, fed or even stabled.

## 6. Claim-level evidence and disputes

For each decision-relevant claim store: claim_id, exact proposition, applicable mode/platform/edition, primary or secondary source, date accessed, confidence, contradictions and current disposition. Distinguish:
1. Official Rockstar documentation (preferred when specific).
2. Direct in-game menu/instructions (strong for the observed case; player-specific observations remain in campaign authority).
3. Independent established specialist guides (e.g. GTA Base, PowerPyx, GameFAQs).
4. Wiki/community discussions (supporting, often conditional).
5. Unverified player anecdotes (investigation lead only).

Example evidence anchors (not blanket endorsement):
- [PowerPyx — Total Completion](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) and [GTA Base — Total Completion](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist): official subset thresholds vs exhaustive hunting.
- [PowerPyx — Camp Ledger](https://www.powerpyx.com/red-dead-redemption-2-how-to-upgrade-camp/): one Strauss debt returned/deposited; does not prove purchase.
- [Rockstar Support — Lost Legendary Animal Pelts](https://support.rockstargames.com/articles/480idh1zECJ0ojrheApV1U/unable-to-skin-legendary-animals-or-losing-their-pelts-in-red-dead-redemption-2): loss recovery after short delay, rather than ordinary material storage.
- [PowerPyx — Trophy Roadmap](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap): camp achievement windows distinct from Total Completion.

Disputes must be a list of **specific competing claims** and a safe operational default, e.g. 'whether a particular camp game counts as a companion activity' -> verify marked activity and achievement proof; no generic yes/no promotion.

## 7. Family-to-mechanic evolution and integrity checks

A release is schema-valid only if:
1. Every Sxx.Mnn has one defined parent and unique key; all S01–S30 remain addressable.
2. Each hard dependency has a referenced target and a claim-level source, or is tagged unverified (cannot drive gating).
3. Actual campaign fields are absent; no negative proof from a missing Atlas entry.
4. OFFICIAL_100 is backed by exact in-game category/subthreshold rather than assumptions based on a whole family.
5. ALL_GOLD means a distinct opted-in all-eligible-medals goal; Gold Rush achievement (70 Gold) is a separate criterion.
6. Story Mode is not contaminated by Red Dead Online features; controls/platform specificity is explicit.
7. Unknown unlocks, irrecoverability, reward yields and RNG never become invented constants.
8. T2/T3 descriptions never appear in a default T0/T1 output.
9. The published v0.1 index remains intact; migration decisions are recorded separately.
10. A source checked date is not falsely described as a game's version/patch date.

## 8. Read-only consumer contract

The Atlas may answer: list families, find mechanics by ID/tag, return prerequisites and caveats, traverse relationships, surface one relevant dossier, distinguish completion relevance. It may **not** decide what the player owns/has done, choose a live activity, advance missions, award credits or write a campaign ledger.

Required response for uncertainty: rule summary + evidence quality + observable in-game confirmation needed + safe fallback. The other agent designs the actual Free Roam/Mission presentation.

**Approval requested:** key-space S31, edge vocabulary, goal-criterion namespace and maturity contract remain proposed. No design decisions have been ratified here.
