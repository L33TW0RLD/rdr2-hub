# Mission Control — Complete GameGuide Integration

**Status:** Existing approved mission experience; **Hub integration scaffold PROPOSED** (2026-10-17).

The original `L33TW0RLD/rdr2` repository already supplies detailed mission dossiers, the campaign medal ledger and **player-approved Field Guide v1.1**. The Hub's job is to integrate these sources into one beautiful, complete ChatGPT-native experience **without replacing the full guide with a summary**.

- [Source Adapter v1](source_adapter_v1.md) — canonical read order, mission selection, full A→final phase composition, Gold metrics, optional Intel, report and Atlas-return contracts.
- [Unified dashboard](../dashboard/interface_blueprint_v1.md) — presentation grammar; defers to approved Field Guide v1.1 for full mission display.
- [Living Adventure Companion](../companion/README.md) — conversational routing and honest return context.
- [Original approved Field Guide v1.1](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/walkthrough_presentation.md) — **binding mission layout**.
- [Mission preflight](https://github.com/L33TW0RLD/rdr2/blob/main/protocol/mission_preflight.md) and [actual mission library](https://github.com/L33TW0RLD/rdr2/tree/main/missions).

**No duplicate medal authority:** player evidence and GameGuide authorization control `rdr2/campaign/`; Hub UI ticks, views and research cannot award Gold or assume a save.

**Coverage truth:** currently authored original mission dossiers cover prepared Chapter 1–2 entries, not every eventual story mission. Full-game coverage is an explicit content-production objective; this directory is an adapter, not a second mission shelf.

**Historical client evidence:** an October 17 desktop user report confirmed restoration of the Old Friends A–G guide, 28 checkboxes, five Gold tiles, multi-open Intel and phase A focus. This is not proof of a packaged app or universal/client-independent persistence.
