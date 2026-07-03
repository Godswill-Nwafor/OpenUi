import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Code2, Layers, GitPullRequest, ChevronRight, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Learn how to use OpenUI Hub components in your React projects.",
};

const sections = [
  {
    icon: <BookOpen size={20} />,
    title: "Getting Started",
    description: "Learn how to add OpenUI Hub components to your project in under 5 minutes.",
    href: "#getting-started",
    links: ["Introduction", "Quick Start", "Installation", "CLI Tool"],
  },
  {
    icon: <Code2 size={20} />,
    title: "Component API",
    description: "Detailed props, types, and usage examples for every component.",
    href: "/components",
    links: ["Buttons", "Cards", "Forms", "Modals", "Navbars"],
  },
  {
    icon: <Layers size={20} />,
    title: "Design System",
    description: "How to use the design tokens, CSS variables, and theming system.",
    href: "#design-system",
    links: ["Colors", "Typography", "Spacing", "Dark Mode"],
  },
  {
    icon: <GitPullRequest size={20} />,
    title: "Contributing",
    description: "Everything you need to know to add a new component to the library.",
    href: "/contribute",
    links: ["Guidelines", "Folder Structure", "Pull Request", "Review Process"],
  },
];

const quickStart = `# 1. Copy the component code from the library
# Navigate to any component and click "Copy"

# 2. (Optional) Use the CLI
npx openui-hub add button

# 3. Paste into your project
# The component is now yours — customize freely`;

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">Documentation</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">OpenUI Hub Docs</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Everything you need to start building with OpenUI Hub components in your React projects.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Section cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {sections.map(({ icon, title, description, href, links }) => (
            <Link
              key={title}
              href={href}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-brand transition-colors">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ChevronRight size={12} className="text-brand" />
                    {link}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        {/* Quick start */}
        <section id="getting-started" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
          <p className="text-muted-foreground mb-6">
            OpenUI Hub is a <strong>copy-paste</strong> component library. No npm package, no configuration — just copy the code and own it.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { step: "1", title: "Browse", desc: "Find the component you need in the library." },
              { step: "2", title: "Copy", desc: "Click the Copy button to copy the source code." },
              { step: "3", title: "Paste", desc: "Paste it into your project and customize freely." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-5 rounded-xl border border-border bg-card">
                <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm mb-3">{step}</div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <Terminal size={14} className="text-muted-foreground" />
              <span className="text-sm font-mono text-muted-foreground">Quick Start</span>
            </div>
            <pre className="p-5 text-sm text-muted-foreground leading-relaxed font-mono overflow-x-auto">
              {quickStart}
            </pre>
          </div>
        </section>

        {/* Design system */}
        <section id="design-system" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Design System</h2>
          <p className="text-muted-foreground mb-6">
            All components use CSS custom properties for theming. Override these in your globals.css to customize the look.
          </p>

          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="px-4 py-3 border-b border-border bg-card">
              <span className="text-sm font-mono text-muted-foreground">globals.css — CSS variables</span>
            </div>
            <pre className="p-5 text-xs text-muted-foreground font-mono overflow-x-auto leading-relaxed">{`:root {
  --background: #ffffff;
  --foreground: #0f0f0f;
  --card: #f8f8f8;
  --primary: #6366f1;      /* Brand color */
  --border: #e2e8f0;
  --muted-foreground: #64748b;
  --radius: 0.625rem;
}

.dark {
  --background: #080810;
  --foreground: #f0f0ff;
  --card: #0e0e1a;
  --primary: #818cf8;
  --border: #1e1e32;
}`}
            </pre>
          </div>
        </section>

        {/* Links */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/components" className="flex items-center justify-between p-5 rounded-2xl border border-border bg-card hover:border-brand/40 transition-colors group">
            <div>
              <p className="font-semibold mb-1">Browse All Components</p>
              <p className="text-sm text-muted-foreground">60+ components across 26 categories</p>
            </div>
            <ChevronRight size={18} className="text-muted-foreground group-hover:translate-x-1 group-hover:text-brand transition-all" />
          </Link>
          <Link href="/contribute" className="flex items-center justify-between p-5 rounded-2xl border border-border bg-card hover:border-brand/40 transition-colors group">
            <div>
              <p className="font-semibold mb-1">Contribute a Component</p>
              <p className="text-sm text-muted-foreground">Fork, build, and submit via GitHub PR</p>
            </div>
            <ChevronRight size={18} className="text-muted-foreground group-hover:translate-x-1 group-hover:text-brand transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
}
