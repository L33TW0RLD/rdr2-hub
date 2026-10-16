# RDR2 Hub — Free Roam ChatGPT Interface Spec v0.1

**Status:** DRAFT / UNRATIFIED · 2026-10-16 · Agent 001  
**Interface:** Native ChatGPT response only (plain text + optional native interactive controls). **No website, desktop companion, local service, simulated auto-sync or persistent dashboard shell.**

## 1. Recommended interface: Contextual Trailhead + Depth-on-Demand

The default view should take **less space than a full mission guide** and answer "what could I meaningfully do?" immediately. It expands only when the player chooses a specific adventure, project or mechanic. It never requires the player to see all three Hub capabilities in parallel.

### Wireframe 0 — Open-ended "Let's play"

```text
RDR2 HUB · CHAPTER 2 — HORSESHOE OVERLOOK
9/104 GOLD · Last confirmed save: after Operation 005 replay
Actual position/available markers: NOT REPORTED
──────────────────────────────────────
WHAT FEELS RIGHT?

[ STORY ]     Choose an actual available mission marker
[ EXPLORE ]   Camp & nearby Heartlands, if Arthur is free to roam
[ BUILD ]     Camp upgrades: inspect Strauss/Ledger access first

LEARN SOMETHING   Horses · Hunting · Money · Other mechanics
WATCH             No verified active urgent Gold stage.
                  Chapter-limited opportunities assessed from actual markers.
──────────────────────────────────────
Direct commands always work: "Let's do Hosea", "Tell me about the horse".
```

**Interpretation:** the three square labels are *semantic choices*, not inert decoration. In ChatGPT they may be concise action controls that actually send the choice, or simple textual prompts when working controls are unavailable. Do not show a clickable-looking element that does nothing. Mission availability is **conditional**, not read from a fictitious live game API.

### Wireframe 1 — Free Roam selected (default)

```text
FREE ROAM · CHAPTER 2
World access: CONFIRMED / UNKNOWN · Last read [as applicable]
Watch: [only a supported, relevant urgent warning; otherwise none confirmed]

OUR PROJECT
Develop the gang's camp
Next: check the actual Strauss/debt and Ledger markers.
Why: unlock useful improvements before choosing a satchel recipe.
[Project details] [Choose a different project]

TODAY'S OUTING
Camp → short Heartlands ride (if Arthur is controllable)
Try: talk to whoever is present; follow one interesting trail.
Learn along the way: study a three-star animal.
[Try this outing] [Why this route?]

OTHER DIRECTIONS
[Valentine town visit] [Available story mission]
Discovery welcome — no mandatory to-do count.
[Mechanics Atlas] [Progress]
```

Default FRC must **not** display a huge chronological A→Z mission guide, full S01–S30 taxonomy, 50 collectible pins, speculative purchases or a duplicate Gold checklist.

### Wireframe 2 — Project depth

```text
PROJECT · CAMP DEVELOPMENT
Purpose  More useful camp facilities and satchel capacity
Gate     Ledger not independently verified in your save
NOW      Check Strauss/debt marker / actual Ledger menu
THEN     If ledger unlocked, compare Leather Working Tools and alternatives
ON AN OUTING     Hunt for *one chosen recipe* once tools are owned
WHY IT MATTERS   Convenience / equipment, not automatic 100% credit
[Camp mechanics] [Suggested outing] [Back to Free Roam]
```

**Rules:** show **a single next verified/conditional milestone** instead of a giant ingredient shopping list. Expanded project information can include dependencies, sources and a few alternative purchases, never make unreported cash an exact budget.

### Wireframe 3 — An adventure is underway

```text
OUTING · HORSESHOE / HEARTLANDS
Intention: Explore nearby countryside and learn animal quality
Along the way: One practical hunting tip [Mechanics detail]
You can detour for strangers, camp conversation, treasure clues.
If something material happens, tell me; we can change course.
[Adjust goal] [Back to camp] [Return to story]
```

Do not show a running timer, pseudo-GPS, unreadable route estimate or automatically completed checklist. A short expedition may get 2–4 optional ordered steps **only if requested** or if concrete travel sequencing would help.

## 2. Exactly when to show more detail

