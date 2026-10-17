# Mission Control — Legacy GameGuide Source Adapter v1

**Status:** REMASTER INTEGRATION CONTRACT / PROPOSED · 2026-10-17.
**Rule:** The old `L33TW0RLD/rdr2` repository already owns the **approved full mission guide**. The Hub connects to it; it does not rewrite it into a competing smaller guide.

## Sources and precedence

1. Latest `rdr2/campaign/current_state.md` first, then relevant `mission_ledger.md`, `save_log.md`, `resources.md`, `collectibles_and_missables.md`.
2. Select the actual named/observed player mission from `rdr2/missions/README.md`; operation shelf ID is not automatic official story sequence or Gold-credit count.
3. Read the exact `rdr2/missions/chapter_xx/<dossier>.md` and `rdr2/protocol/mission_preflight.md`.
4. Render using **player-approved** `rdr2/protocol/walkthrough_presentation.md` Field Guide v1.1. Source specific research from `rdr2/guides/mission_intelligence/` only with its authentic status.
5. On an explicit player report, GameGuide may reconcile/update the original campaign files after sufficient evidence and authorizations. A Hub view, planning tick or navigation event has no authority to mark completion.

## Contract: mission selection

**Input:** player-selected story entry, reported marker/control availability, current campaign evidence, spoiler budget and optional `return_to`.

**Output:** all mission phases **A→final**; all Gold thresholds, full set of actual checklist actions, critical inline warnings, independent topic Intel with status/source footers, phase focus, and simple debrief. If source contents are incomplete, say so and retain what is confirmed instead of inventing phases.

**If the mission is historical or Gold earned:** label it historical/replay reference; never imply a new live attempt. A recent earned medal and saved slot are distinct.

**During active mission:** a player report can change phase emphasis only with evidence. Mission-specific critical warnings remain in the full guide, not in Atlas or a separate dashboard.

## Contract: detour / return

```text
Mission → Atlas {
  mission_ref: rdr2/missions/chapter_01/04_old_friends.md,
  selected_phase: A,
  learning_topic: S06.M02,
  return_target: FULL_FIELD_GUIDE,
  game_state_write: false
}
Atlas → Mission {
  reload: latest canonical campaign + full mission dossier + approved Field Guide v1.1,
  render: complete phases + Gold tiles + all planning actions + independent Intel,
  focus: selected_phase if requested,
  restore_old_checkbox_state: false,
  game_state_write: false
}
```

The documented October 17 live desktop exercise user-confirmed the full Old Friends guide's seven phases, 28 planning checkboxes, five Gold metric tiles, Phase A focus and independent simultaneous Camp/Save Intel. It did **not** establish a deployed app, persistent widget state, universal client support or programmatic adapter. Agent 006's unmerged pilot record may not yet reflect those user observations.

## Mission coverage expansion

The original `rdr2/missions/` currently includes prepared Chapter 1 and Chapter 2 entries. Future chapters, 104-Gold ambition and unique/missable research require *complete individual dossiers*, ordered by actual story eligibility—not automatically generated blank headings, forced numerical sequences or duplicated Hub ownership.

**Candidate expansion workflow:** a dedicated GameGuide author works in the original repo only after separate write authorization; a Hub content agent can prepare **read-only proposals or research** in an assigned Hub branch for later review. Do not bulk-migrate the original mission shelf merely to unify folder names.

## Acceptance

A) Correct canonical readback and mission identity. B) All actual Gold objectives preserved. C) Complete original Field Guide v1.1 presentation. D) Proper active/historical distinction. E) No fabricated loot/save/medal; player reporting controlled by GameGuide. F) Atlas return reconstructs whole guide, including per-phase Intel and warnings.
