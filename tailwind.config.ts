import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a",

        primary: {
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
          light: "#dbeafe",
        },

        muted: "#64748b",
        surface: "#f8fafc",
        border: "#e2e8f0",
      },

      animation: {
        marquee: "marquee 45s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
}

export default config
