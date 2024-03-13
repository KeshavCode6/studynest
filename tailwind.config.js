/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "satoshi": ['Satoshi', 'sans-serif'],
        "inter": ['Inter', 'sans-serif'],
        "seven-segment": ["seven-segment"]
      },
      colors: {
        'primary-orange': '#FF5722',
        "primary-white": "#D9D9D9", 
        "widget-purple": "#110d1a"
      }
    },
  },
  plugins: [],
}