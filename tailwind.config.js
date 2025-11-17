/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#050505',
        surface: '#0c0c0f',
        neon: '#00ffaa',
        neonBlue: '#00bcd4',
        cyberGray: '#9ba9b4',
      },
      fontFamily: {
        techno: ['"Space Grotesk"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 35px rgba(0, 255, 170, 0.35)',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(90deg, rgba(0,255,170,0.08) 1px, transparent 1px), linear-gradient(0deg, rgba(0,255,170,0.08) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        scan: 'scan 6s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(50%)' },
        },
      },
    },
  },
  plugins: [],
}

