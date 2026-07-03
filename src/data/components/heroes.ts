import type { ComponentDoc } from "@/types";

export const heroComponents: ComponentDoc[] = [
  {
    metadata: {
      id: "gradient-hero",
      name: "Gradient Hero",
      description: "A full-screen hero section with animated gradient background and floating shapes.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "heroes",
      tags: ["hero", "gradient", "landing", "animated", "cta"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 4231,
      likes: 398,
    },
    code: `"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles } from "lucide-react";

export function GradientHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30
            bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8"
        >
          <Sparkles size={14} />
          Open Source · 60+ Components · Free Forever
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold text-white leading-tight mb-6"
        >
          Build Beautiful{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
            bg-clip-text text-transparent">
            Interfaces
          </span>{" "}
          Together
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          A production-quality open-source UI component library built with React, TypeScript, and Tailwind CSS.
          Copy, customize, and ship stunning interfaces in minutes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="/components"
            className="flex items-center gap-2 h-12 px-7 rounded-2xl font-semibold text-white
              bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700
              shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 active:scale-95">
            Browse Components <ArrowRight size={16} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 h-12 px-7 rounded-2xl font-semibold text-slate-300
              border border-white/15 hover:bg-white/10 transition-all duration-200 active:scale-95">
            <Github size={16} /> Star on GitHub
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-8 mt-16 text-sm text-slate-500"
        >
          {[
            ["60+", "Components"],
            ["26", "Categories"],
            ["MIT", "License"],
          ].map(([val, label]) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold text-white">{val}</p>
              <p>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}`,
    demoCode: `import { GradientHero } from "./GradientHero";

export default function Demo() {
  return <GradientHero />;
}`,
    documentation: "Full-screen hero with animated gradient orbs and Framer Motion entrance animations. Uses `motion` for staggered fade-in of each element.",
    props: [],
    dependencies: ["framer-motion", "lucide-react"],
  },
  {
    metadata: {
      id: "split-hero",
      name: "Split Hero",
      description: "A split-layout hero with text on the left and a code preview on the right.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "heroes",
      tags: ["hero", "split", "code", "developer", "documentation"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 2876,
      likes: 243,
    },
    code: `"use client";
import { motion } from "framer-motion";
import { Terminal, Copy, Check, ArrowRight } from "lucide-react";
import { useState } from "react";

const installCmd = "npx openui-hub add button";

export function SplitHero() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex items-center bg-gray-950 px-4">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30
            bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open Source
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Developer-first<br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              UI Components
            </span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Beautiful, accessible React components. Copy the code, own the design.
            No black boxes, no subscriptions.
          </p>

          {/* Install box */}
          <div className="flex items-center gap-3 p-3 pl-4 rounded-xl border border-white/10 bg-gray-900 mb-8 max-w-sm">
            <Terminal size={15} className="text-slate-400 shrink-0" />
            <code className="text-sm text-slate-300 flex-1 font-mono">{installCmd}</code>
            <button onClick={copy}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10
                hover:bg-white/15 text-slate-400 hover:text-white transition-all">
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          </div>

          <a href="/components"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-indigo-600 text-white
              font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">
            Explore Components <ArrowRight size={15} />
          </a>
        </motion.div>

        {/* Right: Code window */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="rounded-2xl border border-white/10 bg-gray-900 overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-gray-950/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
              </div>
              <span className="text-xs text-slate-500 ml-2 font-mono">GlassButton.tsx</span>
            </div>
            <pre className="p-5 text-sm overflow-x-auto leading-relaxed">
              <code>
                <span className="text-purple-400">export function </span>
                <span className="text-yellow-400">GlassButton</span>
                <span className="text-slate-300">{"({ children, ...props }) {"}</span>{"\n"}
                <span className="text-slate-300">{"  return ("}</span>{"\n"}
                <span className="text-slate-300">{"    <"}</span>
                <span className="text-indigo-400">button</span>{"\n"}
                <span className="text-emerald-400">{"      className"}</span>
                <span className="text-slate-300">{"="}</span>
                <span className="text-amber-300">{"{"}\`"}</span>{"\n"}
                <span className="text-amber-300">{"        px-6 py-2.5 rounded-xl"}</span>{"\n"}
                <span className="text-amber-300">{"        bg-white/10 backdrop-blur-sm"}</span>{"\n"}
                <span className="text-amber-300">{"        border border-white/20"}</span>{"\n"}
                <span className="text-amber-300">{"        text-white font-medium"}</span>{"\n"}
                <span className="text-amber-300">{"        hover:bg-white/20 transition"}</span>{"\n"}
                <span className="text-amber-300">{"      "\`}</span>
                <span className="text-slate-300">{"}"}</span>{"\n"}
                <span className="text-slate-300">{"      {...props}"}</span>{"\n"}
                <span className="text-slate-300">{"    >"}</span>{"\n"}
                <span className="text-slate-300">{"      {children}"}</span>{"\n"}
                <span className="text-slate-300">{"    </"}</span>
                <span className="text-indigo-400">button</span>
                <span className="text-slate-300">{">"}</span>{"\n"}
                <span className="text-slate-300">{"  );"}</span>{"\n"}
                <span className="text-slate-300">{"}"}</span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`,
    demoCode: `import { SplitHero } from "./SplitHero";
export default function Demo() { return <SplitHero />; }`,
    documentation: "Split-layout hero ideal for developer tools and documentation sites. Features a code preview window on the right.",
    props: [],
    dependencies: ["framer-motion"],
  },
  {
    metadata: {
      id: "minimal-hero",
      name: "Minimal Hero",
      description: "A clean, typography-focused minimal hero section.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "heroes",
      tags: ["hero", "minimal", "typography", "clean", "simple"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 1982,
      likes: 167,
    },
    code: `"use client";
import { motion } from "framer-motion";

interface MinimalHeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function MinimalHero({ eyebrow, title, highlight, subtitle, primaryCta, secondaryCta }: MinimalHeroProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="py-32 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-4"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
        >
          {highlight ? (
            <>
              {parts[0]}
              <span className="text-indigo-600 dark:text-indigo-400">{highlight}</span>
              {parts[1]}
            </>
          ) : title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-500 dark:text-slate-400 leading-relaxed mb-10"
        >
          {subtitle}
        </motion.p>

        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {primaryCta && (
              <a href={primaryCta.href}
                className="h-12 px-7 rounded-2xl bg-indigo-600 text-white font-semibold
                  hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-500/20 flex items-center">
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href}
                className="h-12 px-7 rounded-2xl border border-gray-200 dark:border-white/15
                  text-gray-700 dark:text-slate-300 font-semibold hover:bg-gray-50 dark:hover:bg-white/5
                  transition-colors flex items-center">
                {secondaryCta.label}
              </a>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}`,
    demoCode: `import { MinimalHero } from "./MinimalHero";

export default function Demo() {
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
}`,
    documentation: "A clean, typographic hero. Pass `highlight` to color a portion of the title in brand color.",
    props: [
      { name: "eyebrow", type: "string", required: false, description: "Small label above the title." },
      { name: "highlight", type: "string", required: false, description: "Word/phrase in the title to highlight in brand color." },
    ],
  },
  {
    metadata: {
      id: "video-hero",
      name: "Video Background Hero",
      description: "Hero section with a looping video background and overlay.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "heroes",
      tags: ["hero", "video", "background", "overlay", "cinematic"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 1432,
      likes: 128,
    },
    code: `interface VideoHeroProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function VideoHero({ videoSrc, title, subtitle, ctaLabel = "Get Started", ctaHref = "#" }: VideoHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
        bg-[size:64px_64px]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
          {subtitle}
        </p>
        <a href={ctaHref}
          className="inline-flex items-center h-14 px-9 rounded-2xl font-bold text-gray-900
            bg-white hover:bg-gray-100 transition-colors shadow-xl shadow-white/10 text-base">
          {ctaLabel}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}`,
    demoCode: `import { VideoHero } from "./VideoHero";

export default function Demo() {
  return (
    <VideoHero
      videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      title="Create Without Limits"
      subtitle="The world's most beautiful UI component library, built in the open."
      ctaLabel="Start Building"
      ctaHref="/components"
    />
  );
}`,
    documentation: "Video background hero with a gradient overlay. The video loops automatically and is muted for autoplay compliance.",
    props: [
      { name: "videoSrc", type: "string", required: true, description: "URL or path to the background video file." },
    ],
  },
  {
    metadata: {
      id: "saas-hero",
      name: "SaaS Hero",
      description: "A full-featured SaaS landing hero with social proof badges and dashboard screenshot.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "heroes",
      tags: ["hero", "saas", "landing", "product", "dashboard", "screenshot"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 3120,
      likes: 287,
    },
    code: `"use client";
import { motion } from "framer-motion";
import { Star, ArrowRight, CheckCircle } from "lucide-react";

interface SaaSHeroProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta?: string;
  features?: string[];
  screenshotSrc?: string;
}

export function SaaSHero({ title, subtitle, primaryCta, secondaryCta, features, screenshotSrc }: SaaSHeroProps) {
  return (
    <section className="bg-gray-950 pt-20 pb-0 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Social proof */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-4 mb-8">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map(i => (
              <img key={i} src={\`https://avatars.githubusercontent.com/u/\${i}?v=4\`}
                className="w-8 h-8 rounded-full border-2 border-gray-950 object-cover" alt="" />
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}
            </div>
            <p className="text-xs text-slate-400">Loved by 10,000+ developers</p>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Features */}
        {features && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10"
          >
            {features.map(f => (
              <span key={f} className="flex items-center gap-1.5 text-sm text-slate-400">
                <CheckCircle size={14} className="text-emerald-500" /> {f}
              </span>
            ))}
          </motion.div>
        )}

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a href="#"
            className="flex items-center gap-2 h-12 px-7 rounded-2xl font-semibold text-white
              bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transition-all active:scale-95">
            {primaryCta} <ArrowRight size={15} />
          </a>
          {secondaryCta && (
            <a href="#"
              className="h-12 px-7 rounded-2xl font-semibold text-slate-300
                border border-white/15 hover:bg-white/5 transition-all">
              {secondaryCta}
            </a>
          )}
        </motion.div>

        {/* Screenshot */}
        {screenshotSrc && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative rounded-t-2xl border border-white/10 border-b-0 overflow-hidden
              shadow-2xl shadow-black/50"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950 z-10" />
            <img src={screenshotSrc} alt="Product screenshot" className="w-full" />
          </motion.div>
        )}
      </div>
    </section>
  );
}`,
    demoCode: `import { SaaSHero } from "./SaaSHero";

export default function Demo() {
  return (
    <SaaSHero
      title="Ship faster with <span style='color:#818cf8'>beautiful components</span>"
      subtitle="The open-source UI library built for developer speed. Copy, customize, and deploy in minutes."
      primaryCta="Get Started Free"
      secondaryCta="View Components"
      features={["No subscription", "Full source code", "TypeScript", "Dark mode"]}
    />
  );
}`,
    documentation: "Full SaaS landing hero with social proof avatars, feature list, and optional product screenshot.",
    props: [
      { name: "title", type: "string", required: true, description: "Hero headline (supports HTML for partial highlights)." },
      { name: "features", type: "string[]", required: false, description: "Bullet-point feature highlights below the subtitle." },
    ],
  },
];
