"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github, GitFork, GitBranch, Code2, GitPullRequest, CheckCircle,
  FolderOpen, FileText, ArrowRight, XCircle, AlertCircle, Shield, Type, Layers,
} from "lucide-react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { GITHUB_REPO } from "@/lib/constants";

// ── Code examples ─────────────────────────────────────────────────────────────

const folderStructure = `ComponentName/
├── ComponentName.<ext>   # Your component source — any language/framework
├── metadata.json         # Required component metadata
├── README.md             # Documentation (Installation, Usage, Props)
└── preview.png           # Screenshot or preview image`;

const submissionsStructure = `submissions/
└── MyButtonComponent/
    ├── MyButtonComponent.tsx
    ├── metadata.json
    ├── README.md
    └── preview.png`;

const metadataExample = `{
  "name": "My Button",
  "description": "A beautiful animated button with gradient effect.",
  "author": "Your Full Name",
  "githubUsername": "your-github-username",
  "category": "buttons",
  "framework": "React",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "version": "1.0.0",
  "tags": ["button", "animated", "gradient"]
}`;

const gitCommands = `# 1. Fork and clone
git clone https://github.com/YOUR_USERNAME/OpenUi.git
cd OpenUi && npm install

# 2. Create a feature branch
git checkout -b feature/MyButtonComponent

# 3. Build your component — any language/framework
mkdir submissions/MyButtonComponent
# Create MyButtonComponent.<ext>, metadata.json, README.md, preview.png

# 4. Validate locally before submitting
node scripts/validate-component.js submissions/MyButtonComponent

# 5. Run standard CI checks (for .ts/.tsx/.js/.jsx submissions)
npm run lint && npm run type-check

# 6. Commit and push
git add .
git commit -m "feat(buttons): add MyButtonComponent"
git push origin feature/MyButtonComponent

# 7. Open a Pull Request on GitHub`;

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    icon: GitFork, step: "01", title: "Fork the Repository",
    desc: "Click Fork on GitHub to create your own copy of the repository.",
  },
  {
    icon: GitBranch, step: "02", title: "Create a Feature Branch",
    desc: "Create a branch named after your component: `git checkout -b feature/MyComponentName`.",
  },
  {
    icon: FolderOpen, step: "03", title: "Build Your Component",
    desc: "Create your component folder inside submissions/ with all four required files.",
  },
  {
    icon: Code2, step: "04", title: "Use Any Language or Framework",
    desc: "React, Vue, Angular, Svelte, plain HTML/CSS, vanilla JS — build it however you like. React and HTML/CSS get a live interactive preview; everything else displays as code + docs.",
  },
  {
    icon: CheckCircle, step: "05", title: "Validate Locally",
    desc: "Run `node scripts/validate-component.js submissions/YourComponent` to catch errors before submitting.",
  },
  {
    icon: GitPullRequest, step: "06", title: "Open a Pull Request",
    desc: "Push your branch and open a PR. GitHub Actions runs validation checks automatically on every PR.",
  },
];

// ── Tech stack data ───────────────────────────────────────────────────────────

const livePreviewStack = [
  { label: "React (TypeScript or JavaScript)", detail: ".tsx / .jsx — renders live in the app" },
  { label: "Plain HTML/CSS", detail: ".html + optional .css — renders live in a sandboxed iframe" },
];

const codeOnlyStack = [
  { label: "Vue", detail: ".vue — accepted, code + docs only for now" },
  { label: "Angular", detail: ".ts components — accepted, code + docs only for now" },
  { label: "Svelte", detail: ".svelte — accepted, code + docs only for now" },
  { label: "Vanilla JS, jQuery, or anything else", detail: "accepted, code + docs only" },
];

// ── Naming data ───────────────────────────────────────────────────────────────

const namingCorrect = ["PrimaryButton", "ProductCard", "PricingSection", "DashboardLayout", "SearchModal"];
const namingWrong   = ["button", "button2", "newcomponent", "component-test", "myCard", "MYBUTTON"];

// ── PR validation checklist ───────────────────────────────────────────────────

const validationChecklist = [
  "Component compiles without build errors",
  "TypeScript passes with no errors, if you used TypeScript (npm run type-check)",
  "ESLint passes with no errors, if you used JS/TS (npm run lint)",
  "Folder structure is correct (ComponentName/ with all 4 required files)",
  "metadata.json exists and all 10 required fields are populated",
  "README.md exists and includes at least Installation and Usage sections",
  "preview.png exists (screenshot of the rendered component)",
  "metadata.json accurately reflects the language/framework/styling you actually used",
  "Component name follows PascalCase convention",
  "Component is responsive across mobile, tablet, and desktop",
  "Component follows accessibility best practices (ARIA attributes, keyboard nav)",
  "Only one component is submitted per Pull Request",
];

// ── Required metadata fields ──────────────────────────────────────────────────

