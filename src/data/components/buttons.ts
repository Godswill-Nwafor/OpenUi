import type { ComponentDoc } from "@/types";

export const buttonComponents: ComponentDoc[] = [
  {
    metadata: {
      id: "primary-button",
      name: "Primary Button",
      description: "A solid primary call-to-action button with hover and focus states.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "buttons",
      tags: ["button", "cta", "primary", "solid"],
      createdAt: "2026-06-25",
      updatedAt: "2026-07-03",
      status: "approved",
      downloads: 1204,
      likes: 87,
    },
    code: `import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function PrimaryButton({ className, loading, children, disabled, ...props }: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl",
        "bg-indigo-600 text-white font-medium text-sm",
        "hover:bg-indigo-700 active:scale-95 transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "shadow-sm shadow-indigo-500/25",
        className
      )}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  );
}`,
    demoCode: `import { PrimaryButton } from "./PrimaryButton";

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <PrimaryButton>Get Started</PrimaryButton>
      <PrimaryButton loading>Loading...</PrimaryButton>
      <PrimaryButton disabled>Disabled</PrimaryButton>
    </div>
  );
}`,
    documentation: "A solid primary button for main call-to-action interactions. Supports loading and disabled states.",
    props: [
      { name: "loading", type: "boolean", default: "false", required: false, description: "Shows a spinner and disables the button." },
      { name: "disabled", type: "boolean", default: "false", required: false, description: "Disables the button interaction." },
      { name: "className", type: "string", default: '""', required: false, description: "Additional CSS classes." },
      { name: "children", type: "ReactNode", required: true, description: "Button label content." },
    ],
    installation: `npm install clsx tailwind-merge`,
    usage: `import { PrimaryButton } from "@/components/PrimaryButton";

<PrimaryButton onClick={() => console.log("clicked")}>
  Get Started
</PrimaryButton>`,
  },
  {
    metadata: {
      id: "outline-button",
      name: "Outline Button",
      description: "A bordered outline button with transparent background.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "buttons",
      tags: ["button", "outline", "border", "ghost"],
      createdAt: "2026-06-25",
      updatedAt: "2026-07-03",
      status: "approved",
      downloads: 934,
      likes: 62,
    },
    code: `interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function OutlineButton({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={\`inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl
        border border-indigo-500/50 text-indigo-500 font-medium text-sm
        hover:bg-indigo-500/10 active:scale-95 transition-all duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed \${className ?? ""}\`}
      {...props}
    >
      {children}
    </button>
  );
}`,
    demoCode: `import { OutlineButton } from "./OutlineButton";

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <OutlineButton>Learn More</OutlineButton>
      <OutlineButton disabled>Disabled</OutlineButton>
    </div>
  );
}`,
    documentation: "An outline button variant using a transparent background with a colored border. Ideal for secondary actions.",
    props: [
      { name: "children", type: "ReactNode", required: true, description: "Button label." },
      { name: "className", type: "string", required: false, description: "Extra CSS classes.", default: '""' },
    ],
  },
  {
    metadata: {
      id: "ghost-button",
      name: "Ghost Button",
      description: "A minimal ghost button that appears on hover.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "buttons",
      tags: ["button", "ghost", "minimal", "subtle"],
      createdAt: "2026-06-25",
      updatedAt: "2026-07-03",
      status: "approved",
      downloads: 720,
      likes: 48,
    },
    code: `export function GhostButton({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={\`inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl
        text-sm font-medium text-slate-400 hover:text-white hover:bg-white/10
        active:scale-95 transition-all duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20
        \${className ?? ""}\`}
      {...props}
    >
      {children}
    </button>
  );
}`,
    demoCode: `import { GhostButton } from "./GhostButton";
import { Settings } from "lucide-react";

export default function Demo() {
  return (
    <div className="flex gap-3">
      <GhostButton>Cancel</GhostButton>
      <GhostButton><Settings size={16} /> Settings</GhostButton>
    </div>
  );
}`,
    documentation: "A ghost button with no background. Background appears only on hover. Ideal for tertiary actions.",
    props: [
      { name: "children", type: "ReactNode", required: true, description: "Button content." },
    ],
  },
  {
    metadata: {
      id: "gradient-button",
      name: "Gradient Button",
      description: "A stunning gradient button with animated hover glow effect.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "buttons",
      tags: ["button", "gradient", "glow", "animated"],
      createdAt: "2026-06-25",
      updatedAt: "2026-07-03",
      status: "approved",
      downloads: 2100,
      likes: 198,
    },
    code: `export function GradientButton({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={\`relative inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl
        font-semibold text-sm text-white overflow-hidden
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600
        active:scale-95 transition-all duration-200
        shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2
        \${className ?? ""}\`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}`,
    demoCode: `import { GradientButton } from "./GradientButton";
import { Sparkles } from "lucide-react";

export default function Demo() {
  return (
    <div className="flex gap-3">
      <GradientButton><Sparkles size={16} /> Get Started Free</GradientButton>
      <GradientButton>Upgrade Now</GradientButton>
    </div>
  );
}`,
    documentation: "A visually striking gradient button with glow effects. Perfect for hero CTAs and upgrade actions.",
    props: [
      { name: "children", type: "ReactNode", required: true, description: "Button content." },
    ],
  },
  {
    metadata: {
      id: "icon-button",
      name: "Icon Button",
      description: "A square icon-only button for toolbar and action bar usage.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "buttons",
      tags: ["button", "icon", "toolbar", "action"],
      createdAt: "2026-06-25",
      updatedAt: "2026-07-03",
      status: "approved",
      downloads: 856,
      likes: 71,
    },
    code: `interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tooltip?: string;
  variant?: "ghost" | "solid" | "outline";
}

export function IconButton({ children, tooltip, variant = "ghost", className, ...props }: IconButtonProps) {
  const variantClasses = {
    ghost: "hover:bg-white/10 text-slate-400 hover:text-white",
    solid: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
    outline: "border border-white/20 text-slate-300 hover:bg-white/10",
  };

  return (
    <button
      title={tooltip}
      aria-label={tooltip}
      className={\`w-9 h-9 flex items-center justify-center rounded-lg
        transition-all duration-150 active:scale-90
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
        \${variantClasses[variant]} \${className ?? ""}\`}
      {...props}
    >
      {children}
    </button>
  );
}`,
    demoCode: `import { IconButton } from "./IconButton";
import { Settings, Bell, Search, Heart } from "lucide-react";

export default function Demo() {
  return (
    <div className="flex items-center gap-2">
      <IconButton tooltip="Search"><Search size={16} /></IconButton>
      <IconButton tooltip="Notifications" variant="outline"><Bell size={16} /></IconButton>
      <IconButton tooltip="Favourite" variant="solid"><Heart size={16} /></IconButton>
      <IconButton tooltip="Settings"><Settings size={16} /></IconButton>
    </div>
  );
}`,
    documentation: "An icon-only button with three variants. Always include a `tooltip` for accessibility.",
    props: [
      { name: "tooltip", type: "string", required: false, description: "Accessible label for screen readers and hover tooltip." },
      { name: "variant", type: '"ghost" | "solid" | "outline"', default: '"ghost"', required: false, description: "Visual variant." },
    ],
  },
  {
    metadata: {
      id: "danger-button",
      name: "Danger Button",
      description: "A destructive action button in red with confirmation intent.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "buttons",
      tags: ["button", "danger", "destructive", "delete"],
      createdAt: "2026-06-25",
      updatedAt: "2026-07-03",
      status: "approved",
      downloads: 643,
      likes: 39,
    },
    code: `import { Trash2 } from "lucide-react";

export function DangerButton({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={\`inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl
        bg-red-600 text-white font-medium text-sm
        hover:bg-red-700 active:scale-95 transition-all duration-150
        shadow-sm shadow-red-500/25 hover:shadow-red-500/40
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed \${className ?? ""}\`}
      {...props}
    >
      {children}
    </button>
  );
}`,
    demoCode: `import { DangerButton } from "./DangerButton";
import { Trash2 } from "lucide-react";

export default function Demo() {
  return (
    <div className="flex gap-3">
      <DangerButton><Trash2 size={16} /> Delete Account</DangerButton>
      <DangerButton disabled><Trash2 size={16} /> Disabled</DangerButton>
    </div>
  );
}`,
    documentation: "Use for destructive actions like deleting records or accounts. The red color signals danger.",
    props: [{ name: "children", type: "ReactNode", required: true, description: "Button content." }],
  },
  {
    metadata: {
      id: "loading-button",
      name: "Loading Button",
      description: "Button that transitions to a loading spinner state during async operations.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "buttons",
      tags: ["button", "loading", "async", "spinner"],
      createdAt: "2026-06-25",
      updatedAt: "2026-07-03",
      status: "approved",
      downloads: 1542,
      likes: 124,
    },
    code: `"use client";
import { useState } from "react";

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loadingText?: string;
  onClickAsync?: () => Promise<void>;
}

export function LoadingButton({ children, loadingText = "Loading...", onClickAsync, onClick, ...props }: LoadingButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClickAsync) {
      setLoading(true);
      try { await onClickAsync(); } finally { setLoading(false); }
    } else {
      onClick?.(e);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={handleClick}
      className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl
        bg-indigo-600 text-white font-medium text-sm min-w-[120px]
        hover:bg-indigo-700 disabled:opacity-75 disabled:cursor-not-allowed
        active:scale-95 transition-all duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
      {...props}
    >
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
}`,
    demoCode: `import { LoadingButton } from "./LoadingButton";

const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

export default function Demo() {
  return (
    <LoadingButton
      loadingText="Saving..."
      onClickAsync={() => delay(2000)}
    >
      Save Changes
    </LoadingButton>
  );
}`,
    documentation: "Manages its own loading state. Pass `onClickAsync` for a Promise-based handler, or control manually via `loading` prop.",
    props: [
      { name: "loadingText", type: "string", default: '"Loading..."', required: false, description: "Text shown during loading." },
      { name: "onClickAsync", type: "() => Promise<void>", required: false, description: "Async click handler — automatically toggles loading state." },
    ],
  },
  {
    metadata: {
      id: "pill-button",
      name: "Pill Button",
      description: "A fully rounded pill-shaped button for tags and filter actions.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "buttons",
      tags: ["button", "pill", "rounded", "chip", "filter"],
      createdAt: "2026-06-25",
      updatedAt: "2026-07-03",
      status: "approved",
      downloads: 987,
      likes: 76,
    },
    code: `interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function PillButton({ children, active, className, ...props }: PillButtonProps) {
  return (
    <button
      className={\`inline-flex items-center justify-center gap-1.5 h-8 px-4 rounded-full
        text-xs font-medium transition-all duration-150 active:scale-95
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1
        \${active
          ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/20"
          : "bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white border border-white/10"
        } \${className ?? ""}\`}
      {...props}
    >
      {children}
    </button>
  );
}`,
    demoCode: `import { useState } from "react";
import { PillButton } from "./PillButton";

const filters = ["All", "React", "Popular", "New", "Trending"];

export default function Demo() {
  const [active, setActive] = useState("All");
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(f => (
        <PillButton key={f} active={active === f} onClick={() => setActive(f)}>{f}</PillButton>
      ))}
    </div>
  );
}`,
    documentation: "Pill-shaped button used for filters, tags, or chip selections. `active` prop highlights the selected state.",
    props: [
      { name: "active", type: "boolean", default: "false", required: false, description: "Highlights button as the active/selected option." },
    ],
  },
  {
    metadata: {
      id: "social-button",
      name: "Social Login Button",
      description: "OAuth social login buttons for GitHub, Google, and Twitter.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "buttons",
      tags: ["button", "social", "oauth", "login", "github", "google"],
      createdAt: "2026-06-25",
      updatedAt: "2026-07-03",
      status: "approved",
      downloads: 2341,
      likes: 201,
    },
    code: `import { Github } from "lucide-react";

type Provider = "github" | "google" | "twitter";

interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  provider: Provider;
}

const providerConfig = {
  github: {
    label: "Continue with GitHub",
    icon: <Github size={18} />,
    className: "bg-[#24292e] hover:bg-[#1a1f24] text-white",
  },
  google: {
    label: "Continue with Google",
    icon: <GoogleIcon />,
    className: "bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 shadow-sm",
  },
  twitter: {
    label: "Continue with X / Twitter",
    icon: <XIcon />,
    className: "bg-black hover:bg-gray-900 text-white",
  },
};

export function SocialButton({ provider, className, ...props }: SocialButtonProps) {
  const config = providerConfig[provider];
  return (
    <button
      className={\`inline-flex items-center justify-center gap-3 h-11 px-6 w-full rounded-xl
        font-medium text-sm transition-all duration-150 active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        \${config.className} \${className ?? ""}\`}
      {...props}
    >
      {config.icon}
      {config.label}
    </button>
  );
}

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
}`,
    demoCode: `import { SocialButton } from "./SocialButton";

export default function Demo() {
  return (
    <div className="flex flex-col gap-3 max-w-sm">
      <SocialButton provider="github" onClick={() => alert("GitHub OAuth")} />
      <SocialButton provider="google" onClick={() => alert("Google OAuth")} />
      <SocialButton provider="twitter" onClick={() => alert("X OAuth")} />
    </div>
  );
}`,
    documentation: "Pre-styled OAuth provider buttons with official brand colors and icons.",
    props: [
      { name: "provider", type: '"github" | "google" | "twitter"', required: true, description: "The OAuth provider." },
    ],
  },
  {
    metadata: {
      id: "split-button",
      name: "Split Button",
      description: "A button with a main action and a dropdown for additional actions.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "buttons",
      tags: ["button", "split", "dropdown", "actions", "group"],
      createdAt: "2026-06-25",
      updatedAt: "2026-07-03",
      status: "approved",
      downloads: 543,
      likes: 41,
    },
    code: `"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Action {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

interface SplitButtonProps {
  label: string;
  onMainClick: () => void;
  actions: Action[];
}

export function SplitButton({ label, onMainClick, actions }: SplitButtonProps) {
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
      <button
        onClick={onMainClick}
        className="h-10 px-4 bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700
          transition-colors focus-visible:outline-none border-r border-indigo-500"
      >
        {label}
      </button>
      <button
        onClick={() => setOpen(v => !v)}
        className="h-10 w-9 flex items-center justify-center bg-indigo-600 text-white
          hover:bg-indigo-700 transition-colors focus-visible:outline-none"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <ChevronDown size={14} className={\`transition-transform \${open ? "rotate-180" : ""}\`} />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-1.5 w-44 rounded-xl border border-white/10
          bg-gray-900 shadow-xl shadow-black/30 py-1 z-50">
          {actions.map(action => (
            <button
              key={action.label}
              disabled={action.disabled}
              onClick={() => { action.onClick(); setOpen(false); }}
              className="w-full text-left px-3.5 py-2.5 text-sm text-slate-300 hover:text-white
                hover:bg-white/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}`,
    demoCode: `import { SplitButton } from "./SplitButton";

export default function Demo() {
  return (
    <SplitButton
      label="Deploy"
      onMainClick={() => alert("Deploying to production...")}
      actions={[
        { label: "Deploy to Staging", onClick: () => alert("Staging") },
        { label: "Deploy Preview", onClick: () => alert("Preview") },
        { label: "Schedule Deploy", onClick: () => alert("Schedule") },
        { label: "Rollback", onClick: () => alert("Rollback"), disabled: true },
      ]}
    />
  );
}`,
    documentation: "A compound button combining a primary action with a dropdown for secondary actions. Closes when clicking outside.",
    props: [
      { name: "label", type: "string", required: true, description: "Primary button label." },
      { name: "onMainClick", type: "() => void", required: true, description: "Primary action handler." },
      { name: "actions", type: "Action[]", required: true, description: "Array of dropdown action items." },
    ],
  },
  {
    metadata: {
      id: "like-button",
      name: "Like Button",
      description: "An animated heart toggle button with a like count, built in Svelte.",
      author: { name: "Godswill Nwafor", github: "Godswill-Nwafor" },
      framework: "Svelte",
      version: "1.0.0",
      category: "buttons",
      tags: ["button","like","heart","toggle","svelte","animated"],
      createdAt: "2026-07-09",
      updatedAt: "2026-07-09",
      status: "approved",
      downloads: 0,
      likes: 0,
    },
    code: "<script>\n  let { initialCount = 128, initiallyLiked = false } = $props();\n\n  let liked = $state(initiallyLiked);\n  let count = $state(initialCount);\n\n  function toggle() {\n    liked = !liked;\n    count += liked ? 1 : -1;\n  }\n</script>\n\n<button\n  type=\"button\"\n  onclick={toggle}\n  aria-pressed={liked}\n  aria-label={liked ? \"Unlike\" : \"Like\"}\n  class=\"like-button\"\n  class:liked\n>\n  <svg\n    class=\"heart\"\n    viewBox=\"0 0 24 24\"\n    width=\"18\"\n    height=\"18\"\n    fill={liked ? \"currentColor\" : \"none\"}\n    stroke=\"currentColor\"\n    stroke-width=\"2\"\n    aria-hidden=\"true\"\n  >\n    <path\n      d=\"M12 21s-6.7-4.35-9.33-8.24C1.02 10.6 1.4 7.55 3.6 5.9c1.94-1.46 4.6-1.1 6.02.62L12 9l2.38-2.48c1.42-1.72 4.08-2.08 6.02-.62 2.2 1.65 2.58 4.7.93 6.86C18.7 16.65 12 21 12 21z\"\n    />\n  </svg>\n  <span class=\"count\">{count.toLocaleString()}</span>\n</button>\n\n<style>\n  .like-button {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.5rem;\n    height: 2.5rem;\n    padding: 0 1rem;\n    border-radius: 0.75rem;\n    border: 1px solid rgba(148, 163, 184, 0.3);\n    background: transparent;\n    color: #94a3b8;\n    font: inherit;\n    font-size: 0.875rem;\n    font-weight: 500;\n    cursor: pointer;\n    transition: all 150ms ease;\n  }\n\n  .like-button:hover {\n    background: rgba(239, 68, 68, 0.08);\n    border-color: rgba(239, 68, 68, 0.3);\n    color: #ef4444;\n  }\n\n  .like-button.liked {\n    background: rgba(239, 68, 68, 0.1);\n    border-color: rgba(239, 68, 68, 0.4);\n    color: #ef4444;\n  }\n\n  .heart {\n    transition: transform 200ms ease;\n  }\n\n  .like-button.liked .heart {\n    transform: scale(1.15);\n  }\n\n  .count {\n    font-variant-numeric: tabular-nums;\n  }\n</style>\n",
    demoCode: "<script>\n  import LikeButton from \"./LikeButton.svelte\";\n</script>\n\n<LikeButton initialCount={128} />\n",
    documentation: "An animated heart-toggle button with a like count, built in Svelte 5 using runes ($state, $props). Toggles a liked state on click, animating the heart icon and incrementing/decrementing the displayed count.",
    props: [
      { name: "initialCount", type: "number", default: "128", required: false, description: "Starting like count." },
      { name: "initiallyLiked", type: "boolean", default: "false", required: false, description: "Whether the button starts in the \"liked\" state." },
    ],
    installation: "# No installation needed — copy LikeButton.svelte into your project",
    usage: "<script>\n  import LikeButton from \"./LikeButton.svelte\";\n</script>\n\n<LikeButton initialCount={128} />\n",
    compiledPreview: "(()=>{var cs=Object.defineProperty;var Co=e=>{throw TypeError(e)};var us=(e,t,r)=>t in e?cs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var C=(e,t,r)=>us(e,typeof t!=\"symbol\"?t+\"\":t,r),Sn=(e,t,r)=>t.has(e)||Co(\"Cannot \"+r);var a=(e,t,r)=>(Sn(e,t,\"read from private field\"),r?r.call(e):t.get(e)),E=(e,t,r)=>t.has(e)?Co(\"Cannot add the same private member more than once\"):t instanceof WeakSet?t.add(e):t.set(e,r),x=(e,t,r,n)=>(Sn(e,t,\"write to private field\"),n?n.call(e,r):t.set(e,r),r),T=(e,t,r)=>(Sn(e,t,\"access private method\"),r);var Ro;typeof window<\"u\"&&((Ro=window.__svelte??(window.__svelte={})).v??(Ro.v=new Set)).add(\"5\");var gt={};var R=Symbol(\"uninitialized\"),ke=Symbol(\"filename\");var Vr=\"http://www.w3.org/1999/xhtml\";var Oo=globalThis.process?.env?.NODE_ENV,u=Oo&&!Oo.toLowerCase().startsWith(\"prod\");var xt=Array.isArray,Do=Array.prototype.indexOf,wt=Array.prototype.includes,kn=Array.from,Nn=Object.keys,oe=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,Cn=Object.getOwnPropertyDescriptors,Rn=Object.prototype,Io=Array.prototype,Kt=Object.getPrototypeOf,On=Object.isExtensible;var Ke=()=>{};function Ur(e){for(var t=0;t<e.length;t++)e[t]()}function qr(){var e,t,r=new Promise((n,o)=>{e=n,t=o});return{promise:r,resolve:e,reject:t}}var Q=Symbol(\"$state\"),vr=Symbol(\"legacy props\"),Mo=Symbol(\"\"),Gr=Symbol(\"proxy path\"),zr=Symbol(\"attributes\"),gr=Symbol(\"class\"),Dn=Symbol(\"style\"),xr=Symbol(\"text\");var bt=new class extends Error{constructor(){super(...arguments);C(this,\"name\",\"StaleReactionError\");C(this,\"message\",\"The reaction that called `getAbortSignal()` was re-run or destroyed\")}},In=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(\"xml\");var wr=3,Xe=8;function Lo(e){if(u){let t=new Error(`invariant_violation\nAn invariant violation occurred, meaning Svelte's internal assumptions were flawed. This is a bug in Svelte, not your app \\u2014 please open an issue at https://github.com/sveltejs/svelte, citing the following message: \"${e}\"\nhttps://svelte.dev/e/invariant_violation`);throw t.name=\"Svelte error\",t}else throw new Error(\"https://svelte.dev/e/invariant_violation\")}function Po(){if(u){let e=new Error(\"async_derived_orphan\\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\\nhttps://svelte.dev/e/async_derived_orphan\");throw e.name=\"Svelte error\",e}else throw new Error(\"https://svelte.dev/e/async_derived_orphan\")}function Yo(){if(u){let e=new Error(`derived_references_self\nA derived value cannot reference itself recursively\nhttps://svelte.dev/e/derived_references_self`);throw e.name=\"Svelte error\",e}else throw new Error(\"https://svelte.dev/e/derived_references_self\")}function Bo(){if(u){let e=new Error(`effect_update_depth_exceeded\nMaximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state\nhttps://svelte.dev/e/effect_update_depth_exceeded`);throw e.name=\"Svelte error\",e}else throw new Error(\"https://svelte.dev/e/effect_update_depth_exceeded\")}function Ho(){if(u){let e=new Error(`hydration_failed\nFailed to hydrate the application\nhttps://svelte.dev/e/hydration_failed`);throw e.name=\"Svelte error\",e}else throw new Error(\"https://svelte.dev/e/hydration_failed\")}function Vo(e){if(u){let t=new Error(`props_invalid_value\nCannot do \\`bind:${e}={undefined}\\` when \\`${e}\\` has a fallback value\nhttps://svelte.dev/e/props_invalid_value`);throw t.name=\"Svelte error\",t}else throw new Error(\"https://svelte.dev/e/props_invalid_value\")}function Uo(e){if(u){let t=new Error(`rune_outside_svelte\nThe \\`${e}\\` rune is only available inside \\`.svelte\\` and \\`.svelte.js/ts\\` files\nhttps://svelte.dev/e/rune_outside_svelte`);throw t.name=\"Svelte error\",t}else throw new Error(\"https://svelte.dev/e/rune_outside_svelte\")}function qo(){if(u){let e=new Error(\"state_descriptors_fixed\\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\\nhttps://svelte.dev/e/state_descriptors_fixed\");throw e.name=\"Svelte error\",e}else throw new Error(\"https://svelte.dev/e/state_descriptors_fixed\")}function Go(){if(u){let e=new Error(\"state_prototype_fixed\\nCannot set prototype of `$state` object\\nhttps://svelte.dev/e/state_prototype_fixed\");throw e.name=\"Svelte error\",e}else throw new Error(\"https://svelte.dev/e/state_prototype_fixed\")}function zo(){if(u){let e=new Error(\"state_unsafe_mutation\\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\\nhttps://svelte.dev/e/state_unsafe_mutation\");throw e.name=\"Svelte error\",e}else throw new Error(\"https://svelte.dev/e/state_unsafe_mutation\")}function jo(){if(u){let e=new Error(\"svelte_boundary_reset_onerror\\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\\nhttps://svelte.dev/e/svelte_boundary_reset_onerror\");throw e.name=\"Svelte error\",e}else throw new Error(\"https://svelte.dev/e/svelte_boundary_reset_onerror\")}var ot=\"font-weight: bold\",it=\"font-weight: normal\";function Wo(e){u?console.warn(`%c[svelte] await_reactivity_loss\n%cDetected reactivity loss when reading \\`${e}\\`. This happens when state is read in an async function after an earlier \\`await\\`\nhttps://svelte.dev/e/await_reactivity_loss`,ot,it):console.warn(\"https://svelte.dev/e/await_reactivity_loss\")}function Ko(e,t){u?console.warn(`%c[svelte] await_waterfall\n%cAn async derived, \\`${e}\\` (${t}) was not read immediately after it resolved. This often indicates an unnecessary waterfall, which can slow down your app\nhttps://svelte.dev/e/await_waterfall`,ot,it):console.warn(\"https://svelte.dev/e/await_waterfall\")}function Xo(){u?console.warn(`%c[svelte] derived_inert\n%cReading a derived belonging to a now-destroyed effect may result in stale values\nhttps://svelte.dev/e/derived_inert`,ot,it):console.warn(\"https://svelte.dev/e/derived_inert\")}function Zo(e,t,r){u?console.warn(`%c[svelte] hydration_attribute_changed\n%cThe \\`${e}\\` attribute on \\`${t}\\` changed its value between server and client renders. The client value, \\`${r}\\`, will be ignored in favour of the server value\nhttps://svelte.dev/e/hydration_attribute_changed`,ot,it):console.warn(\"https://svelte.dev/e/hydration_attribute_changed\")}function Xt(e){u?console.warn(`%c[svelte] hydration_mismatch\n%c${e?`Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${e}`:\"Hydration failed because the initial UI does not match what was rendered on the server\"}\nhttps://svelte.dev/e/hydration_mismatch`,ot,it):console.warn(\"https://svelte.dev/e/hydration_mismatch\")}function Jo(){u?console.warn(`%c[svelte] lifecycle_double_unmount\n%cTried to unmount a component that was not mounted\nhttps://svelte.dev/e/lifecycle_double_unmount`,ot,it):console.warn(\"https://svelte.dev/e/lifecycle_double_unmount\")}function jr(e){u?console.warn(`%c[svelte] state_proxy_equality_mismatch\n%cReactive \\`$state(...)\\` proxies and the values they proxy have different identities. Because of this, comparisons with \\`${e}\\` will produce unexpected results\nhttps://svelte.dev/e/state_proxy_equality_mismatch`,ot,it):console.warn(\"https://svelte.dev/e/state_proxy_equality_mismatch\")}function Qo(){u?console.warn(`%c[svelte] state_proxy_unmount\n%cTried to unmount a state proxy, rather than a component\nhttps://svelte.dev/e/state_proxy_unmount`,ot,it):console.warn(\"https://svelte.dev/e/state_proxy_unmount\")}function ei(){u?console.warn(\"%c[svelte] svelte_boundary_reset_noop\\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\\nhttps://svelte.dev/e/svelte_boundary_reset_noop\",ot,it):console.warn(\"https://svelte.dev/e/svelte_boundary_reset_noop\")}var b=!1;function pe(e){b=e}var A;function F(e){if(e===null)throw Xt(),gt;return A=e}function de(){return F(ie(A))}function Tr(e){if(b){if(ie(A)!==null)throw Xt(),gt;A=e}}function Mn(e=1){if(b){for(var t=e,r=A;t--;)r=ie(r);A=r}}function Rt(e=!0){for(var t=0,r=A;;){if(r.nodeType===Xe){var n=r.data;if(n===\"]\"){if(t===0)return r;t-=1}else(n===\"[\"||n===\"[!\"||n[0]===\"[\"&&!isNaN(Number(n.slice(1))))&&(t+=1)}var o=ie(r);e&&r.remove(),r=o}}function Wr(e){return e===this.v}function Ln(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e==\"object\"||typeof e==\"function\"}function Kr(e){return!Ln(e,this.v)}var ee=!1,yt=!1,Ye=!1;var $r=null;function se(e,t){return e.label=t,Zr(e.v,t),e}function Zr(e,t){return e?.[Gr]?.(t),e}function Be(e){let t=new Error,r=ds();return r.length===0?null:(r.unshift(`\n`),oe(t,\"stack\",{value:r.join(`\n`)}),oe(t,\"name\",{value:e}),t)}function ds(){let e=Error.stackTraceLimit;Error.stackTraceLimit=1/0;let t=new Error().stack;if(Error.stackTraceLimit=e,!t)return[];let r=t.split(`\n`),n=[];for(let o=0;o<r.length;o++){let i=r[o],s=i.replaceAll(\"\\\\\",\"/\");if(i.trim()!==\"Error\"){if(i.includes(\"validate_each_keys\"))return[];s.includes(\"svelte/src/internal\")||s.includes(\"node_modules/.vite\")||n.push(i)}}return n}function ri(e,t){if(!u)throw new Error(\"invariant(...) was not guarded by if (DEV)\");e||Lo(t)}var k=null;function st(e){k=e}var Ze=null;function Zt(e){Ze=e}var He=null;function Jr(e){He=e}function Fn(e,t=!1,r){k={p:k,i:!1,c:null,e:null,s:e,x:null,r:v,l:yt&&!t?{s:null,u:null,$:[]}:null},u&&(k.function=r,He=r)}function Pn(e){var t=k,r=t.e;if(r!==null){t.e=null;for(var n of r)oi(n)}return e!==void 0&&(t.x=e),t.i=!0,k=t.p,u&&(He=k?.function??null),e??{}}function Je(){return!yt||k!==null&&k.l===null}var Ot=[];function ii(){var e=Ot;Ot=[],Ur(e)}function J(e){if(Ot.length===0&&!Dt){var t=Ot;queueMicrotask(()=>{t===Ot&&ii()})}Ot.push(e)}function si(){for(;Ot.length>0;)ii()}var Yn=new WeakMap;function Qr(e){var t=v;if(t===null)return g.f|=8388608,e;if(u&&e instanceof Error&&!Yn.has(e)&&Yn.set(e,ms(e,t)),(t.f&32768)===0&&(t.f&4)===0)throw u&&!t.parent&&e instanceof Error&&ai(e),e;Ue(e,t)}function Ue(e,t){if(!(t!==null&&(t.f&16384)!==0)){for(;t!==null;){if((t.f&128)!==0){if((t.f&32768)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw u&&e instanceof Error&&ai(e),e}}function ms(e,t){let r=_e(e,\"message\");if(!(r&&!r.configurable)){for(var n=Sr?\"  \":\"\t\",o=`\n${n}in ${t.fn?.name||\"<unknown>\"}`,i=t.ctx;i!==null;)o+=`\n${n}in ${i.function?.[ke].split(\"/\").pop()}`,i=i.p;return{message:e.message+`\n${o}\n`,stack:e.stack?.split(`\n`).filter(s=>!s.includes(\"svelte/src/internal\")).join(`\n`)}}}function ai(e){let t=Yn.get(e);t&&(oe(e,\"message\",{value:t.message}),oe(e,\"stack\",{value:t.stack}))}var hs=-7169;function O(e,t){e.f=e.f&hs|t}function Jt(e){(e.f&512)!==0||e.deps===null?O(e,1024):O(e,4096)}function fi(e){if(e!==null)for(let t of e)(t.f&2)===0||(t.f&65536)===0||(t.f^=65536,fi(t.deps))}function en(e,t,r){(e.f&2048)!==0?t.add(e):(e.f&4096)!==0&&r.add(e),fi(e.deps),O(e,1024)}var li=!1,tn=!1;function Bn(e){var t=tn;try{return tn=!1,[e(),tn]}finally{tn=t}}function ci(e){let t=0,r=ve(0),n;return u&&se(r,\"createSubscriber version\"),()=>{Et()&&($(r),ae(()=>(t===0&&(n=P(()=>e(()=>Mt(r)))),t+=1,()=>{J(()=>{t-=1,t===0&&(n?.(),n=void 0,Mt(r))})})))}}var gs=589824;function Gn(e,t,r,n){new Hn(e,t,r,n)}var Te,kr,Re,Lt,ge,Oe,fe,$e,ft,Ft,Tt,tr,Nr,Cr,Qe,on,L,_i,pi,di,Vn,rn,nn,Un,qn,Hn=class{constructor(t,r,n,o){E(this,L);C(this,\"parent\");C(this,\"is_pending\",!1);C(this,\"transform_error\");E(this,Te);E(this,kr,b?A:null);E(this,Re);E(this,Lt);E(this,ge);E(this,Oe,null);E(this,fe,null);E(this,$e,null);E(this,ft,null);E(this,Ft,0);E(this,Tt,0);E(this,tr,!1);E(this,Nr,new Set);E(this,Cr,new Set);E(this,Qe,null);E(this,on,ci(()=>(x(this,Qe,ve(a(this,Ft))),u&&se(a(this,Qe),\"$effect.pending()\"),()=>{x(this,Qe,null)})));x(this,Te,t),x(this,Re,r),x(this,Lt,i=>{var s=v;s.b=this,s.f|=128,n(i)}),this.parent=v.b,this.transform_error=o??this.parent?.transform_error??(i=>i),x(this,ge,Ge(()=>{if(b){let i=a(this,kr);de();let s=i.data===\"[!\";if(i.data.startsWith(\"[?\")){let _=JSON.parse(i.data.slice(\"[?\".length));T(this,L,pi).call(this,_)}else s?T(this,L,di).call(this):T(this,L,_i).call(this)}else T(this,L,Vn).call(this)},gs)),b&&x(this,Te,A)}defer_effect(t){en(t,a(this,Nr),a(this,Cr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!a(this,Re).pending}update_pending_count(t,r){T(this,L,Un).call(this,t,r),x(this,Ft,a(this,Ft)+t),!(!a(this,Qe)||a(this,tr))&&(x(this,tr,!0),J(()=>{x(this,tr,!1),a(this,Qe)&&ct(a(this,Qe),a(this,Ft))}))}get_effect_pending(){return a(this,on).call(this),$(a(this,Qe))}error(t){if(!a(this,Re).onerror&&!a(this,Re).failed)throw t;w?.is_fork?(a(this,Oe)&&w.skip_effect(a(this,Oe)),a(this,fe)&&w.skip_effect(a(this,fe)),a(this,$e)&&w.skip_effect(a(this,$e)),w.oncommit(()=>{T(this,L,qn).call(this,t)})):T(this,L,qn).call(this,t)}};Te=new WeakMap,kr=new WeakMap,Re=new WeakMap,Lt=new WeakMap,ge=new WeakMap,Oe=new WeakMap,fe=new WeakMap,$e=new WeakMap,ft=new WeakMap,Ft=new WeakMap,Tt=new WeakMap,tr=new WeakMap,Nr=new WeakMap,Cr=new WeakMap,Qe=new WeakMap,on=new WeakMap,L=new WeakSet,_i=function(){try{x(this,Oe,xe(()=>a(this,Lt).call(this,a(this,Te))))}catch(t){this.error(t)}},pi=function(t){let r=a(this,Re).failed;r&&x(this,$e,xe(()=>{r(a(this,Te),()=>t,()=>()=>{})}))},di=function(){let t=a(this,Re).pending;t&&(this.is_pending=!0,x(this,fe,xe(()=>t(a(this,Te)))),J(()=>{var r=x(this,ft,document.createDocumentFragment()),n=Ie();r.append(n),x(this,Oe,T(this,L,nn).call(this,()=>xe(()=>a(this,Lt).call(this,n)))),a(this,Tt)===0&&(a(this,Te).before(r),x(this,ft,null),Pt(a(this,fe),()=>{x(this,fe,null)}),T(this,L,rn).call(this,w))}))},Vn=function(){try{if(this.is_pending=this.has_pending_snippet(),x(this,Tt,0),x(this,Ft,0),x(this,Oe,xe(()=>{a(this,Lt).call(this,a(this,Te))})),a(this,Tt)>0){var t=x(this,ft,document.createDocumentFragment());sn(a(this,Oe),t);let r=a(this,Re).pending;x(this,fe,xe(()=>r(a(this,Te))))}else T(this,L,rn).call(this,w)}catch(r){this.error(r)}},rn=function(t){this.is_pending=!1,t.transfer_effects(a(this,Nr),a(this,Cr))},nn=function(t){var r=v,n=g,o=k;U(a(this,ge)),V(a(this,ge)),st(a(this,ge).ctx);try{return De.ensure(),t()}catch(i){return Qr(i),null}finally{U(r),V(n),st(o)}},Un=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&T(n=this.parent,L,Un).call(n,t,r);return}x(this,Tt,a(this,Tt)+t),a(this,Tt)===0&&(T(this,L,rn).call(this,r),a(this,fe)&&Pt(a(this,fe),()=>{x(this,fe,null)}),a(this,ft)&&(a(this,Te).before(a(this,ft)),x(this,ft,null)))},qn=function(t){a(this,Oe)&&(j(a(this,Oe)),x(this,Oe,null)),a(this,fe)&&(j(a(this,fe)),x(this,fe,null)),a(this,$e)&&(j(a(this,$e)),x(this,$e,null)),b&&(F(a(this,kr)),Mn(),F(Rt()));var r=a(this,Re).onerror;let n=a(this,Re).failed;var o=!1,i=!1;let s=()=>{if(o){ei();return}o=!0,i&&jo(),a(this,$e)!==null&&Pt(a(this,$e),()=>{x(this,$e,null)}),T(this,L,nn).call(this,()=>{T(this,L,Vn).call(this)})},c=_=>{try{i=!0,r?.(_,s),i=!1}catch(m){Ue(m,a(this,ge)&&a(this,ge).parent)}n&&x(this,$e,T(this,L,nn).call(this,()=>{try{return xe(()=>{var m=v;m.b=this,m.f|=128,n(a(this,Te),()=>_,()=>s)})}catch(m){return Ue(m,a(this,ge).parent),null}}))};J(()=>{var _;try{_=this.transform_error(t)}catch(m){Ue(m,a(this,ge)&&a(this,ge).parent);return}_!==null&&typeof _==\"object\"&&typeof _.then==\"function\"?_.then(c,m=>Ue(m,a(this,ge)&&a(this,ge).parent)):c(_)})};function an(e,t,r,n){let o=Je()?Yt:nr;var i=e.filter(f=>!f.settled),s=t.map(o);if(u&&s.forEach((f,d)=>{f.label=t[d].toString().replace(\"() => \",\"\").replaceAll(\"$.eager(() => \",\"$state.eager(\").replace(/\\$\\.get\\((.+?)\\)/g,(h,S)=>S)}),r.length===0&&i.length===0){n(s);return}var c=v,_=mi(),m=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(f=>f.promise)):null;function y(f){if((c.f&16384)===0){_();try{n([...s,...f])}catch(d){Ue(d,c)}rr()}}var p=zn();if(r.length===0){m.then(()=>y([])).finally(p);return}function l(){Promise.all(r.map(f=>Wn(f))).then(y).catch(f=>Ue(f,c)).finally(p)}m?m.then(()=>{_(),l(),rr()}):l()}function mi(){var e=v,t=g,r=k,n=w;if(u)var o=Ze;return function(s=!0){U(e),V(t),st(r),s&&(e.f&16384)===0&&(n?.activate(),n?.apply()),u&&(jn(null),Zt(o))}}function rr(e=!0){U(null),V(null),st(null),e&&w?.deactivate(),u&&(jn(null),Zt(null))}function zn(){var e=v,t=e.b,r=w,n=!!t?.is_rendered();return t?.update_pending_count(1,r),r.increment(n,e),()=>{t?.update_pending_count(-1,r),r.decrement(n,e)}}var we=null;function jn(e){we=e}var Rr=new Set;function Yt(e){var t=2050;v!==null&&(v.f|=524288);let r={ctx:k,deps:null,effects:null,equals:Wr,f:t,fn:e,reactions:null,rv:0,v:R,wv:0,parent:v,ac:null};return u&&Ye&&(r.created=Be(\"created at\")),r}var or=Symbol(\"obsolete\");function Wn(e,t,r){let n=v;n===null&&Po();var o=void 0,i=ve(R);u&&(i.label=t??e.toString());var s=!g,c=new Set;return gi(()=>{var _=v;u&&(we={effect:_,effect_deps:new Set,warned:!1});var m=qr();o=m.promise;try{Promise.resolve(e()).then(m.resolve,f=>{f!==bt&&m.reject(f)}).finally(rr)}catch(f){m.reject(f),rr()}if(u){if(we){if(_.deps!==null)for(let f=0;f<le;f+=1)we.effect_deps.add(_.deps[f]);if(W!==null)for(let f=0;f<W.length;f+=1)we.effect_deps.add(W[f])}we=null}var y=w;if(s){if((_.f&32768)!==0)var p=zn();if(n.b?.is_rendered())y.async_deriveds.get(_)?.reject(or);else for(let f of c.values())f.reject(or);c.add(m),y.async_deriveds.set(_,m)}let l=(f,d=void 0)=>{u&&(we=null),p?.(),c.delete(m),d!==or&&(y.activate(),d?(i.f|=8388608,ct(i,d)):((i.f&8388608)!==0&&(i.f^=8388608),u&&r!==void 0&&!i.equals(f)&&(Rr.add(i),setTimeout(()=>{Rr.has(i)&&(_.f&16384)===0&&(Ko(i.label,r),Rr.delete(i))})),ct(i,f)),y.deactivate())};m.promise.then(l,f=>l(null,f||\"unknown\"))}),re(()=>{for(let _ of c)_.reject(or)}),u&&(i.f|=4194304),new Promise(_=>{function m(y){function p(){y===o?_(i):m(o)}y.then(p,p)}m(o)})}function nr(e){let t=Yt(e);return t.equals=Kr,t}function hi(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)j(t[r])}}var Kn=[];function Or(e){var t,r=v,n=e.parent;if(!Me&&n!==null&&e.v!==R&&(n.f&24576)!==0)return Xo(),e.v;if(U(n),u){let o=Bt;fn(new Set);try{wt.call(Kn,e)&&Yo(),Kn.push(e),e.f&=-65537,hi(e),t=ln(e)}finally{U(r),fn(o),Kn.pop()}}else try{e.f&=-65537,hi(e),t=ln(e)}finally{U(r)}return t}function Xn(e){var t=Or(e);if(!e.equals(t)&&(e.wv=ir(),(!w?.is_fork||e.deps===null)&&(w!==null?(w.capture(e,t,!0),$t?.capture(e,t,!0)):e.v=t,e.deps===null))){O(e,1024);return}Me||(K!==null?(Et()||w?.is_fork)&&K.set(e,t):Jt(e))}function vi(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(bt),t.fn!==null&&(t.teardown=Ke),t.ac=null,Ht(t,0),Dr(t))}function Zn(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&et(t)}var cn=null,sr=null,w=null,$t=null,K=null,to=null,Dt=!1,Qn=!1,Vt=null,Lr=null,xi=0,eo=new Set,bs=1,fr,ut,_t,lr,cr,ur,pt,_r,ce,Fr,dt,ze,tt,pr,At,N,ro,Ir,no,bi,yi,ar,Ei,Mr,un=class un{constructor(){E(this,N);C(this,\"id\",bs++);E(this,fr,!1);C(this,\"linked\",!0);E(this,ut,null);E(this,_t,null);C(this,\"async_deriveds\",new Map);C(this,\"current\",new Map);C(this,\"previous\",new Map);E(this,lr,new Set);E(this,cr,new Set);E(this,ur,0);E(this,pt,new Map);E(this,_r,null);E(this,ce,[]);E(this,Fr,[]);E(this,dt,new Set);E(this,ze,new Set);E(this,tt,new Map);E(this,pr,new Set);C(this,\"is_fork\",!1);E(this,At,!1);sr===null?cn=sr=this:(x(sr,_t,this),x(this,ut,sr)),sr=this}skip_effect(t){a(this,tt).has(t)||a(this,tt).set(t,{d:[],m:[]}),a(this,pr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=a(this,tt).get(t);if(n){a(this,tt).delete(t);for(var o of n.d)O(o,2048),r(o);for(o of n.m)O(o,4096),r(o)}a(this,pr).add(t)}capture(t,r,n=!1){t.v!==R&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&8388608)===0&&(this.current.set(t,[r,n]),K?.set(t,r)),this.is_fork||(t.v=r)}activate(){w=this}deactivate(){w=null,K=null}flush(){try{u&&eo.clear(),Qn=!0,w=this,T(this,N,Ir).call(this)}finally{if(xi=0,to=null,Vt=null,Lr=null,Qn=!1,w=null,K=null,mt.clear(),u)for(let t of eo)t.updated=null}}discard(){for(let t of a(this,cr))t(this);a(this,cr).clear();for(let t of this.async_deriveds.values())t.reject(or);T(this,N,Mr).call(this),a(this,_r)?.resolve()}register_created_effect(t){a(this,Fr).push(t)}increment(t,r){if(x(this,ur,a(this,ur)+1),t){let n=a(this,pt).get(r)??0;a(this,pt).set(r,n+1)}}decrement(t,r){if(x(this,ur,a(this,ur)-1),t){let n=a(this,pt).get(r)??0;n===1?a(this,pt).delete(r):a(this,pt).set(r,n-1)}a(this,At)||(x(this,At,!0),J(()=>{x(this,At,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(let n of t)a(this,dt).add(n);for(let n of r)a(this,ze).add(n);t.clear(),r.clear()}oncommit(t){a(this,lr).add(t)}ondiscard(t){a(this,cr).add(t)}settled(){return(a(this,_r)??x(this,_r,qr())).promise}static ensure(){if(w===null){let t=w=new un;!Qn&&!Dt&&J(()=>{a(t,fr)||t.flush()})}return w}apply(){if(!ee||!this.is_fork&&a(this,ut)===null&&a(this,_t)===null){K=null;return}K=new Map;for(let[r,[n]]of this.current)K.set(r,n);for(let r=cn;r!==null;r=a(r,_t))if(!(r===this||r.is_fork)){var t=!1;if(r.id<this.id){for(let[n,[,o]]of r.current)if(!o&&this.current.has(n)){t=!0;break}}if(!t)for(let[n,o]of r.previous)K.has(n)||K.set(n,o)}}schedule(t){if(to=t,t.b?.is_pending&&(t.f&16777228)!==0&&(t.f&32768)===0){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(Vt!==null&&r===v&&(ee||(g===null||(g.f&2)===0)&&!li))return;if((n&96)!==0){if((n&1024)===0)return;r.f^=1024}}a(this,ce).push(r)}};fr=new WeakMap,ut=new WeakMap,_t=new WeakMap,lr=new WeakMap,cr=new WeakMap,ur=new WeakMap,pt=new WeakMap,_r=new WeakMap,ce=new WeakMap,Fr=new WeakMap,dt=new WeakMap,ze=new WeakMap,tt=new WeakMap,pr=new WeakMap,At=new WeakMap,N=new WeakSet,ro=function(){if(this.is_fork)return!0;for(let n of a(this,pt).keys()){for(var t=n,r=!1;t.parent!==null;){if(a(this,tt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Ir=function(){var _,m,y;if(x(this,fr,!0),xi++>1e3&&(T(this,N,Mr).call(this),ys()),u)for(let p of this.current.keys())eo.add(p);for(let p of a(this,dt))a(this,ze).delete(p),O(p,2048),this.schedule(p);for(let p of a(this,ze))O(p,4096),this.schedule(p);let t=a(this,ce);x(this,ce,[]),this.apply();var r=Vt=[],n=[],o=Lr=[];for(let p of t)try{T(this,N,no).call(this,p,r,n)}catch(l){throw Ai(p),T(this,N,ro).call(this)||this.discard(),l}if(w=null,o.length>0){var i=un.ensure();for(let p of o)i.schedule(p)}if(Vt=null,Lr=null,T(this,N,ro).call(this)){T(this,N,ar).call(this,n),T(this,N,ar).call(this,r);for(let[p,l]of a(this,tt))$i(p,l);o.length>0&&T(_=w,N,Ir).call(_);return}let s=T(this,N,bi).call(this);if(s){T(this,N,ar).call(this,n),T(this,N,ar).call(this,r),T(m=s,N,yi).call(m,this);return}a(this,dt).clear(),a(this,ze).clear();for(let p of a(this,lr))p(this);a(this,lr).clear(),$t=this,wi(n),wi(r),$t=null,a(this,_r)?.resolve();var c=w;if(a(this,ur)===0&&(a(this,ce).length===0||c!==null)&&(T(this,N,Mr).call(this),ee&&(T(this,N,Ei).call(this),w=c)),a(this,ce).length>0)if(c!==null){let p=c;a(p,ce).push(...a(this,ce).filter(l=>!a(p,ce).includes(l)))}else c=this;c!==null&&T(y=c,N,Ir).call(y)},no=function(t,r,n){t.f^=1024;for(var o=t.first;o!==null;){var i=o.f,s=(i&96)!==0,c=s&&(i&1024)!==0,_=c||(i&8192)!==0||a(this,tt).has(o);if(!_&&o.fn!==null){s?o.f^=1024:(i&4)!==0?r.push(o):ee&&(i&16777224)!==0?n.push(o):St(o)&&((i&16)!==0&&a(this,ze).add(o),et(o));var m=o.first;if(m!==null){o=m;continue}}for(;o!==null;){var y=o.next;if(y!==null){o=y;break}o=o.parent}}},bi=function(){for(var t=a(this,ut);t!==null;){if(!t.is_fork){for(let[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=a(t,ut)}return null},yi=function(t){var n;for(let[o,i]of t.current)!this.previous.has(o)&&t.previous.has(o)&&this.previous.set(o,t.previous.get(o)),this.current.set(o,i);for(let[o,i]of t.async_deriveds){let s=this.async_deriveds.get(o);s&&i.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(a(t,dt),a(t,ze));let r=o=>{var i=o.reactions;if(i!==null)for(let _ of i){var s=_.f;if((s&2)!==0)r(_);else{var c=_;s&4194320&&!this.async_deriveds.has(c)&&(a(this,ze).delete(c),O(c,2048),this.schedule(c))}}};for(let o of this.current.keys())r(o);this.oncommit(()=>t.discard()),T(n=t,N,Mr).call(n),w=this,T(this,N,Ir).call(this)},ar=function(t){for(var r=0;r<t.length;r+=1)en(t[r],a(this,dt),a(this,ze))},Ei=function(){var p;for(let l=cn;l!==null;l=a(l,_t)){var t=l.id<this.id,r=[];for(let[f,[d,h]]of this.current){if(l.current.has(f)){var n=l.current.get(f)[0];if(t&&d!==n)l.current.set(f,[d,h]);else continue}r.push(f)}if(t)for(let[f,d]of this.async_deriveds){let h=l.async_deriveds.get(f);h&&d.promise.then(h.resolve).catch(h.reject)}var o=[...l.current.keys()].filter(f=>!l.current.get(f)[1]);if(!(!a(l,fr)||o.length===0)){var i=o.filter(f=>!this.current.has(f));if(i.length===0)t&&l.discard();else if(r.length>0){if(u&&!a(l,At)&&ri(a(l,ce).length===0,\"Batch has scheduled roots\"),t)for(let f of a(this,pr))l.unskip_effect(f,d=>{var h;(d.f&4194320)!==0?l.schedule(d):T(h=l,N,ar).call(h,[d])});l.activate();var s=new Set,c=new Map;for(var _ of r)Ti(_,i,s,c);c=new Map;var m=[...l.current].filter(([f,d])=>{let h=this.current.get(f);return h?h[0]!==d[0]||h[1]!==d[1]:!0}).map(([f])=>f);if(m.length>0)for(let f of a(this,Fr))(f.f&155648)===0&&oo(f,m,c)&&((f.f&4194320)!==0?(O(f,2048),l.schedule(f)):a(l,dt).add(f));if(a(l,ce).length>0&&!a(l,At)){l.apply();for(var y of a(l,ce))T(p=l,N,no).call(p,y,[],[]);x(l,ce,[])}l.deactivate()}}}},Mr=function(){if(this.linked){var t=a(this,ut),r=a(this,_t);t===null?cn=r:x(t,_t,r),r===null?sr=t:x(r,ut,t),this.linked=!1}};var De=un;function dr(e){var t=Dt;Dt=!0;try{var r;for(e&&(w!==null&&!w.is_fork&&w.flush(),r=e());;){if(si(),w===null)return r;w.flush()}}finally{Dt=t}}function ys(){if(u){var e=new Map;for(let r of w.current.keys())for(let[n,o]of r.updated??[]){var t=e.get(n);t||(t={error:o.error,count:0},e.set(n,t)),t.count+=o.count}for(let r of e.values())r.error&&console.error(r.error)}try{Bo()}catch(r){u&&oe(r,\"stack\",{value:\"\"}),Ue(r,to)}}var je=null;function wi(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&24576)===0&&St(n)&&(je=new Set,et(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&io(n),je?.size>0)){mt.clear();for(let o of je){if((o.f&24576)!==0)continue;let i=[o],s=o.parent;for(;s!==null;)je.has(s)&&(je.delete(s),i.push(s)),s=s.parent;for(let c=i.length-1;c>=0;c--){let _=i[c];(_.f&24576)===0&&et(_)}}je.clear()}}je=null}}function Ti(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(let o of e.reactions){let i=o.f;(i&2)!==0?Ti(o,t,r,n):(i&4194320)!==0&&(i&2048)===0&&oo(o,t,n)&&(O(o,2048),Pr(o))}}function oo(e,t,r){let n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(let o of e.deps){if(wt.call(t,o))return!0;if((o.f&2)!==0&&oo(o,t,r))return r.set(o,!0),!0}return r.set(e,!1),!1}function Pr(e){w.schedule(e)}function $i(e,t){if(!((e.f&32)!==0&&(e.f&1024)!==0)){(e.f&2048)!==0?t.d.push(e):(e.f&4096)!==0&&t.m.push(e),O(e,1024);for(var r=e.first;r!==null;)$i(r,t),r=r.next}}function Ai(e){O(e,1024);for(var t=e.first;t!==null;)Ai(t),t=t.next}var Bt=new Set,mt=new Map;function fn(e){Bt=e}var so=!1;function ki(){so=!0}function ve(e,t){var r={f:0,v:e,reactions:null,equals:Wr,rv:0,wv:0};return u&&Ye&&(r.created=t??Be(\"created at\"),r.updated=null,r.set_during_effect=!1,r.trace=null),r}function Se(e,t){let r=ve(e,t);return Jn(r),r}function Qt(e,t=!1,r=!0){var o;let n=ve(e);return t||(n.equals=Kr),yt&&r&&k!==null&&k.l!==null&&((o=k.l).s??(o.s=[])).push(n),n}function H(e,t,r=!1){g!==null&&(!ue||(g.f&131072)!==0)&&Je()&&(g.f&4325394)!==0&&(We===null||!We.has(e))&&zo();let n=r?Le(t):t;return u&&Zr(n,e.label),ct(e,n,Lr)}function ct(e,t,r=null){if(!e.equals(t)){mt.set(e,Me?t:e.v);var n=De.ensure();if(n.capture(e,t),u){if(Ye||v!==null){e.updated??(e.updated=new Map);let o=(e.updated.get(\"\")?.count??0)+1;if(e.updated.set(\"\",{error:null,count:o}),Ye||o>5){let i=Be(\"updated at\");if(i!==null){let s=e.updated.get(i.stack);s||(s={error:i,count:0},e.updated.set(i.stack,s)),s.count++}}}v!==null&&(e.set_during_effect=!0)}if((e.f&2)!==0){let o=e;(e.f&2048)!==0&&Or(o),K===null&&Jt(o)}e.wv=ir(),Ni(e,2048,r),Je()&&v!==null&&(v.f&1024)!==0&&(v.f&96)===0&&(Ae===null?Ci([e]):Ae.push(e)),!n.is_fork&&Bt.size>0&&!so&&pn()}return t}function pn(){so=!1;for(let e of Bt){(e.f&1024)!==0&&O(e,4096);let t;try{t=St(e)}catch{t=!0}t&&et(e)}Bt.clear()}function Mt(e){H(e,e.v+1)}function Ni(e,t,r){var n=e.reactions;if(n!==null)for(var o=Je(),i=n.length,s=0;s<i;s++){var c=n[s],_=c.f;if(!(!o&&c===v)){var m=(_&2048)===0;if(m&&O(c,t),(_&131072)!==0)Bt.add(c);else if((_&2)!==0){var y=c;K?.delete(y),(_&65536)===0&&(_&512&&(v===null||(v.f&2097152)===0)&&(c.f|=65536),Ni(y,4096,r))}else if(m){var p=c;(_&16)!==0&&je!==null&&je.add(p),r!==null?r.push(p):Pr(p)}}}}var Ts=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/;function Le(e){if(typeof e!=\"object\"||e===null||Q in e)return e;let t=Kt(e);if(t!==Rn&&t!==Io)return e;var r=new Map,n=xt(e),o=Se(0),i=u&&Ye?Be(\"created at\"):null,s=kt,c=p=>{if(kt===s)return p();var l=g,f=kt;V(null),ao(s);var d=p();return V(l),ao(f),d};n&&(r.set(\"length\",Se(e.length,i)),u&&(e=As(e)));var _=\"\";let m=!1;function y(p){if(!m){m=!0,_=p,se(o,`${_} version`);for(let[l,f]of r)se(f,qt(_,l));m=!1}}return new Proxy(e,{defineProperty(p,l,f){(!(\"value\"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&qo();var d=r.get(l);return d===void 0?c(()=>{var h=Se(f.value,i);return r.set(l,h),u&&typeof l==\"string\"&&se(h,qt(_,l)),h}):H(d,f.value,!0),!0},deleteProperty(p,l){var f=r.get(l);if(f===void 0){if(l in p){let d=c(()=>Se(R,i));r.set(l,d),Mt(o),u&&se(d,qt(_,l))}}else H(f,R),Mt(o);return!0},get(p,l,f){if(l===Q)return e;if(u&&l===Gr)return y;var d=r.get(l),h=l in p;if(d===void 0&&(!h||_e(p,l)?.writable)&&(d=c(()=>{var Y=Le(h?p[l]:R),q=Se(Y,i);return u&&se(q,qt(_,l)),q}),r.set(l,d)),d!==void 0){var S=$(d);return S===R?void 0:S}return Reflect.get(p,l,f)},getOwnPropertyDescriptor(p,l){var f=Reflect.getOwnPropertyDescriptor(p,l);if(f&&\"value\"in f){var d=r.get(l);d&&(f.value=$(d))}else if(f===void 0){var h=r.get(l),S=h?.v;if(h!==void 0&&S!==R)return{enumerable:!0,configurable:!0,value:S,writable:!0}}return f},has(p,l){if(l===Q)return!0;var f=r.get(l),d=f!==void 0&&f.v!==R||Reflect.has(p,l);if(f!==void 0||v!==null&&(!d||_e(p,l)?.writable)){f===void 0&&(f=c(()=>{var S=d?Le(p[l]):R,Y=Se(S,i);return u&&se(Y,qt(_,l)),Y}),r.set(l,f));var h=$(f);if(h===R)return!1}return d},set(p,l,f,d){var h=r.get(l),S=l in p;if(n&&l===\"length\")for(var Y=f;Y<h.v;Y+=1){var q=r.get(Y+\"\");q!==void 0?H(q,R):Y in p&&(q=c(()=>Se(R,i)),r.set(Y+\"\",q),u&&se(q,qt(_,Y)))}if(h===void 0)(!S||_e(p,l)?.writable)&&(h=c(()=>Se(void 0,i)),u&&se(h,qt(_,l)),H(h,Le(f)),r.set(l,h));else{S=h.v!==R;var Nt=c(()=>Le(f));H(h,Nt)}var G=Reflect.getOwnPropertyDescriptor(p,l);if(G?.set&&G.set.call(d,f),!S){if(n&&typeof l==\"string\"){var Ct=r.get(\"length\"),Wt=Number(l);Number.isInteger(Wt)&&Wt>=Ct.v&&H(Ct,Wt+1)}Mt(o)}return!0},ownKeys(p){$(o);var l=Reflect.ownKeys(p).filter(h=>{var S=r.get(h);return S===void 0||S.v!==R});for(var[f,d]of r)d.v!==R&&!(f in p)&&l.push(f);return l},setPrototypeOf(){Go()}})}function qt(e,t){return typeof t==\"symbol\"?`${e}[Symbol(${t.description??\"\"})]`:Ts.test(t)?`${e}.${t}`:/^\\d+$/.test(t)?`${e}[${t}]`:`${e}['${t}']`}function dn(e){try{if(e!==null&&typeof e==\"object\"&&Q in e)return e[Q]}catch{}return e}var $s=new Set([\"copyWithin\",\"fill\",\"pop\",\"push\",\"reverse\",\"shift\",\"sort\",\"splice\",\"unshift\"]);function As(e){return new Proxy(e,{get(t,r,n){var o=Reflect.get(t,r,n);return $s.has(r)?function(...i){ki();var s=o.apply(this,i);return pn(),s}:o}})}function Ri(){let e=Array.prototype,t=Array.__svelte_cleanup;t&&t();let{indexOf:r,lastIndexOf:n,includes:o}=e;e.indexOf=function(i,s){let c=r.call(this,i,s);if(c===-1){for(let _=s??0;_<this.length;_+=1)if(dn(this[_])===i){jr(\"array.indexOf(...)\");break}}return c},e.lastIndexOf=function(i,s){let c=n.call(this,i,s??this.length-1);if(c===-1){for(let _=0;_<=(s??this.length-1);_+=1)if(dn(this[_])===i){jr(\"array.lastIndexOf(...)\");break}}return c},e.includes=function(i,s){let c=o.call(this,i,s);if(!c){for(let _=0;_<this.length;_+=1)if(dn(this[_])===i){jr(\"array.includes(...)\");break}}return c},Array.__svelte_cleanup=()=>{e.indexOf=r,e.lastIndexOf=n,e.includes=o}}var fo,Oi,Sr,Di,Ii;function mn(){if(fo===void 0){fo=window,Oi=document,Sr=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Di=_e(t,\"firstChild\").get,Ii=_e(t,\"nextSibling\").get,On(e)&&(e[gr]=void 0,e[zr]=null,e[Dn]=void 0,e.__e=void 0),On(r)&&(r[xr]=void 0),u&&(e.__svelte_meta=null,Ri())}}function Ie(e=\"\"){return document.createTextNode(e)}function be(e){return Di.call(e)}function ie(e){return Ii.call(e)}function hn(e,t){if(!b)return be(e);var r=be(A);if(r===null)r=A.appendChild(Ie());else if(t&&r.nodeType!==wr){var n=Ie();return r?.before(n),F(n),n}return t&&co(r),F(r),r}function lo(e,t=1,r=!1){let n=b?A:e;for(var o;t--;)o=n,n=ie(n);if(!b)return n;if(r){if(n?.nodeType!==wr){var i=Ie();return n===null?o?.after(i):n.before(i),F(i),i}co(n)}return F(n),n}function vn(e){e.textContent=\"\"}function rt(e,t,r){return t==null||t===Vr?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function co(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===wr;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function Gt(e){var t=g,r=v;V(null),U(null);try{return e()}finally{V(t),U(r)}}function Ns(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function nt(e,t){var r=v;if(u)for(;r!==null&&(r.f&131072)!==0;)r=r.parent;r!==null&&(r.f&8192)!==0&&(e|=8192);var n={ctx:k,deps:null,nodes:null,f:e|2048|512,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};u&&(n.component_function=He),w?.register_created_effect(n);var o=n;if((e&4)!==0)Vt!==null?Vt.push(n):De.ensure().schedule(n);else if(t!==null){try{et(n)}catch(s){throw j(n),s}o.deps===null&&o.teardown===null&&o.nodes===null&&o.first===o.last&&(o.f&524288)===0&&(o=o.first,(e&16)!==0&&(e&65536)!==0&&o!==null&&(o.f|=65536))}if(o!==null&&(o.parent=r,r!==null&&Ns(o,r),g!==null&&(g.f&2)!==0&&(e&64)===0)){var i=g;(i.effects??(i.effects=[])).push(o)}return n}function Et(){return g!==null&&!ue}function re(e){let t=nt(8,null);return O(t,1024),t.teardown=e,t}function oi(e){return nt(1048580,e)}function _o(e){De.ensure();let t=nt(524352,e);return()=>{j(t)}}function Fi(e){De.ensure();let t=nt(524352,e);return(r={})=>new Promise(n=>{r.outro?Pt(t,()=>{j(t),n(void 0)}):(j(t),n(void 0))})}function Fe(e){return nt(4,e)}function gi(e){return nt(4718592,e)}function ae(e,t=0){return nt(8|t,e)}function gn(e,t=[],r=[],n=[]){an(n,t,r,o=>{nt(8,()=>{e(...o.map($))})})}function Ge(e,t=0){var r=nt(16|t,e);return u&&(r.dev_stack=Ze),r}function xe(e){return nt(524320,e)}function po(e){var t=e.teardown;if(t!==null){let r=Me,n=g;uo(!0),V(null);try{t.call(null)}finally{uo(r),V(n)}}}function Dr(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){let o=r.ac;o!==null&&Gt(()=>{o.abort(bt)});var n=r.next;(r.f&64)!==0?r.parent=null:j(r,t),r=n}}function Pi(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&32)===0&&j(t),t=r}}function j(e,t=!0){var r=!1;(t||(e.f&262144)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Yi(e.nodes.start,e.nodes.end),r=!0),e.f|=33554432,Dr(e,t&&!r),Ht(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(let i of n)i.stop();po(e),e.f^=33554432,e.f|=16384;var o=e.parent;o!==null&&o.first!==null&&io(e),u&&(e.component_function=null),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Yi(e,t){for(;e!==null;){var r=e===t?null:ie(e);e.remove(),e=r}}function io(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Pt(e,t,r=!0){var n=[];Bi(e,n,!0);var o=()=>{r&&j(e),t&&t()},i=n.length;if(i>0){var s=()=>--i||o();for(var c of n)c.out(s)}else o()}function Bi(e,t,r){if((e.f&8192)===0){e.f^=8192;var n=e.nodes&&e.nodes.t;if(n!==null)for(let c of n)(c.is_global||r)&&t.push(c);for(var o=e.first;o!==null;){var i=o.next;if((o.f&64)===0){var s=(o.f&65536)!==0||(o.f&32)!==0&&(e.f&16)!==0;Bi(o,t,s?r:!1)}o=i}}}function sn(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var o=r===n?null:ie(r);t.append(r),r=o}}var Hi=null;var xn=!1,Me=!1;function uo(e){Me=e}var g=null,ue=!1;function V(e){g=e}var v=null;function U(e){v=e}var We=null;function Jn(e){g!==null&&(!ee||(g.f&2)!==0)&&(We??(We=new Set)).add(e)}var W=null,le=0,Ae=null;function Ci(e){Ae=e}var Vi=1,zt=0,kt=zt;function ao(e){kt=e}function ir(){return++Vi}function St(e){var t=e.f;if((t&2048)!==0)return!0;if(t&2&&(e.f&=-65537),(t&4096)!==0){for(var r=e.deps,n=r.length,o=0;o<n;o++){var i=r[o];if(St(i)&&Xn(i),i.wv>e.wv)return!0}(t&512)!==0&&K===null&&O(e,1024)}return!1}function Ui(e,t,r=!0){var n=e.reactions;if(n!==null&&!(!ee&&We!==null&&We.has(e)))for(var o=0;o<n.length;o++){var i=n[o];(i.f&2)!==0?Ui(i,t,!1):t===i&&(r?O(i,2048):(i.f&1024)!==0&&O(i,4096),Pr(i))}}function ln(e){var h;var t=W,r=le,n=Ae,o=g,i=We,s=k,c=ue,_=kt,m=e.f;W=null,le=0,Ae=null,g=(m&96)===0?e:null,We=null,st(e.ctx),ue=!1,kt=++zt,e.ac!==null&&(Gt(()=>{e.ac.abort(bt)}),e.ac=null);try{e.f|=2097152;var y=e.fn,p=y();e.f|=32768;var l=e.deps,f=w?.is_fork;if(W!==null){var d;if(f||Ht(e,le),l!==null&&le>0)for(l.length=le+W.length,d=0;d<W.length;d++)l[le+d]=W[d];else e.deps=l=W;if(Et()&&(e.f&512)!==0)for(d=le;d<l.length;d++)((h=l[d]).reactions??(h.reactions=[])).push(e)}else!f&&l!==null&&le<l.length&&(Ht(e,le),l.length=le);if(Je()&&Ae!==null&&!ue&&l!==null&&(e.f&6146)===0)for(d=0;d<Ae.length;d++)Ui(Ae[d],e);if(o!==null&&o!==e){if(zt++,o.deps!==null)for(let S=0;S<r;S+=1)o.deps[S].rv=zt;if(t!==null)for(let S of t)S.rv=zt;Ae!==null&&(n===null?n=Ae:n.push(...Ae))}return(e.f&8388608)!==0&&(e.f^=8388608),p}catch(S){return Qr(S)}finally{e.f^=2097152,W=t,le=r,Ae=n,g=o,We=i,st(s),ue=c,kt=_}}function Cs(e,t){let r=t.reactions;if(r!==null){var n=Do.call(r,e);if(n!==-1){var o=r.length-1;o===0?r=t.reactions=null:(r[n]=r[o],r.pop())}}if(r===null&&(t.f&2)!==0&&(W===null||!wt.call(W,t))){var i=t;(i.f&512)!==0&&(i.f^=512,i.f&=-65537),i.v!==R&&Jt(i),vi(i),Ht(i,0)}}function Ht(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Cs(e,r[n])}function et(e){var t=e.f;if((t&16384)===0){O(e,1024);var r=v,n=xn;if(v=e,xn=!0,u){var o=He;Jr(e.component_function);var i=Ze;Zt(e.dev_stack??Ze)}try{(t&16777232)!==0?Pi(e):Dr(e),po(e);var s=ln(e);if(e.teardown=typeof s==\"function\"?s:null,e.wv=Vi,u&&Ye&&(e.f&2048)!==0&&e.deps!==null)for(var c of e.deps)c.set_during_effect&&(c.wv=ir(),c.set_during_effect=!1)}finally{xn=n,v=r,u&&(Jr(o),Zt(i))}}}function $(e){var t=e.f,r=(t&2)!==0;if(Hi?.add(e),g!==null&&!ue){var n=v!==null&&(v.f&16384)!==0;if(!n&&(We===null||!We.has(e))){var o=g.deps;if((g.f&2097152)!==0)e.rv<zt&&(e.rv=zt,W===null&&o!==null&&o[le]===e?le++:W===null?W=[e]:W.push(e));else{g.deps??(g.deps=[]),wt.call(g.deps,e)||g.deps.push(e);var i=e.reactions;i===null?e.reactions=[g]:wt.call(i,g)||i.push(g)}}}if(u){if(!ue&&we&&w===null&&$t===null&&!we.warned&&(we.effect.f&2097152)===0&&!we.effect_deps.has(e)){we.warned=!0,Wo(e.label);var s=Be(\"traced at\");s&&console.warn(s)}if(Rr.delete(e),Ye&&!ue&&$r!==null&&g!==null&&$r.reaction===g){if(e.trace)e.trace();else if(s=Be(\"traced at\"),s){var c=$r.entries.get(e);c===void 0&&(c={traces:[]},$r.entries.set(e,c));var _=c.traces[c.traces.length-1];s.stack!==_?.stack&&c.traces.push(s)}}}if(Me&&mt.has(e))return mt.get(e);if(r){var m=e;if(Me){var y=m.v;return((m.f&1024)===0&&m.reactions!==null||Gi(m))&&(y=Or(m)),mt.set(m,y),y}var p=(m.f&512)===0&&!ue&&g!==null&&(xn||(g.f&512)!==0),l=(m.f&32768)===0;St(m)&&(p&&(m.f|=512),Xn(m)),p&&!l&&(Zn(m),qi(m))}if(K?.has(e))return K.get(e);if((e.f&8388608)!==0)throw e.v;return e.v}function qi(e){if(e.f|=512,e.deps!==null)for(let t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&2)!==0&&(t.f&512)===0&&(Zn(t),qi(t))}function Gi(e){if(e.v===R)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(mt.has(t)||(t.f&2)!==0&&Gi(t))return!0;return!1}function P(e){var t=ue;try{return ue=!0,e()}finally{ue=t}}var jt=Symbol(\"events\"),mo=new Set,wn=new Set;function bn(e,t,r){(t[jt]??(t[jt]={}))[e]=r}function yn(e){for(var t=0;t<e.length;t++)mo.add(e[t]);for(var r of wn)r(e)}var zi=null;function ho(e){var t=this,r=t.ownerDocument,n=e.type,o=e.composedPath?.()||[],i=o[0]||e.target;zi=e;var s=0,c=zi===e&&e[jt];if(c){var _=o.indexOf(c);if(_!==-1&&(t===document||t===window)){e[jt]=t;return}var m=o.indexOf(t);if(m===-1)return;_<=m&&(s=_)}if(i=o[s]||e.target,i!==t){oe(e,\"currentTarget\",{configurable:!0,get(){return i||r}});var y=g,p=v;V(null),U(null);try{for(var l,f=[];i!==null&&i!==t;){try{var d=i[jt]?.[n];d!=null&&(!i.disabled||e.target===i)&&d.call(i,e)}catch(h){l?f.push(h):l=h}if(e.cancelBubble)break;s++,i=s<o.length?o[s]:null}if(l){for(let h of f)queueMicrotask(()=>{throw h});throw l}}finally{e[jt]=t,delete e.currentTarget,V(y),U(p)}}}var Rs=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(\"svelte-trusted-html\",{createHTML:e=>e});function ji(e){return Rs?.createHTML(e)??e}function vo(e){var t=rt(\"template\");return t.innerHTML=ji(e.replaceAll(\"<!>\",\"<!---->\")),t.content}function ht(e,t){var r=v;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function xo(e,t){var r=(t&1)!==0,n=(t&2)!==0,o,i=!e.startsWith(\"<!>\");return()=>{if(b)return ht(A,null),A;o===void 0&&(o=vo(i?e:\"<!>\"+e),r||(o=be(o)));var s=n||Sr?document.importNode(o,!0):o.cloneNode(!0);if(r){var c=be(s),_=s.lastChild;ht(c,_)}else ht(s,s);return s}}function Yr(e,t){if(b){var r=v;((r.f&32768)===0||r.nodes.end===null)&&(r.nodes.end=A),de();return}e!==null&&e.before(t)}var Fs=[\"allowfullscreen\",\"async\",\"autofocus\",\"autoplay\",\"checked\",\"controls\",\"default\",\"disabled\",\"formnovalidate\",\"indeterminate\",\"inert\",\"ismap\",\"loop\",\"multiple\",\"muted\",\"nomodule\",\"novalidate\",\"open\",\"playsinline\",\"readonly\",\"required\",\"reversed\",\"seamless\",\"selected\",\"webkitdirectory\",\"defer\",\"disablepictureinpicture\",\"disableremoteplayback\"];var N_=[...Fs,\"formNoValidate\",\"isMap\",\"noModule\",\"playsInline\",\"readOnly\",\"value\",\"volume\",\"defaultValue\",\"defaultChecked\",\"srcObject\",\"noValidate\",\"allowFullscreen\",\"disablePictureInPicture\",\"disableRemotePlayback\"];var Ps=[\"touchstart\",\"touchmove\"];function Wi(e){return Ps.includes(e)}var Ys=[\"$state\",\"$state.raw\",\"$derived\",\"$derived.by\"],C_=[...Ys,\"$state.eager\",\"$state.snapshot\",\"$props\",\"$props.id\",\"$bindable\",\"$effect\",\"$effect.pre\",\"$effect.tracking\",\"$effect.root\",\"$effect.pending\",\"$inspect\",\"$inspect().with\",\"$inspect.trace\",\"$host\"];var wo=!0;function yo(e,t){var n;var r=t==null?\"\":typeof t==\"object\"?`${t}`:t;r!==(e[n=xr]??(e[n]=e.nodeValue))&&(e[xr]=r,e.nodeValue=`${r}`)}function hr(e,t){return Ki(e,t)}function Eo(e,t){mn(),t.intro=t.intro??!1;let r=t.target,n=b,o=A;try{for(var i=be(r);i&&(i.nodeType!==Xe||i.data!==\"[\");)i=ie(i);if(!i)throw gt;pe(!0),F(i);let s=Ki(e,{...t,anchor:i});return pe(!1),s}catch(s){if(s instanceof Error&&s.message.split(`\n`).some(c=>c.startsWith(\"https://svelte.dev/e/\")))throw s;return s!==gt&&console.warn(\"Failed to hydrate: \",s),t.recover===!1&&Ho(),mn(),vn(r),pe(!1),hr(e,t)}finally{pe(n),F(o)}}var En=new Map;function Ki(e,{target:t,anchor:r,props:n={},events:o,context:i,intro:s=!0,transformError:c}){mn();var _=void 0,m=Fi(()=>{var y=r??t.appendChild(Ie());Gn(y,{pending:()=>{}},f=>{Fn({});var d=k;if(i&&(d.c=i),o&&(n.$$events=o),b&&ht(f,null),wo=s,_=e(f,n)||{},wo=!0,b&&(v.nodes.end=A,A===null||A.nodeType!==Xe||A.data!==\"]\"))throw Xt(),gt;Pn()},c);var p=new Set,l=f=>{for(var d=0;d<f.length;d++){var h=f[d];if(!p.has(h)){p.add(h);var S=Wi(h);for(let Nt of[t,document]){var Y=En.get(Nt);Y===void 0&&(Y=new Map,En.set(Nt,Y));var q=Y.get(h);q===void 0?(Nt.addEventListener(h,ho,{passive:S}),Y.set(h,1)):Y.set(h,q+1)}}}};return l(kn(mo)),wn.add(l),()=>{for(var f of p)for(let S of[t,document]){var d=En.get(S),h=d.get(f);--h==0?(S.removeEventListener(f,ho),d.delete(f),d.size===0&&En.delete(S)):d.set(f,h)}wn.delete(l),y!==r&&y.parentNode?.removeChild(y)}});return bo.set(_,m),_}var bo=new WeakMap;function To(e,t){let r=bo.get(e);return r?(bo.delete(e),r(t)):(u&&(Q in e?Qo():Jo()),Promise.resolve())}if(u){let e=function(t){if(!(t in globalThis)){let r;Object.defineProperty(globalThis,t,{configurable:!0,get:()=>{if(r!==void 0)return r;Uo(t)},set:n=>{r=n}})}};e(\"$state\"),e(\"$effect\"),e(\"$derived\"),e(\"$inspect\"),e(\"$props\"),e(\"$bindable\")}var es=new Map;function ts(e,t){var r=es.get(e);r||(r=new Set,es.set(e,r)),r.add(t)}function $o(e,t){Fe(()=>{var r=e.getRootNode(),n=r.host?r:r.head??r.ownerDocument.head;if(!n.querySelector(\"#\"+t.hash)){let o=rt(\"style\");o.id=t.hash,o.textContent=t.code,n.appendChild(o),u&&ts(t.hash,o)}})}var os=[...` \t\n\\r\\f\\xA0\\v\\uFEFF`];function is(e,t,r){var n=e==null?\"\":\"\"+e;if(t&&(n=n?n+\" \"+t:t),r){for(var o of Object.keys(r))if(r[o])n=n?n+\" \"+o:o;else if(n.length)for(var i=o.length,s=0;(s=n.indexOf(o,s))>=0;){var c=s+i;(s===0||os.includes(n[s-1]))&&(c===n.length||os.includes(n[c]))?n=(s===0?\"\":n.substring(0,s))+n.substring(c+1):s=c}}return n===\"\"?null:n}function Tn(e,t,r,n,o,i){var s=e[gr];if(b||s!==r||s===void 0){var c=is(r,n,i);(!b||c!==e.getAttribute(\"class\"))&&(c==null?e.removeAttribute(\"class\"):t?e.className=c:e.setAttribute(\"class\",c)),e[gr]=r}else if(i&&o!==i)for(var _ in i){var m=!!i[_];(o==null||m!==!!o[_])&&e.classList.toggle(_,m)}return i}var oa=Symbol(\"is custom element\"),ia=Symbol(\"is html\"),sa=In?\"link\":\"LINK\";function Hr(e,t,r,n){var o=aa(e);if(b&&(o[t]=e.getAttribute(t),t===\"src\"||t===\"srcset\"||t===\"href\"&&e.nodeName===sa)){n||la(e,t,r??\"\");return}o[t]!==(o[t]=r)&&(t===\"loading\"&&(e[Mo]=r),r==null?e.removeAttribute(t):typeof r!=\"string\"&&fa(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function aa(e){var t;return e[t=zr]??(e[t]={[oa]:e.nodeName.includes(\"-\"),[ia]:e.namespaceURI===Vr})}var ss=new Map;function fa(e){var t=e.getAttribute(\"is\")||e.nodeName,r=ss.get(t);if(r)return r;ss.set(t,r=[]);for(var n,o=e,i=Element.prototype;i!==o;){n=Cn(o);for(var s in n)n[s].set&&s!==\"innerHTML\"&&s!==\"textContent\"&&s!==\"innerText\"&&r.push(s);o=Kt(o)}return r}function la(e,t,r){u&&(t===\"srcset\"&&ca(e,r)||Ao(e.getAttribute(t)??\"\",r)||Zo(t,e.outerHTML.replace(e.innerHTML,e.innerHTML&&\"...\"),String(r)))}function Ao(e,t){return e===t?!0:new URL(e,document.baseURI).href===new URL(t,document.baseURI).href}function as(e){return e.split(\",\").map(t=>t.trim().split(\" \").filter(Boolean))}function ca(e,t){var r=as(e.srcset),n=as(t);return n.length===r.length&&n.every(([o,i],s)=>i===r[s][1]&&(Ao(r[s][0],o)||Ao(o,r[s][0])))}function An(e,t,r,n){var o=!yt||(r&2)!==0,i=(r&8)!==0,s=(r&16)!==0,c=n,_=!0,m=void 0,y=()=>s&&o?(m??(m=Yt(n)),$(m)):(_&&(_=!1,c=s?P(n):n),c);let p;if(i){var l=Q in e||vr in e;p=_e(e,t)?.set??(l&&t in e?G=>e[t]=G:void 0)}var f,d=!1;i?[f,d]=Bn(()=>e[t]):f=e[t],f===void 0&&n!==void 0&&(f=y(),p&&(o&&Vo(t),p(f)));var h;if(o?h=()=>{var G=e[t];return G===void 0?y():(_=!0,G)}:h=()=>{var G=e[t];return G!==void 0&&(c=void 0),G===void 0?c:G},o&&(r&4)===0)return h;if(p){var S=e.$$legacy;return(function(G,Ct){return arguments.length>0?((!o||!Ct||S||d)&&p(Ct?h():G),G):h()})}var Y=!1,q=((r&1)!==0?Yt:nr)(()=>(Y=!1,h()));u&&(q.label=t),i&&$(q);var Nt=v;return(function(G,Ct){if(arguments.length>0){let Wt=Ct?$(q):o&&i?Le(G):G;return H(q,Wt),Y=!0,c!==void 0&&(c=Wt),G}return Me&&Y||(Nt.f&16384)!==0?q.v:$(q)})}function ls(e){return new ko(e)}var vt,Pe,ko=class{constructor(t){E(this,vt);E(this,Pe);var r=new Map,n=(i,s)=>{var c=Qt(s,!1,!1);return r.set(i,c),c};let o=new Proxy({...t.props||{},$$events:{}},{get(i,s){return $(r.get(s)??n(s,Reflect.get(i,s)))},has(i,s){return s===vr?!0:($(r.get(s)??n(s,Reflect.get(i,s))),Reflect.has(i,s))},set(i,s,c){return H(r.get(s)??n(s,c),c),Reflect.set(i,s,c)}});x(this,Pe,(t.hydrate?Eo:hr)(t.component,{target:t.target,anchor:t.anchor,props:o,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError})),!ee&&(!t?.props?.$$host||t.sync===!1)&&dr(),x(this,vt,o.$$events);for(let i of Object.keys(a(this,Pe)))i===\"$set\"||i===\"$destroy\"||i===\"$on\"||oe(this,i,{get(){return a(this,Pe)[i]},set(s){a(this,Pe)[i]=s},enumerable:!0});a(this,Pe).$set=i=>{Object.assign(o,i)},a(this,Pe).$destroy=()=>{To(a(this,Pe))}}$set(t){a(this,Pe).$set(t)}$on(t,r){a(this,vt)[t]=a(this,vt)[t]||[];let n=(...o)=>r.call(this,...o);return a(this,vt)[t].push(n),()=>{a(this,vt)[t]=a(this,vt)[t].filter(o=>o!==n)}}$destroy(){a(this,Pe).$destroy()}};vt=new WeakMap,Pe=new WeakMap;var Ea;typeof HTMLElement==\"function\"&&(Ea=class extends HTMLElement{constructor(t,r,n){super();C(this,\"$$ctor\");C(this,\"$$s\");C(this,\"$$c\");C(this,\"$$cn\",!1);C(this,\"$$d\",{});C(this,\"$$r\",!1);C(this,\"$$p_d\",{});C(this,\"$$l\",{});C(this,\"$$l_u\",new Map);C(this,\"$$me\");C(this,\"$$shadowRoot\",null);this.$$ctor=t,this.$$s=r,n&&(this.$$shadowRoot=this.attachShadow(n))}addEventListener(t,r,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(r),this.$$c){let o=this.$$c.$on(t,r);this.$$l_u.set(r,o)}super.addEventListener(t,r,n)}removeEventListener(t,r,n){if(super.removeEventListener(t,r,n),this.$$c){let o=this.$$l_u.get(r);o&&(o(),this.$$l_u.delete(r))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(o){return i=>{let s=rt(\"slot\");o!==\"default\"&&(s.name=o),Yr(i,s)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;let r={},n=Ta(this);for(let o of this.$$s)o in n&&(o===\"default\"&&!this.$$d.children?(this.$$d.children=t(o),r.default=!0):r[o]=t(o));for(let o of this.attributes){let i=this.$$g_p(o.name);i in this.$$d||(this.$$d[i]=No(i,o.value,this.$$p_d,\"toProp\"))}for(let o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=ls({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:r,$$host:this}}),this.$$me=_o(()=>{ae(()=>{this.$$r=!0;for(let o of Nn(this.$$c)){if(!this.$$p_d[o]?.reflect)continue;this.$$d[o]=this.$$c[o];let i=No(o,this.$$d[o],this.$$p_d,\"toAttribute\");i==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,i)}this.$$r=!1})});for(let o in this.$$l)for(let i of this.$$l[o]){let s=this.$$c.$on(o,i);this.$$l_u.set(i,s)}this.$$l={}}}attributeChangedCallback(t,r,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=No(t,n,this.$$p_d,\"toProp\"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return Nn(this.$$p_d).find(r=>this.$$p_d[r].attribute===t||!this.$$p_d[r].attribute&&r.toLowerCase()===t)||t}});function No(e,t,r,n){let o=r[e]?.type;if(t=o===\"Boolean\"&&typeof t!=\"boolean\"?t!=null:t,!n||!r[e])return t;if(n===\"toAttribute\")switch(o){case\"Object\":case\"Array\":return t==null?null:JSON.stringify(t);case\"Boolean\":return t?\"\":null;case\"Number\":return t??null;default:return t}else switch(o){case\"Object\":case\"Array\":return t&&JSON.parse(t);case\"Boolean\":return t;case\"Number\":return t!=null?+t:t;default:return t}}function Ta(e){let t={};return e.childNodes.forEach(r=>{t[r.slot||\"default\"]=!0}),t}var Aa=xo('<button type=\"button\"><svg class=\"heart svelte-1gcc6z\" viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><path d=\"M12 21s-6.7-4.35-9.33-8.24C1.02 10.6 1.4 7.55 3.6 5.9c1.94-1.46 4.6-1.1 6.02.62L12 9l2.38-2.48c1.42-1.72 4.08-2.08 6.02-.62 2.2 1.65 2.58 4.7.93 6.86C18.7 16.65 12 21 12 21z\"></path></svg> <span class=\"count svelte-1gcc6z\"> </span></button>'),Sa={hash:\"svelte-1gcc6z\",code:\".like-button.svelte-1gcc6z {display:inline-flex;align-items:center;gap:0.5rem;height:2.5rem;padding:0 1rem;border-radius:0.75rem;border:1px solid rgba(148, 163, 184, 0.3);background:transparent;color:#94a3b8;font:inherit;font-size:0.875rem;font-weight:500;cursor:pointer;transition:all 150ms ease;}.like-button.svelte-1gcc6z:hover {background:rgba(239, 68, 68, 0.08);border-color:rgba(239, 68, 68, 0.3);color:#ef4444;}.like-button.liked.svelte-1gcc6z {background:rgba(239, 68, 68, 0.1);border-color:rgba(239, 68, 68, 0.4);color:#ef4444;}.heart.svelte-1gcc6z {transition:transform 200ms ease;}.like-button.liked.svelte-1gcc6z .heart:where(.svelte-1gcc6z) {transform:scale(1.15);}.count.svelte-1gcc6z {font-variant-numeric:tabular-nums;}\"},ka=function(t,r){$o(t,Sa);let n=An(r,\"initialCount\",3,128),o=An(r,\"initiallyLiked\",3,!1),i=Se(Le(o())),s=Se(Le(n()));function c(){H(i,!$(i)),H(s,$(s)+($(i)?1:-1))}var _=Aa();let m;var y=hn(_),p=lo(y,2),l=hn(p,!0);Tr(p),Tr(_),gn(f=>{Hr(_,\"aria-pressed\",$(i)),Hr(_,\"aria-label\",$(i)?\"Unlike\":\"Like\"),m=Tn(_,1,\"like-button svelte-1gcc6z\",null,m,{liked:$(i)}),Hr(y,\"fill\",$(i)?\"currentColor\":\"none\"),yo(l,f)},[()=>$(s).toLocaleString()]),bn(\"click\",_,c),Yr(t,_)};yn([\"click\"]);hr(ka,{target:document.body,props:{}});})();\n",
  },
];
