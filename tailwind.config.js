/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'the-count-black': '#0e1f29',
        'honey-bees': '#FBD784',
      },
      fontFamily: {
        Chronicle: 'Chronicle Display, sans-serif',
        Roboto: 'Roboto, sans-serif',
      },
    },
  },
  plugins: [],
};
