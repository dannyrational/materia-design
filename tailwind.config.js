module.exports = {
  corePlugins: {
    container: false,
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#746367',
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