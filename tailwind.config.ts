import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "void-black": "var(--color-void-black)",
        "smolder-earth": "var(--color-smolder-earth)",
        "charcoal": "var(--color-charcoal)",
        "bone-white": "var(--color-bone-white)",
        "ash": "var(--color-ash)",
        "driftwood": "var(--color-driftwood)",
      },
      fontFamily: {
        enreal: ["var(--font-enreal)", "sans-serif"],
        ciutadella: ["var(--font-ciutadella)", "sans-serif"],
      },
      letterSpacing: {
        cinematic: "0.042em",
      },
      // Override default border radii globally
      borderRadius: {
        none: '0px',
        sm: '0px',
        DEFAULT: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      }
    },
  },
  plugins: [],
};

export default config;
