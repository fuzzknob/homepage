module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#373737',
      light: '#FAF9F6',
      white: '#FFFFFF'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
