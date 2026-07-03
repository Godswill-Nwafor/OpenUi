"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Heart, Scale, GitMerge, Star } from "lucide-react";
import { GITHUB_REPO } from "@/lib/constants";

const pillars = [
  {
    icon: Scale,
    title: "MIT Licensed",
    description: "Use in personal and commercial projects, forever, with no royalties or restrictions.",
  },
  {
    icon: GitMerge,
    title: "Community Driven",
    description: "Every component is contributed by real developers solving real problems.",
  },
  {
    icon: Heart,
    title: "Built with Love",
    description: "Maintained by contributors who care about developer experience and code quality.",
  },
];

export function OpenSourceSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/3 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/8 text-brand text-sm font-medium mb-6">
            <Github size={14} />
            Open Source, Forever
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            Proudly open source.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            OpenUI Hub will always be free and open source. The code is on GitHub,
            the license is MIT, and the community owns it. No paywalls, ever.
          </p>

          {/* GitHub card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl border border-border p-8 mb-12 max-w-xl mx-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Github size={22} />
                <div className="text-left">
                  <p className="font-semibold text-sm">openui-hub / openui-hub</p>
                  <p className="text-xs text-muted-foreground">Public repository</p>
                </div>
              </div>
              <Link
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-medium hover:bg-accent transition-colors"
              >
                <Star size={12} /> Star
              </Link>
            </div>
            <p className="text-sm text-muted-foreground text-left mb-4">
              Build Beautiful Interfaces Together. A production quality open source UI component library.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> TypeScript
              </span>
              <span className="flex items-center gap-1.5">
                <Scale size={11} /> MIT
              </span>
              <span className="flex items-center gap-1.5">
                <Star size={11} /> 0 stars
              </span>
            </div>
          </motion.div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mx-auto mb-3">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
