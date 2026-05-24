import { ShieldCheck, Star, Award, Clock, ThumbsUp, BadgeCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface TrustBadge {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface TrustBadgesProps {
  variant?: "light" | "dark";
  compact?: boolean;
}

export function TrustBadges({ variant = "light", compact = false }: TrustBadgesProps) {
  const isDark = variant === "dark";

  const badges: TrustBadge[] = [
    {
      icon: <Star size={compact ? 16 : 20} className="text-gold-500" aria-hidden="true" />,
      label: "Google Rating",
      value: `${BUSINESS.trustSignals.rating}/5`,
    },
    {
      icon: <ShieldCheck size={compact ? 16 : 20} className="text-gold-500" aria-hidden="true" />,
      label: "Fully Insured",
      value: "Liability Insurance",
    },
    {
      icon: <Clock size={compact ? 16 : 20} className="text-gold-500" aria-hidden="true" />,
      label: "Response Time",
      value: `${BUSINESS.trustSignals.responseTime} Min Avg`,
    },
    {
      icon: <Award size={compact ? 16 : 20} className="text-gold-500" aria-hidden="true" />,
      label: "Experience",
      value: `${BUSINESS.trustSignals.yearsExperience} Years`,
    },
    {
      icon: <ThumbsUp size={compact ? 16 : 20} className="text-gold-500" aria-hidden="true" />,
      label: "Jobs Completed",
      value: BUSINESS.trustSignals.jobsCompleted,
    },
    {
      icon: <BadgeCheck size={compact ? 16 : 20} className="text-gold-500" aria-hidden="true" />,
      label: "Insurance Approved",
      value: "BS3621 Certified",
    },
  ];

  if (compact) {
    return (
      <div className="flex flex-wrap gap-3">
        {badges.slice(0, 4).map((badge) => (
          <div
            key={badge.label}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
              ${isDark ? "bg-white/10 text-white border border-white/20" : "bg-slate-100 text-slate-700 border border-slate-200"}`}
          >
            {badge.icon}
            <span>{badge.value}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className={`flex flex-col items-center text-center gap-2 p-4 rounded-2xl border transition-all duration-200
            ${isDark
              ? "bg-white/5 border-white/10 hover:bg-white/10"
              : "bg-white border-slate-100 hover:border-gold-200 hover:shadow-elegant shadow-sm"
            }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center
              ${isDark ? "bg-gold-500/20" : "bg-gold-50"}`}
          >
            {badge.icon}
          </div>
          <div>
            <p className={`text-base font-bold ${isDark ? "text-white" : "text-navy-900"}`}>
              {badge.value}
            </p>
            <p className={`text-xs mt-0.5 ${isDark ? "text-white/60" : "text-slate-500"}`}>
              {badge.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
