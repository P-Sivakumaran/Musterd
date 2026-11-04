# Token and class changes vs `src/styles.css`

Only **Midnight** and **Daylight** change. The other nine skins keep today's values. No new component library and no new `--color-*` names. One new length token, `--radius-composer`, replaces a radius that is hardcoded in `Composer.tsx` today.

Direction: **Basel Ledger Desk** (Swiss grid and typography), constrained by **Ulm / Rams** (as little design as possible). See `UX-EVAL-EUROPEAN.md`.

## Signal-only accent rule

`--color-accent` (mustard) is the desk's **one signal colour**. It appears only on:

1. the keyboard focus ring (`--color-focus`);
2. "needs you": the bot row's dot and label, the chat header status, and the inbox count;
3. the approval border in the transcript;
4. "Allow once", the only accent-filled control.

It never appears on working or streaming status, the streaming caret, selection, switches, the current row, hover, washes, backgrounds or the brand mark. Those use ink. Every skin follows the same rule with its own accent.

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
| `--color-warning` | `#ff9800` | `#ff7a50` | Moved toward red so a warning never reads as the mustard signal. 7.49:1 on `panel` |
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

Unchanged in both skins: every surface (`app`, `panel`, `raised`, `raised-hover`, `card`, `inset`, `control`, `menu*`, `frame`, `edge`, `hairline`), all three inks, `success`, `danger`, the fonts, and every identity colour except the two below.

### Identity colours (Midnight and Daylight only)

Bot avatars must never compete with the signal colour, so the two identity hues nearest mustard are cooled and desaturated. The rest of the identity palette is unchanged, and other skins keep their values.

| Token | Skin | Today | Proposed | White monogram on it |
| --- | --- | --- | --- | --- |
| `--identity-orange` | Midnight | `#E78531` | `#9a6a55` (clay) | 2.69 → 4.6:1 |
| `--identity-orange` | Daylight | `#b35e15` | `#7d5847` | 4.64 → 6.25:1 |
| `--identity-yellow` | Midnight | `#D8A729` | `#857f4a` (olive) | 2.22 → 4.09:1 |
| `--identity-yellow` | Daylight | `#91701b` | `#6e6c45` | 4.63 → 5.39:1 |

Today yellow sits at hue 43° and orange at 28°, against mustard at 42°. The new values sit at about 19° and 55°, with saturation down from 70–80% to about 25–30%.

**Skin overlap.** Foundry already uses a brass accent (`#d99a3e`). After this change, Foundry differs from Midnight through its warm neutrals and stays a distinct skin. No skin is orphaned, and `THEME_SKINS` stays `{ light: "daylight", dark: "midnight" }`.

## Non-colour tokens

| Token | Today | Proposed |
| --- | --- | --- |
| `--chat-column-max` (default width) | `60rem` | `60rem` (unchanged). A new `[data-chat-width="comfortable"]` sets `46rem`. Wide (`80rem`) and Full stay as they are |
| `--radius-composer` *(new)* | 22px hardcoded in `Composer.tsx` (18px once wrapped) | `8px` in Midnight and Daylight, whether or not the field wraps. Other skins can keep 22px by setting it |

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
- **The composer is a tool bar, not a pill.** The field sits above a 36px bar, split by a hairline. The bar holds the target bot, the model, attach and mention, with hairline dividers. Send and Stop are 28px squares with a 4px radius. Icon buttons in the bar use a 4px radius, not a circle.
- **The approval interrupt** sits in the transcript column with a 1px accent border on the page colour (no wash) and a mono `NEEDS YOU` tag. It has the keyboard hints `↵` / `esc` and is not a modal. The step that waits is marked `◆` in accent; the active step while streaming is `●` in ink.
- **Empty team:** a block on the chat column's grid, left-aligned and placed at about 12vh. It is not centred. The mark is 40px and the wordmark 56px (44px on a phone), over a 1.5px ink rule. Below the rule is a 12-column grid: the headline, line and CTAs span 7 columns, and a mono ledger of this machine (engines, data, MCP, Kepler, edition) spans 4. No cloud upsell and no companion phone.
- **The brand mark** is ink only. Mustard is not decoration.

## Motion (three, all existing tokens)

1. `--animate-msg-in`: a new message or approval arriving.
2. `--animate-caret`: the streaming caret, in `--color-ink`.
3. `--animate-rise`: the empty-team hero, once.

The working status dot does **not** pulse (`--animate-status-pulse` is not used on the desk). All three are disabled under `prefers-reduced-motion`.
