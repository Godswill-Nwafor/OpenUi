import { cn } from "@/lib/utils";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 32, className }: LogoMarkProps) {
  return (
    <div
      style={{ width: size, height: size, borderRadius: size * 0.28 }}
      className={cn(
        "relative flex items-center justify-center shrink-0",
        "bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600",
        "shadow-lg shadow-indigo-500/30",
        className
      )}
    >
      <svg
        width={size * 0.68}
        height={size * 0.68}
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        {/* Navbar bar */}
        <rect x="1" y="1" width="20" height="3.5" rx="1.75" fill="white" fillOpacity="0.95" />
        {/* Left card */}
        <rect x="1" y="7.5" width="9" height="7.5" rx="2" fill="white" fillOpacity="0.8" />
        {/* Right card */}
        <rect x="12" y="7.5" width="9" height="7.5" rx="2" fill="white" fillOpacity="0.5" />
        {/* Bottom text strip */}
        <rect x="1" y="17.5" width="13" height="2.5" rx="1.25" fill="white" fillOpacity="0.35" />
        {/* Bottom text strip short */}
        <rect x="15.5" y="17.5" width="5.5" height="2.5" rx="1.25" fill="white" fillOpacity="0.2" />
      </svg>
    </div>
  );
}

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function Logo({ size = 32, className, showText = true }: LogoProps) {
  const textSize = size <= 28 ? "text-[13px]" : size <= 36 ? "text-[15px]" : "text-[17px]";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark size={size} />
      {showText && (
        <span className={cn("font-bold tracking-tight leading-none", textSize)}>
          <span className="text-foreground">Open</span>
          <span className="text-brand">UI</span>
          <span className="text-muted-foreground font-medium"> Hub</span>
        </span>
      )}
    </div>
  );
}
