// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            primary: "#20355A",
            secondary: "#253E6A",
            buttonHover: "#15243C",
            background: "#3F5878",
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
