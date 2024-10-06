import { Md10K } from "react-icons/md";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1300px",
      md: "768px",
      sm: "375px",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        brand: "#17C2EC",
      },
    },
  },
  plugins: [],
};
