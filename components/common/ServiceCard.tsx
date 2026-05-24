import Link from "next/link";
import {
  AlertCircle,
  Home,
  Building2,
  Car,
  Wrench,
  Lock,
  DoorOpen,
  ShieldAlert,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  AlertCircle,
  Home,
  Building2,
  Car,
  Wrench,
  Lock,
  DoorOpen,
  ShieldAlert,
  Smartphone,
};

interface ServiceCardProps {
  slug: string;
  title: string;
  shortTitle: string;
  intro: string;
  icon: string;
  priceFrom: string;
  emergencyService?: boolean;
  className?: string;
  variant?: "default" | "compact" | "featured";
}

export function ServiceCard({
  slug,
  title,
  shortTitle,
  intro,
  icon,
  priceFrom,
  emergencyService,
  className,
  variant = "default",
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Lock;
  const href = `/services/${slug}`;

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className={cn(
          "group flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-gold-200 hover:shadow-elegant transition-all duration-200",
          className
        )}
        aria-label={`Learn about our ${shortTitle} service`}
      >
        <div className="shrink-0 w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center group-hover:bg-gold-100 transition-colors">
          <IconComponent size={20} className="text-gold-600" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-navy-900 text-sm truncate">{shortTitle}</p>
          <p className="text-xs text-slate-500 mt-0.5">From {priceFrom}</p>
        </div>
        <ArrowRight
          size={16}
          className="text-slate-300 group-hover:text-gold-500 group-hover:translate-x-1 transition-all shrink-0"
          aria-hidden="true"
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-gold-200 hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1",
        className
      )}
      aria-label={`Learn about our ${title} service`}
    >
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center group-hover:bg-gold-100 transition-colors">
            <IconComponent size={24} className="text-gold-600" aria-hidden="true" />
          </div>
          {emergencyService && (
            <span className="badge-gold text-[10px] uppercase tracking-wider">Emergency</span>
          )}
        </div>
        <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-700 transition-colors">
          {shortTitle}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{intro}</p>
      </div>
      <div className="px-6 pb-5 flex items-center justify-between">
        <span className="text-sm font-semibold text-navy-900">
          From{" "}
          <span className="text-gold-600">{priceFrom}</span>
        </span>
        <span className="flex items-center gap-1 text-sm font-semibold text-gold-600 group-hover:gap-2 transition-all">
          Learn more
          <ArrowRight size={14} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
