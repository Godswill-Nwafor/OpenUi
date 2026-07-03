export type Framework = "react" | "vue" | "angular" | "flutter";

export type ComponentStatus = "approved" | "pending" | "rejected";

export type Category =
  | "buttons"
  | "cards"
  | "forms"
  | "inputs"
  | "navbars"
  | "footers"
  | "heroes"
  | "pricing"
  | "testimonials"
  | "dashboards"
  | "tables"
  | "charts"
  | "badges"
  | "avatars"
  | "alerts"
  | "modals"
  | "drawers"
  | "accordions"
  | "dropdowns"
  | "breadcrumbs"
  | "pagination"
  | "loaders"
  | "skeletons"
  | "tooltips"
  | "tabs"
  | "carousels";

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
