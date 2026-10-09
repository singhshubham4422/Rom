/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          50: '#fff5f7',
          100: '#ffe6eb',
          200: '#fecdd7',
          300: '#fda4b8',
          400: '#fb7194',
          500: '#f43f71',
          600: '#e11d5a',
          700: '#be1248',
          800: '#9f1240',
          900: '#841339',
        },
        blush: {
          light: '#fff8f9',
          card: '#ffffff',
          accent: '#ffeef2',
          border: '#fed7e2',
        }
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
