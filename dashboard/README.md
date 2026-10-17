# ChatGPT Dashboard Experience

**Status:** EXPERIENCE SCAFFOLD / DESIGN PROPOSAL · 2026-10-17

The Hub's **nice dashboard** is the coherent player-facing presentation of the companion inside ChatGPT. Not a website, permanent webapp, external panel, or three disconnected dashboards.

- [Interface blueprint](interface_blueprint_v1.md) — common header, three contextual surfaces, control behavior, transitions, presentation quality and mobile rules.
- [Living Adventure Companion](../companion/README.md) — routing and intervention policy.
- [Mission Control](../mission_control/README.md) — retains complete approved Field Guide v1.1.
- [Free Roam](../free_roam/README.md) — purposeful PROJECT → OUTING → DISCOVERY rhythm.
- [Systems Atlas](../systems_atlas/README.md) — source-aware mechanics reference.

## Dashboarding and knowledge are different jobs

- Research agents produce **source-backed material**, not arbitrary UI layouts.
- Content editors package that research into stable source records.
- The Companion selects context and relevant content; the dashboard **renders**, not invents, gameplay facts.
- The dashboard must make real ChatGPT interactions useful: independent Intel toggles, local checklist progress, contextual return buttons and optional drill-down. No decorative/inert buttons.
- One unified visual system, but **content density changes**: compact free-roam overview; full mission guide when playing a mission; layered Atlas answer when learning.
- All labels and actions have readable text fallbacks. A failure to render an image is not a reason to hide mechanics or an action-critical warning.

**Current implementation truth:** only interactive ChatGPT examples and user-reported desktop tests exist. No installed persistent Hub app, shared state store, automated save watcher or live engine is present.
