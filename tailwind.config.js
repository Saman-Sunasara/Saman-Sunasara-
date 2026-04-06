/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#04070d',
        surface: '#0a1020',
        accent: '#69f0ff',
        violet: '#7c5cff',
        rose: '#ff5cb8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 40px rgba(105, 240, 255, 0.22)',
        glass: '0 25px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(124, 92, 255, 0.22), transparent 28%), radial-gradient(circle at top right, rgba(105, 240, 255, 0.18), transparent 24%), radial-gradient(circle at bottom center, rgba(255, 92, 184, 0.18), transparent 30%)',
      },
    },
  },
  plugins: [],
}
