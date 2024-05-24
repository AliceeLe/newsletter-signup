/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        '40vh': '40vh', // Set margin top to 70% of viewport height
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      listStyleImage: {
        checkmark: 'url("./assets/images/icon-list.svg")',
      },
      colors: {
        'dark-navy': '#242742',
        'vermellion': '#FF6155',
        'light-red':'rgba(255, 97, 85, 0.15)',
      },
      backgroundColor: {
        'dark-navy': '#242742',
        'vermellion': '#FF6155',
        'light-red':'rgba(255, 97, 85, 0.15)',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(204deg, #FF6A3A 0%, #FF527B 100%)',
      },
      boxShadow: {
        'custom': '0px 16px 32px 0px rgba(255, 97, 85, 0.50)',
      }
    },
  },
  plugins: [],
};
