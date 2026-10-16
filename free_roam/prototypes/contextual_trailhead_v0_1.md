# Contextual Trailhead v0.1 — disposable Agent 006 pilot
**Status:** PROTOTYPE / NOT RATIFIED. ChatGPT-native conversational pattern, not an installed application.

## Verified context and priority
Read canonical `L33TW0RLD/rdr2/campaign/current_state.md` before each session: Chapter 2 at Horseshoe Overlook as chapter/camp, **current Arthur location unknown**; 9/104 Gold, operations 001–008 and 021, no pending Gold replays for played medal-bearing entries. Last player-reported save after Cornwall replay; exact slot and subsequent persistence unknown. Never infer markers, items, money, unlocked camp Ledger or active stage. This is a snapshot, not a background sync.

## Router and fallback
Natural-language routes (no permanent menu): "Let's play" and "What should we do next" -> compact contextual trailhead; "Let's explore" -> Free Roam outing; "Let's work on the camp" -> featured project; "Explain horses" -> Atlas S06.M02 with depth choice; "Let's do the next mission" -> verify canonical mission queue and player-visible marker then invoke **complete** original Field Guide v1.1; "Show my progress" -> current canonical ledger with evidence labels. Plain text equivalents work if interactive buttons do not render. ChatGPT-native button actions use `GenUI.issueNewTurn` and never imply state writes.

## Chapter 2 demonstration (Scenario A)
**Featured PROJECT:** develop camp; inspect Pearson requests and existing resources, and check whether Ledger is visible. Ledger is CONDITIONAL, not unlocked by assumption.
**Suggested OUTING:** short local camp-needs reconnaissance/hunting; check horse, weather, weapon and observed animal quality before committing to a pelt objective. This is a recommendation, not an asserted active marker.
**Alternatives (maximum two):** leisurely nearby exploration; player-confirmed available story mission.
**DISCOVERY:** follow spontaneous encounters and return to the camp project naturally; never convert exploration into a checklist.
**Guardrails:** before optional roaming, inspect *confirmed active* time-sensitive or one-off opportunity. If one exists, warn first with action and irreversible consequence; if unknown, ask rather than manufacture urgency. For Gold, the live mission guide's immediate warning takes precedence.

## Session continuity
Context object is conversational and ephemeral: `{mode, project, outing, mission_id, phase, gold_warning, return_to}`. This is explanatory notation, not persistent data or a working program. Mid-outing "How do I get a perfect pelt?" -> Atlas read-only answer -> "Back to camp" resumes project from conversation if available; in a fresh thread re-read GitHub and ask for any unsaved project/phase detail. Do not claim UI focus, checkboxes or callbacks survived a new thread.

## Mission preservation
A mission button is a *request to fetch* `rdr2` mission briefing and approved `protocol/walkthrough_presentation.md`, not a replacement mission card. Render Gold tiles, progress rail, all chronological phases A through final, in-phase warnings, optional independent Field Intel drawers and report. During an Atlas detour, retain the mission identity/phase and all warnings in the response or reconstruct from canonical sources. Never mark an outcome from a click.

## UI evidence
A Chapter 2 Trailhead with functional follow-up buttons was actually authored/rendered in this ChatGPT conversation before branch work. Host click delivery, Android display, desktop appearance, and persistent focus have not been independently observed. This file is a reproducible prompt-and-routing specification, **not** executable UI source or a deployed integration.
