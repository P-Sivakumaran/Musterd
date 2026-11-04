// Works because styles.css keys skins on [data-skin], not :root[data-skin], so any element opens a skin context for its
// subtree.
import { Check } from "lucide-react";
import { SKINS, applySkin, resolveSkin, type SkinId } from "@/lib/skins";
import { cn } from "@/lib/cn";
import { t } from "@/lib/i18n";
import { setDressUp, useDressUp } from "@/lib/halloween-dress";
import type { HalloweenBodyId } from "../../shared/halloween-bodies";
import { MausAvatar } from "./Avatar";
import { Switch } from "./SettingsPrimitives";
import { useSkinChoice } from "./ThemeRow";

/** Basel mini: identical layout per skin; accent only on one needs-you dot and one approval border. */
function Miniature({ skin }: { skin: SkinId }) {
  return (
    <div
      data-skin={skin}
      data-skin-preview=""
      aria-hidden="true"
      className="flex h-[58px] w-full overflow-hidden rounded-md bg-app shadow-[0_0_0_1px_var(--color-edge)]"
    >
      <div className="flex w-[30%] flex-col gap-[3px] border-r border-hairline/50 bg-panel p-1.5">
        <span className="relative block h-2 w-full rounded-sm bg-raised">
          <span className="absolute -right-0.5 -top-[1.5px] size-[5px] rounded-full bg-accent" />
        </span>
        <span className="block h-[3px] w-full rounded-sm bg-ink-secondary/45" />
        <span className="block h-[3px] w-[80%] rounded-sm bg-ink-secondary/45" />
        <span className="mt-auto h-3 w-full rounded-sm shadow-[inset_0_0_0_1px_var(--color-accent)]" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1 p-1.5">
        <span className="h-2.5 w-[56%] self-end rounded-[5px] bg-bubble-user" />
        <span className="mt-0.5 block h-[2.5px] w-full rounded-sm bg-ink/50" />
        <span className="block h-[2.5px] w-[85%] rounded-sm bg-ink/50" />
        <span className="block h-[2.5px] w-[60%] rounded-sm bg-ink-secondary/40" />
        <div className="mt-auto flex items-center gap-[3px]">
          <span className="h-2.5 flex-1 rounded-sm bg-inset shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-hairline)_60%,transparent)]" />
          <span className="size-2.5 rounded-sm bg-ink" />
        </div>
      </div>
    </div>
  );
}

const DRESS_UP_PREVIEW: ReadonlyArray<[HalloweenBodyId, "orange" | "purple" | "teal" | "red"]> = [
  ["pumpkin", "orange"],
  ["ghost", "purple"],
  ["witch", "teal"],
  ["bat", "red"],
];

export function DressUpRow() {
  const dressed = useDressUp();
  const title = t("settings.skin.dressUp.title");
  return (
    <div data-dress-up className="mt-4 flex items-center gap-4 rounded-xl border border-edge p-3">
      <div className="flex shrink-0 -space-x-1.5" aria-hidden="true">
        {DRESS_UP_PREVIEW.map(([body, color]) => (
          <MausAvatar key={body} color={color} bodyId={body} size={30} animated={false} trackPointer={false} />
        ))}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[14px] font-medium text-ink">{title}</div>
        <div className="mt-1 text-[12px] leading-relaxed text-ink-secondary">{t("settings.skin.dressUp.subtitle")}</div>
      </div>
      <Switch checked={dressed} aria-label={title} onClick={() => setDressUp(!dressed)} />
    </div>
  );
}

export function SkinPicker() {
  const active = resolveSkin(useSkinChoice());

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {SKINS.map((skin) => {
          const selected = skin.id === active;
          return (
            <button
              key={skin.id}
              type="button"
              onClick={() => {
                applySkin(skin.id);
              }}
              aria-pressed={selected}
              className={cn(
                "cursor-pointer flex flex-col gap-1.5 rounded-md p-0 text-left transition-shadow",
                selected
                  ? "shadow-[0_0_0_2px_var(--color-app),0_0_0_3.5px_var(--color-ink)]"
                  : "hover:shadow-[0_0_0_1px_var(--color-edge)]",
              )}
            >
              <Miniature skin={skin.id} />
              <div className="flex items-center gap-1.5 px-0.5 pb-0.5">
                <div className="min-w-0 flex-1 text-[12.5px] font-medium text-ink">{skin.name}</div>
                {selected && <Check size={13} className="shrink-0 text-ink" />}
              </div>
            </button>
          );
        })}
      </div>
      {active === "halloween" && <DressUpRow />}
    </>
  );
}
