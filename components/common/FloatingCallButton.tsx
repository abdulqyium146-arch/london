"use client";

import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function FloatingCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 inset-x-0 z-50 md:hidden transition-all duration-300",
        visible ? "translate-y-0 visible" : "translate-y-full invisible"
      )}
      role="complementary"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-2 shadow-elegant-xl">
        <a
          href={BUSINESS.phoneHref}
          aria-label={`Call ${BUSINESS.name}: ${BUSINESS.phone}`}
          className="flex items-center justify-center gap-2 py-4 bg-gold-500 text-navy-900 font-bold text-sm active:bg-gold-400 transition-colors"
        >
          <Phone size={18} className="shrink-0" aria-hidden="true" />
          <span className="truncate">Call — {BUSINESS.phone}</span>
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 py-4 bg-navy-900 text-white font-bold text-sm active:bg-navy-800 transition-colors border-l border-navy-800"
        >
          <MessageSquare size={18} className="shrink-0" aria-hidden="true" />
          <span>Free Quote</span>
        </Link>
      </div>
    </div>
  );
}
