"use client";
import type { ReactNode } from "react";
import { PreviewWrapper } from "@/components/ui/PreviewWrapper";

import {
  PrimaryButtonPreview, OutlineButtonPreview, GhostButtonPreview,
  GradientButtonPreview, IconButtonPreview, DangerButtonPreview,
  LoadingButtonPreview, PillButtonPreview, SocialButtonPreview, SplitButtonPreview,
} from "@/components/library/buttons";
import {
  GlassCardPreview, ProfileCardPreview, PricingCardPreview, StatCardPreview,
  FeatureCardPreview, BlogCardPreview, NotificationCardPreview, TestimonialCardPreview,
  ProductCardPreview, TeamMemberCardPreview,
} from "@/components/library/cards";
import {
  LoginFormPreview, ContactFormPreview, SignupFormPreview,
  SearchFormPreview, SettingsFormPreview,
} from "@/components/library/forms";
import {
  InlineAlertPreview, ToastAlertPreview, BannerAlertPreview,
  ConfirmAlertPreview, ProgressAlertPreview,
} from "@/components/library/alerts";
import {
  BaseModalPreview, ImageModalPreview, CommandPalettePreview,
  DrawerModalPreview, FullscreenModalPreview,
} from "@/components/library/modals";
import {
  GlassNavbarPreview, SidebarNavPreview, TopNavbarPreview,
  BreadcrumbNavPreview, TabsNavPreview,
} from "@/components/library/navbars";
import {
  MinimalFooterPreview, MegaFooterPreview, CTAFooterPreview,
  DarkFooterPreview, AppFooterPreview,
} from "@/components/library/footers";
import {
  GradientHeroPreview, SplitHeroPreview, MinimalHeroPreview,
  SaaSHeroPreview, VideoHeroPreview,
} from "@/components/library/heroes";
import {
  ThreeTierPricingPreview, ComparisonTablePreview, UsagePricingPreview,
  UpgradeBannerPreview, AddonPricingPreview,
} from "@/components/library/pricing";
import {
  AnalyticsDashboardPreview, AdminPanelPreview, KanbanBoardPreview,
  DataTablePreview, UserProfilePreview,
} from "@/components/library/dashboards";

type Config = { render: () => ReactNode; scale: number; bg: string };

const light = "bg-background";
const dark = "bg-background";

