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
        "hero-texture": "url('/assets/img/hero-pattern.png')",
        sacada: "url('/assets/img/sacada.png')",
      },
      backgroundSize: {
        5: "5%",
      },
      colors: {
        brand: {
          white: "#F9EBFF",
          black: "#0F010C",
          beige: "#E28E7D",
          pink: "#89093D",
          marsala: "#49072A",
          ocean: "#3E90BA",
          sky: "#83CCE5",
        },
      },
    },
  },
  plugins: [],
};
export default config;
