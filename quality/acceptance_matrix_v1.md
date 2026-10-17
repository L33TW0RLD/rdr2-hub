# RDR2 Hub — Product Acceptance Matrix v1

**Status:** PROPOSED QUALITY GATES · 2026-10-17. This file records **expected verification**, not automatic PASS scores.

| Layer | Minimum acceptance | Evidence required | Current observation |
|---|---|---|---|
| Repository architecture | One authoritative owner per fact; zero overlapping writable agent paths; discoverable content contracts | Tree inspection + exact branch diff + coordinator lease audit | One owner/source contract per Atlas dossier and exact 3-path branch diffs verified across four research waves; full product integration still untested |
| Mechanics research | Claim-level sources, correct Story Mode applicability, uncertainty, gate/owned separation, spoiler scope | Sourced dossier + independent review + exact ref readback | 28/28 source-backed dossiers merged; four coordinator cross-reviews. **Claims remain REVIEW PENDING**, individual mechanic adoption/game tests not independently passed |
| Free Roam content | Meaningful optional PROJECT, locally feasible OUTING, organic DISCOVERY, can-wait distinction | At least one sourced/conditional project+outing package + content review | Conditional Camp / Heartlands examples on remaster branch, not player progress |
| Mission Control | Correct mission, all Gold metrics, complete A→final approved guide, chronological risks, multi-open Intel | Original mission preflight + real client report | October 17 desktop user-reported full Old Friends guide restoration: 5/5 UI checks; other missions and clients not verified |
| Companion | Player intent recognized, plausible optional next step, credible warnings only, source-aware return packet | Scenario and actual chat examples; negative unknown-gate tests | Model B behavior being designed by task 010; no autonomous background system |
| ChatGPT dashboard | Compact contextual header, coherent primary view, readable mobile flow, functional controls and text fallback | User-run desktop+mobile click-through evidence | Chat-native interactions possible; no packaged/persistent application proven |
| State reconciliation | Player report separated from verified/save/readback; only GameGuide writes original campaign | Controlled write-authority test with verifiable readback | Existing GameGuide protocol; Hub writing not authorized |
| Continuity | Mission→Atlas→complete mission, Free Roam→Atlas→original project; no checkbox persistence claim | Actual multi-turn user interaction and source readback | October 17 conversational routing and desktop full-guide restoration user-observed; not cross-thread guarantee |
| Coverage | Progressively documented mechanics and missions, gaps explicit | Manifest vs real files + source IDs | 28/28 Systems Atlas research dossiers exist on main (source coverage complete); **original GameGuide's full-mission Gold coverage and UI/product acceptance remain separate, unverified** |

**Research-production checkpoint:** [Atlas postresearch closeout audit](2026-10-17_atlas_postresearch_closeout.md) records exact scope and remaining gates. The mechanics-research row is **content coverage, not a PASS verdict on game mechanics**. Keep player-state tests and UX functionality in their own acceptance rows.

## Regression scenarios (minimum)

1. User says "let's play" with chapter but unknown actual position: suggest plausible choices **without a fake map pin**.
2. User asks for a full mission with Gold: load original source and ALL phases, no summary substitute.
3. User opens two Intel drawers: both can stay open; warning never moves inside a drawer.
4. User detours Mission → Atlas → Mission: re-read and re-render **full guide**, reset local planning state honestly.
5. User requests camp upgrade but Ledger state unknown: check actual gate and menu, no fabricated funds.
6. User asks perfect pelts: study/quality/appropriate tool/actual outcome; research status and current weapon availability separate.
7. Player encounters a stranger while hunting: optional discovery can replace outing; no forced return to project.
8. A verified active irreversible mission event occurs: show one specific immediate warning and route to Mission Control.
9. A merely speculative chapter-limited event exists in research: **do not** force urgent warning.
10. Player reports a Gold medal without a save: distinguish medal, latest save report and saved-slot readback.
11. New thread: recover canonical files; never promise restored UI checkbox/drawer state.
12. Agent finishes one dossier: verified branch handoff, then new task in same specialist thread with **new branch and lease**.

## Evidence classifications

- `WRITTEN_EXAMPLE` — authored text only, never a passed runtime test.
- `REPO_VERIFIED` — exact committed content read back by branch/ref; says nothing about running UI.
- `CLIENT_OBSERVED` — named platform, user observation, what actually worked (e.g. five listed desktop controls).
- `NOT_TESTED` — not observed; never report it as failed.
- `FAILED` — directly reproduced failure, with steps and environment.
- `GAME_EVIDENCE` — player report or clear in-game screenshot; separate from every UI test category.

**Product rule:** Test checkboxes and content checklists are NOT canonical RDR2 achievements. A passed UX test never upgrades Atlas research to ADOPTED or authorizes a live game report write.
