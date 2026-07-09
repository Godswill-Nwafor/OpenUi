/**
 * Any language/framework is accepted (React, Vue, Angular, Svelte, HTML/CSS,
 * vanilla JS, etc). It's a free-form string rather than a closed union so new
 * ones don't require a code change. "React" and "HTML/CSS" (case-insensitive)
 * get a real live preview in the gallery — see src/data/preview-registry.tsx.
 * COMMON_FRAMEWORKS below is just a suggestion list for UI hints, not a limit.
 */
export type Framework = string;

export const COMMON_FRAMEWORKS = [
  "React",
  "HTML/CSS",
  "Vue",
  "Angular",
  "Svelte",
  "Vanilla JS",
] as const;

export type ComponentStatus = "approved" | "pending" | "rejected";

/**
 * Category is a free-form slug (lowercase-kebab-case), not a closed union —
 * contributors can introduce new categories through component submissions.
 * COMMON_CATEGORIES below seeds the known set with curated labels/icons; any
 * category not in that list still works, it just gets an auto-generated
 * label/icon (see CATEGORIES in src/lib/constants.ts).
 */
export type Category = string;

export const COMMON_CATEGORIES = [
  "buttons",
  "cards",
  "forms",
  "inputs",
  "navbars",
  "footers",
  "heroes",
  "pricing",
  "testimonials",
  "dashboards",
  "tables",
  "charts",
  "badges",
  "avatars",
  "alerts",
  "modals",
  "drawers",
  "accordions",
  "dropdowns",
  "breadcrumbs",
  "pagination",
  "loaders",
  "skeletons",
  "tooltips",
  "tabs",
  "carousels",
] as const;

export interface ComponentAuthor {
  name: string;
  github: string;
  avatar?: string;
}

export interface ComponentMetadata {
  id: string;
  name: string;
  description: string;
  author: ComponentAuthor;
  framework: Framework;
  version: string;
  category: Category;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  status: ComponentStatus;
  downloads: number;
  likes: number;
  previewImage?: string;
  dependencies?: string[];
}

export interface ComponentDoc {
  metadata: ComponentMetadata;
  code: string;
  demoCode: string;
  documentation: string;
  props?: PropDefinition[];
  usage?: string;
  installation?: string;
  relatedComponents?: string[];
  dependencies?: string[];
}

export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  required: boolean;
  description: string;
}

export interface CategoryInfo {
  id: Category;
  label: string;
  description: string;
  icon: string;
  count: number;
}

export interface SiteStats {
  components: number;
  contributors: number;
  categories: number;
  downloads: number;
  githubStars: number;
}

export interface SearchFilters {
  query: string;
  category?: Category;
  framework?: Framework;
  sortBy: "newest" | "popular" | "updated";
}

export type ContributorRole = "project-owner" | "maintainer" | "contributor";

export interface Contributor {
  username: string;
  displayName: string;
  role: ContributorRole;
  componentIds: string[];
  contributionCount: number;
  joinedAt: string;
  bio?: string;
}
