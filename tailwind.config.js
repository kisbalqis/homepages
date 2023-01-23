/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#F8F8F8",
        "dark-black": "#4B4B4B",
        "light-green": "#73BB4F",
      },
    },
  },
  plugins: [],
});
