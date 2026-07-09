import { buttonComponents } from "./components/buttons";
import { cardComponents } from "./components/cards";
import { heroComponents } from "./components/heroes";
import { alertComponents } from "./components/alerts";
import { modalComponents } from "./components/modals";
import { navbarComponents } from "./components/navbars";
import { pricingComponents } from "./components/pricing";
import { formComponents } from "./components/forms";
import { dashboardComponents } from "./components/dashboards";
import { footerComponents } from "./components/footers";
import { badgeComponents } from "./components/badges";
import { dividerComponents } from "./components/dividers";
import { inputComponents } from "./components/inputs";
import { contributors, getContributorByComponentId } from "./contributors";
import { getGitHubAvatarUrl } from "@/lib/github";
import type { ComponentDoc, ComponentMetadata, Category } from "@/types";

// Build a component → author lookup from the contributors data.
// This means component data files never need manual author edits —
// the contributors list is the single source of truth.
const raw: ComponentDoc[] = [
  ...buttonComponents,
  ...cardComponents,
  ...heroComponents,
  ...alertComponents,
  ...modalComponents,
  ...navbarComponents,
  ...pricingComponents,
  ...formComponents,
  ...dashboardComponents,
  ...footerComponents,
  ...badgeComponents,
  ...dividerComponents,
  ...inputComponents,
];

export const allComponents: ComponentDoc[] = raw.map((comp) => {
  const contributor = getContributorByComponentId(comp.metadata.id);
  if (!contributor) return comp;
  return {
    ...comp,
    metadata: {
      ...comp.metadata,
      author: {
        name: contributor.displayName,
        github: contributor.username,
        avatar: getGitHubAvatarUrl(contributor.username, 80),
      },
    },
  };
});

export function getComponentById(id: string): ComponentDoc | undefined {
  return allComponents.find((c) => c.metadata.id === id);
}

export function getComponentsByCategory(category: Category): ComponentDoc[] {
  return allComponents.filter((c) => c.metadata.category === category);
}

export function searchComponents(query: string): ComponentDoc[] {
  const q = query.toLowerCase().trim();
  if (!q) return allComponents;
  return allComponents.filter((c) => {
    const m = c.metadata;
    return (
      m.name.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q) ||
      m.tags.some((t) => t.toLowerCase().includes(q)) ||
      m.author.name.toLowerCase().includes(q) ||
      m.author.github.toLowerCase().includes(q)
    );
  });
}

export function getPopularComponents(limit = 8): ComponentDoc[] {
  return [...allComponents]
    .sort((a, b) => b.metadata.likes - a.metadata.likes)
    .slice(0, limit);
}

export function getRecentComponents(limit = 8): ComponentDoc[] {
  return [...allComponents]
    .sort(
      (a, b) =>
        new Date(b.metadata.createdAt).getTime() -
        new Date(a.metadata.createdAt).getTime()
    )
    .slice(0, limit);
}

export function getRelatedComponents(id: string, limit = 4): ComponentDoc[] {
  const target = getComponentById(id);
  if (!target) return [];
  return allComponents
    .filter(
      (c) =>
        c.metadata.id !== id &&
        c.metadata.category === target.metadata.category
    )
    .slice(0, limit);
}

export function getComponentsByContributor(username: string): ComponentDoc[] {
  return allComponents.filter(
    (c) => c.metadata.author.github.toLowerCase() === username.toLowerCase()
  );
}

export {
  buttonComponents,
  cardComponents,
  heroComponents,
  alertComponents,
  modalComponents,
  navbarComponents,
  pricingComponents,
  formComponents,
  dashboardComponents,
  footerComponents,
  badgeComponents,
  dividerComponents,
  inputComponents,
  contributors,
};
