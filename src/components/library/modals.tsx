"use client";
import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Search, ArrowRight, FileText, Layers, Settings, Home } from "lucide-react";

// Modal
const sizes = { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg", xl: "max-w-2xl" };
export function Modal({ open, onClose, title, children, size = "md" }: { open: boolean; onClose: () => void; title?: string; children: React.ReactNode; size?: "sm" | "md" | "lg" | "xl" }) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div role="dialog" aria-modal="true" aria-labelledby={title ? "modal-title" : undefined}
        className={`relative z-10 w-full ${sizes[size]} rounded-2xl border border-white/10 bg-gray-900 shadow-2xl shadow-black/50`}>
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <h2 id="modal-title" className="font-semibold text-white">{title}</h2>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"><X size={16} /></button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// Lightbox
export function Lightbox({ images, initialIndex = 0, open, onClose }: { images: { src: string; alt: string }[]; initialIndex?: number; open: boolean; onClose: () => void }) {
  const [index, setIndex] = useState(initialIndex);
  useEffect(() => { if (open) setIndex(initialIndex); }, [open, initialIndex]);
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex(i => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex(i => (i + 1) % images.length);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, images.length, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
      <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"><X size={18} /></button>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">{index + 1} / {images.length}</div>
      {images.length > 1 && <button onClick={() => setIndex(i => (i - 1 + images.length) % images.length)} className="absolute left-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><ChevronLeft size={20} /></button>}
      <img src={images[index].src} alt={images[index].alt} className="max-w-full max-h-screen object-contain p-12 select-none" />
      {images.length > 1 && <button onClick={() => setIndex(i => (i + 1) % images.length)} className="absolute right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><ChevronRight size={20} /></button>}
    </div>
  );
}

// CommandPalette
interface CommandItem { id: string; label: string; icon: React.ReactNode; action: () => void; category?: string; }
export function CommandPalette({ open, onClose, items }: { open: boolean; onClose: () => void; items: CommandItem[] }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const filtered = items.filter(i => i.label.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => { if (open) { setQuery(""); setSelected(0); setTimeout(() => inputRef.current?.focus(), 50); } }, [open]);
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") { e.preventDefault(); setSelected(s => Math.min(s + 1, filtered.length - 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)); }
      if (e.key === "Enter" && filtered[selected]) { filtered[selected].action(); onClose(); }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, filtered, selected, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-gray-900 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
          <Search size={16} className="text-slate-500 shrink-0" />
          <input ref={inputRef} value={query} onChange={e => { setQuery(e.target.value); setSelected(0); }}
            placeholder="Search commands..." className="flex-1 bg-transparent text-white placeholder:text-slate-500 outline-none text-sm" />
          <kbd className="px-1.5 py-0.5 rounded text-xs text-slate-500 border border-white/10 font-mono">ESC</kbd>
        </div>
        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <p className="text-center text-sm text-slate-500 py-8">No commands found.</p>
          ) : filtered.map((item, i) => (
            <button key={item.id} onClick={() => { item.action(); onClose(); }} onMouseEnter={() => setSelected(i)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${i === selected ? "bg-indigo-600/20 text-white" : "text-slate-300 hover:bg-white/5"}`}>
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${i === selected ? "bg-indigo-600/30 text-indigo-400" : "bg-white/10 text-slate-400"}`}>{item.icon}</span>
              <span className="flex-1 text-sm">{item.label}</span>
              {item.category && <span className="text-xs text-slate-600">{item.category}</span>}
              {i === selected && <ArrowRight size={13} className="text-slate-500" />}
            </button>
          ))}
        </div>
        <div className="border-t border-white/10 px-4 py-2 flex items-center gap-4 text-xs text-slate-600">
          <span className="flex items-center gap-1"><kbd className="border border-white/10 rounded px-1 font-mono">↑↓</kbd> navigate</span>
          <span className="flex items-center gap-1"><kbd className="border border-white/10 rounded px-1 font-mono">↵</kbd> select</span>
          <span className="flex items-center gap-1"><kbd className="border border-white/10 rounded px-1 font-mono">esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}

// Drawer
export function Drawer({ open, onClose, title, children, side = "right", width = "w-80" }: { open: boolean; onClose: () => void; title?: string; children: React.ReactNode; side?: "left" | "right"; width?: string }) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [open, onClose]);
  return (
    <div className={`fixed inset-0 z-50 flex ${side === "right" ? "justify-end" : "justify-start"} ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} onClick={onClose} />
      <div className={`relative z-10 ${width} h-full bg-gray-900 border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${open ? "translate-x-0" : side === "right" ? "translate-x-full" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
          {title && <h2 className="font-semibold text-white">{title}</h2>}
          <button onClick={onClose} className="ml-auto w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"><X size={16} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
}

// FullscreenModal
export function FullscreenModal({ open, onClose, children, showCloseButton = true }: { open: boolean; onClose: () => void; children: React.ReactNode; showCloseButton?: boolean }) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-gray-950 flex flex-col">
      {showCloseButton && (
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-sm"><X size={15} /> Close</button>
        </div>
      )}
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}

// ── Previews ─────────────────────────────────────────────────────────────────

export function BaseModalPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-950">
      <button onClick={() => setOpen(true)} className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium">Open Modal</button>
      <p className="text-xs text-slate-500">Click to open dialog</p>
      <Modal open={open} onClose={() => setOpen(false)} title="Welcome to OpenUI Hub" size="md">
        <p className="text-slate-400 text-sm leading-relaxed mb-6">OpenUI Hub is an open-source collection of beautiful, production-ready React components. Copy, customize, and ship in minutes.</p>
        <div className="flex gap-3 justify-end">
          <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-xl border border-white/10 text-slate-300 text-sm hover:bg-white/5">Cancel</button>
          <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm">Get Started</button>
        </div>
      </Modal>
    </div>
  );
}

