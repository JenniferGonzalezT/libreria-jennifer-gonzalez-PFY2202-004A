/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-primario': '#522623',
        'color-secundario': '#9f6932',
        'color-claro': '#edeee9',
        'color-oscuro': '#262630',
      },
    },
  },
  plugins: [],
};
