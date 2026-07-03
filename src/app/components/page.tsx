"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";
import { ComponentCard } from "@/components/ui/ComponentCard";
import { allComponents, searchComponents } from "@/data";
import { CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Category } from "@/types";

type SortOption = "popular" | "newest" | "updated";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest" },
  { value: "updated", label: "Recently Updated" },
];

export default function ComponentsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "">("");
  const [sort, setSort] = useState<SortOption>("popular");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    let list = query ? searchComponents(query) : allComponents;

    if (category) {
      list = list.filter((c) => c.metadata.category === category);
    }

    return [...list].sort((a, b) => {
      const am = a.metadata;
      const bm = b.metadata;
      if (sort === "popular") return bm.likes - am.likes;
      if (sort === "newest") return new Date(bm.createdAt).getTime() - new Date(am.createdAt).getTime();
      return new Date(bm.updatedAt).getTime() - new Date(am.updatedAt).getTime();
    });
  }, [query, category, sort]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-2">UI Components</h1>
          <p className="text-muted-foreground mb-8">
            {allComponents.length} production ready components across 26 categories.
          </p>

          {/* Search + filters row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <SearchBar
              value={query}
              onChange={(v) => setQuery(v)}
              placeholder="Search by name, tag, author…"
              className="flex-1 max-w-xl"
              size="md"
            />
            <button
              onClick={() => setFiltersOpen((v) => !v)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors",
                filtersOpen || category
                  ? "border-brand text-brand bg-brand/8"
                  : "border-border hover:bg-accent"
              )}
            >
              <SlidersHorizontal size={15} />
              Filters
              {category && <span className="w-2 h-2 rounded-full bg-brand" />}
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="h-11 px-3 rounded-xl border border-border bg-card text-sm outline-none focus:border-brand transition-colors"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Filters panel */}
          {filtersOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-border overflow-hidden"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCategory("")}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium transition-colors border",
                    !category
                      ? "bg-brand text-white border-brand"
                      : "border-border hover:bg-accent"
                  )}
                >
                  All
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id === category ? "" : cat.id)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium transition-colors border",
                      category === cat.id
                        ? "bg-brand text-white border-brand"
                        : "border-border hover:bg-accent"
                    )}
                  >
                    {cat.label} ({cat.count})
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Active filters */}
        {(query || category) && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-sm text-muted-foreground">
              {results.length} result{results.length !== 1 ? "s" : ""}
            </span>
            {query && (
              <button
                onClick={() => setQuery("")}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-accent hover:bg-brand/10 transition-colors"
              >
                "{query}" <X size={11} />
              </button>
            )}
            {category && (
              <button
                onClick={() => setCategory("")}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-accent hover:bg-brand/10 transition-colors"
              >
                {CATEGORIES.find((c) => c.id === category)?.label} <X size={11} />
              </button>
            )}
          </div>
        )}

        {results.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">🔍</p>
            <h3 className="font-semibold text-lg mb-2">No components found</h3>
            <p className="text-muted-foreground text-sm">
              Try a different search or{" "}
              <button onClick={() => { setQuery(""); setCategory(""); }} className="text-brand hover:underline">
                clear all filters
              </button>
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {results.map((comp, i) => (
              <ComponentCard key={comp.metadata.id} component={comp.metadata} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
