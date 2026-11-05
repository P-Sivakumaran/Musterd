export const APP_NAME = "Musterd";
/** Soft-fork product repo — never milind-soni/OpenMausBot for updates or About links. */
export const APP_REPOSITORY = "https://github.com/P-Sivakumaran/Musterd";
export const DOCS_URL = `${APP_REPOSITORY}/tree/main/docs`;
export const HELP_CENTER_URL = DOCS_URL;
export const APPROVAL_LEVELS_URL = `${APP_REPOSITORY}/blob/main/docs/approval-levels.md`;
/** Until Musterd has its own passkey troubleshooting page, use in-repo docs. */
export const PASSKEY_HELP_URL = `${APP_REPOSITORY}/tree/main/docs`;
/** Product feedback lands on Musterd issues — not the upstream Discord. */
export const FEEDBACK_URL = `${APP_REPOSITORY}/issues`;
export const RELEASES_URL = `${APP_REPOSITORY}/releases`;
/** No Musterd cloud pricing page yet; About/upsell should not send people to OpenMausBot.com. */
export const PRICING_URL = APP_REPOSITORY;
export function withSource(url: string, source: string): string {
  const target = new URL(url);
  target.searchParams.set("src", source);
  return target.href;
}
export const LICENSE_URL = `${APP_REPOSITORY}/blob/main/LICENSE`;
/** Phone companions still speak the omb:// protocol; install docs live in-repo until Musterd ships store builds. */
export const IOS_APP_STORE_URL = `${APP_REPOSITORY}/blob/main/docs/ios-companion.md`;
export const ANDROID_APK_URL = `${APP_REPOSITORY}/blob/main/docs/ios-companion.md`;

export function appVersion(): string {
  return typeof __APP_VERSION__ === "string" ? __APP_VERSION__ : "dev";
}

const PLATFORM_NAMES: Record<string, string> = {
  darwin: "macOS",
  win32: "Windows",
  linux: "Linux",
};

export function platformLabel(platform?: string): string | null {
  return (platform && PLATFORM_NAMES[platform]) ?? null;
}

export async function openExternalLink(url: string): Promise<void> {
  if (window.ogb?.openExternal) {
    await window.ogb.openExternal(url);
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}

/** A browser hands a mailto: link to its own mail app; the desktop app's window may not navigate to one, so main opens it. */
export async function openEmailDraft(url: string): Promise<void> {
  if (window.ogb) return openExternalLink(url);
  window.location.href = url;
}
