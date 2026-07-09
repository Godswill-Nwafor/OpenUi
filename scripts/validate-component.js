#!/usr/bin/env node
/**
 * OpenUI Hub — Component Submission Validator
 *
 * Validates that a component folder meets OpenUI Hub's structural
 * contribution standards. Any language/framework is accepted (React, Vue,
 * Angular, Svelte, plain HTML/CSS, vanilla JS, etc) and any category —
 * this validator checks submission *structure*, not tech-stack choice.
 *
 * Usage:
 *   node scripts/validate-component.js <path-to-component-folder>
 *
 * Example:
 *   node scripts/validate-component.js submissions/PrimaryButton
 *
 * Checks:
 *   - Folder exists and is a directory
 *   - PascalCase naming convention
 *   - Required files: ComponentName.<ext>, metadata.json, README.md, preview.png
 *   - metadata.json: valid JSON, all required fields present
 *   - category: reasonable slug format (new categories are welcome)
 *   - README.md: required sections present
 *
 * Exit codes:
 *   0  — All checks passed (warnings may exist)
 *   1  — One or more errors — PR cannot be merged
 */

"use strict";

const fs = require("fs");
const path = require("path");

// ── Configuration ─────────────────────────────────────────────────────────────

const REQUIRED_FILES = ["metadata.json", "README.md", "preview.png"];

const REQUIRED_METADATA_FIELDS = [
  "name",
  "description",
  "author",
  "githubUsername",
  "category",
  "framework",
  "language",
  "styling",
  "version",
  "tags",
];

// Any of these extensions is accepted as the main source file — the platform
// doesn't restrict which language/framework a component is authored in.
const ACCEPTED_EXTENSIONS = ["tsx", "jsx", "ts", "js", "vue", "svelte", "html"];

// Frameworks/languages with a real, live-rendered preview in the gallery
// (see src/data/preview-registry.tsx). Anything else is still accepted —
// it just shows code + docs instead of an interactive preview.
const LIVE_PREVIEW_FRAMEWORKS = ["react", "html/css", "html", "css"];

const README_REQUIRED_SECTIONS = ["Installation", "Usage"];

// PascalCase: starts with uppercase letter, only letters and digits
const PASCALCASE_RE = /^[A-Z][a-zA-Z0-9]+$/;

// lowercase-kebab-case slug, safe as a URL segment / object key
const CATEGORY_SLUG_RE = /^[a-z][a-z0-9-]*$/;

// ── Result collectors ─────────────────────────────────────────────────────────

const errors = [];
const warnings = [];
const passed = [];

function error(msg) { errors.push(msg); }
function warn(msg)  { warnings.push(msg); }
function pass(msg)  { passed.push(msg); }

// ── Validators ────────────────────────────────────────────────────────────────

function validateNaming(componentName) {
  if (PASCALCASE_RE.test(componentName)) {
    pass(`Name is PascalCase: "${componentName}"`);
  } else {
    error(
      `Component name must be PascalCase. Got: "${componentName}"\n` +
      `    Correct examples: PrimaryButton, ProductCard, PricingSection\n` +
      `    Incorrect: button, button2, newcomponent, component-test, myCard`
    );
  }
}

/** Find the main source file: ComponentName.<any accepted extension>. */
function findMainFile(componentDir, componentName) {
  for (const ext of ACCEPTED_EXTENSIONS) {
    const candidate = path.join(componentDir, `${componentName}.${ext}`);
    if (fs.existsSync(candidate)) return { path: candidate, ext };
  }
  return null;
}

