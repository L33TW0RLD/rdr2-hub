# Chapter 2 Progression — Research Disputes & Admission Gates v0.1

**Status:** OPEN / RESEARCH REVIEW PENDING · 2026-10-17 · [Task #59](https://github.com/L33TW0RLD/rdr2-hub/issues/59).
This is a **source-conflict register**, not verified player progress or a required mission order.

## P0 — source contradictions that directly change branching

| Graph ref | Issue | Source evidence | Safe present behavior | Next verification |
|---|---|---|---|---|
| `m010` Paying a Social Call | What unlocks Kieran's marker? | [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-paying-a-social-call-walkthrough/) names Polite Society, while [Red Dead Wiki](https://reddead.fandom.com/wiki/Paying_a_Social_Call) names Americans at Rest | Two **candidate** predecessors; NO hard added edge | Confirm source quality and multiple playable routes |
| `m011` A Quiet Time | Is Strauss debt II an extra gate? | [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-a-quiet-time-walkthrough/) lists Paying a Social Call, [GameFAQs](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/chapter-2-horseshoe-overlook) adds one debt II stage | Social Call may be necessary, never assume sufficient; Strauss link only candidate | Distinguish one debtor event from Strauss III Gold stage |
| `m013` Spines of America | What precedes Hosea's wagon Fence mission? | [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-the-spines-of-america-walkthrough/) says Paying a Social Call; [community graph discussion](https://reddead.fandom.com/wiki/Talk:Missions_in_Redemption_2) says Exit Pursued by a Bruised Ego | Both as disputed candidates; marker observation stronger | Independent second source + scenario order |
| `m018` A Fisher of Men | Exactly which Story stages unlock Abigail's fishing mission? | [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-a-fisher-of-men-walkthrough/) says Paying a Social Call; [Wiki dependency discussion](https://reddead.fandom.com/wiki/Talk:Missions_in_Redemption_2) adds A Quiet Time and Oil III | No guessed mandatory chain; Abigail marker unknown until observed | Cross-check source version and plausible order permutations |
| `m017` Oil wagon Part II | Skippable timing | Original [Chapter 2 trigger map](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/chapter_02_trigger_map.md) and [Hub research](https://github.com/L33TW0RLD/rdr2-hub/blob/main/mission_control/chapter_research/chapter_02_v0_1.md) indicate a genuine active skippable Gold stage; exact time disputed | Urgent only when the wagon assignment is specifically active; do not invent N hours | Verify active mission versus offered marker and skip/fail mechanism |

## P1 — partially supported conditions, missing edges and time windows

| Graph ref | Current scope | What must be reconciled |
|---|---|---|
| `m009` Hosea bear mission | [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-exit-pursued-by-a-bruised-ego-walkthrough/) says Polite Society; older Hub trigger map allows broader first-opening-mission rule | Whether an alternate early mission changes availability |
| `m012` Who Is Not Without Sin / `m016` The First Shall Be Last | Gold identities prepared, exact prerequisite edges incomplete | Confirm actual marker and independent prior-story gates |
| `m014` Money Lending III | Part I/II debt stages are NO GOLD; Downes III has one Gold identity | Precisely encode OR among individual debtors and when Chapter 2 marker becomes available; debt-return event != Gold achievement |
| `m019` Oil IV | Oil III is a nonmedal setup stage, commonly necessary for IV | Confirm all other prerequisite/marker requirements |
| `m020` Mary III | Letter/help decision opens an optional Honor Gold stage | Distinguish letter received, read, accepted, mission begun and permanently declined |
| `m021` Good, Honest, Snake Oil | Introductory sheriff bounty Gold | Deadline across chapter boundary/other bounties unresolved; no fixed expiry claim |
| `m022` An American Pastoral Scene | Story entry sometimes playable in Chapter 3 | Do not make Chapter 2 exit a universally irreversible missable for this mission |
| `m023` Sheep and Goats / `m024` A Strange Kindness | [PowerPyx Sheep](https://www.powerpyx.com/red-dead-redemption-2-the-sheep-and-the-goats-walkthrough/) requires Oil IV, [PowerPyx finale](https://www.powerpyx.com/red-dead-redemption-2-a-strange-kindness-walkthrough/) requires Sheep | These are necessary source relations, not proof no other mission is required; check whether an intermission exists between triggers |
| Camp companion invitations and requests | Source research identifies chapter-sensitive windows | Time-of-day, character presence and achievement eligibility depend on actual offers; no generic phantom warning |
| Chapter exit checklist | Camp move can end unique opportunities | Specific verified items only; do not force every optional dialogue or craft before moving |
| Edition / optional content | Standard 104 count separate from special edition | Do not invent extra Chapter 2 Gold identities from setup stages |

## P2 — systems and long-term project correctness

| Capability/project | Supported source-based rule | Important limitation |
|---|---|---|
| `camp_ledger` | [PowerPyx Camp](https://www.powerpyx.com/red-dead-redemption-2-how-to-upgrade-camp/): one qualifying Strauss debt collected AND deposited ordinarily opens Ledger | Must still inspect actual interface; not full Strauss quest completion |
| `leather_tools` / `camp_development` | [Atlas D02](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d02_camp_ledger_upgrades_v0_1.md) and [D03](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d03_satchels_crafting_v0_1.md): tools separately purchased; recipes require own task/material | Never infer bought tools from Ledger or crafted satchel from one donated pelt |
| `stable_brush` | Hosea bear outing normally introduces stables and brush | Current horse, ownership, brush prompt and availability still independent |
| `emerald_wagon_fence` | Hosea's Emerald Ranch Seamus introduction | Not a claim that every other Fence previously inaccessible |
| `ordinary_fishing` | Abigail and Jack teaching mission is normal rod/fishing unlock | Does not automatically unlock legendary quest, Survivalist steps or purchased bait |
| Projects in Free Roam | One project + suitable outing when useful | Do not override requested Story or a genuine active time-critical stage with optimization pressure |

## Evidence/engineering acceptance plan

1. Mark each claimed edge **necessary**, **sufficient**, **conditional** or **unresolved** separately. A guide's word "next" is not evidence of a universal prerequisite.
2. Source-check two independent accounts for P0 edges, then simulate at least two alternate Chapter 2 sequences. Keep contradictory edge(s) out of hard gating until verified.
3. Add explicit OR/AND predicates for debtors and true optional stages only once conditions have been corroborated.
4. Test conflicting scenario reports: actual marker observed despite an assumed prerequisite missing → **surface conflict**, preserve player's observed marker.
5. Test active skippable oil task → suppress generic exploration. Test chapter-exit marker → before-advance audit, not an invented universal cooldown.
6. Build a view-model adapter that produces **multiple choices**, general system introduction, one long-term project milestone, and explicit `Before advancing / Worth now / Can wait` rationale.
7. Test ChatGPT UI against **fixtures only**, including Mission → Atlas → full original Guide restoration with no user-progress writes or persistent checkbox illusions.

**Gate not yet passed:** authoritative full 18-mission prerequisite graph, real user interface acceptance, current player save observation and standalone application deployment. The prototype is a deterministic simulation backed by sources, not a live game assistant.
