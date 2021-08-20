const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
        coolGray: colors.coolGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}