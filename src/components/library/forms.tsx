"use client";
import { useState } from "react";
import { Eye, EyeOff, Github, Mail, Send, Check, Search, SlidersHorizontal, X, Save, Trash2 } from "lucide-react";

// LoginForm
export function LoginForm() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ email: "", password: "" });
  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.email.includes("@")) e.email = "Enter a valid email.";
    if (form.password.length < 8) e.password = "Password must be at least 8 characters.";
    return e;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
  };
  return (
    <div className="w-full max-w-sm">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
        <p className="text-gray-500 text-sm mt-1">Sign in to your account</p>
      </div>
      <button className="w-full flex items-center justify-center gap-3 h-11 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:bg-gray-100 transition-colors mb-4">
        <Github size={16} /> Continue with GitHub
      </button>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-px bg-gray-100" /><span className="text-xs text-gray-400">or</span><div className="flex-1 h-px bg-gray-100" />
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
          <div className="relative">
            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="email" value={form.email}
              onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(x => ({ ...x, email: "" })); }}
              placeholder="you@example.com"
              className={`w-full h-11 pl-10 pr-4 rounded-xl border bg-white text-gray-900 placeholder:text-gray-400 text-sm outline-none transition-colors ${errors.email ? "border-red-500/50 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"}`} />
          </div>
          {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Forgot password?</a>
          </div>
          <div className="relative">
            <input type={show ? "text" : "password"} value={form.password}
              onChange={e => { setForm(f => ({ ...f, password: e.target.value })); setErrors(x => ({ ...x, password: "" })); }}
              placeholder="••••••••"
              className={`w-full h-11 px-4 pr-11 rounded-xl border bg-white text-gray-900 placeholder:text-gray-400 text-sm outline-none transition-colors ${errors.password ? "border-red-500/50 focus:border-red-500" : "border-gray-200 focus:border-indigo-500"}`} />
            <button type="button" onClick={() => setShow(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors">
              {show ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
          {errors.password && <p className="text-red-400 text-xs mt-1.5">{errors.password}</p>}
        </div>
        <button type="submit" disabled={loading}
          className="w-full h-11 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 disabled:opacity-60 transition-colors flex items-center justify-center gap-2">
          {loading && <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>}
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
      <p className="text-center text-sm text-gray-400 mt-6">
        Don&apos;t have an account?{" "}
        <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Sign up free</a>
      </p>
    </div>
  );
}

// ContactForm
const MAX_CHARS = 500;
export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false); setSent(true);
  };
  if (sent) return (
    <div className="text-center py-12">
      <div className="w-14 h-14 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-4"><Send size={22} className="text-emerald-400" /></div>
      <h3 className="font-semibold text-gray-900 mb-2">Message sent!</h3>
      <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
      <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }} className="mt-6 text-indigo-400 text-sm hover:text-indigo-300 transition-colors">Send another →</button>
    </div>
  );
  return (
    <form onSubmit={submit} className="space-y-4 max-w-md">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
          <input value={form.name} onChange={e => set("name", e.target.value)} required placeholder="Your name" className="w-full h-10 px-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm outline-none focus:border-indigo-500 transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
          <input type="email" value={form.email} onChange={e => set("email", e.target.value)} required placeholder="you@example.com" className="w-full h-10 px-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm outline-none focus:border-indigo-500 transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
        <select value={form.subject} onChange={e => set("subject", e.target.value)} required className="w-full h-10 px-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm outline-none focus:border-indigo-500 transition-colors">
          <option value="">Select a topic...</option>
          <option>General question</option><option>Bug report</option><option>Feature request</option><option>Business inquiry</option>
        </select>
      </div>
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-sm font-medium text-gray-700">Message</label>
          <span className={`text-xs ${form.message.length > MAX_CHARS ? "text-red-400" : "text-gray-400"}`}>{form.message.length}/{MAX_CHARS}</span>
        </div>
        <textarea value={form.message} onChange={e => set("message", e.target.value)} required rows={4} placeholder="Tell us how we can help..." className="w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm outline-none focus:border-indigo-500 transition-colors resize-none" />
      </div>
      <button type="submit" disabled={loading || form.message.length > MAX_CHARS}
        className="w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 disabled:opacity-50 transition-colors">
        {loading ? <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> : <Send size={15} />}
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

// SignupForm
const steps = ["Account", "Profile", "Done"];
export function SignupForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ email: "", password: "", name: "", role: "", newsletter: false });
  const set = (k: string, v: string | boolean) => setForm(f => ({ ...f, [k]: v }));
  return (
    <div className="w-full max-w-sm">
      <div className="flex items-center gap-0 mb-8">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-0 flex-1">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-all ${i < step ? "bg-indigo-600 border-indigo-600 text-white" : i === step ? "border-indigo-500 text-indigo-400" : "border-gray-300 text-gray-400"}`}>
              {i < step ? <Check size={13} /> : i + 1}
            </div>
            <span className={`text-xs ml-2 ${i <= step ? "text-gray-700" : "text-gray-400"}`}>{s}</span>
            {i < steps.length - 1 && <div className={`flex-1 h-px mx-3 ${i < step ? "bg-indigo-600" : "bg-gray-100"}`} />}
          </div>
        ))}
      </div>
      {step === 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Create your account</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
            <input type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="you@example.com" className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm outline-none focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <input type="password" value={form.password} onChange={e => set("password", e.target.value)} placeholder="Min. 8 characters" className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm outline-none focus:border-indigo-500" />
          </div>
          <button onClick={() => setStep(1)} disabled={!form.email || form.password.length < 8} className="w-full h-11 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 disabled:opacity-40 transition-colors">Continue</button>
        </div>
      )}
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Your profile</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
            <input value={form.name} onChange={e => set("name", e.target.value)} placeholder="Alex Johnson" className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm outline-none focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Role</label>
            <select value={form.role} onChange={e => set("role", e.target.value)} className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm outline-none focus:border-indigo-500">
              <option value="">Select role...</option>
              <option>Frontend Developer</option><option>Full Stack Developer</option><option>Designer</option><option>Product Manager</option>
            </select>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setStep(0)} className="flex-1 h-11 rounded-xl border border-gray-200 text-gray-700 text-sm hover:bg-gray-50 transition-colors">Back</button>
            <button onClick={() => setStep(2)} disabled={!form.name} className="flex-1 h-11 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 disabled:opacity-40 transition-colors">Finish</button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="text-center py-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 flex items-center justify-center mx-auto mb-4"><Check size={24} className="text-emerald-400" /></div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Welcome, {form.name || "friend"}!</h2>
          <p className="text-gray-500 text-sm">Your account is ready.</p>
          <button onClick={() => setStep(0)} className="mt-6 inline-flex h-11 px-7 rounded-xl bg-indigo-600 text-white font-semibold text-sm items-center hover:bg-indigo-700 transition-colors">Start Over</button>
        </div>
      )}
    </div>
  );
}

