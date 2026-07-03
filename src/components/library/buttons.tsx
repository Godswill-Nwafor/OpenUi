"use client";
import { useState, useRef, useEffect } from "react";
import { Github, ChevronDown, Settings, Bell, Search, Heart, Trash2, Sparkles } from "lucide-react";

// PrimaryButton
export function PrimaryButton({ className = "", loading, children, disabled, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }) {
  return (
    <button disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl
        bg-indigo-600 text-white font-medium text-sm
        hover:bg-indigo-700 active:scale-95 transition-all duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed shadow-sm shadow-indigo-500/25 ${className}`}
      {...props}>
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  );
}

// OutlineButton
export function OutlineButton({ className = "", children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl
      border border-indigo-500/50 text-indigo-500 font-medium text-sm
      hover:bg-indigo-500/10 active:scale-95 transition-all duration-150
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed ${className}`} {...props}>
      {children}
    </button>
  );
}

// GhostButton
export function GhostButton({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl
      text-sm font-medium text-slate-400 hover:text-white hover:bg-white/10
      active:scale-95 transition-all duration-150
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 ${className}`} {...props}>
      {children}
    </button>
  );
}

// GradientButton
export function GradientButton({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`relative inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl
      font-semibold text-sm text-white overflow-hidden
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600
      active:scale-95 transition-all duration-200
      shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}

// IconButton
export function IconButton({ children, tooltip, variant = "ghost", className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { tooltip?: string; variant?: "ghost" | "solid" | "outline" }) {
  const variantClasses = {
    ghost: "hover:bg-white/10 text-slate-400 hover:text-white",
    solid: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
    outline: "border border-white/20 text-slate-300 hover:bg-white/10",
  };
  return (
    <button title={tooltip} aria-label={tooltip}
      className={`w-9 h-9 flex items-center justify-center rounded-lg
        transition-all duration-150 active:scale-90
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
        ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

// DangerButton
export function DangerButton({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl
      bg-red-600 text-white font-medium text-sm
      hover:bg-red-700 active:scale-95 transition-all duration-150
      shadow-sm shadow-red-500/25 hover:shadow-red-500/40
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed ${className}`} {...props}>
      {children}
    </button>
  );
}

// LoadingButton
export function LoadingButton({ children, loadingText = "Loading...", onClickAsync, onClick, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { loadingText?: string; onClickAsync?: () => Promise<void> }) {
  const [loading, setLoading] = useState(false);
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClickAsync) {
      setLoading(true);
      try { await onClickAsync(); } finally { setLoading(false); }
    } else { onClick?.(e); }
  };
  return (
    <button disabled={loading} onClick={handleClick}
      className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl
        bg-indigo-600 text-white font-medium text-sm min-w-[120px]
        hover:bg-indigo-700 disabled:opacity-75 disabled:cursor-not-allowed
        active:scale-95 transition-all duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      {...props}>
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          {loadingText}
        </>
      ) : children}
    </button>
  );
}

// PillButton
export function PillButton({ children, active, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button className={`inline-flex items-center justify-center gap-1.5 h-8 px-4 rounded-full
      text-xs font-medium transition-all duration-150 active:scale-95
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1
      ${active
        ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/20"
        : "bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white border border-white/10"
      } ${className}`} {...props}>
      {children}
    </button>
  );
}

