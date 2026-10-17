# D10 — Clothing, weather suitability, wardrobe, grooming and disguises (RDR2 Story Mode)

> **Record:** `ATLAS.D10` · **Version:** 0.1 · **Kind:** mechanics dossier · **Task:** `atlas-clothing-020` · [Issue #27](https://github.com/L33TW0RLD/rdr2-hub/issues/27)  
> **Maturity:** **RESEARCHED — REVIEW PENDING**; neither gameplay rules nor provisional taxonomy independently `ADOPTED`.  
> **Checked:** **2026-10-17** (research/source-check date, not game patch date).  
> **Scope:** Unmodded **Red Dead Redemption 2 Story Mode**, initial PS4/Xbox One releases and PC/updated Story Mode where corroborated. No Red Dead Online, modified wardrobe scripts, or RDR1 outfit rules. Standard console examples are **PlayStation / Xbox**; keyboard/controller presets and actual screen prompts override examples.  
> **Default spoilers:** T0 general controls/appearance and T1 early Chapter 2. Later-region outfits and story-specific consequences excluded from default guidance.  
> **Primary provisional IDs:** `S02.M03` temperature/exposure; `S02.M04` cleanliness/condition; `S03.M01` wardrobe/outfits; `S03.M02` barber/bathing; `S03.M03` face covering/visual identity; `S03.M04` cosmetic display of talismans/special gear. **Interface only:** `S05.M02` criminal witness/law identification owned by **D13**, read-only.  
> **Excluded research ownership:** D09 health/core growth; D11 `S07` traversal/weather route; D13 `S05.M01–M04` criminal law/Honor outcome; D01 horse lifecycle and saddle switching; D06 item preservation; D17 Trapper animal/material recipe matrix; D27 challenge rank specifics and D24 replay/save behavior. These links are **READ-ONLY REVIEW-PENDING** even if their task files have been merged.

## Practical quick-reference — a visual preference is not automatically protection

| Situation / actual on-screen feedback | Mechanic conclusion | Reversible, low-risk action | Claim |
|---|---|---|---|
| Weather warning says Arthur is hot or cold, or `Player` status shows climate | Clothing suitability changes **Health Core drain**; rain/snow/location and wardrobe choices matter | Check worn outfit's displayed hot/average/cold suitability; change to a visibly appropriate saved set if available; recover core with provisions/rest separately | C01–C04 |
| “I bought a coat but can't find it on the Horse Wheel” | **Buying/owning** a garment, **equipping** it, **saving** an outfit and **storing** that outfit on horse are different operations | Open accessible camp/hotel/store wardrobe, select purchased piece, save/set outfit, choose *Store on Horse* and check Horse Wheel | C05–C08 |
| “My custom outfit changed when I put on a hat” | Small apparel changes can create a **Custom Outfit** variant; counts/slots may shift | Return to wardrobe and save exact look; inspect `Stored on Horse`, do not trust the name alone | C06–C09 |
| “How many outfits fit?” | Standard Story Mode horse storage commonly reported **3**, upgraded saddlebag **5**, but distinction between *current*, *saved*, *custom* and slot quirks is **DISPUTED** | Read actual saddlebag/wardrobe slot indicator, equip upgraded bag only if owned/available and desired | C08–C10 |
| Arthur lost his default hat | Rockstar officially documents recovery through Horse Wheel while near/on horse | Use nearby horse and Horse Wheel; **not** a promise every stolen/unique NPC hat is recoverable | C11 |
| Arthur is muddy/bloody, NPC comments | Cleanliness is mainly contextual social reaction and role-play; source disagreement over whether every shop refuses trade | Take offered bath, wash in safe water or change clothes; verify any specific service prompt rather than claim a hard stat debuff | C12–C14 |
| “Can I shave/buy hairstyle?” | Camp shaving, town barber haircut/beard styling and hair growth over time are distinct from bathing | Use observed camp shaving kit/barber menu; inspect current length; no instant beard-growth promise | C13, C15 |
| “Will wearing a bandana hide me?” | Face covering can impede **civilian** identification if used at relevant time; **lawmen seeing Arthur can identify him**. Neither outfit nor horse swap is proven automatic anonymity | Prefer avoid crime; in an actual incident inspect witness and Wanted HUD; D13 governs lawful response | C16–C19 |
| “Talismans must be worn to work?” | Acquired trinket/talisman perks are **passive**, wardrobe display is primarily visual | Check acquisition/inventory first; don't purchase/craft just to test cosmetic display; the effects are not a fashion stacking formula | C20–C22 |

**Safe overarching rule:** Choose outfits based on the **displayed suitability**, not coat color or a guessed air-temperature cutoff. Keep a verified weather-appropriate outfit in the **actual Horse Wheel** for long trips. A bandana is **not** law immunity. Nothing in this dossier proves the player owns any item.

---

## 1. Definitions, UI actions and observation surfaces

### 1.1 Temperature and clothing: `S02.M03`

The game evaluates the climate and whether Arthur's **current combined clothing** is suitably warm. The game's **Pause → Help → General Tutorials → Outfits**, transcribed independently by PowerPyx in 2018, says prolonged unsuitable heat/cold speeds up **Health Core** drain [C01]. RDR2.org's Story Mode clothing guide corroborates climate and cores [C02]. **Core** is the interior attribute reserve, not an instant statement that full Health *bar* vanishes, nor a separate coat durability meter.

**Observe:** current temperature/weather readout in HUD/Player status, wardrobe outfit labels like **Suitable for Hot Weather / Average Temperatures / Cold Weather**, occasional onscreen hot/cold warning, and Health Core condition. Avoid rigid “use jacket if weather is below X °C” as the **first action**; the actual outfit/category interface is the authority.

**Garment warmth is composite:** a lightweight vest, gloves, hat and coat can combine into a category; full-outfit preset labels are not proof that every individually substituted item preserves suitability. A detailed community Steam guide proposes **0–2 warmth = hot, 3 = average, 4+ = cold**, with rough weather breakpoints; this is an **unofficial reverse-engineered model** and includes equipment/Online details. It is **not** an officially confirmed universal set of Celsius/Fahrenheit cutoffs or a mandatory displayable statistic. When it conflicts with the outfit menu or version, follow actual in-game feedback [C03].

**Practical:** for a brief town visit, notice warning first; for travel north toward cold terrain, bring an actually accessible cold set on the saddled horse before leaving (D11 travel link). If prolonged exposure already drained a core, changing clothes mitigates the **cause**, but does **not by itself guarantee full core restoration**; use appropriate provisions/rest when accessible (D09/D12 read-only). No fixed temperature-exposure timer, health drain ratio or tick formula established [C01–C03].

### 1.2 Cleaning and temporary condition: `S02.M04`

Mud, blood and grime can change Arthur's appearance and how characters respond. Story Mode permits bathing at an accessible bath hotel, swimming/wading in safe water, and changing clothing [C12–C14]. **Do not claim** a “dirt bar”, full armor deterioration, daily hygiene challenge, infection chance, hard bathing requirement, or guaranteed Honor change absent an actual on-screen source. Horse cleanliness and its **own core** belong to D01, not the same mechanic.

### 1.3 Wardrobe, clothing sets and carried outfits: `S03.M01`

Different objects/interfaces:

| Term | Meaning | Source / player proof |
|---|---|---|
| **Wardrobe** | Outfits/pieces owned or made available in the accessible camp, hotel/store/tailor wardrobe, where pieces can be selected and custom outfit saved | `Wardrobe` screen and category [C05–C07] |
| **Garment/colour variant** | Individual hat/coat/vest/shirt etc., bought/unlocked separately; changing one piece changes look and possibly warmth | Catalogue purchase confirmation + Wardrobe Owned list [C05/C07] |
| **Preset/full outfit** | Complete named set offered by store, story or special edition, possibly with item/region/Honor conditions | In-game Outfit list/lock icon; no universal all-outfits ownership [C06/C21] |
| **Custom outfit** | Current assembled mix; equipping a different hat/gloves can generate temporary `Custom Outfit` separate from a saved slot | In-game name/wardrobe storage indicator [C08/C09] |
| **Saved outfit** | Explicit saved wardrobe configuration, **not automatically all stored on horse** | `Saved Outfits` tab, `Save` prompt [C07–C09] |
| **Stored on Horse** | Subset selected for away-from-wardrobe swapping via Horse Wheel, limited by actual storage / saddlebag | `Store on Horse` and Horse Wheel result [C07–C11] |
| **Dropped Arthur hat** | Standard personal hat recoverable from near-horse wheel; special NPC hats may have their own permanence constraints | Rockstar official Quick Tips [C11]; D06 unusual-item identity outside D10 |

Standard console Horse Wheel: approach the **saddled** horse; hold `L1/LB`, tab `R1/RB` to **Horse Wheel**, highlight outfits/hats or mask slot and cycle as shown (`L2/R2` or `LT/RT` in some views). **Exact number of wheel tabs and selection vary by preset and UI situation**; read prompts before recommending buttons [C07/C11]. Proximity and appropriate animal are important; saddle/temporary/stabled status is D01.

### 1.4 Grooming, hair and shaving: `S03.M02`

- **Camp shaving kit** provides beard/mustache maintenance if reached and prompts permit; **barbers** provide broader paid haircut and facial-hair styles. Barber cannot add length that has not grown; time grows hair/beard, and actual selectable styles depend on present length [C13/C15].
- **Hair Tonic** is a purchased/looted consumable that speeds growth; initial/maximum growth numeric claims differ in community sources, and a guide's classification of its satchel tab is disputed even by its own comments. Never promise instant full length, an exact sleep count, exponential unlimited stacking, or that a particular tonic is owned [C15].
- **Bath** and **barber** are distinct services: neither substitutes for a weather-appropriate outfit, and neither provides a proven guaranteed Wanted reset [C12–C16].
- **Social presentation:** Arthur can be commented on when dirty, stylish or shaved. Shop interaction/refusal due to grime appears in specialist guides [C12], but a hard universal refusal in *every* store is unsupported. If a specific clerk refuses, the player can safely try washing and revisit; do not assert automatic criminal clearance.

### 1.5 Coverings and crime identification: `S03.M03` ↔ `S05.M02` (D13 primary)

A **bandana** covers lower face through contextual item wheel; **full masks/hoods** occupy a related costume/horse gear slot and some may hide/replace hat while equipped. Availability and specific mask shops depend on Story Mode service access; do not import Online masks or assert every mask already owned [C16/C17].

**Civilian witness versus law officer:**
1. Witness seeing offense may flee and report, sometimes with `Unknown Suspect` while identity remains unconfirmed. D13 documents separate report, investigation, named identification and Wanted/bounty outcomes.
2. Mask used *before* incident can make civilian recognition harder in ordinary situations (secondary guides/in-game Help reproduction).
3. **Lawmen directly observing Arthur can identify him despite a mask**; no total immunity. A mask is not a reset button for witness, current Wanted, regional bounty or Honor.
4. Whether changing **coat, hair, facial hair, hat, horse or town** independently reduces future recognition is **DISPUTED/UNVERIFIED**. One 2019 guide positively prescribes changing **horse and outfit**; D13 points to contrary controlled community reports. **Do not invent a detection formula or advise laundering identity through clothing purchases** [C16–C19].

### 1.6 Wearable effects: `S03.M04`

**Trinkets/talismans** are unlike ordinary shirts, coats or hats. Once genuinely **acquired/crafted**, their gameplay bonuses are passive according to PowerPyx and GameSpot; a **Talisman may be shown/hidden in the Wardrobe** without enabling/disabling its benefit [C20/C22]. This is an *appearance interface* only. Recipes/availability and special-edition entitlement belong to D17/other specialists; no guaranteed stacking **numbers** or assertion that the user owns a specific talisman. Rockstar official Special Edition materials establish **edition-specific Story Mode outfit and talisman bonuses**, separately from Ultimate Edition **Online-only** outfits [C21]. Protect scope.

---

## 2. Normal conditions, gates, exceptions and player verification

| Feature | Normal conditional access | On-screen check / exception | Confidence |
|---|---|---|---|
| **Basic clothing and weather** | General Story Mode from introduction/Chapter 2 free roam (`U00` for open roaming) | Current worn pieces, climate warning, wardrobe suitability; early scripted clothing may override free selection | HIGH [C01/C02] |
| **Gang camp wardrobe** | Camp/room wardrobe when in free roam and actual interaction prompt available | Location of `Wardrobe` / Arthur's belongings; no assumption currently in camp | HIGH [C05/C07] |
| **Hotel/room wardrobe** | An accessible hotel or lodging when room/wardrobe prompt shown; fee if needed | Some stores allow browsing/changing without renting; use actual available menu | MEDIUM–HIGH [C05/C06] |
| **General store / tailor catalogue** | Store open, money/stock, location-specific range and sometimes Honor/region/story eligibility | Check item variant **Available/Purchase/Owned**, price and weather suitability; do not invent wallet or unlocked location | HIGH [C05/C06/C21] |
| **Trapper-crafted garment** | Necessary eligible materials banked **at Trapper**, then item/purchase cost if shown; no “all skins available because Chapter 2” | Individual menu material checklist; D17 and D04 source details read-only | MEDIUM [C05/C06] |
| **Horse Wheel clothing** | Outfit explicitly **saved and stored on the horse**, main saddled horse nearby/accessible | Wheel actually lists the outfit; saddlebag capacity verified before trip | HIGH for workflow, MEDIUM for count [C07–C10] |
| **Upgraded saddlebags** | Stable equipment service, normal `U01` Hosea stable tutorial for ordinary access; **not** guaranteed completed | Inspect equipment tab, whether purchased and actual outfits slots; D01/U01 read-only | MEDIUM–HIGH [C08–C10] |
| **Bath** | Hotel bath service where offered; pay actual menu price | `Bath` prompt, NPC reaction; deluxe is optional/primarily social | MEDIUM [C12] |
| **Shave / haircut** | Shave at available camp station, barber services at operating town barbers | Style and existing hair length; no instant longer hair | HIGH [C13/C15] |
| **Bandana** | Basic face covering shown via item wheel if present; Chapter 1 robbery tutorial demonstrates it in normal play | Do not claim a currently owned *extra mask* or active facial covering without visual evidence | MEDIUM–HIGH [C16/C17] |
| **Additional masks** | Some purchased from available Fences or encountered in world; **service gate depends on location**, not every fence locked behind same mission | Actual mask catalogue/wardrobe/wheel; see D13 for `U05` Seamus wagon fence **not all-fence gate** | MEDIUM [C16] |
| **Talisman visibility** | Only if talisman actually obtained; Wardrobe appearance selector when available | Passive perk remains even when hidden; check inventory acquisition independently | HIGH [C20/C22] |

**U01** is a *normal* stable introduction via Hosea's `Exit Pursued by a Bruised Ego` (D01), not an assertion it happened in this save. **U05** concerns Emerald Ranch wagon Fence introduction and does not globally lock all clothing/fence masks; refer to D13. `U00` is general post-Chapter-1 roam, not a global “every tailors, coats, barbers and Trapper garment available” flag. Actual mission/region/edition restriction must come from menu/campaign evidence.

---

## 3. Benefits, cost, routing and recoverability

- **Clothing warmth:** actively relevant to **Health Core drain** in prolonged heat/cold. *Prevention* from dressing sensibly is distinct from *recovery* of depleted core with rest/food and cannot be inferred from a simple outfit swap [C01–C03].
- **Costs:** most catalogue clothes cost Arthur's money and require stock/eligibility; certain trapper garments additionally require material submission; barber, bath, room and saddlebags have separate costs where displayed. **No exact prices** imported as universal across honor discounts or editions [C05/C06/C12].
- **Wardrobe persistence:** purchased/received clothing is generally retrievable through wardrobes; a garment being **owned** and a saved look actually **stored on horse** are separate. If a custom outfit vanishes from Horse Wheel, first inspect wardrobe and restow. Some reports indicate temporary custom/saved outfit slot displacement, not necessarily irrevocable loss of purchased clothing [C07–C10].
- **Hats:** Rockstar **officially** establishes Arthur's hat's standard Horse Wheel recovery. Not every grabbed stranger's hat has this confirmed recovery; no “all found hats permanently saved” claim [C11].
- **Trapper routing:** purchasing clothing there depends on correct animal material accepted **by Trapper**, not automatic credit to Pearson or a crafted satchel. D03/D04/D17 own recipe/carcass rules [C05].
- **Bath and barber:** primarily immersive social/appearance; no reliable direct source establishes a universal +Health Core, +Stamina Core, `Honor +X`, or legal disguise privilege from bathing/shaving alone. Certain NPC/shop responses may improve when clean; ask for on-screen refusal rather than promise a particular outcome [C12–C14].
- **Talisman:** after actual acquisition, passive effects persist whether visually equipped (secondary independent corroboration); visual wardrobe choice and gameplay perk are **separate**. This doesn't prove unused crafting ingredients, talismans or edition bonuses owned [C20–C22].
- **Mask:** cover choice may affect witness identification but **not** underlying Honor loss, automatic bounty cancellation or a guaranteed consequence-free theft; D13 controls law effects [C16–C19].

**Irreversibility:** A wardrobe **purchase** normally spends money; saving a look is ordinarily reversible by wardrobe access; cutting/shaving hair requires **time** (and perhaps tonic) to regrow; lost *special* hats can be at risk until independently confirmed as saved. No claim a one-time barber cut destroys a completion item. Do not confuse a premium outfit price with a permanent gameplay-stat advantage.

---

## 4. Story, chapter, time, edition and platform risks

| Concern | Evidence status | Chapter-safe rule |
|---|---|---|
| **Cold region in a hot outfit** | Confirmed broad game Help [C01] | Before extended excursion, save/store suitable cold look **only if actually available**, and bring recovery provisions. |
| **Heavy coat in warmer town** | Confirmed broad game Help [C01] | Swap into actual hot/average category if weather warning appears; don't cite universal temperature trigger. |
| **Specific “70°F / 50°F” warmth model** | **Unverified/community reverse engineering** [C03] | Never use number as automatic safety/danger gate; rely on worn-outfit label/warning. |
| **Outfit disappearance/capacity** | **DISPUTED** custom/saved/current vs slot; possible bugs [C08–C10] | Verify storage indicator and Horse Wheel after editing; don't tell user to delete valued outfits to diagnose. |
| **Buying locked location/Honor outfit** | Valid availability concept [C05/C06], specifics T2+ | Inspect shop catalogue; no compelled later region/chapter travel; do not reveal future plot. |
| **Extra Story outfit from edition** | First-party edition-specific [C21] | Check owned edition/wardrobe; standard vs Special/Ultimate differ. Online “Bonus Outfits” not Story Mode assets. |
| **Hygiene social reaction** | Strong secondary reports, exact hard service refusal uncertain [C12/C14] | Clean when easy; don't call bath a core-restoration item or claim all merchants refuse dirty customers. |
| **Changing appearance to reset crime** | **Disputed/unsafe** [C16–C19] | No guarantee; follow actual law HUD/D13 and favor lawful disengagement. |
| **Story mission forces outfit** | Normal mission/UI state can control costume, save and prompts; details mission-specific | Mission Control guide supersedes general wardrobe advice during mission. |
| **Cosmetic trinkets/gear slots** | Passive effect corroborated [C20/C22] | Acquisition matters; visible wear does not prove mechanical enabling/disabling. |
| **Patch-specific mask/witness bugs** | Rockstar Update 1.03 specifically fixed “Wanted after removing mask when complying” and witness cases, PS4/Xbox One [C23] | Do not infer every later PC/console build has identical witness timing, or prescribe a mask trick. |
| **Modded outfits/custom outfit slots** | Online-specific updates and current mods have divergent features [C24] | Exclude nonvanilla and Online systems entirely. |

**T2/T3 policy:** edition-exclusive wardrobe options can be named generically; no later-story characters, mission twists, location spoilers or special story outfit outcomes included here. Future chapter availability is player-specific/UNKNOWN.

---

## 5. Typed provisional dependencies and boundaries

| From → To | Relationship | Rule / proof / authority |
|---|---|---|
| `S02.M03 → S03.M01` | `INTERACTS_WITH` | Outfit choice controls environmental Health Core suitability [C01/C02]; not an unlock. |
| `S02.M03 → S07.M02` | `INTERACTS_WITH` | Traversal route exposes climate; **D11** owns routes and travel availability, **D10** owns clothing. |
| `S02.M03 → S01.M01` | `INTERACTS_WITH` | Inappropriate clothing speeds Health Core drain; D09 owns core recovery mechanics [C01]. |
| `S03.M01 → S06.M03/M04` | `INTERACTS_WITH` | Worn vs stored outfits on saddle/horse; D01 owns horse identity/cargo behavior [C07/C11]. |
| `S03.M01 → U01` | `REQUIRES (conditional on upgraded saddlebag service only)` | Normal accessible stable introduction to buy tack; **NOT** prerequisite for every basic clothing change [C08]. |
| `S03.M01 → S17.M02` | `INTERACTS_WITH` | Wardrobe pieces have cash costs; D02 camp cash is not necessarily wardrobe money [C05]. |
| `S03.M01 → S13.M03` | `INTERACTS_WITH` | Trapper purchase requiring materials [C05]; D17 owns recipes. |
| `S03.M02 → S25.M02` | `INTERACTS_WITH` | Hotel baths/barber town services; D14 owns broader venue catalog [C12/C15]. |
| `S03.M03 → S05.M02` | `INTERACTS_WITH` | Face covering limited witness identity effect, **D13 law** governs pursuit and bounty [C16–C19]. |
| `S03.M03 → U05` | `INTERACTS_WITH` **(not global REQUIRES)** | Mask purchasing may use Fences, but Seamus wagon-fence intro is not a universal all-mask gate [C16]. |
| `S03.M04 → S13.M04` | `INTERACTS_WITH` | Talisman effects passive after acquisition; Fence ingredient sourcing belongs D17 [C20–C22]. |
| `S03.M01 → S29.M01` | `NONE for owning all clothes` | Official 100% checklist has **no purchase-all-clothing** requirement [C25]. |
| `S03.M04 → S26.M05` | `INTERACTS_WITH` | Reinforced challenge gear can give gameplay benefits; **not** all “special outfit look” becomes a core stat [C22/C25]. |

**Vocabulary not ratified:** `INTERACTS_WITH` and `REQUIRES` are proposed typed edge examples per Atlas schema; the conditional wording is part of this research, not a schema edit. D11 and D13 on main are **RESEARCHED — REVIEW PENDING**, and must not become live unreviewed automation rules.

---

## 6. Precise completion-tag relevance

| Goal tag | Source-backed criterion | D10 implication |
|---|---|---|
| `OFFICIAL_100` | PowerPyx/GTA Base transcriptions of **Pause → Progress → Total Completion**: five categories and exact subsets; **no “buy all coats/outfits” checkbox** [C25] | **Not necessary** to purchase/save every wardrobe item for official 100%; don't invent clothing completion percentage. |
| `OFFICIAL_100 / COMPENDIUM EQUIPMENT` | Discover **10 equipment pieces**; a narrow Compendium-type subset, *not* “own every coat” [C25] | Do not interpret trinket/talisman display as guaranteed category credit; inspect tracker and correct equipment definition. |
| `OFFICIAL_100 / CHALLENGES` | Complete nine challenge strands; reinforced equipment rewards may be relevant but requirements owned by D27 [C25] | A story outfit is not a stand-in for active challenge rank completion. |
| `ALL_GOLD` | Mission-specific medals only; outfit changes may be scripted but **no independent wardrobe-Gold completion counter** [C25] | Follow Mission Control objectives; not a mission checklist or saved medal report. |
| `ACHIEVEMENT` | Fashion/wardrobe is not assumed to be a separate “own all outfits” Story Mode trophy; edition item ownership is distinct [C21/C25] | Only exact named trophy criterion if independently established; no proposed unlock. |
| `OPTIONAL_EXHAUSTIVE / IMMERSION` | Collector may choose catalogue, hats, weather sets, all looks | Player preference, not official 100%; no need to force criminal or chapter-inaccessible shopping. |

**Separate wrong-game trap:** Some RDR1 completion guides require particular outfits; their `Red Dead Redemption` (2010) goal list **is not** proof for RDR2 [C25]. Red Dead Online seasonal outfits/role unlocks also cannot be used as Story Mode requirements [C24].

---

## 7. Three common mistakes and three organic Chapter 2 examples

**Mistake 1: “Any visibly thick coat guarantees cold protection, and all warmth points map to one precise weather degree.”** Not supported. Use the **equipped full outfit's in-game suitability** and current condition; community warmth guide offers estimates only [C01–C03].

**Mistake 2: “Once I buy/save a look, I can change into it anywhere; if it vanishes from wheel, it's gone forever.”** Wardrobe ownership, saved configuration and *Horse Wheel storage* are distinct. UI capacity/current-custom slots vary. Inspect wardrobe restow before assuming purchase loss [C05–C10].

**Mistake 3: “Covering face, changing coat or barber visit guarantees no lawmen recognize Arthur, or fixes a bounty.”** Refuted as guarantee. Law officers can identify a masked Arthur; no confirmed outfit/horse/hair reset formula; law/Honor/posted debt belong to D13 [C16–C19/C23].

### Chapter 2 example A — “We're going from Valentine toward the hills. What clothes should I pack?”

**Player status:** location and wardrobe inventory **UNKNOWN**.  
**One observation:** “Does your **Wardrobe → Outfits** show a cold-suitable set, and is it *Stored on Horse*?”  
**Conditional guide:** If so, confirm the actual Horse Wheel entry by main horse before departing; keep a hot/average set for town return if capacity allows. If there is no cold set in wardrobe or stow slots, do not claim it owned: check available local catalogue/items only if desired, or shorten/redirect outing until properly outfitted. D11 owns route/weather/time, not this clothing dossier.  
**What confirms success:** in-game worn outfit suitability matches environment, Health Core no longer flagged for exposure; **not** a new save/progress flag.

### Chapter 2 example B — “I bought a jacket in Valentine but can't change into it while riding.”

**Player status:** purchase confirmation, saved set, horse identity **UNKNOWN**.  
**One observation:** “Does the jacket show as **Owned** in a wardrobe, and is the complete outfit marked **Stored on Horse**?”  
**Conditional guide:** If owned, open camp/accessible wardrobe and equip jacket among individual pieces, inspect overall hot/average/cold label, save custom look, then explicitly `Store on Horse`. Near main saddled horse, open Horse Wheel and select it. If the full list doesn't fit, inspect saddlebag/current custom slot, not destroy earlier saved outfits.  
**What confirms success:** actual saved outfit displayed in Horse Wheel and visual swap; no claim every outfit must be purchased.

### Chapter 2 example C — “I want High Honor. If I put on a mask in Valentine, am I safe if a witness sees me?”

**Player status:** mask owned/equipped, actual crime, Wanted status and Honor **UNKNOWN**.  
**One observation:** “Is this a hypothetical question, or is there currently a **witness/Wanted** message? If active, what exact label appears?”  
**Conditional guide:** For a hypothetical, clearly state **no mask lawman immunity** and avoid starting the offense; High Honor alternative is not provoking/threatening civilians. If an actual witness incident already exists, favor holstering/disengaging and checking witness/investigation/named status, with **D13** directing legal response and any post-office bounty. **Do not** suggest instant coat swap, barber haircut or changing mount as a verified anonymity mechanic.  
**What confirms success:** visible Wanted/witness status after exiting scene; **not** automatic loss of bounty or restoration of Honor.

Each scenario is optional, noncompulsory, T0/T1 and depends on the real player's current observable state. These are guides, **not** a campaign, cash, equipment or save ledger.

---

## 8. Claim-level source and evidence register

**Every source below checked 2026-10-17.** The separate **source publication/update date** is noted where shown; otherwise “undated” means the site's publication date was not independently established. **HIGH** = first-party Rockstar or reproduced game Help plus independent corroboration; **MEDIUM** = compatible specialist sources; **LOW / DISPUTED** = isolated anecdote or conflicting measurement. A Rockstar edition announcement is first-party for its exact edition claim only; a community measurement is never given official status by repetition.

| Claim | Narrow, independently assessable assertion | Exact source URLs · source date | Evidence classification / confidence |
|---|---|---|---|
| **C01** | Unsuitable hot/cold clothing accelerates **Health Core** drain, change clothes at camp/hotel/tailor/horse. | [PowerPyx — FAQ / in-game Help Outfits](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) · **2018-10-25**; [RDR2.org clothing wiki](https://www.rdr2.org/wiki/clothing-outfits/) · **2018-10-26**, updated **2023-01-09** | **CORROBORATED / HIGH**, PowerPyx explicitly reproduces Pause/Help; not own in-game capture |
| **C02** | Outfits differ in weather suitability, individual layers and climate exposure interact. | [RDR2.org — All Outfits Guide](https://www.rdr2.org/guides/red-dead-redemption-2-all-outfits-guide/) · **2018-11-16**, updated **2023-01-09**; [PowerPyx FAQ](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) · 2018 | **CORROBORATED / HIGH** broad; no fixed temperature number |
| **C03** | Unofficial total warmth points and rough degrees: hot 0–2, average 3, cold ≥4; some catalog display values vary and scarf may not work as described. | [Steam Community — Zesty Outfit Warmth](https://steamcommunity.com/sharedfiles/filedetails?id=1983178502) · first **2020-01-29**, subsequently updated in 2024–2026; [Red Dead Wiki weather](https://reddead.fandom.com/wiki/Weather_in_Redemption_2) · undated | **SINGLE/COMMUNITY MODEL / MEDIUM** qualitative, **LOW** for universal thresholds/build-specific stat; exclude Online garments |
| **C04** | Weather/core advice requires travel route and actual status; no guarantee sleep changes weather or all core recovery follows wardrobe swap. | [PowerPyx FAQ Health Cores/Outfits](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) · 2018; [D11 Travel on main](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d11_travel_wilderness_camps_v0_1.md) · research **2026-10-17** | **HIGH** exposure concept; “no promise” is safety boundary; D11 **REVIEW PENDING** |
| **C05** | Clothing from general stores/tailors and Trapper requires actual catalogue/menu; individual pieces can be combined; wardrobe in camp/hotel. | [PowerPyx — All Outfits Clothing Showcase](https://www.powerpyx.com/red-dead-redemption-2-all-outfits-clothing-showcase/) · **2018-10-25**; [RDR2.org — All Outfits Guide](https://www.rdr2.org/guides/red-dead-redemption-2-all-outfits-guide/) · 2018/2023 | **CORROBORATED / HIGH** for methods, not claimed player holdings |
| **C06** | Catalogue varies by town, Story/Honor/region, different editions; outfit catalog lists may not be same across platform/patch. | [PowerPyx outfit showcase](https://www.powerpyx.com/red-dead-redemption-2-all-outfits-clothing-showcase/) · 2018; [RDR2.org All Outfits](https://www.rdr2.org/guides/red-dead-redemption-2-all-outfits-guide/) · 2018/2023 | **CORROBORATED / MEDIUM–HIGH**; avoid total inventory counts as universal |
| **C07** | Wardrobe `Save` and `Store on Horse` is separate from Horse Wheel selection; standard console steps. | [Gosunoob — How to Change Outfits from Horse](https://www.gosunoob.com/red-dead-redemption-2/how-to-change-outfits-from-horse/) · updated **2018-10-29**; [GameFAQs — Switch Outfits Stored on Horse](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/77140957) · **2018** | **CORROBORATED / HIGH** Story Mode broad interaction |
| **C08** | Basic horse often lists 3 carried outfits, upgraded saddlebags commonly increase to 5; exact current/custom split can differ. | [GameFAQs PS4 Q&A — More than 3 on horse?](https://gamefaqs.gamespot.com/ps4/200179-red-dead-redemption-2/answers/502939-is-there-a-way-to-store-more-than-3-outfits-on-the-horse) · **2018**; [GameFAQs — maximum carried outfits](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/77179742) · **2018** | **COMMUNITY CORROBORATED / MEDIUM**, exact split **DISPUTED** |
| **C09** | Wearing a changed hat produces `Custom Outfit` and can displace a stored slot; Story Mode anecdotes report slot and glitch issues. | [GameFAQs — max outfits](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/77179742) · 2018; [Reddit Story Mode outfit storage glitch](https://www.reddit.com/r/reddeadredemption/comments/ffdwle) · **2020-03-08** | **DISPUTED / LOW–MEDIUM** for edge; safe fallback restow and verify |
| **C10** | Upgraded vs weathered saddlebags and current/saved slot count anomalous in some Story Mode versions; don't assume five stored *custom* slots. | [Reddit Story Mode upgraded saddlebag Q&A](https://www.reddit.com/r/reddeadredemption2/comments/10b397b) · **2023-01-13–19**; [GameFAQs Story Mode outfit saving](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/79287175) · **2021** | **COMMUNITY / DISPUTED**, in-game label wins |
| **C11** | Arthur's **own hat** recoverable via Horse Wheel near/on horse; control options vary. | [Rockstar Games — RDR2 Quick Tips](https://www.rockstargames.com/newswire/article/25o2411817k8k7/Red-Dead-Redemption-2-Quick-Tips) · **2018-11-05** | **OFFICIAL / HIGH** narrow; no extension to unique NPC hats |
| **C12** | Dirt prompts NPC/social reactions; bath at Story Mode hotel, deluxe optional; some guides assert shopkeepers refuse very dirty Arthur. | [RDR2.org — Shaving & Hygiene Guide](https://www.rdr2.org/guides/shaving-hygiene-guide/) · **2019-01-07**, updated **2023-01-09**; [RDR2.org general wiki](https://www.rdr2.org/wiki/red-dead-redemption-2/) · **2018** | **MEDIUM** reactions, **LOW** blanket vendor-refusal guarantee |
| **C13** | River water, bath, haircut and beard shave are distinct actions, hair grows over time. | [RDR2.org — Hygiene](https://www.rdr2.org/guides/shaving-hygiene-guide/) · 2019/2023; [Red Dead Wiki — Maintaining Arthur](https://reddead.fandom.com/wiki/Red_Dead_Redemption_2) · undated | **CORROBORATED / MEDIUM–HIGH** broad |
| **C14** | Bathing is primarily appearance and NPC dialogue; no established immediate Health Core or legal immunity bonus. | [RDR2.org — Hygiene](https://www.rdr2.org/guides/shaving-hygiene-guide/) · 2019/2023; [PowerPyx FAQ](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) · 2018 | **MEDIUM for limited purpose**, **UNKNOWN** exact hidden modifiers |
| **C15** | Barbers depend on existing hair length; Hair Tonic sold at stores and accelerates growth, exact stack/timing not safely universal. | [PowerPyx — Where to Get Hair Tonic](https://www.powerpyx.com/red-dead-redemption-2-where-to-get-hair-tonic/) · **2018-11-02**; [RDR2.org — Shaving/Hygiene](https://www.rdr2.org/guides/shaving-hygiene-guide/) · 2019/2023 | **CORROBORATED / MEDIUM–HIGH** general, timing/stack **LOW** |
| **C16** | Basic bandana/item wheel, masks at some Fences, special masks can replace hat; not all Story Mode masks globally available. | [GameRevolution — RDR2 Masks](https://www.gamerevolution.com/guides/451789-red-dead-redemption-2-masks-how-to-use-them) · **2019-11-04**; [PowerPyx FAQ Crime tutorial](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) · 2018 | **CORROBORATED / MEDIUM** normal guide; variable shop/menu gate |
| **C17** | Civilian masking may impede identity, but lawmen can recognize Arthur on sight; witness-report stages separate. | [RDR2.org Wanted System](https://www.rdr2.org/wiki/wanted-system/) · **2018-11-02**, updated **2023-01-09**; [GameRevolution Masks](https://www.gamerevolution.com/guides/451789-red-dead-redemption-2-masks-how-to-use-them) · 2019; [D13 Law read-only](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d13_law_honor_robbery_v0_1.md) · 2026-10-17 | **CORROBORATED / HIGH** broad no-immunity, no tested formula; D13 **REVIEW PENDING** |
| **C18** | A mask/hat/coat cannot be assumed to cancel a current bounty or prevent Honor consequences. | [PowerPyx Crime Help](https://www.powerpyx.com/red-dead-redemption-2-faq-tips-tricks/) · 2018; [D13 Law](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d13_law_honor_robbery_v0_1.md) · 2026-10-17 | **HIGH** caution, Honor/bounty primary to D13 |
| **C19** | “Change outfit and horse after crime” claimed by 2019 guide; contrary player trials dispute hair/horse/outfit effects; no official recognition algorithm. | [GameRevolution Masks](https://www.gamerevolution.com/guides/451789-red-dead-redemption-2-masks-how-to-use-them) · 2019; [Reddit recognition question](https://www.reddit.com/r/reddeadredemption/comments/1c6q6o4) · **2024-04**; [D13 contradiction register](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d13_law_honor_robbery_v0_1.md) · 2026-10-17 | **DISPUTED / LOW** as tactical guarantee |
| **C20** | Acquired trinkets/talismans grant **passive** effects; showing talisman is cosmetic, not a requirement to activate. | [PowerPyx — How to Get Talismans](https://www.powerpyx.com/red-dead-redemption-2-how-to-get-talismans/) · **2018-10-28**; [GameSpot — Perks Guide](https://www.gamespot.com/articles/red-dead-2-perks-guide-talismans-trinkets-and-ever/1100-6462837/) · **2018** | **CORROBORATED / HIGH** Story Mode general |
| **C21** | Nuevo Paraiso Gunslinger and some talisman bonuses are **Special/Ultimate Story Mode** entitlements, Ultimate's Blackrose/Copperhead outfits are **Online** bonuses. | [Rockstar Games — Special/Ultimate Editions](https://www.rockstargames.com/newswire/article/9k1248838o1892/The-Red-Dead-Redemption-2-Special-Edition-Ultimate-Edition-and-Collect) · **2018-06-04** | **OFFICIAL / HIGH**, edition-specific |
| **C22** | Wardrobe visible talisman slot vs permanent perk; appearance slot effects not a global fashion-stat system. | [RDR2.org — Trinkets Talismans Perks Guide](https://www.rdr2.org/guides/trinkets-talismans-perks-guide/) · 2018/updated; [GameSpot Perks](https://www.gamespot.com/articles/red-dead-2-perks-guide-talismans-trinkets-and-ever/1100-6462837/) · 2018 | **CORROBORATED / HIGH** passive, no claim every wearable has perk |
| **C23** | Rockstar Update 1.03 fixed mask-removal-compliance wrongful Wanted and several witness issues in original PS4/Xbox One release. | [Rockstar Support — Title Update 1.03](https://support.rockstargames.com/articles/MCIMvsDlmF0yzh3oTSiip/red-dead-redemption-2-title-update-1-03-notes-ps4-xbox-one) · early PS4/Xbox One patch, page date not established | **OFFICIAL / HIGH** patch-specific only; **cannot** establish universal recognition formula |
| **C24** | Rockstar later added named/more custom outfits under **Red Dead Online**, not automatic Story Mode wardrobe expansion. | [Rockstar Newswire — Online Update September 10](https://www.rockstargames.com/newswire/article/ak14o883893919/Red-Dead-Online-Update-Coming-September-10) · **2019** | **OFFICIAL / HIGH** mode distinction, negative evidence for Story claims |
| **C25** | Official RDR2 100% checklist has exact subset goals; no complete wardrobe requirement, equipment criterion is 10 discoveries, nine challenge strands separate. | [PowerPyx — 100% Guide](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) · **2018-10-25**; [GTA Base — 100% Checklist](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist) · publication date unverified | **CORROBORATED / HIGH** independent checklist, not live player credit |

**First-party scope summary:** C11 hat recovery, C21 edition partition, C23 patch fixes, C24 Online-only expansion are directly documented by Rockstar; C01 uses a **secondary transcription of the in-game Help**. No accessible first-party primary gameplay/manual statement independently verifies numeric weather cutoffs or the full appearance-based crime-recognition formula; those are explicitly **not asserted**.

---

## 9. Contradictions, myths, unknowns and safe observations

| Competing claims | Evidence | Research position | Non-destructive check |
|---|---|---|---|
| **Weather is purely cosmetic** vs faster core drain | Game Help transcription C01 and RDR2.org C02 | **FALSE**: unsuitable clothing can drain Health Core faster | Observe outfit suitability and core/warning on ordinary route, without intentionally endangering Arthur |
| **Exact 70°F / 50°F threshold** vs actual wardrobe category | Steam reverse-engineering C03 only; potential wrong Online item lists | **NOT ADOPTED** exact trigger: use actual category/Player status | Compare wardrobe label and ambient HUD during normal exploration |
| **Five custom saved outfits** vs **three custom + worn temporary** vs **upgraded carries five** | GameFAQs, Reddit C08–C10 conflict | **DISPUTED** current vs stored, saved slots and bag variant. Strongest consistent broad rule: upgrade expands Horse Wheel capacity | Inspect wardrobe `saved/limit`, `stored on horse`, saddlebag equipment name and wheel list; no deletion or overwrite of valued look |
| **All purchased clothes accessible anywhere** vs `Store on Horse` | Gosunoob C07, Rockstar hat C11 | **FALSE** for remote outfit swapping; only carried/stored subset is accessible | Restow intended look, check wheel before journey |
| **Dropped hats permanently lost** vs Rockstar personal hat recovery | Rockstar C11 | Standard Arthur hat recovery **CONFIRMED**; special picked-up hats case dependent | Open wheel by saddled horse; avoid treating random NPC hat as safely archived |
| **Being dirty universally blocks every clerk** vs flavor reactions | RDR2.org C12–C14 says refuse service, but general corroboration limited | **LOW certainty** universal refusal; prioritize actual clerk message | If denied, wash/bathe/change and retry in ordinary context without staging crime |
| **Bath grants Health Core or erases bounty** | No suitable primary evidence found; hygiene guides emphasize cleanliness | **UNKNOWN / unsupported**; bath mainly visual/social | Observe before/after Core/Map if naturally bathing; don't claim upgrade |
| **Barber can select any maximum length immediately** | Tonic and growth guides C15 | **FALSE** as normal barber operation; growth over time | View existing hair length and available barber styles |
| **Mask erases identification against all witnesses/officers** | Secondary legal guides and D13 C17 | **FALSE as guarantee**; lawmen can identify masked Arthur | Observe HUD in naturally occurring event; no self-inflicted wanted test on campaign |
| **Changing coat/hat/horse/hair guarantees reset after crime** | GameRevolution claims special effect; D13 and player testing conflict C19 | **DISPUTED** recognition implementation; do not claim reset or recommend illegal testing | Require isolated controlled test with independent saves/consent if later assigned; not in normal live play |
| **All editions have same outfits** | Rockstar C21 | **FALSE** Story bonus outfit differs; Online-exclusive bonuses separate | Check edition entitlements and wardrobe; do not mark missing premium outfit as lost |
| **You must visibly wear talisman for benefit** | PowerPyx, GameSpot C20/C22 | **FALSE** after actual acquisition, passive | Check item acquired/inventory and wardrobe display without spending additional materials |
| **RDR1/Online wardrobe numbers and outfit requirement apply to RDR2 Story** | Rockstar Online C24; RDR2 completion C25 | **FALSE game-mode conflation** | Confirm Story Mode menus and exact RDR2 100% tracker |

**Observed ≠ universal:** A screenshot from one save showing `5 outfits`, a temperature warning, a dirty NPC dialogue, `Unknown Suspect`, or a named Wanted state establishes only that *specific observation*. It does not prove that the user owns a jacket in a different save, that every store rejects dirt, that hidden warmth is universal across builds, or that changing a hat anonymizes crimes. User actual inventory, current look, satchel gear, Horse Wheel, Honor, criminal status, mission state and save state are all **UNKNOWN** in this research.

**Evidence gaps worth retaining:** direct current PC console-Help capture, threshold/model validation in **unmodded Story** only, upgraded-vs-weathered saddlebag slot count, exactly which dirt dialogues gate trade, appearance recognition independent variable tests. No image, game save or user gameplay was inspected in this task.

---

## 10. Exact read-only GameGuide, Free Roam and Adaptive Companion handoff

**Input authority:** latest original `L33TW0RLD/rdr2/campaign/` and specific player screenshot/report (if supplied). RDR2 Hub research has **no independent campaign progress authority**. Wave 1 D01/D06, Wave 2 D11/D13 and other dossiers remain **RESEARCHED — REVIEW PENDING**, not adopted merely by branch merge.

**Consumer response procedure:**

1. **Identify user intent:** thermal safety, cosmetic fashion, missing horse outfit, barber/bath, law/identity, talisman effect.
2. **Read one relevant observation** only: wardrobe weather label, Horse Wheel saved set, current dirt/bath prompt, mask-equipped state or Wanted wording. Ask directly *only when* a missing fact changes safety or next action; otherwise give conditional rule.
3. **Return a compact conditional:** rule + relevant gate + one low-risk reversible step + irreversible/cost warning + verification. Example: “If the wardrobe shows a cold-suitable outfit, mark *Store on Horse* and check Horse Wheel; if not available, avoid extended cold outing.”
4. **Mission takeover:** if a Gold medal task/story stage is active, route to complete authoritative Mission Control Field Guide; generic clothing guidance does **not** change mission wardrobe, timing or replay behavior.
5. **Free Roam:** an optional clothing-focused preparation at camp/Valentine or a scenic short outing fits user interest; do not force buying luxury outfits, acquiring masks, deliberate crime or compulsive wardrobe “completion”.
6. **Law query:** D10 explains mask appearance and physical equip, but only **D13** owns witness identification, Wanted, Honor, surrender, personal bounty. Never invent crime/witness result based on attire.
7. **No state write:** interface response never edits `campaign/`, awards clothes, saves an outfit, updates 100%, edits a bounty or certifies a physical purchase. Feedback from player/screenshots may be relayed to GameGuide for evidence adjudication.

**Proposed stateless interface fields** (illustrative content contract only, no code/schema change): `{mechanic_id, applicability, gate_rule, player_observation_or_UNKNOWN, in_game_check, evidence_claim_ids, cost_or_irreversibility, disputed_flag, spoiler_tier, return_context}`. Do not persist `owned_coat`, `stored_outfits`, `current_temperature`, `bounty`, `saved_game`, `current_honor` in Atlas.

**D11 crosslink:** traveller determines actual route, passage of time, transportation and wilderness camp, D10 determines outfit exposure. **D13 crosslink:** face covering is only one visual input to witness identity; no outfit advice may override law evidence. Both cited as *read-only provisional*.

---

## 11. Next bounded research questions and owner review request

1. **Review exact mechanical exposure:** compare in-game Story Mode weather warnings with **wardrobe suitability** on PS4/Xbox/PC where screenshots naturally occur. Verify whether any PC build displays reliable exact temperature while walking; no forced hazardous exposure.
2. **Review wearable layering:** can a coat, gloves and vest alter category independently? Steam warmth taxonomy is a candidate **test hypothesis**, not already confirmed game formula. Avoid Online-only gloves and modded weather “balance”.
3. **Review outfit slots:** on one consenting disposable Story Mode save, compare standard/upgraded/weathered saddlebags, `Custom Outfit`, named Saved Outfit entries and Horse Wheel after wardrobe swap; preserve existing saved looks. Need source-backed actual limit before finalizing 3→5 as a hard constant.
4. **Review cleanliness:** player reports of shop refusal while dirty should include precise NPC words, HUD, clothing state and before/after bath, avoiding broad effect claims.
5. **Review witness recognition myths:** in a separately authorized noncanonical, isolated test only, vary **mask**, **coat**, **hair**, **horse** one at a time, with same law/witness conditions. No law exploit “recipe” or implied High Honor path. D13 remains primary for consequences.
6. **Review equipment cosmetic distinction:** reconfirm talisman visibility/inventory source when actual talismans acquired; no forced unique ingredient spend, D17 retains recipes.
7. **Owner review gate:** approve or retain D10 at `RESEARCHED — REVIEW PENDING`, with explicit disputed recognition/outfit count flags and provisional IDs. Coordinator (not this specialist) owns all schema/index/manifest/registry changes and any PR/integration decision.

**Acceptance verification checklist:** one full 11-section source-backed dossier; temperature/cores; purchases/wardrobe/horse storage; bath/barber/tonic; masks/bandanas with law/civilian limitation; passive versus visible equipment; conditional U00/U01/U05; platform/mode/edition exceptions; exact official 100% boundary; 3 spoiler-light Chapter 2 examples; claim-specific C01–C25 source ledger and contradictions; read-only D11/D13 and original GameGuide handoff; no invented player status.

**Final status requested for this task:** `DELIVERED_REVIEW_PENDING` after GitHub branch/readback and three-file scope compare. This research does not ratify, merge, edit original RDR2 campaign or authorize another task.
