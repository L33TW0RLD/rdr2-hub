# Free Roam Control

**Status:** DESIGN DRAFT / NOT RATIFIED · 2026-10-16

Free Roam Control is a **ChatGPT-native**, spoiler-aware guide to meaningful between-mission life in RDR2 Story Mode. It is not a forced after-mission checklist, a map of every surprise or a second campaign ledger.

## Core decisions already proposed (not owner-approved)

- [Organic Decision Model v0.1](decision_model_v0_1.md) — **Project → Outing → Discovery** with guardrails, evidence boundaries and report/adaptation.
- [Chapter 2 Paper Pilot v0.1](chapter_02_pilot_v0_1.md) — initial simulated circumstances and unlock-gating tests.

## Agent 001 interface exploration (also not ratified)

- [ChatGPT Interface Spec v0.1](chatgpt_interface_spec_v0_1.md) — three alternative concepts; **Contextual Trailhead** recommended, with compact default and mechanics depth on demand, mobile-first text fallback.
- [Ten UX Scenarios v0.1](ux_scenarios_v0_1.md) — full paper navigation/source-of-truth walkthrough for opening play, mission, post-Gold, camp, mechanic help, changed interests, urgent risk, comprehensive horses, Atlas browsing and new-thread recovery.
- [Unified Hub Experience](../architecture/hub_experience_v0_1.md), [Module Integration](../architecture/module_integration_v0_1.md) and [Navigation State Flow](../architecture/navigation_and_state_flow_v0_1.md) define routing to the other capabilities.
- [Agent 001 handoff](../agents/handoffs/2026-10-16_hub_architect_001.md) describes owner choices and test plan.

## Example Free Roam interaction

**Project:** develop camp, conditional on actual Ledger/debt access.  
**Outing:** one short local adventure or player-chosen treasure lead.  
**Discovery:** allow chance encounters to change plans.  
**Safeguard:** surface only credible activated Gold/chapter-limited risks.  
**Story:** return to a player-selected *actually available* mission marker and the complete existing Field Guide.

Mechanics and Chapter 2 availability come from the [Systems Atlas](../systems_atlas/README.md) and are only research until adopted and player unlocks are evidenced. The original [campaign record](https://github.com/L33TW0RLD/rdr2/blob/main/campaign/current_state.md) remains authoritative.

## Pending owner decisions

Select the default interaction pattern, decide how much progress to show initially, what UI interactions merit native buttons vs text, whether a durable project focus is worth proposing later, and validate the design in live ChatGPT mobile and desktop before implementation. No new gameplay writer, permanent UI state, background synchronization or standalone app is proposed.
