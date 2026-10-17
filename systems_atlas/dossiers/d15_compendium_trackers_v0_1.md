# D15 — Story Mode Compendium Verbs, Trackers & Completion-Credit Crosswalk

> **RESEARCHED — REVIEW PENDING; NOT ADOPTED.** This is a reference about how Red Dead Redemption 2 records *types of actions* and progress. It contains **no player progression data**. Its taxonomy identifiers are proposed, not a ratified executable schema.

| Record field | Definition |
|---|---|
| `record_id` / version / kind | `ATLAS.D15` / `v0.1` / `mechanic` |
| Task / issue | `atlas-compendium-019` · [GitHub Issue #22](https://github.com/L33TW0RLD/rdr2-hub/issues/22) |
| Checked | **2026-10-17** (source access date, **not** a RDR2 patch date) |
| Scope | **RDR2 single-player Story Mode**; PS4/Xbox One release and later PC/updated-console Story Mode where shared. Input glyphs, trophy providers, equipment/weapon catalog totals and patched Compendium visibility may differ by edition/update. **Not Red Dead Online/Naturalist Field Guide.** |
| Spoiler default | **T0/T1**, Chapter 2-friendly. Future access and story details only described as conditional (no later plot). |
| Primary proposed IDs | **S28.M01, S28.M02, S28.M03, S28.M04; S29.M01** |
| Read-only crosslinks | S12.M01–M05 / D04 hunting; S17.M01–M05 / D06 inventory; S15.M01 picking; S16.M05 crafting categories; S06.M01 horse identity; S04.M02 weapons; S26.M01 challenges; S27.M01–M05 collecting. **D20 collectibles**, **D24 medals/replay**, **D07 controls** remain outside this task. |
| Research ownership | Agent 019 researches D15. Owner/coordinator/GameGuide decide adoption; Atlas is never the live campaign ledger. |
| Player-level records | **UNKNOWN**: chapter, studied animals, discovered species, cards, owned equipment, fish caught, unlocked rod, challenge stages, achievement unlocks, mission medals, saves, and actual Total Completion percentage. |

## Executive field rule

**A Compendium entry, a completed action inside that entry, a checked box in Pause → Progress → Total Completion, a platform trophy/achievement, and a personally exhaustive collection are FIVE DIFFERENT claims.** Never convert one into another without an actual relevant screen or campaign-evidence check. [D15-C01–C04]

```text
What is the player's goal?
 ├─ Learn about a discovered species/item
 │    → Pause > Progress > Compendium > precise category + entry
 ├─ Official in-game "100%" / Best in the West
 │    → Pause > Progress > Total Completion > target row/checkmark
 ├─ Zoologist, Skin Deep, Gold Rush or other platform achievement
 │    → Trophy/achievement's OWN definition and verified unlocked state
 ├─ Current challenge tier
 │    → Pause > Progress > Challenges > named strand > ACTIVE rank
 ├─ Physically possess a card, document, recipe component or weapon
 │    → Satchel / weapon wheel / seller or post office, NOT catalog alone
 └─ Personally fill every detail of the world encyclopedia
      → optional Compendium entry/sub-action ledger; no automatic 100% requirement

Observe an action → open the correct surface → verify the updated criterion.
If a counter/checkmark is absent or ambiguous: UNKNOWN, not "credited".
```

The on-screen *prompt* and the relevant menu's **actual wording** outrank an internet shorthand such as “studied,” “found,” or “used” when those are not exact synonyms. [D15-C02, C05]

---

## 1. Definitions, action verbs and visible feedback — S28.M01 / S28.M03

**Verb semantics are context-sensitive.** “Found” may be a publisher's loose shorthand; the in-game row frequently uses “discover,” “collect,” “obtain,” or “use.” The safe protocol is to record the action **and** the directly visible change, independently.

| Verb | Specific Story Mode interaction / expected signal | Does NOT by itself prove |
|---|---|---|
| **DISCOVER / ENCOUNTER** | First distinct species, breed, item type or enemy gang enters appropriate Compendium category after viewing/meeting/handling it; discoverable criteria vary by family. **Check the category count and entry.** [C02,C05] | All sub-actions (study/track/kill/skin/use); platform achievement; player reached 100%. |
| **STUDY** | Aim at living animal/horse or use binoculars until `Study` prompt appears and complete contextual input (R1 on PlayStation / RB on Xbox in standard mappings); then inspect **Studied** entry flag. [C06,C07] | Tracking, killing, skinning; a further trophy is instantly unlocked; any variant already studied. |
| **TRACK** | Select animal trail/sign with Eagle Eye/context `Track` prompt and follow the recognized trail; check species `Tracked` subentry if offered. [C06,C08] | Study credit or Skin Deep; perfect pelt. This is **not** Naturalist Online tracking. |
| **KILL** | An observed animal death may create/update `Killed` field; correct type and game logging must be inspected. [C07,C08] | Proper clean-kill quality; skinned flag; all animal study; a Legendary-animal threshold unless actually legendary. |
| **SKIN** | Approach **skinnable** dead animal and perform skin action; Compendium may display **Skinned**; some species show **Plucked** or **Collected** instead. [C07,C09] | Every animal should be skinned, that plucked/collected action counts for Skin Deep, or a whole carcass request remains intact. |
| **PICK / COLLECT (plant)** | Locate a plant, perform `Pick` and check Plant Compendium unique-type count. Some plant entries have further `used in crafting` type details. [C03,C10] | Recipe crafted, 20 *distinct types* after repeated same herb, full Herbalist challenge, all plant-entry sub-actions. |
| **CRAFT** | Use a valid known recipe at an appropriate fire/menu; verify finished item's entry and **Miscellaneous > Recipes** type check where relevant. [C03,C11] | Six distinct official categories completed by repeating one recipe; satchel material donation counts as personal recipe output; recipe pamphlet read = output crafted. |
| **OBTAIN / ACQUIRE** | Actually acquire item/equipment/card (loot, reward, buy, craft, where eligible) and check inventory and Compendium family. [C02,C12] | `USE`, achievement unlock, permanently retained item, complete cigarette-card mailing set, all required variants. |
| **USE** | Actually employ a weapon or eligible item in relevant context; verify Weapons Compendium/Total Completion row rather than assuming acquisition equals `used`. The exact minimum interaction that flags a weapon as used is **not independently settled** for every category (e.g. thrown, melee, mission-default). [C02,C13] | That any pickup/purchase was fired/used; 48 counted; the item remains physically owned. |
| **INSPECT / READ / VIEW** | Open a document, object, map, journal, equipment/animal entry or special inspect prompt. Note exact object and observed feedback. [C04,C12] | Active STUDY on a live animal, a collectible handed in, an acquired item, a crafted item, or an automatically ticked objective. |

**Context controls:** Above buttons are **illustrative console standard controls** and can change on PC, remapped layouts, focus distance and current action. The game's contextual prompt is authoritative for the player's session. For an already-killed animal, inspect the **species record and individual flags**, not just the body; a post-mortem Inspect action should never be reported as a verified prior Study unless the Compendium explicitly marks `Studied`. [C06,C07]

**Separate counters:** A category may show “discovered x / catalog total” while an individual entry shows its own study, kill, track, skinned, used, or other detail percentage. These are not the same unit. Do not treat a single “100%” on one entry as worldwide Total Completion or completion of all Compendium categories. [C01,C04]

## 2. Normal availability, conditional gates and edition risks

| Gate / subsystem | Normal context | Verification question, not a player-state assertion | Research level |
|---|---|---|---|
| `D15.G01` menu/Compendium | Pause menu → **Progress → Compendium**; then eight category sections if available | Is the actual section accessible and which entries/flags does it show? | **CORROBORATED** [C01,C04] |
| `D15.G02` animal Study | Game teaches study early in Story and provides live target/bino prompt | Does the living target show `Study` and is `Studied` checked afterward? | **CORROBORATED** broad; exact first tutorial timing not a hard task gate [C06] |
| `D15.G03` fish discovery | Standard Story fishing tutorial/rod normally introduced by Chapter 2 **A Fisher of Men** | Is a fishing rod actually available, and has a **distinct** fish species been caught? | **CORROBORATED** normal route; player may lack gate [C14] |
| `D15.G04` horse encounter | Observe/study horse breeds in world; stable purchase/control separately gated via usual **Hosea horse-service intro** | Is the named *breed* recorded, regardless of coat? No assumption the player has a stable or brush. | **CORROBORATED** discovery; stable entitlement **UNKNOWN** [C02,C14] |
| `D15.G05` plants | Find interactable field plant and `Pick` where accessible | Is this a new type, not the tenth sample of the same plant? | **CORROBORATED** [C03,C10] |
| `D15.G06` equipment/weapon | Acquire relevant item by story, merchant, crafting or exploration, conditional on that item's own gate | Does the precise Equipment/Weapons Compendium record appear? Does **used** count visibly change? | **CORROBORATED** broad, specific weapon-use flags **UNKNOWN** [C12,C13] |
| `D15.G07` gangs | Story encounters reveal six rival gang classifications over time | Is specific gang present in Compendium? Not all six are expected in early Chapter 2. | **CORROBORATED** [C02,C04] |
| `D15.G08` challenges | Rank-strand challenge menu exists; **only active sequential stage** normally accrues progress | Which strand/rank is active, and did that counter increment? | **CORROBORATED** [C11,C15] |
| `D15.G09` cigarette cards | Cards may be physically found or come from **Premium** Cigarettes; mission/collection hand-in is conditional | Does Compendium show complete **12 distinct cards from one set**, do you still have/qualify to mail them, and does Total Completion row tick? | **CORROBORATED** one-set rule; specific mailing-gate edge **CONDITIONAL** [C16] |
| `D15.G10` trophy/achievement | Platform account and title/mode-specific achievement tracking | Does platform show unlocked **Zoologist**, **Skin Deep**, **Best in the West** or **Gold Rush**? | **CORROBORATED** criteria; **UNKNOWN** for player [C17,C18] |

**Restrictions/edition:** some catalog equipment/weapon denominators changed or are inconsistent across sources and patches (see §9). Rockstar [Title Update 1.15](https://support.rockstargames.com/articles/28AmlyPGLVKsJ8OpdN8myn/red-dead-redemption-2-title-update-1-15-notes-ps4-xbox-one-pc-stadia) expressly fixed inaccessible items appearing in the Compendium on unsupported platforms. Do **not** encode one frozen `x/59`, `x/60`, `x/65`, `x/72` or `x/74` denominator as an edition-invariant requirement. Source-supported **official checklist thresholds** below are much more stable. [C19]

**No compulsory early gate:** A player can study/observe Chapter 2 wildlife without claiming the fishing rod, every equipment recipe, a late-story region, full horse stable access, legendary map, or weapon unlock. Gated targets simply remain UNKNOWN/inaccessible until observed; do not present a full-catalog route as immediately executable.

## 3. Tracker crosswalk — eight Compendium categories vs official 100%

**Best in the West / in-game 100% uses Pause → Progress → Total Completion**, not the aggregate of every individual Compendium field. PowerPyx, GTA Base and GameFAQs independently reproduce seven Compendium subset rows; **Cigarette Cards is an eighth Compendium category but its official 100% criterion belongs under Collectibles.** [C01–C04]

| Compendium category | Source-backed official Total Completion requirement | Strong candidate credit interaction + surface to verify | What is NOT required for this row |
|---|---|---|---|
| **Animals** | **Discover 50 distinct animal species** | Study distinct animals with live `Study` where available; check **Compendium > Animals** and **Total Completion > Animals** | Not all 178 listed animal entries, not study/track/kill/skin every one, not all Zoologist/Skin Deep species. **Guides dispute whether simply killing also registers “discover”**; observe actual counter. [C02,C05,C06] |
| **Equipment** | **Obtain 10 different equipment pieces** | Acquire actual qualifying gear and inspect **Compendium > Equipment** and corresponding Total Completion row | Not 72/74 catalog items, not every upgrade/trinket/talisman. Item presence alone doesn't automatically count a particular **recipe** category. [C02,C12,C19] |
| **Fish** | **Catch 10 different fish species** | Catch/land distinct fish once rod is accessible; check **Compendium > Fish** and Total Completion | Not all available fish, not every species in fish catalog, and **not equivalent to the separate full Legendary Fish collectible chain**. [C02,C14] |
| **Gangs** | **Discover/encounter all six rival gangs** | Actual encounter/story exposure; inspect **Compendium > Gangs** and Total Completion | Not 100% every gang subentry (all camps, ambushes, hideouts), and not the **separate six gang hideout goal**. [C02,C04] |
| **Horses** | **Discover 10 different breeds** | Study breed via target interaction, ride/buy/tame if relevant, confirm unique breed in **Compendium > Horses** | Not all coats of a breed, all 19 breeds, four bonding levels for every breed; one max-bond requirement is separate **Player** criterion. [C02,C14] |
| **Plants** | **Collect 20 different plant types** | **Pick** distinct herbs/plants; check **Compendium > Plants**, Total Completion | Not all 43 species, every plant harvested, `used in crafting` for every herb, or 20 picks of one herb. [C02,C10] |
| **Weapons** | **Use at least 48 different weapon types** | Acquire/handle and use eligible distinct weapon; inspect **Compendium > Weapons** and Total Completion | Not every weapon/unique missable, not assumed from owning inventory alone; no requirement for every weapon familiarity/kill stat. Disagreement over exactly what registers `Use` -> observe counter. [C02,C13,C19] |
| **Cigarette Cards** | **ONE complete set of 12 distinct cards** under **Collectibles**, not one of the seven Compendium rows | Check **Compendium > Cigarette Cards** named set; satchel quantities; any applicable post-office/mail status; **Total Completion > Cigarette Cards** | **Not all 144** cards/12 sets for the official 100% row. Full “Smoking and Other Hobbies” quest is a different broader project. [C16] |

**Verbs must be transcribed accurately:** GTA Base and the detailed PowerPyx row use **“discover 50 animals”** but GTA Base says `study` while PowerPyx's prose says `kill` as one means of adding species; some newer summaries label the line “50 studied.” **D15 records the authoritative *checklist wording* and safest active Study workflow, not an unverified universal equivalence.** A category's counter and actual checkbox settle a player's case. [C02,C05]

## 4. S28.M02–M04 — All catalog entries, per-entry detail and irreversible/edition hazards

### Eight headings, seven threshold categories

The Story Compendium conventionally has **Animals, Equipment, Fish, Gangs, Horses, Plants, Weapons, Cigarette Cards**. These headings are browseable encyclopedic records, not eight equally scoped 100% tasks. [C04] Player curiosity may justify “fill all entries, complete their own mini-progress” as a self-imposed `OPTIONAL_EXHAUSTIVE` pursuit; that pursuit may entail studying, tracking, killing and skinning an animal as distinct substeps, or collecting, using and crafting a plant. **No guide establishes that all of that is required for Best in the West.** [C01,C04,C07]

### Achievements vs 100%, no mistaken equivalence

| Goal | Separate condition (sourced) | Important exception and scope |
|---|---|---|
| **Best in the West** | Check every official **Total Completion** objective across five groups (Missions/Events, Collectibles, Compendium, Player, Misc.) | **No full Compendium requirement**, not all mission Golds, no requirement to unlock every other platform achievement. [C01,C02] |
| **Zoologist** (Story Mode trophy/achievement) | **Study every *qualifying* animal across all states**; Study is a deliberate interaction, not every kill | PowerPyx reports **Guarma-exclusive animals not needed** for Zoologist/Skin Deep, and legendary animals reportedly excluded. Detailed per-species eligibility and counts vary among guides: consult trophy-specific eligible list, no fixed `178 studied` claim. **Track and kill unnecessary for Zoologist**. [C06,C17] |
| **Skin Deep** (Story Mode trophy/achievement) | **Skin all qualifying skinnable species** | Species recorded as `Plucked` or `Collected` generally are not skin-required for this trophy; don't kill harmless/unsuitable animals trying to skin them. Guarma-exclusive/legendary exclusions as above. [C07,C17] |
| **Gold Rush** (Story Mode trophy/achievement) | **Earn 70 Gold mission medals** | Mission medal accounting, eligible mission pool, replay/medal timing **D24/GameGuide-owned**; no claim it forms part of Best in the West or Compendium. [C18] |
| **Personal all-Gold** | Owner-chosen all eligible mission Golds | **Optional exhaustive personal goal**, distinct from 70 Gold and Best in the West. No ledger modified here. |
| **Every Compendium entry filled** | Personal optional goal incl. every qualifying category and sub-action, in the user's chosen platform/edition | Much broader and can involve limited-access species/items. Does not equal any of the above; no blanket “entire Compendium permanently required” claim. [C04,C07,C19] |

**Critical disputed missability:** PowerPyx's Total Completion page says no official 100% elements are missable, but its weapons/animal guides document **some individual rare weapons and region-limited/Guarma animals** that can be missed from *full catalog* or one-time encounters. These statements address **different scopes** and are not logically equivalent: **Total Completion thresholds can be satisfied without every optional rare entry**. [C01,C17,C20] Do not claim a missed full-catalog entry necessarily prevents official 100%, nor promise every optional personal encyclopedia completion can be repaired after chapter exit. D22/D08 own exhaustive missable research.

**Plucking is not skinning:** Tiny birds and some species offer **collect/pluck**, and some domesticated animals may be study-only. Skin Deep applies to **skinnable** species, not every animal in `Animals`. The exact eligible species list and odd bird cases are research-dependent; inspect entry label and the achievement's dedicated list. [C07]

**Rockstar-documented counter bugs:** Original official patch notes describe past **Story Mode** Compendium problems: [Update 1.06](https://support.rockstargames.com/articles/12RPCCjibCnwNPatrm8y9y/red-dead-redemption-2-title-update-1-06-notes-ps4-xbox-one) fixed weapon pickup entries not unlocking after certain mission failures; [Update 1.09](https://support.rockstargames.com/articles/6XLmD65fhWzs67WCok5hud/red-dead-redemption-2-title-update-1-09-notes-ps4-xbox-one) fixed a gang-camp count not incrementing; [Update 1.11](https://support.rockstargames.com/articles/6dT8UroC7aKslsqA38oaxj/red-dead-redemption-2-title-update-1-11-notes-ps4-xbox-one) fixed 100% plant Compendium progress for Sage/Ginseng/Currant families; and Update 1.15 fixed platform-inaccessible entries. **These are historical patch evidence, not claims that a current build has a live bug.** If observed entry and total conflict, verify save/build and capture screens before troubleshooting. [C19]

## 5. Relationship and credit flow: official game “100%” and non-Compendium goals

```text
ACTION IN WORLD (study / pick / catch / buy / handle / skin)
              |
              v
SPECIFIC OBSERVABLE EVIDENCE (entry flag / owned item / action result)
              |
              +--> Progress > Compendium: category or entry record
              |
              +--> Progress > Total Completion: ONLY when targeted checklist
              |     criterion is actually satisfied; visible checkmark needed
              |
              +--> Progress > Challenges: ONLY if currently active rank matches
              |
              +--> Satchel / service / post office: physical quantity & hand-in
              |
              +--> Platform trophy: unique separate threshold/effective unlock
              |
              +--> Personal ledger: opted-in full catalog, not game-credited 100%

No arrow is assumed automatic without the destination's own readback.
```

**Five built-in Total Completion groups**: *Missions & Events*, *Collectibles*, *Compendium*, *Player* and *Miscellaneous*. Examples of goals **outside** the seven Compendium rows and why verb specificity matters:

| Goal family | Evidence-backed exact criterion type | A misleading substitute to reject |
|---|---|---|
| **Player — challenges** | **All nine strands × ten ranks = 90 active sequential rank completions**; check current rank under `Progress > Challenges` [C11,C15] | One earlier action matching an unopened future tier is not evidence of credit; Compendium kill/plant counts not rank completion. |
| **Player — attributes / horse** | Max Health, Stamina, Dead Eye; reach Level 4 bonding with a horse [C02] | Study 10 breeds is not level-four bond, weapon/animal studying isn't full stats. |
| **Miscellaneous — recipes** | Craft **one each** of six **different recipe types**: cooking, tonic, ammunition, hunting, horse care, weapon [C11] | Six examples of one recipe type, collecting herbs, reading pamphlets, donating Pearson hides. |
| **Miscellaneous — wildlife** | Kill **five Legendary Animals** [C02] | Finding five ordinary animals, five animal entries, or a legendary pelt without verified kill. |
| **Collectibles — card set** | One complete set of **12 distinct cards** [C16] | Twelve duplicates or one card from each of 12 sets; catalog discovery alone ≠ post-office ready |
| **Collectibles — structured chains** | All required stages of hunting requests, fish, bones, carvings, dreamcatchers and exotics *as specified in their own checklist rows* [C02,C16] | Seeing entry or pickup ≠ final mailed/turned-in quest; **D20** owns exact collectible route and hand-in rules. |
| **Missions / Gold** | Story completion and separate Gold trophy use different evidence [C01,C18] | Medal awarded by a local UI checklist or inferences from Compendium. |

**No imported player values:** Generic thresholds do not say the user has x/50 animals or x/144 cards. The original [RDR2 campaign repository](https://github.com/L33TW0RLD/rdr2/tree/main/campaign) and direct player evidence govern claims of completed objectives, only after separate GameGuide reconciliation.

## 6. Typed provisional dependencies, benefits, costs and safe transitions

| Origin → target | Edge | Interpretation / evidence |
|---|---|---|
| S28.M01 → S12.M01 / D04 | `INTERACTS_WITH` | Hunting's live Study/Track/Kill/Skin is separate from animal quality and pelt handling [C06,C07] |
| S28.M02 → S06.M01 / D01 | `RECORDED_IN` | Horse **breed** discovery feeds catalog; horse purchase/stable and cargo rules remain D01-owned [C02,C14] |
| S28.M03 → S17.M01 / D06 | `INTERACTS_WITH` | **Obtained/held physical** item is distinct from collectible catalog/discovery and merchant disposition [C12,C16] |
| S28.M03 → S15.M01 / D12 | `INTERACTS_WITH` | Picking an actual distinct plant for credit; foraging/herb recipes owned by D12 [C03,C10] |
| S28.M03 → S04.M02 | `INTERACTS_WITH` | Weapon **use** is not the same statement as owning/equipping a gun [C13] |
| S29.M01 → S28.M02 | `CONTRIBUTES_TO` | Seven threshold subsets feed Total Completion criteria, not full catalog [C02,C04] |
| S29.M01 → S26.M01 | `CONTRIBUTES_TO` | All sequential challenge tiers separately required, no assumed retroactive completion [C15] |
| S29.M01 → S27.M01–M05 / D20 | `INTERACTS_WITH` | Official collectible subset/quests; D20 owns locations/hand-ins [C16] |
| S28.M04 → optional trophy source | `INTERACTS_WITH` | Zoologist and Skin Deep are external goals; not automatically 100% requirement [C17] |
| S29.M01 → future D24 | `INTERACTS_WITH` | Gold Rush threshold and mission replay/medal persistence, delegated [C18] |

`REQUIRES` edges are not invented merely because one mechanic helps another. **Specific gates** in §2 are conditional and not resolved from a generic live HUD. A reference to merged D01/D04/D06 or parallel unmerged Wave 2 is **read-only research**, status **RESEARCHED — REVIEW PENDING**, not adopted design authority.

**Benefits:** accurate planning; avoid performing unnecessary exhaustive tasks to satisfy a small official 100% threshold; protect unique/one-time variants if intentionally aiming at a personal full encyclopedia; confirm item hand-ins against their own criterion. **Costs/risks:** many actions consume materials/ammo, alter Honor/law if hunting domestic stock, spend money, change quest state, or risk chapter-only optional finds. No achievement or money amount is invented. Consultation of live status only with owner/player evidence.

## 7. Three common mistakes and spoiler-light Chapter 2 field exercises

### Mistake 1: “I found and killed this animal — Zoologist is done for that species.”
**Correction:** look up `Studied` explicitly under **Animals**. For Zoologist, Study is the required action; tracking and killing are separate. Some animals cannot be skinned; that isn't a Skin Deep defect. For 100% only the `Discover 50 animals` subset matters and must be verified as a separate row. [C06,C07]

### Mistake 2: “I have twelve cigarette cards, so the 100% card goal must be finished.”
**Correction:** one **complete named set**, 12 **different cards of that set**, not any random dozen. Compare card Compendium, held physical set, hand-in/mailed state when applicable and `Total Completion` checkbox. [C16]

### Mistake 3: “I picked twenty plants, so 20/20 types and Herbalist ranks count.”
**Correction:** twenty **different** types for the Compendium threshold. Challenges require their **active sequential rank**, and plant usage/crafting can be its own action. Picked twenty samples of one species is not twenty types; any inventory count remains separate. [C03,C10,C15]

**Other guardrails:** Do not equate 10 studied **horse coats** with 10 **breeds**; a weapon in satchel with a confirmed `used` row; `six crafted` with six **recipe families**; one Compendium 100% with overall 100%; or 70 Gold Rush medals with official Best in the West. Do not invite late-region collectible hunting during normal Chapter 2 play.

### Exercise A — Binocular naturalist walk (no animal harmed)
**Conditional start:** free roam and a visible species available in safe terrain; binoculars/Study prompt as actually shown. Observe a deer, rabbit or nearby bird; `Study`, then inspect `Progress > Compendium > Animals` and `Total Completion > Animals`. **Record the two distinct observations.** If study prompt never appears, do not certify it; follow current UI. **Learning:** STUDY vs DISCOVER vs trophy/Total Completion, no need for a kill. **Stop:** one verified entry or an enjoyable observation. [C02,C06]

### Exercise B — Horse-breed curiosity near an ordinary settlement
**Conditional start:** player has safe town/free-roam access and a visible, approachable horse. Look at its on-screen breed, aim/focus then Study if offered, inspect Horse Compendium for the exact breed; compare whether current count changes. Don't confuse a coat name with a separate breed, and do not take a stranger's horse simply to update a catalog. **Learning:** breed count versus bond level, equipment/stable availability remains UNKNOWN. **Stop:** after one observation. [C02,C14]

### Exercise C — A few different roadside herbs
**Conditional start:** the area actually offers pickable plants and the player has spare satchel capacity. Collect, say, a first **Yarrow** and a different plant **if visibly identifiable**, then check `Compendium > Plants` and `Total Completion > Plants` for **type** credit. Open `Progress > Challenges` independently: do not assume Herbalist progress unless the displayed rank qualifies. Optional: inspect a crafting recipe, without claiming it was crafted. **Learning:** PICK distinct type vs USE / CRAFT / CHALLENGE. **Stop:** after two observed types or when exploration leads elsewhere. [C03,C10,C11,C15]

These are **not imposed outings**, claimed player reports, a demanded set of tasks, exact fixed-world spawn promises, or an invitation to modify campaign status. They can be routed by Free Roam only when local gates and player interest are confirmed.

## 8. Claim-by-claim evidence ledger (checked 2026-10-17)

**Legend:** `PRIMARY` = Rockstar support patch-note evidence for precisely named historical behavior only; `INDEPENDENT` = specialist published guide reproducing the game's checklist; `COMMUNITY` = corroborative but not final proof. **Confidence applies to the exact claim**, not every statement from a domain. Date below is publication/update if known; every page accessed **2026-10-17**. Total Completion on the actual player's build is ultimate progress evidence.

| Claim ID | Precise proposition and scope | Source (direct URL, publication/update known) | Epistemic status / confidence |
|---|---|---|---|
| **C01** | Total Completion under Pause → Progress, five groups and checklist checkmarks; official 100% does not mean full Compendium | [PowerPyx 100% Guide](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) (2018-10-25); [GameFAQs Total Completion](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion) (updated 2019-09-13) | **CORROBORATED / HIGH** |
| **C02** | Seven Compendium **official thresholds**: animals 50, equipment 10, fish 10, gangs 6, horse breeds 10, plants 20, weapons 48 | [GTA Base 100% checklist](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist) (date unconfirmed); [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) (2018-10-25); [GameFAQs](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion) (2019-09-13) | **CORROBORATED / HIGH** |
| **C03** | Plants must be **collected/picked as distinct types**, not 20 of same specimen; other plant-entry subactions are distinct | [GTA Base 100%](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist); [GameFAQs Compendium](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/compendium) (2019-09-13) | **CORROBORATED / HIGH** types; per-entry use field **MEDIUM** |
| **C04** | Compendium has eight categories incl. Cigarette Cards; 100% Compendium checklist has **seven** and a separate Collectibles cards row | [GameFAQs Compendium](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/compendium) (2019-09-13); [PowerPyx Full Compendium](https://www.powerpyx.com/red-dead-redemption-2-full-compendium/) (2018) | **CORROBORATED / HIGH** |
| **C05** | 50 animals requirement is called **discovered**, but secondary guides conflict on `study` versus `kill` as precise sufficient credit | [GTA Base](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist) (`study`); [PowerPyx](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) (`kill`) | **DISPUTED sufficiency / MEDIUM**; threshold wording **HIGH** |
| **C06** | Zoologist needs deliberate animal **Study**, with binoculars/aim; TRACK and per-entry 100% unnecessary | [PowerPyx Animal Locations/Zoologist](https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/) (2018-12-12); [Gamer Guides Animals](https://www.gamerguides.com/red-dead-redemption-2/guide/extras/compendium/animals-general) (date unconfirmed) | **CORROBORATED / HIGH** |
| **C07** | Skin Deep counts **skinnable** species, not all 178; `Plucked` and `Collected` differ; some species cannot be skinned | [PowerPyx Animals](https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/) (2018-12-12); [Gamer Guides Animals](https://www.gamerguides.com/red-dead-redemption-2/guide/extras/compendium/animals-general) | **CORROBORATED / HIGH** broad; exact exceptions **MEDIUM** |
| **C08** | Story animal Compendium can separately mark STUDIED/TRACKED/KILLED/SKINNED | [Gamer Guides Animals](https://www.gamerguides.com/red-dead-redemption-2/guide/extras/compendium/animals-general); [PowerPyx Animal Locations](https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/) | **CORROBORATED / MEDIUM–HIGH** species-dependent |
| **C09** | Skinning is a different carcass operation from collecting/plucking; specific carcass preservation matters for requests | [PowerPyx Animals](https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/); [D04 Hub research](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d04_hunting_transport_v0_1.md) (**REVIEW PENDING**) | **CORROBORATED / HIGH** broad, D04 not adopted |
| **C10** | Compendium plants require collecting distinct plant types; some entries record additional recipe uses; not all sub-steps needed for 100% | [GameFAQs Compendium](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/compendium); [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) | **CORROBORATED / HIGH** threshold; **MEDIUM** detail |
| **C11** | Six crafting categories are cooking, tonic, ammo, hunting, horse care, weapon; actual crafts, not six arbitrary duplicates | [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/); [GameFAQs Total Completion](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/total-completion) | **CORROBORATED / HIGH** |
| **C12** | Equipment requires 10 **obtained**; Compendium contains equipment gained from play, purchase and crafting | [GTA Base 100%](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist); [GameFAQs Compendium](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/compendium) | **CORROBORATED / HIGH** |
| **C13** | Weapons checklist says 48 **used**, but some guide narrative says simply `found`/obtained; exact minimum use event unclear | [GTA Base 100%](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist); [PowerPyx Weapons](https://www.powerpyx.com/red-dead-redemption-2-all-weapons-locations/) (2018-10-27); [GameFAQs Weapons](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/weapons) (2019-09-13) | **DISPUTED operational predicate / HIGH** numerical threshold |
| **C14** | 10 unique breeds (not 10 coats); 10 fish species are catch-dependent and regular fishing normally introduced in Chapter 2 mission | [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/); [GameFAQs Compendium](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/compendium) | **CORROBORATED / HIGH** |
| **C15** | Nine sequential challenge strands, ten ranks each; only current active tier is credit-bearing | [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/); [GTA Base checklist](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist) | **CORROBORATED / HIGH** |
| **C16** | One complete 12-card set, not all 144, satisfies official card *Collectibles* row; card Compendium vs physically held/mailed set separate | [GTA Base](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist); [PowerPyx body subsection](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) (2018-10-25); [Red Dead Wiki Cigarette Cards](https://reddead.fandom.com/wiki/Cigarette_Cards) (community) | **CORROBORATED / HIGH** one-set; hand-in timing **CONDITIONAL** |
| **C17** | Zoologist and Skin Deep are broader achievement scopes with documented qualifying-animal exclusions incl. Guarma-only, likely legendary; not the 50-species row | [PowerPyx Animals](https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/); [PowerPyx Trophy Roadmap](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap) | **CORROBORATED / HIGH** broad; exact eligible count **DISPUTED** |
| **C18** | Gold Rush is 70 Story Gold medals, distinct from all-Gold and official 100% | [PowerPyx Trophy Roadmap](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap); [XboxAchievements guide](https://www.xboxachievements.com/game/red-dead-redemption-2/guide/) (updated date unknown) | **CORROBORATED / HIGH** threshold; replay D24 |
| **C19** | Historical patches fixed Story Mode Compendium mismatches and platform-inaccessible entries; totals vary between guides | Rockstar Support [Update 1.06](https://support.rockstargames.com/articles/12RPCCjibCnwNPatrm8y9y/red-dead-redemption-2-title-update-1-06-notes-ps4-xbox-one), [1.09](https://support.rockstargames.com/articles/6XLmD65fhWzs67WCok5hud/red-dead-redemption-2-title-update-1-09-notes-ps4-xbox-one), [1.11](https://support.rockstargames.com/articles/6dT8UroC7aKslsqA38oaxj/red-dead-redemption-2-title-update-1-11-notes-ps4-xbox-one), [1.15](https://support.rockstargames.com/articles/28AmlyPGLVKsJ8OpdN8myn/red-dead-redemption-2-title-update-1-15-notes-ps4-xbox-one-pc-stadia) (**PRIMARY**) | **CONFIRMED narrow historic / HIGH**; current issue UNKNOWN |
| **C20** | Some *optional full-catalog* entries/rare weapons/region-specific fauna may be missable even while standard official 100% checklist remains obtainable | [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/); [PowerPyx weapons](https://www.powerpyx.com/red-dead-redemption-2-all-weapons-locations/); [PowerPyx animals](https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/) | **CORROBORATED with scope caveat / HIGH** |

**Source register classification:** Independent specialist authors above provide **game-guide testimony**, not Rockstar source code or real-time gameplay. Rockstar patch notes establish only their respective resolved historical defects. The only user's-game authoritative readback would be the **specific in-game Progress/Compendium/Challenge/Inventory screen**, plus GameGuide's existing campaign evidence review. No screenshot test, trophy unlock, controlled trial or save decode was carried out for this dossier.

## 9. Contradictions, unclear criteria, observed-versus-universal

| Potentially misleading competing statements | Evidence and scope | Safe disposition; bounded future test |
|---|---|---|
| **“144 cigarette cards required for official 100%”** vs **“one 12-card set”** | PowerPyx summary bullet says `144 Cigarette Cards`, yet **its own detailed subsection** says `Collect 1 Cigarette Card Set` and `only ONE set`; GTA Base and GameFAQs confirm **one set**. | **RESOLVED for official Total Completion: ONE complete 12-card set.** 144 remains for wider personal/quest completeness. Verify **Total Completion card row**; don't mix with whole quest. [C16] |
| **“50 studied animals”**, **“discover 50”** and **“kill 50”** | Game's reproduced checklist says `Discover 50`; GTA Base says study them; PowerPyx prose says kill them. | **THRESHOLD CONFIRMED, sufficiency of each verb DISPUTED**. Live Study plus a checked official count is safe. Do not mandate 50 kills or equate body Inspect with Study. [C05] |
| **“48 weapons used”** vs **“48 found/picked up”** | Checklist uses `Use`; weapon-location guide frames as `find 48`; some automatic mission weapons appear in Compendium. | **48 threshold HIGH; precise use flag UNCERTAIN** for edge classes. Capture acquisition, actual use and before/after `Weapons` count before claiming. Do not urge law-breaking to fire a gun just to test. [C13] |
| **Exactly 72 or 74 Equipment entries? 59, 60 or 65 Weapons?** | GameFAQs/PowerPyx/GTA Base and weapon guide list different inventory totals; new versions and edition visibility vary. Rockstar 1.15 explicitly fixed platform-inaccessible entries. | **DENOMINATOR DISPUTED / VERSION-SENSITIVE.** Official targets are **10** equipment and **48** weapons; inspect game's actual displayed total. [C19] |
| **Must study all 178 and skin all 178 for Zoologist/Skin Deep?** | PowerPyx separates **qualifying species** and notes Guarma-only/legendary exclusions and non-skinnable/pluck-only animals; community numeric totals vary. | **NO fixed raw 178 requirement.** Use platform-achievement eligibility and in-game individual Studied/Skinned flags; no exact species-count guarantee. [C06,C07,C17] |
| **Every track/kill/skin subentry necessary for “100%”?** | Some entry pages show fuller sub-action progress; Total Completion requires partial discovery thresholds. | **NO** for game's official Total Completion. Only a personal full-catalog goal has subentry completion needs; individual exceptional species may lack such prompts. [C01,C04] |
| **Any earlier future challenge action retroactively credits later rank?** | Challenge guides describe sequential tier unlock and active-rank tracking, not guaranteed retroactivity. | **DO NOT assume retroactive credit**. Verify current active rank then repeat legitimate action when active; no hidden tracker invention. [C15] |
| **“All Compendium / collectibles accessible now in Chapter 2”** | Fishing normal tutorial, gang discoveries, recipe/item gates and portions of geography/story vary by stage. | **FALSE as blanket rule.** Keep each gate `UNKNOWN` until actual menu/mission state; no forced progression. [C14,C20] |
| **“Missing item in Compendium proves player never picked it up”** | Rockstar patch notes contain historic gaps for collectible weapon pickup after mission failure, plant category progress and platform visibility. | **Not universal**; inspect exact build/save and before/after screen. Official historical fixes do not prove modern bug. [C19] |
| **“Completing one 100% track automatically unlocks all achievements/Golds”** | Best in the West, Gold Rush, Zoologist, Skin Deep target different conditions. | **Keep external trophy proof separate.** All-Gold personal target D24-owned. [C17,C18] |

**Unresolved controlled-verification queue, not part of this task's writes:** test STUDY versus KILL for a *previously undiscovered* animal and official animals row; pickup versus actually firing a new weapon/throwable and weapon row; specific Story Mode `Inspect` prompts vs deliberate Study; card-set postal timing at source-approved quest gate; patch/edition denominators; species-specific trophy exclusions; UI delays. The tests require player/build-specific evidence, not a spreadsheet of assumed outcomes.

## 10. GameGuide / Free Roam / dashboard handoff — read-only

**GameGuide source control:** Original [`L33TW0RLD/rdr2/campaign/`](https://github.com/L33TW0RLD/rdr2/tree/main/campaign) remains the only live campaign authority. A player statement “I picked Yarrow” is an observation, not proof `Herbalist` or `Total Completion` ticked; a screenshot of specific **Progress** can corroborate its row. Gold medals and replay belong to mission dossiers/D24; no mission content or campaign file is authored here. An “agent checklist complete” is only a planning state.

**Free Roam:** present the right **goal lens** first: “just learn wildlife,” “official 100%,” “achievement,” or “personal exhaustive” before proposing outing. Then optionally pair ONE local outing and relevant *observational* Compendium check, not a world-clearing route. Gates for fishing, horse services, request posters and later regions must be conditional. No guaranteed spawn, availability or material ownership. Chapter 2 exercises §7 are suggested learning patterns, not completed records.

**Companion/dashboard** (proposal only): a tiny contextual reference card with distinct sections **Entry**, **Official 100%**, **Achievement**, **Optional exhaustive**, and a `NEEDS_PLAYER_VERIFICATION` label until evidence exists. Never render a single “full completion” bar by naively summing every Compendium field or a custom checklist. If the player follows a task, show the *exact in-game menu where evidence resides* and return to active Story/Mission Control without taking authority.

**D04/D06 read-only references:** [D04 hunting quality/skin/carcass](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d04_hunting_transport_v0_1.md) and [D06 inventory/cards/unique items](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d06_inventory_items_v0_1.md), integrated as **RESEARCHED — REVIEW PENDING**, not adopted. D03 recipe material specificity, D01 horse cargo, and Wave 1 cross-review likewise remain nonratified. Future D20 owns collection location/hand-in details; D24 owns medal, replay and saves; this document intentionally gives neither.

## 11. Next bounded research questions and owner-review request

**Owner/coordinator review requested** for (a) official seven-threshold crosswalk, cards' separate Collectibles path, trophy distinctions and exact verb discipline; (b) the exception table for discover/study/kill and 48 used/obtained; (c) Rockstar patch references and version-caution language; (d) chapter gates, spoiler-safe examples and cross-dossier interfaces; and (e) routing note in the task handoff (Issue #22 lists reusable specialist thread 013, current conversation was previously specialist 009, while branch/issue/lease match).

**Separate, NOT self-assigned follow-ups:** D20 card/other collection quests and postal completion; D24 replay/medal semantics; D07 contextual controls; D22 rare weapons/full-Compendium edge cases; controlled per-verbal behavior for Compendium and platform builds. Review/merging must be handled by coordinator and owner; no index edits, ratification or new task is authorized by this dossier.

**Stop condition:** commit the three assigned paths to `agent/atlas-compendium-019`, read back exact branch files and verify diff only contains those paths. Leave task **`DELIVERED_REVIEW_PENDING`** and content **`RESEARCHED — REVIEW PENDING`** without touching `main`, old `rdr2` repository or previous specialist branches.
