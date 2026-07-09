"use client";

interface HtmlPreviewProps {
  /** Raw HTML markup — may include an inline <style> block. */
  html: string;
  className?: string;
}

/**
 * Renders raw HTML/CSS component code in a sandboxed iframe — a real, working
 * live preview for non-React submissions. No `allow-scripts` on the sandbox:
 * plain HTML/CSS components are markup + styles only, so this stays safe
 * against untrusted contributor code by construction rather than by filtering.
 */
export function HtmlPreview({ html, className = "" }: HtmlPreviewProps) {
  const doc = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  html, body { margin: 0; padding: 16px; box-sizing: border-box; font-family: system-ui, -apple-system, sans-serif; }
  * { box-sizing: border-box; }
</style>
</head>
<body>${html}</body>
</html>`;

  return (
    <iframe
      title="Component preview"
      srcDoc={doc}
      sandbox=""
      onClick={(e) => e.stopPropagation()}
      className={`block w-full border-0 bg-white ${className}`}
    />
  );
}
