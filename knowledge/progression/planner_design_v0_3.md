# Progression Window Planner v0.3 — Event-Driven Companion Guidance

**Status:** `PROVISIONAL / DESIGN REVIEW PENDING` · **Date:** 2026-10-17 · **Issue:** [Hub #59](https://github.com/L33TW0RLD/rdr2-hub/issues/59) · **Draft:** [PR #60](https://github.com/L33TW0RLD/rdr2-hub/pull/60).

**Scope:** synthetic Chapter 2, deterministic **read-side** planning only. No live RDR2 save or campaign state is read; no inventory, medal, map marker, mission state, purchases or Honor claim is written. This is neither a persistent app nor automatic telemetry.

## 1. What changed from v0.2

The previous hierarchy can show a Story board and the four Camp tracks. But without a presentation planner, any still-eligible opportunity can reappear on every answer and an old introductory outing may compete with a new system unlock. v0.3 introduces a **decision layer above the shared graph**, not an additional player-facing mode:

```text
Hypothetical current progression snapshot    Synthetic previous snapshot (optional)
                |                                        |
        Existing v0.1 chapter rule graph + evidence     |
                |                                        |
          v0.2 view composer + hierarchy ----------------+
                |
        v0.3 event/window planner <--- optional SYNTHETIC prompt receipts
                |
     One prioritised recommendation / active warning / story choices
                |
       Future L0/L1 Companion presentation and L2/L3 drill-down
```

A **new chapter/mission** does not itself mean "show a new screen". Trigger presentation when (a) a meaningful unlock/window is first eligible in supplied fictional evidence, (b) an optional project moves to another milestone, (c) the player explicitly asks, or (d) a credible activated protection condition exists. Otherwise return story choices or **remain quiet**.

## 2. Source ownership and release boundaries

| Area | Owner | v0.3 role |
|---|---|---|
| Original complete mission walkthroughs / Gold criteria | [Original GameGuide](https://github.com/L33TW0RLD/rdr2/tree/main/missions) | Only named mission reference, never abbreviated guide or forced shelf sequence |
| General Chapter 2 conditions and source conflicts | [Hub Chapter 2 graph v0.1](chapter_02_graph_v0_1.json) | Current and prior hypothetical predicates; no additional hard mission edges |
| Systems/mechanics definitions | [Atlas taxonomy](../../systems_atlas/mechanics_taxonomy_v0_2.md) + 28 research dossiers | General unlock context, confidence and on-demand reference only |
| Projects and optional outings | [Free Roam decision model](../../free_roam/decision_model_v0_1.md) | Tie activity choice to the relevant new opportunity; no compulsory grind |
| Hierarchy and presentation depth | [Hierarchy v0.2](hierarchy_v0_2.json), [view composer](view_model_v0_2.mjs) | L0 contextual header and L1 small choice board; L2/L3 on request |
| Actual game, Gold, save and inventory | Original `L33TW0RLD/rdr2/campaign/` | **NEVER READ OR WRITTEN in v0.3** |

Research is still `RESEARCHED — REVIEW PENDING`. A fictional gate or marker is not actual player-observed evidence. The first 18 Chapter 2 Gold source references are complete but the game-wide verified branching prerequisite graph is **not**.

## 3. Exact presentation priority

**Priority is categorical, not a hidden player score.**

1. **Activated skippable Gold/irreversible Story risk** — e.g. John’s wagon assignment is explicitly active and `Pouring Forth Oil II` not completed in fixture: show relevant Story action, no leisurely project or outing. No invented elapsed-time count.
2. **Chapter exit** — explicitly marked/approached `A Strange Kindness`: offer a concise camp/optional storyline preservation audit and do not insert an unrelated routine hunting trip.
3. **Actually observed optional activity** — only surface camp-activity preservation proactively when achievements/exhaustive goals or explicit camp/activity interest justify it; do not assert it qualifies without checking.
4. **Direct request** — “take me to the camp project,” “show the Story choices,” “I want to explore,” or “explain fishing” in the applicable routing surface. Quiet mode never suppresses a direct useful request.
5. **New meaningful capability** — Ledger, horse/stables, wagon Fence, ordinary fishing or purchased Pearson tools, introduced **once** at the relevant milestone; the rest stay discoverable under Atlas.
6. **Project revisit / ordinary orientation** — when appropriate to the player’s interests, especially after a new recipe or upgrade path.
7. **No relevant change** — retain contextual/Story information and refrain from another optional prompt.

Specific user intent can select between equally feasible opportunities. At most **one** unsolicited headline introduction, **one** significant active warning, **one** featured project, **one** suggested outing and **three** observed Story markers are intended for L1. Remaining observed markers are counted rather than silently discarded.

### Repeating the same event

The planner returns `next_receipts` with `kind:"SYNTHETIC_PRESENTATION_RECEIPTS"` and IDs such as `event.ledger_introduction` or `urgent_john_wagon`. These are **only records of what the fictional Companion already *presented***. They are explicitly **not** GameGuide mission completion, saved progress, gameplay telemetry, acquired upgrades, or reliable across-thread persistence.

- A still-available ordinary feature already presented once will not generate the same unsolicited card indefinitely.
- A newly activated serious warning takes precedence even if similar informational text appeared in the past.
- An ongoing activated warning stays visible as a **pinned** warning but normally stops behaving like a fresh interruption on every passive check.
- Choosing the chapter-exit transition can re-elevate the specific departure warning.
- No wall-clock cooldown, unseen game tick, "hours until wagon skip" or hidden autosync exists.
- With **no prior fixture supplied**, “the rule is currently eligible” can be shown, but **never “the player just unlocked this”**.

## 4. Six currently modelled event introductions

| Event key | Game-rule activation | First relevant response |
|---|---|---|
| `event.arrival_orientation` | Chapter 2 opens with free-roam control | Camp orientation and optional local Heartlands outing |
| `event.ledger_introduction` | One qualifying Strauss debt returned + deposited | Inspect camp Ledger without assuming any upgrade bought |
| `event.pearson_tools_milestone` | Tools purchased separately after Ledger | Target **one** satchel recipe; optional relevant material outing |
| `event.horse_system_introduction` | Hosea horse/bear tutorial completed | Hand project focus to **Horse Care**, not unrelated Camp Ledger |
| `event.wagon_fence_introduction` | Seamus wagon-Fence introduction | Only the relevant wagon/commerce outing; don't assert all Fences unlocked |
| `event.fishing_introduction` | Abigail/Jack ordinary fishing lesson completed | Optional river fishing; do not auto-open later specialist fishing strands |

These introductions are source-linked pointers to existing `graph.opportunities` and `graph.capabilities`. Adding a new mechanic needs independently sourced general gates, then a deliberate policy entry. The planner does **not** fabricate a complete all-30-families progression database.

## 5. Example full synthetic sequence

```text
Arrival — two observed Story markers
  → SHOW once: camp orientation + one Heartlands outing
  → Same scenario again: QUIET, retain observed Story choices

Uncle's story mission completed in scenario
  → Mission board changes; no compulsory free-roam interruption

One debt returned/deposited; Camp Ledger observed in fixture
  → INTRODUCE camp upgrade options
  → Passive check: NO repeat

Hosea bear mission completed; stable/brush observed in fixture
  → INTRODUCE Horse Care and relevant practice outing
  → Camp project is still reachable but no longer falsely featured

Leather Working Tools purchased in fixture
  → REVISIT Camp Development at Pearson recipe milestone
  → Suggest targeted hunting/material reconnaissance, not more Ledger inspection

Hosea Seamus wagon-Fence introduced
  → Commerce/valuables guidance, not Pearson satchel outing

Fishing tutorial completed
  → Fishing outing becomes newly relevant

John's wagon task activated
  → PRIORITISE skippable Gold stage, suppress ordinary hunting/camp outing
  → Repeat check: safety stays pinned, not newly announced over and over

Task completed (hypothetical) and no new urgent offer
  → Respond to explicit user project interest; no fabricated "earned Gold"

A Strange Kindness marker/Chapter 2 exit becomes relevant
  → Before-advance audit takes priority over older outing windows
  → On deliberate exit selection, protection warning becomes salient again
```

No “mission X must be done next” inference is made from shelf operations 007–024.

## 6. Quiet, adaptive, active: behavior implemented and deferred

| Preference | Currently implemented | Not claimed |
|---|---|---|
| **Quiet** | Hide unsolicited optional introductions/outing chatter, preserve activated serious Story/chapter-exit protection, honour explicit questions | Zero warnings even when the user requests a potentially irreversible Story step |
| **Adaptive** | Introduce one meaningful source-backed development after a transition; dedupe passive repeats | Machine-learned preferences or player mood inference |
| **Active** | Same one-primary-prompt bound as adaptive; eligible to proactively introduce context | **A richer active-mode cadence is not implemented yet**; no fake distinction between adaptive and active |

v0.3 intentionally uses **no forced project quotas, blanket camp-completion checklist, percentage of unlocked systems or fabricated distance/time estimates**. Owner preferences may be added as future explicit, non-gameplay configuration.

## 7. Technical artifacts and validation

- [Planner policy JSON](planner_policy_v0_3.json): event catalog, priorities, goal filters, suppression/defer and display bounds.
- [Window planner module](window_planner_v0_3.mjs): `planProgressionWindow` (pure, synthetic), `validateWindowPlannerPolicy`, `verifyPlannerScenarioSuite`.
- [Planner fixtures](planner_scenarios_v0_3.json): 14 synthetic world snapshots and **37 sequential positive cases**, including bounded prompt receipts, plus **9 invalid-input rejection cases**.

Run from repository root with Node.js:

```sh
node knowledge/progression/window_planner_v0_3.mjs
```

The CLI only reads four known, repository-local JSON contracts/fixtures and uses the pre-existing evaluator/view composer. It does **not** discover or read RDR2 save files. Initial tests exercised the **committed JavaScript function bodies inside a JS sandbox**, **37/37 positive** and **9/9 negative**, policy integrity PASS; this is **not proof of a separately run Node CLI or actual ChatGPT client UI test**.

Strict rejections tested: non-synthetic input or previous state, invalid goal, unrecognized focus, malformed/false-kind receipts, invalid presentation preference and directly contradictory scenario facts. Scenario output explicitly says `actual_game_state_connected:false`, `game_progress_changed:false`, `writes_performed:0`.

## 8. Open design and research boundaries (not automatically ratified)

1. **More exact Story prerequisites:** [research gaps](research_gaps_v0_1.md) still hold contested Chapter 2 unlock conditions; an observed marker always trumps a guessed rule for presentation.
2. **Time-sensitive opportunity lifetimes:** chapter window closure rules vary; do not use fake in-world seconds or recurring background checks.
3. **Better optional project schedules:** achievements vs official 100% vs 104 Gold vs personal exhaustive goals need fuller per-milestone evidence before any automatic “must do now.”
4. **All later chapters:** the event catalog is Chapter 2-specific and does not automatically scale to new camp locations, region or chapter missions.
5. **Personalization:** “active” cadence, manual silence controls, project prioritization and identity of suggested outings need actual client UX/owner review.
6. **Navigation continuity:** a future Companion must preserve a semantic `return_to` for L2→Atlas→L2 and selected mission→Atlas→FULL original Field Guide, without claiming durable widget state.
7. **Ephemeral receipts:** in v0.3 they are supplied by test runner only. No approved persistent non-gameplay planner receipt store exists, and no automatic real-state adapter is proposed now.

**Gate:** keep all four new v0.3 files within draft PR #60 for review; do not merge, ratify mechanic research or alter original GameGuide/campaign.
