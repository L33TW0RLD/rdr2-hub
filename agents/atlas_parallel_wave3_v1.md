# Systems Atlas — Wave 3: Nine Independent Research Lanes

**Registered:** 2026-10-17 · **Final status:** all 9 task dossiers/checkpoints/handoffs verified and delivered, integrated as **RESEARCHED — REVIEW PENDING / NOT ADOPTED**. Historical registration below is preserved. No automatic agent launch was implied.
**Repository:** `L33TW0RLD/rdr2-hub` · **Source baseline:** `d3bc807c75633fec042f4a34af72515a24cc2696`
**Owner scope:** Wave 3 delivered **9 dossiers**. Wave 4 subsequently delivered the remaining 8; **28/28** dossiers are now integrated as review-pending research. All existing Wave 1/2 research is `RESEARCHED — REVIEW PENDING`, NOT `ADOPTED`.

## Authoritative exact routing — one unique task per specialist conversation

| Lane | Research | Task ID | Issue | Branch | Exclusive dossier |
|---|---|---|---|---|---|
| 1 | **D09** — Dead Eye, cores and growth; **requeued existing assignment** | `atlas-deadeye-016` | [#19](https://github.com/L33TW0RLD/rdr2-hub/issues/19) | `agent/atlas-deadeye-016` | `systems_atlas/dossiers/d09_cores_deadeye_growth_v0_1.md` |
| 2 | **D10** — clothing, weather, identity and disguises | `atlas-clothing-020` | [#27](https://github.com/L33TW0RLD/rdr2-hub/issues/27) | `agent/atlas-clothing-020` | `systems_atlas/dossiers/d10_clothing_temperature_disguise_v0_1.md` |
| 3 | **D16** — fishing, legendary fish and tackle | `atlas-fishing-021` | [#28](https://github.com/L33TW0RLD/rdr2-hub/issues/28) | `agent/atlas-fishing-021` | `systems_atlas/dossiers/d16_fishing_legendary_fish_v0_1.md` |
| 4 | **D17** — legendary animals, Trapper/Fence exceptions | `atlas-legendary-022` | [#29](https://github.com/L33TW0RLD/rdr2-hub/issues/29) | `agent/atlas-legendary-022` | `systems_atlas/dossiers/d17_legendary_animals_rewards_v0_1.md` |
| 5 | **D18** — Stranger strands and optional quest taxonomy | `atlas-strangers-023` | [#30](https://github.com/L33TW0RLD/rdr2-hub/issues/30) | `agent/atlas-stranger-023` | `systems_atlas/dossiers/d18_stranger_strands_quests_v0_1.md` |
| 6 | **D20** — collection families, mailing and hand-ins | `atlas-collections-024` | [#34](https://github.com/L33TW0RLD/rdr2-hub/issues/34) | `agent/atlas-collections-024` | `systems_atlas/dossiers/d20_completion_collections_v0_1.md` |
| 7 | **D22** — rare gear, unique items and full Compendium edge cases | `atlas-unique-025` | [#31](https://github.com/L33TW0RLD/rdr2-hub/issues/31) | `agent/atlas-rare-items-025` | `systems_atlas/dossiers/d22_unique_equipment_compendium_v0_1.md` |
| 8 | **D24** — replay, saves and medals | `atlas-replay-026` | [#32](https://github.com/L33TW0RLD/rdr2-hub/issues/32) | `agent/atlas-replay-026` | `systems_atlas/dossiers/d24_replay_saves_medals_v0_1.md` |
| 9 | **D27** — all nine challenge strands, ranks and rewards | `atlas-challenges-027` | [#33](https://github.com/L33TW0RLD/rdr2-hub/issues/33) | `agent/atlas-challenges-027` | `systems_atlas/dossiers/d27_nine_challenge_strands_v0_1.md` |

**D09 retains the original Wave 2 three-file lease and historical branch**:
- `systems_atlas/dossiers/d09_cores_deadeye_growth_v0_1.md`
- `agents/checkpoints/atlas_deadeye_016.md`
- `agents/handoffs/2026-10-17_atlas_deadeye_016.md`

The eight new tasks each additionally own **only**:
- `agents/checkpoints/<their exact task slug with underscores>.md`
- `agents/handoffs/2026-10-17_<their exact task slug with underscores>.md`

Read **the exact issue** for the explicit paths. No shared index, `agents/registry.md`, old dossier, sibling specialist file, original `L33TW0RLD/rdr2` or decoder file is owned by any task.

## Handoff and safety rules

1. Assign **exactly one conversation to each issue**; nine concurrent writer lanes need nine distinct chats. Existing specialist chats may be reused only if they are not simultaneously working on another issue. Never paste D18 into the D20 chat and never have two chats start D09. **Post-delivery audit:** D09 handoff reports owner explicitly approved a task-local thread transfer, while the exact Issue #19 branch and lease remained exclusive. Coordinator recorded this in the [Wave 3 review](../systems_atlas/reviews/2026-10-17_wave3_cross_dossier_review.md); do not infer Agent 009 authored that dossier.
2. In each chat: read current `main` registry, THIS plan, matching issue and agent contract. **Switch to assigned task branch**. Branch may be behind newer `main`; that is expected. Do not rebase/reset or force-push. If task checkpoint already exists, inspect its content and current SHA before attempting an update, instead of creating a duplicate and getting HTTP 422.
3. Commit a distinct **initial task checkpoint**, then complete an 11-section source-backed dossier with typed provisional taxonomy links, conditional gates, item/progress evidence boundaries, 3 spoiler-light Chapter 2 examples, claim-by-claim sources/checked dates, disputed facts and read-only consumer handoff.
4. Author only the task's three leased paths. **No worker may modify this table or Registry.** An actual conflicting task owner or write error is a stop-and-report, not a reason to overwrite.
5. Finish the **research task** at `DELIVERED_REVIEW_PENDING`, verify exactly three scoped changed paths and the terminal GitHub branch head, and leave self-merging/adoption to coordinator. `RESEARCHED — REVIEW PENDING` is the only permitted content maturity from specialist work.
6. Cross-domain ownership: D10 uses D13 law/D11 travel read-only; D16 owns tackle and fish behavior while D20 owns collectible hand-ins; D17 owns legendary/Trapper mechanics, D22 owns rare items/Compendium exclusions; D18 owns Stranger strands and D08 stays primary for Chapter 2 urgency; D24 owns replay semantics but **not** user campaign results, D27 owns 9×10 rank mechanics and D12 remains primary for herbal crafting. No duplicate source of truth.
7. **Save Intelligence PR #24 is separate, experimental and read-only**; D24 does not run, rewrite, merge or claim deterministic player-state authority from it. The original `rdr2/campaign/` remains the ONLY authoritative player progress store.

## Completion and coordinator check

All nine verified deliveries were cross-reviewed for source boundaries, exact task path leases and unresolved contradictions in the [Wave 3 review](../systems_atlas/reviews/2026-10-17_wave3_cross_dossier_review.md). The integration is research-reference-only; no mechanic becomes ADOPTED through merging. Wave 4 eight tasks subsequently [delivered and integrated](../systems_atlas/reviews/2026-10-17_wave4_final_cross_dossier_review.md); this file is historical routing, not a live queue.

**Key separation:** Agent task `MERGED` = source docs integrated; research `RESEARCHED — REVIEW PENDING` = unratified; player mission/Gold/Honor/inventory achievements = original GameGuide-only, not inferred from Atlas.
