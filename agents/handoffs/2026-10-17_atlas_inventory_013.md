# RDR2 HUB — Atlas Inventory 013 Final Handoff

**Task:** `atlas-inventory-013` · **Issue:** [#13](https://github.com/L33TW0RLD/rdr2-hub/issues/13)  
**Working branch:** `agent/atlas-inventory-013`  
**Registration baseline main SHA:** `e549cc963a0e8dabb918bfecd7f1b8ace8f829dc`  
**Coordination main SHA read at start:** `6246ab38eede37d64b29e6a259238d65efc48006` (one main-only coordination commit newer than branch base)  
**Task status:** `DELIVERED_REVIEW_PENDING` — subject to final exact-branch readback; no adoption, ratification, integration PR or merge.  
**Content maturity:** `RESEARCHED_REVIEW_PENDING`, NOT `ADOPTED`.  
**Specialist conversation:** Retain for later separately assigned task; no self-assignment.

## Exact leased deliverables

1. [D06 source-checked dossier](../../systems_atlas/dossiers/d06_inventory_items_v0_1.md) — `systems_atlas/dossiers/d06_inventory_items_v0_1.md`, committed at `c7cfcff2ab7057e7c6b0a3f4627ca6be0ec66211`.
2. [Checkpoint](../checkpoints/atlas_inventory_013.md) — `agents/checkpoints/atlas_inventory_013.md`. Initial checkpoint **before substantive research:** `0837c3c2591adca2abfd7d5d112a8e0e07704f70`. Post-dossier checkpoint: `17b03821b64878bc4cfad81c146d345e0610c348`.
3. This final handoff — `agents/handoffs/2026-10-17_atlas_inventory_013.md`.

**All writes limited to these three paths** on the assigned branch. No shared-index, taxonomy, registry, companion, Free Roam, Mission Control, campaign or original `L33TW0RLD/rdr2` writes.

## Completed acceptance

- D06 `S17.M01–M05` general rules plus read-only `S13.M04` and `S18.M03` relationships; T0/T1 Story Mode.
- **13 source-backed item-class rows** addressing ordinary valuables, named craft jewelry, quest/unique components, documents/letters, treasure materials, cards, ingredients, tonics/provisions, weapons/ammo, pelts/legendary exceptions and requests. Each has normal safe action, exception/risk and in-game check.
- Distinct **INSPECT / HOLD / PROTECT / RESERVE / USE / CRAFT / SELL / DONATE / legitimate STORE** logic; no imaginary valuables chest or equating horse cargo with satchel inventory.
- Pearson crafting, Pearson provisions, Trapper, butcher, Fence **Craft** versus **Sell**, camp contributions, post office and NPC hand-ins separated.
- Satchel category capacity and Legend of East “most, not literally all” logic; patch-era weapons locker distinguished from ordinary item storage; ammo separate.
- Source register **E01–E21** (Rockstar primary narrow pelt rule; specialist guides; community corroboration clearly downgraded; legacy inventory blueprint called DRAFT).
- Consequential claims **C01–C23**, each with sources, confidence and epistemic status.
- Specific **DISPUTED** flags for Old Brass Compass missability, “99 everything,” saddlebag transfer, regional Fence availability and contradictory card shorthand.
- Three practical Chapter 2-safe examples: Silver Chain Bracelet, treasure reward, named Fountain Pen; plus explicit mistakes and GameGuide/Free Roam read-only handoff.
- Official-100 criterion distinction: one collectible **12-card set**, one treasure chain and six differentiated craft categories, not a general claim all valuables or unique items are required.
- **No player's items, quantities, unlocked shops/satchels, saves, medals, missing rewards or current progress invented**.

## Evidence and source limits

- [Rockstar Games Support — lost legendary pelts](https://support.rockstargames.com/articles/480idh1zECJ0ojrheApV1U/unable-to-skin-legendary-animals-or-losing-their-pelts-in-red-dead-redemption-2), updated May 1, 2024: **HIGH** narrow pelt/carcass appears in Trapper inventory after short delay; does NOT guarantee monetary proceeds or recovery of ordinary/unique items.
- [PowerPyx — talismans](https://www.powerpyx.com/red-dead-redemption-2-how-to-get-talismans/) and [GameSpot guide](https://www.gamespot.com/articles/red-dead-2-perks-guide-talismans-trinkets-and-ever/1100-6462837/): **HIGH** for named ingredients, general Fence crafting, passive effects. Fence “sold does not become crafting bank” supported by guide/menu and independent [reported experiences](https://www.reddit.com/r/reddeadredemption2/comments/kkwoel/), **MEDIUM/HIGH**, direct UI test still desirable.
- [RDR2.org Pearson guide](https://www.rdr2.org/guides/story-mode/pearson-crafting-guide/) and [satchel guide](https://www.rdr2.org/guides/red-dead-redemption-2-satchel-crafting-guide-increase-inventory-space/): category upgrade and destination mechanics **HIGH**; D03 owns full recipe matrix.
- [PowerPyx cigarette cards](https://www.powerpyx.com/red-dead-redemption-2-all-cigarette-card-locations/) and [Total Completion](https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/): **HIGH** for one 12-card set completion criterion versus wider collector quest.
- [Rockstar 1.20 historic patch notes](https://support.rockstargames.com/articles/360052358313/RDR2-Title-Update-1-20-Notes-PS4-Xbox-One-PC-Stadia) currently redirect to Support index; [third-party reproduction](https://halfglassgaming.com/2020/07/red-dead-redemption-2-update-1-20-full-patch-notes/) supports Story Mode weapons locker, but direct official note readback **NOT AVAILABLE**. Confirmation in current Story Mode UI recommended.
- [Red Dead Wiki satchel](https://reddead.fandom.com/wiki/Satchel) provides exceptions such as watch caps; **MEDIUM** community-level, not an exact engine-level assertion. Verify individual items and platform/version in game.
- [PowerPyx talisman guide](https://www.powerpyx.com/red-dead-redemption-2-how-to-get-talismans/) says no talisman missable; comments/other player reports dispute repeat access to the Old Brass Compass. **Do not** adopt either blanket conclusion without controlled test.
- Other sources are fully recorded with URLs, check dates and claim IDs in the dossier.

## Dependency compatibility / conflicts requiring coordinator review

- **D03 — atlas-satchels-011:** exact Pearson recipes, tool gates, donated material persistence; this dossier uses read-only S10 links and no exact recipe-matrix ownership.
- **D04 — atlas-hunting-009:** field carry, carcass/pelt quality, delivery risk; only D06 recipient decisions and Rockstar's clearly scoped lost-legendary-pelt exception supplied here.
- **D01 — atlas-horses-007:** physical mounted cargo, weapons and outfits; D06 only rejects generic satchel overflow assumptions.
- **D02 — atlas-camp-008:** cash/valuation/ledger and donation funds; D06 only names camp as separate destination.
- **D05 — atlas-camplife-012:** favors, camp request triggers and chapter windows; D06 only handles exact item identity and reserve logic.
- Each named source leaf has **INDEXED/provisional** status in main taxonomy; unmerged new specialists were not consulted as settled authority. After individual specialist delivery, coordinator should compare competing recipient, inventory and timing claims, not edit them cross-branch.

## Verification performed / required final check

At dossier commit `c7cfcff`, explicit-ref readback confirmed complete dossier (253 lines, 41,275 characters), all named leaves, 3 scenarios, C23 present, Rockstar official loss exception, disputes, unknown-player-state boundary. Branch compare then showed exactly two allowed paths: checkpoint and dossier, ahead two/behind one versus `main`. 

**Final operator check after this handoff is committed:** fetch this file, dossier, checkpoint by **explicit branch ref**; compare fresh main vs branch and confirm exactly these **three** paths; record terminal SHA in task closeout/chat. This handoff cannot self-certify its own commit SHA.

## Missing tests / necessary owner decisions

- Directly inspect in-game Fence Craft and Sell distinction with **spare**, not final-required, components.
- Independently retest item caps (especially watch exceptions), contemporary locker location, and whether named special items may truly be sold, reobtained or permanently missed.
- Resolve Old Brass Compass access contradiction without exploiting a save.
- Owner/coordinator decide whether to adopt proposed D06 preservation-first policy and its taxonomy relationships; avoid interpreting `RESEARCHED_REVIEW_PENDING` as approved.
- Review and conditionally integrate D01–D06 in an ordered coordinator-owned workflow; any index/manifest edits require separate authorization.

**Suggested separate future task (advisory, NOT assigned):** item-identity edge-case verification for precise “unique” objects and vendor menus based on user-observed screenshots or reproducible Story Mode UI. A new registry task/branch/lease must be assigned before additional writes.

**Stop:** Once final readbacks and compare confirm this delivery, close only task `atlas-inventory-013` at `DELIVERED_REVIEW_PENDING`. Do not merge/ratify, edit original repo or self-assign more work.
