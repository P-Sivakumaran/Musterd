# Musterd full rebrand brief (1b + 2a)

## Decisions (locked)

1. **Visual:** Open brief. Study [open-foundry.com](https://open-foundry.com) (and `/fonts`). You may keep Basel Ledger or propose a stronger successor. Mustard-as-signal-only may stay or be replaced — argue either way.
2. **Name:** Everything a person reads is **Musterd**. Keep `omb` / `openmausbot` as compatibility aliases in code/CLI. Do not rename data dirs or break existing installs.

## Already shipped (do not discard without reason)

- Basel Ledger + Ulm constraint for Midnight/Daylight: signal-only accent, unboxed bot turns, mono tool ledger, composer tool bar, empty-team desk with ink mark.
- Empty desk already says **Musterd**; `index.html` title is already Musterd. `PRODUCT_NAME` in code may still say MausBot — that is in flight.

## Deliverable (write under `docs/design/handoff/`)

One short file: `REBRAND-DIRECTION.md` with:

1. **Verdict:** keep Basel / evolve Basel / replace Basel (one sentence why).
2. **Type from Open Foundry:** UI sans, optional display, mono — exact family names + why (license/weight/screen). Prefer OF-listed faces: Archivo, Aileron, Work Sans, Terminal Grotesque, Office Code Pro, Cooper Hewitt, Cotham Sans, Gap Sans, Bagnard, etc.
3. **Colour:** keep mustard signal or propose replacement (hex + where it appears; signal-only rule or not).
4. **Chrome:** 3 concrete UI moves (composer, empty, Appearance, or transcript) — no new component library.
5. **Copy tone:** one line for Musterd’s voice vs old MausBot/OpenMausBot.

## Roles

| Who | Job |
| --- | --- |
| **Don** | Creative Director — own the verdict and one coherent story |
| **Peggy** | UX — desk chrome, empty, Appearance, signal rules, implementability |
| **Sal** | Art direction — type pairing from Open Foundry, atmosphere, mark |

Open Foundry in a browser / fetch; do not invent font names not on the site.
