# Field Desk — Navigation & Screen Contracts v0.1

**Status:** DESIGN PROPOSAL · **Authority:** merged Hub `dashboard/interface_blueprint_v1.md`, `architecture/navigation_and_state_flow_v0_1.md`, `companion/context_contract_v1.md`, `free_roam/chatgpt_interface_spec_v0_1.md`, original GameGuide Field Guide v1.1. The provisional progression PR #60 supplies ONLY read-side fictional data where referenced.

## 1. The design is a conversation router with visible wayfinding

A ChatGPT user may enter **any context directly**. Visible Home/Story/Adventure/Atlas wayfinding is a convenience, never a compulsory flow or a second gameplay state authority. One body at a time.

```text
PLAYER REQUEST ───────────────┐
                              v
                      RECOVER AUTHORITIES
                              |
                  CONTEXTUAL FIELD DESK SHELL
                              |
         +--------------------+-----------------------+
         v                    v                       v
      STORY              ADVENTURE                  ATLAS
  Observed options     PROJECT / OUTING       Quick / Practical / Deep
         |                /      \                    ^
  SELECT SOURCE         Camp     Hunt  -------mechanic-|
         |                ^                           |
  FULL ORIGINAL          |                           |
  FIELD GUIDE  ←── return/reload, not summary ───────+
         |
  GAMEGUIDE REPORT (separate verified workflow)
```

A `Campaign Review` route is accessible from Home/Story context or a direct `"show progress"` request, but is **not** a fourth content authority or automatic tracker.

## 2. Surface states and nested paths

| Screen ID | Entry | Primary body | Return target |
|---|---|---|---|
| `home` | open-ended `"let's play"`, explicit Home | Most relevant project/Story/outing choice, one protective warning if active | n/a |
| `story` | top navigation or direct Story request | observed markers only, a prepared guide distinguished from observed availability | previous semantic focus |
| `mission_ref(name)` | select observed marker or named reference | full original chronological Field Guide v1.1 **after source read** | Story or exact previous project |
| `adventure` | top navigation or direct activity request | one project + one relevant outing + meaningful alternatives | previous focus |
| `project(camp)` | project card selection | four distinct Camp tracks with truthful narrow availability labels | Adventure or Home |
| `track(pearson)` | child selection | tools, recipe choice, donation/material rules and optional example | exact project |
| `atlas_browse` | top navigation / `"browse systems"` | topic search, families grouped by intent, not a giant taxonomy dump | previous focus |
| `atlas_detail(hunting)` | direct mechanic question or contextual detour | quick answer, practical detail, research confidence, return | exact project/mission phase/outing |
| `review` | direct `"show progress"` / review link | GameGuide-only verified Gold, saves, materials with unknowns explicit | original view |

**A full Mission Control view is intentionally not an L1 card.** The source adapter must load *the entire approved* `rdr2/missions/` dossier, preserving every mission phase and action-critical Gold/save/unique warning. If not loaded, present a source-read link/request, not a 10-line fabricated substitute.

## 3. Routing actions and truthful outcomes

| Event | Local/presentational effect | Persistent effect |
|---|---|---|
| Tap Home/Story/Adventure/Atlas | Renders a different purpose-specific panel | **None** |
| Tap project card | Selects Camp L2; previous view saved as temporary return target | **None** |
| Tap Pearson | Opens the precise L3 track | **None** |
| Tap `Learn perfect pelts` | Atlas detail with `return_to=project.camp/pearson` | **None** |
| Tap `Back to Pearson` | Reconstructs contextual track from source; not a new craft | **None** |
| Select observed Story marker | Issues exact original full Field Guide source-request | **None** |
| Tick local checklist | Presentation-only count changes in that message | **None** |
| Tap `Report Gold` | Requests GameGuide evidence/update protocol and review | No medal until accepted write + readback |
| Tap `Return to mission` from Atlas | Reload full original guide A→final, current source; keeps selected phase *if known* but not stale checkbox state | **None** |
| Change fictional Chapter 2 state in design demo | Refreshes demo recommendation/conditional warning only | **None** |
| Speak directly (e.g. `"Hosea's horse guide"`) | Bypass Home and route by intent | **None** |

