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
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}