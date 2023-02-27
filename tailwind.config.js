/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#2A61D6',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
