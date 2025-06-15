/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './screens/**/*.{js,ts,tsx}',
    './navigation/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
    colors:{
      "paper":"#1c1c1c",
      "white":"#fafafa",
      "line":"#fafafa40"
    }
  },
  plugins: [],
};
