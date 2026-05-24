import Link from "next/link";
import { Home, Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="section-padding bg-slate-50 flex items-center justify-center min-h-[60vh]">
      <div className="container max-w-2xl mx-auto text-center">
        <div className="inline-block mb-6">
          <span className="text-8xl font-black text-navy-900/10 select-none" aria-hidden="true">
            404
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed mb-8">
          Sorry, we couldn&apos;t find the page you were looking for. Try navigating back home, or if
          you need a locksmith urgently — just call us directly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-secondary">
            <Home size={16} aria-hidden="true" />
            Back to Home
          </Link>
          <a href={BUSINESS.phoneHref} className="btn-primary">
            <Phone size={16} aria-hidden="true" />
            {BUSINESS.phone}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mx-auto">
          {[
            { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
            { label: "Residential Services", href: "/services/residential-locksmith" },
            { label: "UPVC Lock Repair", href: "/services/upvc-door-lock-repair" },
            { label: "Areas We Cover", href: "/areas" },
            { label: "Contact Us", href: "/contact" },
            { label: "FAQ", href: "/faq" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 p-3 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:border-gold-300 hover:text-navy-900 transition-all"
            >
              <ArrowRight size={12} className="text-gold-500 shrink-0" aria-hidden="true" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
