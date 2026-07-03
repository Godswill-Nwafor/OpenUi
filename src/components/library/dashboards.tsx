"use client";
import { useState } from "react";
import { TrendingUp, Users, DollarSign, Activity, LayoutDashboard, Layers, Settings, Bell, Search, ChevronLeft, LogOut, Plus, MoreHorizontal, ChevronUp, ChevronDown, ChevronsUpDown, Circle, GitFork, Star, Code } from "lucide-react";

// AnalyticsDashboard
const stats = [
  { label: "Total Revenue", value: "$48,295", change: "+12.5%", up: true, icon: <DollarSign size={16} /> },
  { label: "Active Users", value: "8,234", change: "+3.2%", up: true, icon: <Users size={16} /> },
  { label: "Conversion", value: "3.61%", change: "-0.8%", up: false, icon: <TrendingUp size={16} /> },
  { label: "Uptime", value: "99.99%", change: "+0.01%", up: true, icon: <Activity size={16} /> },
];
const barHeights = [40, 65, 55, 80, 70, 90, 60, 75, 85, 70, 95, 80];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 p-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-white">Analytics Dashboard</h1>
            <p className="text-slate-400 text-sm">Last 30 days</p>
          </div>
          <select className="px-3 py-2 rounded-lg border border-white/10 bg-gray-900 text-slate-300 text-sm">
            <option>Last 30 days</option><option>Last 7 days</option><option>Last 90 days</option>
          </select>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map(s => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-gray-900 p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-slate-400 text-xs font-medium">{s.label}</p>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${s.up ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400"}`}>{s.icon}</div>
              </div>
              <p className="text-xl font-bold text-white mb-1">{s.value}</p>
              <p className={`text-xs font-medium ${s.up ? "text-emerald-400" : "text-red-400"}`}>{s.change} vs last period</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-xl border border-white/10 bg-gray-900 p-5">
            <h3 className="text-sm font-semibold text-white mb-4">Revenue Overview</h3>
            <div className="flex items-end gap-2 h-32">
              {barHeights.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full rounded-t-sm bg-indigo-600 hover:bg-indigo-500 transition-colors cursor-pointer" style={{ height: `${h}%` }} title={`${months[i]}: $${(h * 500).toLocaleString()}`} />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {months.map(m => <span key={m} className="text-[10px] text-slate-600">{m}</span>)}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-gray-900 p-5">
            <h3 className="text-sm font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { user: "Sarah K.", action: "Upgraded to Pro", time: "2m ago", color: "bg-emerald-500" },
                { user: "Mike D.", action: "Submitted a bug report", time: "15m ago", color: "bg-amber-500" },
                { user: "Linh T.", action: "New user signup", time: "1h ago", color: "bg-indigo-500" },
                { user: "Omar A.", action: "Payment failed", time: "2h ago", color: "bg-red-500" },
                { user: "Emma R.", action: "Exported data", time: "3h ago", color: "bg-purple-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.color} mt-1.5 shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate"><span className="font-medium">{item.user}</span> {item.action}</p>
                    <p className="text-xs text-slate-500">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// AdminPanel
const sideItems = [
  { icon: <LayoutDashboard size={16} />, label: "Dashboard" },
  { icon: <Layers size={16} />, label: "Components" },
  { icon: <Users size={16} />, label: "Users" },
  { icon: <Bell size={16} />, label: "Alerts", badge: 4 },
  { icon: <Settings size={16} />, label: "Settings" },
];

export function AdminPanel({ children }: { children?: React.ReactNode }) {
  const [active, setActive] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen bg-gray-950 overflow-hidden">
      <aside className={`flex flex-col bg-gray-900 border-r border-white/10 transition-all duration-300 shrink-0 ${collapsed ? "w-14" : "w-56"}`}>
        <div className="flex items-center justify-between h-14 px-4 border-b border-white/10">
          {!collapsed && <span className="font-bold text-white text-sm">OpenUI Hub</span>}
          <button onClick={() => setCollapsed(v => !v)} className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 ml-auto">
            <ChevronLeft size={14} className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
          </button>
        </div>
        <nav className="flex-1 p-2 space-y-0.5">
          {sideItems.map(item => (
            <button key={item.label} onClick={() => setActive(item.label)}
              className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl text-left text-sm transition-colors ${active === item.label ? "bg-indigo-600/20 text-indigo-400" : "text-slate-400 hover:text-white hover:bg-white/10"} ${collapsed ? "justify-center" : ""}`}>
              <span className="shrink-0">{item.icon}</span>
              {!collapsed && (
                <><span className="flex-1">{item.label}</span>{item.badge && <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center">{item.badge}</span>}</>
              )}
            </button>
          ))}
        </nav>
        <div className="p-2 border-t border-white/10">
          <button className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 text-sm transition-colors ${collapsed ? "justify-center" : ""}`}>
            <LogOut size={16} className="shrink-0" />{!collapsed && <span>Sign out</span>}
          </button>
        </div>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between h-14 px-5 border-b border-white/10 bg-gray-900 shrink-0">
          <div className="flex items-center gap-2 flex-1 max-w-xs">
            <div className="flex items-center gap-2 h-8 px-3 rounded-lg border border-white/10 bg-gray-800 flex-1">
              <Search size={13} className="text-slate-500" />
              <input className="flex-1 bg-transparent text-sm text-slate-300 placeholder:text-slate-600 outline-none" placeholder="Search..." />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10">
              <Bell size={15} /><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-indigo-500" />
            </button>
            <img src="https://avatars.githubusercontent.com/u/1?v=4" className="w-7 h-7 rounded-full" alt="user" />
          </div>
        </header>
        <div className="flex-1 overflow-auto p-5">
          {children ?? (
            <div>
              <h1 className="text-lg font-bold text-white mb-4">{active}</h1>
              <div className="grid grid-cols-3 gap-4">
                {[["Users", "1,284", "emerald"], ["Revenue", "$9,420", "indigo"], ["Uptime", "99.9%", "purple"]].map(([l, v, c]) => (
                  <div key={l} className="rounded-xl border border-white/10 bg-gray-900 p-4">
                    <p className="text-slate-400 text-xs mb-1">{l}</p>
                    <p className="text-xl font-bold text-white">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// KanbanBoard
const columns = [
  { id: "todo", label: "To Do", color: "text-slate-400", count: 3, tasks: [
    { id: 1, title: "Design landing page", priority: "High", tag: "Design" },
    { id: 2, title: "Set up CI/CD pipeline", priority: "Medium", tag: "DevOps" },
    { id: 3, title: "Write API docs", priority: "Low", tag: "Docs" },
  ]},
  { id: "inprogress", label: "In Progress", color: "text-blue-400", count: 2, tasks: [
    { id: 4, title: "Build component library", priority: "High", tag: "Frontend" },
    { id: 5, title: "Database schema design", priority: "High", tag: "Backend" },
  ]},
  { id: "review", label: "In Review", color: "text-amber-400", count: 2, tasks: [
    { id: 6, title: "Auth middleware", priority: "High", tag: "Backend" },
    { id: 7, title: "Mobile responsiveness", priority: "Medium", tag: "Frontend" },
  ]},
  { id: "done", label: "Done", color: "text-emerald-400", count: 2, tasks: [
    { id: 8, title: "Project setup", priority: "Low", tag: "DevOps" },
    { id: 9, title: "Requirements doc", priority: "Medium", tag: "Docs" },
  ]},
];
const priorityColor: Record<string, string> = { High: "text-red-400 bg-red-500/10", Medium: "text-amber-400 bg-amber-500/10", Low: "text-slate-400 bg-white/5" };

export function KanbanBoard() {
  return (
    <div className="min-h-screen bg-gray-950 p-5">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-white">Project Board</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors">
          <Plus size={15} /> Add task
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 min-h-[60vh]">
        {columns.map(col => (
          <div key={col.id} className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold uppercase tracking-wider ${col.color}`}>{col.label}</span>
                <span className="text-xs text-slate-600 bg-white/5 rounded-full px-1.5 py-0.5">{col.count}</span>
              </div>
              <button className="text-slate-500 hover:text-white transition-colors"><Plus size={14} /></button>
            </div>
            <div className="space-y-2.5 flex-1">
              {col.tasks.map(task => (
                <div key={task.id} className="rounded-xl border border-white/10 bg-gray-900 p-3.5 cursor-pointer hover:border-white/20 transition-colors group">
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <p className="text-sm text-white font-medium leading-snug">{task.title}</p>
                    <button className="text-slate-600 hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal size={14} /></button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400">{task.tag}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityColor[task.priority]}`}>{task.priority}</span>
                  </div>
                </div>
              ))}
              <button className="w-full py-2.5 rounded-xl border border-dashed border-white/10 text-slate-600 hover:text-slate-400 hover:border-white/20 text-xs flex items-center justify-center gap-1.5 transition-colors">
                <Plus size={13} /> Add card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// DataTable
const tableData = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active", joined: "Jan 3, 2024" },
  { id: 2, name: "Bob Martinez", email: "bob@example.com", role: "Editor", status: "Active", joined: "Feb 14, 2024" },
  { id: 3, name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive", joined: "Mar 22, 2024" },
  { id: 4, name: "David Kim", email: "david@example.com", role: "Editor", status: "Active", joined: "Apr 5, 2024" },
  { id: 5, name: "Emma Davis", email: "emma@example.com", role: "Admin", status: "Active", joined: "May 19, 2024" },
];

export function DataTable() {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);

  const toggleSort = (key: string) => {
    if (sortKey === key) setDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  };
  function setDir(fn: (d: "asc" | "desc") => "asc" | "desc") { setSortDir(fn); }

  const filtered = tableData.filter(r =>
    r.name.toLowerCase().includes(query.toLowerCase()) ||
    r.email.toLowerCase().includes(query.toLowerCase())
  );
  const sorted = sortKey ? [...filtered].sort((a, b) => {
    const av = (a as Record<string, string | number>)[sortKey], bv = (b as Record<string, string | number>)[sortKey];
    return (av < bv ? -1 : av > bv ? 1 : 0) * (sortDir === "asc" ? 1 : -1);
  }) : filtered;

  const perPage = 3;
  const pages = Math.ceil(sorted.length / perPage);
  const rows = sorted.slice((page - 1) * perPage, page * perPage);

  const SortIcon = ({ col }: { col: string }) => sortKey === col
    ? sortDir === "asc" ? <ChevronUp size={12} /> : <ChevronDown size={12} />
    : <ChevronsUpDown size={12} className="opacity-30" />;

  return (
    <div className="min-h-screen bg-gray-950 p-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-bold text-white">Users</h1>
        <div className="flex items-center gap-2 h-9 px-3 rounded-lg border border-white/10 bg-gray-900">
          <Search size={13} className="text-slate-500" />
          <input value={query} onChange={e => { setQuery(e.target.value); setPage(1); }} placeholder="Search users..." className="bg-transparent text-sm text-slate-300 placeholder:text-slate-600 outline-none w-40" />
        </div>
      </div>
      <div className="rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-900/80">
            <tr>
              {[["name", "Name"], ["email", "Email"], ["role", "Role"], ["status", "Status"], ["joined", "Joined"]].map(([k, l]) => (
                <th key={k} className="px-4 py-3 text-left">
                  <button onClick={() => toggleSort(k)} className="flex items-center gap-1.5 text-slate-400 font-medium hover:text-white transition-colors">
                    {l} <SortIcon col={k} />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.id} className={`border-t border-white/5 ${i % 2 ? "bg-gray-900/30" : "bg-gray-950"} hover:bg-white/5 transition-colors`}>
                <td className="px-4 py-3 text-white font-medium">{row.name}</td>
                <td className="px-4 py-3 text-slate-400">{row.email}</td>
                <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs">{row.role}</span></td>
                <td className="px-4 py-3">
                  <span className={`flex items-center gap-1.5 text-xs font-medium ${row.status === "Active" ? "text-emerald-400" : "text-slate-500"}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${row.status === "Active" ? "bg-emerald-500" : "bg-slate-600"}`} />{row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-400">{row.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-4 py-3 border-t border-white/10 bg-gray-900/50">
          <p className="text-xs text-slate-500">{sorted.length} user{sorted.length !== 1 ? "s" : ""}</p>
          <div className="flex items-center gap-1">
            {Array.from({ length: pages }, (_, i) => (
              <button key={i} onClick={() => setPage(i + 1)}
                className={`w-7 h-7 rounded-lg text-xs font-medium transition-colors ${page === i + 1 ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-white/10"}`}>{i + 1}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// UserProfileDashboard
const weeks = Array.from({ length: 52 }, (_, wi) =>
  Array.from({ length: 7 }, (_, di) => Math.random() > 0.55 ? Math.floor(Math.random() * 10) + 1 : 0)
);
const pinned = [
  { name: "openui-hub", desc: "Open source UI components", stars: 312, forks: 48, lang: "TypeScript", color: "bg-blue-500" },
  { name: "design-system", desc: "Company-wide design tokens and utilities", stars: 89, forks: 15, lang: "CSS", color: "bg-pink-500" },
];
function cellColor(n: number) {
  if (n === 0) return "bg-gray-800";
  if (n < 3) return "bg-emerald-900";
  if (n < 6) return "bg-emerald-700";
  if (n < 9) return "bg-emerald-500";
  return "bg-emerald-400";
}

export function UserProfileDashboard() {
  const [tab, setTab] = useState("overview");
  return (
    <div className="min-h-screen bg-gray-950 p-5">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start gap-5 mb-6">
          <img src="https://avatars.githubusercontent.com/u/583231?v=4" className="w-16 h-16 rounded-full border-2 border-white/10" alt="profile" />
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold text-white">Alex Johnson</h1>
            <p className="text-slate-400 text-sm">@alexj · Full Stack Developer</p>
            <p className="text-slate-400 text-sm mt-1">Building open source tools for the web. Loves TypeScript & Tailwind.</p>
            <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
              <span><span className="text-white font-semibold">248</span> following</span>
              <span><span className="text-white font-semibold">1.2k</span> followers</span>
            </div>
          </div>
          <button className="px-4 py-2 rounded-xl border border-white/10 text-slate-300 text-sm hover:bg-white/10 transition-colors">Edit profile</button>
        </div>
        <div className="border-b border-white/10 mb-6">
          <div className="flex gap-0 -mb-px">
            {["overview", "repositories", "activity"].map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-4 py-2.5 text-sm font-medium capitalize transition-colors border-b-2 ${tab === t ? "border-indigo-500 text-white" : "border-transparent text-slate-500 hover:text-slate-300"}`}>{t}</button>
            ))}
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-white/10 bg-gray-900 p-5 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-white">Contribution activity</h3>
              <p className="text-xs text-slate-500">1,247 contributions in the last year</p>
            </div>
            <div className="flex gap-0.5 overflow-x-auto pb-1">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-0.5">
                  {week.map((count, di) => (
                    <div key={di} className={`w-2.5 h-2.5 rounded-sm ${cellColor(count)}`} title={`${count} contributions`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {pinned.map(repo => (
              <div key={repo.name} className="rounded-xl border border-white/10 bg-gray-900 p-4 hover:border-white/20 transition-colors">
                <div className="flex items-start justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <Code size={15} className="text-indigo-400" />
                    <span className="text-sm font-semibold text-indigo-400">{repo.name}</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-slate-500">Public</span>
                </div>
                <p className="text-xs text-slate-400 mb-3">{repo.desc}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><span className={`w-2.5 h-2.5 rounded-full ${repo.color}`} />{repo.lang}</span>
                  <span className="flex items-center gap-1"><Star size={11} />{repo.stars}</span>
                  <span className="flex items-center gap-1"><GitFork size={11} />{repo.forks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Previews ─────────────────────────────────────────────────────────────────

export function AnalyticsDashboardPreview() {
  return <AnalyticsDashboard />;
}

export function AdminPanelPreview() {
  return <AdminPanel />;
}

export function KanbanBoardPreview() {
  return <KanbanBoard />;
}

export function DataTablePreview() {
  return <DataTable />;
}

export function UserProfilePreview() {
  return <UserProfileDashboard />;
}
