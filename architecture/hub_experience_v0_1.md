# RDR2 Hub — Unified ChatGPT Experience v0.1

**Status:** DRAFT / UNRATIFIED · 2026-10-16  
**Owner:** Disposable Agent 001 — Hub Architect · **Branch:** `agent/hub-ux-001`  
**Scope:** A single ChatGPT-native companion for RDR2 **Story Mode**; this is a design specification, not a deployed interface or live campaign instruction.  
**Starting authority:** `L33TW0RLD/rdr2` supplies verified progress and approved Field Guide v1.1. The Hub remains a design/research workspace.

## Executive decision: a contextual companion, not three dashboards

**Recommended concept: Contextual Trailhead.** The player speaks naturally. The Hub shows a **small relevant surface for the current intent** and one unobtrusive route to the other capabilities. It does not ask the player to pick Mission / Free Roam / Atlas before doing anything.

- **Mission Control:** execute a chosen, currently available story mission. Use existing complete A→final Field Guide v1.1, Gold metrics, relevant optional Intel and after-action report. Never replace it with a miniature abridgment once the mission is active.
- **Free Roam Control:** choose what to do with Arthur's available time, following **PROJECT → OUTING → DISCOVERY**, risk-aware and flexible. One featured project, one outing, at most two alternative outings, and a natural way to go back to story.
- **Systems Atlas:** explain how something works at a requested depth and return the player to the current mission/outing without pretending the explanation is a tracked task. Atlas is the shared knowledge provider, not a third gameplay commander.
- **Campaign review:** a lightweight *view* assembled from the original `rdr2/campaign/` records, not a fourth writing authority.

**Product promise:** the assistant remains with Arthur during story, travel, camp life and unexpected discoveries; *navigation is conversational*, not a sequence of screens to clear.

## First-contact routing from ordinary language

| Player phrase | Primary response | Minimal context fetch | One natural onward path |
|---|---|---|---|
| "Let's play." | Compact session trailhead, not an assumed mission | Current canonical campaign state + any recent player intent in this thread | Suggest a feasible story or roam choice; ask only if one crucial fact blocks safe advice |
| "What should we do next?" | Short Free Roam decision view unless a currently active mission/time-critical stage supersedes it | Current control/window; actual markers/unlocks if known; one real risk | Start suggested outing / start chosen mission |
| "Let's upgrade the camp." | Free Roam PROJECT focus; check first real unlock | Ledger availability, money if actually reported, relevant Atlas gates | First camp milestone; then outing or story |
| "Explain horses." | Atlas quick explanation with optional deeper guide | Horse topic research status and any phase context; no live stats assumed | Return to prior outing / explore subtopic |
| "Show my progress." | Campaign snapshot from existing ledgers | Current state, mission/Gold ledger, save, missables only as needed | Resume last activity |
| "Let's do the next mission." | Mission candidate selection/marker check, then existing Field Guide | Current mission shelf + live availability + preflight protocol | Mission A→final; after-action returns to Hub |
| "I found something strange." | Discovery help, with spoiler budget and relevant mechanic | Observed place/object and immediate one-off risks | Continue discovery or resume outing |
| "Show me all the mechanics." | Atlas browse index, **not** a thirty-topic tutorial dump | Atlas read-only index / capability metadata | Pick one family or return to activity |
| "Gold, finished and saved." | GameGuide report review and authority-bound write workflow | Identify specific mission, medal evidence, separate save report | Offer short next-step choice; never auto-assume |
| "I'm done hunting; let's play story." | Context switch directly to Mission Control | Confirm what actual story marker is available; preflight | Complete Field Guide |

**Ambiguity:** "next" means next *feasible player-facing action*, not the repository's next numerical mission file. If there are several good options, show two/three meaningful options instead of asking a general preference form. Avoid repeating facts the user just stated.

## Session life cycle (one companion across contexts)

1. **Resume.** Read `rdr2/campaign/current_state.md` first, then only the mission/record/detail necessary. Establish evidence age; latest in-thread player reports may be pending canonical write.
2. **Locate intent.** Story / roam / learn / campaign review / report. A player explicitly naming a mission or mechanic overrides a broad default start view.
3. **Safety context.** Is Arthur chained in a mission, camp-limited, free roaming or unknown? Are there credible chapter/Gold risks **actually triggered**? Unknown remains unknown; don't invent active markers.
4. **Show smallest complete response.** For roam: compact trailhead. For mechanics: answer the direct question immediately. For selected mission: approved *full* Field Guide, not a teaser.
5. **Support detours.** A discovered animal, Stranger or camp conversation may shift focus without resetting the featured project or marking planned activities failed.
6. **Report only when something happened.** Player-confirmed outcomes route to GameGuide's canonical record workflow; unsent drafts/checkboxes do not.
7. **Resume or end.** Return from Atlas to the previous activity by summarizing where the player left off, not by relying on preserved visual state. No recurring unsolicited prompts or invisible background session.

