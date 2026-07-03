import type { CategoryInfo, SiteStats } from "@/types";

export const SITE_NAME = "OpenUI Hub";
export const SITE_TAGLINE = "Build Beautiful Interfaces Together.";
export const SITE_DESCRIPTION =
  "A production-quality open-source UI components library. Browse, preview, copy, and contribute beautiful React components.";
export const SITE_URL = "https://openui-hub.vercel.app";
export const GITHUB_REPO = "https://github.com/openui-hub/openui-hub";

export const CATEGORIES: CategoryInfo[] = [
  { id: "buttons", label: "Buttons", description: "Interactive button components with various styles and states", icon: "MousePointerClick", count: 10 },
  { id: "cards", label: "Cards", description: "Versatile card layouts for content display", icon: "LayoutGrid", count: 10 },
  { id: "forms", label: "Forms", description: "Complete form components with validation", icon: "FormInput", count: 5 },
  { id: "inputs", label: "Inputs", description: "Text inputs, selects, checkboxes and more", icon: "TextCursor", count: 8 },
  { id: "navbars", label: "Navbars", description: "Navigation bar components for any layout", icon: "Menu", count: 5 },
  { id: "footers", label: "Footers", description: "Page footer components with links and branding", icon: "PanelBottom", count: 5 },
  { id: "heroes", label: "Hero Sections", description: "Stunning hero sections to make first impressions", icon: "Sparkles", count: 5 },
  { id: "pricing", label: "Pricing", description: "Pricing tables and plan comparison components", icon: "CreditCard", count: 5 },
  { id: "testimonials", label: "Testimonials", description: "Social proof and review display components", icon: "Quote", count: 4 },
  { id: "dashboards", label: "Dashboards", description: "Analytics and admin dashboard layouts", icon: "LayoutDashboard", count: 5 },
  { id: "tables", label: "Tables", description: "Data tables with sorting and filtering", icon: "Table", count: 3 },
  { id: "charts", label: "Charts", description: "Data visualization components", icon: "BarChart3", count: 3 },
  { id: "badges", label: "Badges", description: "Status and label badge components", icon: "Badge", count: 4 },
  { id: "avatars", label: "Avatars", description: "User avatar and profile image components", icon: "UserCircle", count: 3 },
  { id: "alerts", label: "Alerts", description: "Notification and alert message components", icon: "Bell", count: 5 },
  { id: "modals", label: "Modals", description: "Dialog and modal overlay components", icon: "AppWindow", count: 5 },
  { id: "drawers", label: "Drawers", description: "Slide-in drawer and panel components", icon: "PanelRight", count: 3 },
  { id: "accordions", label: "Accordions", description: "Collapsible content accordion components", icon: "ChevronDown", count: 3 },
  { id: "dropdowns", label: "Dropdowns", description: "Dropdown menu and select components", icon: "ChevronDown", count: 3 },
  { id: "breadcrumbs", label: "Breadcrumbs", description: "Navigation breadcrumb trail components", icon: "ChevronRight", count: 2 },
  { id: "pagination", label: "Pagination", description: "Page navigation and pagination components", icon: "MoreHorizontal", count: 3 },
  { id: "loaders", label: "Loaders", description: "Loading spinners and progress indicators", icon: "Loader2", count: 4 },
  { id: "skeletons", label: "Skeletons", description: "Content skeleton loading placeholders", icon: "Rows", count: 3 },
  { id: "tooltips", label: "Tooltips", description: "Contextual tooltip and popover components", icon: "MessageSquare", count: 2 },
  { id: "tabs", label: "Tabs", description: "Tabbed navigation and content panels", icon: "Layers", count: 3 },
  { id: "carousels", label: "Carousels", description: "Image and content carousel/slider components", icon: "GalleryHorizontal", count: 3 },
];

export const SITE_STATS: SiteStats = {
  components: 60,
  contributors: 10,
  categories: 26,
  downloads: 0,
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

export const GITHUB_OWNER = "openui-hub";
export const GITHUB_REPO_NAME = "openui-hub";
