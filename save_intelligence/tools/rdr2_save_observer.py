#!/usr/bin/env python3
"""Offline, read-only RDR2 PC Story Mode save inspector (experimental).

Requires: pip install cryptography
Usage: python rdr2_save_observer.py copies/saves.zip --output local_report.json

Reads PC SRDR saves or a ZIP in memory; does not edit or extract originals.
Do not publish generated reports: they can contain private gameplay information.

Research / attribution:
  https://github.com/JuliPodie/rdr2-savegame-reader
  https://github.com/Sarbatore/RDR2-HashDatabase
  See ../THIRD_PARTY_NOTICES.md.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import pathlib
import struct
import sys
import zipfile

from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

KEY = bytes.fromhex("46ED8D3F9435E4EC122CB2E2AF97C57E4C5A8C3092C7844E11C686FF41DF410F")
MONEY_SIGNATURE = bytes.fromhex("CE548CF5")
QUANTITY_BLOCK_HASH = 0x8CE2CF3F
QUANTITY_RECORD_TAG = 0x409F50CB
MAX_SIZE = 12_000_000

# Curated item IDs from the public hashed catalogue. IDs without reliable
# labels remain UNKNOWN. Includes ammunition, kit and documents, not just bag UI.
CATALOG_TEXT = """
1259508039|CUSTOM_SATCHEL
1681219929|AMMO_REVOLVER
-1921080134|CONSUMABLE_OAT_CAKES
23610856|CONSUMABLE_JERKY
-227505011|CONSUMABLE_PEACHES_CAN
-650786154|CONSUMABLE_SWEET_CORN_CAN
-2044540391|CONSUMABLE_BAKED_BEANS_CAN
-1532091729|CONSUMABLE_BISCUIT_BOX
1565289096|CONSUMABLE_MEDICINE_USED
-1217729597|PROVISION_BRACELET_GOLD
-885810591|CONSUMABLE_CIGARETTE_BOX
-727924611|KIT_WARDROBE
-1878508229|AMMO_SHOTGUN
1177324828|CONSUMABLE_KIDNEYBEANS_CAN
688258043|CONSUMABLE_WHISKEY
954660191|AMMO_ARROW
-1994237933|CONSUMABLE_OFFAL
1471975165|PROVISION_MATURE_VENISON
-1330115686|AMMO_REPEATER
-355466967|AMMO_LASSO
376981280|CONSUMABLE_SNAKE_OIL_USED
477123651|CONSUMABLE_RESTORATIVE_USED
-898386032|KIT_GUN_OIL
1463786584|CONSUMABLE_CIGARETTE_BOX_CHEAP
-953313786|CONSUMABLE_TONIC
1973952589|CONSUMABLE_RESTORATIVE
230530039|CONSUMABLE_MEDICINE
-324053813|CONSUMABLE_CHEWING_TOBACCO
-1724285052|CONSUMABLE_GIN_USED
29153524|PROVISION_BUCKLE_SILVER
1026484154|CONSUMABLE_TONIC_USED
-1831458922|CONSUMABLE_CRACKERS
338147422|CONSUMABLE_CIGAR
-221280702|CONSUMABLE_GIN
1216207974|PROVISION_RING_SILVER
785091089|CONSUMABLE_BRANDY
480079517|AMMO_DYNAMITE
1433048902|CONSUMABLE_HERB_GINSENG
-529638012|CONSUMABLE_HERB_YARROW
-1781387050|CONSUMABLE_HERB_SAGE
-597058368|CONSUMABLE_HERB_INDIAN_TOBACCO
500564674|PROVISION_GRITTY_FISH_MEAT
-875449072|PROVISION_STRINGY_MEAT
1237770824|PROVISION_ANIMAL_FAT
236757114|PROVISION_BIRD_FEATHER_FLIGHT
-601932535|CONSUMABLE_COFFEE_GNDS_REG
-1267972061|DOCUMENT_PAMPHLET_HORSE_OINTMENT
1619534881|DOCUMENT_PAMPHLET_FIRE_ARROW
1015404643|DOCUMENT_PAMPHLET_SML_GM_ARROW
-566881549|DOCUMENT_PAMPHLET_SPLIT_POINT_AMMO
-1753730528|DOCUMENT_PAMPHLET_MOLOTOV
147796381|DOCUMENT_PAMPHLET_EXPRESS_EXPLOSIVE_AMMO
-378547623|DOCUMENT_PAMPHLET_POTENT_HERBIVORE_BAIT
829545206|DOCUMENT_PAMPHLET_POTENT_PREDATOR_BAIT
-1838434463|KIT_CAMP
655868243|PROVISION_TRINKET_IGUANA_SCALE
1950175060|AMMO_PISTOL
-435006002|CONSUMABLE_HERB_WILD_MINT
1627068364|CONSUMABLE_HORSE_REVIVER
-653299524|CONSUMABLE_SNAKE_OIL
-142033055|DOCUMENT_PAMPHLET_SPECIAL_HORSE_STIMULANT
546981776|CONSUMABLE_HERB_OREGANO
1340414242|PROVISION_RABBIT_PELT_POOR
1970477904|PROVISION_GAME_MEAT
-1639263599|AMMO_THROWING_KNIVES
-755485480|CONSUMABLE_POTENT_MEDICINE
1478239863|PROVISION_GOLDRING
314966081|AMMO_SHOTGUN_SLUG
-1105074461|CONSUMABLE_STRAWBERRIES_CAN
"""
CATALOG = {
    int(key) & 0xFFFFFFFF: label
    for line in CATALOG_TEXT.splitlines() if "|" in line
    for key, label in [line.strip().split("|", 1)]
}

def be32(data, offset):
    return struct.unpack_from(">I", data, offset)[0]

def be16(data, offset):
    return struct.unpack_from(">H", data, offset)[0]

def checksum(block):
    h = 0x3FAC7125
    for value in block:
        signed = value if value < 128 else value - 256
        h = (h + signed) & 0xFFFFFFFF
        h = (h + (h << 10)) & 0xFFFFFFFF
        h ^= h >> 6
    h = (h + (h << 3)) & 0xFFFFFFFF
    h ^= h >> 11
    h = (h + (h << 15)) & 0xFFFFFFFF
    return h

def save_report(encrypted):
    if (
        len(encrypted) > MAX_SIZE or len(encrypted) <= 0x110
        or (len(encrypted) - 0x110) % 16
        or encrypted[:4] != b"\x00\x00\x00\x04"
    ):
        raise ValueError("Invalid or unsupported PC save envelope")
    decryptor = Cipher(algorithms.AES(KEY), modes.ECB()).decryptor()
    decoded = encrypted[:0x110] + decryptor.update(encrypted[0x110:]) + decryptor.finalize()
    if decoded[0x110:0x114] != b"RSAV":
        raise ValueError("Save payload is not an RSAV PC container")
    title = decoded[4:0x104].decode("utf-16le", errors="replace").split("\0", 1)[0]

    checks = []
    for off in range(0x110, len(decoded) - 20):
        if decoded[off:off+4] != b"CHKS" or be32(decoded, off+4) != 20:
            continue
        length = be32(decoded, off+8)
        start = off - length + 20
        if start < 0x110 or start > off or start + length > len(decoded):
            continue
        temp = bytearray(decoded[start:start+length])
        temp[off+8-start:off+16-start] = b"\x00" * 8
        checks.append({"offset": off, "valid": checksum(temp) == be32(decoded, off+12)})
    if not checks or not all(c["valid"] for c in checks):
        raise ValueError("Save checksums failed")

    cash_matches = []
    pos = decoded.find(MONEY_SIGNATURE)
    while pos >= 0:
        cash_matches.append(pos)
        pos = decoded.find(MONEY_SIGNATURE, pos + 1)
    cash = (
        be32(decoded, cash_matches[0]+16)
        if len(cash_matches) == 1 and cash_matches[0] + 20 <= len(decoded)
        else None
    )

    first = checks[0]["offset"]
    payload_start = first - be32(decoded, first+8) + 20
    if decoded[payload_start:payload_start+4] != b"PSIN":
        raise ValueError("No expected PSIN section")
    map_start = payload_start + be32(decoded, payload_start+4)
    if map_start + 24 > len(decoded) or decoded[map_start:map_start+4] != b"PMAP":
        raise ValueError("No expected PMAP section")
    map_length = be32(decoded, map_start+4)
    num = be16(decoded, map_start+16)
    if map_length != 24 + 16*num or map_start + map_length > len(decoded):
        raise ValueError("Invalid PMAP size")

    block = None
    for j in range(num):
        p = map_start + 24 + 16*j
        if be32(decoded, p) != QUANTITY_BLOCK_HASH:
            continue
        rel, size = be32(decoded, p+4), be32(decoded, p+12)
        absolute = payload_start + 8 + rel
        if absolute < payload_start + 8 or absolute + size > map_start or size % 48:
            raise ValueError("Invalid inventory-like block range")
        if block is not None:
            raise ValueError("Ambiguous repeated inventory-like block")
        block = decoded[absolute:absolute+size]
    if block is None:
        raise ValueError("Known quantity block absent")

    quantities = {}
    duplicates = []
    skipped = 0
    for off in range(0, len(block), 48):
        row = block[off:off+48]
        if be32(row, 20) != QUANTITY_RECORD_TAG:
            skipped += 1
            continue
        ident = be32(row, 16)
        qty = be32(row, 36)
        if ident in quantities:
            duplicates.append(f"{ident:08X}")
            if quantities[ident]["quantity"] != qty:
                raise ValueError("Contradictory duplicated item identifier")
            continue
        label = CATALOG.get(ident)
        quantities[ident] = {
            "hash": f"{ident:08X}", "catalog_name": label,
            "quantity": qty, "identified": label is not None
        }
    rows = sorted(quantities.values(), key=lambda row: (row["catalog_name"] or "ZZZ_"+row["hash"]))

    return {
        "save_title": title,
        "sha256": hashlib.sha256(encrypted).hexdigest(),
        "encrypted_bytes": len(encrypted),
        "checksum_records": len(checks),
        "all_checksums_valid": True,
        "cash": {
            "cents": cash,
            "dollars": round(cash / 100, 2),
            "confidence": "research_signature_cross_save; external_confirmation_required"
        } if cash is not None else None,
        "inventory_like_records": {
            "entry_count": len(rows),
            "named_count": sum(r["identified"] for r in rows),
            "unresolved_count": sum(not r["identified"] for r in rows),
            "duplicate_hashes": duplicates,
            "other_record_types_skipped": skipped,
            "entries": rows,
        },
        "warnings": [
            "A save is a historical snapshot, never live game telemetry.",
            "Catalogue labels are reference evidence; not proof of all owned or unlocked items.",
            "Mission medals, honor and horse state are not decoded by this tool."
        ],
    }

def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawTextHelpFormatter)
    parser.add_argument("input", help="SRDR PC save copy, or ZIP of save copies")
    parser.add_argument("--output", help="Create private JSON report; never overwrite")
    args = parser.parse_args()
    source = pathlib.Path(args.input)
    if not source.is_file():
        parser.error("Save source not found")
    reports, backups = {}, {}
    if zipfile.is_zipfile(source):
        with zipfile.ZipFile(source) as archive:
            total_uncompressed = 0
            for item in archive.infolist():
                name = pathlib.PurePosixPath(item.filename).name
                if item.is_dir() or not name.startswith("SRDR"):
                    continue
                if item.file_size > MAX_SIZE:
                    raise ValueError("Oversized save in ZIP")
                total_uncompressed += item.file_size
                if total_uncompressed > 128_000_000:
                    raise ValueError("ZIP contains too much uncompressed save content")
                data = archive.read(item)
                if name.endswith(".bak"):
                    backups[name[:-4]] = hashlib.sha256(data).hexdigest()
                else:
                    if name in reports:
                        raise ValueError("Ambiguous duplicate save basename")
                    reports[name] = save_report(data)
    else:
        if source.stat().st_size > MAX_SIZE:
            raise ValueError("Oversized save")
        reports[source.name] = save_report(source.read_bytes())
    for name, report in reports.items():
        if name in backups:
            report["backup_identical"] = backups[name] == report["sha256"]
    payload = {
        "tool": "RDR2 read-only Save Research v0.2",
        "source": source.name,
        "save_count": len(reports),
        "saves": reports,
        "privacy": "PRIVATE LOCAL OUTPUT; do not commit or share as public fixture",
        "authority": "Advisory observations only; no canonical campaign updates.",
    }
    output = json.dumps(payload, indent=2, ensure_ascii=False)
    if args.output:
        with pathlib.Path(args.output).open("x", encoding="utf-8") as dest:
            dest.write(output + "\n")
        print("Created private report:", args.output)
    else:
        print(output)

if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print("ERROR:", exc, file=sys.stderr)
        sys.exit(1)