// SocialButton
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
type SocialProvider = "github" | "google" | "twitter";
const providerConfig = {
  github: { label: "Continue with GitHub", icon: <Github size={18} />, className: "bg-[#24292e] hover:bg-[#1a1f24] text-white" },
  google: { label: "Continue with Google", icon: <GoogleIcon />, className: "bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 shadow-sm" },
  twitter: { label: "Continue with X / Twitter", icon: <XIcon />, className: "bg-black hover:bg-gray-900 text-white" },
};
export function SocialButton({ provider, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { provider: SocialProvider }) {
  const config = providerConfig[provider];
  return (
    <button className={`inline-flex items-center justify-center gap-3 h-11 px-6 w-full rounded-xl
      font-medium text-sm transition-all duration-150 active:scale-[0.98]
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      ${config.className} ${className}`} {...props}>
      {config.icon}
      {config.label}
    </button>
  );
}

// SplitButton
export function SplitButton({ label, onMainClick, actions }: { label: string; onMainClick: () => void; actions: { label: string; onClick: () => void; disabled?: boolean }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <div ref={ref} className="relative inline-flex rounded-xl overflow-hidden">
      <button onClick={onMainClick}
        className="h-10 px-4 bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700
          transition-colors focus-visible:outline-none border-r border-indigo-500">
        {label}
      </button>
      <button onClick={() => setOpen(v => !v)}
        className="h-10 w-9 flex items-center justify-center bg-indigo-600 text-white
          hover:bg-indigo-700 transition-colors focus-visible:outline-none"
        aria-haspopup="true" aria-expanded={open}>
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-1.5 w-44 rounded-xl border border-white/10
          bg-gray-900 shadow-xl shadow-black/30 py-1 z-50">
          {actions.map(action => (
            <button key={action.label} disabled={action.disabled}
              onClick={() => { action.onClick(); setOpen(false); }}
              className="w-full text-left px-3.5 py-2.5 text-sm text-slate-300 hover:text-white
                hover:bg-white/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Previews ─────────────────────────────────────────────────────────────────

export function PrimaryButtonPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-gray-950">
      <PrimaryButton>Get Started</PrimaryButton>
      <PrimaryButton loading loadingText="Loading...">Loading</PrimaryButton>
      <PrimaryButton disabled>Disabled</PrimaryButton>
    </div>
  );
}

export function OutlineButtonPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-gray-950">
      <OutlineButton>Learn More</OutlineButton>
      <OutlineButton disabled>Disabled</OutlineButton>
    </div>
  );
}

export function GhostButtonPreview() {
  return (
    <div className="flex items-center justify-center gap-3 p-4 bg-gray-950">
      <GhostButton>Cancel</GhostButton>
      <GhostButton><Settings size={16} /> Settings</GhostButton>
    </div>
  );
}

export function GradientButtonPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-gray-950">
      <GradientButton><Sparkles size={16} /> Get Started Free</GradientButton>
      <GradientButton>Upgrade Now</GradientButton>
    </div>
  );
}

export function IconButtonPreview() {
  return (
    <div className="flex items-center justify-center gap-2 p-4 bg-gray-950">
      <IconButton tooltip="Search"><Search size={16} /></IconButton>
      <IconButton tooltip="Notifications" variant="outline"><Bell size={16} /></IconButton>
      <IconButton tooltip="Favourite" variant="solid"><Heart size={16} /></IconButton>
      <IconButton tooltip="Settings"><Settings size={16} /></IconButton>
    </div>
  );
}

export function DangerButtonPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-gray-950">
      <DangerButton><Trash2 size={16} /> Delete Account</DangerButton>
      <DangerButton disabled><Trash2 size={16} /> Disabled</DangerButton>
    </div>
  );
}

export function LoadingButtonPreview() {
  return (
    <div className="flex items-center justify-center p-4 bg-gray-950">
      <LoadingButton loadingText="Saving..." onClickAsync={() => new Promise(r => setTimeout(r, 2000))}>
        Save Changes
      </LoadingButton>
    </div>
  );
}

export function PillButtonPreview() {
  const [active, setActive] = useState("All");
  const filters = ["All", "React", "Popular", "New", "Trending"];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-4 bg-gray-950">
      {filters.map(f => (
        <PillButton key={f} active={active === f} onClick={() => setActive(f)}>{f}</PillButton>
      ))}
    </div>
  );
}

export function SocialButtonPreview() {
  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-950 max-w-xs mx-auto w-full">
      <SocialButton provider="github" />
      <SocialButton provider="google" />
      <SocialButton provider="twitter" />
    </div>
  );
}

export function SplitButtonPreview() {
  return (
    <div className="flex items-center justify-center p-4 bg-gray-950">
      <SplitButton
        label="Deploy"
        onMainClick={() => {}}
        actions={[
          { label: "Deploy to Staging", onClick: () => {} },
          { label: "Deploy Preview", onClick: () => {} },
          { label: "Schedule Deploy", onClick: () => {} },
        ]}
      />
    </div>
  );
}
