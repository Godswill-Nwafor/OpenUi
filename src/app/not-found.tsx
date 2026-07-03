import Link from "next/link";
import { Layers, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-6">
        <Layers size={28} />
      </div>
      <p className="text-7xl font-bold gradient-text mb-4">404</p>
      <h1 className="text-2xl font-bold mb-3">Page not found</h1>
      <p className="text-muted-foreground max-w-sm mb-8">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-xl border border-border text-sm font-medium hover:bg-card transition-colors"
        >
          <ArrowLeft size={15} /> Go Home
        </Link>
        <Link
          href="/components"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-brand text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand/20"
        >
          <Search size={15} /> Browse Components
        </Link>
      </div>
    </div>
  );
}
