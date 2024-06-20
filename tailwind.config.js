// tailwind.config.js
const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,jsx,tsx,mdx}',
    './app/**/*.{js,jsx,tsx,mdx}',
    './components/**/*.{js,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // or 'media' or 'class'
  plugins: [nextui()],
};
