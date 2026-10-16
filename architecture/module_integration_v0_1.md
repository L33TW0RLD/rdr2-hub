# RDR2 Hub — Module Integration & Authority Contract v0.1

**Status:** DRAFT / UNRATIFIED · 2026-10-16 · Agent 001 / Hub Architect  
**Intent:** Coordinate Mission Control, Free Roam Control and Systems Atlas without forming duplicate gameplay authorities. Agent 002 independently owns the Atlas taxonomy and schema.

## 1. One companion, three different responsibilities

| Capability | Reads | Decides / displays | May request | May persist |
|---|---|---|---|---|
| **Hub router / presentation orchestrator** | Current user message, most recent **canonical** campaign state, module indices | Selects active presentation and context; preserves return target *conceptually* | Clarifying observation only when necessary; a player report routed to GameGuide | **No** gameplay state |
| **Mission Control** (existing GameGuide) | `rdr2/campaign/`, `rdr2/missions/`, `rdr2/protocol/mission_preflight.md`, relevant sourced research | Mission candidate eligibility, Gold preflight, **complete** chronological Field Guide v1.1, medal reporting | Player evidence of medal, outcome, unique items, saves | **Sole authorized gameplay writer** through existing GameGuide protocol, after adequate player report/evidence |
| **Free Roam Control** | Canonical state *read-only*, actual user intent/observations, availability from Atlas, relevant researched intermission notes | One project, outing and meaningful alternatives; conditional urgency; gameplay goals | Ask what marker or unlock is visible; ask whether to pursue chosen outing or resume story | **None**; sends report to GameGuide review |
| **Systems Atlas** (Agent 002 research) | Published taxonomy and evidence-backed mechanics dossiers, dependency/availability notes | How systems work; unlock prerequisites, safety caveats, sources, suggested experimentation | Clarification of requested mechanic/detail level | **Research only** in its assigned lane, never live player state |
| **Campaign Review** (a view, not extra capability) | `rdr2/campaign/` and mission ledger | Progress/Gold/save/optional completion evidence summary | Player readback if exact fact disputed | **None**; GameGuide mediates correction |

**No common mutable Hub store is proposed.** A research file can specify that an activity *is possible after an unlock* but cannot assert that the player's save *contains* that unlock.

## 2. Canonical precedence and evidence

**Required read sequence for gameplay assertions:**
1. Fetch **latest** `L33TW0RLD/rdr2` `main` `campaign/current_state.md`.
2. For relevant claims, read `campaign/mission_ledger.md`, `campaign/save_log.md`, `campaign/resources.md`, `campaign/collectibles_and_missables.md` and relevant `missions/` files.
3. Read `rdr2-hub` designs/research and `rdr2/guides/` dossiers **as advisory**, preserving DRAFT / REVIEW PENDING / ADOPTED status.
4. Apply new player evidence from the current thread carefully. If it has not been committed to authority yet, label **REPORTED / PENDING RECORD REVIEW** rather than claiming canonical readback.
5. Resolve conflict by source class and observed date; never silently override a clear player screenshot with an older narrative note.

**Three critical distinctions:**
- An earned Gold medal may be shown in a Story screenshot while *the current saved-game slot* and *the player's latest save action* are separate unknowns.
- A mission shelf operation ID (e.g. `021`) is not a Rockstar sequence number nor a multiplier of earned Gold entries. Some multi-part missions have distinct eligibility.
- Prepared dossiers and GUI checklist ticks are not evidence that a mission, encounter, unlock, transaction or item has occurred.

### Example: medalled replay

Input: "Good, Honest, Snake Oil is Gold; see this Story menu screenshot."  
Mission Control: reviews image; if it clearly shows Gold and checked conditions, writes accepted Gold outcome while retaining prior Bronze/Silver attempt history. If the screenshot does not demonstrate a new manual save, save remains unreported.  
Free Roam Control: can use the new **verified** no-cleanup status after canonical readback; it must not write this count itself.  
Systems Atlas: might explain bounty capture technique but cannot touch the medal ledger.

