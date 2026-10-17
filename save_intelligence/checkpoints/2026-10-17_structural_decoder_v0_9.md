# RDR2 Save Intelligence — decoding checkpoint v0.9

**Checkpoint date:** 2026-10-17  
**Status:** RESEARCH CHECKPOINT FINALIZED / further decoding OPEN  
**Scope:** Offline read-only RDR2 PC Story Mode save reverse engineering **only**. Not a GameGuide, campaign, Mission Control, Atlas or Companion task.  
**Research branch:** `research/save-intelligence-checkpoint-v0-9` (independent from `research/save-intelligence-v0-2`)  
**Starting `main` SHA:** `9ed3f2ba5e8c273693311159d2f0ffccc235ec6b`  
**Prior deliverable:** [Save Intelligence v0.2 draft PR #24](https://github.com/L33TW0RLD/rdr2-hub/pull/24), unchanged by this checkpoint.  
**Evidence status:** Tested with four privately supplied historical PC saves. Research results are **not** canonical current gameplay records.

## 1. Verified state, scope and authority

- Supported fixture format: PC Story Mode AES-encrypted RSAV with ten checksum-framed PSO regions. Four tested saves validate **40/40 observed internal CHKS**.
- Decryption, frame discovery and checksum verification work on the **tested fixtures**. Internal checksums do **not** cover every cleartext header byte; never claim full-file authenticity.
- Format interpretation is materially more advanced than *gameplay interpretation*. Do not report a numeric overall percentage of decoded gameplay fields as a measured fact.
- All original ZIP/save inputs were read-only in local testing. The source ZIP hash was unchanged by the experiments; corrupt encrypted payload rejection and existing-output refusal were separately tested.
- No player-specific raw saves, ZIPs, decrypted bytes, screenshots, per-save hashes, cash amounts, inventory contents, position coordinates, or private JSON reports have been committed to GitHub.
- Existing `L33TW0RLD/rdr2/campaign/` remains the only authorized gameplay-state repository. No automatic save sync, Gold credit, Honor value, unlock or horse ownership claim follows from this checkpoint.

## 2. Research progress, ordered history

| Version | Reproducible progress | Main unresolved interpretation |
|---|---|---|
| v0.1–v0.2 | Decrypt RSAV; checksum integrity; first PMAP inventory-like quantity block; cash-signature candidate; structural mission/coordinate blocks | General-format compatibility and complete inventory semantics |
| v0.3 | Two mission-record families and names cross-referenced with public script identifiers; codes `5` and `4` match independently reported Gold/Silver results in fixtures | Medal-code universality, bounty hash and Bronze mapping |
| v0.4 | Stable 232-byte `UNNAMED_HORSE`-bearing record; 22 camp-scene reference strings per tested save | Actual horse ownership/bonding and NPC physical presence |
| v0.5 | Candidate `S000`-relative Honor and attribute fields, including a genuine negative float | The values' human-readable PSO meaning and UI correspondence |
| v0.6 | Character block and PSCH descriptors identified; field hashes correlate with candidate attribute positions | Semantic labels and large-structure offsets |
| v0.7 | High-bank offset behavior `subtype 0x40 -> +0x10000`; eight-byte scalar storage slots; root structure `0x41D6F894` of 96,528 bytes entirely covered; 214 schemas audited in that section | Proof the same rules apply to other save variants; implicit header areas |
| v0.8 | Recursively inspect unnamed leading eight-byte slots, preserve both primary/supplementary words; negative `-100.0` appears in more than one position | Whether those words indicate numeric values, references, flags or sentinels |
| **v0.9** | Traverse sections **1–9** (zero-indexed); 294 PSCH schemas; 35,920 stable aligned storage slots per save; isolate region 8/9 historical changes | Decode section 0's heterogeneous arrays and determine real meanings of repeated records |

Every schema/slot count here refers to the **four research fixtures**, not universal game-version coverage.

## 3. v0.9 technical decoder contract

**Region indexing:** there are ten observed `CHKS`/PSO regions, indexed `0…9`. Region 0 has mixed variable-length PMAP arrays/references and is **excluded** from the fixed-layout typed traversal. The large 96,528-byte character-data root belongs to **region 1**, not region 0.

| Region | Main root hash | Root bytes | PSCH schemas | Aligned data slots per save |
|---|---|---:|---:|---:|
| 1 | `41D6F894` | 96,528 | 214 | 11,718 |
| 2 | `130F9A9E` | 43,184 | 5 | 5,398 |
| 3 | `2016AC2F` | 25,648 | 13 | 3,206 |
| 4 | `F0565E1D` | 19,264 | 19 | 2,408 |
| 5 | `9466E40C` | 14,152 | 9 | 1,769 |
| 6 | `F80C8A31` | 15,272 | 5 | 1,909 |
| 7 | `702A6125` | 6,216 | 12 | 777 |
| 8 | `32D99D58` | 36,008 | 6 | 4,501 |
| 9 | `0C6ADFDD` | 33,872 | 11 | 4,234 |
| **Total** | | | **294** | **35,920** |

The 294 structures showed **zero overlap errors** under these *fixture-derived* interval rules. The 35,920 slots comprise **35,098 declared scalar/reference-like eight-byte storage positions, 758 undeclared eight-byte leading positions, and 64 fixed-size inline buffers**. A storage slot is not a unique in-game statistic or item.

### Critical PSCH hypotheses, confirmed structurally on fixtures

- A field with `subtype=0x40` uses its unsigned 16-bit offset plus `0x10000`; the large character root's 94 declared fields then fill exactly 96,528 bytes without overlaps.
- Data types `0x05`/`0x07` occupy eight-byte **storage** intervals. Do not discard the supplementary four bytes even if the primary four resemble an integer or float.
- Type `0x0B` reference high 16 bits yields observed fixed-size 24/64-byte inline buffers; certain external-reference-like `0x0C` descriptors occupy eight bytes.
- Many nested structures contain an undeclared eight-byte leading interval. **Unmapped to a named PSCH field does not imply padding**; some such words vary between saves.
- One supplementary word `A1010000` occurs in a region-1 leading slot, while many other supplementary bytes in declared intervals also vary. Do not coerce them all to integers or XP.
- Candidate Honor, Health, Stamina and Dead Eye values have reproducible **schema-relative addresses**, but they still lack an independently proven semantic definition. `-100.0` must not be presented as a literal negative Dead Eye percentage.

## 4. Region 8 — immediate continuation target

- Root hash `32D99D58`, size **36,008 bytes**: an eight-byte leading interval plus **500 instances of a 72-byte nested record**.
- **501** unnamed eight-byte leading positions occur at a regular 72-byte stride, counting the root leading position. Count **500 child records**, not 501 records.
- Populated **primary** leading positions across four ordered snapshots: `204, 204, 299, 320`.
- Consecutive zero-to-populated child positions: **0** first interval, then **95**, then **21**. These transitions are contiguous and 72 bytes apart within the same table; previously populated leading bytes do not revert or change in those transitions.
- Changed aligned-slot counts in region 8: **0, 399, 97** across the three historical comparisons. Region 9: **0, 155, 171**.
- The region-8 root's leading primary word remains `41` in all four snapshots; it is **not** the count of populated records.
- **Unknown:** Whether the entries encode events, histories, usage statistics, collections, tracked world objects or opaque system metadata. Do not promote any of these possibilities to a finding.

## 5. Source-code and artifact preservation limitations

The locally tested sequence consists of these seven read-only Python research probes, executed against copies under Python + `cryptography`:

`rdr2_mission_medal_probe_v0_3.py`, `rdr2_save_world_horse_probe_v0_4.py`, `rdr2_character_stats_probe_v0_5.py`, `rdr2_character_schema_probe_v0_6.py`, `rdr2_psch_bank_probe_v0_7.py`, `rdr2_implicit_slots_probe_v0_8.py`, `rdr2_all_sections_probe_v0_9.py`.

**Important durability boundary:** Those v0.3–v0.9 Python scripts and the generated private v0.9 JSON are **not committed in this checkpoint**. Do not claim a fresh GitHub checkout alone can execute the v0.9 pipeline. The earlier v0.2 tool code exists in the separate PR #24 branch; whether it is merged is coordinator-owned. The user's original save copies may need to be supplied again when resuming in a different runtime.

Local test of a sanitized v0.9 copy with **explicit chronological save ordering**: all 4 saves processed, 35,920 aligned slots per save, the `0 / 95 / 21` region-8 zero-to-populated sequence reproduced. All seven sanitized Python probes passed bytecode compilation. The explicit `--order` option matters: **lexical save filenames do not guarantee chronology**. Parser output reports are always private and use exclusive file creation (`x` mode).

Upstream references used for research:

- https://github.com/JuliPodie/rdr2-savegame-reader — PC save/PSO structures.
- https://github.com/Sarbatore/RDR2-HashDatabase — public identifier catalogue.
- https://github.com/definitelynotcrab/rdr2_asl — mission script aliases.
- Historical PS4 save-editing offsets were hypotheses only, not PC field-name proof.

## 6. Exact next permitted action

**First action on resumption:** Recover the four read-only fixture copies (or replacement controlled saves) and the local v0.3/v0.6/v0.7/v0.9 scripts; verify checksum counts and reproduce the `35,920` aligned-slot signature. Then isolate the **region 8, 72-byte child schema**, enumerate all declared field identifiers/offsets and compare only one newly populated row across a controlled before/after save.

After that:
1. Check whether the leading eight-byte words are record identity, references, occupancy indicators or a mixture. Treat every interpretation as a hypothesis until controlled evidence.
2. Explore region 9's 171 changed aligned slots in the last comparison, with the same provenance discipline.
3. Extend region 0 via schema-aware arrays, pointers and reference descriptors; do not reuse the fixed-layout traversal indiscriminately.
4. Validate medals/Honor/horse ownership/character attributes against independent on-screen state **before** offering any general user-facing gameplay reading.

### Stop conditions / safeguards

- **Never modify source game saves or overwrite input/previous reports.**
- **Never create a GitHub campaign ledger, save telemetry watcher, application feature or Atlas/mission task from these findings.**
- **Never change PR #24, merge a branch, edit `main`, update the agent registry or cross into another agent's file paths as part of this checkpoint.**
- Do not announce full decoding, player-location recovery, Honor correctness, horse ownership, or a universal mission-medal mapping.
- Record any future independent test, counterexample or corrected interpretation in a **new scoped research checkpoint**.

**Disposition:** v0.9 knowledge captured. This is a final checkpoint of the present research session, **not** completion of the overall decoder.
