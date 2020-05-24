module.exports = {
  purge: [
    './src/**/*.njk'
  ],
  theme: {
    extend: {},
  },
  variants: {
    margin: ['responsive', 'last'],
  },
  plugins: [
    require('tailwindcss-font-inter')()
  ],
}