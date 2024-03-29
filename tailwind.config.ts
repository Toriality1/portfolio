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
      backgroundColor: (theme) => ({
        main: "#222831",
        secondary: "#EDCBB1",
        "button-main": "#FF7477",
        "button-secondary": "#5FE083",
        accent: "#76ABAE",
      }),
    },
  },
  plugins: [],
};
export default config;
