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
        farm: {
          green: "#0b5d2a",
          "green-dark": "#073d1d",
          "green-light": "#14833d",
          gold: "#c69b4a",
          "gold-light": "#e9d39f",
          cream: "#f7f7f2",
          ink: "#172019",
          muted: "#68736b",
          line: "#e4e8e3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1240px",
      },
      boxShadow: {
        soft: "0 14px 40px rgba(15,35,20,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
