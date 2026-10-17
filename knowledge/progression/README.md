# Progression & Opportunity Engine — Chapter 2 v0.1

**Status:** PROTOTYPE / RESEARCH REVIEW PENDING · **Issue:** [Hub #59](https://github.com/L33TW0RLD/rdr2-hub/issues/59) · **Date:** 2026-10-17.

This is the first **simulation-only** foundation for the layered Living Adventure Companion. No actual game-state input, save monitoring, campaign-data updates, real UI integration or background operation. It does **not** ratify all chapter prerequisites or overwrite the approved original GameGuide.

## Why a graph rather than a mission order?

`rdr2/missions/chapter_02/` has 18 standard Gold identity sources, but shelf IDs 007–024 are not gameplay order. Chapter 2 offers branching Story markers, nonlinear setup stages, system unlocks, chapter-limited optional content and reasons to explore **between meaningful milestones**, not automatically after every Story mission.

The model separates:

- **Mission identity:** 18 canonically named Gold entries, linked to exact original GameGuide dossier, never copied into the Hub.
- **Necessary prerequisites:** supported conditions that may block a mission, but **do not guarantee the marker appears**.
- **Disputed candidate edges:** conflicting claims from PowerPyx, GameFAQs or Red Dead Wiki remain explicitly nonblocking.
- **Observed markers:** hypothetical player-visible Story marker in a test fixture; stronger than inferred general gate, contradictions shown.
- **System capabilities:** separate "normal route rule met" from observed actual availability or purchase.
- **Opportunity windows:** triggered by events such as Ledger unlock, Hosea's lesson or chapter departure, not a rigid one-intermission-per-mission clock.
- **Projects:** camp upgrades and Pearson crafting as optional multi-mission milestones.
- **Safety:** a specific active skippable Gold wagon stage outranks leisurely outings, while a chapter exit requests a targeted review.

## Iteration v0.3 — event-window planner

The initial graph (v0.1) and layered navigation (v0.2) now have a separate **synthetic-only** event/window decision layer (v0.3). It decides **when to introduce a system, revisit a project, show one real activated risk or remain quiet**, rather than simply listing still-eligible opportunities on every response. All earlier prerequisite uncertainties and source maturity boundaries remain unchanged.

| Additional design artifact | Scope |
|---|---|
| [Hierarchy v0.2](hierarchy_v0_2.json) | 29 navigation nodes, 12 typed cross-links; four Camp Development tracks |
| [Hierarchy projection v0.2](view_model_v0_2.mjs) | Compact trailhead, mission-board and L2/L3 project details; no persistent UI |
| [Hierarchy fixtures](hierarchy_scenarios_v0_2.json) | 16 synthetic screen/progressive disclosure checks |
| [Hierarchy design v0.2](hierarchy_design_v0_2.md) | Ownership tree ≠ progression graph; hierarchy, navigation and safety policy |
| [Planner policy v0.3](planner_policy_v0_3.json) | Six source-linked introduction events, priorities, goal filtering, one-headline display caps and synthetic presentation receipts |
| [Planner v0.3](window_planner_v0_3.mjs) | Pure event transition planner, warning vs outing arbitration, receipts and 37+9 reproducible synthetic tests |
| [Planner fixtures v0.3](planner_scenarios_v0_3.json) | Cumulative fictional scenarios and rejected invalid inputs; no user facts |
| [Planner design v0.3](planner_design_v0_3.md) | Event-driven behavior, anti-nag and quiet/adaptive/active boundaries |

**Run fixture suites:** `node knowledge/progression/evaluate_v0_1.mjs` and `node knowledge/progression/window_planner_v0_3.mjs`; the v0.3 script runs its registered positive and rejected-input suites with repository-local static contracts. The committed JavaScript cores have been regression-tested in a JS sandbox; the Node CLI and actual ChatGPT client are not independently verified here.

**No actual player data connection:** `source:"SIMULATION_FIXTURE"` and `synthetic:true` are required. The presentation receipts record only which fictional advice was already displayed, never completed mission stages or owned items, and have no promised persistence.

## Iteration v0.4 — opportunity lifecycle

This iteration resolves a **distinct problem from notification timing**: the fictional *opportunity's current evidence state* (offered, observed, potentially eligible, not visible now, explicitly resolved, potentially chapter-closed but unverified) must stay separate from what the Companion *already recommended* or whether it should show an alert again.

| v0.4 file | Purpose |
|---|---|
| [Opportunity policy](opportunity_policy_v0_4.json) | Twelve source-linked Chapter 2 opportunity references; typed world-state selectors, goal relevance and closure guardrails |
| [Lifecycle evaluator](opportunity_lifecycle_v0_4.mjs) | Pure `composeOpportunityLifecycle`, `validateOpportunityPolicy` and `verifyOpportunityLifecycleSuite` |
| [Lifecycle fixtures](opportunity_scenarios_v0_4.json) | 32 positive fictional transitions + seven deliberately invalid inputs |
| [Opportunity design](opportunity_design_v0_4.md) | Plain-language evidence/status model and protection against falsely claiming optional content missed |

**Review status:** still provisional. The source graph's disputed Story dependencies remain unsolved; no extra hard story prerequisites or invented optional chapter-expiry rules were added. All newly created IDs are internal opportunity references, NOT adopted Atlas mechanic IDs and NOT player progress records.

**Regression readback (2026-10-17):** 10/10 v0.1 + 16/16 v0.2 + 37/37 v0.3 + 32/32 v0.4 positive synthetic checks passed; 9/9 v0.3 + 7/7 v0.4 deliberately invalid inputs rejected. Evaluator functions were executed from committed GitHub sources inside a JS sandbox. Node CLI **was not independently run** due to the repository not being present in the local runtime; this is not a live ChatGPT client or gameplay acceptance result.

## Files and boundaries

| File | Content |
|---|---|
| [Chapter 2 graph](chapter_02_graph_v0_1.json) | 18 Gold mission identity references; five non-medal setup/side stages; six capabilities; six opportunity windows; three conditional alerts; three multi-session projects; candidate prerequisite conflicts and source register |
| [Evaluator](evaluate_v0_1.mjs) | Deterministic three-valued evaluator and CLI; **synthetic state input only** |
| [Scenario fixtures](scenario_fixtures_v0_1.json) | Ten simulated situations with expected mission, unlock, safety and project outputs |
| [Research gaps](research_gaps_v0_1.md) | Unresolved hard vs candidate gates and acceptance plan |

**Owner of full mission content:** `L33TW0RLD/rdr2/missions/**` and player-approved Field Guide v1.1; this graph holds links only. **Owner of real campaign facts:** `L33TW0RLD/rdr2/campaign/**`, never read/written by this prototype. **General mechanic research:** Hub Systems Atlas, still `RESEARCHED — REVIEW PENDING`.

```text
Hub progression rules + exact source links
                    |
     Synthetic scenario facts (ONLY)
                    |
   3-valued decision evaluator + conflict flags
          /             |              \
  Candidate mission  Opportunity     System gates
  board (not shelf)   windows         + projects
          \             |              /
             Future Companion view
                       |
    Original GameGuide full A→final Field Guide
```

## Evaluation rules: evidence first

Each scenario must provide `synthetic:true` and `source:"SIMULATION_FIXTURE"`. Inputs include `completed`, `not_completed`, `flags_true`, `flags_false`, `observed_markers`, `markers_absent`, `observed_capabilities`, `unavailable_capabilities`, and `control` (`free_roam`, `camp_limited`, `mission_chained`, `unknown`).

**Absent means UNKNOWN—not false.** A fulfilled `necessary_all` yields **necessary conditions met, marker unconfirmed**. A candidate edge does not lock or auto-unlock anything. An observed fixture marker is displayed as such, and any contradictory necessary prerequisite becomes an explicit conflict rather than a fabricated linear sequence.

A general unlock rule being satisfied yields `normal_rule_met_not_observed`. For example, completing a debt/deposit permits the Ledger in the normal route; it does **not** mean Leather Working Tools were purchased, any pelt donated or a satchel crafted. Scenario completion is **not** actual Story/Gold progress.

An active John oil wagon task activates a precise skippable-Gold warning and suppresses optional outings. A visible final Chapter 2 mission marker triggers a specific camp-exit review. Neither one invents a universal timer or other unseen active tasks.

### Representative hypothetical mission board

From fixture `arrival_two_story_choices`:

```text
CHAPTER 2 — HORSESHOE OVERLOOK         SYNTHETIC

MISSION CHOICES
  Polite Society, Valentine Style      Marker observed IN FIXTURE
  Americans at Rest                    Marker observed IN FIXTURE
  Exit Pursued by a Bruised Ego        Prerequisites disputed; marker unknown

SYSTEMS
  Camp Ledger                          Not yet unlocked IN FIXTURE
  Stable and horse brush               Necessary mission not yet completed

OPPORTUNITY
  First camp orientation or a local outing
  No confirmed activated urgent Story obligation
```

This presentation is explanatory—not a real rendered client. A future selection routes to the **entire original named Field Guide v1.1**, all phases and warnings preserved.

### Camp improvement mapped across Story windows

```text
Chapter 2 camp access → inspect donation/Pearson facilities
   └── Strauss: one eligible debt returned AND deposited
          └── Camp Ledger
                ├── optional Leather Working Tools purchase
                │      └── inspect Pearson satchel recipe
                │             └── targeted hunting/material outing
                └── optional lodging / fast-travel upgrade path
```

No mandatory all-satchels grind is implied. Projects can pause for Story, exploration or a spontaneous encounter; urgency requires actual activation evidence.

## Reproduce synthetic tests

Requires only Node.js (no dependencies), from repository root:

```bash
node knowledge/progression/evaluate_v0_1.mjs
node knowledge/progression/evaluate_v0_1.mjs --scenario john_oil_wagon_now_urgent
node knowledge/progression/evaluate_v0_1.mjs --scenario one_strauss_debt_ledger_open
```

Default command runs ten fixtures (expected **10 PASS, 0 failures**); `--scenario` additionally prints the deterministic decision projection for a named fixture. These are **in-memory simulation checks**, not an RDR2 UI, gameplay or local file-watcher test.

## Next engineering decisions

1. **Adjudicate high-impact mission prerequisite disputes** from independent evidence; no false hard ordering.
2. Derive a clean, compact **view model** with multiple mission choices, one relevant safety line, one project and one outing.
3. Test progression → Atlas help → return to full GameGuide with *fixtures only*; preserve spoiler horizon.
4. Extend proven graph patterns to other chapters, including stage-based opt-in side strands.
5. Consider a separate real observation adapter **only if expressly approved later**.

Sources: [GameGuide Chapter 2 trigger map](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/chapter_02_trigger_map.md), [full mission source library](https://github.com/L33TW0RLD/rdr2/blob/main/missions/README.md), [Hub Chapter 2 research](https://github.com/L33TW0RLD/rdr2-hub/blob/main/mission_control/chapter_research/chapter_02_v0_1.md), [Atlas unlock/dependency map](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/unlock_and_dependency_map_v0_1.md), [Atlas D02 Camp](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d02_camp_ledger_upgrades_v0_1.md) and [D03 Pearson](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d03_satchels_crafting_v0_1.md).
