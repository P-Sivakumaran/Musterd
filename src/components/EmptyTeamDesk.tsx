import { FolderInput, Link2, Plus } from "lucide-react";
import { useStore } from "@/state/store";
import { t } from "@/lib/i18n";
import { PHONE_LAYOUT, useMediaQuery } from "@/lib/use-media-query";
import { WindowDragStrip } from "./DesktopCapabilities";
import { MusterdMark } from "./MusterdMark";

/** Basel empty team: left-aligned lockup on the chat column, CTAs + mono machine ledger. */
export function EmptyTeamDesk() {
  const { state, dispatch } = useStore();
  const phone = useMediaQuery(PHONE_LAYOUT);
  const engines = state.instances
    .map((instance) => instance.displayName || instance.instanceId)
    .filter(Boolean)
    .join(", ") || t("emptyTeam.ledger.none");
  const edition = state.config?.edition?.edition === "enterprise" ? "enterprise" : "local";

  return (
    <main className="relative flex h-full min-w-0 flex-1 flex-col overflow-auto bg-app text-ink">
      <WindowDragStrip />
      <div className={phone ? "px-5 pb-10 pt-8" : "chat-column animate-rise px-5 pb-12 pt-[12vh]"}>
        <div className="flex items-end gap-3 border-b-[1.5px] border-ink pb-4">
          <MusterdMark size={phone ? 32 : 40} />
          <span
            className="font-semibold tracking-[-0.035em] text-ink"
            style={{ fontSize: phone ? 44 : 56, lineHeight: 0.82, fontWeight: 640 }}
          >
            Musterd
          </span>
        </div>

        <div className={phone ? "mt-5 flex flex-col gap-5" : "mt-5 grid grid-cols-12 gap-x-6"}>
          <div className={phone ? "" : "col-span-7"}>
            <h1 className="text-[20px] font-semibold tracking-[-0.015em] text-ink">{t("emptyTeam.headline")}</h1>
            <p className="mt-1.5 max-w-xl text-[14.5px] leading-relaxed text-ink-secondary">{t("emptyTeam.body")}</p>
            <div className={phone ? "mt-5 flex flex-col gap-2" : "mt-5 flex flex-wrap items-center gap-2"}>
              <button
                type="button"
                className="ui-button ui-button-primary ui-button-lg gap-1.5"
                onClick={() => dispatch({ type: "newBot" })}
              >
                <Plus size={16} aria-hidden="true" />
                {t("emptyTeam.create")}
              </button>
              <button
                type="button"
                className="ui-button ui-button-lg gap-1.5"
                onClick={() => dispatch({ type: "toggleAppSettings", open: true, section: "import" })}
              >
                <FolderInput size={16} aria-hidden="true" />
                {t("emptyTeam.import")}
              </button>
              <button
                type="button"
                className={phone
                  ? "ui-button ui-button-lg gap-1.5 text-ink-secondary"
                  : "ml-2 inline-flex items-center gap-1.5 text-[13px] text-ink-secondary underline decoration-hairline underline-offset-4 hover:text-ink"}
                onClick={() => dispatch({ type: "toggleAppSettings", open: true, section: "connections" })}
              >
                <Link2 size={14} aria-hidden="true" />
                {t("emptyTeam.kepler")}
              </button>
            </div>
          </div>

          <dl
            aria-label={t("emptyTeam.ledger.aria")}
            className={phone ? "mt-2 font-mono text-[12px]" : "col-span-4 col-start-9 font-mono text-[12px]"}
          >
            {(
              [
                ["engines", engines],
                ["data", "~/.musterd"],
                ["mcp", t("emptyTeam.ledger.mcpValue")],
                ["kepler", t("emptyTeam.ledger.keplerValue")],
                ["edition", edition],
              ] as const
            ).map(([key, value]) => (
              <div
                key={key}
                className="grid grid-cols-[6.5rem_1fr] items-baseline gap-2 border-b border-edge py-1.5 first:pt-0"
              >
                <dt className="text-[11px] uppercase tracking-[0.04em] text-ink-tertiary">{t(`emptyTeam.ledger.${key}`)}</dt>
                <dd className="m-0 text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
