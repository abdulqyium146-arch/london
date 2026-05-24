"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SchemaScript } from "@/components/common/SchemaScript";
import { generateFAQSchema } from "@/lib/schema/faq";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
  subheading?: string;
  variant?: "light" | "dark";
  includeSchema?: boolean;
}

function FAQAccordionItem({
  faq,
  isOpen,
  onToggle,
  index,
  variant,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  variant: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const id = `faq-answer-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-200",
        isDark
          ? isOpen
            ? "bg-white/10 border-white/20"
            : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/15"
          : isOpen
          ? "bg-white border-gold-200 shadow-elegant"
          : "bg-white border-slate-100 hover:border-slate-200"
      )}
    >
      <button
        id={buttonId}
        className={cn(
          "w-full flex items-center justify-between gap-4 p-5 text-left",
          "focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-inset rounded-2xl"
        )}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span
          className={cn(
            "text-sm font-semibold leading-snug flex-1",
            isDark ? "text-white" : "text-navy-900"
          )}
        >
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 transition-transform duration-300",
            isOpen ? "rotate-180" : "",
            isDark ? "text-white/50" : "text-slate-400"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p
          className={cn(
            "px-5 pb-5 text-sm leading-relaxed",
            isDark ? "text-white/60" : "text-slate-500"
          )}
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection({
  faqs,
  heading = "Frequently Asked Questions",
  subheading,
  variant = "light",
  includeSchema = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const schema = generateFAQSchema(faqs);
  const isDark = variant === "dark";

  return (
    <section
      className={cn("section-padding", isDark ? "bg-navy-900" : "bg-slate-50")}
      aria-labelledby="faq-heading"
    >
      {includeSchema && <SchemaScript schema={schema} />}
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className={cn("section-label", isDark ? "text-gold-400" : "")}>
            <span className="w-6 h-px bg-gold-500" aria-hidden="true" />
            Common Questions
          </p>
          <h2
            id="faq-heading"
            className={cn(
              "text-3xl sm:text-4xl font-extrabold mb-4",
              isDark ? "text-white" : "text-navy-900"
            )}
          >
            {heading}
          </h2>
          {subheading && (
            <p className={cn("text-lg", isDark ? "text-white/60" : "text-slate-500")}>
              {subheading}
            </p>
          )}
        </div>

        <div className="space-y-3" role="list">
          {faqs.map((faq, i) => (
            <div key={faq.question} role="listitem">
              <FAQAccordionItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
                variant={variant}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
