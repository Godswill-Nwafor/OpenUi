import type { Metadata } from "next";
import Link from "next/link";
import { Github, Users, GitPullRequest, Package } from "lucide-react";
import { contributors } from "@/data/contributors";
import { getComponentsByContributor } from "@/data";
import { getGitHubAvatarUrl, getGitHubProfileUrl } from "@/lib/github";
import { GITHUB_REPO, SITE_STATS } from "@/lib/constants";
import { AvatarImage } from "@/components/ui/AvatarImage";
import type { ContributorRole } from "@/types";

export const metadata: Metadata = {
  title: "Contributors",
  description:
    "Meet the developers who build and maintain OpenUI Hub. Every component is contributed by a real developer.",
};

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

export default function ContributorsPage() {
  const sorted = [...contributors].sort((a, b) => {
    const order = { "project-owner": 0, maintainer: 1, contributor: 2 };
    if (order[a.role] !== order[b.role]) return order[a.role] - order[b.role];
    return b.contributionCount - a.contributionCount;
  });

  const totalContributions = contributors.reduce(
    (sum, c) => sum + c.contributionCount,
    0
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/8 text-brand text-sm font-medium mb-6">
            <Users size={14} /> Open Source Community
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Meet the Contributors
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Every component in OpenUI Hub was built by a real developer.
            Browse contributor profiles, explore their work, and join the
            community.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold">{contributors.length}</p>
              <p className="text-sm text-muted-foreground">Contributors</p>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div>
              <p className="text-3xl font-bold">{SITE_STATS.components}</p>
              <p className="text-sm text-muted-foreground">Components</p>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div>
              <p className="text-3xl font-bold">{totalContributions}</p>
              <p className="text-sm text-muted-foreground">Merged PRs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((contributor) => {
            const componentCount = getComponentsByContributor(
              contributor.username
            ).length;
            const { label, className } = roleMeta[contributor.role];
            const avatarUrl = getGitHubAvatarUrl(contributor.username, 96);
            const profileUrl = getGitHubProfileUrl(contributor.username);

            return (
              <div
                key={contributor.username}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all duration-200"
              >
                {/* Top row */}
                <div className="flex items-start gap-4 mb-5">
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <AvatarImage
                      src={avatarUrl}
                      alt={contributor.displayName}
                      size={56}
                      className="w-14 h-14 rounded-2xl object-cover bg-secondary"
                    />
                    {contributor.role === "project-owner" && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-card" title="Project Owner" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{contributor.displayName}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      @{contributor.username}
                    </p>
                    <span
                      className={`inline-flex items-center mt-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${className}`}
                    >
                      {label}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                {contributor.bio && (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {contributor.bio}
                  </p>
                )}

                {/* Stats */}
                <div className="flex gap-4 mb-5 text-sm">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Package size={13} />
                    <span>
                      <strong className="text-foreground">{componentCount}</strong> component
                      {componentCount !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <GitPullRequest size={13} />
                    <span>
                      <strong className="text-foreground">{contributor.contributionCount}</strong> PR
                      {contributor.contributionCount !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                  <Link
                    href={`/contributors/${contributor.username}`}
                    className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-xl bg-brand text-white text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    View Profile
                  </Link>
                  <a
                    href={profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 h-9 px-3 rounded-xl border border-border text-sm hover:bg-accent transition-colors"
                    title="View GitHub profile"
                  >
                    <Github size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center py-12 rounded-2xl border border-border bg-card">
          <Github size={32} className="mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-3">Want to be listed here?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
            Fork the repository, build a component, open a Pull Request. When
            your PR is merged you'll automatically appear on this page.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`${GITHUB_REPO}/fork`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-6 rounded-xl bg-brand text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Github size={15} /> Fork Repository
            </a>
            <Link
              href="/contribute"
              className="inline-flex items-center gap-2 h-10 px-6 rounded-xl border border-border text-sm font-medium hover:bg-accent transition-colors"
            >
              Contribution Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
