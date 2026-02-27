/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#2D6A4F',
          'green-dark': '#1B4332',
          'green-light': '#D8F3DC',
        },
      },
      maxWidth: {
        'site': '1120px',
      },
    },
  },
  plugins: [],
};
