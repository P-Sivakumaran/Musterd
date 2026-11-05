import type { ReactNode } from "react";
import { t } from "@/lib/i18n";

/** Appearance: where mustard (accent) appears, and where ink is used instead. */
export function SignalColourSpecimen() {
  return (
    <div className="grid grid-cols-1 gap-6 text-[12.5px] sm:grid-cols-2">
      <div>
        <h4 className="mb-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.04em] text-ink-tertiary">
          {t("settings.signal.appears")}
        </h4>
        <ul className="m-0 list-none p-0">
          <Specimen swatch={<span className="h-4 w-10 rounded shadow-[0_0_0_2px_var(--color-focus)]" />} label={t("settings.signal.focus")} />
          <Specimen swatch={<span className="size-2 rounded-full bg-accent" />} label={t("settings.signal.needsYou")} />
          <Specimen swatch={<span className="h-4 w-10 rounded-sm shadow-[inset_0_0_0_1px_var(--color-accent)]" />} label={t("settings.signal.approval")} />
          <Specimen swatch={<span className="h-4 w-10 rounded-full bg-accent" />} label={t("settings.signal.allowOnce")} />
        </ul>
      </div>
      <div>
        <h4 className="mb-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.04em] text-ink-tertiary">
          {t("settings.signal.never")}
        </h4>
        <ul className="m-0 list-none p-0 text-ink-secondary">
          <Specimen swatch={<span className="size-2 rounded-full bg-ink" />} label={t("settings.signal.working")} />
          <Specimen swatch={<span className="h-3.5 w-1.5 rounded-[1px] bg-ink" />} label={t("settings.signal.caret")} />
          <Specimen swatch={<span className="h-4 w-10 rounded-sm shadow-[0_0_0_1.5px_var(--color-ink)]" />} label={t("settings.signal.selection")} />
          <Specimen swatch={<span className="h-4 w-10 rounded-sm bg-ink/[0.07]" />} label={t("settings.signal.chrome")} />
        </ul>
      </div>
    </div>
  );
}

function Specimen({ swatch, label }: { swatch: ReactNode; label: string }) {
  return (
    <li className="grid min-h-[30px] grid-cols-[52px_1fr] items-center gap-2.5 border-b border-edge text-ink last:border-b-0">
      <span className="flex h-[18px] items-center">{swatch}</span>
      <span>{label}</span>
    </li>
  );
}
