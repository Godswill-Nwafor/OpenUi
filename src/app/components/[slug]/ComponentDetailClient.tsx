"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, Copy, Check, Heart, Github, Tag,
  User, Calendar, Package, Code2, BookOpen, Layers, Eye,
  ChevronRight, ExternalLink
} from "lucide-react";
import { getDetailPreview } from "@/data/preview-registry";
import { getContributorByUsername } from "@/data/contributors";
import { getGitHubAvatarUrl, getGitHubProfileUrl } from "@/lib/github";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Badge } from "@/components/ui/Badge";
import { ComponentCard } from "@/components/ui/ComponentCard";
import { formatDate, formatNumber } from "@/lib/utils";
import type { ComponentDoc, ComponentMetadata } from "@/types";

interface Props {
  comp: ComponentDoc;
  related: ComponentMetadata[];
}

type Tab = "preview" | "code" | "docs" | "props";

const tabs: { id: Tab; icon: React.ReactNode; label: string }[] = [
  { id: "preview", icon: <Eye size={15} />, label: "Preview" },
  { id: "code", icon: <Code2 size={15} />, label: "Code" },
  { id: "docs", icon: <BookOpen size={15} />, label: "Docs" },
  { id: "props", icon: <Layers size={15} />, label: "Props" },
];