No navigation button may invoke GameGuide write silently. No browser-style persistence or cross-thread local drawer/checklist guarantee.

## 4. Local stack and real-turn boundaries

**Same response:** A native DIL component may keep local route selection (e.g. `[{screen:"adventure"},{screen:"project.camp"}]`) and return to the previous local view. Its component state belongs to that rendered message ONLY.

**New ChatGPT turn:** A `GenUI.issueNewTurn` action can request source reload with explicit semantic intent:
- `return_to.surface`
- `source_repository + path/id`
- `focus` (phase letter, selected project track, Atlas topic)
- `spoiler_budget`
- `preserve_critical_risk` with evidence
- `reload_full_original_guide` boolean for mission return
- `local_checkboxes_recovered=false`.

A static source link is navigation to GitHub, not a successful ChatGPT source load. A client feedback observation must distinguish (a) in-message route changed, (b) a new turn was submitted, (c) the assistant actually read the source, and (d) the *complete* guide was displayed.

## 5. Starting journeys (fictional test only)

### Journey A — open-ended Chapter 2 Free Roam

```text
HOME: Chapter 2, Horseshoe Overlook (FICTIONAL)
  Focus: Develop the Camp
  Other directions: two fictional observed Story markers
    → Camp Overview (4 tracks)
      → Pearson Crafting (tools not purchased in fixture)
        → Atlas Hunting / Perfect Pelts
          → BACK to Pearson, not a random Home
            → Story list (Uncle / Javier choices)
              → selected ORIGINAL Field Guide
```

### Journey B — mission-first

```text
"Let's do Polite Society" (fictional observed Uncle marker)
  → original Field Guide A–G with 2 Gold conditions and 26 ordered tasks
    → ask about calming a horse
      → Atlas Horses scoped to that mission segment, returning preserves mission ref
        → re-fetch/rebuild complete original Field Guide
```

### Journey C — activated risk

```text
Fictional John oil-wagon assignment explicitly active
  → Header: one protection label with relevant action, NO invented timer
    → Story selected: full original oil part dossier request
      → Atlas lesson still displays active warning while explaining the mechanic
        → return: full mission source, not condensed tile.
```

### Journey D — unknown state

```text
No observed map markers, unclear free-roam control
  → Home: mark unknown rather than create "2 available missions" or 100% completion score
    → user asks for horse mechanics
      → answer general rules without claiming stable/brush ownership
```

## 6. Design options and selected provisional direction

| Option | Strength | Weakness | Decision |
|---|---|---|---|
| Four persistent panels on the same page | At-a-glance density | Makes a guide look like an analytics app; mobile overload | **Reject for now** |
| Strict three-tab navigation that always starts at Home | Easy mental model | Adds needless taps and overrides direct player intent | **Reject as a requirement** |
| **Contextual Field Desk with visible wayfinding** | Direct access plus discoverable destinations; one focused panel at a time | Needs reliable Back semantics and local/turn distinction | **Prototype / preferred** |
| Hidden navigation, just conversational responses | Minimal UI | Discoverability weak for 30-family Atlas and project hierarchies | **Fallback, not only design** |
| Full-screen ornate cowboy webapp | Fine visual customization | Not ChatGPT-native; misleading persistence claims | **Out of scope** |

## 7. Two responsive layouts from one contract

**Desktop:** compact two-line shell; a horizontally oriented labelled wayfinder that doesn't dominate; one primary reading plane; side-by-side 2-tile Gold metrics only *inside missions*; secondary source/Intel collapsed. Never 3 unequal columns of constant content.

**Mobile:** stacked shell; labelled nav wrapping or horizontally compact but without hidden important navigation; one featured adventure/project; wide finger-friendly buttons; no 4-column metrics; compact section anchors *inside* long missions. No fixed horizontal breadth for source labels, actions, chips or progress. The canonical field guide remains complete even when vertically long.

