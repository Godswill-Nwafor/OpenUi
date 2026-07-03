"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles, Terminal, Copy, Check, Star, CheckCircle } from "lucide-react";

// GradientHero
export function GradientHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gray-950 py-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
          <Sparkles size={14} /> Open Source · 60+ Components · Free Forever
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold text-white leading-tight mb-6">
          Build Beautiful{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Interfaces</span>{" "}Together
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
          A production quality open source UI component library built with React, TypeScript, and Tailwind CSS.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4">
          <a href="/components" className="flex items-center gap-2 h-12 px-7 rounded-2xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/25 transition-all duration-200 active:scale-95">
            Browse Components <ArrowRight size={16} />
          </a>
          <a href="https://github.com" className="flex items-center gap-2 h-12 px-7 rounded-2xl font-semibold text-slate-300 border border-white/15 hover:bg-white/10 transition-all duration-200 active:scale-95">
            <Github size={16} /> Star on GitHub
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-8 mt-16 text-sm text-slate-500">
          {[["60+", "Components"], ["26", "Categories"], ["MIT", "License"]].map(([val, label]) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold text-white">{val}</p>
              <p>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// SplitHero
const installCmd = "npx openui-hub add button";
export function SplitHero() {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(installCmd); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <section className="flex items-center bg-gray-950 px-4 py-16">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Open Source
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Developer-first<br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">UI Components</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">Beautiful, accessible React components. Copy the code, own the design. No black boxes, no subscriptions.</p>
          <div className="flex items-center gap-3 p-3 pl-4 rounded-xl border border-white/10 bg-gray-900 mb-8 max-w-sm">
            <Terminal size={15} className="text-slate-400 shrink-0" />
            <code className="text-sm text-slate-300 flex-1 font-mono">{installCmd}</code>
            <button onClick={copy} className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 text-slate-400 hover:text-white transition-all">
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          </div>
          <a href="/components" className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">
            Explore Components <ArrowRight size={15} />
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="rounded-2xl border border-white/10 bg-gray-900 overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-gray-950/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-amber-500/70" /><div className="w-3 h-3 rounded-full bg-emerald-500/70" />
              </div>
              <span className="text-xs text-slate-500 ml-2 font-mono">GlassButton.tsx</span>
            </div>
            <pre className="p-5 text-sm overflow-x-auto leading-relaxed">
              <code>
                <span className="text-purple-400">export function </span>
                <span className="text-yellow-400">GlassButton</span>
                <span className="text-slate-300">{"({ children }) {"}</span>{"\n"}
                <span className="text-slate-300">{"  return ("}</span>{"\n"}
                <span className="text-slate-300">{"    <"}</span><span className="text-indigo-400">button</span>{"\n"}
                <span className="text-emerald-400">{"      className"}</span><span className="text-slate-300">{"="}</span><span className="text-amber-300">{"{"}\`"}</span>{"\n"}
                <span className="text-amber-300">{"        px-6 py-2.5 rounded-xl"}</span>{"\n"}
                <span className="text-amber-300">{"        bg-white/10 backdrop-blur-sm"}</span>{"\n"}
                <span className="text-amber-300">{"        text-white font-medium"}</span>{"\n"}
                <span className="text-amber-300">{"      "\`}</span><span className="text-slate-300">{"}"}</span>{"\n"}
                <span className="text-slate-300">{"    >"}{children}</span>{"\n"}
                <span className="text-slate-300">{"    </"}</span><span className="text-indigo-400">button</span><span className="text-slate-300">{">"}</span>{"\n"}
                <span className="text-slate-300">{"  );"}</span>{"\n"}
                <span className="text-slate-300">{"}"}</span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// MinimalHero
export function MinimalHero({ eyebrow, title, highlight, subtitle, primaryCta, secondaryCta }: { eyebrow?: string; title: string; highlight?: string; subtitle: string; primaryCta?: { label: string; href: string }; secondaryCta?: { label: string; href: string } }) {
  const parts = highlight ? title.split(highlight) : [title];
  return (
    <section className="py-32 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto text-center">
        {eyebrow && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-4">{eyebrow}</motion.p>}
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          {highlight ? <>{parts[0]}<span className="text-indigo-600 dark:text-indigo-400">{highlight}</span>{parts[1]}</> : title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed mb-10">{subtitle}</motion.p>
        {(primaryCta || secondaryCta) && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-4">
            {primaryCta && <a href={primaryCta.href} className="h-12 px-7 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-500/20 flex items-center">{primaryCta.label}</a>}
            {secondaryCta && <a href={secondaryCta.href} className="h-12 px-7 rounded-2xl border border-gray-200 dark:border-white/15 text-gray-700 dark:text-slate-300 font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center">{secondaryCta.label}</a>}
          </motion.div>
        )}
      </div>
    </section>
  );
}

// SaaSHero
export function SaaSHero({ title, subtitle, primaryCta, secondaryCta, features, screenshotSrc }: { title: string; subtitle: string; primaryCta: string; secondaryCta?: string; features?: string[]; screenshotSrc?: string }) {
  return (
    <section className="bg-gray-950 pt-20 pb-0 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-4 mb-8">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map(i => <img key={i} src={`https://avatars.githubusercontent.com/u/${i}?v=4`} className="w-8 h-8 rounded-full border-2 border-gray-950 object-cover" alt="" />)}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}</div>
            <p className="text-xs text-slate-400">Loved by 10,000+ developers</p>
          </div>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5"
          dangerouslySetInnerHTML={{ __html: title }} />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">{subtitle}</motion.p>
        {features && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
            {features.map(f => <span key={f} className="flex items-center gap-1.5 text-sm text-slate-400"><CheckCircle size={14} className="text-emerald-500" /> {f}</span>)}
          </motion.div>
        )}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#" className="flex items-center gap-2 h-12 px-7 rounded-2xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transition-all active:scale-95">
            {primaryCta} <ArrowRight size={15} />
          </a>
          {secondaryCta && <a href="#" className="h-12 px-7 rounded-2xl font-semibold text-slate-300 border border-white/15 hover:bg-white/5 transition-all">{secondaryCta}</a>}
        </motion.div>
      </div>
    </section>
  );
}

// VideoHero
export function VideoHero({ videoSrc, title, subtitle, ctaLabel = "Get Started", ctaHref = "#" }: { videoSrc: string; title: string; subtitle: string; ctaLabel?: string; ctaHref?: string }) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "100%" }}>
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src={videoSrc} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
        <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6 tracking-tight">{title}</h1>
        <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">{subtitle}</p>
        <a href={ctaHref} className="inline-flex items-center h-14 px-9 rounded-2xl font-bold text-gray-900 bg-white hover:bg-gray-100 transition-colors shadow-xl shadow-white/10 text-base">{ctaLabel}</a>
      </div>
    </section>
  );
}

