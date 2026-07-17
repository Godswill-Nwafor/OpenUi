import type { Metadata } from "next";
import Link from "next/link";
import { Github, Heart, Layers, Star, Users, GitPullRequest, ArrowRight, GraduationCap } from "lucide-react";
import { GITHUB_REPO, SITE_STATS } from "@/lib/constants";
import { contributors } from "@/data/contributors";
import { AvatarImage } from "@/components/ui/AvatarImage";
import type { ContributorRole } from "@/types";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about OpenUI Hub, our mission, team, and the open source story behind the project.",
};

const roleLabelMap: Record<ContributorRole, string> = {
  "project-owner": "Project Owner",
  maintainer: "Maintainer",
  contributor: "Contributor",
};

const team = contributors.map((c) => ({
  name: c.displayName,
  role: roleLabelMap[c.role],
  avatar: `https://github.com/${c.username}.png?size=80`,
  github: c.username,
  isOwner: c.role === "project-owner",
}));

const values = [
  { icon: <Heart size={20} />, title: "Community First", desc: "Every decision is made with the developer community in mind. We build what developers actually need." },
  { icon: <Star size={20} />, title: "Quality Over Quantity", desc: "We'd rather have 10 exceptional components than 100 mediocre ones. Every component is reviewed." },
  { icon: <GitPullRequest size={20} />, title: "Open by Default", desc: "Everything, the codebase, discussions, roadmap, and governance, happens in the open on GitHub." },
  { icon: <Users size={20} />, title: "Inclusive & Accessible", desc: "Components are built with accessibility in mind and the library is welcoming to all contributors." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand flex items-center justify-center shadow-lg shadow-brand/20">
              <Layers size={22} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About OpenUI Hub</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            OpenUI Hub is an open source platform where developers collaborate to build, share, and discover
            beautiful React UI components, completely free, forever.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">
        {/* Mission */}
        <section>
          <h2 className="text-3xl font-bold mb-5">Our Mission</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 leading-relaxed">
            <p>
              Building a great product UI shouldn't mean starting from scratch every time.
              OpenUI Hub exists to give developers a shared foundation of beautiful, production ready
              components built in the open and owned by the community.
            </p>
            <p>
              We believe that the best components come from developers solving real problems.
              Every piece of code in this library was written by someone who needed it.
              By sharing it here, they've saved thousands of other developers hours of work.
            </p>
            <p>
              Our goal is to become the definitive open source React component library
              where quality, accessibility, and developer experience are never compromised.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: `${SITE_STATS.components}+`, label: "Components", icon: <Layers size={18} /> },
            { value: `${SITE_STATS.contributors}+`, label: "Contributors", icon: <Users size={18} /> },
            { value: "MIT", label: "License", icon: <Star size={18} /> },
            { value: "100%", label: "Free Forever", icon: <Heart size={18} /> },
          ].map(({ value, label, icon }) => (
            <div key={label} className="text-center p-5 rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-center text-brand mb-2">{icon}</div>
              <p className="text-2xl font-bold mb-1">{value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-5 rounded-2xl border border-border bg-card">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold mb-3">Team and Contributors</h2>
          <p className="text-muted-foreground mb-8">
            OpenUI Hub is built and maintained by{" "}
            <a
              href="https://github.com/Godswill-Nwafor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline font-medium"
            >
              Godswill Nwafor
            </a>{" "}
            and this team of contributors.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {team.map((member) => (
              <a
                key={member.github}
                href={`https://github.com/${member.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-card hover:border-brand/40 hover:shadow-md transition-all group"
              >
                <div className="relative shrink-0">
                  <AvatarImage
                    src={member.avatar}
                    alt={member.name}
                    size={48}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  {member.isOwner && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-card flex items-center justify-center text-[9px]" title="Project Owner">★</span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm group-hover:text-brand transition-colors truncate">{member.name}</p>
                  <p className="text-xs text-muted-foreground">@{member.github}</p>
                  <span className={`inline-block mt-1 text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    member.role === "Project Owner"
                      ? "bg-amber-500/15 text-amber-400"
                      : member.role === "Maintainer"
                      ? "bg-brand/15 text-brand"
                      : "bg-emerald-500/15 text-emerald-400"
                  }`}>
                    {member.role}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Want to join the team?{" "}
            <Link href="/contribute" className="text-brand hover:underline font-medium">
              Start contributing
            </Link>
          </p>
        </section>

        {/* Acknowledgments */}
        <section>
          <h2 className="text-3xl font-bold mb-5">Acknowledgments</h2>
          <div className="flex gap-4 p-6 rounded-2xl border border-border bg-card">
            <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
              <GraduationCap size={22} />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              OpenUI Hub began as a CSE 406 Open Source course project, under the guidance of{" "}
              <strong className="text-foreground">Dr. Chinwe Peace Igiri</strong>, our CSE 406 Open
              Source lecturer, guardian, and supervisor. Her direction gave rise to the idea of
              building this open-source component library, and her mentorship shaped how the team
              approached it. We&apos;re grateful for her contribution to this project&apos;s success.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 rounded-2xl border border-border bg-card">
          <Github size={32} className="mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-3">Built in public, for the public</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
            All code, issues, discussions, and decisions happen on GitHub. Come say hello.
          </p>
          <Link
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-xl bg-brand text-white font-semibold hover:opacity-90 shadow-lg shadow-brand/20"
          >
            <Github size={16} /> View on GitHub <ArrowRight size={15} />
          </Link>
        </section>
      </div>
    </div>
  );
}
