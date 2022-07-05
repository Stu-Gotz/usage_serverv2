/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'mono': 'dank mono',
      'main': 'dank mono'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1760px'
    },
    extend: {
      colors: {
        lavender: "#634b9b",
        yellow: "rgba(197, 235, 92, .5)",
        darkText: "#111",
        darkBg: "#282c34",
        lightBg: "#d7d3cb"
      }
    },
  },
  plugins: [],
}
