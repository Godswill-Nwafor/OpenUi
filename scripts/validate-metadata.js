#!/usr/bin/env node
/**
 * OpenUI Hub — Component Data Metadata Validator
 *
 * Scans all TypeScript component data files in src/data/components/
 * and verifies that each ComponentDoc object has the required metadata
 * fields populated. Any framework/language and any category is accepted —
 * this checks structural completeness, not tech-stack choice.
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

const VALID_STATUSES = ["approved", "pending", "rejected", "active", "deprecated"];

// lowercase-kebab-case slug, safe as a URL segment / object key
const CATEGORY_SLUG_RE = /^[a-z][a-z0-9-]*$/;

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

  // framework: any non-empty value is accepted (React, Vue, HTML/CSS, etc).

  // Validate status value
  const statusMatch = source.match(/\bstatus\s*:\s*["']([^"']+)["']/);
  if (statusMatch && !VALID_STATUSES.includes(statusMatch[1])) {
    fileErrors.push(
      `Invalid status: "${statusMatch[1]}" — must be one of: ${VALID_STATUSES.join(", ")}`
    );
  }

  // Validate category format — any slug is accepted, new categories are
  // auto-registered on the site (see CATEGORIES in src/lib/constants.ts).
  const categoryMatch = source.match(/\bcategory\s*:\s*["']([^"']+)["']/);
  if (categoryMatch && !CATEGORY_SLUG_RE.test(categoryMatch[1])) {
    fileErrors.push(
      `Invalid category slug: "${categoryMatch[1]}" — must be lowercase-kebab-case ` +
      `(letters, digits, hyphens, starting with a letter).`
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
