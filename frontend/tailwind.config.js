/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      listStyleImage: {
        checkmark: 'url("./assets/images/icon-list.svg")',
      },
      colors: {
        'dark-navy': '#242742',
      },

    },
  },
  plugins: [],
};
