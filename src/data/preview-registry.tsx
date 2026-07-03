"use client";
import type { ReactNode } from "react";
import { PreviewWrapper } from "@/components/ui/PreviewWrapper";

// Buttons
import {
  PrimaryButtonPreview, OutlineButtonPreview, GhostButtonPreview,
  GradientButtonPreview, IconButtonPreview, DangerButtonPreview,
  LoadingButtonPreview, PillButtonPreview, SocialButtonPreview, SplitButtonPreview,
} from "@/components/library/buttons";

// Cards
import {
  GlassCardPreview, ProfileCardPreview, PricingCardPreview, StatCardPreview,
  FeatureCardPreview, BlogCardPreview, NotificationCardPreview, TestimonialCardPreview,
  ProductCardPreview, TeamMemberCardPreview,
} from "@/components/library/cards";

// Forms
import {
  LoginFormPreview, ContactFormPreview, SignupFormPreview,
  SearchFormPreview, SettingsFormPreview,
} from "@/components/library/forms";

// Alerts
import {
  InlineAlertPreview, ToastAlertPreview, BannerAlertPreview,
  ConfirmAlertPreview, ProgressAlertPreview,
} from "@/components/library/alerts";

// Modals
import {
  BaseModalPreview, ImageModalPreview, CommandPalettePreview,
  DrawerModalPreview, FullscreenModalPreview,
} from "@/components/library/modals";

// Navbars
import {
  GlassNavbarPreview, SidebarNavPreview, TopNavbarPreview,
  BreadcrumbNavPreview, TabsNavPreview,
} from "@/components/library/navbars";

// Footers
import {
  MinimalFooterPreview, MegaFooterPreview, CTAFooterPreview,
  DarkFooterPreview, AppFooterPreview,
} from "@/components/library/footers";

// Heroes
import {
  GradientHeroPreview, SplitHeroPreview, MinimalHeroPreview,
  SaaSHeroPreview, VideoHeroPreview,
} from "@/components/library/heroes";

// Pricing
import {
  ThreeTierPricingPreview, ComparisonTablePreview, UsagePricingPreview,
  UpgradeBannerPreview, AddonPricingPreview,
} from "@/components/library/pricing";

// Dashboards
import {
  AnalyticsDashboardPreview, AdminPanelPreview, KanbanBoardPreview,
  DataTablePreview, UserProfilePreview,
} from "@/components/library/dashboards";

export type PreviewRenderer = () => ReactNode;

