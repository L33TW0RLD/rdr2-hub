# RDR2 Field Desk — reproducible screenshot replay v0.1

**Status:** DESIGN-ONLY RECONSTRUCTION / USER REVIEW PENDING.
**Scope:** the current-Chapter Header and Mission Control visual reference, *not* the experimental `Your World` container.

## What is preserved

- `index.html`: standalone, deterministic HTML/CSS/JS **visual replay** of the screenshot, designed for a 580 × 438 viewport. It is **not** a deployed permanent application and does not have a live GameGuide data adapter.
- `fixture_screenshot_20261018.json`: replaceable, explicitly labelled **SIMULATION_FIXTURE_NOT_GAME_STATE** example content, transcribed from the user-provided 2026-10-18 reference screenshot. Its medal bar, dots, mission rows, chapter and summary must NOT become actual player progress.
- **Visual reference:** original screenshot supplied in the 2026-10-18 dashboard recovery conversation. The user-visible replay ZIP additionally packages the original image and local 580/320/380-pixel render captures. Those screenshots are **not** yet hosted in this repository.

This replay is stacked on the existing `design/dashboard-navigation-v0-1` design branch (draft PR #62) and leaves its four agent-exclusive design files untouched. It does not change GameGuide, player progress or game files.

## Repeatable procedure

1. Read this README, `index.html` and `fixture_screenshot_20261018.json`.
2. Open `index.html` locally at 580 × 438 to compare visually with the user-provided original reference.
3. Verify 18 slim medal segments, **6 Gold / 2 Silver / 1 Bronze**, **9 of 18 recorded** and illustrative dot locations (1-based slots **7, 11 and 12**). Every number is synthetic test data.
4. Verify Mission Control's three separate full-width clickable rows: The Spines of America (Hosea, golden `NEW POSSIBILITIES` — Emerald Ranch wagon Fence), Pouring Forth Oil — II (John, red `Time-sensitive`), A Fisher of Men (Abigail, golden `NEW POSSIBILITIES` — Fishing).
5. Test 320px/380px mobile widths for clipping, and ensure the design retains whitespace, restrained grouped-border styling, compact type and hierarchy.
6. **Native ChatGPT acceptance is separate:** wire genuine mission-title tooltips, source-grounded full Field Guide opening and contextual return. The offline HTML deliberately shows explanatory messages, not fabricated GameGuide reads.
7. Only after user-accepted reproduction should the separately evolving `Your World` panel be added beneath these two owner-locked containers.

## Authority boundary

The screenshot's chapter and medal summary, mission availability, map dots, labels, time-sensitive state and feature introductions are **provisional design-test fixtures**. Nothing here establishes verified save state, real available map markers, completed Gold medals, owned horse equipment, unlocks, or actual current chapter. Before any real gameplay guidance, read the current canonical original GameGuide and the Hub source contracts. Use live values only where independently confirmed; unknown is not zero.

The replay's segment hover presently identifies **slot number**, not source mission title, because screenshot geometry alone cannot prove each segment's mission identity. A future authentic adapter must use the original chapter-operation mapping. Never silently treat this visual demonstration as real campaign data.

## State of work

**DELIVERED FOR VISUAL REVIEW**, not approved, not merged, not a persistent native ChatGPT dashboard. Exact cross-client pixel matching is not guaranteed; preserve source and reference fixture together and re-check rendered output on each major revision.
