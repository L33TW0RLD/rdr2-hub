# RDR2 Hub — Disposable Agent 001 Handoff

**Role:** Hub Architect — ChatGPT Experience & Integration  
**Date:** 2026-10-16  
**Repository:** `L33TW0RLD/rdr2-hub`  
**Isolated branch:** `agent/hub-ux-001`  
**Starting `main` SHA:** `91588ef31e0e510c002792fc41b3a78754b1ef8f`  
**Starting original `L33TW0RLD/rdr2` main SHA (read only):** `d8fd4f39bd3c19e11ca7ba80ad8a27c7e858a4c2`  
**Status:** DELIVERED AS DRAFT; **NOT RATIFIED, NOT MERGED, NO IMPLEMENTATION**.

## Recovery and scope

Recovered current Hub `main`, existing Free Roam decision model/paper pilot, first Atlas handoff and index, architecture/mission README, agent/source authority and decisions. Read the original `rdr2` Campaign Command, Field Guide v1.1, mission preflight, current Chapter 2 state, mission shelf and researched intermission material without writing to the original repo. Kept taxonomy and mechanism classification out of scope because **Agent 002 owns the Systems Atlas taxonomy**.

## Deliverables (all on this isolated branch)

1. [Unified Hub Experience](../../architecture/hub_experience_v0_1.md) — conversational intent routing, unified product, three design concepts.
2. [Module Integration & Authority](../../architecture/module_integration_v0_1.md) — ownership matrix, report-handoff and schema-agnostic Agent 002 adapter.
3. [Navigation & State Flow](../../architecture/navigation_and_state_flow_v0_1.md) — semantic navigation, context classes, new-thread recovery, edge cases.
4. [Free Roam ChatGPT Interface Spec](../../free_roam/chatgpt_interface_spec_v0_1.md) — default/expanded views, depth-on-demand, interactive/fallback rules and platform acceptance tests.
5. [Ten Chapter 2 UX Scenarios](../../free_roam/ux_scenarios_v0_1.md) — exact route/output/authority logic for all ten assigned situations.
6. **This handoff** — implementation task boundaries, decisions and risks.

Indexes updated on this branch only:
- [architecture/README.md](../../architecture/README.md)
- [free_roam/README.md](../../free_roam/README.md)

**No** change to `systems_atlas/`, `campaign/`, `mission_control/`, `protocol/`, `decisions/` or original `L33TW0RLD/rdr2`. No cross-branch file changes.

## Recommended concept

**Contextual Trailhead:** natural-language request routes straight to Mission Control, Free Roam, Atlas or a read-only Campaign Review. The small opening view offers meaningful Story / Explore / Build choices with direct mechanics access, not a permanent three-panel dashboard.

- Free Roam default uses **one long-term Project**, **one suggested Outing**, optional distinct alternatives, **Discovery** freedom and a conditional urgent risk safeguard.
- Atlas answers at **Quick / Practical / Comprehensive** depth, with a topic browser only when explicitly requested.
- Mission Control is the **full existing Field Guide v1.1**, including all visible A→final phases, Gold metrics, contextual Field Intel and a report; no duplicated mini-mission UI.
- "Back" reconstructs context from latest facts and explicit user intent; there is no persistent widget or browser-history guarantee.

Alternatives evaluated: a permanent three-tab Command Console (too much fixed interface / false persistence), and an Opportunity Board (useful only as optional browse mode, risks grinding/spoilers).

## Module boundary and report rules

- `L33TW0RLD/rdr2/campaign/` remains **the sole game-state authority**; GameGuide is the only authorized writer after accepted player reports/screenshots and readback.
- Hub router chooses the requested surface; Free Roam recommends feasible activities; Atlas supplies source-aware rules and unlock conditions; Mission Control owns live mission decisions and Gold.
- A guide saying "Ledger opens after Strauss work" does **not** mean the player has unlocked or purchased it.
- A visible Gold medal, a reported save, and a persisted current-save readback are separate claims. Local checkboxes/tabs are not gameplay evidence.
- Uncommitted current-thread player reports must be labelled pending canonical record review; no automatic sync or confident cross-thread retention.

