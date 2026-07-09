import type { CategoryInfo, SiteStats } from "@/types";
import { allComponents } from "@/data";
import { contributors } from "@/data/contributors";

export const SITE_NAME = "OpenUI Hub";
export const SITE_TAGLINE = "Build Beautiful Interfaces Together.";
export const SITE_DESCRIPTION =
  "A production-quality open-source UI components library. Browse, preview, copy, and contribute beautiful React components.";
export const SITE_URL = "https://openui-hub.vercel.app";
export const GITHUB_REPO = "https://github.com/Godswill-Nwafor/OpenUi";

const CATEGORY_DEFS: Omit<CategoryInfo, "count">[] = [
  { id: "buttons", label: "Buttons", description: "Interactive button components with various styles and states", icon: "MousePointerClick" },
  { id: "cards", label: "Cards", description: "Versatile card layouts for content display", icon: "LayoutGrid" },
  { id: "forms", label: "Forms", description: "Complete form components with validation", icon: "FormInput" },
  { id: "inputs", label: "Inputs", description: "Text inputs, selects, checkboxes and more", icon: "TextCursor" },
  { id: "navbars", label: "Navbars", description: "Navigation bar components for any layout", icon: "Menu" },
  { id: "footers", label: "Footers", description: "Page footer components with links and branding", icon: "PanelBottom" },
  { id: "heroes", label: "Hero Sections", description: "Stunning hero sections to make first impressions", icon: "Sparkles" },
  { id: "pricing", label: "Pricing", description: "Pricing tables and plan comparison components", icon: "CreditCard" },
  { id: "testimonials", label: "Testimonials", description: "Social proof and review display components", icon: "Quote" },
  { id: "dashboards", label: "Dashboards", description: "Analytics and admin dashboard layouts", icon: "LayoutDashboard" },
  { id: "tables", label: "Tables", description: "Data tables with sorting and filtering", icon: "Table" },
  { id: "charts", label: "Charts", description: "Data visualization components", icon: "BarChart3" },
  { id: "badges", label: "Badges", description: "Status and label badge components", icon: "Badge" },
  { id: "avatars", label: "Avatars", description: "User avatar and profile image components", icon: "UserCircle" },
  { id: "alerts", label: "Alerts", description: "Notification and alert message components", icon: "Bell" },
  { id: "modals", label: "Modals", description: "Dialog and modal overlay components", icon: "AppWindow" },
  { id: "drawers", label: "Drawers", description: "Slide-in drawer and panel components", icon: "PanelRight" },
  { id: "accordions", label: "Accordions", description: "Collapsible content accordion components", icon: "ChevronDown" },
  { id: "dropdowns", label: "Dropdowns", description: "Dropdown menu and select components", icon: "ChevronDown" },
  { id: "breadcrumbs", label: "Breadcrumbs", description: "Navigation breadcrumb trail components", icon: "ChevronRight" },
  { id: "pagination", label: "Pagination", description: "Page navigation and pagination components", icon: "MoreHorizontal" },
  { id: "loaders", label: "Loaders", description: "Loading spinners and progress indicators", icon: "Loader2" },
  { id: "skeletons", label: "Skeletons", description: "Content skeleton loading placeholders", icon: "Rows" },
  { id: "tooltips", label: "Tooltips", description: "Contextual tooltip and popover components", icon: "MessageSquare" },
  { id: "tabs", label: "Tabs", description: "Tabbed navigation and content panels", icon: "Layers" },
  { id: "carousels", label: "Carousels", description: "Image and content carousel/slider components", icon: "GalleryHorizontal" },
];

/** Category counts are derived from actual component data — never hand-maintained. */
export const CATEGORIES: CategoryInfo[] = CATEGORY_DEFS.map((def) => ({
  ...def,
  count: allComponents.filter((c) => c.metadata.category === def.id).length,
}));

export const SITE_STATS: SiteStats = {
  components: allComponents.length,
  contributors: contributors.length,
  categories: CATEGORIES.length,
  downloads: allComponents.reduce((sum, c) => sum + c.metadata.downloads, 0),
  // No live GitHub API call here (this module is imported by client components) —
  // see fetchRepoInfo() in src/lib/github.ts for a real star count fetched server-side.
  githubStars: 0,
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { href: "/categories", label: "Categories" },
  { href: "/docs", label: "Docs" },
  { href: "/contributors", label: "Contributors" },
  { href: "/contribute", label: "Contribute" },
  { href: "/about", label: "About" },
];

export const GITHUB_OWNER = "Godswill-Nwafor";
export const GITHUB_REPO_NAME = "OpenUi";
