# D05 — Chapter 2 Camp Life: Companion Activities, Requests and Closing Windows

**Record ID:** ATLAS.D05 · **Version:** 0.1 · **Kind:** mechanic dossier  
**Status / maturity:** **RESEARCHED — REVIEW PENDING** (\`RESEARCHED_REVIEW_PENDING\`); **NOT ADOPTED**  
**Task:** \`atlas-camplife-012\` · [authoritative assignment #12](https://github.com/L33TW0RLD/rdr2-hub/issues/12)  
**Checked:** 2026-10-17 (access/check date, **not** a game patch/version date)  
**Applicability:** *Red Dead Redemption 2* **Story Mode**, Horseshoe Overlook / Chapter 2. Broad PS4/PS5 via backward compatibility, Xbox One/Series via compatibility, and PC principles; button prompts, account achievement displays, edition extras and exact visibility can differ. No Red Dead Online assumptions.  
**Spoilers:** T0/T1 by default; no future plot outcomes. Later-camp requirements mentioned abstractly only as an achievement criterion (T1).  
**Provisional leaves:** \`S11.M01\` ambient conversations/routines; \`S11.M02\` companion activities; \`S11.M03\` item requests; \`S11.M04\` celebration/social games; \`S30.M05\` chapter windows. **Conditional gates:** \`U08\` camp events, \`U11\` chapter departure.  
**Read-only relations:** \`S25.M01\` ordinary table games, \`S29.M03\` achievements, \`S08.M01\` contributions, \`S17.M03\` reserved items, \`S02.M02\` time/rest, \`S30.M04\` saves. These IDs are **INDEXED / taxonomy proposal, not independently adopted**. D02 (camp economy), D03 (Pearson crafting), D06 (general inventory) and unassigned D08 (broad Chapter 2 optional-story expiry) remain separate owners.

> **Core rule:** a camp conversation, a marked companion outing, an item request, an ordinary game and a donation are five different interactions. A single visible prompt is not proof of completion or of achievement credit. This dossier defines **general rules only**; current player opportunities, inventory, saves and accomplishments remain UNKNOWN unless supplied by GameGuide/player observations.

## 1. Definitions, actions and observable confirmation (T0)

| Interaction | How it normally starts | What the player can check | Distinct goal classification |
|---|---|---|---|
| **Ambient talk / campfire scene** (\`S11.M01\`) | Approach people, greet/listen, join an organically occurring conversation; companions rotate with story and time | Heard dialogue or actual scene; may be fleeting. No global complete-all-camp-chatter counter demonstrated | **IMMERSION / OPTIONAL_EXHAUSTIVE**, not automatically an achievement |
| **Marked companion activity** (\`S11.M02\`) | Companion is present and offers a white map/minimap or nearby activity prompt (e.g., hunting/robbery) | Note name, icon/offer and on-screen activity completion; optionally account achievement progress | **Friends With Benefits** candidate for that camp; one *qualifying* activity per Chapter 2/3/4 camp |
| **Camp item favor** (\`S11.M03\`) | Specific character asks during contextual dialogue, often while doing another task | **Task-log request**, requested item, subsequent specific **Give** action/acceptance, possible gift near Arthur's bed | **Errand Boy**: five **delivered** camp requests across valid story windows |
| **Ordinary camp game / singing / celebrations** (\`S11.M04\`) | A companion at table, campfire gathering, post-mission party or social prompt | Game started or scene heard; ordinary \`Progress > Total Completion > Table Games\` can register a game *type* | Game type can support **OFFICIAL_100 / Hobby Horse**; does **not** prove Friends With Benefits |
| **Tithing-box donation** (reference \`S08.M01\`) | Eligible camp donation/tithing box | Contribution entered; achievement display if available | **Give to the Poor**: personally donate cumulative **$250** before box disappears (distinct from requests) |

**Controls:** Use the button/action displayed for the player’s platform when close to the actor, then inspect map or task log. The D-pad/console shortcut described by [S03] is not assumed for every PC keybinding. A white symbol can indicate different kinds of activities; identify its label before classifying it. Sources: [S01]–[S05], [S07], [S08].

### Operational request lifecycle (\`S11.M03\`)

1. **DISCOVERED/NOT OBSERVED**: meet companion, observe contextual request dialogue. Do not infer a request from a guide's list.
2. **OFFERED/ACTIVE**: verify requested **person + item** in the task log and note any actual timing context. Possession alone is not delivery.
3. **ITEM READY**: confirm exact inventory identity and preserve it, rather than selling/donating/crafting with it. Some items may be carried before request; an exception (Jack's thimble) may only enter loot pools *after* the request activates (see dispute D-03).
4. **HANDED OVER**: find that companion when possible, use the **Give** action, observe acceptance and changed task log. Returning items to Pearson provisions or the tithing box is **not** an Errand Boy hand-in.
5. **FOLLOW-UP**: check Arthur's bed/wardrobe if guide specifies a delayed reward; do not assert a reward was obtained without an in-game observation.

Availability is contextual. The frequently cited **08:00–20:00** general request window is a useful **heuristic**, not a universal rule. Night-only/scene-linked exceptions and random rotations exist. If a request fails to appear on one visit, treat as **NOT OBSERVED**, not missed. [S01][S03][S04]

## 2. Mechanic-specific availability and prerequisites (T0/T1)

### U08: Camp invitations and requests

**Expression:** \`PLAYER_OBSERVED(companion_present, distinct_offer_or_marker)\` with *possible* \`EVENT(story milestone)\`, \`TIME_WINDOW(daypart)\`, \`CHAPTER_WINDOW(Horseshoe Overlook)\`.  
**Epistemic state:** **CONDITIONAL**; do **not** promote uncertain time or story associations to hard \`REQUIRES\` edges.

**Chapter 2 marked activity candidates:**

| Candidate | Published context (NOT an automatic unlock) | Confidence / practical treatment |
|---|---|---|
| **Charles — bison hunting** | GameFAQs ties opportunity to Charles returning to camp following *The First Shall Be Last*; the actual white marker/person is decisive | **HIGH** for a qualifying hunting candidate; **MEDIUM** for exact trigger sequencing. Prefer if visible [S01][S05][S06] |
| **Javier — home robbery** | GameFAQs associates offer with return after *The First Shall Be Last*/camp celebration; other guides allow a later opportunity | **HIGH** candidate; **MEDIUM** trigger. An invitation is not the same as a generic solo home robbery [S01][S05] |
| **Lenny — Five Finger Fillet** | GameFAQs lists a **specific Lenny companion event** after he returns (its guide cites *A Quiet Time*), with map icon. PowerPyx says **playing table games with gang members does not count**, whereas GameFAQs, Push Square and achievement guides list the **marked Lenny instance** | **DISPUTED recognition**: can be a candidate when it is the distinctive marked Lenny activity; do **not** rely on generic Five Finger Fillet for Friends With Benefits without account confirmation. For low-risk achievement protection choose Charles/Javier [S01][S05][S06][S09] |

**Important qualification:** Sources agree on *one activity per Chapter 2, 3 and 4* for **Friends With Benefits**, not "one in every named camp" or "all companion interactions." The issue is which table events count. White camp marker + player-confirmed completion + independent trophy progress (when available) is stronger than proximity to a table. [S01][S05][S06][S09]

### Chapter 2 item-favor watchlist

The following is a **triage list**, not a claim each request is currently available. Published lists have disagreements; do not display it as a mandatory full checklist at first camp arrival.

| Person / requested thing | Observational starting point or gate | Risk / resolution |
|---|---|---|
| **Abigail — $5** | She explicitly asks for help; common Chapter 2 opportunity | Low-cost Errand Boy candidate when offered; **specific Chapter 2** request in GameFAQs/PowerPyx [S01][S03] |
| **Jack — Penny Dreadful comic** | Fishing-related Chapter 2 story encounter; guides differ whether the request is initiated *during* or *after* *A Fisher of Men* | **Chapter 2-specific**; trust dialogue/log, not invented fixed post-mission ordering. Deliver one acceptable named comic rather than unrelated books [S01][S03][S10] |
| **Jack — Abigail's Thimble** | Only after specific Jack request is **observed** | **Chapter 2-specific**; PowerPyx/GameFAQs describe it as lootable after triggering, while RDR2.org says search Marstons' tent — **DISPUTED source location**, do not promise either; source safely only once task log is active [S01][S03][S10] |
| **Mary-Beth — Fountain Pen** | See her writing; dialogue and request log | **Chapter 2-specific** per chapter tables. Distinguish exact Fountain Pen from any other pen/story reward [S01][S03][S10] |
| **Javier — Oleander Sage** | Often associated with preparing poison knives at a camp table | **Chapter 2-specific** in GameFAQs/PowerPyx; verify who requested it since Charles can independently request Oleander in several chapters [S01][S03][S10] |
| **Pearson — rabbit for special stew / Scout Jacket** | Distinctive "you look peaky" rabbit invitation while Pearson is at stew/preparation area | **PERSONAL EXHAUSTIVE** high preservation interest, **exact trigger DISPUTED**. Chapter 2-only is supported mainly by community case reports/legacy audit, *not* a uniformly corroborated formal list. Do not prescribe core depletion, intentional injury or guaranteed hours. Inspect jacket in wardrobe only if received [S11][S12][S13][L2] |
| **Dutch — Pipe** | Contextual request at camp, commonly visible while smoking | GameFAQs/PowerPyx explicitly allow **Chapters 2–4**; **not proven strictly Chapter 2-only**. Preserve if specifically requested; do not manufacture first-day emergency [S01][S03] |
| **Bill — Hair Pomade; Susan — Oregano; Charles — Moonshine/Oleander** | Each must ask individually in camp | Useful alternative Errand Boy opportunities across **Chapters 2–4**, depending on presence; no Chapter 2-only claim [S01][S03] |
| **Pearson — Naval Compass, Sean — Bourbon, Tilly — Necklace** | Contextual game/party/table interactions, depending on character presence | Some chapter lists group them under Chapter 2, while independent accounts dispute absolute exclusivity. Check current offer; don't merge with Pearson's **separate rabbit jacket** request [S01][S03][S13] |

**No fixed request count per session, guaranteed spawn time, exact RNG rate or irreversible countdown is evidenced.** If the player wants five easy Errand Boy deliveries, favor **actually active and attainable** requests; five can be spread across available camps, so one unavailable rare request need not be forced. [S01][S03]

### U11: Closing chapter camp

**Expression:** \`CHAPTER_WINDOW(Chapter_2_Horseshoe_Overlook)\` + \`PLAYER_OBSERVED(chapter_escalation_or_departure)\`; exact pre-packing shutdown timing **UNKNOWN / context-dependent**.  
**Supported risk:** finite Chapter 2 camp-specific opportunities close when the story leaves this camp; achievements may become unavailable on a single continuous playthrough if the respective chapter has no qualifying activity. Some individual requests have narrower Chapter 2 scope. [S01][S02][S03][L1][L2]  
**Not supported:** "all Chapter 2 missions may expire at any hour"; "every white dot is a missable"; "last mission is the universal guaranteed last chance"; "camp visits must occur at 10:00 sharp." Perform **early, light** observation and a **pre-exit** audit only when story progression warrants it.

**Other chapter optional mission hazards** (letters, optional Honor strands, John's wagon stage) remain **D08 / Mission Control**. They are referenced as competing higher-priority windows, **not researched or re-authored in this D05**. If another *specific active* mission has known urgency, refer immediately to its canonical Mission Control dossier, not camp errands. [L1][L2]

## 3. Completion contracts — keep five ledgers separate

| Criterion family | Actual rule supported by specialist sources | Chapter 2 significance | Does the Atlas claim player credit? |
|---|---|---|---|
| **\`ACHIEVEMENT.FRIENDS_WITH_BENEFITS\`** | Complete **one eligible camp companion activity in each of Chapters 2, 3, 4**; requires original-story camp windows | **Yes — one Chapter 2 qualifying activity** before relevant camp closes | **NO**; seek activity completion + trophy/account feedback; table game dispute applies [S01][S05] |
| **\`ACHIEVEMENT.ERRAND_BOY\`** | **Five fulfilled/delivered item favors**, not five conversations or five items bought | Some individual Chapter 2-only requests; overall goal spans further available chapter windows | **NO**; recipient acceptance and tracked achievement evidence [S01][S03] |
| **\`ACHIEVEMENT.GIVE_TO_THE_POOR\`** | **Player personally** donates at least **$250 cumulative** cash/eligible valuables to the **gang tithing box** (gang's own contributions excluded); box no longer available after Chapter 4 | Not Chapter 2-only; useful to start once eligible, but no invented personal balance | **NO**; inspect actual donations/account trophy [S01][S04] |
| **\`OFFICIAL_100.TABLE_GAMES\` / \`ACHIEVEMENT.HOBBY_HORSE\`** | Play each of **Poker, Blackjack, Dominoes, Five Finger Fillet**; no win necessary for the basic game-type requirement | Can do some in camp, and others later at fixed venues; **not camp-limited** | **NO**; inspect \`Progress > Total Completion > Table Games\` [S07][S08] |
| **\`OPTIONAL_EXHAUSTIVE\` / \`IMMERSION\`** | Personal goal to experience character dialogue, celebrations, unique clothing, letter/requests and camp stories; no exhaustive official checker evidenced | Sensitive to scene/context/character, but not every scene an official requirement | **NO**; a personal observation journal may be separate from game credit [S05][L2] |

**Exclusions:** The official **Best in the West / 100%** checklist (five categories) does **not** require every camp request, every chapter companion outing, camp donation trophy, unique jacket, every camp dialogue, or every possible camp minigame scene; it **does** require four table-game types. Nor is the chapter activity trophy proof of the **four** game-type credits. [S01][S07][S08]

**Edition note (T1):** Guides describe an additional companion activity limited to certain premium editions in a *later* chapter. It is **optional**, not a required path to Friends With Benefits. No plot/content detail here. [S01][S09]

## 4. Camp-opportunity decision grid (spoiler-light)

**Every row requires OBSERVED evidence before recommending an immediate action.** Suggested importance applies to the user's chosen goal, not all players.

| OBSERVED live condition (never assume) | Decision | Risk tag / urgency | Safe fallback |
|---|---|---|---|
| White Charles/Javier companion marker available in Chapter 2; achievement desired; no reliably confirmed Ch2 activity yet | **Do the marked companion outing when convenient before chapter exit** | \`chapter_sensitive\` / **BEFORE_EXIT** | If unavailable now, short camp recheck after a story step; don't invent an hour |
| Lenny invites a **marked** game; only generic social game credit seen | Play for enjoyment / four-game checklist; **do not assume** FWB | \`disputed\` / **VERIFY_CREDIT** | Prefer Charles/Javier; compare trophy progress if possible |
| An identifiable person requests a specific item and task log records it | Preserve exact item, source safely, return to recipient for hand-in | \`conditional\` / **ACT_WHILE_OFFERED** | If unavailable, leave request UNKNOWN and revisit; don't claim delivery |
| Pearson actually offers rabbit for jacket during Chapter 2 | Prioritize natural hand-in if optional unique clothing matters | \`possible_chapter_sensitive\` / **ACT_WHILE_OFFERED** | Verify acceptance and wardrobe; skip speculative core abuse |
| Camp party, song or conversation observed, no limited gift or task | Enjoy if desired; no compulsory completion stop | \`ordinary\` / **OPTIONAL** | Continue story/exploration |
| Tithing box open, wish to earn Give to the Poor, resources verified | Make personally verified eligible contributions toward $250 before Ch4 end | \`achievement_window\` / **BEFORE_CH4_EXIT** | Don't claim an amount without actual box/account review |
| Progress indicates closing Chapter 2 camp or departure imminent; no reliable Ch2 companion activity recorded | **Perform D05 camp exit check before triggering departure** | \`chapter_sensitive\` / **HIGH WHEN OBSERVED** | Check marker/accepted requests, decide deliberate waiver or earlier manual save if valid |
| A time-sensitive optional STORY mission task is **active** | **Defer D05**; yield to Mission Control | \`out_of_scope_competing_urgency\` / **NOW** | Follow canonical mission protocol; no generic camp detour |

**Minimal loop:** (1) observe chapter/camp and available markers → (2) distinguish activity from item request/game/donation → (3) consult goal criterion → (4) if an actual invitation/request is visible, act or consciously defer → (5) have GameGuide/player independently confirm outcome/saves → (6) revisit opportunistically, not on a fabricated timer.

## 5. Effects, costs, routing, recoverability

- **Companion outings:** add interaction and may lead to ordinary hunting/robbery rewards or moral choices, which vary by encounter. This dossier neither scripts those encounters nor claims a specific honor outcome or loot. Example: participating in a named robbery may also relate to general robbery completion, but **do not assert cross-credit without checking the distinct criterion**. [S05][S07]
- **Requests:** consume the specified money/item upon accepted delivery; small gifts/Honor can follow, conditional on person and action. Item location and reward can vary or be contested; inspect the task log before use. Pearson's special rabbit jacket is a different request from standard Pearson camp-food/crafting donations. [S03][S05][S11]
- **Donation:** personal financial/resource opportunity cost, independent of the Ledger upgrade purchasing path. Refer to D02 rather than re-documenting cash/fund rules. [S01]
- **Reversibility:** generic camp talk may recur or not; do not guarantee scene replay. After camp has moved, a missed chapter activity is not repaired merely by replaying a Story mission. An existing *pre-window manual save*, if player-confirmed, may be a recovery option but restarting from it can discard subsequent progress. Trophy/achievement cannot be awarded by retroactive Atlas notation. [S01][S02][S05]

## 6. Claim and source ledger

**Evidence classes used here:** \`P-ACH\` = platform-published achievement wording (as reproduced by trophy databases/achievement platforms; **not** verified direct Rockstar documentation); \`S-GUIDE\` = independent specialist walkthrough/roadmap; \`LEGACY\` = old internal researched material, explicitly **REVIEW PENDING**; \`COMMUNITY\` = observational anecdote, low authority for universal rules; \`UI-CHECK\` = **recommended player observation**, NOT an observation performed by this agent.

All below checked **2026-10-17**; URL dates are original guide dates where known, not claims about the installed game version.

| Claim | Precise assertion (scope: RDR2 Story unless stated) | Evidence URL IDs | Status / confidence |
|---|---|---|---|
| **CL-01** | FWB requires at least one eligible activity **each in Chapters 2, 3 and 4** | S01, S05, S06, S09 | **CORROBORATED / HIGH** |
| **CL-02** | Chapter 2 **Charles hunting** and **Javier home robbery** are recognized candidates | S01, S05, S06, S09 | **CORROBORATED / HIGH** |
| **CL-03** | Lenny **marked** Five Finger Fillet is listed by several specialist guides, while PowerPyx excludes table games broadly | S01, S05, S06, S09 | **DISPUTED / MEDIUM** for Lenny eligibility; generic game insufficient |
| **CL-04** | Companion invitation shows as white/character-associated map marker when active | S05, S06, S09 | **CORROBORATED / HIGH** |
| **CL-05** | Some Charles/Javier invitations follow character return after *The First Shall Be Last*; Lenny may appear following *A Quiet Time* | S05 (specific), L2 | **SINGLE_SOURCE / MEDIUM** for exact ordering |
| **CL-06** | Errand Boy criterion is **5 delivered** character item requests, not 5 offers | S01, S03 | **CORROBORATED / HIGH** |
| **CL-07** | Task-log activation and recipient hand-in separate from prior item possession | S03, S05 | **CORROBORATED / HIGH** |
| **CL-08** | 08:00–20:00 is a common **nonuniversal** request-availability heuristic | S01, S05 | **CORROBORATED / MEDIUM** |
| **CL-09** | Abigail's $5, Jack's two requests, Javier's Oleander and Mary-Beth's pen have specific Chapter 2 listing | S01, S05, S10 | **CORROBORATED / HIGH** for catalogue; exact spawn time **UNKNOWN** |
| **CL-10** | Jack's thimble only drops *after* request vs immediate tent pickup | S01/S05 **versus** S03 | **DISPUTED / LOW** for location; request-triggered loot safer |
| **CL-11** | Dutch pipe appears in more than one chapter, not universally "first Chapter 2 morning only" | S01, S05, S03 | **CORROBORATED / HIGH** for multichapter guide treatment |
| **CL-12** | Pearson rabbit special-stew offer may grant distinctive Scout Jacket; strict low-core and precise-time theories disputed | S11, S12, S13, L2 | **DISPUTED / LOW** for exact trigger; **MEDIUM** for distinct reward |
| **CL-13** | Give to the Poor demands player's own cumulative $250 donation before tithing box disappears after Ch4 | S01, S04 | **CORROBORATED / HIGH** |
| **CL-14** | Official 100% requires all four **types** of table game, not every camp interaction | S07, S08 | **CORROBORATED / HIGH** |
| **CL-15** | Four basic table-game credits need participation, not wins | S07, S08 | **CORROBORATED / HIGH** |
| **CL-16** | Broader official 100% checklist remains feasible after Story; separate missable trophy windows are real | S01, S07, S08 | **CORROBORATED / HIGH** for categories, not a blanket promise about exhaustive content |
| **CL-17** | Chapter 2 camp activities and certain requests cease with camp/chapter progression; specific end timing may differ | S01, S02, S05, L1, L2 | **CORROBORATED / HIGH** for chapter boundary; **UNKNOWN** exact early packing |
| **CL-18** | Ordinary camp ambience is not an independently established total-completion checklist | S05, S07, L2 | **CORROBORATED / MEDIUM**; don't claim no scene ever matters to other goals |
| **CL-19** | Some requested items/rewards and conversational access have no deterministic spawn guarantee | S03, S05, L2 | **CORROBORATED / MEDIUM**; no RNG odds established |

### Source register (distinct URL, publication context and limits)

- **[S01] PowerPyx**, *Red Dead Redemption 2 Trophy Guide & Roadmap*, published **2018-10-25**, checked 2026-10-17; \`S-GUIDE\`. Exact trophy distinctions; **its categorical table-games-do-not-count statement conflicts with other guides about a specifically marked Lenny event**. https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap
- **[S02] Red Dead Wiki**, *Missable Content in Redemption 2*, date undetermined; checked 2026-10-17; \`S-GUIDE/community-edited\`. Chapter-specific request catalogue; not precise universal trigger proof. https://reddead.fandom.com/wiki/Missable_Content_in_Redemption_2
- **[S03] RDR2.org (Matt Gibbs)**, *Item Requests: How to Trigger Every Camp Request*, originally **2019-02-01**, page last updated **2026-08-05**; checked 2026-10-17; \`S-GUIDE\`. Task-log hand-in and request basics; conflicts about thimble source. https://www.rdr2.org/guides/item-requests-guide/
- **[S04] XboxAchievements**, *Give to the Poor*, guide page dated context **2018 onward**, checked 2026-10-17; \`P-ACH + S-GUIDE\`. $250 personal cumulative and chapter limit. https://www.xboxachievements.com/game/red-dead-redemption-2/achievement/160876-give-to-the-poor.html
- **[S05] GameFAQs**, *Red Dead Redemption 2 Walkthrough — Camp*, authored completion walkthrough, publication date not reliably determined here; checked 2026-10-17; \`S-GUIDE\`. Detailed companion-return links, Lenny, chapter request list. https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/camp
- **[S06] XboxAchievements**, *Friends With Benefits* (platform trophy description and detailed companion checklist), guide page dating context **2018 onward**, checked 2026-10-17; \`P-ACH + S-GUIDE\`. Lists Lenny, Charles, Javier. https://www.xboxachievements.com/game/red-dead-redemption-2/achievement/160871-Friends-With-Benefits.html
- **[S07] PowerPyx**, *100% Guide & Checklist* and *All Table Games Locations*, published **2018-10-25**, checked 2026-10-17; \`S-GUIDE\`. Five categories, four game types and non-missability of official subset. https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/ ; https://www.powerpyx.com/red-dead-redemption-2-all-table-games-locations/
- **[S08] GTA Base**, *100% Completion Guide & Checklist* and *Activities / Table Games*, publication not reliably specified, checked 2026-10-17; \`S-GUIDE\`. Independent completion checklist and minigame corroboration. https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist ; https://www.gtabase.com/red-dead-redemption-2/activities/
- **[S09] Push Square (Sammy Barker)**, *How to Complete a Companion Activity in Each Camp*, **2025-01-14**, checked 2026-10-17; \`S-GUIDE\`. Lists marked Lenny Fillet as valid. https://www.pushsquare.com/guides/red-dead-redemption-2-how-to-complete-a-companion-activity-in-each-camp
- **[S10] GameFAQs** chapter request matrix inside [S05], plus PowerPyx [S01], checked 2026-10-17; \`S-GUIDE\`, grouped to avoid claiming separate independent source.
- **[S11] Steam Community**, *Item requests that are only in chapter 2?*, discussion **2022-12**, checked 2026-10-17; \`COMMUNITY\`, low weight for jacket availability/recipe. https://steamcommunity.com/app/1174180/discussions/0/3714937078852528875/
- **[S12] Reddit /r/reddeadredemption**, *PSA: How to get Pearson’s rabbit request*, **2024-01-05**, checked 2026-10-17; \`COMMUNITY\`, unverified player-reported healthy-core trigger. https://www.reddit.com/r/reddeadredemption/comments/18z5cks/psa_how_to_get_pearsons_rabbit_request_the/
- **[S13] Reddit /r/reddeadredemption**, *How to trigger Pearson's rabbit request*, **2020-07-13**, checked 2026-10-17; \`COMMUNITY\`, conflicting reports on low cores, offers evidence of uncertainty **not a guaranteed procedure**. https://www.reddit.com/r/reddeadredemption/comments/hq87m6/how_to_trigger_pearsons_rabbit_request_for/
- **[L1] Legacy / read-only**, *Chapter 2 Trigger & Unlock Map*, **RESEARCHED — REVIEW PENDING**, researched 2026-10-13, checked 2026-10-17; \`LEGACY\`; conditional U08/U11, not GameGuide approval. https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/chapter_02_trigger_map.md
- **[L2] Legacy / read-only**, *Chapter 2 Opportunity & Exit Audit*, **RESEARCHED — REVIEW PENDING**, researched 2026-10-13, checked 2026-10-17; \`LEGACY\`; jacket, narrow windows and disputed timing, **not adopted**. https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/chapter_02_exit_audit.md
- **[H1] Hub internal / read-only**, *Unlock & Dependency Map v0.1*, **RESEARCHED — REVIEW PENDING**, checked 2026-10-17; \`LEGACY/DRAFT\`. U08 and U11 general conditional gates. https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/unlock_and_dependency_map_v0_1.md

**Rockstar-primary evidence limitation:** No accessible directly authored Rockstar mechanics specification or live trophy/account export was independently verified for the disputed Lenny qualification, Pearson rabbit conditions, Jack thimble source, or per-request end timing. Platform achievement wording and independently compiled specialist guides are **not** the same as a Rockstar test case. Do not upgrade those to \`CONFIRMED_IN_GAME_FOR_RULE\`. **No actual player's game was inspected for this dossier.**

## 7. Exception / expiry dispute log (not buried in prose)

| Dispute ID | Competing claims / source | Impact if wrong | Conservative decision / targeted in-game validation |
|---|---|---|---|
| **D-01 — Lenny table game** | PowerPyx [S01] says gang-member table games **don't count** for FWB; GameFAQs [S05], XboxAchievements [S06], Push Square [S09] explicitly list *marked* Lenny Five Finger Fillet as companion activity | Missed **Chapter 2** FWB credit | Distinguish ordinary game from white-marked Lenny-specific event. For trophy certainty choose **Charles/Javier** or seek platform credit; do not universalize either source |
| **D-02 — Game vs outing** | Total Completion [S07][S08] rewards playing four game types regardless of whether in camp; FWB [S01] tied to companion activity | False completion claims / wasted chapter window | Track each criterion **separately**; game type alone never certifies FWB |
| **D-03 — Jack's thimble** | RDR2.org [S03] suggests Marstons' tent; GameFAQs [S05]/PowerPyx [S01] say loot after active request | Unnecessary fruitless search and wrong item | Require Jack request/log first; loot naturally or inspect only with prompt; mark exact location **DISPUTED** |
| **D-04 — Jack comic timing** | Legacy audit [L2] places request during fishing mission; GameFAQs [S05] says after mission, RDR2.org [S03] after story milestone | Pretending universal exact unlock | Inspect fishing dialogue and actual task log; preserve Chapter 2 window |
| **D-05 — Pearson low cores / hour** | Anecdotes [S11][S13] suggest low cores or narrow hour; later reports [S12] explicitly obtain while healthy; primary test absent | Encouraging harmful/exploit-like grinding / false impossibility | No intentional injury/forced underweight or fixed 10:00 hard gate; respond to actual rabbit offer. Reward claim still observational |
| **D-06 — Pearson jacket chapter exclusivity** | Community [S11][S12] and legacy [L2] concentrate in Chapter 2; formal request lists [S01][S03][S05] focus on compass rather than rabbit | Overstated universal missability | Label **personal-exhaustive, likely Chapter 2-sensitive but unconfirmed universal gate**; investigate naturally before leaving |
| **D-07 — Dutch pipe first morning** | Legacy [L2] calls early moment useful; GameFAQs [S05] and PowerPyx [S01] permit Ch2–4 | Fabricated irreversible deadline | No first-morning urgency; treat as ordinary conditional multi-chapter request |
| **D-08 — Camp packing boundary** | Camp exits after story move, but legacy [L2] suggests some NPC activity may close even before final mission; exact earlier cutoff not established | False "last mission guarantees safety" | Start light rechecks after meaningful story changes; **pre-exit** audit when approaching departure. If observed marker disappears, mark **NOT AVAILABLE**, not definitively missed |
| **D-09 — Universal 8–20 request spawn** | Most guides [S01][S05] give daytime convention, but action- and person-specific exceptions noted | Overprescriptive advice, missed atmosphere | Schedule no compulsory hour; vary daypart if a particular known offer is being pursued |
| **D-10 — Achievement recovery via mission replay** | Trophy [S01] presumes single-run chapter windows; some other objectives can be replayed separately | False retroactive achievement credit | Never promise mission replay restores a skipped camp event; if proof of a surviving earlier save, GameGuide may discuss costs/choice |

## 8. Three practical Chapter 2 situations

**Example A — Early camp arrival, no white companion marker (T0).** Player reports arriving at Horseshoe Overlook and hearing a campfire conversation, but **no marked invitation or request**. Classification: \`S11.M01\` immersion; no evidence of \`S11.M02\` completion. Recommendation: enjoy a brief camp sweep, inspect the map and tasks, then play/explore normally. Recheck after story changes. **Do not** demand a bison hunt before its marker has appeared, award Friends With Benefits, or mark all unseen dialogs "missed."

**Example B — Lenny at Five Finger Fillet and Javier has white activity marker (T0/T1).** Player wants four games and the chapter-specific achievement. Ordinary Five Finger Fillet can be played for \`OFFICIAL_100.TABLE_GAMES\` if registered in Progress. Lenny's *specific marked event* is disputed for achievement credit; **Javier's marked outing** is a stronger FWB route if offered and player accepts its content. Observe separate game-type and companion credit, keep player results UNKNOWN until they report them. No accidental claim that Javier's activity is available just because he is at camp.

**Example C — Jack requests a comic, chapter may soon move (T1).** Player actually reports Jack's dialogue/task log and a looming late Chapter 2 marker. Mark \`S11.M03\` **ACTIVE REQUEST**, identify acceptable book, preserve it, and return to Jack for explicit Give action if possible before camp departure. Then verify acceptance and save if allowed. Separately check whether a Chapter 2 companion activity has been completed; this request **does not substitute** for Friends With Benefits. If a separate time-critical *story* task is already active, yield to Mission Control before a long item-fetching outing.

## 9. Cross-system links and typed relations (provisional; read-only)

| D05 owner | Typed relation | Target | Evidence/authority boundary |
|---|---|---|---|
| \`S11.M02\` marked activity | \`CONTRIBUTES_TO\` | \`S29.M03\` / ACHIEVEMENT.FRIENDS_WITH_BENEFITS | Claim CL-01/02; chapter presence check required |
| \`S11.M03\` fulfilled request | \`CONTRIBUTES_TO\` | \`S29.M03\` / ACHIEVEMENT.ERRAND_BOY | CL-06/07; only verified hand-in counts |
| \`S11.M04\` ordinary table game | \`INTERACTS_WITH\` / \`CONTRIBUTES_TO\` **game-type only** | \`S25.M01\` / OFFICIAL_100.TABLE_GAMES | CL-14/15; no FWB hard edge |
| \`S11.M03\` item preservation | \`INTERACTS_WITH\` | \`S17.M03\` / D06 inventory | D06 may be unmerged; no new item identity rule asserted |
| \`S11.M01\` time-limited social event | \`INTERACTS_WITH\` | \`S02.M02\` rest/time; \`S30.M05\` window | No unverified deterministic timer |
| \`S30.M05\` camp transition | \`HAZARD_TO\` | \`S11.M02\` and some \`S11.M03\` | Conditional **U11**, sourced camp-specific risk only |
| \`S11.M03\` Pearson rabbit favor | \`INTERACTS_WITH\` | \`S08.M03\` provisions / \`S10.M03\` crafting | Same NPC, **different recipient action**; D02/D03 own their procedures |
| \`S08.M01\` tithing contributions | \`CONTRIBUTES_TO\` | ACHIEVEMENT.GIVE_TO_THE_POOR | D02 owns donation mechanics; no claim of existing total |
| D05 closing window | \`INTERACTS_WITH\` | D08 future expiry dossier, \`S21.M04\` Honor strands | **D08 unassigned; NOT authored here** |

**No unverified \`REQUIRES\` edge is enforceable.** Other specialists' exclusive files are read-only and may not yet exist/merge. These IDs are proposed **link candidates**, not authoritative adopted graph edges.

## 10. Mistakes, safe fallback and GameGuide consumer handoff

**Three mistakes to prevent:** (1) confusing a generic table game with achievement-eligible companion outing; (2) buying/picking up an item and treating it as a delivered request; (3) waiting until the very last Chapter 2 scene to check chapter-specific companion access. A fourth common error is treating exhaustive personal camp dialogue as official 100% obligations.

**Safest conditional default:** **No OBSERVED offer → no artificial alarm.** If an actual marked companion invitation exists and the player values FWB, prefer it while the current camp exists. If an item request is actually in task log, preserve and deliver while feasible. If a special Pearson rabbit offer is seen, act naturally; do not demand an injured character or expensive reset. If nearing a verified chapter exit, do a short targeted camp audit. If a known active timed story segment competes, Mission Control first.

**GameGuide preflight/questions for actual player state** (do **not** write answers in Atlas): current reported chapter/camp and visible markers; any **player-confirmed** qualifying companion activity; specific requests actually in task log/turned in; player objective (**official 100 / trophies / exhaustive**); whether camp departure is approaching; latest permitted save if user offers it. Then choose **NOW**, **BEFORE_EXIT**, **OPTIONAL** or **UNKNOWN** based on evidence and goal. Only the legacy GameGuide campaign authority can record any outcome.

## 11. Boundaries, open questions, review gate

- **Open test O-01:** On a platform with traceable account progress, does **marked Lenny Five Finger Fillet** reliably count for FWB while ordinary Lenny/camp table play does not? Avoid universal claim until replicated or authoritative documentation found.
- **Open test O-02:** Reconcile **Jack's Thimble** item source and whether it becomes lootable only after accepted request.
- **Open test O-03:** Research Pearson rabbit trigger in a reproducible game/build test: actual chapter, exact gesture/dialogue, healthy-core case, chapter exclusivity and wardrobe reward; current evidence is disputed anecdotes.
- **Open test O-04:** Establish whether selected Chapter 2 item requests cease **before** departure and what actual observed marker/story event closes them, without inventing timers.
- **Open test O-05:** Record a specific *in-game* handoff trace showing item active, item possessed, correct recipient accepted, item/log change and gift, without hardcoding controls.
- **Out of scope:** D08 full chapter mission expiry chart, D02 camp accounting, D03 satchel recipes, D06 inventory capacity, D23 all rare dialogue transcripts, all later chapter narratives, gameplay progress recording, UI implementation and Gold mission tactics.

**Review requested:** Coordinator/owner to inspect CL-03, CL-10, CL-12 and D-01/D-03/D-05/D-06; decide how D05 recommendation logic should treat disputed marked table games and suspected rare jacket windows. Keep this dossier **RESEARCHED — REVIEW PENDING** after merge unless expressly adopted in the appropriate approval process.

**Provenance:** Authored only for issue #12 on isolated branch \`agent/atlas-camplife-012\`. Read-only legacy links remain **RESEARCHED — REVIEW PENDING**. Nothing here declares actual player mission outcomes, inventory, a save, a contribution total, achievements or unlocked markers.
