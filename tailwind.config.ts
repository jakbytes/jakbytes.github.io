import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#000d3c",
        secondary: "#E2E8F0",
        text_primary: "#F8FAFC",
        text_secondary: "#CBD5E1",
        header_text: "#FFFFFF",
        card_bg: "#FFFFFF",
        buttons: "#1641f6",
        buttons_hover: "#3B82F6",
        original_bg: "#F8FAFC",
        original_text: "#111827",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        main: ["Roboto", "sans-serif"],
       // ahn: ['Atkinson Hyperlegible Next', 'serif'],
      },
    },
  },
  plugins: [
      require('flowbite/plugin'),
      flowbite.plugin(),
  ],
};
export default config;
