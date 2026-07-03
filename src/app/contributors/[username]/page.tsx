import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Github,
  Package,
  GitPullRequest,
  Calendar,
  ArrowLeft,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { contributors, getContributorByUsername } from "@/data/contributors";
import { getComponentsByContributor } from "@/data";
import { getGitHubAvatarUrl, getGitHubProfileUrl } from "@/lib/github";
import { formatDate } from "@/lib/utils";
import { AvatarImage } from "@/components/ui/AvatarImage";
import type { ContributorRole } from "@/types";

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateStaticParams() {
  return contributors.map((c) => ({ username: c.username }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const contributor = getContributorByUsername(username);
  if (!contributor) return { title: "Contributor Not Found" };
  return {
    title: `${contributor.displayName} — Contributor`,
    description: `${contributor.displayName} is a ${contributor.role.replace("-", " ")} on OpenUI Hub with ${contributor.componentIds.length} contributed components.`,
  };
}

const roleMeta: Record<ContributorRole, { label: string; className: string }> = {
  "project-owner": {
    label: "Project Owner",
    className: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  },
  maintainer: {
    label: "Maintainer",
    className: "bg-brand/15 text-brand border-brand/30",
  },
  contributor: {
    label: "Contributor",
    className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  },
};

const categoryEmoji: Record<string, string> = {
  buttons: "🔘",
  cards: "🃏",
  forms: "📝",
  navbars: "🧭",
  heroes: "🦸",
  pricing: "💰",
  dashboards: "📊",
  footers: "⬇️",
  alerts: "🔔",
  modals: "💬",
  default: "🧩",
};

export default async function ContributorProfilePage({ params }: Props) {
  const { username } = await params;
  const contributor = getContributorByUsername(username);
  if (!contributor) notFound();

  const components = getComponentsByContributor(contributor.username);
  const { label, className } = roleMeta[contributor.role];
  const avatarUrl = getGitHubAvatarUrl(contributor.username, 160);
  const githubUrl = getGitHubProfileUrl(contributor.username);

  // Group components by category for the timeline
  const byCategory = components.reduce<Record<string, typeof components>>(
    (acc, comp) => {
      const cat = comp.metadata.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(comp);
      return acc;
    },
    {}
  );

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight size={13} />
            <Link
              href="/contributors"
              className="hover:text-foreground transition-colors"
            >
              Contributors
            </Link>
            <ChevronRight size={13} />
            <span className="text-foreground">{contributor.displayName}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <Link
          href="/contributors"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Contributors
        </Link>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10">
          {/* Sidebar — Profile card */}
          <aside>
            <div className="rounded-2xl border border-border bg-card p-6 sticky top-20 space-y-5">
              {/* Avatar */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <AvatarImage
                    src={avatarUrl}
                    alt={contributor.displayName}
                    size={96}
                    className="w-24 h-24 rounded-2xl object-cover bg-secondary mx-auto"
                  />
                  {contributor.role === "project-owner" && (
                    <span
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-400 border-2 border-card flex items-center justify-center text-[10px]"
                      title="Project Owner"
                    >
                      ★
                    </span>
                  )}
                </div>

                <h1 className="text-xl font-bold mb-0.5">
                  {contributor.displayName}
                </h1>
                <p className="text-sm text-muted-foreground mb-3">
                  @{contributor.username}
                </p>

                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${className}`}
                >
                  {label}
                </span>
              </div>

              {/* Bio */}
              {contributor.bio && (
                <p className="text-sm text-muted-foreground leading-relaxed text-center border-t border-border pt-4">
                  {contributor.bio}
                </p>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 border-t border-border pt-4">
                <div className="text-center p-3 rounded-xl bg-background">
                  <p className="text-2xl font-bold">{components.length}</p>
                  <p className="text-xs text-muted-foreground">Components</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-background">
                  <p className="text-2xl font-bold">
                    {contributor.contributionCount}
                  </p>
                  <p className="text-xs text-muted-foreground">Merged PRs</p>
                </div>
              </div>

              {/* Joined date */}
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground border-t border-border pt-4">
                <Calendar size={14} className="shrink-0" />
                <span>
                  First contributed{" "}
                  <span className="text-foreground font-medium">
                    {formatDate(contributor.joinedAt)}
                  </span>
                </span>
              </div>

              {/* GitHub button */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-10 rounded-xl border border-border text-sm font-medium hover:bg-accent transition-colors"
              >
                <Github size={15} /> View GitHub Profile
                <ExternalLink size={12} className="text-muted-foreground" />
              </a>
            </div>
          </aside>

          {/* Main content */}
          <main className="space-y-10">
            {/* Component count banner */}
            <div className="flex flex-wrap gap-4 p-5 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  <Package size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Components Created
                  </p>
                  <p className="text-2xl font-bold">{components.length}</p>
                </div>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <GitPullRequest size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Total Contributions
                  </p>
                  <p className="text-2xl font-bold">
                    {contributor.contributionCount}
                  </p>
                </div>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    First Contributed
                  </p>
                  <p className="font-bold">{formatDate(contributor.joinedAt)}</p>
                </div>
              </div>
            </div>

            {/* Components list */}
            {components.length > 0 ? (
              <section>
                <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
                  <Package size={18} className="text-brand" />
                  Components by {contributor.displayName}
                </h2>

                {/* By category */}
                {Object.entries(byCategory).map(([category, comps]) => (
                  <div key={category} className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-base">
                        {categoryEmoji[category] ?? categoryEmoji.default}
                      </span>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground capitalize">
                        {category}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        ({comps.length})
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {comps.map((comp) => (
                        <Link
                          key={comp.metadata.id}
                          href={`/components/${comp.metadata.id}`}
                          className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-brand/40 hover:bg-card transition-all group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center text-base shrink-0">
                            {categoryEmoji[comp.metadata.category] ??
                              categoryEmoji.default}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-sm group-hover:text-brand transition-colors truncate">
                              {comp.metadata.name}
                            </p>
                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mt-0.5">
                              {comp.metadata.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            ) : (
              <div className="text-center py-16 rounded-2xl border border-border">
                <Package size={32} className="mx-auto mb-3 text-muted-foreground" />
                <p className="text-muted-foreground">No components yet.</p>
              </div>
            )}

            {/* GitHub CTA */}
            <div className="flex items-center justify-between p-5 rounded-2xl border border-border bg-card">
              <div>
                <p className="font-semibold">View on GitHub</p>
                <p className="text-sm text-muted-foreground">
                  See all of {contributor.displayName}&apos;s open-source work
                </p>
              </div>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-9 px-4 rounded-xl border border-border text-sm font-medium hover:bg-accent transition-colors shrink-0"
              >
                <Github size={14} /> @{contributor.username}
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
