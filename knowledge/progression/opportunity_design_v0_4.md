# RDR2 Companion v0.4 — Opportunity Lifecycle & Attention Contract

**Status:** PROVISIONAL DESIGN / SOURCE REVIEW PENDING · 2026-10-17 · [Issue #59](https://github.com/L33TW0RLD/rdr2-hub/issues/59) · [Draft PR #60](https://github.com/L33TW0RLD/rdr2-hub/pull/60)

**Safety and authority:** ALL inputs are fictional Chapter 2 scenario fixtures. No access to the player's real game, saved files, map markers, Gold results, Honor, cash, inventory or original `rdr2/campaign/**`. The only mutable output is an optional *ephemeral* presentation receipt, which records text shown in a simulation—not any action the player actually took.

## What changed: two questions, not one

- **v0.1 — Progression:** What might unlock after a named Story event?
- **v0.2 — Hierarchy:** Which system, subfeature and project owns that content?
- **v0.3 — Window planner:** When should the Companion interrupt or suggest an outing?
- **v0.4 — Opportunity lifecycle:** **What is the precise evidence-backed *status* of that opportunity, independently of whether the Companion chooses to discuss it?**

This prevents a serious UI error: if an optional marker is no longer visible, the Companion cannot silently transform "not visible right now" into "completed", "expired" or "permanently missed." Equally, if it recommended Pearson crafting but the user ignored the suggestion, the system must NOT record tools purchased or any satchel crafted.

### Three isolated sources of truth

```text
              General game rules (Hub research, not globally ratified)
                                  |
              Fictional player-world observation (SIMULATION ONLY)
                                  |
              Opportunity lifecycle classification
              /                                      \
   WORLD STATUS (eligible, observed, active,     ATTENTION (foreground,
   not currently visible, resolved, unknown)     contextual, on-demand,
              |                                 or quiet)
              |                                      ^
              |                            v0.3 planner + player intent
              |                                      |
              +-------------------------------- presentation receipt
                                                      |
                              "shown text" NEVER changes WORLD STATUS
```

An opportunity is always discoverable by its reference ID, even when it is not featured. A finished or absent opportunity may still be available for inspection, but must not become a false currently available action.

## Opportunity lifecycle states (mapped to human-readable UI)

| Raw state | User-facing language | What must NOT be inferred |
|---|---|---|
| `OBSERVED_ACCESS` | System accessible in fictional fixture | Equipment purchased, recipe crafted, completion requirement fulfilled |
| `ELIGIBLE_UNCONFIRMED` | General requirement appears met; verify marker/menu | Actual marker or purchase is currently visible |
| `NORMAL_GATE_UNMET` | Necessary ordinary-route prerequisite not yet met | All related system features are locked |
| `UNAVAILABLE_IN_FIXTURE` | Explicitly unavailable in this hypothetical snapshot | Permanent loss or universal game rule |
| `ACTIVE_RISK` | A specifically activated time-sensitive Story/chapter risk | Exact seconds/hours until expiry |
| `OFFER_OBSERVED` | Named offer or marker observed in this fictional scenario | It qualifies for a trophy or has already been accepted |
| `OFFER_NOT_VISIBLE_NOW` | Previously offered marker not currently visible | Completed, permanently expired or marked failed |
| `RESOLVED_IN_FIXTURE` | Explicit fictional mission completion supplied | Actual Gold medal earned, item owned or game save committed |
| `CHAPTER_WINDOW_PASSED_UNVERIFIED` | Chapter transition occurred; the old camp window may have passed | A specific unseen item or activity permanently lost |
| `GENERAL_WINDOW` | Suitable normal free-roam opportunity for this context | Specific observed encounter or guaranteed spawn |
| `PROJECT_MILESTONE_CONTEXT` | Project's next small step can change with fictional gates | Project objective already accomplished |
| `CONTROL_UNAVAILABLE` / `OUTSIDE_WINDOW` | No free-roam outing here | Every associated quest permanently unavailable |
| `EVIDENCE_CONFLICT` | Contradictory simulated marker, gate or completion facts | Silently choose whichever claim suits an invented linear order |
| `UNKNOWN` | No sufficiently decisive input | False, safe, urgent or available |

A missing opportunity marker and an explicitly **completed** Story stage must remain distinct. The source graph retains its existing documented prerequisite disputes (e.g. Mary's, bounty and Kieran stages); the lifecycle layer **cannot ratify** them.

## Twelve example opportunity identities

| ID | General thing to monitor in a fictional story | Owned content/source |
|---|---|---|
| `OP.C2.ARRIVAL` | First camp and Heartlands free-roam window | Hub Free Roam / existing `arrival_camp_orientation` |
| `OP.C2.LEDGER` | Camp Ledger introduction | Atlas D02 / general U02 |
| `OP.C2.PEARSON_TOOLS` | Separate Leather Working Tools purchase | Atlas D03 / general U03 |
| `OP.C2.HORSE_CARE` | Hosea horse/stable tutorial | Atlas D01 / U01 |
| `OP.C2.FENCE` | Emerald Ranch Seamus wagon Fence | Atlas U05 |
| `OP.C2.FISHING` | Normal fishing tutorial and outings | Atlas U06 |
| `OP.C2.CAMP_PROJECT` | Long-term Camp Development milestones | Existing Free Roam project |
| `OP.C2.WAGON_ACTIVE` | Active optional skippable Gold stage (oil wagon) | GameGuide + Atlas U09 |
| `OP.C2.CHAPTER_EXIT` | Evidence-backed chapter-departure safety check | GameGuide closing mission |
| `OP.C2.CAMP_ACTIVITY` | Actually observed chapter-sensitive camp activity | Atlas D05 / D08 |
| `OP.C2.MARY` | Mary's optional Honor/Gold strand; marker conditional | GameGuide optional Stage III |
| `OP.C2.BOUNTY` | Sheriff's introductory bounty marker | GameGuide Good, Honest, Snake Oil |

These are **references** to owned facts, not a competing Atlas taxonomy or a second Player Progress ledger. Source citations and claim maturity travel with each opportunity record. A reference is still provisional while research remains `REVIEW PENDING`.

## Example A — Actual evidence vs advice

```text
Fictional state: One Strauss debt returned and deposited
Game-rule projection: Ledger in ordinary unlocked route
Player observation: No Ledger UI explicitly supplied

WORLD STATUS                 ELIGIBLE_UNCONFIRMED
COMPANION ATTENTION           "The Ledger should now be relevant;
                              check the actual interface."
ALLOWED NEXT ACTION           Inspect camp upgrades
NOT ALLOWED                   "Bought tools", "Camp upgraded"
```

If the fictional Ledger menu becomes explicitly observed later, `OBSERVED_ACCESS` follows. A presentation receipt saying we already mentioned Ledger changes only whether to say that again.

## Example B — Marker disappears (the crucial correction)

```text
Moment 1: Mary's Story marker observed in fictional scenario
  WORLD STATUS: OFFER_OBSERVED
  ATTENTION: can be contextual or deliberately chosen

Moment 2: Marker explicitly absent from fictional map
  WORLD STATUS: OFFER_NOT_VISIBLE_NOW
  TRANSITION: OFFER_NO_LONGER_VISIBLE
  ATTENTION: check rather than prematurely conclude
  NOT "Permanently Missed"; NOT "Mission Completed"; NOT "Gold Achieved"

Moment 3: Fictional mission completion explicitly supplied
  WORLD STATUS: RESOLVED_IN_FIXTURE
  MEDAL STATUS: remains unestablished
```

For **Good, Honest, Snake Oil**, sources dispute how its marker behaves across chapter boundaries. Even after a hypothetical move from Horseshoe Overlook, the planner will not label this particular bounty missed without independent evidence. `An American Pastoral Scene` is not automatically Chapter-2-only either; outside this initial 12-opportunity sample, no contrary inference is permitted.

## Example C — Chapter departure and camp companions

- A **chapter-exit marker** receives the foreground, if it is actually observed in the fictional fixture.
- An **actually offered** qualifying-looking camp activity may be shown contextually, especially for achievement/exhaustive goals. This does not imply that all camp Poker qualifies.
- If the fictional chapter advances, we may say **"the old camp opportunity window may have passed"**. We cannot assert precisely which conversations, invitations or rewards were lost without explicit independently verified conditions.
- Hunting, repeatable outings and cosmetic camp upgrades remain optional; this is not a forced total-clear checklist.

## Example D — Strong risk vs optional interest

```text
Active John oil wagon job (fictional fixture)
  Foreground: Skippable Gold stage — prioritize named Mission Control
  Optional camp hunting: DEFERRED
  If the player asks about Pearson: they may inspect the research,
    but it must not replace the explicit urgent action as recommended next.

Job no longer marked active (without completing m017):
  WORLD STATUS: OFFER_NOT_VISIBLE_NOW
  No conclusion about earned Gold or whether John handled the wagon.

Named m017 marked completed in fictional scenario:
  WORLD STATUS: RESOLVED_IN_FIXTURE
  Earned Gold: still unknown.
```

No time estimate or universal auto-skip clock is invented.

## Implementation and deterministic tests

| File | Role |
|---|---|
| [opportunity_policy_v0_4.json](opportunity_policy_v0_4.json) | Twelve source-linked opportunity definitions, goal tags, selector types and lifecycle/attention rules |
| [opportunity_lifecycle_v0_4.mjs](opportunity_lifecycle_v0_4.mjs) | Pure `composeOpportunityLifecycle`, `validateOpportunityPolicy`, `verifyOpportunityLifecycleSuite`; risk-first but read-only projection |
| [opportunity_scenarios_v0_4.json](opportunity_scenarios_v0_4.json) | 32 positive synthetic lifecycle cases, seven deliberately invalid-input cases; previous/future states, optional offers and chapter crossings |

Local Node command (files only, does not contact a game):

```sh
node knowledge/progression/opportunity_lifecycle_v0_4.mjs
```

The implementation core and test runner were executed against **exact committed source files in an isolated JavaScript sandbox**: **32/32 positive**, **7/7 invalid inputs rejected**, 12-record reference and source-integrity checks passed. Running the Node command itself requires an environment containing the repository files; its execution is **not claimed** here. Previous v0.1–v0.3 fixture suites must also be rerun before declaring no regression.

## What remains for the next review cycle

1. **More precise lifecycle closure evidence:** independently resolve conflicting prerequisites and chapter/character opportunity expiry claims instead of substituting arbitrary timeouts.
2. **Multiple simultaneously interesting opportunities:** improve bounded foreground/context arbitration when a newly relevant project and an observed optional Story marker coexist.
3. **Behavioral continuity:** a user saying "later", "show me that", "forget that optional project" is *a UI/presentation preference*, not Story completion. Decide where that transient intention lives without inventing a permanent gameplay store.
4. **Cross-module handoff:** selecting a named mission still has to open the **full** original Field Guide v1.1. A system deep dive must return to its originating project/mission in a fresh source-grounded response.
5. **Presentation acceptance:** test normal Chapter 2 play sessions with synthetic observations, on desktop/mobile; component behavior not established merely by a successful JS core test.
6. **Future expansion:** chapter-specific opportunity lifecycles after camp relocation, edition gates, collection windows and side quests require their own corroborated sources; do not mass-generate unverified markers.
7. **No actual save connection** until the owner separately authorizes it.

**Review proposal:** retain this fourth design iteration inside the existing draft PR #60. It improves the *reasoning about opportunities*, not actual player telemetry.
