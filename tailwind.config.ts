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
        background: "var(--background)",
        foreground: "var(--foreground)",
        colr_white: "#f5f7f7",
        colr_white_gray: "#e9f4f4",
        colr_light_gray: "#818798",
        colr_gray: "#2D3242",
        colr_blue: "#2D97F9",
        colr_orange: "#fd4d35",
        colr_aqua: "#02b9c5",
      },
      fontFamily: {
        "pt-root-ui": ['"PT Root UI"', "sans-serif"],
        bebas: ['"Bebas Neue"', "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
