# Token and class changes vs `src/styles.css`

Only **Midnight** and **Daylight** change. The other nine skins keep today's values. No new component library and no new `--color-*` names. One new length token, `--radius-composer`, replaces a radius that is hardcoded in `Composer.tsx` today.

## `--color-*` changes

Contrast is measured on the surface each token sits on. Re-run `pnpm check:contrast` once these values land in `styles.css`.

### Midnight (`[data-skin="midnight"]` and the `@theme` defaults)

| Token | Today | Proposed | Why / contrast |
| --- | --- | --- | --- |
| `--color-accent` | `#1084fe` | `#e3b23c` | Mustard brand signal. 9.54:1 on `app` |
| `--color-accent-border` | `#459ffe` | `#f0c867` | Same family |
| `--color-accent-text` | `#7fc0ff` | `#f0c867` | 11.74:1 on `app` |
| `--color-accent-ink` | `#ffffff` | `#1a1405` | Dark ink on the mustard fill: 9.34:1 (white on today's blue was 3.65:1) |
| `--color-focus` | `#459ffe` | `#f0c867` | The focus ring follows the accent |
| `--color-warning` | `#ff9800` | `#ff7a50` | Moved toward red so "needs you" never reads as accent. 7.49:1 on `panel` |
| `--color-bubble-user` | `#5a5a5a` | `#2b2b2b` | A quieter user turn. Ink is 12.99:1 on it |
| `--color-composer` | `#1f1f1f` | `#1a1a1a` | Separates the composer from `card` and `raised` |

### Daylight (`[data-skin="daylight"]`)

| Token | Today | Proposed | Why / contrast |
| --- | --- | --- | --- |
| `--color-accent` | `#126fd4` | `#8a6408` | Deep mustard. 5.24:1 on `app`, 4.93:1 on `panel` |
| `--color-accent-border` | `#1680f3` | `#b8860b` | |
| `--color-accent-text` | `#0b69cc` | `#7a5900` | 6.29:1 on `app`, 5.07:1 on `raised` |
| `--color-accent-ink` | `#ffffff` | `#ffffff` (unchanged) | 5.37:1 on the new accent |
| `--color-focus` | `#0b6dd3` | `#8a6408` | |
| `--color-warning` | `#9c5b00` | `#b23a0e` | Today's brown sits too close to the mustard. 5.5:1 on `panel` |
| `--color-bubble-user` | `#1c1c1c` | `#ececec` | Drops the inverted black bubble. Mirrors Midnight's quiet tone |
| `--color-bubble-user-ink` | `#fcfcfc` | `#1c1c1c` | 14.43:1 |

Unchanged in both skins: every surface (`app`, `panel`, `raised`, `raised-hover`, `card`, `inset`, `control`, `menu*`, `frame`, `edge`, `hairline`), all three inks, `success`, `danger`, the identity colours and the fonts.

**Skin overlap.** Foundry already uses a brass accent (`#d99a3e`). After this change, Foundry differs from Midnight through its warm neutrals and stays a distinct skin. No skin is orphaned, and `THEME_SKINS` stays `{ light: "daylight", dark: "midnight" }`.

## Non-colour tokens

| Token | Today | Proposed |
| --- | --- | --- |
| `--chat-column-max` (default width) | `60rem` | `46rem`. Wide (`80rem`) and Full stay as they are |
| `--radius-composer` *(new)* | 22px hardcoded in `Composer.tsx` (18px once wrapped) | `16px` in Midnight and Daylight. Other skins can keep 22px by setting it |

## Shared classes

| Class | Change |
| --- | --- |
| `.ui-button`, `.ui-icon-button` | No change. The pill radius and ink wash in Midnight/Daylight stay as they are today |
| `.ui-button-primary` | No change. The neutral ink pill stays. Mustard is **not** used for the primary CTA |
| `.ui-button-accent` *(modifier, optional)* | Accent fill + `--color-accent-ink`. Used only for "Allow once" in an approval. It can also live inline in `ApprovalCard.tsx` if you'd rather not add a class |
| `.ui-pill`, `.ui-chip`, `.ui-code-chip` | No change |
| `.chat-column`, `.chat-column-dock` | No rule change. They pick up the new `--chat-column-max` |
| `.popover-surface`, `.glass-surface`, `.ui-modal` | No change. The settings dialog in the prototype reuses the glass as it is |

## Component-level moves (no new tokens)

- **Bot turns are not boxed.** In Midnight and Daylight a bot reply sits on the page with a 28px avatar and a name/time line. `--color-card` is no longer the bot bubble there. User turns keep `--color-bubble-user`.
- **Tool steps as a mono ledger.** Steps render as a `--font-mono` list with a hairline on the left, instead of stacked run chips. A finished turn collapses them to one `.ui-pill` reading "Ran N steps · 41s".
- **Status lives in two places only:** the sidebar's bot row (a dot plus `working 0:42` / `needs you`) and the chat header. The duplicate strip above the composer is removed.
- **The composer's bottom bar** holds the target bot, the model, attach and mention. Stop replaces Send while a turn runs.
- **The approval interrupt** sits in the transcript column, bordered in accent, with the keyboard hints `↵` / `esc`. It is not a modal.
- **Empty team:** the mark and the wordmark "Musterd" at 56–96px, one headline, one line, one CTA group and one mono environment line. No cloud upsell and no companion phone.

## Motion (three, all existing tokens)

1. `--animate-msg-in`: a new message or approval arriving.
2. `--animate-caret`: the streaming caret, now in `--color-accent`.
3. `--animate-rise`: the empty-team hero, once.

The working status dot does **not** pulse (`--animate-status-pulse` is not used on the desk). All three are disabled under `prefers-reduced-motion`.
