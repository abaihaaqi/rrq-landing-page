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
        'action': '#ff8c00',
        'init': '#FF2E2E',
        'last': '#FCDD3C'
      }
    },
  },
  plugins: [],
}
