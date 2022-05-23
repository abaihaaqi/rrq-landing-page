module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'barlow': ['Barlow', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#f7b81c',
        'secondary': '#ff8c00',
        'action': '#f3aa36',
        'init': '#FCDD3C',
        'last': '#FF2E2E'
      }
    },
  },
  plugins: [],
}
