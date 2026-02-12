import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mystic: {
          gold: '#C6A75E',
          'gold-light': '#D4B87A',
          'gold-dark': '#A68B4A',
          purple: '#2D1B4E',
          'purple-light': '#3D2B5E',
          'purple-dark': '#1D0B3E',
          black: '#0A0A0A',
          'black-light': '#1A1A1A',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'mystic-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #1D0B3E 50%, #2D1B4E 100%)',
        'mystic-radial': 'radial-gradient(circle at 50% 50%, rgba(198, 167, 94, 0.1) 0%, transparent 50%)',
        'card-gradient': 'linear-gradient(135deg, rgba(29, 11, 62, 0.6) 0%, rgba(45, 27, 78, 0.4) 100%)',
      },
      boxShadow: {
        'mystic-glow': '0 0 20px rgba(198, 167, 94, 0.2), 0 0 40px rgba(198, 167, 94, 0.1)',
        'mystic-card': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;