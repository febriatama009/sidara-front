/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ff3737",
      grayBorder: "#F2F2F2",
      bodyBackground: "#FCFCFC;",
      textColor: "#828282",
      textImportant: "#4F4F4F",
      transparent: "transparent",
      current: "currentColor",
      ...colors,
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
