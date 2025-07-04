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
        small: ["var(--font-size-small)", "var(--line-height-body)"],
        default: ["var(--font-size-body)", "var(--line-height-body)"],
        large: ["var(--font-size-large)", "var(--line-height-body)"],
        heading: ["var(--font-size-heading)", "var(--line-height-headings)"],
        subheading: [
          "var(--font-size-subheading)",
          "var(--line-height-headings)",
        ],
      },
      colors: {
        background: "var(--color-background)",
        select: "var(--color-select)",
        fill: "var(--color-fill)",
        "primary-color": "var(--color-primary)",
        "primary-color-light": "var(--color-primary-light)",
        "secondary-color": "var(--color-secondary)",
        "tertiary-color": "var(--color-tertiary)",
      },

      fontFamily: {
        "commit-mono": ["var(--font-commit-mono)", "monospace"],
        besley: ["var(--font-besley)", "serif"],
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
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
