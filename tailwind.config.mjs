/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: '#373737',
      gray: '#A8A8A8',
      light: '#FAF9F6',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      mega: '105px',
      '2xl': '35px',
      xl: '25px',
      lg: '20px',
      base: '16px',
      sm: '15px',
    },
    extend: {},
  },
  plugins: [],
}