const metadataFields = [
  { field: "name", note: 'Display name, e.g., "Primary Button"' },
  { field: "description", note: "What the component does" },
  { field: "author", note: "Your full name or display name" },
  { field: "githubUsername", note: "Your GitHub username, used for attribution" },
  { field: "category", note: "Lowercase-kebab-case slug — new categories are auto-registered" },
  { field: "framework", note: 'Whatever you built it with, e.g. "React", "Vue", "HTML/CSS"' },
  { field: "language", note: 'e.g. "TypeScript", "JavaScript", "HTML"' },
  { field: "styling", note: 'e.g. "Tailwind CSS", "CSS", "Sass"' },
  { field: 'version: "1.0.0"', note: "Semantic version — start at 1.0.0" },
  { field: "tags: []", note: "Array of descriptive tags for search" },
];

// ── Component ─────────────────────────────────────────────────────────────────

export function ContributePageClient() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <div className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/8 text-brand text-sm font-medium mb-6">
              <Github size={14} /> Open Contributions Welcome
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contribute a Component</h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Built something beautiful? Share it with thousands of developers worldwide.
              Every contribution is validated automatically. Follow the rules below and your PR will sail through.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-7 rounded-xl bg-brand text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand/20"
              >
                <Github size={16} /> Fork on GitHub <ArrowRight size={15} />
              </Link>
              <a
                href={`${GITHUB_REPO}/blob/main/CONTRIBUTING.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-xl border border-border text-sm font-medium hover:bg-accent transition-colors"
              >
                <FileText size={15} /> Full Guide (CONTRIBUTING.md)
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">

        {/* ── Steps ── */}
        <section id="guide">
          <h2 className="text-3xl font-bold mb-10">Contribution Guide</h2>
          <div className="space-y-5">
            {steps.map(({ icon: Icon, step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-5 p-5 rounded-2xl border border-border bg-card"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                    <Icon size={18} />
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-border" />}
                </div>
                <div className="pt-1.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-muted-foreground">{step}</span>
                    <h3 className="font-semibold">{title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Supported Tech Stack ── */}
        <section id="tech-stack">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
              <Layers size={16} />
            </div>
            <h2 className="text-3xl font-bold">Supported Tech Stack</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            OpenUI Hub accepts components built with <strong className="text-foreground">any language or framework</strong>.
            Automated validation checks your submission's structure — folder layout, required files, complete
            metadata — not your tech-stack choice.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={16} className="text-emerald-500" />
                <h3 className="font-semibold text-emerald-500">Gets a Live Preview</h3>
              </div>
              <ul className="space-y-3">
                {livePreviewStack.map(({ label, detail }) => (
                  <li key={label} className="flex items-start gap-3">
                    <CheckCircle size={13} className="text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium text-sm">{label}</span>
                      <span className="text-xs text-muted-foreground ml-2">— {detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-4">
                <FileText size={16} className="text-muted-foreground" />
                <h3 className="font-semibold">Accepted — Code + Docs Only</h3>
              </div>
              <ul className="space-y-3">
                {codeOnlyStack.map(({ label, detail }) => (
                  <li key={label} className="flex items-start gap-3">
                    <FileText size={13} className="text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium text-sm">{label}</span>
                      <span className="text-xs text-muted-foreground ml-2">— {detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 flex gap-3 p-4 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <AlertCircle size={15} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-amber-400">Why the split:</strong> React renders directly in this Next.js app,
              and plain HTML/CSS renders safely in a sandboxed iframe — both are real, working previews. Other
              frameworks would need their own runtime bundled into the gallery to render live; until that happens,
              they're still fully accepted, just shown as code + documentation instead.
            </p>
          </div>
        </section>

        {/* ── Component Structure ── */}
        <section id="structure">
          <h2 className="text-3xl font-bold mb-4">Component Structure</h2>
          <p className="text-muted-foreground mb-6">
            Every submission <strong className="text-foreground">must</strong> include exactly
            these four files inside a correctly named folder. Missing any file causes PR validation to fail.
          </p>

          <CodeBlock code={folderStructure} language="bash" filename="Required Structure" showLineNumbers={false} />

          <p className="text-muted-foreground text-sm mt-5 mb-3">
            Place your folder inside <code className="text-brand text-xs">submissions/</code>:
          </p>
          <CodeBlock code={submissionsStructure} language="bash" filename="submissions/" showLineNumbers={false} />

          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            {[
              {
                file: "ComponentName.<ext>",
                desc: "Your component source, in any language/framework (.tsx, .jsx, .vue, .svelte, .html, ...). File name must match the folder name exactly (PascalCase).",
              },
              {
                file: "metadata.json",
                desc: "All 10 required metadata fields must be present. Fails validation if missing or incomplete.",
              },
              {
                file: "README.md",
                desc: "Documentation: at minimum Installation and Usage. Add Props if your component takes configurable inputs.",
              },
              {
                file: "preview.png",
                desc: "A screenshot of the component. Required for the component gallery listing.",
              },
            ].map(({ file, desc }) => (
              <div key={file} className="flex gap-3 p-4 rounded-xl border border-border bg-card">
                <FileText size={14} className="text-brand shrink-0 mt-0.5" />
                <div>
                  <code className="text-xs font-mono text-brand">{file}</code>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Metadata ── */}
        <section id="metadata">
          <h2 className="text-3xl font-bold mb-4">metadata.json</h2>
          <p className="text-muted-foreground mb-6">
            Every component must include a <code className="text-brand">metadata.json</code> file with all
            10 required fields. Incomplete or invalid metadata will cause automated validation to fail and the PR cannot be merged.
          </p>
          <CodeBlock code={metadataExample} language="json" filename="metadata.json" />

          <div className="mt-5 rounded-2xl border border-border bg-card overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-secondary/40">
              <p className="text-sm font-semibold">All 10 required fields</p>
            </div>
            <div className="divide-y divide-border">
              {metadataFields.map(({ field, note }) => (
                <div key={field} className="flex items-start gap-4 px-5 py-3">
                  <code className="text-xs font-mono text-brand shrink-0 pt-0.5">{field}</code>
                  <span className="text-xs text-muted-foreground leading-relaxed">— {note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Naming Conventions ── */}
        <section id="naming">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
              <Type size={16} />
            </div>
            <h2 className="text-3xl font-bold">Naming Conventions</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            All component names, folder names, and source file names
            must use <strong className="text-foreground">PascalCase</strong>, whatever extension you use.
            The folder name, file name, and exported component/function name (where applicable) must all match exactly.
            Automated validation rejects any submission that does not follow this convention.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={15} className="text-emerald-500" />
                <h3 className="font-semibold text-emerald-500 text-sm">Correct — PascalCase</h3>
              </div>
              <ul className="space-y-2.5">
                {namingCorrect.map((name) => (
                  <li key={name} className="flex items-center gap-2.5">
                    <CheckCircle size={13} className="text-emerald-500 shrink-0" />
                    <code className="text-sm font-mono">{name}</code>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={15} className="text-red-500" />
                <h3 className="font-semibold text-red-500 text-sm">Incorrect — Will Be Rejected</h3>
              </div>
              <ul className="space-y-2.5">
                {namingWrong.map((name) => (
                  <li key={name} className="flex items-center gap-2.5">
                    <XCircle size={13} className="text-red-500 shrink-0" />
                    <code className="text-sm font-mono line-through opacity-50">{name}</code>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Git Workflow ── */}
        <section id="workflow">
          <h2 className="text-3xl font-bold mb-4">Git Workflow</h2>
          <p className="text-muted-foreground mb-6">
            Full workflow from fork to merged PR — including local validation before submitting:
          </p>
          <CodeBlock code={gitCommands} language="bash" filename="Terminal" showLineNumbers={false} />
        </section>

        {/* ── PR Validation Checklist ── */}
        <section id="validation">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Shield size={16} />
            </div>
            <h2 className="text-3xl font-bold">PR Validation Checklist</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            GitHub Actions runs these checks <strong className="text-foreground">automatically on every PR</strong>.
            All must pass before a maintainer can merge your contribution.
          </p>

          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-secondary/40">
              <Shield size={13} className="text-brand" />
              <span className="text-sm font-semibold">Automated Checks — All must pass</span>
            </div>
            <ul className="divide-y divide-border">
              {validationChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3 px-5 py-3">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex gap-3 p-4 rounded-xl border border-red-500/20 bg-red-500/5">
            <XCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-red-400">If any check fails:</strong> The PR will display failed checks
              and cannot be merged. The validation system reports exactly which step failed and why.
              Fix the issue, push again, and checks re-run automatically.
            </p>
          </div>
        </section>

        {/* ── Component Guidelines ── */}
        <section id="guidelines">
          <h2 className="text-3xl font-bold mb-6">Component Guidelines</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Clean, readable code",
                desc: "Write self-documenting code with clear variable names. Avoid unnecessary complexity or abstraction.",
              },
              {
                title: "Strong typing where applicable",
                desc: "If you used TypeScript, type all props with explicit interfaces — no implicit any. Export prop types for external use.",
              },
              {
                title: "Accessibility",
                desc: "Include ARIA attributes, keyboard navigation, and focus management for all interactive elements.",
              },
              {
                title: "Dark mode support",
                desc: "Use CSS variables (bg-background, text-foreground) or dark: variants — not hard-coded colors.",
              },
              {
                title: "Full documentation",
                desc: "Every prop documented in README.md with type, default, and description (if applicable). Include a working example.",
              },
              {
                title: "Responsive design",
                desc: "Component must work correctly on mobile, tablet, and desktop, using whatever breakpoint approach your styling method supports.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-3 p-4 rounded-xl border border-border">
                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-0.5">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-center py-10 rounded-2xl border border-border bg-card">
          <h2 className="text-2xl font-bold mb-3">Ready to contribute?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
            Your GitHub profile is permanently credited on every component you submit.
            Fork the repo, build with any language or framework, validate locally, and open a PR.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-7 rounded-xl bg-brand text-white font-semibold hover:opacity-90 shadow-lg shadow-brand/20"
            >
              <Github size={16} /> Fork on GitHub
            </Link>
            <a
              href={`${GITHUB_REPO}/blob/main/CONTRIBUTING.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-xl border border-border text-sm font-medium hover:bg-accent transition-colors"
            >
              <FileText size={15} /> Full Contribution Guide
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
