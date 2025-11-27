/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Lumina Consulting Brand Colors - Refined Palette
        'lumina': {
          // Primary Navy Scale
          'navy': '#0f172a',
          'navy-light': '#1e293b',
          'navy-medium': '#334155',

          // Blue Scale
          'blue': '#3b82f6',
          'blue-hover': '#2563eb',
          'blue-light': '#dbeafe',
          'blue-muted': '#e0e7ff',

          // Accent - Cyan/Teal for distinction
          'accent': '#06b6d4',
          'accent-light': '#cffafe',
          'accent-dark': '#0891b2',

          // Neutrals
          'slate': '#475569',
          'slate-light': '#94a3b8',
          'gray': '#f1f5f9',
          'white': '#ffffff',

          // Semantic
          'success': '#10b981',
          'warning': '#f59e0b',
        }
      },
      fontFamily: {
        'display': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'body': ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(59, 130, 246, 0.3)',
        'glow-accent': '0 0 40px -10px rgba(6, 182, 212, 0.3)',
        'elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 20px -5px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
