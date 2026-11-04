# Musterd desk: design handoff

The visual truth for the P0 shell overhaul, plus one P1 surface (Appearance). It is not production source. Build it against the real React components and the tokens in `src/styles.css`.

## Files

| File | What |
| --- | --- |
| `musterd-p0-prototype.html` | A standalone prototype. Open it in a browser. The top bar switches the **state** and the **skin**. A deep link looks like `?state=approval&skin=daylight` |
| `CHANGES-BASEL.md` | What the Basel Ledger pass changed vs the first handoff |
| `TOKEN-CHANGES.md` | The signal-only accent rule, plus every `--color-*`, length token and shared class that changes vs today, with contrast figures |
| `screens/*.png` | Each state in Midnight and Daylight at 1440×900 |
| `musterd-desk-handoff.zip` | This folder as one zip |

The prototype loads Geist and Geist Mono from jsDelivr. Offline, it falls back to the system stack.

## States → components

Elements in the prototype carry a `data-src` attribute that names the file they map to.

| State | What it shows | Primary files |
| --- | --- | --- |
| Idle | Frame, rail, sidebar (team, rooms, threads), unboxed bot turns, composer | `app/AppFrame.tsx`, `AppChrome.tsx`, `Sidebar.tsx`, `ChatView.tsx`, `Composer.tsx` |
| Streaming | The working dot and timer (ink) on the bot row and the header, the mono step ledger, the ink caret, Stop in place of Send, the "Queue a follow-up" field. No accent on screen | `ChatView.tsx`, the message components, `Composer.tsx` |
| Approval | An inline interrupt in the column, and "needs you" on the bot row, the header and the rail's Inbox count. All in the signal colour | `ApprovalCard.tsx`, `inbox/`, `Sidebar.tsx` |
| Empty team | A 56px wordmark over an ink rule, on the column grid. "Muster your first bot.", Create / Import / Connect Kepler, and a ledger of this machine | `ChatEmptyState.tsx`, `onboarding/` |
| Phone | Sidebar as the home screen with a tab bar, chat while streaming, empty team. Touch targets ≥ 40px and a 16px composer field | `PHONE_LAYOUT` paths, the same components |
| Appearance (P1) | The settings glass with live `[data-skin]` miniatures of all 11 skins plus System. Each has an identical layout, with the accent only on one "needs you" dot and one approval border. Also a signal-colour specimen, chat width (Comfortable / Standard / Wide / Full), type and motion | `SkinPicker.tsx`, `ThemeRow.tsx`, `AppSettingsRows.tsx` |

## Implementation notes

- **Skins stay token-only.** Apply the values in `TOKEN-CHANGES.md` to the `[data-skin="midnight"]` block, the `@theme` defaults and the `[data-skin="daylight"]` block. Then run `pnpm check:contrast`.
- **The brand mark** is three ascending bars (a rank mustering), in ink only. It is inline SVG in the prototype. Ship it as one React component that sizes from 16px (chrome) to 40px (empty team).
- **The wordmark** is Geist at weight ~640 with `letter-spacing: -0.035em`, capped at 64px (56px desktop, 44px phone). No new font.
- **Local edition:** none of the P0 states show cloud buy or companion phone surfaces. Kepler appears only as a peer (sidebar footer, empty-state link, the Courier bot).
- **Copy** is English source. Wire every string through `t(...)`.
- The prototype does **not** cover rooms in depth, the activity panel or bot settings. Rooms and inbox reuse the same row, dot and ledger patterns.
