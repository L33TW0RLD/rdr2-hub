# Architecture — Hub Experience & Integration

**Status:** DESIGN DRAFT / NOT RATIFIED · 2026-10-16 · Hub Architect Agent 001. These files are proposed contracts, **not** working ChatGPT app deployment or authority transfer.

## Design documents

1. [Unified Hub Experience v0.1](hub_experience_v0_1.md) — recommended **Contextual Trailhead**: conversational route into Mission Control, Free Roam and Systems Atlas; alternative concepts.
2. [Module Integration v0.1](module_integration_v0_1.md) — boundaries, data/evidence source hierarchy, Mission and Atlas handoffs, requested Agent 002 mechanics interface without imposing a schema.
3. [Navigation & State Flow v0.1](navigation_and_state_flow_v0_1.md) — intent routing, conceptual continuity, stale-record behavior, new-chat restoration and ephemeral controls.

## Principles

- ChatGPT is the sole intended interface; no website, server or persistent visual dashboard.
- **Mission Control** retains the existing player-approved [Field Guide v1.1](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/walkthrough_presentation.md), Gold preflight and gameplay recording authority.
- **Free Roam Control** offers organic projects, outings, discoveries and credible urgency safeguards.
- **Systems Atlas** supplies source-aware mechanics guidance; Agent 002 owns its taxonomy schema and research.
- Canonical recorded gameplay remains in [the old `rdr2` campaign repo](https://github.com/L33TW0RLD/rdr2/blob/main/campaign/current_state.md), not this Hub.
- All source-critical decisions are **owner review required**; no merge/ratification yet.

## Open architectural gates

Review the default Contextual Trailhead choice, Atlas 002 interface contract, optional project-focus persistence, ability to reconstruct the full Field Guide after mechanic detours, and actual mobile/desktop ChatGPT tests. See [Agent 001 handoff](../agents/handoffs/2026-10-16_hub_architect_001.md).


## Unified Hub remaster (proposed 2026-10-17)

- [Repository Remaster Blueprint v1](repository_remaster_blueprint_v1.md): product-first structure and ownership, non-destructive migration plan, first vertical slice and milestone order.
- [Dashboard Interface Blueprint](../dashboard/interface_blueprint_v1.md): cohesive ChatGPT-native presentation, not three standalone dashboards.
- [Companion Context Contract](../companion/context_contract_v1.md): live source and navigation boundaries.
- [Knowledge & Legacy Crosswalk](../knowledge/source_crosswalk_v1.md): source authority stays in original `rdr2` until explicitly migrated.

These newly authored contracts are remaster proposals; merging the scaffold does **not** ratify all old architecture choices or mechanics claims.
