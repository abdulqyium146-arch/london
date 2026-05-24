import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${BUSINESS.name} — Professional Locksmith in Dulwich, South London`;

// Sitewide default OG image used when pages don't declare their own
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Gold accent bar top-left */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "6px",
            height: "100%",
            background: "#C9A84C",
          }}
        />

        {/* Logo mark + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Icon badge */}
          <div
            style={{
              width: "72px",
              height: "72px",
              background: "#C9A84C",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="12" width="18" height="10" rx="2.5" fill="#0F172A" />
              <path
                d="M7 12V8.5a5 5 0 0 1 10 0V12"
                fill="none"
                stroke="#0F172A"
                stroke-width="2.5"
                stroke-linecap="round"
              />
              <circle cx="12" cy="17" r="1.5" fill="#C9A84C" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: "800", letterSpacing: "-0.5px" }}>
              TrustLock
            </span>
            <span style={{ color: "#94A3B8", fontSize: "14px", fontWeight: "500", letterSpacing: "3px", textTransform: "uppercase" }}>
              Locksmith Dulwich
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "58px",
              fontWeight: "900",
              letterSpacing: "-1.5px",
              lineHeight: "1.1",
            }}
          >
            Professional Locksmith
            <br />
            <span style={{ color: "#C9A84C" }}>in Dulwich</span>
          </div>
          <div
            style={{
              color: "#94A3B8",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "1.4",
            }}
          >
            Emergency lockouts · Lock changes · UPVC repairs · South London
          </div>
        </div>

        {/* Bottom bar — trust signals */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "28px",
          }}
        >
          {[
            { label: "Response Time", value: "30 min avg" },
            { label: "Rating", value: "4.9 ★★★★★" },
            { label: "Phone", value: BUSINESS.phone },
            { label: "Hours", value: "9am–8pm Daily" },
          ].map((item) => (
            <div
              key={item.label}
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <span style={{ color: "#64748B", fontSize: "13px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                {item.label}
              </span>
              <span style={{ color: "#FFFFFF", fontSize: "20px", fontWeight: "700" }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