// AdvancedSearch
export function AdvancedSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("popular");
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="w-full max-w-2xl">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search components, categories, authors..."
            className="w-full h-12 pl-10 pr-10 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm outline-none focus:border-indigo-500 transition-colors" />
          {query && <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900"><X size={14} /></button>}
        </div>
        <button onClick={() => setExpanded(v => !v)}
          className={`flex items-center gap-2 px-4 rounded-xl border text-sm font-medium transition-colors ${expanded ? "border-indigo-500 text-indigo-400 bg-indigo-500/10" : "border-gray-200 text-gray-500 hover:text-gray-900 bg-white"}`}>
          <SlidersHorizontal size={15} /> Filters
        </button>
        <button className="px-5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors">Search</button>
      </div>
      {expanded && (
        <div className="mt-3 p-4 rounded-xl border border-gray-200 bg-white grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)} className="w-full h-9 px-3 rounded-lg border border-gray-200 bg-gray-100 text-gray-900 text-sm outline-none">
              <option value="all">All Categories</option><option value="buttons">Buttons</option><option value="cards">Cards</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Sort By</label>
            <select value={sort} onChange={e => setSort(e.target.value)} className="w-full h-9 px-3 rounded-lg border border-gray-200 bg-gray-100 text-gray-900 text-sm outline-none">
              <option value="popular">Most Popular</option><option value="newest">Newest First</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

// SettingsForm
export function SettingsForm() {
  const [notifs, setNotifs] = useState({ email: true, push: false, marketing: false });
  const [saved, setSaved] = useState(false);
  const toggle = (k: keyof typeof notifs) => setNotifs(n => ({ ...n, [k]: !n[k] }));
  const save = async () => {
    await new Promise(r => setTimeout(r, 800));
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  };
  return (
    <div className="max-w-lg space-y-8">
      <div>
        <h2 className="font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Profile</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img src="https://avatars.githubusercontent.com/u/1?v=4" className="w-14 h-14 rounded-xl object-cover" alt="Avatar" />
            <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors">Change Avatar</button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[["Name", "Alex Johnson"], ["Username", "alexj"]].map(([label, val]) => (
              <div key={label}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                <input defaultValue={val} className="w-full h-10 px-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm outline-none focus:border-indigo-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Notifications</h2>
        <div className="space-y-3">
          {[
            { key: "email" as const, label: "Email notifications", desc: "Get updates via email" },
            { key: "push" as const, label: "Push notifications", desc: "Browser push notifications" },
            { key: "marketing" as const, label: "Product updates", desc: "New features and announcements" },
          ].map(item => (
            <div key={item.key} className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-gray-900">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
              <button onClick={() => toggle(item.key)} className={`w-10 h-5 rounded-full transition-colors relative ${notifs[item.key] ? "bg-indigo-600" : "bg-gray-700"}`}>
                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${notifs[item.key] ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-red-500/20 p-4 bg-red-500/5">
        <h3 className="font-medium text-red-400 mb-1 text-sm">Danger Zone</h3>
        <p className="text-xs text-gray-400 mb-3">Permanently delete your account and all data.</p>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500/30 text-red-400 text-sm hover:bg-red-500/10 transition-colors">
          <Trash2 size={13} /> Delete Account
        </button>
      </div>
      <button onClick={save} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${saved ? "bg-emerald-600 text-white" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}>
        <Save size={15} /> {saved ? "Saved!" : "Save Changes"}
      </button>
    </div>
  );
}

// ── Previews ─────────────────────────────────────────────────────────────────

export function LoginFormPreview() {
  return (
    <div className="flex items-start justify-center p-6 bg-gray-50">
      <LoginForm />
    </div>
  );
}

export function ContactFormPreview() {
  return (
    <div className="p-6 bg-gray-50">
      <ContactForm />
    </div>
  );
}

export function SignupFormPreview() {
  return (
    <div className="flex items-start justify-center p-6 bg-gray-50">
      <SignupForm />
    </div>
  );
}

export function SearchFormPreview() {
  return (
    <div className="flex items-center justify-center p-6 bg-gray-50">
      <AdvancedSearch />
    </div>
  );
}

export function SettingsFormPreview() {
  return (
    <div className="p-6 bg-gray-50">
      <SettingsForm />
    </div>
  );
}
