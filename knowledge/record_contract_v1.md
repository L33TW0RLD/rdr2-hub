# Knowledge Record Contract v1 — Research to Playable Content

**Status:** PROPOSED / NONEXECUTABLE SCHEMA · 2026-10-17.
This is a content-authoring contract, **not** an invented machine-readable database or adopted Atlas schema. It complements the proposed `systems_atlas/taxonomy_schema_v0_1.md` without freezing any disputed IDs.

## 1. Minimum common metadata

Every publishable mechanics dossier or Free Roam activity should make these fields discoverable (frontmatter or human-readable heading is acceptable until adapter design is approved):

| Field | Required meaning |
|---|---|
| `record_id` / `version` | Unique within record family; stable aliases/migrations proposed separately |
| `kind` | `mechanic`, `project`, `outing`, `intermission`, `discovery` or external `mission_reference` |
| `status` | `DRAFT`, `INDEXED`, `RESEARCHED_REVIEW_PENDING`, `ADOPTED`, `NEEDS_RECHECK`; no automatic promotion |
| `applicability` | Story Mode, platform/edition differences, known chapter/region applicability or UNKNOWN |
| `spoiler_tier` | `T0/T1` default; `T2/T3` behind explicit opt-in |
| `evidence` | Claim → exact source/URL, checked date, confidence, contradiction or UNKNOWN |
| `gates` | General rule prerequisites with statuses; NEVER a player-specific `unlocked_now` flag |
| `relationships` | Named dependencies/cross-links to relevant mechanic or activity records |
| `outcome_types` | What the player could observe/confirm, not a claimed recorded outcome |
| `consumer` | Mission, Free Roam, Atlas, Companion or dashboard as read-only contexts |
| `owner` / `review_gate` | Who researches, who can adopt, whether player-specific claims need GameGuide |

Example header (illustrative, not an approved schema registry):

```yaml
record_id: FR.PROJECT.CAMP
version: 0.1
kind: project
status: DRAFT
scope: RDR2 Story Mode
spoiler_tier: T0/T1
related_mechanics: [S09.M01, S10.M02]
player_progress_authority: L33TW0RLD/rdr2/campaign/
```

**Do not store** `owned_horse`, `current_cash`, `gold_earned`, `mission_completed`, `ledger_unlocked`, `item_collected` or save-slot claims as permanent properties of generalized knowledge records.

## 2. Claim-level evidence rules

1. Distinguish stable **general game rule**, **conditional unlock**, **tactical advice**, **uncertain mechanic** and **player-observed fact**. They never inherit each other's confidence.
2. Where a claim affects one-time content, Honor, irreversible consumption, a tight Gold timer or chapter expiry, give the actual claim, source provenance, safe fallback and degree of urgency; do not turn a speculative gate into a hard block.
3. Verify Story Mode, edition/platform and source age where material. Single community anecdote is a research lead, not a guaranteed rule.
4. A source checked date is NOT a game patch version. Cite original source URLs; avoid orphaned source labels.
5. An authored record may link another provisional ID but must say if the target is `INDEXED`, `REVIEW PENDING` or `ADOPTED`.
6. Every meaningful `REQUIRES` hard edge must be independently supported; relationship `INTERACTS_WITH` alone does not mean prerequisite.
7. Content must survive source absence: display an honest `UNKNOWN` and recommend an in-game observation, not invent a number, item or feature.

## 3. Exact handoff by content type

**Mechanic dossier:** definition, controls and feedback, general gates, effect/cost/irreversibility, source claims, related mechanics and three spoiler-safe practical examples. Owning location: `systems_atlas/dossiers/`, per individual lease. Does NOT choose live player outings.

**PROJECT:** one longer-term player purpose, meaningful optional milestones, conditional prerequisites, relations to Atlas and a few suitable outing candidates. Owning location: `free_roam/content/projects/`.

**OUTING:** organic small adventure, feasible conditional start, how to learn/practise, possible discovery, stop/safety boundary, follow-up question and optional project tie. Owning location: `free_roam/content/outings/`.

**INTERMISSION:** source-bounded window after mission or at regained freedom; prioritizes player interest and credible activated risks; proposes one featured project + outing, allows Story immediately. Owning location: `free_roam/content/intermissions/`.

**DISCOVERY:** response to something observed; spoiler budget, safe curiosity prompts, optional irreversible warning; never predefined surprise map pins. Owning location: `free_roam/content/discoveries/`.

**MISSION REFERENCE:** original `rdr2/missions/chapter_xx/` remains canonical; Hub keeps a *reference* and preflight adapter, not duplicate mission narratives or medal ledgers.

## 4. Producer → Consumer acceptance

A content package is ready for review when it answers: **What is it? Can this player probably attempt it (versus merely unlocked in theory)? Why would it be enjoyable/useful now? What must be protected? What does success look like in-game? How reliable are the claims? What happens next?** Any unknown player-specific prerequisite must be explicitly marked.

**Adoption and implementation are separate:** GitHub file created ≠ verified research ≠ adopted guidance ≠ user-tested dashboard ≠ player-completed activity.
