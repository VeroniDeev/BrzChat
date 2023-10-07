import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "1/20": "3%",
      },
      boxShadow: {
        "separate-top": "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
        "separate-bottom": "0px -2px 10px 0px rgba(0, 0, 0, 0.25)",
        "separate-bottom-inset": "0px -4px 10px 0px rgba(0, 0, 0, 0.25) inset",
      },
    },
  },
  plugins: [],
};
export default config;
