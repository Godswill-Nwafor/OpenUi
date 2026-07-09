# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2025-07-02

### Added

- Initial release of OpenUI Hub
- 62 production-ready React components across 10 categories:
  - **Buttons** (10): Primary, Outline, Ghost, Gradient, Icon, Danger, Loading, Pill, Social, Split
  - **Cards** (10): Glass, Profile, Pricing, Stat, Feature, Blog, Notification, Testimonial, Product, Team
  - **Heroes** (5): Gradient, Split, Minimal, Video, SaaS
  - **Alerts** (5): Inline, Toast, Banner, Confirm, Progress
  - **Modals** (5): Base, Image Lightbox, Command Palette, Drawer, Fullscreen
  - **Navbars** (5): Glass, Sidebar, Top App, Breadcrumb, Tabs
  - **Pricing** (5): Three-Tier, Comparison Table, Usage Calculator, Upgrade Banner, Add-ons
  - **Forms** (5): Login, Contact, Sign Up (wizard), Search, Settings
  - **Dashboards** (5): Analytics, Admin Panel, Kanban, Data Table, User Profile
  - **Footers** (5): Minimal, Mega, CTA, Dark, App
- Full component detail pages with Preview, Code, Docs, and Props tabs
- Component search with query, category, and sort filters
- All 26 categories page with icon grid
- Contribution guide at /contribute
- Documentation at /docs
- About page at /about
- Admin dashboard at /admin
- REST API: `GET /api/components` and `GET /api/search`
- Dark mode by default with next-themes
- Framer Motion animations throughout
- Tailwind CSS v4 design system with CSS custom properties
- Prisma ORM schema for PostgreSQL (User, Component, Like, Comment)
- GitHub OAuth via NextAuth.js v5
- Open source files: README, CONTRIBUTING, CODE_OF_CONDUCT, LICENSE, SECURITY

---

[Unreleased]: https://github.com/Godswill-Nwafor/OpenUi/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/Godswill-Nwafor/OpenUi/releases/tag/v1.0.0
