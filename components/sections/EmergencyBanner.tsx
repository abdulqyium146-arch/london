import { Phone, Zap } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface EmergencyBannerProps {
  message?: string;
}

export function EmergencyBanner({
  message = "Locked out? Need an emergency locksmith?",
}: EmergencyBannerProps) {
  return (
    <section
      className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 py-4"
      aria-label="Emergency locksmith contact"
      role="complementary"
    >
      <div className="container flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
        <div className="flex items-center gap-2 text-navy-900">
          <Zap size={18} className="shrink-0" aria-hidden="true" />
          <p className="font-semibold text-sm sm:text-base">{message}</p>
        </div>
        <a
          href={BUSINESS.phoneHref}
          className="flex items-center gap-2 px-5 py-2.5 bg-navy-900 text-white rounded-xl font-bold text-sm hover:bg-navy-800 active:scale-95 transition-all shadow-md whitespace-nowrap"
          aria-label={`Call our emergency line: ${BUSINESS.phone}`}
        >
          <Phone size={15} aria-hidden="true" />
          {BUSINESS.phone}
        </a>
      </div>
    </section>
  );
}
