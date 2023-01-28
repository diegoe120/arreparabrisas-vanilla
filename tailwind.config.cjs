/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppin", "sans-serif"],
      },
      animation: {
        "translate--4": "translateY(-4px)",
        "translate-4": "translateY(4px)",
      },
    },
  },
  plugins: [],
};
