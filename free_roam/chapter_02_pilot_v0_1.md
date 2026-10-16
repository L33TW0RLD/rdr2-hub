# Free Roam Control — Chapter 2 Paper Pilot v0.1

**Status:** DRAFT / DESIGN SIMULATION — NOT A LIVE SESSION, NO PLAYER OUTCOMES  
**Task:** Free Roam Designer 001 · **Date:** 2026-10-16  
**Use:** Evaluate decision quality, pacing and gating against the real Chapter 2 authority before implementing an interactive UI.

## A. Starting evidence: distinguish known and unknown

**Read-only legacy snapshot (2026-10-16):**
- **Known:** Chapter 2 / Horseshoe Overlook reached. High Honor, all Gold and official 100% are campaign goals.
- **Known:** Nine played medal-eligible Story entries, all nine have Gold, including screenshot-confirmed Operation 021 bounty Gold. No Gold replays pending among played entries.
- **Known:** Most recent *reported* save after replaying Operation 005. No post-021 save report.
- **Known:** Jimmy Brooks saved; unique Pen possession still unverified.
- **Unknown:** Arthur's current physical location/control state after bounty replay and map markers.
- **Unknown:** Camp Ledger/debt status, actual cash, Pearson tools, horse/stable brush, fishing rod, Fence access, current item requests or companion markers.
- **Unknown:** Current save slot, replay persistence details and any new unreported discoveries.

