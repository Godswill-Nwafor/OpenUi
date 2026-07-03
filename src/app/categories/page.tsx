"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers, MousePointerClick, LayoutGrid, FormInput, TextCursor, Menu, PanelBottom, Sparkles, CreditCard, Quote, LayoutDashboard, Table, BarChart3, Tag, UserCircle, Bell, AppWindow, PanelRight, ChevronDown, ChevronRight, MoreHorizontal, Loader2, Rows, MessageSquare, GalleryHorizontal, BadgeIcon } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  MousePointerClick: <MousePointerClick size={22} />,
  LayoutGrid: <LayoutGrid size={22} />,
  FormInput: <FormInput size={22} />,
  TextCursor: <TextCursor size={22} />,
  Menu: <Menu size={22} />,
  PanelBottom: <PanelBottom size={22} />,
  Sparkles: <Sparkles size={22} />,
  CreditCard: <CreditCard size={22} />,
  Quote: <Quote size={22} />,
  LayoutDashboard: <LayoutDashboard size={22} />,
  Table: <Table size={22} />,
  BarChart3: <BarChart3 size={22} />,
  Badge: <BadgeIcon size={22} />,
  UserCircle: <UserCircle size={22} />,
  Bell: <Bell size={22} />,
  AppWindow: <AppWindow size={22} />,
  PanelRight: <PanelRight size={22} />,
  ChevronDown: <ChevronDown size={22} />,
  ChevronRight: <ChevronRight size={22} />,
  MoreHorizontal: <MoreHorizontal size={22} />,
  Loader2: <Loader2 size={22} />,
  Rows: <Rows size={22} />,
  MessageSquare: <MessageSquare size={22} />,
  Layers: <Layers size={22} />,
  GalleryHorizontal: <GalleryHorizontal size={22} />,
};

const gradients = [
  "from-indigo-500 to-purple-600", "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600", "from-amber-500 to-orange-600",
  "from-pink-500 to-rose-600", "from-violet-500 to-indigo-600",
  "from-sky-500 to-cyan-600", "from-green-500 to-emerald-600",
  "from-red-500 to-rose-600", "from-yellow-500 to-amber-600",
  "from-fuchsia-500 to-pink-600", "from-teal-500 to-green-600",
  "from-blue-500 to-indigo-600", "from-orange-500 to-red-600",
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 py-14 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold uppercase tracking-widest text-brand mb-3"
          >
            Organized & Searchable
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            All Categories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            {CATEGORIES.length} categories · {CATEGORIES.reduce((s, c) => s + c.count, 0)}+ components
          </motion.p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
            >
              <Link
                href={`/components?category=${cat.id}`}
                className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {iconMap[cat.icon] ?? <Layers size={22} />}
                </div>
                <h3 className="font-semibold text-base mb-1 group-hover:text-brand transition-colors">
                  {cat.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {cat.count} component{cat.count !== 1 ? "s" : ""}
                  </span>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
