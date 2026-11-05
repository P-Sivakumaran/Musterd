import { cn } from "@/lib/cn";

/** Three ascending bars — ink only. Sizes from chrome (16) to empty-desk hero (40). */
export function MusterdMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={cn("shrink-0 text-ink", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="4.5" height="10" rx="1" fill="currentColor" />
      <rect x="9.75" y="7" width="4.5" height="14" rx="1" fill="currentColor" />
      <rect x="16.5" y="3" width="4.5" height="18" rx="1" fill="currentColor" />
    </svg>
  );
}
