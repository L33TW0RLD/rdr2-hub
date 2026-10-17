# Shared Knowledge Production

**Status:** PROPOSED STRUCTURED CONTENT CONTRACT · 2026-10-17

This directory governs **how research becomes reusable content**. It is not an alternate Systems Atlas and never stores the player's save.

- [Content coverage manifest](content_manifest_v1.md): verified current research/delivery states and next production gaps.
- [Record contract](record_contract_v1.md): minimum evidence, status, gating, ID/link and spoiler fields for any reusable game knowledge.
- [Source crosswalk](source_crosswalk_v1.md): authoritative locations in `rdr2` and `rdr2-hub`, migration boundaries and content ownership.
- **System mechanics** live under `systems_atlas/`, with specialist dossiers created under `systems_atlas/dossiers/` by their registered owners.
- **Mission guides** currently live in `L33TW0RLD/rdr2/missions/`, not copied here.
- **Projects, outings, intermission opportunities** live in `free_roam/content/`.
- **Presentation rules** live in `dashboard/`, not in mechanic dossiers.

## Production sequence

`INDEXED → evidence research → REVIEW PENDING → owner/GameGuide adoption → consumer-ready reference → contextual presentation → observed player feedback`.

A research file can be useful before formal adoption if appropriately verified and labeled, but **cannot** be silently promoted, grant an unlock, or modify campaign records.

## Coverage, not fictional completeness

The taxonomy index spans broad system families but is **not** a completed guide. A work package produces one meaningful, sourced dossier with clear links instead of dozens of empty Markdown stubs. Content coverage is tracked by the explicit [coverage manifest](content_manifest_v1.md) and documented missing areas, never inferred from the presence of a filename.
