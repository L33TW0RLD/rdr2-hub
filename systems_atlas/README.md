# Systems Atlas

**Status:** TAXONOMY DRAFT / UNRATIFIED · **Six source-checked dossiers integrated as RESEARCHED — REVIEW PENDING** · **Updated:** 2026-10-17.

The Atlas documents gameplay mechanics and dependencies for RDR2 Story Mode. It is a **reference**, not a live campaign commander, compulsory checklist or proof of the player's progress.

## Wave 1 — researched dossiers (NOT ADOPTED)

Six parallel specialists delivered complete source-checked Story Mode references. **Content maturity is `RESEARCHED — REVIEW PENDING`**, not ratified gameplay authority, and actual player unlocks, purchases, objects, saves and achievements remain unverified until GameGuide/player evidence.

| Dossier | Systems / practical focus | Review status |
|---|---|---|
| [D01 Horse lifecycle](dossiers/d01_horse_lifecycle_v0_1.md) | Ownership, temporary/stabled horse, bonding, saddle/cargo and loss | REVIEW PENDING — horse-cargo recovery unresolved |
| [D02 Camp Ledger](dossiers/d02_camp_ledger_upgrades_v0_1.md) | Strauss return/deposit gate, funds, purchasing, upgrades | REVIEW PENDING — price and wallet shortfall caveats |
| [D03 Satchels / Pearson](dossiers/d03_satchels_crafting_v0_1.md) | Recipes, tools, material reservation and intact-carcass distinctions | REVIEW PENDING — squirrel pelt/carcass discrepancy |
| [D04 Hunting](dossiers/d04_hunting_transport_v0_1.md) | 3-star quality, species weapons, clean kills, recipients | REVIEW PENDING — trinket/decay uncertainty |
| [D05 Camp life](dossiers/d05_camp_life_opportunities_v0_1.md) | Companion activities, requests and chapter-specific risks | REVIEW PENDING — some activity credit / Pearson triggers disputed |
| [D06 Inventory](dossiers/d06_inventory_items_v0_1.md) | Item classes, unique components, safe disposition, limits | REVIEW PENDING — storage/rare-item recovery limitations |

**Read the [Wave 1 cross-dossier integration review](reviews/2026-10-17_wave1_cross_dossier_review.md) before recommending an irreversible sale, donation, rare material consumption, horse/cargo transition or chapter-sensitive activity.** One dossier owns each general rule; related dossiers link it read-only. Taxonomy Sxx.Mnn leaf IDs and S31 remain provisional.

## Taxonomy Architect 002 — review-only additions

- [Taxonomy Record Schema v0.1](taxonomy_schema_v0_1.md) — proposed stable Sxx.Mnn addresses, evidence, typed dependencies, chapter/spoiler metadata and campaign-state separation.
- [Mechanics Taxonomy v0.2](mechanics_taxonomy_v0_2.md) — all 30 original families retained, subdivided and cross-linked; proposed S31 is **not** approved.
- [Coverage Audit v0.1](taxonomy_coverage_audit_v0_1.md) — family-by-family coverage/overlap report and nonbreaking migration proposal.
- [Taxonomy Research Backlog v0.1](taxonomy_research_backlog_v0_1.md) — bounded Chapter 2 and evergreen specialist dossier queue.
- [Taxonomy Architect 002 Handoff](../agents/handoffs/2026-10-16_atlas_taxonomy_002.md) — branch, disputes and decisions awaiting owner approval.

**Authority notice:** v0.2, its schema, the additional ID namespace and the research backlog are unratified proposals; v0.1 sources below remain intact. Neither version is a player progress ledger or an automatically adopted guide.

## Read first

1. [Mechanics Taxonomy v0.1](mechanics_taxonomy_v0_1.md) — S01–S30 major system families, constituent mechanics and cross-system pathways.
2. [Chapter 2 Unlock & Dependency Map v0.1](unlock_and_dependency_map_v0_1.md) — conditional mechanic availability, important time-sensitive risks and research uncertainties.
3. [Research Queue v0.1](research_queue_v0_1.md) — proposed deep-dossier order and handoff requirements.
4. [Atlas Researcher 001 Handoff](../agents/handoffs/2026-10-16_atlas_researcher_001.md) — task boundaries and suggested next agent.

## Status and authority

- **INDEXED:** high-level taxonomy, not a fully researched mechanic guide.
- **DRAFT:** incomplete or disputed details.
- **RESEARCHED — REVIEW PENDING:** sufficiently supported research offered for owner/GameGuide review; not adopted.
- **ADOPTED:** requires explicit recorded player/GameGuide approval.
- The old repo's [research shelf](https://github.com/L33TW0RLD/rdr2/tree/main/guides) contains relevant drafts and researched material; reuse by reference, do not silently promote status.
- [Source authority](../protocol/source_authority.md) and [agent contract](../agents/disposable_agent_contract.md) govern all work.

## First design milestone

Give the Free Roam Designer enough structured information to design **organic, spoiler-aware between-mission play**. Start with current Chapter 2 capabilities and goals (camp, horses, hunting, money, local exploration), not a fifty-page compulsory clearing route. No live progress is modified by Atlas research.


## Remaster consumer and dossier structure (2026-10-17)

The Atlas is **one shared mechanics knowledge foundation** for Mission Control, Free Roam and the Companion. Do not create separate contradictory horse/hunting/camp guides inside each view.

- [Universal research record contract](../knowledge/record_contract_v1.md) — claim-level source/status/gate and applicability obligations; supplements, does not ratify or replace the proposed Atlas schema.
- [Legacy source crosswalk](../knowledge/source_crosswalk_v1.md) — where existing researched references live and how they are consumed.
- [Free Roam examples](../free_roam/content/README.md) — link Atlas mechanic rules without inventing acquired gear or completed tasks.
- [Companion routing](../companion/context_contract_v1.md) — explanatory detours and return context.

**Dossier production:** [Atlas Parallel Wave 1](../agents/atlas_parallel_wave1_v1.md) delivered D01–D06 references for coordinator integration; each remains **RESEARCHED — REVIEW PENDING**. Continue the broader D07–D28 research backlog with separate tasks and leave the original S01–S30/proposed S31 unchanged. Merged research does **not** mean owner/gameplay adoption.
