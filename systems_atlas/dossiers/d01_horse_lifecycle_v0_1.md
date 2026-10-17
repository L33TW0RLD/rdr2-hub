# D01 — Horse lifecycle: acquisition, saddle, stable, care, cargo and loss

> **Record:** `ATLAS.D01` · **version:** `0.1` · **kind:** `mechanic`  
> **Maturity:** **RESEARCHED — REVIEW PENDING** (not `ADOPTED`)  
> **Checked:** **2026-10-17** · **Author task:** `atlas-horses-007` · **Issue:** [#5](https://github.com/L33TW0RLD/rdr2-hub/issues/5)  
> **Applicability:** Unmodded *Red Dead Redemption 2 Story Mode*; original PS4/Xbox One releases with PC Story Mode where mechanics are common. Button notation below is **PS4 / Xbox One** only and may differ with PC keybinds and control presets. **Not Red Dead Online** (especially no Story Mode horse-insurance assumptions).  
> **Spoilers:** T0/T1 by default (only early Chapter 2 Hosea tutorial named). No plot or late-game mount-event disclosures.  
> **Primary Atlas IDs (provisional INDEXED namespace):** `S06.M01`–`S06.M05`. **Read-only context:** `S04.M02` weapons; `S07.M02` traversal; `S12.M04/M05` hunting material logistics; `S17.M01` satchel vs physical cargo; `S28.M02` horse Compendium; `S29.M01` official 100% criterion. **Gate:** `U01` (RESEARCHED — REVIEW PENDING, not a current player flag).  
> **Explicit exclusions:** horse breed/coat shopping census, best-stat rankings, achievement walkthroughs, Horseman challenge steps, wildlife kill quality, rare mounts, glitches/exploits, Online insurance, mission Gold strategy, and actual campaign/inventory changes.

## Decision-first quick reference

| Question / observed state | Safe answer and next observable check | Evidence |
|---|---|---|
| Is this my **main horse**? | The horse carrying Arthur's **saddle** is the main mount. Inspect its saddle and the main-horse icon, not simply whichever horse Arthur is riding. One main saddled horse at a time. | H01, H02 |
| What is a **temporary horse**? | A broken, borrowed or newly ridden/bonded animal can be a usable secondary/temporary mount **without** being main or safely stabled. The temporary bond/slot can be replaced by bonding another horse. Do not leave a valued find unattended; stable it after access is verified. | H01, H03, H12 |
| Does **stolen** mean temporary? | “Stolen” describes **how acquired**, not a protected storage tier. An unsaddled stolen horse is not necessarily main; Horse theft can create a law/witness issue. After available, stable/saddle it through actual prompts if keeping is possible. | H03, H13 |
| Can I change horses? | With a valid interaction, remove your saddle from the existing main horse and apply it to the desired one, **or** use unlocked stable management. Confirm the new main horse afterward. Never assume a nearby mount became owned just by riding it. | H01, H02, H04 |
| Can I buy/store/groom yet? | **UNKNOWN for the player.** Normal U01 route is Hosea's Chapter 2 *Exit Pursued by a Bruised Ego* tutorial (stable and brush). Look for completed mission and the actual stable/brush prompt. Before confirmation, do not say the player owns a brush or can store a horse. | H04, H05 |
| How many can be safely stabled? | **Three stored horses** under the game's Companion-app manual as transcribed by a player; plus one active main saddled mount, distinct from a vulnerable temporary horse. Check actual free slots in the stable menu; don't extrapolate “three per stable” to an unlimited network. | H06, H07 |
| Can I whistle? | Whistle when the intended mount is nearby and able to respond; bonding increases range. A stabled, dead or too-distant horse may not come. Verify marker and line-of-travel; no teleport promise. | H08 |
| Is horse care worth it? | Watch the horse Health/Stamina **cores** and warnings; feed nutritious provisions as available, groom when dirty **if brush unlocked**, calm, pat, hitch, ride and lead. Bond increases from levels 1–4 and improves abilities/call range. | H05, H08, H09 |
| Can I reach my long guns? | Near/on the main saddled horse, select stored longarms using the weapon wheel **before dismounting**. Away from it, the on-foot wheel may lack the guns. This is **access**, not a claim weapons are destroyed. | H10 |
| What about pelts/carcasses? | Physically loaded kills are **horse cargo** and separate from ordinary satchel items. Do **not** assume the saddle swap preserves every cargo object; for a valuable ordinary pelt/carcass, unload/hand in **before** horse changes, risky travel or save transitions. Check horse cargo/vendor inventory afterward. | H11, H14, H15 |
| Horse has fallen and shows **Revive**? | Act immediately with a **Horse Reviver** if one is actually held; obtain one from an accessible stable/general store for future outings. This helps a **critically injured living horse**, not one whose death is already final. | H16, H17 |
| Horse has **died**? | Treat that *individual mount* as permanently lost under ordinary Story Mode mechanics. Recover the **saddle** from its body if safely possible or inspect stable/other recovery option; do **not** infer the horse is resurrected with former bonding. See edition-specific replacement dispute below. | H17, H18, H19 |
| Does this affect 100%? | The **Player** criterion is maximum bond with **one horse** (Level 4); the **Compendium** has a distinct **discover 10 horse breeds** subset. Neither requires buying every breed, keeping every horse or a separate “all horse content” grind. Verify *Progress > Total Completion*. | H20 |

**One-sentence rule:** Saddle controls main-horse identity; stable controls protected storage; temporary bonding is not storage; Horse Reviver operates in a recovery window; cargo is not guaranteed safe through every transition.

## 1. Horse identities, acquisition and feedback (`S06.M01`)

### Lifecycle / state model (conceptual, not an asserted game save structure)

```text
wild or NPC-owned mount
    ├─ calm / break (wild) OR ride / take (NPC) → ridden/newly familiar mount
    │      ├─ temporary secondary mount / limited persistence (do NOT equate with stored)
    │      ├─ transfer saddle → MAIN saddled mount (one at a time)
    │      └─ enter unlocked stable → offered STABLE / SELL / MANAGE action, capacity permitting
    └─ abandon / replace without registration → at risk of disappearance

MAIN saddled mount ── stable management / saddle transfer ──> chosen other main mount
any active mount ── low cores / danger ──> critically injured (sometimes Revive prompt)
critical injury ── timely Horse Reviver ──> revived and still existing
critical injury ── bleed-out or fatal impact ──> DEAD individual mount (permanent loss)
```

- **Main / saddled:** Defined operationally by placement of Arthur's saddle. Only one main mount. Riding a second horse does not by itself change the main saddle (H01–H03).
- **Temporary / secondary:** A tamed or acquired horse may follow and may develop a temporary bond. It is **not** a new guaranteed stable entry. Later horse bonding or scripted movement may displace it (H03, H12). Hitching it at camp helps local convenience but must not be presented as permanent registration.
- **Stabled:** Horse accepted and listed by stable management after U01, subject to capacity. A horse in the stable is **not simultaneously** the current saddled main mount; select/retrieve and verify the chosen horse in the menu (H06, H07).
- **Stolen:** Acquisition provenance, not a special permanent ownership class. RDR2 Story Mode permits stolen and wild horse management unlike Online; stealing can be witnessed and has a risk independent of horsemanship (H13). Selling a stolen animal may be less lucrative and options differ by vendor.
- **Gang-owned mounts:** Not freely saddled or owned by Arthur under ordinary play; do not advise treating companion mounts as an acquisition source (H01).

**Player-visible verification:** inspect target horse to see breed/coat/cores/bonding (not proof of ownership); inspect saddle physically, minimap main/temporary indicators, stable menu list, horse title and interaction prompts. Observe bond notifications; keep a confirmed state distinct from an interpretation of a map icon.

## 2. Conditional U01 gate: saddle and first stable lesson (`S06.M03`)

**General rule:** Chapter 2 mission **`Exit Pursued by a Bruised Ego`**, initiated with Hosea in the ordinary campaign route, demonstrates removing/transferring Arthur's saddle, visiting the **Valentine stable** and managing/selling a horse. On the same sequence, a horse brush becomes available, with the Legendary Animal Map a separate reward. This is the **normal** stable/brush introduction, not proof this player's mission is completed (H04/H05).

**Normal conditional flow**
1. **Before U01 confirmed:** Explain ordinary feeding/patting/leading and observe the displayed horse prompts. Do not instruct “use your brush” as already available, order horse purchases, assume stable slots, or make a claim the user's tamed horse is safely stored. If stable or remove-saddle functions appear early through unusual event/exception, treat the observed prompt as a **specific exception**, not proof all of U01 is complete.
2. **During the Hosea tutorial:** Follow the mission's actual contextual UI for saddle transfer and stable choice. **Selling versus stabling the tutorial Shire is a meaningful irreversible choice**: the player must decide whether keeping that individual matters. The tutorial's specific purchase/selection can vary with edition options; do not force a purchase choice outside the active mission's authoritative GameGuide. No Gold checklist duplication here.
3. **After confirmed U01:** Inspect stable management, the brush option and actual stock/cost. A shop icon or Chapter 2 location **alone** does not prove the mission completed. Do not conflate unlocked stable services with paid saddle upgrades or available stable space.
4. **Evidence surfaces:** original campaign's completed mission and player screenshot/report (GameGuide), in-game stable menu/horse-wheel item. **Unknown unless provided**.

**Exception ledger:** Some community reports allege early limited stable access after a horse death; credible story-mission guides establish the **normal route** only. Use observable prompts, avoid lethal “unlock methods” and never recommend causing horse death to bypass U01 (H21).

## 3. Bonding, care and commands (`S06.M02`)

| Action | Conditions / feedback | Benefit or caution |
|---|---|---|
| **Feed** | Use horse focus/context prompts or horse item wheel **with actual food in inventory**; watch hunger and cores | Oat cakes, hay and apples are nutritious; treating too often instead of feeding properly, or overfeeding, is unhelpful (H08–H09). |
| **Brush** | Horse is dirty and brush item has been unlocked **and observed**; prompt or horse wheel | Dirt/hunger affects horse cores; brushing aids cleanliness and bonding. No pre-U01 brush assertion (H05, H09). |
| **Pat / calm** | Focus when close or use contextual calm while mounted if startled | Builds bond/reduces agitation, not a guaranteed no-buck/no-spook rule (H08). |
| **Ride / lead / hitch** | Routine riding, leading, appropriate hitch post and rest as needed | Gradual bonding; hitch helps keep animal in place, but not the same as registering at stable (H08–H09). |
| **Whistle** | D-pad Up on standard console controls; distance, scene and mount status matter | More bonding extends call range; no response is not proof of death (H08). |
| **Inspect** | Horse focus Info screen, bonded level prompt, horse cores and satchel provision counts | Confirm status for *this* animal instead of guessing from breed or time ridden (H08). |

Four bonding levels exist. Benefits include increased horse Health/Stamina, range of calling, improved handling/reliability and additional advanced maneuvers (rear at 2, skid at 3, piaffe at 4). Some button combinations shown in specialist guides are for **standard console layout**, not a guaranteed PC control mapping. Do not manufacture exact XP increments, level timers, “bravery stats,” or a horse-proof path through dangerous water (H08/H09). **Horse Health and Stamina bars are not the same as cores:** food can replenish core condition; stimulants/medicine may address particular bars/cores; read the exact item tooltip before using.

## 4. Stable, saddle, tack and cost (`S06.M03`)

- **Stable services (once available):** buy, sell, stable/retrieve/switch eligible horses, rename, purchase provisions and Horse Reviver, customize mane/tail, buy tack (saddles, stirrups, saddlebags, etc.). Inspect actual balance and menu before spending. **Neither this dossier nor the player is assigned a horse/purchase.** (H06/H07)
- **Saddle placement:** For default consoles, stand near horse, focus with `L2 / LT`, hold **Up D-pad** to remove; stand by eligible new horse with saddle and apply via contextual Up D-pad. Mission UI takes precedence over memory, accessibility remaps or keybind generalization (H01/H02/H04).
- **Stable count:** Rockstar Companion-app manual **quoted secondhand** allows storing **up to three horses**; one active saddled horse is separate. Some specialist articles initially claimed stable-specific inventories, then **corrected** to a universal stable list for ordinary owned horses, with possible DLC/pre-order exception. Never multiply slots by number of towns. Actual stable menu overrides (H06/H07).
- **Costs / benefits:** Horse Reviver is listed under Horse Provisions (historical specialist price **$9.50**, dated 2018, **do not assume current in-game balance, discount, stock or price**). Tack has attribute effects; exact numeric equipment choice is outside scope. No invented total capacity or mandatory shopping route.
- **Saddle recovery versus horse recovery:** A dead horse's saddle can often be retrieved from body and stables offer a “retrieve lost horse” style service according to the published Companion-app manual transcription. A recovered **saddle** is not a revived **individual horse**, and “lost horse” wording must not be interpreted as universal death reversal (H06/H18/H19).
- **Special/DLC:** Whether a promotional horse can be reclaimed (possibly as a new instance with **reset bonding**) is an *edition/acquisition-specific replacement entitlement*, not proof normal horses return after death; must be checked with live stable catalogue and edition (H19).

## 5. Weapons, saddlebags and hunting cargo (`S06.M04`, read-only `S04.M02/S12.M04`)

### Separate the objects

| Class | Storage / access model | When changing mounts / danger |
|---|---|---|
| **Owned longarms / rifle and bow** | Arthur can carry some and access other owned longarms via **Weapon Wheel near/on the saddled horse** (H10). | Verify selected firearms before leaving the saddle for a hunt/mission; being out of range can look like “missing weapons.” **Not evidence of irrevocable gun deletion.** |
| **Ordinary satchel contents** | Arthur's provisions, consumables, documents and components are inventory-class items; ordinary item capacity governed elsewhere (H14). | Not equivalent to physical rolled pelt or whole carcass. Do not imply that the temporary horse has a second independent permanent satchel for transferring all items. |
| **Physical rolled/skinned pelts** | Loaded in horse cargo; available in Horse Cargo / hand-in menus when present (H11/H14). | Community examples show pelts following saddle **sometimes**; glitches/display/hand-in mismatch also documented (H15). **Default: deliver valuable ordinary material before swap**; inspect Horse Cargo and recipient menu after. |
| **Large hide or whole carcass** | Physical object lashed to a horse, sometimes visibly on its back; limits and decay belong to D04 (H11). | Risk from falls, death, leaving a mount, transition or swap. **No source-backed guarantee** every large object moves automatically when saddle changes. Preserve/intact deliver before reconfiguration. |
| **Horse clothing / outfits / hat** | Selected options via Horse Wheel, saddle/wardrobe storage according to Rockstar's official horse-wheel tip (H22). | Check actual Horse Wheel, not grounds for promising all outfit slots or items survive every transition. |

**Recipient routing:** A butcher/Pearson/Trapper menu may show suitable horse cargo alongside available personal items when the loaded horse is present. A successful **sale/donation/recipe material transfer is a separate in-game observation**, not automatically achieved by skinning, loading or changing the saddle (H11/H14).

**Practical pre-hunt departure:** inspect main saddle → stand beside/on it and equip longarms appropriate for intended game mechanic → check horse cores and reviver → use two mounts only if the player willingly accepts secondary-horse persistence risk. **After hunt:** return to the appropriate recipient and verify cargo handed in before swapping or storing.

**Special exception must remain narrow:** Rockstar Support explicitly confirms **lost Legendary Animal material** eventually appears at the Trapper for crafting after a short delay. It does **not** promise ordinary perfect pelts, whole carcasses, cash sale or the mount itself is restored (H23).

## 6. Injury, revival, permanent loss (`S06.M05`)

1. **Normal low cores / exhaustion / dirt:** Use care/provisions. This is **not** the same as a horse lying mortally injured. Inspect correct item and core/bar.
2. **Critically injured but alive:** If the UI shows **Revive**, approach and use a **Horse Reviver** the player actually possesses as soon as possible. Reviver provision sold at stables and sometimes general stores according to guides (H16/H17). The specific bleed-out period is **not verified well enough to quote in minutes**; don't rely on a claimed “one hour at bond 4”.
3. **Horse dead / no Revive:** Specialist sources describe normal Story Mode horse **permadeath** (H17/H18). Do not promise Horse Reviver can bring back a fully dead mount. If safe and possible, recover the saddle; otherwise locate stable saddle/recovery menus or obtain an appropriate replacement. Player may reload a **known pre-event save** only if they explicitly want to roll back progress; saving/reloading cannot be claimed to have happened (H18/H19).
4. **Were the gear and weapons destroyed?** Evidence supports **saddle recovery** and horse-dependent **weapon accessibility**. It does **not** establish a blanket rule that every object/pelt on a dead horse is kept. Check the actual saddle, weapon wheel, horse cargo, map item icons and recipient menus rather than promising full inventory restoration (H10/H11/H18).
5. **Specific promotional mounts:** a source's general-sounding “free replacement” conflicts with widespread permanent-loss guidance; the linked context is the special/pre-order horse issue (H19). Treat a post-death replacement as a **new instance** only if it actually appears in that edition's stable, not resurrection of bonding or pelt cargo.
6. **Highest-risk routine choices:** ride near cliffs, trains or gunfire with caution; don't intentionally test permadeath on a valued horse; carry a spare Reviver **if it is available and affordable**; consider a manual save **when the game allows** before testing uncertain retention (not auto-confirmed); avoid sacrificing live missions/Gold timers to retrieval advice.

## 7. Chapter/time/edition risk and optional goal criteria

| Risk | Classification | Reason and safe fallback |
|---|---|---|
| Selling Hosea tutorial horse | **IRREVERSIBLE individual selection risk** | A mission presents Stable or Sell (H04). If preserving this individual/coat matters, examine choice first. This dossier does not claim any particular horse remains obtainable elsewhere. |
| Leaving a desirable temporary mount; bonding another | **HIGH practical persistence risk** | Temporary mount may be displaced (H03/H12). Take it to the stable while accessible, verify registered before taking a different temporary horse. |
| Ordinary horse fully dies | **HIGH irreversible risk** | Permadeath in Story Mode (H17/H18); reviver works while critically injured. Specific DLC replacement entitlement remains exception, not guarantee. |
| Loaded pelts/carcass lost on swap/death | **DISPUTED by cargo type / possible bugs** | Transfer anecdotes disagree (H11/H15). For high-value material, use recipient before switching, inspect Horse Cargo and recipient menus. |
| Stable availability before Hosea | **CONDITIONAL / edge-case unverified** | U01 normal intro (H04/H05); rely on actual prompted capabilities; never propose harming horse to unlock it. |
| Riding into heavy currents/cliffs/near moving trains | **General hazard** | Stats/bonding aren't invulnerability. Slow travel or dismount/lead when safe, use route choice. |
| Free DLC horse after death | **EDITION-SPECIFIC, DISPUTED** | Check actual entitlement/stable. Do not imply every owned mount respawns. |
| Story mission force-swaps / replay | **CONTEXT-DEPENDENT** | Mission controls supersede Free Roam suggestions. No story spoilers, no assumed horse result or replay inventory persistence. |

**Exact Total Completion criterion** (independent secondary transcription of in-game checklist, H20):
- `OFFICIAL_100 / PLAYER`: **Reach maximum bonding level with a horse you own** (Bond Level 4). Not “bond with every horse”.
- `OFFICIAL_100 / COMPENDIUM`: **Discover 10 horse breeds**; distinct mechanic/evidence surface (Compendium). Discovering breeds is **not** proof those breeds are bought, owned or max-bonded.
- `OPTIONAL_X`: additional personal collection/horse breeds, tack and challenge progress are **not** automatically required by those two conditions.
- `ALL_GOLD`: ordinary horse bonding itself is not an all-mission-Gold medal; a specific mission's horse actions belong to the original GameGuide's Gold objectives.
- **Proof:** use *Pause > Progress > Total Completion*, relevant Player/Compendium display and/or authoritative campaign evidence. Atlas research never writes completion flags or awards credit.

## 8. Typed dependency and consumer relationships (proposed, not schema approval)

| From | Type | To | Interpretation / source |
|---|---|---|---|
| `S06.M03` | `REQUIRES` conditional normal | `U01` | Stable tutorial/brush normally introduced via Hosea; **not an actual player state** (H04/H05). |
| `S06.M01` | `INTERACTS_WITH` | `S06.M03` | Saddle changes main mount; stable storage distinct (H01/H03/H06). |
| `S06.M02` | `CONTRIBUTES_TO` | `S29.M01` | One horse maximum bonding Level 4 counts to Player Total Completion criterion (H20). |
| `S06.M01` | `INTERACTS_WITH` | `S28.M02` | Identifying/observing breed is not ownership; 10 breeds is separate Compendium subset (H20). |
| `S06.M04` | `INTERACTS_WITH` | `S04.M02` | Longarm wheel near/on main saddled horse (H10). |
| `S06.M04` | `INTERACTS_WITH` | `S12.M04/S12.M05` | Physical pelts/carcasses loaded, transported, then routed to recipient (H11/H14). |
| `S06.M03` | `INTERACTS_WITH` | `S17.M01` | Tack/provision costs and separate item/horse inventory (H06/H14). |
| `S06.M05` | `HAZARD_TO` | `S06.M01/S06.M04` | Permanent loss of mount; uncertain cargo survival (H17/H18). |
| `S07.M02` | `INTERACTS_WITH` | `S06.M02/S06.M05` | Mounted movement, bonding and environmental safety (H08/H17). |

Edges are suggested to consumers, not a modification to the proposed taxonomy schema or its ID namespace. All peer Wave 1 dossiers (D04 hunting and D06 inventory) are **provisional until individually reviewed/merged**.

## 9. Three natural Chapter 2 scenarios (unknown player state, nonmandatory)

### Scenario A — “How do I change my main horse without losing my current one?”

**Observation requested:** “Is the Hosea horse/stable tutorial complete, and is the horse you want already in the stable or next to Arthur?”  
**Conditional answer:** If U01 is visibly available and stable has a free slot, **store the valued horse** before changing; then use stable prompts or move saddle to the eligible replacement, verify main saddle. If U01 unknown/not yet complete, explain the saddle rule and avoid claiming stable access. **Do not** order a specific purchase.  
**Aftercare:** Confirm both horses in main/stable display and whether valuable cargo needs delivering first.  
**Route:** Atlas explainer → Free Roam optional short stable visit (if observed available) → return to chosen activity. No mission credit.

### Scenario B — “I found a good wild horse while roaming the Heartlands. Can I keep it?”

**Observation requested:** “Did you actually calm and break it; do you see temporary-horse status; is stable access unlocked; is there a spare stable slot?”  
**Conditional answer:** Ride/tame, but temporary is fragile. If eligible and capacity exists, bring it to a stable and **verify it appears in managed horses**; or switch saddle to make it main, taking care of previous main. If access/capacity unknown, avoid a second temporary horse that could displace it; protect current main first.  
**Aftercare:** A successful stable listing is a stronger persistence signal than merely riding it.  
**Route:** Atlas (horse lifecycle) ↔ Free Roam organic discovery; no fictional acquisition saved.

### Scenario C — “My horse fell during hunting. I had a perfect pelt and can't see my rifle.”

**Observation requested:** “Does the horse show a Revive prompt or death marker? Do you **have** Horse Reviver? Which horse is saddled? Is the pelt visible in Horse Cargo/map/recipient menu?”  
**Conditional answer:** If Revive shown and provision held, use it promptly. If dead, treat horse as lost and seek saddle recovery; do **not** promise cargo. Re-check longarm Weapon Wheel by the saddled horse because distance alone can hide longarms. For the ordinary pelt, inspect cargo/map and recipient; **only Legendary Animal material** has a Rockstar-backed special Trapper fallback (H23).  
**Aftercare:** If a player *reports* save or object loss, let GameGuide reconcile evidence in the canonical campaign; Atlas remains unchanged.  
**Route:** Quick risk response (D01) → D04 hunting/material transport **read-only provisional link** → return to user's outing.

## 10. Three mistakes to prevent

1. **“I rode a new horse, so the first must be safely stabled.”** False inference; saddle/main and stable registration are distinct. Check both interfaces (H01/H03/H06).
2. **“I finished Chapter 1, so I have the horse brush and stables.”** False inference; ordinary U01 Hosea tutorial is Chapter 2 and actual completion **unknown** (H04/H05).
3. **“My horse died but the Reviver / stable always brings it and all pelts back.”** False generalization; reviver only during downed state; normal death risk; special DLC and legendary-pelt rules do not extend to regular mounts/cargo (H17/H18/H19/H23).

## 11. Claim-level evidence ledger (sources checked 2026-10-17)

**Confidence legend:** `HIGH` = official manual/in-game instruction quoted with consistent independent guides or official narrow Rockstar answer; `MODERATE` = independent specialist guide(s), plausible but not direct verified gameplay capture; `LOW/DISPUTED` = conflicting / anecdotal / edition edge. **Source publication/update date is distinct from this checked date and from a game patch.** “Primary” refers only to what the source actually shows; the original Companion manual is **secondhand-transcribed**, not accessed directly.

| Claim ID | Source-checked assertion (bounded) | Source and exact URL / published date | Scope / confidence |
|---|---|---|---|
| **H01** | One saddled main horse; transfer saddle via focus + Up console control | [Shacknews — Horse bonding, grooming, and reviving](https://www.shacknews.com/article/108131/horse-bonding-grooming-and-reviving-red-dead-redemption-2) (2018-10-25); [PowerPyx FAQ — Horse Tutorials](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) (2018-10-25) | Story Mode, consoles; **HIGH** |
| **H02** | Field saddle swap controls/main mount identity; stable selection also available | [PowerPyx — Exit Pursued by a Bruised Ego](https://www.powerpyx.com/red-dead-redemption-2-exit-pursued-by-a-bruised-ego-walkthrough/) (2018-10-27); [Guides4Gamers mission objectives](https://guides4gamers.com/red-dead-redemption-2/quests/exit-pursued-by-a-bruised-ego/) (date not independently established) | Chapter 2 tutorial; **HIGH** |
| **H03** | Wild broken/stolen mounts can be ridden, but temporary does not become main without saddle | [RDR2.org — Horse Taming Guide](https://www.rdr2.org/guides/red-dead-redemption-2-horse-taming-guide/) (2018-11-02, updated 2023-01-09); [PowerPyx FAQ](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) (2018-10-25) | Story Mode; **HIGH** for main distinction, **MODERATE** for precise temporary persistence |
| **H04** | Hosea story mission includes saddle tutorial and Valentine stable: sell/stable choices | [PowerPyx mission walkthrough](https://www.powerpyx.com/red-dead-redemption-2-exit-pursued-by-a-bruised-ego-walkthrough/) (2018-10-27); [Red Dead Wiki mission objectives](https://reddead.fandom.com/wiki/Exit_Pursued_by_a_Bruised_Ego) (undated wiki); [GameFAQs mission Q&A](https://gamefaqs.gamespot.com/ps4/200180-red-dead-redemption-2/answers/501647-how-do-i-complete-the-main-mission-exit-pursued-by-a-bruised-ego) (undated) | Normal Chapter 2 gate; **HIGH** |
| **H05** | Horse brush awarded/available following Hosea mission | [SuperCheats — Exit Pursued by a Bruised Ego](https://www.supercheats.com/red-dead-redemption-2/walkthrough/exit-pursued-by-a-bruised-ego) (2018-12-23); [Shacknews care](https://www.shacknews.com/article/108131/horse-bonding-grooming-and-reviving-red-dead-redemption-2) (2018-10-25); [PowerPyx FAQ](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) | Standard Story Mode; **HIGH**, actual player completion **UNKNOWN** |
| **H06** | Stables buy/sell/retrieve, tack/services, safely store **up to three horses** | [Arqade — quote explicitly attributed to original RDR2 Companion app manual](https://gaming.stackexchange.com/questions/340483/how-many-horses-can-i-have) (answer 2018-11-02); [PowerPyx FAQ](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) (2018-10-25) | Original Story Mode manual **secondhand transcription**, corroborated; **HIGH** for 3, not independent direct manual capture |
| **H07** | Standard stable horse inventory is globally available; initial contrary “per stable” guide claim was corrected; special/DLC caveat | [RDR2.org — Horse Guide](https://www.rdr2.org/guides/red-dead-redemption-2-horse-guide/) (2018-11-01, updated 2026-08-05) | Standard Story Mode **MODERATE**; edition exception **DISPUTED / needs menu check** |
| **H08** | Bond 1–4; feed, calm, brush, lead/ride; better cores/range/maneuvers; whistle limitations | [PowerPyx FAQ Horse Tutorials](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) (2018-10-25); [Shacknews bonding](https://www.shacknews.com/article/108131/horse-bonding-grooming-and-reviving-red-dead-redemption-2) (2018-10-25) | Story Mode, standard consoles for buttons; **HIGH** |
| **H09** | Dirt/hunger affect cores; oat cakes/apples/hay nutritional vs treats; overfeeding possible | [PowerPyx FAQ](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) (2018-10-25) (says reproduces in-game Help); [Shacknews horse care](https://www.shacknews.com/article/108131/horse-bonding-grooming-and-reviving-red-dead-redemption-2) | Story Mode; **HIGH/MODERATE** |
| **H10** | Weapon Wheel holds/accesses longarms near/on horse; on foot far away may not offer them | [Shacknews — Horse items and weapons](https://www.shacknews.com/article/108131/horse-bonding-grooming-and-reviving-red-dead-redemption-2) (2018-10-25); [PowerPyx FAQ weapons](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) (2018-10-25) | Story Mode; **HIGH** for access limits; full death/swap preservation **UNKNOWN** |
| **H11** | Loaded animal skins/carcasses are horse cargo; vendors/donation can read loaded horse material | [GameFAQs — Horse Cargo transfer?](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/77135401) (2018 community answer); [GameFAQs — satchel vs horse cargo](https://gamefaqs.gamespot.com/ps4/200179-red-dead-redemption-2/answers/501301-how-do-i-move-items-from-my-personal-satchel-to-the-horse-satchel) (2018 community) | Story Mode anecdotal UI reports **MODERATE**; precise collision/distance rules unverified |
| **H12** | New temporary bonding can displace prior temporary status, even if left at camp | [GameFAQs — retrieve a temporary horse?](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/77190458) (2018 archived discussion); [Reddit temporary horse report](https://www.reddit.com/r/reddeadredemption2/comments/1se52cc/how_many_temporary_horses_can_you_have_at_once_i/) (2026-04) | Community corroborated but edge behavior **MODERATE**; **safe fallback store important horse** |
| **H13** | Stolen horses and rustling have crime/vendor consequences | [PowerPyx FAQ — Rustling/Fences](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) (2018-10-25); [RDR2.org — Taming Guide](https://www.rdr2.org/guides/red-dead-redemption-2-horse-taming-guide/) (2018, update 2023) | Story Mode **HIGH/MODERATE**; no fixed honor/bounty amount |
| **H14** | Satchel is distinct from physical horse cargo; ordinary provisions/documents carried in satchel | [PowerPyx FAQ — Satchel](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) (2018-10-25); [GameFAQs horse cargo Q&A](https://gamefaqs.gamespot.com/ps4/200179-red-dead-redemption-2/answers/501301-how-do-i-move-items-from-my-personal-satchel-to-the-horse-satchel) | Story Mode; **MODERATE/HIGH** for distinction, not blanket persistence across every mission |
| **H15** | Small pelts reportedly transfer with saddle; other stowed objects can glitch/drop or appear missing | [GameFAQs — Pelts, Horses and Temporary Horses](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/77216770) (2018 confirmations); [Reddit — Horseback hides after stable](https://www.reddit.com/r/RDR2/comments/1kcv5gz) (2025-05); [RDR2.org Forum — skins](https://www.rdr2.org/forums/topic/1182-animal-skins-on-horses/) (2018-10) | **DISPUTED** per cargo subtype and game state; do NOT promise automatic preservation |
| **H16** | Horse Reviver purchasable at stable Horse Provisions; archived $9.50 price | [PowerPyx — How to Get Horse Reviver](https://www.powerpyx.com/red-dead-redemption-2-how-to-get-horse-reviver/) (2018-10-25) | Normal Story Mode; **HIGH** purchase route; numeric price **historical only** |
| **H17** | Critically injured horse can be revived in window; otherwise normal death permanent | [GameWith — Points of No Return](https://gamewith.net/red-dead-redemption2/article/show/1230) (updated 2019-11-05); [RDR2.org — Horses & Saddles / Losing Your Horse](https://www.rdr2.org/wiki/horses-saddles/) (2018 wiki); [Shacknews — Revive](https://www.shacknews.com/article/108131/horse-bonding-grooming-and-reviving-red-dead-redemption-2) | Standard Story Mode **HIGH** by consistent independent guides, **no located first-party death-specific support article** |
| **H18** | Saddle can be removed from dead mount; other recovery through stable/camp may be possible | [PowerPyx FAQ — Saddling](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) (2018-10-25); [Shacknews — Saddles](https://www.shacknews.com/article/108131/horse-bonding-grooming-and-reviving-red-dead-redemption-2) (2018-10-25); [Companion manual quote at Arqade](https://gaming.stackexchange.com/questions/340483/how-many-horses-can-i-have) (2018-11-02) | Story Mode **MODERATE/HIGH** for saddle availability, **NOT** dead mount revival |
| **H19** | Broad “replace dead horse free from its original stable” from RDR2.org guide conflicts with its wiki's permadeath; guide links special war/preorder horse issue | [RDR2.org Horse Guide](https://www.rdr2.org/guides/red-dead-redemption-2-horse-guide/) (updated 2026-08-05); [RDR2.org Horses & Saddles wiki](https://www.rdr2.org/wiki/horses-saddles/) (2018); [GameWith](https://gamewith.net/red-dead-redemption2/article/show/1230) (2019) | **DISPUTED**; fallback: assume normal individual lost, check purchased edition entitlements separately |
| **H20** | Total Completion Player max one horse bonding; separate Compendium discover 10 breeds | [GTA Base — RDR2 100% Completion Guide](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist) (date on page not established; checked 2026-10-17); [PowerPyx — 100% checklist](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) (2018) | **HIGH** for secondary checklist agreement; actual player credit **UNKNOWN** |
| **H21** | Early pre-Hosea stable workaround claims are anecdotal | [Reddit — Early stables after horse death](https://www.reddit.com/r/RDR2/comments/191nm05) (2024-01) vs [PowerPyx U01 mission](https://www.powerpyx.com/red-dead-redemption-2-exit-pursued-by-a-bruised-ego-walkthrough/) (2018) | **LOW/DISPUTED**; never recommend risky workaround |
| **H22** | Rockstar tip describes horse-wheel access to saved hat near/on horse | [Rockstar Games — Red Dead Redemption 2 Quick Tips](https://www.rockstargames.com/newswire/article/25o2411817k8k7/Red-Dead-Redemption-2-Quick-Tips) (2018-11-05) | **Official / HIGH** narrow horse-wheel feature; not proof every item transfer |
| **H23** | Lost Legendary Animal pelt/carcass ultimately available to Trapper after delay | [Rockstar Support — Legendary Animal pelt loss](https://support.rockstargames.com/articles/480idh1zECJ0ojrheApV1U/unable-to-skin-legendary-animals-or-losing-their-pelts-in-red-dead-redemption-2) (last updated 2024-05-01) | **Official / HIGH** for *Legendary materials only*; excludes ordinary pelts and lost horse |

**Quality note:** First-party evidence available for this scope is narrow: Rockstar's Horse Wheel tip and Rockstar Support's *Legendary* loss exception, plus a **transcribed** original Rockstar Companion manual stable-services excerpt and guides reproducing the game's Help entries. No personal in-game recording was captured for this task. Mechanics supported only by community reports are **never** elevated to universal or irreversible truths.

## 12. Disputes, uncertainties and bounded verification tests

| Dispute / question | Competing evidence | Current safe stance | Test without endangering existing progression |
|---|---|---|---|
| **Ordinary horse dead → resurrect/replacement?** | GameWith + RDR2.org Wiki say permadeath; RDR2.org guide says free replacement from original stable, referencing special horse context (H17/H19) | **Normal individual death is permanent**; edition-specific catalogue duplicate **not same bond**; never guarantee recovery | In separate noncanonical test save or verified edition menu after naturally occurring loss; record stable catalogue and bond level; **no deliberate live horse death** |
| **Does every pelt transfer on saddle swap?** | 2018 anecdotes say smaller pelts follow saddle; other reports say hidden, missing, dropped or stuck (H15) | **Do not promise**. Deliver high-value ordinary pelts before switching. | Disposable low-value ordinary pelt, distinct large item test and pre/post horse cargo/recipient screenshots on separate save; no unique/quest items |
| **Can temporary horse remain at camp long term?** | Some camp-hitch reports vs one-temporary bond replacement and mission transitions (H12) | Camp hitch != stable registration; stable valuable mount promptly | Screenshot temp-horse symbol, hitch, after normal transition; no risk to special acquisition |
| **“Three stabled” vs 4/5/6 total horses** | Companion manual 3 **in stables**, separate main/temporary claims; community conflates all slots (H06/H12) | Three protected **stable slots**, one main; temporary **nonprotected**. Menu owns actual count. | Photograph Manage Horses capacity before/after main switch; do not purchase/sell merely to test |
| **Hosea completion enough for brush in unusual/replay route?** | Normal tutorial confirmed, atypical state uncertain (H04/H05/H21) | Check brush icon and stable access; do not infer from chapter alone | Inspect mission completed status and horse wheel; note PC prompt variant |
| **Weapon preservation after death or mission swap** | Longarm access tied to saddle (H10); full weapon inventory survival not explicitly covered by identified primary evidence | Avoid “lost forever”/“always retained” promises; check wheel near saddled main and weapon locker if available | Screenshot gun categories before/after ordinary non-risky stable switch |
| **Exact stable globals / DLC replacement** | RDR2.org article corrected earlier per-stable assertion, DLC exception (H07/H19) | Assume cross-town common owned stable list only for ordinary horses; inspect actual menu | Non-risky view at two stables after U01; separate game edition entitlement research |
| **Bleed-out timer, emergency in-combat revive** | Uncorroborated numeric guides vary; mission context may suppress prompts | No exact timer; treat revive prompt as urgent and action-available only | Observe safe instructional prompt on already downed horse in noncanonical test; no induced live damage |

**Not observed in this research session:** actual player horse identity, brush ownership, stable list, bond level, reviver count, carried cargo, PC keybinding, live mission status, chapter flags or saved-game file. All remain **UNKNOWN** for this dossier.

## 13. GameGuide / Free Roam / Companion handoff (no state updates)

**When the user asks a horse question, consumers should:**
1. Fetch **latest** canonical `L33TW0RLD/rdr2/campaign/` and any player-supplied screenshot/report. Do **not** read a dated Atlas horizon as live state.
2. Read this dossier as a **research explanation**, conditional on review maturity. Ask only the *single relevant on-screen fact*: current saddle vs temporary icon, actual stable/brush menu, cargo tab, or Revive prompt. Do not force all verifications at once.
3. Provide **mechanic rule → if/then gate → reversible first action → key irreversible risk → next observed confirmation**. Example: “If the brush icon appears, use it when dirty; otherwise continue feeding/patting and check U01 when you're ready.”
4. If a mission is **active**, return control to **Mission Control** and its complete authoritative Gold dossier. Horse research must not override the current mission timer/choices.
5. If free roam, offer one **optional** brief horse-care exercise / stable check / slow trail outing, not compulsory breed shopping or a fabricated route. Link proposed D04 for field hauling and D06 for material identity as read-only and unadopted until delivered.
6. If a player **reports** horse death, possession change, cargo loss or save, relay the exact report to GameGuide for **authoritative evidence reconciliation**; do not write campaign progress from Atlas.

**Read-only compact answer payload concept (not a new schema):** `mechanic_id`, `rule`, `gate_status=UNKNOWN|PLAYER_EVIDENCED` (*ephemeral consumer-side only*), `risk`, `source_refs`, `confirmation_prompt`, `return_context`. Do not persist an `owned_horse` field.

## 14. Next bounded questions and explicit review request

**Recommended review before adoption:** coordinator validates (a) individual-death versus special-edition replacement language, (b) temp-slot replacement and three-stable-slot language, (c) whether any normal pelt class is safely asserted to transfer, (d) all claimed U01 prompts across PC/consoles, and (e) `S06.M01–M05` links without changing the proposed taxonomy. If a hard transfer guarantee is desired, authorize a **separate controlled in-game test task** and keep it out of this research record.

**Future possible task (NOT self-assigned):** precise horse controls/platform testing, equipment/stat effects, stable/temporary multi-mount reproducibility or Story Mode death/cargo controlled test matrix. Requires new registered ID/lease.

**Owner decision sought:** Is this D01 suitable to integrate at `RESEARCHED — REVIEW PENDING` into Systems Atlas navigation, keeping provisional IDs and cargo/DLC disputes visible? **No automatic adoption, merge, registry update or mission campaign write is authorized by this deliverable.**
