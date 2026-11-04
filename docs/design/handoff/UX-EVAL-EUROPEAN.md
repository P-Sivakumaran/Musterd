# Musterd P0 desk — UX/UI evaluation + European direction choice

Sources for this note:

- Handoff screens + `TOKEN-CHANGES.md` + `musterd-p0-prototype.html`
- Primary-source research: [`../european-design-directions.md`](../european-design-directions.md)
- Musterd MCP bots (2026-11-04): **Peggy** (UX), **Don** (creative), **Sal** (art) — tasks under those titles in the local team
- Crosswalk MCP was **not** available (needs Cursor desktop auth)

## Verdict on the current handoff

**Strong.** It already behaves like a European operator tool more than US AI-chat chrome: one composition (rail + sidebar + chat), unboxed bot turns, mono step ledger, status in two places only, skins that change colour/type not layout, local-edition empty CTAs.

**Main tensions**

1. **Mustard does too many jobs** — focus, caret, approval border, “Allow once.” Operators will pattern-match amber as ambient; high-stakes approval loses distinctiveness (Peggy). Don’s rule: mustard = the *one signal colour* (SBB red second hand), nowhere as wash/hover décor.
2. **Empty-state wordmark is oversized** vs the README’s own ~64px ceiling — reads closer to launch-page hero than workshop desk (Peggy + Sal).
3. **Narrower default chat column (46rem)** fights all-day density; keep 60rem default, expose 46rem as Comfortable (Peggy).
4. **Composer 16px** is still soft; Basel direction wants ~8–10px to finish the “tool not consumer pill” move (Sal, echoing the Forge thread in idle mock).

## Directions to choose among (not mash)

From research + team:

| ID | Name | Lineage | Fit |
| --- | --- | --- | --- |
| A | Ulm Operator Desk | HfG Ulm + Rams/Braun | Best chrome ethics |
| B | Basel Ledger Desk | Swiss Style + Weingart ledger craft | Best information/scanning fit |
| C | Nordic Everyday Desk | Svensk Form / Danish Modern | Warm mustard; lifestyle risk |
| D | Elemental Field Desk | Bauhaus / New Typography | Empty-state drama; all-day risk |
| E | Civic Utility Desk | Utility + GOV.UK | Honesty; weak brand |

**Anti-goal:** Memphis / laminate multi-accent fashion as Midnight/Daylight default.

## Recommendation (aligned team + research)

**Primary: Basel Ledger Desk (B)** for the desk’s real job — multi-bot index, streaming, tool steps, in-flow approvals.  
**Ethics layer: Ulm/Rams (A)** as the chrome constraint (“as little design as possible,” systems not widgets).  
Nordic (C) only as temperature for mustard warmth, not as the structure.

### Five execution moves

1. Cap empty wordmark ≤64px; left-align on the grid (not poster-center theatre).
2. Mustard only on: focus ring, streaming caret *or* approval CTA (pick one for caret — prefer approval keeps mustard; caret → ink), approval border. No hover tint / accent wash.
3. Shared row module for every status surface (sidebar bot, header, inbox, approval).
4. Composer radius 8–10px in Midnight/Daylight; keep token `--radius-composer`.
5. Keep default `--chat-column-max` at 60rem; Comfortable = 46rem.

### Stare-at references

- Müller-Brockmann SBB visual system (1978): https://peoplesgdarchive.org/item/17132/swiss-federal-railways-sbb-visual-information-system  
- Rams / Vitsœ ten principles: https://www.vitsoe.com/us/about/good-design  
- Swiss Style overview (Swiss National Library): https://www.nb.admin.ch/en/the-international-style-1950-1970  
- GOV.UK “do less” brake on brand theatre: https://www.gov.uk/guidance/government-design-principles  

Full citations and tradition tables: `docs/design/european-design-directions.md`.
