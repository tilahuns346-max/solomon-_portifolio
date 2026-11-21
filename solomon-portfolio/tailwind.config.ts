import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          green: "#10b981", // vibrant emerald
          lime: "#22c55e",  // vivid lime green
          cyan: "#06b6d4",  // vivid cyan
          teal: "#14b8a6",  // futuristic teal
          glow: "#34d399",  // soft glowing green
        },
        dark: {
          950: "#090d16",
          900: "#0d1117",
          850: "#121824",
          800: "#161b26",
          700: "#21283b",
        }
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2.5s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 15px rgba(16, 185, 129, 0.3))" },
          "100%": { filter: "drop-shadow(0 0 25px rgba(6, 182, 212, 0.6))" },
        },
      },
      boxShadow: {
        "neon-green": "0 0 20px -2px rgba(16, 185, 129, 0.35)",
        "neon-cyan": "0 0 20px -2px rgba(6, 182, 212, 0.35)",
        "neon-glow": "0 0 35px -5px rgba(16, 185, 129, 0.3), 0 0 15px -3px rgba(6, 182, 212, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
