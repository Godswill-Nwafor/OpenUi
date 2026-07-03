import type { ComponentDoc } from "@/types";

export const dashboardComponents: ComponentDoc[] = [
  {
    metadata: {
      id: "analytics-dashboard",
      name: "Analytics Dashboard",
      description: "A full analytics dashboard layout with stat cards, chart area, and recent activity.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "dashboards",
      tags: ["dashboard", "analytics", "stats", "chart", "admin"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 4231, likes: 387,
    },
    code: `import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingBag, Activity, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Total Revenue", value: "$48,295", change: 12.5, icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { label: "Active Users", value: "24,521", change: 8.2, icon: Users, color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { label: "Orders", value: "1,893", change: -3.1, icon: ShoppingBag, color: "text-amber-400", bg: "bg-amber-500/10" },
  { label: "Conversion", value: "3.24%", change: 1.8, icon: Activity, color: "text-purple-400", bg: "bg-purple-500/10" },
];

const activity = [
  { user: "Sarah Chen", action: "Purchased Pro plan", time: "2m ago", amount: "$19" },
  { user: "Mike Torres", action: "Upgraded to Enterprise", time: "15m ago", amount: "$79" },
  { user: "Emma Wilson", action: "Cancelled subscription", time: "1h ago", amount: "-$19" },
  { user: "David Kim", action: "Purchased Pro plan", time: "2h ago", amount: "$19" },
  { user: "Alex Johnson", action: "Purchased Starter", time: "3h ago", amount: "$0" },
];

export function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Analytics</h1>
            <p className="text-slate-400 text-sm mt-0.5">Last 30 days · Updated just now</p>
          </div>
          <select className="h-9 px-3 rounded-xl border border-white/10 bg-gray-900 text-white text-sm outline-none">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map(s => {
            const Icon = s.icon;
            const up = s.change >= 0;
            return (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-gray-900 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className={\`w-9 h-9 rounded-xl \${s.bg} flex items-center justify-center \${s.color}\`}>
                    <Icon size={18} />
                  </div>
                  <span className={\`flex items-center gap-1 text-xs font-medium \${up ? "text-emerald-400" : "text-red-400"}\`}>
                    {up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                    {Math.abs(s.change)}%
                  </span>
                </div>
                <p className="text-2xl font-bold text-white mb-0.5">{s.value}</p>
                <p className="text-xs text-slate-500">{s.label}</p>
              </div>
            );
          })}
        </div>

        {/* Chart + Activity */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chart placeholder */}
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-gray-900 p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-white">Revenue Overview</h2>
              <div className="flex gap-2">
                {["1W", "1M", "3M", "1Y"].map(r => (
                  <button key={r} className={\`px-2.5 py-1 rounded-lg text-xs \${r === "1M" ? "bg-indigo-600 text-white" : "text-slate-500 hover:text-white hover:bg-white/10"} transition-colors\`}>{r}</button>
                ))}
              </div>
            </div>
            {/* Simulated bar chart */}
            <div className="flex items-end gap-2 h-40">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md bg-indigo-600/70 hover:bg-indigo-500 transition-colors cursor-pointer"
                    style={{ height: \`\${h}%\` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-slate-600 mt-2">
              {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => <span key={m}>{m}</span>)}
            </div>
          </div>

          {/* Recent activity */}
          <div className="rounded-2xl border border-white/10 bg-gray-900 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-white">Recent Activity</h2>
              <button className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                View all <ArrowUpRight size={11} />
              </button>
            </div>
            <div className="space-y-4">
              {activity.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img src={\`https://avatars.githubusercontent.com/u/\${i + 1}?v=4\`} alt=""
                    className="w-8 h-8 rounded-full object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white font-medium truncate">{a.user}</p>
                    <p className="text-xs text-slate-500 truncate">{a.action}</p>
                  </div>
                  <div className="text-right">
                    <p className={\`text-sm font-semibold \${a.amount.startsWith("-") ? "text-red-400" : "text-emerald-400"}\`}>{a.amount}</p>
                    <p className="text-xs text-slate-600">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,
    demoCode: `import { AnalyticsDashboard } from "./AnalyticsDashboard";
export default function Demo() { return <AnalyticsDashboard />; }`,
    documentation: "A complete analytics dashboard with stat cards, bar chart, and activity feed. All data is static — wire up your API to the data arrays.",
    props: [],
  },
  {
    metadata: {
      id: "admin-panel",
      name: "Admin Panel Layout",
      description: "A full admin panel with sidebar, topbar, and content area.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "dashboards",
      tags: ["dashboard", "admin", "panel", "layout", "sidebar"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 3120, likes: 271,
    },
    code: `"use client";
import { useState } from "react";
import { LayoutDashboard, Users, Layers, Settings, Bell, Search, Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Layers, label: "Components", badge: "62" },
  { icon: Users, label: "Users", badge: "12" },
  { icon: Settings, label: "Settings" },
];

export function AdminPanel({ children }: { children?: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-950 overflow-hidden">
      {/* Sidebar */}
      <aside className={\`\${sidebarOpen ? "w-60" : "w-0 md:w-16"} transition-all duration-300 flex-shrink-0 overflow-hidden\`}>
        <div className="h-full flex flex-col bg-gray-900 border-r border-white/10">
          <div className="h-14 flex items-center px-4 border-b border-white/10">
            {sidebarOpen && <span className="font-bold text-white text-sm">OpenUI Admin</span>}
          </div>
          <nav className="flex-1 p-3 space-y-1">
            {navItems.map(({ icon: Icon, label, badge }) => (
              <button key={label} onClick={() => setActive(label)}
                className={\`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors text-left
                  \${active === label ? "bg-indigo-600/20 text-indigo-400" : "text-slate-400 hover:text-white hover:bg-white/10"}\`}>
                <Icon size={18} className="shrink-0" />
                {sidebarOpen && (
                  <>
                    <span className="flex-1 text-sm font-medium">{label}</span>
                    {badge && <span className="text-xs px-1.5 py-0.5 rounded-full bg-indigo-600/30 text-indigo-400">{badge}</span>}
                  </>
                )}
              </button>
            ))}
          </nav>
          <div className="p-3 border-t border-white/10">
            <div className={\`flex items-center gap-3 px-3 py-2 rounded-xl\`}>
              <img src="https://avatars.githubusercontent.com/u/1?v=4" className="w-7 h-7 rounded-full shrink-0" alt="" />
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-white truncate">Alex Johnson</p>
                  <p className="text-xs text-slate-500 truncate">Admin</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-14 flex items-center gap-4 px-5 border-b border-white/10 bg-gray-900/50 backdrop-blur-sm shrink-0">
          <button onClick={() => setSidebarOpen(v => !v)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
            {sidebarOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
          <div className="flex items-center gap-2 flex-1 max-w-xs">
            <Search size={14} className="text-slate-600" />
            <input placeholder="Search..." className="bg-transparent text-sm text-slate-300 placeholder:text-slate-600 outline-none flex-1" />
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button className="relative w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
              <Bell size={16} />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-indigo-500" />
            </button>
            <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
              <img src="https://avatars.githubusercontent.com/u/1?v=4" className="w-6 h-6 rounded-full" alt="" />
              <ChevronDown size={12} className="text-slate-400" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children ?? (
            <div className="flex items-center justify-center h-full text-slate-600 text-sm">
              Select a section from the sidebar
            </div>
          )}
        </main>
      </div>
    </div>
  );
}`,
    demoCode: `import { AdminPanel } from "./AdminPanel";
export default function Demo() {
  return (
    <div className="h-[500px] rounded-2xl overflow-hidden border border-white/10">
      <AdminPanel>
        <p className="text-slate-400 text-sm">Dashboard content goes here.</p>
      </AdminPanel>
    </div>
  );
}`,
    documentation: "Full admin panel shell with collapsible sidebar, topbar, and scrollable content area. Pass `children` for the page content.",
    props: [
      { name: "children", type: "ReactNode", required: false, description: "Content rendered in the main area." },
    ],
  },
  {
    metadata: {
      id: "kanban-board",
      name: "Kanban Board",
      description: "A drag-free visual kanban board with task cards and column counts.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "dashboards",
      tags: ["dashboard", "kanban", "board", "tasks", "project-management"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 2341, likes: 201,
    },
    code: `"use client";
import { useState } from "react";
import { Plus, MoreHorizontal } from "lucide-react";

type Priority = "low" | "medium" | "high";

interface Task {
  id: string;
  title: string;
  tag: string;
  priority: Priority;
  avatar: string;
}

const priorityColors: Record<Priority, string> = {
  low: "bg-emerald-500/15 text-emerald-400",
  medium: "bg-amber-500/15 text-amber-400",
  high: "bg-red-500/15 text-red-400",
};

const initialColumns = {
  todo: {
    title: "To Do",
    color: "bg-slate-500",
    tasks: [
      { id: "1", title: "Design new landing page hero", tag: "Design", priority: "high" as Priority, avatar: "1" },
      { id: "2", title: "Set up CI/CD pipeline", tag: "DevOps", priority: "medium" as Priority, avatar: "2" },
      { id: "3", title: "Write API documentation", tag: "Docs", priority: "low" as Priority, avatar: "3" },
    ],
  },
  progress: {
    title: "In Progress",
    color: "bg-indigo-500",
    tasks: [
      { id: "4", title: "Build component preview system", tag: "Frontend", priority: "high" as Priority, avatar: "4" },
      { id: "5", title: "Database schema migration", tag: "Backend", priority: "medium" as Priority, avatar: "5" },
    ],
  },
  review: {
    title: "In Review",
    color: "bg-amber-500",
    tasks: [
      { id: "6", title: "Code review: Auth module", tag: "Backend", priority: "high" as Priority, avatar: "1" },
    ],
  },
  done: {
    title: "Done",
    color: "bg-emerald-500",
    tasks: [
      { id: "7", title: "Set up project structure", tag: "Setup", priority: "low" as Priority, avatar: "2" },
      { id: "8", title: "Initial component library", tag: "Frontend", priority: "medium" as Priority, avatar: "3" },
    ],
  },
};

export function KanbanBoard() {
  const [columns] = useState(initialColumns);

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {Object.entries(columns).map(([key, col]) => (
        <div key={key} className="shrink-0 w-72">
          {/* Column header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className={\`w-2 h-2 rounded-full \${col.color}\`} />
              <span className="text-sm font-semibold text-white">{col.title}</span>
              <span className="text-xs text-slate-500 px-1.5 py-0.5 rounded-full bg-white/10">{col.tasks.length}</span>
            </div>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-colors">
              <Plus size={14} />
            </button>
          </div>

          {/* Tasks */}
          <div className="space-y-2.5">
            {col.tasks.map(task => (
              <div key={task.id}
                className="p-3.5 rounded-xl border border-white/10 bg-gray-900 hover:border-white/20 transition-colors cursor-pointer group">
                <div className="flex items-start justify-between mb-2.5">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400">{task.tag}</span>
                  <button className="opacity-0 group-hover:opacity-100 w-6 h-6 flex items-center justify-center rounded text-slate-500 hover:text-white transition-all">
                    <MoreHorizontal size={13} />
                  </button>
                </div>
                <p className="text-sm text-white font-medium mb-3 leading-snug">{task.title}</p>
                <div className="flex items-center justify-between">
                  <span className={\`text-xs px-2 py-0.5 rounded-full font-medium \${priorityColors[task.priority]}\`}>
                    {task.priority}
                  </span>
                  <img src={\`https://avatars.githubusercontent.com/u/\${task.avatar}?v=4\`} alt=""
                    className="w-6 h-6 rounded-full object-cover border-2 border-gray-900" />
                </div>
              </div>
            ))}

            {/* Add task */}
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-xl border border-dashed border-white/10
              text-slate-500 hover:text-slate-300 hover:border-white/20 transition-colors text-sm">
              <Plus size={14} /> Add task
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}`,
    demoCode: `import { KanbanBoard } from "./KanbanBoard";
export default function Demo() {
  return <div className="bg-gray-950 p-6 rounded-2xl overflow-x-auto"><KanbanBoard /></div>;
}`,
    documentation: "A visual Kanban board with four columns (To Do, In Progress, In Review, Done). Static data — integrate with your state management to add drag-and-drop.",
    props: [],
  },
  {
    metadata: {
      id: "data-table",
      name: "Data Table",
      description: "A sortable data table with pagination, search, and row actions.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "dashboards",
      tags: ["dashboard", "table", "data", "sort", "pagination", "filter"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 2876, likes: 241,
    },
    code: `"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown, Search, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

interface Row { id: string; name: string; email: string; role: string; status: "active" | "inactive"; joined: string; }

const data: Row[] = [
  { id: "1", name: "Alex Johnson", email: "alex@example.com", role: "Admin", status: "active", joined: "Nov 1, 2024" },
  { id: "2", name: "Sarah Chen", email: "sarah@example.com", role: "Developer", status: "active", joined: "Nov 3, 2024" },
  { id: "3", name: "Mike Torres", email: "mike@example.com", role: "Designer", status: "inactive", joined: "Nov 5, 2024" },
  { id: "4", name: "Emma Wilson", email: "emma@example.com", role: "Developer", status: "active", joined: "Nov 8, 2024" },
  { id: "5", name: "David Kim", email: "david@example.com", role: "Manager", status: "active", joined: "Nov 10, 2024" },
];

export function DataTable() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<{ key: keyof Row; dir: "asc" | "desc" }>({ key: "name", dir: "asc" });
  const [page, setPage] = useState(1);
  const perPage = 4;

  const filtered = data
    .filter(r => [r.name, r.email, r.role].some(f => f.toLowerCase().includes(query.toLowerCase())))
    .sort((a, b) => {
      const v = a[sort.key] < b[sort.key] ? -1 : 1;
      return sort.dir === "asc" ? v : -v;
    });

  const pages = Math.ceil(filtered.length / perPage);
  const rows = filtered.slice((page - 1) * perPage, page * perPage);

  const sortBy = (key: keyof Row) =>
    setSort(s => ({ key, dir: s.key === key && s.dir === "asc" ? "desc" : "asc" }));

  const SortIcon = ({ k }: { k: keyof Row }) => (
    <span className="inline-flex flex-col ml-1">
      <ChevronUp size={10} className={sort.key === k && sort.dir === "asc" ? "text-indigo-400" : "text-slate-700"} />
      <ChevronDown size={10} className={sort.key === k && sort.dir === "desc" ? "text-indigo-400" : "text-slate-700"} />
    </span>
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900 overflow-hidden">
      {/* Search */}
      <div className="flex items-center gap-3 p-4 border-b border-white/10">
        <div className="relative flex-1 max-w-xs">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input value={query} onChange={e => { setQuery(e.target.value); setPage(1); }}
            placeholder="Search users..."
            className="w-full h-9 pl-9 pr-3 rounded-xl border border-white/10 bg-gray-800 text-white text-sm outline-none focus:border-indigo-500 placeholder:text-slate-600" />
        </div>
        <span className="text-xs text-slate-500 ml-auto">{filtered.length} users</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-gray-950/40">
              {(["name", "email", "role", "status", "joined"] as (keyof Row)[]).map(k => (
                <th key={k} onClick={() => sortBy(k)}
                  className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 cursor-pointer hover:text-white transition-colors select-none">
                  {k} <SortIcon k={k} />
                </th>
              ))}
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.id} className={\`border-b border-white/5 hover:bg-white/[0.02] transition-colors \${i % 2 === 0 ? "" : "bg-gray-950/20"}\`}>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <img src={\`https://avatars.githubusercontent.com/u/\${row.id}?v=4\`} className="w-7 h-7 rounded-full" alt="" />
                    <span className="font-medium text-white">{row.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-slate-400">{row.email}</td>
                <td className="px-4 py-3.5 text-slate-300">{row.role}</td>
                <td className="px-4 py-3.5">
                  <span className={\`px-2 py-0.5 rounded-full text-xs font-medium
                    \${row.status === "active" ? "bg-emerald-500/15 text-emerald-400" : "bg-slate-500/15 text-slate-400"}\`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-slate-400">{row.joined}</td>
                <td className="px-4 py-3.5 text-right">
                  <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-colors ml-auto">
                    <MoreHorizontal size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
        <p className="text-xs text-slate-500">Page {page} of {pages}</p>
        <div className="flex items-center gap-1">
          <button disabled={page === 1} onClick={() => setPage(p => p - 1)}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
            <ChevronLeft size={14} />
          </button>
          {Array.from({ length: pages }, (_, i) => i + 1).map(p => (
            <button key={p} onClick={() => setPage(p)}
              className={\`w-7 h-7 flex items-center justify-center rounded-lg text-xs transition-colors
                \${p === page ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white hover:bg-white/10"}\`}>
              {p}
            </button>
          ))}
          <button disabled={page === pages} onClick={() => setPage(p => p + 1)}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}`,
    demoCode: `import { DataTable } from "./DataTable";
export default function Demo() { return <div className="bg-gray-950 p-6 rounded-2xl"><DataTable /></div>; }`,
    documentation: "A sortable, searchable data table with client-side pagination. Click column headers to sort ascending/descending.",
    props: [],
  },
  {
    metadata: {
      id: "user-profile-dashboard",
      name: "User Profile Dashboard",
      description: "A GitHub-style user profile page with bio, stats, and activity grid.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "dashboards",
      tags: ["dashboard", "profile", "user", "github", "activity", "stats"],
      createdAt: "2026-06-25", updatedAt: "2026-07-03",
      status: "approved", downloads: 1876, likes: 163,
    },
    code: `import { Github, Globe, MapPin, Calendar, Star, GitFork, Package } from "lucide-react";

interface Repo { name: string; desc: string; lang: string; stars: number; forks: number; }

const repos: Repo[] = [
  { name: "openui-hub", desc: "Open source UI component library for React", lang: "TypeScript", stars: 1240, forks: 89 },
  { name: "next-starter", desc: "Production-ready Next.js starter template", lang: "TypeScript", stars: 876, forks: 134 },
  { name: "tailwind-components", desc: "Beautiful Tailwind CSS components", lang: "CSS", stars: 543, forks: 67 },
];

const langColors: Record<string, string> = {
  TypeScript: "bg-blue-500", JavaScript: "bg-yellow-400", CSS: "bg-pink-500", Python: "bg-green-500",
};

export function UserProfileDashboard() {
  const activity = Array.from({ length: 52 * 5 }, (_, i) =>
    Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0
  );

  const intensities = ["bg-gray-800", "bg-emerald-900", "bg-emerald-700", "bg-emerald-500", "bg-emerald-400"];

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-[260px_1fr] gap-8">
        {/* Sidebar */}
        <div>
          <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="Avatar"
            className="w-full rounded-2xl border-4 border-gray-900 aspect-square object-cover mb-4" />
          <h1 className="text-xl font-bold text-white">Alex Johnson</h1>
          <p className="text-slate-400 text-sm mb-4">alexjohnson</p>
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            Building open-source tools for developers. Coffee enthusiast. TypeScript advocate.
          </p>
          <div className="space-y-1.5 text-sm text-slate-400 mb-4">
            <div className="flex items-center gap-2"><MapPin size={13} /> San Francisco, CA</div>
            <div className="flex items-center gap-2"><Globe size={13} /> <a href="#" className="text-indigo-400 hover:underline">alexj.dev</a></div>
            <div className="flex items-center gap-2"><Calendar size={13} /> Joined November 2024</div>
          </div>
          <div className="flex gap-4 text-sm">
            <span className="text-white font-semibold">248 <span className="text-slate-400 font-normal">following</span></span>
            <span className="text-white font-semibold">1.2k <span className="text-slate-400 font-normal">followers</span></span>
          </div>
        </div>

        {/* Main */}
        <div>
          {/* Activity grid */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-white mb-3">Contribution Activity</h2>
            <div className="flex gap-1 overflow-x-auto pb-2">
              {Array.from({ length: 52 }, (_, week) => (
                <div key={week} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }, (_, day) => {
                    const val = activity[week * 7 + day] ?? 0;
                    return (
                      <div key={day}
                        className={\`w-3 h-3 rounded-sm \${intensities[val]} transition-colors\`}
                        title={\`\${val} contributions\`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Repos */}
          <h2 className="text-sm font-semibold text-white mb-3">Pinned Repositories</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {repos.map(repo => (
              <div key={repo.name} className="p-4 rounded-xl border border-white/10 bg-gray-900 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Package size={14} className="text-indigo-400" />
                  <a href="#" className="text-sm font-semibold text-indigo-400 hover:underline">{repo.name}</a>
                </div>
                <p className="text-xs text-slate-400 mb-3 leading-relaxed">{repo.desc}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <div className={\`w-2.5 h-2.5 rounded-full \${langColors[repo.lang] ?? "bg-gray-500"}\`} />
                    {repo.lang}
                  </span>
                  <span className="flex items-center gap-1"><Star size={11} /> {repo.stars}</span>
                  <span className="flex items-center gap-1"><GitFork size={11} /> {repo.forks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}`,
    demoCode: `import { UserProfileDashboard } from "./UserProfileDashboard";
export default function Demo() { return <UserProfileDashboard />; }`,
    documentation: "A GitHub-inspired user profile dashboard with contribution activity grid, bio, and pinned repository cards.",
    props: [],
  },
];
