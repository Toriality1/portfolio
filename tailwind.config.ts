import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#222831",
        "main-darker": "#12151A",
        secondary: "#425F61",
        "button-main": "#FF7477",
        "button-link": "#5FE083",
        accent: "#76ABAE",
        "accent-darker": "#2B3E3F",
      },
    },
  },
  plugins: [],
};
export default config;
