import type { ComponentDoc } from "@/types";

export const alertComponents: ComponentDoc[] = [
  {
    metadata: {
      id: "inline-alert",
      name: "Inline Alert",
      description: "A compact inline alert banner with icon, message, and optional dismiss.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "alerts",
      tags: ["alert", "notification", "banner", "inline", "status"],
      createdAt: "2024-11-01", updatedAt: "2024-11-01",
      status: "approved", downloads: 1876, likes: 154,
    },
    code: `"use client";
import { useState } from "react";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  message: string;
  dismissible?: boolean;
}

const config: Record<AlertVariant, { icon: React.ReactNode; classes: string }> = {
  info: { icon: <Info size={16} />, classes: "bg-sky-500/10 border-sky-500/30 text-sky-400" },
  success: { icon: <CheckCircle size={16} />, classes: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" },
  warning: { icon: <AlertTriangle size={16} />, classes: "bg-amber-500/10 border-amber-500/30 text-amber-400" },
  error: { icon: <AlertCircle size={16} />, classes: "bg-red-500/10 border-red-500/30 text-red-400" },
};

export function InlineAlert({ variant = "info", title, message, dismissible = false }: AlertProps) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  const { icon, classes } = config[variant];

  return (
    <div className={\`flex items-start gap-3 p-4 rounded-xl border \${classes}\`} role="alert">
      <span className="shrink-0 mt-0.5">{icon}</span>
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold text-sm mb-0.5">{title}</p>}
        <p className="text-sm opacity-90">{message}</p>
      </div>
      {dismissible && (
        <button onClick={() => setVisible(false)} className="shrink-0 opacity-60 hover:opacity-100 transition-opacity">
          <X size={15} />
        </button>
      )}
    </div>
  );
}`,
    demoCode: `import { InlineAlert } from "./InlineAlert";

export default function Demo() {
  return (
    <div className="flex flex-col gap-3 max-w-md">
      <InlineAlert variant="info" message="Your plan resets on January 1st." dismissible />
      <InlineAlert variant="success" title="Payment successful!" message="Your subscription has been activated." />
      <InlineAlert variant="warning" message="You have 3 days left on your trial." dismissible />
      <InlineAlert variant="error" title="Authentication failed" message="Invalid email or password." />
    </div>
  );
}`,
    documentation: "A dismissible inline alert with four variants: info, success, warning, error.",
    props: [
      { name: "variant", type: '"info" | "success" | "warning" | "error"', default: '"info"', required: false, description: "Alert color/icon variant." },
      { name: "title", type: "string", required: false, description: "Optional bold title above the message." },
      { name: "dismissible", type: "boolean", default: "false", required: false, description: "Shows a close (X) button." },
    ],
  },
  {
    metadata: {
      id: "toast-alert",
      name: "Toast Notification",
      description: "A fixed-position toast notification that auto-dismisses.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "alerts",
      tags: ["alert", "toast", "notification", "auto-dismiss", "fixed"],
      createdAt: "2024-11-01", updatedAt: "2024-11-01",
      status: "approved", downloads: 2341, likes: 198,
    },
    code: `"use client";
import { useEffect, useState } from "react";
import { CheckCircle, AlertCircle, X } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
}

const toastConfig = {
  success: { icon: <CheckCircle size={16} />, color: "text-emerald-400", bg: "bg-emerald-500/15 border-emerald-500/20" },
  error: { icon: <AlertCircle size={16} />, color: "text-red-400", bg: "bg-red-500/15 border-red-500/20" },
  info: { icon: <AlertCircle size={16} />, color: "text-indigo-400", bg: "bg-indigo-500/15 border-indigo-500/20" },
};

export function Toast({ message, type = "success", duration = 4000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(true);
  const { icon, color, bg } = toastConfig[type];

  useEffect(() => {
    const timer = setTimeout(() => { setVisible(false); onClose?.(); }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className={\`fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3.5
      rounded-xl border \${bg} backdrop-blur-sm shadow-xl shadow-black/20
      animate-in slide-in-from-bottom-3 duration-300\`}>
      <span className={color}>{icon}</span>
      <p className="text-sm text-white font-medium">{message}</p>
      <button onClick={() => { setVisible(false); onClose?.(); }}
        className="text-slate-400 hover:text-white transition-colors ml-2">
        <X size={14} />
      </button>
    </div>
  );
}`,
    demoCode: `"use client";
import { useState } from "react";
import { Toast } from "./Toast";

export default function Demo() {
  const [toasts, setToasts] = useState<{ id: number; message: string; type: "success" | "error" | "info" }[]>([]);
  let id = 0;

  const add = (type: "success" | "error" | "info") => {
    const messages = { success: "Changes saved successfully!", error: "Something went wrong.", info: "Update available." };
    setToasts(prev => [...prev, { id: ++id, message: messages[type], type }]);
  };

  return (
    <div className="flex gap-3">
      <button onClick={() => add("success")} className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm">Success</button>
      <button onClick={() => add("error")} className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm">Error</button>
      <button onClick={() => add("info")} className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">Info</button>
      {toasts.map(t => <Toast key={t.id} message={t.message} type={t.type} onClose={() => setToasts(p => p.filter(x => x.id !== t.id))} />)}
    </div>
  );
}`,
    documentation: "A fixed toast notification. Auto-dismisses after `duration` ms. Call `onClose` to remove from state.",
    props: [
      { name: "message", type: "string", required: true, description: "Toast message text." },
      { name: "type", type: '"success" | "error" | "info"', default: '"success"', required: false, description: "Color theme." },
      { name: "duration", type: "number", default: "4000", required: false, description: "Auto-dismiss delay in milliseconds." },
    ],
  },
  {
    metadata: {
      id: "banner-alert",
      name: "Site Banner",
      description: "A full-width top-of-page announcement banner.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "alerts",
      tags: ["alert", "banner", "announcement", "site-wide", "promo"],
      createdAt: "2024-11-01", updatedAt: "2024-11-01",
      status: "approved", downloads: 987, likes: 78,
    },
    code: `"use client";
import { useState } from "react";
import { X, Megaphone } from "lucide-react";

interface BannerProps {
  message: string;
  cta?: { label: string; href: string };
  variant?: "brand" | "warning" | "info";
}

const bannerColors = {
  brand: "bg-indigo-600",
  warning: "bg-amber-500",
  info: "bg-gray-900 border-b border-white/10",
};

export function SiteBanner({ message, cta, variant = "brand" }: BannerProps) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className={\`relative flex items-center justify-center px-4 py-2.5 text-white text-sm \${bannerColors[variant]}\`}>
      <div className="flex items-center gap-2.5 max-w-3xl">
        <Megaphone size={15} className="shrink-0 opacity-80" />
        <span className="font-medium">{message}</span>
        {cta && (
          <a href={cta.href}
            className="ml-2 underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity shrink-0">
            {cta.label} →
          </a>
        )}
      </div>
      <button onClick={() => setVisible(false)}
        className="absolute right-3 opacity-70 hover:opacity-100 transition-opacity">
        <X size={15} />
      </button>
    </div>
  );
}`,
    demoCode: `import { SiteBanner } from "./SiteBanner";

export default function Demo() {
  return (
    <SiteBanner
      message="🎉 OpenUI Hub v1.0 is now live!"
      cta={{ label: "Read the announcement", href: "/blog/v1" }}
      variant="brand"
    />
  );
}`,
    documentation: "A dismissible full-width banner for site-wide announcements. Place above the header.",
    props: [
      { name: "variant", type: '"brand" | "warning" | "info"', default: '"brand"', required: false, description: "Color scheme." },
      { name: "cta", type: "{ label: string; href: string }", required: false, description: "Optional call-to-action link." },
    ],
  },
  {
    metadata: {
      id: "confirm-alert",
      name: "Confirm Alert Dialog",
      description: "An accessible confirmation dialog for destructive actions.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "alerts",
      tags: ["alert", "dialog", "confirm", "destructive", "modal"],
      createdAt: "2024-11-01", updatedAt: "2024-11-01",
      status: "approved", downloads: 1432, likes: 112,
    },
    code: `"use client";
import { AlertTriangle } from "lucide-react";

interface ConfirmAlertProps {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  variant?: "danger" | "warning";
}

export function ConfirmAlert({
  open, title, description, confirmLabel = "Confirm", cancelLabel = "Cancel",
  onConfirm, onCancel, variant = "danger"
}: ConfirmAlertProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative z-10 w-full max-w-sm rounded-2xl border border-white/10 bg-gray-900 p-6 shadow-2xl">
        <div className={\`w-12 h-12 rounded-2xl flex items-center justify-center mb-4
          \${variant === "danger" ? "bg-red-500/15 text-red-400" : "bg-amber-500/15 text-amber-400"}\`}>
          <AlertTriangle size={22} />
        </div>
        <h2 className="font-semibold text-white text-lg mb-2">{title}</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
        <div className="flex gap-3">
          <button onClick={onCancel}
            className="flex-1 h-10 rounded-xl border border-white/10 text-slate-300
              hover:bg-white/10 transition-colors text-sm font-medium">
            {cancelLabel}
          </button>
          <button onClick={onConfirm}
            className={\`flex-1 h-10 rounded-xl text-white text-sm font-medium transition-colors
              \${variant === "danger"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-amber-500 hover:bg-amber-600"}\`}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}`,
    demoCode: `"use client";
import { useState } from "react";
import { ConfirmAlert } from "./ConfirmAlert";

export default function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm">
        Delete Account
      </button>
      <ConfirmAlert
        open={open} variant="danger"
        title="Delete Account"
        description="This will permanently delete your account and all data. This action cannot be undone."
        confirmLabel="Yes, Delete"
        onConfirm={() => { setOpen(false); alert("Deleted!"); }}
        onCancel={() => setOpen(false)}
      />
    </>
  );
}`,
    documentation: "A blocking confirmation dialog. Click the backdrop to cancel. Use `variant='danger'` for red destructive confirm.",
    props: [
      { name: "open", type: "boolean", required: true, description: "Controls visibility." },
      { name: "onConfirm", type: "() => void", required: true, description: "Called when user clicks the confirm button." },
      { name: "onCancel", type: "() => void", required: true, description: "Called when user cancels or clicks backdrop." },
    ],
  },
  {
    metadata: {
      id: "progress-alert",
      name: "Progress Alert",
      description: "An alert with an animated progress bar for timed notifications.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "alerts",
      tags: ["alert", "progress", "timer", "animated", "notification"],
      createdAt: "2024-11-01", updatedAt: "2024-11-01",
      status: "approved", downloads: 743, likes: 58,
    },
    code: `"use client";
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

interface ProgressAlertProps {
  message: string;
  duration?: number;
  onDismiss?: () => void;
}

export function ProgressAlert({ message, duration = 5000, onDismiss }: ProgressAlertProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = 50;
    const step = (interval / duration) * 100;
    const timer = setInterval(() => {
      setProgress(p => {
        if (p <= 0) { clearInterval(timer); onDismiss?.(); return 0; }
        return p - step;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [duration, onDismiss]);

  return (
    <div className="w-80 rounded-xl border border-white/10 bg-gray-900 overflow-hidden shadow-xl">
      <div className="flex items-center gap-3 px-4 py-3.5">
        <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
          <CheckCircle size={16} />
        </div>
        <p className="text-sm text-white font-medium">{message}</p>
      </div>
      <div className="h-0.5 bg-gray-800">
        <div
          className="h-full bg-emerald-500 transition-all duration-75 ease-linear"
          style={{ width: \`\${progress}%\` }}
        />
      </div>
    </div>
  );
}`,
    demoCode: `"use client";
import { useState } from "react";
import { ProgressAlert } from "./ProgressAlert";

export default function Demo() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col items-start gap-4">
      <button onClick={() => setShow(true)}
        className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm">
        Show Progress Alert
      </button>
      {show && (
        <ProgressAlert
          message="File uploaded successfully!"
          duration={5000}
          onDismiss={() => setShow(false)}
        />
      )}
    </div>
  );
}`,
    documentation: "A timed alert with a draining progress bar. Auto-calls `onDismiss` when the timer runs out.",
    props: [
      { name: "duration", type: "number", default: "5000", required: false, description: "Duration in ms before auto-dismissal." },
      { name: "onDismiss", type: "() => void", required: false, description: "Callback when timer expires." },
    ],
  },
];
