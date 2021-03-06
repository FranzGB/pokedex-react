module.exports = {
  jit: true,
  darkMode: false,
  purge: ["./src/**/*.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "light-grey": "#E5EEE5",
        pokered: "#E44231"
      }
    },
  },
  plugins: [],
}