## 8. Source and state discipline

1. The source of real gameplay facts remains `L33TW0RLD/rdr2/campaign/**` through GameGuide's authorized protocol. Do not read it for this fictional dashboard demo.
2. The Atlas retains research statuses, including `RESEARCHED — REVIEW PENDING`; a UI prompt cannot adopt a mechanic.
3. The v0.1–v0.5 progression model and v0.6 pilot are separately **DRAFT**, not merged production UI.
4. A marker from a simulation fixture is labelled fictional even if the mission file actually exists.
5. Do not confuse `UI selected`, `source fetched`, `user reported`, `GameGuide recorded`, and `save persisted`.
6. All meaningful state/actions must have clear ordinary-language fallback commands that the player can type in ChatGPT.

## 9. Integration boundary

The visual product should be implemented through a **presentation adapter** that consumes *resolved* view envelopes from the Companion; it should not reimplement Chapter 2 mission prerequisites or project milestones. UI rendering ≠ rule evaluator. Research ingestion and original Guide source-loading belong to their respective authorities.

**Pending real-client test:** submit the prototype with working in-message Back, top wayfinder, project drill-down, Atlas return and full-source-reload action. The user's observed behavior is the acceptance evidence, not the existence of a control.


---

## 10. Owner-selected Header v0.2 — Mission Control first, not tab-driven (2026-10-17)

**Explicit supersession:** any examples above with permanent `[Home][Story][Adventure][Atlas]` header wayfinding are *historical v0.1 proposals*, **not the current selected layout**. Owner selected **Home as sole top navigation control**, followed by the 18-segment Chapter 2 medal rail and a full-width **Mission Control** first content container. Story content is already in front of the user; avoid a redundant Story button.

### Header content contract

```text
chapter_id: '02'                                // known from original GameGuide campaign
chapter_label: 'Horseshoe Overlook'             // chapter identity; not current GPS
mission_medal_slots: ordered identities m007..m024 // exactly 18 in Chapter 2
slot_status: best-recorded Gold | Silver | Bronze | Unverified
slot_source: original GameGuide campaign/mission_ledger.md
best_medal_count: {Gold:3,Silver:1,Bronze:0}    // verified from current original ledger at design time
count_label: '4 / 18 medals recorded'           // NOT 4/18 Gold or 4/18 official completion
nav_header_actions: ['Home']                   // no Story / Adventure / Atlas header buttons
first_body_container: 'Mission Control'
mission_rows: only actual **currently observed** story markers; if unobserved show truthfully unknown
```

### Read and interaction flow

1. Load the current original GameGuide Chapter 2 mission identity manifest (007–024) and *latest authoritative medal ledger*. Never fill missing entries with `bronze`, `available` or `played`.
2. Render 18 visible thin segments, the achievement line (`3 Gold · 1 Silver · 0 Bronze`) and `4/18 recorded`. Numbered order is a *visual source index*, not a compulsory mission order.
3. A segment inspection action reads the existing mission ID and the best verified medal; it does NOT open that mission, record Gold or make it available.
4. Read real observed available-map-marker authority separately. It is currently **not evidenced by the canonical ledger**, so the default Mission Control empty state must say the current available markers have **not been confirmed**. A design demonstration may show invented markers *only* within a clearly distinct fictional scenario preview.
5. Once a marker is confirmed, show a compact mission title and genuinely working **Open complete Field Guide** action. Prioritization/hazard rules remain in the companion logic, not duplicated as UI assumptions.
6. The Home action brings the user back to the header/Mission Control entry; nested mission/Atlas return stays semantic. Other domains are on-demand via context, not header navigation.

### Accessibility and honesty

At 18 slots across a narrow phone, each line segment may be thinner than a tap target. Use separate broad pressable hit areas or a labelled `Inspect mission segment` selection control. Expose IDs, names and statuses in text; preserve keyboard focus and labels. No fake percentage, auto-current GPS, false medal save confirmation or fictional live mission marker.

### Deferred decision

