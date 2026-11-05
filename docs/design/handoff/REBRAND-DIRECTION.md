# REBRAND-DIRECTION

Catalog checked: [open-foundry.com/fonts](https://open-foundry.com/fonts) (2026-11-05).

## 1. Verdict

**Evolve Basel** — keep the signal-only accent rule, unboxed turns, mono ledger, and grid desk; swap the type stack to Open Foundry faces so Musterd no longer reads as Geist/OpenMausBot.

## 2. Type from Open Foundry

| Role | Family | Why |
| --- | --- | --- |
| UI sans | **Work Sans** (Wei Huang) | Listed on OF; screen neo-grotesque with enough weights for row/header hierarchy without decoration |
| Display (optional) | **Cooper Hewitt** (Chester Jenkins) | Listed on OF; empty-desk wordmark / lockup only — institutional presence, not UI chrome |
| Mono | **Office Code Pro** | Listed on OF; tool ledger, steps, machine facts |

No faces outside that catalog. Fallbacks until vendored: system UI / `ui-monospace`.

## 3. Colour

**Keep mustard as signal-only.** Midnight `--color-accent` `#e3b23c` (focus `#f0c867`); Daylight `#8a6408` (border `#b8860b`). Appears only on: focus ring, needs-you (bot row / header / inbox count), approval border, “Allow once.” Never washes, hover tints, streaming caret, primary CTA, or the mark.

## 4. Chrome

1. Midnight/Daylight `--font-sans` → Work Sans; `--font-mono` → Office Code Pro (self-host OF files).
2. Empty-team desk: **Musterd** wordmark in Cooper Hewitt; three ascending bars stay ink-only (no mustard fill).
3. Appearance: expose Work Sans (+ optional Cooper Hewitt) as first-class font ids beside skin/system; keep signal-only preview for accent.

## 5. Copy tone

**Musterd** speaks like a local crew desk — short, factual, no cloud-poster cheer; people never see “MausBot” or “OpenMausBot” in UI copy (`omb` / `openmausbot` stay code/CLI aliases only).
