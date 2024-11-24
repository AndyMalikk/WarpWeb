/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-bold": ["montserrat-bold", "sans-serif"],
        "montserrat-medium": ["montserrat-medium", "sans-serif"],
      },
      colors: {
        primary: "#161519",
        secondary: "#111014",
        accent: "#02af5f",
      },
    },
  },
  plugins: [],
};
