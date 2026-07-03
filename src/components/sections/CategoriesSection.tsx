"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MousePointerClick, LayoutGrid, FormInput, TextCursor, Menu, PanelBottom, Sparkles, CreditCard, Quote, LayoutDashboard, Table, BarChart3, Tag, UserCircle, Bell, AppWindow, PanelRight, ChevronDown, ChevronRight, MoreHorizontal, Loader2, Rows, MessageSquare, Layers, GalleryHorizontal, BadgeIcon } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  MousePointerClick: <MousePointerClick size={20} />,
  LayoutGrid: <LayoutGrid size={20} />,
  FormInput: <FormInput size={20} />,
  TextCursor: <TextCursor size={20} />,
  Menu: <Menu size={20} />,
  PanelBottom: <PanelBottom size={20} />,
  Sparkles: <Sparkles size={20} />,
  CreditCard: <CreditCard size={20} />,
  Quote: <Quote size={20} />,
  LayoutDashboard: <LayoutDashboard size={20} />,
  Table: <Table size={20} />,
  BarChart3: <BarChart3 size={20} />,
  Badge: <BadgeIcon size={20} />,
  UserCircle: <UserCircle size={20} />,
  Bell: <Bell size={20} />,
  AppWindow: <AppWindow size={20} />,
  PanelRight: <PanelRight size={20} />,
  ChevronDown: <ChevronDown size={20} />,
  ChevronRight: <ChevronRight size={20} />,
  MoreHorizontal: <MoreHorizontal size={20} />,
  Loader2: <Loader2 size={20} />,
  Rows: <Rows size={20} />,
  MessageSquare: <MessageSquare size={20} />,
  Layers: <Layers size={20} />,
  GalleryHorizontal: <GalleryHorizontal size={20} />,
};

const gradients = [
  "from-indigo-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-pink-500 to-rose-600",
  "from-violet-500 to-indigo-600",
  "from-sky-500 to-cyan-600",
  "from-green-500 to-emerald-600",
];

export function CategoriesSection() {
  const featured = CATEGORIES.slice(0, 8);

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            Organized & Searchable
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            26 categories of production-ready components, from simple buttons to full dashboards.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {featured.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Link
                href={`/components?category=${cat.id}`}
                className="group flex items-center gap-3.5 p-4 rounded-2xl border border-border bg-card hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all duration-200"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                  {iconMap[cat.icon] ?? <Layers size={20} />}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors truncate">
                    {cat.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{cat.count} components</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-sm font-medium hover:bg-accent transition-colors"
          >
            View all 26 categories <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
