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

const dark = "bg-gray-950";

const registry: Record<string, PreviewRenderer> = {
  // Buttons — light bg (buttons don't set their own background)
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

  // Cards — dark (glass/gradient card implementations are dark-themed)
  "glass-card": () => <PreviewWrapper scale={0.45} bg={dark}><GlassCardPreview /></PreviewWrapper>,
  "profile-card": () => <PreviewWrapper scale={0.45} bg={dark}><ProfileCardPreview /></PreviewWrapper>,
  "pricing-card": () => <PreviewWrapper scale={0.45} bg={dark}><PricingCardPreview /></PreviewWrapper>,
  "stat-card": () => <PreviewWrapper scale={0.45} bg={dark}><StatCardPreview /></PreviewWrapper>,
  "feature-card": () => <PreviewWrapper scale={0.45} bg={dark}><FeatureCardPreview /></PreviewWrapper>,
  "blog-card": () => <PreviewWrapper scale={0.45} bg={dark}><BlogCardPreview /></PreviewWrapper>,
  "notification-card": () => <PreviewWrapper scale={0.45} bg={dark}><NotificationCardPreview /></PreviewWrapper>,
  "testimonial-card": () => <PreviewWrapper scale={0.45} bg={dark}><TestimonialCardPreview /></PreviewWrapper>,
  "product-card": () => <PreviewWrapper scale={0.45} bg={dark}><ProductCardPreview /></PreviewWrapper>,
  "team-member-card": () => <PreviewWrapper scale={0.45} bg={dark}><TeamMemberCardPreview /></PreviewWrapper>,

  // Forms — dark (form implementations use dark theme)
  "login-form": () => <PreviewWrapper scale={0.5} bg={dark}><LoginFormPreview /></PreviewWrapper>,
  "contact-form": () => <PreviewWrapper scale={0.5} bg={dark}><ContactFormPreview /></PreviewWrapper>,
  "signup-form": () => <PreviewWrapper scale={0.5} bg={dark}><SignupFormPreview /></PreviewWrapper>,
  "search-form": () => <PreviewWrapper scale={0.5} bg={dark}><SearchFormPreview /></PreviewWrapper>,
  "settings-form": () => <PreviewWrapper scale={0.5} bg={dark}><SettingsFormPreview /></PreviewWrapper>,

  // Alerts — light bg (alert colors are semi-transparent and readable on light)
  "inline-alert": () => <PreviewWrapper scale={0.75}><InlineAlertPreview /></PreviewWrapper>,
  "toast-alert": () => <PreviewWrapper scale={0.75}><ToastAlertPreview /></PreviewWrapper>,
  "banner-alert": () => <PreviewWrapper scale={0.75}><BannerAlertPreview /></PreviewWrapper>,
  "confirm-alert": () => <PreviewWrapper scale={0.75}><ConfirmAlertPreview /></PreviewWrapper>,
  "progress-alert": () => <PreviewWrapper scale={0.75}><ProgressAlertPreview /></PreviewWrapper>,

  // Modals — dark (modal dialogs have dark chrome and overlays)
  "base-modal": () => <PreviewWrapper scale={0.65} bg={dark}><BaseModalPreview /></PreviewWrapper>,
  "image-modal": () => <PreviewWrapper scale={0.65} bg={dark}><ImageModalPreview /></PreviewWrapper>,
  "command-palette": () => <PreviewWrapper scale={0.65} bg={dark}><CommandPalettePreview /></PreviewWrapper>,
  "drawer-modal": () => <PreviewWrapper scale={0.65} bg={dark}><DrawerModalPreview /></PreviewWrapper>,
  "fullscreen-modal": () => <PreviewWrapper scale={0.65} bg={dark}><FullscreenModalPreview /></PreviewWrapper>,

  // Navbars — dark (glass and sidebar navbars use dark chrome)
  "glass-navbar": () => <PreviewWrapper scale={0.7} bg={dark}><GlassNavbarPreview /></PreviewWrapper>,
  "sidebar-nav": () => <PreviewWrapper scale={0.7} bg={dark}><SidebarNavPreview /></PreviewWrapper>,
  "top-navbar": () => <PreviewWrapper scale={0.7} bg={dark}><TopNavbarPreview /></PreviewWrapper>,
  "breadcrumb-nav": () => <PreviewWrapper scale={0.7} bg={dark}><BreadcrumbNavPreview /></PreviewWrapper>,
  "tabs-nav": () => <PreviewWrapper scale={0.7} bg={dark}><TabsNavPreview /></PreviewWrapper>,

  // Footers — dark (footers are dark-themed)
  "minimal-footer": () => <PreviewWrapper scale={0.5} bg={dark}><MinimalFooterPreview /></PreviewWrapper>,
  "mega-footer": () => <PreviewWrapper scale={0.5} bg={dark}><MegaFooterPreview /></PreviewWrapper>,
  "cta-footer": () => <PreviewWrapper scale={0.5} bg={dark}><CTAFooterPreview /></PreviewWrapper>,
  "dark-footer": () => <PreviewWrapper scale={0.5} bg="bg-black"><DarkFooterPreview /></PreviewWrapper>,
  "app-footer": () => <PreviewWrapper scale={0.5} bg={dark}><AppFooterPreview /></PreviewWrapper>,

  // Heroes — dark (heroes have full dark backgrounds)
  "gradient-hero": () => <PreviewWrapper scale={0.28} bg={dark}><GradientHeroPreview /></PreviewWrapper>,
  "split-hero": () => <PreviewWrapper scale={0.28} bg={dark}><SplitHeroPreview /></PreviewWrapper>,
  "minimal-hero": () => <PreviewWrapper scale={0.28} bg={dark}><MinimalHeroPreview /></PreviewWrapper>,
  "saas-hero": () => <PreviewWrapper scale={0.28} bg={dark}><SaaSHeroPreview /></PreviewWrapper>,
  "video-hero": () => <PreviewWrapper scale={0.28} bg={dark}><VideoHeroPreview /></PreviewWrapper>,

  // Pricing — dark (pricing sections use dark backgrounds)
  "three-tier-pricing": () => <PreviewWrapper scale={0.3} bg={dark}><ThreeTierPricingPreview /></PreviewWrapper>,
  "comparison-table": () => <PreviewWrapper scale={0.3} bg={dark}><ComparisonTablePreview /></PreviewWrapper>,
  "usage-pricing": () => <PreviewWrapper scale={0.3} bg={dark}><UsagePricingPreview /></PreviewWrapper>,
  "upgrade-banner": () => <PreviewWrapper scale={0.3} bg={dark}><UpgradeBannerPreview /></PreviewWrapper>,
  "addon-pricing": () => <PreviewWrapper scale={0.3} bg={dark}><AddonPricingPreview /></PreviewWrapper>,

  // Dashboards — dark (dashboard layouts use dark theme)
  "analytics-dashboard": () => <PreviewWrapper scale={0.22} bg={dark}><AnalyticsDashboardPreview /></PreviewWrapper>,
  "admin-panel": () => <PreviewWrapper scale={0.22} bg={dark}><AdminPanelPreview /></PreviewWrapper>,
  "kanban-board": () => <PreviewWrapper scale={0.22} bg={dark}><KanbanBoardPreview /></PreviewWrapper>,
  "data-table": () => <PreviewWrapper scale={0.22} bg={dark}><DataTablePreview /></PreviewWrapper>,
  "user-profile-dashboard": () => <PreviewWrapper scale={0.22} bg={dark}><UserProfilePreview /></PreviewWrapper>,
};

export function getPreview(id: string): ReactNode | null {
  const renderer = registry[id];
  return renderer ? renderer() : null;
}
