"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";
import { GITHUB_REPO } from "@/lib/constants";

const CMD = "npx openui-hub add button";

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: text ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/8 text-brand text-sm font-medium mb-8"
            >
              <Sparkles size={13} />
              Open Source · 60+ Components · Free Forever
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight mb-6"
            >
              Build Beautiful{" "}
              <span className="gradient-text">Interfaces</span>{" "}
              Together.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
            >
              A production quality open source UI component library built with
              React, TypeScript &amp; Tailwind CSS. Copy, customize, and ship
              stunning interfaces in minutes, then contribute back.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Link
                href="/components"
                className="flex items-center gap-2 h-12 px-7 rounded-2xl font-semibold text-white bg-brand hover:opacity-90 shadow-lg shadow-brand/25 transition-all active:scale-95"
              >
                Browse Components <ArrowRight size={16} />
              </Link>
              <Link
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-12 px-7 rounded-2xl font-semibold border border-border text-foreground hover:bg-accent transition-all active:scale-95"
              >
                <Github size={16} />
                Star on GitHub
              </Link>
            </motion.div>

            {/* CLI install */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-border bg-card text-sm font-mono"
            >
              <span className="text-brand select-none">$</span>
              <span className="text-muted-foreground">{CMD}</span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-muted-foreground hover:text-foreground transition-colors ml-2"
              >
                {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              </button>
            </motion.div>
          </div>

          {/* ── Right: browser mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-brand/10 blur-3xl rounded-full pointer-events-none" />

            {/* Browser chrome */}
            <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-2xl shadow-black/20">
              {/* Title bar */}
              <div className="flex items-center gap-3 px-4 py-3 bg-card border-b border-border/60">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-400/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/90" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-background/80 border border-border/40 text-xs text-muted-foreground max-w-xs w-full justify-center">
                    <svg className="w-3 h-3 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    openui-hub.vercel.app
                  </div>
                </div>
                <div className="w-16 shrink-0" />
              </div>

              {/* Screenshot */}
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/landingpageimage.png"
                  alt="OpenUI Hub components showcase"
                  className="w-full h-auto block"
                />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background via-background/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
