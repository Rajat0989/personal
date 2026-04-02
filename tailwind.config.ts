import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ["var(--font-size-sm)", "var(--line-height-sm)"],
        base: ["var(--font-size-base)", "var(--line-height-sm)"],
        md: ["var(--font-size-md)", "var(--line-height-sm)"],
        lg: ["var(--font-size-lg)", "var(--line-height-sm)"],
        xl: ["var(--font-size-xl)", "var(--line-height-sm)"],
        "2xl": ["var(--font-size-2xl)", "var(--line-height-sm)"],
      },
      colors: {
        "primary-color": "var(--color-primary)",
        "secondary-color": "var(--color-secondary)",
        "tertiary-color": "var(--color-tertiary)",
        "primary-color-dark": "var(--color-primary-dark)",
        "secondary-color-dark": "var(--color-secondary-dark)",
        "tertiary-color-dark": "var(--color-tertiary-dark)",
        select: "var(--color-select)",
      },

      fontFamily: {
        "azeret-mono": ["var(--font-azeret-mono)", "monospace"],
        "tiempos-text": ["var(--font-tiempos-text)", "serif"],
        schibsted: ["var(--font-schibsted-grotesk)", "sans"],
      },
      letterSpacing: {
        narrow: "-0.005em",
        wide: "0.01em",
      },
      maxWidth: {
        default: "var(--max-width-default)",
      },
      boxShadow: {
        line: "inset 0 0.05rem 0 0 var(--color-tertiary)",
        "inset-tertiary": "inset 0 0 0 0.05rem var(--color-tertiary)",
        "inset-primary": "inset 0 0 0 0.05rem var(--color-primary)",
      },
      ringColor: {
        DEFAULT: "var(--color-tertiary)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
