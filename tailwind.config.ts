import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf5f3",
          100: "#f5ebe7",
          200: "#ead7cf",
          300: "#e0c3b7",
          400: "#d5af9f",
          500: "#c99b87",
          600: "#bd876f",
          700: "#a16d54",
          800: "#855439",
          900: "#6a3f2a",
        },
        accent: {
          50: "#fef2f4",
          100: "#fde8ed",
          200: "#fbd1db",
          300: "#f8b9c9",
          400: "#f5a1b7",
          500: "#f289a5",
          600: "#ef7193",
          700: "#ec5981",
          800: "#e9416f",
          900: "#e6295d",
        },
        sage: {
          50: "#f7faf9",
          100: "#eff5f2",
          200: "#dfeae5",
          300: "#cfdfd8",
          400: "#bfd4cb",
          500: "#afc9be",
          600: "#9fbeb1",
          700: "#8fb3a4",
          800: "#7fa897",
          900: "#6f9d8a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-flower": "linear-gradient(135deg, #f289a5 0%, #e9416f 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
