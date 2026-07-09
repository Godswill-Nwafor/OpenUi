import type { Contributor } from "@/types";

export const contributors: Contributor[] = [
  {
    username: "Godswill-Nwafor",
    displayName: "Godswill Nwafor",
    role: "project-owner",
    bio: "Project founder and core maintainer of OpenUI Hub.",
    componentIds: [
      // Dashboards
      "admin-panel", "kanban-board", "user-profile-dashboard",
      // Footers
      "minimal-footer", "mega-footer", "cta-footer", "dark-footer", "app-footer",
      // Heroes
      "gradient-hero", "minimal-hero", "saas-hero",
      // Pricing
      "comparison-table", "usage-pricing", "upgrade-banner", "addon-pricing",
      // Alerts
      "inline-alert", "toast-alert", "banner-alert", "confirm-alert", "progress-alert",
      // Buttons
      "icon-button", "danger-button", "pill-button", "social-button", "split-button",
      // Cards
      "feature-card", "pricing-card", "team-member-card", "testimonial-card", "notification-card",
      // Modals
      "image-modal", "command-palette", "drawer-modal", "fullscreen-modal",
      // Forms
      "search-form", "settings-form",
      // Navbars
      "tabs-nav", "top-navbar",
      // Badges
      "status-badge",
      // Dividers
      "gradient-divider",
      // Buttons (Svelte)
      "like-button",
      // Inputs (Vue)
      "toggle-switch",
    ],
    contributionCount: 16,
    joinedAt: "2026-06-25",
  },
  {
    username: "oderhiexcel",
    displayName: "oderhiexcel",
    role: "contributor",
    componentIds: ["primary-button", "gradient-button", "ghost-button"],
    contributionCount: 3,
    joinedAt: "2026-06-26",
  },
  {
    username: "ItzEddieee",
    displayName: "ItzEddieee",
    role: "contributor",
    componentIds: ["split-hero", "video-hero"],
    contributionCount: 2,
    joinedAt: "2026-06-27",
  },
  {
    username: "22010306013",
    displayName: "Favour",
    role: "contributor",
    componentIds: ["three-tier-pricing", "signup-form"],
    contributionCount: 2,
    joinedAt: "2026-06-28",
  },
  {
    username: "Jimmy2477",
    displayName: "Jimmy2477",
    role: "contributor",
    componentIds: ["outline-button", "loading-button"],
    contributionCount: 2,
    joinedAt: "2026-06-29",
  },
  {
    username: "darien-swe",
    displayName: "darien-swe",
    role: "contributor",
    componentIds: ["product-card", "glass-card"],
    contributionCount: 2,
    joinedAt: "2026-06-30",
  },
  {
    username: "Temi-olu",
    displayName: "Temi-olu",
    role: "contributor",
    componentIds: ["profile-card", "blog-card"],
    contributionCount: 2,
    joinedAt: "2026-07-01",
  },
  {
    username: "jordan1x2x3x",
    displayName: "jordan1x2x3x",
    role: "contributor",
    componentIds: ["glass-navbar", "sidebar-nav", "breadcrumb-nav"],
    contributionCount: 3,
    joinedAt: "2026-07-02",
  },
  {
    username: "Durugo-Saviour",
    displayName: "Durugo Saviour",
    role: "contributor",
    componentIds: ["login-form", "contact-form", "base-modal"],
    contributionCount: 3,
    joinedAt: "2026-07-03",
  },
  {
    username: "OgunwoleEbunoluwa",
    displayName: "Ogunwole Ebunoluwa",
    role: "contributor",
    componentIds: ["analytics-dashboard", "stat-card", "data-table"],
    contributionCount: 3,
    joinedAt: "2026-07-04",
  },
];

/** Look up a contributor by GitHub username (case-insensitive). */
export function getContributorByUsername(username: string): Contributor | undefined {
  return contributors.find(
    (c) => c.username.toLowerCase() === username.toLowerCase()
  );
}

/** Look up the contributor who authored a given component. */
export function getContributorByComponentId(componentId: string): Contributor | undefined {
  return contributors.find((c) => c.componentIds.includes(componentId));
}

/** Return all components for a given contributor username. */
export function getContributorComponents(username: string): string[] {
  return getContributorByUsername(username)?.componentIds ?? [];
}
