# Free Roam — Structured Play Content

**Status:** DESIGN SCAFFOLD · 2026-10-17

The purpose is to make **mission intermissions feel like an adventure with direction**, not a shopping list, another quest log or a mandatory grind.

## Content families

| Folder | Player purpose | Expected record |
|---|---|---|
| `projects/` | A longer-lived interest or capability to build over several outings | `project_template_v1.md` |
| `outings/` | A satisfying, local exploration session or skill practice | `outing_template_v1.md` |
| `intermissions/` | Context-sensitive choice set after a mission, when free-roam control exists | `intermission_template_v1.md` |
| `discoveries/` | Respond to a player-reported stranger, animal, unusual location or item without spoiling surprises | Upcoming template after first validated example |

**Examples:** [Developing camp](projects/camp_development_v0_1.md) and [Heartlands hunting reconnaissance](outings/heartlands_hunting_recon_v0_1.md) are CONDITIONAL DEMOS, not recorded player projects or outing completions.

## Rules for authors

1. Begin with the player's actual chapter, current control window, intentions and reported observations; do not invent a visible marker or unlocked system.
2. Each project has **a purpose, one next meaningful milestone and a reason it matters**; avoid forced exact targets unless sourced.
3. Each outing has a good experience even when it yields zero items. Show alternatives only when substantially different.
4. A discovery may replace an outing; this is not failure or abandonment of the project.
5. Reference exact Atlas IDs and gates only with accurate `INDEXED` / `REVIEW PENDING` / `ADOPTED` status. Cite material safety claims.
6. If a confirmed active mission Gold/missable window is urgent, let Mission Control lead; speculative chapter risk cannot become a fabricated countdown.
7. No project content owns the player progress ledger; reported outcomes go through GameGuide and source readback.

**Consumer:** `dashboard/interface_blueprint_v1.md`. **Architecture:** `free_roam/decision_model_v0_1.md`. **Mechanics research:** `systems_atlas/`.
