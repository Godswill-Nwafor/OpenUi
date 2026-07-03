"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is OpenUI Hub free to use?",
    a: "Yes. OpenUI Hub is 100% free and open source under the MIT license. You can use all components in personal and commercial projects with no restrictions.",
  },
  {
    q: "Do I need to install a package?",
    a: "No package to install. You copy the component source code directly into your project — you own the code. We also offer a CLI tool (`npx openui-hub add`) for convenience.",
  },
  {
    q: "What frameworks are supported?",
    a: "Currently all components are built for React. Vue, Angular, and Flutter support are on the roadmap and open for contributions.",
  },
  {
    q: "How do I contribute a component?",
    a: "Fork the repository, create a new branch, add your component following our folder structure, write documentation, and open a Pull Request. Our team reviews within 48 hours.",
  },
  {
    q: "Can I request a component?",
    a: "Absolutely. Open a GitHub Issue with the 'component request' label and describe what you need. The community or our team will build it.",
  },
  {
    q: "Do components support dark mode?",
    a: "Yes. All components are designed to work with both light and dark themes using CSS custom properties (variables). Toggle the theme at the top of any page to preview.",
  },
  {
    q: "Is TypeScript required?",
    a: "TypeScript is used throughout the library but all components work perfectly with JavaScript. Remove type annotations and you have plain JS.",
  },
  {
    q: "How are submitted components reviewed?",
    a: "Our maintainers check for code quality, accessibility, documentation completeness, and visual design before merging. We provide feedback if changes are needed.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full py-5 text-left gap-4 group"
      >
        <span className="font-medium text-sm sm:text-base group-hover:text-brand transition-colors">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">FAQ</p>
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        </motion.div>

        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
