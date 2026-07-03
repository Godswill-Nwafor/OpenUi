"use client";
import { useState, useEffect } from "react";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info, Megaphone, Zap } from "lucide-react";

// InlineAlert
type AlertVariant = "info" | "success" | "warning" | "error";
const alertConfig: Record<AlertVariant, { icon: React.ReactNode; classes: string }> = {
  info: { icon: <Info size={16} />, classes: "bg-sky-500/10 border-sky-500/30 text-sky-400" },
  success: { icon: <CheckCircle size={16} />, classes: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" },
  warning: { icon: <AlertTriangle size={16} />, classes: "bg-amber-500/10 border-amber-500/30 text-amber-400" },
  error: { icon: <AlertCircle size={16} />, classes: "bg-red-500/10 border-red-500/30 text-red-400" },
};

export function InlineAlert({ variant = "info", title, message, dismissible = false }: { variant?: AlertVariant; title?: string; message: string; dismissible?: boolean }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  const { icon, classes } = alertConfig[variant];
  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl border ${classes}`} role="alert">
      <span className="shrink-0 mt-0.5">{icon}</span>
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold text-sm mb-0.5">{title}</p>}
        <p className="text-sm opacity-90">{message}</p>
      </div>
      {dismissible && (
        <button onClick={() => setVisible(false)} className="shrink-0 opacity-60 hover:opacity-100 transition-opacity"><X size={15} /></button>
      )}
    </div>
  );
}

// Toast
type ToastType = "success" | "error" | "info";
const toastConfig = {
  success: { icon: <CheckCircle size={16} />, color: "text-emerald-400", bg: "bg-emerald-500/15 border-emerald-500/20" },
  error: { icon: <AlertCircle size={16} />, color: "text-red-400", bg: "bg-red-500/15 border-red-500/20" },
  info: { icon: <AlertCircle size={16} />, color: "text-indigo-400", bg: "bg-indigo-500/15 border-indigo-500/20" },
};

export function Toast({ message, type = "success", duration = 4000, onClose }: { message: string; type?: ToastType; duration?: number; onClose?: () => void }) {
  const [visible, setVisible] = useState(true);
  const { icon, color, bg } = toastConfig[type];
  useEffect(() => {
    const timer = setTimeout(() => { setVisible(false); onClose?.(); }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);
  if (!visible) return null;
  return (
    <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border ${bg} backdrop-blur-sm shadow-xl shadow-black/20`}>
      <span className={color}>{icon}</span>
      <p className="text-sm text-white font-medium">{message}</p>
      <button onClick={() => { setVisible(false); onClose?.(); }} className="text-slate-400 hover:text-white transition-colors ml-2">
        <X size={14} />
      </button>
    </div>
  );
}

// SiteBanner
const bannerColors = { brand: "bg-indigo-600", warning: "bg-amber-500", info: "bg-gray-900 border-b border-white/10" };
export function SiteBanner({ message, cta, variant = "brand" }: { message: string; cta?: { label: string; href: string }; variant?: "brand" | "warning" | "info" }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className={`relative flex items-center justify-center px-4 py-2.5 text-white text-sm ${bannerColors[variant]}`}>
      <div className="flex items-center gap-2.5 max-w-3xl">
        <Megaphone size={15} className="shrink-0 opacity-80" />
        <span className="font-medium">{message}</span>
        {cta && <a href={cta.href} className="ml-2 underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity shrink-0">{cta.label} →</a>}
      </div>
      <button onClick={() => setVisible(false)} className="absolute right-3 opacity-70 hover:opacity-100 transition-opacity"><X size={15} /></button>
    </div>
  );
}

