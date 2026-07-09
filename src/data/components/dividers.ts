import type { ComponentDoc } from "@/types";

export const dividerComponents: ComponentDoc[] = [
  {
    metadata: {
      id: "gradient-divider",
      name: "Gradient Divider",
      description: "An animated gradient divider line for visually separating page sections.",
      author: { name: "Godswill Nwafor", github: "Godswill-Nwafor" },
      framework: "HTML/CSS",
      version: "1.0.0",
      category: "dividers",
      tags: ["divider", "separator", "gradient", "animated", "hr"],
      createdAt: "2026-07-09",
      updatedAt: "2026-07-09",
      status: "approved",
      downloads: 0,
      likes: 0,
    },
    code: `<link rel="stylesheet" href="GradientDivider.css" />

<div class="gradient-divider" role="separator" aria-orientation="horizontal"></div>

<style>
.gradient-divider {
  height: 4px;
  width: 100%;
  border-radius: 9999px;
  background: linear-gradient(90deg, #6366f1, #ec4899, #f59e0b);
  background-size: 200% 100%;
  animation: gradient-divider-move 4s ease infinite;
}

@keyframes gradient-divider-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>`,
    demoCode: `<div style="padding: 24px;">
  <p style="font-family: system-ui, sans-serif; color: #94a3b8; margin: 0 0 16px;">Section one</p>
  <div class="gradient-divider" role="separator" aria-orientation="horizontal"></div>
  <p style="font-family: system-ui, sans-serif; color: #94a3b8; margin: 16px 0 0;">Section two</p>
</div>

<style>
.gradient-divider {
  height: 4px;
  width: 100%;
  border-radius: 9999px;
  background: linear-gradient(90deg, #6366f1, #ec4899, #f59e0b);
  background-size: 200% 100%;
  animation: gradient-divider-move 4s ease infinite;
}

@keyframes gradient-divider-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>`,
    documentation: "A slim animated gradient line for visually separating page sections — a decorative alternative to a plain <hr>. Pure HTML + CSS, no JavaScript required.",
    props: [],
    installation: `# No installation needed — copy GradientDivider.html and GradientDivider.css into your project`,
    usage: `<link rel="stylesheet" href="GradientDivider.css" />

<div class="gradient-divider" role="separator" aria-orientation="horizontal"></div>`,
  },
];
