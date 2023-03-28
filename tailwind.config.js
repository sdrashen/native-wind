/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/*.tsx",
    //qualquer file dentro da pasta screens que termine com tsx.
    "./src/components/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
