# RDR2 HUB — Living Adventure Companion

**Remaster v1 · unified ChatGPT-native RDR2 Story Mode companion**  
**Stage:** R1 structured product foundation. The published gameplay remains in the original GameGuide repository; Hub research, content and UI proposals remain subject to evidence/review. No standalone app, automatic save-sync or full-game content coverage is claimed.

> **One adventure. One companion.** Mission guides, meaningful free roam, systems mastery and an elegant contextual dashboard should reinforce each other while the player actually plays.

## What the player gets

| Experience | Purpose | Open here |
|---|---|---|
| **Mission Control** | Complete chronological Field Guide v1.1, Gold targets, warnings, independent Intel and evidence-backed debrief | [Mission Control](mission_control/README.md) |
| **Free Roam Control** | Purpose between missions: one optional PROJECT, one meaningful OUTING, space for DISCOVERY | [Free Roam](free_roam/README.md) |
| **Systems Atlas** | Learn every game mechanic, conditional unlock, dependency, reward and risk from sourced research | [Systems Atlas](systems_atlas/README.md) |
| **Living Adventure Companion** | Context, adaptive guidance, honest warnings, detours and continuity among the above | [Companion](companion/README.md) |
| **ChatGPT dashboard** | One coherent visual/interactive language: contextual header, relevant panels, full mission views | [Dashboard](dashboard/README.md) |

**These are capabilities of one product, not disconnected modes or separate applications.**

## Repository map

```text
rdr2-hub/
├── README.md                    Product entry point
├── companion/                   Adaptive context, routing and continuity
├── dashboard/                   ChatGPT-native visual & interaction contracts
├── mission_control/             Adapter to existing complete GameGuide mission guides
├── free_roam/
│   ├── content/projects/        Longer-lived optional player purposes
│   ├── content/outings/         Natural excursions and mechanics practice
│   ├── content/intermissions/   Decision opportunities when free roam is possible
│   ├── content/discoveries/     Player-reported organic interruptions (planned)
│   └── ...                     Existing decision model and UX scenarios
├── systems_atlas/               Mechanics taxonomy, gates, evidence and research queue
│   └── dossiers/                20 integrated research references; 8 planned
├── knowledge/                   Content record contract and cross-source map
├── quality/                     Evidence, functional and visual acceptance tests
├── architecture/                Existing design lineage + remaster blueprint
├── agents/                      Reusable specialist threads, bounded task registry
├── campaign/                    Read-only integration placeholder, NOT canonical record
├── protocol/                    Source authority and work governance
└── decisions/                   Owner decisions; unratified claims stay marked as such
```

Folders labelled planned may be introduced by their designated agent; a diagram entry is not a completed game mechanic or guide.

## How it works while playing

**Example: "Let's play."** The companion reads the current reported campaign, shows a small Adventure Header, then gives a meaningful choice: play a suitable story mission or pursue an optional camp project and local outing. It does **not** pretend Arthur's precise position or every unlock is known.

**Example: "Let's work on camp."** Free Roam suggests a conditional next milestone, with an outing to explore/learn hunting if sensible. Systems Atlas explains pelts, horse carrying or Pearson mechanics only when useful. A surprising encounter can legitimately change the plan.

**Example: "Let's do Old Friends."** Mission Control loads the entire original approved Field Guide: all phases, Gold rules and contextual warnings. A detour to Atlas returns to the **full guide**, not a summary.

**Example: "I earned Gold and saved."** Only GameGuide reviews the player evidence and updates the canonical campaign. Chat buttons and planning checklist ticks cannot confer medals or save outcomes.

The first concrete, **not-yet-adopted** Free Roam slice is [Chapter 2 conditional intermission](free_roam/content/intermissions/chapter_02_open_window_v0_1.md) → [Camp Development](free_roam/content/projects/camp_development_v0_1.md) → [Heartlands Hunting Reconnaissance](free_roam/content/outings/heartlands_hunting_recon_v0_1.md) → Atlas mechanic reference → return.

