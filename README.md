# RDR2 Hub

**Status:** DESIGN / BOOTSTRAP — no gameplay system ratified.

A ChatGPT-native command hub for a slow, immersive, High Honor, 100%-completionist, all-Gold Red Dead Redemption 2 playthrough.

## Product boundaries

- **Mission Control:** chronological, spoiler-aware Field Guides and Gold medal planning. Existing `L33TW0RLD/rdr2` mission content is reference material, not automatically copied authority.
- **Free Roam Control:** organic between-mission planning, camp development, side activities, exploration and player-selected priorities.
- **Systems Atlas:** structured mechanics research that informs Free Roam and Mission Control, not a third live campaign commander.
- **ChatGPT is the interface.** No standalone desktop dashboard, server, or game-state integration is assumed.
- The player confirms gameplay outcomes. UI checkbox state is planning state, never proof of a Gold medal, item, save or completion.
- Preserve current `rdr2` repo; migration or canonical handover requires explicit owner approval.

## Source map

| Path | Purpose |
|---|---|
| `architecture/` | Product boundaries, information model and decisions |
| `mission_control/` | Mission interface redesign proposals and integration mapping |
| `free_roam/` | Between-mission gameplay loop, priorities and activity planning |
| `systems_atlas/` | Mechanics taxonomy and topic research queue |
| `campaign/` | Future hub-facing state contracts; not authoritative gameplay records yet |
| `agents/` | Disposable agent operating contract and handoff templates |
| `decisions/` | Owner-approved decisions and open questions |
| `protocol/` | Source authority, research evidence, safety and change control |

## First design sequence

1. Audit and refine the full mechanics taxonomy.
2. Define Free Roam Control's organic decision loop and how it draws from the Systems Atlas.
3. Specify ChatGPT-native dashboard behaviors and the boundary with existing Mission Control.
4. Pilot a Chapter 2 free-roam session without inventing or changing campaign progress.
5. Ratify architecture before implementing permanent gameplay-state synchronization.

## Disposable agents

Each task runs in a fresh ChatGPT thread with one bounded role, an explicit scope, a GitHub read-first startup, a concrete deliverable and a stop condition. See [agent contract](agents/disposable_agent_contract.md) and [handoff template](agents/handoff_template.md).

**Owner decisions remain with the player.** Agents may draft and commit within assigned design files, but may not ratify architecture, modify `L33TW0RLD/rdr2`, or advance in-game progress without explicit authority.
