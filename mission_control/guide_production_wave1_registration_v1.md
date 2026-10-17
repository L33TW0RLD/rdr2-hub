# Mission Control — GameGuide Production Wave 1 Registration v1.0

**Registered:** 2026-10-17 · **Status:** SEVEN AGENTS REGISTERED / NOT LAUNCHED · **Coordinator authority:** owner instruction to merge Wave 1 research and register guide-production agents.
**Original authoring repository:** `L33TW0RLD/rdr2` · **All branch starting SHA:** `9112e163a1251dd7c15117361e7b8760bf5b8a9a` (2026-10-17 17:48:45 UTC).
**Hub research baseline:** `061e51d842286a50363bf8e2c8b71e4dcd5b62b1` — [research-only PR #58 MERGED](https://github.com/L33TW0RLD/rdr2-hub/pull/58).
**Research status:** eight chapters source-documented and integrated as **RESEARCHED — REVIEW PENDING / NOT ADOPTED**, standard-game 104 Gold identities **PROVISIONAL**.
**Campaign:** original `L33TW0RLD/rdr2/campaign/**` exclusively authoritative and protected. All player progress/status remains as most recently reported there; no agent may mark medals, possessions, chapter transitions, mission started or saved.

## Authoritative producer registry

All tasks use unique registered original-repo branches created at the SAME exact starting commit. A row's directory wildcard authorizes **only NEW individual mission .md files** inside that directory, and expressly excludes README/index updates. A mission's proposed shelf ID is not a medal count or a fixed gameplay order. All other paths protected.

| Lane | Original-repo issue | Task and branch | Exclusive mission write path | Exclusive checkpoint | Exclusive handoff | Status |
|---|---|---|---|---|---|---|
| 1 · Chapter 2 gap | [#1](https://github.com/L33TW0RLD/rdr2/issues/1) | `gameguide-strange-kindness-044` · `agent/gameguide-strange-kindness-044` | `missions/chapter_02/24_a_strange_kindness.md` only | `agents/checkpoints/gameguide_strange_kindness_044.md` | `agents/handoffs/2026-10-17_gameguide_strange_kindness_044.md` | REGISTERED_NOT_LAUNCHED |
| 2 · Chapter 3 | [#2](https://github.com/L33TW0RLD/rdr2/issues/2) | `gameguide-chapter3-045` · `agent/gameguide-chapter3-045` | `missions/chapter_03/*.md` new only | `agents/checkpoints/gameguide_chapter3_045.md` | `agents/handoffs/2026-10-17_gameguide_chapter3_045.md` | REGISTERED_NOT_LAUNCHED |
| 3 · Chapter 4 | [#3](https://github.com/L33TW0RLD/rdr2/issues/3) | `gameguide-chapter4-046` · `agent/gameguide-chapter4-046` | `missions/chapter_04/*.md` new only | `agents/checkpoints/gameguide_chapter4_046.md` | `agents/handoffs/2026-10-17_gameguide_chapter4_046.md` | REGISTERED_NOT_LAUNCHED |
| 4 · Chapter 5 | [#4](https://github.com/L33TW0RLD/rdr2/issues/4) | `gameguide-chapter5-047` · `agent/gameguide-chapter5-047` | `missions/chapter_05/*.md` new only | `agents/checkpoints/gameguide_chapter5_047.md` | `agents/handoffs/2026-10-17_gameguide_chapter5_047.md` | REGISTERED_NOT_LAUNCHED |
| 5 · Chapter 6 | [#5](https://github.com/L33TW0RLD/rdr2/issues/5) | `gameguide-chapter6-048` · `agent/gameguide-chapter6-048` | `missions/chapter_06/*.md` new only | `agents/checkpoints/gameguide_chapter6_048.md` | `agents/handoffs/2026-10-17_gameguide_chapter6_048.md` | REGISTERED_NOT_LAUNCHED |
| 6 · Epilogue I | [#6](https://github.com/L33TW0RLD/rdr2/issues/6) | `gameguide-epilogue1-049` · `agent/gameguide-epilogue1-049` | `missions/epilogue_01/*.md` new only | `agents/checkpoints/gameguide_epilogue1_049.md` | `agents/handoffs/2026-10-17_gameguide_epilogue1_049.md` | REGISTERED_NOT_LAUNCHED |
| 7 · Epilogue II | [#7](https://github.com/L33TW0RLD/rdr2/issues/7) | `gameguide-epilogue2-050` · `agent/gameguide-epilogue2-050` | `missions/epilogue_02/*.md` new only | `agents/checkpoints/gameguide_epilogue2_050.md` | `agents/handoffs/2026-10-17_gameguide_epilogue2_050.md` | REGISTERED_NOT_LAUNCHED |

### Editorial workload (research estimate, not actual gameplay)

- Chapter 2: one newly missing Gold dossier **A Strange Kindness**, Operation 024; four source-reported Gold objectives.
- Chapter 3: **17** distinct base-game Gold identities, including source-described no-medal setup as appropriate.
- Chapter 4: **14** base-game Gold identities, plus separately conditional Special/Ultimate-only `High and Low Finance` (not in standard 104 count).
- Chapter 5: **9** Gold identities with Chapter 6 crossover caution.
- Chapter 6: **19** Gold identities with Honor/story-choice contingencies and no double-counts.
- Epilogue I: **10** Gold identities; `Gainful Employment` cross-chapter, `The Landowning Classes` no extra Gold identity.
- Epilogue II: **11** Gold identities; `The Best of Women` no extra Gold identity.
- **Total producer targets:** one missing current chapter guide + 80 later-chapter base-game Gold entries = **81** source-index target dossiers, conditional on in-game identity verification. Nothing authorizes all 81 as user-visible, currently playable missions.
- Chapter 1 and existing Chapter 2 Operation 007–023 guides are protected and not scheduled for mass rewriting.

## Standard work contract (applies to EACH agent)

1. **Launch manually in a distinct conversation**. GitHub branch/issue registration does not run workers. Each new thread reads this plan, its EXACT original-repo issue, current original main, original `campaign/current_state.md` (read-only), approved `protocol/walkthrough_presentation.md`, `protocol/mission_preflight.md`, `missions/templates/chronological_walkthrough.md`, Hub chapter research and [cross-chapter review](../mission_control/reviews/2026-10-17_wave1_cross_chapter_review.md).
2. Before any mission authoring, commit **initial checkpoint** on own exact branch. If present inspect SHA and existing status, never blind-create. No branch rebase, reset, force push.
3. Author each mission as **complete Field Guide v1.1 source dossier**, not a short outline: verified Gold metrics, current-mission phases A→final, chronological actionable steps, critical inline Gold/loot/Honor/save warnings, independent topic Intel with evidence footers, truthful status, simple after-action reporting; disclose uncertainty and source disagreement.
4. Author source-backed normal and optional / edition-gated missions without presuming real player availability or completion. Default spoiler-light; T2/T3 only within actual selected future mission or backstage review.
5. For oversized chapter assignments, commit in **bounded batches on the same chapter lane**, update checkpoint each batch, remain IN_PROGRESS/PAUSED until complete. Do not create competing issue/branch or deliver empty placeholders.
6. Strict lease. **No writes to** `rdr2/campaign/**`, `rdr2/missions/README.md`, chapter README, existing Chapter 1/2 missions, `rdr2/protocol/**`, `rdr2/guides/**`, Hub files, sibling lanes, Save Intelligence. Coordinator owns later indexes and review merges.
7. Finish with branch-local final handoff, exact SHA, scope compare and mission-by-mission count reconciliation; stop at `DELIVERED_REVIEW_PENDING`. No self-merging, factual adoption or gameplay progress writes.

## Individual reusable launch instruction

In the **assigned** independent ChatGPT thread (not seven agents in one chat), send:

> RDR2 GAMEGUIDE — MISSION GUIDE PRODUCTION WAVE 1. Execute the registered original GameGuide GitHub Issue #N on `L33TW0RLD/rdr2` using its exact `agent/gameguide-...-NNN` branch and exclusive write paths. Recover the current Hub coordinator plan and merged review-only chapter research, then all original GameGuide contracts. Commit initial checkpoint before authoring. Work autonomously on this chapter, source-verify each complete v1.1 mission guide, preserve all protected sources and player state, maintain sequential checkpoint batches if too large, and finish with handoff and exact branch scope/terminal SHA at `DELIVERED_REVIEW_PENDING`. No self-merge, no live authority or progress mutation.

Replace #N and branch with the corresponding registered row; the GitHub issue is the task contract, not this example's abbreviated language.

## Coordinator review gates and next step

Owner/coordination decides when to start seven specialists. After delivery, independently compare each branch against its starting SHA; check all mission guide Gold sources, phase completeness, spoiled-future limits, one-time opportunities, claim confidence, exact 104 denominator and filenames/operation IDs. Integration into original GameGuide occurs ONLY via separate review/merge approval after source validation, with original campaign and existing missions protected. Research merge PR #58 alone grants **no gameplay adoption**.
