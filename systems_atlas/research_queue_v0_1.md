# Systems Atlas — Research Queue v0.1

**State:** DRAFT / PRIORITIZED PROPOSAL · 2026-10-16 · No guides adopted.

## Objectives of research

The catalogue is intentionally wide, but Free Roam Control needs *decision-grade* dossiers, not 30 encyclopedias at once. Each completed dossier should resolve: what player can do **now**; how to begin naturally; why it is worth doing; what it unlocks or supplies; when it can safely wait; missable/cash/honor/Gold risks; real chapter gate; and precise sources.

## Proposed next jobs (bounded, disposable-agent-sized)

| Order | Dossier | Mechanic families | Practical product unlocked | Legacy research |
|---|---|---|---|---|
| P0-01 | **Camp economy & upgrades** | S08–S10, S17 | Spend a first dollar intelligently; Ledger, leatherworking, satchel priorities | Chapter 2 trigger map, inventory draft |
| P0-02 | **Horse ownership & care** | S06–S07 | Horse guide after Hosea; ownership, tack, riding safety | Horses brief only |
| P0-03 | **Hunting-to-crafting route** | S12–S13, S10, S16 | First clean-kill and Pearson/Trapper expedition | Hunting three research dossiers, review pending |
| P0-04 | **Camp life and timed interactions** | S11, S21, S30 | Avoid missing chapter activities without turning camp into a chore spreadsheet | Chapter 2 exit audit, review pending |
| P0-05 | **Safe item and money decisions** | S17–S20, S27 | Save/keep/sell/donate classifications; treasure vs upgrades | Inventory architecture draft |
| P1-06 | **Herbs, cooking and food** | S01–S02, S15–S16 | Short gathering/cooking outing with purposeful benefits | Broad index only |
| P1-07 | **Natural world encounters** | S21–S25 | Organic exploration by locality and story availability | Intermission prototypes, review pending |
| P1-08 | **Challenges/compendium/total completion** | S26–S29 | Passive opportunity prompts and confirmation, without grind | Completion targets, review pending |
| P1-09 | **Fishing and legendary fishing** | S14, S26–S28 | River/shore trip after normal rod unlock | Trigger map, review pending |
| P2-10 | **Combat and honor** | S04–S05, S19–S20 | Reliable nonmission combat/law rules; preserve High Honor | Combat/honor briefs only |
| P2-11 | **World collections and treasure** | S18, S23, S27 | Spoiler-controlled expeditions tied to discovered clues | Completion targets |
| P2-12 | **Later story/system unlock horizon** | S30 + relevant | Conditional chapter progression from actual player position | No future-plot default |

**Priority is design advice, not authorized sequential agent creation.** Request one bounded agent task at a time; do not launch multiple autonomous agents in the background.

## Required dossier contract

```text
TITLE / STATUS / LAST CHECKED / STORY-MODE SCOPE
A. What it is (mechanics, not a shopping list)
B. Availability: known unlocks, dependencies, unknowns
C. Player-facing first encounter / tutorial and common mistakes
D. Why it matters: immediate benefit, campaign goal category
E. Links to other Atlas systems
F. Missable, honor, story, monetary and resource risks
G. Organic 'try this next' example, not a compulsory quota
H. Evidence per claim, disputes, platform and edition notes
I. GameGuide / Free Roam handoff; cannot assert live results
J. Research status: DRAFT → REVIEW PENDING → ADOPTED (explicit approval)
```

## Free Roam Control needs structured input

Before recommending an activity, determine or mark UNKNOWN:

- Chapter/region, **current control window** (free-roam / camp / chained / unknown).
- Actual observed available markers/unlocks, inventory/cash/resources, horse condition.
- Spoiler preference, nearby interest, appetite for a short outing vs expedition.
- Time-sensitive story opportunity (especially skippable Gold) and save sensitivity.
- Goal tagging: **OFFICIAL 100% / ALL GOLD / ACHIEVEMENT / OPTIONAL EXHAUSTIVE / CONVENIENCE / IMMERSION**.
- Activity opportunity's **unlock**, **urgency**, **distance/effort**, **reward**, **risk**, **dependencies**, **evidence quality** and **revisit trigger**.

### Proposed selection behavior — for Free Roam Designer review only

1. Filter activities that are definitively locked or dangerous to current optional story access.
2. Elevate only **credible now-or-never** opportunities to immediate warnings.
3. Recommend **2–3 coherent choices**, such as camp improvement, local exploration or a hunt, not 30 simultaneous errands.
4. Describe one meaningful outcome and one mechanics lesson for each, without a strict to-do quota.
5. After the player reports results, GameGuide updates the old campaign authority; Free Roam reconsideration is based on refreshed facts, not UI ticks.
6. Allow the player to ignore the recommendation and follow a chance encounter.

This is a proposed input contract, not an approved UI or gameplay operating protocol.

## Research integrity and migration boundaries

- Do not duplicate existing `L33TW0RLD/rdr2` content verbatim or relabel it adopted. Reuse by reference and commission gap-specific verification.
- Don't write to `campaign/` or old `rdr2` from Atlas Researcher.
- No direct automatic GitHub-to-ChatGPT synchronization asserted.
- Complete one substantive, source-checked dossier before starting many hollow files.
- Later-story or rare-missable specifics can be held in non-default research with an explicit spoiler boundary.

## Immediate handoff

**Next agent lane:** Free Roam Designer, read-only against these Atlas files and existing intermission research. Design a **single flexible Chapter 2 activity-decision loop**, with alternatives rather than a prescribed intermission checklist, before writing UI code or modifying gameplay authority.

**Recommended design acceptance test:** A player with camp access but unknown Ledger, stable and fishing unlocks should get 2–3 enjoyable feasible choices *conditional on observed markers*, no invented money/loot, no spoilers, and a clear mission-first response if John's skippable wagon stage is active.
