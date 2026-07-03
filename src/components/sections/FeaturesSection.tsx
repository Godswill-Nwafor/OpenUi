"use client";

import { motion } from "framer-motion";
import { Eye, Copy, Code2, Layers, GitPullRequest, Zap, Shield, Palette } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Live Preview",
    description: "Interact with every component in real-time before you copy a single line of code.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: Copy,
    title: "One-Click Copy",
    description: "Copy production-ready component code with a single click. No setup, no boilerplate.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: Code2,
    title: "TypeScript First",
    description: "Every component ships with full TypeScript types, JSDoc, and strict type safety.",
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    icon: Palette,
    title: "Dark Mode Ready",
    description: "All components support both light and dark themes out of the box via CSS variables.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: GitPullRequest,
    title: "Open Contributions",
    description: "Anyone can submit a component via a pull request. Build it, document it, ship it.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Zap,
    title: "Zero Dependencies",
    description: "Most components use only React and Tailwind CSS. No heavy runtime dependencies.",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    icon: Shield,
    title: "Accessible",
    description: "Built with ARIA roles, keyboard navigation, and screen-reader support in mind.",
    gradient: "from-red-500 to-rose-600",
  },
  {
    icon: Layers,
    title: "26 Categories",
    description: "From buttons to full dashboards — every UI pattern you need, organized and searchable.",
    gradient: "from-pink-500 to-fuchsia-600",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            Why OpenUI Hub
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything you need to ship faster
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete platform for discovering, previewing, and contributing beautiful UI components.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, description, gradient }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-card p-5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute -top-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={18} />
              </div>
              <h3 className="font-semibold mb-1.5">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
