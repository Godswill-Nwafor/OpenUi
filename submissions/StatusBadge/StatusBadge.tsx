import React from "react";

export type StatusBadgeStatus = "online" | "offline" | "away" | "busy";

export interface StatusBadgeProps {
  /** Current status to display. */
  status: StatusBadgeStatus;
  /** Optional label text. Defaults to a capitalized version of `status`. */
  label?: string;
  /** Adds a pulsing animation to the status dot. */
  pulse?: boolean;
  /** Additional class names to merge onto the root element. */
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

export function StatusBadge({
  status,
  label,
  pulse = false,
  className = "",
}: StatusBadgeProps) {
  const styles = STATUS_STYLES[status];
  const displayLabel = label ?? styles.defaultLabel;

  return (
    <span
      role="status"
      aria-label={displayLabel}
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium ${styles.bg} ${styles.text} ${className}`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        {pulse && (
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${styles.dot}`}
            aria-hidden="true"
          />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${styles.dot}`}
          aria-hidden="true"
        />
      </span>
      {displayLabel}
    </span>
  );
}
