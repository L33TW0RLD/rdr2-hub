# RDR2 Hub — Unified ChatGPT Dashboard Blueprint v1

**Status:** REMASTER DESIGN PROPOSAL · 2026-10-17 · **Medium:** ChatGPT-native response, not webapp or persistent dashboard.
**Product:** one companion, three contextual **views** (Mission / Free Roam / Atlas). The player never has to select a mode before asking a question.

## 1. One visual grammar, variable information density

Every response may include:
1. **Contextual Adventure Header** — small location in the experience, verified Chapter/camp if known, active focus and only one meaningful active warning. Never fabricated "live" status.
2. **Primary panel** chosen by the player's intent — full mission guide, meaningful free-roam plan, practical Atlas lesson, or compact campaign review.
3. **Contextual next action** — one real button or natural-language fallback, with a precise return target where useful.
4. **Optional depth** — on-demand Intel, help, alternatives or expanded sources. No giant permanent top-level overview by default.

Use one consistent hierarchy of labels and controls across all views. Do **not** take existing Field Guide v1.1 apart in an attempt to squeeze it into a dashboard card.

### Visual system

- Visual identity: restrained frontier editorial tone; readable typography, clear phase titles, thin separators, subtle neutral panels, no huge wallpaper, faux leather textures or decorative full-width images.
- Desktop: a compact header, legible primary column, optional **small** contextual side-by-side metrics when content supports it. Avoid forcing three disconnected columns.
- Mobile: vertical native ChatGPT stack; key action and warning visible without horizontal scrolling.
- State: neutral for informational labels; subdued warning only when a claim is evidenced and relevant; success when a real medal was confirmed.
- Images: small, matching and spoiler-safe only; never generic location photography that misleads the mission's scene.
- Emphasis: one primary action for current moment; consistent use of source-confidence text. No fake buttons, fake completion or traffic-light dashboard decoration.

## 2. Header — Contextual Adventure Header

Suggested minimal anatomy:

```text
RDR2 HUB · FREE ROAM                         CURRENT / SOURCED
Chapter 2 · Horseshoe Overlook                Exact position UNKNOWN
Focus: Develop the camp · Outing: local hunting reconnaissance
[If needed: Ledger availability unverified]     [Continue outing]
```

**Header fields (optional, omit if not grounded):** `surface`, `chapter`, `known_area`, `focus_kind`, `focus_name`, `known_active_risk`, `return_target`, `evidence_age`. `unknown` is a valid value. Do not display last-known chapter as a current GPS fix. An actual timed irreversible risk is inline at the relevant action point, not hidden in a tooltip.

**Header transitions:** On choosing Story, the header changes to the named mission and its phase anchor. On entering Atlas, it changes to mechanic name + source surface; return button requests the full original surface. On discovery, preserve the chosen project only as conversation context. New threads reload GitHub and may need a concise re-anchor.

## 3. View contracts

### Mission Control — full mission guide

- Header: Operation label, official mission title, appropriate earned/result status and current vs historical context.
- Immediately after header: source-verified **Gold metric tiles** (3–6), **one** progress rail and all chronological mission phases.
- Each phase: title, small contextual image if verified, all ordered task checkboxes, critical inline gold/save/missable warnings and independently expandable Intel drawers with claim-level footer.
- Phase focus is local UI only. Checkbox ticks are local planning only; Gold result requires player evidence. The **approved v1.1** remains the governing presentation specification.
- Mission → Atlas → Mission **must recreate A→final**, not a postcard summary; previous local UI toggles cannot be promised across messages.

### Free Roam — purposeful, lightweight adventure

- Display **one featured PROJECT** (why this matters and next earned milestone), **one suggested OUTING** (why it is a satisfying adventure today) and no more than **two meaningful alternatives**.
- Show the smallest verifiable unlock check needed before committing (e.g. "Ledger unknown: inspect camp first"). Unknown cash/horse/gear is not zero.
- Discovery interrupts willingly: re-evaluate after the player observes something, do not mark a missed plan failure.
- Separate `Now / Before leaving / Can wait` risk only where source-backed and actually triggered. Default should feel like a guide, not an endless task audit.
- A related Atlas lesson expands in context and returns to the same project/outing, without claiming it was physically performed.

### Systems Atlas — knowledge when it matters

- Start with direct answer; allow `Quick | Practical | Comprehensive` depth.
- Show mechanic ID (where supported), scope, research maturity, general unlock and **player-specific unknown** separately.
- Link related systems and one organic practical use, but never prescribe a forced outing or change the campaign.
- Atlas back action must encode `return_to` including full Mission Control guide if that was the source.

### Campaign review — read-only overlay

A view assembled from actual canonical Gold, saves, equipment, resources and relevant open risks. No independent `hub/campaign_progress.md` ledger and no new update authority.

## 4. ChatGPT-native interactions and honesty

| Interaction | Real effect | Never imply |
|---|---|---|
| Select Phase D | Visually highlights D in this response | Arthur reached D in-game |
| Tick hunting planning item | Recalculates local checklist | Perfect pelt obtained or stored |
| Open two Intel drawers | Both can stay expanded locally | Open state persists across messages |
| Learn `S06.M02` | Submit an Atlas lesson request with source context | Brush or horse ownership verified |
| Return from Atlas | Submit a new instruction to re-read sources and **rebuild** context | A persistent component tree or cached UI was restored |
| Report Gold | Send actual claim for GameGuide review | Gold credited before verification/readback |
| Browse other views | Route current request to different view | A separate game save or location sync exists |

Prefer actual ChatGPT-native controls where supported, with exact natural-language fallback. Never label a simulated fixture as a successful real-client test.

## 5. Concrete user flows

**A. Start while free roaming:** Read current campaign; show source-grounded chapter and one optional project/outing. If the specific control window is unknown, say so; do not infer unlocked stable or Ledger.

**B. Mission Gold:** User selects a real available mission. Run existing mission preflight, render full approved Field Guide. A question about a horse chase detours to Atlas; return re-fetches entire dossier with the original phase selected (focus local, not gameplay).

**C. Organic discovery:** User reports a strange shack while planning a hunt. Shift to context-aware discovery help, cite any genuine one-time risk, offer `Explore it` or `Return to hunt`. No surprise-spoiling map dump.

**D. After mission:** Separate medal from save confirmation. If free-roam control is actually available, suggest a meaningful outing; otherwise remain with chained story mission.

**E. Quiet mode:** Player asks for minimal prompts. Hide optional project chatter but preserve essential, supported warnings if a credible active irreversible decision is imminent.

## 6. Acceptance and prerequisites

- Approved original Field Guide layout is preserved, including full guide reconstruction.
- The researched mechanics topic is accurately sourced; `INDEXED` does not equal detailed adopted guide.
- Project/outing content returns a useful decision in context; no invented unlocks or unobserved in-game actions.
- Context header doesn't force a second navigation step or duplicate underlying content.
- A **real** client interaction report records only user-observed results, platform and untested cases.
- No persistent dashboard, memory storage, background game monitoring or local save-reading capability is implied.

**Inputs:** `architecture/module_integration_v0_1.md`, `free_roam/decision_model_v0_1.md`, Agent 006 pilot (unmerged), approved `rdr2/protocol/walkthrough_presentation.md`. **Behavior specialist:** task `adaptive-companion-010` drafts deeper adaptive/autonomy rules separately.
