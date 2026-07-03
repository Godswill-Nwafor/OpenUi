import type { ComponentDoc } from "@/types";

export const pricingComponents: ComponentDoc[] = [
  {
    metadata: {
      id: "three-tier-pricing",
      name: "Three-Tier Pricing Table",
      description: "A complete three-tier pricing section with monthly/annual toggle.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "pricing",
      tags: ["pricing", "table", "plans", "subscription", "toggle", "saas"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 3120, likes: 271,
    },
    code: `"use client";
import { useState } from "react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter", monthly: 0, annual: 0, description: "Perfect for individuals and hobby projects.",
    features: ["5 components / month", "Community support", "MIT license", "Basic documentation"],
    cta: "Get Started Free", popular: false,
  },
  {
    name: "Pro", monthly: 19, annual: 15, description: "Best for professional developers and small teams.",
    features: ["Unlimited components", "Priority support", "Team sharing (5 seats)", "Early access", "CLI tool", "Component builder"],
    cta: "Start Free Trial", popular: true,
  },
  {
    name: "Enterprise", monthly: 79, annual: 59, description: "For organizations needing scale and compliance.",
    features: ["Everything in Pro", "Unlimited seats", "SSO / SAML", "Custom license", "Dedicated support", "SLA guarantee", "Private components"],
    cta: "Contact Sales", popular: false,
  },
];

export function ThreeTierPricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 text-lg mb-8">Start free. Upgrade when you're ready.</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-gray-900 border border-white/10 rounded-full p-1">
            <button onClick={() => setAnnual(false)}
              className={\`px-4 py-1.5 rounded-full text-sm font-medium transition-all
                \${!annual ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"}\`}>
              Monthly
            </button>
            <button onClick={() => setAnnual(true)}
              className={\`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2
                \${annual ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"}\`}>
              Annual
              <span className="text-xs px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(plan => (
            <div key={plan.name}
              className={\`relative rounded-2xl p-7 border transition-all duration-300
                \${plan.popular
                  ? "border-indigo-500 bg-indigo-950/50 shadow-2xl shadow-indigo-500/15"
                  : "border-white/10 bg-gray-900 hover:border-white/20"
                }\`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5
                  px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">
                  <Zap size={10} fill="white" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-semibold text-white text-lg mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-7">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">
                    \${annual ? plan.annual : plan.monthly}
                  </span>
                  {(annual ? plan.annual : plan.monthly) > 0 && (
                    <span className="text-slate-400 text-sm">/mo</span>
                  )}
                </div>
                {annual && plan.annual !== plan.monthly && (
                  <p className="text-emerald-400 text-xs mt-1">Billed annually · Save \${(plan.monthly - plan.annual) * 12}/yr</p>
                )}
              </div>

              <button
                className={\`w-full h-11 rounded-xl font-semibold text-sm mb-7 transition-all duration-150 active:scale-[0.98]
                  \${plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/20"
                    : "bg-white/10 text-white hover:bg-white/15"
                  }\`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    demoCode: `import { ThreeTierPricing } from "./ThreeTierPricing";
export default function Demo() { return <ThreeTierPricing />; }`,
    documentation: "A complete pricing section with monthly/annual billing toggle. The annual price is passed as `annual` in the plan config.",
    props: [],
  },
  {
    metadata: {
      id: "comparison-table",
      name: "Feature Comparison Table",
      description: "A detailed plan comparison table with feature rows and checkmarks.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "pricing",
      tags: ["pricing", "comparison", "table", "features", "plans"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 1654, likes: 138,
    },
    code: `import { Check, X, Minus } from "lucide-react";

type CellValue = boolean | string | null;

interface Feature {
  category: string;
  items: { name: string; values: CellValue[] }[];
}

interface ComparisonTableProps {
  plans: string[];
  features: Feature[];
}

function Cell({ value }: { value: CellValue }) {
  if (value === true) return <Check size={16} className="text-emerald-400 mx-auto" />;
  if (value === false) return <X size={16} className="text-slate-600 mx-auto" />;
  if (value === null) return <Minus size={16} className="text-slate-600 mx-auto" />;
  return <span className="text-sm text-slate-300 text-center">{value}</span>;
}

export function ComparisonTable({ plans, features }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-gray-900">
            <th className="text-left px-5 py-4 text-slate-400 font-medium w-1/3">Features</th>
            {plans.map((plan, i) => (
              <th key={plan} className={\`px-5 py-4 font-semibold \${i === 1 ? "text-indigo-400" : "text-white"}\`}>{plan}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map(group => (
            <>
              <tr key={group.category} className="bg-gray-950/50">
                <td colSpan={plans.length + 1} className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {group.category}
                </td>
              </tr>
              {group.items.map(item => (
                <tr key={item.name} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-3.5 text-slate-300">{item.name}</td>
                  {item.values.map((v, i) => (
                    <td key={i} className="px-5 py-3.5 text-center"><Cell value={v} /></td>
                  ))}
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
    demoCode: `import { ComparisonTable } from "./ComparisonTable";

export default function Demo() {
  return (
    <ComparisonTable
      plans={["Starter", "Pro", "Enterprise"]}
      features={[
        {
          category: "Components",
          items: [
            { name: "Monthly components", values: ["5", "Unlimited", "Unlimited"] },
            { name: "Custom components", values: [false, true, true] },
            { name: "Private components", values: [false, false, true] },
          ],
        },
        {
          category: "Support",
          items: [
            { name: "Community support", values: [true, true, true] },
            { name: "Priority support", values: [false, true, true] },
            { name: "Dedicated manager", values: [false, false, true] },
          ],
        },
      ]}
    />
  );
}`,
    documentation: "A feature comparison table. `true` renders a green check, `false` a red X, `null` a dash, strings are shown as-is.",
    props: [
      { name: "plans", type: "string[]", required: true, description: "Plan names shown as column headers." },
      { name: "features", type: "Feature[]", required: true, description: "Feature groups with rows of values." },
    ],
  },
  {
    metadata: {
      id: "usage-pricing",
      name: "Usage-Based Pricing",
      description: "An interactive slider to calculate usage-based pricing.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "pricing",
      tags: ["pricing", "usage", "calculator", "slider", "interactive"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 1232, likes: 101,
    },
    code: `"use client";
import { useState } from "react";
import { Check } from "lucide-react";

const tiers = [
  { label: "1,000", users: 1000, price: 0 },
  { label: "5,000", users: 5000, price: 9 },
  { label: "10,000", users: 10000, price: 19 },
  { label: "50,000", users: 50000, price: 49 },
  { label: "100,000+", users: 100000, price: 99 },
];

export function UsagePricing() {
  const [tier, setTier] = useState(1);
  const current = tiers[tier];

  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900 p-8 max-w-xl">
      <h3 className="font-bold text-white text-2xl mb-2">Pay as you grow</h3>
      <p className="text-slate-400 mb-8">Scale with your users. No surprises on your bill.</p>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-slate-400">Monthly active users</span>
          <span className="font-semibold text-white">{current.label}</span>
        </div>
        <input
          type="range" min={0} max={tiers.length - 1} value={tier}
          onChange={e => setTier(Number(e.target.value))}
          className="w-full accent-indigo-500"
        />
        <div className="flex justify-between text-xs text-slate-600 mt-1">
          <span>Free</span><span>100k+</span>
        </div>
      </div>

      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-5xl font-black text-white">\${current.price}</span>
        <span className="text-slate-400">/month</span>
        {current.price === 0 && <span className="text-emerald-400 text-sm font-medium">Free forever</span>}
      </div>

      <ul className="space-y-2.5 mb-8">
        {["Analytics dashboard", "Component library access", "Email support", current.users >= 5000 ? "Priority support" : null].filter(Boolean).map(f => (
          <li key={f!} className="flex items-center gap-2.5 text-sm text-slate-300">
            <Check size={14} className="text-emerald-400 shrink-0" /> {f}
          </li>
        ))}
      </ul>

      <button className="w-full h-11 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
        {current.price === 0 ? "Start for Free" : "Start Free Trial"}
      </button>
    </div>
  );
}`,
    demoCode: `import { UsagePricing } from "./UsagePricing";
export default function Demo() { return <UsagePricing />; }`,
    documentation: "An interactive usage-based pricing calculator with a range slider. Tiers and prices are configurable.",
    props: [],
  },
  {
    metadata: {
      id: "upgrade-banner",
      name: "Upgrade Banner",
      description: "An in-app upgrade prompt banner for freemium products.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "pricing",
      tags: ["pricing", "upgrade", "banner", "freemium", "upsell"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 987, likes: 79,
    },
    code: `import { Zap, X } from "lucide-react";
import { useState } from "react";

interface UpgradeBannerProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  onUpgrade?: () => void;
}

export function UpgradeBanner({
  title = "Unlock Pro Features",
  description = "You've used 80% of your free components this month.",
  ctaLabel = "Upgrade to Pro",
  onUpgrade,
}: UpgradeBannerProps) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl
      bg-gradient-to-r from-indigo-950 to-purple-950 border border-indigo-500/30 shadow-lg shadow-indigo-500/10">

      <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
        <Zap size={20} />
      </div>

      <div className="flex-1">
        <p className="font-semibold text-white mb-0.5">{title}</p>
        <p className="text-sm text-slate-400">{description}</p>
      </div>

      <button onClick={onUpgrade}
        className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors shrink-0">
        {ctaLabel}
      </button>

      <button onClick={() => setDismissed(true)}
        className="absolute top-3 right-3 text-slate-500 hover:text-white transition-colors">
        <X size={16} />
      </button>
    </div>
  );
}`,
    demoCode: `import { UpgradeBanner } from "./UpgradeBanner";
export default function Demo() {
  return (
    <div className="max-w-xl">
      <UpgradeBanner onUpgrade={() => alert("Opening upgrade flow...")} />
    </div>
  );
}`,
    documentation: "An in-app upgrade prompt banner. Includes a dismiss button and an upgrade CTA.",
    props: [
      { name: "title", type: "string", required: false, description: "Banner heading." },
      { name: "onUpgrade", type: "() => void", required: false, description: "Called when CTA is clicked." },
    ],
  },
  {
    metadata: {
      id: "addon-pricing",
      name: "Add-on Pricing Cards",
      description: "A grid of optional add-on feature cards with toggle purchase.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "pricing",
      tags: ["pricing", "addon", "toggle", "purchase", "features"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 765, likes: 61,
    },
    code: `"use client";
import { useState } from "react";
import { Plus, Check } from "lucide-react";

interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
}

const addons: Addon[] = [
  { id: "analytics", name: "Advanced Analytics", description: "Deep insights into component usage.", price: 9, icon: "📊" },
  { id: "cli", name: "CLI Pro Tools", description: "Batch component installation and scaffolding.", price: 5, icon: "⚡" },
  { id: "themes", name: "Custom Themes", description: "White-label your component library.", price: 12, icon: "🎨" },
  { id: "support", name: "Priority Support", description: "< 4h response time, dedicated Slack.", price: 19, icon: "🛟" },
];

export function AddonPricing() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (id: string) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  const total = addons.filter(a => selected.includes(a.id)).reduce((acc, a) => acc + a.price, 0);

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {addons.map(addon => {
          const active = selected.includes(addon.id);
          return (
            <button key={addon.id} onClick={() => toggle(addon.id)}
              className={\`flex items-start gap-4 p-4 rounded-xl border text-left transition-all duration-200
                \${active ? "border-indigo-500 bg-indigo-500/10" : "border-white/10 bg-gray-900 hover:border-white/20"}\`}>
              <span className="text-2xl">{addon.icon}</span>
              <div className="flex-1">
                <p className="font-medium text-white text-sm mb-0.5">{addon.name}</p>
                <p className="text-xs text-slate-400">{addon.description}</p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="text-white font-bold text-sm">+\${addon.price}/mo</span>
                <div className={\`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                  \${active ? "border-indigo-500 bg-indigo-500" : "border-slate-600"}\`}>
                  {active && <Check size={11} className="text-white" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selected.length > 0 && (
        <div className="flex items-center justify-between p-4 rounded-xl bg-gray-900 border border-white/10">
          <div>
            <p className="text-sm text-slate-400">{selected.length} add-on{selected.length > 1 ? "s" : ""} selected</p>
            <p className="text-xl font-bold text-white">+\${total}/month</p>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors">
            Add to Plan
          </button>
        </div>
      )}
    </div>
  );
}`,
    demoCode: `import { AddonPricing } from "./AddonPricing";
export default function Demo() { return <AddonPricing />; }`,
    documentation: "Toggle-based add-on pricing cards. Selected add-ons are summarized at the bottom with total price.",
    props: [],
  },
];
