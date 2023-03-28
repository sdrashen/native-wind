/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/*.tsx",
    //qualquer file dentro da pasta screens que termine com tsx.
    "./src/components/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#c4c4CC",
          900: "#121214",
        },
        green: {
          500: "#015F43",
        },
      },
    },
  },
  plugins: [],
};
