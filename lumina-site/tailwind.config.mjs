/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // NEO-BRUTALIST PALETTE - Anti-AI Design
        'lum': {
          // Base - Warm off-blacks and creams
          'black': '#1a1814',
          'charcoal': '#2d2a26',
          'stone': '#3d3833',
          'cream': '#F5F0EB',
          'ivory': '#FAF8F5',
          'white': '#FFFEFA',

          // Mocha Mousse (Pantone 2025) scale
          'mocha': '#A47764',
          'mocha-light': '#C4A394',
          'mocha-dark': '#8B6355',
          'mocha-muted': '#D4C4BC',

          // ACCENT - Electric Coral (breaks corporate blue pattern)
          'coral': '#FF6B35',
          'coral-light': '#FF8F66',
          'coral-dark': '#E55A2B',
          'coral-muted': '#FFD4C4',

          // Secondary accent - Sage green for contrast
          'sage': '#7D8471',
          'sage-light': '#A8B09C',
          'sage-dark': '#5C6352',

          // Utility
          'slate': '#64605A',
          'slate-light': '#9A958E',
          'border': '#E5DFD8',
          'border-dark': '#3d3833',

          // Semantic
          'success': '#5A8F6D',
          'warning': '#D4A03D',
          'error': '#C45B4A',
        }
      },
      fontFamily: {
        // TYPOGRAPHY WITH CHARACTER - No Inter, No Roboto
        'serif': ['Instrument Serif', 'Georgia', 'serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'display': ['Bebas Neue', 'Impact', 'sans-serif'],
        'body': ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Aggressive type scale
        'display-xl': ['clamp(4rem, 12vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6' }],
        'mono-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'mono-xs': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.03em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      borderRadius: {
        'brutal': '0px',
        'soft': '2px',
        'organic': '40% 60% 55% 45% / 55% 45% 55% 45%',
      },
      backgroundImage: {
        // Grain texture
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        // Diagonal lines pattern
        'diagonal': "repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)",
        // Dot grid
        'dots': "radial-gradient(circle, currentColor 1px, transparent 1px)",
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px currentColor',
        'brutal-lg': '8px 8px 0px 0px currentColor',
        'brutal-xl': '12px 12px 0px 0px currentColor',
        'inner-brutal': 'inset 4px 4px 0px 0px currentColor',
        'soft': '0 4px 30px -10px rgba(26, 24, 20, 0.15)',
        'elevated': '0 20px 60px -20px rgba(26, 24, 20, 0.2)',
        'glow-coral': '0 0 40px -10px rgba(255, 107, 53, 0.4)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'draw': 'draw 1.5s ease-out forwards',
        'typewriter': 'typewriter 2s steps(20) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(4px) rotate(-1deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
