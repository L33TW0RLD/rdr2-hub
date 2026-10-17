# Chapter 2 Prerequisite Research — Comparative Evidence Addendum v0.5

**Checked:** 2026-10-17 · **Status:** RESEARCH FOLLOW-UP / DISPUTES NOT RATIFIED · **Scope:** research-only companion gating for fictional scenarios.

**Authority:** This document does **not** change the existing [Chapter 2 graph](chapter_02_graph_v0_1.json), convert a candidate into a mandatory hard gate, prove a complete chapter mission order, or provide actual player unlock evidence. The user's real progress remains only in the original GameGuide; this addendum does not read or write any campaign data.

## Why check again?

The v0.5 unified companion needs to distinguish **a mission marker actually supplied in the fictional scenario** from **a mission inferred from online progression tables**. Several independently published guides directly disagree, not just on wording but on which missions must come first. Reconciliation therefore belongs in explicit source evidence, not a hidden "next mission" shortcut.

## Source-claim matrix — critical edges

| Topic | Published source A | Independent source B / C | Assessment | UI consequence |
|---|---|---|---|---|
| `m010` Kieran: *Paying a Social Call* | [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-paying-a-social-call-walkthrough/) lists **Polite Society** as unlock. | [Red Dead Wiki](https://reddead.fandom.com/wiki/Paying_a_Social_Call) and [GameFAQs PC Q&A derived from walkthrough](https://gamefaqs.gamespot.com/pc/274532-red-dead-redemption-2/answers/501648-how-do-i-complete-the-main-mission-paying-a-social-call) list **Americans at Rest**. The [Wiki community discussion](https://reddead.fandom.com/f/p/3114360318722153076) reports a practical replay consistent with Americans. | **UNRESOLVED:** two substantive written source families favor Americans, one differs; community anecdote is not independent controlled proof. | Never auto-offer Kieran because *only* Polite is completed. Display marker when actually observed in fixture; retain both as disputed research candidates. |
| `m011` Dutch/Lenny: *A Quiet Time* | [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-a-quiet-time-walkthrough/) and [Red Dead Wiki](https://reddead.fandom.com/wiki/A_Quiet_Time) associate the mission with *Paying a Social Call*. | [GameFAQs Chapter 2 walkthrough](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/chapter-2-horseshoe-overlook) adds at least one *Money Lending and Other Sins II* debtor-stage gate. [Wiki order discussion](https://reddead.fandom.com/wiki/Talk:Missions_in_Redemption_2) agrees with this additional conjunction. | **PARTIAL / POSSIBLE EXTRA GATE:** Paying a Social Call supported; a Strauss debtor task may be an additional requirement, without completing the separate Part III Gold stage. | Do not infer Dutch marker merely from m010 completion; inspect observed offer and debt activity. Keep part II setup separate from Gold m014. |
| `m013` Hosea: *The Spines of America* | [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-the-spines-of-america-walkthrough/) lists *Paying a Social Call*. | [Red Dead Wiki](https://reddead.fandom.com/wiki/The_Spines_of_America) and [GameFAQs Chapter 2](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/chapter-2-horseshoe-overlook) list Hosea's *Exit Pursued by a Bruised Ego*. GameFAQs additionally describes a camp conversation that can delay the marker. | **UNRESOLVED:** two sources agree on bear tutorial; one names a different prior. A scripted invitation/conversation may be part of visibility. | Do not make a silent mandatory edge from either source alone; showing the actual Hosea marker is stronger evidence in a fixture. |
| `m018` Abigail: *A Fisher of Men* | [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-a-fisher-of-men-walkthrough/) lists *Paying a Social Call*. | [Red Dead Wiki](https://reddead.fandom.com/wiki/A_Fisher_of_Men) and [GameFAQs Chapter 2](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/chapter-2-horseshoe-overlook) both name **A Quiet Time + Pouring Forth Oil III**, including the latter non-Gold setup. | **UNRESOLVED:** strong two-source secondary agreement for combined gate, one conflicting guide. This is not a controlled in-game OR/AND proof. | Fishing tutorial remains a milestone only after fictional m018 completion; do not predict Abigail's marker from Kieran alone. |
| `m009` Hosea bear lesson | [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-exit-pursued-by-a-bruised-ego-walkthrough/) describes *Polite Society* unlock. | [Red Dead Wiki](https://reddead.fandom.com/wiki/Exit_Pursued_by_a_Bruised_Ego) gives an OR across *Polite Society / Americans at Rest / Who Is Not Without Sin*. | **INCOMPLETE ALTERNATIVE ROUTES:** different breadth of prerequisite claim; independent game route confirmation needed. | Show only actually observed Hosea mission marker, don't force Uncle's mission first. |
| `m021` introductory Valentine bounty availability | [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-good-honest-snake-oil-walkthrough/) and [Red Dead Wiki](https://reddead.fandom.com/wiki/Good%2C_Honest%2C_Snake_Oil) both associate opening with *Polite Society*. | [Wiki missable content list](https://reddead.fandom.com/wiki/Missable_Content_in_Redemption_2) says it may remain available into Chapter 6; [GTA Base](https://www.gtabase.com/red-dead-redemption-2/missions/good-honest-snake-oil) calls it time-sensitive in Chapter 2. | **CONFLICTED EXPIRY:** separate mission eligibility from later chapter closure; do not assert it expires at Chapter 2 departure. | If unobserved after exit, label availability **UNKNOWN**, not "missed", until actual evidence. |
| `m017` optional skippable oil wagon | [Wiki missable content](https://reddead.fandom.com/wiki/Missable_Content_in_Redemption_2) proposes a specific in-game-hour window. | [Original GameGuide trigger map](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/chapter_02_trigger_map.md) and [Hub chapter research](https://github.com/L33TW0RLD/rdr2-hub/blob/main/mission_control/chapter_research/chapter_02_v0_1.md) emphasize the activated job's skippability and do not settle the exact time. | **SKIPPABILITY SUPPORTED, CLOCK NOT ADOPTED.** Online numbers are not reliable enough for a universal countdown without controlled test. | Foreground risk only after active wagon assignment; don't show a fabricated clock or deadline. |

## Evidence confidence and independence

- Publisher source tables and long-form walkthroughs are **game-research evidence**, not an observed marker in this user's or the fictional avatar's save. Their "unlocked by" may list a commonly used path rather than a fully necessary-and-sufficient Boolean condition.
- Red Dead Wiki's article and talk page may share contributors; they are not automatically two independent tests.
- GameFAQs published long-form walkthrough is an independent authored guide for many claims, but its companion Q&A sometimes repeats the same guide author/content. Do not double-count mirrored evidence.
- Player anecdotes can suggest controlled test cases but must not be treated as a version-specific proof of OR or AND dependencies.
- The original GameGuide guide/dossier is the **presentation and live campaign authority**, while independently sourced articles support research on general eligibility. These two authorities answer different questions.

## Constrained candidate hypotheses for later independent route tests

These are **proposed test conditions, not source-ratified game gates**:

1. **Kieran:** after Polite only vs after Americans only, check visible camp marker at distinct fictional event boundaries; note that this needs actual repeatable in-game verification to resolve.
2. **Dutch/Lenny:** after Kieran with no Strauss debtor returned vs Kieran + a Part II debtor resolved; distinguish the separate Part III Gold stage.
3. **Hosea wagon:** after Bear alone vs Kieran alone, inspect camp conversation and Emerald marker after leaving/returning.
4. **Abigail fishing:** after Kieran but without Quiet/Oil III, then each of Quiet and Oil III individually, then both; do not convert a community order to guaranteed activation.
5. **Valentine bounty:** marker after Chapter 2 exit versus before, using separate real-observation evidence and sources; no blanket Chapter 2 expiry warning.
6. **Active oil wagon:** protect the optional Gold part II while active; timing requires an independently repeated, platform/version-scoped test.

## Companion admission rule

For v0.5 the only way to treat a Story candidate as **currently observed** is an explicit `observed_markers` entry in a `SIMULATION_FIXTURE`; in any future real adapter, source-grounded *actual player observation* under GameGuide protocol will be required. Merely comparing candidate prerequisites cannot create an observed marker.

The interactive route may open an **unobserved dossier reference** on deliberate request, but its envelope says `REFERENCE_NOT_GAME_AVAILABILITY`. It may not label that mission started, available for an attempt or earned Gold.

**Review gate remains OPEN** for all contested Boolean dependencies above. None is added as a hard edge to the v0.1 graph by this document.