| Player action | Response transition | Depth |
|---|---|---|
| "Let's play" | Trailhead | 1 compact header + 2–3 meaningful directions |
| "Explore" / "What next?" | Free Roam | One project + one outing + up to two alternatives |
| "Camp details" | Focused Project | Gate, one milestone, related activity, trade-off |
| "Give me an expedition" | Outing plan | Optional short phases, activity dependencies, avoid spoilers |
| "Explain perfect pelts" | Atlas Quick or Practical | Answer mechanic without forcing quest card |
| "I want the full horse guide" | Atlas Comprehensive | Structured complete *available/researched* content, sources, uncertainties and sections |
| "Browse systems" | Atlas Browse | Families/search categories, not all descriptions at once |
| "Let's do the mission" | Mission Control | **Entire approved Field Guide v1.1** (never replace with collapsed-phase UI) |
| "Gold complete" | GameGuide report | Small medal + optional notes; preserve save distinction |
| "Show campaign" | Campaign Review | Ledger-backed figures, meaningful pending unknowns |

Optional expansion should always be **semantic**: a source/evidence detail, a mechanics explanation, cost comparison or a location-specific exploration plan. Avoid superficial accordions that merely hide required content.

## 3. ChatGPT UI components (capabilities, not implementation commitment)

**Can use when supported and tested:**
- A compact title and small header state tags with neutral visual emphasis.
- Single actionable choice buttons that **actually submit a conversational request**.
- Independently expandable Intel-like details for optional research, with a useful collapsed preview and claim-specific confidence.
- Small optional scene-matched images; no giant hero panels or misleading reused artwork.
- A simple report selector and short notes input **only** when a report submission genuinely returns to GameGuide for review.
- Plain text links to current GitHub reference sources or approved mission guides when needed.

**Must not claim:**
- A durable navigation stack, always-on assistant, cached live connection to RDR2, automatic screenshot ingestion, routine background sync, synchronized GitHub checkboxes, persisted UI toggles, guaranteed identical mobile/desktop rendering or unverified success from an interactive control.
- That a locally checked item is a completed mission, pelt collected, saved game or bought upgrade.

**Fallback:** every action must be understandable and performable through ordinary dialogue: "Take me to camp upgrades", "Back to Operation 009", "Show the comprehensive horse guide", "I got a perfect pelt". If any client cannot render a control, keep the same choices in text.

## 4. Three design concepts evaluated

### Concept A — Three-tab Command Console

A fixed-looking Mission / Free Roam / Atlas tab bar with global progress. Good for deliberate browsing. **Concern:** suggests durable app state and makes a focused mission guide share space with unrelated widgets. On small screens it creates extra navigation; mobile scrolling becomes worse.

### Concept B — **Contextual Trailhead** (recommended)

One intent-focused default view. Mission, Roam, Learn and Progress are directly accessible conversational destinations; when exploring, Project/Outing/Discovery gives a simple grammar. **Advantage:** shortest path to gameplay, mobile-first; depth requested when useful. **Trade-off:** relies on re-derivation of return context instead of client-local tabs.

### Concept C — Opportunity Board

Browseable "cards" for upgrades, encounters, side quests, challenges, treasures. Good for completionist search. **Concern:** becomes a spoiler-rich chores list and invites artificial priorities. Restrict to **explicit user request** ("What activities are available?") with filtering by actual gates and spoiler level, never the default.

**Recommendation:** B as default; **C as an opt-in browsing mode**; A only as a potential review/overview pattern, not a persistent top-level shell. Requires owner approval; this is not an implementation selection yet.

## 5. Progressive mechanics education — how Atlas appears

Three independent answer depths:
1. **Quick (when passing):** What is this mechanic? 1–3 crucial rules; one mistake to avoid; a source confidence note only if material. Example: "A three-star animal starts with high quality; the correct weapon and clean kill still matter."
2. **Practical (when planning):** How to perform it; 3–6 steps, available tools, common errors, material consequences, short source note. Example: choosing hunting equipment for one currently relevant species.
3. **Comprehensive (explicit request):** Full sections with prerequisites, variants, exceptions, decision tables where supported, related systems, claim-level confidence and sources; no fabricated exhaustive coverage. Example: horse ownership, bonding, stats, stable access and care.

The player may enter any depth directly ("Thorough guide to horses") and does **not** need to pass through Quick. Source adoption remains visible. If Agent 002 has not researched the topic, be honest and use only verified existing references or mark incomplete.

