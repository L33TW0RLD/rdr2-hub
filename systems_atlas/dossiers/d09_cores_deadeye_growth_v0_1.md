# D09 — Health, Stamina, Dead Eye, Cores and Attribute Growth (Story Mode)

**Record:** ATLAS.D09 · **Kind:** Mechanics dossier · **Version:** v0.1 · **Research maturity:** **RESEARCHED — REVIEW PENDING, NOT ADOPTED**  
**Task:** `atlas-deadeye-016` · [Issue #19](https://github.com/L33TW0RLD/rdr2-hub/issues/19) · **Branch:** `agent/atlas-deadeye-016` · **Research/source check date:** 2026-10-17  
**Scope:** RDR2 **Story Mode**, PS4/Xbox One and PC plus compatible modern console builds; distinguish platform bindings, later story gates, edition bonuses, source age and menu exceptions. **Do not import Red Dead Online Ability Cards.**  
**Default spoiler tier:** **T0/T1 through Chapter 2**. Names of Chapter 4–6 unlock missions are contained in a separately marked **T2/T3** table (§5) that consumers should collapse for early-game players.  
**Primary proposed leaves:** `S01.M01–M04`, `S02.M01/M02`, `S26.M05`; typed taxonomy/record-contract IDs are **unratified proposals**, not mutable save-state keys. **GameGuide** is the only campaign/progress authority; this record contains NO observed player XP, rank, inventory, mission, Gold, save, equipment, health, or chapter.  
**Exclusive knowledge boundary:** D09 owns core/bar math, condition/recovery, attributes and Dead Eye ability stages. [D04 hunting/clean-kill](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d04_hunting_transport_v0_1.md) is **read-only** for animal quality and species-appropriate kills. [D12 herbs/food/crafting](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d12_herbs_food_crafting_v0_1.md) is **read-only** for exact recipes. [D15 Compendium](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d15_compendium_trackers_v0_1.md) and later D27 challenge ranks own distinct tracking; mission/Gold objectives are original GameGuide and later D24 replay territory. All prior Atlas research remains **RESEARCHED — REVIEW PENDING**, not adopted.

## 1. Operational model and vocabulary — three independent resources, not “one health stat”

**At the bottom-left HUD** are three Arthur circles with central **cores** and surrounding **outer bars**: Health (heart), Stamina (lightning bolt), and Dead Eye (eye). They are **three resources each represented by two different indicators**. Horse Health and Stamina, if shown while mounted, are **additional horse gauges** and belong to D01. [C01,C02]

| Pair | Outer BAR: immediate expendable capacity | Center CORE: maintenance/secondary condition | If depleted: decision-safe interpretation |
|---|---|---|---|
| **Health** | Takes damage when shot, struck, falling, etc.; regains over time subject to normal regeneration and core condition | Sustains Health recovery; Health Core can take damage after bar is exhausted; poor core slows recovery | Retreat/cover if safe, inspect **bar and core separately**, use appropriate item; no invulnerability claim |
| **Stamina** | Spent by sprinting, swimming, sustained physical exertion; normally recovers when exertion stops | Conditions stamina recovery, suffers ongoing passive drain / fatigue | Stop overexerting; choose rest/food or relevant tonic; severe swimming exhaustion is dangerous |
| **Dead Eye** | The time/charge budget for slow-motion targeting; **does not naturally refill with mere idle waiting in ordinary Story Mode** | Passive core depletion and aiming condition; some refill-on-kill behavior affected by game mechanics | Use specific Dead Eye bar tonic or supported kill/activity recharge; food restoring *only* its core does not itself ensure a full bar |

**Fundamental asymmetry:** Health and Stamina **outer bars** naturally regenerate under normal conditions; the **Dead Eye outer bar does not regenerate simply through time**. Kills/headshots can restore portions, while tonics/chewing tobacco can restore the bar. An empty core can impair bar recovery/aim; **an apparently full Dead Eye core beside an empty ring is not a bug in itself**. General-purpose “all three bars regenerate on their own” summaries are **wrong/overbroad**. [C02,C03,C04]

**Health exhaustion is not a “revive” rule:** when the outer bar is empty, further damage can threaten the Health Core; death can occur. The meters are for decision support, not a guarantee that a particular health item rescues a lethal incoming attack. Horse revival is unrelated. [C01,C02]

**Core condition and maximum bar capacity are independent:** gaining attribute XP increases the **maximum bar/attribute level**, while food/rest generally replenish a depleted **core**. A bright gold **fortified** core/bar is a temporary effect, **not** an earned permanent extra attribute level. [C01,C05,C06]

## 2. Inputs, on-screen checks and the Dead Eye versus Eagle Eye distinction

The control sequence must be applied to the **platform/current Key Mapping**, not hard-coded into the player's save.

| Intention | Typical PS4 / Xbox controller | Typical PC keyboard/mouse | Observable feedback / gating |
|---|---|---|---|
| **Check stats and XP** | Pause → **Player** → Arthur → Health / Stamina / Dead Eye → **Progression** | Same menu; alternate mapping if customized | Current attribute level and XP; **not** the five story ability stages [C07] |
| **Weapon aim** | Hold **L2/LT** | Hold right mouse | Gun aim reticle; not yet Dead Eye |
| **Activate Dead Eye while aiming** | Click **R3/RS** while aiming | Typically **Caps Lock** or **middle mouse** while aiming | Slow motion/tinted screen, Dead Eye outer bar begins to drain [C08] |
| **Automatic marking — early stage** | Sweep aiming reticle across a valid target, **no manual tag button needed** | Same | Red X marks appear automatically; passing over an unintended body part can tag it |
| **Manually place marks — only after Chapter 2 story gate** | **R1/RB** while in Dead Eye | Common/default **Q** while in Dead Eye | Individual red X where player points; absence before gate is normal [C09] |
| **Fire marked sequence** | **R2/RT** | Left mouse | Arthur fires assigned sequence; bullet/ammo count and weapon validity matter |
| **Eagle Eye — find signs, trails, herbs, animal tracks** | Press **L3+R3** in eligible exploration state | Mapped Eagle Eye/Dead Eye key, commonly Caps Lock/MMB depending context | World tracking/highlights rather than Dead Eye's marked-shot volley [C10] |
| **Exit Dead Eye** | Press R3 again / leave aim as applicable | Toggle mapped key / leave aim as applicable | Return to normal time; remaining bar depends on expenditure |

**Not the same mechanic:** Eagle Eye is for heightened *observation*, nearby inspectable animal signs and trails. Dead Eye is an *aiming/combat* slow-time resource with automatic or later manual X marking. Seeing a trail does **not** unlock target marking; gaining max Dead Eye attribute **does not** automatically unlock a later story aiming stage. [C08,C10]

**Input caveat:** PC binds are configurable, controller layouts vary by platform/settings, and the same input can act as Eagle Eye outside aim versus Dead Eye during aim. If PC Q does not add a mark, first check **whether manual marking has been taught by the story**, then **Settings → Controls → Keyboard and Mouse → Key Mapping**. Do NOT diagnose controller failure from an unavailable stage. [C08,C09,C10]

**Shot planning:** normal manually marked volleys are constrained by loaded ammo and valid weapon context; X placement should be deliberate when the ability becomes available. Early automatic targeting will put X marks where the reticle passes, so use short, controlled motion and avoid sweeping across unintended animals/people. Dead Eye slows perceived time but **does not make Arthur immune to damage**. Sniper/weapon-specific scope behavior may differ; inspect the actual HUD prompt rather than promising red X tagging with every firearm. [C09,C11]

## 3. Core drain, condition and recovery precedence (S01.M01; S02.M01/M02)

| Observable symptom | Likely general cause | First low-risk response | Distinction |
|---|---|---|---|
| White/yellow Health **outer ring** nearly empty | Recent damage | Seek cover, inspect Health Cure/tonic if genuinely needed | Rest/food core maintenance is not an immediate substitute for health bar recovery in combat |
| Full Health ring but hollow Health **heart center** | Time/condition/core depletion | Eat suitable provision or rest when safe | “100% bar” and “healthy core” are separate |
| Stamina ring low from running | Physical exertion | Walk/stand, cease running, let bar replenish | Repeated sprinting can build **maximum Stamina XP** independently |
| Stamina **core** red/empty | Prolonged drain, poor nutrition/sleep, climate/weight context | Eat appropriate food, rest; check temperature and condition | A stimulant tonic may refill/fortify bar yet not cure long-term nutrition |
| Dead Eye ring empty, eye core full | Ordinary Dead Eye **non-passive bar refill** | Use a suitable Dead Eye bar tonic if available, or continue without Dead Eye; safe kills sometimes refill | Waiting idle is not a guaranteed refill |
| Dead Eye eye core depleted | Ongoing fatigue/condition; tobacco can have tradeoff | Inspect provision that restores Dead Eye core and/or safe rest | Chewing Tobacco can restore **bar** while **slightly reducing core** |
| Gold/yellow bar or core | Some relevant tonic/seasoned food **fortification** | Inspect which component is yellow and the item effect | Temporary reinforcement, not a level-9 or level-10 capacity unlock |

General conditions affecting cores include insufficient food/rest, wrong-weather outfit and weight. **Do not hardcode** a supposed 90-minute universal depletion deadline or an exact “sleep guarantees weather change” rule: RDR2.org cites a ~90 real-minute *ideal-condition* full-to-empty core reference, but climate, illness and activity alter drain; time-scaling and platform conditions vary. Weight adjustments are not instantaneous on every single bite. D10 owns exact clothing-temperature effects; D12 owns exact ingredient nutrition. [C02,C05,C12,C13]

**Sleep/rest:** at a safe gang-camp bed, suitable hotel bed or eligible temporary field camp, an available sleep interaction can restore core condition and advance world time. This may advance or hide time-sensitive activities; check the original GameGuide mission/current player context before sleeping through any observed chapter offer. Sleeping does **not** prove any recipe crafted or money spent. [C13]

**Health/Stamina recovery difference:** as bars empty, center-core status matters; don't instruct the player to drink every tonic to fix an empty core. Inspect the exact icon and the item description first. Player-reported post-action HUD must confirm whether it affected core, bar, or both. [C01,C02,C05]

## 4. Attribute XP, maximum capacity and practical natural growth (S01.M02)

Each of **three attribute types** separately earns XP through relevant activity. There is no traditional global Arthur-character experience level. View individual Player → attribute → Progression. The widely reproduced XP milestones are **cumulative thresholds**, not amounts “to add at each step.” [C07,C14]

| Attribute level | XP threshold per attribute (cumulative) | What the threshold represents |
|---:|---:|---|
| 1 | 0 | Base capacity |
| 2 | 50 | Natural XP capacity |
| 3 | 100 | Natural XP capacity |
| 4 | 200 | Natural XP capacity |
| 5 | 350 | Natural XP capacity |
| 6 | 550 | Natural XP capacity |
| 7 | 800 | Natural XP capacity |
| **8** | **1,100** | **Natural XP cap**; further XP alone does not award levels 9–10 |
| **9** | **No ordinary XP threshold** | Bonus attribute capacity via one corresponding **complete reinforced-equipment set** (purchase/ownership evidence), §7 |
| **10** | **No ordinary XP threshold** | Further bonus after all **three** corresponding complete reinforced sets, §7 |

**Natural practice with source-bounded examples** (one observed increment is sufficient; no farming required):

| Attribute XP | Published Story Mode sources of XP | Degree of confidence and limits |
|---|---|---|
| **Health** | **Row a boat** (~20 XP per 100m), catch fish (size-related), win a fist fight (~10 XP), qualifying bow/throwing kills (~20 XP), complete **Herbalist / Master Hunter / Weapon Expert** challenge XP; **Ginseng Elixir** gives ~25% progress to next natural attribute level | PowerPyx 2018 E04; exact rates are guide-specific and can vary with action/context; fishing gate not assumed |
| **Stamina** | **Sprint on foot** (~20 XP per 100m), swim (~20 XP per 15s), survive severe low-Health fight (guide example, NOT advisable as a technique), complete **Explorer / Horseman / Survivalist** challenge XP; **Aged Pirate Rum** gives natural Stamina XP | PowerPyx E04; riding is not on-foot sprint XP; don't deliberately injure Arthur or attempt risky water |
| **Dead Eye** | Skin suitable animal (guide lists **1–10 XP** depending size), cook/craft (often **1 XP** each), camp chores (reported **~5 XP**), qualifying distant headshot (**~1–5 XP**), some collectibles, complete **Bandit / Gambler / Sharpshooter** challenge XP; **Valerian Root** gives ~25% of the next natural Dead Eye level | PowerPyx E04, Shacknews E05, late 2018 guides; exact rate/eligibility must be checked through **Player → Progression** |

**Why the XP strand mapping differs from reinforced gear mapping:** Challenge-completion **XP** and the **attribute boosted by purchasing its associated complete equipment set** are **different mappings**. Thus e.g. Bandit awards *Dead Eye XP* but its completed Trapper equipment set increases **Stamina's post-8 maximum**, not Dead Eye. This causes recurring incorrect charts. See §7 and conflicting source interpretations in §10. [C15]

**Don't try to “force level 9” by sprinting or drinking more elixirs:** a level 8 or 1100/1100 XP readout is normally **not a bug**. Inspect reinforced equipment and bonus portion of Player stats; natural XP may show 8 even after bonus capacity exists. [C14,C16]

**Elixir caveat:** Ginseng Elixir / Aged Pirate Rum / Valerian Root are XP consumables, **not** proof of an immediate refill of each matching core/bar. If already at natural XP cap, further use may bring no XP benefit. Don't use exploit-based “drink, cancel animation, retain item” tutorials or claim resources owned. [C17]

## 5. Five story ability stages, separate from 10 attribute levels (S01.M03)

**The words "Dead Eye rank" and "Dead Eye level" are used inconsistently in guides.** This dossier uses **ABILITY STAGE A1–A5** (story-learned effect) versus **ATTRIBUTE LEVEL 1–10** (length of bar). Raising the attribute to 8 through skins/chores **does not** independently grant manual tags, continued free fire or organ highlighting. [C07,C09,C18]

### T0/T1: safe to show in Chapter 2

| Ability stage | Story gate, normal sequence | What changes; in-game check | Status |
|---|---|---|---|
| **A1 — auto X targeting** | Taught during Chapter 1 mission **Old Friends** | Time slows and red marks appear **automatically** when reticle sweeps over valid targets; activation/control conditional on game context | High independent corroboration, but **player may be replaying or not have a current weapon** |
| **A2 — manual X placement** | Taught during Chapter 2 **Pouring Forth Oil IV** (the concluding mission of that strand) | With Dead Eye active, **R1/RB or PC Q** places the X marks deliberately; firing uses assigned marks | High independent corroboration; ***not*** automatically granted to every Chapter 2 player |

**If early Chapter 2 Dead Eye auto-tags:** that is the **expected A1 behavior**, not a failed setting, XP deficiency or a bug. It is **not necessary** to rush any story mission solely to change the controls. No requirement to max level 8 to obtain A2. [C09,C18]

### T2/T3: later-story reference — omit from routine Chapter 2 advice

| Ability stage | Normal later chapter / mission (spoiler-bearing names) | Effect and important research dispute |
|---|---|---|
| **A3 — continued free fire** | **Chapter 4 — Urban Pleasures** is supported by its documented *mission reward* and multiple players' observed unlock prompt [E09,E10,E11]. **Shacknews/other lists instead incorrectly say Chapter 4 “Banking, The Old American Art” [E05].** | Shooting an unmarked shot need not immediately exit Dead Eye; exact timing of mission-triggered HUD confirmation is **VERIFY IN-GAME**. Safest label: **later Chapter 4 story upgrade**, not a hard instruction to play either mission for the user. |
| **A4 — fatal-region highlights** | Chapter 5 — **Fleeting Joy**, per Shacknews/wiki [E05,E09] | Highlight lethal regions such as heart/head. Do not conflate with ordinary manual markers/clean kills. |
| **A5 — critical-region highlights** | Chapter 6 — **Goodbye, Dear Friend**, per Shacknews/wiki [E05,E09] | Additional critical/vital anatomy indicators. Shot outcome still depends on weapon, distance, animal quality and context; not guaranteed 3★ pelt or Gold. |

**Important research contradiction:** RDR2.org's broad [Dead Eye wiki E06] describes “stages upgraded through use” but does not reproduce the modern five mission gates correctly. Shacknews provides five gates but puts A3 at **Banking**; the RDR2 Red Dead Wiki's **Urban Pleasures** mission page explicitly lists the **Continued Free Fire** reward. The **stage set** has high support; **A3 precise stage assignment** is disputed among secondary overviews, with *Urban Pleasures* stronger from a mission-specific source. No gameplay experiment was conducted by this specialist. [C18,C19]

**Dead Eye never guarantees safety:** Story Mode Dead Eye slows time, does not grant blanket invulnerability and does not supersede the active mission's Gold restrictions, weapon type, ammo count or actual threat position. [C08,C11]

## 6. Recovery, provisions, tonics, fortification and nutrition (S01.M04, S02.M01/M02)

| Item/action category | General target | What to verify before use | Risks / false equivalences |
|---|---|---|---|
| **Provisions, cooked meat, appropriate food** | Mostly center **cores** (specific combination depends on item) | Item-wheel description and *which core icons* fill; D12 owns ingredient/recipe | “Full core” ≠ full outer bar or XP boost. Overeating/condition changes need context |
| **Ordinary tonics** | Commonly restore **outer bars** (Health Cure, Stamina Bitters, Snake Oil/Dead Eye variants) | Name, selected meter, strength, count in satchel | Tonics are distinct from recipes/pamphlets and not automatically owned |
| **Potent/Special/fortifying variants** | **Gold/yellow** fortified bar, sometimes fortified cores depending item | Actual **gold bar versus gold core** effect in prompt | Temporary; do not describe as permanent XP level or immunity to Gold-mission “no health items” checks |
| **Chewing Tobacco** | **Dead Eye outer bar refill** | Check bar increase and **Dead Eye core decrease** (RDR2 wiki) | Some guides omit negative core tradeoff; don't claim it is free replenishment |
| **Ginseng Elixir** | **Health attribute XP** | Player Progression before/after; use only if available | Separate from a routine health bar cure; natural cap at 8 |
| **Aged Pirate Rum** | **Stamina attribute XP** | Same | Don't confuse with a general Stamina Bitters tonic |
| **Valerian Root** | **Dead Eye attribute XP** | Same | Does **not** unlock manual marking or grant a later Dead Eye *ability* stage |
| **Rest/sleep** | Core recovery, advances time | Safe bed/camp and time-sensitive task | No clock/weather/mission outcome promise |
| **Herb-seasoned meal** | Selected beneficial **core**, some Big Game variants can fortify | D12 recipe entry, grill gate and item preview | Specific herb mapping and recipes belong to D12, not “all meals fortify everything” |

**Read-only D12 crossover:** [D12 research](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d12_herbs_food_crafting_v0_1.md) assigns **Wild Mint → Health**, **Oregano → Stamina**, **Creeping Thyme → Dead Eye** for eligible seasoning, with *Big Game Meat* examples offering strengthened/gold cores when properly cooked; a qualifying grill can be chapter/mission dependent. D09 does **not** duplicate ingredient lists or assume cooking, herbs, grills or recipes are unlocked. [C20]

**Weight, environment and sleep:** RDR2's eating/weight state can affect damage resilience versus stamina drain; opposing underweight/overweight effects are described in community sources but exact modifiers, change cadence and thresholds are insufficiently confirmed for universal tactical numbers. Check **Player → General / Weight** and current outfit-temperature cues if relevant; leave D10/D12 as source owner. Never instruct risky weight manipulation just to gain a marginal combat edge. [C12,C13]

**Temporary buffs and edition bonuses:** Rockstar's 2018 Special/Ultimate Edition announcement explicitly lists a **Core Stat Boost** as an edition-specific bonus; **do not apply its values universally**. GameSpot/RDR2.org distinguish gold temporarily fortified bars/cores; yellow-gold is not Trapper rank 9. Rockstar's later Online Ability Cards — “Paint It Black,” “Eye for an Eye,” etc. — belong to another mode entirely. [C06,C21]

## 7. Extra levels 9–10, Trapper reinforced equipment and official completion (S26.M05)

**Experience-only limit: level 8 (1100 XP) for each of three attributes.** To gain the extra **outer capacity** at levels 9 and 10, source-checked **reinforced equipment sets** must be unlocked through sequential challenges, **obtained/purchased at Trapper**, then the bonus recognized in Player / Progression. These are **not upgraded cores**. [C14,C16,C22]

| Attribute receiving **BONUS LEVEL 9/10** | Exactly three associated complete **Trapper gear SETS** | Caution about XP |
|---|---|---|
| **Health** | **Horseman**, **Sharpshooter**, **Weapons Expert** | Health *challenge XP* categories are **Herbalist, Master Hunter, Weapons Expert** |
| **Stamina** | **Bandit**, **Gambler**, **Master Hunter** | Stamina *challenge XP* categories are **Explorer, Horseman, Survivalist** |
| **Dead Eye** | **Explorer**, **Herbalist**, **Survivalist** | Dead Eye *challenge XP* categories are **Bandit, Gambler, Sharpshooter** |

**One complete set (four reinforced pieces unlocked across challenge ranks, commonly 1/3/7/10) → bonus level 9** for its corresponding attribute, **once XP-based level 8 is reached**. **Three complete sets for that same attribute → bonus level 10.** This means nine complete sets, associated with the nine 10-rank challenge strands, for maxing all three characters' attributes in the normal exhaustive approach. [C16,C22,C23]

**Do not conflate sequential rank completion and purchased gear:** a completed challenge tier **unlocks access** to its relevant reinforced equipment; unlocking is not purchasing; purchasing one piece is not buying the full set. A guide that only says “do all 90 challenges” is insufficient to prove the player purchased Trapper equipment. To verify: **Progress → Challenges** (sequential ranks), **Trapper → Reinforced Equipment** (what is unlocked, owned/available to purchase), **Player → attribute Progression / bonus**. [C16,C22,C24]

**Purchase-versus-equip conflict:** PowerPyx's 2018 article says “equipping” four pieces grants a capacity level, whereas multiple GameFAQs/Steam player reports and a GameSpot/Red Dead Wiki explanation describe **owning/acquiring the whole set** as sufficient, not continuously wearing it. Best-supported practical interpretation is **acquire the full set and verify bonus; wearing need not be maintained**. However it is **not** independently proven by this dossier's own game capture: label exact display conditions **REVIEW PENDING** and let Player stats be decisive. [C23]

**Official 100%:** `Pause → Progress → Total Completion → Player` includes **reach maximum Health, Stamina and Dead Eye** and **all nine challenge strands**, but NOT “gain all five Dead Eye story ability stages” as a separately named Player tally. Many abilities follow required story automatically; they remain distinct from Player stats. The official Total Completion checklist is not the same as exhaustive collectibles / all Gold missions / every Challenge reward purchased, except where the latter are means to satisfy listed criteria. A level 8 bar alone may leave the Player stat criterion unchecked. [C25]

**Story / region boundaries:** some high-rank challenges and related purchases demand later access or region-dependent tasks; don't claim that any Chapter 2 player can legitimately finish 90 ranks or all sets. The D27 Challenge specialist owns exact 9×10 objectives, region gates and deferred ranks; D09 only defines attribute interactions. No exploit/mission replay is a prerequisite or permitted default. [C24,C25]

## 8. Conditional gates, action guide and three spoiler-light Chapter 2 examples

### 8A. Gate/status crosswalk (knowledge rule versus actual character state)

| Gate / action | Supported general rule | In-game observation required | State for this user's campaign |
|---|---|---|---|
| `D09.G01`: basic Dead Eye A1 | Chapter 1 **Old Friends** tutorial; eligible aiming weapon/context | Observe ability HUD, red auto Xs; mission history only from GameGuide | **UNKNOWN** |
| `D09.G02`: manual X tagging A2 | Chapter 2 **Pouring Forth Oil IV** story ability event | Observe manual-tag tutorial/press R1/RB/Q and placed X | **UNKNOWN** |
| `D09.G03`: later stages A3–A5 | Later named story mission effects (§5 T2) | Actual ability prompt; not Player XP display | **UNKNOWN** |
| `D09.G04`: natural levels 2–8 | Gain individually qualifying XP to cumulative thresholds | Player → attribute → Progression before and after | **UNKNOWN** |
| `D09.G05`: level 9 | Natural 8 + one associated complete acquired gear set | Trapper purchased/owned + Player bonus view | **UNKNOWN** |
| `D09.G06`: level 10 | Natural 8 + all three associated complete sets | Three set receipts + Player bonus view | **UNKNOWN** |
| `D09.G07`: replenishing item | Item personally available, identified, usable; effect-specific core/bar distinction | Consumable UI description and HUD before/after | **UNKNOWN** |
| `D09.G08`: sleep | An eligible safe bed/field camp and no conflicting mission/time-critical state | Actual sleep prompt and time/condition | **UNKNOWN** |
| `D09.G09`: cook fortifying meal | D12's actual learned recipe, ingredient and correct station availability | Crafting screen + resulting item description | **UNKNOWN** |

**Decision order when user asks “why is my Dead Eye bad?”**
1. Is the **eye CORE** empty, or the **outer white Dead Eye BAR** empty? Ask for the observable HUD distinction, not just “Dead Eye level.”
2. Is the problem **short duration** (attribute XP/capacity), **automatic marks** (A1 versus manual A2 story gate), **no ongoing free-fire** (later A3 gate), or **missing highlight** (later A4/A5)?
3. If immediate combat concern: safe position; inspect suitable tonic **bar** effect; food/rest for **core** maintenance. No automatic mission skip or guaranteed Gold.
4. If long-term investment: natural XP actions that fit normal play; inspect Player Progression; challenges/gear optional long route, not a mandatory Chapter 2 grind.
5. Return to original activity/Mission Control without changing the campaign.

### 8B. Three T0/T1 Chapter 2 teaching cases

**Case 1 — first gunfight, aim seems to place Xs automatically.**  
**Conditional start:** player confirms early Chapter 2 and an eligible armed setting; avoid live mission timer if not in a safe tutorial context. **Plan:** with the user's actual controller mapping, aim and press R3; sweep reticle *briefly* over a hostile valid target. If red Xs appear without R1/RB, explain **A1 auto-marking is normal**. Aim deliberately, don't drag reticle over multiple innocents; take cover. **Next observation:** whether manual tag prompt has actually appeared in a completed story moment. **No requirement** to max Dead Eye XP or rush the oil-strand mission.

**Case 2 — “my Dead Eye core is full but I can’t use slow motion.”**  
**Conditional start:** player reads HUD **center eye white** but **outer ring near-empty**, no mission restriction. **Plan:** inspect item wheel for a currently held item that explicitly refills **Dead Eye bar** (for example a relevant Snake Oil/tonic or Chewing Tobacco); read its tradeoffs before consuming. If unavailable, normal kills may restore small amounts; no obligation to fight just to fill it. A core-restoring meal/sleep alone cannot be promised to instantly refill the entire outer bar. **Stop:** compare eye center/ring after observed action; no fictional cure or possession.

**Case 3 — optional camp work/hunt for sustainable growth.**  
**Conditional start:** camp chore offered or safe field hunting route present; if cooking needed, use an actually available fire and D12 recipe. **Plan:** do *one* camp chore and inspect **Player → Dead Eye → Progression**, or naturally hunt a safe species under D04's **3★ → Show Info → appropriate clean kill → verify material** guidance, then skin/cook only where recipient constraints permit. These actions can add Dead Eye XP; no exact reward from a specific animal without current observation. **Stop:** after one level/XP observation or chosen outing end; the player's active challenges and official 100% remain unrecorded.

### 8C. What not to infer in any case
- A red auto-X does **not** mean “manual tags unlocked”; full Dead Eye bar does **not** mean stage A5; core refill does **not** guarantee bar refill.
- Neither “1100/1100 XP” nor completed 90 challenges alone proves **purchased** gear/bonus bar.
- A successful aimed shot does **not** prove a 3★ pelt or a mission Gold medal; D04 and canonical GameGuide own their outcomes.
- A food recipe in a guide does **not** establish the user's pamphlet, herb, valid grill, finished craft or gold-core buff.
- Do not turn a proposed HUD widget or checklist tick into actual Story Mode state.

## 9. Exact source register — access checked **2026-10-17**; publication dates separate

These sources are **not interchangeable**. **P = publisher primary** for its specific narrow claim; **G = established independent guide/journalism**, **W = community/wiki** corroboration or contradiction; **R = user reports/reproduction lead** low authority; **I = internal review-pending Hub reference**; **X = wrong-mode material only for negative evidence**. Source URLs permit reviewer independent verification. No primary Rockstar gameplay manual for all numerical XP values was identified; the numerical guide values remain **secondary**.

| ID | Source, exact URL | Original date / edition scope | Reliability and relevant limits |
|---|---|---|---|
| **E01** | [Rockstar — Special Edition / Ultimate Edition announcement](https://www.rockstargames.com/newswire/article/9k1248838o1892/The-Red-Dead-Redemption-2-Special-Edition-Ultimate-Edition-and-Collect) | **2018-06-04**, official launch edition detail | **P / HIGH**: optional Story Mode core-stat boost for applicable editions; not everyone owns it |
| **E02** | [GameSpot — How The Health, Stamina And Dead Eye Systems Work](https://www.gamespot.com/articles/red-dead-2-core-guide-how-the-health-stamina-and-d/1100-6462802/) | **2018-11-06**; PS4/Xbox One Story coverage | **G / HIGH**: core versus bar, food/rest, fortified tonics; avoid extrapolating all Dead Eye regeneration |
| **E03** | [RDR2.org — Cores & Bars Guide](https://www.rdr2.org/guides/red-dead-redemption-2-cores-guide/) | originally 2018-10-29, updated **2023-01-09** | **G / HIGH** for Dead Eye no passive ring regen, bars vs cores; 90-minute core-drain is conditional |
| **E04** | [PowerPyx — How To Level Up Health, Stamina, Dead Eye](https://www.powerpyx.com/red-dead-redemption-2-how-to-level-up-health-stamina-dead-eye/) | **2018-10-28** | **G / HIGH** cumulative 0–1100 XP natural cap and XP action categories; equipment **equip** language conflicts with owners' accounts |
| **E05** | [Shacknews — How To Upgrade Dead Eye](https://www.shacknews.com/article/114815/how-to-upgrade-dead-eye-in-red-dead-redemption-2) | **2019-11-06** | **G / HIGH** five stages and XP sample; **misattributes A3 to Banking** versus mission-specific contrary sources |
| **E06** | [RDR2.org — Dead-Eye wiki](https://www.rdr2.org/wiki/dead-eye/) | originally 2018-11-02, updated **2023-01-09** | **G / MIXED** correct Story vs Online split, basic controls/bar, but “upgrade through use” wording conflates ability stages with capacity |
| **E07** | [PowerPyx — FAQ/Tips/Tricks](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) | **2018-10-25** | **G / MIXED** HUD/control detail; says Dead Eye “regenerates over time,” contradicting more exact E03 and other sources |
| **E08** | [GameSpot — Challenges and how to trigger them](https://www.gamespot.com/articles/red-dead-redemption-2-challenges-and-how-to-trigge/1100-6463098/) | **2018-11** | **G / HIGH** sequential challenge rules, reinforced set-to-attribute chart |
| **E09** | [Red Dead Wiki — Dead Eye Targeting](https://reddead.fandom.com/wiki/Dead_Eye_Targeting) | community maintained, current revision date unknown | **W / MEDIUM** RDR2 subheading five A-stages, including **Urban Pleasures** A3; keep RDR1 separate |
| **E10** | [Red Dead Wiki — Urban Pleasures mission](https://reddead.fandom.com/wiki/Urban_Pleasures) | community maintained, revision date unknown | **W / MEDIUM-HIGH** **mission-specific** listed reward = continued free fire, supports A3 gate |
| **E11** | [GameFAQs — How to stay in Dead Eye after shooting?](https://gamefaqs.gamespot.com/ps4/274532-red-dead-redemption-2/answers/541754-how-to-stay-in-dead-eye-after-shooting) | ~2020 player question/answer | **R / MEDIUM** explicit *Urban Pleasures* answer |
| **E12** | [GameFAQs — Urban Pleasures mission prompt discussion](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/78337599) | ~2020 Story player observations | **R / MEDIUM** reported on-screen “Continued free fire” popup at end of mission; not independent capture by this agent |
| **E13** | [RDR2.org — Dead Eye controls](https://www.rdr2.org/wiki/dead-eye/) and [Spottis — PS/Xbox controls](https://www.spottis.com/games/red-dead-redemption-2-controls/) | 2018 guide / 2023 update | **G / MEDIUM-HIGH** controller bindings, Eagle Eye vs Dead Eye input-context |
| **E14** | [Reddit — PC mark key Q confirmation](https://www.reddit.com/r/RDR2/comments/ic81s7) | 2020 Story PC discussion | **R / MEDIUM** Q/Caps remappable; not guaranteed across mapping |
| **E15** | [GameSpot/GameFAQs — complete Challenge Guide](https://gamefaqs.gamespot.com/ps4/200179-red-dead-redemption-2/articles/6463098) | 2018 Story article | **G / HIGH** gear bonuses, mapping and sequence; controls may be original-platform |
| **E16** | [Red Dead Wiki — Trapper](https://reddead.fandom.com/wiki/Trapper) | community edited | **W / MEDIUM** nine sets, completed/purchased-set stat map |
| **E17** | [GameFAQs — Trapper reinforced equipment questions](https://gamefaqs.gamespot.com/boards/200180-red-dead-redemption-2/77305206) | 2018–19 player discussion | **R / MEDIUM** acquired equipment permanent bonus; need not wear |
| **E18** | [PowerPyx — Total Completion checklist](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) | **2018-10-25** | **G / HIGH** Player max 3 attributes + nine challenges; not all Gold |
| **E19** | [RDR2.org — Total Completion](https://www.rdr2.org/guides/red-dead-redemption-2-100-completion-guide/) | publication/update not independently established here | **G / MEDIUM** completion secondary; if inaccessible prefer E18 |
| **E20** | [Red Dead Wiki — Core](https://reddead.fandom.com/wiki/Core) | community edited | **W / MEDIUM** no-passive Dead Eye ring, aim/core and conditional drain; exact extreme modifiers unverified |
| **E21** | [Red Dead Wiki — Conditions in Redemption 2](https://reddead.fandom.com/wiki/Conditions_in_Redemption_2) | community edited | **W / MEDIUM** weight effects and delayed weight updates; exact percentages lower confidence |
| **E22** | [Push Square — Fortifying](https://www.pushsquare.com/guides/red-dead-redemption-2-what-does-fortifying-your-health-stamina-and-dead-eye-do) and [Core recovery](https://www.pushsquare.com/guides/red-dead-redemption-2-best-ways-to-restore-your-health-stamina-dead-eye-cores) | **2025-01-14**, PS4 Story | **G / HIGH** gold icons, tonic versus core maintenance |
| **E23** | [Red Dead Wiki — Chewing Tobacco](https://reddead.fandom.com/wiki/Chewing_Tobacco) | community, Story Mode subsection | **W / MEDIUM** RDR2 tobacco refills bar but slightly drains core |
| **E24** | [RDR2-HUB D04 hunting](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d04_hunting_transport_v0_1.md) | 2026-10-17 | **I / READ ONLY REVIEW PENDING**: Show Info/clean kill; late critical-highlight gate previously disputed |
| **E25** | [RDR2-HUB D12 cooking](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d12_herbs_food_crafting_v0_1.md) | 2026-10-17 | **I / READ ONLY REVIEW PENDING**: Mint/Oregano/Thyme, recipe and grill gates, not food math authority |
| **E26** | [Reddit — reinforced gear bonus and wear](https://www.reddit.com/r/RDR2/comments/ym01la/how_does_the_garment_and_reinforced_equipment_work/) | 2022-11-04 | **R / MEDIUM** complete sets acquired vs worn; chart matches E08/E16 |
| **E27** | [GameFAQs — challenge XP differs from Trapper bonuses](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/77248934) | 2018–19 player thread | **R / MEDIUM** identifies exact two-mapping confusion; primary XP guide E04 and gear chart E08 |
| **E28** | [Steam — PC Dead Eye Q keybind](https://steamcommunity.com/app/1174180/discussions/0/4331977787515183961/) | 2024-05-14 | **R / MEDIUM** modern keyboard/manual A2 corroboration |
| **E29** | [Red Dead Wiki — Single-player Challenges in RDR2](https://reddead.fandom.com/wiki/Single-player_Challenges_in_Redemption_2) | community maintained | **W / MEDIUM** gear bonus mapping and individual challenge XP payouts, not adopted rank dossier |

**Source hygiene:** E01 primary supports only *edition-specific* bonus; no Rockstar primary source corroborates every XP number or every stage gate. E06 includes RDR1 and Red Dead Online sections; **only RDR2 Story Mode subsections count**. Rockstar support notes for Online Ability Cards (“Paint It Black”, “Eye for an Eye”) are **NOT** Story Mode evidence. Every entry checked on the report date 2026-10-17; date checked is not a game patch/version guarantee.

## 10. Claim ledger and contradiction register — exact proposition, status, confidence, safe fallback

**Claim status vocabulary:** **CORROBORATED** = >=2 independent suitable sources; **PUBLISHER_CONFIRMED** narrow E01; **SINGLE_GUIDE** means an unreplicated published value; **DISPUTED** genuine mismatch; **UNKNOWN** no valid same-mode/platform proof; **CONSUMER_RULE** safe separation rather than game-engine fact. All cite E-IDs resolved to URLs in §9.

| Claim | Proposition and mode bounds | Evidence | Status / confidence |
|---|---|---|---|
| **C01** | RDR2 Story HUD has distinct inner three player cores and surrounding rings; separate horse pair | E02 E03 | CORROBORATED / HIGH |
| **C02** | Outer Health and Stamina bars spend/recover; cores affect recovery and can decline over time | E02 E03 E20 | CORROBORATED / HIGH basic |
| **C03** | **Dead Eye bar does not idle-regenerate** like other bars; kills or replenishment items restore portions | E03 E06 E20, contrary E07 | CORROBORATED but **CONTRADICTED by E07** / HIGH safe rule |
| **C04** | A full Dead Eye core with near-empty outer ring is normal; core alone isn't full bar | E03 E20, E22 | CORROBORATED / HIGH |
| **C05** | Provisions mainly restore cores, ordinary tonics mainly bars, rest helps cores | E02 E03 E22 | CORROBORATED / HIGH for broad classification |
| **C06** | Gold/yellow bars or cores indicate item-specific temporary fortification, not permanent XP | E02 E03 E22 | CORROBORATED / HIGH; duration item-specific |
| **C07** | Pause → Player → attribute → Progression separately shows XP/level, not five ability stages | E04 E05 E02 | CORROBORATED / HIGH |
| **C08** | Dead Eye requires aiming + R3/RS; slow time, no invulnerability; mapped PC variations | E06 E09 E13 E14 | CORROBORATED / HIGH basic, MEDIUM specific bindings |
| **C09** | A1 auto-target after Chapter 1 Old Friends; A2 manual marks **Pouring Forth Oil IV** Chapter 2 | E05 E09 E10 E28 | CORROBORATED / HIGH broad; mission context observed by GameGuide only |
| **C10** | Eagle Eye exploration L3+R3 vs Dead Eye combat aim/R3; context distinction | E13 E24 | CORROBORATED / HIGH controller, MEDIUM keyboard |
| **C11** | Dead Eye can still receive damage; weapon/loaded shots mark limit/context constraints | E09 E06 E14 | CORROBORATED broad / MEDIUM-HIGH |
| **C12** | Hunger/rest/clothing/weight influence core drain and condition; precise modifiers variable | E02 E03 E20 E21 | CORROBORATED broad / numeric UNKNOWN |
| **C13** | Sleep can replenish cores, advances time; recipes/time-sensitive consequences distinct | E02 E03 E25 | CORROBORATED / HIGH general, time delta UNKNOWN |
| **C14** | Attribute natural XP levels cumulative 0/50/100/200/350/550/800/1100 for 1–8 | E04 E05 | CORROBORATED / HIGH as 2018 Story guide math; check current menu |
| **C15** | XP-awarding challenges: Health Herbalist/Master Hunter/Weapon Expert; Stamina Explorer/Horseman/Survivalist; Dead Eye Bandit/Gambler/Sharpshooter | E04 E27 E29 | CORROBORATED / HIGH for mapping; exact task payouts outside D09 |
| **C16** | Natural XP stops at 8; 9/10 are bonus outer levels gained via respective acquired complete reinforced sets | E04 E05 E08 E15 E16 | CORROBORATED / HIGH |
| **C17** | Ginseng Elixir, Aged Pirate Rum, Valerian Root grant natural stat XP, not story ability upgrade | E04 E05 E06 E27 | CORROBORATED / HIGH mapping, MEDIUM precise fractional value |
| **C18** | Five story-dependent Dead Eye ability stages exist separately from XP attribute levels | E05 E09 E10 E06 | CORROBORATED / HIGH stage distinction |
| **C19** | A3 continued free fire acquired in **Urban Pleasures**, whereas E05 lists later **Banking** | E09 E10 E11 E12 **versus** E05 | DISPUTED mission-specific / **Urban better supported; MEDIUM-HIGH** |
| **C20** | D12 Mint Health / Oregano Stamina / Thyme Dead Eye, specific fortified meals depend on recipe/station | E25 and D12's external source links | INTERNAL REVIEW PENDING; default inspect item's in-game effect |
| **C21** | Special/Ultimate Edition Core Stat Boost optional, not universal; Online cards mode-exclusive | E01 E06 | PUBLISHER_CONFIRMED edition narrow + CORROBORATED mode / HIGH |
| **C22** | Bonus-set map: Health Horseman/Sharpshooter/Weapon Expert; Stamina Bandit/Gambler/Master Hunter; Dead Eye Explorer/Herbalist/Survivalist | E08 E15 E16 E26 | CORROBORATED / HIGH |
| **C23** | Acquiring/buying, not keeping gear equipped, normally gives permanent 9/10 bonus; E04 “equipping” conflict | E17 E26 E16 versus E04 | DISPUTED exact condition / **ownership strongly supported** / MEDIUM-HIGH |
| **C24** | Nine strands × ten **sequential** ranks, four gear pieces per strand, challenge unlock != purchase, later gates conditional | E08 E15 E29 E04 | CORROBORATED / HIGH 9×10; exact gate D27 |
| **C25** | Official 100% Player requires max Health/Stamina/Dead Eye and nine challenge strands; all-Gold separate | E18 E04 E15 | CORROBORATED / HIGH |
| **C26** | Chewing tobacco restores Dead Eye bar with slightly reduced core in RDR2 | E23 E06 | CORROBORATED bar refill, SINGLE_GUIDE negative core / MEDIUM |
| **C27** | XP action exemplars: sprint/row/fish/bow/skin/cook/craft/chores/headshot have qualifying XP; exact values item/action dependent | E04 E05 | CORROBORATED broad / MEDIUM precise counts |
| **C28** | Maxing capacity by XP **does not** unlock A2–A5; later story gates independent | E04 E05 E09 E28 | CORROBORATED / HIGH |

### Contradictions that MUST survive review

| ID | Competing claims | Evidence and adjudication | Safe fallback / next evidence |
|---|---|---|---|
| **D09-X01: passive Dead Eye regeneration** | E07 PowerPyx FAQ says bar regenerates with time; E03, E06 and E20 say Dead Eye bar doesn't passively return like Health/Stamina | **CONTRADICTION**: specific core-versus-bar explanations and observed Story accounts outweigh a generic FAQ sentence | State **no reliable idle refill**; inspect bar after standing still, then after supported refill item/kill on current Story build; never claim sleep alone guarantees ring |
| **D09-X02: Chapter 4 stage 3 gate** | E05 Shacknews: “Banking”; E09/E10 Red Dead Wiki: “Urban Pleasures”; E12 direct reported mission popup | **DISPUTED secondary sources; Urban Pleasures mission-specific reward strongly preferred** | Default only “later Chapter 4 story upgrade” in Chapter 2; verify actual mission HUD in separate GameGuide-controlled campaign, no replay/progress fabrication |
| **D09-X03: five stages from story or XP?** | E06 RDR2.org stage wording implies upgraded through use; E05/E09 show named story abilities | **Two concepts conflated**: XP 1–8 is capacity, A1–A5 are story mechanics | Read ability prompt and Player XP separately; never try farming elixir to manual-mark |
| **D09-X04: purchase or wear complete reinforced set** | E04 “equipping” versus E16/E17/E26 ownership/acquisition sufficiency | **REVIEW PENDING**, majority support purchase for permanent bonus | Purchase/own full set (only if desired), check Player bonus, wear cosmetic choice not assumed; no current receipt |
| **D09-X05: challenge XP chart vs gear bonus chart** | Bandit gives Dead Eye **XP** but Bandit reinforced set gives Stamina **level bonus**; guides split chart categories | Both correct when labels are kept distinct; false contradiction from merging unlike statistics | Always label **XP awarded** versus **bonus stat granted by purchased Trapper set**, use §4 & §7 separate charts |
| **D09-X06: core 90 minutes / gold effect duration** | E03 ideal 90min; E20 condition matrix gives weather/condition-sensitive values, potential Online contamination | Exact real-time decay and gold duration unverified across game states/patches | No exact countdown/percentage player promise; inspect condition/fortified icon and current item effect |
| **D09-X07: story vs Online targeting** | Online Dead Eye Ability Cards do not slow time by default; Story Mode Dead Eye does | Distinct modes; Rockstar 1.06 ability-card notes are **Online**, not D09 authority | Only Story Mode sources, not PvP/Ability Cards/XP bonuses |
| **D09-X08: “Dead Eye level 8 means no further growth”** | Natural XP stops at level 8, bonus rings reach 9/10 via gear | Explained by separate progression systems, not generic level cap bug | Inspect Player bonus and owned gear; do not consume more elixirs |
| **D09-X09: recipes instantly refill every meter** | D12 meals may grant cores/gold and tonics fill bars; item-specific exceptions exist | Specific item description required; no generic “all food heals Health bar” | Read wheel preview then one before/after HUD check |
| **D09-X10: early hunting needs organ highlights** | D04 some guide conflicts on advanced Dead Eye; D09 confirms organ highlights later | Wrong prerequisite for normal Chapter 2 clean hunting | D04's species Show Info, 3★ target and correct weapon/shot; don't block hunting on A4/A5 |
| **D09-X11: edition bonus universal** | E01 Special/Ultimate Core Stat Boost advertised; other editions may lack it | Edition-specific primary evidence | Check user's installed entitlement; no higher baseline level inferred |

## 11. Typed provisional crosslinks, consumer handoff, acceptance and next observational tests

### 11A — Provisional relationship map (nonexecuting, no player completion flags)

| From | Typed relationship | To | Evidentiary interpretation |
|---|---|---|---|
| `S01.M01` | `INTERACTS_WITH` | `S02.M01/M02` | Nutrition/rest influences core condition; menu effects are conditional [C02,C05,C13] |
| `S01.M01` | `INTERACTS_WITH` | `S02.M03` | Exposure/clothing can accelerate drain; D10 owns thresholds [C12] |
| `S01.M01` | `INTERACTS_WITH` | `S17.M01/M03` | Consumables owned/selected must be real; D06 owns disposition [C05,C26] |
| `S01.M03` | `REQUIRES` | `D09.G01/G02/G03` | Named mission **general progression** enables ability stages; actual player stage UNKNOWN [C09,C18] |
| `S01.M03` | `INTERACTS_WITH` | `S04.M01` | Aiming and weapon/ammo class; not universal automatic Gold/perfect kill [C11] |
| `S01.M02` | `CONTRIBUTES_TO` | `C100.PLAYER_ATTRIBUTES` | Level 8 XP plus level 9/10 gear distinction; **provisional criterion**, not current status [C14,C25] |
| `S26.M05` | `REQUIRES` | `S01.M02, active sequential challenges` | Trapper reinforced complete sets unlock bonus bar capacity; all nine for max all [C16,C24] |
| `S26.M05` | `INTERACTS_WITH` | `S13.M04, S26.M01` | Trapper equipment/challenge rank research links; not game-state ownership [C16,C22] |
| `S01.M04` | `INTERACTS_WITH` | `S16.M02/M04` | D12 herb foods and tonic recipes; ingredient ownership UNKNOWN [C20] |
| `S01.M03` | `INTERACTS_WITH` | `S12.M01/M03` | Eagle Eye wildlife inspection vs Dead Eye aim; D04 clean kill rules read-only [C10,C28] |
| `S02.M02` | `INTERACTS_WITH` | `S07.M05, S11.M02` | Wilderness/gang camp rest can affect time of optional activities; D11/D05 own placement/urgency [C13] |
| `S01.M01–M04` | `CONTRIBUTES_TO` | `CCONV.BASIC_COMBAT` | Convenience/competence only, not a standalone completion/medal award [C01,C25] |

**All relationships are provisional** under `systems_atlas/taxonomy_schema_v0_1.md` and `knowledge/record_contract_v1.md`. No introduced canonical IDs or adopted dependencies. A menu gate's existence is not evidence that a specific player passed it.

### 11B — Mission Control / Free Roam / Companion exact boundary

**Original GameGuide/Mission Control:** read `L33TW0RLD/rdr2/campaign/` for **current authoritative reported** chapter, missions, medals and saves; use actual canonical mission Field Guide for scene-specific Gold restrictions and objectives. D09 can show a **core versus bar** warning or story-stage explanation **without** editing `rdr2/missions`, completing an objective, introducing an automatic cheat, assuming an XP level, or treating ordinary Red Dead Online aim rules as Story Mode.

**Free Roam:** may suggest *one meaningful, optional* stamina-building stroll, camp chore, noncompulsory cooking practice, or naturally chosen hunting/observation outing when feasible; use D04 weapon/quality rules and D12 exact food/craft requirements read-only. A long endurance grind, deliberately taking damage, dangerous swimming, exploit elixir consumption, forced early Chapter 2 Chapter-6 spoiler or challenge rank skip are not recommended.

**Living Adventure Companion/UI:** Ask at most one high-information prompt, e.g., “Is the **center eye** empty, or the **outer ring** empty?” Then show the matching recommendation. Optional detail expands to XP table/story stage (later chapters spoiler-collapsed)/Gear attribute mapping with claim IDs. A planning checkbox or temporary bar visualization is not a gameplay result.

### 11C — Next review-grade observations (advisory ONLY; no automatic task launch)

1. On current installed Story Mode version, capture before/after **Dead Eye outer ring vs center core** after idle waiting and a named bar-specific item; test **without risking rare item**.
2. Check **Pause → Player → Health/Stamina/Dead Eye → Progression** and an ordinary camp chore or one natural cook to confirm whether displayed Dead Eye XP increments and if the action was counted.
3. When the user naturally reaches the **Chapter 2 Pouring Forth Oil IV** stage, read the actual game's *manual marking* prompt and Q/RB/R1 mapping, without requiring a rush or assuming the mission is currently done.
4. At the **natural later Chapter 4 story** gate, take a scoped screenshot of *Continued Free Fire* if it appears. Resolve the **Urban Pleasures versus Banking** disagreement without altering a live mission objective or forcing replay.
5. If one complete reinforced set is naturally purchased, compare **gear ownership, worn selection and Player → bonus capacity**; do not buy other sets or invent a level-9 receipt solely for testing.
6. Verify exact Cheat/Online exclusions only if actual menu/version ambiguity is reported; otherwise the existing story-mode separation suffices.

### 11D — Submission tests for coordinator

- [x] Five named Dead Eye story abilities distinct from **10 capacity levels**; Chapter 2 auto versus manual control clear, later spoilers tiered.
- [x] Three pairs of **core vs bar**, including Dead Eye non-passive regeneration and tobacco/core tradeoff.
- [x] Health/Stamina/Dead Eye XP action examples and **cumulative** level-1–8 threshold table.
- [x] **Distinct** challenge-XP versus reinforced-equipment **bonus-attribute** mappings; purchase/equip conflict retained.
- [x] Story mode versus Online, keyboard/controller bindings, edition-specific Core Stat Boost and current observed player state UNKNOWN.
- [x] Regeneration, time, food, weight, sleep, temporary yellow fortified bar/core and core maintenance; D04/D12 content read-only.
- [x] 3 spoiler-light Chapter 2 examples with start constraints, HUD check, stop/return, no premature unlock claims.
- [x] **11 numbered sections**, 28 decision-sensitive claim IDs and 29 source records (including one Rockstar primary, independently published guides, community contradictions and explicit read-only Hub dependencies); checked 2026-10-17.
- [x] Contradiction register, safe fallbacks, typed provisional dependencies and read-only GameGuide/Free Roam/Companion integration.
- [x] No in-game progress, earned achievement, completed Gold, player inventory or current unlocked skill asserted; no decoder or original campaign edits.

**Dossier conclusion:** suitable as a **RESEARCHED — REVIEW PENDING** specialist delivery. Coordinator must independently review source limits, primary edition claim, the A3 mission contradiction, equipment acquisition versus wear, and representative item/core HUD outcomes **before any player-facing adoption**. Only the original GameGuide can confirm a player's completed task. This assignment's workflow ends separately at `DELIVERED_REVIEW_PENDING` after branch-scoped GitHub readback and final handoff.