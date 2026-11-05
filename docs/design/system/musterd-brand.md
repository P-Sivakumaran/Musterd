# Musterd brand kit

Locked direction: **evolve Basel Ledger** + Ulm restraint ([`../handoff/REBRAND-DIRECTION.md`](../handoff/REBRAND-DIRECTION.md), [`../european-design-directions.md`](../european-design-directions.md), [`../handoff/UX-EVAL-EUROPEAN.md`](../handoff/UX-EVAL-EUROPEAN.md)).

## Mark

- **Shape:** three ascending bars (ink only). Chrome component: [`src/components/MusterdMark.tsx`](../../../src/components/MusterdMark.tsx). Canonical SVG: [`musterd-mark.svg`](musterd-mark.svg). App tile: [`public/app-icon.svg`](../../../public/app-icon.svg).
- **Never** fill bars with mustard/signal accent. No mascot cursor, no SupaMaus.
- Wordmark **Musterd** uses `--font-display` (Cooper Hewitt) on the empty desk; UI chrome uses Work Sans.

## Type (Open Foundry)

| Role | Face |
|------|------|
| UI sans | Work Sans |
| Display | Cooper Hewitt (lockup / empty desk) |
| Mono | Office Code Pro (ledger, steps, machine facts) |

## Colour

- **Mustard is signal-only** (`--color-accent` / focus / needs-you / approval / Allow once).
- Surfaces stay near-neutral (Midnight / Daylight). No purple-AI defaults; no mustard washes.

## Voice

Local crew desk: short, factual. People never see “MausBot” or “OpenMausBot” in UI copy. CLI aliases `omb` / `openmausbot` stay in code only.

## Forbidden

- Pointing About / Updates / Releases at `milind-soni/OpenMausBot`
- Selling OpenMausBot cloud pricing or Discord as Musterd surfaces
- Replacing the three-bar mark with upstream mascot art without a new brand decision

## Implementation pointers

Tokens and skins: [`README.md`](README.md) · live CSS: `src/styles.css`.
