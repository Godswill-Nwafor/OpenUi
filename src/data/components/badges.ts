import type { ComponentDoc } from "@/types";

export const badgeComponents: ComponentDoc[] = [
  {
    metadata: {
      id: "status-badge",
      name: "Status Badge",
      description: "A small pill badge that shows a colored status dot (online, offline, away, busy) with an optional pulsing animation.",
      author: { name: "Godswill Nwafor", github: "Godswill-Nwafor" },
      framework: "react",
      version: "1.0.0",
      category: "badges",
      tags: ["badge", "status", "indicator", "pill", "avatar"],
      createdAt: "2026-07-09",
      updatedAt: "2026-07-09",
      status: "approved",
      downloads: 0,
      likes: 0,
    },
    code: `export type StatusBadgeStatus = "online" | "offline" | "away" | "busy";

export interface StatusBadgeProps {
  status: StatusBadgeStatus;
  label?: string;
  pulse?: boolean;
  className?: string;
}

const STATUS_STYLES: Record<
  StatusBadgeStatus,
  { dot: string; text: string; bg: string; defaultLabel: string }
> = {
  online: {
    dot: "bg-emerald-500",
    text: "text-emerald-700 dark:text-emerald-300",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    defaultLabel: "Online",
  },
  offline: {
    dot: "bg-gray-400",
    text: "text-gray-700 dark:text-gray-300",
    bg: "bg-gray-50 dark:bg-gray-500/10",
    defaultLabel: "Offline",
  },
  away: {
    dot: "bg-amber-500",
    text: "text-amber-700 dark:text-amber-300",
    bg: "bg-amber-50 dark:bg-amber-500/10",
    defaultLabel: "Away",
  },
  busy: {
    dot: "bg-red-500",
    text: "text-red-700 dark:text-red-300",
    bg: "bg-red-50 dark:bg-red-500/10",
    defaultLabel: "Busy",
  },
};

export function StatusBadge({ status, label, pulse = false, className = "" }: StatusBadgeProps) {
  const styles = STATUS_STYLES[status];
  const displayLabel = label ?? styles.defaultLabel;

  return (
    <span
      role="status"
      aria-label={displayLabel}
      className={\`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium \${styles.bg} \${styles.text} \${className}\`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        {pulse && (
          <span
            className={\`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 \${styles.dot}\`}
            aria-hidden="true"
          />
        )}
        <span className={\`relative inline-flex h-2 w-2 rounded-full \${styles.dot}\`} aria-hidden="true" />
      </span>
      {displayLabel}
    </span>
  );
}`,
    demoCode: `import { StatusBadge } from "./StatusBadge";

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <StatusBadge status="online" pulse />
      <StatusBadge status="away" />
      <StatusBadge status="busy" label="In a meeting" />
      <StatusBadge status="offline" />
    </div>
  );
}`,
    documentation: "A small pill-shaped badge that shows a colored status dot with a label — useful next to avatars, usernames, or list items to indicate presence. Supports an optional pulsing animation to draw attention to a live/active status.",
    props: [
      { name: "status", type: '"online" | "offline" | "away" | "busy"', required: true, description: "Current status to display." },
      { name: "label", type: "string", default: "Capitalized status", required: false, description: "Custom label text." },
      { name: "pulse", type: "boolean", default: "false", required: false, description: "Adds a pulsing animation to the status dot." },
      { name: "className", type: "string", default: '""', required: false, description: "Additional CSS classes." },
    ],
    installation: `# No installation needed — copy StatusBadge.tsx into your project`,
    usage: `import { StatusBadge } from "@/components/StatusBadge";

<StatusBadge status="online" pulse />`,
  },
];
