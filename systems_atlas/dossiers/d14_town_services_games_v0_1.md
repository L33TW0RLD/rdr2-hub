# D14 — Town services, shops, social venues and four table games (Story Mode)

**Record:** ATLAS.D14 · **Version:** v0.1 · **Kind:** mechanic dossier · **Task:** [atlas-towns-029 / Issue #38](https://github.com/L33TW0RLD/rdr2-hub/issues/38)  
**Maturity:** **RESEARCHED — REVIEW PENDING** (`RESEARCHED_REVIEW_PENDING`), **not ADOPTED**. **Source check:** 2026-10-17 (a research-check date, **not** a game patch).  
**Mode/platform:** Original and updated **Red Dead Redemption 2 Story Mode** on PS4/Xbox One, PC and compatible console versions where mechanics independently support comparison. Do **not** import Red Dead Online roles, handheld catalogue, rank locks, real-money tokens, modded shops, or RDR1 vendor mechanics. Exact keys/buttons depend on keyboard bindings, Xbox/PlayStation layout and contextual screen prompts.  
**Default spoiler budget:** T0 generally usable mechanics; T1 optional Chapter 2 access/intro. Later region/story/epilogue venue details are T2 and **not** recommendations or implied live access.  
**Primary proposed taxonomy leaves:** `S25.M01` Four Table Games; `S25.M02` Town Amenities; `S25.M03` Shows/Theatre/Print; `S25.M04` Photography/Visual Leisure **interface only, D28 owner**; `S25.M05` Ranters, Ravers, Campaigners and Town Social Life. IDs/edges are **provisional, not ratified**. D14 owns venue and minigame *usage*, not other specialists' mechanisms.  
**Read-only dependencies:** D02 camp Ledger (Wave 1); D11 travel (Wave 2); D12 food/cooking (Wave 2); D13 Law/Honor (Wave 2); D15 Compendium/Total Completion (Wave 2); D20 collections/postal hand-in (Wave 3); D27 sequential challenges (Wave 3). All on `main` as **RESEARCHED — REVIEW PENDING, not ADOPTED**. Also consult D01 horse, D10 clothes, D17 Trapper rewards, D19 bounty work as boundaries; D19 may still be under parallel Wave 4 research. This file edits none of them.

> **Central service rule:** **A shop exists** ≠ **shop is accessible now** ≠ **item is offered** ≠ **item is purchased** ≠ **item is in inventory / already used**. A **game table** ≠ **game participated** ≠ **match won** ≠ **currently active Gambler rank credited** ≠ **official Total Completion checkmark**. Ask for the actual on-screen menu, receipt and tracker.

### Compact service decision matrix

| Intended task | Actual destination / menu | What counts as performed | What DOES NOT count | Evidence |
|---|---|---|---|---|
| Stock up on ordinary food/consumables/clothing | General Store `Catalogue` / item shelf | Paid purchase with item in Satchel/Wardrobe, or another visible receipt | Enter shop, open catalogue, inspect price | T02/T03 |
| Buy/modify/clean a weapon | Gunsmith `Catalogue` / `Customize` / `Clean` | Specific weapon/component paid/updated; cleanliness feedback | Buying gun oil but not using it; merely previewing components | T01/T04 |
| Restore health supplies | Doctor `Catalogue` | Exact tonic/horse supply purchased and held | Doctor storefront itself healing Arthur automatically | T02/T03 |
| Acquire/stable horse, gear, care goods | Stable horse/equipment/care interface | Animal or tack genuinely acquired and confirmed; care service actually applied | Marker visible; U01 lesson assumed complete | T05, D01 |
| Wash or sleep | Hotel / lodging `Bath` vs `Rent Room` | Bath occurred or rest screen used; two separate actions | Buying room = bathing; being in saloon = hotel | T06/T07 |
| Buy outfit/haircut | Tailor / store wardrobe vs Barber | Garment owned/equipped or real haircut confirmed | Preview outfit / shaved look = crime disguise | T08, D10/D13 |
| Sell ordinary meat/pelt | Butcher or eligible vendor | Sale receipt/item transferred | Pearson donation, Trapper bank or mail credit | T03/T09 |
| Sell pelt for special garment | **Trapper**, `Sell` → `Buy` craft item | Proper material accepted, recipe requirement fulfilled, garment bought | Pelt automatically reaching Fence or Pearson; handing it to Trapper already bought garment | T10/T11 |
| Sell eligible valuables / talisman craft | General **Fence** item menu; special wagon/horse vendor as separately gated | Specific item sale or talisman manufacture confirmed | Fence location = every Fence type unlocked; legendary pelt transferred as a talisman part | T12/T13, D13 |
| Mail coordinates/sets/fish, collect rewards | Post Office `Send Mail` / `Receive Mail` | Valid outgoing item/coordinate sent, inbox/reward separately claimed | Discovering a collection = mailed/delivered/rewarded | T14, D20 |
| Pay Arthur's own bounty | Post Office `Pay Bounty` | Specific state amount deducted, map debt changed | Receiving sheriff NPC poster; Wanted search ended | T14/T15, D13 |
| Ride train/coach | Station ticket / stagecoach transport desk | Ticket purchased and service actually used | Office sign = destination accessible; same thing as robbed coach | T14, D11/D13 |
| Gamble/play | Table marker, vacant chair/opponent | Game join/play interaction, check Total Completion | Four seatings all at one type = four game types | T16/T17 |
| Watch picture/play | Cinema/lantern show vs live theatre | Ticket/performance consumed and tracker credited | Simply entering another saloon, paying for a bath | T18/T19 |
| Talk with special street character | Town/road ranter, raver, campaigner | Distinct qualifying interaction, observe Misc counter | Arbitrary five greetings or any five NPCs | T18/T19 |

---

## 1. Definitions and player interaction — what town services actually do

### 1A. Buying, using, unlocking, routing: five independent verbs

1. **Discover** place: spot sign/map icon or walk inside. Does not prove operator available or any prerequisite completed.
2. **Browse**: catalogue, stable, tailoring, weapon customization, postal or show ticket menu; a *preview* is not money spent or item acquired.
3. **Purchase / pay**: specific debit accepted by UI, possibly discount or other conditions, with recipient identified (Arthur's funds vs D02 gang fund). Do not copy 2018 item prices into a permanent current wallet ledger.
4. **Receive / equip / use / deliver**: bought tonic is in Satchel but not consumed; bought gun oil is not yet a cleaned gun; acquired clothing is not necessarily currently worn or stored on the horse; mailed card set is not reward receipt; bought rail ticket is not proof travel completed.
5. **Record actual goal:** Progress → Total Completion / Challenges / social achievement/platform tracker requires its **own** checkmark or observed event. Never credit from intent, a Hub checklist, an atlas reference, or an unreproduced walkthrough. [T01–T03,T16–T19]

### 1B. Shops and amenities — service-by-service catalogue

| Type | What Arthur can normally interact with (Story Mode) | Payment / gate / specificity | Receipt and safe caution |
|---|---|---|---|
| **General Store** | Food provisions, tobacco, some tonics and common survival goods, occasional ammunition/bait, clothing via catalogue; **Premium Cigarettes** can yield card items (D20) | Shop-specific inventory and town/story availability; product variants, Honor discounts or edition effects may modify displayed quote [T02/T03] | Confirm exact physical item or Wardrobe entry; pack purchase does **not** guarantee desired card, and browsing is not buying |
| **Gunsmith** | Buy certain sidearms/long guns/ammunition/gun oil/equipment; maintain/clean/customize owned weapons, inspect part and cosmetic variants [T01/T04] | Weapon can be story- or catalogue-gated; each component/cleaning action has its own menu, cost and proof | `Locked and Loaded` counts **each available component on ONE gun**, not mere purchase or cosmetic preview; cannot assume every rifle offered [T20] |
| **Doctor** | Purchase restorative tonics, stimulants, tobacco/medical provisions, horse remedies depending current shelf [T03] | Actual doctor shop and stock; no reason to assert doctor NPC runs a free, guaranteed healing service | Buying Health Cure = carrying it; actual Health/Core restoration belongs D09, use menu/item effect |
| **Stable** | Sell/buy eligible horses, swap/manage stabled horses, purchase saddles/stirrups/horse provisions and reviver, horse appearance/care services [T05] | **U01** normal Chapter 2 stable intro after Hosea's `Exit Pursued by a Bruised Ego`; current completion UNKNOWN; stable-specific horse list, actual funds and availability | Selling a horse, buying tack, stable service and horse bond are distinct; no guarantee temporary horse/pelts transfer. D01 is primary |
| **Hotel / rented room** | Rent a room, sleep/pass time, sometimes use wardrobe, pay for bath (ordinary or enhanced where offered) [T06/T07] | The hotel-branded buildings in early lists are **not exhaustive**: certain saloons/other counters rent beds or baths; actual interaction prompt wins | **Bath** and **room** are separate expenses and Total Completion actions; renting room does not automatically tick `Bath` |
| **Barber** | Paid beard/hair styling using available length and service choices [T08] | Look for barber chair/operator; hair growth time/tonic and styling gate from D10, not D14 | Haircut is not guaranteed witness recognition reset or honor/stat improvement |
| **Tailor / clothing catalogue** | Buy garments and named outfit options; wardrobe allows mixing, changing and preparing carried horse outfits [T08] | Store/town/wardrobe item/edition conditions, discounts; D10 handles environmental outfit suitability | Owned piece ≠ currently dressed or stored on horse; a tailor visit is **not** required for official 100% |
| **Butcher** | Buy/sell eligible ordinary animal carcasses, meat and skins where offered [T03/T09] | The animal form and current quality/seller acceptance matter; D04/D06 primary for skin versus intact carcass | Sale to butcher **does not** bank Pearson/Trapper crafting stock |
| **Bait & Tackle** | Bait and lure supplies at its particular shop (e.g. Lagras) [T03] | Fishing rod and legend-fish special access are **separate** D16 story/quest gates; shop/stock visible != currently fishable | Purchased bait/lure != learned rod operation, caught fish or mailed legendary fish |
| **Trapper** | Sells animal-material garments, some tack and equipment, including rank-unlocked **reinforced challenge gear** where conditions satisfied [T10/T11] | Eligible skin sold/banked with Trapper, recipe material counts, sometimes money and earned challenge unlock. Trapper locations are not all towns; can be regional hunting stalls | **Sell skin → unlock recipe/material → separately buy craft output.** Not necessarily crafted merely by delivery |
| **General Fence** | Buys eligible stolen valuables/jewellery; sells unusual equipment, weapons, masks, pamphlets and crafts talismans/trinkets from specified parts [T12/T13] | Each item/material and seller type matters; ordinary Fences (e.g. Rhodes/Saint Denis/Van Horn) vs special **Emerald Ranch wagon**/later **horse fence** services; U05 is not a blanket all-Fence lock | Never assume stolen wagon accepted by jewelry Fence, or sell unique talisman ingredient without checking D06/D22 |
| **Post Office / rail clerk** | Send outgoing eligible mail (letters, collection sets, coordinates/fish), receive parcels/rewards, pay named state bounty, sometimes buy rail tickets [T14] | Some post offices **do not** include train service; actual mail quest/eligible item and operating service required [T14/T15] | `Sent` != `Reply` != `Collected`; debt payment and rail ticket distinct |
| **Saloon / tavern** | Buy food/drink at bar, sit/socialize, occasionally Poker or Blackjack/other table, maybe rent room/bath if desk offered [T02/T16] | Venue hours, table occupancy, reported law hostility, purchase prompts | Drinking does not count as bath/show/table completion; no universal exact meal stat asserted |
| **Theatre / picture show / magic lantern tent** | Pay ticket, watch film/show, live stage entertainment, sometimes separate venues [T18] | Some cities/regions accessible only when actually reached; start-time/attendee/location restrictions visible in interface | Official `Show` and `Theater` are **two rows**: a Valentine picture/lantern show does not automatically tick theatre visit |
| **Newspaper seller / book or public venue** | Buy/read paper, overhear townsfolk, examine local performances or public speeches [T18/T19] | Edition, story headlines and time may vary; inspect seller/prompts | One newspaper purchase is not a total-completion checkbox; interesting world context is **IMMERSION** |
| **Station / coach booking** | Legitimate passenger train or stagecoach travel where offered (D11) | Destination/rail schedule/menu, active Wanted/lockdown context; fare and use separate | Stagecoach transport ≠ taking a coach for D13/D19 outlaw goals |

**On-site controls:** Use **visible focus/interact and catalogue prompts** to choose service; mouse/controller mapping and prompt availability depend on whether Arthur is mounted, holstered, wanted, in a mission or standing at correct desk. The same shop can expose commerce, hold-up, talk and inspect contexts; don't infer a purchase from entering the correct building. D07 owns the expanded control taxonomy.

### 1C. S25.M02 and S25.M03 city life beyond buying things

A settlement is also an immersive **schedule/atmosphere**: people drink, play games, deliver newspapers and stage live performances; buildings may be shut or busy after hours. Some **street ranters/ravers/campaigners** appear in locations/times independently of a Stranger mission marker. **Five** qualifying encounters contribute to Miscellaneous official completion; repeated casual greetings are not independently verified as five distinct qualifying interactions. Theatre/lantern/picture shows require genuine attendance rather than a photo of their exterior. [T18/T19]

### 1D. S25.M04 boundary

Player's camera, Photo Mode, photo studio portrait and special visual leisure activities are **not** universal vendor purchases and are researched primarily in D28. D14 can cross-link a booth/shop's **presence** and voluntary use only. No claim that photo-taking awards a `Show`, `Theater` or `Ranters` requirement.

---

## 2. Four actual minigames: participation, rules, costs and game-specific access

**In-game help:** `Pause → Help → Activities` is directly referenced by PowerPyx. The in-world **table/hand icon**, actual free seat, NPC and `Play` prompt must exist. Some camp tables are **occasional, not permanent**. Four game **types**, not four wins or four tables. Standard buy-ins/stakes are often small but variable, and every listed amount from a static guide is a *historical example*, not a guaranteed bill. [T16,T17,T21]

### 2A. Poker — Texas Hold'em

**Goal:** win pots with the best five-card poker hand from **two private (hole) cards** and up to **five shared** community cards, or win uncontested when others fold. Mandatory **small/blind** and **big/blind** initiate betting; pre-flop → **flop (3)** → **turn (1)** → **river (1)**, with bets between stages. Actions are **check** (pass without new bet when allowed), **bet**, **call** (match), **raise** (increase), **fold** (forfeit existing wager in that hand), and sometimes all-in as chips permit. Ranking high-to-low: royal/straight flush, four-of-kind, full house, flush, straight, three-of-kind, two pair, one pair, high card. A Royal Flush is the highest straight flush, not another suit-independent game outcome. [T22/T23]

**Practical beginner:** take lowest comfortable stake, inspect private cards, current bet and community board. Fold poor hands rather than chasing a loss; a fold can preserve chips but **does not** win that particular hand. Winning one hand through folds can be a poker win, but **Gambler 4 knockout** needs an opponent eliminated by losing all chips, not just folding once (D27 owns rank validation). Loss of chips is possible and cannot be universally offset by a “sure-win” strategy. [T22/T23,T28]

**Locations and gates:** Valentine and Flatneck Station (and other later sites) are cited by independent guides. An ordinary Chapter 2 introductory opportunity is associated with the Reverend Swanson mission `Who Is Not Without Sin`, **but do not assume that mission is already done or credit was recorded**. Gang camp poker is occasional, and a scripted mission hand may have a different progression effect from an ordinary open-world table; only the actual tracker decides. [T17,T24]

### 2B. Blackjack — approach 21 without exceeding

**Goal:** finish with a hand nearer **21** than the dealer, without going over. Number cards are face value; face cards count 10; Ace counts **1 or 11** as advantageous. Dealer exposes one card and has one initially concealed; game guide says dealer **hits below 17 and stands at 17+**. A tie is a **push**, normally returning original stake. Natural blackjack (two-card Ace + 10-value card) is distinct from 21 in three or more cards; table-specific payouts should be read from UI rather than generalized to all bets. [T25]

**Available decisions:** **Hit** take a card; **Stand** stop; **Double Down** increases stake to double, then **one card only**; **Split** same-value opening pair into two hands if enough chips; optional **Insurance** if dealer shows Ace, another independent wager. Neither “always hit to 21” nor “double down always wins” is a rule. Gambler 2 needs **five winning doubled-down hands**, Gambler 8 requires **three separate wins each after at least three hits**; merely sitting or any blackjack win is not that stage's credit. [T25,T28]

**Locations:** the **Rhodes saloon** and **Van Horn** sites are independently described; some later locations are chapter/region gated. A player physically riding toward a named saloon doesn't establish a working table or free chair. Inspect available marker/seat and relevant in-game story progress. [T17,T25]

### 2C. Dominoes — four named rulesets; one minigame family

**Basic tiles:** game uses a **double-six set of 28 unique tiles**, players hold **seven** starting tiles in common rulesets, place one whose pips match an **open end** and attempt to **empty their hand**. Play order opens from a suitable high double; blocked positions or no matching tile lead to **draw or pass according to variant**. Pay attention to the opponent's discarded numbers; this reduces guessing but does not control random tiles. [T26]

- **Draw:** take from **boneyard** if no legal tile; round ends when one empties hand or board blocks, scoring remaining opponent pips; guide reports typical target **60**.
- **Block:** similar matching game **without boneyard**; players unable to place pass.
- **All Fives:** points can accrue **each turn** when total open-end pip sum is a **multiple of five**, plus end-of-round scores, guide target **100**.
- **All Threes:** score when open-end pip sum is **multiple of three**, guide target **90**.
- **Spinners:** first eligible double can create more than the usual two open ends in All Fives/All Threes; do not treat it as a fifth globally independent **minigame type** for 100%. GTA Base confusingly introduces “5 different games of dominoes” but lists draw, block, all fives, all threes and spinner as a tile mechanism, not five separate Total Completion requirements. [T26]

**Gambler caution:** `Gambler 5` needs **three round wins without drawing** against no more than two opponents; `Gambler 9` demands **three consecutive full games**, not merely three tile placements or any three rounds. D27 is sole rank owner. Neither requirement is imposed for simply ticking the official `Table Games: Dominoes` type. [T28]

**Locations:** Emerald Station/Emerald Ranch **Draw** is an early Chapter 2-friendly candidate if table present; Saint Denis garden gazebo offers **All Fives**; some later-region variants may be inaccessible early. **Camp** may offer occasional dominoes with characters, not a guaranteed invitation nor automatic `Friends With Benefits` credit. [T17,T26,T29]

### 2D. Five Finger Fillet (FFF) — observed button sequences, not card gambling

**Basic play:** Arthur places his hand down, and a timed sequence of **button inputs** drives the knife repeatedly between fingers. Watch opponent's pattern, inspect on-screen symbols (don't memorize Xbox `A/X/Y/B` on PC/PlayStation), optionally practice, then execute cleanly and quickly. Mistake can cost time/attempt. Opponent and chosen variant change stakes and difficulty. [T27]

**Three documented variants** (GTA Base Story Mode guide): **Classic** = complete required laps fastest, up to five attempts; **Guts** = most completed laps in a 20-second interval, mistakes cost time; **Burnout** = most completed laps in 30 seconds without mistake, single attempt. A match can require winning rounds against an NPC; *opponent actually present* may matter to **Hobby Horse**, not guaranteed by a solo practice animation. Guide says win **two rounds** to win a game. [T27,T30]

**Locations:** Valentine smaller saloon, Strawberry and Van Horn, with occasional gang-camp opportunity. Challenge stages may specify towns and actual opponent rather than mere practice; inspect active Gambler rank if that is the purpose. [T17,T27,T28]

### One-page comparative gaming advice

| Type | Outcome depends chiefly on | In-game payment risk | Official Misc 100% | Gambler track distinct |
|---|---|---|---|---|
| Poker | Hidden cards, betting judgment and opponents | Buy-in, blinds, raises, pot loss | **Play type once**; no win requirement [T16/T17] | Hands won, regional knockout, streak [T28] |
| Blackjack | Random draw, dealer up-card, hit/stand/double/split | Ante and conditional extra stake; can bust | **Play type once**; no win requirement | Double-down wins and 3+ hits wins [T28] |
| Dominoes | Legal matching, scoring variant, opponent tile distribution | Table-specific stake | **Play type once**; no win requirement | Win specified rounds/no draw and consecutive games [T28] |
| FFF | Reaction/memory, timing, correct displayed controls | Wager and possible repeated rounds | **Play type once**; no win requirement | Three wins, win at named towns [T28] |

**Stop-loss by design:** these are *optional in-game money/time entertainment*, not promised income. Nothing here encourages exploit farming or endless sessions: if user wants leisurely immersion, join one small game, observe actual result, leave when satisfied.

---

## 3. Conditional access, service gates and proof of operation

| Gate | General expected condition | Prohibited inference / safe readback |
|---|---|---|
| **U00 Chapter 2 free roam** | Ordinary settlement traversal, town services and many optional games start appearing after Chapter 1 [T17/T24] | A Chapter 2 label does not assert every fence, train, stable, theatre, table, barber or hotel service available |
| **U01 stable tutorial** | Hosea's `Exit Pursued by a Bruised Ego` normally introduces active stable horse-buying/service [T05; D01] | Don't assume player finished mission, owns Horse Reviver, purchased horse or full stable slots |
| **U02 Ledger** | Strauss debt-recovery/deposit condition unlocks camp Ledger [D02] | Town store is not the camp Ledger; no shared-wallet shortcut |
| **U05 wagon Fence** | Hosea's `The Spines of America` normally introduces Seamus's **Emerald Ranch wagon** service [T12; D13] | Other general Fences / talisman ingredients are **not** all globally gated by this wagon intro |
| **Fishing tackle gate** | Rod/fishing ability from `A Fisher of Men` normally separate from tackle shop being on the map (D16) | Buying lure ≠ holding rod, caught fish, legendary catch or D20 mailed fish |
| **Early Poker** | Story-associated introductory Chapter 2 Reverend game and independent town tables [T17/T24] | Neither mission completion nor poker achievement credit inferred absent GameGuide/Progress |
| **Table occupancy/time** | Town tables need an accessible chair/NPC/marker and correct time/context; camp games rotate [T17] | Map marker always visible ≠ table available 24/7; return later organically |
| **Blackwater/western/late areas** | Ordinary story regions differ; later accessibility conditional [T05/T25/T26] | Do not route early Chapter 2 player into future-hostile zone for supposedly mandatory game |
| **Law/lockdown** | D13 documents Wanted, named state bounty, closure and post office payment [T14/T15] | One post office appearing on map does not ensure clerk accepts during live pursuit; posted debt ≠ ticket block in every build |
| **Rail vs post office** | Some post offices have rail counters, some do not [T14] | Sending mail or paying bounty does not mean train ticket/route offered there |
| **Shop hours / script** | Individual operators can close/deny due to time, story scene or disturbance [T03/T14] | Do not invent universal business opening/closing times or guarantee return after exact minutes |
| **Money & capacity** | Catalogue/listed price, funds, holding quantity and stock at *current menu* determine purchase | Historical guide prices, discounts and carrying limits are not user receipts |
| **Performance admission** | Buy actual available ticket, sit/attend picture or vaudeville as offered [T18] | Watch/show ≠ already watched until progress responds, theater distinction preserved |

Conditional gating is **general**, not a claim that the user currently meets any Uxx. A named example town in guide is useful for planning only; player location/stock/currency remain **UNKNOWN**.

---

## 4. Benefits, costs, money movements, recipients and recoverability

**Price classes:** (a) **Goods** paid once at purchase, possibly carrying limited item counts; (b) **services** paid when performed (clean gun, bath, barber, room); (c) **wager** amount at each table/hand/round, subject to loss; (d) **ticket/fare** to enter a theatre or travel; (e) **rewards** or vendor sale receipts (pelt/valuable), not guaranteed purchases. GameFAQs' 2019 vendor tables are *examples* and sometimes different towns/items have different availability, prices and hidden discounts [T03]. Do **not** create an exact live shopping cart or camp-money balance.

| Route | Receiver / resource moved | Observable completion | Important preservation |
|---|---|---|---|
| Buy provisions/ammo/tonic | Arthur wallet → vendor; specific item → Satchel/weapon inventory | `Owned`/new amount/status + money debit | Some stacks can be full; no assumed unlimited capacity |
| Customize firearm | Wallet → gunsmith; component applied to *selected owned weapon* | Parts screen updates weapon | A preview isn't an upgrade; `Locked and Loaded` requires eligible parts done [T20] |
| Buy clothing/cut hair | Wallet → store/barber; Wardrobe/look changed | Owned garment + actually equipped look | Wearing changes and owning are different (D10) |
| Horse/tack | Wallet → stable; horse/tack/service | Stable slot/equipment and horse stats [T05] | Horse loss/bond/cargo do not become reversible merely by paying a stable |
| Trapper skin | Skins sold → **Trapper** material credit; money if eligible; later garment purchased separately | Recipe counts + eventual garment receipt | Ordinary perfect pelts not restored after loss; Rockstar has *narrow legendary-only* lost-material exception [T10/T11] |
| Fence valuable/talisman | Eligible valuables/ingredient sold or selected for talisman craft, funds if sale; distinct ingredient consumed | Fence accepted item / crafted charm available | Protect rare components, and don't sell last needed physical collectible to ordinary jewelry fence [T12/T13,D20] |
| Postal outgoing | Named set, fish parcel, or coordinates → postal recipient | `Send Mail` accepted then log/inbox later | Reward claim and final stranger step separate, no automatic credit from discovery [T14,D20] |
| Pay bounty | Arthur cash → specified jurisdiction through post office | `Pay Bounty` receipt + state amount changed | Not camp donation, not general Honor cleansing (D13) |
| Poker/Blackjack/Dominoes/FFF | Chips/wager allocated → table; winnings only upon result | Actual match/round outcome or checklist checkmark | No risk-free return; don't use table as guaranteed funding |
| Show/theatre | Ticket purchased → attendance | Performance watched + Misc checkmark if applicable | `Show` and `Theater` are not the same row |
| Newspaper | Paid paper → readable issue/inventory | Purchase/read prompt | Story exposition, not a guaranteed 100% checkbox |

**Specific collision with vendor advice:** Gamepressure's early Fence page calls legendary animal hides Fence stock, whereas independent PowerPyx and the [PlayStation.Blog preview](https://blog.playstation.com/2018/10/01/22-things-you-need-to-know-about-red-dead-redemption-2/) distinguish **Trapper-made clothing from pelts**. **Correct safety default:** deliver **pelt** to Trapper; present **specific talisman parts** at Fence, observing their recipes. Do not interpret this correction as guaranteeing every component after lost ordinary carcasses, or that selling to a wrong vendor can be undone. [T01,T10–T13,T31]

**Services used vs acquired:** A bought bath entitlement is not `Bath Taken` until observed; a weapon oil bottle is not cleaning; train fare may skip actual ride/cargo context; challenge rank unlock is not purchase of reinforced gear. Those boundaries preserve D02/D11/D12/D13/D15/D20/D27 ownership.

---

## 5. Chapter, time, version, edition and negative-evidence hazards

| Specific risk | Evidence status and confidence | Conservative handling |
|---|---|---|
| **2018 static store prices as always current** | Guide-specific lists from 2019 and 2018 [T03/T06]; game discount/edition state unknown | Show price only if **actual current menu**. This dossier intentionally gives no authoritative permanent prices |
| **All stables/horse stock unlocked with Chapter 2** | Normal U01 gate + regional lists vary [T05] | Require existing U01 and stable menu; no assumed breed, purchase or horse status |
| **Fence and Trapper can both craft/sell identical animal products** | Conflicting Gamepressure Fence guide vs better sources [T01,T10–T13] | Separate pelt→Trapper and specific ingredient→Fence; inspect both menus |
| **Every post office is a train station** | PowerPyx counts different total station/post-office locations [T14] | Ask whether `Buy Ticket` appears; mail/pay bounty can still be possible |
| **Show ticket automatically gives Theater row** | Official Misc includes separate `Show` and `Theater` [T18/T19] | Check separate two rows after actual Valentine movie and later Saint Denis live theatre |
| **Sitting alone at FFF always triggers Hobby Horse** | PowerPyx says instant play enough; GameFAQs/TrueAchievements reports solo practice sometimes not counted [T17/T30] | Participate against NPC when available; **verify tracker and achievement** before telling user achieved |
| **Any single Gambler rank equals playing all games** | D27 sequential requirements [T28] | Track `Gambler` separate from Misc table games |
| **Camp casual poker guaranteed `Friends With Benefits`** | Community reports and D05 Wave 1 review conflict on marked game invitations [T30] | Only marked, qualifying companion activity if source/player evidence confirms; don't pre-award |
| **All venue/minigame locations guaranteed at earliest Chapter 2** | World/mission gate and chair availability conditional [T17/T24–T27] | Prefer nearby confirmed marker, postpone others with no pressure to advance chapters |
| **Red Dead Online poker / stables / camp systems imported into Story Mode** | Rockstar patch Online content is mode-specific [T32] | Exclude role unlocks, Online handheld catalogue, real-money currency, Naturalist camp fast travel and multiplayer bet limits |
| **Later story plot/places** | Restricted to T2+ | Don't expose details; simply say "later accessible venue" and seek player permission for spoilers |
| **Theatre social scene coerced as five ranters** | Independent categories in Total Completion [T18/T19] | Talk with actual roaming named special speakers, inspect `5` tracker; generic NPCs not enough |
| **Gambling “quick easy profit” certainty** | Games have random outcomes and wagers [T22–T27] | Small voluntary stake; no forced repeat/exploit guidance |

No user game files, installed patch builds, physical shop menus, or current prices were directly inspected in this task.

---

## 6. Completion / achievement / optional immersion separation

### 6A. The **exact** official Total Completion portions related to D14

`Pause → Progress → Total Completion → Miscellaneous` records:

| Separate 100% Misc criterion | Exact required condition | Verification and common false equivalence |
|---|---|---|
| **Table Games: 4** | **Play each type once:** Poker, Blackjack, Dominoes, Five Finger Fillet [T18/T19] | **Wins not required** for Misc; four hands of Poker ≠ four different game types |
| **Ranters, Ravers and Campaigners: 5** | **Interact with five** qualifying special street personalities [T18/T19] | Any five normal greetings or Stranger missions not universally sufficient |
| **Bath: 1** | Take an actual bath at an eligible lodging venue [T18/T19] | Rent room, wash in river or stand in hotel does not automatically prove `Bath` |
| **Show: 1** | **Watch** one picture/lantern show [T18/T19] | Buying ticket/entering lobby without watching not reliable |
| **Theater: 1** | Visit the named live theatre; PowerPyx advises attending an actual **Théâtre Râleur** performance in Saint Denis [T18] | Separate from Valentine movie show, mere map icon insufficient |
| **Recipes: six categories** | **Craft one each**: cooking, tonic, ammunition, hunting item, horse-care item, weapon [T18] | **D12** owns recipes. Buying six tonics from General Store isn't crafting |
| **Robberies: 4 types** | One **coach, home, shop, train** robbery [T18] | **D13/D19** own crime classification. Shop checkout isn't shop robbery |

Other Total Completion categories include all nine Challenge strands (one is Gambler), some Compendium equipment, multiple collectibles requiring mail and five sheriff poster bounties. These are **not D14's shop-use requirements**, and a shop visit never automatically grants them. D15 and D20 remain tracker/collection authorities. [T18/T19,T28]

**Important source conflict not silently erased:** PowerPyx Game Guides sometimes summarizes “144 cigarette cards” while in-game checklists (and GTA Base/Red Dead Wiki) say **one full twelve-card set**. This is D15/D20's domain: D14 only explains Premium Cigarettes purchase and postal handling and never expands the official collection condition [T18/T19,D20].

### 6B. Achievement/trophy requirements **separate** from official 100%

| Achievement (Story Mode) | Requirement | Difference |
|---|---|---|
| **Hobby Horse** | Play **all four** minigames [T17,T30] | Similar to official 4/4, but platform achievement may require proper NPC participation; use trophy + tracker evidence |
| **Pony Up** | **Spend $5,000 across shops**, cumulative [T20/T33] | Shopping achievement, **not** an official Misc 100% town-services purchase quota; no need to waste money early |
| **Locked and Loaded** | Upgrade **every available component of a single sidearm or longarm** [T20/T33] | Gunsmith customization condition, distinct from having purchased gun or all guns |
| **Best in the West** | Reach official Total Completion 100% [T18/T20] | Higher-order whole-game goal, not D14 subsystem-only |
| **Friends With Benefits** | Complete actual companion activity per applicable gang camp [T30] | Ordinary public table mini game **not** the same as marked camp companion obligation; disputed special table credit D05 |
| **Gold Rush / personal all-Gold** | Separately scored Story missions [T20] | Town game achievements and social checks are not mission medals |

**D27 Gambler rank-specific contract:** There are ten ordered ranks; rank 1 five Poker-hand wins, rank 2 five doubled-down winning Blackjack hands, rank 3 three FFF-game wins, rank 4 poker eliminations in named towns/station, rank 5 domino rounds without drawing vs ≤2 opponents, rank 6 dealer wins Rhodes/Van Horn, rank 7 FFF wins in three towns, rank 8 three Blackjack wins after ≥3 hits each, rank 9 three consecutive Dominoes **games**, rank 10 three consecutive poker hands. **D27 owns the rank matrix and version disputes.** Not retroactive to inactive ranks; gambling participation alone satisfies none of these necessarily. [T28]

### 6C. Purely voluntary / immersive

One can socialize, change haircut, buy a newspaper, enjoy a saloon meal, try friendly poker, watch extra shows, stock medicine, or build a wardrobe for role-play **without** any mandatory official 100% requirement to exhaust catalogues, visit every hotel, purchase every horse or view every film. High Honor preservation can coexist with noncriminal town leisure (D13).

---

## 7. Three mistakes plus three organic spoiler-light Chapter 2 situations

### Three common mistakes

1. **“Four Poker hands = 4/4 games; any table victory = Gambler challenge progress.”** No; games are four **types**, while Gambler ranks are sequential and condition-specific. [T17/T28]
2. **“All sellers are the same and every marked shop is already active.”** No: a Trapper pelt, Fence jewel, Pearson cooking donation, post-office mailed set and camp Ledger purchase have separate inventory/payment destinations and gates. [T02–T14,D02/D20]
3. **“A purchased ticket/bath/saddle is already used and recorded; spending a lot at a shop automatically raises Total Completion.”** No: use and goal are separate observations. One bath, show, theater and 4 game types count; $5,000 retail spending belongs **Pony Up**, not mandatory Total Completion. [T18/T19/T33]

### Example A — Valentine “one peaceful afternoon”

**Context:** Chapter 2 free roam, High Honor preferred; actual cash/open shops/story markers **UNKNOWN**.  
**Offer:** If Valentine is reachable and player isn't in an active timed mission, inspect the **General Store** for needed provisions without buying surplus; optionally see a **Valentine lantern/picture show** if the venue displays a real ticket/prompt; if Arthur is dirty, choose **hotel bath** if available and affordable.  
**Verification:** check distinct `Show` and `Bath` entries in `Progress → Total Completion` after the actual actions; no “theatre” credit just because a Valentine film was shown. A barber visit is optional/appearance only; no false player transaction is written. **Stop/return:** leave when interested, no compulsory full catalog or multiple shows. [T02,T06,T18,T19]

### Example B — “Try the tables without spending our evening grinding”

**Context:** Chapter 2; user wants to learn gambling but not lose cash or use exploits.  
**Offer:** If `Who Is Not Without Sin` is underway, allow **Mission Control** to own all steps and Gold medal constraints. Otherwise seek available **Valentine Poker** or smaller-saloon **FFF** table, or **Emerald Station Dominoes** if player's route naturally leads there. Sit only when a free seat/NPC and prompt are visible; use lowest acceptable in-game stake and learn one round. Don't assume **Rhodes Blackjack** has been visited or all four already credited.  
**Verification:** check the individual **Table Games 4/4** entries. If `Gambler` is an intentional objective, first open its *currently active* rank; participation doesn't pre-credit inactive ranks. **Stop/return:** when session is enjoyable or budget reached, no forced RNG streaks. [T17,T24–T28]

### Example C — “I found a pelt, a valuable and a letter. Can one merchant handle all three?”

**Context:** A Chapter 2 town stop, cargo/items and any current quest mail eligibility **UNKNOWN**.  
**Offer:** For **pelts intended for special clothing**, check **Trapper** recipe and material hand-in first; for an eligible **valuable/jewellery**, inspect a **general Fence** but protect unique talisman parts/collection originals; for an actual **letter/coordinates/complete set**, inspect **Post Office → Send Mail** only if the corresponding mission item/prompt appears. A **stable** visit may help horse care only if U01 actually available, and changing to a coach/train is a separate D11 decision.  
**Verification:** Trapper material-bank count, Fence acceptance/receipt, mail send confirmation and later reply/claim are four different facts. No automatic transfer between vendors. **Stop/return:** don't sell uncertain unique items; preserve and consult D06/D20. [T10–T15,D20]

Scenarios assume no current player purchase, saved progress, achievement, saloon access or mission completion. All are T0/T1, reversible where possible and tailored to slow-paced High Honor play without requiring a money grind.

---

## 8. Claim-level evidence register — exact sources and confidence

**Sources checked 2026-10-17.** `source date` below is original publication or last shown guide update, **not** a patch and not automatically the date of a cited claim's first observation. `HIGH` = official narrow game publisher/developer description or multiple independent Story Mode descriptions/explicit in-game Total Completion; `MEDIUM` = independent single comprehensive guides / corroborated common rules; `LOW / DISPUTED` = conflicts, isolated player reports or speculative extrapolation. The game UI and real campaign evidence override both when identifying what *this player* did.

| Claim | Specific supported proposition (nothing broader) | Exact external source(s), displayed date | Epistemic status / confidence |
|---|---|---|---|
| **T01** | Contemporary developer-backed description: gunsmith catalogue sells weapons/equipment; Arthur may bathe/shave/eat/drink; Trapper uses legendary materials for clothing | [PlayStation.Blog — 22 Things You Need to Know About RDR2](https://blog.playstation.com/2018/10/01/22-things-you-need-to-know-about-red-dead-redemption-2/) — **2018-10-01**, interviews/game preview | **FIRST-PARTY-CONTRIBUTED / HIGH** narrow claim |
| **T02** | Shops operate via catalogue/item selection; types of vendors and normal purchasing | [PowerPyx RDR2 Wiki Vendor Index](https://www.powerpyx.com/red-dead-redemption-2-wiki-strategy-guide/) — **2018-10-21**; [GameFAQs Shop List](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/shop-list) — **2019-09-13** | CORROBORATED/HIGH merchant families; no live inventory |
| **T03** | Shop type stock includes general goods, doctor tonics, ammo, bait and possible town-exclusive items; historical prices are examples | [GameFAQs Shop List](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/shop-list) — last update **2019-09-13** | SINGLE_SOURCE/MEDIUM products, **UNKNOWN** any live price |
| **T04** | Gunsmith sells guns, gear, ammo and customization; single weapon component upgrades can be purchased | [PlayStation.Blog RDR2 preview](https://blog.playstation.com/2018/10/01/22-things-you-need-to-know-about-red-dead-redemption-2/) — **2018-10-01**; [PowerPyx Locked and Loaded demonstration](https://www.youtube.com/watch?v=Hmrju0GGBgI) — **2018-10-25** | CORROBORATED/HIGH |
| **T05** | Stables purchase/manage horses, horse care and saddles; specific stock/regions; ordinary U01 intro conditional | [PowerPyx Stable Locations](https://www.powerpyx.com/red-dead-redemption-2-stables-locations/) — **2018-11-09**; [PowerPyx Hosea mission](https://www.powerpyx.com/red-dead-redemption-2-exit-pursued-by-a-bruised-ego-walkthrough/) — **2018-10-27** | CORROBORATED/HIGH normal gate; player actual status UNKNOWN |
| **T06** | Hotel bed vs bath vs wardrobe separate uses; some venue labels do not list every saloon/hotel service | [PowerPyx Hotel Locations](https://www.powerpyx.com/red-dead-redemption-2-hotel-locations/) — **2018-10-29**; on-page **2018–2019** user-reported saloon/other-counter lodging omissions | HIGH for services, **DISPUTED/LOW** completeness of 3-hotel count |
| **T07** | Hotel bath is real interactive Story Mode service; rental distinct | [PlayStation.Blog](https://blog.playstation.com/2018/10/01/22-things-you-need-to-know-about-red-dead-redemption-2/) — **2018-10-01**; [PowerPyx Hotel](https://www.powerpyx.com/red-dead-redemption-2-hotel-locations/) — 2018-10-29 | CORROBORATED/HIGH |
| **T08** | Tailors/catalogues and barbers exist; clothing styles require actual purchase/equip, haircut cosmetic | [PowerPyx Wiki Vendor Index](https://www.powerpyx.com/red-dead-redemption-2-wiki-strategy-guide/) — 2018; [RDR2.org Hygiene Guide](https://www.rdr2.org/guides/shaving-hygiene-guide/) — 2019/updated **2023-01-09** | MEDIUM/HIGH broad, D10 details out of scope |
| **T09** | Butcher is ordinary animal merchant; no shared Pearson/Trapper bank | [PowerPyx Butcher Locations](https://www.powerpyx.com/red-dead-redemption-2-butcher-locations/) — 2018, exact date NOT independently retrieved; [GameFAQs Shop List](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/shop-list) — 2019 | MEDIUM; D04/D06 destination authority |
| **T10** | **Trapper** accepts qualifying pelts/materials for garments/upgrades, with multiple locations | [PowerPyx Trapper Locations](https://www.powerpyx.com/red-dead-redemption-2-trapper-locations/) — **2018-10-27**; [PlayStation.Blog](https://blog.playstation.com/2018/10/01/22-things-you-need-to-know-about-red-dead-redemption-2/) — 2018-10-01 | CORROBORATED/HIGH pelt recipient |
| **T11** | Lost legendary pelts may become available for Trapper crafting under official exception, not normal ordinary lost-item refund | [Rockstar Support — Lost or Ruined Legendary Animal Pelts](https://support.rockstargames.com/articles/5P4vTiU5scOQZuUQghscZT/lost-or-ruined-legendary-animal-pelts-in-red-dead-redemption-2) — updated **2024-05-01** | **OFFICIAL/HIGH** narrow only |
| **T12** | General Fence buys valuables and sells special items; wagon fence at Emerald Ranch distinct | [PowerPyx Fence Locations](https://www.powerpyx.com/red-dead-redemption-2-fence-vendor-locations/) — **2018-10-27**; [GameFAQs Shop List](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/shop-list) — 2019 | CORROBORATED/HIGH general vs wagon distinctions |
| **T13** | Fence also sells/crafts talismans/pamphlets under specific item/source/quest restrictions; some guides wrongly route legendary pelts to Fence | [Gamepressure — Fence Services](https://www.gamepressure.com/red-dead-redemption-2/fence-what-services-does-he-offer/zfb81d) — publication year **2018**; [PowerPyx Trapper](https://www.powerpyx.com/red-dead-redemption-2-trapper-locations/) — 2018-10-27 | **DISPUTED** pelt attribution; HIGH avoid wrong-recipient conflation |
| **T14** | Post Office sends/receives mail, takes bounty payments, some offer train tickets while others do not | [PowerPyx Post Office & Train Station Locations](https://www.powerpyx.com/red-dead-redemption-2-post-office-train-station-locations/) — **2018-11-09** | SINGLE_SOURCE/HIGH straightforward menu vs regional count needs version check |
| **T15** | Own payable regional bounties and law service accessibility distinct from NPC sheriff bounty job | [RDR2.org — Bounty System](https://www.rdr2.org/wiki/bounty-system/) — 2018, updated **2023-01-09**; [D13 read-only research](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d13_law_honor_robbery_v0_1.md) — checked **2026-10-17** | CORROBORATED/HIGH concepts; no live debt |
| **T16** | Exactly four table-game **types**, participating (not winning) suffices for official 100% | [PowerPyx Table Games](https://www.powerpyx.com/red-dead-redemption-2-all-table-games-locations/) — **2018-10-25**; [GTA Base Table Games](https://www.gtabase.com/red-dead-redemption-2/activities/) — page date UNVERIFIED | CORROBORATED/HIGH categories and no win requirement |
| **T17** | Town/game locations, seat availability, varying camp games; claims differ on “sit only” vs meaningful played round | [PowerPyx Table Games](https://www.powerpyx.com/red-dead-redemption-2-all-table-games-locations/) — 2018-10-25; [GamerGuides single-player trophies](https://www.gamerguides.com/red-dead-redemption-2/guide/extras/trophy-guide/single-player-trophies-achievements) — 2018; [GameFAQs trophy guide](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/trophy-achievement-guide) — updated **2019-09-13** | MEDIUM/HIGH locations, **DISPUTED** minimum participation action for FFF trophy |
| **T18** | Misc checkboxes: 4 table types, 5 ranters, 1 bath, 1 show, 1 theater, six crafted categories, four robberies | [PowerPyx 100% Checklist](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) — **2018-10-25**; [GTA Base 100%](https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist) — date UNVERIFIED | CORROBORATED/HIGH |
| **T19** | Show and live theatre are distinct; Valentine lantern movie and Saint Denis Théâtre Râleur examples; 5 special speakers | [PowerPyx 100%](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) — 2018-10-25; [GamerGuides 100%](https://www.gamerguides.com/red-dead-redemption-2/guide/extras/trophy-guide/100-completion-checklist) — published **2018** | CORROBORATED/HIGH type; don't precredit attendance |
| **T20** | Hobby Horse, Pony Up $5000, Locked and Loaded, Best in West, other Story trophies distinct | [PowerPyx Trophy Guide](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap) — **2018-10-25**; [PowerPyx Locked & Loaded video](https://www.youtube.com/watch?v=Hmrju0GGBgI) — 2018-10-25 | CORROBORATED/HIGH named contract |
| **T21** | In-game `Pause → Help → Activities` can explain table mechanics | [PowerPyx Table Games](https://www.powerpyx.com/red-dead-redemption-2-all-table-games-locations/) — 2018-10-25 | SINGLE_SOURCE/HIGH UI reference |
| **T22** | Hold'em two hole/five community, blinds, flop-turn-river, betting, fold victory | [RDR2.org Poker Wiki](https://www.rdr2.org/wiki/poker/) — **2018**; [GTA Base Poker](https://www.gtabase.com/red-dead-redemption-2/activities/poker) — undated | CORROBORATED/HIGH mechanics |
| **T23** | Poker beginner context, betting options and hand rank | [TechRadar RDR2 Minigame Guide](https://www.techradar.com/how-to/red-dead-redemption-2-mini-game-guide-how-to-win-money-at-poker-blackjack-and-five-finger-fillet) — published **2018**; [Twinfinite Poker Guide](https://twinfinite.net/guides/red-dead-redemption-2-poker-how-play/) — published 2018 | CORROBORATED/HIGH broad; no strategy guarantees |
| **T24** | Ordinary Chapter 2 poker availability after mission-associated intro, not proof personal mission outcome; general locations | [Gosunoob Gambling Locations](https://www.gosunoob.com/red-dead-redemption-2/where-to-play-poker-blackjack-dominoes-five-finger-fillet/) — updated **2018-11-06**; [PowerPyx Table Games](https://www.powerpyx.com/red-dead-redemption-2-all-table-games-locations/) — 2018-10-25 | MEDIUM gate; read mission menu rather than assume |
| **T25** | Blackjack 21 scoring, ace 1/11, hit/stand, double-one-card, split, insurance, dealer rule, hand settlement | [GTA Base Blackjack Story Mode](https://www.gtabase.com/red-dead-redemption-2/activities/blackjack) — undated; [Red Dead Wiki Blackjack](https://reddead.fandom.com/wiki/Blackjack) — community undated | CORROBORATED/HIGH conventional rules, UI payout variation |
| **T26** | Dominoes 28 tiles, draw/block/all fives/all threes, spinner mechanism, and location variations | [GTA Base Dominoes](https://www.gtabase.com/red-dead-redemption-2/activities/dominoes) — undated; [TechRadar Minigames](https://www.techradar.com/how-to/red-dead-redemption-2-mini-game-guide-how-to-win-money-at-poker-blackjack-and-five-finger-fillet) — 2018 | CORROBORATED/HIGH rules, no numeric income promise |
| **T27** | FFF timing/input, practice, Classic/Guts/Burnout, opponents and location | [GTA Base FFF](https://www.gtabase.com/red-dead-redemption-2/activities/five-finger-fillet) — undated; [Red Dead Wiki FFF](https://reddead.fandom.com/wiki/Five_Finger_Fillet) — community, mixed RDR1/RDR2 | MEDIUM–HIGH current Story Mode; wrong-game patterns excluded |
| **T28** | Gambler's ten **sequential** distinct ranks and specific locations/win conditions | [D27 read-only](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d27_nine_challenge_strands_v0_1.md) — 2026-10-17; [PowerPyx Challenges](https://www.powerpyx.com/red-dead-redemption-2-challenges/) — **2018-10-27** | CORROBORATED/HIGH concept, rank details D27 owned |
| **T29** | Gang camp gaming possible but availability varies; not guaranteed companion activity credit | [PowerPyx Table Games](https://www.powerpyx.com/red-dead-redemption-2-all-table-games-locations/) — 2018-10-25; [Wave 1 cross-dossier review](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/reviews/2026-10-17_wave1_cross_dossier_review.md) — 2026-10-17 | MEDIUM availability; **DISPUTED** camp achievement |
| **T30** | **Hobby Horse** table NPC-vs-solo FFF disagreement, complete-round-vs-immediate-seat disagreement, `Friends With Benefits` separate | [TrueAchievements Hobby Horse](https://www.trueachievements.com/a262347/hobby-horse-achievement) — **2018-10-26** with player 2018 reports; [GameFAQs Trophy Guide](https://gamefaqs.gamespot.com/xboxone/200180-red-dead-redemption-2/faqs/76594/trophy-achievement-guide) — 2019; [PowerPyx Trophy](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap) — 2018 | **DISPUTED** minimal trigger, safe follow actual tracker |
| **T31** | Fence guide misroutes legendary pelts, contradicted by documented Trapper material path | [Gamepressure Fence Services](https://www.gamepressure.com/red-dead-redemption-2/fence-what-services-does-he-offer/zfb81d) — 2018; [PowerPyx Trapper](https://www.powerpyx.com/red-dead-redemption-2-trapper-locations/) — 2018; [PlayStation.Blog](https://blog.playstation.com/2018/10/01/22-things-you-need-to-know-about-red-dead-redemption-2/) — 2018 | **DISPUTED source statement**; HIGH confidence **not** universal Fence pelt route |
| **T32** | Online shop/Stable/Fence role and catalogue patch changes not automatic Story Mode behavior | [Rockstar Support — Title Update 1.09](https://support.rockstargames.com/articles/6XLmD65fhWzs67WCok5hud/red-dead-redemption-2-title-update-1-09-notes-ps4-xbox-one) — 2019; [Rockstar Support — 1.11](https://support.rockstargames.com/articles/6dT8UroC7aKslsqA38oaxj/red-dead-redemption-2-title-update-1-11-notes-ps4-xbox-one) — 2019 | **OFFICIAL/HIGH** mode separation |
| **T33** | `Pony Up` spend $5000 across shops; `Locked and Loaded` fully upgrade one gun | [RDR2.org Trophies](https://www.rdr2.org/wiki/trophies/) — 2018; [PowerPyx Trophy Roadmap](https://www.powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap) — 2018-10-25 | CORROBORATED/HIGH requirements, actual achievement UNKNOWN |

**Negative sources consciously excluded:** Red Dead Online gambling and handheld catalogue info; RDR1 PS3/Xbox 360 FFF patterns, RDR1 outfit scraps, multiplayer roles; unverified new 2026 ad/sponsored guides over original 2018–2019 documentation. Unmodified game UI > any version-specific guide for current transaction facts.

---

## 9. Contradiction ledger, observed-versus-universal and responsible checks

| ID | Competing claims / source pair | Disposition / player-safe test |
|---|---|---|
| **X01 — instant minigame credit** | PowerPyx T16/T17 says sit/start then leave; XboxAchievements T30 says finish one round, GameFAQs and TrueAchievements say solo FFF may not count. | **DISPUTED** minimum threshold for achievement; safest participation against NPC when available and check **both** official Misc progress and platform Hobby Horse after. No “sit anywhere = confirmed” |
| **X02 — hotel count** | PowerPyx Hotel T06 lists three standalone Hotels; on-page commenters point out Rhodes and other room/bath services at saloon/other counters. | **DISPUTED** exhaustive service *location* count. Treat guide as three branded hotels, not all lodging; inspect real desk/room icon. Don't assert all towns have a hotel |
| **X03 — pelt vs fence** | Gamepressure T13 says legendary hides route to Fence for talisman; PlayStation.Blog T01 and PowerPyx Trapper T10 say pelts to **Trapper**. | Primary **Trapper for skins**, Fence for talisman parts. D17 owner verifies specific material ingredient; preserve uncertain rare item |
| **X04 — “theater = show”** | 100% checklist has **both** `Show` and `Theater`; casual guides sometimes call a cinema/theater same word. | Two checkboxes. Valentine movie/lantern = show; Saint Denis live Théâtre Râleur = theatre, inspect both [T18/T19] |
| **X05 — all rail services at any post office** | Post Offices number exceeds train-ticket stations [T14]. | Separate actual clerk menu, rail route and mail/payment; no assertion post office in Strawberry sells train ticket |
| **X06 — early unlock for all fences** | `U05` supports Emerald Ranch wagon sales; D13/D12 note ordinary Rhodes/Saint Denis Fences can differ. | No blanket “The Spines of America required for every Fence.” Ask service-specific menu, avoid false lock |
| **X07 — camp table for FWB** | Some hobby-guide/playthrough anecdotes say qualifying marked table counts; Wave 1 review finds disputed examples. | D05 primary, **REVIEW PENDING**; use visible marked camp request if goal matters, don't infer from casual poker |
| **X08 — Gambler 9 three rounds or games** | Secondary walkthrough phrasing often conflates domino rounds/games; D27 requires three **consecutive games**. | Preserve exact D27 active rank; show round scoreboard and game win separately |
| **X09 — all vendor prices fixed** | GameFAQs 2019 static prices and PowerPyx 2018 examples; Honor/edition discounts and service locations may differ. | Catalogue/receipt only, no generated live price list |
| **X10 — gambling equals safe profit** | “Quick cash” walkthrough rhetoric vs actual bets and losses [T22–T27]. | Treat wager as cost/risk, no income guarantee or exploit farming |
| **X11 — official 100 card totals** | Older broad PowerPyx line says 144 cards; D20/GTA Base clarify **one full set**. | D14 does not adjudicate collectible fulfilment. D20/D15 govern accepted mailed set/counter; don't advise buying 144 packs automatically |
| **X12 — high-Honor vendor visit implies legal immunity** | D13 distinguishes mask/witness, active Wanted, bounty and town lockdown. | A shop icon has no legal effect; if law alert active, disengage, use D13; never teach outfit/identity exploit |
| **X13 — theatre ticket vs viewed performance** | Attending may have player leave early; source recommends watching performance for 100. | Don't precredit ticket alone; observe tracker after attendance |
| **X14 — item ownership after buying** | Some shops show alternate item stock; satchel full, missing weapon, horse stored outfit. | Purchase receipt and actual inventory/equip screen stronger than catalogue listing |

**Unverified game-state facts:** no observed user wallet, prices, currently open stores, bought bath, newspaper, ticket, mailed batch, wanted debt, active Gambler rank, minigame table NPC, owned horse/gun/pamphlet or theatre entry. An in-game `4/4` screenshot is evidence of *one save's* tracker, not a universal claim that particular seat/venue always credits.

**Non-destructive verification tasks** (not performed): ask player to inspect each shop's menu when naturally visiting; for game credit, screenshot the *before/after* four-type Misc tracker only when they voluntarily play; for theatre compare separate Show/Theater entries after organic visits; test postal mail by actual quest prompt and later reply, not forced mailing of unique items. Do **not** spend money, pursue bounties, commit crimes, advance chapters, use save exploits or claim the controller pressed a button in this research.

---

## 10. Read-only GameGuide, Free Roam and Living Companion handoff

**Authoritative player-state order:** `L33TW0RLD/rdr2/campaign/` and user-verified current screenshot/report; GameGuide Mission Control for active story objectives and Gold requirements; this dossier for **general** systems only. A cited `RESEARCHED — REVIEW PENDING` dossier must not silently update player state, establish item ownership or approve a taxonomy migration.

### Consumer decision procedure

1. **What is player trying to do?** Supply shopping / vendor recipient / horse service / debt / mail / hotel / theatre / game / achievement / social immersion.
2. **What matters now?** A single relevant observation: current visible venue symbol and interaction prompt; shop `Owned`/price; train-vs-post marker; currently active `Gambler` objective; 100% `Table Games` row; legal `Wanted` state. Don't ask for a large questionnaire when a conditional answer suffices.
3. **Define input→destination→evidence:** “If Trapper menu takes pelt and shows craft ingredient, deliver there; later buy garment separately”; “If show ticket offered, watch and check **Show** row”; “If FFF NPC seated, try one displayed sequence and check 4-type counter.”
4. **Separate goal systems:** official 100% Misc, Hobby Horse platform trophy, Gambler rank, Pony Up spending, mission Gold, optional immersive night out. No cross-credit without actual evidence.
5. **Respect current mission:** if mission active (including contextual high-stakes card-game scene or timed delivery), stop generic outing and refer to full canonical Field Guide. Do not fabricate Gold timers from a casual saloon visit.
6. **Crosslinks:** D02 personal vs camp funds; D11 rail/stagecoach/temporary camp; D12 ingredients/recipes; D13 law/witness/post-office bounty; D15 Compendium+Total Completion; D20 precise mail/hand-in and rewards; D27 challenge ranks. Cite **read-only, unadopted** state. D19 owns official robbery/bounty jobs.
7. **Outing as invitation, not mandate:** one optional service stop plus one social diversion, then return to the player's own activity; no chores/loot/profit loops forced by the Companion.
8. **No state write:** do not set `poker_played`, `bath_done`, `bounty_paid`, `train_used`, `letter_sent`, `shop_spend` or `won_game` in Atlas. Only verified GameGuide evidence can update campaign records.

**Illustrative response fields, not executable/adopted schema:** `{service_or_game, provisional_mechanic_id, Story_Mode, venue_observed?, menu_observed?, gate_claim_id, cost_or_wager_from_UI_or_UNKNOWN, relevant_official_or_achievement_goal, outcome_evidence_needed, confidence, spoiler_tier, return_to_activity}`.

**Example concise Adventure Companion output:** “Valentine is a sensible rest stop if available. Use the hotel bath if you want; it may tick the Misc **Bath** row after completion. Watch a Magic Lantern Show if the ticket desk is offering it; that's the **Show**, not the Saint Denis **Theater** row. For a low-stakes game, look for the smaller-saloon Five Finger Fillet opponent; **Hobby Horse** and **Gambler** have different criteria. Shall we continue your ride after one stop?” **This is only an example, not a verified present-tense player location.**

---

## 11. Review questions, bounded future tests and acceptance / stop

### Outstanding precise research checks for coordinator

1. **Table credit:** under an owner-consented noncanonical test or natural player session, check the `Table Games` row and **Hobby Horse** separately for (a) solo FFF practice, (b) proper opponent match, (c) sit/leave without full round. Do not edit live save to manufacture a trophy.
2. **Hotel/venue matrix:** observe whether Rhodes or Saint Denis saloon counters expose rentable bed/bath in current Story Mode; PowerPyx's “3 hotels” list is **not** a universal no-other-baths theorem. Keep exact cost in player interface.
3. **Vendor material routing:** corroborate in-game ordinary Trapper sell/craft output separately from Fence trinket/talisman recipe; D17's legendary exception not generalized to all pelts.
4. **Postal workflow:** observe one naturally available quest's **send → wait for reply → claim reward → final stage** without skipping stages or treating a mailbox location as full train service.
5. **Performance split:** verify separate `Show` and `Theater` rows by actual attendance (not merely ticket), with actual map availability.
6. **Camp game/achievement boundary:** D05/X06 concern marked companion activity credit; do not ratify casual table games as automatically `Friends With Benefits` eligible.
7. **Source version/mode:** screen Rockstar update notes so no Online-only outfit, stable, weapon, role or handheld catalogue assumptions leak into Story Mode service guidance.
8. **Owner schema:** decide whether provisional `S25.M01–M05` and typed edges remain research aliases or become indexed/adopted with explicit approval; D28 photography and D19 bounty/robbery ownership retained.

### Acceptance audit (research, not adoption)

- [x] **All 11 mandatory sections** (definitions/controls; conditional gates; costs/routing; chapter/time/edition; typed relations; official completion vs achievements; three mistakes/examples; claim/source ledger; contradictions; GameGuide/Free Roam handoff; next bounded questions/owner request).
- [x] **Every requested venue/service** plus butcher, tackle, newspaper and transport desk as adjacent examples, without expanding other specialists' primary rules.
- [x] **Poker, Blackjack, Dominoes, Five Finger Fillet** with concrete turn mechanics, wagering risks, venues, game variants, active rank vs just played distinction.
- [x] Source-specific **T01–T33** ledger, dates, modes, confidence and contradictory guide examples; separate primary PlayStation/Rockstar from guide/reproduced game instructions and peer-reviewed research.
- [x] Conditional Chapter 2 examples, no T2/T3 story reveal, no assumed cash, items, current shop prices, player challenge progress or in-game work.
- [x] No shared/old repository changes. **Owner/coordinator review explicitly requested.**

**Completion state after three-file readback and GitHub lease compare:** task `DELIVERED_REVIEW_PENDING`, D14 content `RESEARCHED — REVIEW PENDING`, **not ADOPTED**. Do not create follow-on issues, self-merge, edit a shared manifest or pretend any player purchases/achievements occurred. This persistent specialist conversation may receive a *separately assigned* future task, but this task's file lease ends here.
