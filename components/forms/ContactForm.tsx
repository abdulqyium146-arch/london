"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter a valid UK phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  area: z.string().min(1, "Please enter your area or postcode"),
  message: z.string().min(10, "Please describe your situation briefly").max(1000),
  urgency: z.enum(["emergency", "today", "flexible"]),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Emergency Lockout",
  "Lock Repair",
  "Lock Installation / Replacement",
  "UPVC Door Lock Repair",
  "Burglary Repair",
  "Smart Lock Installation",
  "Residential Security Assessment",
  "Commercial Locksmith",
  "Automotive Locksmith",
  "Other",
];

interface ContactFormProps {
  className?: string;
  variant?: "light" | "dark";
}

export function ContactForm({ className, variant = "light" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const isDark = variant === "dark";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { urgency: "flexible" },
  });

  async function onSubmit(data: FormData) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass = cn(
    "input-field",
    isDark && "bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:ring-gold-400"
  );
  const labelClass = cn("label", isDark && "text-white/80");
  const errorClass = "error-text";

  if (status === "success") {
    return (
      <div className={cn("flex flex-col items-center justify-center text-center gap-4 py-12", className)}>
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" aria-hidden="true" />
        </div>
        <div>
          <h3 className={cn("text-xl font-bold mb-2", isDark ? "text-white" : "text-navy-900")}>
            Message Received!
          </h3>
          <p className={cn("text-sm", isDark ? "text-white/60" : "text-slate-500")}>
            We&apos;ll get back to you within the hour. For urgent situations, please call us directly.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-gold-500 hover:text-gold-400 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-5", className)}
      noValidate
      aria-label="Contact form"
    >
      {/* Name and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className={errorClass} role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="07XXX XXXXXX"
            className={inputClass}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className={errorClass} role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email and Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-slate-400 font-normal text-xs">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </div>
        <div>
          <label htmlFor="area" className={labelClass}>
            Your Area / Postcode <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            id="area"
            type="text"
            placeholder="e.g. East Dulwich, SE22"
            className={inputClass}
            aria-invalid={!!errors.area}
            aria-describedby={errors.area ? "area-error" : undefined}
            {...register("area")}
          />
          {errors.area && (
            <p id="area-error" className={errorClass} role="alert">
              {errors.area.message}
            </p>
          )}
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelClass}>
          Service Required <span className="text-red-500" aria-label="required">*</span>
        </label>
        <select
          id="service"
          className={cn(inputClass, "appearance-none bg-no-repeat")}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          {...register("service")}
        >
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className={errorClass} role="alert">
            {errors.service.message}
          </p>
        )}
      </div>

      {/* Urgency */}
      <div>
        <span className={cn("label block mb-2", isDark && "text-white/80")}>Urgency</span>
        <div className="flex gap-2 flex-wrap" role="radiogroup" aria-label="Urgency level">
          {(
            [
              { value: "emergency", label: "Emergency — ASAP" },
              { value: "today", label: "Today if possible" },
              { value: "flexible", label: "I'm flexible" },
            ] as const
          ).map(({ value, label }) => (
            <label
              key={value}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 cursor-pointer text-sm font-medium transition-all",
                isDark
                  ? "border-white/20 text-white/70 hover:border-gold-400 hover:text-white [&:has(input:checked)]:border-gold-400 [&:has(input:checked)]:bg-gold-400/10 [&:has(input:checked)]:text-gold-300"
                  : "border-slate-200 text-slate-600 hover:border-gold-400 hover:text-navy-900 [&:has(input:checked)]:border-gold-500 [&:has(input:checked)]:bg-gold-50 [&:has(input:checked)]:text-navy-900"
              )}
            >
              <input
                type="radio"
                value={value}
                className="sr-only"
                {...register("urgency")}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Describe Your Situation <span className="text-red-500" aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Please describe your situation briefly — e.g. locked out, need lock change, UPVC door not locking…"
          className={cn(inputClass, "resize-none")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className={errorClass} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Error state */}
      {status === "error" && (
        <div
          className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm"
          role="alert"
        >
          <AlertCircle size={16} aria-hidden="true" />
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all",
          "bg-gold-500 text-navy-900 hover:bg-gold-400 active:scale-[0.98] shadow-gold",
          "disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100",
          "focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
        )}
        aria-label={status === "submitting" ? "Sending message…" : "Send message"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>

      <p className={cn("text-xs text-center", isDark ? "text-white/40" : "text-slate-400")}>
        We typically respond within 1 hour during opening hours.
        By submitting this form you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-gold-500 transition-colors">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
