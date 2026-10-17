#!/usr/bin/env python3
"""Offline RDR2 save structural-delta probe v0.2 (research only).

Usage:
  python rdr2_structural_probe.py copies/saves.zip --output private_diff.json
  python rdr2_structural_probe.py copies/saves.zip --order SRDR30002 SRDR30001 --output private_diff.json

Requires rdr2_save_observer.py in the same directory and cryptography.
Source saves are read in memory, never edited or extracted. Treat resulting
report as private. Coordinate records are NOT verified player location,
mission record integers are NOT Gold/medal flags, and breed references are
NOT evidence of owned horses.
"""
from __future__ import annotations

import argparse
import collections
from datetime import datetime
import hashlib
import json
import pathlib
import re
import struct
import sys
import zipfile

from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from rdr2_save_observer import KEY, MAX_SIZE, be16, be32, save_report

POSITION_BLOCK = 0xB034FFFD
MISSION_BLOCK = 0x03A83D72
HORSE_REFERENCE_LABELS = (
    "HORSE_BREED_TENNESSEEWALKER_CHESTNUT",
    "HORSE_BREED_MORGAN_BAY",
    "HORSE_BREED_ARABIAN_BLACK",
    "HORSE_BREED_ARABIAN_WHITE",
    "HORSE_BREED_SHIRE_DARKBAY",
    "HORSE_BREED_APPALOOSA_BLANKET",
    "HORSE_BREED_MUSTANG_WILDBAY",
    "HORSE_BREED_KENTUCKYSADDLE_BLACK",
)

def rage_joaat(value):
    h = 0
    for char in value.lower().encode("ascii"):
        h = (h + char) & 0xFFFFFFFF
        h = (h + (h << 10)) & 0xFFFFFFFF
        h ^= h >> 6
    h = (h + (h << 3)) & 0xFFFFFFFF
    h ^= h >> 11
    return (h + (h << 15)) & 0xFFFFFFFF

def decode(encrypted):
    summary = save_report(encrypted)  # Validate envelope, checksum and known structure.
    dec = Cipher(algorithms.AES(KEY), modes.ECB()).decryptor()
    raw = encrypted[:0x110] + dec.update(encrypted[0x110:]) + dec.finalize()
    return raw, summary

def first_mapped_blocks(decoded):
    for pos in range(0x110, len(decoded) - 20):
        if decoded[pos:pos+4] != b"CHKS" or be32(decoded, pos+4) != 20:
            continue
        length = be32(decoded, pos+8)
        start = pos - length + 20
        if start < 0x110 or decoded[start:start+4] != b"PSIN":
            continue
        pm = start + be32(decoded, start+4)
        if decoded[pm:pm+4] != b"PMAP":
            continue
        count = be16(decoded, pm+16)
        if be32(decoded, pm+4) != 24 + 16*count:
            raise ValueError("Invalid PSO map length")
        blocks = {}
        for i in range(count):
            offset = pm + 24 + i*16
            code, relative, size = (
                be32(decoded, offset),
                be32(decoded, offset+4),
                be32(decoded, offset+12)
            )
            absolute = start + 8 + relative
            if absolute >= start + 8 and absolute + size <= pm:
                blocks.setdefault(code, []).append((absolute, size))
        return blocks
    raise ValueError("No validated mapped PSO data block")

