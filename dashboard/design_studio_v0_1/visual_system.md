# RDR2 Field Desk — Visual System v0.1

**Status:** DESIGN PROPOSAL / PROTOTYPE, NOT RATIFIED  
**Issue:** [#61](https://github.com/L33TW0RLD/rdr2-hub/issues/61) · **Base:** Hub `main` at `ee18b0842ac1f2a3b472b7580e295536da4c2c8f`  
**Medium:** ChatGPT-native layouts and functioning controls. Not an external website, desktop overlay or persistent application.

## 1. Visual direction

**Working name: The Field Desk.** It should feel like Arthur's notebook meeting a clear modern mission dashboard, not an antique saloon-themed skin or an analytics cockpit. Beautiful because *hierarchy is legible*, choices are coherent, and nothing crowds out the next action.

- **Tone:** restrained frontier editorial, clean open space, narrow use of imagery, readable neutral text, strong section titles, fine dividers.
- **Material:** use native ChatGPT surfaces and system typography. No faux leather, huge background illustrations, ornamental borders, misleading period maps, invented live red badges or packed financial-style KPIs.
- **Priority:** one main focal point per response. Secondary options compact and visible but not competitive.
- **Character:** a small recurring contextual header; iconography for navigation categories (book, compass, bag, atlas), never as the only label; dossier-style phase rail only in Mission Control.
- **Text, not image, for truth:** chapter, source maturity, specific availability and Gold deadlines are always real text accessible to screen readers.
- **Imagery:** optional single spoiler-safe, scene-matching illustration ONLY if trustworthy and genuinely useful. Text layout must survive without imagery.

## 2. Design tokens as behavior, not magic CSS

Use semantic token names compatible with actual available native UI:

| Role | Native pattern | Meaning |
|---|---|---|
| Primary panel | standard surface, readable heading and body | Current task |
| Secondary information | subtle `surface-secondary` + smaller body | Context, reason, source |
| Group edge | light `border` + radius | Separate one actionable destination |
| Divider | subtle grey | Hierarchy break, not decoration |
| Interactive destination | entire pressable labelled row/card | Genuine view change or user-turn submission |
| Selected navigation | contrasting subtle background + emphasized label | Local focus, not mission completion |
| Safety risk | alert icon and direct action text | Evidence-backed active irreversible event ONLY |
| Confirmed gameplay result | truthful provenance from original GameGuide | Never inferred from a checkbox |
| Source status | plain `Research pending / Confirmed by GameGuide / Fictional fixture` | Avoid deceptive `LIVE` badge |
| Depth | L0–L4 information disclosure | Don't put all content at L1 |

Approximate density targets (heuristics, not pixel guarantees):
- L0 header: 2 compact lines plus one optional evidence-backed warning; no fake current GPS.
- L1 Home: main next choice + two compact meaningful alternatives, one contextual project/outing; short enough to scan without a full-screen scroll.
- L2 Project: 3–5 clearly titled related tracks, status per *specific capability* (e.g. `Satchel tools unconfirmed`, not `Pearson locked`).
- L3 Atlas: quick rule first, then practical and optional comprehensive depth.
- L4 Mission: **full original Field Guide v1.1** Gold metrics + chronological A–final phases + all critical inline warnings + expandable Intel; intentionally longer, because accuracy outranks dashboard compactness.

## 3. Primary navigation

Visible main destinations should be discoverable **without making them mandatory**:

```text
RDR2  /  THE FIELD DESK              CHAPTER 2 · FICTIONAL REHEARSAL
Horseshoe Overlook                   Exact live position: NOT CONNECTED

[ Home ]   [ Story ]   [ Adventure ]   [ Atlas ]

HOME — What deserves your attention?
-------------------------------------------------------
FEATURED    Develop the Camp
            Why it matters · one next meaningful step       [Open]
STORY       Uncle · Javier — two *observed fictional* options
OUTING      Explore the Heartlands (conditional)
QUESTION    "How do perfect pelts work?" → directly open Atlas
-------------------------------------------------------
Source: fictional scenario • only your reported/gameguide facts count
```

The four destinations are **wayfinding**, not four always-visible dashboards. ChatGPT conversational intent must route directly to the asked feature: `"I want to hunt"` should show Hunting, not a Home-first instruction.

**Avoid a compulsory carousel of cards.** A full mission guide is a different content mode, not a reduced card inside Home. Within a mission, keep an obvious `Back to Story` or return-to-origin action.

## 4. Structural anatomy

1. **Identity + truthful header:** RDR2 / Field Desk, chapter/camp only if source or fixture actually supplies it, a short origin line (`SIMULATION` when fictional), one safety alert if applicable.
2. **Universal wayfinder:** Home, Story, Adventure, Atlas. A selected view has clear emphasis and a genuinely working navigation event.
3. **Breadcrumb row (when nested):** e.g. `Adventure › Camp › Pearson`. Back restores the immediate semantic target, Home resets local path. Across new ChatGPT messages request source reconstruction, not fake local persistence.
4. **Primary reading plane:** current user's intent. The central unit is either one project, one outing, one mechanic or the full mission guide.
5. **One contextual next step:** relevant and safe if evidence supports it. `Wait / learn / another mission` can be an action; never force one quest to precede another because its file number is lower.
6. **Optional depth:** related systems, raw source link, optional Intel, why-this suggestion. Expand in place.
7. **Source footnote:** short provenance/classification. No 104-line catalog of supporting references in every main panel.

## 5. Presentation choices

| Surface | Hero content | Secondary | Escalation |
|---|---|---|---|
| Home | One recommended meaningful decision with why-now | Two genuine alternatives and one watch item | Go directly to a focused surface |
| Story list | Several **observed** markers, not fixed order | Pending marker research clearly separate | Selected mission opens entire original Field Guide |
| Adventure | One continuing PROJECT and one chosen OUTING | Three to five project tracks; resources unknown unless observed | Expand track or mechanic with return target |
| Atlas browse | Search or curated families, no full taxonomy dump | Research maturity and context | Quick / Practical / Comprehensive lesson |
| Atlas detail | Direct 30-second answer | Applicability, pitfall, deeper source, return | Expanded study or supported outing |
| Mission guide | All Gold metrics and chronological phases | Relevant phase Intel; critical warnings INLINE | Report/preflight and source-based reconstruction |
| Campaign review | Only ledger-confirmed facts | Report or unknown status | GameGuide handles verified changes |

## 6. Mobile & accessibility

- All important content fits in a single vertical reading column. No mandatory horizontal scrolling or forced fixed sidebar.
- Nav labels stay textual and wrap or compress sensibly; never rely on icon-only controls.
- Pressable rows/cards should be large enough to tap comfortably, with button names describing their effect. Avoid decorative action surfaces.
- Controls must be keyboard and screen-reader accessible through native host behavior; no tap-target overlap.
- Compact cards hold 2–4 lines; long guides contain their own phase-local navigation without hiding phase A→final.
- Unknown state should be explicit (`not checked`, `current map unknown`) and never rendered as a zero, greyed-complete, or green success.
- One evidenced active warning stays near the related risk, not buried inside closed Intel or below 20 unrelated cards.
- Screens must remain understandable without any optional image.

## 7. What this prototype does not claim

No persistent full-screen app, React website, independently styled native fonts, data sync, actual in-game minimap/GPS, automatic player-control detection, cross-turn checkbox restoration, full save decoder, autonomous live project tracking, universal adoption of Atlas research or game-owned medal progress. All Chapter 2 demonstrations are explicitly **fictional** and do not overwrite the user's recorded campaign.

## 8. Review hypothesis

Try **Contextual Field Desk** before a permanent console. Keep navigation visually accessible, while primary content remains purpose-specific and collapses back to one focused action. The design succeeds if a player can answer `what next?` on Home, find a project, ask a mechanic question, and get the entire original mission guide with **at most two deliberate navigation actions** for each path.

This is a design proposal for owner critique, not an adopted universal standard.


---

## 9. Owner-selected refinement v0.2 — Current Chapter medal rail (2026-10-17)

**Owner A/B preference:** **Placement A + Style A + Emphasis B**. This section supersedes the provisional top-level four-button header in §§3–4; the broader hierarchy of screens survives, but navigation is exposed contextually instead of as fixed Story/Adventure/Atlas header buttons.

### Exact visual structure

```text
RDR2 HUB / FIELD DESK                         [Home]
HORSESHOE OVERLOOK
Chapter II

  3 GOLD     1 SILVER   ·   4 / 18 recorded
  ━━━ ━━━ ━━━ ━━━ ━━━ ━━━ ... 18 thin medal segments
  (best reported medal by fixed Chapter 2 mission identity)

MISSION CONTROL
  Available mission markers (ONLY currently confirmed)
  When no current marker evidence: say "Not checked"
  No fictional mission listed as actually available

  [one observed mission row, if known]   → original FULL Field Guide
```

**Rail:** exactly **18 equally sized mission segments**, Chapter 2 Operation **007–024**, reference order only. Nominal line height **4px** (selected mark may rise to 5–6px); narrow consistent ~2–3px separation; flat/subtle corners, no chunky progress fill, no equal-width-looking continuous generic completion line. Keep generous vertical breathing room and a compact achievement line so the fine rail remains an intentional focal object.

**Color semantics:** Gold = warm muted gold (`#D6AC49`), Silver = quiet cool silver (`#C2C9D1`), Bronze = muted bronze (`#B47D59`), Unverified = neutral dim slate (`#424750`). These are **proposed design colors**, not permanent implementation tokens or accessibility-tested semantic colors. Text labels provide equivalent meaning; never require color vision alone.

**Evidence-backed demonstration readback (2026-10-17, original GameGuide `main`):** 007 Gold, 008 Gold, 010 Silver, 021 Gold, remaining fourteen chapter mission identities unverified; **3 Gold, 1 Silver, 0 Bronze, 14 without recorded medals**. The ledger has ten completed medal-bearing entries across all chapters, including six Chapter 1 Gold, but **the displayed bar is Chapter 2 only**. Source: `L33TW0RLD/rdr2/campaign/mission_ledger.md`; current medal statements are user-reported except 021 Gold with in-game screenshot evidence. Do not infer save persistence, current map marker presence or a medal for any unknown slot. Best medal recorded is not equivalent to independently reloaded save state.

**Heading emphasis:** achievement-focused **3 Gold** first, with **1 Silver · 0 Bronze**, then **4/18 recorded** as secondary numerics. Avoid a large KPI hero that steals attention from Mission Control. This is not a percentage-of-game completion bar.

**Interaction:** the visible line is deliberately slim, so do **not** require tapping a 4px target. Either use padded/invisible semantic segment pressable hit zones, plus a labelled accessible mission selector, or the mission selector alone. Selecting a slot reveals Operation ID, title and truthful medal status in a compact detail line, not a full modal.

### Header/navigation redesign

- **Home** remains the *only* visible universal header action.
- **Mission Control is the first primary container immediately beneath the rail.**
- Do **not** show Story / Adventure / Atlas as three header buttons. These are valid internal destinations exposed via conversational intent, related-content links or subordinate section navigation **below** Mission Control.
- Mission Control lists **ONLY observed/confirmed current mission markers**, never completed historical operations as if they were presently available. `Unknown markers` is an explicit, useful empty state: invite observation and do not populate a fake mission shelf.
- Gold **replay cleanup** is a distinct action from live Story markers; Operation 010 Silver should not appear in `Available missions` merely because it is replayable. A separate replay context may be shown when requested.
- Keep user-selected full original Guide v1.1 as a different detailed content mode.
- Under Mission Control, projects/Atlas can be represented later as meaningful secondary containers; **do not design below-the-fold layouts in this header-specific checkpoint**.

**Current acceptance gate:** look at the thin 18-slot line on both desktop and phone, confirm the type hierarchy and check inspectability. Only then finalize colors, density and below-Mission-Control containers.


---

## 10. Owner feedback v0.3 — completely clean medal rail (2026-10-17)

**This latest decision supersedes the previous segment inspection treatment in §9.**

- Header subtitle: **`Chapter II` only**. Remove `Mission medals`; medal meaning is already expressed by the colors and summary.
- **Remove the whole under-rail inspection section**, including `18 missions · Select a segment to inspect`, the ugly mission dropdown, and the persistent details/status panel.
- **One interaction:** hovering a rail segment may reveal a native tooltip with *only the mission title*; clicking/tapping the segment may open a tiny anchored popover containing **the mission title only**, no Operation number, redundant medal name or `Unverified` narration.
- Keep each segment's **visible stroke 4px** and provide an enlarged accessible hit area that does not increase visible rail thickness. A click toggles its small title popover; no additional buttons, below-rail cards or forced expanded view.
- A screen reader/keyboard should still receive a meaningful accessible segment name/status via native semantics or an offscreen accessible description, even though visible popover text is title-only. This is an accessibility requirement for later client verification; the design must not force a visual dropdown just to be accessible.
- Selected segment is a local UI inspection only, **not** an implicit Story marker, mission open, earned medal or save update.
- Keep the rail as an intentional, breathable element directly before **Mission Control**; do not insert a permanent bottom row or legend between them.

**Resulting vertical hierarchy:** `Horseshoe Overlook` → `Chapter II` → `3 Gold · 1 Silver · 0 Bronze     4/18 recorded` → `18-slot precision rail` → **Mission Control**.

This is a **design-only** amendment. Segment popover behavior and accessibility await owner click-through; no source authority or gameplay changes.


---

## 11. Owner feedback v0.4 — hover title, click opens source (2026-10-17)

**Supersedes §10's click-toggle popover.** The current popover as rendered is visually intrusive; user asked for **mouseover to reveal mission title, click for action**.

- Keep the visible **18 × 4px** rail, achievements and immediate Mission Control placement unchanged.
- Hover a segment: display the mission title **only**, using the host's lightweight hover tooltip (no manually framed persistent popover, badge, extra inspector, operation number or medal-verification line).
- Clicking a segment: **open the selected mission's original full GameGuide Field Guide**, as a reference/replay page, via a real user-invoked source-reload turn. Clicking an unobserved/neutral mission must NEVER imply that its map marker is currently available, its medal was earned, or that Gold replay is underway.
- Keep the segment's hit area substantially taller than its 4px visible stroke; visible thickness is separate from input geometry. On touch devices with no hover, tapping invokes the primary guide action; accessible control names can carry mission title and medal provenance.
- The design cannot control the host's native tooltip colors/shape. If these hover labels are still aesthetically wrong in the actual client, investigate a client-supported custom hover presentation later rather than rebuilding a click popover.
- No action is hidden exclusively behind hover. The click action remains discoverable through short global context (e.g. the overall header purpose) and control accessibility; avoid replacing the removed under-rail UI with a new instruction band.
- Mission Control remains the first main container; the slim medal rail is **a chapter-wide historical mission index**, not the list of currently available mission markers.

**Unchanged:** Chapter II only, 3 Gold / 1 Silver / 0 Bronze / 4 of 18 recorded per original GameGuide, other fourteen neutral. No save or gameplay writes.