## Agent 002 dependency — explicit unresolved integration questions

No taxonomy schema was changed or frozen. Need Agent 002 to return or make discoverable:
1. Mechanic topic identity and aliases (for "horses" / "horse bonding" / "stable").
2. How-to description and progressive learning sections.
3. **General** unlock/dependency evidence and chapter/mode applicability (distinct from actual player-owned unlock).
4. Risks and current-chapter spoiler boundary.
5. Source URLs, claim-level confidence, research/adoption status and last-checked date.
6. Related topics for context navigation.
7. A robust way to resolve aliases and taxonomy migration without hardcoded family numbering.

The temporary `MechanicRequest/MechanicAnswer` in [module integration](../../architecture/module_integration_v0_1.md) is **semantic only** and must adapt to Agent 002's delivered schema. Missing fields should generate honest unknowns, not synthetic citations or unlock claims.

## Owner decisions before ratification

1. Approve/modify the **Contextual Trailhead** vs tabs or opportunity-board default.
2. Approve whether **Project / Outing / Discovery** and the one-project/one-outing density is the right Free Roam grammar.
3. Choose opening progress visibility (Gold summary in masthead vs detail only on request).
4. Choose interactive controls vs prose defaults and optional broad Atlas/activities browser.
5. Confirm Quick / Practical / Comprehensive learning model and mission-phase return behavior.
6. Decide whether long-lived *activity focus* deserves a future explicit, separately authorized record. Do **not** create it by implication.
7. Review Agent 002's taxonomy integration output once available and resolve aliases/spoiler metadata/evidence status.
8. Explicitly approve any subsequent source-of-truth migration; none is assumed here.

## Scenario validation and outstanding real testing

All ten requested situations have **paper walkthroughs**, including Chapter 2 no-Ledger unknowns, an optional time-sensitive wagon task, cross-thread restoration and a comprehensive horse guide. Every case passes the proposed routing/authority constraints **by design**.

**NOT performed:** actual ChatGPT control-render testing, Android/desktop comparison, real-life player feedback, gameplay observation, cross-thread switching experiment, Agent 002 live-schema integration or any GameGuide write audit. No deployment or usable interactive product is claimed.

## Recommended next task (separate disposable agent, after owner review)

**Task: ChatGPT-native Contextual Trailhead Prototype / Integration Pilot v0.1**, on a new isolated branch.

- Read owner-approved interface decisions, this architecture, current original campaign state and delivered Agent 002 taxonomy contract.
- Produce **one** compact interactive ChatGPT example with genuine functional actions: start Free Roam, open named mechanics detail, return to the full existing Mission Guide, view verified progress.
- Test in at least two representative situations: default Chapter 2 with unknown marker/ledger, and post-mission with a player-confirmed time-sensitive stage.
- Ensure all critical warnings are visible; verify no superficial false "GitHub saved" or automatic progress claims.
- Run manual mobile and desktop reading/layout checks and one fresh-thread source recovery if feasible.
- Record observed failures, adjust only the proposed Hub presentation, and retain a plain-text fallback.
- **Do not** build a website/desktop app, add dependencies, change canonical gameplay state, alter Agent 002 taxonomy or merge without explicit owner authorization.

## Verification checklist for Agent 001 closure

- [ ] Read back six deliverables and two indexes by exact `agent/hub-ux-001` ref.
- [ ] Check branch compare against starting SHA: expected only `architecture/`, `free_roam/` and this `agents/handoffs/` file; no `systems_atlas/` or original repo changes.
- [ ] Confirm latest `main` is unchanged or note concurrent advancement, **do not merge**.
- [ ] Include actual branch final SHA and compare results in completion report.
- [ ] Stop.

**Stop condition:** Verified isolated design delivery; owner review pending.
