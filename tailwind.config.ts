import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "376px",
      },
      fontFamily: {
        nanum: ["NanumSquare"],
      },
      fontWeight: {
        "400": "400",
        "700": "700",
        "800": "800",
      },
    },
  },
  plugins: [],
};
export default config;
