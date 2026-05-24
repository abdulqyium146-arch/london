"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Unlock, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Call Us",
    description:
      "Ring our direct number. We answer promptly, ask a few quick questions about your situation, and give you a fixed price before we set off.",
    detail: "We'll confirm your address and let you know exactly when to expect us.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "We Arrive",
    description:
      "Our locksmith comes directly to you — home, business, car park or roadside. We carry a comprehensive toolkit to handle almost any situation on arrival.",
    detail: "Average arrival time: 30 minutes across Dulwich and South London.",
  },
  {
    number: "03",
    icon: Unlock,
    title: "Problem Solved",
    description:
      "We assess the situation and use the most appropriate technique to resolve it. Non-destructive entry wherever possible. We work cleanly and efficiently.",
    detail: "Most lockouts are resolved in under 20 minutes once we're on-site.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "You're Secure",
    description:
      "Before we leave, we check everything is working correctly and advise on any security upgrades worth considering. No hard sell — just honest advice.",
    detail: "We provide an invoice and documentation for insurance claims if needed.",
  },
];

export function ProcessTimeline() {
  return (
    <section
      className="section-padding bg-navy-900 text-white"
      aria-labelledby="process-heading"
    >
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label text-gold-400">
            <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
            How It Works
          </p>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            From Your Call to Your Door
            <br />
            <span className="text-gold-400">in 4 Simple Steps</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We&apos;ve handled thousands of jobs across South London. Here&apos;s exactly what
            happens when you call TrustLock.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div
            className="absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold-500/0 via-gold-500/40 to-gold-500/0"
            aria-hidden="true"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center px-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative mb-6 w-[104px] h-[104px]">
                  <div className="absolute inset-0 rounded-full bg-gold-500/10 border border-gold-500/20" />
                  <div className="absolute inset-3 rounded-full bg-gold-500/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={28} className="text-gold-400" aria-hidden="true" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold-500 flex items-center justify-center">
                    <span className="text-navy-900 text-[10px] font-black">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-3">{step.description}</p>
                <p className="text-gold-400/70 text-xs italic">{step.detail}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="flex gap-4"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center shrink-0 relative">
                    <Icon size={20} className="text-gold-400" aria-hidden="true" />
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center">
                      <span className="text-navy-900 text-[9px] font-black">{step.number}</span>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-gradient-to-b from-gold-500/30 to-transparent min-h-8" aria-hidden="true" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="text-lg font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-1">{step.description}</p>
                  <p className="text-gold-400/70 text-xs italic">{step.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
