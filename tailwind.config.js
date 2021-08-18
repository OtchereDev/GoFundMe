module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary_green:"#02a95c",
        primary_black:"#333",
        secondary_black:"#666"
      },
      fontFamily:{
        primary:"'Lato','san-serif'"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
