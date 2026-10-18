# Field Desk — Real Chapter 2 session integration v1

**Status:** TESTED PURE COMPOSER / CHATGPT PRESENTATION ADAPTER INPUT. **Not** a live save decoder, ChatGPT client deployment or canonical gameplay ledger.

**Purpose:** Turn yesterday's Field Desk design and research into a reproducible, evidence-disciplined integration contract. No screenshot-fixture gameplay facts, no new Mission/Atlas taxonomy, and no player progress mutation.

## Sources and authority

- Original `L33TW0RLD/rdr2/campaign/current_state.md`, `mission_ledger.md`, `save_log.md`, `collectibles_and_missables.md` are GameGuide-owned. Fresh source reads supersede the dated `actual_snapshot.json`.
- Original `rdr2/missions/**` owns complete Field Guide v1.1 source content. Every medal-rail or selected mission action must request **full original A→final**, never a summary.
- Hub `systems_atlas/**`, particularly D03, D20, D27 and `unlock_and_dependency_map_v0_1.md`, owns researched conditions, still review pending.
- Hub design PR #62 owns the approved-looking header, Chapter II 18 thin slots, compact Mission Control with **NEW POSSIBILITIES**, and **Your World** mini focus controls. Screenshot replay PR #63 is **synthetic and never gameplay data**.
- Hub progression PR #60 is a **separate unmerged synthetic engine**; this mini composer makes **no** claim to merge/adopt it.
- Two user ZIP archives inspected 2026-10-18 were byte identical. Only the four save labels/percentages in the JSON snapshot are published here, not raw saves, derived character/inventory data, identifiers or hashes.

## Functional contract

1. Load fresh GameGuide campaign/medal state, then source-backed Hub rules. Never overwrite `campaign/**`.
2. Compose the 18-slot rail from **best recorded medal**, independently of current map availability. **3 Gold / 1 Silver / 0 Bronze / 4 of 18** as of the snapshot.
3. Draw map-marker dots / list currently available missions **only from an explicit current PLAYER_OBSERVATION**. Absent marker data is UNKNOWN, not unavailable.
4. Separate Story candidate Hosea, confirmed Silver cleanup 010, and non-Gold Strauss debt setup. Never falsely present a known completed mission as available.
5. Project chain: one Strauss debt **deposited** → Ledger actually observed → Leather Working Tools **purchased** → recipe-level task + exact materials. Any unobserved step remains a check, not an achievement.
6. The first completionist candidates have **exact target / gate / verification**. Chapter-sensitive camp book and notes remain unverified, All That Glitters save label cannot credit the treasure chain.
7. When the John oil-wagon task is *explicitly reported active*, suppress leisure outings and protect the skippable Gold stage. When a chapter-exit marker is *observed*, prioritize review, not an invented expiry.
8. `composeFieldDesk(record, observation)` is side-effect free. Observation must explicitly use `source:"PLAYER_OBSERVATION"`. Contradictions remain visible. A UI selection, checklist tick or displayed recommendation cannot update Gold, money, items or saves.
9. A ChatGPT button may open a **new source-reading conversation turn** or display a local focus; the client must never claim the raw JavaScript automatically fetches GitHub or watches the game.

## Acceptance

Run `node dashboard/field_desk_v1/test.mjs` on Node 22+. Baseline medalline, provenance, no fabricated markers, map evidence, ledger/tools separation, risks, conflicts and rejection are checked. The same ten assertions were executed in an isolated JS source authoring runtime before writing this branch; native ChatGPT UI click-through still needs a user test.

## Rehydrate in a later ChatGPT session

Request: **Open the Field Desk from `L33TW0RLD/rdr2-hub`, reading the latest approved design and `dashboard/field_desk_v1/` plus fresh original `L33TW0RLD/rdr2/campaign/`; reconcile any new save metadata, then render the actual Chapter 2 experience. No simulation data as campaign facts.**

**This branch is isolated.** No original GameGuide file, Hub main file, existing agent PR or raw save is changed.
