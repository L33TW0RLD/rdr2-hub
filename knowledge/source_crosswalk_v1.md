# Source Crosswalk — Legacy GameGuide → Unified RDR2 Hub

**Status:** READ-ONLY INTEGRATION MAP · 2026-10-17. No automatic content migration, repo retirement or authority transfer.

| Existing source | Intended Hub consumer | Action now | Migration constraint |
|---|---|---|---|
| `rdr2/campaign/current_state.md` | Header, current campaign review, safety context | Fetch **latest** canonical main when needed | Never duplicate Gold/mission/save truth in Hub |
| `rdr2/campaign/mission_ledger.md`, `save_log.md`, `resources.md`, `collectibles_and_missables.md` | Mission, Free Roam recommendations | Read only after relevant need or report | Player evidence + GameGuide-only authorized writes |
| `rdr2/missions/` (prepared operations and templates) | Mission Control **complete Field Guide** | Link/read by exact path, preflight and render entire applicable mission | Never produce a second shortened authoritative mission file |
| `rdr2/protocol/walkthrough_presentation.md` | Dashboard mission view | Treat approved Field Guide v1.1 as mandatory layout | Don't redesign mission flow silently |
| `rdr2/protocol/mission_preflight.md`, `campaign_command.md` | GameGuide / Hub routing | Check before live mission or report write | Hub research agents cannot write gameplay |
| `rdr2/guides/hunting/` | S12/S10/S13 research and outings | Existing material is `RESEARCHED — REVIEW PENDING`; link and verify | Don't relabel research ADOPTED on import |
| `rdr2/guides/horses/` | S06 dossier | Legacy topic brief/NOT STARTED; D01 owns research | Don't claim brush, stable or horse unlocked |
| `rdr2/guides/inventory/` | S17 item-routing research | Architectural DRAFT; source claims require checking | Don't treat schema blueprint as gameplay fact |
| `rdr2/guides/completion/` | Intermission feasibility, missables | Research leads with mixed status | No blanket "chapter now expiring" without active trigger |
| `rdr2/guides/mission_intelligence/` | GameGuide preflight | Read with exact per-dossier adoption status | No second Mission Control guide |
| `rdr2-hub/systems_atlas/mechanics_taxonomy_v0_2.md` | Topic lookup and source navigation | INDEXED/proposed guide map only | Sxx.Mnn status and S31 remain under review |
| `rdr2-hub/systems_atlas/taxonomy_research_backlog_v0_1.md` | Producer planning | Route D01–D28 into bounded research assignments | Dossier existence cannot imply completion/approval |
| `rdr2-hub/free_roam/decision_model_v0_1.md` | Companion selection behavior | Proposed activity grammar | Not a completed player activity |
| `rdr2-hub/architecture/` | Integration design | Historical design source; link not clone | All unratified gates still need owner choice |

## No forced big-bang migration

**Stage A:** Retain original `rdr2` as canonical GameGuide and original missions. The Hub becomes the unified **consumer** and producer of new Atlas/free-roam/dashboard design.

**Stage B:** Establish structured research, evidence and activities in the Hub; test one working vertical slice (camp project → local outing → mechanics lesson → return; and full mission restoration). Any newly researched fact remains labeled review pending.

**Stage C:** Only with explicit owner approval, consider migrating mission authority/content or implementing a structured read adapter. Require a file-by-file inventory, canonical precedence, path redirects, links, medal identity and regression tests. Until then do not delete, move or rewrite original mission files.

**Documentation debt:** The legacy top-level `rdr2/README.md` has historically contained stale campaign summaries. The Hub must fetch `campaign/current_state.md` first; use the README as navigation only, never as a progress counter.

## What to publish when research expands

A work item must link its `record_id`, exact dossier path, source claims, status, dependent projects/outings and unresolved tests. A research agent may prepare substantive files on its registered branch; integration is a separate coordinator/owner-controlled step. Do not create dozens of empty topic files to simulate coverage.
