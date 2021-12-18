const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss-import');

module.exports = {
  plugins: ["postcss-preset-env", tailwindcss('./tailwind.config.js'), autoprefixer]
};