# RDR2 Hub — Navigation & State Flow v0.1

**Status:** DRAFT / UNRATIFIED · Agent 001 · 2026-10-16  
**Target:** ChatGPT-only, conversation-first, re-renderable. **Not** an implementation of permanent application state.

## 1. Treat navigation as an intent, not a screen hierarchy

Users need not start at a main menu. Any request can arrive directly. The "Hub" is the **routing and evidence discipline** underlying three specialized response types.

```text
                   PLAYER MESSAGE
                         |
                  RECOVER AUTHORITY
                         |
                 INTENT + SAFETY ROUTER
                /          |          \
          STORY / MISSION  ROAM       LEARN / ATLAS
                |          |          |
       COMPLETE FIELD GUIDE|    QUICK / PRACTICAL / DEEP
                |          |          |
        REPORT / AFTER-ACTION        |
                \         |         /
                  CURRENT CONTEXT RESUMED
                         |
                  REVIEW PROGRESS
                  (read-only view)
```

A direct "Show progress" routes to Campaign Review at any point. "Back to [X]" reconstructs from canonical sources and the most recent explicit conversational instruction; it does **not** reload UI widget state.

## 2. Distinguish five things called 'state'

| State class | Example | Durable authority | UI implication |
|---|---|---|---|
| **Campaign facts** | 9/104 Gold, mission cleared, actual save report, Pen unverified | Existing `rdr2/campaign/` (GameGuide writes after evidence) | Re-read on new threads / relevant reports |
| **General mechanics research** | Ledger unlock requirements, horse bonding rule | Atlas + current adopted research, with source status | Advisory unless corroborated/adopted |
| **Activity intent** | "I want to work on satchels" | Current player message; optionally future authorized record, **not yet** | Current surface displays a featured project |
| **Conversation working context** | "We were looking at Hosea's stable mission" | Current thread while available, not reliable durable storage | Reconstruct on return; do not assert cross-thread persistence |
| **Ephemeral controls** | Selected phase, local checkbox, expanded Intel drawer | This single rendered message/client only | Must not become Gold, possession, money or save evidence |

The design might someday add a durable non-gameplay "preferred project" record **only after** owner approval and an explicit write contract. No current mechanism exists.

## 3. Read-side context envelope (internal conceptual model)

```text
SessionContext [derived each answer, not persisted here] {
  canonical_ref: "L33TW0RLD/rdr2@main",
  canonical_read_at: [this retrieval event],
  campaign_chapter: value|unknown,
  gold_summary: evidence-backed value|unknown,
  player_control: free_roam|camp_limited|mission_chained|unknown,
  player_location: reported location|unknown,
  actual_markers: player_observed set|unknown,
  unlocks: {known, not_available, unknown} with provenance,
  active_obligation: documented event|unknown,
  user_intent: mission|roam|learn|review|report|ambiguous,
  activity_focus: {type, label, provenance, freshness}?,
  return_target: {type, label, safe_anchor}?,
  spoiler_horizon: chapter_or_selected_topic,
  evidence_conflicts: [],
  pending_record_updates: [current-thread report only]
}
```

`canonical_read_at` is a retrieval detail, not a promised live sync timestamp. `activity_focus` is a conversational hint, not a second progress ledger. `return_target` stores a semantic location (e.g. "Mission 009 Phase D") in **message context only**; if unavailable, ask a short question or offer a summary of known choices.

## 4. Routing priority

**Interpret requested intent first**, then validate safety gates without erasing agency.

1. **Active documented irreversible/time-sensitive risk:** tell the player immediately; offer relevant Mission Control or a specific protective action. Do not silently block requests for explanations or information. Risk must have evidence and an activation condition.
2. **Specific mission named:** go to Mission Control, preflight and deliver existing full v1.1 briefing. When current marker is unknown, show the gate as conditional; do not claim "started."
3. **Specific mechanics question:** answer with Atlas at requested depth; preserve caller context as the return target. For in-mission questions, keep action-critical instruction visible in the mission flow.
4. **Specific activity choice:** focus FRC on that project/outing rather than offering unrelated choices first.
5. **Open-ended playing prompt:** small Contextual Trailhead; present 2–3 feasible choices using existing FRC model.
6. **Campaign status request:** concise read-only view of canonical ledgers and any materially unknown fields.
7. **Outcome report:** route to GameGuide evidence review, only then persist and verify.

A user can say "explain horse bonding *before* Hosea" and receive general mechanics even if the stable is not available. **Knowledge access is not gameplay access.**

## 5. Transition table — all paths are reversible when story permits

