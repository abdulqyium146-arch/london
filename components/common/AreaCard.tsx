import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AreaCardProps {
  name: string;
  slug: string;
  postcode: string;
  description: string;
  landmark: string;
  className?: string;
  compact?: boolean;
}

export function AreaCard({
  name,
  slug,
  postcode,
  description,
  landmark,
  className,
  compact = false,
}: AreaCardProps) {
  const href = `/areas/${slug}`;

  if (compact) {
    return (
      <Link
        href={href}
        className={cn(
          "group flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-200",
          className
        )}
        aria-label={`Locksmith services in ${name}`}
      >
        <MapPin size={16} className="text-gold-400 shrink-0" aria-hidden="true" />
        <span className="text-white font-medium text-sm">{name}</span>
        <ArrowRight
          size={14}
          className="text-white/40 group-hover:text-gold-400 ml-auto group-hover:translate-x-1 transition-all shrink-0"
          aria-hidden="true"
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col bg-white rounded-2xl border border-slate-100 p-6 hover:border-gold-200 hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-0.5",
        className
      )}
      aria-label={`Locksmith services in ${name}, ${postcode}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gold-50 flex items-center justify-center group-hover:bg-gold-100 transition-colors">
            <MapPin size={18} className="text-gold-600" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-bold text-navy-900 group-hover:text-gold-700 transition-colors">
              {name}
            </h3>
            <p className="text-xs text-slate-400 font-mono">{postcode}</p>
          </div>
        </div>
        <ArrowRight
          size={16}
          className="text-slate-300 group-hover:text-gold-500 group-hover:translate-x-1 transition-all mt-1 shrink-0"
          aria-hidden="true"
        />
      </div>
      <p className="text-sm text-slate-500 leading-relaxed mb-3">{description}</p>
      <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-slate-50">
        <MapPin size={12} className="text-slate-300 shrink-0" aria-hidden="true" />
        <span className="text-xs text-slate-400">Near {landmark}</span>
      </div>
    </Link>
  );
}
