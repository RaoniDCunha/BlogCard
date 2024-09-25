/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'], 
      },
      boxShadow: {
        'bottom-right': '10px 10px #000000',
      },
    },
  },
  plugins: [],
}