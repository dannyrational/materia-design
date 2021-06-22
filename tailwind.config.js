const colors = require('tailwindcss/colors')

module.exports = {
  corePlugins: {
    container: false,
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      warmGray: colors.warmGray,
      trueGray: colors.trueGray,
      gray: colors.gray,
      coolGray: colors.coolGray,
      blueGray: colors.blueGray,
    },
    extend: {
      height: {
        '475': '475px',
        '575': '575px',
      },
      colors: {
        'primary': '#756566',
        'secondary': '#1F232A',
      },
      maxWidth: {
        '440': '440px',
        '544': '544px',
      }
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'playfair': ['"Playfair Display"', 'serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px'
      },
    }),
  ],
}