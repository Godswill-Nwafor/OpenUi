"use client";

interface SandboxedScriptPreviewProps {
  /** Self-contained, pre-compiled JS bundle (zero external imports). */
  bundle: string;
  className?: string;
}

/**
 * Runs a pre-compiled component bundle (Svelte, Vue) in a sandboxed iframe.
 * `sandbox="allow-scripts"` deliberately omits `allow-same-origin` — the
 * iframe gets an opaque origin, so the bundle can execute but cannot read
 * the parent page's DOM, cookies, or storage, and cannot make same-origin
 * network requests back to this app. The bundle itself has zero external
 * imports (see scripts/compile-preview.js), so it needs no network access
 * to run correctly.
 */
export function SandboxedScriptPreview({ bundle, className = "" }: SandboxedScriptPreviewProps) {
  // Defensive: a `</script` substring anywhere in the bundle (e.g. inside a
  // minified string literal) would otherwise prematurely close this tag.
  const safeBundle = bundle.replace(/<\/script/gi, "<\\/script");

  const doc = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  html, body { margin: 0; padding: 16px; box-sizing: border-box; font-family: system-ui, -apple-system, sans-serif; }
  * { box-sizing: border-box; }
</style>
</head>
<body>
<script>${safeBundle}</script>
</body>
</html>`;

  return (
    <iframe
      title="Component preview"
      srcDoc={doc}
      sandbox="allow-scripts"
      onClick={(e) => e.stopPropagation()}
      className={`block w-full border-0 bg-white ${className}`}
    />
  );
}
