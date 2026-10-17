# D24 — Story Mode mission replay, saves, checkpoints and Gold medal accounting

**Record ID:** ATLAS.D24 · **Version:** v0.1 · **Kind:** mechanic / completion-evidence reference  
**Maturity:** **RESEARCHED — REVIEW PENDING**; **NOT ADOPTED** · **Checked:** 2026-10-17 (web/source review date; **not** a tested installed patch)  
**Task:** atlas-replay-026 · [Issue #32](https://github.com/L33TW0RLD/rdr2-hub/issues/32) · **Scope:** RDR2 **Story Mode**, original PC / PS4 / Xbox One releases, updated platform branches including those named in Rockstar 1.15 notes; PlayStation and Xbox backwards compatibility not separately field-tested; Stadia historical, no current availability claimed. **Red Dead Online excluded.**  
**Primary provisional mechanic leaves:** S30.M02 (Gold scoring), S30.M03 (replay), S30.M04 (saves/checkpoints); S29.M02 (personal all-Gold), S29.M03 (achievements). Cross-references to S30.M05, S17.M04, S05.M01, S11, S21, S28 and D08/D15/D22 are **read-only**. ID conventions remain UNRATIFIED.  
**Default spoiler boundary:** T0 controls/rules + T1 Chapter 2 risk only. Later-chapter events and special mission names are not required to understand this guide; future-story context is confined to section 4 as T2 notes.  
**Authority:** This dossier defines general rules only. The original [GameGuide campaign](https://github.com/L33TW0RLD/rdr2/tree/main/campaign) alone records actual player medals, saves, Honor, inventory or requests. Experimental [Save Intelligence PR #24](https://github.com/L33TW0RLD/rdr2-hub/pull/24) is non-authoritative, read-only and was **NOT RUN** here. General claims carry local claim IDs C01–C24 and source IDs E01–E18 below.

> **Preservation-first rule:** A replay is a new opportunity for a mission medal; it is **not** a continuation/rewind of the normal story save and cannot safely be used to rewrite an earlier one-off Honor choice or to recover missed physical loot into the live world. Maintain protected manual slots before irreversible story choices. Distinguish **medal shown**, **save command confirmed**, and **medal verified after loading that slot** [C01,C04,C09,C13].

## 1. Definitions, player interaction and observable evidence (T0)

| Term | Meaning and UI feedback | What it is NOT |
|---|---|---|
| **Original story run** | Mission started normally from a currently available in-world mission trigger; live choices, acquired resources and story advancement occur here subject to saving. Mission results ordinarily award a medal and add a Story entry. | A selectable mission in a prepared guide or already-replayed scene is not proof it was started in the current world [C01,C13]. |
| **Progress-menu replay** | Pause → **Progress → Story → chapter → completed/eligible mission → Replay**. The replay opens a self-contained scored attempt; on return the earlier world context is restored. Check the in-game objective checklist and completed-mission medal [C01,C03]. | A way to travel back permanently, change the original branch of a moral decision, replenish normal cash, or restore one-off requests [C04]. |
| **Medal objectives** | Mission-specific optional criteria (examples: time, accuracy, headshots, stealth, no Health-restoring items, no damage, scripted interaction). **Gold requires all criteria within one continuous attempt** [C02]. | Checkmarks gathered across multiple attempts do **not** combine into a Gold medal; Gold is not necessarily required for official Total Completion [C02,C15]. |
| **Mission checkpoint** | Temporary in-mission retry/resume point after failure/death or restart. Checkpoint position and mission objectives may be distinct from the actual saved free-roam game [C06,C07]. | A durable manual save slot or guaranteed preservation of full-run Gold statistics [C06]. |
| **Automatic save** | Game-generated Story Mode progress save at certain transitions/checkpoints; whether an individual trigger fired or which snapshot is loaded must be verified [C08]. | A user-created historical backup or guarantee of post-replay medal persistence [C09]. |
| **Manual save** | Pause → **Story → Save Game**; select/confirm a slot while saving is permitted. PowerPyx reports **15 manual save slots** in Story Mode [C08]. | An in-mission checkpoint; a save does not prove uninspected item inventories or particular medal rows [C09]. |
| **Protected pre-mission save** | An older manually recorded slot retained so an irreversible original-world choice can be retried via **Load Game** instead of score-only Replay [C10]. | If loaded, a protected save may intentionally roll back subsequent original-world progress; it must not be confused with an ordinary replay [C10,C18]. |
| **Medal evidence tiers** | (1) player says Gold earned, (2) Story UI shows current mission Gold and objective checks, (3) the relevant known save slot is reloaded and the result still appears [C09]. | A ChatGPT checklist, independent research guide, parser byte signature, or trophy notification cannot by itself prove all three tiers [C09,C24]. |

**Practical visible feedback:** The Story chapter entry and medal icon/objective checks establish which **medal result is currently displayed**. The Story Save Game screen shows whether manual saving is enabled and which slots can be chosen. The Load Game menu can identify a selected saved context; a fresh post-load Story menu readback is the strongest ordinary UI persistence check. Controls and exact prompts vary by device; follow the on-screen buttons rather than assuming PS/Xbox/PC mappings [C03,C08,C09].

## 2. Normal eligibility, save gates, alternatives and exceptions (T0/T1)

| Action / general gate | Conditional prerequisite, not player progress | Safest player verification |
|---|---|---|
| Replay a Story medal entry | Mission should be present/selectable under **Progress → Story**, normally after being completed in the original story. Post-story menus may list missed optional entries for rehearsal; this does **not** prove the original mission happened [C01,C16]. | Open exact chapter/entry, inspect Replay control and existing medal. Never equate GameGuide shelf operation number with in-game Story entries [C17]. |
| Earn/upgrade a medal by Replay | Finish all listed objectives **in the same run**. Selecting Replay does not itself earn anything [C02]. | Review end screen and subsequent Story menu checkmarks/medal; note if a different result is displayed [C09]. |
| Retry original-world consequences | Must have an earlier **usable manual save** before the relevant decision; load it only after accepting that later progress may be rolled back [C04,C10]. | Check slot title/date and actual loaded world; never overwrite the protected slot with the bad state [C10]. |
| Manual Save Game | Available only outside relevant mission/active combat or other restricted moments; chained missions/chapter transitions can delay it. Cheat activation can disable normal saving [C08,C11,C12]. | See whether **Story → Save Game** is enabled, then select a known slot, confirm and later verify it exists. Do not insist that turning autosave off unlocks manual saving. |
| Auto-save | Automatic save enabled and supported trigger actually occurs; not guaranteed at every intermediate transition [C08]. | Inspect current save options/prompts; keep a manual fallback; never invent timestamp/slot. |
| In-mission checkpoint recovery | A checkpoint must have been reached and the mission allow restart; Gold criteria may already be invalidated after death/fail/retry [C06,C07]. | If strict time/accuracy/no-damage/no-Health item matters, restart **entire mission** or pre-mission save rather than assuming a checkpoint reset saves Gold [C07]. |
| Skip an optional Chapter 2 stage | Story alternative may advance without that original-world scene. A later menu listing is not an original-world restoration [C16,C17]. | Confirm named active trigger with player observation, consult D08 before diverting to roaming [C17]. |

**No inferred state:** A Chapter 2 chapter label never proves the player can manually save *right now*, owns specific weapons/tonics, has a particular mission unlocked, has a specific replay medal, or possesses a historical save slot.

## 3. Benefits, costs, resource routing and recoverability (T0)

**What a successful replay may change:** The targeted Story **medal record/checklist** is its core intended output; earning a higher medal is useful for Gold Rush/all-Gold goals, subject to checking the relevant current save [C02,C04,C09]. Replay can provide practice without the cost of redoing the normal campaign [C01]. After returning to normal Story Mode, do not claim that a loot pickup, ammunition spent/gained, horse acquired, cash reward or new bounty from the replay was applied to the original world [C04]. Community/Q&A corroborate that outcomes are normally isolated, but exact incidental unlock/Compendium edge cases need separate verification under D22 and D15 [C04,C20].

**What replay does not repair:** Original-run choice/Honor path, witness mercy, named request delivery, missed camp interaction, and skipped optional original-world progression are not reconstructed by completing a scene in Replay [C04,C16,C21]. A Gold medal is **performance evidence**, not evidence that the original-run unique letter, pen, rare rifle or request object was retained [C13,C20].

**Costs and hazards:** Time spent replaying; potential lower or chapter-limited resources on old builds; replay-specific script/loadout issues; risk of confusing a result with a durable save; risk of overwriting the only older save if attempting a true earlier-world rollback [C05,C06,C10,C19]. If the next mission auto-chains and saving is unavailable, finish safely until **Save Game** is enabled; quitting during a mission commonly requires repeating from earlier progress [C08]. Do not assert a universal checkpoint timer rollback formula.

**Safe save workflow (proposal, not automated telemetry):**
1. In ordinary free roam, before a consequential mission/choice, open **Story → Save Game**, select a **new/rotating** slot and confirm the completion of the save [C08,C10].
2. Do the original run. If Gold is missed but loot/choices matter, preserve the actual world state before deciding to load a historical checkpoint; replay for medal cleanup is normally lower-risk for world continuity [C04,C10].
3. After replay, read **Progress → Story** medal and checks; if able, manually save to a non-protected working slot; optionally load/verify that same slot when safe. Do not overwrite the earlier pre-choice checkpoint simply to “lock” a medal [C09,C18].
4. Track distinct labels: **reported Gold**, **Story-menu verified Gold**, **saved (method/slot known or unknown)**, **reloaded-and-reverified**. If UI after loading conflicts with before-loading, do not silently count or discard: escalate to GameGuide [C09,C18].

## 4. Story, platform, edition, patch and time risks (T0/T1; future information in note)

| Applicability | Source-backed difference | Research inference / limit |
|---|---|---|
| **PS4/Xbox One launch-period (Oct–Nov 2018)** | Contemporary guides report restricted/preset replay gear and limited/no tonics. Rockstar 1.04 patched replay-related weapon-wheel loss for a specific late-story setting [E03,E04,E07]. | Historical observation, **not** an unconditional property of the current patched game [C05,C19]. |
| **Title Update 1.15 and later builds named in its notes (PS4/Xbox One/PC/Stadia)** | Rockstar explicitly: Pause Menu replay allows **all currently owned weapons in current story progression** [E01]. | **High-confidence official weapon-access rule.** It does NOT state every weapon is simultaneously equipped, every special script interaction works, all consumables transfer, horse always matches normal save, or exact core/Dead Eye levels [C05]. |
| **PC Story Mode** | Shares 1.15 described rule when patched; Rockstar release notes also mention PC high-FPS mission progression fixes [E01]. | No separate PC menu keyboard control tested; use shown bindings. Read-only Save Intelligence PC research is **not** verified Gold/slot decoding [C24]. |
| **PS4/Xbox One 1.03/1.04 specific fixes** | Rockstar documents an incorrect story load after an autosave following one replay, and loss of weapon wheel after another replay [E05,E07]. | Bugs with historical patch-specific repros; not evidence that all modern replays corrupt saves [C19]. |
| **Other consoles via compatibility / hardware refresh** | No independently reproduced per-device Gold UI/replay save test in this dossier. | Do not promise identical input maps, cloud saves or snapshot behavior. |
| **All editions** | Additional edition-exclusive mission content exists (e.g., Special/Ultimate content); Story medal lists vary in how multipart/no-medal content is counted [E15,E16]. | The widely published **104** is the standard achievement-eligible Story-medal reference, not a guarantee that every named mission, numbered part or optional DLC/edition bonus adds a medal [C15,C17]. |

**T2-only future-story research notice (not a default Chapter 2 instruction):** Rockstar 1.03 and 1.04 mention fixes involving late-story mission replay/loading. These are patch regression examples; they provide no grounds for revealing narrative consequences in a Chapter 2 session. Some optional Honor story stages have chapter-locked availability; for their actual windows D08/D18 are primary owners, not D24 [C16,C19,C21].

## 5. Provisional typed dependencies and cross-system relationships

These are **reference edges**, not a validated machine graph or completed-state assertions. Use the proposed taxonomy vocabulary in [schema](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/taxonomy_schema_v0_1.md); **REQUIRES** is directed dependent → prerequisite and should only be hard when the predicate is source-verified.

| From | Relation | Target | Scope and qualification |
|---|---|---|---|
| S30.M03 Replay | **INTERACTS_WITH** | S30.M02 Gold evaluation | Replay is one way to retake an eligible medal attempt [C01,C02]. |
| S30.M02 Medal | **CONTRIBUTES_TO** | S29.M02 all-eligible-Gold | Goal definition, not player medal count; exact eligible set determined per Story entry [C15,C17]. |
| S30.M02 Medal | **CONTRIBUTES_TO** | S29.M03 Gold Rush 70 | Achievement threshold, not a hard story unlock [C15]. |
| S30.M04 Manual save | **IMPROVES** | S30.M03 safe retry choice | Earlier *ordinary* story snapshot lets player retry original-world consequences; saving is not a Replay prerequisite [C08,C10]. |
| S30.M03 Replay | **HAZARD_TO** | S17.M04 unique-item recovery assumption | Replay pickups are not guaranteed original-world inventory; D06/D22 own exact items [C04,C20]. |
| S30.M03 Replay | **INTERACTS_WITH** | S05.M01 Honor | Replayed choices do not normally rewrite original Honor; D13 owns general Honor [C04]. |
| S30.M04 Save | **INTERACTS_WITH** | S30.M05 closing windows | Protected pre-window saves can permit actual rollback; a replay cannot reopen the story world [C16]. |
| S29.M03 Achievements | **INTERACTS_WITH** | S29.M01 official 100% | Gold Rush, Lending a Hand and Total Completion are different goal contracts; neither implies the others [C15,C16]. |
| S30.M03 Replay | **INTERACTS_WITH** | S28 Compendium | Entry effects from replay pickups are claim-specific/disputed; do **not** encode guaranteed transfer [C20]. |
| Save Intelligence v0.2 | **INTERACTS_WITH** | S30.M04 evidence | Offline parser experimental; **not** a hard source of Medal/Honor/horse/mission truth [C24]. |

**Unverified candidate:** A hard REQUIRES relation from replay → a particular permanent inventory item is **not established**. No saving mechanic here sets an Atlas `completed`, `owned`, `unlocked` or `last_saved` value.

## 6. Exact goal and achievement accounting (T0)

| Goal | Rule and observable proof | Never infer |
|---|---|---|
| **Gold Rush** — ACHIEVEMENT | Earn **70 Gold medals in Story missions**. This wording is on the Steam achievement page (developer/publisher-distributed platform contract); PowerPyx, Gamer Guides and TrueAchievements corroborate 70 out of **104** conventional eligible medals [E02,E03,E08,E10]. | Not 70 separate objectives, not 70 completed missions of any type, not Online medals, not proof platform achievement notification triggered [C15]. |
| **Personal all-Gold** — OPTIONAL_EXHAUSTIVE / ALL_GOLD | The player's stricter self-imposed goal: earn Gold on **every available eligible Story medal entry**, conventionally cited as 104; GameGuide must audit mission identity, skipped optional content and edition-dependent list before declaring 104/104 [C15,C17]. | Not a named 104-Gold platform trophy and not required by Best in the West. |
| **Best in the West** — OFFICIAL_100 achievement | Platform description: attain in-game **100% completion**. Follow **Progress → Total Completion** categories; Gold medal perfection is not a listed global requirement [E02,E12]. | Not equivalent to Gold Rush, full Compendium, all missable camp requests or all medals [C22]. |
| **Lending a Hand** — separate ACHIEVEMENT | Complete optional Honor story missions in the **original game progression**; late replay appearance of a missed episode does **not** automatically award original-story credit per PowerPyx [E11]. | A high score or replay menu visit cannot certify the originally missed optional action [C16]. |
| **Mission medal identity** — ALL_GOLD scope | Count **each in-game medal-bearing Story entry**, not each alphabetical/numbered GameGuide shelf ID or conversation session. Some multipart chains contain no-medal setup stages while one later part is medal-bearing [E14,E15,E16]. | No double count for mission bundle “I/II/III,” letter setup, optional camp task, Stranger strand or later chapter replay menu disclosure [C17]. |
| **Medal requirements** — per-mission | Gold = all displayed objectives **together** in that one attempt. Check the result screen and Story checklist. Category examples are not universal requirements; thresholds vary by mission [E03,E08,E13]. | No accumulation of checked objectives across Bronze/Silver/Gold runs, and never assume a mission is Gold merely because a Field Guide checklist reached 100% [C02,C09]. |

**Counting contract for GameGuide:** `eligible_in_game_story_entry → best_observed_medal`, with separately recorded **first-run medal**, **replay attempts**, **evidence source/date**, **manual/auto save observation**, and **persisted slot verification**. Avoid a numeric guarantee where the game lists optional material inconsistently; unresolved identities go to GameGuide mission mapping review [C17,C18]. Trophy pop-up and Story medal evidence are separate UI surfaces.

## 7. Three common mistakes and three organic Chapter 2 scenarios (T0/T1)

**Common mistakes:** (i) assembling an assumed Gold from objective checkmarks on different replays; (ii) treating replay loot/Honor as if it amended the original story; (iii) assuming “autosave probably happened” equals a verified manual-slot backup, or restarting a checkpoint as if the Gold timer necessarily resets [C02,C04,C06,C09].

**Scenario A — Paying a Social Call: Silver cleanup (T0).** Suppose the player reports that the original Chapter 2 mission earned Silver: four stealth kills and no Health consumables met, but headshot/accuracy conditions failed. **Known rule:** a later replay must meet *all* that mission's Gold conditions again in one run, including the previously passed stealth and no-item checks [C02]. **Recommended:** select the verified Story mission entry; check currently owned weapons and mission rules, restart the whole mission when strict accuracy/time/damage criteria become doubtful; inspect Gold in Story afterward. **Not implied:** the original save acquired a shotgun, chimney cash, Honor change or new save solely because the replay was successful. Actual player result belongs to GameGuide, not this scenario [C04,C07,C13].

**Scenario B — Good, Honest, Snake Oil: replay medal versus original-world bounty (T0).** An original Bronze and intermediate Silver can be improved to a replay Gold only when all three named mission Gold conditions are satisfied **together**: cliff rescue, 1:15 capture and 1:30 return as the GameGuide briefing specifies [C02,C13]. The resulting Gold is **medal evidence**; it does not retroactively add a bounty payout, wallet money, Honor increase, unique item or new manual save to the original-world record [C04,C09]. **Observed evidence distinction:** a screenshot of Story-menu Gold is stronger than an informal estimate of actual elapsed time; a successful “Game Saved” player report is separate from a specific slot readback. Do not recreate or change a historical player report here.

**Scenario C — Pouring Forth Oil II: a skip risk that replay cannot cure (T1).** **Only when the player confirms John has assigned the oil wagon stage:** treat this as a specific time-sensitive, potentially missed optional Gold entry; D08 documents disagreement about the precise disappearance timer. A prepared Mission Control briefing is not evidence the task is currently active. If active, give the original-world wagon task priority before leisurely roaming; replay later is not a safe assumed substitute for having performed it in the original story [E14,E15,C16,C17]. Its published medal requirement is delivery within **1:45**; **do not** invent an additional Gold for parts I or III. If not observed active, present the risk as conditional, not “happening now.” No narrative spoiler beyond Chapter 2 [C17].

## 8. Dated claim and source ledger — independent research (all checked 2026-10-17)

**Evidence categories:** **PRIMARY** = Rockstar patch notes or the Steam platform achievement contract; **INDEPENDENT GUIDE** = established independently authored gameplay guides; **COMMUNITY** = player reports/Q&A, not conclusive universal rule; **INTERNAL READ-ONLY** = separately controlled RDR2 repos, never independent public gameplay proof. Confidence attaches to **the exact claim**, not an entire source. Original publication/update dates are where shown, not assumptions about the player's installed version.

| Claim | Narrow claim and epistemic classification | Evidence anchors (see register) | Confidence |
|---|---|---|---|
| C01 | Progress → Story mission selection offers replay of eligible previously encountered/completed Story entries; later missed optional entries may appear in menu. CORROBORATED, but eligibility of each optional part conditional. | E03,E06,E08 | HIGH general / MEDIUM edge cases |
| C02 | Gold requires every mission-specific objective in **one** attempt; replay checks do not accumulate. CORROBORATED. | E03,E08,E10 | HIGH |
| C03 | Replay and medal checklist are visible via the Story/progress interface; controller prompts platform-specific. CORROBORATED. | E03,E06 | HIGH general |
| C04 | Replay normally restores the live-world location/story and does not transfer replay Honor/loot/cash or choices to original-world state; Medal is separately scored. CORROBORATED guide/community, lacking exact Rockstar implementation spec. | E09,E17,E18 | MEDIUM-HIGH general; exceptions UNKNOWN |
| C05 | **Title Update 1.15 specifically grants all currently owned weapons during Pause-menu Story replay**; this does not substantiate all tonics/horse/cargo/stats transfer. PRIMARY. | E01 | HIGH weapons / UNKNOWN other loadout |
| C06 | Checkpoint restarts are not equivalent to full mission restarts or manual saves; checkpoint effect on objective tallies conditional. CORROBORATED for caution only. | E08,E10,E17 | HIGH caution / variable exact rule |
| C07 | Time, accuracy, no-damage and no-healing objectives can be compromised by death/restart checkpoint; **restart whole mission** as conservative Gold tactic. COMMUNITY + GUIDE with objective-specific disagreements. | E10,E13,E18 | MEDIUM |
| C08 | Story → Save Game manual saving, 15 manual slots, autosaves at certain points; immediate chained missions may limit the chance to manually save. INDEPENDENT GUIDE, primary save-support menu corroboration. | E04,E12 | HIGH menu / MEDIUM exact trigger cadence |
| C09 | Successful save command is not by itself proof that every replay medal and inventory fact persisted to a reloaded named slot; verify UI. Evidence methodology / DISPUTED cross-save medal retention. | E04,E09,E18 | HIGH preservation advice / UNKNOWN precise cross-load rule |
| C10 | Protected pre-mission slot may allow actual original-world rollback, but loading older save risks rolling back later progress. CORROBORATED general save logic. | E04,E08 | HIGH |
| C11 | Manual saving commonly unavailable during active Story missions and special conflict states. INDEPENDENT GUIDE + community. | E04,E18 | MEDIUM-HIGH |
| C12 | Cheats can disable save ability. Community Q&A; do not assume cheats activated. | E18 | MEDIUM |
| C13 | Story medal/checklist screenshots prove displayed medal, not earned treasure, item possession, precise elapsed seconds or new save. Internal GameGuide evidence discipline. | E19 | HIGH methodological |
| C14 | Autosave checkpoint is not guaranteed at every chapter chain; quitting active mission may force replay of the mission. INDEPENDENT GUIDE. | E04 | MEDIUM-HIGH |
| C15 | **Gold Rush 70** Story Gold medals vs **104** standard eligible medals; personal 104 all-Gold distinct. PRIMARY achievement + corroborated guides. | E02,E03,E08,E10 | HIGH 70 / HIGH conventional 104 |
| C16 | Optional Honor story opportunity missed during original world does not retroactively count toward Lending a Hand by later replay entry; side opportunities may close. GUIDE supported. | E11,E15 | MEDIUM-HIGH |
| C17 | No-medal setup steps / multipart mission naming cannot be counted as extra medals; specific wagon Part II 1:45. MULTIPLE GUIDE sources + GameGuide map. | E14,E15,E16,E19 | HIGH stage / MEDIUM full mission-set mapping |
| C18 | Reloading old manual saves and across-slot medal carryover can vary or be disputed; no general cross-slot preservation promise. COMMUNITY conflict. | E09,E10,E18 | UNKNOWN exact mechanics |
| C19 | Rockstar 1.03/1.04 fixed historical replay/autosave loading and replay weapon wheel bugs. PRIMARY patch history. | E05,E07 | HIGH for documented historical fixes |
| C20 | An item or Compendium entry seen in replay does not *guarantee* physical item carryover; rare-item specifics are D22/D15 territory. COMMUNITY + separation rule, exact Compendium exceptions disputed. | E09,E17,E19 | MEDIUM caution / UNKNOWN specific entry |
| C21 | Companion requests, optional Honor and one-off chapter scenes require original-world observation/hand-in; replay does not certify those achievements. GUIDE + D08/D05. | E11,E19 | MEDIUM-HIGH general |
| C22 | Best in the West's 100% goal is distinct from earning all Story Gold medals. PRIMARY platform goal + independent completion guide. | E02,E20 | HIGH |
| C23 | Launch preset-weapon guidance conflicts with Rockstar's later all-owned-weapons replay update; resource/cutscene variants not settled. DISPUTED platform/version synthesis. | E01,E03,E08 | HIGH resolution for weapons / UNKNOWN tonics |
| C24 | Save Intelligence PR #24 identifies medals/Honor/horse ownership as **unmapped**, has no automatic watcher or authoritative player-state writer, and cannot be used for this dossier's UI proof. INTERNAL READ-ONLY, not a public mechanic source. | E21 | HIGH project scope |

**Independent source register** — all URLs checked 2026-10-17; all platform/patch scopes must be read from the source, not guessed:
- **E01 PRIMARY — Rockstar Games Support, Title Update 1.15 Notes** (Story replay owned weapons; PC/PS4/Xbox One/Stadia named), 2019/2020 update history, support page modified 2024: https://support.rockstargames.com/articles/28AmlyPGLVKsJ8OpdN8myn/red-dead-redemption-2-title-update-1-15-notes-ps4-xbox-one-pc-stadia
- **E02 PLATFORM CONTRACT — Steam/Valve, RDR2 Achievements** (Gold Rush 70, Best in the West): https://steamcommunity.com/stats/1174180/achievements
- **E03 INDEPENDENT GUIDE — PowerPyx, Red Dead Redemption 2 Gold Medals Guide**, published 2018 (contains legacy pre-1.15 equipment advice; do not silently promote it to modern replay loadout): https://www.powerpyx.com/red-dead-redemption-2-gold-medals-guide/
- **E04 INDEPENDENT GUIDE — PowerPyx, How to Save the Game Manually**, published 2018: https://www.powerpyx.com/red-dead-redemption-2-how-to-save-the-game-manually/
- **E05 PRIMARY — Rockstar Games Support, Title Update 1.03 Notes** (historical autosave-after-replay regression): https://support.rockstargames.com/articles/MCIMvsDlmF0yzh3oTSiip/red-dead-redemption-2-title-update-1-03-notes-ps4-xbox-one
- **E06 INDEPENDENT GUIDE — Push Square, How to Replay Missions**, page updated Jan 14, 2025: https://www.pushsquare.com/guides/red-dead-redemption-2-how-to-replay-missions
- **E07 PRIMARY — Rockstar Games Support, Title Update 1.04 Notes** (historical replay/weapon-wheel and autosave loading regressions): https://support.rockstargames.com/articles/D59kHtbUOojkr8G0Laz0y/red-dead-redemption-2-title-update-1-04-notes-ps4-xbox-one
- **E08 INDEPENDENT GUIDE — Gamer Guides, Single-Player Trophies/Achievements**, originally 2018; beware its unpatched preset-loadout description: https://www.gamerguides.com/red-dead-redemption-2/guide/extras/trophy-guide/single-player-trophies-achievements
- **E09 COMMUNITY — GameFAQs, Can you gain Honor by replaying missions?** (PS4 player observation/answer): https://gamefaqs.gamespot.com/ps4/200179-red-dead-redemption-2/answers/598836-can-you-gain-honor-by-replaying-missions
- **E10 INDEPENDENT ACHIEVEMENT COMMUNITY — TrueAchievements, Gold Rush** (70, 104, all criteria one attempt, per-save caution): https://www.trueachievements.com/a262345/gold-rush-achievement
- **E11 INDEPENDENT GUIDE — PowerPyx, Trophy Guide & Roadmap** (optional Honor original-world versus Replay distinction): https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap/
- **E12 PRIMARY SUPPORT — Rockstar Games Support, Continuous loading screen when selecting Story** (concrete save/slot UI example, platform buttons; support updated 2024): https://support.rockstargames.com/articles/6uGDRhTgmiKyLWqqgyjmUO/continuous-loading-screen-when-selecting-story-in-red-dead-redemption-2
- **E13 COMMUNITY — GameFAQs, accuracy after checkpoint restart** (first-person test; not official exhaustive rule): https://gamefaqs.gamespot.com/boards/200180-red-dead-redemption-2/77149376
- **E14 INDEPENDENT GUIDE — PowerPyx, Pouring Forth Oil II** (one timed 1:45 condition): https://www.powerpyx.com/red-dead-redemption-2-pouring-forth-oil-ii-walkthrough/
- **E15 INDEPENDENT GUIDE — GTA Base, Pouring Forth Oil I & II** (optional/skip; *its Honor trophy classification conflicts with PowerPyx*): https://www.gtabase.com/red-dead-redemption-2/missions/pouring-forth-oil-ii
- **E16 INDEPENDENT GUIDE — GameFAQs, Chapter 2 Story walkthrough** (part III no Gold; mission prerequisites): https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/chapter-2-horseshoe-overlook
- **E17 COMMUNITY — RDR2.org forum, replay effect and preset gear**, contemporaneous 2018 experience: https://www.rdr2.org/forums/topic/1901-can-you-replay-all-missions-at-any-given-time/
- **E18 COMMUNITY — Reddit replay/save reports, checkpoint discussion and GameFAQs cheat-saving answer** (anecdotal; no blanket generalizations): https://www.reddit.com/r/reddeadredemption/comments/1105f5j/ ; https://www.reddit.com/r/reddeadredemption2/comments/r76w3w/ ; https://gamefaqs.gamespot.com/ps4/200179-red-dead-redemption-2/answers/502215-can-i-still-manually-save-after-using-cheats
- **E19 INTERNAL READ-ONLY — original GameGuide** (not an independent external source; mission identity/progress & authority): https://github.com/L33TW0RLD/rdr2/blob/main/protocol/walkthrough_presentation.md ; https://github.com/L33TW0RLD/rdr2/blob/main/protocol/mission_preflight.md ; https://github.com/L33TW0RLD/rdr2/blob/main/missions/README.md ; https://github.com/L33TW0RLD/rdr2/blob/main/campaign/current_state.md
- **E20 INDEPENDENT GUIDE — PowerPyx official 100% checklist** (Total Completion categories separate from Gold Rush): https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/
- **E21 INTERNAL READ-ONLY — experimental Save Intelligence proposal**, PR #24 only: https://github.com/L33TW0RLD/rdr2-hub/pull/24 ; https://github.com/L33TW0RLD/rdr2-hub/blob/research/save-intelligence-v0-2/save_intelligence/research_v0_2.md

## 9. Contradictions, version exceptions, observed versus universal and unresolved tests

| ID | Disagreement / hazard | Resolution with source status | Conservative test or safe fallback |
|---|---|---|---|
| X01 | Legacy PowerPyx/Gamer Guides: replay comes with limited preset gear; Rockstar 1.15: access all currently owned weapons. | **RESOLVED for patched weapon ownership**, not all item categories [C05,C23]. | Ask patch status if consequential; inspect weapon wheel at replay start. Do not promise tonics, custom horse, stats or mission-specific required weapons. |
| X02 | Checkpoint restart: some players report one no-damage objective can still tick, but overall time/accuracy or no-health constraints often fail. | **DISPUTED objective-by-objective** [C06,C07]. | For all-Gold, restart full mission/pre-mission load for any suspect strict metric. Don't claim checkpoint resets all counters. |
| X03 | Older manual save load after replay: some report medals revert; others report persistent Story results. | **DISPUTED**; no controlled cross-slot/patch test [C09,C18]. | After Replay: inspect Gold; save to working slot when available; load/test slot if safe; preserve old slot and escalate mismatch. No absolute promise across historic saves. |
| X04 | Trophy/optional replay confusion: missed Honor Story entry appears in replay log, but PowerPyx states this does **not** rescue Lending a Hand. | **PARTIALLY RESOLVED** for achievement distinction [C16]. | Protect original Chapter 2 window while still active; check achievements independent of Gold. |
| X05 | GTA Base includes wagon Part II in Honor trophy classification while PowerPyx says it is missable but **not** Lending a Hand-required. | **DISPUTED** trophy taxonomy [C16,C17]. | Treat it as preservation-first optional Gold if active, avoid promising Honor trophy credit; defer eligibility to D08/GameGuide. |
| X06 | “104 missions” counts vs 109/110 named parts and Special/Ultimate exclusive mission listings. | **COUNTING / EDITION AMBIGUITY** [C15,C17]. | Use per-Story-entry medal icon; do not count shelf or side parts twice; audit any extra edition mission independently. |
| X07 | Does a replay pickup register a Compendium discovery while not owning the item? Reports suggest possible cases. | **UNKNOWN / item-specific**, not a general acquisition pathway [C20]. | Check both Compendium and physical inventory separately; send exact weapon to D22/D15, not an Atlas ownership assertion. |
| X08 | Autosave timing after mission/chapter: expected generally, but guides flag exceptions and load failures fixed by Rockstar. | **CONDITIONAL / historical bugs** [C08,C14,C19]. | Require actual save confirmation/readback, especially after consecutive missions. |
| X09 | Exact “default” replay horse, consumables and core levels in patch 1.15+ widely extrapolated from anecdotes. | **UNKNOWN** where Rockstar notes only explicitly confirm weapons [C05,C23]. | Describe player-observed loadout; never claim an automatic horse/item/level carryover. |
| X10 | “Gold saved” vs “Gold earned” vs “Gold Rush achievement unlocked” are conflated in some player discussions. | **SEPARATE evidentiary objects** [C09,C15,C18]. | Track each UI observation separately; GameGuide reconciles after saves, never decoders or checkboxes. |

**No live game experiment performed:** No platform/controller menu clicks, checkpoint restarts, save/load cycles, Steam achievement synchronization, optional mission replays, or parser runs were performed by this agent. Source checking a 2024-updated Rockstar support page does **not** mean patch 2026 was installed. Statements about save behavior that go beyond official patch text must stay qualified.

## 10. Read-only consumer handoff — GameGuide / Free Roam / Companion

**GameGuide (sole mission and campaign owner)**
1. Read **latest** original [campaign snapshot](https://github.com/L33TW0RLD/rdr2/blob/main/campaign/current_state.md), [mission ledger](https://github.com/L33TW0RLD/rdr2/blob/main/campaign/mission_ledger.md), [save log](https://github.com/L33TW0RLD/rdr2/blob/main/campaign/save_log.md), [v1.1 Field Guide](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/walkthrough_presentation.md) and [preflight](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/mission_preflight.md) before any advice. **Do not change those files from Atlas.**
2. Resolve **in-game Story medal entry**, not a repository operation ID. Check precise Gold thresholds against the mission guide independently. In a Replay Field Guide still render the entire **A → final phase** chronology and all inline GOLD/SAVE/MISSABLE warnings; Atlas provides only an optional Intel explanation.
3. Before optional roaming after a newly **player-observed active** Chapter 2 risk, consult D08 first. Warn that Replay may allow score cleanup but **not original-world restoration**.
4. At debrief ask a **simple report**: result Gold/Silver/Bronze/Failed/Unreported; observed failed/met medal criteria; original vs Replay; screenshot/menu confirmation; new save **yes/no/unknown**, method and slot if observed. Preserve historical first-run medals, do not overwrite that history with “always Gold.”
5. Record in campaign only after explicit player evidence/authorized GameGuide process. Distinguish **EARNED_BY_REPORT → STORY_UI_SEEN → SAVE_REPORTED → SLOT_RELOAD_VERIFIED**. This is a handoff vocabulary proposal, not a new database/status authorization. Never credit money, rare loot, request fulfilment, Honor or a new save because the medal improved.
6. If a prior manual slot is loaded, confirm whether the presently displayed medal differs. File any discrepancy as **needs reconciliation**, without inventing platform-wide persistence behavior.

**Free Roam Control:** May mention “Replay Gold cleanup” as an **optional** outing when the player confirms a relevant existing Story entry; may suggest making a protected manual save before risky new story chapters. It must not demand monotonous 104-Gold clearing, mark a chapter opportunity expired without sourced player observation, or infer unavailable markers. D08 owns urgency, and Mission Control owns the actual replay mission walkthrough.

**Adaptive Companion / Save Intelligence:** The [experimental decoder proposal](https://github.com/L33TW0RLD/rdr2-hub/pull/24) reports limited PC container/inventory-like signatures; Gold, Honor, horse ownership, mission state and coordinates are **not independently validated**. It is neither an automatic watcher nor approved telemetry; no scripts were executed, no file output generated, no parse source/reports handled, and **no derived records enter GameGuide** from this work [C24].

**Minimal ephemeral reply schema (PROPOSED, non-persistent):**
- request: {story_entry_title, mode: original|replay|unknown, medal_goal, seen_objectives, player_observed_save_state, spoiler_tier};
- answer: {general_rule_claim_ids, in_game_check_to_perform, conditional_risks, route_to_full_field_guide, evidence_confidence};
- **Never output a new canonical medal counter, current save slot, owned item or trophy-unlock flag without GameGuide evidence.**

## 11. Next bounded research, owner review and acceptance limits

**Open tests, scoped to a future owner-authorized field QA lane:**
1. On updated PC + console, record replay warning/restore-point text, Story objective checklist and weapon wheel, separately testing **owned weapons** versus **consumables/horse/Dead Eye**; record patch/version and mission name without leaking private save data.
2. With two protected manual slots, test earned replay medal → Story menu → manual save → load same working slot → Story medal readback; separately test older-slot rollback **without losing permanent progress**. Do not automatically update ledger.
3. Test one strict Gold mission with checkpoint retry vs full restart; distinguish timer, accuracy, damage, healing and cutscene behavior; one trial cannot establish a universal rule.
4. Verify optional skipped wagon/other Honor stage appearing in later replay menu against **separate** original-story achievement credit and exact medal eligibility; coordinate with D08/D18.
5. Have D22/D15 examine any rare-weapon Compendium anomaly under Replay without treating physical inventory acquisition as confirmed.

**Owner review requested:** approve this source-checked D24 as **RESEARCHED — REVIEW PENDING**, not automatically ADOPTED; commission precise per-platform field tests where distinctions affect player decisions; keep 104 personal all-Gold separate from Gold Rush 70 and Best in the West; preserve original GameGuide authority; do **not** promote the Save Intelligence decoder to medal telemetry.

**Stop/quality gate:** Claim-source mappings C01–C24 and E01–E21, dated research, contradictions X01–X10, three T0/T1 Chapter 2 examples, five principal provisional mechanic IDs, applicability table, and three-consumer handoff are included. Exact UI field testing, cross-slot medal carryover, consumable/horse loadout and specific Compendium anomalies remain explicitly **UNTESTED/DISPUTED**. **No branch merge, self-ratification or campaign write authorized.**
