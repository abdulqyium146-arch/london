import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        display: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        navy: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c0d4fe",
          300: "#93b4fc",
          400: "#5f8cf8",
          500: "#3b65f0",
          600: "#2348e5",
          700: "#1b38cc",
          800: "#1e2e9e",
          900: "#0F172A",
          950: "#0a0f1e",
        },
        gold: {
          50: "#fdf9ed",
          100: "#faf1d0",
          200: "#f4e29d",
          300: "#edce63",
          400: "#e8bc3a",
          500: "#C9A84C",
          600: "#b8892a",
          700: "#976625",
          800: "#7d5025",
          900: "#6a4222",
          950: "#3c220e",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #C9A84C 0%, #e8bc3a 50%, #C9A84C 100%)",
        "section-gradient":
          "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      },
      boxShadow: {
        elegant:
          "0 4px 24px -4px rgba(15, 23, 42, 0.08), 0 2px 8px -2px rgba(15, 23, 42, 0.04)",
        "elegant-lg":
          "0 12px 48px -8px rgba(15, 23, 42, 0.12), 0 4px 16px -4px rgba(15, 23, 42, 0.06)",
        "elegant-xl":
          "0 24px 64px -12px rgba(15, 23, 42, 0.16), 0 8px 24px -6px rgba(15, 23, 42, 0.08)",
        gold: "0 4px 24px -4px rgba(201, 168, 76, 0.24)",
        "gold-lg": "0 8px 32px -6px rgba(201, 168, 76, 0.32)",
        "glass": "0 8px 32px 0 rgba(15, 23, 42, 0.12), inset 0 1px 0 rgba(255,255,255,0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#334155",
            a: {
              color: "#C9A84C",
              textDecoration: "underline",
              "&:hover": {
                color: "#b8892a",
              },
            },
            h1: {
              color: "#0F172A",
              fontWeight: "800",
            },
            h2: {
              color: "#0F172A",
              fontWeight: "700",
            },
            h3: {
              color: "#0F172A",
              fontWeight: "600",
            },
            strong: {
              color: "#0F172A",
              fontWeight: "600",
            },
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201, 168, 76, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(201, 168, 76, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [typography],
};

export default config;
