module.exports = {
  mode: "jit",
  purge: ["./**/*.{html, js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      display: ["Oswald"],
      body: ["Open Sans"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
