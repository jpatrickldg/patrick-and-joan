/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(`../public/images/Edited-19.jpg`)",
      },
      colors: {
        "motif-peach": "#E0CCBE",
        "motif-grey": "#EEEDEB",
        "motif-green": "#747264",
        "motif-brown": "#3C3633",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
        homemade: ["Homemade Apple", "cursive"],
      },
    },
  },
  plugins: [],
});
