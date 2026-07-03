#!/usr/bin/env node
/**
 * OpenUI Hub — Component Data Metadata Validator
 *
 * Scans all TypeScript component data files in src/data/components/
 * and verifies that each ComponentDoc object has the required metadata
 * fields populated with valid values.
 *
 * Used by GitHub Actions to validate any new or changed component data files.
 *
 * Usage:
 *   node scripts/validate-metadata.js
 *
 * Exit codes:
 *   0  — All files passed
 *   1  — One or more files failed
 */

"use strict";

const fs = require("fs");
const path = require("path");

// ── Configuration ─────────────────────────────────────────────────────────────

const COMPONENTS_DIR = path.resolve(__dirname, "..", "src", "data", "components");

const REQUIRED_METADATA_KEYS = [
  "id",
  "name",
  "description",
  "author",
  "framework",
  "version",
  "category",
  "tags",
  "createdAt",
  "status",
];

const VALID_FRAMEWORKS = ["react", "React"];
const VALID_STATUSES = ["approved", "pending", "rejected", "active", "deprecated"];
const VALID_CATEGORIES = [
  "buttons", "cards", "forms", "inputs", "navbars", "footers",
  "heroes", "pricing", "testimonials", "dashboards", "tables",
  "charts", "badges", "avatars", "alerts", "modals", "drawers",
  "accordions", "dropdowns", "breadcrumbs", "pagination", "loaders",
  "skeletons", "tooltips", "tabs", "carousels",
];

// ── Counters ──────────────────────────────────────────────────────────────────

let scannedFiles = 0;
let failedFiles = 0;
const fileResults = [];

// ── Validator ─────────────────────────────────────────────────────────────────

function validateDataFile(filePath) {
  const relativePath = path.relative(process.cwd(), filePath);
  const source = fs.readFileSync(filePath, "utf8");

  // Skip files that don't contain component data
  if (!source.includes("ComponentDoc") && !source.includes("metadata")) {
    return;
  }

  // Skip pure index/re-export files
  if (!source.includes("metadata:") && !source.includes("metadata :")) {
    return;
  }

  scannedFiles++;
  const fileErrors = [];

  // Check required metadata keys exist in the source text
  for (const key of REQUIRED_METADATA_KEYS) {
    const pattern = new RegExp(`\\b${key}\\s*:`);
    if (!pattern.test(source)) {
      fileErrors.push(`Missing metadata field: "${key}"`);
    }
  }

  // Validate framework value
  const frameworkMatch = source.match(/\bframework\s*:\s*["']([^"']+)["']/);
  if (frameworkMatch) {
    const fw = frameworkMatch[1];
    if (!VALID_FRAMEWORKS.includes(fw)) {
      fileErrors.push(
        `Invalid framework: "${fw}" — must be "react". ` +
        `OpenUI Hub v1.0 only accepts React components.`
      );
    }
  }

  // Validate status value
  const statusMatch = source.match(/\bstatus\s*:\s*["']([^"']+)["']/);
  if (statusMatch && !VALID_STATUSES.includes(statusMatch[1])) {
    fileErrors.push(
      `Invalid status: "${statusMatch[1]}" — must be one of: ${VALID_STATUSES.join(", ")}`
    );
  }

  // Validate category value
  const categoryMatch = source.match(/\bcategory\s*:\s*["']([^"']+)["']/);
  if (categoryMatch && !VALID_CATEGORIES.includes(categoryMatch[1])) {
    fileErrors.push(
      `Invalid category: "${categoryMatch[1]}" — must be one of the valid project categories.`
    );
  }

  // Author must include github field
  const authorBlockMatch = source.match(/author\s*:\s*\{([^}]+)\}/s);
  if (authorBlockMatch) {
    const authorBlock = authorBlockMatch[1];
    if (!authorBlock.includes("github")) {
      fileErrors.push('Author object must include a "github" field (contributor GitHub username).');
    }
    if (!authorBlock.includes("name")) {
      fileErrors.push('Author object must include a "name" field (contributor display name).');
    }
  } else if (source.includes("author:") || source.includes("author :")) {
    fileErrors.push('Author field detected but could not parse — ensure it is an object with "name" and "github" fields.');
  }

  // Version must follow semver
  const versionMatch = source.match(/\bversion\s*:\s*["']([^"']+)["']/);
  if (versionMatch && !/^\d+\.\d+\.\d+$/.test(versionMatch[1])) {
    fileErrors.push(
      `Invalid version format: "${versionMatch[1]}" — must follow semver (e.g., "1.0.0").`
    );
  }

  // Check for forbidden tech
  if (/\$\(document\)|import\s+\$/.test(source) && !/\/\*[^*]*\*\//.test(source)) {
    fileErrors.push("jQuery references detected — not allowed in component data files.");
  }

  fileResults.push({ path: relativePath, errors: fileErrors });

  if (fileErrors.length > 0) {
    failedFiles++;
  }
}

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`\nERROR: Components directory not found: ${dir}`);
    console.error("Expected: src/data/components/");
    process.exit(1);
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".ts") &&
      entry.name !== "index.ts"
    ) {
      validateDataFile(fullPath);
    }
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

console.log("\nOpenUI Hub — Component Data Metadata Validator");
console.log("════════════════════════════════════════════════");
console.log(`Scanning: src/data/components/\n`);

scanDirectory(COMPONENTS_DIR);

// Print results
for (const { path: filePath, errors } of fileResults) {
  if (errors.length === 0) {
    console.log(`  ✓  ${filePath}`);
  } else {
    console.log(`\n  ✗  ${filePath}`);
    errors.forEach((e) => console.log(`       ✗  ${e}`));
  }
}

console.log("\n════════════════════════════════════════════════");
console.log(`Scanned : ${scannedFiles} component data file(s)`);

if (failedFiles > 0) {
  console.log(`Failed  : ${failedFiles} file(s)\n`);
  console.log("❌  Metadata validation FAILED.");
  console.log("    Fix the errors above and push again.");
  process.exit(1);
} else {
  console.log(`\n✅  All ${scannedFiles} component data file(s) passed metadata validation.`);
  process.exit(0);
}
