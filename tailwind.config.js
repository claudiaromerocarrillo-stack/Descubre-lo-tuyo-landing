/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dly: {
          // Brand — rojo / granate
          DEFAULT: '#9c0000',
          50: '#fff1f1',
          100: '#ffdada',
          200: '#ffb6b6',
          300: '#ff8888',
          400: '#f55151',
          500: '#d61e1e',
          600: '#9c0000', // principal
          700: '#7d0000',
          800: '#630000',
          900: '#4c0000',
          950: '#2c0000',
        },
        // Neutrals basados en blanco/negro
        ink: '#000000',
        paper: '#ffffff',
      },
      fontFamily: {
        display: ['"League Spartan"', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif Pro"', 'Georgia', 'serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(1.12)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.7s ease-out both',
        float: 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.2s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        wave: 'wave 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
