/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        rubik80s: ['Rubik 80s Fade', 'cursive'],
      },
      colors: {
        lightBg: '#ECECEC',
      },
    },
  },
  plugins: [],
}