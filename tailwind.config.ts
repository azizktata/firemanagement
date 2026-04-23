import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Tell Tailwind where to look for your classes
content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}", // <-- FIX
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      // 2. Map your custom brand colors
      colors: {
       bg: "#0E0E0E",
    //   accent: "#E63946",
        background: {
          DEFAULT: "#0E0E0E", // --bg
          alt: "#161616",     // --bg-1
          card: "#1E1E1E",    // --bg-2
          input: "#2A2A2A",   // --bg-3
        },
        foreground: {
          DEFAULT: "#F2EFE9", // --fg
          dim: "#A8A29A",     // --fg-dim
          mute: "#6C6860",    // --fg-mute
        },
        accent: {
          DEFAULT: "#E63946", // --accent
          hover: "#FF5A48",   // --accent-2
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.08)", // --line
          strong: "rgba(255,255,255,0.14)", // --line-2
        }
      },
      // 3. Define the typography to match your CSS variables
      fontFamily: {
        sans: ["var(--sans)", "Barlow", "system-ui", "sans-serif"],
        serif: ["var(--serif)", "Cormorant", "serif"],
        mono: ["var(--mono)", "JetBrains Mono", "monospace"],
      },
      // 4. Custom industrial animations
      keyframes: {
        "marquee-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "rise": {
          "0%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
      animation: {
        "marquee-scroll": "marquee-scroll 40s linear infinite",
        "rise": "rise 0.9s cubic-bezier(0.2, 0.7, 0.1, 1) forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;