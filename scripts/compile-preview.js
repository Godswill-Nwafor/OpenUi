#!/usr/bin/env node
/**
 * OpenUI Hub — Live Preview Compiler
 *
 * Compiles a single Svelte or Vue SFC into one self-contained, minified JS
 * bundle (zero external imports) that can be embedded directly as an inline
 * <script> inside a sandboxed iframe (sandbox="allow-scripts", deliberately
 * without allow-same-origin — the compiled bundle can't reach the parent
 * page, cookies, or storage).
 *
 * This runs once, at "add time", when a maintainer ports a Svelte/Vue
 * submission into src/data/components/*.ts — not at request time. The
 * output is pasted into that file's `compiledPreview` field. Svelte, Vue,
 * and esbuild are devDependencies only; nothing here ships in the deployed
 * app's runtime bundle.
 *
 * Usage:
 *   node scripts/compile-preview.js svelte path/to/Component.svelte
 *   node scripts/compile-preview.js vue path/to/Component.vue
 *
 * Prints the compiled bundle to stdout. Exits 1 with an error on stderr if
 * compilation fails (invalid syntax, etc).
 */

"use strict";

const fs = require("fs");
const path = require("path");

async function compileSvelte(source, filename) {
  const { compile } = await import("svelte/compiler");
  const esbuild = (await import("esbuild")).default;

  const result = compile(source, {
    generate: "client",
    css: "injected",
    filename,
    dev: false,
  });

  // The compiled module has exactly one `export default function Name(...)`.
  // Rewrite it to a local const so our mount call (same virtual module) can
  // reference it without a second import round-trip.
  const componentCode = result.js.code.replace(
    /export default (function\s+\w+|\w+)/,
    "const __Component__ = $1"
  );

  const virtualEntry = `
${componentCode}
import { mount } from "svelte";
mount(__Component__, { target: document.body, props: {} });
`;

  const built = await esbuild.build({
    stdin: { contents: virtualEntry, resolveDir: process.cwd(), loader: "js" },
    bundle: true,
    format: "iife",
    platform: "browser",
    target: "es2020",
    write: false,
    minify: true,
    legalComments: "none",
  });

  return built.outputFiles[0].text;
}

async function compileVue(source, filename) {
  const compiler = await import("@vue/compiler-sfc");
  const esbuild = (await import("esbuild")).default;

  const { descriptor, errors } = compiler.parse(source, { filename });
  if (errors.length > 0) {
    throw new Error(errors.map((e) => e.message).join("\n"));
  }
  if (!descriptor.template) {
    throw new Error("Vue SFC has no <template> block.");
  }

  const id = "preview";
  const hasScoped = descriptor.styles.some((s) => s.scoped);

  const scriptResult = compiler.compileScript(descriptor, { id, inlineTemplate: false });

  const templateResult = compiler.compileTemplate({
    source: descriptor.template.content,
    filename,
    id,
    scoped: hasScoped,
    compilerOptions: { bindingMetadata: scriptResult.bindings },
  });

  if (templateResult.errors.length > 0) {
    throw new Error(templateResult.errors.map(String).join("\n"));
  }

  let cssText = "";
  for (const style of descriptor.styles) {
    const styleResult = compiler.compileStyle({
      source: style.content,
      filename,
      id: `data-v-${id}`,
      scoped: style.scoped,
    });
    cssText += styleResult.code + "\n";
  }

  const virtualEntry = `
${scriptResult.content.replace("export default", "const __sfc__ =")}
${templateResult.code.replace(/export function render/, "function render")}
__sfc__.render = render;
${hasScoped ? `__sfc__.__scopeId = "data-v-${id}";` : ""}

${cssText ? `
const __style__ = document.createElement("style");
__style__.textContent = ${JSON.stringify(cssText)};
document.head.appendChild(__style__);
` : ""}

import { createApp } from "vue";
createApp(__sfc__).mount(document.body);
`;

  const built = await esbuild.build({
    stdin: { contents: virtualEntry, resolveDir: process.cwd(), loader: "js" },
    bundle: true,
    format: "iife",
    platform: "browser",
    target: "es2020",
    write: false,
    minify: true,
    legalComments: "none",
  });

  return built.outputFiles[0].text;
}

async function main() {
  const [, , framework, filePath] = process.argv;

  if (!framework || !filePath || !["svelte", "vue"].includes(framework)) {
    console.error(
      "\nUsage: node scripts/compile-preview.js <svelte|vue> <path-to-component-file>\n"
    );
    process.exit(1);
  }

  const resolvedPath = path.resolve(filePath);
  if (!fs.existsSync(resolvedPath)) {
    console.error(`ERROR: File not found: ${resolvedPath}`);
    process.exit(1);
  }

  const source = fs.readFileSync(resolvedPath, "utf8");
  const filename = path.basename(resolvedPath);

  try {
    const bundle =
      framework === "svelte"
        ? await compileSvelte(source, filename)
        : await compileVue(source, filename);
    process.stdout.write(bundle);
  } catch (e) {
    console.error(`\n❌  Compilation failed for ${filename}:\n`);
    console.error(e.message || String(e));
    process.exit(1);
  }
}

main();
