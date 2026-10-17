# RDR2 Hub — UX Scenarios & Paper Validation v0.1

**Status:** DRAFT / DESK SIMULATION ONLY · 2026-10-16 · Agent 001  
**Sources checked:** `rdr2` authoritative Chapter 2 state (as of 2026-10-16), approved Field Guide v1.1, Hub Free Roam decision model, Atlas dependency map.  
**Explicit limit:** No real ChatGPT interactive widget, mobile/desktop rendering, gameplay automation or persisted UI state was tested. All proposed transitions are **paper assertions**.

## Fixed test fixture, not live state

- **Recorded chapter:** Chapter 2, Horseshoe Overlook.
- **Recorded Gold:** 9/104 Gold; 9/9 played eligible missions Gold; no replay backlog among played missions.
- **Latest reported save:** after Operation 005 replay; no new save reported with Operation 021 screenshot.
- **Last story evidence:** Operation 021 Good, Honest, Snake Oil screenshot-verified Gold.
- **Unknown:** Arthur's current map location and whether controllable; active yellow/white markers; Ledger, stable/brush, fishing rod, cash/horse details, current open-world project; Jimmy Brooks' Pen not individually verified.
- **Prepared but NOT played:** Operation 009 Hosea bear expedition and other Chapter 2 candidate guides. Prepared shelf ID ≠ fixed order ≠ unlocked marker.
- **No known active wagon stage:** only a conditional research warning if `Pouring Forth Oil` wagon request is actually triggered.

Every scenario below is hypothetical and should be re-run against the **newest** original repository state before a live game response.

## Scenario 01 — "Let's play."

**Input:** Player returns without any more information.  
**Router:** `start → contextual_trailhead` (open intent; no presumption of a live mission).
**Reads:** `rdr2/campaign/current_state.md`; ledger only if needed to render 9/104; Hub decision model for feasible categories.
**Output example:** "Chapter 2; 9/104 Gold; no cleanup outstanding. Current post-replay position and map markers unreported. Explore camp/Heartlands *if controllable*, check Strauss/ledger path, or choose an actual mission marker. Want a specific mechanic? Ask directly."
**Navigation:** Player can say "Explore", "Let's do Hosea", "Camp upgrades", "Horses", "Show progress" without another menu.
**Authority & recovery:** Gold from original repo; no fake activity selection persistence. Ask "Is Arthur back in free roam?" only if choosing a route that requires control.
**Paper result:** PASS — context compact, options gated, no false saved-game or marker claims.

## Scenario 02 — "Let's do the next mission."

**Input:** Player wants Story, does not name an in-game marker.
**Router:** `start/roam → mission_candidate_selector → Mission Control`.
**Reads:** Current campaign state; `rdr2/missions/README.md` medal eligibility map; `missions/chapter_02/README.md` candidates; actual user-observed markers; approved `protocol/mission_preflight.md` and Field Guide v1.1.
**Output example:** "Several Chapter 2 guides are prepared, but that's not proof those missions are available. Which yellow marker do you currently see? Hosea's bear trip is one prepared candidate if its marker appears." If the actual marker is already reported, **skip the question** and open that guide.
**Navigation:** On selected/available mission, render **full A→final v1.1** with Gold metrics and optional phase Intel. On return, don't force a Free Roam detour if another mission is chained.
**Authority:** An opened guide does not mark mission started or Gold earned. Mission preflight owns Gold/one-off risk.
**Paper result:** PASS — no forced numerical Operation 009; one useful unknown only when necessary.

## Scenario 03 — Return after a Gold mission, wants to roam

**Input:** "Got Gold on [named mission]. I'm done with missions for now." Hypothetically Arthur has regained control.
**Router:** `Mission Control report → GameGuide evidence review → Free Roam`.
**Reads:** Mission preflight and ledger; current report separately for medal, collected items and save; after authorized GameGuide update/readback, current state; Atlas unlock gates if mission newly opened something.
**Output example:** "Gold reported for [mission]; save slot **not supplied**. Now that Arthur is back in free roam, would you rather continue the camp project or take a small outing?" If save not possible, avoid falsely telling the player it has been protected.
**Navigation:** Enter project/outings; can switch to the next story marker at any time.
**Authority:** Gold is first *player-reported*; actual persistence only after accepted write/readback. A gold report cannot automatically imply horse, map, money or inventory changes.
**Paper result:** PASS — distinct medal and save statuses, free roam only after control confirmation.

## Scenario 04 — "Let's build up the camp."

