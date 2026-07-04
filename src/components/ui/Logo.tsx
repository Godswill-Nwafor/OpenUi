"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `logo-o-${uid}`;

  const cfg = {
    sm: { ring: 20, stroke: 3,   text: "text-[13px]" },
    md: { ring: 26, stroke: 3.5, text: "text-[16px]" },
    lg: { ring: 32, stroke: 4,   text: "text-[20px]" },
  }[size];

  const half = cfg.ring / 2;
  const r = half - cfg.stroke / 2 - 0.5;

  return (
    <div className={cn("flex items-center gap-1 leading-none select-none", className)}>
      {/* Gradient "O" ring */}
      <svg
        width={cfg.ring}
        height={cfg.ring}
        viewBox={`0 0 ${cfg.ring} ${cfg.ring}`}
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient
            id={gradId}
            x1="0" y1="0"
            x2={cfg.ring} y2={cfg.ring}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <circle
          cx={half}
          cy={half}
          r={r}
          stroke={`url(#${gradId})`}
          strokeWidth={cfg.stroke}
        />
      </svg>

      {/* Wordmark: "penUI Hub" — the O is the SVG above */}
      <span className={cn("font-bold tracking-tight", cfg.text)}>
        <span className="text-foreground">pen</span>
        <span className="bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
          UI
        </span>
        <span className="text-muted-foreground font-medium"> Hub</span>
      </span>
    </div>
  );
}