**From within a mission:** keep immediate mandatory Gold/one-off warnings visible **outside** optional Atlas; an Atlas answer is supplementary, not a replacement for Field Guide v1.1's complete phase sequence. When returning, reconstruct complete mission, not just the selected phase snippet.

## 6. Conditional safeguard UX

**Default:** no warning panel if no credible activated risk is established. Avoid calling all Chapter 2 activities "urgent".

When a **real, player-confirmed activated skippable Gold stage** exists, insert a short prominent sentence above leisure recommendations:

```text
GOLD OPPORTUNITY · ACTIVE [player-reported]
John's oil-wagon delivery can be skipped if delayed (exact timeout disputed).
Go to its Mission Control guide before starting a lengthy excursion.
[Continue the wagon mission]
```

This is a hypothetical UI test, **not evidence that the player has this task active**.

For a less urgent camp event, write a subtle conditional advisory ("If a white camp companion marker is visible, consider it before advancing the chapter") rather than a global alert or false active state.

## 7. Compactness and responsive behavior

- **Mobile:** one column, short header, one featured project and outing, two alternatives as simple text; optional detailed content follows. No mandatory horizontal navigation, side-by-side long tables, tiny images or nested multi-level panels.
- **Desktop:** same conceptual order; modest two-column layout *only if it does not break reading order*. Do not rely on a second monitor, hover interaction or exact pixel widths.
- **Accessibility:** action labels should name outcomes rather than generic "Open"; warnings must be written in text (not color alone); meaningful focus order; collapsed topics state their contents.
- **Content budget:** trailhead generally ~120–220 words before expanded content; Free Roam default ~180–300 words; selected mission remains as long as its approved complete Field Guide needs. These are **design targets**, not hard UI constraints.
- **Never bury irreversible warnings**, especially while an outing is being suggested.
- Keep evidence links in a compact optional source footer when useful, not a source list in every small card.

## 8. Reporting and continuity

**Report prompt example:** "Found a cabin, studied two animals, and donated a perfect hide." These are **player-reported** claims; GameGuide verifies specificity as needed and records only supported facts.

**Do not** show a "Saved to GitHub" success message merely because a local report button was pressed. If the response cannot perform an authorized GameGuide write, say "Reported in this conversation; not yet verified in the campaign repository." If no new player evidence, there is no record to persist.

**Returning after several days:** reconstruct the current Hub state from original `rdr2` GitHub main and relearn only the uncertain active outing/marker. Re-render current focus. Do not claim the user's prior toggles or selected project stayed open automatically.

## 9. Usability acceptance tests (not yet run)

1. **Directness:** "Explain horses" opens Atlas immediately rather than the Trailhead first.
2. **Default density:** "Let's play" shows at most a few feasible choices and meaningful confidence flags.
3. **Mission integrity:** full approved Field Guide v1.1 still renders with all phases after any Atlas detour.
4. **Independence:** two optional Atlas/Intel topics can be opened independently where controls support this.
5. **Truthful state:** checklist/phase focus and report controls cannot automatically mutate GitHub truth.
6. **Recovery:** new thread reads canonical ledger without repeating known chapter/Gold questions.
7. **Risk:** confirmed time-sensitive story stage displaces leisure, but cannot be fabricated from research alone.
8. **Mobile fallback:** no horizontal scroll dependence, any control that fails still has a text command.

These are planned **actual ChatGPT client tests**; the [scenario matrix](ux_scenarios_v0_1.md) performs only paper validation.

## Owner review questions

- Approve the **Contextual Trailhead** as default, or favor tabs/opportunity board?
- Are optional *Browse mechanics* and *Browse opportunities* entries sufficiently discoverable without cluttering the default view?
- Should the initial trailhead include one full progress metric (9/104) or only the chapter, with details in Campaign Review?
- For mechanics tutorials, is the Quick / Practical / Comprehensive ladder useful, and when should mission-phase Intel stay local?
- Do we need an explicit future **paused project** note, separately authorized, to restore a camp initiative across threads?

[Hub experience](../architecture/hub_experience_v0_1.md) · [Navigation](../architecture/navigation_and_state_flow_v0_1.md) · [Original Free Roam decision model](decision_model_v0_1.md).
