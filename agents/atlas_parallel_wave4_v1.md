# Systems Atlas — Parallel Wave 4: Final Eight Research Dossiers

**Date registered:** 2026-10-17 · **Status:** EIGHT TASK LANES REGISTERED / **NOT AUTOMATICALLY RUNNING**.
**Repository:** `L33TW0RLD/rdr2-hub` · **All new branch baseline:** `0021c319d0232c3a303aeadbe899055260120d54`.

## Research coverage and exclusivity

Wave 1 (6), Wave 2 (5) and Wave 3 (9) dossiers already appear on `main` as **RESEARCHED — REVIEW PENDING**. These **last eight** will close the **D01–D28 research-production backlog** when their exact deliverables are independently reviewed and merged. That does not by itself ratify mechanic details, prove full game achievements, ship a UI, or authorize game-save observations.

| Lane | Dossier | Task ID | Issue | Exact branch | Dossier file |
|---|---|---|---|---|---|
| 1 | D07 Contextual controls/prompts | `atlas-controls-028` | [#37](https://github.com/L33TW0RLD/rdr2-hub/issues/37) | `agent/atlas-controls-028` | `systems_atlas/dossiers/d07_context_controls_prompts_v0_1.md` |
| 2 | D14 Town services and minigames | `atlas-towns-029` | [#38](https://github.com/L33TW0RLD/rdr2-hub/issues/38) | `agent/atlas-towns-029` | `systems_atlas/dossiers/d14_town_services_games_v0_1.md` |
| 3 | D19 Bounty jobs/robbery classes | `atlas-bounties-030` | [#39](https://github.com/L33TW0RLD/rdr2-hub/issues/39) | `agent/atlas-bounties-030` | `systems_atlas/dossiers/d19_bounties_robbery_classes_v0_1.md` |
| 4 | D21 Finite world encounters | `atlas-world-events-031` | [#40](https://github.com/L33TW0RLD/rdr2-hub/issues/40) | `agent/atlas-world-events-031` | `systems_atlas/dossiers/d21_finite_encounters_outcomes_v0_1.md` |
| 5 | D23 Camp micro-events | `atlas-campmoments-032` | [#41](https://github.com/L33TW0RLD/rdr2-hub/issues/41) | `agent/atlas-campmoments-032` | `systems_atlas/dossiers/d23_camp_microevents_v0_1.md` |
| 6 | D25 Gang hideouts and ambushes | `atlas-hideouts-033` | [#42](https://github.com/L33TW0RLD/rdr2-hub/issues/42) | `agent/atlas-hideouts-033` | `systems_atlas/dossiers/d25_gang_hideouts_ambushes_v0_1.md` |
| 7 | D26 Lore/shacks/secrets/inspection | `atlas-exploration-034` | [#43](https://github.com/L33TW0RLD/rdr2-hub/issues/43) | `agent/atlas-exploration-034` | `systems_atlas/dossiers/d26_world_lore_secrets_inspection_v0_1.md` |
| 8 | D28 Cosmetics, camera and Photo Mode | `atlas-photography-035` | [#44](https://github.com/L33TW0RLD/rdr2-hub/issues/44) | `agent/atlas-photography-035` | `systems_atlas/dossiers/d28_cosmetics_photography_v0_1.md` |

For each task **only** the corresponding dossier above plus these exact two files can be changed:
- `agents/checkpoints/<underscored_task_id>.md`
- `agents/handoffs/2026-10-17_<underscored_task_id>.md`

Full exact triple for every task is in its **individual issue**; these are authoritative task leases, not an invitation to change common files. Original actor IDs from Wave 1–3 are not automatically task ownership for Wave 4. Assign **one active conversation per task** and use issue+branch, not generic "Agent 1", to route.

## Cross-dossier responsibilities

1. D07 researches **observed contextual controls/UI prompts only**, with proposed S31 kept **UNRATIFIED**. It does not create/approve taxonomy S31, interpret live save files, or supersede D09 Dead Eye ability gates.
2. D14 owns town service/minigame behavior; D19 owns **poster bounty work and official four robbery classes**. D13 owns generic Wanted/Honor/law, D27 owns rank-specific challenge definitions.
3. D21 owns **finite/ambient world encounters** and mutually exclusive consequences. D18 owns authored Stranger strands, D08 owns Chapter 2 closing windows, and D25 owns gang ambush/camp classification. No duplicated claim authority.
4. D23 owns **small camp conversations/limited camp events**. D05 retains camp activity/favor primary semantics and D08 chapter urgency.
5. D25 owns ambient gang camp vs fixed hideout vs encounter ambush categories and respective progress definitions; D15 owns in-game completion tracker.
6. D26 owns lore/exploration and inspectable objects, D22 rare unique items, D20 formal collectible families, and D07 UI prompt interpretation. Do not equate optional scenic finds with required Total Completion.
7. D28 owns cosmetic/photo/social diversions. D10 retains clothing/weather/outfit rule authority, D14 venue details and D15 completion scope.

## Minimum independent research and delivery protocol

Every specialist must:
1. Read latest `main`, `agents/registry.md`, this file, exact task issue, `protocol/parallel_agent_workflow.md`, Atlas backlog and relevant prior dossier/review sources. New branches were created at the frozen Wave 3 integration main commit; a later **behind main** comparison is expected, not by itself a Git write blocker.
2. Switch to its **exclusive** task branch, check whether its own checkpoint exists, **commit initial checkpoint before substantive work**, and never issue a create-file write over an existing path without reading its blob SHA.
3. Produce a complete **11-section** evidence-backed v0.1 research dossier, including story/platform/edition gates, reversibility and risk, completion-universe split, typed provisional links, contradiction and confidence ledger, independent source URLs/checked dates, three Chapter 2 spoiler-light examples, read-only GameGuide/Free Roam/Adaptive Companion handoff.
4. Source independently and label unsettled claims; never imply specific items, Honor, Gold, mission completion, notices, services or UI controls the user has not verified. No in-game experiments actually conducted by a researcher may be simulated.
5. **Write only the three leased paths** on the assigned task branch. Never write `agents/registry.md`, any shared manifest, other agent files, the original `L33TW0RLD/rdr2` GameGuide, Save Intelligence decoder/PR #24, the taxonomy itself, or `main`. No rebase/reset/force push or self-merging.
6. Finish as task `DELIVERED_REVIEW_PENDING`, research `RESEARCHED — REVIEW PENDING` (not ADOPTED); read back all three committed blobs and final branch SHA. Coordinator will review discrepancies and integrate all eight separately.

**Worker chats are not automatically started by GitHub registration.** User dispatches exactly one prompt per specialist chat. This coordinator plan and registry merely make the assignments deterministic.

## Coordinator final integration gate

Require exact 3-path branch diff, 11-section substantive source dossier and final handoff for all eight tasks; independently reconcile D07/UI semantics, D14 vs D19 money/law, D21/D23 vs D08 closing windows, D25 vs D15 official progress, and D26/D28 optional exploration/Photo Mode. Preserve source caveats, validate relative links/Markdown, and merge with a separate integration PR. Only after verified `main` readback may the 28-dossier **research production** milestone be claimed. GameGuide/save state and user achievements remain independent; no full factual certification or UI launch follows automatically.
