/** @type {import('tailwindcss').Config} */
const preset = require("@bc/ui/tailwind.preset.cjs");

module.exports = {
  presets: [preset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
