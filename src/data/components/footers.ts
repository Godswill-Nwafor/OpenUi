import type { ComponentDoc } from "@/types";

export const footerComponents: ComponentDoc[] = [
  {
    metadata: {
      id: "minimal-footer",
      name: "Minimal Footer",
      description: "A clean one-line footer with copyright and social links.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react", version: "1.0.0", category: "footers",
      tags: ["footer", "minimal", "simple", "copyright"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 1432, likes: 112,
    },
    code: `import { Github, Twitter } from "lucide-react";

export function MinimalFooter() {
  return (
    <footer className="border-t border-white/10 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} OpenUI Hub. MIT License.</p>
        <div className="flex items-center gap-3">
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={16} /></a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={16} /></a>
        </div>
      </div>
    </footer>
  );
}`,
    demoCode: `import { MinimalFooter } from "./MinimalFooter";
export default function Demo() { return <MinimalFooter />; }`,
    documentation: "A one-line minimal footer with copyright text and social icon links.",
    props: [],
  },
  {
    metadata: {
      id: "mega-footer",
      name: "Mega Footer",
      description: "A full-width mega footer with logo, multiple link columns, and newsletter signup.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react", version: "1.0.0", category: "footers",
      tags: ["footer", "mega", "columns", "newsletter", "links"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 2341, likes: 196,
    },
    code: `import { Layers, Github, Twitter, ArrowRight } from "lucide-react";

const links = {
  Product: ["Components", "Templates", "Themes", "Changelog"],
  Resources: ["Documentation", "API Reference", "GitHub", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export function MegaFooter() {
  return (
    <footer className="border-t border-white/10 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-6 gap-10">
        {/* Brand */}
        <div className="col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Layers size={16} className="text-white" />
            </div>
            <span className="font-bold text-white">OpenUI Hub</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-5">
            Build beautiful interfaces together. Open source, forever.
          </p>
          {/* Newsletter */}
          <div className="flex gap-2">
            <input type="email" placeholder="your@email.com"
              className="flex-1 h-9 px-3 rounded-lg border border-white/10 bg-gray-900 text-white text-sm placeholder:text-slate-600 outline-none focus:border-indigo-500" />
            <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shrink-0">
              <ArrowRight size={14} />
            </button>
          </div>
          <p className="text-xs text-slate-600 mt-1.5">Subscribe to updates. No spam.</p>
        </div>

        {/* Links */}
        {Object.entries(links).map(([section, items]) => (
          <div key={section}>
            <h3 className="font-semibold text-white text-sm mb-3">{section}</h3>
            <ul className="space-y-2.5">
              {items.map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-4 py-4 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
        <p>© {new Date().getFullYear()} OpenUI Hub. Released under MIT.</p>
        <div className="flex gap-3">
          <a href="#" className="hover:text-white transition-colors"><Github size={14} /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter size={14} /></a>
        </div>
      </div>
    </footer>
  );
}`,
    demoCode: `import { MegaFooter } from "./MegaFooter";
export default function Demo() { return <MegaFooter />; }`,
    documentation: "A full mega footer with a brand column (including newsletter signup) and four link columns.",
    props: [],
  },
  {
    metadata: {
      id: "cta-footer",
      name: "CTA Footer",
      description: "A footer with a large call-to-action section above the links.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react", version: "1.0.0", category: "footers",
      tags: ["footer", "cta", "call-to-action", "conversion"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 1654, likes: 138,
    },
    code: `import { ArrowRight, Github } from "lucide-react";

export function CTAFooter() {
  return (
    <footer className="bg-gray-950 border-t border-white/10">
      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-sm font-medium text-indigo-400 uppercase tracking-widest mb-4">Open Source</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Start building beautiful<br />interfaces today.
        </h2>
        <p className="text-slate-400 text-lg mb-10">Free forever. No credit card. Join thousands of developers.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="/components"
            className="flex items-center gap-2 h-12 px-7 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all">
            Browse Components <ArrowRight size={15} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 h-12 px-7 rounded-2xl border border-white/15 text-slate-300 font-semibold hover:bg-white/5 transition-all">
            <Github size={16} /> Star on GitHub
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 py-4 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} OpenUI Hub</p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "License"].map(l => (
            <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}`,
    demoCode: `import { CTAFooter } from "./CTAFooter";
export default function Demo() { return <CTAFooter />; }`,
    documentation: "A conversion-focused footer with a large CTA section above the standard footer bar.",
    props: [],
  },
  {
    metadata: {
      id: "dark-footer",
      name: "Dark Brand Footer",
      description: "A bold dark footer with a gradient brand accent and social proof.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react", version: "1.0.0", category: "footers",
      tags: ["footer", "dark", "brand", "gradient", "social-proof"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 987, likes: 79,
    },
    code: `import { Star, Github, Layers } from "lucide-react";

export function DarkBrandFooter() {
  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-indigo-600/15 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="flex items-center justify-center gap-2.5 mb-5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
            <Layers size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-white">OpenUI Hub</span>
        </div>

        <p className="text-slate-400 max-w-sm mx-auto text-sm leading-relaxed mb-6">
          The open-source UI library used by developers worldwide.
        </p>

        {/* Stars */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
        </div>
        <p className="text-xs text-slate-500 mb-8">Loved by 10,000+ developers</p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 mb-12">
          {["Components", "Documentation", "Contribute", "License", "GitHub"].map(l => (
            <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>

        <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-600">
          <p>© {new Date().getFullYear()} OpenUI Hub. MIT License.</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Github size={13} /> Source on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}`,
    demoCode: `import { DarkBrandFooter } from "./DarkBrandFooter";
export default function Demo() { return <DarkBrandFooter />; }`,
    documentation: "A bold dark footer with a radial gradient accent and five-star social proof.",
    props: [],
  },
  {
    metadata: {
      id: "app-footer",
      name: "App Footer Bar",
      description: "A compact bottom navigation bar for mobile app-style layouts.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react", version: "1.0.0", category: "footers",
      tags: ["footer", "app", "mobile", "bottom-nav", "navigation"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 765, likes: 61,
    },
    code: `"use client";
import { useState } from "react";
import { Home, Layers, Search, Bell, User } from "lucide-react";

const tabs = [
  { icon: Home, label: "Home" },
  { icon: Layers, label: "Components" },
  { icon: Search, label: "Search" },
  { icon: Bell, label: "Alerts", badge: 3 },
  { icon: User, label: "Profile" },
];

export function AppFooterBar() {
  const [active, setActive] = useState("Home");

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-t border-white/10">
      <div className="flex items-center justify-around px-2 py-2 max-w-md mx-auto">
        {tabs.map(({ icon: Icon, label, badge }) => (
          <button key={label} onClick={() => setActive(label)}
            className={\`relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors
              \${active === label ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"}\`}>
            <div className="relative">
              <Icon size={20} />
              {badge && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] flex items-center justify-center font-bold">
                  {badge}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">{label}</span>
            {active === label && <div className="absolute bottom-0 w-1 h-1 rounded-full bg-indigo-500" />}
          </button>
        ))}
      </div>
      <div className="h-safe-area-inset-bottom" />
    </footer>
  );
}`,
    demoCode: `import { AppFooterBar } from "./AppFooterBar";
export default function Demo() {
  return (
    <div className="relative h-48 bg-gray-950 rounded-2xl overflow-hidden">
      <AppFooterBar />
    </div>
  );
}`,
    documentation: "A mobile-app-style bottom tab navigation bar with badge support and active state indicator.",
    props: [],
  },
];
