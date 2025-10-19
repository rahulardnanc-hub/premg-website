/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'premg-yellow': '#FFC72C', // Your 'turmeric-yellow' & 'zesty-orange'
        'chili-red': '#E63946', // Your 'spicy-red'
        'heritage-green': '#2A9D8F', // Your 'fresh-green'
        'charcoal-text': '#212529', // Your 'charcoal-grey'
        'warm-off-white': '#F8F5F1', // Your 'cream-white'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}