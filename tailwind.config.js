/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kavoon: [ 'Kavoon','sans-serif'],
        KaiseiHarunoUm: ['Kaisei HarunoUm','sans-serif'],
        Kanit: ['Kanit','sans-serif'],
    },
  },
  plugins: [],
}
}
