/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/styles/main.css",
  ],
  theme: {
    extend: {
      fontFamily:{
        'taeback' : 'TAEBAEKfont',
        'noto' : 'NotoSansKR'
      },
    },
  },
  plugins: [],
}

