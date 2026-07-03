#!/usr/bin/env node
/**
 * OpenUI Hub — Component Submission Validator
 *
 * Validates that a component folder meets all OpenUI Hub contribution standards.
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
 *   - Required files: ComponentName.tsx, metadata.json, README.md, preview.png
 *   - metadata.json: valid JSON, all required fields present and correct
 *   - Tech stack: React, TypeScript, Tailwind CSS
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

const VALID_FRAMEWORKS = ["React"];
const VALID_LANGUAGES = ["TypeScript"];
const VALID_STYLING = ["Tailwind CSS"];

const VALID_CATEGORIES = [
  "buttons", "cards", "forms", "inputs", "navbars", "footers",
  "heroes", "pricing", "testimonials", "dashboards", "tables",
  "charts", "badges", "avatars", "alerts", "modals", "drawers",
  "accordions", "dropdowns", "breadcrumbs", "pagination", "loaders",
  "skeletons", "tooltips", "tabs", "carousels",
];

const README_REQUIRED_SECTIONS = ["Installation", "Usage", "Props"];

// PascalCase: starts with uppercase letter, only letters and digits
const PASCALCASE_RE = /^[A-Z][a-zA-Z0-9]+$/;

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

function validateMainFile(componentDir, componentName) {
  const tsxPath = path.join(componentDir, `${componentName}.tsx`);

  if (!fs.existsSync(tsxPath)) {
    error(
      `Missing main component file: "${componentName}.tsx"\n` +
      `    The .tsx file must be named exactly the same as the folder (PascalCase).`
    );
    return;
  }

  pass(`${componentName}.tsx exists`);

  const source = fs.readFileSync(tsxPath, "utf8");

  // Must be TypeScript (.tsx extension already checked by filename)
  pass("Component uses TypeScript (.tsx)");

  // React usage — check for JSX syntax or React import
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
      `Could not confirm React usage in "${componentName}.tsx".\n` +
      `    Ensure the component uses React/JSX syntax.`
    );
  }

  // Tailwind CSS — check for className usage
  if (source.includes('className="') || source.includes("className={") || source.includes("className:`")) {
    pass("Component uses Tailwind CSS (className detected)");
  } else {
    warn(
      `No className attribute detected in "${componentName}.tsx".\n` +
      `    Styling must use Tailwind CSS utility classes.`
    );
  }

  // Forbidden: jQuery
  if (
    source.includes("import $") ||
    source.includes('require("jquery")') ||
    source.includes("require('jquery')")
  ) {
    error("jQuery is not allowed. Use React with Tailwind CSS instead.");
  }

  // Forbidden: Vue
  if (source.includes("defineComponent") || /from ['"]vue['"]/i.test(source)) {
    error("Vue is not accepted. Only React + TypeScript + Tailwind CSS components are allowed in v1.0.");
  }

  // Forbidden: Angular
  if (source.includes("@Component({") || source.includes("@NgModule(")) {
    error("Angular is not accepted. Only React + TypeScript + Tailwind CSS components are allowed in v1.0.");
  }

  // Forbidden: .jsx extension imports
  if (/from ['"][^'"]+\.jsx['"]/i.test(source)) {
    error("Importing .jsx files is not allowed. All imports must be TypeScript (.tsx/.ts).");
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
        `      ComponentName.tsx  metadata.json  README.md  preview.png`
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

  // framework must be "React"
  if (metadata.framework !== undefined) {
    if (!VALID_FRAMEWORKS.includes(metadata.framework)) {
      error(
        `metadata.json "framework" must be exactly "React". Got: "${metadata.framework}"\n` +
        `    OpenUI Hub v1.0 only accepts React components.`
      );
    }
  }

  // language must be "TypeScript"
  if (metadata.language !== undefined) {
    if (!VALID_LANGUAGES.includes(metadata.language)) {
      error(
        `metadata.json "language" must be exactly "TypeScript". Got: "${metadata.language}"\n` +
        `    Only TypeScript (.tsx) components are accepted.`
      );
    }
  }

  // styling must be "Tailwind CSS"
  if (metadata.styling !== undefined) {
    if (!VALID_STYLING.includes(metadata.styling)) {
      error(
        `metadata.json "styling" must be exactly "Tailwind CSS". Got: "${metadata.styling}"\n` +
        `    Only Tailwind CSS is accepted for styling.`
      );
    }
  }

  // category must be one of the valid values
  if (metadata.category !== undefined) {
    if (VALID_CATEGORIES.includes(metadata.category)) {
      pass(`metadata.json "category" is valid: "${metadata.category}"`);
    } else {
      error(
        `metadata.json "category" is not a valid project category. Got: "${metadata.category}"\n` +
        `    Valid categories: ${VALID_CATEGORIES.join(", ")}`
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
        `    README.md must include: Purpose, Installation, Usage, Props, Dependencies, Example.`
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