**Input:** Direct interest in upgrading camp; Ledger status unknown.
**Router:** `any → Free Roam PROJECT / camp`.
**Reads:** General Ledger/tool dependencies from Atlas/legacy Chapter 2 research; canonical reported Strauss/debt/owned-tools/cash state.
**Output example:** "Goal: build more useful camp facilities and eventually satchels. First, check whether Strauss' debt work and the camp Ledger are available. Leather Working Tools require their own purchase; I won't assume the Ledger or $225 are already in your wallet."
**Navigation:** "Explain Ledger" opens Atlas Practical; "I see the Ledger" returns to camp project with actual observed menu; "Ride out instead" goes to Outing.
**Authority:** No new upgrade/cash/collection flagged completed without report and GameGuide confirmation. This is a proposed project, not stored in an independent Hub project ledger.
**Paper result:** PASS — exact feasibility gate and single milestone, no mandatory grind.

## Scenario 05 — "What is a three-star pelt, and which gun?"

**Input:** Mechanic question during a hunting outing.
**Router:** `Free Roam outing → Atlas Quick/Practical → Free Roam outing`.
**Reads:** Current available hunting research and its adoption status (legacy research remains **RESEARCHED — REVIEW PENDING**), requested species if weapon answer depends on it; optional Atlas taxonomy alias.
**Output example:** "Animal stars describe initial quality; a clean kill with the species-appropriate weapon is required to preserve a perfect pelt. The weapon depends on species; which animal did you find?" Provide a specific source-backed weapon only if species and evidence permit.
**Navigation:** "Show full perfect-pelt guide" deepens Atlas; "Back to our hunt" reconstructs outing goal.
**Authority:** Studying or explaining an animal does not credit Compendium, pelt, donation, satchel, camp upgrade or XP.
**Paper result:** PASS — direct answer first, one essential fact only for exact weapon.

## Scenario 06 — Switch interests midway through an outing

**Input:** "Forget hunting; I want to find treasure."
**Router:** `Free Roam outing → Free Roam outing (new intent)`; project may be paused conceptually.
**Reads:** Whether any treasure map is actually held (unknown until reported); real chapter location; credible immediate story risk.
**Output example:** "We can switch. If you have a map, we can follow its clues without revealing the solution. Otherwise we can explore for a lead. The hunting outing wasn't failed and we don't need a checklist cleanup."
**Navigation:** "Help interpret this map" → Atlas/World clue explanation; "Back to camp project" → Free Roam Project.
**Authority:** No discovered location, acquired treasure, cash sale or saved route is invented. No durable project focus promised.
**Paper result:** PASS — flexible and spoiler-aware.

## Scenario 07 — Time-sensitive opportunity appears

**Input:** *Hypothetical new report* "John asked me to bring the oil wagon; the delivery task is active."
**Router:** `Free Roam → conditional safety gate → Mission Control`.
**Reads:** Player-observed task and Chapter 2 story guide; original `rdr2` `Pouring Forth Oil` mission guide and preflight; Atlas unlock map is supplementary.
**Output example:** "Gold-critical optional wagon-delivery step is active. It can be skipped if delayed; sources disagree on exact timeout. Don't start a treasure expedition now. Open the relevant complete mission briefing."
**Navigation:** Direct to full Mission Control A→final (not an invented five-point mini-guide). On completed/report return to prior free-roam interest if controllable.
**Authority:** Hypothetical task is NOT currently recorded active; alert appears only once player actually reports relevant gate. No exact hours-left timer.
**Paper result:** PASS — credible urgency displaces leisure without false activation.

## Scenario 08 — "Give me the thorough horse guide."

**Input:** Comprehensive mechanic request, no commitment to begin Hosea's mission.
**Router:** `any → Atlas Comprehensive`, saving semantic previous context if present.
**Reads:** Atlas horse family/aliases from Agent 002 **when available**, otherwise current read-only research; legacy horse research brief has NOT STARTED status, so gaps must remain explicitly unresearched.
**Output example:** Organized sections for ownership/temporary horses, bonding/care, breed and equipment differences, stables, cargo/revival risks, relevant unlocks, sources and unresolved cases. Distinguish **general mechanic explanation** from unverified stable/brush availability in player's save.
**Navigation:** "Compare saddle options", "Try a local horse-bonding outing", "Back to my mission".
**Authority:** The guide is not a horse purchase, new bond level or available stable marker. Missing research must be labelled rather than fabricated.
**Paper result:** PASS for routing and presentation contract; substantive horse-guide fact-checking remains a separate research task.

## Scenario 09 — "Browse all mechanics."

