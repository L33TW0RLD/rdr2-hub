# Interaction test report — Agent 006
**Status:** limited live authoring plus static contract inspection. Do not call unobserved actions passed.

| Scenario | Performed | Observation | Result |
|---|---|---|---|
| A Chapter 2 opening | ChatGPT-native Chapter 2 Trailhead authored with four action buttons and unknown-gate disclaimer; canonical campaign read subsequently | Buttons have real `GenUI.issueNewTurn` handlers, not inert decoration; no actual click feedback witnessed. Camp project/Atlas/mission/progress intents exist. | RENDER/AUTHORING OBSERVED; CLICK UNTESTED |
| B camp -> hunting Atlas -> return | Hand-authored route and return context examined | Text routes are coherent; no live sequential user click/test of return state. | STATIC PASS; LIVE UNTESTED |
| C Gold mission -> Atlas -> full guide | Verified approved Field Guide v1.1 text in original repo | Preservation contract documented; no complete mission A→final interactive interruption was executed in this pilot. | CONTRACT PASS; LIVE UNTESTED |
| D confirmed active missable | Conditional fixture: *player explicitly confirms an active time-limited stage* | Warning-before-roam rule documented; no genuine active stage or live warning interaction verified. | STATIC PASS; LIVE UNTESTED |
| E fresh thread | Read original campaign state from GitHub within this thread | Canonical chapter/Gold/save facts recovered; prior ephemeral phase/project not recoverable from GitHub alone. Actual separate new-chat test not performed. | SOURCE RECOVERY OBSERVED; FRESH THREAD UNTESTED |

## Other acceptance evidence
- Atlas lookup: three hand-authored INDEXED leaf cases; no working parser or source-resolved lookup service. Static sample PASS, executed runtime lookup UNTESTED.
- UI: ChatGPT-native buttons and textual fallback specified; the visible authored widget uses actual turn-submission callbacks. Click delivery, mobile Android, desktop and client persistence UNTESTED.
- Authority: canonical `rdr2/campaign/current_state.md` read; **9/104 Gold**, no player result recorded. Approved `rdr2/protocol/walkthrough_presentation.md` read; no rewrite.
- Research: Agent 005 reconciled S06.M02 and dependency direction on its isolated unratified branch. Pilot references semantics but does not modify taxonomy.
- No mission outcome, Gold medal, save, unlock, item, money, stage activation or project persistence inferred from UI.
- Failure to satisfy original full end-to-end live scenario testing is explicitly **OPEN**, not disguised as a pass.

## Proposed follow-up tests
A real player should tap each rendered button on Android and desktop, run camp→Atlas→camp and mission→Atlas→full guide, simulate a confirmed active warning, and open a truly fresh thread. Compare exact output and any lost context. Do not adopt or merge based on static-only results.