const configs: Record<string, Config> = {
  // Buttons — light bg
  "primary-button":  { render: () => <PrimaryButtonPreview />,  scale: 0.75, bg: light },
  "outline-button":  { render: () => <OutlineButtonPreview />,  scale: 0.75, bg: light },
  "ghost-button":    { render: () => <GhostButtonPreview />,    scale: 0.75, bg: light },
  "gradient-button": { render: () => <GradientButtonPreview />, scale: 0.75, bg: light },
  "icon-button":     { render: () => <IconButtonPreview />,     scale: 0.75, bg: light },
  "danger-button":   { render: () => <DangerButtonPreview />,   scale: 0.75, bg: light },
  "loading-button":  { render: () => <LoadingButtonPreview />,  scale: 0.75, bg: light },
  "pill-button":     { render: () => <PillButtonPreview />,     scale: 0.75, bg: light },
  "social-button":   { render: () => <SocialButtonPreview />,   scale: 0.75, bg: light },
  "split-button":    { render: () => <SplitButtonPreview />,    scale: 0.75, bg: light },

  // Cards — dark
  "glass-card":        { render: () => <GlassCardPreview />,        scale: 0.45, bg: dark },
  "profile-card":      { render: () => <ProfileCardPreview />,      scale: 0.45, bg: dark },
  "pricing-card":      { render: () => <PricingCardPreview />,      scale: 0.45, bg: dark },
  "stat-card":         { render: () => <StatCardPreview />,         scale: 0.45, bg: dark },
  "feature-card":      { render: () => <FeatureCardPreview />,      scale: 0.45, bg: dark },
  "blog-card":         { render: () => <BlogCardPreview />,         scale: 0.45, bg: dark },
  "notification-card": { render: () => <NotificationCardPreview />, scale: 0.45, bg: dark },
  "testimonial-card":  { render: () => <TestimonialCardPreview />,  scale: 0.45, bg: dark },
  "product-card":      { render: () => <ProductCardPreview />,      scale: 0.45, bg: dark },
  "team-member-card":  { render: () => <TeamMemberCardPreview />,   scale: 0.45, bg: dark },

  // Forms — dark
  "login-form":    { render: () => <LoginFormPreview />,    scale: 0.5, bg: dark },
  "contact-form":  { render: () => <ContactFormPreview />,  scale: 0.5, bg: dark },
  "signup-form":   { render: () => <SignupFormPreview />,   scale: 0.5, bg: dark },
  "search-form":   { render: () => <SearchFormPreview />,   scale: 0.5, bg: dark },
  "settings-form": { render: () => <SettingsFormPreview />, scale: 0.5, bg: dark },

  // Alerts — light bg
  "inline-alert":   { render: () => <InlineAlertPreview />,   scale: 0.75, bg: light },
  "toast-alert":    { render: () => <ToastAlertPreview />,    scale: 0.75, bg: light },
  "banner-alert":   { render: () => <BannerAlertPreview />,   scale: 0.75, bg: light },
  "confirm-alert":  { render: () => <ConfirmAlertPreview />,  scale: 0.75, bg: light },
  "progress-alert": { render: () => <ProgressAlertPreview />, scale: 0.75, bg: light },

  // Modals — dark
  "base-modal":       { render: () => <BaseModalPreview />,       scale: 0.65, bg: dark },
  "image-modal":      { render: () => <ImageModalPreview />,      scale: 0.65, bg: dark },
  "command-palette":  { render: () => <CommandPalettePreview />,  scale: 0.65, bg: dark },
  "drawer-modal":     { render: () => <DrawerModalPreview />,     scale: 0.65, bg: dark },
  "fullscreen-modal": { render: () => <FullscreenModalPreview />, scale: 0.65, bg: dark },

  // Navbars — dark
  "glass-navbar":  { render: () => <GlassNavbarPreview />,  scale: 0.7, bg: dark },
  "sidebar-nav":   { render: () => <SidebarNavPreview />,   scale: 0.7, bg: dark },
  "top-navbar":    { render: () => <TopNavbarPreview />,    scale: 0.7, bg: dark },
  "breadcrumb-nav":{ render: () => <BreadcrumbNavPreview />,scale: 0.7, bg: dark },
  "tabs-nav":      { render: () => <TabsNavPreview />,      scale: 0.7, bg: dark },

  // Footers — dark
  "minimal-footer":  { render: () => <MinimalFooterPreview />, scale: 0.5, bg: dark },
  "mega-footer":     { render: () => <MegaFooterPreview />,    scale: 0.5, bg: dark },
  "cta-footer":      { render: () => <CTAFooterPreview />,     scale: 0.5, bg: dark },
  "dark-footer":     { render: () => <DarkFooterPreview />,    scale: 0.5, bg: dark },
  "app-footer":      { render: () => <AppFooterPreview />,     scale: 0.5, bg: dark },

  // Heroes — dark
  "gradient-hero": { render: () => <GradientHeroPreview />, scale: 0.28, bg: dark },
  "split-hero":    { render: () => <SplitHeroPreview />,    scale: 0.28, bg: dark },
  "minimal-hero":  { render: () => <MinimalHeroPreview />,  scale: 0.28, bg: dark },
  "saas-hero":     { render: () => <SaaSHeroPreview />,     scale: 0.28, bg: dark },
  "video-hero":    { render: () => <VideoHeroPreview />,    scale: 0.28, bg: dark },

  // Pricing — dark
  "three-tier-pricing": { render: () => <ThreeTierPricingPreview />, scale: 0.3, bg: dark },
  "comparison-table":   { render: () => <ComparisonTablePreview />,  scale: 0.3, bg: dark },
  "usage-pricing":      { render: () => <UsagePricingPreview />,     scale: 0.3, bg: dark },
  "upgrade-banner":     { render: () => <UpgradeBannerPreview />,    scale: 0.3, bg: dark },
  "addon-pricing":      { render: () => <AddonPricingPreview />,     scale: 0.3, bg: dark },

  // Dashboards — dark
  "analytics-dashboard":    { render: () => <AnalyticsDashboardPreview />, scale: 0.22, bg: dark },
  "admin-panel":            { render: () => <AdminPanelPreview />,         scale: 0.22, bg: dark },
  "kanban-board":           { render: () => <KanbanBoardPreview />,        scale: 0.22, bg: dark },
  "data-table":             { render: () => <DataTablePreview />,          scale: 0.22, bg: dark },
  "user-profile-dashboard": { render: () => <UserProfilePreview />,        scale: 0.22, bg: dark },
};

/** Card thumbnail — scaled down into h-44 */
export function getPreview(id: string): ReactNode | null {
  const c = configs[id];
  if (!c) return null;
  return (
    <PreviewWrapper scale={c.scale} bg={c.bg}>
      {c.render()}
    </PreviewWrapper>
  );
}

/** Detail page — full-size with matching background */
export function getDetailPreview(id: string): { node: ReactNode; bg: string } | null {
  const c = configs[id];
  if (!c) return null;
  return { node: c.render(), bg: c.bg };
}