function validateMainFile(componentDir, componentName) {
  const main = findMainFile(componentDir, componentName);

  if (!main) {
    error(
      `Missing main component file: "${componentName}.<ext>"\n` +
      `    The file must be named exactly the same as the folder (PascalCase) and use\n` +
      `    one of these extensions: ${ACCEPTED_EXTENSIONS.join(", ")}`
    );
    return;
  }

  pass(`${componentName}.${main.ext} exists`);

  const source = fs.readFileSync(main.path, "utf8");

  if (main.ext === "html") {
    // Plain HTML/CSS components get a real live preview via sandboxed iframe.
    pass("Component uses HTML — will render via live iframe preview");
    const cssSibling = path.join(componentDir, `${componentName}.css`);
    if (fs.existsSync(cssSibling)) {
      pass(`${componentName}.css exists`);
    } else if (!/<style[\s>]/i.test(source)) {
      warn(
        `No "${componentName}.css" file and no inline <style> block found.\n` +
        `    Add a stylesheet or inline <style> so the component actually looks styled.`
      );
    }
  } else if (main.ext === "tsx" || main.ext === "jsx") {
    const hasReact =
      source.includes("from 'react'") ||
      source.includes('from "react"') ||
      source.includes("React.") ||
      /<[A-Z][a-zA-Z]*[\s/>]/.test(source) || // JSX element
      source.includes("JSX.Element") ||
      source.includes("React.ReactNode") ||
      source.includes("React.FC");

    if (hasReact) {
      pass("Component uses React");
    } else {
      warn(
        `Could not confirm React usage in "${componentName}.${main.ext}".\n` +
        `    If this isn't a React component, that's fine — just make sure the\n` +
        `    metadata.json "framework" field reflects what you actually used.`
      );
    }
  } else {
    pass(`Component source uses .${main.ext} — accepted, no live preview in the gallery yet`);
  }
}

function validateRequiredFiles(componentDir) {
  for (const file of REQUIRED_FILES) {
    const filePath = path.join(componentDir, file);
    if (fs.existsSync(filePath)) {
      pass(`${file} exists`);
    } else {
      error(
        `Missing required file: "${file}"\n` +
        `    Every component submission must include:\n` +
        `      ComponentName.<ext>  metadata.json  README.md  preview.png`
      );
    }
  }
}

function validateMetadata(componentDir) {
  const metadataPath = path.join(componentDir, "metadata.json");
  if (!fs.existsSync(metadataPath)) return; // already reported above

  let metadata;
  try {
    metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
  } catch (e) {
    error(`metadata.json contains invalid JSON: ${e.message}`);
    return;
  }

  pass("metadata.json is valid JSON");

  // Required fields
  for (const field of REQUIRED_METADATA_FIELDS) {
    const value = metadata[field];
    if (value !== undefined && value !== "" && value !== null) {
      pass(`metadata.json "${field}" is present`);
    } else {
      error(
        `metadata.json is missing or has an empty required field: "${field}"\n` +
        `    All 10 required fields must be filled before this PR can be merged.`
      );
    }
  }

  // framework/language/styling: any non-empty value is accepted. Flag
  // (informationally) whether it'll get a live interactive preview.
  if (metadata.framework) {
    const fw = String(metadata.framework).toLowerCase();
    if (LIVE_PREVIEW_FRAMEWORKS.includes(fw)) {
      pass(`metadata.json "framework" is "${metadata.framework}" — gets a live interactive preview`);
    } else {
      pass(`metadata.json "framework" is "${metadata.framework}" — accepted (code + docs preview, no live render yet)`);
    }
  }

  // category: any reasonably-formatted slug is accepted — new categories
  // are auto-registered on the site instead of being rejected.
  if (metadata.category !== undefined) {
    if (CATEGORY_SLUG_RE.test(metadata.category)) {
      pass(`metadata.json "category" is a valid slug: "${metadata.category}"`);
    } else {
      error(
        `metadata.json "category" must be lowercase-kebab-case (letters, digits, hyphens, ` +
        `starting with a letter). Got: "${metadata.category}"\n` +
        `    Examples: "buttons", "loading-spinners", "data-viz"`
      );
    }
  }

  // version must follow semver
  if (metadata.version !== undefined) {
    if (/^\d+\.\d+\.\d+$/.test(metadata.version)) {
      pass(`metadata.json "version" follows semver: "${metadata.version}"`);
    } else {
      error(
        `metadata.json "version" must follow semver (e.g., "1.0.0"). Got: "${metadata.version}"`
      );
    }
  }

  // tags must be a non-empty array
  if (metadata.tags !== undefined) {
    if (!Array.isArray(metadata.tags)) {
      error(`metadata.json "tags" must be an array of strings. Got: ${typeof metadata.tags}`);
    } else if (metadata.tags.length === 0) {
      warn('metadata.json "tags" is empty — add at least one descriptive tag for search.');
    } else {
      pass(`metadata.json "tags" has ${metadata.tags.length} tag(s)`);
    }
  }

  // githubUsername must not contain spaces
  if (metadata.githubUsername && /\s/.test(metadata.githubUsername)) {
    error(
      `metadata.json "githubUsername" must be a GitHub username (no spaces). ` +
      `Got: "${metadata.githubUsername}"`
    );
  }
}

