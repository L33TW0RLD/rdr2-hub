# Save Intelligence research v0.2 — evidence and limits

**Research status:** RESEARCHED — REVIEW PENDING. **Game-state authority:** none.

## Goal and scope

Investigate whether ordinary RDR2 PC Story Mode save copies can provide useful context to the proposed Living Adventure Companion *without* a game mod, writeback to save files, or duplicate campaign authority. This phase is an offline parser, **not** an automatic Save Observer service.

Four privately provided historical save slots were used only for local validation. No player save files, screenshots, save-specific identifiers, per-save SHA digests, personal inventories, coordinates or generated analysis JSON belong in this public repository.

## Methods and reproducible observations

1. Validate supported PC envelope: leading version marker and AES-256-ECB encrypted payload starting at byte offset `0x110`.
2. Decrypt **in memory**, require the `RSAV` container signature; validate located `CHKS` integrity records before interpreting payload. The prototype handles an observed variant, not all known console or PC formats.
3. Parse the first validated PSO `PSIN` data section and its `PMAP` mapping table, respecting declared boundaries and block lengths. Report unsupported or ambiguous structures instead of inventing fields.
4. Decode the candidate cash record using the stable in-container signature `CE548CF5` and following big-endian integer in cents. Cross-check recorded values against independently observed game-screen evidence **locally**, not as an unconditional assertion for arbitrary input files.
5. Map 48-byte inventory-like entries in PMAP block hash `8CE2CF3F`, with record tag `409F50CB`, to signed/unsigned 32-bit identifiers in a curated public item-hash catalogue. Read big-endian quantity from byte offset 36 of each record. This record family includes ammunition, kit and document entries: it is **not** just the satchel UI.
6. In the separate exploratory probe, inspect PMAP block `03A83D72` as 12-byte mission-related records and block `B034FFFD` as 128-byte coordinate-bearing records. These interpretations are deliberately structure-only; raw integer transitions do not prove medals, mission completion or user/player location.
7. The presence of public horse-breed catalogue hashes in a save does **not** prove a horse is owned. An owner-linked horse structure is still needed.

The reviewed local fixtures demonstrated that the same parsing approach could read cash and multiple differing item quantities consistently with independent UI evidence, and that record families change across saves. **No fixture is redistributed here; anyone reproducing these claims must use their own legal save copies and independent observations.**

## Confidence and nonclaims

| Data family | State | Acceptable use |
|---|---|---|
| Encrypted container + checksum validation | Format verified against local fixtures | Reject corrupt/unsupported inputs |
| Header description | Decoded, may contain player-provided labels | Historical save identification |
| Cash | Locally cross-checked record layout, experimental generally | Advisory snapshot; no canonical campaign write |
| Named item quantities | Locally cross-checked selected items; unresolved hashes exist | Read-only inventory-like evidence; never promise completeness |
| Mission records | Unmapped event records | `uninterpreted_save_change` |
| Position vectors | Plausible coordinates, entity type unknown | `uninterpreted_position_record_change` |
| Horse breed identifiers | Catalogue-like hashes | Never count as owned horses |
| Gold/medals, honor, horse ownership/bonding, cores | Not independently decoded | `UNKNOWN` |

Explicitly avoid labeling a byte as “Gold,” “Silver,” “high honor,” “horse bonding level” or “Arthur's current map position” absent controlled before/after evidence **and** a validated schema or UI cross-check.

## Optional integration contract (proposal only)

- Source: save *copy* provided by player, with timestamp, file digest and parser version. Preserve `read_at`, `save_title`, freshness and evidence class.
- Processing: local-only, opt-in parser; no background watcher or repository mutations. A watcher would require independent user permission and security review.
- Output: private local JSON with `derived_observation` or `uninterpreted_save_change`, confidence/provenance, and parser warnings. No interpretation of missing entries as absent unlocks.
- Consumer: the Adaptive Companion may describe a *historical observed save*, subject to staleness checks; Mission Control and Free Roam Control may only advise.
- Authority: `L33TW0RLD/rdr2/campaign/` remains canonical. Any reconciliation follows **explicit** GameGuide evidence review and owner-approved writes. No silent imports, saves, mission medals, honor changes or unlocks.

## Safety and privacy

Never run on the live source save if a stable copy can be made. Never write game-owned directories. Treat save titles, inventory details, coordinates, hashes and reports as private. Never commit raw or decrypted saves to a public repo. JSON output is *not* a reproducible public fixture. Output file creation uses exclusive mode.

Potential improvements: separate pure codec from I/O; add synthetic fixtures and adverse-file tests; verify more PC variants; improve duplicate-hash and overflow defenses; controlled single-change studies; schema-backed medal/honor/horse mapping. **No automatic replay/Gold ledger changes.**

## References

- Public PC container/PSO layout research: https://github.com/JuliPodie/rdr2-savegame-reader (MIT; read-only research precedent).
- Public hashed item catalogue: https://github.com/Sarbatore/RDR2-HashDatabase (MIT; `CatalogItems.json`).
- Container checksum background and tooling: https://github.com/bucanero/apollo-patches (independent reference; no code imported here).
- RDR2 Hub evidence authority: [source authority](../protocol/source_authority.md), [existing architecture contract](../architecture/module_integration_v0_1.md), and [companion context](../companion/context_contract_v1.md).

**Owner review required:** whether any optional local save bridge is desirable; which evidence classes may be presented; how private local reports cross a consent boundary into ChatGPT; and whether any downstream GameGuide workflow should accept save-derived claims.
