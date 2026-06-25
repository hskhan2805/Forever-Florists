import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#060e08",
          900: "#0b1a0e",
          800: "#122418",
          700: "#1a3020",
          600: "#234029",
          500: "#2d5233",
          400: "#3d6e45",
          300: "#5a9464",
          200: "#84b88c",
          100: "#b8d9bc",
          50: "#eaf4eb",
        },
        rose: {
          950: "#2d0715",
          900: "#4a0d22",
          800: "#7a1535",
          700: "#a81e49",
          600: "#cc2a5a",
          500: "#e63d6e",
          400: "#ed6a8f",
          300: "#f49bb5",
          200: "#f9c5d6",
          100: "#fde8ef",
          50: "#fff5f8",
        },
        champagne: {
          900: "#5c4209",
          800: "#8a6310",
          700: "#b3841c",
          600: "#c9972a",
          500: "#d4a843",
          400: "#e0bc6a",
          300: "#ead09a",
          200: "#f2e2c1",
          100: "#f8f0e0",
          50: "#fdf9f2",
        },
        cream: {
          DEFAULT: "#faf5ee",
          dark: "#f0e8d8",
        },
        ink: {
          DEFAULT: "#0d1117",
          light: "#161d26",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-botanical": "linear-gradient(135deg, #122418 0%, #0b1a0e 50%, #060e08 100%)",
        "gradient-rose": "linear-gradient(135deg, #e63d6e 0%, #a81e49 100%)",
        "gradient-gold": "linear-gradient(135deg, #e0bc6a 0%, #b3841c 100%)",
        "gradient-petal": "linear-gradient(135deg, #f49bb5 0%, #e63d6e 50%, #a81e49 100%)",
        "gradient-glass": "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        "glow-rose": "0 0 40px rgba(230, 61, 110, 0.25)",
        "glow-gold": "0 0 40px rgba(212, 168, 67, 0.3)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        "card-dark": "0 25px 50px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "petal-fall": "petalFall 8s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(3deg)" },
          "66%": { transform: "translateY(-8px) rotate(-2deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        petalFall: {
          "0%": { transform: "translateY(-10px) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.6" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
