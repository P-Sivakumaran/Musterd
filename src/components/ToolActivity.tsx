import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "@/state/api";
import type { Message } from "@/state/store";
import { cn } from "@/lib/cn";
import { t } from "@/lib/i18n";
import { placeLabelKey, type Place } from "@/lib/place";
import { nameIsCommand } from "@/lib/verify-steps";
import { useAdvancedMode } from "@/lib/interface-mode";
import { toolStepLabel } from "@/lib/tool-step-label";
import type { MessageAttachmentContext } from "./AttachmentPreview";
import { PlaceIcon } from "./PlaceIcon";
import { WorkingDots } from "./WorkingIndicator";

/** Which stored message a step is: a clipped step (its output cut short in conversation pages) loads the rest from it. */
export function ToolActivity({ tool, place = null, live = false, source }: { tool: NonNullable<Message["tool"]>; place?: Place | null; live?: boolean; source?: MessageAttachmentContext }) {
  const [expanded, setExpanded] = useState(false);
  const full = useFullOutput(expanded && tool.clipped ? source : undefined, tool.output);
  const output = full.output ?? tool.output;
  const failed = tool.ok === false;
  const advanced = useAdvancedMode();
  const label = advanced ? tool.label ?? tool.name : toolStepLabel(tool);
  const status = tool.ok === undefined ? (live ? t("toolDetail.running") : t("toolDetail.unverified")) : failed ? t("toolDetail.failed") : t("toolDetail.completed");
  const mark = tool.ok === undefined
    ? (live ? "●" : "○")
    : failed ? "✕" : "✓";
  return (
    <details onToggle={(event) => setExpanded(event.currentTarget.open)} className="group/tool w-full max-w-full text-[12px] open:w-[min(38rem,100%)]" data-testid="tool-activity">
      <summary
        role="button"
        aria-expanded={expanded}
        aria-label={t("toolDetail.label", { name: label, status })}
        className={cn(
          "flex min-h-0 cursor-pointer list-none items-center gap-2 py-0 font-mono leading-[1.75] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus [&::-webkit-details-marker]:hidden",
          failed ? "text-danger" : live && tool.ok === undefined ? "text-ink" : "text-ink-secondary",
        )}
      >
        <span className={cn("shrink-0 w-3 text-center", failed ? "text-danger" : tool.ok ? "text-success" : live ? "text-ink" : "text-ink-tertiary")} aria-hidden="true">
          {live && tool.ok === undefined ? <WorkingDots size={3.5} /> : mark}
        </span>
        {place && <PlaceIcon place={place} size={12} className="shrink-0 opacity-70" role="img" aria-label={t(placeLabelKey(place))} data-testid="tool-place" />}
        <span className="min-w-0 max-w-[30rem] truncate">{label}</span>
        {advanced && tool.summary && tool.summary !== tool.name && !nameIsCommand(tool.name) && <span className="min-w-0 flex-1 truncate" title={tool.summary}>{tool.summary}</span>}
        <ChevronRight size={12} className="ml-auto shrink-0 text-ink-tertiary group-open/tool:rotate-90" aria-hidden="true" />
      </summary>
      <div className="mt-1 space-y-3 border-l border-edge py-2 pl-3 text-ink-secondary">
        <div className={cn("text-[11px] font-medium", failed && "text-danger")}>{status}</div>
        {label !== tool.name && <div>
          <div className="mb-1 text-[11px] font-medium">{t("toolDetail.tool")}</div>
          <p dir="ltr" className="break-words font-mono text-xs text-ink" data-testid="tool-name">{tool.name}</p>
        </div>}
        <div>
          <div className="mb-1 text-[11px] font-medium">{t("toolDetail.input")}</div>
          <pre dir="ltr" className="max-h-52 overflow-auto rounded-lg bg-inset p-2.5 font-mono text-xs whitespace-pre-wrap break-words text-ink">{tool.input ?? tool.summary ?? tool.name}</pre>
        </div>
        <div>
          <div className="mb-1 text-[11px] font-medium">{t("toolDetail.output")}</div>
          {output ? <pre dir="ltr" className="max-h-64 overflow-auto rounded-lg bg-inset p-2.5 font-mono text-xs whitespace-pre-wrap break-words text-ink">{output}</pre> : <p className="text-xs">{tool.ok === undefined ? (live ? t("toolDetail.waiting") : t("toolDetail.unverified")) : t("toolDetail.noOutput")}</p>}
        </div>
        {(full.state === "loading" || full.state === "failed") && <p className="text-[11px] text-ink-secondary" role="status">{t(full.state === "loading" ? "toolDetail.loadingFull" : "toolDetail.partial")}</p>}
        <p className="text-[11px] text-ink-secondary">{t("toolDetail.previewHint")}</p>
      </div>
    </details>
  );
}

type FullOutput = { state: "idle" | "loading" | "done" | "failed"; output?: string };

/** The whole output of a clipped step, fetched when it is opened: kept once it arrives, asked again after a failure. */
function useFullOutput(source: MessageAttachmentContext | undefined, preview: string | undefined): FullOutput {
  const url = source && `/api/threads/${encodeURIComponent(source.threadId)}/messages/${encodeURIComponent(source.messageId)}/tool`;
  const key = url && `${url}#${preview?.length ?? 0}`;
  const [full, setFull] = useState<FullOutput & { key?: string }>({ state: "idle" });
  const have = full.key === key && full.state === "done";
  useEffect(() => {
    if (!url || have) return;
    let current = true;
    const abort = new AbortController();
    setFull({ state: "loading", key });
    api<{ output: string }>(url, { signal: abort.signal })
      .then((body) => { if (current) setFull({ state: "done", key, output: body.output }); })
      .catch(() => { if (current) setFull({ state: "failed", key }); });
    return () => { current = false; abort.abort(); };
  }, [url, key, have]);
  return full.key === key ? full : { state: "idle" };
}
