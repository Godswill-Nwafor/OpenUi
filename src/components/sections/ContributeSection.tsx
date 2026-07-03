"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GitFork, GitBranch, Code2, GitPullRequest, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  { icon: GitFork, title: "Fork the repo", description: "Fork the OpenUI Hub repository on GitHub to create your own copy.", step: "01" },
  { icon: GitBranch, title: "Create a branch", description: "Create a new branch named after your component: `feature/my-button`.", step: "02" },
  { icon: Code2, title: "Build your component", description: "Add your component files following the standard folder structure.", step: "03" },
  { icon: GitPullRequest, title: "Open a Pull Request", description: "Submit your PR and our team will review and merge it within 48 hours.", step: "04" },
];

export function ContributeSection() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
              Open Contributions
            </p>
            <h2 className="text-4xl font-bold mb-5">
              Your components belong here.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              OpenUI Hub is built by the community, for the community. If you've built
              a beautiful component, share it with thousands of developers worldwide.
              Every contribution matters.
            </p>

            <div className="space-y-3 mb-8">
              {["Free to contribute, no approval fee", "MIT license for all components", "Your name and GitHub linked on every component", "Component reviewed within 48 hours"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contribute"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-brand text-white font-semibold text-sm hover:opacity-90 shadow-lg shadow-brand/20 transition-all"
            >
              Start Contributing <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Right — steps */}
          <div className="space-y-4">
            {steps.map(({ icon: Icon, title, description, step }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl border border-border bg-background hover:border-brand/30 transition-colors"
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                    <Icon size={17} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-6 bg-border mt-2" />
                  )}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-muted-foreground">{step}</span>
                    <h3 className="font-semibold text-sm">{title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
