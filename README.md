# OpenUI Hub

**Build Beautiful Interfaces Together**

OpenUI Hub is a free, open-source UI component library platform for React. Browse, copy, and contribute beautiful, production-ready components — no installation required.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/built%20with-Next.js%2016-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8)](https://tailwindcss.com)

---

## Features

- **60+ components** across 26 categories (Buttons, Cards, Forms, Modals, Navbars, Dashboards, and more)
- **Copy-paste** workflow — no package to install, just copy the code and own it
- **Live preview** of every component with code highlighting
- **Dark mode** by default with light mode toggle
- **Open contributions** — anyone can submit a component via GitHub PR
- **Full TypeScript** with documented props for every component
- **Framer Motion** animations throughout
- **Accessible** components with ARIA support

---

## Supported Technology Stack

OpenUI Hub accepts components built with **any language or framework** — React, Vue, Angular, Svelte, plain HTML/CSS, vanilla JS, and more. Two stacks get a real, interactive live preview in the gallery today:

| Stack | Main file | Preview |
|---|---|---|
| **React** (TypeScript or JavaScript) | `ComponentName.tsx` / `.jsx` | Rendered live in the app |
| **Plain HTML/CSS** | `ComponentName.html` (+ optional `.css`) | Rendered live in a sandboxed iframe |

Anything else is still accepted and displayed with full code + docs — it just won't have an interactive preview until that framework's runtime is bundled into the gallery.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full submission requirements.

---

## Component Folder Structure

Every component submission must include exactly these four files:

```
ComponentName/
├── ComponentName.<ext>   # Component source — any language/framework (required)
├── metadata.json         # Component metadata — all fields required
├── README.md             # Documentation (required)
└── preview.png           # Screenshot or preview image (required)
```

Place your submission inside the `submissions/` folder:

```
submissions/
└── MyButtonComponent/
    ├── MyButtonComponent.tsx
    ├── metadata.json
    ├── README.md
    └── preview.png
```

---

## Naming Conventions

All component names must use **PascalCase**.

| Correct | Incorrect |
|---|---|
| `PrimaryButton` | `button` |
| `ProductCard` | `button2` |
| `PricingSection` | `newcomponent` |
| `DashboardLayout` | `component-test` |

The folder name, source file name, and exported component/function name (where applicable) must all match exactly.

---

## Contribution Workflow

1. **Fork** the repository on GitHub
2. **Clone** your fork and install dependencies:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Openui.git
   cd openui-hub && npm install
   ```
3. **Create** a feature branch:
   ```bash
   git checkout -b feature/MyComponentName
   ```
4. **Build** your component in `submissions/MyComponentName/`
5. **Validate** locally:
   ```bash
   node scripts/validate-component.js submissions/MyComponentName
   ```
6. **Run** CI checks:
   ```bash
   npm run lint && npm run type-check
   ```
7. **Commit**, push, and open a Pull Request

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the full contribution guide.

---

## Pull Request Process

Every PR triggers GitHub Actions that run these checks automatically:

| Check | Must Pass |
|---|---|
| `npm ci` — Install | Yes |
| `npm run lint` — ESLint | Yes |
| `npm run type-check` — TypeScript | Yes |
| `npm run build` — Build | Yes |
| Component folder structure | Yes |
| `metadata.json` validation | Yes |
| Required files check | Yes |

**If any check fails**, the PR cannot be merged until all issues are fixed.

---

## Metadata Requirements

Every component must include `metadata.json` with all required fields:

```json
{
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
}
```

---

## Coding Standards

- All props typed with TypeScript interfaces — no implicit `any`
- Styling via Tailwind CSS utility classes only — no inline styles
- Responsive across mobile, tablet, and desktop (`sm:`, `md:`, `lg:` breakpoints)
- ARIA attributes on all interactive elements
- Dark mode support using CSS variables (`bg-background`, `text-foreground`, `border-border`) or `dark:` variants

---

## Project Structure

```
openui/
├── src/
│   ├── app/                  # Next.js App Router pages & API routes
│   │   ├── api/              # REST API endpoints
│   │   ├── components/       # Component library & detail pages
│   │   ├── contribute/       # Contribution guide
│   │   ├── contributors/     # Contributor profiles
│   │   ├── categories/       # Categories browse page
│   │   ├── docs/             # Documentation
│   │   └── about/            # About page
│   ├── components/
│   │   ├── layout/           # Header, Footer
│   │   ├── providers/        # ThemeProvider
│   │   ├── sections/         # Landing page sections
│   │   └── ui/               # Shared UI primitives
│   ├── data/
│   │   └── components/       # Component source data
│   ├── lib/                  # Utils, constants, GitHub helpers
│   └── types/                # TypeScript type definitions
├── scripts/                  # Validation and CI scripts
│   ├── validate-component.js # Validate component submission folder
│   └── validate-metadata.js  # Validate component data files
├── submissions/              # New component submissions (from contributors)
├── .github/
│   ├── workflows/            # GitHub Actions CI
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── ISSUE_TEMPLATE/
└── public/                   # Static assets
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Godswill-Nwafor/OpenUi.git
cd openui-hub

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

```bash
npm run dev           # Start development server
npm run build         # Production build
npm run start         # Start production server
npm run lint          # Run ESLint
npm run lint:fix      # Run ESLint with auto-fix
npm run type-check    # TypeScript type check
npm run format        # Prettier code formatting
npm run validate      # Validate a component submission folder
```

---

## Component Attribution

Every approved component permanently displays:

- GitHub Avatar (from contributor's GitHub username)
- GitHub Username (linked to their profile)
- Contribution Date
- Version and Category

---

## License

MIT © [OpenUI Hub Contributors](https://github.com/Godswill-Nwafor/OpenUi/graphs/contributors)

See [LICENSE](LICENSE) for the full license text.

---

<p align="center">Built with love by the open-source community</p>
