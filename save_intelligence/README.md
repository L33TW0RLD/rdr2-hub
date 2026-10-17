# Save Intelligence — offline research prototype v0.2

**Status:** EXPERIMENTAL / REVIEW PENDING. This is not an adopted feature, a background watcher, an authorized campaign writer, or live game telemetry.

This directory holds a **read-only** RDR2 PC Story Mode save-inspection experiment. It can inspect individual `SRDR...` saves or ZIPs containing them without editing, extracting or overwriting the source files. The prototype decrypts the PC save envelope, validates `CHKS` records, reads certain inventory-like quantity records and a cash candidate, and separately reports some *uninterpreted* structural deltas.

## Contents

- [Research and evidence boundaries](research_v0_2.md)
- [Third-party attribution](THIRD_PARTY_NOTICES.md)
- [Offline save observer](tools/rdr2_save_observer.py)
- [Experimental structural probe](tools/rdr2_structural_probe.py)

**Prerequisite:** Python 3.10+ with `cryptography` installed (`python -m pip install cryptography`). Run on **copies**, preferably with the game closed. Reading an exported ZIP is preferable to touching a live, cloud-synced profile directory.

```powershell
python .\save_intelligence\tools\rdr2_save_observer.py .\copies\saves.zip --output .\local_reports\save_summary.json
python .\save_intelligence\tools\rdr2_structural_probe.py .\copies\saves.zip --output .\local_reports\structural_report.json
```

Reports are created exclusively; existing output files are never overwritten. **Do not commit reports, save exports, original `SRDR...` files, `.bak` files, profile folders or screenshots** to this public repository. JSON output can include private in-game state, original save labels, content hashes, data identifiers and coordinate candidates.

### Evidence model

| Tier | What can be stated | Must not infer |
|---|---|---|
| A — verified format + locally cross-checked | Valid decrypted envelope/checksums; labelled inventory-like quantities; cash record, subject to calibration | That a user has already submitted/committed a new campaign state |
| B — structural evidence only | Uninterpreted mission-array changes, position-vector-bearing records, catalogue hash sightings | Gold medals, mission completion, player coordinates or horse ownership |
| C — unmapped | Honor, health/stamina/Dead Eye, horse identity/bonding, per-mission medals | Any player progression or rewards |

Only the existing [source-authority contract](../protocol/source_authority.md) and [companion integration contract](../architecture/module_integration_v0_1.md) govern campaign claims. RDR2 Hub proposals do not create a parallel player ledger. **No script here writes to either GitHub repository or to game saves.** A future desktop watcher, report-import UI, or GameGuide review pipeline requires a separately authorized and tested integration contract.

### Testing

A local research test with four privately supplied saves passed the PC decryption, checksum and structural-reading paths. Raw evidence, per-save JSON, player-specific values and identifying save filenames are intentionally excluded from the public repository. This is not a comprehensive proof of compatibility across RDR2 versions or different save histories.

The independent reference projects are linked in [research notes](research_v0_2.md); source-code and hash-table reuse acknowledgments are in [notices](THIRD_PARTY_NOTICES.md).
