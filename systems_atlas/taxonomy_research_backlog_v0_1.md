# Systems Atlas — Taxonomy Research Backlog v0.1

**Historical status when authored (2026-10-16):** PROPOSED / DRAFT; no specialists authorized at that snapshot. **Current status (2026-10-17):** all D01–D28 research dossiers subsequently assigned, delivered and integrated as **RESEARCHED — REVIEW PENDING**, not ADOPTED. This original backlog is retained for provenance; do not reactivate its tasks. See [closeout audit](../quality/2026-10-17_atlas_postresearch_closeout.md).  
**Date:** 2026-10-16 · **Scope:** Story Mode mechanics verification and reusable deep-dive dossiers.  
**Parent:** [Taxonomy v0.2](mechanics_taxonomy_v0_2.md) · [Schema](taxonomy_schema_v0_1.md) · [Coverage audit](taxonomy_coverage_audit_v0_1.md).  
**Prior queue retained:** [Research Queue v0.1](research_queue_v0_1.md) remains as historical design input. This backlog reorganizes research tasks without superseding its approval status.

## Scheduling rule for future disposable specialist agents

Priority depends on **decision risk + current Chapter 2 utility + information confidence**, not how many mechanics can be stuffed into one report. Each dossier should:
1. Read latest main, Atlas schema and relevant legacy dossier; preserve source adoption status.
2. Own one bounded topic, explicit leaf IDs and small question set; do not edit Free Roam/Mission/campaign.
3. Verify decisions with official gameplay documentation where obtainable and at least one credible independent guide for contentious mechanics.
4. Classify each consequential claim independently; include Story Mode scope, platform/edition, checked date, contradiction ledger and safe fallback.
5. Separate **gate/rule** from **actual player ownership/unlock/result**, with UNKNOWN when player evidence is absent.
6. Show 2–3 spoiler-safe learning examples, not a mandatory route or fake progression record.
7. Output one substantive dossier plus index/handoff to own research branch; stop and await owner review; no self-ratification.

## Priority P0 — immediately useful in Chapter 2