## Where game truth lives

| Data class | Authority | Hub treatment |
|---|---|---|
| Live reported chapter, Gold, saves, possessions, money, missables | [Original `L33TW0RLD/rdr2/campaign/`](https://github.com/L33TW0RLD/rdr2/tree/main/campaign) | Read latest; no Hub duplicate ledger |
| Mission dossiers and approved v1.1 presentation | [Original `rdr2/missions/`](https://github.com/L33TW0RLD/rdr2/tree/main/missions) and [protocol](https://github.com/L33TW0RLD/rdr2/tree/main/protocol) | Read/compose complete source; no copy-paste migration |
| General mechanics research | [Systems Atlas](systems_atlas/README.md) and cited legacy `rdr2/guides/` | INDEXED, REVIEW PENDING and ADOPTED remain different |
| Player's optional interests and local UI controls | Conversation / render-only local state | No false cross-thread persistence |
| Adaptive/layout product designs | [Companion](companion/README.md), [Dashboard](dashboard/README.md) | Design/implementation may be separately tested |

[Source authority contract](protocol/source_authority.md) · [Detailed legacy source crosswalk](knowledge/source_crosswalk_v1.md).

## Production system

We are building **complete researched content before claiming complete game coverage**. Agents produce substantive, source-backed mechanic dossiers; content authors connect them to optional Free Roam projects/outings; dashboard specialists build the polished ChatGPT-native experience; QA checks both factual claims and actual interaction behavior.

- [Current content coverage manifest](knowledge/content_manifest_v1.md)
- [Knowledge record contract](knowledge/record_contract_v1.md)
- [Original Atlas D01–D28 research backlog](systems_atlas/taxonomy_research_backlog_v0_1.md)
- [Specialist workstreams](agents/content_workstream_plan_v1.md) and [task registry](agents/registry.md)
- [Readiness/acceptance matrix](quality/acceptance_matrix_v1.md)
- [Repository remaster blueprint](architecture/repository_remaster_blueprint_v1.md)

**Systems Atlas progress:** **20 of 28** source-backed mechanic dossiers integrated: Wave 1 (6), Wave 2 (5), **Wave 3 (9)**, all **RESEARCHED — REVIEW PENDING / NOT ADOPTED**. The nine Wave 3 results and uncertainty boundaries are in the [cross-dossier review](systems_atlas/reviews/2026-10-17_wave3_cross_dossier_review.md) and [Atlas index](systems_atlas/README.md). Wave 4 has **8 remaining dossiers**, now [registered as independent specialist issues/branches](agents/atlas_parallel_wave4_v1.md); no worker chats automatically launched.

**Systems Atlas Wave 1 delivery:** D01 Horses, D02 Camp, D03 Satchels, D04 Hunting, D05 Camp Life and D06 Inventory are [six substantive source-checked dossiers](systems_atlas/README.md), with [cross-dossier review](systems_atlas/reviews/2026-10-17_wave1_cross_dossier_review.md). All retain **RESEARCHED — REVIEW PENDING**, not ADOPTED. Specialist threads remain reusable; their branches and handoffs remain available. [Wave 1 production history](agents/atlas_parallel_wave1_v1.md). Adaptive Companion 010 remains separately planned.

## Remaster implementation boundaries

- Existing `architecture/`, `free_roam/`, `systems_atlas/` and `agents/` histories have been **preserved**, not deleted or silently ratified.
- Original `L33TW0RLD/rdr2` remains the campaign and mission authority unless the owner later authorizes a tested migration.
- No game-state monitoring, save decoding backend, external dashboard application, game plugin or unattended agents are claimed.
- **Next milestone:** integrate actual D01/D02/D04 research with one reviewed Free Roam vertical slice and Model B decision contract; then build and user-test the cohesive dashboard experience.

**Guiding principle:** the player should enjoy Red Dead Redemption 2, not spend the session operating three different document libraries.
