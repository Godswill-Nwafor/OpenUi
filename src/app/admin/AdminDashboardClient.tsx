"use client";

import { useState } from "react";
import { Layers, Users, Tag, CheckCircle, Clock, Eye, Trash2, Check, X } from "lucide-react";
import { allComponents } from "@/data";
import { CATEGORIES } from "@/lib/constants";
import { formatNumber } from "@/lib/utils";

type AdminTab = "overview" | "components" | "categories" | "contributors";

export function AdminDashboardClient() {
  const [tab, setTab] = useState<AdminTab>("overview");
  const [components, setComponents] = useState(
    allComponents.map((c) => ({ ...c, adminStatus: c.metadata.status }))
  );

  const pending = components.filter((c) => c.metadata.status === "pending");
  const approved = components.filter((c) => c.metadata.status === "approved");

  const approve = (id: string) =>
    setComponents((cs) => cs.map((c) => c.metadata.id === id ? { ...c, metadata: { ...c.metadata, status: "approved" as const } } : c));

  const reject = (id: string) =>
    setComponents((cs) => cs.map((c) => c.metadata.id === id ? { ...c, metadata: { ...c.metadata, status: "rejected" as const } } : c));

  const statCards = [
    { icon: Layers, label: "Total Components", value: components.length, color: "text-brand", bg: "bg-brand/10" },
    { icon: CheckCircle, label: "Approved", value: approved.length, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { icon: Clock, label: "Pending Review", value: pending.length, color: "text-amber-500", bg: "bg-amber-500/10" },
    { icon: Tag, label: "Categories", value: CATEGORIES.length, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">OpenUI Hub management console</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-500 text-xs font-semibold">
            Admin Only
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map(({ icon: Icon, label, value, color, bg }) => (
            <div key={label} className="p-5 rounded-2xl border border-border bg-card">
              <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center ${color} mb-3`}>
                <Icon size={18} />
              </div>
              <p className="text-2xl font-bold">{formatNumber(value)}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 border-b border-border mb-6">
          {(["overview", "components", "categories", "contributors"] as AdminTab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2.5 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
                tab === t
                  ? "border-brand text-brand"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab: Overview */}
        {tab === "overview" && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pending queue */}
              <div className="rounded-2xl border border-border bg-card p-5">
                <h2 className="font-semibold mb-4 flex items-center gap-2">
                  <Clock size={16} className="text-amber-500" /> Pending Review ({pending.length})
                </h2>
                {pending.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-6">All components reviewed ✓</p>
                ) : (
                  <div className="space-y-3">
                    {pending.slice(0, 5).map((comp) => (
                      <div key={comp.metadata.id} className="flex items-center justify-between gap-3 p-3 rounded-xl border border-border">
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{comp.metadata.name}</p>
                          <p className="text-xs text-muted-foreground">{comp.metadata.category}</p>
                        </div>
                        <div className="flex gap-1.5">
                          <button type="button" aria-label="Approve" onClick={() => approve(comp.metadata.id)}
                            className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-500 flex items-center justify-center hover:bg-emerald-500/25 transition-colors">
                            <Check size={13} />
                          </button>
                          <button type="button" aria-label="Reject" onClick={() => reject(comp.metadata.id)}
                            className="w-7 h-7 rounded-lg bg-red-500/15 text-red-500 flex items-center justify-center hover:bg-red-500/25 transition-colors">
                            <X size={13} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Category breakdown */}
              <div className="rounded-2xl border border-border bg-card p-5">
                <h2 className="font-semibold mb-4">Components by Category</h2>
                <div className="space-y-2.5">
                  {CATEGORIES.slice(0, 7).map((cat) => (
                    <div key={cat.id} className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground w-24 shrink-0 capitalize">{cat.label}</span>
                      <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
                        <div
                          className="h-full rounded-full bg-brand/60"
                          style={{ width: `${(cat.count / 10) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-4 text-right">{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Components */}
        {tab === "components" && (
          <div className="rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Component</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Category</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Author</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {components.slice(0, 20).map((comp, i) => (
                  <tr key={comp.metadata.id} className={`border-b border-border ${i % 2 === 0 ? "" : "bg-card/40"}`}>
                    <td className="px-4 py-3 font-medium">{comp.metadata.name}</td>
                    <td className="px-4 py-3 text-muted-foreground capitalize">{comp.metadata.category}</td>
                    <td className="px-4 py-3 text-muted-foreground">{comp.metadata.author.name}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        comp.metadata.status === "approved" ? "bg-emerald-500/15 text-emerald-500" :
                        comp.metadata.status === "pending" ? "bg-amber-500/15 text-amber-500" :
                        "bg-red-500/15 text-red-500"
                      }`}>
                        {comp.metadata.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <button type="button" aria-label="View component" className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-brand hover:bg-brand/10 transition-colors">
                          <Eye size={13} />
                        </button>
                        {comp.metadata.status === "pending" && (
                          <>
                            <button type="button" aria-label="Approve" onClick={() => approve(comp.metadata.id)}
                              className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center hover:bg-emerald-500/20 transition-colors">
                              <Check size={13} />
                            </button>
                            <button type="button" aria-label="Reject" onClick={() => reject(comp.metadata.id)}
                              className="w-7 h-7 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center hover:bg-red-500/20 transition-colors">
                              <X size={13} />
                            </button>
                          </>
                        )}
                        <button type="button" aria-label="Delete component" className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-colors">
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab: Categories */}
        {tab === "categories" && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="p-5 rounded-2xl border border-border bg-card flex items-center justify-between">
                <div>
                  <p className="font-semibold capitalize">{cat.label}</p>
                  <p className="text-xs text-muted-foreground">{cat.count} components</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-xs px-3 py-1.5 rounded-lg border border-border hover:bg-accent transition-colors">Edit</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Contributors */}
        {tab === "contributors" && (
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <Users size={40} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Contributors</h3>
            <p className="text-sm text-muted-foreground">
              Connect your database to see real contributor data.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
