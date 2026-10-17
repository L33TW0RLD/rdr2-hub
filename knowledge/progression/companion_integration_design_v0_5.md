# One Companion, Connected Journeys — Integration Design v0.5

**Status:** PROVISIONAL DESIGN / SYNTHETIC FUNCTION TESTED, NOT LIVE UI ACCEPTED · **Date:** 2026-10-17  
**Issue:** [#59](https://github.com/L33TW0RLD/rdr2-hub/issues/59) · **Draft:** [PR #60](https://github.com/L33TW0RLD/rdr2-hub/pull/60)

**Deliberate boundary:** This iteration adds **navigation and source-request packets**, not game telemetry, a stand-alone dashboard, a full React/web app, a persistent client or a substitute for the original GameGuide. RDR2 player data, save files and the original repository's `campaign/**` are never read or written.

## 1. What the player should experience

The four underlying layers from v0.1–v0.4 should not appear as four independent apps:

```text
                    Living Adventure Companion
          Chapter 2 • Horseshoe Overlook (fictional)
                 one contextual header + alert
                               |
          Free Roam <-----> Mission choices
             |                      |
      Develop the Camp       Pick actually observed story mission
             |                      |
        Pearson Crafting      ORIGINAL FULL Field Guide v1.1
             |                      |
       Satchel materials  <---   Mission-related mechanic question
             |                      |
       Systems Atlas / Hunting (source-linked)
             |                      |
       BACK to Pearson   or   BACK to ORIGINAL FULL Field Guide
```

**The player chooses direction.** The Companion remembers an in-chat *semantic navigation target* (not the player's in-game actions). An Atlas detour doesn't change the chosen project. A Field Guide detour **must re-read/rebuild the original A-to-final dossier** when the user returns. It must never replace the full guide with a short mission summary, nor imply checklist ticks were restored.

## 2. The three representations (never mix their authority)

| Representation | Holds | Does NOT hold |
|---|---|---|
| Navigation frame | Which panel the fictional user selected, project/track/mission ID, source-needed status, a small return stack | Completed objectives, mission Gold, owned equipment, current player cash, save data |
| Opportunity status | Source-driven eligibility and synthetic marker/risk evidence from v0.1/v0.4 | Real marker observation, guaranteed OR/AND gate, permanent missable outcome |
| Source request | **Exact owning repository and path/topic** to read before presenting a full Field Guide/Atlas lesson | The content itself, claim adoption, user-specific progress, assurance the source actually loaded |

**Example source request for an observed fictitious Uncle marker:**

```json
{
  "status": "NEEDS_EXTERNAL_SOURCE_READ",
  "contents_loaded": false,
  "owner": "ORIGINAL_GAMEGUIDE",
  "repository": "L33TW0RLD/rdr2",
  "path": "missions/chapter_02/07_polite_society_valentine_style.md",
  "protocol": "protocol/walkthrough_presentation.md",
  "render_requirement": "FULL_ORIGINAL_A_TO_FINAL_WITH_GOLD_AND_INLINE_WARNINGS",
  "medal_outcome": "UNKNOWN_NOT_READ_FROM_REAL_CAMPAIGN",
  "checklist_restored": false
}
```

This is **not yet the full guide**. The consumer must actually fetch the named file and approved presentation standard before giving actionable mission content. A source can contain historical player reports, but none of those reports enters this synthetic scene.

**Atlas request:** name the registered `Sxx` group and owning research URLs/dossier, maintain its true review status, request `quick | practical | comprehensive`, and return to the exact originating track. Do not generate unsupported controls/recipes from a tiny source pointer.

## 3. Round-trip A — Camp → Pearson → Hunting → Camp

**Context: fictional Chapter 2 opening with no camp upgrades supplied.**

```text
L0 Contextual Header
  Chapter 2 • Horseshoe Overlook                    SIMULATION ONLY

L1 Home / Story choices
  Available fictional markers: Uncle and Javier
  Project: Develop the Camp
  Optional outing: Heartlands camp orientation

   [OPEN PROJECT]          (navigation only)
         |
L2 Develop the Camp
  Economy          Ledger not unlocked in this scenario
  Facilities       Upgrade purchases unknown
  Pearson Crafting Satchel tools not yet purchased
  Camp Life        Requests/activities not automatically observed

   [OPEN PEARSON]
         |
L3 Pearson Crafting
  Satchels         Unlock conditions, tools and materials differ
  Decorations      Whole-carcass/pelt forms differ per recipe
  Next safe action: inspect Pearson's menu, don't assume crafting

   [LEARN PERFECT PELTS]
         |
L4 Systems Atlas / Hunting & Wildlife (S12)
  STATUS: RESEARCHED — REVIEW PENDING
  REQUEST: load actual D04 research dossier; give grounded mechanic lesson
  RETURN TARGET: camp.pearson

   [BACK]
         |
L3 Pearson Crafting   (same semantic focus; no new gameplay result)
```

The component selection state is ephemeral and only meaningful in the ongoing synthetic test. No promise is made that UI state survives a new ChatGPT thread.

## 4. Round-trip B — Observed Story marker → full original guide → Atlas → full guide

```text
Home → Mission Control → Pick Uncle's Polite Society marker (fictional observation)
      |
      V
SOURCE REQUEST to L33TW0RLD/rdr2/missions/chapter_02/07_polite_society_valentine_style.md
      |
Consumer fetches COMPLETE original guide + player-approved v1.1 protocol
      |
In a future live client, render ALL Gold metrics and A→final phases, critical inline warnings
      |
      V
Player asks how horse bonding works
      |
Atlas research source for S06 (fetched; no horse owned assumed)
      |
      V
"Back to Polite Society"
      |
RELOAD SAME ORIGINAL FULL GUIDE. Not a 3-line recap.
      |
Reset/reconstruct local planning UI honestly; do NOT infer mission/Gold/save progress
```

At the v0.5 stage, this pathway has a **correct reload packet and simulated stack**, but **the source-read/external render step is NOT implemented by the module and cannot be marked delivered** by these tests. The client must implement the actual fetch/re-render later.

A selected unobserved mission may be opened **only as a reference** on deliberate request. That is separate from selecting an **observed fixture marker** to begin a fictional mission.

## 5. Routing semantics and back stack

Actions are explicitly registered in [route contract](companion_route_contract_v0_5.json):

- `show_home` resets the ephemeral breadcrumb stack.
- `show_story` displays marker-observed choices without imposing operation shelf number as story sequence.
- `open_project` enters an existing project's L2 overview.
- `open_track` expands only a **direct child** of the active project/track, preventing arbitrary category jumps.
- `open_atlas` opens an actually registered Atlas family and requires a known cross-link from the project/track (or explicit user request from Home/Mission).
- `select_mission` requires a marker explicitly observed in the fictitious scenario; `open_mission_reference` is the separate unobserved historical/research path.
- `return` restores the previous semantic frame, and if that frame was a mission/Atlas request, demands source reconstruction rather than pretending the prior content persisted.

**Contract is ChatGPT-native compatible, not ChatGPT-native tested.** An eventual DIL control can request these semantic transitions through supported client actions, but no inert buttons should appear. New turns may require source recovery and should never claim stateful widget restoration without verifying it.

## 6. What the interface should display by layer

| Layer | Maximum useful content in default read | Deeper action |
|---|---|---|
| Contextual header | Known chapter, mode, selected focus, **one activated safety warning** and source truth (simulation vs real) | None |
| Mission choices | Up to three compact observed markers; more counted, uncertain candidates separate | Choose → complete original A–final guide |
| Free Roam | One featured project, one suitable optional outing | Explore project stages or start selected story |
| Project | Four Camp tracks, specific narrow status like "Ledger unknown / tools not purchased" | Open one track/feature |
| Atlas | Exact answer grounded in retrieved research, clearly labelled if review-pending | Quick / Practical / Comprehensive and return |
| Full Field Guide | ALL approved Gold tiles, phases and warnings in the original protocol | Mission-focused Atlas detour and full return |

Avoid a permanent six-column cockpit: the default screen remains lightweight, with one primary subject.

## 7. Urgency, uncertainty and safety cannot disappear when navigating

- If John's oil-wagon task is explicitly active, the safety label remains available in **Mission, project and Atlas** navigation envelopes.
- If the observed Chapter 2 exit window is active, the player can inspect camp requests, but the chapter-departure warning remains visible in the context.
- If a mission or mechanic gate is disputed, don't show "unlocked" merely from a source prerequisite; require observed fixture marker or label reference-only.
- Missing marker `!=` mission completed or lost. Full original dossier `!=` fictional medal earned. Opening a hunting lesson `!=` acquired pelt.
- Project stages can update when a new **explicit hypothetical world observation** is supplied; navigation click alone cannot advance them.

## 8. Tested artifacts and limitations

| Added file | Role |
|---|---|
| [companion_route_contract_v0_5.json](companion_route_contract_v0_5.json) | Eight semantic actions, nine source-linked Atlas crosslinks, source reload and safe return rules |
| [companion_router_v0_5.mjs](companion_router_v0_5.mjs) | `createSyntheticCompanionSession`, `navigateSyntheticCompanion`, `transitionSyntheticCompanion`, `validateCompanionRouteContract`, `verifyCompanionJourneys` |
| [companion_journeys_v0_5.json](companion_journeys_v0_5.json) | Twelve cross-view journeys, 43 navigation transitions, 16 rejected invalid-action cases |
| [prerequisite_evidence_update_v0_5.md](prerequisite_evidence_update_v0_5.md) | Independent source comparison for seven contested Chapter 2 prerequisite/expiry issues |

**Preliminary readback:** actual committed JavaScript function bodies executed in JS sandbox against exact committed JSON fixtures: **12/12 journeys (43 steps) and 16/16 rejected invalid actions**, route/source integrity PASS (18 original Chapter 2 references, eight actions, nine Atlas links). This validates **envelopes and navigation semantics only**, not actual remote document loading or a real ChatGPT-native UI.

### Explicit non-goals

No campaign authority, live game integration, save decoding, GPS, mission medal recording, invisible update of original repo, UI checkbox persistence, guaranteed background monitoring, all-chapter graph expansion, irreversible deadline timer, automatic Gold tally, Atlas acceptance/ratification or self-merge.

## 9. Future independent release gates

1. **Verify source claims for chapter prerequisites:** [dated comparative matrix](prerequisite_evidence_update_v0_5.md) does *not* resolve the conflicting Boolean gates; no hard-edge change was admitted in v0.5.
2. **Real client test:** test a clickable ChatGPT-native Home → Project → Atlas → Back flow and actual external source re-fetch. Browser/mobile interaction outcome is separate from JS simulation results.
3. **Full mission source consumption:** the consumer of `NEEDS_EXTERNAL_SOURCE_READ` must read current `rdr2/main` and approved Field Guide v1.1, not render a fabricated short walkthrough.
4. **Navigation across turns:** specify how semantic return intent is re-anchored with source validation, without assuming local toggle persistence across user messages.
5. **More realistic chapter scenarios:** cover many simultaneous markers, temporary camp offers, chapter exit and dual optional projects with faithful source-tested gate edges.
6. **Spoiler boundaries:** expose only user-selected current mission details and T0/T1 by default; do not reveal later chapter plot or mission outcomes from knowledge hierarchy.

**Review proposal:** keep the entire v0.1–v0.5 synthetic foundation together on [draft PR #60](https://github.com/L33TW0RLD/rdr2-hub/pull/60) until source and actual-client gates are reviewed. Original `L33TW0RLD/rdr2` remains untouched.
