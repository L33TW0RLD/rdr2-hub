# D07 — Contextual Controls, Interaction Prompts and Information Surfaces (Story Mode)

**Record:** D07 / v0.1 · **Kind:** systems-mechanic research dossier · **Status:** **RESEARCHED — REVIEW PENDING; NOT ADOPTED**  
**Task:** \`atlas-controls-028\` · [Issue #37](https://github.com/L33TW0RLD/rdr2-hub/issues/37) · **Researched/checked:** 2026-10-17  
**Game scope:** *Red Dead Redemption 2 single-player Story Mode*, original PS4/Xbox One and PC releases, later compatible versions where source supports them. Default **T0/T1** spoiler budget; separate Red Dead Online/RDR1/Switch mapping never imported. **Current player's platform, bindings, chapter, story gates, equipped weapon, map, carried items, Compendium flags, current mission and save are UNKNOWN unless directly observed.**
**Candidate taxonomy references:** \`S31.M01–M04\` are **PROPOSED / UNRATIFIED ONLY**; not assigned accepted IDs, not authority to change or introduce \`S31\` in canonical taxonomy. Existing provisional references: \`S30.M01/M04\`, \`S28.M03\`, \`S01.M03\`, \`S06.M02/M04\`, \`S07.M01/M05\`, \`S12.M02\`, \`S17.M01/M04\`. These are crosslinks, not a new system implementation. No changes to any shared taxonomy or index.
**Domain boundary:** D07 researches **HOW to interpret controls, focus, prompts and information feedback**, not *WHAT happened to this player*. D09 (Dead Eye skills), D10 (outfits/face coverings), D11 (travel/field camp), D15 (Compendium criterion semantics) and D24 (saves/mission Gold/replay) stay **READ ONLY**, **RESEARCHED — REVIEW PENDING**, not adopted. The original [GameGuide campaign](https://github.com/L33TW0RLD/rdr2/tree/main/campaign) alone owns recorded player outcomes.

## 1. Core interaction model — contextual prompt is a live offer, not a global hotkey

In Story Mode, one physical input has multiple meanings depending on **mode/context**. An interaction should be interpreted as an explicit *target* + *available on-screen action label* + *input glyph* + *press/hold/sequence* + *eligibility* + *result screen*, not as a universal key mapping. For a concrete control question, follow this order [C01–C04]:

1. **Locate target:** identify the person, horse, wildlife, document, pickup, open-able cupboard, wagon, map marker or interactable service. Change position/view to disambiguate near overlapping objects.
2. **Determine mode:** weapon holstered versus aiming, on foot versus mounted, ordinary exploration versus mission/menu/camp/shop, binoculars versus weapon, wheel open versus unpaused world.
3. **Reveal current prompts:** focus/lock on where appropriate (PlayStation \`L2\` / Xbox \`LT\`, on PC commonly **right mouse hold**), and read *the action words on-screen*. \`L2/LT\` is **not automatically a gunshot/aim**; an unarmed focus commonly exposes dialogue and inspect actions [C01,C02].
4. **Choose intended verb:** \`Greet\`, \`Defuse\`, \`Antagonize\`, \`Study\`, \`Show Info\`, \`Inspect\`, \`Pick Up\`, \`Loot\`, \`Skin\`, \`Read\`, \`Mount\`, \`Use\`, etc. They are not aliases. A prompt can have separate **tap/hold** and secondary-page meanings [C03,C05,C06].
5. **Confirm outcome:** dialogue response/handed-over item/entry flag, HUD feedback, **actual Story/Compendium/Inventory/Progress** page where relevant. *Visibility of a button* proves only that the action is offered **at that moment**, not that it executed, saved, granted a medal, added a pelt or satisfied a trophy [C07,C08].

**Stable mechanic:** controls are context-sensitive and the game offers contextual options. **Variable prompt:** precise target label, prompt order, glyph, hold duration, distance, story gate, inventory, NPC state and weapon state. **Observed player execution:** UNKNOWN without a specific reported/screen-confirmed result. [C01–C05]

**Prompt availability** may change because the target moves out of range/line of sight, Arthur draws a weapon, an animal dies, a door is locked, a horse is not the right mount, a conversation ends, the item is absent, an activity is underway, the HUD is hidden, or a story step is not reached. These are **possible diagnostic variables**, not evidence that each missing prompt has a known hidden timer or that every prompt can be forced by a different key. [C03,C09]

## 2. Focus versus inspect, study, object interaction and NPC responses

### 2A — Focus is a targeting context; the action is a different step

| Encounter and state | Input examples / observable prompt | What it **does not** prove | Evidence |
|---|---|---|---|
| **Unarmed NPC in reach** | PS \`hold L2\` / Xbox \`hold LT\` focuses and displays options such as **Greet** (\`□/X\`), **Antagonize** (\`○/B\`), sometimes **Rob** (\`△/Y\`), **Defuse**, contextual offer | NPC will greet you, there is always Rob, a request was accepted, or it is legally harmless | C01,C02 |
| **Weapon drawn/aimed** | \`L2/LT\` may **aim gun**; \`R2/RT\` can fire; on PC RMB/LMB | Same “focus” workflow as holstered social dialogue; firing is a safe inspect action | C02,C09 |
| **Living animal in view** | Focus/aim or binoculars; wait for **Study** (standard console \`hold R1/RB\`); Show Info may be separate tap | Merely seeing species = studied, animal is 3★, tracking/skin flag done | C10,C11 |
| **Animal trail/sign in Eagle Eye** | Highlight a trail or sign and use offered **Track** action | Study, skin or clean-kill reward; waypoint itself is a tracked trail | C12 |
| **Ground or shelf object / letter** | Approach and align view; a context verb can be **Pick Up**, **Inspect**, **Read**, **Open**, **Examine**, **Loot** | Same action for every object, item acquired merely by looking, quest delivered or document read | C05,C06 |
| **NPC dialogue choice after focus** | New context options such as accept/decline/defuse may replace Greet | A fixed secondary key always means positive choice, scripted invitation occurred, friendship/trophy credit | C01,C13 |
| **Dead body / animal after kill** | Contextual Loot, Skin, Pick Up, Carry, or other prompts depend on species/body and position | Automatically studied before death, carcass received by Pearson, full Compendium entry completed | C05,C11,C14 |

**Operational decision:** if an unintended \`Aim Weapon\` or \`Rob\` appears while merely trying to talk, **do not press fire/rob**. Lower/holster weapon if safe, change focus target/distance and reread. D13 owns witness/law results and D10 owns outfit identity; D07 only mitigates input ambiguity. [C01,C02,C09]

**Inspect/examine is not synonymous with study.** An object inspection may rotate/read an item without acquiring it; animal \`Study\` is a specific live-animal research action; \`Show Info\` views context/species and a recommendation; \`Track\` follows a trail. **What changes in Compendium must be independently inspected** (see §6 and read-only D15), including whether a newly discovered entry existed before the prompted step. [C10,C11,C14]

### 2B — The physical action is conditional, not a guarantee

- A shop ledger, lockbox, chest, document or camp station can require special proximity, facing, available role/service or a story unlock. **No D07 universal tap-one-button shortcut** for opening every object is supported [C05,C09].
- Some contexts show **multiple prompt pages/target cycling**. On PC default references include a \`Next Prompt Page\` action; on controller the actual prompt may show a shoulder/button change. Read the current glyph; do not invent “scroll to hidden second prompt” if one is not displayed [C06,C15].
- A *long hold* may be required for \`Study\`, \`Search\`, \`Inspect\`, journal or special dialogue. If tapping has a different effect, identify prompt's hold symbol. Repeated uncontrolled presses can cause a different interaction [C04,C10,C16].
- Neither NPC consent nor social response is deterministic: Sony's PlayStation launch preview explicitly describes unpredictable social replies. Avoid claiming a particular greet sequence guarantees Honor/reward; consult D13/D21 when an observed incident matters [C01,C13].

## 3. Eagle Eye versus Dead Eye versus binoculars and ordinary camera focus

| Mode / capability | Typical PS/Xbox baseline | Representative PC controls (only if **default mapping verified**) | Output / constraint | Source |
|---|---|---|---|---|
| **Ordinary focus / inspection** | Hold \`L2/LT\` near eligible NPC/animal | Hold **RMB** (focus/lock on) | Action prompts depend on target and weapon/context | C01,C02,C15 |
| **Binoculars** | Access **Item Wheel**, equip binoculars, look at target | Wheel/key mapping variant | Magnifies wildlife, enables \`Study\` when visible; not a shot/track by itself | C10,C17 |
| **Eagle Eye** | \`L3 + R3\` together in eligible non-aim observation | Often **MMB or Caps Lock**, context dependent | Highlights signs/trails/plants; follow displayed \`Track\` prompt; **not** Dead Eye tagging | C12,C18 |
| **Dead Eye** | **Aim** \`hold L2/LT\`, click \`R3/RS\` | Aim RMB, then commonly **Caps Lock / MMB** | Combat time/targeting, drains outer Dead Eye bar; story-gated red X marking behavior (D09) | C18,C19 |
| **Manual Dead Eye X** | Later \`R1/RB\` **only after** normal Chapter 2 story teaching event | PC commonly \`Q\` only after gate | \`R1/RB\` before manual stage **cannot be forced** into usable manual marking | C19 |
| **First/third-person or cinematic camera** | Tap/hold PS Touchpad or Xbox View where supported | Typically \`V\` tap/hold for view/cinematic | Camera mode influences view/control display, not Compendium or current mission state | C20 |

**Precise D09 read-only distinction:** Dead Eye ability stage **A1** (auto-marks on aiming sweep) is taught in Chapter 1; **A2** *manual X placement* is taught in Chapter 2 \`Pouring Forth Oil IV\` when reached. Attribute XP levels 1–10 are **separate** from skill stages; do not tell an early Chapter 2 player \`Q\` or \`R1\` must work yet. Later organ-highlighting and free-fire abilities remain story-gated and are excluded from the default spoiler budget [C19].

**Eagle Eye and Dead Eye are not interchangeable.** A player who wants to *read deer trails* should not be told to “use combat Dead Eye to track”; a player who wants to place shooting marks should not be told to use Eagle Eye. The same controller sticks or PC inputs act differently with aim and target context. The **observed screen tint, highlighted trail, red X marker and bar drain** are stronger cues than memorized names. [C12,C18,C19]

**Compendium/hunting interface boundary:** D07 can say “focus the animal and wait for \`Study\` / \`Show Info\`”; D04 owns the recommended clean-kill weapon and D15 owns the exact credit. Seeing three stars or an animal description is not a guarantee of successful clean kill or a Studied flag. [C10,C11,C14]

## 4. Weapon, Item and Horse wheels; equipped, carried, stored and selected

**Standard PS/Xbox wheel grammar:** **Hold \`L1/LB\`** for weapon wheel, move selection while holding, **\`R1/RB\` while wheel is open** to access item/support tabs, and release to select/equip. [PlayStation editorial preview](https://blog.playstation.com/2018/10/01/22-things-you-need-to-know-about-red-dead-redemption-2/) confirms the basic L1 hold / R1 tab distinction; multiple published button charts corroborate it. [C21]

| Interface | Entry/selection example | What it means | Common error / safe check |
|---|---|---|---|
| **Weapon Wheel** | Hold \`L1/LB\`; choose slot/tool and appropriate ammunition where shown | Equips an accessible weapon; slots may depend on current horse and story gear | Equipping != firing/using; weapon stored on mount may not be in Arthur's immediately accessible loadout |
| **Item Wheel** | Keep wheel held and switch tab using the displayed prompt (\`R1/RB\` on standard consoles) | Selects specific provision, tonic, binoculars, bandana, pocket watch or camp action where available | Wheel item not proof user owns a larger stack or can craft it; choosing a consumable may use it and carry cost |
| **Horse Wheel / horse-mounted context** | Additional wheel tab while near/on own horse and equipment qualifies; inspect actual wheel name/icon | Horse-care items, saved outfits, hat or relevant tack actions depend on saddled mount/horse proximity | Wardrobe ownership != outfit stored on horse; a currently distant mount might not offer wheel cargo |
| **Satchel** | Hold console **D-pad Right**, or PC commonly \`B\`; inspect categories | Carried inventory/document; interact/read/use/drop/sell subject to item UI | Satchel is not a universal horse pelt storage cabinet, a donated resource, nor a record that item was used |
| **Select versus perform** | Point to item, read name and charge/condition, release or activate appropriate action | The item is selected/consumed or equipped **only if action executes** | Wheel display != action performed, recipe crafted, item acquired or save occurred |
| **Wheel while horseback** | Console hold \`L1/LB\`, mounted controls overlay; long gun availability may differ | Physical mount carries some gear and cargo | Don't guarantee every weapon/hat/pelt appears after horse switch; D01/D10 govern |
| **Wheel while combat/mission** | Menu may be limited or disabled depending scripted step, weapon, activity or item | Prompt-specific gating | Do not use a general wheel cheat to bypass current mission equipment/time/health-item Gold restrictions |

**PC reference (not definitive):** Several keyboard charts list **Tab weapon wheel**, **F4 item wheel**, **B satchel**, **R** next wheel menu, **Q/E** previous/next item. Some 2026 websites instead say hold Tab + middle mouse or incorrectly place the satchel inside the wheel. The safe source-derived decision is **Pause → Settings → Controls → Keyboard & Mouse → Key Mapping**, then match the **current action label**. Distinguish **open wheel** from **cycle its page**; beware remapped binds sharing context [C15,C22,C23].

**Cost and irreversibility:** a normal \`equip\` action is generally reversible; firing, chewing tobacco, consuming a rare tonic, selling, donating, gifting or choosing an irreversible interaction can affect inventory/Honor/story. D07 **never automatically confirms** the item was consumed or delivered. Read exact item and action label before releasing/confirming a risky selection. [C08,C21,C24]

## 5. Mounted/on-foot/vehicle contexts, target arbitration and safety

The **same button** can be safe/unsafe according to Arthur's mode and target. RDR2 control references publish distinct *on foot* versus *on horse* tables because these contexts change fundamental commands. [C03,C04,C25]

| Context | Standard PS/Xbox action examples | Expected/possible effect | Safest troubleshooting |
|---|---|---|---|
| On foot, near own horse | \`△/Y\` mount/dismount or contextual; \`L2/LT\` focuses horse for commands | Mount, inspect, feed, lead/pat/brush where available | Stand near **correct horse** and inspect target name/prompts; a stable/brush story gate may apply |
| While riding | \`R1/RB\` slow/stop, \`L1/LB\` wheel, \`L2/LT\` lock on nearby target, \`X/A\` speed | Movement and horse interaction rather than the identical foot-world action | Slow down before attempting small pickups/interaction; no command guaranteed at speed |
| Near loose document/lootable body + horse | \`□/X\` pick up/search in some positions; \`△/Y\` often mount, loot or context | Prompt collision can select adjacent target | Back away/dismount as needed, reposition camera, wait until exact **item target label** shows |
| Mounted facing NPC | \`L2/LT\` can focus a person/animal or aim depending held weapon | Social choice or threat | Holster weapon before greeting and confirm prompt; avoid \`R2/RT\` until wanted to fire |
| Vehicle seat | \`△/Y\` enter/exit where offered; reins/brakes versus horse-wheel | Changed driving controls; accessible vehicle conditional | Read prompt and avoid assuming own horse/cargo transfer; D11 owns vehicle travel |
| Camp/mission/town | Different NPC/station offers, active sequence, wanted state | Prompt may be suppressed or swapped | Use menu's real action, not generic advice to repeatedly mash the button |
| Aim while moving | \`L2/LT\` aim, \`□/X\` combat dive, \`R1/RB\` cover | Physical action separate from \`Study\`/select wheel | Check weapon state and surroundings; an accidental gunshot can carry serious consequences |

**Default diagnostic for “I pressed X and nothing happened”:** ask **“What exact action label and button are displayed right now, and are you mounted or on foot?”** Then check distance/orientation and whether prompt requires holding. **Do not** conclude the game is broken because a guide lists a key that isn't currently offered. [C03,C05,C09,C25]

**Horse identity & clothes:** D10 owns stored outfit logic and warm/cold use; D01 owns horse interactions/cargo. D07 only distinguishes *the wheel or mounted prompt surface*. It does not decide whether a specific horse, brush or saddle is owned. [C24,C25]

## 6. Map, HUD/radar, Journal, Log, Player, Progress and Compendium — different evidence surfaces

**Information surface choice matters more than a memorized shortcut.** Read the label on the opened page; the same direction button's **tap vs hold** can select different information. [C06,C07,C26]

| Surface | Console typical entrance / PC indicative key | What information it can show | What it **cannot** independently prove |
|---|---|---|---|
| **Map / waypoint / legend** | Hold PS **Options** / Xbox **Menu/Start** (published baseline), or Pause → Map. PC typically \`M\` | Destination markers, waypoint/route, roads, discoveries; legend distinguishes mission/optional/shop icons | Story mission completed, actual fast travel unlocked, player physically visited point, journal entry read |
| **Radar and HUD** | Console D-pad **Down** tap: info/current objective; **hold**: radar modes; PC commonly \`Left Alt\` show info and radar mode | Current objective/temporary alert, time/temperature/Honor and minimap visibility | Saved completion, Gold medal, all loot collected or active hidden challenge |
| **Log / task feed** | **Tap D-pad Left** / PC commonly \`L\` | Current notices, activity/task context and recent prompts where present | All chapters' missions or an immutable validated campaign ledger |
| **Journal** | **Hold D-pad Left** / PC commonly \`J\` | Arthur's illustrated notebook, written observations and story/world details | Mission Gold result, verified complete Compendium, a receipt for every collectible; entry timing may lag |
| **Player status** | Pause → **Player** | Arthur's Health/Stamina/Dead Eye XP, condition and growth | Which exact Dead Eye stage was just unlocked, all story missions Gold, counted challenge tier if not checked |
| **Compendium** | Pause → **Progress → Compendium** | Discovered animal, fish, plant, horse, weapons/equipment/categories and **entry-specific** studied/tracked/skinned/used flags | All 100% tasks, trophy, player physically carried an item, every entry entirely complete |
| **Progress / Challenges** | Pause → **Progress → Challenges** | Current challenge strand and active sequential rank | Future tier credit; does not turn a screenshot into a successful challenge action |
| **Progress / Total Completion** | Pause → **Progress → Total Completion** | **Official in-game 100% subset** categories/checkmarks | All Compendium entries, every chapter's all-Gold, exhaustive equipment collection |
| **Progress / Story** | Pause → **Progress → Story** | Recorded mission entry/medal/checklist and Replay option where applicable | Original-world save was just made, Gold medal persisted after loading a specific slot |
| **Story / Save Game or Load Game** | Pause → **Story** | Current manual save availability, slot list, confirmation and restore choices | That a medal/pelt/Honor claim is present without checking related post-save evidence |

**Map semantics:** PlayStation.Blog identifies **yellow story icons** and **white ambient/optional events** at launch. These are navigational hints, not guaranteed mission outcome or “all white dots are repeatable/one-time” rules. **Setting a waypoint doesn't unlock a stagecoach/fast travel station** (D11 owns) [C27].

**Journal vs Log is a real distinction:** Console **tap left** = quick Log, **hold left** = illustrated Journal. PC \`L\` and \`J\` are separate named commands in older reference charts. In-game Journal writing/timing is story/contextual and cannot be treated as a comprehensive live task feed or progress proof; wiki documents some updates after time advance. D24 owns mission save/replay criteria and verification [C26,C28].

**Compendium semantics (read-only D15):** \`DISCOVER ≠ STUDY ≠ TRACK ≠ KILL ≠ SKIN ≠ PICK ≠ CRAFT ≠ OBTAIN ≠ USE ≠ INSPECT\`. Animal \`Studied\` must show the corresponding flag; a plant \`Picked\` and an equipment item \`Used\` have other conditions. For official 100%, **subset thresholds**, not every Compendium entry, apply. No D07 controls guidance should present a button tap as an achievement, mission Gold or saved completion. [C07,C11,C14,C29]

## 7. Platform, scheme and input-reference crosswalk — defaults only

**Controller examples are conventional PS4/Xbox One original standard layout.** Modern PC gamepad prompts, alternative accessibility/control schemes, display glyph sets and key mapping can differ. **Always prioritize the actual on-screen prompt and configured mapping**, then use the table for orientation [C04,C15,C22,C23].

| Intended action | PS4 original standard | Xbox One original standard | PC **indicative default** | Caveat |
|---|---|---|---|---|
| Focus character / animal | **hold L2** | **hold LT** | **RMB hold** | Holstered focus versus weapon aim changes prompt |
| Greet / positive focus option | **□** | **X** | Often **R** under RMB target | Option not available in every encounter |
| Antagonize / negative focus option | **○** | **B** | Often **F** under RMB target | Can escalate NPC interaction; D13 owns law |
| Rob / context third option | **△** | **Y** | Often **E** under RMB target | Exists only when target offers it; dangerous |
| Fire | **R2** | **RT** | **LMB** | Not an “inspect” button |
| Weapon wheel | **hold L1** | **hold LB** | **hold Tab** | Wheel selection held, tab switch separately |
| Item wheel | **L1 held + R1 tab** | **LB held + RB tab** | **F4** in 2019 reference | PC older guide variants conflict, inspect mapping |
| Study live animal | **hold R1** when prompted | **hold RB** when prompted | Focus and named \`Study\` key | Not the same as info view, can't prefill missing prompt |
| Eagle Eye exploration | **L3 + R3** | **LS + RS** | **Caps Lock or MMB** depending context | Aim state switches to Dead Eye |
| Dead Eye combat | **L2 aim + R3** | **LT aim + RS** | **RMB aim + Caps/MMB** | Manual mark is later story gate (D09) |
| Manual Dead Eye X | **R1** | **RB** | Commonly **Q** | **Chapter 2 gate**; not always available |
| Satchel | **hold D-pad Right** | **hold D-pad Right** | **B** in 2019 reference | Some wheel guides incorrectly group with item wheel |
| Log | **tap D-pad Left** | **tap D-pad Left** | **L** | Not illustrated journal |
| Journal | **hold D-pad Left** | **hold D-pad Left** | **J** | Journal timing/context independent of Log |
| Map | **hold Options** | **hold Menu** | **M** | Standard guide; can always navigate Pause → Map if allowed |
| Display HUD info / radar mode | **D-pad Down** tap/hold | **D-pad Down** tap/hold | **Left Alt** tap/hold | HUD settings/control variants |
| Mount / dismount | **△** | **Y** | **E** common | Conditional target, proximity, horse/wagon context |
| Camera/cinematic | **Touchpad** tap/hold | **View** tap/hold | **V** tap/hold | Camera modes may change perceived input |
| Pause / Settings | **Options** | **Menu** | \`P\` in some PC charts / **Esc** often toggles menus | **Conflicting PC bindings**, prefer displayed Settings control |

**PC customization:** [PCGamingWiki's RDR2 input page](https://www.pcgamingwiki.com/wiki/Red_Dead_Redemption_2) and [Twinfinite's PC remapping article](https://twinfinite.net/guides/red-dead-redemption-2-pc-controls-remap-keybinds-controls-how/) describe \`Pause → Settings → Controls → Keyboard & Mouse → Key Mapping\` **from gameplay**. The game's available remapping is authoritative for the player's installation; some keys are reserved / duplicate binding behavior and launcher overlays may constrain changes. Changing mouse sensitivity, aim assist, button hold speed or sprint style is a **preference**, not a plot gate; do not change another person's PC settings automatically. [C15,C22]

**Console controller customization:** Guides list different **Standard / Standard FPS / Alternate**-type layouts and camera/horse-relative movement options depending platform/version; do not claim free per-button RDR2 Story controller remapping identical to PC keyboard remapping. Consult actual \`Settings → Controls\` screen and OS controller remapping separately where available, without asserting the console player made the change. [C04,C23]

**Explicit reject:** a 2026 control comparison website includes a **“Nintendo Switch” RDR2 layout** as hypothetical equivalent even though that page admits some games lack the platform. **This is NOT proof of a released RDR2 Switch Story Mode edition or actual tested controls**. RDR1 Switch controls and RDR2 Online emotes also do not apply [C30].

## 8. Conditional Chapter 2 gates, three real-play examples and recovery script

### 8A — No universal “all actions unlocked in Chapter 2” rule

| Gate / prompt family | General Story Mode rule | What to verify in user's visible session | Claim |
|---|---|---|---|
| Basic dialogue / map / satchel | Available during supported ordinary exploration with safe target/state | Chapter/free-roam control reported, item/NPC nearby, precise prompt appears | C01,C03,C06 |
| Animal \`Study\` / \`Show Info\` | Eligible wildlife and focus or binoculars; distance/tool/context relevant | Animal alive/visible, info and \`Study\` prompt, Compendium post-action entry | C10,C11 |
| Animal \`Track\` | Eagle Eye and trackable sign/trail; distinct from Study | Visible trail highlight, actual \`Track\` option and follow action | C12 |
| Manual Dead Eye X | **Chapter 2 \`Pouring Forth Oil IV\` ability** (normal story sequence) | Actual ability tutorial or user-confirmed story completion; button offered | C19 |
| Horse-care brush / stable | Normal early **Hosea** story teaching unlock; mount and item ownership conditional | Actual horse/focus/wheel prompt and unlocked service, not merely Chapter 2 | C25 |
| Weather outfits on horse | Wardrobe **save** and **Store on Horse** distinct, depends on gear/saddlebag | Actual stored-outfit wheel category, not store purchase alone | C24 |
| Field camp wheel | Valid location, wheel action offered, no immediate suppressing activity | \`Set Up Camp\` available, successful camp; fast travel separately U04/version | C31 |
| Compendium studied / item used flags | Specific action on eligible target/item and correct category | Read \`Progress → Compendium\` subentry, not global progress | C29 |
| Mission replay/Save Game | Correct Progress/Story state; save/replay eligibility depends on current mission/cheats | Inspect actually enabled \`Story → Save Game\` or \`Progress → Story → Replay\` | C32 |

### 8B — Three Chapter 2, spoiler-light situations

**Situation A — polite conversation in Valentine, NPC focus shows several verbs.**  
**Start only if:** player is safely on foot, not in active firefight, has a nearby person willing to offer a prompt. **Action:** holster weapon if it is drawn, face chosen person, hold \`L2/LT\` (PC check actual \`Interact Lock-on\` mapping), and read the **live** \`Greet\` versus \`Antagonize\` versus optional \`Rob\` labels. Pick \`Greet\` only if actually offered; release/step away if unsafe. **Verify:** NPC audible/text response, optional Log only if relevant. **Avoid:** accidental weapon draw/firing or assuming that one greeting creates a persistent Honor reward, gives a quest, or earns anything. **Return:** continue town activity when ready [C01,C02,C09].

**Situation B — optional deer observation outside town, without turning it into a kill quota.**  
**Start only if:** safe free-roam encounter with living wild animal, available binoculars/visible focus prompt. **Action:** inspect from distance, choose \`Study\` on the animal if shown and check \`Show Info\`/recommended hunting weapon; if a trail appears, use **Eagle Eye** separately and read \`Track\`. **Verify:** exact species \`Studied\` or \`Tracked\` flag under \`Progress → Compendium\` (D15). **Avoid:** saying Dead Eye gives research credit, assuming study==skin, killing a 2★ specimen for perfect material, claiming 100% from one entry. **Stop** after one study/record observation and resume ride [C10,C11,C12,C14].

**Situation C — leaving Horseshoe Overlook, confuse wheel, Log and Journal.**  
**Start only if:** character can open normal exploration controls; own horse nearby only if player confirms. **Action:** hold console \`L1/LB\` and inspect Weapon Wheel; tab to **Items** for binoculars or provision. If intention is to check a recent task, **tap** D-pad Left for Log; if to read Arthur's narrative notes, **hold** Left for Journal; for route choose Map, for a verified milestone choose Progress/Story or Total Completion. On PC use named Key Mapping, not guessed “hold Tab+MMB” recipes. **Verify:** correct header/interface currently open. **Avoid:** selecting a rare consumable merely to learn controls, inferring a mission saved from the Journal, or claiming a map marker proves a new fast-travel destination. **Stop:** close menus and return to actual outing [C06,C21,C22,C26,C27].

### 8C — Five-second troubleshooting script
> “What is the **exact prompt text**, what button/glyph does it show, and is Arthur **on foot or mounted**, with a weapon out? If you can describe one screen, I can distinguish focus/inspect/use without assuming an unlock.”

If more context is needed, ask next about **platform/control preset** and whether a mission/animation is currently running. Do not demand screenshots for every simple instruction; an on-screen label described by the player is often enough.

## 9. Exact source register — URLs, chronology, scope and evidence classes

**Research check:** **2026-10-17** for every source listed; publication dates are separate and never implied to be current patch versions. **P1 = first-party platform editorial with hands-on gameplay (not Rockstar code/manual)**; **G = established independent control/guide reference**; **W = maintained community/technical reference (may mix game modes)**; **A = anecdotal PC player report**; **I = internal Hub read-only RESEARCHED — REVIEW PENDING**; **N = negative/wrong-title/platform caution**.

| E-ID | Source URL / publisher | Date and authority | Boundary or risk |
|---|---|---|---|
| **E01** | [PlayStation.Blog — 22 Things You Need to Know About RDR2](https://blog.playstation.com/2018/10/01/22-things-you-need-to-know-about-red-dead-redemption-2/) | 2018-10-01 · **P1/HIGH** PS4 hands-on | L1 wheel, R1 item tab, L2 conversation, HUD map marker colors; **not** current PC mapping |
| **E02** | [Shacknews — PS4 controls](https://www.shacknews.com/article/108116/playstation-4-controls-red-dead-redemption-2) | 2018-10, independent **G/HIGH** | Extensive standard PS4 table, original release; special contexts |
| **E03** | [Prima Games — RDR2 Controls](https://primagames.com/tips/red-dead-redemption-2-controls) | 2023-12-05, updated 2024-11-15 · **G/HIGH** | Separate horse/on-foot Xbox/PS4 mappings |
| **E04** | [Pro Game Guides — RDR2 Xbox & PlayStation controls](https://progameguides.com/red-dead-redemption/red-dead-redemption-2-controls-xbox-and-playstation/) | ~2022 guide, exact release citation **not independently verified**, **G/HIGH** | Log/Journal, D-pad HUD, map, animal Study |
| **E05** | [RDR2.org — Nonplayable Characters and interactions](https://www.rdr2.org/wiki/nonplayable-characters-npcs/) | 2018 Story wiki / **G/MEDIUM-HIGH** | L2/LT social choices; NPC states vary, over-broad Honor claims need D13 |
| **E06** | [Twinfinite — RDR2 Controls guide](https://twinfinite.net/guides/red-dead-redemption-2-controls-guide-sprint-jump-crouch-how/) | 2018 · **G/MEDIUM-HIGH** | Holster vs focus; Greet, Defuse, Antagonize; contextual |
| **E07** | [Shacknews — Complete Hunting Guide](https://www.shacknews.com/article/108167/complete-hunting-guide-red-dead-redemption-2) | 2018-10-26 · **G/HIGH** | Binocular \`Study\`, Compendium animal info, distinct hunting outcome |
| **E08** | [PowerPyx — Full Compendium](https://www.powerpyx.com/red-dead-redemption-2-full-compendium/) | 2018-11-21 · **G/HIGH** | \`Pause → Progress → Compendium\`; catalog ≠ official 100 |
| **E09** | [PowerPyx — Total Completion checklist](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/) | 2018-10-25 · **G/HIGH** | Official 100% thresholds; not all Compendium/Gold |
| **E10** | [StrategyWiki — RDR2 Controls](https://strategywiki.org/wiki/Red_Dead_Redemption_2/Controls) | community guide modified ~2024; **W/MEDIUM** | Console+PC tables; **direct read gave 403**, search snippets only; discount unverified detail |
| **E11** | [Steam Community — Comprehensive PC Keyboard Commands](https://steamcommunity.com/sharedfiles/filedetails/?id=2830924878) | 2022-07-06 · **W/MEDIUM-HIGH** player-created single-player mapping, not official | Includes Inspect, prompt pages, item wheel and distinct hotkeys |
| **E12** | [PCGamingWiki — Red Dead Redemption 2](https://www.pcgamingwiki.com/wiki/Red_Dead_Redemption_2) | community technical wiki, updated over time · **W/MEDIUM-HIGH** | PC remapping possible; **direct read 403**, search synopsis only |
| **E13** | [Twinfinite — How to Remap PC Controls](https://twinfinite.net/guides/red-dead-redemption-2-pc-controls-remap-keybinds-controls-how/) | 2019-11-06 · **G/HIGH** | Settings → Controls → Keyboard & Mouse; early PC specific |
| **E14** | [Knowledge Base — RDR2 Mouse and Keyboard Default Map](https://dontdrinkandroot.net/knowledgebase/article/36zckntcANaF72fv4BN24H) | 2019-11-24 · **W/MEDIUM-HIGH** | Explicit PC B/L/J/M/Tab/F4, RMB focus and prompt-page keys |
| **E15** | [SteamAH — RDR2 Default Keyboard Commands](https://steamah.com/red-dead-redemption-2-default-keyboard-commands/) | 2019-12-11 · **W/MEDIUM** | Same 2019 PC list, likely shared origin with E14, **not independent confirmation** |
| **E16** | [GameFAQs — Interaction prompt not appearing](https://gamefaqs.gamespot.com/boards/200179-red-dead-redemption-2/77164555) | 2018 · **A/LOW** | Specific roadside scenario and player-reported load/focus edge case, NOT proof prompt always delayed |
| **E17** | [Red Dead Wiki — Journal (RDR 2)](https://reddead.fandom.com/wiki/Journal_%28RDR_2%29) | community maintained, revision date unknown · **W/MEDIUM** | Notebook observational/timing nuances, NOT saved progress feed |
| **E18** | [Red Dead Wiki — Compendium](https://reddead.fandom.com/wiki/Compendium) | community maintained, revision date unknown · **W/MEDIUM** | Categories/contextual information; source isn't sufficient to claim trophy |
| **E19** | [Shacknews — How to Upgrade Dead Eye](https://www.shacknews.com/article/114815/how-to-upgrade-dead-eye-in-red-dead-redemption-2) | 2019-11-06 · **G/MEDIUM** | Ability stages and gating; later chapter mission gate details conflicting D09 |
| **E20** | [PlayStation controls — Spottis](https://www.spottis.com/games/red-dead-redemption-2-controls/) | initial 2018 · **W/MEDIUM** | On-foot vs horse, controller prompts; “Xbox One / PC” describes gamepad, NOT PC keyboard |
| **E21** | [RDR2-HUB D09 Dead Eye](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d09_cores_deadeye_growth_v0_1.md) | merged 2026-10-17 · **I/REVIEW PENDING** | Story ability stages/controls; never edit as D07 |
| **E22** | [RDR2-HUB D10 clothing](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d10_clothing_temperature_disguise_v0_1.md) | merged 2026-10-17 · **I/REVIEW PENDING** | Horse Wheel and outfit storage, identity effects |
| **E23** | [RDR2-HUB D11 travel](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d11_travel_wilderness_camps_v0_1.md) | merged 2026-10-17 · **I/REVIEW PENDING** | Map/waypoint, eligible camp wheel, patch-dependent fast travel |
| **E24** | [RDR2-HUB D15 Compendium](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d15_compendium_trackers_v0_1.md) | merged 2026-10-17 · **I/REVIEW PENDING** | Discover/Study/Track/Kill/Skin/Use and 100%-trophy separation |
| **E25** | [RDR2-HUB D24 replay/saves](https://github.com/L33TW0RLD/rdr2-hub/blob/main/systems_atlas/dossiers/d24_replay_saves_medals_v0_1.md) | merged 2026-10-17 · **I/REVIEW PENDING** | Story/Progress/Save/Game menu and Gold accounting |
| **E26** | [PC controls — keymap.io](https://keymap.io/controls/red-dead-redemption-2/) | updated 2026-10-03 · **W/LOW for unsupported platforms** | Lists **hypothetical Switch labels** and contradicts multiple PC satchel/wheel defaults; do **not** promote as canonical |
| **E27** | [RDR2.org missing Journal forum](https://www.rdr2.org/forums/topic/3624-missing-journal/) | 2018-12-18 · **A/LOW** | Tap-left vs hold-left confirmation; players confused radar down and up |
| **E28** | [Red Dead Wiki — Controls in Redemption](https://reddead.fandom.com/wiki/Controls_in_Redemption) | community · **N WRONG GAME RDR1** | **NOT** evidence of RDR2 key layout, despite near-identical action labels |
| **E29** | [Rockstar Support — RDR1 mobile touch control layout](https://support.rockstargames.com/articles/CwtYAazPxaxyxtxy868jO/changing-touch-controls-layout-for-red-dead-redemption-on-android-and-ios) | 2025-12-02 · **N WRONG GAME RDR1** | Touch UI instructions must not be imported to RDR2 |
| **E30** | [Steam RDR2 2024 social input confusion](https://steamcommunity.com/app/1174180/discussions/0/4331977787515183961/) | 2024 discussion · **A/LOW**, exact topic primarily about Dead Eye Q | Q manual-mark reports depend on story gate and mappings; not stronger than D09 |

**Primary evidence limitation:** no official complete Rockstar cross-platform button-prompt reference or direct user gameplay test was obtained. E01 is **first-party PlayStation editorial**, not direct Rockstar API/mechanic code. E10/E12 were not fetchable in full; cite only retrievable search-text fragments, not asserted full-page verification. The 2019 PC mapping documents may share the same underlying list (E14/E15), so they are **not** independent proofs. Version exceptions remain labeled.

## 10. Claim-level ledger, contradictions, safe fallbacks and maturity

For all items below: **Checked 2026-10-17**, **RDR2 Story Mode** except explicit negative-source exclusions. Evidence labels are **CORROBORATED** (independent suitable sources); **SINGLE_SOURCE**; **DISPUTED**; **CONSUMER_RULE**; **UNKNOWN**. Confidence **HIGH/MEDIUM/LOW** is about the proposition, not task maturity or whether the user has performed it.

| ID | Exact claim or consumer rule | Exact E sources | Status / confidence |
|---|---|---|---|
| **C01** | Holstered PS L2/Xbox LT focus exposes context NPC responses, choices depend on encounter | E01 E05 E06 | CORROBORATED / HIGH |
| **C02** | Weapon aimed state and social focus reuse trigger context; shooting must not be treated as inspection | E02 E03 E06 | CORROBORATED / HIGH |
| **C03** | Mounted/on-foot/near-horse prompt tables differ; cannot transfer button meaning unchanged | E02 E03 E04 | CORROBORATED / HIGH |
| **C04** | Tap versus hold and active wheel changes same input action | E01 E02 E03 E04 | CORROBORATED / HIGH |
| **C05** | Inspect/Interact/Pick/Read/Loot require actual context action, not universal shortcut | E11 E14 E03 | CORROBORATED broad / MEDIUM each object |
| **C06** | Console tap-left Log versus hold-left Journal; PC L and J separate | E02 E04 E14 E27 | CORROBORATED / HIGH |
| **C07** | Menu shown/command selected ≠ action executed; confirm relevant feedback | E08 E09 E24 E25 | CONSUMER_RULE / HIGH |
| **C08** | Data record/achievement/player save require separate surfaces, not a tap confirmation | E08 E09 E24 E25 | CONSUMER_RULE / HIGH |
| **C09** | Threat/weapon, motion, item or mission context can change or suppress options; exact missing-prompt cause not inferable | E01 E05 E06 E16 | CORROBORATED broad / specific cause UNKNOWN |
| **C10** | Binocular study of living wildlife after visible prompt commonly R1/RB | E07 E02 E03 | CORROBORATED / HIGH |
| **C11** | Study and Info/Track/Skin separate animal interactions; individual Compendium flag needed | E07 E08 E18 E24 | CORROBORATED / HIGH broad |
| **C12** | Eagle Eye highlights trails and tracking cues; not Dead Eye firing/tagging | E21 E07 E20 | CORROBORATED / HIGH broad |
| **C13** | NPC greet/antagonize/defuse/rob prompts vary with target/social state; effects not guaranteed | E01 E05 E06 | CORROBORATED / HIGH for menus, UNKNOWN outcome |
| **C14** | Animal carcass skin/loot prompt ≠ successful live-animal study; D15 owns flags | E07 E24 | CORROBORATED / MEDIUM-HIGH |
| **C15** | PC default remapping is possible; some mappings may differ; inspect game's actual Key Mapping | E12 E13 E14 E11 | CORROBORATED / HIGH |
| **C16** | Hold Study/search/journal is distinct from tap; prompt page may have separate binding | E02 E04 E11 E14 | CORROBORATED / MEDIUM context |
| **C17** | Binoculars accessible through wheel where item is available; ownership/use unknown | E01 E07 | CORROBORATED / HIGH general |
| **C18** | Controller Eagle Eye L3+R3 vs aiming Dead Eye R3; PC input changes by aim/context | E02 E03 E21 | CORROBORATED / HIGH controller, MEDIUM PC |
| **C19** | Manual Dead Eye X gated by story Chapter 2, not always mapped active | E21 E19 | REVIEW_PENDING dependency / HIGH general |
| **C20** | Camera view/cinematic action has tap-vs-hold variants; not mission completion | E01 E02 E03 | CORROBORATED / HIGH |
| **C21** | Standard console hold L1/LB wheel and R1/RB support item tab | E01 E02 E03 | CORROBORATED / HIGH |
| **C22** | PC 2019 chart Tab/B/L/J/M/F4 actions exist as baseline, but alternative tables conflict | E11 E14 E15 versus E26 | CORROBORATED for documented historical layout / **DISPUTED universal** |
| **C23** | Controller presets differ from freely remappable PC keyboard scheme | E03 E12 E13 | CORROBORATED broad / MEDIUM preset detail |
| **C24** | Clothing/wheel owning/storing separate; item/consumable action has inventory cost | E22 E01 | REVIEW_PENDING internal, general action rule HIGH |
| **C25** | Horse interaction prompts vary with focus, location/mount/state | E02 E03 E20 | CORROBORATED / HIGH |
| **C26** | Journal illustrated notebook != quick Log; PC separate keys and update timing conditional | E06 E14 E17 E27 | CORROBORATED broad / timing MEDIUM |
| **C27** | Map waypoint/colored markers are information, not verified travel/mission completion | E01 E23 | CORROBORATED icon baseline / consumer HIGH |
| **C28** | Journal and story save/replay/medal verification must remain distinct | E17 E25 | REVIEW_PENDING internal / HIGH separation |
| **C29** | Compendium observation verbs and official 100%/trophy/Gold are different statuses | E08 E09 E18 E24 | CORROBORATED / HIGH |
| **C30** | RDR1/mobile/Switch-hypothetical/RDO mappings are not verified RDR2 Story platform controls | E26 E28 E29 | NEGATIVE_SOURCE / HIGH |
| **C31** | Wilderness camp prompt and fast travel eligibility are location/update/upgrade conditional | E23 E03 | REVIEW_PENDING internal / HIGH principle |
| **C32** | Story replay/Save Game affordances depend on game state and actual available menu | E25 E09 | REVIEW_PENDING internal / HIGH principle |

### Contradiction and exception register

| X-ID | Competing sources or risky shortcut | Resolution / recommended player-facing default |
|---|---|---|
| **X01 — PC “E does everything”** | E14 PC chart \`E\` is basic world interaction/mount, while *focused NPC greet* is usually \`R\` and antagonize \`F\`; E26 incorrectly collapses \`E\` into greeting | Distinguish **world interact** from **focused contextual verb**; hold RMB, read prompt's \`R/F/E\` glyph, current mapping wins |
| **X02 — item wheel and satchel on PC** | E14/E15/E11 list **Tab / F4 / B** separately; E26 states hold Tab + MMB to reach items and satchel | The two can coexist for wheel tab cycling but **satchel is not the item wheel**; \`B\` baseline and actual Key Mapping must be checked |
| **X03 — screenshot/guide prompt means universal option** | NPC optional \`Rob\`/defuse/mission choice differs from place/weapon/state; one game's prompt cannot establish another's | Observe exact live action text and press/hold indicator; lack of option = UNKNOWN cause, not proof of broken controls |
| **X04 — “Inspect = Study = Track”** | Generic guides use inspect colloquially; D15 distinguishes action flags | Require exact \`Study\` and Compendium \`Studied\` evidence; Eagle Eye \`Track\` and post-mortem inspect separate |
| **X05 — Eagle Eye versus Dead Eye input** | PC \`Caps/MMB\` shared; controller left+right sticks vs aim+right stick | Disambiguate **aiming state and visual effect** first; D09 owns ability-stage requirements |
| **X06 — manual marking broken in early Chapter 2** | A generic controller reference lists \`R1\` / PC \`Q\`, but D09 research has Chapter 2 story gate | Mark A2 **not established until visible tutorial**; never force with XP or different key |
| **X07 — Log versus Journal** | Some articles say D-pad Left opens journal without distinguishing tap/hold; two authoritative controller charts do | **Tap left = Log; hold left = Journal**, check prompt; PC baseline \`L\` vs \`J\` |
| **X08 — universal PC Pause key** | E14 says \`P\`; other contemporary PC/Steam guides and players press \`Esc\` for pause; binding/preset differences | “Open Pause → Settings” without a universal PC key; use user's actual Pause mapping |
| **X09 — controller wheel always includes every weapon/hat** | E03 horse-mounted wheel differs; D10 outfits must be stored, D01 horse cargo is separate | Check available mounted/on-foot wheel and current horse/proximity; never infer ownership or persistence |
| **X10 — radar/info/up/down confusion** | E04 shows D-pad Down tap vs hold, E27 forum users dispute exactly what up/down holds do | Prefer E02/E04 and current HUD label; no assertion all layouts/patches give same cycling |
| **X11 — Nintendo Switch RDR2 support from table** | E26 generates equivalent Switch button labels, while E28/E29 concern **RDR1**, not RDR2 | **Do not list Switch as a verified RDR2 Story platform**; omit unverified key mapping |
| **X12 — map marker or journal entry = completed mission** | E01 world markers/Log and E17 notebook exist; E25 documents separate Story/medal/save checks | Use correct Progress/Story and actual save evidence, not navigation feed |
| **X13 — future/mission prompts always present** | Item/mission/quest ability state changes context; D09/D11/D24 conditional gates apply | Report \`UNKNOWN\` until observed; avoid promoting an external screenshot to player state |
| **X14 — style/Photo Mode controls are D07 core** | Camera view/cinematic buttons overlap D28 photography area | D07 owns interpretation only; D28 owns Photo Mode/camera mechanics; no forced photo unlock assumed |

### Risk hierarchy for quick guidance
1. **High consequence:** \`Aim/Fire/Rob/Threaten\`; \`Sell/Consume\` unique resources; overwrite a manual slot; enter active timed mission/replay. Stop and confirm target/input, consult appropriate domain dossier before action.
2. **Medium consequence:** sleep changes time, field-camp relocation, mounting/switching horse with physical cargo, NPC dialogue that could close a window; verify context and recipient, not blanket missability.
3. **Low consequence:** open Map, review Progress/Compendium, view Log/Journal, select weapon without firing, change radar/camera; still don't turn UI opening into actual completion.

## 11. Provisional relationships, completion-universe split, consumer handoff and reviewer gates

### 11A — S31 candidate scope, **UNRATIFIED** and no new source-of-truth

| Candidate only | Proposed scope | Why it cannot claim established authority |
|---|---|---|
| **S31.M01 — contextual prompts** | Actor/target, range, stance, focus, option list, tap/hold, target cycling and disabled actions | S31 is proposed taxonomy family; current source of truth remains observed UI and subsystem owners |
| **S31.M02 — observation tools** | Distinguish binoculars/Eagle Eye/Study/Show Info from Dead Eye aiming and manual tags | D09 owns Dead Eye stages; D04 animal quality; D15 flags; avoid duplicating full mechanics |
| **S31.M03 — information surfaces** | Map, task Log, Journal, Progress, Compendium, current objective, mission/medal/save evidence boundaries | D15 owns tracker rules; D24 owns Story/save/replay, S07 map |
| **S31.M04 — context and action safety** | Mounted/on-foot, wheel tabs, overlapping pickups, suppressed interactions, remap troubleshooting | D01 horse, D10 clothing, D11 travel, D13 law, D06 inventory own consequence details |

**Alternative if S31 declined:** keep D07 as a non-authoritative **cross-domain controls index** linking existing provisional Sxx.Mnn references, without publishing any new canonical S31 IDs. No migration, new registry or hard taxonomy edge is made by this specialist.

### 11B — Typed **provisional** edges; not executable unlock state

| Source → type → target | Meaning and evidence |
|---|---|
| \`S31.M01 (PROPOSED)\` → \`INTERACTS_WITH\` → \`S22.M04\` | NPC focus/choice UI surfaces (C01,C13); dialogue consequences D13/D21 external |
| \`S31.M02 (PROPOSED)\` → \`INTERACTS_WITH\` → \`S12.M02\` | Study, Show Info, Eagle Eye tracking context (C10,C12); **no hard Study prerequisite** inferred |
| \`S31.M02 (PROPOSED)\` → \`INTERACTS_WITH\` → \`S01.M03\` | Dead Eye mark controls, actual chapter gate D09-owned (C19) |
| \`S31.M03 (PROPOSED)\` → \`RECORDED_IN\` → \`S28.M03\` | Observed study/use info appears in separate Compendium entries (C29) |
| \`S31.M03 (PROPOSED)\` → \`INTERACTS_WITH\` → \`S30.M01/M04\` | Logs/objectives versus saves/Story evidence; **no alias** for completed mission (C28) |
| \`S31.M03 (PROPOSED)\` → \`INTERACTS_WITH\` → \`S07.M01\` | Map/waypoint controls; not a valid fast-travel unlock edge (C27) |
| \`S31.M04 (PROPOSED)\` → \`INTERACTS_WITH\` → \`S06.M02/M04\` | Horse focus/cargo and mounted prompts (C25) |
| \`S31.M04 (PROPOSED)\` → \`INTERACTS_WITH\` → \`S17.M01/M04\` | Equipped item vs acquired/document action; no item storage assumption (C24) |
| \`S31.M04 (PROPOSED)\` → \`HAZARD_TO\` → \`S05.M01\` | Misselected fire/rob can trigger law consequence; D13 owns actual outcome, **not automatic** (C02) |
| \`S31.M04 (PROPOSED)\` → \`INTERACTS_WITH\` → \`S07.M05\` | Campwheel prompt only in eligible location; D11 owner (C31) |

**No \`REQUIRES\` hard edge is invented** for context-dependent prompt visibility. If an individual verb has a verified story gate (manual Dead Eye), encode it only in its owning D09 dossier, not as a universal S31 availability.

### 11C — Goal scope

- **CONVENIENCE / IMMERSION:** prompt literacy is valuable for safe exploration, good dialogue, clean hunting, efficient journals and avoiding wrong inputs.
- **OFFICIAL_100:** opening or reading the Journal/Log/Map is not itself a listed “every prompt used” Total Completion criterion. Specific **Study/Track/Pick/Weapons Use** actions may feed **narrow** D15 categories, and missions/challenges have separate exact goal conditions. The **entire Compendium is not required** for official in-game 100% (E08/E09/E24).
- **ALL_GOLD:** a Gold medal requires actual mission-specific objectives, documented in original GameGuide/D24; an instruction “press L1/R1” or completed planning checklist cannot award Gold.
- **ACHIEVEMENTS:** Zoologist and Skin Deep require correct qualifying animal events, not generic \`Inspect\`; trophy/account validation remains distinct. No achievement is earned for merely looking at D07.
- **PERSONAL EXHAUSTIVE:** reading every document, journal sketch, all entries, photographing everything or trying every greeting are optional player-chosen goals; do not misclassify as official 100%.
- **NO TELEMETRY:** UI hints, modded keybind files or snapshots from the experimental decoder do not prove live save state.

### 11D — Exact consumer handoff

**GameGuide (read-only):** Use original [campaign](https://github.com/L33TW0RLD/rdr2/tree/main/campaign) and full approved mission Field Guide for current mission/Gold objective, not D07. When player asks “how do I pull him up / interact?”, answer the **precise current scene prompt and hold/tap condition** when reported; don't replace the full mission sequence, claim a skipped checkpoint counts for Gold, or write source data.

**Free Roam:** Show one optional **mechanic-learning moment** if relevant (“greet someone safely,” “study an animal,” “read notebook,” “set route”), and permit immediate return to adventure. Ask for context only if it changes advice. No grind, forced law encounter or invented collectible.

**Living Adventure Companion:** Use a compact contextual diagnostic header: \`Target | on-foot/mounted/aiming/menu | intended verb | currently visible glyph | safe next action | expected confirmation | evidence type | source confidence\`. If a button is not visible, label action **CONDITIONAL/UNKNOWN** and ask for on-screen prompt rather than rendering an inert “perform” button. Preserve the return path to the current full Mission Control guide.

### 11E — Required coordinator review and bounded future observations (not self-assigned)

1. **Platform capture sample:** if/when player naturally encounters a pedestrian on PC/controller, document focus target/action glyph, holstered/drawn state; compare to §7. This is a test proposal, not an executed observation.
2. **PC wheel mismatch:** on current installed version compare actual Key Mapping \`Open Item Wheel\`, \`Satchel\`, \`Next Wheel Menu\` with conflicting E14/E26 — no general “Tab+MMB” assertion.
3. **Wildlife:** on an ordinary animal, capture \`Study\` then specific Compendium flag; distinguish Info, tracking and carcass Skin separately (D04/D15 owner read-only).
4. **Journal & Log:** compare tap vs hold D-pad Left, plus PC J/L against actual layouts, and note whether menu is disabled during an active mission.
5. **Owner taxonomy decision:** accept S31 as candidate family, keep a cross-index or request changes via **separate governance task**. Researcher cannot canonize IDs from a dossier.
6. **Source hygiene review:** recheck 2019 PC maps, current guide edition, wrong-title Switch/RDR1 tables and technically inaccessible StrategyWiki/PCGamingWiki text; never silently upgrade secondary/unread material to publisher proof.

**Acceptance report:** all 11 substantive sections; source-specific E01–E30 URLs with checked dates, 32 C-level propositions and 14 X-level exception entries; console/PC control table; observable eligibility matrix; focus versus inspect, Study/Track, Eye modes, weapon/item/horse wheels, mounted context, Journal/Log, map/Compendium/Progress/save distinctions; exactly three spoiler-light Chapter 2 examples; provisional-only S31.M01–M04 + typed advisory links; five cross-dossier read-only ownership boundaries; no false player progress. **Submission maturity is RESEARCHED — REVIEW PENDING, NOT ADOPTED.** Task stops at \`DELIVERED_REVIEW_PENDING\` only after committed handoff/checkpoint and scoped branch verification.