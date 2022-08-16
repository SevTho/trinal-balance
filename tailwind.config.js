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
          '100': '#eccabb',
          '200': '#f397a8',
          '300': '#e15222',
          '400': '#427654',
        }
      }
    },
  },
  // ...
};