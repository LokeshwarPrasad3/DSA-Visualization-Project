/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'overpass': ['overpass'],
        'signika': ['signika negative'],
        'jetbrains': ['JetBrains+Mono'],
        'bree': ['bree serif'],
        'karla': ['Karla'],
        'raleway': ['Raleway'],
      }
    },
  },
  plugins: [],
}