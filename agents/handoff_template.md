# Disposable Agent Assignment & Handoff Template v0.2 — PROPOSED

## Task assignment (issued before branch work)

- **Task ID:** `<unique-task-id>`
- **Repository:** `L33TW0RLD/rdr2-hub`
- **Lane / bounded task:** `<role + objective>`
- **Working branch:** `agent/<lane>-<NNN>`
- **Starting main SHA:** `<full sha>`
- **Allowed write paths:** `<exact paths>`
- **Protected/read-only references:** `<paths / L33TW0RLD/rdr2 as needed>`
- **Dependencies:** `<branch and version / none>`
- **Mid-task checkpoint:** `agents/checkpoints/<task-id>.md`
- **Final handoff:** `agents/handoffs/<date>_<task-id>.md`
- **Acceptance tests:** `<observable readback + boundary conditions>`
- **Stop condition:** `<explicit point>`

## Agent completion report (committed to isolated branch)

- **Task / branch / starting main SHA:**
- **Status:** `DELIVERED_REVIEW_PENDING` (not adopted, ratified or merged)
- **Deliverables with exact relative paths:**
- **Source evidence / uncertainty / disputes:**
- **Dependency compatibility and potentially conflicting branches:**
- **Allowed-path compare and explicit-branch readback:**
- **Known missing tests / uncommitted work:**
- **Owner decisions required before integration:**
- **Next *new* bounded task (not a continuation of this closed assignment):**
- **Terminal branch SHA:** put SHA in final chat report; Git commit containing this handoff cannot predict its own ID.

Read `agents/checkpoint_template.md` for a **different** mid-task record, which must say the exact next permitted action while unfinished. A final handoff closes the task and disallows autonomous extra work from a successor without a new assignment.
