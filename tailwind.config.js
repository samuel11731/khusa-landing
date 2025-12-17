/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F89521',
          teal: '#027D89',
          'dark-blue': '#1D275C',
          slate: '#0F172A',
          brown: '#8B5E3C',
          'brown-dark': '#6d4a30',
          'light-orange': '#F1AB6C',
          'blue-light': '#366D88',
          'blue-border': '#027D8921',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'card': '40px',
        'card-lg': '32px',
      },
      boxShadow: {
        'card': '0 20px 60px -15px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}