def read_slot(encrypted):
    decoded, summary = decode(encrypted)
    blocks = first_mapped_blocks(decoded)
    pblocks = blocks.get(POSITION_BLOCK, [])
    mblocks = blocks.get(MISSION_BLOCK, [])
    if len(pblocks) != 1 or len(mblocks) != 1:
        raise ValueError("Expected one position-bearing and one mission-related block")
    pstart, plen = pblocks[0]
    mstart, mlen = mblocks[0]
    if plen % 128 or mlen % 12:
        raise ValueError("Unsupported research record stride")
    positions = []
    for index in range(plen // 128):
        pos = pstart + index*128
        x, y, z = struct.unpack_from(">fff", decoded, pos+4)
        positions.append({
            "record_id": f"{be32(decoded, pos):08X}",
            "xyz": [round(x, 3), round(y, 3), round(z, 3)],
            "ordinal": index,
        })
    missions = []
    for index in range(mlen // 12):
        pos = mstart + index*12
        w1, w2, w3 = struct.unpack_from(">III", decoded, pos)
        missions.append({
            "record_id": f"{w1:08X}",
            "associated_hash": f"{w2:08X}",
            "raw_final_word": f"{w3:08X}",
            "placeholder_pattern": w2 == 0x70707070,
            "ordinal": index,
        })
    breed_references = {}
    for label in HORSE_REFERENCE_LABELS:
        signature = struct.pack(">I", rage_joaat(label))
        hits = []
        at = decoded.find(signature)
        while at >= 0:
            hits.append(at)
            at = decoded.find(signature, at+1)
        breed_references[label] = hits
    return {
        "title": summary["save_title"],
        "sha256": summary["sha256"],
        "integrity_verified": summary["all_checksums_valid"],
        "position_candidate_count": len(positions),
        "position_candidates": positions,
        "mission_record_count": len(missions),
        "mission_records": missions,
        "horse_reference_hash_hits": breed_references,
        "warnings": [
            "Position vectors are unidentified entity data, NOT player coordinates.",
            "Mission words do not identify a medal or completion state.",
            "Breed identifiers do not establish ownership, name or bonding.",
        ],
    }

def compare(before, after):
    def pos_key(item):
        return (item["record_id"], tuple(item["xyz"]))
    old = collections.Counter(pos_key(item) for item in before["position_candidates"])
    new = collections.Counter(pos_key(item) for item in after["position_candidates"])
    added = list((new-old).elements())
    removed = list((old-new).elements())
    prev_missions = {
        item["record_id"]: item
        for item in before["mission_records"] if not item["placeholder_pattern"]
    }
    next_missions = {
        item["record_id"]: item
        for item in after["mission_records"] if not item["placeholder_pattern"]
    }
    return {
        "before": before["title"],
        "after": after["title"],
        "added_position_candidates": [{"record_id": key[0], "xyz": list(key[1])} for key in added],
        "removed_position_candidates": [{"record_id": key[0], "xyz": list(key[1])} for key in removed],
        "mission_records_added": [v for k, v in next_missions.items() if k not in prev_missions],
        "mission_records_removed": [v for k, v in prev_missions.items() if k not in next_missions],
        "mission_word_changes": [
            {
                "record_id": ident,
                "before": prev_missions[ident]["raw_final_word"],
                "after": next_missions[ident]["raw_final_word"]
            }
            for ident in sorted(prev_missions.keys() & next_missions.keys())
            if prev_missions[ident]["raw_final_word"] != next_missions[ident]["raw_final_word"]
        ],
    }

def timestamp_key(name, slot):
    # RDR2 PC Story Mode save-title date is M/D/YY HH:MM:SS. If title
    # is absent/unknown, sorting is by filename; no chronology inferred.
    match = re.search(r"(\d{1,2}/\d{1,2}/\d{2,4} \d{2}:\d{2}:\d{2})", slot["title"])
    if not match:
        return (1, datetime.max, name)
    try:
        return (0, datetime.strptime(match.group(1), "%m/%d/%y %H:%M:%S"), name)
    except ValueError:
        return (1, datetime.max, name)

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("zip_path", type=pathlib.Path)
    parser.add_argument("--order", nargs="+", metavar="SAVE", help="Explicit oldest-to-newest save basenames")
    parser.add_argument("--output", type=pathlib.Path, required=True)
    args = parser.parse_args()
    if not zipfile.is_zipfile(args.zip_path):
        parser.error("Input must be a ZIP of PC save copies")
    slots = {}
    with zipfile.ZipFile(args.zip_path) as archive:
        total = 0
        for item in archive.infolist():
            name = pathlib.PurePosixPath(item.filename).name
            if item.is_dir() or not name.startswith("SRDR") or name.endswith(".bak"):
                continue
            total += item.file_size
            if item.file_size > MAX_SIZE or total > 128_000_000:
                raise ValueError("Oversized save input")
            if name in slots:
                raise ValueError("Duplicate save basename")
            slots[name] = read_slot(archive.read(item))
    if not slots:
        raise ValueError("No SRDR save files found")
    if args.order is not None:
        if len(args.order) != len(set(args.order)) or set(args.order) != set(slots):
            raise ValueError("--order must name each save basename exactly once")
        ordering = "explicitly supplied oldest-to-newest order"
        names = args.order
    else:
        ordering = "parsed title timestamps; filename fallback is NOT chronological"
        names = sorted(slots, key=lambda name: timestamp_key(name, slots[name]))
    output = {
        "research_version": "0.2",
        "source_sha256": hashlib.sha256(args.zip_path.read_bytes()).hexdigest(),
        "ordered_saves": names,
        "ordering": ordering,
        "slots": slots,
        "adjacent_comparisons": [compare(slots[a], slots[b]) for a, b in zip(names, names[1:])],
        "privacy": "PRIVATE LOCAL OUTPUT; do not commit to public repository.",
        "limits": "Read-only structural observations. No in-game outcomes or campaign writes.",
    }
    with args.output.open("x", encoding="utf-8") as dest:
        json.dump(output, dest, indent=2, ensure_ascii=False)
        dest.write("\n")
    print("Created private research report:", args.output,
          ";", len(slots), "save slots;", len(output["adjacent_comparisons"]), "comparisons")

if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print("ERROR:", exc, file=sys.stderr)
        sys.exit(1)
