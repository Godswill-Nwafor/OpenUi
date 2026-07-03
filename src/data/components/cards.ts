import type { ComponentDoc } from "@/types";

export const cardComponents: ComponentDoc[] = [
  {
    metadata: {
      id: "glass-card",
      name: "Glass Card",
      description: "A glassmorphism card with backdrop blur and subtle border.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "cards",
      tags: ["card", "glass", "glassmorphism", "blur", "modern"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 3421,
      likes: 287,
    },
    code: `interface GlassCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function GlassCard({ title, description, icon, children, className }: GlassCardProps) {
  return (
    <div
      className={\`relative rounded-2xl p-6 overflow-hidden
        bg-white/5 backdrop-blur-xl border border-white/10
        hover:bg-white/8 hover:border-white/20
        transition-all duration-300 group \${className ?? ""}\`}
    >
      {/* Gradient glow */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl
        group-hover:bg-indigo-500/30 transition-all duration-500" />

      <div className="relative z-10">
        {icon && (
          <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center
            text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <h3 className="font-semibold text-white mb-1.5">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}`,
    demoCode: `import { GlassCard } from "./GlassCard";
import { Zap, Shield, Globe } from "lucide-react";

export default function Demo() {
  return (
    <div className="grid grid-cols-3 gap-4 p-8 bg-gradient-to-br from-slate-900 to-indigo-950">
      <GlassCard title="Fast" description="Optimized for peak performance." icon={<Zap size={20} />} />
      <GlassCard title="Secure" description="Enterprise-grade security built in." icon={<Shield size={20} />} />
      <GlassCard title="Global" description="Deploy to 300+ edge locations." icon={<Globe size={20} />} />
    </div>
  );
}`,
    documentation: "A glassmorphism card that works best on gradient or image backgrounds. Includes a subtle glow accent on hover.",
    props: [
      { name: "title", type: "string", required: true, description: "Card heading." },
      { name: "description", type: "string", required: true, description: "Supporting text." },
      { name: "icon", type: "ReactNode", required: false, description: "Icon shown in a rounded badge above the title." },
      { name: "children", type: "ReactNode", required: false, description: "Additional card content." },
    ],
  },
  {
    metadata: {
      id: "profile-card",
      name: "Profile Card",
      description: "A user profile card with avatar, stats, and social links.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "cards",
      tags: ["card", "profile", "user", "avatar", "social"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 2100,
      likes: 178,
    },
    code: `import { Github, Twitter, Globe } from "lucide-react";

interface ProfileCardProps {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  stats?: { label: string; value: string }[];
  github?: string;
  twitter?: string;
  website?: string;
}

export function ProfileCard({ name, role, avatar, bio, stats, github, twitter, website }: ProfileCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900 overflow-hidden w-72">
      {/* Banner */}
      <div className="h-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />

      <div className="px-5 pb-5">
        {/* Avatar */}
        <div className="-mt-10 mb-3 relative w-fit">
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-2xl border-4 border-gray-900 object-cover"
          />
          <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-gray-900" />
        </div>

        <h3 className="font-semibold text-white">{name}</h3>
        <p className="text-sm text-indigo-400 mb-2">{role}</p>
        {bio && <p className="text-xs text-slate-400 leading-relaxed mb-4">{bio}</p>}

        {stats && (
          <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-white/10">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <p className="text-white font-semibold text-sm">{s.value}</p>
                <p className="text-slate-500 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-xl
                bg-white/10 text-slate-300 hover:text-white hover:bg-white/15 text-xs transition-colors">
              <Github size={13} /> GitHub
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center h-9 w-9 rounded-xl
                bg-white/10 text-slate-300 hover:text-white hover:bg-white/15 transition-colors">
              <Twitter size={14} />
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center h-9 w-9 rounded-xl
                bg-white/10 text-slate-300 hover:text-white hover:bg-white/15 transition-colors">
              <Globe size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}`,
    demoCode: `import { ProfileCard } from "./ProfileCard";

export default function Demo() {
  return (
    <ProfileCard
      name="Alex Johnson"
      role="Full Stack Developer"
      avatar="https://avatars.githubusercontent.com/u/1?v=4"
      bio="Building open-source tools for developers. Coffee enthusiast."
      stats={[
        { label: "Repos", value: "142" },
        { label: "Stars", value: "8.4k" },
        { label: "PRs", value: "623" },
      ]}
      github="https://github.com"
      twitter="https://twitter.com"
      website="https://example.com"
    />
  );
}`,
    documentation: "A complete user profile card with avatar, role, bio, stats, and social links.",
    props: [
      { name: "name", type: "string", required: true, description: "User's display name." },
      { name: "role", type: "string", required: true, description: "Job title or role." },
      { name: "avatar", type: "string", required: true, description: "Avatar image URL." },
      { name: "bio", type: "string", required: false, description: "Short biography." },
      { name: "stats", type: "{ label: string; value: string }[]", required: false, description: "Three stat columns." },
    ],
  },
  {
    metadata: {
      id: "pricing-card",
      name: "Pricing Card",
      description: "A feature-rich pricing plan card with a highlighted popular option.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "cards",
      tags: ["card", "pricing", "plan", "subscription", "saas"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 1876,
      likes: 156,
    },
    code: `import { Check, Zap } from "lucide-react";

interface PricingCardProps {
  plan: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  onSelect?: () => void;
}

export function PricingCard({ plan, price, period = "/mo", description, features, cta, popular, onSelect }: PricingCardProps) {
  return (
    <div className={\`relative rounded-2xl p-6 border transition-all duration-300
      \${popular
        ? "border-indigo-500 bg-gradient-to-b from-indigo-950 to-gray-900 shadow-xl shadow-indigo-500/20"
        : "border-white/10 bg-gray-900 hover:border-white/20"
      }\`}>

      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5
          px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">
          <Zap size={11} fill="white" /> Most Popular
        </div>
      )}

      <div className="mb-5">
        <h3 className="font-semibold text-white mb-1">{plan}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-slate-400 text-sm ml-1">{period}</span>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map(f => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
            <Check size={14} className="text-emerald-400 mt-0.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={\`w-full h-10 rounded-xl font-medium text-sm transition-all duration-150 active:scale-[0.98]
          \${popular
            ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-500/25"
            : "bg-white/10 text-white hover:bg-white/15"
          }\`}
      >
        {cta}
      </button>
    </div>
  );
}`,
    demoCode: `import { PricingCard } from "./PricingCard";

export default function Demo() {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-2xl">
      <PricingCard
        plan="Starter" price="$0" description="For individuals"
        features={["5 components", "Community support", "MIT license"]}
        cta="Get Started" onSelect={() => alert("Starter")}
      />
      <PricingCard
        plan="Pro" price="$12" description="For teams" popular
        features={["Unlimited components", "Priority support", "Team sharing", "Early access"]}
        cta="Start Free Trial" onSelect={() => alert("Pro")}
      />
      <PricingCard
        plan="Enterprise" price="$49" description="For organizations"
        features={["Everything in Pro", "SSO", "Custom license", "Dedicated support"]}
        cta="Contact Sales" onSelect={() => alert("Enterprise")}
      />
    </div>
  );
}`,
    documentation: "A pricing plan card with a popular highlight variant. Pass `popular={true}` for the highlighted card.",
    props: [
      { name: "plan", type: "string", required: true, description: "Plan name." },
      { name: "price", type: "string", required: true, description: "Price string, e.g. '$12'." },
      { name: "features", type: "string[]", required: true, description: "List of included features." },
      { name: "popular", type: "boolean", default: "false", required: false, description: "Highlights this as the recommended plan." },
    ],
  },
  {
    metadata: {
      id: "stat-card",
      name: "Stat Card",
      description: "A KPI metric card with trend indicator for dashboards.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "cards",
      tags: ["card", "stat", "metric", "kpi", "dashboard", "analytics"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 2544,
      likes: 203,
    },
    code: `import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  change?: number;
  icon?: React.ReactNode;
  description?: string;
}

export function StatCard({ label, value, change, icon, description }: StatCardProps) {
  const isPositive = change !== undefined && change >= 0;

  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900 p-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">{label}</p>
          <p className="text-3xl font-bold text-white mt-1">{value}</p>
        </div>
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400">
            {icon}
          </div>
        )}
      </div>

      {(change !== undefined || description) && (
        <div className="flex items-center gap-2">
          {change !== undefined && (
            <span className={\`flex items-center gap-1 text-xs font-medium
              \${isPositive ? "text-emerald-400" : "text-red-400"}\`}>
              {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {Math.abs(change)}%
            </span>
          )}
          {description && <span className="text-xs text-slate-500">{description}</span>}
        </div>
      )}
    </div>
  );
}`,
    demoCode: `import { StatCard } from "./StatCard";
import { Users, DollarSign, ShoppingBag, Activity } from "lucide-react";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard label="Total Users" value="24,521" change={12.5} description="vs last month" icon={<Users size={18} />} />
      <StatCard label="Revenue" value="$48,352" change={8.2} description="vs last month" icon={<DollarSign size={18} />} />
      <StatCard label="Orders" value="1,893" change={-3.1} description="vs last month" icon={<ShoppingBag size={18} />} />
      <StatCard label="Active Now" value="342" icon={<Activity size={18} />} description="live sessions" />
    </div>
  );
}`,
    documentation: "A KPI metric card for dashboards. Shows a trend percentage with up/down arrows.",
    props: [
      { name: "label", type: "string", required: true, description: "Metric label." },
      { name: "value", type: "string", required: true, description: "Metric value, formatted as string." },
      { name: "change", type: "number", required: false, description: "Percentage change. Positive = green trend, negative = red." },
      { name: "icon", type: "ReactNode", required: false, description: "Icon in top-right corner." },
    ],
  },
  {
    metadata: {
      id: "feature-card",
      name: "Feature Card",
      description: "A feature highlight card with gradient icon and animated border.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "cards",
      tags: ["card", "feature", "highlight", "landing", "marketing"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 1654,
      likes: 134,
    },
    code: `interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient?: string;
}

export function FeatureCard({ title, description, icon, gradient = "from-indigo-500 to-purple-600" }: FeatureCardProps) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-gray-900 p-6
      hover:border-indigo-500/40 transition-all duration-300 overflow-hidden">

      {/* Animated gradient border */}
      <div className={\`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
        transition-opacity duration-500 bg-gradient-to-br \${gradient}
        blur-xl -z-10 scale-105\`} />

      <div className={\`w-12 h-12 rounded-2xl bg-gradient-to-br \${gradient}
        flex items-center justify-center text-white mb-5
        shadow-lg group-hover:scale-110 transition-transform duration-300\`}>
        {icon}
      </div>

      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}`,
    demoCode: `import { FeatureCard } from "./FeatureCard";
import { Zap, Shield, Code2, Globe } from "lucide-react";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-lg bg-gray-950 p-6 rounded-3xl">
      <FeatureCard icon={<Zap size={22} />} title="Lightning Fast" description="Sub-50ms renders with React 19." gradient="from-amber-500 to-orange-600" />
      <FeatureCard icon={<Shield size={22} />} title="Secure by Default" description="Enterprise-grade security." gradient="from-emerald-500 to-teal-600" />
      <FeatureCard icon={<Code2 size={22} />} title="TypeScript First" description="Full type safety out of the box." gradient="from-indigo-500 to-purple-600" />
      <FeatureCard icon={<Globe size={22} />} title="Global CDN" description="Deploy to 300+ edge locations." gradient="from-pink-500 to-rose-600" />
    </div>
  );
}`,
    documentation: "A feature highlight card with a gradient icon badge and hover glow effect. Great for marketing/landing pages.",
    props: [
      { name: "title", type: "string", required: true, description: "Feature name." },
      { name: "description", type: "string", required: true, description: "Feature description." },
      { name: "icon", type: "ReactNode", required: true, description: "Feature icon." },
      { name: "gradient", type: "string", default: '"from-indigo-500 to-purple-600"', required: false, description: "Tailwind gradient classes for the icon badge." },
    ],
  },
  {
    metadata: {
      id: "blog-card",
      name: "Blog Post Card",
      description: "A blog/article card with image, tags, reading time, and author.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "cards",
      tags: ["card", "blog", "article", "post", "news"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 1234,
      likes: 98,
    },
    code: `import { Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: { name: string; avatar: string };
  tag: string;
  readingTime: number;
  date: string;
  href?: string;
}

export function BlogCard({ title, excerpt, image, author, tag, readingTime, date, href = "#" }: BlogCardProps) {
  return (
    <a href={href} className="group block rounded-2xl border border-white/10 bg-gray-900
      hover:border-indigo-500/30 transition-all duration-300 overflow-hidden">

      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover
          group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-600/90
          backdrop-blur-sm text-white text-xs font-medium">
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
          <Clock size={11} />
          <span>{readingTime} min read</span>
          <span>·</span>
          <time>{date}</time>
        </div>

        <h3 className="font-semibold text-white line-clamp-2 mb-2
          group-hover:text-indigo-400 transition-colors">{title}</h3>
        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">{excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={author.avatar} alt={author.name} className="w-6 h-6 rounded-full object-cover" />
            <span className="text-xs text-slate-400">{author.name}</span>
          </div>
          <ArrowRight size={14} className="text-slate-500 group-hover:text-indigo-400
            group-hover:translate-x-1 transition-all duration-200" />
        </div>
      </div>
    </a>
  );
}`,
    demoCode: `import { BlogCard } from "./BlogCard";

export default function Demo() {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-3xl">
      <BlogCard
        title="Building a Design System with Tailwind CSS v4"
        excerpt="A deep dive into creating consistent UI components with the new Tailwind CSS v4 architecture."
        image="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400"
        author={{ name: "Sarah Chen", avatar: "https://avatars.githubusercontent.com/u/2?v=4" }}
        tag="Tutorial" readingTime={8} date="Dec 1, 2024" href="#"
      />
    </div>
  );
}`,
    documentation: "Blog post card with image zoom on hover, tag badge, reading time, and an arrow link indicator.",
    props: [
      { name: "title", type: "string", required: true, description: "Post title." },
      { name: "image", type: "string", required: true, description: "Cover image URL." },
      { name: "readingTime", type: "number", required: true, description: "Estimated reading time in minutes." },
    ],
  },
  {
    metadata: {
      id: "notification-card",
      name: "Notification Card",
      description: "A notification/activity item card with avatar and action time.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "cards",
      tags: ["card", "notification", "activity", "feed", "timeline"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 876,
      likes: 67,
    },
    code: `interface NotificationCardProps {
  avatar: string;
  name: string;
  action: string;
  target: string;
  time: string;
  read?: boolean;
  type?: "info" | "success" | "warning";
}

const dotColor = { info: "bg-indigo-500", success: "bg-emerald-500", warning: "bg-amber-500" };

export function NotificationCard({ avatar, name, action, target, time, read = false, type = "info" }: NotificationCardProps) {
  return (
    <div className={\`flex items-start gap-3 p-4 rounded-xl transition-colors
      \${read ? "bg-transparent" : "bg-indigo-500/5 hover:bg-indigo-500/8"}
      border border-transparent \${!read ? "border-indigo-500/10" : "hover:border-white/5"}\`}>

      <div className="relative shrink-0">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div className={\`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full \${dotColor[type]} border-2 border-gray-950\`} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm text-slate-200">
          <span className="font-semibold text-white">{name}</span>
          {" "}{action}{" "}
          <span className="font-medium text-indigo-400">{target}</span>
        </p>
        <p className="text-xs text-slate-500 mt-0.5">{time}</p>
      </div>

      {!read && <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0 mt-1.5" />}
    </div>
  );
}`,
    demoCode: `import { NotificationCard } from "./NotificationCard";

const notifications = [
  { avatar: "https://avatars.githubusercontent.com/u/1?v=4", name: "Alex Johnson", action: "starred your component", target: "Glass Card", time: "2 min ago", read: false, type: "success" as const },
  { avatar: "https://avatars.githubusercontent.com/u/2?v=4", name: "Sarah Chen", action: "opened a PR for", target: "Button variants", time: "15 min ago", read: false, type: "info" as const },
  { avatar: "https://avatars.githubusercontent.com/u/3?v=4", name: "Mike Torres", action: "commented on", target: "your modal", time: "1 hr ago", read: true, type: "info" as const },
];

export default function Demo() {
  return (
    <div className="flex flex-col gap-1.5 max-w-sm bg-gray-950 rounded-2xl p-3">
      {notifications.map((n, i) => <NotificationCard key={i} {...n} />)}
    </div>
  );
}`,
    documentation: "A notification/activity item card. Unread notifications have a highlighted background and indicator dot.",
    props: [
      { name: "read", type: "boolean", default: "false", required: false, description: "Marks notification as read (removes highlight)." },
      { name: "type", type: '"info" | "success" | "warning"', default: '"info"', required: false, description: "Sets the colored dot type." },
    ],
  },
  {
    metadata: {
      id: "testimonial-card",
      name: "Testimonial Card",
      description: "A customer testimonial card with star rating and company logo.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "cards",
      tags: ["card", "testimonial", "review", "social-proof", "quote"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 1102,
      likes: 89,
    },
    code: `import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  company?: string;
  rating?: number;
}

export function TestimonialCard({ quote, author, role, avatar, company, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900 p-6">
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < rating ? "text-amber-400 fill-amber-400" : "text-slate-700"}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-300 text-sm leading-relaxed mb-5">"{quote}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img src={avatar} alt={author} className="w-9 h-9 rounded-full object-cover ring-2 ring-white/10" />
        <div>
          <p className="text-sm font-semibold text-white">{author}</p>
          <p className="text-xs text-slate-500">{role}{company ? \` @ \${company}\` : ""}</p>
        </div>
      </div>
    </div>
  );
}`,
    demoCode: `import { TestimonialCard } from "./TestimonialCard";

export default function Demo() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-xl">
      <TestimonialCard
        quote="OpenUI Hub saved us weeks of development time. The components are beautiful and production-ready."
        author="Emma Wilson" role="CTO" company="Veritas Labs" rating={5}
        avatar="https://avatars.githubusercontent.com/u/4?v=4"
      />
      <TestimonialCard
        quote="Best component library I've found. The code quality and documentation are exceptional."
        author="David Kim" role="Lead Developer" company="Prismatic" rating={5}
        avatar="https://avatars.githubusercontent.com/u/5?v=4"
      />
    </div>
  );
}`,
    documentation: "A customer testimonial card with star rating. Pass `rating` between 1-5.",
    props: [
      { name: "quote", type: "string", required: true, description: "The testimonial text." },
      { name: "rating", type: "number", default: "5", required: false, description: "Star rating from 1 to 5." },
    ],
  },
  {
    metadata: {
      id: "product-card",
      name: "Product Card",
      description: "An e-commerce product card with image, price, and add-to-cart action.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "cards",
      tags: ["card", "product", "ecommerce", "shop", "price"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 987,
      likes: 74,
    },
    code: `"use client";
import { useState } from "react";
import { ShoppingCart, Heart, Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  onAddToCart?: () => void;
}

export function ProductCard({ name, price, originalPrice, image, rating, reviews, badge, onAddToCart }: ProductCardProps) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : null;

  const handleAdd = () => {
    onAddToCart?.();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group rounded-2xl border border-white/10 bg-gray-900 overflow-hidden w-60">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-800">
        <img src={image} alt={name} className="w-full h-full object-cover
          group-hover:scale-105 transition-transform duration-500" />

        {badge && (
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-indigo-600 text-white text-xs font-medium">
            {badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-red-600 text-white text-xs font-medium">
            -{discount}%
          </span>
        )}
        <button onClick={() => setLiked(v => !v)}
          className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-gray-900/80 backdrop-blur-sm
            flex items-center justify-center transition-all hover:bg-gray-800">
          <Heart size={14} className={liked ? "text-red-500 fill-red-500" : "text-slate-400"} />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white line-clamp-1 mb-1">{name}</h3>

        <div className="flex items-center gap-1.5 mb-3">
          <Star size={11} className="text-amber-400 fill-amber-400" />
          <span className="text-xs text-amber-400 font-medium">{rating.toFixed(1)}</span>
          <span className="text-xs text-slate-500">({reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-white">\${price}</span>
            {originalPrice && (
              <span className="text-xs text-slate-500 line-through">\${originalPrice}</span>
            )}
          </div>
          <button onClick={handleAdd}
            className={\`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
              \${added ? "bg-emerald-600 text-white" : "bg-indigo-600 text-white hover:bg-indigo-700"}\`}>
            <ShoppingCart size={12} />
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}`,
    demoCode: `import { ProductCard } from "./ProductCard";

export default function Demo() {
  return (
    <ProductCard
      name="Wireless Noise-Cancelling Headphones"
      price={79} originalPrice={149}
      image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
      rating={4.8} reviews={1243} badge="New"
      onAddToCart={() => console.log("Added to cart")}
    />
  );
}`,
    documentation: "An e-commerce product card with wishlist toggle, discount badge, and add-to-cart with success state.",
    props: [
      { name: "price", type: "number", required: true, description: "Current price." },
      { name: "originalPrice", type: "number", required: false, description: "Original price — shows a discount percentage badge." },
      { name: "badge", type: "string", required: false, description: "Custom badge label (e.g. 'New', 'Sale')." },
    ],
  },
  {
    metadata: {
      id: "team-member-card",
      name: "Team Member Card",
      description: "A team member card for about/team pages with hover reveal effect.",
      author: { name: "OpenUI Team", github: "openui-hub" },
      framework: "react",
      version: "1.0.0",
      category: "cards",
      tags: ["card", "team", "member", "people", "about"],
      createdAt: "2024-11-01",
      updatedAt: "2024-11-01",
      status: "approved",
      downloads: 765,
      likes: 58,
    },
    code: `import { Github, Twitter, Linkedin } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  socials?: { github?: string; twitter?: string; linkedin?: string };
}

export function TeamMemberCard({ name, role, avatar, bio, socials }: TeamMemberCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10">
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img src={avatar} alt={name} className="w-full h-full object-cover
          group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-indigo-950/80 backdrop-blur-sm opacity-0
          group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 p-6">
          {bio && <p className="text-slate-300 text-sm text-center leading-relaxed">{bio}</p>}
          <div className="flex items-center gap-3">
            {socials?.github && (
              <a href={socials.github} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <Github size={16} />
              </a>
            )}
            {socials?.twitter && (
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <Twitter size={16} />
              </a>
            )}
            {socials?.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <Linkedin size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Name */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-semibold text-white">{name}</h3>
        <p className="text-sm text-indigo-400">{role}</p>
      </div>
    </div>
  );
}`,
    demoCode: `import { TeamMemberCard } from "./TeamMemberCard";

export default function Demo() {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-lg">
      <TeamMemberCard
        name="Alex Johnson" role="Co-Founder & CTO"
        avatar="https://avatars.githubusercontent.com/u/1?v=4"
        bio="10 years building developer tools and open-source projects."
        socials={{ github: "#", twitter: "#", linkedin: "#" }}
      />
    </div>
  );
}`,
    documentation: "Team member card with a hover overlay revealing bio and social links. Uses aspect-ratio for consistent sizing.",
    props: [
      { name: "bio", type: "string", required: false, description: "Short bio shown on hover." },
      { name: "socials", type: "object", required: false, description: "Social profile URLs for GitHub, Twitter, LinkedIn." },
    ],
  },
];