// ── Previews ─────────────────────────────────────────────────────────────────

export function GradientHeroPreview() {
  return <GradientHero />;
}

export function SplitHeroPreview() {
  return <SplitHero />;
}

export function MinimalHeroPreview() {
  return (
    <MinimalHero
      eyebrow="Introducing v2.0"
      title="The modern way to build "
      highlight="beautiful UIs"
      subtitle="Stop rebuilding the same components. OpenUI Hub gives you production-ready components to copy, customize, and ship."
      primaryCta={{ label: "Get Started Free", href: "/components" }}
      secondaryCta={{ label: "Read the Docs", href: "/docs" }}
    />
  );
}

export function SaaSHeroPreview() {
  return (
    <SaaSHero
      title="Ship <span class='text-indigo-400'>beautiful</span> products faster"
      subtitle="The open-source React component library used by 10,000+ developers worldwide."
      primaryCta="Get Started Free"
      secondaryCta="View Demo"
      features={["MIT Licensed", "TypeScript Ready", "60+ Components"]}
    />
  );
}

export function VideoHeroPreview() {
  return (
    <div className="relative bg-gray-950" style={{ minHeight: "176px" }}>
      {/* Show static overlay since video won't load in preview */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="relative z-10 text-center px-4 py-12">
        <h2 className="text-4xl font-black text-white leading-tight mb-4">Create Without Limits</h2>
        <p className="text-white/70 mb-6">The world&apos;s most beautiful UI component library.</p>
        <button className="inline-flex items-center h-12 px-8 rounded-2xl font-bold text-gray-900 bg-white hover:bg-gray-100 transition-colors text-sm">Start Building</button>
      </div>
    </div>
  );
}
