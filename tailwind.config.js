/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': 'var(--neon-green)',
        'neon-blue': 'var(--neon-blue)',
        'neon-pink': 'var(--neon-pink)',
      },
      fontFamily: {
        chivo: ['Chivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};