| From → To | Trigger | What must travel | Result & return |
|---|---|---|---|
| Start → Roam | "Let's play" / "What next?" and no active mission | Chapter, progress snapshot, available control/window, spoiler bounds | Trailhead; next user selects choice |
| Start → Mission | Named available mission / "next mission" with marker selection | Current shelf mapping, Gold status, active marker evidence | Field Guide v1.1; after-action or interruption returns |
| Start → Atlas | "Explain [mechanic]" | Topic, desired depth, spoiler bound | Answer without fake gameplay status; user may try it |
| Roam → Mission | Select story option; urgent skippable stage active | Candidate marker, reason, uncertainty, return focus | Mission preflight then full guide; no duplicate Hub checklist |
| Roam → Atlas | "How do I hunt perfect pelts?" | Chosen activity, topic, depth | Layered explanation; "Back to [outing]" reconstructs |
| Mission → Atlas | Question about a mechanic/Gold instruction | Mission operation + phase anchor + critical warning | Answer scoped to phase; return to full Field Guide |
| Atlas → Roam | "Let's try it" | Mechanic/prereqs, previous activity preference | Conditional feasible outing, not unlock claim |
| Mission → Roam | Confirmed finish + regained free-roam window | Reported medal, save separate, any changed unlocks, current control | Post-mission trailhead; if chained, remain Mission |
| Roam → Roam | Discovery, preference switch, area change | What player actually saw, changed aim | Recompute one project/outing without checklist failure |
| Any → Review | "Show progress" | Canonical ledgers and read date | Compact progress view; return to previous intent on request |
| Any → Report | Specific player outcome / screenshot | Exact evidence and affected fields | GameGuide review/write/readback, then back to relevant context |
| Any → Start | New chat / long gap | No stale widget assumptions; reload original repo state | Recover and show relevant view with honest unknowns |

## 6. No forced menu and no simulated persistence

- **Direct requests:** "I found a map" → help with map; "horses" → explain horses or ask only if ambiguous between mechanic vs mission.
- **Return action:** may be plain text ("Back to our camp plan"), a genuinely functional reply button or conversational prompt. Do **not** claim an HTML-style browser stack.
- **Focus switching:** temporary phase/drawer/selection UI is purely presentational; a tap may issue a new ChatGPT turn but does not automatically produce GitHub commits.
- **Two kinds of return:** after an Atlas interruption *while a mission is ongoing*, resume that **same full mission** without losing phases. After a mission genuinely finishes, route to FRC only if the player has control and wants to roam.
- **Fallback when context has been lost:** "I can recover campaign facts, but I don't know which optional outing you were doing. Continue camp development, or choose something else?" Only ask when it materially changes guidance.

## 7. Staleness, uncertainty and conflicting data

**If repository read fails:** use a date-stamped known historical summary if available, say that latest state is unverified, and avoid falsely claiming current medal/gear/save. A general mechanic explanation can proceed from supported reference material.

**If a player says something new that conflicts with GitHub:** prioritize understanding the player's observation, but mark it **not yet recorded** and send it through GameGuide's review. Don't edit Hub design documents to create a gameplay fact.

**If researched unlock is generically true but player status unknown:** display "becomes available after X; check your actual menu/marker." Do not present as owned, unlocked or purchased.

**If no verified free-roam control:** show safe conditional options only, then one short question ("Is Arthur back in free roam?") if essential. Do not create an artificial free-roam session.

**If multi-part mission classification is ambiguous:** route to Mission Control's medal identity preflight, not a generated denominator based on shelf IDs.

## 8. Return to user experiences (two examples)

**Roam → Atlas → Roam**  
Player: "Let's hunt something for Pearson."  
FRC: "If your leatherworking tools are unlocked, choose a specific satchel recipe; otherwise take a small nature outing and learn animal quality."  
Player: "How do perfect pelts work?"  
Atlas: "Study animal quality, verify recommended weapon/ammunition, aim for clean kill; some exceptions, sources pending adoption."  
Player: "Back to hunting."  
FRC: restores the *idea* of the hunt and checks whether tools/recipe are known; no checkbox remembered as finished.

**Mission → Atlas → Mission**  
Player: "Run Operation 009."  
Mission: validates marker availability and prepares full A→final v1.1 guide.  
Player: "What does bonding level do while I pick a horse?"  
Atlas: practical horse bonding explanation, keeping the current stable phase and any Gold pressure in view.  
Player: "Back to the mission."  
Mission: re-renders complete guide with selected phase focus; player-verified actions only, no phantom completion ticks.

## 9. Open integration decisions

1. What optional stable **activity focus** note, if any, is worth persisting in future? Never infer it from UI controls.
2. Whether context switchers should appear as small text actions or 1–2 functional buttons on mobile.
3. Agent 002's mechanic reference contract and alias resolution, once available.
4. Which canonical write interface GameGuide will use for new reports, and failure/readback UX (existing authority stays unchanged).

**Related specs:** [Hub experience](hub_experience_v0_1.md) · [Module integration](module_integration_v0_1.md) · [Free Roam UI](../free_roam/chatgpt_interface_spec_v0_1.md) · [Mission Field Guide v1.1](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/walkthrough_presentation.md).
