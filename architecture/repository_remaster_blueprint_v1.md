# RDR2 Hub — Repository Remaster Blueprint v1

**Status:** PRODUCT RESTRUCTURE PROPOSAL / IMPLEMENTED SCAFFOLD ON REVIEW BRANCH · 2026-10-17.
**Intent:** Create one complete, attractive ChatGPT-native adventure companion, with bulk source-checked game knowledge produced by specialist agents. This is not an adoption of all prior unratified designs.

## Product architecture

```text
                       PLAYER / CHATGPT
                              |
                 DASHBOARD (unified visual grammar)
                              |
                 COMPANION (context / adaptive)
                    /         |          \
             MISSIONS     FREE ROAM       ATLAS
             full guide   purpose/play    systems/rules
                    \         |          /
                     SHARED KNOWLEDGE CONTRACT
                              |
                CANONICAL ORIGINAL rdr2 CAMPAIGN
                and approved mission/protocol files
```

**Important:** these are layers of **one product**, not four independent agents or four separate navigation modes. The GameGuide mission system in original `rdr2` is already the strongest existing component.

## Directory responsibilities — current and introduced

| Directory | Boundary | Write owner |
|---|---|---|
| `companion/` **NEW** | Context envelope, intent/adaptive intervention and return semantics; no live player-state store | Companion/integration design agent under explicit task |
| `dashboard/` **NEW** | ChatGPT-native layout, header, controls, presentation rules and actual UX testing; no gameplay research claims | Dashboard/UX task |
| `mission_control/` | Adapter to `rdr2`'s FULL mission guides; no duplicate mission shelf | Mission integration task |
| `free_roam/` | Activity choice and content: `content/projects/`, `outings/`, `intermissions/`, `discoveries/` | Free Roam content agents by individually leased files |
| `systems_atlas/` | Stable family index (unratified leaf IDs), gates, evidence-backed D01–D28 mechanic dossiers | Atlas specialist research agents; `dossiers/` task ownership |
| `knowledge/` **NEW** | Universal content metadata, claim evidence, source crosswalk and production semantics; not a duplicate Atlas | Knowledge/integration owner |
| `quality/` **NEW** | Source correctness + interaction tests + status evidence, not fake PASS claims | Independent QA and coordinator |
| `campaign/` | Read-only integration placeholder; old `rdr2/campaign` remains canonical | No live Hub writer |
| `architecture/` | Existing exploratory design lineage, integration plans and architecture reviews | Only coordinator-owned remaster plans; preserve historical specs |
| `agents/` | Workstream routing, exclusive leases, branch checkpoints/handoffs and governance | Coordinator registry / leased workers |
| `protocol/`, `decisions/` | Existing source authority and owner decisions | Owner/coordinator |

## Migration principles

1. **Preserve everything already useful.** Do not move/delete the old `architecture/`, `free_roam/` or `systems_atlas/` drafts; their history, links and Agent 005 reconciliation still matter.
2. **Do not clone the original GameGuide.** Continue reading `rdr2/missions/` and its approved Field Guide v1.1. Any actual mission content migration would require explicit owner authorization, a file-by-file audit and a tested authority transition.
3. **Avoid competing taxonomies.** Keep mechanic ownership in `systems_atlas/`; `knowledge/` defines cross-product evidence format, not separate horse/hunting articles.
4. **Research is source material, not UX.** Dossier writers author the raw mechanic truth; Free Roam authors package meaningful activities; dashboard uses both, does not invent gameplay outcomes.
5. **No inflated completion.** 30 indexed system families does not mean 30 complete systems; an activity template does not prove the player played it; 104 all-Gold objective needs 104 actual medal-eligible completions, not 104 empty documents.
6. **No unnecessary new runtime.** Use ChatGPT-native interactive components and GitHub readback. A separate app, automatic game-file watcher or permanent chat state is out of scope unless separately approved.

## First functional vertical slice

`Player asks "let's play" → Companion recovers real Chapter 2 source → contextual header → optional camp PROJECT → Heartlands OUTING → Atlas clean-kill help → return to same PROJECT → player reports actual result → GameGuide alone reviews/writes campaign → choose Story → full Mission Control guide`.

Build and validate this path with real sources and honest UNKNOWN gates. The existing October 17 desktop Mission→Atlas→full mission restoration supports **one narrow UI behavior**, not the entire integrated product.

## Agent production lanes

1. Systems Atlas specialist thread delivers D01 Horses (task 007) then D02 Camp (008) then D04 Hunting (009), each separate branch and handoff. Other D03/D05–D28 packages require new assigned scopes.
2. Living Adventure specialist delivers Model B and contextual header behavior (task 010); don't overlap `companion/` scaffold edits with its own leased `free_roam/adaptive_companion/`.
3. Free Roam content production packages: validate initial project/outing example, then author additional *source-backed* meaningful intermission records; avoid creating 100 placeholder files.
4. Dashboard/integration agent: present a complete connected ChatGPT view and test honest continuity. It does not research individual weapon/horse facts from scratch.
5. Independent QA/coordinator: source integrity, interaction proof, portfolio coverage, merge and adoption control.

## Product milestones

- **R1 Scaffold:** discoverable structure, owner boundaries, content templates, one real conditional example, dashboard contract, exact source crosswalk and acceptance matrix. **This branch's deliverable.**
- **R2 Content:** reviewer-ready horses/camp/hunting mechanic dossiers + one playable intermission package; source status intact.
- **R3 Unified experience:** approved Model B policy + dashboard and full Mission Control adapter, functional ChatGPT-native interaction tests on requested clients.
- **R4 Expansion:** remaining Chapter 2 intermission opportunities, high-priority player systems and mission content from GameGuide with verified source migration strategy only if approved.
- **R5 Full guide:** scalable coverage of all relevant Story Mode mechanics, story missions and optional completion pathways, still player-first, spoiler-light and evidence-driven.

**Integration decision:** Owner reviews this proposed file organization and R1 scaffold. Approval of structure does **not** itself ratify provisional S31, exact deep research or future gameplay authority transfer.
