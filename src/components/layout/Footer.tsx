import Link from "next/link";
import { Github, Twitter, Heart } from "lucide-react";
import { GITHUB_REPO, CATEGORIES } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

const footerLinks = {
  Platform: [
    { label: "Components", href: "/components" },
    { label: "Categories", href: "/categories" },
    { label: "Documentation", href: "/docs" },
    { label: "Contribute", href: "/contribute" },
    { label: "About", href: "/about" },
  ],
  Resources: [
    { label: "GitHub", href: GITHUB_REPO },
    { label: "Changelog", href: "/changelog" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "License (MIT)", href: "/license" },
    { label: "Security", href: "/security" },
  ],
  Community: [
    { label: "Contributing Guide", href: "/contribute#guide" },
    { label: "Code of Conduct", href: "/code-of-conduct" },
    { label: "Issue Tracker", href: `${GITHUB_REPO}/issues` },
    { label: "Pull Requests", href: `${GITHUB_REPO}/pulls` },
    { label: "Discussions", href: `${GITHUB_REPO}/discussions` },
  ],
};

const popularCategories = CATEGORIES.slice(0, 8);

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="w-fit">
              <Logo size="md" />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              A production-quality open-source UI components library. Browse, preview, and copy beautiful React components — or contribute your own.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Link
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <Github size={16} />
              </Link>
              <Link
                href="https://twitter.com/openuihub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <Twitter size={16} />
              </Link>
            </div>

            {/* Categories quick links */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Popular Categories
              </p>
              <div className="flex flex-wrap gap-2">
                {popularCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/components?category=${cat.id}`}
                    className="px-2.5 py-1 text-xs rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-semibold text-sm mb-4">{section}</h3>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} OpenUI Hub. Released under the{" "}
            <Link href="/license" className="hover:text-foreground transition-colors underline underline-offset-2">
              MIT License
            </Link>
            .
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={11} className="text-red-500 fill-red-500" /> by the open-source community.
          </p>
        </div>
      </div>
    </footer>
  );
}
