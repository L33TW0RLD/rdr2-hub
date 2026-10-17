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
