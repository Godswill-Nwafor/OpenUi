"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Download, Eye, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Badge } from "./Badge";
import { cn, formatNumber } from "@/lib/utils";
import type { ComponentMetadata } from "@/types";
import { getPreview } from "@/data/preview-registry";

interface ComponentCardProps {
  component: ComponentMetadata;
  index?: number;
}

export function ComponentCard({ component, index = 0 }: ComponentCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(`npx openui-hub add ${component.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const preview = getPreview(component.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/components/${component.id}`} className="block group">
        <div className={cn(
          "rounded-2xl border border-border bg-card overflow-hidden",
          "hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5",
          "transition-all duration-300"
        )}>
          {/* Preview area */}
          {preview ?? (
            <div className="relative h-44 bg-linear-to-br from-secondary to-muted flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--brand)/5_0%,transparent_70%)]" />
              <span className="text-4xl opacity-20 group-hover:opacity-30 transition-opacity select-none">🧩</span>
            </div>
          )}

          {/* Info */}
          <div className="p-4">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="font-semibold text-sm group-hover:text-brand transition-colors line-clamp-1">
                  {component.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                  {component.description}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              <Badge variant="brand">{component.category}</Badge>
              <Badge variant="secondary">{component.framework}</Badge>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Heart size={11} /> {formatNumber(component.likes)}
                </span>
                <span className="flex items-center gap-1">
                  <Download size={11} /> {formatNumber(component.downloads)}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className={cn(
                  "flex items-center gap-1 px-2 py-1 rounded-md text-xs transition-all duration-200",
                  copied
                    ? "bg-emerald-500/15 text-emerald-500"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                {copied ? <Check size={11} /> : <Copy size={11} />}
                {copied ? "Copied" : "Copy CLI"}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