function validateReadme(componentDir) {
  const readmePath = path.join(componentDir, "README.md");
  if (!fs.existsSync(readmePath)) return; // already reported above

  const content = fs.readFileSync(readmePath, "utf8");

  for (const section of README_REQUIRED_SECTIONS) {
    if (content.includes(section)) {
      pass(`README.md contains "${section}" section`);
    } else {
      warn(
        `README.md is missing a "${section}" section.\n` +
        `    README.md should include: Purpose, Installation, Usage, Example ` +
        `(and Props if your component takes configurable inputs).`
      );
    }
  }

  if (content.trim().length < 100) {
    warn("README.md is very short — please provide meaningful documentation.");
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

const [, , componentDirArg] = process.argv;

if (!componentDirArg) {
  console.error(
    "\nUsage: node scripts/validate-component.js <component-directory>\n" +
    "Example: node scripts/validate-component.js submissions/PrimaryButton\n"
  );
  process.exit(1);
}

const componentDir = path.resolve(componentDirArg);
const componentName = path.basename(componentDir);

console.log("\nOpenUI Hub — Component Validator");
console.log("════════════════════════════════════════");
console.log(`Component : ${componentName}`);
console.log(`Path      : ${componentDir}`);
console.log("════════════════════════════════════════\n");

// Directory must exist
if (!fs.existsSync(componentDir)) {
  console.error(`ERROR: Directory not found: ${componentDir}`);
  process.exit(1);
}
if (!fs.statSync(componentDir).isDirectory()) {
  console.error(`ERROR: Path is not a directory: ${componentDir}`);
  process.exit(1);
}

// Run all validators
validateNaming(componentName);
validateMainFile(componentDir, componentName);
validateRequiredFiles(componentDir);
validateMetadata(componentDir);
validateReadme(componentDir);

// ── Report ────────────────────────────────────────────────────────────────────

const total = passed.length + warnings.length + errors.length;

if (passed.length > 0) {
  console.log("PASSED:");
  passed.forEach((m) => console.log(`  ✓  ${m}`));
  console.log("");
}

if (warnings.length > 0) {
  console.log("WARNINGS:");
  warnings.forEach((m) => console.log(`  ⚠  ${m}`));
  console.log("");
}

if (errors.length > 0) {
  console.log("ERRORS:");
  errors.forEach((m) => console.log(`  ✗  ${m}\n`));
  console.log("");
}

console.log("════════════════════════════════════════");

if (errors.length === 0) {
  console.log(
    `✅  Validation PASSED` +
    (warnings.length > 0 ? ` with ${warnings.length} warning(s)` : "") +
    `. (${passed.length}/${total} checks passed)`
  );
  process.exit(0);
} else {
  console.log(
    `❌  Validation FAILED — ${errors.length} error(s) must be fixed before this PR can be merged.`
  );
  process.exit(1);
}
