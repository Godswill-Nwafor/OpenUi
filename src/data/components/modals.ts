import type { ComponentDoc } from "@/types";

export const modalComponents: ComponentDoc[] = [
  {
    metadata: {
      id: "base-modal",
      name: "Base Modal",
      description: "A clean, accessible modal dialog with backdrop and keyboard close support.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "modals",
      tags: ["modal", "dialog", "overlay", "popup", "accessible"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 2876, likes: 241,
    },
    code: `"use client";
import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg", xl: "max-w-2xl" };

export function Modal({ open, onClose, title, children, size = "md" }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        role="dialog" aria-modal="true" aria-labelledby={title ? "modal-title" : undefined}
        className={\`relative z-10 w-full \${sizes[size]} rounded-2xl border border-white/10
          bg-gray-900 shadow-2xl shadow-black/50 animate-in fade-in zoom-in-95 duration-200\`}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <h2 id="modal-title" className="font-semibold text-white">{title}</h2>
            <button onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400
                hover:text-white hover:bg-white/10 transition-colors">
              <X size={16} />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}`,
    demoCode: `"use client";
import { useState } from "react";
import { Modal } from "./Modal";

export default function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}
        className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium">
        Open Modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Welcome to OpenUI Hub" size="md">
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          OpenUI Hub is an open-source collection of beautiful, production-ready React components.
          Copy, customize, and ship in minutes.
        </p>
        <div className="flex gap-3 justify-end">
          <button onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-xl border border-white/10 text-slate-300 text-sm hover:bg-white/5">
            Cancel
          </button>
          <button onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm">
            Get Started
          </button>
        </div>
      </Modal>
    </>
  );
}`,
    documentation: "A composable base modal. Closes on Escape key and backdrop click. Locks body scroll while open.",
    props: [
      { name: "open", type: "boolean", required: true, description: "Controls modal visibility." },
      { name: "onClose", type: "() => void", required: true, description: "Called on backdrop click or Escape key." },
      { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', required: false, description: "Max-width size of the modal." },
    ],
  },
  {
    metadata: {
      id: "image-modal",
      name: "Image Lightbox Modal",
      description: "A lightbox modal for full-size image previews with navigation.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "modals",
      tags: ["modal", "lightbox", "image", "gallery", "preview"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 1432, likes: 118,
    },
    code: `"use client";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex = 0, open, onClose }: LightboxProps) {
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
      {/* Close */}
      <button onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
        <X size={18} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      {images.length > 1 && (
        <button onClick={() => setIndex(i => (i - 1 + images.length) % images.length)}
          className="absolute left-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Image */}
      <img
        src={images[index].src} alt={images[index].alt}
        className="max-w-full max-h-screen object-contain p-12 select-none"
      />

      {/* Next */}
      {images.length > 1 && (
        <button onClick={() => setIndex(i => (i + 1) % images.length)}
          className="absolute right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
}`,
    demoCode: `"use client";
import { useState } from "react";
import { Lightbox } from "./Lightbox";

const images = [
  { src: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800", alt: "Code" },
  { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800", alt: "UI" },
  { src: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800", alt: "Design" },
];

export default function Demo() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  return (
    <>
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button key={i} onClick={() => { setIdx(i); setOpen(true); }} className="w-24 h-16 rounded-lg overflow-hidden">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-110 transition-transform" />
          </button>
        ))}
      </div>
      <Lightbox images={images} initialIndex={idx} open={open} onClose={() => setOpen(false)} />
    </>
  );
}`,
    documentation: "A full-screen image lightbox with keyboard navigation (← →, Escape).",
    props: [
      { name: "images", type: "{ src: string; alt: string }[]", required: true, description: "Array of images to display." },
      { name: "initialIndex", type: "number", default: "0", required: false, description: "Starting image index." },
    ],
  },
  {
    metadata: {
      id: "command-palette",
      name: "Command Palette Modal",
      description: "A keyboard-driven command palette (⌘K) modal for quick navigation.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "modals",
      tags: ["modal", "command", "palette", "search", "keyboard", "cmdk"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 3120, likes: 287,
    },
    code: `"use client";
import { useEffect, useState, useRef } from "react";
import { Search, Command, ArrowRight, FileText, Layers, Settings } from "lucide-react";

interface CommandItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  category?: string;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  items: CommandItem[];
}

export function CommandPalette({ open, onClose, items }: CommandPaletteProps) {
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
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
          <Search size={16} className="text-slate-500 shrink-0" />
          <input
            ref={inputRef} value={query} onChange={e => { setQuery(e.target.value); setSelected(0); }}
            placeholder="Search commands..." className="flex-1 bg-transparent text-white placeholder:text-slate-500 outline-none text-sm"
          />
          <kbd className="px-1.5 py-0.5 rounded text-xs text-slate-500 border border-white/10 font-mono">ESC</kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <p className="text-center text-sm text-slate-500 py-8">No commands found.</p>
          ) : filtered.map((item, i) => (
            <button
              key={item.id}
              onClick={() => { item.action(); onClose(); }}
              onMouseEnter={() => setSelected(i)}
              className={\`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors
                \${i === selected ? "bg-indigo-600/20 text-white" : "text-slate-300 hover:bg-white/5"}\`}
            >
              <span className={\`w-8 h-8 rounded-lg flex items-center justify-center text-sm
                \${i === selected ? "bg-indigo-600/30 text-indigo-400" : "bg-white/10 text-slate-400"}\`}>
                {item.icon}
              </span>
              <span className="flex-1 text-sm">{item.label}</span>
              {item.category && <span className="text-xs text-slate-600">{item.category}</span>}
              {i === selected && <ArrowRight size={13} className="text-slate-500" />}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-4 py-2 flex items-center gap-4 text-xs text-slate-600">
          <span className="flex items-center gap-1"><kbd className="border border-white/10 rounded px-1 font-mono">↑↓</kbd> navigate</span>
          <span className="flex items-center gap-1"><kbd className="border border-white/10 rounded px-1 font-mono">↵</kbd> select</span>
          <span className="flex items-center gap-1"><kbd className="border border-white/10 rounded px-1 font-mono">esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}`,
    demoCode: `"use client";
import { useEffect, useState } from "react";
import { CommandPalette } from "./CommandPalette";
import { FileText, Layers, Settings, Home } from "lucide-react";

const commands = [
  { id: "home", label: "Go to Home", icon: <Home size={14} />, action: () => alert("Navigate: Home"), category: "Navigation" },
  { id: "components", label: "Browse Components", icon: <Layers size={14} />, action: () => alert("Navigate: Components"), category: "Navigation" },
  { id: "docs", label: "Open Documentation", icon: <FileText size={14} />, action: () => alert("Navigate: Docs"), category: "Navigation" },
  { id: "settings", label: "Open Settings", icon: <Settings size={14} />, action: () => alert("Navigate: Settings"), category: "System" },
];

export default function Demo() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen(true); } };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);
  return (
    <>
      <button onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-gray-900 text-slate-400 text-sm">
        <span>Search commands...</span>
        <kbd className="ml-4 flex items-center gap-1 text-xs border border-white/10 rounded px-1.5 py-0.5">⌘K</kbd>
      </button>
      <CommandPalette open={open} onClose={() => setOpen(false)} items={commands} />
    </>
  );
}`,
    documentation: "A ⌘K command palette with keyboard navigation. Bind ⌘K/Ctrl+K to open it.",
    props: [
      { name: "items", type: "CommandItem[]", required: true, description: "Array of command items with id, label, icon, and action." },
    ],
  },
  {
    metadata: {
      id: "drawer-modal",
      name: "Side Drawer",
      description: "A slide-in drawer panel from the right or left side.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "modals",
      tags: ["modal", "drawer", "panel", "sidebar", "slide"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 1765, likes: 143,
    },
    code: `"use client";
import { useEffect } from "react";
import { X } from "lucide-react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  side?: "left" | "right";
  width?: string;
}

export function Drawer({ open, onClose, title, children, side = "right", width = "w-80" }: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [open, onClose]);

  return (
    <div className={\`fixed inset-0 z-50 flex \${side === "right" ? "justify-end" : "justify-start"} \${open ? "pointer-events-auto" : "pointer-events-none"}\`}>
      {/* Backdrop */}
      <div
        className={\`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 \${open ? "opacity-100" : "opacity-0"}\`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={\`relative z-10 \${width} h-full bg-gray-900 border-l border-white/10 shadow-2xl
          flex flex-col transition-transform duration-300 ease-out
          \${open
            ? "translate-x-0"
            : side === "right" ? "translate-x-full" : "-translate-x-full"
          }\`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
          {title && <h2 className="font-semibold text-white">{title}</h2>}
          <button onClick={onClose}
            className="ml-auto w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
}`,
    demoCode: `"use client";
import { useState } from "react";
import { Drawer } from "./Drawer";

export default function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}
        className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium">
        Open Drawer
      </button>
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
    </>
  );
}`,
    documentation: "A slide-in drawer panel. Supports left and right sides. Closes on Escape and backdrop click.",
    props: [
      { name: "side", type: '"left" | "right"', default: '"right"', required: false, description: "Which side the drawer slides in from." },
      { name: "width", type: "string", default: '"w-80"', required: false, description: "Tailwind width class for the drawer panel." },
    ],
  },
  {
    metadata: {
      id: "fullscreen-modal",
      name: "Fullscreen Modal",
      description: "A fullscreen takeover modal for immersive flows like onboarding.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "modals",
      tags: ["modal", "fullscreen", "onboarding", "wizard", "takeover"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 987, likes: 79,
    },
    code: `"use client";
import { useEffect } from "react";
import { X, ChevronRight } from "lucide-react";

interface FullscreenModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showCloseButton?: boolean;
}

export function FullscreenModal({ open, onClose, children, showCloseButton = true }: FullscreenModalProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-950 flex flex-col animate-in fade-in duration-200">
      {showCloseButton && (
        <div className="flex justify-end p-4">
          <button onClick={onClose}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-sm">
            <X size={15} /> Close
          </button>
        </div>
      )}
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}`,
    demoCode: `"use client";
import { useState } from "react";
import { FullscreenModal } from "./FullscreenModal";
import { Layers, ArrowRight } from "lucide-react";

export default function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}
        className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium">
        Start Onboarding
      </button>
      <FullscreenModal open={open} onClose={() => setOpen(false)}>
        <div className="flex items-center justify-center min-h-full p-8">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mx-auto mb-6">
              <Layers size={28} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">Welcome to OpenUI Hub</h1>
            <p className="text-slate-400 leading-relaxed mb-8">Let's get you set up with beautiful components in minutes.</p>
            <button onClick={() => setOpen(false)}
              className="flex items-center gap-2 mx-auto px-7 py-3 rounded-xl bg-indigo-600 text-white font-medium">
              Get Started <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </FullscreenModal>
    </>
  );
}`,
    documentation: "A fullscreen modal overlay for onboarding, wizard flows, or immersive UI states.",
    props: [
      { name: "showCloseButton", type: "boolean", default: "true", required: false, description: "Shows a close button in the top-right corner." },
    ],
  },
];