// ConfirmAlert
export function ConfirmAlert({ open, title, description, confirmLabel = "Confirm", cancelLabel = "Cancel", onConfirm, onCancel, variant = "danger" }: { open: boolean; title: string; description: string; confirmLabel?: string; cancelLabel?: string; onConfirm: () => void; onCancel: () => void; variant?: "danger" | "warning" }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative z-10 w-full max-w-sm rounded-2xl border border-white/10 bg-gray-900 p-6 shadow-2xl">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${variant === "danger" ? "bg-red-500/15 text-red-400" : "bg-amber-500/15 text-amber-400"}`}>
          <AlertTriangle size={22} />
        </div>
        <h2 className="font-semibold text-white text-lg mb-2">{title}</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 h-10 rounded-xl border border-white/10 text-slate-300 hover:bg-white/10 transition-colors text-sm font-medium">{cancelLabel}</button>
          <button onClick={onConfirm} className={`flex-1 h-10 rounded-xl text-white text-sm font-medium transition-colors ${variant === "danger" ? "bg-red-600 hover:bg-red-700" : "bg-amber-500 hover:bg-amber-600"}`}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}

// ProgressAlert
export function ProgressAlert({ message, duration = 5000, onDismiss }: { message: string; duration?: number; onDismiss?: () => void }) {
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
        <div className="h-full bg-emerald-500 transition-all duration-75 ease-linear" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

// ── Previews ─────────────────────────────────────────────────────────────────

export function InlineAlertPreview() {
  return (
    <div className="flex flex-col gap-3 p-4 bg-gray-950">
      <InlineAlert variant="info" message="Your plan resets on January 1st." dismissible />
      <InlineAlert variant="success" title="Payment successful!" message="Your subscription has been activated." />
      <InlineAlert variant="warning" message="You have 3 days left on your trial." dismissible />
      <InlineAlert variant="error" title="Authentication failed" message="Invalid email or password." />
    </div>
  );
}

export function ToastAlertPreview() {
  const [toasts, setToasts] = useState<{ id: number; message: string; type: ToastType }[]>([
    { id: 1, message: "Changes saved successfully!", type: "success" },
    { id: 2, message: "Update available.", type: "info" },
  ]);
  return (
    <div className="flex flex-col gap-3 p-4 bg-gray-950">
      <div className="flex gap-2 mb-2">
        {(["success", "error", "info"] as ToastType[]).map(t => (
          <button key={t} onClick={() => setToasts(prev => [...prev, { id: Date.now(), message: t === "success" ? "Saved!" : t === "error" ? "Error occurred" : "FYI", type: t }])}
            className={`px-3 py-1.5 rounded-lg text-white text-xs font-medium ${t === "success" ? "bg-emerald-600" : t === "error" ? "bg-red-600" : "bg-indigo-600"}`}>
            {t}
          </button>
        ))}
      </div>
      {toasts.map(t => (
        <Toast key={t.id} message={t.message} type={t.type} duration={6000} onClose={() => setToasts(p => p.filter(x => x.id !== t.id))} />
      ))}
    </div>
  );
}

export function BannerAlertPreview() {
  return (
    <div className="flex flex-col gap-2 bg-gray-950 p-4">
      <SiteBanner message="🎉 OpenUI Hub v1.0 is now live!" cta={{ label: "Read the announcement", href: "#" }} variant="brand" />
      <div className="mt-2">
        <SiteBanner message="⚠️ Scheduled maintenance on Sunday 2am UTC" variant="warning" />
      </div>
    </div>
  );
}

export function ConfirmAlertPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-950">
      <button onClick={() => setOpen(true)} className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-medium">Delete Account</button>
      <p className="text-xs text-slate-500">Click to open confirm dialog</p>
      <ConfirmAlert
        open={open} variant="danger"
        title="Delete Account"
        description="This will permanently delete your account and all data. This action cannot be undone."
        confirmLabel="Yes, Delete"
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </div>
  );
}

export function ProgressAlertPreview() {
  const [show, setShow] = useState(true);
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-950">
      {!show && <button onClick={() => setShow(true)} className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm">Show Again</button>}
      {show && <ProgressAlert message="File uploaded successfully!" duration={8000} onDismiss={() => setShow(false)} />}
    </div>
  );
}
