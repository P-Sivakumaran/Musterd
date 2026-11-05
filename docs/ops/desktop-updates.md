# Desktop updates (Path A)

Musterd ships as a **packaged Windows desktop app** with GitHub Releases as the update channel. Installed builds use `electron-updater` (baked `app-update.yml` → `P-Sivakumaran/Musterd`); the sidebar banner uses the same repo via [`server/update-check.ts`](../../server/update-check.ts).

## Ship loop

1. Bump `package.json` `version` on `main` (clean `X.Y.Z` — no `-musterd` suffix).
2. Merge to `main`. A version bump also starts **Release Windows** automatically; otherwise run **Actions → Release Windows → Run workflow**.
3. Review the draft release `vX.Y.Z`, or re-run with **publish** checked to publish immediately.
4. Confirm the release assets below exist. Without `latest.yml`, every Windows install stays stuck on its installed version.

### Required release assets

| Asset | Role |
|-------|------|
| `Musterd-X.Y.Z-setup.exe` | Versioned NSIS installer (updater download) |
| `Musterd-X.Y.Z-setup.exe.blockmap` | Differential update map |
| `Musterd-setup.exe` | Stable `/latest/download/` name |
| `latest.yml` | electron-updater feed (paths + sha512 + size) |

## Workflows

| Workflow | Purpose |
|----------|---------|
| [`release-windows.yml`](../../.github/workflows/release-windows.yml) | **Product ship path** — build, verify, draft/publish |
| [`package-win.yml`](../../.github/workflows/package-win.yml) | Artifact-only Windows build (no GitHub Release) |
| [`release.yml`](../../.github/workflows/release.yml) | Upstream-shaped multi-platform Release — **no-op on this fork** |

## Notes

- Builds are **unsigned**. Windows SmartScreen may warn on first run. Do not set `publisherName` in `app-update.yml` until you actually code-sign, or updates are rejected as untrusted.
- Tags must be `vX.Y.Z` matching `package.json`. Prefer that over tags like `v0.1.139-musterd`.
- Mac/Linux soft-fork releases are out of scope until Apple signing (and a Linux job) are retargeted; Windows is the solo Path A desk.