## 3. Routing boundaries: mode ownership and handoffs

### Handoff FRC → Mission Control
**Trigger:** user selects actual story marker or asks for a named mission, or confirmed urgent skippable Gold stage makes roaming unsafe.
**Packet:** `intent=mission`, requested name/marker/operation **if known**, last verified chapter, reason for urgency if present, current uncertain inputs, "return_to=free_roam" when originally roaming.  
**Actions:** Mission Control verifies shelf/medal identity, actual in-game availability and Gold conditions via its existing preflight, then renders the **full** Field Guide v1.1 A→final. It does **not** create a secondary "Hub mission preview" with competing checklists.  
**Return:** after reported mission outcome and/or player requests leisure, router offers a concise trailhead, respecting whether free-roam control actually exists.

### Handoff FRC or Mission Control → Systems Atlas
**Trigger:** player asks "how?", "why?", "explain" or taps a relevant optional mechanics topic.  
**Packet:** `intent=learn`, topic alias or stable mechanic reference if resolved, `requested_depth=quick|practical|comprehensive`, source phase/outing, spoiler budget, `return_target`.
**Actions:** Atlas delivers an explanation with accurate applicability, uncertainty and evidence. Mission Control's *action-critical Gold and one-off warnings* remain in its visible phase; don't relocate them into Atlas navigation.
**Return:** "Back to [mission phase / camp project / outing]" re-renders/reconstructs that context; does not presume old checkboxes or drawer toggles persisted.

### Handoff Atlas → FRC
**Trigger:** player understands a mechanic and wants to practise.  
**Packet:** mechanics guidance + **conditional** prerequisite(s), preferred experience, no accomplished-state assertion.  
**Actions:** FRC forms one optional feasible outing, confirms unlock and window. Does not automatically advance campaign project.

### Handoff reports → GameGuide
**Trigger:** explicit player report / legible screenshot of an outcome, acquisition, sale, donation, save, Honor decision, chapter action, quest, or medal.  
**Packet:** exact player claim; evidence pointer/description; event time *if supplied*; source conflict; list of impacted existing ledgers; distinctions between confirmed, implied and unknown fields.
**Actions:** GameGuide follows its existing write and audit procedure, updates canonical `rdr2` files if authorized and supported, verifies readback. Other modules consume the resulting state only then.
**Failure:** if no write or readback, present the report as **reported but not confirmed recorded**, never promise synchronization.

## 4. Dependency on Agent 002 — schema-agnostic consumer contract

Agent 001 does **not** freeze Agent 002's taxonomy, IDs, categories, schemas, dependencies, or coverage. It only defines minimum *semantic response fields* that a future adapter should supply. All are optional except an intelligible name and honest evidence status; unknown is a valid response.

| Semantic need | Why Hub requires it | Safe fallback if absent |
|---|---|---|
| Human-friendly mechanic name + stable reference / alias | Topic search; reopen the right guide | Search by user wording; ask one clarification for true ambiguity |
| How-it-works / steps / common mistakes | Practical teaching in a mission or outing | Give supported plain-text basics and flag gaps |
| Story-mode applicability, chapter/mission gate, unlock prerequisites | Feasibility filter, avoid proposing fishing without rod | Mark availability unknown; do not claim unlocked |
| Risks and one-time consequences | Surface credible Gold/missable/honor warnings | Suppress unverified urgency; fetch more evidence if material |
| Related mechanics / progressive-learning next topics | Connect camp → crafting → hunting; return to original action | Suggest one broad follow-up without invented graph |
| Source URL/path, claim-level confidence, checked date, research/adoption status | Trust and explain uncertainty | Label provisional, do not promote to tactical authority |
| Spoiler category / horizon | Prevent later-plot leaks in normal play | Exclude potentially plot-sensitive details until requested |
| Goal classification (official 100 / Gold / achievement / optional / convenience) | Avoid misleading completion pressure | Say purpose unclear; omit mandatory tag |

