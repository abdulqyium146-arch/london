"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  BadgePoundSterling,
  Wrench,
  Phone,
  Star,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const reasons = [
  {
    icon: Clock,
    title: "Fast Response, Every Time",
    description:
      "We aim to reach you within 30 minutes across Dulwich and surrounding areas. When you're locked out, waiting isn't an option — so we don't make you.",
  },
  {
    icon: BadgePoundSterling,
    title: "Fixed Prices, No Surprises",
    description:
      "We quote a fixed price before any work begins. No call-out fees hidden in small print, no sudden price increases on the doorstep. You know exactly what you'll pay.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured & Accredited",
    description:
      "Every job is covered by full public liability insurance. We work to British Standard specifications and can supply BS3621 certified locks to satisfy your insurer.",
  },
  {
    icon: Wrench,
    title: "Non-Destructive Entry First",
    description:
      "Our priority is always to open your lock without causing damage. We invest in specialist bypass tools so drilling is a last resort, not a first option.",
  },
  {
    icon: Phone,
    title: "Honest, Direct Communication",
    description:
      "We answer your calls, give you accurate arrival times, and explain exactly what's happening throughout. No automated hold systems, no broken promises.",
  },
  {
    icon: Star,
    title: `${BUSINESS.trustSignals.rating}★ Google Rating`,
    description: `Over ${BUSINESS.trustSignals.reviewCount} genuine reviews from satisfied customers across Dulwich, East Dulwich, Peckham and South London. Our reputation is built on real results.`,
  },
];

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function WhyChooseUs() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="why-choose-heading"
    >
      <div className="container">
        <div className="max-w-2xl mb-12">
          <p className="section-label">
            <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
            Why TrustLock
          </p>
          <h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4"
          >
            What Makes Us Different
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            There&apos;s no shortage of locksmiths in South London. Here&apos;s why our customers
            keep coming back — and recommending us to neighbours.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={itemVariant}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-gold-200 hover:shadow-elegant bg-white transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mb-5 group-hover:bg-gold-100 transition-colors">
                  <Icon size={22} className="text-gold-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{reason.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
