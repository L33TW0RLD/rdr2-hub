# Living Adventure Companion — Hierarchies and Disclosure Design v0.2

**Date:** 2026-10-17 · **Status:** PROVISIONAL DESIGN / SIMULATED TESTED, NOT OWNER-RATIFIED · **Issue:** [Hub #59](https://github.com/L33TW0RLD/rdr2-hub/issues/59) · **PR:** [draft #60](https://github.com/L33TW0RLD/rdr2-hub/pull/60).

**No game connection:** All views below use synthetic Chapter 2 fixtures, not the user's active campaign. No save file, automatic marker scan, imported inventory, Gold, Honor, money or real in-game timestamp is read/written.

## 1. Core design distinction — ownership tree ≠ progression graph

The player's experience looks hierarchical, while RDR2's actual progression is a *nonlinear dependency network*. They must be modeled separately:

- **Ownership/navigation tree**: ONE primary parent per domain or feature; helps the player navigate without duplicated definitions. Example `Camp Development → Pearson → Satchels`.
- **Typed cross-links**: one track can reference multiple systems/missions without becoming their owner. Example `Pearson Satchels EXPLAINED_BY Atlas S12 Hunting`.
- **Game-rule dependency graph**: what normally unlocks a mechanic, which mission stages can be optional/skippable, which evidenced active choices need protection. Candidate/disputed edges must NOT become hard prerequisites.
- **Transient scenario projection**: which options are observed, conditional or unknown **within one explicitly synthetic scenario**. Does not create durable player progress.
- **Presentation policy**: only the relevant portion of the graph appears at each context and depth.

Consequently **"a system is nested under a project" DOES NOT mean it is gated by completion of the project**, nor does `RELATED_TO` imply `REQUIRES`, nor does a navigation order imply Story order.

## 2. Five levels of disclosure

| Depth | Content | Screen rule | What this must never assert |
|---|---|---|---|
| **L0 Contextual header** | Scene/chapter, source class, current intent and at most ONE evidenced active warning | Small and persistent across context changes | Real GPS, current save or live unlock from fixture |
| **L1 Trailhead** | Up to THREE observed named Story marker choices, ONE project with next milestone, ONE meaningful outing, and conditional before-advance guidance | Default "let's play" surface; leave room for player agency | All mission dossiers available; forced next Operation N |
| **L2 Project overview** | Four Camp tracks or two Horse tracks, each with a small availability qualifier | Only when camp/horse project opened | That an entire system is globally locked because one upgrade is missing |
| **L3 Feature detail** | Exact prerequisite/benefit/missable rule, small optional next step, child feature links | Only one expanded track at a time; one natural return path | A recipe crafted, donation made or item in satchel from research |
| **L4 Specialist detail** | Complete approved original Field Guide v1.1 A→final or sourced Atlas mechanic lesson | Never shrink the mission guide to fit an L1 card; restore via source reload | Across-message checkbox/drawer persistence or independent gameplay proof |

**Default screen uses L0+L1, not all five levels at once.** Players need no explicit `Mission`/`Atlas`/`Free Roam` mode selection. Player intent selects the main surface. Progression rules supply relevant options to that surface.

### L1 illustrative Chapter 2 entry

```text
HORSESHOE OVERLOOK                    SYNTHETIC EXAMPLE
Free roam • Before first Chapter 2 Story mission

STORY CHOICES
  Uncle — Polite Society               (marker in this fixture)
  Javier — Americans at Rest           (marker in this fixture)
  "What else might open?"               (explicitly uncertain research)

OUR PROJECT
  Develop the Camp
  Next: explore donation/Pearson facilities, NOT buy unavailable upgrades

A GOOD OUTING
  Local Heartlands reconnaissance; encounter/animal mechanics optional

BEFORE ADVANCING     Check any actual brief camp opportunity
CAN WAIT             Ledger, tools, fast travel and fishing introductions

     [Choose mission]   [Open camp project]   [Learn hunting]
```

This screen is a **mock output**, not a live ChatGPT widget verification. The eventual controls must be real ChatGPT-native interactions or ordinary conversational replies, never inert buttons.

## 3. Camp Development — project hierarchy

```text
PROJECT: DEVELOP THE CAMP  (FR.PROJECT.CAMP, optional)
│
├── CAMP ECONOMY  (Atlas S08/S09)
│   ├── Contributions & Debt Returns
│   └── Camp Ledger
│       └── normal unlock: one eligible Strauss debt returned AND deposited
│
├── FACILITIES & TRAVEL  (Atlas S08/S09)
│   ├── Provisions / supplies
│   └── Lodging and conditional fast travel
│       └── ledger + actual lodging purchases; never inferred from visibility
│
├── PEARSON CRAFTING  (Atlas S10, S12 cross-link)
│   ├── Satchels
│   │   └── tools purchase + specific task + exact perfect materials
│   └── Decorative camp crafts
│       └── per-item material rules; some require whole intact carcass
│
└── CAMP LIFE & REQUESTS  (Atlas S11)
    ├── Qualifying camp companion activities
    │   └── marker/offer and achievement applicability must be observed
    └── Item requests and transient conversations
        └── person/time/chapter-dependent; do not invent an offer
```

**Crucial UI nuance:** `Camp Economy: Ledger not yet unlocked` means the **Ledger facet** is blocked; it does not mean donation itself is unavailable. `Pearson: Tools not purchased` refers to the **satchel crafting path**, not all Pearson donation, cooking or decorative functions. The track preview must use specific nouns, not falsely label the entire track LOCKED.

**This is not four mandatory quest chains.** One overarching project can tie together compatible missions and outings, while systems with separate ownership remain discoverable through Atlas. There is no hidden player project score.

### L2 example after one qualifying Strauss debt deposit

```text
PROJECT: DEVELOP THE CAMP              SYNTHETIC
Progress context: LEDGER GATE REACHED (fixture only)

Economy             Ledger observed in fixture        [Inspect]
Facilities          Lodging upgrades unconfirmed      [Inspect]
Pearson Crafting    Satchel tools not purchased       [Inspect]
Camp Life           Actual invitations unknown        [Check camp]

Suggested: inspect Ledger options/prices.
Story remains a legitimate alternative; nothing above forces a purchase.
```

### L3 example after fictitious Leather Working Tools purchase

```text
DEVELOP THE CAMP / PEARSON CRAFTING      SYNTHETIC
Tools: purchased in this fixture. Satchels owned: UNKNOWN.

Satchels             Select one recipe, verify exact unlock and 3 materials
Camp decorations     Inspect per-item requirements; carcass ≠ pelt

  Learn: clean kills, recipient routing, protected unique resources (Atlas)
  Next: one targeted outing if player wants it
  Back: Camp Development
```

The L3 source link into Atlas displays researched material with its actual maturity label, not an unearned `ADOPTED` badge.

## 4. Progression windows and decision priority

**An intermission belongs at an event-driven opportunity boundary, not after every numbered mission.** In the current prototype:

| Fictional change | Mission surface | Camp/Free Roam effect | System surface |
|---|---|---|---|
| Eastward Bound complete, Chapter 2 opens | Several possible named markers; fixture observes which | Camp orientation + optional Heartlands outing | Camp basics; Ledger not assumed |
| One opening Story mission | Recheck observed markers, do not force a second | Brief camp refresh if relevant | Possible new Story/tutorial unlock candidates, explicitly conditional |
| One qualifying Strauss debt returned and deposited | Story choices unchanged unless separately observed | Ledger facilities become useful, one optional upgrade priority | Camp Ledger normal rule; no tools purchase inferred |
| Hosea bear tutorial completed | Other Story choices coexist | Horse-care outing/hunting skill path available as optional | Normal stable/brush introduction |
| Leather Working Tools purchased | No automatic Story advancement | Per-satchel milestones and targeted hunt | Craft recipe/weapon/carriage rules from S10/S12 |
| John's specific oil-wagon task **active** | Prioritize named skippable medal stage | **Hide leisurely outing**, retain project breadcrumb | Short tactical rule only; no invented skip timer |
| Actual Chapter 2 exit marker | Present selected full closing mission on request | **Before-advance audit first**, not compulsory all-world grind | Chapter-specific camp-window details on demand |

**Priority order:** confirmed active time-limited Gold/irreversible trigger → known exit risk → actually observed camp invitation/request → explicit player intent → optional project usefulness/novelty. **Unknown** is not "safe" and not "urgent"; offer a minimal, honest observation check.

## 5. Typed relationships vs. mistaken linear workflow

The committed hierarchy lists **29 navigation nodes** and **12 typed cross-links**. It links exact family IDs without claiming that the proposed Sxx.Mnn leaves are ratified:

- `OPENS_SELECTED_REFERENCE`: selected Story marker → original full GameGuide dossier (not a Hub copy).
- `ENABLES_OPTIONAL_PATH`: Ledger → lodging or tools purchasing *opportunity* (not "purchased").
- `EXPLAINED_BY`: Pearson crafting → Atlas hunting/recipes.
- `CAN_ROUTE_TO` / `CAN_RETURN_TO`: navigation between Story and Free Roam, subject to real control.
- `MAY_ADVANCE_PROJECT`: hunting outing → potential material contribution **only with explicit game result**.
- `BEFORE_EXIT_ADVICE`: an actually observed chapter-sensitive camp activity before a real exit marker.

Hard Story/game gates still belong to the Chapter 2 progression graph and its evidence. A relationship is never quietly upgraded from `EXPLAINED_BY` into `REQUIRES`.

## 6. Implemented read-side projection

- `hierarchy_v0_2.json` is the one-parent navigation and typed-relationships definition.
- `view_model_v0_2.mjs` reads **only passed-in** JSON data and synthetic scenario facts; exports `composeProgressionView`, `validateProgressionHierarchy`, `verifyHierarchyScenarioSuite`.
- `hierarchy_scenarios_v0_2.json` holds **16 fixture-driven acceptance cases** referencing the initial Chapter 2 scenario set.
- No client app, saved-game watcher, periodic automation, campaign-reader or write adapter has been implemented.

**Readback test result, 2026-10-17:** executed the **actual committed JavaScript evaluator and view composer cores** inside a JavaScript sandbox against the committed JSON fixtures. **16/16 view/hierarchy cases passed**, integrity checks PASS for 29 nodes, 12 relationships, four Camp tracks and source/capability pointers. This is a deterministic **JS runtime simulation**, **not** an independently executed Node CLI, game test, user-session report or production UI signoff.

### Negative examples already tested

- Only an observed marker appears as an available story choice; a researched candidate is not a live marker.
- If four markers are hypothetically observed, only the first three fit L1, with one more clearly counted (no silent discard).
- When no chapter control is evidenced, there is no falsely available outing.
- When a Story mission is chained, no leisure project receives the headline slot.
- When John's exact oil-wagon obligation is active, optional outing and project are suppressed.
- A chapter exit takes priority over an old generic arrival option.
- Contradictory marker vs presumed necessary requirement is exposed as a conflict.
- Pearson tools purchased in fixture **does not** imply one satchel created or one pelt donated.
- An optional camp activity warning appears only after the fictional scenario *explicitly supplies* that offer.

## 7. Design issues for the next iteration

1. **Full prerequisite accuracy is not solved.** Earlier [source dispute register](research_gaps_v0_1.md) identifies contested Chapter 2 Story edges; fix before stating a mission is unlocked from completion history alone.
2. **Window planner:** the six current generic opportunities overlap; implement per-event priority/cooldown/expiry and avoid recommending "arrival camp orientation" after chapter departure.
3. **Subproject detail:** available features inside Camp Life and Facilities require richer gates; a top-level reference card is not the same as a fully tested crafts/achievement contract.
4. **Goal-specific planning:** distinguish official 100%, personal 104 Gold, separate achievements and optional exhaustive collection, with optional user preference, without imposing maximum completion as mandatory.
5. **Source reconciliation:** current Hub mission adapter and manifest have historical "Chapter 1–2 only" language; do not use these stale snapshots to truncate the now-integrated 104 Gold identity library.
6. **UX:** do one real client walk-through only **using fictional scenarios** for L1→L2→L3→Atlas→return and chosen mission→full Field Guide v1.1. Check mobile readability, link/tap actions, warnings and fallback.
7. **Future chapters:** establish reusable graph templates for non-Chapter-2 camp changes, Story forks and activity windows before mass-generating more files.

**Current decision proposal:** Keep the v0.2 hierarchy **inside draft PR #60**. Do not merge or ratify before reviewing the hierarchy/priority rules and source disputes. User game state remains disconnected.
