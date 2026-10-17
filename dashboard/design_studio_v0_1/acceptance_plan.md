# Field Desk UX — Acceptance Plan v0.1

**Issue:** [#61](https://github.com/L33TW0RLD/rdr2-hub/issues/61)  
**Current status:** `READY_FOR_USER_REVIEW / CLIENT BEHAVIOR NOT YET ACCEPTED`  
**Test basis:** synthetic Chapter 2 at Horseshoe Overlook before missions; fictional Uncle and Javier markers. No reference to actual player progress.

## 1. Success outcomes

The user should feel that there is **one companion**, not three unrelated encyclopedias. Success requires:
- Home tells the player what is meaningful now within one short reading unit.
- Story can open a named **observed fictional** mission without implying previous numbered missions are required.
- Adventure permits an optional long-term project to expand into one precise child mechanic and return.
- Atlas answers the player’s question immediately, then offers deeper source-linked learning.
- The interface can stay silent when there's no meaningful new information and foreground a genuine, activated risk.
- No interactive control writes real game state.
- Long full Field Guides keep their A→final content and inline Gold/missable warnings.
- The entire experience is usable in ChatGPT on mobile and desktop, with no separate app implied.

## 2. Proposed acceptance script

| ID | User action | Observable pass condition | Status |
|---|---|---|---|
| U01 | Open initial Field Desk | Labelled Chapter 2 fictional context; no fake gold/cash/save or GPS | PENDING USER |
| U02 | Select `Adventure` and `Camp Development` | Project owns exactly four distinguishable camp tracks | PENDING USER |
| U03 | Open Pearson | Relevant tools/recipe/material status; no false satchel acquisition | PENDING USER |
| U04 | Open `Learn perfect pelts` | Atlas quick rule, applicability/carcass distinction and research pending status visible | PENDING USER |
| U05 | Press Back | Returns to **Pearson**, not Home; second Back to Camp | PENDING USER |
| U06 | Use universal nav to Story | Uncle and Javier appear as parallel fictional markers, not forced numeric order | PENDING USER |
| U07 | Select mission | Mission layout preview shows both sourced Gold objectives and offers a **real** complete original Field Guide reload action | PENDING USER |
| U08 | Request full guide | New turn requests whole original A→final file; cannot be marked PASS until actual full render verified | UNTESTED |
| U09 | Detour Mission → Atlas → Back | Return carries exact mission identity and requires full re-read if crossing turns | PENDING USER |
| U10 | Return Home / change view | One primary panel visible; no hidden ghost sidebars or duplicate content | PENDING USER |
| U11 | Change demo scenario to Ledger or Wagon | Visual guidance meaningfully changes; urgent risk stays visible without fabricated timer | PENDING USER |
| U12 | Select Quiet presentation | Optional unsolicited suggestions reduce, but requested details remain accessible | PENDING USER |
| U13 | Check UI on mobile | Labels readable, text doesn't clip, useful tap targets, no horizontal scrolling | UNTESTED |
| U14 | Check UI on desktop | Header/nav hierarchy scan clean; no forced multi-panel overload | PENDING USER |
| U15 | Try direct request `"explain horse bonding"` | No compulsory Home detour; answers sourced mechanics (future turn) | UNTESTED |
| U16 | Try long mission with checkboxes | Local checked state does **not** update medal/campaign/save | UNTESTED |
| U17 | Simulate chapter-departure risk | Evidence-backed warning before advance, optional material not turned into mandatory checklist | PENDING USER |
| U18 | Deny actual marker observation | No UI claim that unobserved candidate is current playable mission | UNTESTED |
| U19 | Turn off optional rendering or use plain text | All meaningful actions remain expressible as ordinary chat prompts | UNTESTED |
| U20 | Change long topic to Atlas then Back across turns | Context is safely reconstructed, not described as a persistent live widget | UNTESTED |

**A missing test result is not a PASS.** Source documents can be read and the prototype can be authored without the user successfully tapping a control or seeing the intended layout.

## 3. Visual audit criteria

- **First viewport:** Chapter, current surface, and the major next decision visible without 10 unrelated cards.
- **Wayfinding:** each top-level view is identifiable by both text and icon; active state clear.
- **Hierarchy:** headings, source confidence and actions use distinct levels; no more than one dominant Call to Action per view.
- **Consistency:** the same camp project and mission dossier retain identifiers across Home, detail and return.
- **Risk:** one active serious warning is prominent and positioned near the relevant action; low-confidence hints do not look equally urgent.
- **Readability:** normal body text, adequate neutral contrast, no huge decorative images or badges used to style section headers.
- **Tap reliability:** pressable rows, Back, project cards and mission action buttons actually change the presented content.
- **Mobile:** no three-column nested navigation panels, no truncated mission phases or time limits.

## 4. Prototype scenarios

The demonstration should offer these **hypothetical** checkpoints as UI controls (local simulator toggles only):

- `arrival`: chapter open, Uncle and Javier markers manually specified; camp Ledger/tools/access **not verified**.
- `ledger`: a Strauss debt returned+deposited and fictional Ledger observed; camp facilities become relevant, but upgrades and tools remain separate.
- `horse`: Hosea tutorial completed in fiction; horse-care intro appropriate but no specific owned mount or gear inferred.
- `oil`: John's optional oil-wagon stage specifically active and observed in fiction; foreground the skippable Story obligation, no leisure diversion or invented expiry clock.
- Optional `exit`: fictional Chapter 2 closing marker observed; offer preservation audit without pretending all optional content already missed.

Home must change its **one main decision** when scenario changes, while the same navigation destinations remain usable.

## 5. Existing contract conformance

- Main Hub `dashboard/interface_blueprint_v1.md`: small contextual header + one main panel + useful next step; full mission preserved.
- `architecture/navigation_and_state_flow_v0_1.md`: direct intent routing, evidence/readback, semantic return.
- `free_roam/chatgpt_interface_spec_v0_1.md`: PROJECT/OUTING/optional DISCOVERY, no giant compulsory checklist.
- `companion/context_contract_v1.md`: read-side context, no parallel campaign record.
- Original `rdr2/protocol/walkthrough_presentation.md`: comprehensive A→final with Gold and critical warnings.
- Draft PR #60: synthetic progression, source request packets, lifecycle statuses and explicitly unresolved prerequisites.

## 6. Decision questions for owner feedback (no upfront form required)

After interacting with the prototype, focus feedback on:
1. Does the header and navigation feel **too large / too small / balanced**?
2. Does Home offer the **right amount of choice**, or should it be even more minimal?
3. Should Story, Adventure and Atlas use always-visible wayfinding, or should deeper navigation collapse more aggressively?
4. Does project → Atlas → Back feel intuitive?
5. Is the mission layout clear without reducing the comprehensive Gold guide to a summary?

Do not ask all five as a form. Let real feedback identify which one to refine first.

## 7. Completion checkpoint

**Delivered:** exclusive four files drafted, issue #61 and isolated branch, in-chat interactive prototype, source alignment.  
**Not yet delivered:** user-verified desktop/mobile clickthrough, polished multi-device acceptance, production adapter and actual fully rendered guide integration.  
**Next state:** `DELIVERED_REVIEW_PENDING` after branch, PR and allowed-path diff readback. **No self-merge**.


---

## Owner-directed refinement test H01–H09 (2026-10-17)

**Selected variant:** Placement A + Precision Rail A + Medal Emphasis B. This small header/first-container test supersedes prior four-button shell navigation.

| ID | Specific user test | Acceptance |
|---|---|---|
| H01 | Open Chapter 2 header | Home is the **only** header nav button; Mission Control is the first body container |
| H02 | Inspect visual rail | Exactly 18 equally sized Chapter 2 mission slots; thin ~4px rail is visually noticeable but elegant |
| H03 | Inspect colors | 007 and 008 Gold; 010 Silver; 021 Gold; other 14 neutral by current canonical GameGuide ledger |
| H04 | Inspect title/count | `3 Gold · 1 Silver · 0 Bronze`, `4/18 recorded`; no misleading 4/18 Gold |
| H05 | Inspect unknown segment | Shows name/Operation and `No verified medal`, NOT Bronze/failed/unplayed |
| H06 | Inspect on mobile | No mandatory 4px tap target: padded hit area and/or labelled selector; no scroll/clipping |
| H07 | Inspect Mission Control | If latest current map markers aren't observed, no mission is incorrectly labelled available |
| H08 | Activate source read / Home | Controls perform the described action and no campaign/medal state changes |
| H09 | Compare hierarchy | Chapter hero + achievement line + rail + first Mission Control fit without creating a large KPI dashboard |

**Current state:** DESIGN PROPOSED; actual client click acceptance **PENDING USER**. No production implementation or new game-state read/write. Below-the-fold Adventure/Atlas presentation is deferred.


---

## Owner-directed cleanup checks H10–H15 (2026-10-17)

| ID | Test | Expected result | Status |
|---|---|---|---|
| H10 | Inspect chapter subtitle | Exactly `Chapter II`; no `Mission medals` suffix | PENDING USER |
| H11 | Look immediately below rail | **No dropdown, no instruction/legend, no persistent panel**. Mission Control is next | PENDING USER |
| H12 | Hover a completed or neutral segment | Tooltip displays **mission heading only** | PENDING USER |
| H13 | Click/tap a segment | Tiny anchored popover displays **mission heading only**; it can be dismissed without scrolling | PENDING USER |
| H14 | Test 18-slot line on mobile | Visible 4px rail, larger interaction zone, no horizontal overflow | UNTESTED |
| H15 | Keyboard/screen reader inspection | Semantics allow discovering identity/status without a cluttered visible dropdown | UNTESTED |

**Supersession:** H05's previous Operation/status inspection and H06's `accessible selector` alternative are replaced by title-only popover and accessible padded segment controls. Do not show a visible select or extra below-rail detail. No mission availability/Gold/campaign mutation; this is a local design rehearsal.


---

## Owner-directed hover/action tests H16–H20 (2026-10-17)

This replaces H12–H13's popover-on-click and H15's click-to-inspect expectations.

| ID | User action | Expected | State |
|---|---|---|---|
| H16 | Hover a segment | Native compact title-only tooltip; no heavy popover or persistent card; no source turn | PENDING USER |
| H17 | Move mouse away | Tooltip dismisses; nothing beneath the bar changes | PENDING USER |
| H18 | Click one of the 18 segments | Starts the correct original FULL Field Guide fetch/render turn, not the decorative tooltip | PENDING USER |
| H19 | Click a neutral/unverified mission | Opens a **reference**, never claims a playable marker or completed/GOLD mission | PENDING USER |
| H20 | Tap on mobile / focus with keyboard | Accessible real action without relying on hover or a 4px hit area | UNTESTED |

**Constraint:** This is a UI routing test only; hover/click and follow-up source read are not actual gameplay progress or save readback. The native tooltip's shape/appearance may still need client-level improvement; if host styling is insufficient, don't claim a custom rendered tooltip was implemented.


---

## Owner-approved map-dot and bronze design checks H21–H27 (2026-10-17)

| ID | Test | Pass condition | Status |
|---|---|---|---|
| H21 | Inspect historical medals | Exactly 18 Chapter II 4px segments; Gold/ Silver unchanged; **0 Bronze count in bronze hue** | PENDING USER |
| H22 | Supply two fictional visible mission markers in demo | **Two subtle dots** appear directly beneath exactly their aligned medal segments; entire header retains approved thin geometry | PENDING USER |
| H23 | Switch to real-record / marker-not-checked mode | All dots disappear; Mission Control says markers not checked, **not** that zero missions are available | PENDING USER |
| H24 | Hover one of the dotted segments | Native title-only tooltip still looks and behaves as approved; no medal/availability popover | PENDING USER |
| H25 | Click a dotted or undotted segment | Exact original full Field Guide source request; **dot does not change click semantics or auto-start Story** | PENDING USER |
| H26 | Check bronze semantics | Warm bronze used for any future best-Bronze and for the `0 Bronze` summary; no historical 021 Bronze misrepresented as current best | PENDING USER |
| H27 | Check desktop/mobile clarity | Dots remain perceptible but subordinate, aligned under each slot; padded clickable controls; no horizontal overflow or legend band | DESKTOP PENDING; MOBILE UNTESTED |

**Current marker authority:** no recently verified user map-marker observations were retrieved from the original mission medal ledger; no real dots may be displayed by default. An explicitly labelled *illustrative marker example* is allowed for visual testing. Real mission availability is NEVER inferred from medals or mission file order.


---

## Mission Control container A/B/C acceptance plan M01–M14 (2026-10-17)

**Header remains LOCKED.** Current three options are **design study candidates, not ratified winners**. Desktop render/click feedback is pending.

| ID | Test | Acceptance | Status |
|---|---|---|---|
| M01 | Inspect A with two fictional observed markers | Clean rows, both genuinely accessible, no forced operation order | PENDING USER |
| M02 | Inspect B with two markers | Quiet cards communicate personality through source-backed spoiler-safe one-line premise | PENDING USER |
| M03 | Inspect C without an urgent risk or explicit priority | All options visible; "featured" is demonstrably editorial, not a forced Story gate | PENDING USER |
| M04 | Switch to four fictional markers | No marker vanishes; A stays compact, B remains readable, C keeps alternatives accessible | PENDING USER |
| M05 | Switch to marker-not-checked | Honest blank state rather than a false \`0 available\` or mission shelf | PENDING USER |
| M06 | Switch to activated optional wagon stage | Skippable story risk is prominent, no fabricated ticking deadline | PENDING USER |
| M07 | Click mission entry | Requests **entire original Field Guide** in a new turn; not a fake local briefing screen | PENDING USER |
| M08 | Compare with medal rail | Mission rows do not repeat medals or operation numbers; dots and observed marker rows would use same IDs | PENDING USER |
| M09 | Mobile scan | Title and action remain legible, no forced multi-column cards or horizontal scroll | UNTESTED |
| M10 | Desktop scan | Title, available choices, and action are visible quickly with minimal chrome | PENDING USER |
| M11 | Historical completed Gold mission | It is absent from *available markers* unless a separate current marker observation exists | PENDING USER |
| M12 | Open unobserved mission by direct request | A reference-only full-guide lookup, not a claimed active mission | UNTESTED |
| M13 | Preserved header | Home, chapter medal rail and dot design unchanged in the design study | PENDING USER |
| M14 | Record A/B/C owner selection | Winner picked based on real visible variant, not presumed by assistant | NOT SELECTED |

**Decision questions:** Is a list enough personality? Are quiet cards too tall? Should C's spotlight be reserved for an active Story risk only? Keep owner feedback conversational, not a large mandatory form.

No self-merging, no source-admission changes, no game state inferred or written.


---

## Owner-selected compact list and unlock emphasis comparison S01–S12 (2026-10-18)

**Confirmed:** Compact Mission List A chosen over Editorial Cards B. Full Mission Spotlight C not selected as a default; urgent risk becomes **row label**. Test **A1 inline introduction vs A2 single supporting feature spotlight** without changing the locked header.

| ID | Test | Pass criterion | State |
|---|---|---|---|
| S01 | Normal two observed fictional markers | Compact equal-weight rows, all accessible, no B-style card stack | PENDING USER |
| S02 | A1 with Hosea/fishing intro | A specific `Introduces` note belongs to the correct mission and not to unrelated ones | PENDING USER |
| S03 | A2 with fishing interest | A single quiet "New possibility: Fishing" area appears **after** the list; mission rows remain equal | PENDING USER |
| S04 | A2 with horse interest | Switches spotlight to stables/horse care only when the relevant observed mission and research are provided | PENDING USER |
| S05 | Four observed fictional markers | No false forced mission ranking; text density remains manageable | PENDING USER |
| S06 | No source-backed system introduction | All feature decoration disappears entirely | PENDING USER |
| S07 | Active John oil wagon | `Time-sensitive` appears **on m017's row** with no fake deadline | PENDING USER |
| S08 | Active wagon plus unrelated capability possibility | Risk label remains, incidental feature spotlight suppressed | PENDING USER |
| S09 | Click any mission row | Loads exact full original GameGuide A–final dossier in a genuine new turn; no invented result | PENDING USER |
| S10 | Click A2 `Learn mechanic` action | Loads owning Systems Atlas source; doesn't start or complete mission | PENDING USER |
| S11 | Distinguish before/after | Pre-completion introduction isn't described as item/access already owned; source maturity handled honestly | PENDING USER |
| S12 | Test mobile/keyboard | Complete row hit area, readable small annotation, no horizontal clutter, tooltip-independent essential information | UNTESTED |

**Next owner question:** Prefer A1 (inline intros), A2 (separate spotlight), or a hybrid where A2 is reserved for major newly introduced gameplay systems? Do not ratify until observed click-through feedback. The header remains LOCKED and source authority unchanged.


---

## Owner-confirmed A1 final direction — v0.8 tests

**Decision recorded:** A1 compact inline feature note accepted. Keep warm-gold stars and change visible label from "Introduces" to **"New possibilities"**. Reject A2 separate spotlight and permanent featured mission presentation. Header still locked.

| Test | Pass criterion | Current state |
|---|---|---|
| Inline appearance | Golden sparkles followed by "New possibilities · Fishing" or the appropriate source-backed mechanic, inside its matching mission row | Design approved, client pending |
| Regular mission | No invented system opportunity or visual decoration when no relevant mechanic exists | Client pending |
| Source truth | Future mechanic introduction does not claim the player already owns/unlocked it | Client pending |
| Urgent mission | Small "Time-sensitive" row annotation for specifically active John wagon stage; no global card/countdown | Client pending |
| Action | Whole row opens the complete original Guide; icon and label are not extra controls | Client pending |
| Responsive | Short subline wraps legibly on phone without altering locked header | Mobile untested |

These criteria supersede the earlier A1/A2 selection test. Do not mark actual click-through PASS until the owner has tried it.


---

## Owner LOCK v0.9 — final Mission Control checks

The owner selected A1 permanently for this design iteration and approved the final two corrections. These checks supersede conflicting earlier provisional S-series cases (especially S08, which previously suppressed an unrelated A2 spotlight).

| Check | Expected behavior | Status |
|---|---|---|
| C01 · Casing | Inline label reads **`New Possibilities`**, with both words capitalized | OWNER APPROVED; CLIENT PENDING |
| C02 · Accent | Small sparkles use the existing warm-gold highlight; no separate feature spotlight | OWNER APPROVED; CLIENT PENDING |
| C03 · Urgency and features | In **Urgent** mode, John shows **Time-sensitive** while Hosea *still* shows **New Possibilities · Stables & horse care** | OWNER APPROVED; CLIENT PENDING |
| C04 · Ordinary rows | Dutch has no invented feature annotation | CLIENT PENDING |
| C05 · Full guide | Clicking a mission requests exact original full Field Guide and does not change campaign status | CLIENT PENDING |
| C06 · Header preservation | Current Chapter II rail, dots, medal colors, hover title and Home are unchanged | OWNER LOCKED |
| C07 · Mobile | Text wraps without turning urgency or feature annotation into large cards | UNTESTED |

**Locked decision:** no more A1/A2 layout comparison needed; no automatic suppression of feature lines when another mission is urgent. Keep actual source and client behavior as separately verified gates. No self-merge.
