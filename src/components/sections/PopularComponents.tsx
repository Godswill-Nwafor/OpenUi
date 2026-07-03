"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ComponentCard } from "@/components/ui/ComponentCard";
import { getPopularComponents } from "@/data";

export function PopularComponents() {
  const popular = getPopularComponents(8);

  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-2">
              Community Favourites
            </p>
            <h2 className="text-4xl font-bold">Popular Components</h2>
            <p className="text-muted-foreground mt-2">
              The most-loved components from our library.
            </p>
          </div>
          <Link
            href="/components"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium hover:bg-accent transition-colors shrink-0"
          >
            View all <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {popular.map((comp, i) => (
            <ComponentCard key={comp.metadata.id} component={comp.metadata} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
