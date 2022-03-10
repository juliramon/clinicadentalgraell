module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: "4rem",
      center: true,
    },
    extend: {
      colors: {
        primary: {
          100: "#ACD8E5",
          200: "#4EAACE",
          300: "#076899",
          400: "#004f80",
          500: "#082b3d",
        },
        secondary: {
          100: "#ffffff",
          200: "#f5f5f5",
          300: "#ebebeb",
          400: "#e1e1e1",
          500: "#d7d7d7",
          600: "#D1D0D1",
          700: "#929295",
        },
      },
      fontFamily: {
        sans: ["Inter"],
      },
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
