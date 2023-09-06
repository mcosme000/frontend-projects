/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#151515",
        "accent": "#874CFE",
        "selected": "#7865A5",
        "red": "#F05058",
        "grey": "#6F6F6F"
      }
    },
  },
  plugins: [],
}
