import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        black: "var(--black)",
        charcoal: "var(--charcoal)",
        graphite: "var(--graphite)",
        mist: "var(--mist)",
        ivory: "var(--ivory)",
        "soft-white": "var(--soft-white)",
        mint: "var(--mint)",
        "mint-deep": "var(--mint-deep)",
        lime: "var(--lime)",
        cyan: "var(--cyan)",
        amber: "var(--amber)",
        coral: "var(--coral)",
        magenta: "var(--magenta)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        site: "1400px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
