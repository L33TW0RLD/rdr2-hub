# D22 — Unique Weapons, Rare Equipment & Full-Compendium Edge Cases

> **RESEARCHED — REVIEW PENDING · NOT ADOPTED · no gameplay-state authority.**  
> Task `atlas-unique-025` · [Issue #31](https://github.com/L33TW0RLD/rdr2-hub/issues/31) · Wave 3 / D22 · researched 2026-10-17.  
> **Scope:** RDR2 **Story Mode** only; PC/updated consoles primarily, with launch-patch, edition and platform exceptions expressly labelled. Not Red Dead Online's independent arsenal or Naturalist Field Guide.  
> **Default spoiler tier:** **T0/T1 (Chapter 2)**; **T2+ later chapter/region material is isolated in §9**. Do not surface §9 automatically to a Chapter 2 player.  
> **Provisional taxonomy links:** `S04.M02/M03`, `S17.M04`, `S28.M04`. D06 Inventory, D08 Chapter Windows, D15 Compendium and D17 Legendary Rewards are **read-only dependencies**. D17 was not yet delivered on published main at initial check; no findings are imputed to it.  
> **Actual player state:** **UNKNOWN** for any presently held special weapon, rare hat, valuable, trinket, Compendium count, unlock, purchased item or saved inventory. Consult live `L33TW0RLD/rdr2/campaign/` via GameGuide. The legacy record says Jimmy Brooks was spared but his Pen was **not independently verified**; this dossier does not update that fact.

## 1. What “unique,” “rare,” “missable” and “Compendium-complete” mean

A label is **not** a gameplay requirement, and not every unique item is permanently missable. Distinguish the *object*, the *record of discovering it*, and the *proof the player's active save retains it*. [D22-C01–C04]

| Classification | Definition | Example / safe consequence |
|---|---|---|
| **Named one-off weapon** | Individual named variant obtained from a particular duel, scripted encounter or mission; may be a separate Weapons Compendium entry | Inspect for a dropped **named gun**, pick it up in the **original encounter**, then independently check wheel/locker and Compendium. |
| **Rare environmental weapon** | Unique-looking weapon at an encounter/site with no ordinary Gunsmith equivalent | Limited encounter is **not necessarily chapter-limited**; the acquisition can nonetheless be lost after resolving the encounter. |
| **Unique nonweapon collectible / document** | Identifiable named pen, note, component, hat or reward, sometimes sellable | Preserve exact name and examine whether it has future request/crafting/collecting utility. |
| **Equipment / passive reward** | Trinket, talisman, holster, bandolier, reinforced gear or other Compendium equipment category | Gear in Compendium ≠ item physically transferable to a new save; some rewards are dependent on dialogue or mission conduct. |
| **Full Compendium entry** | Named entity listed in the relevant category; individual entry may record separate use/study/skin/track flags | “Discovered” ≠ all entry verbs completed. Literal full catalog is a personal goal, not the official 100% target. |
| **Hard missable (normal, no-exploit play)** | The exact pickup/action has a single bounded original-story or limited encounter window and no verified normal later acquisition | Protect a prior save, act while present, and verify; replay does **not** guarantee permanent inventory recovery. |
| **Conditional / potentially missable** | Loss depends on player action, spawn, alternative acquisition, chapter gate, or whether the object was already obtained | Verify the relevant branch instead of blanket “missable forever.” |
| **Rumored / disputed** | Sources conflict about irreversibility, respawn, mission replay, glitch, patch or variant | Preserve first legitimate opportunity; label actual loss/recovery **UNKNOWN** until evidenced. |
| **Edition-only / platform-gated** | Item or catalog row never obtainable in a particular purchased/updated edition | **Not** a personal missed pickup; do not demand unavailable DLC/preorder content. |

**Completion labels are orthogonal.** The same rare gun may be optional for official 100%, relevant to a literal complete Weapons Compendium, and critical for a self-chosen “own every named weapon” collection. A missable hat may matter only to personal wardrobe completion; its acquisition is not a prerequisite to Best in the West. [D22-C01,C03,C05]

## 2. Observed actions, physical possession and independent trackers (T0/T1)

Use a **four-surface evidence test** before saying a rare item has been preserved. D15 owns the general Compendium-verb model; D22 applies it specifically to unique equipment. [D22-C02,C06,C07]

| Player-observable surface | What it can support | What it cannot prove by itself |
|---|---|---|
| **World pickup prompt / named dropped weapon** | The opportunity exists; if player confirms interaction, attempted acquisition | Permanent retention, catalog credit, save persistence |
| **Weapon wheel / horse weapon selection / Story weapon locker** | Weapon may currently be selectable/available in normal Story Mode | Same Compendium weapon-**used** criterion; a different replay/main-save identity |
| **Satchel / wardrobe / Fence craft menu** | Named pen/component count, a savable hat present in wardrobe, or craft ingredient requirement | All matching recipes completed; permanent availability on an earlier save; shop selling safely preserves ingredients |
| **Pause → Progress → Compendium → exact category/entry** | Discovery/catalog registration (and per-entry verbs where shown) | Physical possession, correct current save, actual official Total Completion row |
| **Pause → Progress → Total Completion** | Specific **official 100%** subthreshold/checkmark | Full weapons/equipment catalogue or achievement/trophy |
| **Platform achievement/trophy screen** | Explicit achievement unlocked | All potentially exclusive items in the satchel/wardrobe |
| **Manual save readback** | Save action / slot as *actually* reported and selected | Does not by itself prove unique item is in that saved slot unless rechecked after load |

**Protocol after a special pickup:** (1) read exact item name; (2) pick up/collect or equip when legitimately permitted; (3) check the applicable **normal-play** inventory/wardrobe/weapon interface; (4) separately inspect Compendium entry and any criterion of interest; (5) save at the next real allowed moment, without overwriting a valuable protected slot; (6) record only what the player actually saw. Do not assert the last three occurred just because the pickup animation played. [D22-C06,C07,C18]

Some guns may be stowed in Story Mode's **Weapon Locker** on updated versions; apparent absence from the immediate weapon wheel is not automatically permanent loss. Specific categories of satchel valuables have no general-purpose equivalent of a weapons locker. D06 is primary for recipient and storage behavior. [D22-C08]

## 3. Conditional acquisition / unlock gates (T0/T1 default)

| Opportunity | Normal mechanism / prerequisite | Confidence | What to verify in this player's save |
|---|---|---|---|
| **Legendary Gunslinger investigation** (named sidearms) | A Chapter 2 Stranger lead can introduce historic gunslingers; individual encounters/duels are optional and availability varies | HIGH for named-gun category [E04,E05]; **player activation UNKNOWN** | Did a named encounter and actual dropped weapon occur? Inspect immediately before leaving; never presume gunslingers already fought. |
| **Found hats and special apparel** | World discovery, special NPC clothing, or mission/encounter pickup | MEDIUM [E08,E09]; not every ordinary NPC hat is permanently storable | Actual named/identified hat; does it register in Wardrobe's **Found/Stolen Hats**, rather than being merely worn temporarily? |
| **Named valuables / one-off gifts** | Reward/interaction choices; specific names, quest stages and ownership differ | HIGH as a **risk class**, item-by-item conditional [E10,E11,R01] | Which named item appears in Satchel? Don't assume reward from storyline alone. |
| **Craft-related rare components** | Treasure/Stranger reward, unique location, and exact Fence recipe; D06 governs reservation | HIGH for distinction [E11,E12,R01], **specific recovery may be disputed** | Current component actually obtained, recipe still outstanding, craft service available. |
| **Normal purchasable weapons** | Current chapter and Gunsmith stock, some story unlocks and price | HIGH general [E04,E13]; **not** a one-time collectible just because not yet purchasable | Check physical Gunsmith catalog; don't call chapter-locked shelf “permanently missable.” |
| **Fishing/animals/regions** | Only locations and systems the game currently allows; later areas/story islands differ | HIGH generic [E01,E02,R03], **actual current region UNKNOWN** | Differentiate early mainland discoveries from future temporary regions; no Chapter 5 material revealed here. |

**Gating rule:** “Available in Chapter 2 research” does *not* certify an active marker. For mission-specific named pickups, Mission Control (not D22) owns the original phase walkthrough and Gold clock; D22 supplies an **object-preservation hazard** before the player exits that phase. For a previously completed optional mission, do **not** suggest redoing it solely because it appears in a collectible guide. [R02]

## 4. Preservation-first rulebook and item disposition (T0/T1)

**Field rule: a missed chance to acquire a unique object may affect personal exhaustive collecting even when official 100% stays intact.** [D22-C01,C04,C09]

1. **Before a duel, encounter resolution or leaving a small one-time interior:** notice the named firearm/item prompt and collect it during **normal first-play progression**. If uncertain, pause exploration briefly and ask GameGuide for spoiler-light risk classification. No need to reveal every future item in advance. [E04,E05,E06]
2. **Upon picking up a named firearm:** verify its identity in the weapon wheel/horse/locker and **Weapons** Compendium separately; “standard Rolling Block” and “Rare Rolling Block” are different entries. Do not equate “found” and “used 48 weapon types.” [D22-C02,C10]
3. **Upon acquiring a hat:** identify whether the game actually preserves it in the wardrobe's Found/Stolen hats categories. A generic borrowed hat, a permanently collectible hat, and a mission costume are not equivalent. Do not assault a civilian to test a hat when High Honor/low-bounty play matters. [D22-C11]
4. **For a named pen, letter, token or unique valuable:** retain it and inspect exact name. Before selling/donating, check existing camp requests, quest conditions and relevant Fence recipe. A named reward is **not interchangeable** with similarly named generic stationery or jewelry. [D22-C12,R01]
5. **For talisman inputs:** use Fence **Craft** with ingredients in possession; do not assume selling an ingredient to the Fence records it as a safe crafting deposit. D06 owns the larger keep/sell/donate matrix, D17 owns legendary part routing/recovery. [D22-C13,R01]
6. **For a rare item tied to an optional quest:** separate three outcomes: the **quest is complete**, the **catalog entry appeared**, and the **physical item persists**. All three can differ. [D22-C02,C14]
7. **Save conservatively:** avoid overwriting protected saves right before an irreversible choice. Record save method/slot only if reported. A replay performed to earn Gold may be useful, but do **not** rely on it to transfer rare gear to the active original-play inventory. [D22-C14,E15]
8. **Do not hoard every generic object.** If ordinary duplicate/respawning loot has no reserved craft, request, collection or sentimental role, D06's sell/donate rules may apply. A rare-looking icon alone is not proof of unique status. [R01]

### Preservation triage labels for Companion and Free Roam

- **P0 — PROTECT NOW:** credible original-once pickup currently in front of the player or a chapter-expiring object already offered; surface one precise risk.
- **P1 — CHECK BEFORE LEAVING:** quest exit/rare encounter with a specific named object, but recovery evidence incomplete.
- **P2 — RESERVE:** physical special crafting component or one-copy named reward already confirmed; no immediate timer.
- **P3 — REVISIT WHEN GATED:** normal later shop unlock, epilogue region, or mechanics not yet introduced.
- **P4 — OPTIONAL/COSMETIC:** decorative found apparel, non-required weapon variant; still personally valuable, not compulsory 100%.
- **UNKNOWN/DISPUTED:** rumor, version-specific exploit or unverified one-time rule; conservative pickup if already legitimately reachable, **no fake emergency**.

The labels rank attention, **not** evidence that any given activity is currently active.

## 5. Exact completion scopes — don't conflate goals

**The official 100% surface is Pause → Progress → Total Completion, not “100% every Compendium entry.”** [D22-C01,E01,E02,R03]

| Goal | Requirement / distinction | Unique gear implication | Evidence / caveat |
|---|---|---|---|
| **Official 100% / Best in the West** | **Use 48 weapon types; obtain 10 equipment pieces** in the in-game Compendium category; other official subsets include 50 animal discoveries, 10 caught fish species, 10 horse breeds and 20 plants | No need to acquire **all** named duel guns, every special trinket, wardrobe item, or every species to earn official 100% | PowerPyx / GTA Base; verify user's exact Total Completion rows, not an edition-invariant denominator [E01,E02,R03] |
| **Gold Rush** platform achievement | **70 Gold medals** in eligible Story missions; unlike user's personal every-Gold campaign | Rare weapon ownership not the same as Gold medal; replay medal success does not guarantee collectible retention | PowerPyx trophy guide [E03] and GameGuide medal authority |
| **Zoologist** platform achievement | Study all **eligible** Story animals; certain limited-story animals excluded | Missed optional full-catalog species do **not** universally bar Zoologist; study ≠ skin/kill/track | PowerPyx trophy guide [E03]; D15 crosswalk [R03] |
| **Skin Deep** platform achievement | Skin all **eligible skinnable** animals; plucked/collected actions can differ | Missed rare birds / legendary-only animals should not be labelled automatic trophy failure | PowerPyx [E03]; D15 [R03] |
| **Other missable achievements** | Certain **camp activity, companion-request, Honor story** achievements have chapter/story windows; not “every rare weapon” | Trophy deadline may be real even when the unique item is not required for official 100%; D08 owns chapter urgency, D05 camp events | PowerPyx [E03], D08 [R02]; specifics outside D22 |
| **Complete a Compendium category** | Discover / acquire / use / study applicable **individual** entries and check each entry's verb flags | Exact all-entry target differs by mode/patch/platform; the visible menu is the denominator for the player's edition | Rockstar patch fix for inaccessible rows [E14], D15 [R03] |
| **Full personal Compendium** | **All available entries plus desired entry-level flags** in each of eight headings, where legitimately obtainable in that edition | Named missable weapons/limited-region wildlife matter; visually “all registered” and all sub-flags are not the same goal | D15 [R03], missables catalog [E06]; **no standalone trophy for exhaustive completion** |
| **All physically collected unique items** | Self-defined “retain every possible weapon, hat, talisman, letter and gift” with save-backed proof | The strictest objective; some rewards are alternative/exclusive, some sold/crafted by design, some inaccessible by edition | Personal collection standard, not official Rockstar criterion; impossible to guarantee universally [E06,E11] |
| **Immersion / unique memory** | Preserve an encounter, journal record or cosmetic with story meaning | An item could matter emotionally even without any Compendium or trophy credit | Player preference; not an objective requirement |

**Counts and version caveat:** PowerPyx's original Total Completion guide references a **59-weapon** catalog and **72 equipment** pieces, its weapon guide uses **65 weapons**, and postlaunch updates introduced more Story equipment/arms. These totals describe different versions/scopes, **not** a changed “48 weapon types / 10 equipment” checklist threshold for every platform. Don't hardcode a single “all equipment” denominator into Hub navigation. [D22-C03,E01,E04,E14,E16]

## 6. Material risk, recovery and ethical/financial costs

| Risk situation | Preservation choice | Normal recovery confidence | Cost/trade-off |
|---|---|---|---|
| Missed named weapon immediately after limited scripted encounter | **Acquire during original encounter** before crossing exit trigger; if already missed, check earlier clean save | **HIGH risk** of inventory loss; mission replay may update catalog but **not** main-save inventory [E04,E15] | Timed Gold pursuit may compete with loot; Mission Control decides tactical order |
| Hostile unique-world encounter already resolved, gun left on ground | Pick up promptly before leaving and verify named entry | **CONDITIONAL** respawn/reset; never say “available forever” or “definitely lost” absent item-specific proof [E06,E05] | Combat can affect Honor/bounty; player should not be pushed into unnecessary violence |
| Standard bought weapon temporarily absent from wheel | Check mounted weapon selection and Story locker before concluding loss | **HIGH** for locker existing on updated Story Mode, **UNKNOWN** for specific missing item [E17] | Time to inspect menus; don't trigger unnecessary re-purchase |
| One-off reward / gift / talisman component | Keep named item, confirm crafting recipient and recipe first | **VARIABLE** by quest/location; no blanket respawn guarantee [E11,E12,R01] | Occupies inventory or ties up sale cash; may conflict with personal collection of raw object vs crafted reward |
| Treasure or quest reward already sold/donated | Compare whether intended Fence recipe remains available, examine exact item/use | **ITEM-SPECIFIC**, potentially irreversible [R01] | Crafting material and cash are different channels |
| Potentially chapter-limited Compendium entry | Study/collect within **legitimate** access when voluntarily pursuing full catalog; keep spoiler content isolated | **CONDITIONAL** on map/edition; some species cannot be normally revisited [E03,E06] | May involve hunting/killing; do not compromise High Honor gratuitously |
| Cosmetic rare hat | Try legitimate pickup, wardrobe registration check; avoid risky repeated NPC aggression | **DISPUTED/VARIABLE** (hat type, NPC spawn, version) [E08,E09] | High Honor and wanted status can outweigh optional aesthetic |
| Replay vs retained inventory | Treat as **two separate validations**, one for Compendium, one for physical possession | Main-save retention after replay **NOT GUARANTEED**; player reports explicitly note failure [E15] | Replays support medals/possible catalog review but not definite original item restoration |

**Do not generalize legendary lost-pelt behavior** to unique weapons, ordinary pelts, one-off jewelry or mission equipment. Rockstar documents a limited Trapper-related lost-legendary-pelt remedy; **D17** owns its precise conditions and Fence distinctions. [R04,R01]

## 7. Typed provisional relationships and responsibility boundaries

These are **research edges**, not an adopted dependency engine or actual player-unlock claims. `REQUIRES` is reserved for a verified general-world condition; `HAZARD_TO` does not imply the player has already crossed the gate.

| D22 / proposed leaf | Typed edge → target | Meaning / owner and confidence |
|---|---|---|
| `S04.M02` named weapons | `INTERACTS_WITH → S28.M04` Weapons Compendium | Pickup/use can create catalogue identity distinct from physical weapon, D15 owns tracker verbs [E01,E04,R03] |
| `S04.M03` equipment / found hats | `INTERACTS_WITH → S17.M04` rare item disposition | Hat/unique equipment preservation uses typed item class, D06 owns sale/keep classification [E08,R01] |
| `S17.M04` one-time valuables | `HAZARD_TO → S28.M04` complete personal Compendium | Some limited object losses harm exhaustive collection without official 100% impact [E06,R03] |
| `S30.M03/M04` replay / save | `HAZARD_TO → S17.M04` original physical object | Replay catalog entries may not persist as held weapons; **D24 reserved** for full semantics [E15] |
| `S30.M05` chapter/window | `HAZARD_TO → S28.M04` region-specific Compendium | Chapter changes can close normal study opportunity; **D08** owns urgency [R02,E03] |
| `S13.M04` Fence crafting | `REQUIRES (conditional general) → S17.M04` exact unique ingredient | Specific talisman uses exact component; **D17** owns legendary reward routing; D06 owns material retention [R01,E12] |
| `S29.M01` official completion | `CONTRIBUTES_TO ← S28.M04` tracked **subset** | 48 weapon types / 10 equipment, NOT full catalogue [E01,E02,R03] |
| `S29.M03` Zoologist/Skin Deep | `INTERACTS_WITH → S28.M01` qualifying species | Achievement species eligibility is distinct from full catalog; D15 primary [E03,R03] |
| `S11.M03` companion requests | `INTERACTS_WITH → S17.M04` named request object | A one-off pen or gift can serve personal collection but request prerequisites belong D05 [R01,R02] |
| `S21.M01/M02` Stranger strands | `MAY_REWARD → S04.M02 / S17.M04` special objects | D18 owns strand timing; D22 only records the final item protection rule [E05,E11] |

**Coordination contracts:** D06 = inventory classification/crafting reservations; D08 = chapter windows; D15 = all Compendium counting and achievements; D17 = legendary/Trapper/Fence reward exceptions; D18 = Stranger strands; D20 = collection hand-ins; D24 = replay/save state; **D22 owns whether a named gear/pickup presents a unique physical/catalog preservation risk**. None writes the original GameGuide `campaign/`.

## 8. Three organic early-game situations (T0/T1 · spoiler-light)

### A. Valentine aftermath — a named Pen, but only a reported mercy choice

**Situation:** The player reports sparing a witness in an early Valentine mission; the expected named **Pen** reward is discussed. The existing GameGuide says the mercy choice happened, but **actual Pen possession remains unverified**. [E10,R05]

- **Observation:** Open Satchel, examine the exact item name **Pen**, not a generic Fountain Pen (which D05 connects to a separate companion request).
- **Recommendation:** If it is physically there, **preserve** the one-off sentimental reward rather than selling/donating it for a small amount. If absent/unseen, report “Pen not verified,” not “missed forever.”
- **Why:** This is **OPTIONAL_EXHAUSTIVE / IMMERSION**, not a prerequisite to the official 100% checklist.
- **Learning:** Unique object identity, request substitution risk, physical satchel evidence and personal preservation.
- **Handoff:** GameGuide alone may update actual inventory status after player or screenshot confirmation.

### B. An optional gunslinger encounter appears while exploring

**Situation:** The player chooses to investigate a legitimate named gunslinger lead in Chapter 2 and a duel ends. This does not assume any unreported marker or outcome. [E04,E05]

- **Immediate safe prompt:** Before leaving the scene, inspect whether a **named** sidearm dropped and collect it if the player wants personal complete weapons.
- **Then:** Check **Weapons Compendium** separately from selectable weapon wheel. If the gun was picked up but an entry still says undiscovered, flag uncertainty; do not credit official “48 used” without its own check.
- **Classification:** May be **hard/conditional one-time pickup** in the original encounter, but **optional** for official 100%; a subset of the category is enough.
- **High Honor/Gold:** Any encounter tactics and time pressure belong to its GameGuide if currently mission-bound.
- **Handoff:** One concise “pickup-before-exit” preservation advisory, not a full Gunslinger quest walkthrough.

### C. Found a distinctive hat while riding, or an ordinary hat from an NPC

**Situation:** During an organic outing, the player sees an unusual hat. It may be a **world found hat** or merely an ordinary wearable NPC hat. [E08,E09]

- **Next step:** Determine the exact name/location from current game evidence; if legitimately pickupable, try on and inspect **Wardrobe → Found/Stolen Hats** at a suitable time.
- **Don't assume:** every worn hat is a saved collectible, every rare look is a named entry, or that a visible NPC hat is worth an Honor loss/bounty.
- **Goal:** Personal outfit/completionist interest, not official Total Completion.
- **World rhythm:** Resume riding when curiosity is satisfied. No “collect 27 hats before next mission” quota.

These are **decision exercises**, not assertions that anything was picked up, paid for, or stored. Avoid future-story item spoilers while actually playing Chapter 2.

## 9. T2+ research appendix — LATER STORY / REGION SPOILERS: DO NOT SHOW IN DEFAULT CHAPTER 2 OUTPUT

**The following names, sequences and future chapter references are for researcher/GameGuide *preflight* at the correct point, or on explicit player request. They are not near-term Free Roam suggestions.**

### Future scripted weapons and world encounter windows

| Example | Condition and classification | Reliable/controversial points |
|---|---|---|
| **Rare Rolling Block Rifle** | During **Chapter 3 “Magicians for Sport,”** dropped by a barn sniper/bounty hunter. **HARD original-mission pickup window**, not normal gunsmith stock | PowerPyx, GameFAQs, GTA Base and RDR2.org agree on the scene. **Pick up before mission ends.** Replay may add Compendium entry but reports show it does **not** grant permanent weapon possession. [E04,E05,E15,E18] |
| **Granger's Revolver, Midnight's Pistol, Flaco's Revolver, Calloway's Revolver** | Four named Gunslinger reward sidearms dropped around **“The Noblest of Men, and a Woman”** Stranger chain. **ONE-SCENE PICKUPS** | Pick up **each** named dropped sidearm when encounter is resolved; no assumption that mission completion awards every physical gun. Some guides mistakenly describe Calloway as “automatic”: disputed, conservative pickup recommended. [E04,E05,E06] |
| **Rare Shotgun** | Hostile hermit at **Manito Glade / north of Annesburg**. **CONDITIONAL LIMITED WORLD ENCOUNTER** | World location is not itself a fixed chapter deadline. Killing/knocking out hermit and failing to pick the weapon up can lose the opportunity; respawn claims differ, so don't guarantee replay/revisit. [E04,E06,E19] |
| **Ornate Dagger** | A special **Saint Denis vampire** encounter, weapon dropped after confrontation. **CONDITIONAL UNIQUE ENCOUNTER** | Follow the actual clue and encounter; pick named item up promptly. Whether the vampire/weapon can be respawned after a missed original pickup not established as a universal rule. [E06,E19] |
| **Otis Miller's Revolver** | Hidden **New Austin** treasure/chest and later normal regional access. **REGION-GATED, generally deferrable**, not an early Chapter 2 emergency | Opening map icon/treasure reference does not mean the player can enter region now; no universal lost-on-chapter claim. [E04,E05] |
| **Owl Feather Trinket** | **Later optional Honor mission**, reward for retrieving ceremonial items **without killing guards**. **CONDUCT-CONDITIONAL, scene-limited** | The exact reward criterion is independently described; some sources disagree about replay recovery and even bonus percentage. Preserve nonlethal route if personally collecting. Not official 100% requirement. [E20,E21] |
| **Lion's Paw → Lion's Paw Trinket** | One-off lion in a later Stranger strand, component used at Fence. **SPECIAL COMPONENT / CONDITIONAL MISSPICKUP** | Collection requires taking paw, then separate Fence craft. It's **not** a standard Legendary Animal component; D17 owns comparisons to legendary reward recovery. [E12,E22] |
| **Old Brass Compass → Raven Claw Talisman** | End of “Geology for Beginners” rock-carving strand; component is in a cabin after its finale. **CONDITIONAL / RECOVERY DISPUTED** | PowerPyx calls compass **missable if left behind** and describes the cabin later closing; other reports describe reopening/respawns and reload workaround. Grab at first opportunity; do not say all saves become doomed if missed. D06 owns sale/craft disposition. [E11,E23,R01] |

### Later-region animals / Compendium edges

- **Guarma Chapter 5 temporary location:** several species have limited normal access, particularly **three native macaws, Red-footed Booby and several boas**. The exact “7 versus 8 exclusive” count varies because of **Fer-de-Lance** alternative mainland sightings and list treatment. **Full personal Compendium** can be affected by missing legitimately exclusive entries; **Zoologist / Skin Deep / official 100% do not require Guarma-exclusive animals** according to the PowerPyx trophy guide. Never imply these are already available to a Chapter 2 player or invent a normal ferry back. [E03,E06,E24]
- **Carolina Parakeet:** an extinction-related chain is commonly described as **25 kills** followed by no normal respawn. If going for an exhaustive Animal Compendium, **study before deliberately reducing the population**. Community sources agree the parakeet is **not required** for Zoologist/Skin Deep, and killing birds merely to tick this optional extermination event may conflict with High Honor/immersive goals. This is an exception, not a reason to hunt every parakeet. [E25,E06]
- **Full entries vs trophies:** a temporary animal appearing in Compendium does not imply it is on the trophy's eligible animal set. Similarly, equipment from Special/Ultimate Edition and weapons on postlaunch builds are not universally included in the same catalogue denominator. [E03,E14,E16,R03]

### Later cosmetics and version-sensitive opportunities

- **Sun Hat** (temporary island soldiers), **Liberty Hat** (conditional encounters), **Newsboy Cap** and **Bucket Hat** (reported finite NPC/worksite availability) illustrate cosmetic **personal-exhaustive** risks, not official-100%-blocking obligations. Some alternate later spawns are documented, so do not label them unconditionally irrecoverable. [E06,E08]
- Rockstar **PC 2019 launch Story Mode additions** included **M1899, Evans Repeater, High Roller Revolver and LeMat Revolver**, as well as extra treasure maps and horses. Rockstar documented later rollout to PS4 and Xbox One; thus older “PC exclusive / only GTA Online reward” guides are *date-scoped*, not universal current rules. [E16,E26]
- **Special/Ultimate/preorder content** includes edition entitlements such as free Gunsmith weapons, bonus outfit/horse and optional map. An edition-specific item missing from standard edition is not “missed.” Rockstar says eligible bonus **Volcanic Pistol, Pump-Action Shotgun and Lancaster Varmint Rifle** can be picked up free at Gunsmiths after Chapter 1. The actual entitlement must be checked; no universal promise that every player owns DLC. [E27,E28]
- **Rockstar update 1.15** patched unsupported-platform Compendium items being displayed. Exact current equipment/weapon entry totals are edition/update dependent; report the **player's actual on-screen denominator**, not one immutable figure. [E14,R03]
- **Weapon Locker Story Mode** was added in later update 1.20, so older launch-year advice about permanent wheel clutter may be obsolete on updated installs. Storage is not *re-acquisition* of a missed unique weapon. [E17]

## 10. Claim-level source register (checked 2026-10-17)

**Method:** independent editorial/primary documents are linked with precise claims. “Checked” means **reviewed as web/repository text on 2026-10-17**, not that the author performed an in-game field experiment, inspected the user's save, or verified every obscure edge case. Source classes: **P** publisher/patch/first-party; **G** specialist walkthrough/guide; **W** community-maintained wiki; **Q** firsthand player testimony (supporting but not conclusive); **R** internal research (read only, not primary evidence). Higher confidence applies to **the stated narrow claim**, not every neighboring mechanic.

### External sources

| ID | Publisher, title and URL | Class; publication/update | Strength and limitations |
|---|---|---|---|
| **E01** | [PowerPyx — RDR2 100% Guide](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) | G · 2018-10-25 | HIGH official checklist subthreshold mapping; original release denominators can date |
| **E02** | [PowerPyx — Weapons guide](https://www.powerpyx.com/red-dead-redemption-2-all-weapons-locations/) | G · 2018-10-27 | HIGH named weapon category/pickups, but mixes patched and original counts |
| **E03** | [PowerPyx — Trophy Roadmap, Zoologist/Skin Deep/Gold Rush](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap/) | G · 2018-10 onward | HIGH for animal-trophy exclusions and separate achievement definitions |
| **E04** | [PowerPyx — all weapons](https://www.powerpyx.com/red-dead-redemption-2-all-weapons-locations/) | G · 2018-10-27, subsequently updated | HIGH for four Gunslinger variants, rare rifle, world items; some DLC assertions stale |
| **E05** | [GameFAQs — Weapons guide](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/weapons) | G · guide 2019 | HIGH named rifle encounter and possible replay Compendium, medium for exact replay persistence |
| **E06** | [Red Dead Wiki — Missable Content](https://reddead.fandom.com/wiki/Missable_Content_in_Redemption_2) | W · continuously edited | GOOD discovery inventory, NOT official exhaustiveness / respawn proof |
| **E07** | [Rockstar Support — Title Update 1.03](https://support.rockstargames.com/articles/MCIMvsDlmF0yzh3oTSiip/red-dead-redemption-2-title-update-1-03-notes-ps4-xbox-one) | **P** · 2018 patch notes, support updated later | HIGH proof that replay/weapon-loss and Gunslinger photo issues were patched; no general replay entitlement |
| **E08** | [Red Dead Wiki — Hats/Masks in Story](https://reddead.fandom.com/wiki/Hats/Masks_in_Redemption_2) | W · revision unknown | MEDIUM for found/stolen categories and conditional NPC hat examples |
| **E09** | [Red Dead Wiki — Compendium](https://reddead.fandom.com/wiki/Compendium) | W · revision unknown | MEDIUM categorical guidance; individual menu flags require actual in-game confirmation |
| **E10** | [Red Dead Wiki — Valuables (Pen)](https://reddead.fandom.com/wiki/Valuables_in_Redemption_2) | W · revision unknown | MEDIUM unique Pen vs other valuables, not proof player acquired it |
| **E11** | [PowerPyx — Geology for Beginners](https://www.powerpyx.com/red-dead-redemption-2-geology-for-beginners-stranger-mission-walkthrough/) | G · 2018-10-27 | HIGH first-opportunity compass pickup, MEDIUM irreversibility due contradictory returns |
| **E12** | [RDR2.org — Trinkets/Talismans](https://www.rdr2.org/guides/trinkets-talismans-perks-guide/) | G · 2018 | HIGH general Lion Paw/Fence route, exact perk values not pivotal |
| **E13** | [GameSpot — secret weapons](https://www.gamespot.com/gallery/red-dead-2-guide-to-secret-weapons-and-guns-you-mi/2900-2353/) | G · 2019-11-04 | MEDIUM-HIGH independently corroborates rare pickups and missability |
| **E14** | [Rockstar Support — Title Update 1.15](https://support.rockstargames.com/articles/28AmlyPGLVKsJ8OpdN8myn/red-dead-redemption-2-title-update-1-15-notes-ps4-xbox-one-pc-stadia) | **P** · updated 2024-12-17 | HIGH unavailable-platform Compendium entry fix and replay owned loadout rule |
| **E15** | [GameFAQs — Rare Rolling Block replay inventory Q&A](https://gamefaqs.gamespot.com/ps4/200179-red-dead-redemption-2/answers/568892-how-do-i-keep-the-rare-rolling-block-rifle-in-my-inventory) | **Q** · historic player reports | MEDIUM for replay not permanently granting dropped unique gun; verify specific save |
| **E16** | [Rockstar Newswire — PC Story Mode additions](https://www.rockstargames.com/newswire/article/398a45525ka319/Red-Dead-Redemption-2-For-PC-Now-Available-to-Pre-Purchase-via-the-Roc) | **P** · 2019-10-09 | HIGH newly introduced named weapons/map/horse and distinct edition bonuses |
| **E17** | [Red Dead Wiki — Weapons / Gun Locker](https://reddead.fandom.com/wiki/Weapons_in_Redemption_2) | W · revision unknown; update 1.20 noted | MEDIUM for Story Mode locker availability; compare current game UI |
| **E18** | [GTA Base — Rare Rolling Block Rifle](https://www.gtabase.com/red-dead-redemption-2/weapons/rare-rolling-block-rifle) | G · contemporary catalogue | HIGH independent named original-mission pickup, no later regular acquisition |
| **E19** | [Red Dead Wiki — special weapon encounter list](https://reddead.fandom.com/wiki/Missable_Content_in_Redemption_2#Weapons) | W · revision unknown | MEDIUM for Rare Shotgun and Ornate Dagger pickup window; respawns uncertain |
| **E20** | [Red Dead Wiki — Archeology for Beginners](https://reddead.fandom.com/wiki/Archeology_for_Beginners) | W · revision unknown | MEDIUM-HIGH nonlethal Owl Feather reward condition |
| **E21** | [Red Dead Wiki — Owl Feather Trinket](https://reddead.fandom.com/wiki/Owl_Feather_Trinket) | W · revision unknown | MEDIUM source, conflicts with some numeric/stat/replay guidance; don't rely on exact bonus percentage |
| **E22** | [Red Dead Wiki — He's British, of Course](https://reddead.fandom.com/wiki/He%27s_British%2C_of_Course) | W · revision unknown | MEDIUM source for lion paw, exact part labels vary by source |
| **E23** | [Red Dead Wiki — Valuables / Old Brass Compass](https://reddead.fandom.com/wiki/Valuables_in_Redemption_2) | W · revision unknown | LOW-MEDIUM respawn and re-entry assertions conflict with E11; item identity strong |
| **E24** | [PowerPyx — Trophy Roadmap / Guarma island exclusions](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap/) | G · 2018 onward | HIGH for trophy exclusions, disputed isolated Fer-de-Lance count |
| **E25** | [Red Dead Wiki — Parakeet](https://reddead.fandom.com/wiki/Parakeet) | W · revision unknown | MEDIUM extinction threshold and Honor effect; does not prove trophy necessity |
| **E26** | [Rockstar Newswire — PS4 Story Mode additions and Xbox rollout](https://www.rockstargames.com/newswire/article/75o941131a8257/Red-Dead-Redemption-2-Photo-Mode-and-Story-Mode-Additions-Now-Availabl) | **P** · 2019-12-13 | HIGH for version rollout and new hidden trinkets |
| **E27** | [Rockstar Newswire — Special & Ultimate Edition](https://www.rockstargames.com/newswire/article/9k1248838o1892/The-Red-Dead-Redemption-2-Special-Edition-Ultimate-Edition-and-Collect) | **P** · 2018-06-04 | HIGH for edition entitlement distinction |
| **E28** | [Rockstar Support — bonus weapon Gunsmith access](https://support.rockstargames.com/articles/7guShdAt6u871Jg1fxUIwg/accessing-the-volcanic-pistol-pump-action-shotgun-and-lancaster-varmint-rifle-in-red-dead-redemption-2) | **P** · updated 2023-09-07 | HIGH for qualifying bonus weapons free after Chapter 1 |
| **E29** | [Gamer Guides — Magicians for Sport](https://earth.gamerguides.com/red-dead-redemption-2/guide/walkthrough/chapter-3/magician-s-for-sport) | G · guide 2018, updated later | HIGH for original one-time rifle pickup and location; mission strategy belongs Mission Control |

### Read-only internal research and campaign authority

| ID | Reference and ownership | What is borrowed (never silently adopted) |
|---|---|---|
| **R01** | [D06 Item Disposition](d06_inventory_items_v0_1.md) | Reserve jewelry and special components, correct Fence service, no imaginary general item chest; D22 does **not** copy its entire inventory matrix |
| **R02** | [D08 Chapter Windows](d08_chapter2_limited_windows_v0_1.md) | Chapter-limited opportunity classifications, ownership of activation/expiry risk; D22 does not duplicate its Story mission timetable |
| **R03** | [D15 Compendium](d15_compendium_trackers_v0_1.md) | Distinct verbs/credit, official thresholds and platform trophy difference; D22 specializes in rare-item examples |
| **R04** | D17 Legendary Animal Rewards (Wave 3, concurrent, not yet published on main at startup) | Dependency only; **no D17 claims inspected or imported** |
| **R05** | [Original GameGuide Campaign State](https://github.com/L33TW0RLD/rdr2/blob/main/campaign/current_state.md) | Player-confirmed Jimmy rescue; Pen remains unverified; GameGuide is only state writer |

### Claim ledger (claim-level support and confidence)

| Claim ID | Narrow assertion | Sources | Confidence / handling |
|---|---|---|---|
| **D22-C01** | Official Total Completion is subset-based, not all objects | E01, R03 | **HIGH** |
| **D22-C02** | Physical held item and Compendium listing are independent checks | R03, E05, E15 | **HIGH** conceptual; specific replay behavior MEDIUM |
| **D22-C03** | Weapon/equipment catalog denominators vary by release/patch/edition | E01, E02, E14, E16, E26 | **HIGH** change; exact active denominator UNKNOWN |
| **D22-C04** | One-time named pickups can be missed despite continued official 100% attainability | E01, E02, E06, E13 | **HIGH** broad; item-specific classification required |
| **D22-C05** | Extra comprehensive collecting is not officially mandatory | E01, E03, R03 | **HIGH** |
| **D22-C06** | Named pickup prompt/Compendium entry doesn't prove save persistence | R03, E15 | **HIGH** distinction |
| **D22-C07** | Acquisition/Use/Study/Save are distinct observation verbs | R03, E01 | **HIGH** |
| **D22-C08** | Story weapon locker may store already acquired guns on updated version | E17 | **MEDIUM** (specific patch/content check recommended) |
| **D22-C09** | Preserve first legitimate rare item chance, don't demand complete 100% | E02, E06, R01 | **HIGH** conservative policy |
| **D22-C10** | Standard and Rare Rolling Block are separately named weapons | E05, E18 | **HIGH** |
| **D22-C11** | Found/stolen hats and generic worn hats have differing persistence | E08 | **MEDIUM** |
| **D22-C12** | Jimmy's Pen is a unique reward; distinct Fountain Pen request | E10, R01, R05 | **MEDIUM-HIGH** general, player ownership **UNKNOWN** |
| **D22-C13** | Unique components must be routed by intended Fence craft service | R01, E12 | **HIGH** principle; recipe-specific receipts vary |
| **D22-C14** | Replaying mission doesn't guarantee physically acquiring missed unique loot in main save | E14, E15, E05 | **MEDIUM-HIGH** caution, catalog persistence conditional |
| **D22-C15** | Rare Rolling Block is single original mission pickup in Chapter 3 | E05, E18, E29 | **HIGH** |
| **D22-C16** | Guarma animals optional for Zoologist/Skin Deep but can matter to literal full Compendium | E03, E24, R03 | **HIGH** broad; exclusive count disputed |
| **D22-C17** | Owl Feather nonlethal reward and Lion Paw crafting are special conditional exceptions | E20, E21, E12, E22 | **MEDIUM-HIGH** conditions; exact numeric bonuses not used |
| **D22-C18** | Save/readback and catalog are distinct; no inferred live player progress | R03, R05, E07 | **HIGH** evidentiary rule |
| **D22-C19** | Version/edition content differences mean an unavailable item is not an in-save missable | E14, E16, E26–E28 | **HIGH** |
| **D22-C20** | Carolina Parakeet population may be eliminated via optional extinction chain | E25, E06 | **MEDIUM**; not an official 100% requirement |
| **D22-C21** | Rock-carving reward compass pickup exists; recovery contested | E11, E23, R01 | **HIGH** pickup; **DISPUTED** recovery |
| **D22-C22** | Some gunslinger weapons must be manually looted | E02, E04, E06 | **HIGH** conservative; Calloway auto wording contested |
| **D22-C23** | Rare Shotgun world event is not same as forced chapter mission | E02, E19 | **MEDIUM-HIGH** place, respawn **UNKNOWN** |

## 11. Contradictions, exception ledger and read-only consumer handoff

### A. Contradiction and rumor table — no silent reconciliation

| ID | Claims in tension | Present verdict / confidence | Conservative next proof or behavior |
|---|---|---|---|
| **X01** | “Nothing missable for 100%” vs many permanently missable weapons/animals | **Both true in different scopes.** Official curated 100% allows subsets; literal exhaustive save does not. **HIGH** [E01,E06] | Always ask *which completion target*; never imply missing named gun blocks Best in the West. |
| **X02** | All-weapons figures **59 / 65 / other** in guides and newer ports | **VERSION/COUNT SCOPE DISPUTED**, not safe to hardcode one universal denominator. **HIGH** [E01,E02,E14,E16] | Inspect actual Compendium weapon/equipment totals; official checklist's 48/10 is separate. |
| **X03** | Calloway's Revolver “automatic reward” vs “pick up from duel partner” | **DISPUTED** across modern summaries; PowerPyx/wiki favor manual pickup. **MEDIUM-HIGH** [E04,E06] | After duel, inspect and collect named gun before leaving; verify physical weapon. |
| **X04** | Rare Rolling Block acquired during mission replay: does it persist? | **Catalog vs physical ownership divergent.** GameFAQs guide says replay may catalog; player report says original inventory not restored. **MEDIUM** [E05,E15] | Replay may help catalogue; never promise physical retention. Earlier real save is preservation strategy. |
| **X05** | Rare Shotgun world hermit can be revisited indefinitely vs once-only | **RECOVERY CONDITIONAL/DISPUTED** [E06,E19] | At original encounter, take gun immediately, verify; do not advise violent respawn farming. |
| **X06** | Old Brass Compass cabin permanently locks after quest vs respawns/reopens after reload | **DISPUTED** [E11,E23] | Collect at first legitimate invitation; no guarantee an old save is ruined if missed; verify before resorting to glitches. |
| **X07** | Guarma-exclusive animals count **7 vs 8**, particularly Fer-de-Lance alternative areas | **DISPUTED** count; trophy exclusion broadly supported. **HIGH** exclusion [E03], **LOW-MEDIUM** precise exclusivity [E06,E24] | If pursuing literal all entries, study every *visible* temporary-region species before leaving; do not present fixed count as guaranteed. |
| **X08** | “Skin and study every animal = necessary for Zoologist/Skin Deep” vs island/parakeet/legendary exceptions | **FALSE blanket rule**; qualifying subset applies. **HIGH** [E03,R03] | Use specific trophy eligible list and each Compendium action flag separately. |
| **X09** | Owl Feather trinket bonus described as **10%** vs **15%**, replay grants it vs only fills catalog | **DISPUTED / version/report-dependent** [E20,E21 and player reports] | Present verified **nonlethal reward condition**, not exact percentage or guaranteed replay possession. |
| **X10** | “Every special unique talisman component is always retrievable like lost legendary pelts” | **UNSUPPORTED extrapolation**; Rockstar lost-pelt rule is narrow, D17 owns details. **HIGH** scope warning [R01,R04] | Protect unique component and check exact Fence recipe; do not promise item restoration. |
| **X11** | “All rare hats are missable” vs alternate random later NPC spawns | **OVERBROAD**, conditional item-by-item. **MEDIUM** [E06,E08] | First reasonable legitimate pickup and wardrobe confirmation; no blanket completion deadline. |
| **X12** | “Every missing special weapon is a permanent personal failure” vs edition entitlement, later shop unlock and patch additions | **FALSE blanket rule. HIGH** [E14,E16,E26–E28] | Label item **EDITION_UNAVAILABLE**, **LATER_UNLOCK**, **SINGLE_ENCOUNTER** or **UNKNOWN** before calling it missable. |
| **X13** | “No mission replay can ever update Compendium” vs user-reported replay catalog entries | **UNRESOLVED blanket rule**; physical inventory loss more certain than uniform catalog outcomes. **MEDIUM** [E05,E15] | Avoid both universal yes/no; compare named Compendium before/after, record observed effect only. |
| **X14** | Any animal mark under catalog = trophy credit | **FALSE equivalence**; Study/Skin/Discover/Track verbs differ. **HIGH** [E03,R03] | Read individual flags and actual achievement screen; no auto-credit. |

### B. Read-only consumer output

**GameGuide / Mission Control — receives exactly when actionable:**
- **Named pickup and point-of-no-return:** “A separately identifiable rare weapon/component may be in this active phase; inspect it before exit.” Provide exact visible name and in-mission safe action **only after** matching the adopted/source-verified dossier to current player mission.
- **Evidence class:** Source/citation, confidence, missability class, proper completion-goal label, edition limitations, and whether a prior preservation warning is now too late.
- **Do NOT:** write a mission outcome, weapon possession, Gold medal, save, or completion tracker; D22 can only advise preflight. Mission Control owns the full chronological Field Guide and state recording.

**Free Roam Control — receives only spoiler-safe curiosity and near-term risk:**
- For an actually encountered distinctive gun or hat: **identify → inspect pickup → check wardrobe/weapon/Compendium → preserve if personally meaningful → resume exploration**. Avoid auto-generating a full rare-item map itinerary or spoiling future chapters.
- Offer named-weapon collecting as **OPTIONAL_EXHAUSTIVE**, not a compulsory path to the 48-weapon official threshold.
- If user asks for full encyclopedia or rare weapons, **opt-in** section §9 with story-tier warning; preserve unspoiled curiosity otherwise.

**Adaptive Companion / dashboard — transient advice fields (never player state):**
```text
RareItemAdvisory {
  item_name, item_class, spoiler_tier,
  availability_gate: condition|unknown,
  missability: hard|conditional|disputed|not_missable|edition_unavailable,
  personal_goal_tags: [official_100?, achievement?, full_compendium?, optional_exhaustive?],
  recommended_preservation_action,
  verify_with: [weapon_wheel, locker, wardrobe, satchel, compendium, total_completion, save],
  source_claim_ids, source_status: researched_review_pending,
  player_observed?: ephemeral_external_input_only,
  handoff_to: gameguide|free_roam|atlas
}
```
This is **illustrative consumer semantics**, not a finalized taxonomy schema or state-persistence format. No field `item_owned`, `collected`, `current_save`, `already_studied` or `achievement_unlocked` belongs in the research dossier.

**No autonomous alerts:** Companion only reacts to current user-provided observation / meaningful context; no live game telemetry, background marker watch, or automatic GitHub sync.

### C. Open questions and delivery gate

- **Prioritize follow-up:** verify exact weapon Compendium use-registration behavior and patch/edition row counts from representative current game UI; D15 owns general tracker semantics.
- **Cross-reference later:** D17 legendary reward-loss rules; D24 replay/catalog distinction; D18 quest staging; D20 collect-and-mail hand-ins. These agents have their own leases and must not be edited here.
- **Unknown rare-item cases:** unique item alternatives, NPC hat variant identity, battle-specific loadout and natural respawns, Fer-de-Lance return region, Owl Feather percent and replay effect. Mark **NEEDS RECHECK** at claim level if relying on these particulars.
- **Owner review required:** D22 is `RESEARCHED — REVIEW PENDING` only. Neither branch delivery nor a future coordinator merge is mechanic adoption, a player achievement, or transfer of GameGuide campaign authority.

**Handoff status requested:** `DELIVERED_REVIEW_PENDING` after GitHub verification of this dossier, its checkpoint and its specialist handoff on the exact three-file lease. No shared indexes, other agents' work, Save Intelligence or old GameGuide written.
