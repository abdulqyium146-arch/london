import Link from "next/link";
import { Phone, MessageSquare, Shield, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  variant?: "gold" | "navy" | "white";
  showTrustSignals?: boolean;
}

export function CTASection({
  heading = "Ready to Get Help?",
  subheading = "Call us for a fast response, or request a free quote and we'll get back to you within the hour.",
  variant = "navy",
  showTrustSignals = true,
}: CTASectionProps) {
  const bgClass =
    variant === "gold"
      ? "bg-gold-gradient"
      : variant === "navy"
      ? "bg-cta-gradient"
      : "bg-white border-t border-slate-100";

  const textClass =
    variant === "white" ? "text-navy-900" : "text-white";

  const subTextClass =
    variant === "white" ? "text-slate-500" : "text-white/70";

  return (
    <section
      className={`py-16 md:py-20 ${bgClass}`}
      aria-label="Contact call to action"
    >
      <div className="container text-center max-w-2xl mx-auto">
        {showTrustSignals && (
          <div className="flex items-center justify-center gap-6 flex-wrap mb-8">
            <div className={`flex items-center gap-1.5 text-sm ${subTextClass}`}>
              <Clock size={15} className="text-gold-400" aria-hidden="true" />
              <span>{BUSINESS.hours.shortFormatted}</span>
            </div>
            <div className={`flex items-center gap-1.5 text-sm ${subTextClass}`}>
              <Shield size={15} className="text-gold-400" aria-hidden="true" />
              <span>Fully Insured</span>
            </div>
            <div className={`flex items-center gap-1.5 text-sm ${subTextClass}`}>
              <span className="text-gold-400 font-bold">{BUSINESS.trustSignals.rating}★</span>
              <span>on Google</span>
            </div>
          </div>
        )}

        <h2
          className={`text-3xl sm:text-4xl font-extrabold ${textClass} mb-4`}
        >
          {heading}
        </h2>
        <p className={`text-lg ${subTextClass} leading-relaxed mb-8`}>{subheading}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS.phoneHref}
            className={`flex items-center gap-3 px-8 py-4 font-bold text-lg rounded-2xl transition-all active:scale-[0.98]
              ${variant === "gold"
                ? "bg-navy-900 text-white hover:bg-navy-800"
                : "bg-gold-500 text-navy-900 hover:bg-gold-400 shadow-gold-lg"
              }`}
            aria-label={`Call us now: ${BUSINESS.phone}`}
          >
            <Phone size={20} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <Link
            href="/contact"
            className={`flex items-center gap-2 px-8 py-4 font-bold text-lg rounded-2xl border-2 transition-all active:scale-[0.98]
              ${variant === "gold"
                ? "border-navy-900/30 text-navy-900 hover:bg-navy-900/10"
                : "border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              }`}
          >
            <MessageSquare size={18} aria-hidden="true" />
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
