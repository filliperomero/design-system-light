/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      colors: {
        gray: {
          900: '#121214',
          800: '#202024',
          400: '#7C7C8A',
          200: '#E1E1E6',
          100: '#CACACC',
        },
        cyan: {
          500: '#81D8F7',
          300: '#9BE1FB'
        },
        violet: {
          300: '#996dff',
          500: '#8257e6'
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
