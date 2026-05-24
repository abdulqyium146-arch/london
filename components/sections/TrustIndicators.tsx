import { TrustBadges } from "@/components/common/TrustBadges";

interface TrustIndicatorsProps {
  variant?: "light" | "dark";
}

export function TrustIndicators({ variant = "light" }: TrustIndicatorsProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`section-padding-sm ${isDark ? "bg-navy-900" : "bg-white border-y border-slate-100"}`}
      aria-label="Trust and accreditation indicators"
    >
      <div className="container">
        <p
          className={`text-center text-xs font-semibold uppercase tracking-widest mb-8 ${
            isDark ? "text-white/40" : "text-slate-400"
          }`}
        >
          Why over {" "}
          <strong className={isDark ? "text-gold-400" : "text-navy-900"}>5,000 South Londoners</strong>
          {" "} have trusted us
        </p>
        <TrustBadges variant={variant} />
      </div>
    </section>
  );
}
