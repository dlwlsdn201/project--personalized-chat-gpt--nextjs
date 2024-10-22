/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{html}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F7F7F8',
        secondary: '#1F1F1F',
        accent: '#E84A5F',
        background: ' #0d0d0f',
        gradientText:
          'linear-gradient(90deg, rgba(255,117,24,1) 0%, rgba(250,80,255,1) 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