**Integration without hard coupling:**
- Do not parse Agent 002's Markdown structure with brittle heading positions.
- Adapter may initially read Atlas files/search index and produce a normalized **transient** `MechanicAnswer`; stable taxonomy IDs remain Agent 002's responsibility.
- Until Agent 002's contract is available, *search by plain names* (e.g. "horse bonding") and show source title and status. Do not hardcode S01–S30 enumeration as permanent UI navigation.
- Agent 002 can change topic hierarchy, merge families or split entries without forcing changes to FRC's public requests (which refer to user intent).
- Taxonomy references resolve to current authoritative source and confidence, not to a permanent player progress record.

**Illustrative adapter boundary (NOT a required file schema):**

```text
MechanicRequest {
  query_or_ref, depth: quick|practical|comprehensive,
  context: mission_phase|outing|standalone,
  story_mode: true, spoiler_horizon, player_unlock_evidence?
}
MechanicAnswer {
  display_name, summary?, procedure?, availability?,
  verified_prerequisites?, conflicts?, risks?, related_topics?,
  citations?, checked_at?, research_status?, return_to?
}
```

This is an interface sketch for UX only. Agent 002 should supply its own finalized identity/dependency contract and reconciliation notes. **No writes to its branch or files.**

## 5. Cross-thread recovery and stale-source behavior

**Source order at new-thread start:** fetch current `rdr2/campaign/current_state.md` first; fetch relevant ledgers/mission guide on demand; read current `rdr2-hub` design/Atlas index; apply user-provided live observation with disclosure if not yet committed. A prior ChatGPT widget's selected state, a memory inference or a design example must **never** serve as proof of activity completion.

If source unavailable:
- Say "I cannot verify your latest campaign record now" and cite the last *known* read only with date. Give safe provisional advice, not a confident Gold count or actual purchase assertion.
- Ask for a screenshot/observation **only if** required to distinguish meaningful risk or availability. The player can still request a general mechanics explanation.
- Avoid writing new records until original authority has been read or a conflict is explicitly reviewed.

**Pending report across threads:** only durable if written to authorized GitHub ledger. If no write occurred, do not imply persistent pending drafts. The user can repeat or link the report when convenient.

## 6. Status and trust rendering

Small claim-specific labels:
- **PLAYER CONFIRMED / SCREENSHOT VERIFIED:** evidence of gameplay claim, with its exact scope.
- **REPORTED — NOT YET RECORDED:** current thread claim awaiting GameGuide write.
- **RESEARCHED — REVIEW PENDING:** evidence-backed guide but not ratified for tactics.
- **PROPOSED:** plan/recommendation or UX design.
- **DISPUTED:** material source conflict unresolved.
- **UNKNOWN:** no applicable observation/evidence.

Use labels at meaningful decision points only, not a wall of provenance badges. Always distinguish **general game-rule confidence** from **player-unlock certainty**.

## 7. Important no-go boundaries

- No automatic transfer of canonical authority from `rdr2` to `rdr2-hub`.
- No player-state documents under `rdr2-hub/campaign` that duplicate original Gold/save/inventory ledgers.
- No technical live-game API, background monitoring, screenshot OCR autopersistence, or GameGuide write performed by the UX router.
- No overwriting approved Field Guide v1.1's mandatory A→final sequence or moving action-critical conditions into hidden Intel.
- No mandatory home-page detour or future-plot reveal to use a mechanics guide.

## References

[Hub experience](hub_experience_v0_1.md) · [Navigation flow](navigation_and_state_flow_v0_1.md) · [Atlas index](../systems_atlas/README.md) · [Hub source authority](../protocol/source_authority.md) · [Existing GameGuide protocol](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/campaign_command.md) · [Mission preflight](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/mission_preflight.md).
