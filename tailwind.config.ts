import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'space-black': '#070912',
        'space-dark': '#0B0F1E',
        'space-card': '#0E1528',
        'night-blue': '#10172A',
        'night-deep': '#0D1322',
        'night-surface': '#151D33',
        'space-border': '#1E293B',
        'cyan-glow': '#72E6FF',
        'cyan-subtle': 'rgba(114, 230, 255, 0.1)',
        'violet': '#A78BFA',
        'violet-glow': '#A78BFA',
        'violet-subtle': 'rgba(167, 139, 250, 0.1)',
        'cold-white': '#F3F5FF',
        'cold-muted': '#94A3B8',
        'cold-dim': '#64748B',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        space: ['var(--font-space-grotesk)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(114, 230, 255, 0.25)',
        'cyan-lg': '0 0 40px rgba(114, 230, 255, 0.35)',
        'violet-glow': '0 0 20px rgba(167, 139, 250, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'fadeIn': 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'radial-cosmic': 'radial-gradient(ellipse at center, #10172A 0%, #070912 70%)',
      },
    },
  },
  plugins: [],
};

export default config;
