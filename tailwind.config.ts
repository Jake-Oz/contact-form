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
        LightGreen: "hsl(148, 38%, 91%)",
        DarkGreen: "hsl(169, 82%, 27%)",
        Red: "hsl(0, 66%, 54%)",
      },
    },
  },
  plugins: [],
};
export default config;
