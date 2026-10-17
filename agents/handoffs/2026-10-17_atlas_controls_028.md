# RDR2 HUB — Wave 4 D07 Controls: Final Specialist Handoff

**Task ID:** \`atlas-controls-028\` · [Issue #37](https://github.com/L33TW0RLD/rdr2-hub/issues/37)  
**Working branch:** \`agent/atlas-controls-028\`  
**Branch registration baseline:** \`0021c319d0232c3a303aeadbe899055260120d54\`  
**Latest main observed at startup:** \`b3b902398eac80fffc798c5967486e5df1427270\` (branch registration one commit behind; **expected, no rebase**).  
**Date:** 2026-10-17 UTC.  
**Worker state on final verification:** \`DELIVERED_REVIEW_PENDING\`; **research maturity:** \`RESEARCHED_REVIEW_PENDING\` / **NOT ADOPTED**. Current player state is **UNKNOWN**, not inferred from tool use.

## 1. Exact three-file delivery and branch history

| Exclusive file | Purpose | Verified receipt |
|---|---|---|
| \`systems_atlas/dossiers/d07_context_controls_prompts_v0_1.md\` | Full 11-section evidence-checked D07 dossier | Dossier commit \`d5117669c3ca2f096871d9df5608044cb30c4d89\`; exact-ref readback blob \`beeb168d19f8a89b59a379ddfe3c31273e2ac97c\` (346 lines) |
| \`agents/checkpoints/atlas_controls_028.md\` | Initial checkpoint before research; verified progress and terminal closeout | Initial commit \`d349a1822963209e491bacb7f6c07ad981150b1e\`; interim \`1151f8c154fd17f00e0cbf2e309368dd053e98b4\`; terminal closure follows |
| \`agents/handoffs/2026-10-17_atlas_controls_028.md\` | This review handoff | Commit this file then verify exact readback; terminal head cannot be predicted before GitHub confirmation |

The initial checkpoint was committed and explicitly read back **before** independent gameplay research. The dossier was committed to the original **unchanged branch**, then read back. First comparison to main showed ahead 2, behind 1, with only checkpoint/dossier paths changed. No branch reset, rebase or force push.

**Absolutely no other writable paths.** Shared \`agents/registry.md\`, \`systems_atlas/README.md\`, taxonomy/record contracts, indexes/manifests, other specialists' deliverables, original \`L33TW0RLD/rdr2\` GameGuide/campaign/mission records and \`save_intelligence/\` were not modified. No integration PR/merge or ratification attempted.

## 2. Source-backed acceptance

D07 covers proposed S31.M01–M04 **as tentative labels only**, plus S30.M01/M04 and S28.M03 information-surface cross-references. Its **11 numbered substantive sections** have:

- **32 claim rows C01–C32** with precise Story Mode, platform/glyph and contextuality bounds, source IDs and confidence.
- **30 dated source entries E01–E30** from PlayStation launch hands-on coverage, Shacknews, Prima Games, Twinfinite, PowerPyx, PC default layout references and technical/community documents, plus five current main **read-only RESEARCHED — REVIEW PENDING** Atlas dependencies and negative-source warnings.
- **14 contradiction/exception records X01–X14** with competing statements and safe user fallbacks.
- Controls and feedback for holstered NPC focus vs drawn gun aim; greet/defuse/antagonize/rob; item/weapon inspect vs pick up; Study/Show Info/Track; Eagle Eye vs Dead Eye.
- Controller PS4/Xbox One comparative table and a **PC reference table expressly not universal**: mouse/context modes, Tab/F4/B/L/J/M and key remapping, modal tap/hold differences, prompt page & camera variations.
- Weapon Wheel, Item Wheel, Horse Wheel, satchel, outfit horse-storage and carried versus equipped; prevent mistaken item consumption, legal consequences, horse cargo/recipe assumption.
- Mounted versus on-foot targets, shop/camp/mission suppressions, input conflicts and safe target reorientation.
- Map/waypoint, yellow/white marker, HUD/radar, mission Log, illustrated Journal, Player, Compendium, Progress/Challenges, Total Completion, Story, manual-save and replay **as distinct UI evidence surfaces**.
- Explicit conditional gates rather than “available everywhere”; **three early Chapter 2 examples**: safe Valentine NPC dialogue; first deer Study versus Track; Horseshoe Overlook wheel/Log/Journal/Map comparison.
- **T0/T1** default, Story Mode only, risk-tier advice and typed but nonauthoritative crosslinks.
- Separate OFFICIAL_100 / ALL_GOLD / achievement / personal exhaustive / convenience goals, with **no invented live progress**.

**Play-facing summary:** prompt = \`target + stance/weapon/horse/menu state + exact verb + displayed glyph/hold/tap + eligibility + observed outcome\`. A guide's keybind table is **not** permission to assert the exact action is available or has succeeded.

## 3. S31 governance boundary — important owner decision

**S31 contextual interaction family is PROPOSED, NOT RATIFIED.** The candidate labels are \`S31.M01\` prompts, \`S31.M02\` observation modes, \`S31.M03\` information surfaces, and \`S31.M04\` context/action safety. Neither the dossier nor its typed \`INTERACTS_WITH\`/\`RECORDED_IN\`/\`HAZARD_TO\` references created canonical new taxonomy authority or hard gating edges.

**Owner/coordinator options:** (A) later ratify S31 and its leaf/edge descriptions with a *separately authorized* governance decision, **or** (B) retain D07 as cross-domain controls navigation for existing S01–S30, **without** creating S31. Neither option was chosen or implemented here. This specialist leaves \`systems_atlas/taxonomy_schema_v0_1.md\`, \`mechanics_taxonomy_v0_2.md\` and indexes untouched.

## 4. Key evidence and contradictions to preserve for coordinator review

| Issue | Evidence and scope | Safe disposition |
|---|---|---|
| **Focus vs gun aim and NPC action buttons** | [PlayStation launch preview](https://blog.playstation.com/2018/10/01/22-things-you-need-to-know-about-red-dead-redemption-2/), [Shacknews PS4](https://www.shacknews.com/article/108116/playstation-4-controls-red-dead-redemption-2), [RDR2.org NPCs](https://www.rdr2.org/wiki/nonplayable-characters-npcs/) | Hold L2/LT with appropriate holstered/target state; read live Greet/Antagonize/Rob, do not fire accidentally |
| **Console Log versus Journal** | [Prima controller tables](https://primagames.com/tips/red-dead-redemption-2-controls), [Pro Game Guides controls](https://progameguides.com/red-dead-redemption/red-dead-redemption-2-controls-xbox-and-playstation/) and [Steam PC list](https://steamcommunity.com/sharedfiles/filedetails/?id=2830924878) | Controller **tap-left Log** vs **hold-left Journal**; PC commonly **L** vs **J**; menu availability still contextual |
| **PC wheel shortcuts conflict** | [2019 layout](https://dontdrinkandroot.net/knowledgebase/article/36zckntcANaF72fv4BN24H), [Steam 2022](https://steamcommunity.com/sharedfiles/filedetails/?id=2830924878), [2026 website](https://keymap.io/controls/red-dead-redemption-2/) | Do not guarantee \`E\` greet or \`Tab+MMB\` satchel; use **Settings → Controls → Keyboard & Mouse → Key Mapping** from actual game |
| **Dead Eye ≠ Eagle Eye; auto vs manual marks** | [main D09 research](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d09_cores_deadeye_growth_v0_1.md), [Shacknews controller](https://www.shacknews.com/article/108116/playstation-4-controls-red-dead-redemption-2) | Dead Eye stage A2 manual tagging **story gated in Chapter 2**; D09 owns ability stage, no “Q is broken” assertion |
| **Inspect ≠ Study or tracked/used/completed** | [Shacknews Hunting](https://www.shacknews.com/article/108167/complete-hunting-guide-red-dead-redemption-2), [PowerPyx Compendium](https://www.powerpyx.com/red-dead-redemption-2-full-compendium/), [main D15](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d15_compendium_trackers_v0_1.md) | Require specific verb and Compendium subflag; a visible button is not a trophy or 100% confirmation |
| **Map/mission Journal is not Story/Save/Gold** | [PlayStation.Blog](https://blog.playstation.com/2018/10/01/22-things-you-need-to-know-about-red-dead-redemption-2/), [main D11 travel](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d11_travel_wilderness_camps_v0_1.md), [main D24 replay](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d24_replay_saves_medals_v0_1.md) | Separate route/Journal/Log from Progress/Story/Total Completion and verified manual-save slot |
| **Inappropriate platform imports** | [Red Dead Wiki \`Controls in Redemption\`](https://reddead.fandom.com/wiki/Controls_in_Redemption) describes **RDR1**; Rockstar [mobile touch settings](https://support.rockstargames.com/articles/CwtYAazPxaxyxtxy868jO/changing-touch-controls-layout-for-red-dead-redemption-on-android-and-ios) describes **RDR1 mobile**; 2026 keymap site has hypothetical **Switch** layout | These are **negative** examples only. No claim RDR2 Story runs on Switch or inherits RDR1 touch/remap rules |
| **Edition and source verification** | StrategyWiki/PCGamingWiki primary page fetch returned HTTP 403, yet indexed snippets were readable; old PC maps may share one original chart | Source register explicitly notes access and dependence; coordinator should sample current PC actual key menu before adopting precise bindings |

**Publisher/primary transparency:** PlayStation.Blog's 2018 article is a **Sony first-party editorial hands-on source**, not a complete Rockstar official manual. No controlled live player test or verified current customized controls were performed. The source checked date 2026-10-17 is NOT a patch date or guarantee of future UI prompt layout.

## 5. Adjacent dossiers: read-only, no duplicate ownership

**D09** owns Dead Eye bar/skill/story gates; **D10** wardrobe, stored outfits, masks; **D11** routes/maps/camp unlocks; **D15** Compendium and 100% semantics; **D24** replay, saves, Gold accounting. D07 teaches only which **prompt/UI context** to use; no existing authority is replaced or adopted. Related D01 horse, D06 inventory, D04 hunting and D13 law also remain external rule owners.

**Owner status:** all previous Wave 1–3 research on main remains **RESEARCHED — REVIEW PENDING**, even where integrated. The original [GameGuide campaign](https://github.com/L33TW0RLD/rdr2/tree/main/campaign) alone records individual player accomplishments.

## 6. Exact consumer interface proposal, not software implementation

\`intent | observed platform/layout | current player context (aim/mounted/menu) | observed target + action label/glyph | eligibility (VERIFIED/CONDITIONAL/UNKNOWN) | safest next input | expected feedback | relevant Compendium/Story/Save check | claim/source IDs | return target\`.

**Example for Chapter 2:** if a user says “I see Greet,” explain **hold focus → choose shown Greet**, without assuming NPC response, honor, quest acceptance or trophy. If user says “inspect deer,” distinguish **Study** on living deer and **Track** under Eagle Eye, then ask for Compendium \`Studied\` flag only if relevant. Never automatically update original mission/Gold records.

## 7. Final verification and stop gate

**Pre-handoff verified:** initial checkpoint exists with explicit branch readback; source dossier \`d5117669\`, blob \`beeb168d...\` has exactly **11 sections / 32 C / 30 E / 3 examples**; first compare showed only **2 scoped paths** and branch main lag of 1. Interim checkpoint \`1151f8c\` committed.

**Mandatory final verification, after this handoff:** update own checkpoint to **\`DELIVERED_REVIEW_PENDING\`**, fetch all three files by explicit \`ref=agent/atlas-controls-028\`, compare branch with **latest** main and check the changed-path set is exactly these three; confirm terminal head commit and report SHA to coordinator. The handoff itself cannot know its final/closure commit SHA in advance.

**Coordinator review asks:** cross-sample cited actual platform controls; reconcile PC mapping contradictions, verify any on-screen prompts if user naturally reports them, decide S31 versus cross-index in separate authorized governance, inspect no protected-path changes and integrate only through coordinator review. No self-merge or ratification.

**STOP task on successful branch verification:** \`DELIVERED_REVIEW_PENDING\`; no new work assigned automatically. The persistent conversation can be reused for a future explicitly authorized new task with its own branch and lease.
