# Systems Atlas — Parallel Research Wave 2

**Registered:** 2026-10-17 · **Status:** SIX NEW TASK ASSIGNMENTS / NOT AUTOMATICALLY RUNNING.

## Purpose

Complete the next six **useful Chapter 2 and evergreen gameplay systems** with six **existing, reusable specialist conversations**, not six disposable chats. The Wave 1 tasks (D01–D06) are already `MERGED`; their content is `RESEARCHED — REVIEW PENDING`, not mechanically ADOPTED. Each worker fetches latest `main`, then switches to its **separate Wave 2 branch and new checkpoint**.

| Existing thread | New task | Dossier | Issue | New branch |
|---|---|---|---|---|
| Horse/travel specialist **007** | `atlas-travel-014` | **D11** traversal, fast travel and wilderness camps | [#17](https://github.com/L33TW0RLD/rdr2-hub/issues/17) | `agent/atlas-travel-014` |
| Camp economy specialist **008** | `atlas-law-015` | **D13** law, Honor, witness/bounty and robbery consequences | [#18](https://github.com/L33TW0RLD/rdr2-hub/issues/18) | `agent/atlas-law-015` |
| Hunting/combat specialist **009** | `atlas-deadeye-016` | **D09** cores, Dead Eye levels and character growth | [#19](https://github.com/L33TW0RLD/rdr2-hub/issues/19) | `agent/atlas-deadeye-016` |
| Satchel/crafting specialist **011** | `atlas-foraging-017` | **D12** herbs, food, cooking and recipe families | [#20](https://github.com/L33TW0RLD/rdr2-hub/issues/20) | `agent/atlas-foraging-017` |
| Camp life specialist **012** | `atlas-chapter2-018` | **D08** chapter-sensitive side opportunities and missables | [#21](https://github.com/L33TW0RLD/rdr2-hub/issues/21) | `agent/atlas-chapter2-018` |
| Inventory specialist **013** | `atlas-compendium-019` | **D15** Compendium verbs and completion trackers | [#22](https://github.com/L33TW0RLD/rdr2-hub/issues/22) | `agent/atlas-compendium-019` |

## Production boundaries and read-only dependencies

- **D11** owns transport mechanisms, not horse lifecycle **D01**, camp upgrade prices **D02**, or coach robbery consequences **D13**.
- **D13** owns witness/law/Honor/bounty/robbery effects, not clothing temperatures and outfit primary research reserved for **D10**.
- **D09** owns cores, XP, general Dead Eye stage behavior, not weapons/animal-quality clean kills in **D04** or recipes in **D12**.
- **D12** owns herbs, cooking, ingredient and recipe category facts; Pearson satchel/camp décor remains **D03**; inventory capacity **D06**; character core effects **D09**.
- **D08** owns optional *story* and mission-adjacent Chapter 2 closing-window taxonomy, read-only linking to **D05** camp invitations. It does **not** create missions, mark player progress or write old `rdr2`.
- **D15** owns Compendium and official completion tracker semantics, not complete collectible locations (**D20**) nor save/replay/medal accounting (**D24**).

Use the published [Wave 1 cross-dossier review](../systems_atlas/reviews/2026-10-17_wave1_cross_dossier_review.md) as a read-only evidence caveat. Do not silently resolve contentious recipe, price, cargo, chapter-window or achievement claims. S31, schema edges and leaf IDs remain provisional.

## Required task lifecycle

1. User opens **the existing specialist conversation** and instructs it to continue with only the listed **new** task ID/issue and new branch. The chat stays reusable for future work but cannot self-assign.
2. Specialist reads current main registry and exact issue, verifies new branch and exclusive paths, then commits the **new task's initial checkpoint before substantive research**.
3. Specialist delivers one complete Dxx source-checked Story Mode dossier with appropriate T0/T1 default, conditional gates, claim ledger, source dates, contradiction table, three practical examples and consumer guidance.
4. Commit final checkpoint and handoff and independently verify exact branch readback and changed file lease. Stop task at `DELIVERED_REVIEW_PENDING`; no self-merge or adoption.
5. Coordinator cross-reviews adjacent domains, integrates unchanged research in a separate PR, updates Atlas index and records actual terminal SHA. `RESEARCHED — REVIEW PENDING` is distinct from ADOPTED player instruction.
6. No automated background agent or game-state tracking follows from branch/issue creation. `L33TW0RLD/rdr2/campaign/` remains authoritative.

**Registration baseline:** `9931058e69ac3c6e7923841da87813de7f015f41` for all six new branches. Current main may advance after registration: compare, do not force-reset or rebase prior completed work.

## Later topics (not registered)

D07 proposed contextual controls/S31 gate, D10 clothing/weather/witness outfit, D14 town services/games, D16 fishing, D17 legendary animals, D18 strangers, D20 collections, and D24 replay/saves, plus remaining Dxx backlog. Choose next wave based on Chapter 2 player value and actual reviewed gaps, not only article counts.
