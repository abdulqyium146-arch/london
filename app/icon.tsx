import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Next.js serves this at /icon.png and auto-injects <link rel="icon"> in <head>
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F172A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* Padlock body */}
          <rect x="3" y="12" width="18" height="10" rx="2.5" fill="#C9A84C" />
          {/* Padlock shackle */}
          <path
            d="M7 12V8.5a5 5 0 0 1 10 0V12"
            fill="none"
            stroke="#C9A84C"
            stroke-width="2.5"
            stroke-linecap="round"
          />
          {/* Keyhole */}
          <circle cx="12" cy="17" r="1.5" fill="#0F172A" />
          <rect x="11.25" y="17" width="1.5" height="2.5" rx="0.4" fill="#0F172A" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
