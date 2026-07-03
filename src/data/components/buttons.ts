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
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
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
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
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
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
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
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
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
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
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
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
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
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
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
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
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
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
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
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
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
];
