# Systems Atlas — Parallel Research Wave 1

**Coordinated:** 2026-10-17. **Status:** 6 registered independent task branches; agents not automatically launched by GitHub.
**Owner direction:** prioritize Atlas production first. The previous sequential D01→D02→D04 thread allocation is **superseded for this wave**; each specialist conversation remains reusable for future work.

## Six independent specialists

| Specialist | Initial dossier | GitHub issue | Branch | Exclusive research file |
|---|---|---|---|---|
| 007 Horse & travel specialist | D01 Horse lifecycle | [#5](https://github.com/L33TW0RLD/rdr2-hub/issues/5) | `agent/atlas-horses-007` | `systems_atlas/dossiers/d01_horse_lifecycle_v0_1.md` |
| 008 Camp economy specialist | D02 Ledger/upgrades | [#6](https://github.com/L33TW0RLD/rdr2-hub/issues/6) | `agent/atlas-camp-008` | `systems_atlas/dossiers/d02_camp_ledger_upgrades_v0_1.md` |
| 009 Hunting/ecology specialist | D04 Clean kills/material transport | [#7](https://github.com/L33TW0RLD/rdr2-hub/issues/7) | `agent/atlas-hunting-009` | `systems_atlas/dossiers/d04_hunting_transport_v0_1.md` |
| 011 Crafting specialist | D03 Pearson/satchels | [#11](https://github.com/L33TW0RLD/rdr2-hub/issues/11) | `agent/atlas-satchels-011` | `systems_atlas/dossiers/d03_satchels_crafting_v0_1.md` |
| 012 Camp life specialist | D05 Invitations/item requests | [#12](https://github.com/L33TW0RLD/rdr2-hub/issues/12) | `agent/atlas-camplife-012` | `systems_atlas/dossiers/d05_camp_life_opportunities_v0_1.md` |
| 013 Inventory specialist | D06 Unique items/disposition | [#13](https://github.com/L33TW0RLD/rdr2-hub/issues/13) | `agent/atlas-inventory-013` | `systems_atlas/dossiers/d06_inventory_items_v0_1.md` |

Each registered task also has an **exclusive** `agents/checkpoints/atlas_..._NNN.md` and `agents/handoffs/2026-10-17_atlas_..._NNN.md` as listed in the operative main registry. Workers cannot edit another dossier, Atlas taxonomies, shared indexes, `knowledge/`, Free Roam, Mission Control or the original `rdr2/` repo.

## Parallel source ownership and contradictions

- **D01 horses** owns horse categories, stable/saddle/cargo and loss. **D04 hunting** links to horse carrying but owns field hunting behavior.
- **D02 camp Ledger** owns purchasing, camp cash and upgrades. **D03 satchels** owns exact recipes, Pearson materials and item recipient/crafting semantics; may cite D02 *read-only*.
- **D04 hunting** owns star quality, clean kills and field transportation. **D03** consumes source-backed materials but does not rewrite hunting rules.
- **D05 camp life** owns camp companion interactions, invitations and requests; broad Chapter 2 mission-expiry taxonomy D08 remains unassigned.
- **D06 inventory** owns general item types, capacity, preservation and safe dispositions; defer exact satchel recipes to D03 and hunting field transport to D04.
- Competing factual claims must be recorded as explicit dispute entries in each author's own dossier and escalated in the handoff; no multi-agent overwrites.

## Start / launch gate

1. **Human user opens specialist ChatGPT conversations** and gives each its *registered task ID and issue*. GitHub branches and issues do not execute agents.
2. Before more than two **simultaneous** research workers, satisfy the existing [pre-scaling gate](../protocol/parallel_agent_workflow.md): verify active workers' initial committed checkpoints, a real cold-start recovery of task/branch/next action, nonoverlapping leases and a plan to integrate without index collisions.
3. Once that check is passed, six workers can research concurrently in separate threads with their own scoped branches. If the gate is not verified, describe the wave as **registered / ready**, not already running.
4. Each worker must commit a source-backed dossier plus a handoff at `DELIVERED_REVIEW_PENDING`. Close the *task*, not the conversation; assign future Dxx tasks separately.
5. Coordinator reviews claimed source facts, crosslinks and consistency **after** individual deliveries. Reviewer alone updates shared Atlas index and coverage manifest, creates sequential integration PRs after owner approval, and leaves `RESEARCHED — REVIEW PENDING` intact until explicitly adopted.

## Quality contract

Every dossier follows [Atlas backlog](../systems_atlas/taxonomy_research_backlog_v0_1.md) and [shared record contract](../knowledge/record_contract_v1.md): RDR2 **Story Mode**, T0/T1 default, chapter/platform differences, exact claim URL/date/confidence, contradictions, safe conditional unlock guidance, three practical scenarios, relationship map, gameplay risks and precise cited goal criterion scope.

**Player-specific state does not belong in an Atlas dossier.** It cannot award medals, report a saved game, or prove an item owned or upgrade purchased.

## Future wave ideas (not registered)

D07 contextual controls subject to S31 decision; D08 Chapter 2 optional windows; D09 cores/Dead Eye; D10 clothes/law identification; D13 law/Honor; D15 Compendium/completion. Priority after reviewing Wave 1 and current gameplay needs. Do not generate a pile of empty files.
