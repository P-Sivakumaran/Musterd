import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import type { Message } from "@/state/store";
import { describeRun } from "@/lib/activity-runs";
import { t } from "@/lib/i18n";
import { useAdvancedMode } from "@/lib/interface-mode";
import { toolStepLabel } from "@/lib/tool-step-label";
export function ActivityRun({
  messages,
  forceOpen = false,
  children,
}: {
  messages: Message[];
  forceOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(forceOpen);
  const advanced = useAdvancedMode();
  const summary = advanced ? describeRun(messages) : describeRun(messages, toolStepLabel);
  const collapsed = t("chat.run.collapsed", { count: messages.length });
  useEffect(() => {
    if (forceOpen) setOpen(true);
  }, [forceOpen]);
  if (open) {
    return (
      <div className="flex flex-col gap-1">
        <div className="flex min-w-0 justify-start">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-expanded
            className="ui-pill max-w-full gap-1.5"
          >
            <ChevronRight size={13} className="shrink-0 rotate-90" />
            <span className="min-w-0 truncate leading-5">{summary}</span>
          </button>
        </div>
        <div className="tool-step-ledger">{children}</div>
      </div>
    );
  }
  return (
    <div className="flex min-w-0 justify-start">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={false}
        title={t("chat.run.showSteps")}
        className="ui-pill max-w-full gap-1.5"
      >
        <span className="min-w-0 max-w-[480px] truncate leading-5">{collapsed}</span>
        <ChevronRight size={13} className="shrink-0" />
      </button>
    </div>
  );
}
