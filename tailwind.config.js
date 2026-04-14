/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        foreground: '#FAFAFA',
        accent: '#00FF41', // Neon Green
        danger: '#FF3131', // Bright Red
        glass: 'rgba(250, 250, 250, 0.05)',
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
