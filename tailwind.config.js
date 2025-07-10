/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        neonPink: '#ff00ff',
        neonCyan: '#00ffff',
        darkGray: '#1a1a1a',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 0.8s ease-out',
        pulseNeon: 'pulseNeon 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        pulseNeon: {
          '0%, 100%': { textShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff' },
          '50%': { textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff' },
        },
      },
    },
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{js,jsx}'],
  },
};