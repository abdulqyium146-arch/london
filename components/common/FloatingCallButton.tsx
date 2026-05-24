"use client";

import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function FloatingCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300 md:hidden",
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      )}
      aria-hidden={!visible}
    >
      <a
        href={BUSINESS.phoneHref}
        aria-label={`Call ${BUSINESS.name}: ${BUSINESS.phone}`}
        className="flex items-center gap-3 px-5 py-4 bg-gold-500 text-navy-900 font-bold rounded-full shadow-gold-lg hover:bg-gold-400 active:scale-95 transition-all duration-200 animate-pulse-gold"
      >
        <Phone size={20} className="shrink-0" aria-hidden="true" />
        <span className="text-sm font-bold tracking-wide">Call Now</span>
      </a>
    </div>
  );
}
