import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Star,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
} from "lucide-react";
import { BUSINESS, NAVIGATION, AREAS } from "@/lib/constants";
import { services } from "@/lib/data/services";

export function Footer() {
  const servicesNav = NAVIGATION.find((n) => n.label === "Services");

  return (
    <footer className="bg-navy-900 text-white" role="contentinfo">
      {/* Main footer */}
      <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label={`${BUSINESS.name} — Home`}>
            <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center">
              <Shield size={20} className="text-navy-900" aria-hidden="true" />
            </div>
            <div>
              <span className="block text-lg font-extrabold tracking-tight">TrustLock</span>
              <span className="block text-[10px] text-white/50 tracking-widest uppercase">
                Locksmith Dulwich
              </span>
            </div>
          </Link>

          <p className="text-white/60 text-sm leading-relaxed mb-5">
            Professional locksmith services in Dulwich and South London. Fully insured,
            insurance-approved locks fitted, and honest pricing every time.
          </p>

          {/* Trust signals */}
          <div className="flex items-center gap-1.5 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} className="fill-gold-400 text-gold-400" aria-hidden="true" />
            ))}
            <span className="text-sm font-semibold text-white ml-1">
              {BUSINESS.trustSignals.rating}
            </span>
            <span className="text-white/40 text-xs">
              ({BUSINESS.trustSignals.reviewCount} reviews)
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS.socialMedia.facebook}
              className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold-500/20 hover:text-gold-400 transition-colors"
              aria-label="TrustLock on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={16} aria-hidden="true" />
            </a>
            <a
              href={BUSINESS.socialMedia.twitter}
              className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold-500/20 hover:text-gold-400 transition-colors"
              aria-label="TrustLock on Twitter/X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={16} aria-hidden="true" />
            </a>
            <a
              href={BUSINESS.socialMedia.instagram}
              className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold-500/20 hover:text-gold-400 transition-colors"
              aria-label="TrustLock on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">
            Our Services
          </h3>
          <ul className="space-y-2.5" role="list">
            {servicesNav &&
              "children" in servicesNav &&
              servicesNav.children.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-gold-400 transition-colors"
                  >
                    <ChevronRight size={12} className="text-gold-500/50 shrink-0" aria-hidden="true" />
                    {s.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Areas covered */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">
            Areas We Cover
          </h3>
          <ul className="space-y-2.5" role="list">
            {[
              { label: "Dulwich", href: "/areas/dulwich" },
              { label: "East Dulwich", href: "/areas/east-dulwich" },
              { label: "Peckham", href: "/areas/peckham" },
              { label: "Camberwell", href: "/areas/camberwell" },
              { label: "Brixton", href: "/areas/brixton" },
              { label: "Herne Hill", href: "/areas/herne-hill" },
              { label: "Southwark", href: "/areas/southwark" },
            ].map((area) => (
              <li key={area.href}>
                <Link
                  href={area.href}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-gold-400 transition-colors"
                >
                  <ChevronRight size={12} className="text-gold-500/50 shrink-0" aria-hidden="true" />
                  {area.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/areas"
                className="flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 font-medium transition-colors mt-1"
              >
                <ChevronRight size={12} aria-hidden="true" />
                View all areas →
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">
            Contact Us
          </h3>

          <ul className="space-y-4" role="list">
            <li>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-start gap-3 group"
                aria-label={`Phone: ${BUSINESS.phone}`}
              >
                <Phone
                  size={16}
                  className="text-gold-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs text-white/40 font-medium">Phone</p>
                  <p className="text-sm font-bold text-white group-hover:text-gold-400 transition-colors">
                    {BUSINESS.phone}
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.emailHref}
                className="flex items-start gap-3 group"
                aria-label={`Email: ${BUSINESS.email}`}
              >
                <Mail
                  size={16}
                  className="text-gold-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs text-white/40 font-medium">Email</p>
                  <p className="text-sm text-white/80 group-hover:text-white transition-colors break-all">
                    {BUSINESS.email}
                  </p>
                </div>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs text-white/40 font-medium">Address</p>
                <address className="text-sm text-white/80 not-italic leading-relaxed">
                  {BUSINESS.address.street},<br />
                  {BUSINESS.address.city},{" "}
                  {BUSINESS.address.postcode}
                </address>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} className="text-gold-400 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs text-white/40 font-medium">Opening Hours</p>
                <p className="text-sm text-white/80">{BUSINESS.hours.days}</p>
                <p className="text-sm font-semibold text-gold-400">{BUSINESS.hours.formatted}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Service × Area coverage grid — sitewide contextual links */}
      <div className="border-t border-white/10 py-10">
        <div className="container">
          <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">
            Locksmith Services Across South London
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-1">
            {services.flatMap((service) =>
              AREAS.map((area) => (
                <Link
                  key={`${service.slug}-${area.slug}`}
                  href={`/services/${service.slug}`}
                  className="text-xs text-white/30 hover:text-gold-400 transition-colors leading-relaxed py-0.5"
                >
                  {service.shortTitle} {area.name}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.{" "}
            {BUSINESS.address.full}.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex items-center gap-4 sm:gap-6" role="list">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Sitemap", href: "/sitemap-html" },
                { label: "XML Sitemap", href: "/sitemap.xml" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/40 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="container pb-5 flex justify-center">
          <p className="text-xs text-white/30">
            Powered by{" "}
            <a
              href="https://smallbusinessmarketingprofessional.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-gold-400 transition-colors font-medium"
            >
              Small Business Marketing Professional
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