**Input:** User wants discovery of system knowledge, not a selected activity.
**Router:** `any → Atlas Browse`.
**Reads:** Current published Atlas index and categories **through an adapter**; wait for Agent 002's actual schema, don't hardwire S01–S30 as permanent UI. Current v0.1 family list can act as a temporary textual fallback.
**Output example:** Small grouped catalogue such as "Arthur & survival", "Horses & travel", "Camp", "Wilderness", "Money", "World", "Completion" with a short per-group description. Show actual research statuses and search.
**Navigation:** "Camp mechanics", "Hunting guide", "Back to exploration"; direct mechanics questions bypass browsing.
**Authority:** Reading Atlas never starts a quest, unlocks a mechanic or marks a Compendium entry.
**Paper result:** PASS — browse is opt-in, nonspoiler, schema-agnostic.

## Scenario 10 — New ChatGPT thread several days later

**Input:** "Let's play again. Where were we?"
**Router:** `new-thread recover → canonical read → contextual trailhead`.
**Reads:** **Latest** `rdr2/campaign/current_state.md`; mission ledger, save and missable records only as needed; current Hub design/Atlas index; no assumption that prior UI controls or conversations survived. The 2026-10-16 9/104 snapshot is historical if main later changes.
**Output example:** "Here is the campaign state *as currently recorded* [chapter / medals / save evidence]. I can resume Story, a new outing, or a camp project. Your last unsaved ChatGPT drawer selections/possible outing focus aren't authoritative." If no active project is recorded, offer one suggested based on current unlocks rather than assert that an old project persisted.
**Navigation:** Any direct next request routes immediately to the appropriate module; return from Atlas remains by explicit meaning, not browser-history assumption.
**Authority:** A temporary checkbox/selection from prior thread is never backfilled into original `rdr2`. If GitHub is unavailable, explicitly say current state cannot be verified and give provisional choices only.
**Paper result:** PASS — conditional recovery with explicit staleness behavior; needs **actual multi-thread** test.

## Cross-scenario integrity matrix

| Invariant | Checked scenarios | Paper status |
|---|---|---|
| Intent routes without mandatory menu | 01, 02, 04, 05, 08, 09 | PASS by design |
| No confirmed player control invented | 01, 02, 03, 07, 10 | PASS by design |
| Project/Outing/Discovery isn't a rigid checklist | 01, 04, 06, 09 | PASS by design |
| No false Gold, save, inventory or unlock reports | 01–10 | PASS by design |
| Mission Control v1.1 remains whole | 02, 03, 07 | PASS by design |
| Atlas availability & adoption handled honestly | 04, 05, 08, 09 | PASS by design |
| Time-sensitive story risk overrides leisure when active | 07 | PASS by design |
| Existing `rdr2` remains canonical and unmodified | 01–10 | PASS by design |
| Cross-thread restoration does not assume widget state | 10 | PASS by design |
| Real user clicks, mobile layout and GitHub-write success | none | **NOT TESTED** |

## Failure-mode probes for future interactive testing

1. **Broken/unavailable GitHub:** no source read; does the response reveal stale confidence and refrain from writes?
2. **Conflicting live report:** last repo says no rod; player shows rod in inventory; does Atlas explain mechanics while GameGuide records separately?
3. **Ambiguous 'next' after active mission:** can router distinguish next phase vs next mission without inventing progress?
4. **Atlas source lacks adoption:** can comprehensive guide avoid calling researched-but-unapproved evidence "approved"?
5. **Complex Mission v1.1 Android rendering:** when returning from an Atlas question, do all phases and independently expandable Intel remain usable?
6. **Repeated button press / submission failure:** no duplicate GitHub record or fake "saved" confirmation.
7. **High Honor tension:** robbery tutorial is available but must not become default recommendation for income.
8. **New main after Agent 002 merges separately:** alias changes should preserve user-facing topic lookup.

## Outcome and stop rule

**All ten scenarios are covered in documentation and pass the conceptual navigation/authority criteria.** This is not empirical usability evidence. No interface was deployed, no player input was simulated as a verified in-game result, and no canonical gameplay files were changed.

**Next validation milestone:** owner selects/edits the interface concept, then a bounded **ChatGPT-native prototype** is tested with actual controls on mobile and desktop and cross-thread recovery. Keep any implementation on a new isolated branch and preserve the GameGuide v1.1 source contract.

**References:** [Hub experience](../architecture/hub_experience_v0_1.md) · [Integration](../architecture/module_integration_v0_1.md) · [Navigation](../architecture/navigation_and_state_flow_v0_1.md) · [ChatGPT interface spec](chatgpt_interface_spec_v0_1.md) · [Canonical campaign state](https://github.com/L33TW0RLD/rdr2/blob/main/campaign/current_state.md).