**Never force an intermission after every Gold mission.** If the game chains another mission, stay with Mission Control. If the player wants to explore, the next window determines what is practical.

## Design alternatives compared

| Concept | Form | Strength | Problem | Decision |
|---|---|---|---|---|
| A. Permanent command dashboard | Persistent-looking Mission / Roam / Atlas overview with counters | Easy browsing and cross-section overview | Overstates persistence, duplicates Field Guide, screen-heavy on mobile | Reject as default; an optional Overview request can exist |
| B. **Contextual Trailhead** | Small relevant view plus simple escape/navigation choices | Natural language first; compact; progressive disclosure; supports immersion | Needs reliable intent/state routing and graceful text fallback | **Recommend for owner review** |
| C. Quest-board / activity feed | Multiple cards ranked by category and completion value | Easy to scan available content | Becomes checklist/grind board and may spoil encounters | Use only as optional browse mode, not default |

The player did not approve B yet. The earlier Free Roam one-project/one-outing grammar remains a **proposal** until ratified.

## Content hierarchy and spoiler discipline

1. **Immediate reality:** current reported chapter, control mode, live mission, relevant exact Gold/safety risk.
2. **Current intention:** what the user requested, plus the minimum context needed to succeed.
3. **One helpful next action:** concise with an explanation of value, not a compulsory quest.
4. **Opt-in depth:** relevant topic Intel, full mechanic guide, wider opportunity browsing, detailed campaign evidence.
5. **No future plot reveals:** avoid exposing later identities, mission twists or undiscovered hidden map solutions unless directly requested.

**Important:** "Opportunity safeguarding" is not license to narrate plot. Warn about the decision boundary, not later story outcomes beyond what the user needs now.

## Proposed opening response: actual Chapter 2 state

> **RDR2 HUB · Chapter 2 — Horseshoe Overlook**  
> **Campaign:** 9/104 Gold; all nine played eligible missions Gold; no replay cleanup reported.  
> **Live position:** latest after the 021 bounty replay; current Arthur location, marker set and latest save status *after that replay* remain unreported.  
> **What next?**  
> **Explore:** a small camp/Heartlands outing *if Arthur is controllable*.  
> **Build:** check the real Strauss/Ledger availability before planning camp upgrades.  
> **Story:** choose an actual available marker and enter its full Mission Control briefing.  
> **Learn:** ask about horses, hunting, camp, money or any other mechanic.  
> *If the player reports a currently active, skippable Gold stage, replace the leisure options with a precise Mission Control warning.*

This is a **paper example**, not a live game report, and intentionally avoids assuming unlocked tools, current wallet, current physical location or newly earned items.

## Ownership and continuity

- ChatGPT is the only user-facing intended interface. Text must work even if interactive controls or images are absent.
- A ChatGPT response can have temporary selected tabs, toggles or checkboxes. **None are durable evidence or guaranteed to survive a new turn, refresh or thread.**
- Context is recovered from the authoritative original campaign files and explicit player reports. Do not invent a hidden Hub session database or background updater.
- An active Free Roam **project** is a conceptual goal until separately recorded by authorized GameGuide changes; the Hub may suggest it again but cannot claim it persisted merely because it was clicked.
- GameGuide alone owns progress writes; Systems Atlas and Free Roam never mutate Gold, saves, inventory, current loaded chapter or Honor.

## Acceptance gates before ratification

1. Ten Chapter 2 scenario simulations produce accurate routing, output and return behavior.
2. User reviews Contextual Trailhead vs two alternatives and approves or revises.
3. The UI preview is tested *in an actual ChatGPT client* on mobile and desktop for default, mission handoff, Intel expansion and report submission.
4. Agent 002 supplies a compatible mechanics lookup output (or explicit adapter requirements) without this branch changing its taxonomy.
5. Ownership and failure behavior are audited so a stale repo read cannot upgrade a speculative fact to known gameplay state.
6. No merge into `main` before owner approval.

## Source references

- [Free Roam decision model](../free_roam/decision_model_v0_1.md) and [Chapter 2 paper pilot](../free_roam/chapter_02_pilot_v0_1.md).
- [Hub source authority](../protocol/source_authority.md).
- [Existing Field Guide v1.1](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/walkthrough_presentation.md) — **approved**, not changed by this proposal.
- [Mission preflight](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/mission_preflight.md).
- [Campaign live state](https://github.com/L33TW0RLD/rdr2/blob/main/campaign/current_state.md).
