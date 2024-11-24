/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0A192F",
        "secondary": "#f97316",
        "tertiary": "#54d688"
      }
    },
    screens: {
      lg:{ max: "2023px"},
      sm:{ max: "1000px"}
    },
  },
  plugins: [],
}