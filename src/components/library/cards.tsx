"use client";
import { useState } from "react";
import { Github, Twitter, Globe, TrendingUp, TrendingDown, Check, Zap, Clock, ArrowRight, Star, ShoppingCart, Heart, Linkedin } from "lucide-react";

// GlassCard
export function GlassCard({ title, description, icon, children, className = "" }: { title: string; description: string; icon?: React.ReactNode; children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl p-6 overflow-hidden
      bg-white/5 backdrop-blur-xl border border-white/10
      hover:bg-white/8 hover:border-white/20
      transition-all duration-300 group ${className}`}>
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
}

// ProfileCard
export function ProfileCard({ name, role, avatar, bio, stats, github, twitter, website }: { name: string; role: string; avatar: string; bio?: string; stats?: { label: string; value: string }[]; github?: string; twitter?: string; website?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900 overflow-hidden w-72">
      <div className="h-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
      <div className="px-5 pb-5">
        <div className="-mt-10 mb-3 relative w-fit">
          <img src={avatar} alt={name} className="w-20 h-20 rounded-2xl border-4 border-gray-900 object-cover" />
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
          {github && <a href={github} className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/15 text-xs transition-colors"><Github size={13} /> GitHub</a>}
          {twitter && <a href={twitter} className="flex-1 flex items-center justify-center h-9 w-9 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/15 transition-colors"><Twitter size={14} /></a>}
          {website && <a href={website} className="flex-1 flex items-center justify-center h-9 w-9 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/15 transition-colors"><Globe size={14} /></a>}
        </div>
      </div>
    </div>
  );
}

// PricingCard
export function PricingCard({ plan, price, period = "/mo", description, features, cta, popular, onSelect }: { plan: string; price: string; period?: string; description: string; features: string[]; cta: string; popular?: boolean; onSelect?: () => void }) {
  return (
    <div className={`relative rounded-2xl p-6 border transition-all duration-300 ${popular ? "border-indigo-500 bg-gradient-to-b from-indigo-950 to-gray-900 shadow-xl shadow-indigo-500/20" : "border-white/10 bg-gray-900 hover:border-white/20"}`}>
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">
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
            <Check size={14} className="text-emerald-400 mt-0.5 shrink-0" />{f}
          </li>
        ))}
      </ul>
      <button onClick={onSelect} className={`w-full h-10 rounded-xl font-medium text-sm transition-all duration-150 active:scale-[0.98] ${popular ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-500/25" : "bg-white/10 text-white hover:bg-white/15"}`}>
        {cta}
      </button>
    </div>
  );
}

// StatCard
export function StatCard({ label, value, change, icon, description }: { label: string; value: string; change?: number; icon?: React.ReactNode; description?: string }) {
  const isPositive = change !== undefined && change >= 0;
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900 p-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">{label}</p>
          <p className="text-3xl font-bold text-white mt-1">{value}</p>
        </div>
        {icon && <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400">{icon}</div>}
      </div>
      {(change !== undefined || description) && (
        <div className="flex items-center gap-2">
          {change !== undefined && (
            <span className={`flex items-center gap-1 text-xs font-medium ${isPositive ? "text-emerald-400" : "text-red-400"}`}>
              {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {Math.abs(change)}%
            </span>
          )}
          {description && <span className="text-xs text-slate-500">{description}</span>}
        </div>
      )}
    </div>
  );
}

// FeatureCard
export function FeatureCard({ title, description, icon, gradient = "from-indigo-500 to-purple-600" }: { title: string; description: string; icon: React.ReactNode; gradient?: string }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-gray-900 p-6 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden">
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${gradient} blur-xl -z-10 scale-105`} />
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

// BlogCard
export function BlogCard({ title, excerpt, image, author, tag, readingTime, date, href = "#" }: { title: string; excerpt: string; image: string; author: { name: string; avatar: string }; tag: string; readingTime: number; date: string; href?: string }) {
  return (
    <a href={href} className="group block rounded-2xl border border-white/10 bg-gray-900 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden">
      <div className="relative h-44 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-medium">{tag}</span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
          <Clock size={11} /><span>{readingTime} min read</span><span>·</span><time>{date}</time>
        </div>
        <h3 className="font-semibold text-white line-clamp-2 mb-2 group-hover:text-indigo-400 transition-colors">{title}</h3>
        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={author.avatar} alt={author.name} className="w-6 h-6 rounded-full object-cover" />
            <span className="text-xs text-slate-400">{author.name}</span>
          </div>
          <ArrowRight size={14} className="text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-200" />
        </div>
      </div>
    </a>
  );
}

// NotificationCard
const dotColor = { info: "bg-indigo-500", success: "bg-emerald-500", warning: "bg-amber-500" };
export function NotificationCard({ avatar, name, action, target, time, read = false, type = "info" }: { avatar: string; name: string; action: string; target: string; time: string; read?: boolean; type?: "info" | "success" | "warning" }) {
  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl transition-colors ${read ? "bg-transparent" : "bg-indigo-500/5 hover:bg-indigo-500/8"} border border-transparent ${!read ? "border-indigo-500/10" : "hover:border-white/5"}`}>
      <div className="relative shrink-0">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full ${dotColor[type]} border-2 border-gray-950`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-slate-200"><span className="font-semibold text-white">{name}</span>{" "}{action}{" "}<span className="font-medium text-indigo-400">{target}</span></p>
        <p className="text-xs text-slate-500 mt-0.5">{time}</p>
      </div>
      {!read && <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0 mt-1.5" />}
    </div>
  );
}

// TestimonialCard
export function TestimonialCard({ quote, author, role, avatar, company, rating = 5 }: { quote: string; author: string; role: string; avatar: string; company?: string; rating?: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900 p-6">
      <div className="flex items-center gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className={i < rating ? "text-amber-400 fill-amber-400" : "text-slate-700"} />)}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-5">"{quote}"</p>
      <div className="flex items-center gap-3">
        <img src={avatar} alt={author} className="w-9 h-9 rounded-full object-cover ring-2 ring-white/10" />
        <div>
          <p className="text-sm font-semibold text-white">{author}</p>
          <p className="text-xs text-slate-500">{role}{company ? ` @ ${company}` : ""}</p>
        </div>
      </div>
    </div>
  );
}

// ProductCard
export function ProductCard({ name, price, originalPrice, image, rating, reviews, badge, onAddToCart }: { name: string; price: number; originalPrice?: number; image: string; rating: number; reviews: number; badge?: string; onAddToCart?: () => void }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : null;
  const handleAdd = () => { onAddToCart?.(); setAdded(true); setTimeout(() => setAdded(false), 2000); };
  return (
    <div className="group rounded-2xl border border-white/10 bg-gray-900 overflow-hidden w-60">
      <div className="relative h-52 overflow-hidden bg-gray-800">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {badge && <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-indigo-600 text-white text-xs font-medium">{badge}</span>}
        {discount && <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-red-600 text-white text-xs font-medium">-{discount}%</span>}
        <button onClick={() => setLiked(v => !v)} className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-gray-800">
          <Heart size={14} className={liked ? "text-red-500 fill-red-500" : "text-slate-400"} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white line-clamp-1 mb-1">{name}</h3>
        <div className="flex items-center gap-1.5 mb-3">
          <Star size={11} className="text-amber-400 fill-amber-400" />
          <span className="text-xs text-amber-400 font-medium">{rating.toFixed(1)}</span>
          <span className="text-xs text-slate-500">({reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-white">${price}</span>
            {originalPrice && <span className="text-xs text-slate-500 line-through">${originalPrice}</span>}
          </div>
          <button onClick={handleAdd} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${added ? "bg-emerald-600 text-white" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}>
            <ShoppingCart size={12} />{added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

// TeamMemberCard
export function TeamMemberCard({ name, role, avatar, bio, socials }: { name: string; role: string; avatar: string; bio?: string; socials?: { github?: string; twitter?: string; linkedin?: string } }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img src={avatar} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-indigo-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 p-6">
          {bio && <p className="text-slate-300 text-sm text-center leading-relaxed">{bio}</p>}
          <div className="flex items-center gap-3">
            {socials?.github && <a href={socials.github} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><Github size={16} /></a>}
            {socials?.twitter && <a href={socials.twitter} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><Twitter size={16} /></a>}
            {socials?.linkedin && <a href={socials.linkedin} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><Linkedin size={16} /></a>}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-semibold text-white">{name}</h3>
        <p className="text-sm text-indigo-400">{role}</p>
      </div>
    </div>
  );
}

// ── Previews ─────────────────────────────────────────────────────────────────

export function GlassCardPreview() {
  return (
    <div className="grid grid-cols-2 gap-3 p-4 bg-gradient-to-br from-slate-900 to-indigo-950 h-full">
      <GlassCard title="Fast" description="Optimized for peak performance." icon={<span className="text-lg">⚡</span>} />
      <GlassCard title="Secure" description="Enterprise-grade security." icon={<span className="text-lg">🔒</span>} />
    </div>
  );
}

export function ProfileCardPreview() {
  return (
    <div className="flex items-center justify-center p-4 bg-gray-950 h-full">
      <ProfileCard
        name="Alex Johnson" role="Full Stack Developer"
        avatar="https://avatars.githubusercontent.com/u/1?v=4"
        bio="Building open-source tools for devs."
        stats={[{ label: "Repos", value: "142" }, { label: "Stars", value: "8.4k" }, { label: "PRs", value: "623" }]}
        github="https://github.com" twitter="https://twitter.com"
      />
    </div>
  );
}

export function PricingCardPreview() {
  return (
    <div className="flex gap-3 p-4 bg-gray-950 h-full items-start">
      <PricingCard plan="Starter" price="$0" description="For individuals" features={["5 components", "Community support"]} cta="Get Started" />
      <PricingCard plan="Pro" price="$12" description="For teams" popular features={["Unlimited", "Priority support", "Team sharing"]} cta="Start Trial" />
    </div>
  );
}

export function StatCardPreview() {
  return (
    <div className="grid grid-cols-2 gap-3 p-4 bg-gray-950 h-full">
      <StatCard label="Total Users" value="24,521" change={12.5} description="vs last month" icon={<span className="text-sm">👥</span>} />
      <StatCard label="Revenue" value="$48,352" change={8.2} description="vs last month" icon={<span className="text-sm">💰</span>} />
      <StatCard label="Orders" value="1,893" change={-3.1} description="vs last month" icon={<span className="text-sm">📦</span>} />
      <StatCard label="Active" value="342" description="live sessions" icon={<span className="text-sm">📡</span>} />
    </div>
  );
}

export function FeatureCardPreview() {
  return (
    <div className="grid grid-cols-2 gap-3 p-4 bg-gray-950 h-full">
      <FeatureCard icon={<span>⚡</span>} title="Lightning Fast" description="Sub-50ms renders." gradient="from-amber-500 to-orange-600" />
      <FeatureCard icon={<span>🛡️</span>} title="Secure" description="Enterprise security." gradient="from-emerald-500 to-teal-600" />
    </div>
  );
}

export function BlogCardPreview() {
  return (
    <div className="p-4 bg-gray-950 h-full">
      <BlogCard
        title="Building a Design System with Tailwind CSS v4"
        excerpt="A deep dive into creating consistent UI components with the new Tailwind v4 architecture."
        image="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400"
        author={{ name: "Sarah Chen", avatar: "https://avatars.githubusercontent.com/u/2?v=4" }}
        tag="Tutorial" readingTime={8} date="Dec 1, 2024"
      />
    </div>
  );
}

export function NotificationCardPreview() {
  return (
    <div className="flex flex-col gap-1.5 p-3 bg-gray-950 h-full">
      <NotificationCard avatar="https://avatars.githubusercontent.com/u/1?v=4" name="Alex Johnson" action="starred your component" target="Glass Card" time="2m ago" read={false} type="success" />
      <NotificationCard avatar="https://avatars.githubusercontent.com/u/2?v=4" name="Sarah Chen" action="opened a PR for" target="Button variants" time="15m ago" read={false} type="info" />
      <NotificationCard avatar="https://avatars.githubusercontent.com/u/3?v=4" name="Mike Torres" action="commented on" target="your modal" time="1 hr ago" read={true} type="info" />
    </div>
  );
}

export function TestimonialCardPreview() {
  return (
    <div className="flex gap-3 p-4 bg-gray-950 h-full items-start">
      <TestimonialCard quote="OpenUI Hub saved us weeks of development time. The components are beautiful and production-ready." author="Emma Wilson" role="CTO" company="Veritas Labs" rating={5} avatar="https://avatars.githubusercontent.com/u/4?v=4" />
    </div>
  );
}

export function ProductCardPreview() {
  return (
    <div className="flex items-center justify-center p-4 bg-gray-950 h-full">
      <ProductCard
        name="Wireless Headphones" price={79} originalPrice={149}
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
        rating={4.8} reviews={1243} badge="New"
      />
    </div>
  );
}

export function TeamMemberCardPreview() {
  return (
    <div className="flex items-center justify-center gap-3 p-4 bg-gray-950 h-full">
      <div className="w-36">
        <TeamMemberCard name="Alex Johnson" role="Co-Founder & CTO" avatar="https://avatars.githubusercontent.com/u/1?v=4" bio="10 years building developer tools." socials={{ github: "#", twitter: "#" }} />
      </div>
      <div className="w-36">
        <TeamMemberCard name="Sarah Chen" role="Lead Developer" avatar="https://avatars.githubusercontent.com/u/2?v=4" bio="Open source enthusiast." socials={{ github: "#", linkedin: "#" }} />
      </div>
    </div>
  );
}
