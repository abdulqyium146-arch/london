import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${BUSINESS.name} — Professional Locksmith in Dulwich, South London`;

/*
  satori rules (enforced by @vercel/og):
  - Every <div> with 2+ children needs display:"flex" explicitly
  - No <br/> — use flex column with separate spans instead
  - No Unicode characters that require dynamic font download (e.g. ★ U+2605)
  - SVG attributes must be camelCase (strokeWidth, strokeLinecap, etc.)
  - No position:absolute unless inside a position:relative flex parent
*/
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
          padding: "60px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Lock icon mark */}
          <div
            style={{
              width: "68px",
              height: "68px",
              background: "#C9A84C",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0px",
            }}
          >
            {/* Shackle */}
            <div
              style={{
                width: "22px",
                height: "14px",
                border: "4px solid #0F172A",
                borderBottom: "none",
                borderRadius: "12px 12px 0 0",
                display: "flex",
              }}
            />
            {/* Lock body */}
            <div
              style={{
                width: "34px",
                height: "22px",
                background: "#0F172A",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  background: "#C9A84C",
                  borderRadius: "50%",
                  display: "flex",
                }}
              />
            </div>
          </div>

          {/* Brand text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "30px",
                fontWeight: "800",
                letterSpacing: "-0.5px",
              }}
            >
              TrustLock
            </span>
            <span
              style={{
                color: "#94A3B8",
                fontSize: "13px",
                fontWeight: "500",
                letterSpacing: "3px",
              }}
            >
              LOCKSMITH DULWICH
            </span>
          </div>
        </div>

        {/* Main headline — two separate spans in a flex column, no <br/> */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "62px",
                fontWeight: "900",
                letterSpacing: "-2px",
                lineHeight: "1.05",
              }}
            >
              Professional Locksmith
            </span>
            <span
              style={{
                color: "#C9A84C",
                fontSize: "62px",
                fontWeight: "900",
                letterSpacing: "-2px",
                lineHeight: "1.05",
              }}
            >
              in Dulwich
            </span>
          </div>
          <span
            style={{
              color: "#94A3B8",
              fontSize: "22px",
              fontWeight: "400",
              marginTop: "8px",
            }}
          >
            Emergency lockouts · Lock changes · UPVC repairs · South London
          </span>
        </div>

        {/* Trust bar — avoid ★ (U+2605) which triggers dynamic font 400 error */}
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
            { label: "RESPONSE TIME", value: "30 min avg" },
            { label: "RATING", value: "4.9 / 5.0" },
            { label: "PHONE", value: BUSINESS.phone },
            { label: "HOURS", value: "9am-8pm Daily" },
          ].map((item) => (
            <div
              key={item.label}
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <span
                style={{
                  color: "#64748B",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
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
