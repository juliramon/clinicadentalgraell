module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        100: "#475AA5",
        200: "#2A3180",
        300: "#1F2245",
      },
      secondary: {
        100: "#D1D0D1",
        200: "#929295",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
