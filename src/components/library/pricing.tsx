"use client";
import { useState } from "react";
import { Check, X, Minus, Zap, Shield, Globe, Database, Headphones, Plus, ChevronDown, ChevronUp } from "lucide-react";

// ThreeTierPricing
const tiers = [
  { name: "Free", price: { monthly: 0, annual: 0 }, description: "Perfect for side projects and experiments.", features: ["Up to 3 projects", "10 components / project", "Community support", "Basic analytics"], cta: "Get started", highlight: false },
  { name: "Pro", price: { monthly: 19, annual: 15 }, description: "For professional developers and small teams.", features: ["Unlimited projects", "All 60+ components", "Priority support", "Advanced analytics", "Custom themes", "API access"], cta: "Start free trial", highlight: true },
  { name: "Enterprise", price: { monthly: 79, annual: 65 }, description: "For growing teams and organizations.", features: ["Everything in Pro", "Unlimited seats", "Dedicated support", "SLA guarantee", "SSO / SAML", "Custom contracts", "Audit logs"], cta: "Contact sales", highlight: false },
];

export function ThreeTierPricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">Simple, transparent pricing</h2>
          <p className="text-muted-foreground text-lg mb-6">No hidden fees. Cancel anytime.</p>
          <div className="inline-flex items-center gap-3 p-1 rounded-xl bg-card border border-border">
            <button onClick={() => setAnnual(false)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${!annual ? "bg-card text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${annual ? "bg-card text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              Annual <span className="text-xs px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">Save 20%</span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(tier => (
            <div key={tier.name} className={`relative rounded-2xl p-7 border ${tier.highlight ? "bg-indigo-600 border-indigo-500 shadow-2xl shadow-indigo-500/20" : "bg-card border-border"}`}>
              {tier.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-card text-indigo-600 text-xs font-bold">Most Popular</div>}
              <h3 className={`font-bold text-xl mb-1 ${tier.highlight ? "text-foreground" : "text-foreground"}`}>{tier.name}</h3>
              <p className={`text-sm mb-5 ${tier.highlight ? "text-indigo-200" : "text-muted-foreground"}`}>{tier.description}</p>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${tier.highlight ? "text-foreground" : "text-foreground"}`}>${annual ? tier.price.annual : tier.price.monthly}</span>
                <span className={`text-sm ml-1 ${tier.highlight ? "text-indigo-200" : "text-muted-foreground"}`}>/mo</span>
              </div>
              <button className={`w-full h-10 rounded-xl font-semibold text-sm mb-7 transition-colors ${tier.highlight ? "bg-card text-indigo-600 hover:bg-muted" : "bg-muted text-foreground hover:bg-muted"}`}>{tier.cta}</button>
              <ul className="space-y-3">
                {tier.features.map(f => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${tier.highlight ? "text-indigo-100" : "text-foreground"}`}>
                    <Check size={15} className={`shrink-0 mt-0.5 ${tier.highlight ? "text-foreground" : "text-emerald-400"}`} />{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ComparisonTable
const features = [
  { name: "Projects", free: "3", pro: "Unlimited", enterprise: "Unlimited" },
  { name: "Components", free: "10/project", pro: "All 60+", enterprise: "All 60+" },
  { name: "Team members", free: "1", pro: "5", enterprise: "Unlimited" },
  { name: "Analytics", free: false, pro: true, enterprise: true },
  { name: "API access", free: false, pro: true, enterprise: true },
  { name: "Custom themes", free: false, pro: true, enterprise: true },
  { name: "Priority support", free: false, pro: true, enterprise: true },
  { name: "SSO / SAML", free: false, pro: false, enterprise: true },
  { name: "SLA", free: false, pro: false, enterprise: true },
];

function Cell({ val }: { val: boolean | string }) {
  if (typeof val === "boolean") return val ? <Check size={16} className="text-emerald-400 mx-auto" /> : <X size={16} className="text-muted-foreground mx-auto" />;
  return <span className="text-sm text-foreground">{val}</span>;
}

export function ComparisonTable() {
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">Compare plans</h2>
          <p className="text-muted-foreground">Everything you get at each tier.</p>
        </div>
        <div className="rounded-2xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-card/80">
                <th className="px-5 py-4 text-left text-muted-foreground font-medium w-2/5">Feature</th>
                {["Free", "Pro", "Enterprise"].map(p => <th key={p} className="px-5 py-4 text-center text-foreground font-semibold">{p}</th>)}
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.name} className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-background"}`}>
                  <td className="px-5 py-3.5 text-muted-foreground">{row.name}</td>
                  <td className="px-5 py-3.5 text-center"><Cell val={row.free} /></td>
                  <td className="px-5 py-3.5 text-center"><Cell val={row.pro} /></td>
                  <td className="px-5 py-3.5 text-center"><Cell val={row.enterprise} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// UsagePricing
const tiers2 = [
  { range: "0 – 10K", price: 0 },
  { range: "10K – 100K", price: 19 },
  { range: "100K – 1M", price: 49 },
  { range: "1M+", price: 149 },
];
export function UsagePricing() {
  const [tier, setTier] = useState(1);
  const current = tiers2[tier];
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">Usage-based pricing</h2>
          <p className="text-muted-foreground">Pay for what you use. Upgrade as you grow.</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <label className="block text-sm text-muted-foreground font-medium mb-3">Monthly Active Users</label>
          <input type="range" min={0} max={3} value={tier} onChange={e => setTier(+e.target.value)} className="w-full accent-indigo-500 mb-3" step={1} />
          <div className="flex justify-between text-xs text-muted-foreground mb-8">
            {tiers2.map((t, i) => <span key={i} className={tier === i ? "text-indigo-400 font-semibold" : ""}>{t.range}</span>)}
          </div>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-5xl font-bold text-foreground">${current.price}</span>
            <span className="text-muted-foreground text-lg mb-2">/month</span>
          </div>
          <p className="text-muted-foreground text-sm mb-8">For <span className="text-foreground font-medium">{current.range} MAU</span>. No hidden fees.</p>
          <button className="w-full h-11 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">Get started</button>
        </div>
      </div>
    </section>
  );
}

// UpgradeBanner
export function UpgradeBanner({ trialDaysLeft = 7, ctaHref = "#" }: { trialDaysLeft?: number; ctaHref?: string }) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-px">
      <div className="relative rounded-2xl bg-card/50 backdrop-blur-sm px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Zap size={20} className="text-amber-400 shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground text-sm">Your free trial ends in {trialDaysLeft} days</p>
          <p className="text-muted-foreground text-xs mt-0.5">Upgrade now to keep access to all Pro features and never lose your work.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a href={ctaHref} className="px-4 py-2 rounded-xl bg-card text-foreground font-semibold text-sm hover:bg-muted transition-colors">Upgrade Now</a>
          <button onClick={() => setDismissed(true)} className="text-muted-foreground hover:text-foreground transition-colors text-sm">Dismiss</button>
        </div>
      </div>
    </div>
  );
}

// AddonPricing
const addons = [
  { id: "analytics", icon: <Database size={18} />, name: "Advanced Analytics", description: "Funnel analysis, retention, heatmaps", price: 12 },
  { id: "support", icon: <Headphones size={18} />, name: "Priority Support", description: "24/7 support with <2h SLA", price: 29 },
  { id: "cdn", icon: <Globe size={18} />, name: "Global CDN", description: "50 edge locations worldwide", price: 19 },
  { id: "backup", icon: <Shield size={18} />, name: "Automated Backups", description: "Daily snapshots, 30-day retention", price: 9 },
];
export function AddonPricing({ basePrice = 19 }: { basePrice?: number }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const toggle = (id: string) => setSelected(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const total = basePrice + addons.filter(a => selected.has(a.id)).reduce((s, a) => s + a.price, 0);
  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">Build your plan</h2>
          <p className="text-muted-foreground">Start with Pro and add what you need.</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 mb-4">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
            <div><p className="font-semibold text-foreground">Pro Plan</p><p className="text-sm text-muted-foreground">All core features included</p></div>
            <span className="text-xl font-bold text-foreground">${basePrice}/mo</span>
          </div>
          <p className="text-sm font-medium text-muted-foreground mb-3">Add-ons</p>
          <div className="space-y-3">
            {addons.map(addon => (
              <div key={addon.id} onClick={() => toggle(addon.id)}
                className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${selected.has(addon.id) ? "border-indigo-500/50 bg-indigo-500/10" : "border-border hover:border-border hover:bg-muted/50"}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${selected.has(addon.id) ? "bg-indigo-600/30 text-indigo-400" : "bg-muted text-muted-foreground"}`}>{addon.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm">{addon.name}</p>
                  <p className="text-xs text-muted-foreground">{addon.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-semibold text-foreground">+${addon.price}/mo</p>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all mt-1 ml-auto ${selected.has(addon.id) ? "border-indigo-500 bg-indigo-500" : "border-border"}`}>
                    {selected.has(addon.id) && <Check size={11} className="text-foreground" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground">Total per month</span>
            <span className="text-2xl font-bold text-foreground">${total}</span>
          </div>
          <button className="w-full h-11 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">Get started with this plan</button>
        </div>
      </div>
    </section>
  );
}

// ── Previews ─────────────────────────────────────────────────────────────────

export function ThreeTierPricingPreview() {
  return <ThreeTierPricing />;
}

export function ComparisonTablePreview() {
  return <ComparisonTable />;
}

export function UsagePricingPreview() {
  return <UsagePricing />;
}

export function UpgradeBannerPreview() {
  return (
    <div className="p-6 bg-background flex flex-col gap-4">
      <UpgradeBanner trialDaysLeft={7} />
      <UpgradeBanner trialDaysLeft={2} />
    </div>
  );
}

export function AddonPricingPreview() {
  return <AddonPricing />;
}