const registry: Record<string, PreviewRenderer> = {
  // Buttons — scale 0.75
  "primary-button": () => <PreviewWrapper scale={0.75}><PrimaryButtonPreview /></PreviewWrapper>,
  "outline-button": () => <PreviewWrapper scale={0.75}><OutlineButtonPreview /></PreviewWrapper>,
  "ghost-button": () => <PreviewWrapper scale={0.75}><GhostButtonPreview /></PreviewWrapper>,
  "gradient-button": () => <PreviewWrapper scale={0.75}><GradientButtonPreview /></PreviewWrapper>,
  "icon-button": () => <PreviewWrapper scale={0.75}><IconButtonPreview /></PreviewWrapper>,
  "danger-button": () => <PreviewWrapper scale={0.75}><DangerButtonPreview /></PreviewWrapper>,
  "loading-button": () => <PreviewWrapper scale={0.75}><LoadingButtonPreview /></PreviewWrapper>,
  "pill-button": () => <PreviewWrapper scale={0.75}><PillButtonPreview /></PreviewWrapper>,
  "social-button": () => <PreviewWrapper scale={0.75}><SocialButtonPreview /></PreviewWrapper>,
  "split-button": () => <PreviewWrapper scale={0.75}><SplitButtonPreview /></PreviewWrapper>,

  // Cards — scale 0.45
  "glass-card": () => <PreviewWrapper scale={0.45}><GlassCardPreview /></PreviewWrapper>,
  "profile-card": () => <PreviewWrapper scale={0.45}><ProfileCardPreview /></PreviewWrapper>,
  "pricing-card": () => <PreviewWrapper scale={0.45}><PricingCardPreview /></PreviewWrapper>,
  "stat-card": () => <PreviewWrapper scale={0.45}><StatCardPreview /></PreviewWrapper>,
  "feature-card": () => <PreviewWrapper scale={0.45}><FeatureCardPreview /></PreviewWrapper>,
  "blog-card": () => <PreviewWrapper scale={0.45}><BlogCardPreview /></PreviewWrapper>,
  "notification-card": () => <PreviewWrapper scale={0.45}><NotificationCardPreview /></PreviewWrapper>,
  "testimonial-card": () => <PreviewWrapper scale={0.45}><TestimonialCardPreview /></PreviewWrapper>,
  "product-card": () => <PreviewWrapper scale={0.45}><ProductCardPreview /></PreviewWrapper>,
  "team-member-card": () => <PreviewWrapper scale={0.45}><TeamMemberCardPreview /></PreviewWrapper>,

  // Forms — scale 0.5
  "login-form": () => <PreviewWrapper scale={0.5}><LoginFormPreview /></PreviewWrapper>,
  "contact-form": () => <PreviewWrapper scale={0.5}><ContactFormPreview /></PreviewWrapper>,
  "signup-form": () => <PreviewWrapper scale={0.5}><SignupFormPreview /></PreviewWrapper>,
  "search-form": () => <PreviewWrapper scale={0.5}><SearchFormPreview /></PreviewWrapper>,
  "settings-form": () => <PreviewWrapper scale={0.5}><SettingsFormPreview /></PreviewWrapper>,

  // Alerts — scale 0.75
  "inline-alert": () => <PreviewWrapper scale={0.75}><InlineAlertPreview /></PreviewWrapper>,
  "toast-alert": () => <PreviewWrapper scale={0.75}><ToastAlertPreview /></PreviewWrapper>,
  "banner-alert": () => <PreviewWrapper scale={0.75}><BannerAlertPreview /></PreviewWrapper>,
  "confirm-alert": () => <PreviewWrapper scale={0.75}><ConfirmAlertPreview /></PreviewWrapper>,
  "progress-alert": () => <PreviewWrapper scale={0.75}><ProgressAlertPreview /></PreviewWrapper>,

  // Modals — scale 0.65
  "base-modal": () => <PreviewWrapper scale={0.65}><BaseModalPreview /></PreviewWrapper>,
  "image-modal": () => <PreviewWrapper scale={0.65}><ImageModalPreview /></PreviewWrapper>,
  "command-palette": () => <PreviewWrapper scale={0.65}><CommandPalettePreview /></PreviewWrapper>,
  "drawer-modal": () => <PreviewWrapper scale={0.65}><DrawerModalPreview /></PreviewWrapper>,
  "fullscreen-modal": () => <PreviewWrapper scale={0.65}><FullscreenModalPreview /></PreviewWrapper>,

  // Navbars — scale 0.7
  "glass-navbar": () => <PreviewWrapper scale={0.7}><GlassNavbarPreview /></PreviewWrapper>,
  "sidebar-nav": () => <PreviewWrapper scale={0.7}><SidebarNavPreview /></PreviewWrapper>,
  "top-navbar": () => <PreviewWrapper scale={0.7}><TopNavbarPreview /></PreviewWrapper>,
  "breadcrumb-nav": () => <PreviewWrapper scale={0.7}><BreadcrumbNavPreview /></PreviewWrapper>,
  "tabs-nav": () => <PreviewWrapper scale={0.7}><TabsNavPreview /></PreviewWrapper>,

  // Footers — scale 0.5
  "minimal-footer": () => <PreviewWrapper scale={0.5}><MinimalFooterPreview /></PreviewWrapper>,
  "mega-footer": () => <PreviewWrapper scale={0.5}><MegaFooterPreview /></PreviewWrapper>,
  "cta-footer": () => <PreviewWrapper scale={0.5}><CTAFooterPreview /></PreviewWrapper>,
  "dark-footer": () => <PreviewWrapper scale={0.5}><DarkFooterPreview /></PreviewWrapper>,
  "app-footer": () => <PreviewWrapper scale={0.5}><AppFooterPreview /></PreviewWrapper>,

  // Heroes — scale 0.28
  "gradient-hero": () => <PreviewWrapper scale={0.28}><GradientHeroPreview /></PreviewWrapper>,
  "split-hero": () => <PreviewWrapper scale={0.28}><SplitHeroPreview /></PreviewWrapper>,
  "minimal-hero": () => <PreviewWrapper scale={0.28}><MinimalHeroPreview /></PreviewWrapper>,
  "saas-hero": () => <PreviewWrapper scale={0.28}><SaaSHeroPreview /></PreviewWrapper>,
  "video-hero": () => <PreviewWrapper scale={0.28}><VideoHeroPreview /></PreviewWrapper>,

  // Pricing — scale 0.3
  "three-tier-pricing": () => <PreviewWrapper scale={0.3}><ThreeTierPricingPreview /></PreviewWrapper>,
  "comparison-table": () => <PreviewWrapper scale={0.3}><ComparisonTablePreview /></PreviewWrapper>,
  "usage-pricing": () => <PreviewWrapper scale={0.3}><UsagePricingPreview /></PreviewWrapper>,
  "upgrade-banner": () => <PreviewWrapper scale={0.3}><UpgradeBannerPreview /></PreviewWrapper>,
  "addon-pricing": () => <PreviewWrapper scale={0.3}><AddonPricingPreview /></PreviewWrapper>,

  // Dashboards — scale 0.22
  "analytics-dashboard": () => <PreviewWrapper scale={0.22}><AnalyticsDashboardPreview /></PreviewWrapper>,
  "admin-panel": () => <PreviewWrapper scale={0.22}><AdminPanelPreview /></PreviewWrapper>,
  "kanban-board": () => <PreviewWrapper scale={0.22}><KanbanBoardPreview /></PreviewWrapper>,
  "data-table": () => <PreviewWrapper scale={0.22}><DataTablePreview /></PreviewWrapper>,
  "user-profile-dashboard": () => <PreviewWrapper scale={0.22}><UserProfilePreview /></PreviewWrapper>,
};

export function getPreview(id: string): ReactNode | null {
  const renderer = registry[id];
  return renderer ? renderer() : null;
}
