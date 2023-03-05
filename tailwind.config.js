/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  important: '#__next',
  theme: {
    extend: {},
  },
  plugins: [],
};
