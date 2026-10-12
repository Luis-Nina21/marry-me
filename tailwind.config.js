/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dorado champagne: color principal de marca
        gold: {
          50: '#FBF6E9',
          100: '#F5EBCB',
          200: '#EBD9A0',
          300: '#DEC378',
          400: '#D2B15E',
          500: '#C9A961',
          600: '#B08F45',
          700: '#8C6F33',
        },
        // Celeste pastel: color de apoyo
        celeste: {
          50: '#F2F9FD',
          100: '#E3F1F9',
          200: '#CBE6F4',
          300: '#A9D4E8',
          400: '#86BFDA',
          500: '#5FA6C6',
        },
        // Rosa empolvado: acento muy sutil
        rosa: {
          50: '#FCF3F1',
          100: '#F7E6E4',
          200: '#EFCFCB',
        },
        cream: '#FDFBF7',
        ink: '#2E2C35',
        'ink-soft': '#6B6875',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 50px -20px rgba(140, 111, 51, 0.25)',
        card: '0 10px 40px -15px rgba(46, 44, 53, 0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
