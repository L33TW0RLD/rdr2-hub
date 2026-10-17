# Living Adventure Context & Routing Contract v1

**Status:** PROPOSED / CHATGPT-NATIVE · 2026-10-17. Deeper Model B autonomy and header behavior belong to the separate Agent 010 design assignment.

## Context envelope (conceptual; recompute each answer)

```text
AdventureContext {
  canonical_source: rdr2@main/campaign/current_state.md,
  canonical_read_at: last verified read or UNKNOWN,
  chapter: player-confirmed/repository-backed/UNKNOWN,
  control_window: free_roam | camp_only | mission | chained | UNKNOWN,
  position: player_observed_location | UNKNOWN,
  player_intent: mission | free_roam | learn | review | report,
  current_focus: optional PROJECT / OUTING / MISSION_PHASE / DISCOVERY,
  active_protected_risk: claim + evidence + deadline-or-UNKNOWN | null,
  player_unlocks: observed | denied | UNKNOWN for each relevant gate,
  return_to: surface + exact content ref + phase or outing context,
  spoiler_budget: T0/T1 default,
  working_ui: ephemeral/not authoritative
}
```

Do not write this structure as a second live campaign database. User observations arriving in chat may be relevant but are not automatically recorded in GitHub.

## Router — precedence

1. Follow explicit player intent (asked mechanic → Atlas, asked mission → Mission Control, asked trip → Free Roam), except if a **specific evidenced active irreversible** danger warrants a concise warning.
2. Load only necessary canonical state and content. Distinguish historical campaign chapter from actual reported on-screen position.
3. Assess whether action is available: `known open`, `known closed`, `uncertain`; never translate INDEXED general access into a player-owned unlock.
4. Render a contextual header + requested primary view. **Mission Control must preserve full chronological v1.1 Field Guide**.
5. Support detours through an explicit return packet. Reconstruct source content after return rather than replay an abbreviated summary or assert controls survived.
6. On a reported gameplay event, request or route to GameGuide's existing evidence/write/readback procedure. Do not infer an in-game action from a button press.

## Return packet

```text
return_to: {
  surface: mission_control | free_roam | discovery,
  source: stable path/mission ID/project record,
  focus: phase_letter | project_and_outing | observed_discovery,
  guarantee: reconstruct_from_sources,
  remembered_ui_state: NOT_GUARANTEED
}
```

**Example:** `Mission Control: Operation 004 Old Friends / phase A → S06.M02 horse care → return` triggers the complete Operation 004 mission dossier and approved presentation with all A–G phases, Gold tiles and independent Intel, not a short mission card. No historical user checkbox ticks are assumed.

## Guardrail behavior (outline; Agent 010 elaborates)

- Warning: source-backed critical Gold/save/one-off risk applicable **now**; smallest useful intervention and player choice.
- Suggestion: one optional relevant project/outing with a meaningful reason.
- Quiet: player chooses own path, no nagging, no forced check-in; still answer explicit questions.
- If risk evidence is stale or disputed, qualify it, request one helpful observation or suppress unwarranted urgency.

## Source interfaces

| Read interface | Contract |
|---|---|
| Mission | Original `rdr2` full guide + preflight; GameGuide-only report authority |
| Free Roam | `free_roam/content/` project/outing/intermission types, conditional feasibility |
| Atlas | `systems_atlas/` IDs, gates, claim evidence, status |
| Dashboard | `dashboard/interface_blueprint_v1.md` presentational rules only |

**Not implemented:** external save-file watcher, working on-device game plugin, continuous screen monitoring, permanent activity memory or automatic dashboard synchronization.
