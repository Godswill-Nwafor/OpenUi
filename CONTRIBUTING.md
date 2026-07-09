# Contributing to OpenUI Hub

Thank you for contributing to OpenUI Hub! This document covers everything you need to know to submit a high-quality component that meets our standards and passes automated validation.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Supported Technology Stack](#supported-technology-stack)
- [Component Structure](#component-structure)
- [Metadata Requirements](#metadata-requirements)
- [README Requirements](#readme-requirements)
- [Naming Conventions](#naming-conventions)
- [Contribution Workflow](#contribution-workflow)
- [Pull Request Checklist](#pull-request-checklist)
- [Automated Validation](#automated-validation)
- [Coding Standards](#coding-standards)
- [Development Setup](#development-setup)
- [Component Attribution](#component-attribution)

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Supported Technology Stack

OpenUI Hub accepts components built with **any language or framework** — React, Vue, Angular, Svelte, plain HTML/CSS, vanilla JS, jQuery, whatever you used to build it. The validator checks submission *structure* (folder layout, required files, complete metadata), not your tech-stack choice.

### Live preview support

Four authoring styles get a real, interactive live preview in the gallery today:

| Stack | Main file | Preview |
|---|---|---|
| **React** (TypeScript or JavaScript) | `ComponentName.tsx` / `.jsx` | Rendered live in the app |
| **Plain HTML/CSS** | `ComponentName.html` (+ optional `ComponentName.css`) | Rendered live in a sandboxed iframe |
| **Svelte** | `ComponentName.svelte` | Compiled with the real Svelte compiler, rendered live in a sandboxed iframe |
| **Vue** (including `<script setup>`) | `ComponentName.vue` | Compiled with the real `@vue/compiler-sfc`, rendered live in a sandboxed iframe |

For Svelte and Vue, the compile step isn't automatic on submission — it runs once, via `node scripts/compile-preview.js <svelte|vue> path/to/Component.<ext>`, when a maintainer ports your submission into `src/data/components/`. So a fresh `submissions/` PR won't show a live preview yet; that's expected, not a bug.

Anything else (Angular, plain vanilla JS, jQuery, etc.) is still fully accepted — it just displays as code + documentation instead of an interactive render, since the gallery doesn't have a compile pipeline for those yet.

### Recommended (not required)

- **Icons**: Lucide React, if you're in React
- **Styling**: Tailwind CSS, if you want to match the rest of the gallery's look — but plain CSS, Sass, or any other styling approach is fine too

---

## Component Structure

Every component submission **must** follow this exact folder structure. Missing any required file will cause automated PR validation to fail.

```
ComponentName/
├── ComponentName.<ext>   # Your component source (required)
├── metadata.json         # Component metadata — all fields required
├── README.md             # Documentation (required)
└── preview.png           # Screenshot or preview image (required)
```

The main source file must be named exactly like the folder (PascalCase) and use one of these extensions: `.tsx`, `.jsx`, `.ts`, `.js`, `.vue`, `.svelte`, `.html`. If you're submitting plain HTML/CSS, put your styles in a sibling `ComponentName.css` file or an inline `<style>` block.

Place your component folder inside `submissions/`:

```
submissions/
└── MyButtonComponent/
    ├── MyButtonComponent.tsx
    ├── metadata.json
    ├── README.md
    └── preview.png
```

### File Requirements

| File | Required | Notes |
|---|---|---|
| `ComponentName.<ext>` | Yes | Main component source, in whatever language/framework you used. File name must exactly match the folder name. |
| `metadata.json` | Yes | All required fields must be present. Fails validation if missing or incomplete. |
| `README.md` | Yes | Must include Installation and Usage sections at minimum (add Props if your component takes configurable inputs). |
| `preview.png` | Yes | Screenshot or rendered preview image of the component. |

---

## Metadata Requirements

Every component must include a `metadata.json` file with all required fields populated:

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

### Field Descriptions

| Field | Required | Value |
|---|---|---|
| `name` | Yes | Display name of the component (e.g., `"Primary Button"`) |
| `description` | Yes | Short description of what the component does |
| `author` | Yes | Your full name or display name |
| `githubUsername` | Yes | Your GitHub username — used for attribution |
| `category` | Yes | Lowercase-kebab-case slug (e.g. `"buttons"`, `"loading-spinners"`). See below. |
| `framework` | Yes | Whatever you built it with — `"React"`, `"Vue"`, `"HTML/CSS"`, etc. Only `"React"` and `"HTML/CSS"` get a live interactive preview today. |
| `language` | Yes | e.g. `"TypeScript"`, `"JavaScript"`, `"HTML"` |
| `styling` | Yes | e.g. `"Tailwind CSS"`, `"CSS"`, `"Sass"` |
| `version` | Yes | Semantic version — start new components at `"1.0.0"` |
| `tags` | Yes | Array of descriptive strings for search (minimum 1 tag) |

If `metadata.json` is missing or any required field is empty or invalid, the PR will fail automated validation and cannot be merged.

### Categories

Use an existing category where it fits — check the list on the [Categories page](https://github.com/Godswill-Nwafor/OpenUi) or in [`src/lib/constants.ts`](src/lib/constants.ts). Common ones: `buttons` · `cards` · `forms` · `inputs` · `navbars` · `footers` · `heroes` · `pricing` · `testimonials` · `dashboards` · `tables` · `charts` · `badges` · `avatars` · `alerts` · `modals` · `drawers` · `accordions` · `dropdowns` · `breadcrumbs` · `pagination` · `loaders` · `skeletons` · `tooltips` · `tabs` · `carousels`.

**New categories are welcome.** If nothing fits, pick a new lowercase-kebab-case slug (e.g. `"data-viz"`, `"loading-spinners"`) — it's automatically registered on the site once your component is merged, with an auto-generated label and icon. No code change required.

---

## README Requirements

Every component must include a `README.md`. At minimum it must cover:

1. **Installation** — Any dependencies required (prefer zero dependencies)
2. **Usage** — How to use the component with a code example

And ideally also:

3. **Component Purpose** — What the component does and when to use it
4. **Props** — Table of all props with type, default, required, and description (skip if your component has no configurable props — e.g. a static HTML/CSS snippet)
5. **Dependencies** — List any packages required
6. **Example Usage** — A complete working code example

### README Template (React example)

```markdown
# ComponentName

Brief description of the component.

## Purpose

Explain what this component does and the problem it solves.

## Installation

\`\`\`bash
# No installation needed — copy ComponentName.tsx into your project
\`\`\`

## Usage

\`\`\`tsx
import { ComponentName } from "./ComponentName";

export default function App() {
  return <ComponentName />;
}
\`\`\`

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `variant` | `"primary" \| "secondary"` | `"primary"` | No | Visual style |

## Dependencies

- None (or list required packages)

## Example

\`\`\`tsx
<ComponentName variant="primary" onClick={() => console.log("clicked")} />
\`\`\`
```

### README Template (HTML/CSS example)

```markdown
# ComponentName

Brief description of the component.

## Installation

\`\`\`bash
# No installation needed — copy ComponentName.html (and ComponentName.css) into your project
\`\`\`

## Usage

\`\`\`html
<link rel="stylesheet" href="ComponentName.css" />
<!-- paste the markup from ComponentName.html -->
\`\`\`

## Dependencies

- None
```

---

## Naming Conventions

### Component Names — PascalCase Required

All component names, folder names, and source file names must use **PascalCase**.
The folder name, the file name, and the exported component/function name (where applicable) must all match exactly.

**Correct:**
```
PrimaryButton/
ProductCard/
PricingSection/
DashboardLayout/
SearchModal/
```

**Incorrect (will be rejected by automated validation):**
```
button/          ← lowercase
button2/         ← lowercase + number suffix
newcomponent/    ← no word separation
component-test/  ← kebab-case
myCard/          ← camelCase
MYBUTTON/        ← ALL_CAPS
```

### Branch Names

Use `feature/ComponentName` format:

```bash
git checkout -b feature/PrimaryButton
git checkout -b feature/ProductCard
git checkout -b feature/PricingSection
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(buttons): add PrimaryButton component
feat(cards): add ProductCard component
fix(forms): resolve dark mode label color in LoginForm
docs: update contribution guide
chore: upgrade framer-motion to 11.x
```

---

## Contribution Workflow

### Step by Step

1. **Fork** the repository on GitHub
2. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Openui.git
   cd openui-hub
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Create** a feature branch named after your component:
   ```bash
   git checkout -b feature/MyComponentName
   ```
5. **Build** your component in the `submissions/` folder:
   ```bash
   mkdir submissions/MyComponentName
   # Create MyComponentName.<ext>, metadata.json, README.md, preview.png
   ```
6. **Validate** locally before submitting:
   ```bash
   node scripts/validate-component.js submissions/MyComponentName
   ```
7. **Run** the standard checks:
   ```bash
   npm run lint
   npm run type-check
   ```
8. **Commit** and push:
   ```bash
   git add .
   git commit -m "feat(category): add MyComponentName component"
   git push origin feature/MyComponentName
   ```
9. **Open a Pull Request** on GitHub

### Contribution Rules

Every contributor must:

- ✓ Fork the repository before contributing
- ✓ Clone the repository locally
- ✓ Create a new feature branch for each PR
- ✓ Build **only one component per Pull Request**
- ✓ Use any language/framework — React, Vue, Angular, Svelte, plain HTML/CSS, vanilla JS, etc.
- ✓ Include all four required files in the submission folder
- ✓ Follow PascalCase naming for all component files and folders
- ✓ Ensure responsiveness across mobile, tablet, and desktop
- ✓ Ensure accessibility (ARIA attributes, keyboard navigation)
- ✓ Write clean, readable, well-organized code

---

## Pull Request Checklist

Before opening a PR, verify every item is satisfied:

**Structure**
- [ ] Component folder is named with PascalCase (`ComponentName/`)
- [ ] `ComponentName.<ext>` exists and its name matches the folder name exactly
- [ ] `metadata.json` exists and all 10 required fields are filled
- [ ] `README.md` exists with Installation, Usage, and (if applicable) Props sections
- [ ] `preview.png` exists (screenshot of the component)

**Code Quality**
- [ ] `metadata.json` accurately describes the language/framework/styling you actually used
- [ ] If TypeScript: props are typed with interfaces, no implicit `any`
- [ ] No unnecessary external dependencies added
- [ ] `npm run lint` passes with no errors (for `.ts`/`.tsx`/`.js`/`.jsx` submissions)
- [ ] `npm run type-check` passes with no TypeScript errors (for TypeScript submissions)

**Component Quality**
- [ ] Fully responsive across mobile, tablet, and desktop
- [ ] Works in both light mode and dark mode
- [ ] Includes ARIA attributes for accessibility
- [ ] Keyboard navigation works where applicable
- [ ] Only one component is submitted in this PR

### Review Timeline

We aim to review all PRs within **48 hours**. If your PR sits for more than 5 days without a response, ping us in the issue tracker.

---

## Automated Validation

Every PR automatically triggers GitHub Actions that run the following checks:

| Check | Command | Must Pass |
|---|---|---|
| Install | `npm ci` | Yes |
| Lint | `npm run lint` | Yes |
| TypeScript | `npm run type-check` | Yes |
| Build | `npm run build` | Yes |
| Component structure | `validate-component.js` | Yes |
| `metadata.json` schema | Automated field check | Yes |
| Required files | Automated file check | Yes |
| Folder structure | Automated structure check | Yes |

Lint, TypeScript, and Build checks run against the whole app and only fail because of your submission if your source file is `.ts`/`.tsx`/`.js`/`.jsx` and has actual errors — HTML/CSS/Vue/etc. submissions aren't linted or type-checked by these project-wide commands.

**If any check fails:** The PR will display red ✗ badges on failed checks and **cannot be merged** until all issues are resolved.

### Running Validation Locally

```bash
# Validate your component submission folder
node scripts/validate-component.js submissions/YourComponentName

# Run all CI checks
npm run lint
npm run type-check
npm run build
```

---

## Coding Standards

These apply if you're using React + TypeScript + Tailwind CSS. If you're using a different stack, write clean, well-organized code idiomatic to that language/framework instead.

### TypeScript

- Type all props with explicit interfaces — no implicit `any`
- Export prop types so consumers can import them
- Use `React.ReactNode` for children props
- Avoid `any` — use proper types or `unknown`

```tsx
interface MyButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export function MyButton({
  variant = "primary",
  size = "md",
  children,
  ...props
}: MyButtonProps) {
  return (
    <button
      className="rounded-xl bg-brand text-white px-4 py-2"
      aria-disabled={props.disabled}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Tailwind CSS

- Use Tailwind utility classes — no inline `style` attributes
- Use CSS variables for theme colors (`bg-background`, `text-foreground`, `border-border`)
- Use `dark:` prefix for dark mode — not hard-coded hex colors
- Use responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`

### Accessibility

- Add `aria-label` to every icon-only button
- Use semantic HTML elements (`<button>`, `<nav>`, `<header>`, `<main>`, etc.)
- Ensure keyboard navigation (tab order, Enter/Space activating buttons)
- Use `role` attributes where native semantics are insufficient
- Provide `alt` text for all images

---

## Development Setup

```bash
# Clone and install
git clone https://github.com/Godswill-Nwafor/OpenUi.git
cd openui-hub
npm install

# Start dev server
npm run dev

# Available scripts
npm run dev           # Start development server (http://localhost:3000)
npm run build         # Production build
npm run start         # Start production server
npm run lint          # Run ESLint
npm run lint:fix      # Run ESLint with auto-fix
npm run type-check    # TypeScript type checking
npm run format        # Prettier code formatting
npm run validate      # Validate a component submission folder
```

---

## Component Attribution

Every approved component permanently displays contributor information in the component gallery:

- **GitHub Avatar** — fetched automatically from your `githubUsername`
- **GitHub Username** — linked to your GitHub profile
- **Contribution Date** — when the component was merged
- **Version** — from your `metadata.json`
- **Category** — from your `metadata.json`

Your name and GitHub profile are credited on the component's detail page for as long as OpenUI Hub exists.

---

Questions? Open an issue or start a [Discussion](https://github.com/Godswill-Nwafor/OpenUi/discussions).
