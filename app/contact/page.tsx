import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { SchemaScript } from "@/components/common/SchemaScript";

export const metadata: Metadata = genMeta({
  title: "Contact TrustLock Locksmith Dulwich | Get a Free Quote",
  description: `Contact TrustLock Locksmith in Dulwich. Call ${BUSINESS.phone} for a fast response, or use our online form to request a free quote. We typically respond within the hour.`,
  path: "/contact",
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact TrustLock Locksmith Dulwich",
  url: "https://trustlocklocksmithdulwich.com/contact",
  mainEntity: {
    "@type": "Locksmith",
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postcode,
      addressCountry: "GB",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <SchemaScript schema={contactSchema} />

      {/* Hero */}
      <section className="bg-hero-gradient text-white py-14 md:py-18">
        <div className="container">
          <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} light className="mb-6" />
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Call us directly for the fastest response, or fill in the form and we&apos;ll get back to
              you within the hour.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-slate-50" aria-labelledby="contact-form-heading">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {/* Contact details */}
            <aside className="lg:col-span-2 space-y-5" aria-label="Contact information">
              <div className="bg-navy-900 rounded-2xl p-6 text-white">
                <h2 className="text-lg font-bold mb-5">Contact Details</h2>
                <ul className="space-y-5" role="list">
                  <li>
                    <a
                      href={BUSINESS.phoneHref}
                      className="flex items-start gap-3 group"
                      aria-label={`Call: ${BUSINESS.phone}`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-gold-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold-500/30 transition-colors">
                        <Phone size={16} className="text-gold-400" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-white/40 font-medium mb-0.5">Phone</p>
                        <p className="font-bold text-gold-400 group-hover:text-gold-300 transition-colors text-lg">
                          {BUSINESS.phone}
                        </p>
                        <p className="text-xs text-white/40 mt-0.5">Fastest response</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={BUSINESS.emailHref}
                      className="flex items-start gap-3 group"
                      aria-label={`Email: ${BUSINESS.email}`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/15 transition-colors">
                        <Mail size={16} className="text-white/50" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-white/40 font-medium mb-0.5">Email</p>
                        <p className="text-sm text-white/80 group-hover:text-white transition-colors break-all">
                          {BUSINESS.email}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={16} className="text-white/50" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 font-medium mb-0.5">Address</p>
                      <address className="text-sm text-white/80 not-italic leading-relaxed">
                        {BUSINESS.address.street}<br />
                        {BUSINESS.address.city}, {BUSINESS.address.postcode}
                      </address>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={16} className="text-white/50" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 font-medium mb-0.5">Hours</p>
                      <p className="text-sm text-white/80">{BUSINESS.hours.days}</p>
                      <p className="text-sm font-semibold text-gold-400">{BUSINESS.hours.formatted}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <h3 className="font-bold text-navy-900 mb-3">Areas We Cover</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Dulwich, East Dulwich, Peckham, Camberwell, Brixton, Herne Hill, Southwark, and
                  surrounding South London postcodes.
                </p>
                <Link
                  href="/areas"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-500 transition-colors mt-3"
                >
                  View all areas →
                </Link>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.828039335503!2d-0.07849170000000001!3d51.4613136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603908dadd0bd%3A0xf6d92f30c2fca855!2s46%20Grove%20Vale%2C%20London%20SE22%208DY%2C%20UK!5e0!3m2!1sen!2s!4v1779642750008!5m2!1sen!2s"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TrustLock Locksmith — 46 Grove Vale, London SE22 8DY"
                  aria-label="Google Maps showing TrustLock Locksmith location at 46 Grove Vale, Dulwich SE22 8DY"
                />
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-elegant">
                <h2 id="contact-form-heading" className="text-2xl font-bold text-navy-900 mb-2">
                  Request a Free Quote
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Fill in the details below and we&apos;ll be in touch within the hour. We&apos;re available 24/7.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
