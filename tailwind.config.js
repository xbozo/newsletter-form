/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(4, 100%, 67%)',
        grey: 'hsl(231, 7%, 60%)',
        dark_grey: 'hsl(234, 29%, 20%)',
        charcoal: 'hsl(235, 18%, 26%)',
      },
    },
  },
  plugins: [],
};
