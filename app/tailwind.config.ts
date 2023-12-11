import type { Config } from "tailwindcss";
import { getCldImageUrl } from "next-cloudinary";

const hero = getCldImageUrl({
  width: 166,
  height: 356,
  src: "ebook-natal/pattern-logo",
});

const rooftop = getCldImageUrl({
  width: 1500,
  height: 500,
  src: "ebook-natal/rebeca-on-rooftop",
});

const check = getCldImageUrl({
  width: 16,
  height: 16,
  src: "ebook-natal/check-icon",
});

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
        "hero-texture": `url(${hero})`,
        sacada: `url(${rooftop})`,
      },
      backgroundSize: {
        5: "5%",
      },
      backgroundPosition: {
        18: "18%",
      },
      listStyleImage: {
        checkmark: `url(${check})`,
      },
      padding: {
        unset: "unset",
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
