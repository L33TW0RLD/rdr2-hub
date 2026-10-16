# Read-only Atlas lookup pilot v0.1
**Status:** hand-authored demonstration, not a parsed API or adopted mechanics dossier. Agent 005 reconciliation remains unratified.

## Transient interface
Input `{query_or_ref, depth: Quick|Practical|Comprehensive, context, return_to, spoiler_budget}`. Output `{mechanic_id, display_name, aliases, summary, procedure, general_gate, player_gate_unknown, source_status, confidence, spoiler_tier, related_topic_ids, evidence_links, return_to}`. No storage, no player-state writes. Resolve exact ID before aliases; ambiguous aliases prompt clarification. All three sample leaves are **INDEXED**, not ADOPTED. Exact claims without resolved sources are UNKNOWN; do not invent links or numeric guarantees. Default spoiler T0/T1.

| Topic | Proposed leaf | Quick | Practical | Comprehensive boundary |
|---|---|---|---|---|
| Horse bonding | S06.M02 | Caring for and calming a horse supports affinity. | Feed, pat/calm, hitch or brush **only if actually available**; inspect bond indication in game. | Explain horse cores, bonding/commands, risks, U01 brush/stable gate, and links S06.M01/S06.M03/S07.M02. Do not assert horse ownership, exact XP increments or fully verified unlocks. |
| Camp Ledger | S09.M01 | Camp Ledger is a conditional upgrade-management facility. | Check camp for Ledger and actual Strauss-debt recovery/deposit; inspect visible options before planning a purchase. | Separate Ledger gate U02, upgrades S09.M04 and satchel S10.M02; no automatic claim of unlocked tools, money or purchased items. |
| Perfect-pelt hunting | S12.M03 | Starting animal quality and clean killing method both matter. | Study animal quality, match species-appropriate weapon/ammunition and shot, inspect resulting pelt. | Discuss species differences, weapon availability, pelt degradation, cargo/transport and S12.M01/S04.M01/S10.M03; exact species weapon charts require sourced dossier. |

## Evidence crosswalk
Agent 002 taxonomy `agent/atlas-taxonomy-002/systems_atlas/mechanics_taxonomy_v0_2.md`; Agent 005 `agent/atlas-reconcile-005/systems_atlas/taxonomy_reconciliation_005.md`; original `rdr2/protocol/walkthrough_presentation.md` for mission integration. These are provenance *locations*, not proof every mechanic claim was individually verified. Each topic's `player_gate_unknown=true`, `source_status=INDEXED / claim-specific UNKNOWN`, `confidence=UNKNOWN for precise quantities and gates`, `spoiler_tier=T0/T1`.

## Return handling
From camp outing, Atlas answer ends with "Return to camp project" preserving conversational intent. From a mission, mechanics answer must preserve current mission ID and phase; returning invokes full original Field Guide v1.1, not an abbreviated replacement. If phase is lost, ask player to identify it and reconstruct full guide from GitHub.
