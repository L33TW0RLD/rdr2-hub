# Systems Atlas — Taxonomy Coverage Audit v0.1

**Status:** DRAFT / REVIEW PENDING — NOT ADOPTED · **Date:** 2026-10-16  
**Compared:** [S01–S30 baseline](mechanics_taxonomy_v0_1.md), [Chapter 2 dependency map](unlock_and_dependency_map_v0_1.md), [Atlas Researcher 001](../agents/handoffs/2026-10-16_atlas_researcher_001.md), [Free Roam Designer 001](../agents/handoffs/2026-10-16_free_roam_designer_001.md), legacy [research shelf](https://github.com/L33TW0RLD/rdr2/tree/main/guides) (read-only).  
**Scope:** Meaningful Story Mode systems, not an item/encounter/animation encyclopedia. All families remain DRAFT topic addresses.

## Overall result

- **30/30 existing families examined; 30/30 retained at their current IDs.**
- **6 retained with improved internal indexing only (R):** S01, S05, S09, S14, S19, S29.
- **22 extended with previously implicit/weak submechanics (E):** S02, S03, S04, S06, S08, S10–S13, S15–S18, S20–S26, S28, S30. (The precise set is enumerated in the matrix below; counts are derived from it.)
- **2 proposed internal ownership reorganizations (O):** S07 and S27. They **do not** change external identifiers.
- **1 proposed new cross-cutting family (N):** S31 Contextual Interaction & Information Feedback; opt-in owner approval required.
- No existing v0.1 file overwritten, no legacy guide adopted, no player progress touched.

**Definitions:** R = sufficient high-level coverage, still dossier work needed; E = missing material leaf scope made explicit; O = ownership/subcategory repair proposed without renumbering; N = genuinely unowned family proposed. A classification does **not** assert a researched rule or current availability.

## Line-by-line S01–S30 audit

| ID | Disposition | Baseline fit and gaps / conflicts | v0.2 treatment |
|---|---|---|---|
| S01 Vitals, cores, character growth | R | Solid core/bar/XP/Dead Eye scope; easy to conflate stat growth with a Gold condition. | Differentiate attribute growth, consumable effects and Dead Eye staged abilities; S26 equipment progression cross-edge. |
| S02 Condition and rest | E | Sleep, weight and temperature covered, but camp-rest vs temporary camp, time passage and vulnerability need distinct discovery. | Add time-advance/rest, condition and clothing exposure leaves; avoid unsourced exact weight timers. |
| S03 Appearance, clothing | E | Clothing utility overlaps S02; trinkets cross S13, disguise with S05. | Appearance/equipment slots and temperature preparation here; actual survival effect S02; witness rules S05. |
| S04 Combat, equipment | E | Weapon familiarity, firing modes, weapon-wheel access near horse, throwing/quick-draw, defensive restraint need clearer lanes. | Subdivide handling/condition, melee/grappling, mounted loadout and stealth. Dead Eye mechanics remain S01. |
| S05 Honor, wanted/law | R | Existing family broad; context-sensitive law outcomes are under-sourced, but not missing category. | Maintain honor as distinct from identification/wanted/bounty; route robberies to S20. |
| S06 Horses and ownership | E | Main vs temporary horses, saddles, stable services, breaking, special equipment, cargo and loss already mentioned but intertwined. | Four explicit nodes: acquisition, bond/care, tack/stables, cargo/permadeath; connect S07/S12/S17. |
| S07 Navigation/travel/camps | O | Routes, stagecoach travel, trains, wilderness camp, boats/swimming, cart/wagon control and fast travel all conflate unlike systems. | Keep S07 for **world traversal and travel services** with travel/navigation/vehicle/wilderness-camp subcategories. Do not move gang camp (S08/09). |
| S08 Camp supply operations | E | Camp food vs Pearson crafting material donations and supplies/chores conflated with S10 and S11. | Separate supply/donation economy from crafting inventory and social routines; add gang camp transient services. |
| S09 Camp improvements/facilities | R | Ledger/Arthur lodging/tools and unlocks covered; unlock map still lacks proof of actual user purchase. | Keep upgrades as primary; Ledger dependency U02, actual benefit unlocked only after purchase. |
| S10 Pearson satchels | E | Need distinctions among recipe unlock, perfect-pelt hand-in, material bank, capacity and camp-decoration recipes. | Expand satchel/capacity vs Pearson-specific crafting leaves; link sourcing to S12 and markets to S17. |
| S11 Gang interactions | E | Chapter-conditional camp invites, camp minigames, chores, item requests and trophy credit overlap S08/S25. | Chores S08 mechanics; companion activities and item requests S11; actual table-game rules S25; each achievement condition separate. |
| S12 Hunting/animals | E | Core three-star/weapon/routing is good; Eagle Eye vs tracking, injured animal mercy, bait/scent claims and pelt/carcass conditions merit separate leaves. | Split study, tracking, kill-quality, recovery/transport; destination decision links S10/S13/S17. |
| S13 Legendary hunts/Trapper/Fence | E | Legendary material special handling differs from ordinary; Fence crafts don't belong to Trapper stock. | Separate legendary discovery/reward logic, Trapper crafting and Fence talismans, with loss exception flagged. |
| S14 Fishing | R | Scope already rod, techniques, fish species, legendary fish. | Submechanic identities; conditional U06; no claim rod owned. |
| S15 Herbalism | E | Picking and usage present, but compendium credit vs Herbalist challenges and timed/region availability need clearer independent edges. | Add harvesting/discovery, ingredients and challenge relation; no chapter-specific spawn promises. |
| S16 Campfire crafting | E | Recipes vs pamphlet-read state vs six official required recipe TYPES not sharply separated. | Personal crafting/learning/cooking only; vendor crafting routes back to S10/S13. |
| S17 Money/inventory economy | E | Inventory mechanics (stack/slots, horse storage, item disposition, unique-resource preservation) incomplete compared with old blueprint. | Add acquisition, carrying/banking, destinations and rare item preservation; do not duplicate an item-specific ledger. |
| S18 Treasure | E | Treasure chains and cash are covered; clue exploration vs actual reward pickup vs vendor conversion need independent concepts. | Split clue/mapping/treasure-claim and protect cash-conversion uncertainty. |
| S19 Bounty work | R | Appropriate standalone paid-lawful activity; intro Story Gold bounty differs from standard wanted posters. | Maintain first bounty mission/optional jobs distinction; evidence before any claim of repeatability. |
| S20 Theft/robbery | E | Different robbery targets, transport heists and criminal prompts described without clearly separating gameplay mode and completion types. | Four robbery target classes as facets; witness/law under S05; transportation rules S07. |
| S21 Stranger strands | E | White icon, steps, decisions; distinction between quest parts/quest strand and 10-strand official criterion is under-specified. | Stage-based side-quest model and windows; completion criterion separate. |
| S22 Chance encounters | E | Can overlap S21 or S24 and includes world NPC conversation; not all world dots are 100%-eligible encounters. | Random encounter vs named stranger vs hostile gang edges; event availability conditional. |
| S23 Discovery/secrets | E | Point of Interest, shack, journal, inspectable object and unique pickups are overlapping if used as one undifferentiated leaf. | Separate environment inspection, journal/discovery and secret location chains; point-of-interest criterion specific. |
| S24 Gangs/hideouts | E | Hideout clearance vs ambient gang ambush vs compendium gang discovery conflated. | Separate gang threat, hideout event and encounter/Compendium consequences. |
| S25 Town life/games | E | Table games, services, entertainment, photo mode; social prompts vs recreation rules need clarity. | Split four games, venue services/entertainment, photography and social leisure. |
| S26 Challenges | E | Nine named families present; challenge rank activation, locked tiers, trapper reinforcement and attribute max need cross-system linkage. | Enumerate nine challenge strands as one research set and distinguish rank progression from benefits. |
| S27 Collectibles/requests | O | Large clearinghouse duplicates S18 treasure, S13 legendary, S14 fish, S11 item requests, S23 discoveries and S28 records. | Keep S27 primary only for **collectible objective chains and hand-in contracts**; gameplay execution remains in originating family; S28 is observation/Compendium. |
| S28 Compendium | E | Observation verbs and discoveries, credit logic and possible missable full-compendium entries need separate layers. | Separate in-game record systems from action execution and full-compendium personal goal. |
| S29 Completion lenses | R | Correctly distinguishes official, all-Gold, achievements, personal; core risk is accidentally tagging everything official. | Maintain *definitions* of criteria only; no counts/progress in Atlas. Gold Rush 70 vs personal all-eligible Gold distinct. |
| S30 Story, replay, saves | E | Story marker, mission replay, checkpoint, save, medal, non-returnable one-offs often falsely considered interchangeable. | Separate gate/event flow, performance evaluation, save mechanics and chapter-window risk; Mission Control remains live owner. |

**Disposition checksum:** R=6; O=2; E=22; retained=30; proposed additional=1.

## Material omissions now surfaced

1. **Cross-context interaction grammar (S31 proposal).** Inspect/Focus/Study, contextual interactions, prompts, binoculars, Eagle Eye/Dead Eye distinctions, UI feedback, satchel/weapon-wheel/map/task-log access and input conflicts have no clear primary research home. These controls explain many early player mistakes. S31 would describe the *interaction grammar*, not duplicate specific hunting/combat instructions.
2. **Wagon, carriage, boat and on-foot traversal:** vehicles and water as actual mobility/handling subjects under S07, not treated as just stagecoach ticket services.
3. **Horse transfers and consequences:** temporary/main/owned slots, saddles, long-gun availability, injury/permanent loss and transport capacity as distinct rules, not a single 'horse basics' guide.
4. **Weapon state:** familiarization, weapon condition, wheel/horse storage, dual-wield access, ammunition variant interactions — S04 cross-references S01 and S17.
5. **Resource routing:** Pearson crafting donation, Trapper sale, butcher cash, unskinned carcass deliveries and legendary lost-pelt recovery are different mechanics and stocks.
6. **Observation versus completion:** study, track, kill, skin, compendium entry, Total Completion credit and all-entry personal completion can differ; no atomic 'animal completed' flag belongs in the taxonomy.
7. **Timed interaction opportunities:** gang camp requests, marked companion outings, letters, side-strand parts and Gold-sensitive optional sequences require separate expiry evidence and spoiler tiers, not universal trigger assumptions.
8. **Services and ambient interactions:** fast travel/rail/stagecoach, mail/post office, hotel baths, newspapers, barbers, theaters and minigames live under clear ownership, not promiscuous duplicates.
9. **Platform/edition differences:** mode-specific controls, optional content and console/PC nuances need conditional tags and claim scoping; never assume Online-only features in Story Mode.
10. **Save/replay semantics:** performance medal replay is not equivalent to preserving original-run inventory/unique pickup or camp state.

## Conflicts and migration map — proposed, not executed

| Baseline reference | Canonical owner in v0.2 | Redirect / extension treatment | Requires approval? |
|---|---|---|---|
| S01 Dead Eye ability / S04 gun combat | S01 for ability and stage; S04 for weapon/control use | Both IDs remain; add INTERACTS_WITH edge | No ID move; yes if protocol promoted |
| S02 temperature / S03 outfits | S02 for effects; S03 for selecting apparel | Retain both and cross-link | No ID move |
| S03 mask disguise / S05 law | S05 for law response; S03 for wearing mask | Retain both; no guaranteed anonymity claim | No ID move |
| S07 wilderness camping / S08 gang camp | S07 transient field-camp actions; S08/09 gang-base operations | Same IDs, clear subcategory boundary | Yes on ownership contract |
| S08 donations / S10 Pearson crafting | S08 ordinary camp supply; S10 Pearson craft recipes/stock | Source resource edges to S17 inventory | Yes on ownership contract |
| S11 camp games / S25 table games | S11 context of a marked *companion invitation*; S25 game rules | Achievement criteria not inherited merely by playing a game | Yes on ownership contract |
| S12 material handling / S10 S13 S17 | S12 obtaining quality; S10/13 destination craft; S17 safe item disposition | Material input/output graph | Yes on edge semantics |
| S18 treasure / S27 treasure chains | S18 gameplay/treasure puzzles; S27 collection-goal contract | S18 does not imply reward picked up | Yes on S27 internal consolidation |
| S11 gang requests / S27 generic requests | S11 gang favor interaction; S27 public collectible hand-in requests | Existing S27 ID kept; explicit aliases for any future migrated leaf | Yes on S27 internal consolidation |
| S28 Compendium / S29 Total Completion | S28 observation and entries; S29 goal definitions | REQUIRED_SUBSET edge only where threshold documented | Yes on goal semantics |
| S30 mission Gold / S29 completion lens | S30 scoring mechanics; S29 goal comparison | No score or earned medal copied into Atlas | No ID move |
| Cross-cutting controls | New **S31** proposed | New IDs S31.M01 onward; **no** S01–S30 renumbering | **Owner approval required** |

No legacy old-ID leaf-level redirects exist because v0.1 had only Sxx family IDs. Proposed v0.2 leaf IDs are fresh namespaced addresses and remain provisional until owner review.

## Research evidence and contradictions

| Claim / source | Finding | Confidence and disposition |
|---|---|---|
| [GTA Base 100% Checklist](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist) + [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) | Total Completion is five categories and generally subset-based, not every world object | HIGH CORROBORATED as broad framing |
| Same two guides | **One 12-card cigarette-card set** suffices for official Total Completion; full 144 cards are optional exhaustive | HIGH; PowerPyx's header checklist confusingly says '144' before its detailed section clarifies 'one set' — do not propagate header literally |
| [PowerPyx trophy roadmap](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap) | Gold Rush trophy threshold is **70 Gold medals**, while personal all-Gold target is stricter; named camp trophies are chapter-sensitive | HIGH, separate criteria |
| [PowerPyx camp upgrade guide](https://www.powerpyx.com/red-dead-redemption-2-how-to-upgrade-camp/) | One recovered Strauss debt **deposited** to camp box unlocks Ledger access | HIGH for normal route; not proof player bought tools |
| [Rockstar Support lost legendary pelts](https://support.rockstargames.com/articles/480idh1zECJ0ojrheApV1U/unable-to-skin-legendary-animals-or-losing-their-pelts-in-red-dead-redemption-2) | Lost legendary pelt/carcass material appears at Trapper after a delay | HIGH OFFICIAL for crafting-material recovery; do **not** infer cash sale credited or apply to ordinary pelts |
| [PowerPyx trophy roadmap](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap) vs [XboxAchievements](https://www.xboxachievements.com/game/red-dead-redemption-2/guide/) | Camp-table game vs companion activity qualifying conditions are phrased differently; rely on explicitly marked activity and proof | CONDITIONAL / NEEDS FOCUSED RECHECK |
| Legacy [perfect-pelt guide](https://github.com/L33TW0RLD/rdr2/blob/main/guides/hunting/perfect_pelts.md) | Species-specific clean-kill weapon and quality verification are researched; Buck Antler Trinket exact quality logic not settled | RESEARCHED — REVIEW PENDING; no adoption |
| Legacy [Pearson vs Trapper](https://github.com/L33TW0RLD/rdr2/blob/main/guides/hunting/pearson_vs_trapper.md) | Ordinary Pearson/Trapper material banks are separate, but variant-specific cases need exact interface check | REVIEW PENDING; use source claim scope |
| Legacy [inventory blueprint](https://github.com/L33TW0RLD/rdr2/blob/main/guides/inventory/system_blueprint.md) | Good item-identity/dependency/risk schema, **not researched mechanics** | DRAFT design only |
| [Chapter 2 map](unlock_and_dependency_map_v0_1.md) and [old trigger map](https://github.com/L33TW0RLD/rdr2/blob/main/guides/completion/chapter_02_trigger_map.md) | Exact timed triggers for optional oil wagon/requests may vary; actual marker and known hazard matter more | Conditional; preserve UNKNOWN precise timers |

**Common citation caveat:** A repository source may be reviewed without being adopted; a public guide can be corroborating evidence without validating every mechanic in that guide. Do not elevate platform-specific anecdotes to universal rules.

## Completion separation test

A 'perfect deer pelt acquired' involves S12 gameplay + optional S10 recipe input; it is *not* itself official 100% credit. A 'game of poker played' involves S25 and could satisfy the four-games category, but is *not automatically* a qualifying Friends With Benefits camp activity (S11). 'Gold medal earned in replay' is a possible result in S30's scoring system; it does not imply the unique pickup was collected in the campaign save. 'Study bird' is an S28 observation; do not assume it satisfies both 50-animal criterion and personal complete Compendium or relevant hunting challenge.

## Owner questions before promotion

1. Accept **S31** as a new first-class family or keep those controls as one S07/S04/S28 cross-index?
2. Accept S27 as a *collection objective and hand-in* category instead of another universal gameplay family?
3. Approve S07 internal subcategories separating maps, paid travel, vehicle handling, water and field camps?
4. Use provisional leaf IDs Sxx.Mnn as stable future addresses? If not, choose the ID policy before dossiers hard-code it.
5. Should exact completion subthresholds eventually have external stable C* IDs and an owner-reviewed game-version scope, or remain typed relationships only?

**No ratification performed; no campaign/missions/free-roam files changed.**
