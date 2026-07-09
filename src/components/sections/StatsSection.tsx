"use client";

import { motion } from "framer-motion";
import { Layers, Users, Tag, Download, Star } from "lucide-react";
import { SITE_STATS } from "@/lib/constants";
import { formatNumber } from "@/lib/utils";

interface StatsSectionProps {
  /** Live star count fetched server-side; falls back to SITE_STATS.githubStars when unavailable. */
  githubStars?: number;
}

export function StatsSection({ githubStars }: StatsSectionProps) {
  const stats = [
    { icon: Layers, label: "Components", value: SITE_STATS.components, suffix: "+" },
    { icon: Users, label: "Contributors", value: SITE_STATS.contributors, suffix: "" },
    { icon: Tag, label: "Categories", value: SITE_STATS.categories, suffix: "" },
    { icon: Download, label: "Downloads", value: SITE_STATS.downloads, suffix: "+" },
    { icon: Star, label: "GitHub Stars", value: githubStars ?? SITE_STATS.githubStars, suffix: "" },
  ];

  return (
    <section className="border-y border-border bg-card">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {stats.map(({ icon: Icon, label, value, suffix }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-2">
                <Icon size={18} className="text-brand" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">
                {formatNumber(value)}{suffix}
              </p>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-medium">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
