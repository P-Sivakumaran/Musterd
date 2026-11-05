# Upstream sync (OpenMausBot → Musterd)

Musterd is a **soft fork** of [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot).

| Remote | URL |
|--------|-----|
| `origin` | `https://github.com/P-Sivakumaran/Musterd.git` (product) |
| `upstream` | `https://github.com/milind-soni/OpenMausBot.git` (harness) |

Product releases and the in-app update banner come **only** from `origin` (`P-Sivakumaran/Musterd/releases`). Never point `server/update-check.ts` or `src/lib/app-links.ts` back at upstream.

## Weekly sync checklist

1. `git fetch upstream`
2. Branch `sync/upstream-YYYYMMDD` from current `main`
3. Merge or cherry-pick harness fixes (drivers, MCP, Local VM, security). Prefer small PRs over a giant merge.
4. **Brand ratchet** (must pass before merge):
   - [ ] `PRODUCT_NAME` / `DEFAULT_BRAND` remain `Musterd`
   - [ ] `LATEST_RELEASE_URL` and `APP_REPOSITORY` still target `P-Sivakumaran/Musterd`
   - [ ] No new human-facing “MausBot” / “OpenMausBot” in `src/locales/en.json` product chrome (CLI aliases `omb` / `openmausbot` OK in code paths)
   - [ ] `pnpm check:contrast` green if skins/tokens touched
   - [ ] Empty desk / mark still ink-only three bars (`MusterdMark` / `public/app-icon.svg`)
5. `pnpm lint` · `pnpm typecheck` · `pnpm i18n:check` · focused tests for touched areas
6. Open PR → merge to `main` → cut a GitHub Release when the product tip should ship

## After a Musterd release

- Tag `vX.Y.Z` on `main` and publish a GitHub Release so `update-check` sees a real `latest`.
- Confirm the sidebar update banner links to `https://github.com/P-Sivakumaran/Musterd/releases`.

## Do not

- Auto-update from OpenMausBot releases in the UI
- Reintroduce OpenMausBot pricing, Discord, or store links as Musterd product surfaces
- Treat `~/.openmausbot` as the live data dir (migrate-only; product root is `~/.musterd`)
