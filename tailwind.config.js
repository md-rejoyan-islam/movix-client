/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      bg_primary: "var(--bg-primary)",
      pink: "var(--pink)",
      secondary: "var(--bg-secondary)",
      "black-light": "var(--black-light)",
      "secondary-black": "var(--secondary-black)",
      orange: "var(--orange)",
    },
    screens: {
      xsm: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