Where exactly the **Adventure** and **Atlas** containers sit under Mission Control, and how they open, remains deliberately **unsettled** for later A/B testing. This iteration concerns the top header + first Mission Control container only.


---

## 11. Owner decision v0.3 — medal segment interaction only

Supersedes §10's line saying to reveal a full Operation/medal status detail line or provide a visible mission-selection dropdown.

| UI surface | When idle | On segment hover/click/tap |
|---|---|---|
| Chapter subtitle | `Chapter II` | Never say `Mission medals` |
| Achievement row | Existing best-medal count and `4 / 18 recorded` | Unchanged |
| Rail | Exactly 18 thin fixed-order medal-colored segments | Title-only anchored tooltip/popover; no persistent extra block |
| Under rail | **Nothing** | **Nothing**; Mission Control immediately follows |
| Mission Control | Current marker list or honest unknown state | Does not change from rail inspection |

**Exact segment-content rule:** the **visible** tooltip/popover body is only the canonical mission title. No reference number, medal badge, uncertainty text, historical best medal, completion score or explanation. Source status remains encoded by rail color and count. A larger invisible interactive hit zone may be used to preserve usability of the 4px visible rail. Screen reader name/status semantics remain part of the underlying accessible control even when visually hidden.

**Behavioral boundary:** selecting medal history does NOT open a mission, assert it is currently available, or change the GameGuide ledger. No Story/Adventure/Atlas header buttons or expanded medal selector are reintroduced.

**Test status:** real click/touch/keyboard popover acceptance PENDING USER.


---

## 12. Owner decision v0.4 — two distinct actions at the same medal segment

Supersedes §11's click-toggle title popover.

```text
HOVER/FOCUS on segment
  -> lightweight native tooltip, canonical mission heading ONLY
  -> no new route, no selection state, no source-read or gameplay write

CLICK/KEYBOARD ACTIVATE/TAP segment
  -> real ChatGPT follow-up to fetch from L33TW0RLD/rdr2/main
     the exact original source dossier mapped to that mission's 18-slot ID
  -> render FULL approved GameGuide Field Guide v1.1
  -> label as reference/replay lookup; not a confirmed current map marker
  -> no invented mission completion, Gold, auto-start or save writes
```

Use `pressable.tooltip` with the exact heading (or a future host-equivalent accessible label) and a real `pressable.onClick` action. Do not use `popover.open` on click. Hover state is short-lived and never mutates selected Story mission or a persistent inspector.

When implementing click use an **exact verified per-mission source path** from `knowledge/progression/chapter_02_graph_v0_1.json` / original GameGuide, NOT a synthesized filename from the title. Any source-read failure must be reported openly. A mission medal-rail click *never* claims the mission is currently selectable on the game's map.

Mobile has no guaranteed hover: clicking a segment proceeds to the mission reference, with native hit area ≥ the visible stroke and accessible name supplied. Keyboard focus, if available, can reveal the same heading; not confirmed until device testing.

**UI verification pending:** source reload after actual click, hover placement/shape and mobile hit target.


---

## 13. Owner decision v0.5 — independent map availability lane beneath rail

Extend the *existing* 18 Chapter 2 medal segments with an independent availability dot lane:

```text
top:       [ Gold | Gold | Unknown | Silver | ... ]  (4px segmented best-medal rail)
beneath:   [      ·     ·          ·       ... ]    (dots ONLY on confirmed visible marker IDs)
```

The dot for a mission is aligned to the precise same horizontal indexed position as its bar segment, shares its **hover title tooltip**, and is *not* clickable separately. The entire mission column is one padded pressable: activating it still opens the **full original Field Guide as a historical reference**, even when no currently visible map marker is known. The dot is informational; it does not change what clicking means.

**Two independent source contracts:**

- `best_medal_by_mission` comes from latest canonical `L33TW0RLD/rdr2/campaign/mission_ledger.md` (Chapter II: 3 Gold, 1 Silver, 0 Bronze, 14 no verified medal).
- `currently_observed_story_markers` must come from a separate and fresh actual player map-marker report/approved observation source. The medal ledger alone **does not contain** this data. Absence of a dot with unknown observation means `NOT_CHECKED`, not `NOT_AVAILABLE`.

