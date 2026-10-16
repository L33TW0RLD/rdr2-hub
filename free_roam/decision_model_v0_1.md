# Free Roam Control — Organic Decision Model v0.1

**Status:** DRAFT / UNRATIFIED — design proposal, not live GameGuide protocol  
**Task:** Free Roam Designer 001 · **Date:** 2026-10-16  
**Scope:** RDR2 Story Mode; Chapter 2 prototype; High Honor, official 100%, all eligible Gold, missable preservation, slow immersive play  
**Authority boundary:** This repository designs the Hub. The live campaign is still authoritative only in `L33TW0RLD/rdr2/campaign/`. No gameplay result, unlock, cash amount, item, save, or medal is inferred from a design.

## 1. Product promise

When the player can roam, answer three questions:
1. **What meaningful long-term improvement can Arthur build toward?**
2. **What would make a satisfying outing right now?**
3. **What should we notice or protect without spoiling the adventure?**

**Mission Control = execute a chosen mission.**  
**Systems Atlas = how mechanics work and when they unlock.**  
**Free Roam Control = decide what to enjoy/pursue between missions while respecting consequences.**

No fixed "complete one story mission, then do N side activities" cadence. No universal order of missions, exhaustive markers, fabricated resource counts, map pin sweeps or compulsory full clear before advancing.

## 2. The three rhythms of free roam

| Rhythm | Lifetime | Examples | Completion concept | Display rule |
|---|---|---|---|---|
| **PROJECT** | Several outings / story missions | Pearson satchel progression, improving camp, learning horse management | An actual player-confirmed milestone, with optional next step | Keep **one featured project** in sight; optional projects remain discoverable |
| **OUTING** | One local trip or one in-game session | Hunting expedition, Valentine errand, treasure clue investigation, nature walk | A satisfying experience or verified outcome, **not** a mandatory quota | Recommend **one main outing**, plus up to two genuinely different alternatives |
| **DISCOVERY** | Unpredictable, event-led | Camp conversation, chance encounter, found shack, unique letter, unexpected animal | Player chooses to engage or keep moving | Do **not** fill the map with scripted surprise locations; interrupt if actually observed |

**GUARDRAIL:** A separate small, precise, conditional *Now / Before leaving / Can wait* warning strip watches for credible missable Gold, honor, one-off story and camp events. This is not a fourth permanent checklist or a generic urgency score. One active credible alert is preferable to many speculative ones.

Projects are purposeful but *not* hard objectives. An outing can teach a mechanic without producing an item. Discoveries can replace the outing without being treated as plan failure.

## 3. Triggered decision loop

```text
PLAYER RETURNS WITH CONTROL / INTEREST / NEW CLUE
             |
   A. Recover live GitHub authority
             |
   B. Resolve control window & immediate risk
      ├── chained/no control -> Mission Control, no intermission
      ├── camp-only -> camp-scale choices only
      ├── unknown -> conditional options; one useful observation request
      └── free roam -> continue
             |
   C. Observe current world and user intent
      - actual markers, camp access, unlocked mechanics, nearby area
      - reported money/gear/horse, save sensitivity
      - mood: purposeful / leisurely / curious
             |
   D. Filter feasibility and protect unique opportunities
      - known locked actions are unavailable
      - unknown gates receive "check first", never "unlocked"
      - credible urgent Gold/chapter risk outranks all outings
             |
   E. Present living plan
      - ONE project + ONE recommended outing + <=2 alternatives
      - a short optional mechanics lesson tailored to chosen activity
      - leave discovery space open
             |
   F. Play unfolds (interruptions are welcome)
             |
   G. Short return/debrief upon actual event, not timer
      - player-reported discoveries / results / expenses / save
      - GameGuide handles authoritative record updates
      - project advances only on evidence; suggest next new possibility
```

**Re-evaluation events:** relevant mission completion, a new system unlock, a purchase or material donation, discovery/stranger offer, reaching a town/camp, a credible missable warning, player asking "what now?", or a stated preference change. **Not** every walk, every plant picked, every checkbox tick, or a forced after-mission interruption.

### Window safety precedence

