/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oceanblue: '#4682A9',
        cyan: '#F6F4EB',
        toast:'#35A29F'
      },
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-out',
      'slide-in': 'slideIn 0.3s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      slideIn: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
    },
  },
  variants: {},
  plugins: [],
}