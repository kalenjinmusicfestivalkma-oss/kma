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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "primary-gold": "hsl(var(--primary-gold))",
        "primary-gold-hover": "hsl(var(--primary-gold-hover))",
        "kalenjin-maroon": "hsl(var(--kalenjin-maroon))",
        "kalenjin-green": "hsl(var(--kalenjin-green))",
        surface: "hsl(var(--surface))",
        "surface-hover": "hsl(var(--surface-hover))",
        border: "hsl(var(--border))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, hsl(var(--primary-gold)), #f5e27a)",
      },
    },
  },
  plugins: [],
};

export default config;
