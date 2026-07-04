import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "rgba(255,255,255,0.06)",
        "border-hover": "rgba(255,255,255,0.12)",
        background: "#09090b",
        foreground: "#fafafa",
        muted: {
          DEFAULT: "#71717a",
          foreground: "#a1a1aa",
        },
        accent: {
          DEFAULT: "#3b82f6",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#141416",
          foreground: "#fafafa",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
      },
      maxWidth: {
        content: "1120px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
}

export default config
