"use client";
import { useState, useEffect } from "react";
import { Layers, Menu, X, LayoutDashboard, Settings, Users, Bell, ChevronLeft, LogOut, Search, ChevronDown, ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

// GlassNavbar
const navLinks = ["Products", "Pricing", "Docs", "Blog"];
export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-950/80 backdrop-blur-xl border-b border-white/10 shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center"><Layers size={16} className="text-white" /></div>
          <span className="font-bold text-white">OpenUI</span>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => <a key={link} href="#" className="px-3.5 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/10 transition-colors">{link}</a>)}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2">Sign in</a>
          <a href="#" className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors">Get started</a>
        </div>
        <button onClick={() => setOpen(v => !v)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-gray-950/95 backdrop-blur-xl px-4 py-3 space-y-1">
          {navLinks.map(link => <a key={link} href="#" className="block px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/10 transition-colors">{link}</a>)}
          <a href="#" className="block mt-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium text-center">Get started</a>
        </div>
      )}
    </header>
  );
}

// SidebarNav
const sidebarItems = [
  { icon: <LayoutDashboard size={18} />, label: "Dashboard", href: "#" },
  { icon: <Layers size={18} />, label: "Components", href: "#" },
  { icon: <Users size={18} />, label: "Users", href: "#" },
  { icon: <Bell size={18} />, label: "Notifications", href: "#", badge: "5" },
  { icon: <Settings size={18} />, label: "Settings", href: "#" },
];
export function SidebarNav() {
  const [active, setActive] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside className={`flex flex-col h-full bg-gray-900 border-r border-white/10 transition-all duration-300 ${collapsed ? "w-16" : "w-60"}`}>
      <div className="flex items-center justify-between p-4 h-16 border-b border-white/10">
        {!collapsed && <span className="font-bold text-white text-sm">OpenUI Hub</span>}
        <button onClick={() => setCollapsed(v => !v)} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-auto">
          <ChevronLeft size={16} className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </div>
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {sidebarItems.map(item => (
          <a key={item.label} href={item.href} onClick={() => setActive(item.label)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${active === item.label ? "bg-indigo-600/20 text-indigo-400 font-medium" : "text-slate-400 hover:text-white hover:bg-white/10"} ${collapsed ? "justify-center" : ""}`}
            title={collapsed ? item.label : undefined}>
            <span className="shrink-0">{item.icon}</span>
            {!collapsed && (
              <>
                <span className="flex-1 text-sm">{item.label}</span>
                {item.badge && <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center">{item.badge}</span>}
              </>
            )}
          </a>
        ))}
      </nav>
      <div className="p-3 border-t border-white/10">
        <button className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors ${collapsed ? "justify-center" : ""}`}>
          <LogOut size={18} className="shrink-0" />
          {!collapsed && <span className="text-sm">Sign out</span>}
        </button>
      </div>
    </aside>
  );
}

// AppTopNavbar
export function AppTopNavbar() {
  return (
    <header className="flex items-center justify-between h-14 px-5 border-b border-white/10 bg-gray-900">
      <div className="flex items-center gap-2 flex-1 max-w-xs">
        <div className="flex items-center gap-2 h-9 px-3 rounded-xl bg-gray-800 border border-white/10 flex-1">
          <Search size={14} className="text-slate-500 shrink-0" />
          <input type="text" placeholder="Search..." className="flex-1 bg-transparent text-sm text-slate-300 placeholder:text-slate-600 outline-none" />
          <kbd className="hidden sm:flex items-center text-xs text-slate-600 border border-white/10 rounded px-1 font-mono">⌘K</kbd>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="relative w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
          <Bell size={17} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500" />
        </button>
        <button className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"><Settings size={17} /></button>
        <div className="w-px h-5 bg-white/10 mx-1" />
        <button className="flex items-center gap-2.5 px-2 py-1.5 rounded-xl hover:bg-white/10 transition-colors">
          <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="User" className="w-7 h-7 rounded-full object-cover" />
          <span className="text-sm text-slate-300 font-medium hidden sm:block">Alex J.</span>
          <ChevronDown size={13} className="text-slate-500" />
        </button>
      </div>
    </header>
  );
}

// Breadcrumb
interface BreadcrumbItem { label: string; href?: string; }
export function Breadcrumb({ items, showHome = true }: { items: BreadcrumbItem[]; showHome?: boolean }) {
  const all = showHome ? [{ label: "Home", href: "/" }, ...items] : items;
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 flex-wrap">
        {all.map((item, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              {i === 0 && showHome ? (
                <a href={item.href ?? "/"} className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"><Home size={14} /></a>
              ) : isLast ? (
                <span className="text-sm text-white font-medium px-1.5">{item.label}</span>
              ) : (
                <a href={item.href ?? "#"} className="text-sm text-slate-400 hover:text-white transition-colors px-1.5 py-0.5 rounded-lg hover:bg-white/10">{item.label}</a>
              )}
              {!isLast && <ChevronRight size={13} className="text-slate-600 shrink-0" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// TabNav (uses framer-motion layoutId)
interface Tab { id: string; label: string; count?: number; }
export function TabNav({ tabs, defaultTab, onChange }: { tabs: Tab[]; defaultTab?: string; onChange?: (tab: string) => void }) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);
  const select = (id: string) => { setActive(id); onChange?.(id); };
  return (
    <div className="border-b border-white/10">
      <div className="flex items-end gap-0 -mb-px overflow-x-auto">
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => select(tab.id)}
            className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${active === tab.id ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"}`}>
            {tab.label}
            {tab.count !== undefined && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${active === tab.id ? "bg-indigo-600/30 text-indigo-400" : "bg-white/10 text-slate-500"}`}>{tab.count}</span>
            )}
            {active === tab.id && (
              <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Previews ─────────────────────────────────────────────────────────────────

export function GlassNavbarPreview() {
  return (
    <div className="bg-gray-950">
      <GlassNavbar />
      <div className="h-24 flex items-center justify-center text-slate-600 text-sm">Content area</div>
    </div>
  );
}

export function SidebarNavPreview() {
  return (
    <div className="flex h-full overflow-hidden">
      <SidebarNav />
      <div className="flex-1 bg-gray-950 flex items-center justify-center text-slate-600 text-sm">Main content area</div>
    </div>
  );
}

export function TopNavbarPreview() {
  return (
    <div className="bg-gray-950">
      <AppTopNavbar />
      <div className="h-24 flex items-center justify-center text-slate-600 text-sm">Content area</div>
    </div>
  );
}

export function BreadcrumbNavPreview() {
  return (
    <div className="p-6 bg-gray-950 flex flex-col gap-4">
      <Breadcrumb items={[{ label: "Components", href: "/components" }, { label: "Navbars", href: "/components?category=navbars" }, { label: "Breadcrumb Navigation" }]} />
      <Breadcrumb items={[{ label: "Dashboard" }, { label: "Settings" }, { label: "Profile" }]} />
    </div>
  );
}

export function TabsNavPreview() {
  return (
    <div className="p-4 bg-gray-950">
      <TabNav
        tabs={[
          { id: "overview", label: "Overview" },
          { id: "components", label: "Components", count: 62 },
          { id: "contributors", label: "Contributors", count: 12 },
          { id: "activity", label: "Activity" },
        ]}
        defaultTab="overview"
      />
      <div className="mt-4 text-slate-600 text-sm text-center py-4">Tab content area</div>
    </div>
  );
}
