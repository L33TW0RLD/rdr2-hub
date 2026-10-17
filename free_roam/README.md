# Free Roam Control — Purpose Between Story Missions

**Status:** Original decision model DRAFT / NOT RATIFIED; structured-content remaster SCAFFOLD · 2026-10-17.

Free Roam is where the Hub becomes a **living adventure companion** rather than a series of mission walkthroughs. Its purpose is to propose meaningful things to experience between missions, with plenty of space for unexpected discoveries and the player's own choices.

## The three rhythms

| Rhythm | What it provides | Content directory |
|---|---|---|
| **PROJECT** | One optional longer-term purpose, e.g. improving camp or mastering horse care | [Projects](content/README.md) |
| **OUTING** | One coherent ride/activity that is valuable even without a loot reward | [Outings](content/README.md) |
| **DISCOVERY** | Reactions to things the player actually encounters, not a spoiler-filled scavenger route | [Discovery rules](content/README.md) |

[Intermissions](content/README.md) choose what is worth doing when the player genuinely has free-roam control; they are not mandatory after every story mission. The player can simply continue Story.

## Existing design assets (preserved)

- [Organic Decision Model v0.1](decision_model_v0_1.md): proposed Project → Outing → Discovery flow.
- [Chapter 2 Paper Pilot](chapter_02_pilot_v0_1.md): simulated unlock/risk scenarios, not observed play.
- [ChatGPT Interface Spec](chatgpt_interface_spec_v0_1.md) and [Ten UX Scenarios](ux_scenarios_v0_1.md): prior UI research.
- [Unified Hub Experience](../architecture/hub_experience_v0_1.md) and [Module Integration](../architecture/module_integration_v0_1.md): preserved architectural inputs.

## Remaster content foundation

- [Content family contracts and conventions](content/README.md)
- [Camp Development PROJECT (conditional example)](content/projects/camp_development_v0_1.md)
- [Heartlands Hunting Reconnaissance OUTING (conditional example)](content/outings/heartlands_hunting_recon_v0_1.md)
- [Unified dashboard specification](../dashboard/interface_blueprint_v1.md)
- [Knowledge record/evidence contract](../knowledge/record_contract_v1.md)

**Important boundaries:** the original `rdr2/campaign/` is the authoritative state. Ledger, horse brush, material counts and any actual player-selected activity remain UNKNOWN without evidence. Current Atlas entries are INDEXED or under research, not inherently adopted instructions. Full Mission Control remains immediately accessible when the player wants Story or has a credible active irreversible window.

**Next substantive job:** review a real Chapter 2 intermission against D01/D02/D04 research, then present an optional, context-aware project and outing. Do not turn every system into a separate mandatory dashboard or invent a universal chapter-end countdown.
