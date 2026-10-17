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
