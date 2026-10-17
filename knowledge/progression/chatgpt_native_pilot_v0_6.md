# RDR2 Living Adventure Companion — ChatGPT-native Pilot v0.6

**Prepared:** 2026-10-17 · **Status:** `READY_FOR_USER_CLICKTHROUGH` (NOT accepted, not merged) · [Issue #59](https://github.com/L33TW0RLD/rdr2-hub/issues/59) · [Draft PR #60](https://github.com/L33TW0RLD/rdr2-hub/pull/60).

**Objective:** Show **real ChatGPT-native in-message interactive controls** for a small connected Chapter 2 path: Free Roam → Camp Development → Pearson Crafting → source-grounded Hunting Atlas → back; Story board → source-grounded Mission Control Field Guide v1.1 → optional related Atlas → back; chapter progress and player actions are **fictional**. The user must click through and confirm actual behavior before recording a live-client acceptance result.

## 1. Source readback completed (real documents, not fake save data)

Sources checked directly from the linked GitHub repositories' current `main`:

| Source | SHA (GitHub blob) | Confirmation |
|---|---|---|
| `L33TW0RLD/rdr2/missions/chapter_02/07_polite_society_valentine_style.md` | `a713b07fd7a3eaec2abd6b9cc259479cc46f78f5` | Original Field Guide v1.1; seven Phase A–G entries; 26 planning checkboxes; two Gold objectives (runaway horse returned; Karen located in 45 seconds) |
| `L33TW0RLD/rdr2/missions/chapter_02/08_americans_at_rest.md` | `352f8dd4a8160865b274e4cb2bce97c679d94ff1` | Original Field Guide v1.1; five Phase A–E entries; 18 planning checkboxes; two Gold objectives (rescue Javier under 15 seconds, Tommy defeated within 1:30) |
| `L33TW0RLD/rdr2/protocol/walkthrough_presentation.md` | `40f23a1235da84f69cce3ccf0b0da643a2ee88c9` | Approved chronological A–final, Gold metrics, inline critical warnings and independent optional Intel |
| `L33TW0RLD/rdr2-hub/systems_atlas/dossiers/d04_hunting_transport_v0_1.md` | `2853322e51e57fcc8ef4c59d775a83cbb520df5c` | Verified file is present; **RESEARCHED — REVIEW PENDING**; study three-star target, species-specific weapon and ammo, clean lethal shot, inspect carcass quality, then route whole carcass/pelt to recipient |
| `L33TW0RLD/rdr2-hub/systems_atlas/dossiers/d03_satchels_crafting_v0_1.md` | `58b683a4dd4d6b320f315be9656a98ac1d8bfd28` | **RESEARCHED — REVIEW PENDING**; Ledger gate, separately bought tools, item-specific unlock and three perfect required materials, Pearson crafting donation distinct from provisions/funds |
| `L33TW0RLD/rdr2-hub/systems_atlas/dossiers/d02_camp_ledger_upgrades_v0_1.md` | `cbb104f6c7010396aa5af11b856ca22f3afbf3a9` | **RESEARCHED — REVIEW PENDING**; camp funds vs Arthur cash; debt returned+deposited normal Ledger gate; tools purchased separately |
| `L33TW0RLD/rdr2-hub/systems_atlas/dossiers/d01_horse_lifecycle_v0_1.md` | `95becdc8b8c044e81fc17044a8ef9dba48557eb7` | **RESEARCHED — REVIEW PENDING**; main saddled horse vs temporary horse, Hosea normal stable/brush route, no owned mount inferred |

GitHub `rdr2/main` at read: `286facbbcccffc63868f42ac277deaf290afe981`. Hub `main` at read: `ee18b0842ac1f2a3b472b7580e295536da4c2c8f`.

**Critical source-state separation:** original dossiers contain *historical actual player result records*, including **completed Gold**. The hypothetical user journey intentionally starts BEFORE Chapter 2 missions, so those historical statuses must never be copied into the scenario's medal ledger or marked "Gold earned" during the pilot. Source readback means content is available to author a test; it is not a new active-campaign preflight.

## 2. What is actually being tested in the ChatGPT client

1. **Interactive Home:** Chapter 2 simulated header, two manually **observed in fixture** named story markers, one optional Camp Development project and outing.
2. **Drill-down:** Open Camp → Pearson. Correct availability: tools not purchased in fictional arrival, no crafted satchel assumed. Return from Pearson to Camp and Home.
3. **Atlas detour:** Open Hunting Atlas with an accessible source-backed practical excerpt, genuine RESEARCHED / REVIEW PENDING status; return to Pearson rather than resetting project.
4. **Mission selection:** Choose Uncle or Javier from the scenario's two observed fictional Story markers. The source-backed Field Guide should retain *all chronological phases and Gold constraints*; actual player medal/save results remain wholly excluded.
5. **Field Guide → Atlas → Field Guide:** Return to the same mission and relevant source. Where a next-turn reload is requested, it must explicitly read the entire original GameGuide dossier, not substitute a summary or promise temporary checkbox restoration.
6. **Local planning:** Checkbox or focus actions affect the in-message local planning UI only. They are NOT evidence that Arthur completed a phase.
7. **Source freshness:** A static in-message UI may reuse source content already loaded by the assistant while this answer was prepared; clicking Back within that UI is **not** a fresh GitHub read. A new turn/explicit re-read is a different, externally verified operation.

**Provisional acceptance outcome:** `NOT YET OBSERVED BY USER`. The assistant may prove source readback, prepare the source-grounded response and confirm registered control callbacks syntactically, but cannot assert the user's browser actually clicked/rendered/returned until the user reports their observation.

## 3. Scope and no-go

- The user has **not authorized** actual RDR2 save connection, background monitoring, gameplay state syncing or editing `rdr2/campaign/**`.
- No files in the original `rdr2` repository changed. No GameGuide Gold, satchel, horse, wallet or Honor status updates.
- No Hub shared dashboard/companion UI files outside `knowledge/progression/` edited; specialist owners retain their lanes.
- The research dossiers' review status remains unchanged.
- A project click or planning checkbox is not mission progress; authored demonstration text is not a new canonical source.
- No actual-client acceptance report should be published as passing until the user completes the click-through and shares exact results.
- The pilot is in the conversation as a **ChatGPT-native interactive display**, not a deployed application or linked standalone artifact.

## 4. User acceptance checklist (pending)

| Test | What user should verify | State |
|---|---|---|
| P01 | On desktop, Home → Camp → Pearson → Hunting → Back lands on Pearson | PENDING USER |
| P02 | Hunting lesson gives correct safe quick instructions, and source status remains review pending | PENDING USER |
| P03 | Mission Control shows both first-available **fictional** choices, not forced Order 007 then 008 | PENDING USER |
| P04 | Original Field Guide preview retains all A→final phases and each mission's Gold objectives; full source reload control works when invoked | PENDING USER |
| P05 | Mission → Atlas → Back keeps mission identity, without marking medal/save progress | PENDING USER |
| P06 | Planning checkbox does not silently write or claim actual mission progress | PENDING USER |
| P07 | On mobile, controls and mission sections fit without awkward horizontal scrolling | UNTESTED |
| P08 | Across turns, full source reconstruction works and temporary in-message UI state is not falsely claimed persistent | UNTESTED |

**Next checkpoint:** once user reports actual click-through behavior, record exact observed pass/fail, browser/platform and any source/render defects. Current file is a prepared test, NOT evidence of a client pass.
