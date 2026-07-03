"use client";
import { useState } from "react";
import { Github, Twitter, Layers, ArrowRight, Star, Home, Search, Bell, User } from "lucide-react";

// MinimalFooter
export function MinimalFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} OpenUI Hub. MIT License.</p>
        <div className="flex items-center gap-3">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={16} /></a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter size={16} /></a>
        </div>
      </div>
    </footer>
  );
}

// MegaFooter
const megaLinks = {
  Product: ["Components", "Templates", "Themes", "Changelog"],
  Resources: ["Documentation", "API Reference", "GitHub", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};
export function MegaFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-6 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center"><Layers size={16} className="text-foreground" /></div>
            <span className="font-bold text-foreground">OpenUI Hub</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">Build beautiful interfaces together. Open source, forever.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="your@email.com" className="flex-1 h-9 px-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground outline-none focus:border-indigo-500" />
            <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shrink-0"><ArrowRight size={14} /></button>
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">Subscribe to updates. No spam.</p>
        </div>
        {Object.entries(megaLinks).map(([section, items]) => (
          <div key={section}>
            <h3 className="font-semibold text-foreground text-sm mb-3">{section}</h3>
            <ul className="space-y-2.5">
              {items.map(item => <li key={item}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-4 py-4 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} OpenUI Hub. Released under MIT.</p>
        <div className="flex gap-3">
          <a href="#" className="hover:text-foreground transition-colors"><Github size={14} /></a>
          <a href="#" className="hover:text-foreground transition-colors"><Twitter size={14} /></a>
        </div>
      </div>
    </footer>
  );
}

// CTAFooter
export function CTAFooter() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-sm font-medium text-indigo-400 uppercase tracking-widest mb-4">Open Source</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-5 leading-tight">Start building beautiful<br />interfaces today.</h2>
        <p className="text-muted-foreground text-lg mb-10">Free forever. No credit card. Join thousands of developers.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="/components" className="flex items-center gap-2 h-12 px-7 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all">Browse Components <ArrowRight size={15} /></a>
          <a href="#" className="flex items-center gap-2 h-12 px-7 rounded-2xl border border-border text-foreground font-semibold hover:bg-muted/50 transition-all"><Github size={16} /> Star on GitHub</a>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} OpenUI Hub</p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "License"].map(l => <a key={l} href="#" className="hover:text-foreground transition-colors">{l}</a>)}
        </div>
      </div>
    </footer>
  );
}

// DarkBrandFooter
export function DarkBrandFooter() {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-indigo-600/15 blur-3xl rounded-full" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="flex items-center justify-center gap-2.5 mb-5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center"><Layers size={18} className="text-foreground" /></div>
          <span className="text-xl font-bold text-foreground">OpenUI Hub</span>
        </div>
        <p className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed mb-6">The open-source UI library used by developers worldwide.</p>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
        </div>
        <p className="text-xs text-muted-foreground mb-8">Loved by 10,000+ developers</p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-12">
          {["Components", "Documentation", "Contribute", "License", "GitHub"].map(l => <a key={l} href="#" className="hover:text-foreground transition-colors">{l}</a>)}
        </div>
        <div className="pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} OpenUI Hub. MIT License.</p>
          <a href="#" className="flex items-center gap-1.5 hover:text-foreground transition-colors"><Github size={13} /> Source on GitHub</a>
        </div>
      </div>
    </footer>
  );
}

// AppFooterBar — uses absolute positioning for preview compatibility
const footerTabs = [
  { icon: Home, label: "Home" },
  { icon: Layers, label: "Components" },
  { icon: Search, label: "Search" },
  { icon: Bell, label: "Alerts", badge: 3 },
  { icon: User, label: "Profile" },
];
export function AppFooterBar() {
  const [active, setActive] = useState("Home");
  return (
    <footer className="absolute bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border">
      <div className="flex items-center justify-around px-2 py-2 max-w-md mx-auto">
        {footerTabs.map(({ icon: Icon, label, badge }) => (
          <button key={label} onClick={() => setActive(label)}
            className={`relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${active === label ? "text-indigo-400" : "text-muted-foreground hover:text-foreground"}`}>
            <div className="relative">
              <Icon size={20} />
              {badge && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] flex items-center justify-center font-bold">{badge}</span>}
            </div>
            <span className="text-[10px] font-medium">{label}</span>
            {active === label && <div className="absolute bottom-0 w-1 h-1 rounded-full bg-indigo-500" />}
          </button>
        ))}
      </div>
    </footer>
  );
}

// ── Previews ─────────────────────────────────────────────────────────────────

export function MinimalFooterPreview() {
  return (
    <div className="flex flex-col justify-end h-full bg-background">
      <MinimalFooter />
    </div>
  );
}

export function MegaFooterPreview() {
  return (
    <div className="bg-background">
      <MegaFooter />
    </div>
  );
}

export function CTAFooterPreview() {
  return (
    <div className="bg-background">
      <CTAFooter />
    </div>
  );
}

export function DarkFooterPreview() {
  return (
    <div className="bg-background">
      <DarkBrandFooter />
    </div>
  );
}

export function AppFooterPreview() {
  return (
    <div className="relative bg-background h-full">
      <div className="flex items-center justify-center h-full text-muted-foreground text-sm pb-16">App content area</div>
      <AppFooterBar />
    </div>
  );
}
