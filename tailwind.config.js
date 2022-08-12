// tailwind.config.js

module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sel: {
          '100': '#dfcfb6',
          '200': '#e4afa8',
          '300': '#c7762e',
          '400': '#567c68',
        }
      }
    },
  },
  // ...
};