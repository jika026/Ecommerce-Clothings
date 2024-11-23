/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGrey: "#a6a6a6",
        darkGrey: "#737373",
      },
      fontFamily: {
        fontPrimary: ["Inter", "sans-serif"],
        fontSecondary: ["HeadlandOne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