export function ImageModalPreview() {
  const [open, setOpen] = useState(false);
  const images = [
    { src: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800", alt: "Code" },
    { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800", alt: "UI" },
    { src: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800", alt: "Design" },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-950">
      <div className="flex gap-2">
        {images.map((img, i) => (
          <button key={i} onClick={() => setOpen(true)} className="w-20 h-14 rounded-lg overflow-hidden">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-110 transition-transform" />
          </button>
        ))}
      </div>
      <p className="text-xs text-slate-500">Click an image to view lightbox</p>
      <Lightbox images={images} initialIndex={0} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export function CommandPalettePreview() {
  const [open, setOpen] = useState(false);
  const commands: CommandItem[] = [
    { id: "home", label: "Go to Home", icon: <Home size={14} />, action: () => {}, category: "Navigation" },
    { id: "components", label: "Browse Components", icon: <Layers size={14} />, action: () => {}, category: "Navigation" },
    { id: "docs", label: "Open Documentation", icon: <FileText size={14} />, action: () => {}, category: "Navigation" },
    { id: "settings", label: "Open Settings", icon: <Settings size={14} />, action: () => {}, category: "System" },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-950">
      <button onClick={() => setOpen(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-gray-900 text-slate-400 text-sm">
        <span>Search commands...</span>
        <kbd className="ml-4 flex items-center gap-1 text-xs border border-white/10 rounded px-1.5 py-0.5">⌘K</kbd>
      </button>
      <CommandPalette open={open} onClose={() => setOpen(false)} items={commands} />
    </div>
  );
}

export function DrawerModalPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-950">
      <button onClick={() => setOpen(true)} className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium">Open Drawer</button>
      <p className="text-xs text-slate-500">Slides in from right</p>
      <Drawer open={open} onClose={() => setOpen(false)} title="Cart (3 items)" side="right">
        <div className="space-y-4">
          {["Component Pack", "Pro License", "Icon Set"].map(item => (
            <div key={item} className="flex items-center justify-between py-3 border-b border-white/5">
              <span className="text-sm text-slate-300">{item}</span>
              <span className="text-sm font-medium text-white">$29</span>
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
}

export function FullscreenModalPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-950">
      <button onClick={() => setOpen(true)} className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium">Start Onboarding</button>
      <p className="text-xs text-slate-500">Full-screen takeover</p>
      <FullscreenModal open={open} onClose={() => setOpen(false)}>
        <div className="flex items-center justify-center min-h-full p-8">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mx-auto mb-6"><Layers size={28} className="text-white" /></div>
            <h1 className="text-3xl font-bold text-white mb-3">Welcome to OpenUI Hub</h1>
            <p className="text-slate-400 leading-relaxed mb-8">Let&apos;s get you set up with beautiful components in minutes.</p>
            <button onClick={() => setOpen(false)} className="flex items-center gap-2 mx-auto px-7 py-3 rounded-xl bg-indigo-600 text-white font-medium">Get Started <ArrowRight size={16} /></button>
          </div>
        </div>
      </FullscreenModal>
    </div>
  );
}