| ID | Dossier (bounded question) | Leaves / gates | Main verification and decision output | Research starting point |
|---|---|---|---|---|
| D01 | **Horse lifecycle: stable, main/temporary, saddle, death** | S06.M01–M05; S04.M02, S07.M02; U01 | What transfers when changing horses? Stable slot/cargo/stored guns? Brush, bonding and reviver availability? Consequences of horse death? Horse care quick-reference conditional on player observation. | [Legacy horses brief](https://github.com/L33TW0RLD/rdr2/blob/main/guides/horses/README.md) NOT STARTED; [Hosea gate](unlock_and_dependency_map_v0_1.md) |
| D02 | **Camp Ledger + improvements and resource stocks** | S08.M01–M04; S09.M01–M04; U02–U04 | One-debt/deposit gate, tools, lodging/fast travel, provisions, fund deduction, chores vs donations; source actual menu prices separately. | [PowerPyx camp upgrades](https://www.powerpyx.com/red-dead-redemption-2-how-to-upgrade-camp/), [old Chapter 2 map](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/chapter_02_trigger_map.md) |
| D03 | **Satchel recipes, Pearson stock and intact carcass boundaries** | S10.M01–M04; S12.M04, S17.M03; U03 | Exact satchel recipe matrix and unlock prerequisites, what Pearson accepts and remembers; separate crafting vs provisions and recipient-specific stocks. | [Old Pearson-vs-Trapper](https://github.com/L33TW0RLD/rdr2/blob/main/guides/hunting/pearson_vs_trapper.md) REVIEW PENDING |
| D04 | **Hunting clean kills and field transportation** | S12.M01–M05; S06.M04, S04.M01 | Study/quality, species-appropriate shots, bait/scent caveats, whole carcass vs pelt, spoilage and hauling; test safe in-game Show Info priority. | [Old perfect pelts](https://github.com/L33TW0RLD/rdr2/blob/main/guides/hunting/perfect_pelts.md) REVIEW PENDING |
| D05 | **Companion activities and camp favors in Chapter 2** | S11.M01–M04, S30.M05; U08/U11 | Which markers qualify for Friends With Benefits? How requests get logged and delivered? Separate Errand Boy, Give to the Poor, ordinary games; protect chapter closing window without invented hour. | [PowerPyx trophies](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap), [RDR2.org requests](https://www.rdr2.org/guides/item-requests-guide/) |
| D06 | **Item identity, capacity and safe disposition** | S17.M01–M05, S13.M04, S18.M03 | Rules for inspect/hold/protect/craft/donate/sell; targeted examples: generic valuables vs ingredients vs unique letters/quest items; no player inventory storage. | [Legacy inventory blueprint](https://github.com/L33TW0RLD/rdr2/blob/main/guides/inventory/system_blueprint.md) DRAFT |
| D07 | **Chapter 2 prompts, context controls and evidence surfaces** | S31.M01–M04 (proposed); S30.M01/M04, S28.M03 | Distinguish L2/LT focus, interact/inspect, Eagle Eye/Dead Eye, task log, Compendium, camera and map prompt meanings for common early-game confusion; platform controls as variants. | [Legacy Chapter 2 trigger map](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/chapter_02_trigger_map.md); conditional on S31 approval |
| D08 | **Chapter 2 limited Story opportunities (taxonomy-only)** | S30.M05; S11.M02/M03, S21.M04; U09–U11 | Verify precisely which optional stages/markers may expire and whether replay repairs missing content; keep later details in T2+ section. Output risk rules, NOT mission walkthroughs or routing. | [Old trigger map](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/chapter_02_trigger_map.md) REVIEW PENDING |

**P0 ordering:** For the current user's interest in horses, **D01 is the recommended next standalone task**. D02–D04 are independent once the schema is approved; D05/D08 are highest priority when chapter exit or an active optional window is evidenced. Conditional scheduling is a research priority only, not an agent instruction to change gameplay.

## Priority P1 — broadly useful evergreen systems

| ID | Dossier | Scope | What must be resolved |
|---|---|---|---|
| D09 | **Character cores, Dead Eye and growth** | S01.M01–M04; S02.M01/M02; S26.M05 | Core/bar differences, safe replenishment, XP sources, stat caps, Dead Eye story staging; no Gold assumption. |
| D10 | **Clothing, condition and witness disguises** | S02.M03/M04; S03.M01–M04; S05.M02 | Outfit storage, hot/cold indicators, hygiene utility, law identification; don't claim mask immunity. |
| D11 | **Traversal and temporary wilderness camps** | S07.M01–M05 | Fast-travel vs coach/train, boats/wagons, field camps/placement and water hazard; separate vehicle rules from robberies. |
| D12 | **Plants, food and crafting recipes** | S15.M01–M04; S16.M01–M05 | Plant finding, herbs, seasoning, pamphlets, six recipe *types*, component gating; avoid exhaustive raw recipe dump. |
| D13 | **Law, honor, restraint and robbery outcomes** | S05.M01–M04; S04.M04; S20.M01–M05 | Report/witness paths, identification, surrender, bounty costs and High Honor alternatives; identify uncertainty on honor changes. |
| D14 | **Town services and games** | S25.M01–M05 | Four games' rules, buying/wellness services, post office, shows, public speakers and photo tools; which official 100% subsets count. |
| D15 | **Compendium verb semantics and tracker crosswalk** | S28.M01–M04; S29.M01 | What constitutes discovery, use, obtain, study, skin and species credit; classify official subsets vs full Compendium separately. |

## Priority P2 — chapter-gated or access-dependent systems

| ID | Dossier | Scope | Gated work |
|---|---|---|---|
| D16 | **Fishing and legendary fishing** | S14.M01–M04, S27.M03; U06 | Normal rod introduction, special tackle/quest, species and releases, mailing/hand-in; do not infer rod already owned. |
| D17 | **Legendary animal exceptions and specialist rewards** | S13.M01–M04 | Map/story/region gates, source-backed lost-pelt recovery, Trapper recipes and Fence effects; Rockstar primary source required. |
| D18 | **Stranger strand/optional quest taxonomy** | S21.M01–M04, S30.M05 | Which white markers initiate a strand, staged prerequisites, honor side-stories and chapter windows; future plot details T2/T3. |
| D19 | **Bounty work and robbery class definitions** | S19.M01–M04, S20.M01–M05 | Bounty count vs optional Gold intro and poster jobs; four robbery-type criteria; special case timing. |
| D20 | **Completion collection families** | S18.M01–M04, S27.M01–M05 | Cards (one full set), bones, carvings, dreamcatchers, treasure chain, hunting/exotic requests, later-gated collectibles; contract/hand-in precision. |

## Priority P3 — rare, missable or personal exhaustive completion

| ID | Dossier | Scope | Preservation concern |
|---|---|---|---|
| D21 | **Finite side encounters and mutually exclusive results** | S22.M01–M04, S23.M03/M04 | Which encounters/letters/docs truly cannot be repeated, which are rumor or edition-specific; explicit safe fallback. |
| D22 | **Unique equipment and full Compendium edge cases** | S04.M02/M03, S17.M04, S28.M04 | Region/chapter-exclusive records, weapons with unique pickup conditions, rare equipment; do not call official 100% permanently missable without proof. |
| D23 | **Chapter-sensitive camp micro-events** | S11.M01/M04, S30.M05 | Contextual dialogue, optional scenes and gifts; classify desirable vs irreversible vs mutually exclusive without compulsory checklist. |
| D24 | **Replay, saves and separate medal/accounting objectives** | S30.M02–M04, S29.M02/M03 | All-eligible Gold vs Gold Rush 70, replay restrictions and original-save persistence, manual/auto save confirmation; no mission guides. |

## Priority P4 — low urgency exploration

| ID | Dossier | Scope | Outcome |
|---|---|---|---|
| D25 | **Gang camps, hideouts and ambush taxonomy** | S24.M01–M04; S22.M02 | Fixed hideouts vs ambient camps, 100%-eligible ambush/hideout credit. |
| D26 | **World lore, secrets and inspection** | S23.M01–M04 | Observation types, shacks, Points of Interest, ambient clues, spoiler opt-ins. |
| D27 | **Challenge-by-challenge nine-strand verification** | S26.M01–M05 | Rank ordering, prerequisites, rewards and miscount risks; 90 ranks, not passive retrospective credit. |
| D28 | **Cosmetics, photography and nonessential venue variations** | S03.M02/M04; S25.M03/M04 | Immersion, camera/photo-mode differences and edition notes; avoid claiming completion necessities. |

## Mandatory dossier output contract (template)

    Title: bounded, unambiguous subject
    Status: DRAFT or RESEARCHED — REVIEW PENDING (never ADOPTED by author)
    Checked: YYYY-MM-DD
    Scope: Story Mode / platform / edition
    IDs: Sxx.Mnn covered, Sxx.Mnn explicitly excluded
    Chapter visibility: T0/T1 default; T2/T3 details kept separate
    1. Definitions and player interaction, with on-screen feedback
    2. Normal unlock conditions, gate ID, alternatives, exceptions
    3. Benefits, costs, recipient / inventory routing, recoverability
    4. Story / chapter / time / edition risks (including DISPUTED)
    5. Typed dependencies and cross-system references
    6. Exact completion tags and sourced goal criterion scope
    7. Three common mistakes and spoiler-safe conditional examples
    8. Claim ledger: ID | assertion | source URL/title | date | confidence
    9. Contradictions, observed-vs-universal, unresolved tests
    10. GameGuide handoff: verify before doing, not progress update
    11. Next bounded questions and explicit owner-review request

## Research acceptance tests

- **Horse D01:** An unknown U01 player should not be told they already own a brush or have stable access. Main vs temporary horse, saddle transfer and risk descriptions are separate and sourced. Detailed death recovery claims never rest on anecdotes alone.
- **Camp D02/D03:** First debt vs completed mission chain, Ledger vs leatherworking purchase, Pearson crafting vs provisions and ordinary Trapper stock are correctly distinguished.
- **Hunting D04:** Three-star prereq + appropriate tool + outcome verification; requires intact carcass when requested; no invented restoration rate or guaranteed bait spawn.
- **Completion D15/D20:** One 12-card cigarette-card set vs 144-card full completion; Gold Rush 70 vs personal all-Gold; six specific recipe categories vs six arbitrary outputs; no universal claim every Compendium entry required.
- **Missable D05/D08/D21:** An active specific source-backed chapter-only opportunity is flagged with bounded urgency, but optional normal content is not broadly labeled missable or 100%-required.
- **All dossiers:** Actual completed status remains UNKNOWN absent player/campaign evidence. No update to old repo, campaign, Mission Control or Free Roam.

## Source register / confidence baseline

- [Rockstar Support — Legendary pelt loss](https://support.rockstargames.com/articles/480idh1zECJ0ojrheApV1U/unable-to-skin-legendary-animals-or-losing-their-pelts-in-red-dead-redemption-2): official, HIGH for a narrow exceptional recovery rule.
- [PowerPyx 100% Checklist](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) + [GTA Base checklist](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist): independent corroboration, HIGH for baseline target types; exact case-specific mission events may need verification.
- [PowerPyx Trophy Roadmap](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap): useful achievement distinctions; actual counted credit remains in-game/account verified.
- [PowerPyx Camp Upgrade Guide](https://www.powerpyx.com/red-dead-redemption-2-how-to-upgrade-camp/): normal Ledger unlock HIGH; inspect real chapter situation.
- [PowerPyx Compendium](https://www.powerpyx.com/red-dead-redemption-2-full-compendium/): indexing reference; not proof of completion.
- [Legacy hunting research](https://github.com/L33TW0RLD/rdr2/tree/main/guides/hunting): sourced but still REVIEW PENDING; respect adoption.
- [Legacy inventory design](https://github.com/L33TW0RLD/rdr2/tree/main/guides/inventory): architectural draft, not game-fact authority.
- [Atlas Researcher 001 gates](unlock_and_dependency_map_v0_1.md): conditional researched map, still UNADOPTED.

## Work allocation

One specialist per dossier at a time, using unique branches chosen by the owner. Other agents may consume this backlog **read-only**. The current Atlas agent creates no agents, no issues, no PR merge, no new live gameplay workflow.

**Recommended next bounded action:** Owner reviews whether to accept provisional ID/schema approach and authorizes **D01 Horse lifecycle**, which has direct Chapter 2 relevance and an existing legacy NOT STARTED gap. Stop here.
