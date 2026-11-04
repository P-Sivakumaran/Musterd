# Basel Ledger pass: changes vs the first handoff

North star: **Basel Ledger Desk**, constrained by **Ulm / Rams**. Mustard is the single signal colour. Only the four artboards below were revised. Everything else is kept: unboxed bot turns, the mono step ledger, status in two places, the local-edition CTAs and Geist.

| Artboard | Before | Now |
| --- | --- | --- |
| Empty team | Centred poster: 64px mark, 56–96px wordmark | Left-aligned block on the chat column grid, at about 12vh. 40px ink mark and 56px wordmark (44px on a phone) over a 1.5px ink rule. Below it, a 12-column grid: copy and CTAs span 7 columns, a mono ledger of this machine spans 4 |
| Approval | Mustard border on a 7% mustard wash. Shield icon. "Needs you" in warning orange; streaming also in mustard | 1px mustard border on the page colour, with a mono `NEEDS YOU` tag. "Needs you" is mustard everywhere: bot dot, label, header, inbox count. Working/streaming status and the caret are ink, so ambient work never shows the signal |
| Appearance (P1) | Mustard selection ring and switches; minis with accent send buttons | Selection ring and switches in ink. Each mini has an identical layout; the accent sits only on one "needs you" dot and one approval border. New "Signal colour" specimen: where the accent appears, and where it never does. Chat width gains Comfortable (46rem); Standard stays 60rem |
| Idle composer | 16px pill, round Send | `--radius-composer: 8px`. The field sits above a 36px tool bar split by a hairline, with dividers between bot, model and tools. Send and Stop are 28px squares with a 4px radius |

Also changed:

- **Brand mark:** ink only. Its tallest bar is no longer mustard.
- **`--chat-column-max`:** the default is back to 60rem. 46rem becomes the Comfortable option.

The token values themselves (mustard accent, warning, user bubble) are unchanged from the first handoff. See `TOKEN-CHANGES.md`.