For a design-only test, allow `simulation_mode=true` with explicit `SIMULATION_FIXTURE` markers (e.g. `m009`, `m011`). The fiction label must be visible **outside** the polished header, so the header's approved geometry remains clean. The Mission Control container may show only those simulated rows in demo mode; in actual-evidence mode it must honestly state `Available missions not checked`. No current mission marker may be inferred from chapter mission prerequisite research, mission completion, save history or best medal.

Bronze tint is `#B47D59` for the achievement count and future actual best-Bronze segments; original 021 Bronze is superseded by best-Gold and must remain Gold in the rail.

This does not add another visible header tab, selector or inspector. Interaction remains `hover: mission heading` / `click: complete original guide request` / `dot: observational availability only`.

Pending client validation: alignment of tiny dots across 18 segments, distinction from medal colors, padding on mobile and tooltip usability.


---

## 14. Mission Control first-container design study v0.6 (header locked)

**Boundary:** the owner locked the current-chapter medal rail, Home, hover/click, and map-marker dots. This specification **does not alter** those. It defines a proposed body immediately below the rail.

### Input contract

- \`chapter_id='02'\`; existing 18 canonical mission identities from the original GameGuide.
- \`observed_current_markers\`: list of mission IDs from a **current player map report**, or \`null\` meaning **not checked**. For the UI simulator, pass explicit \`SIMULATION_FIXTURE\` list and label it outside the locked header.
- \`activated_story_risk\`: optional typed evidence from shared progression policy, never invented by presentation code.
- \`preferred_focus\`: optional explicit player interest, never a secret forced Story route.
- \`owner_source\`: exact mapped original complete \`rdr2/missions/chapter_02/*.md\` dossier; never filename synthesized from a human display name.
- \`history_best_medal\`: already owned by header; Mission Control must not independently render medal KPI/mini-rail.

### Common UI envelope

\`\`\`text
MISSION CONTROL
  [once-only: current marker observation context; e.g. '2 markers observed']

  A) compact list — each observed mission is one navigable row
  B) quiet cards — source-grounded brief premise, one clear action per card
  C) spotlight — one featured mission ONLY with explicit why-now evidence;
      otherwise no artificial priority, compact peers remain available
\`\`\`

The chosen item invokes a real direct-turn action to **fetch/reload current full original Field Guide v1.1**: all A→final phases, source Gold objectives and inline Gold/Honor/Missable/Save warnings. The action must not mark the mission playable if the segment was merely inspected historically.

### Source/click state matrix

| Mode | Mission Control choices | Click semantics |
|---|---|---|
| Current real markers *not checked* | Honesty card, no fictional row | Ask user for map marker observations; never auto-set status |
| Real marker observed | Exactly reported marker ID(s) | Request original full Guide, identified as *observed* at report checkpoint |
| Simulated marker example | Exactly specified fictional marker IDs | Request original full Guide as a **fictional demo**, do not mutate campaign |
| Medal rail slot, irrespective of dot | Historical Chapter II mission reference | Request original full Guide as a reference; no current map availability assumption |
| Gold replay explicitly requested | Dedicated replay review/read pathway | Load original full Guide; separate Medal from current map status |

### Urgency rule

A source-backed **active** skippable window outranks unurgent choices. Show one concise **inline** warning (not a repetitive warning card after each row), and expose the corresponding mission with a direct Field Guide action. Do not invent time estimates or require an unrelated project before the task.

### A/B/C selection is local only

In-chat prototype mode selectors (\`A/B/C\`) and \`two/four/unknown/urgent\` scenario selectors are explicitly *not* canonical UI destinations. A user choice can be logged as design feedback only after user confirmation. Changing the fake scenario changes fictional marker dots in a full-system demo if the header is also rendered, but cannot change historical medal results.

### Practical gates

- A single mission row must not be clickable if its exact current original dossier path cannot be verified; explain source-read failure instead.
- Direct request such as \`"load Paying a Social Call"\` bypasses Mission Control list regardless of whether marker is observed, with reference-only labeling if applicable.
- Header and Mission Control should use the **same** data identity IDs for dot alignment and row content.
- Actual Mission Control source-of-truth read/update integration remains a separate implementation phase. This is a design for a consumable response envelope, not a new tracking authority.


---

## 15. Owner preference v0.7 — list-based mission choices with two independent overlays (2026-10-18)

**Layout decision:** A compact one-column mission list is the **selected baseline**. Editorial cards (B) and always-featured mission row (C) are not selected. The user wants C-like emphasis reallocated to **meaningful system introductions**; an actually active skippable Story job should instead carry a concise **inline urgency label**.

### Data contract: observed Story marker vs future mechanic

- `visible_missions`: observed current markers supplied by GameGuide-approved player observation, or explicitly labelled synthetic design fixture; no marker assumption from medals.
- `active_risks`: source-backed currently activated events only, keyed to the affected mission ID. Label `Time-sensitive` appears on that row; the player can still select any observed choice.
- `system_introductions`: *future capability introductions from normal source-backed routes*, keyed to mission ID and owning Atlas topic. The user must not be told a feature is already unlocked merely because the mission is available.
- `feature_focus`: optional player-requested goal/interest. A feature is only spotlighted when relevant and source-supported. Never pick solely by shelf order.
- `source_maturity`: if game rule provisional or disputed, qualify or withhold; do not smuggle a disputed unlock into a confident label.

### Display precedence (not Story play-order precedence)

1. Keep each **observed** mission in the compact list with full-source click behavior.
2. Annotate activated risk inline on the exact affected mission row, with action-critical clarity and no invented countdown. Avoid rendering a global attention-grabbing risk banner merely because any mission has a risk.
3. If no active high-severity risk is consuming attention, optionally expose **one** source-grounded system-introduction preview:
   - **A1:** small in-row `Introduces: [system]` note below linked mission.
   - **A2:** quiet `New possibility` content after mission rows, `[system] — introduced through [mission]`. A separate `Learn mechanic` action opens a verified owning Atlas dossier; it must not start/complete the mission.
4. If no supported relevant introduction exists, omit unlock UI entirely. Unknown/currently unobserved markers cannot be promoted by system-introduction research.
5. Keep medal history, chapter rail/availability dots and full Guide actions separately owned, exactly as the locked header contract.
6. An urgent skippable event **suppresses unrelated new-possibility spotlight** but doesn't erase the ordinary list or its accessible mission actions.

### Correct wording

Use `Introduces`, `Becomes available through` (only when corroborated), `After completing [mission]` rather than `Unlocked!` when the user has **not yet completed** the mission. After explicit completion, the Progression Engine still independently determines whether access is observed before changing to `Accessible` / `Owned`. A click on `Learn fishing` opens research, not game fishing.

### Action contract

- **Mission row:** one whole pressable surface; new turn requests original complete Field Guide v1.1 for that source-identified mission.
- **In-row urgency:** textual annotation, not a button or a route to a fake timer.
- **A1 inline introduction:** informational annotation; row click still opens Guide.
- **A2 feature spotlight:** informational, plus a true source-reading action to owning Systems Atlas.
- **Header rail:** unchanged tooltip mission name and click→full original Field Guide as historical reference.
- **Demo switcher:** local UI state only; doesn't report real map progress or grant capabilities.

### Synthetic test case truths

The current graph references these normal introductions: `completed:m009 → stable_brush`, `completed:m013 → emerald_wagon_fence`, `completed:m018 → ordinary_fishing`; separately `john_wagon_task_active → urgent_john_wagon` on `m017`. These are research-level *mechanics* contracts, not chapter opening order guarantees. A fictional scenario may show m009/m018/m013 as simultaneously observed markers solely to compare layout, never as assertion of actual current game markers or proven story prerequisite path.
