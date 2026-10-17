# Living Adventure Companion

**Status:** PRODUCT SCAFFOLD / PROPOSED BEHAVIOR · RDR2 Hub remaster v1 · 2026-10-17

The Companion is the **intelligence connecting all the modules**, not a fourth separate gameplay mode or another campaign ledger. It decides which guidance belongs in the player's present moment and how to return after a detour.

## It consumes, but does not duplicate

| Input | Authority | Companion use |
|---|---|---|
| Current progress, Gold, saves, reported events | `L33TW0RLD/rdr2/campaign/` (GameGuide) | Read-only context and credible guardrails |
| Mission phases and critical Gold requirements | `L33TW0RLD/rdr2/missions/` + approved Field Guide v1.1 | Always retain a **complete** mission walkthrough in Mission Control |
| Activities, projects, intermission choices | `free_roam/content/` + `free_roam/decision_model_v0_1.md` | Recommend a purposeful but optional next outing |
| Game mechanics and dependencies | `systems_atlas/`, approved/qualified research | Explain exact mechanics, flag unknown unlocks, connect skills to activities |
| Current player request | This conversation | Player intent takes precedence over an invented schedule |
| UI composition | `dashboard/` | Show a short, useful contextual header and the appropriate complete view |

## Adaptive Companion responsibility

- Recognize **mission / free roam / mechanic question / player report / overview** without forcing the player into a mode picker.
- Support Model B *adaptive* guidance: critical confirmed, in-progress one-offs first; otherwise one sensible suggestion or silence, never repeated nagging.
- Keep the player's chosen **Project → Outing → Discovery** context available inside the conversation, but do not assume a persistent global store.
- Route a requested horse/hunting/camp explanation to Atlas; after the detour reconstruct the **entire** Mission Control guide (when that was the return target), not a summary.
- Route confirmed outcomes to **GameGuide**, the only authorized player-state writer. A UI press is a request or local planning action unless independently evidenced.
- Separate **availability of a mechanic** from **player evidence that the mechanic is unlocked**. Suppress unsupported urgency, avoid unsolicited future spoilers.

## Contextual Adventure Header

The header is a **small orientation layer inside the ChatGPT answer**, not a permanent floating dashboard. It can show: current surface, verified chapter/camp, focused project or mission phase, narrow active risk, and a return destination. Unknown location/horse/equipment remains UNKNOWN; do not fake "live" GPS or save synchronization.

**Design work assigned separately:** `adaptive-companion-010` / Issue #8 owns `free_roam/adaptive_companion/`. This scaffold specifies its integration requirements; it does not preempt, accept, or ratify that unfinished task. Consume `dashboard/interface_blueprint_v1.md` and `architecture/module_integration_v0_1.md` read-only; do not add a separate runtime, app or state backend.
