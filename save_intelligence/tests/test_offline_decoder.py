"""Synthetic tests for the read-only RDR2 save research prototype.

These tests intentionally do not contain game saves, screenshots, credentials,
personal filenames or decrypted payload fixtures. Run:
  python -m unittest discover -s save_intelligence/tests -v
"""
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "tools"))

from rdr2_save_observer import CATALOG, checksum, save_report
from rdr2_structural_probe import compare, rage_joaat, timestamp_key


class SaveFormatSafetyTests(unittest.TestCase):
    def test_checksum_reference_vectors(self):
        self.assertEqual(checksum(b""), 0x6AE15BB2)
        self.assertEqual(checksum(b"\x00"), 0x693BC1E0)
        self.assertEqual(checksum(b"\x01\x02\x03"), 0x6858422F)
        self.assertEqual(checksum(bytes(range(32))), 0xEA7D3E6F)

    def test_unsupported_envelopes_rejected(self):
        for data in (b"", b"RSAV", b"\x00" * 0x130, b"x" * 65536):
            with self.subTest(data_length=len(data)):
                with self.assertRaises(ValueError):
                    save_report(data)

    def test_public_hash_catalogue_key_is_32_bit_normalized(self):
        self.assertEqual(CATALOG[(-1105074461) & 0xFFFFFFFF], "CONSUMABLE_STRAWBERRIES_CAN")
        self.assertEqual(CATALOG[(-1532091729) & 0xFFFFFFFF], "CONSUMABLE_BISCUIT_BOX")

    def test_horse_catalogue_signature_is_not_an_ownership_value(self):
        self.assertEqual(rage_joaat("HORSE_BREED_MORGAN_BAY"), 0xE98F9F16)
        self.assertEqual(rage_joaat("HORSE_BREED_ARABIAN_WHITE"), 0xC1F4D71E)


class StructuralComparisonTests(unittest.TestCase):
    def test_compare_reports_raw_changes_not_gold_medals(self):
        before = {
            "title": "before",
            "position_candidates": [
                {"record_id": "ONE", "xyz": [1, 2, 3]},
            ],
            "mission_records": [
                {"record_id": "M1", "raw_final_word": "00000003", "placeholder_pattern": False},
            ],
        }
        after = {
            "title": "after",
            "position_candidates": [
                {"record_id": "ONE", "xyz": [1, 2, 3]},
                {"record_id": "TWO", "xyz": [9, 8, 7]},
            ],
            "mission_records": [
                {"record_id": "M1", "raw_final_word": "00000005", "placeholder_pattern": False},
            ],
        }
        diff = compare(before, after)
        self.assertEqual(diff["added_position_candidates"], [
            {"record_id": "TWO", "xyz": [9, 8, 7]},
        ])
        self.assertEqual(diff["mission_word_changes"], [
            {"record_id": "M1", "before": "00000003", "after": "00000005"},
        ])
        self.assertNotIn("medal", diff)

    def test_missing_save_date_has_nonchronological_fallback(self):
        key = timestamp_key("B", {"title": "no recognized timestamp"})
        self.assertEqual(key[0], 1)
        valid = timestamp_key("A", {"title": "Save - 10/17/26 10:34:04"})
        self.assertEqual(valid[0], 0)
        self.assertLess(valid, key)


if __name__ == "__main__":
    unittest.main()
