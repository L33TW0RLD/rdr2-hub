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
