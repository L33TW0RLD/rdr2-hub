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
