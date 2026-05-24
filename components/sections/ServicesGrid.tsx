"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/common/ServiceCard";
import { services } from "@/lib/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function ServicesGrid() {
  return (
    <section
      className="section-padding bg-slate-50"
      aria-labelledby="services-heading"
    >
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-label">
            <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4"
          >
            Professional Locksmith Services
            <br className="hidden sm:block" />
            <span className="text-gold-500"> in South London</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From emergency lockouts to full home security upgrades — everything handled by
            experienced, insured locksmiths you can trust.
          </p>
        </div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={cardVariant}>
              <ServiceCard
                slug={service.slug}
                title={service.title}
                shortTitle={service.shortTitle}
                intro={service.intro}
                icon={service.icon}
                priceFrom={service.priceFrom}
                emergencyService={service.emergencyService}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/services/emergency-locksmith"
            className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-500 transition-colors"
          >
            Need help fast? View our emergency service
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