const roleLabelMap: Record<string, { label: string; className: string }> = {
  "project-owner": { label: "Project Owner", className: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
  maintainer: { label: "Maintainer", className: "bg-brand/15 text-brand border-brand/30" },
  contributor: { label: "Contributor", className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" },
};

function CreatedByCard({ github, name }: { github: string; name: string }) {
  const contributor = getContributorByUsername(github);
  const avatarUrl = getGitHubAvatarUrl(github, 80);
  const githubUrl = getGitHubProfileUrl(github);
  const role = contributor?.role ?? "contributor";
  const { label, className } = roleLabelMap[role] ?? roleLabelMap.contributor;

  return (
    <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
      <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
        Created by
      </h3>

      <div className="flex items-center gap-3">
        <img
          src={avatarUrl}
          alt={name}
          width={44}
          height={44}
          className="w-11 h-11 rounded-xl object-cover bg-secondary shrink-0"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=44&background=6366f1&color=fff&bold=true`;
          }}
        />
        <div className="min-w-0">
          <Link
            href={`/contributors/${github}`}
            className="font-semibold text-sm hover:text-brand transition-colors block truncate"
          >
            {name}
          </Link>
          <p className="text-xs text-muted-foreground truncate">@{github}</p>
          <span className={`inline-flex items-center mt-1 px-2 py-0.5 rounded-full text-xs font-medium border ${className}`}>
            {label}
          </span>
        </div>
      </div>

      <div className="flex gap-2 pt-1">
        <Link
          href={`/contributors/${github}`}
          className="flex-1 flex items-center justify-center gap-1.5 h-8 rounded-xl bg-brand text-white text-xs font-medium hover:opacity-90 transition-opacity"
        >
          <User size={12} /> View Profile
        </Link>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 h-8 px-3 rounded-xl border border-border text-xs hover:bg-accent transition-colors"
          title="View GitHub profile"
        >
          <Github size={13} /> GitHub
          <ExternalLink size={11} className="text-muted-foreground" />
        </a>
      </div>
    </div>
  );
}

function LivePreviewPlaceholder({ name }: { name: string }) {
  return (
    <div className="h-72 flex flex-col items-center justify-center gap-3 bg-card rounded-xl border border-border">
      <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center">
        <Eye size={28} className="text-brand" />
      </div>
      <p className="font-medium text-sm">{name}</p>
      <p className="text-xs text-muted-foreground max-w-xs text-center">
        Live preview renders the actual React component. Copy the code below to use it in your project.
      </p>
    </div>
  );
}

export function ComponentDetailClient({ comp, related }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("preview");
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  const { metadata, code, demoCode, documentation, props, installation, usage } = comp;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link href="/components" className="hover:text-foreground transition-colors">Components</Link>
            <ChevronRight size={13} />
            <Link href={`/components?category=${metadata.category}`} className="hover:text-foreground transition-colors capitalize">
              {metadata.category}
            </Link>
            <ChevronRight size={13} />
            <span className="text-foreground">{metadata.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main */}
          <div>
            {/* Back */}
            <Link
              href="/components"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={14} /> Back to Components
            </Link>

            {/* Title row */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{metadata.name}</h1>
                <p className="text-muted-foreground leading-relaxed">{metadata.description}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setLiked((v) => !v)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-sm transition-all ${liked ? "border-red-500/50 text-red-500 bg-red-500/8" : "border-border hover:bg-accent"}`}
                >
                  <Heart size={14} className={liked ? "fill-red-500" : ""} />
                  {formatNumber(metadata.likes + (liked ? 1 : 0))}
                </button>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border text-sm hover:bg-accent transition-colors"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="brand">{metadata.category}</Badge>
              <Badge variant="secondary">{metadata.framework.toUpperCase()}</Badge>
              <Badge variant="secondary">v{metadata.version}</Badge>
              {metadata.tags.slice(0, 4).map((tag) => (
                <Badge key={tag} variant="secondary">#{tag}</Badge>
              ))}
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 border-b border-border mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors relative ${
                    activeTab === tab.id
                      ? "text-brand"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div layoutId="tab-line" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
              {activeTab === "preview" && (() => {
                const detail = getDetailPreview(metadata.id);
                return (
                  <div className="space-y-4">
                    {detail ? (
                      <div
                        className={`rounded-xl border border-border overflow-auto ${detail.bg}`}
                        style={{ minHeight: "320px", maxHeight: "640px" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {detail.node}
                      </div>
                    ) : (
                      <LivePreviewPlaceholder name={metadata.name} />
                    )}
                    <p className="text-xs text-muted-foreground">
                      Demo code: paste this into your project to see it in action:
                    </p>
                    <CodeBlock code={demoCode} language="tsx" filename={`${metadata.id}.demo.tsx`} />
                  </div>
                );
              })()}

              {activeTab === "code" && (
                <CodeBlock code={code} language="tsx" filename={`${metadata.id}.tsx`} />
              )}

              {activeTab === "docs" && (
                <div className="prose prose-invert prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">{documentation}</p>

                  {installation && (
                    <>
                      <h3 className="font-semibold text-foreground mb-3">Installation</h3>
                      <CodeBlock code={installation} language="bash" showLineNumbers={false} className="mb-6" />
                    </>
                  )}

                  {usage && (
                    <>
                      <h3 className="font-semibold text-foreground mb-3">Usage</h3>
                      <CodeBlock code={usage} language="tsx" filename="App.tsx" />
                    </>
                  )}

                  {metadata.dependencies && metadata.dependencies.length > 0 && (
                    <div className="mt-6 p-4 rounded-xl border border-border bg-card">
                      <h4 className="font-semibold text-sm mb-2">Dependencies</h4>
                      <div className="flex flex-wrap gap-2">
                        {metadata.dependencies.map((dep) => (
                          <span key={dep} className="px-2.5 py-1 rounded-lg bg-secondary text-xs font-mono">
                            {dep}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "props" && (
                <div>
                  {props && props.length > 0 ? (
                    <div className="rounded-xl border border-border overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border bg-card">
                            {["Prop", "Type", "Default", "Required", "Description"].map((h) => (
                              <th key={h} className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {props.map((prop, i) => (
                            <tr key={prop.name} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-card/50"}`}>
                              <td className="px-4 py-3 font-mono text-brand font-medium">{prop.name}</td>
                              <td className="px-4 py-3 font-mono text-xs text-purple-400">{prop.type}</td>
                              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{prop.default ?? "—"}</td>
                              <td className="px-4 py-3">
                                <span className={`text-xs font-medium ${prop.required ? "text-amber-400" : "text-muted-foreground"}`}>
                                  {prop.required ? "Yes" : "No"}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-muted-foreground text-xs">{prop.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm py-8 text-center">No props documented for this component.</p>
                  )}
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Created By card */}
            <CreatedByCard github={metadata.author.github} name={metadata.author.name} />

            {/* Meta card */}
            <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Component Info</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Calendar size={14} className="text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Added</p>
                    <p className="font-medium">{formatDate(metadata.createdAt)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Package size={14} className="text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Version</p>
                    <p className="font-medium">v{metadata.version}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Tag size={14} className="text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Category</p>
                    <Link
                      href={`/components?category=${metadata.category}`}
                      className="font-medium capitalize text-brand hover:underline"
                    >
                      {metadata.category}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
                <div className="text-center p-3 rounded-xl bg-background">
                  <p className="text-lg font-bold">{formatNumber(metadata.likes)}</p>
                  <p className="text-xs text-muted-foreground">Likes</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-background">
                  <p className="text-lg font-bold">{formatNumber(metadata.downloads)}</p>
                  <p className="text-xs text-muted-foreground">Downloads</p>
                </div>
              </div>

              <Link
                href={`https://github.com/Mtu-Cse406-OpenSource-team/Openui/tree/main/components/${metadata.category}/${metadata.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-border text-sm font-medium hover:bg-accent transition-colors"
              >
                <Github size={15} /> View on GitHub
              </Link>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div>
                <h3 className="font-semibold text-sm mb-3">Related Components</h3>
                <div className="space-y-3">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/components/${rel.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-brand/40 hover:bg-card transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                        <Layers size={16} className="text-brand" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{rel.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{rel.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
