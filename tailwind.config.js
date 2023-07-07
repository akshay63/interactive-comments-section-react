/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      display: ["Rubik"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        modBlue: "hsl(238, 40%, 52%)",
        softRed: "hsl(358, 79%, 66%)",
        lgGrayBlue: "hsl(239, 57%, 85%)",
        paleRed: "hsl(357, 100%, 86%)",
        thinGray: "hsl(228, 33%, 97%)",
      },
      backgroundImage: {
        "comment-img": "url('/src/img/mypic.jpg')",
      },
    },
  },
  plugins: [],
};