[Canonical live state](https://github.com/L33TW0RLD/rdr2/blob/main/campaign/current_state.md) supersedes this dated snapshot. The pilot MUST NOT silently transform research assumptions into progress.

## B. The first response should be conditional, not a false itinerary

### Proposed default player-facing presentation

> **FREE ROAM CONTROL · CHAPTER 2**
>
> **Campaign:** 9/104 Gold · no played-mission replay backlog.  
> **First checkpoint:** Are you currently free to ride around, or still in a replay/mission screen? Your location and active map markers aren't in the latest report.
>
> **PROJECT CANDIDATE — Build a more capable camp**  
> Start by checking whether Strauss' debt task and the camp Ledger are actually available. A returned debt unlocks camp upgrades; Leather Working Tools require a separate purchase. No wallet or upgrade status assumed.
>
> **TODAY'S OUTING — Camp and Heartlands orientation**  
> If Arthur has control, spend a little time around Horseshoe Overlook, talk to people who are actually present, and ride through the nearby countryside. Notice one interesting animal, person or place; no mandatory collection quota.
>
> **ALTERNATIVES:** Visit Valentine for town life and side opportunities; or look for an available Hosea mission to unlock useful horse systems. Check real markers before opening a mission guide.
>
> **WATCH:** The Chapter 2 camp has temporary opportunities; respond to any *actual* visible companion activity, letter or active time-sensitive story commitment. If John's oil-wagon request is already active, stop roaming and use Mission Control.
>
> **REPORT AS YOU GO:** What new marker, conversation, discovery or unlock did you actually see? We only record what you confirm.

**Important:** This block is a design example, not current authorised orders, and not proof of any unlock or location.

## C. Worked branching paths (paper simulations)

### Scenario 1 — Player confirms controllable Arthur at Horseshoe Overlook

- Window changes UNKNOWN -> FREE_ROAM.
- Short camp check: interact with actual people and map. No pre-emptive "do all chores" order.
- Featured project can be **camp development** *if player likes it*; first step is inspect real Strauss/ledger availability.
- Outing remains **nearby exploration**, with emergent nature discoveries welcome.
- If Arthur meets a random stranger, pause the planned outing; the encounter is a valid successful session.
- Exit on player interest, new game unlock, urgent marker or return to story; do not issue a timed forced check-in.

### Scenario 2 — Player sees Strauss marker, no Ledger yet

- Recommend the available Strauss mission/first-debt strand as **an enabler**, *not* as proof of completed debt or owned Ledger.
- A mission requiring the full Field Guide is routed to Mission Control, not reconstructed by Free Roam Control.
- On return, **ask what actually happened**: debt recovered/deposited? Ledger menu now visible?
- Only after player verifies Ledger can project switch to inspecting real upgrade price and potential Pearson Leather Working Tools.
- If the player would rather explore first, allow it unless a concrete expiring risk overrides.

### Scenario 3 — Player has Ledger and enough reported resources

- Project milestone: inspect upgrade menu, compare Leather Working Tools versus other chosen upgrades, and only quote cost from corroborated evidence/current menu.
- If the tools are bought and a recipe chosen, identify **one** actual satchel recipe's needed species/materials.
- Outing: local hunting route that can teach study → 3-star check → correct weapon → clean kill → actual donation routing.
- No automatic claim of pelt collection, donation, crafted satchel, cash spent or total-completion progress.

### Scenario 4 — Player wants treasure, not camp improvements

- Suspend camp project without penalty.
- Outing: investigate a **discovered** treasure map or search organically for a map lead. Do not give hidden treasure locations by default.
- Clarify that map possession / hypothetical gold bars ≠ money in wallet.
- Return to the project when player voluntarily wants it; no nagging.

### Scenario 5 — Player discovers a stranger while doing an outing

- Response: acknowledge the unplanned experience and explain any *immediate* choice consequences where known.
- Allow diversion; ask outcome afterward only if the player wants a record.
- Never mark the originally recommended outing failed or claim a Stranger mission complete without report.

### Scenario 6 — John oil-wagon stage is currently ACTIVE (risk)

- Switch from proposed Free Roam to **Mission Control** immediately.
- Reason: skippable Gold-eligible wagon delivery if delayed after John's request. Exact expiration time disputed; no countdown or made-up deadline.
- Camp tasks, hunting and treasure recommendations defer until the stage has been handled.
- This is a **conditional safety test**; there is no evidence the player has activated John's strand now.

### Scenario 7 — No free-roam control / chaining

- Do not show an invented full-world plan.
- Use the actual current mission or game screen to continue Mission Control.
- Free Roam resumes only when Arthur regains control.

### Scenario 8 — Player reports a Gold medal but no save

- GameGuide may update Gold only from accepted report/evidence.
- Mark save as **unknown**, not completed; advise checking saving at a real eligible opportunity.
- Neither checkbox completion nor a local draft creates an earned Gold record.

## D. Acceptance test matrix

| Test | Stimulus | Required result | Paper evaluation |
|---|---|---|---|
| T01 | Snapshot has no current location after replay | No invented free-roam window; ask one relevant observation, keep alternatives conditional | PASS in proposed copy |
| T02 | Stable/rod/Ledger not confirmed | No ownership claims, purchases or guaranteed fishing outing | PASS |
| T03 | Player wants camp development | Build a gate-aware 1-step project, not 20-pelt grind | PASS |
| T04 | Player wants spontaneous adventure | Let interest override project and preserve surprise | PASS |
| T05 | Encounter interrupts travel | Replan without 'failed checklist' judgment | PASS |
| T06 | Oil-wagon Gold stage confirmed active | Mission Control takes precedence; no invented timer | PASS |
| T07 | Chapter exit imminent | Specific pre-exit audit; no full-map mandatory sweep | PASS by design, **not yet field-tested** |
| T08 | Medal/save/items reported separately | Keep evidence status separately; never auto-credit | PASS by design |
| T09 | Player asks for next story immediately | Allow next actual marker if safe; no forced intermission | PASS |
| T10 | Unresearched camp request appears | Record observed offer; don't invent its reward/expiry | PASS |

**All PASS outcomes above are desk checks of proposed rules, not gameplay validation or proof that the ChatGPT UI behaves accordingly.**

## E. One focused design question for owner testing

Does this format make free roam feel *supported but self-directed*?

- Good: a **project** provides continuity, an **outing** gives a direction, and **discovery** stays unscripted.
- Bad: the player feels obliged to complete both the project and outing before any story mission.
- Bad: Free Roam writes an independent mission/save/inventory ledger.
- Bad: the response is longer than the activity and becomes an encyclopaedia.
- Bad: unconfirmed mechanics are treated as already available.

## F. Non-goals and next action

No native app, no automatic gameplay telemetry, no persistent ChatGPT checkbox assertions, no changes to the original mission system, and no future plot spoilers.

**Recommended next step:** owner reviews this paper pilot and living-plan structure. After acceptance, Architecture Auditor or ChatGPT UI designer specifies the minimal interactive *ChatGPT-only* presentation and confirms the source-of-truth read contract. Do not ratify or implement a permanent state-sync system from this proposal.

**References:** [decision model](decision_model_v0_1.md); [Atlas unlock map](../systems_atlas/unlock_and_dependency_map_v0_1.md); [legacy trigger map](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/chapter_02_trigger_map.md); [legacy intermission framework](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/intermission_design.md); [source authority](../protocol/source_authority.md).