1. **Time-critical Gold or irreversible story event already active:** stop optional exploration; hand to Mission Control with specific evidenced reason (e.g., John's `Pouring Forth Oil` wagon Part II, **only when active/confirmed**, exact timeout disputed).
2. **One-time camp/side opportunity observed and expiring:** briefly surface context and player choice; don't assume the interaction is available just because a guide says it can spawn.
3. **Save/progress protection at sensible points:** remind only when relevant and game permits, especially after rare collectibles or before irreversible gates; don't invent a successful save.
4. **Normal roam:** offer meaningful pursuit without repeatedly presenting warnings for all future chapters.

When availability is **unknown**, never assert "safe" or "urgent" with certainty. A concise conditional check can precede recommendations.

## 4. Selection model — constraints before priorities

**Inputs (each tagged observed / player-reported / legacy-reference / researched / unknown):**
- Current area, chapter, access mode (free roam / camp only / chained / unknown).
- Actual active story/white markers, available invitations, active time-sensitive obligations.
- Mechanic unlock status (Ledger, tools, stable/brush, fence, fishing rod, recipes).
- Confirmed currency, equipment, materials and resources; unknown is not zero.
- Player's interest and pace, desire for novelty, spoil tolerance (default spoiler-light).
- Existing project milestone and places just visited, only if actually recorded.
- Mission risk, honor impact, missable status and provenance of each claim.

**Hard feasibility filters:** not offered if definitely locked; cannot spend unconfirmed funds; preserve unique/crafting valuables; avoid honor-hostile recommendations as defaults; do not promise inaccessible regions, map pins or mission windows.

**Soft recommendation preferences:**
- Immediate player interest > generic efficiency, unless credible one-off loss.
- Prefer **one new mechanic** or enjoyable skill within an outing; don't flood with unrelated tutorials.
- Tie an outing to the featured project when it fits *naturally*, otherwise choose a contrasting immersion outing.
- Prefer coherent local routes and return-to-camp opportunities; avoid distant scattershot collectible grinds.
- Vary recent activities to prevent a hunt→hunt→hunt rut; no random content merely for variety.
- Call out why doing the outing *now* is useful and what can be deferred.
- If a new mission is appealing and no credible risk blocks it, choosing the mission is always a valid fourth path: **return to story**.

**Do not convert these into a hidden numerical player score.** Simple, explainable human-readable trade-offs suffice. Distance/time are qualitative unless actually grounded.

## 5. Opportunity information contract (research vs live state)

Research-side record fields:

```yaml
opportunity_id: FR-<topic>-<slug>    # proposed, stable reference, never proof of progress
title: "..."
rhythm: project | outing | discovery
mechanic_refs: [S08, S10]
goal_tags: [efficiency, immersion]    # may include official_100, gold, achievement, optional_exhaustive
availability:
  dependency_refs: [U02, U03]
  status: verified_general | conditional | disputed
  player_gate: "Check the actual camp Ledger before offering a purchase"
urgency:
  classification: now_or_never | before_story_gate | deferrable | unknown
  exact_trigger: "..."
reward_or_experience: "..."
cost_and_risks: "..."
first_step: "..."
on_the_way_learning: "..."
revisit_condition: "..."
spoiler_level: none | current_chapter | later_plot
evidence: ["repo path or external source URL"]
research_status: draft | researched_review_pending | adopted
```

Player-state readback belongs solely in existing GameGuide authority and must be separately tagged. Do not create a second in-Hub `completed`, `owned`, `saved` or `gold` ledger from an Atlas opportunity record.

### Multi-session project milestones

Each project has **purpose → current verified prerequisite → next small actionable milestone → optional route → revisit trigger**, not a global dozens-of-pelts checklist. Example (conditional):
- Purpose: create more room in the satchel.
- Gate: Camp Ledger unlocked after Strauss debt return; tools bought separately.
- Next milestone: inspect actual Ledger and tool availability; **if tools owned**, choose a specific satchel recipe and identify *only the materials for that recipe*.
- Outing synergy: hunt a suitable species while exploring a new local route.
- Report: actual pelt quality, donation and completed crafting separately; only confirmed outcomes update canonical records.
- If player is bored, switch project without penalty.

## 6. ChatGPT-native response contract (DESIGN ONLY — no UI code)

Default **short form**, after validating the actual game window:

```text
FREE ROAM · HORSESHOE OVERLOOK
Available: [confirmed camp/free roam] · Unlocks: [confirmed, conditional, unknown]
Watch: [one real urgent issue or "No confirmed urgent issue"]

OUR PROJECT  —  [meaningful ongoing goal]
Next small milestone: [what can actually be attempted / check gate]

TODAY'S OUTING — [one main coherent adventure]
Why now: [benefit, newly available system, fun, or local tie]
Along the way: [one optional mechanic to learn]
Alternatives: [up to two]  ·  Or follow a mission marker

IF SOMETHING HAPPENS — [discovery freedom; no scripted reveal]
REPORT WHEN READY — [only relevant outcome categories, no forms required]
```

**Deep dive on demand:** selecting horse/hunting/herb/camp mechanics opens focused Systems Atlas explanation in ChatGPT; selecting a story mission hands off to existing Field Guide v1.1. Do not force reading 30 systems before playing.

**Compact choice principle:** safety alert + three rhythms; avoid 30 activity cards, long mandatory checklists or an assumed permanent widget state. The exact visual design is deferred to owner review.

## 7. Return / adaptive evolution

The user may say "Spent an hour riding; found a stranger and a cabin" or "Got two perfect pelts" or "just want story." The assistant should:
- Acknowledge and classify what was **reported**, not imagined.
- Handle saving, Gold, inventory/crafting/cash/honor records only through the established GameGuide authority; do not silently persist local UI state.
- Re-evaluate active **project** and recommended **outing**. Do not penalize deviation or imply a failed objective.
- If a learned mechanic was actually practised, offer the **next sensible layer** rather than repeat the same basic tutorial.
- If research is disputed, ask for a helpful game-screen observation rather than quietly resolve by guess.
- Pause when user wants to play independently; Free Roam Control should not demand constant check-ins.

## 8. Four completion goals remain separate

**Official in-game 100%**, **all eligible Story Gold**, **achievements/trophies** and **personal exhaustive/unique content** have different definitions and timing. Camp activities/requests may serve an achievement and immersive goal without belonging to official 100%. Hunting for a satchel is convenience/progression unless also fulfilling some specific confirmed checklist entry. Never relabel one target as another.

## 9. Edge-case tests (acceptance)

- **No control:** scripted mission chain -> no roam plan.
- **Unknown unlocks:** Ledger/brush/rod not reported -> no purchases, stable service or fishing guaranteed; propose checking an actual marker or use already-accessible camp/roads.
- **Ledger confirmed, tools unknown:** propose inspecting Ledger and funding choice, not donating a fictional perfect pelt.
- **Wagon task active:** urgent Mission Control switch; no treasure expedition; don't fabricate hours left.
- **Chapter exit near:** short, sourced camp/optional-side audit before irreversible gate, then mission; no full-map clearing.
- **Player changes interest:** prioritize new interest over originally featured project.
- **Spontaneous stranger:** permit diversion, replan on return rather than counting planned outing as failure.
- **All Gold cleanups done:** never invent a Gold backlog; offer progression or leisure.

## 10. Decisions requiring owner review

1. **One featured project + one outing + optional alternatives** versus a wider browseable activity board.
2. Default depth of a session (short suggestion vs prepared expedition itinerary).
3. Whether the project survives in an explicit, future *read-only projection* from campaign state or stays conversational until migration is approved.
4. How visible (not how authoritative) the four parallel completion tracks should be.
5. Whether and when a ChatGPT-native interactive interface improves the short-form proposal.

## Source links and maturity

**Design influences and campaign read-only inputs (not adopted automatically):**
- [Hub Atlas taxonomy](../systems_atlas/mechanics_taxonomy_v0_1.md) and [Chapter 2 unlock map](../systems_atlas/unlock_and_dependency_map_v0_1.md).
- [Legacy intermission design](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/intermission_design.md) — DRAFT, has complementary safety classes.
- [Legacy Chapter 2 trigger map](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/chapter_02_trigger_map.md) — RESEARCHED / REVIEW PENDING.
- [Legacy completion targets](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/completion_targets.md) — RESEARCHED / REVIEW PENDING.
- [Live authoritative state](https://github.com/L33TW0RLD/rdr2/blob/main/campaign/current_state.md).
- [Hub source authority](../protocol/source_authority.md).

**This document is a design proposal only.** No adopted Free Roam Control UI, game state or progress changes.
