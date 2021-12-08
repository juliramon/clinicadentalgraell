module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: "4rem",
    },
    fontFamily: {
      sans: ["Inter"],
    },
    colors: {
      primary: {
        100: "#475AA5",
        200: "#2A3180",
        300: "#2d2e82",
        400: "#7092E8",
        500: "#C0D8FC",
      },
      secondary: {
        100: "#ffffff",
        200: "#D1D0D1",
        300: "#929295",
      },
    },
    extend: {
      borderRadius: {
        350: "350px",
      },
      lineHeight: {
        12: "3.2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
