/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // TECH PALETTE - Navy + Cyan (Option A, coral 0%)
        // Tokens keep legacy names (coral/mocha/sage) for backward compatibility
        // with ~2,260 references across the codebase. Semantic cleanup is deferred.
        'lum': {
          // Base - Cool navy and neutral paper
          'black': '#0A0E1A',
          'charcoal': '#131826',
          'stone': '#1F2937',
          'cream': '#FAFAF9',
          'ivory': '#F5F5F4',
          'white': '#FFFFFF',

          // Legacy "mocha" tokens, now neutral slate
          'mocha': '#475569',
          'mocha-light': '#94A3B8',
          'mocha-dark': '#334155',
          'mocha-muted': '#E2E8F0',

          // ACCENT - Deep teal (cyan-800, sweet spot)
          'coral': '#155E75',
          'coral-light': '#0E7490',
          'coral-dark': '#164E63',
          'coral-muted': '#CFFAFE',

          // Legacy "sage" tokens, now neutral slate
          'sage': '#475569',
          'sage-light': '#94A3B8',
          'sage-dark': '#334155',

          // Utility
          'slate': '#64748B',
          'slate-light': '#94A3B8',
          'border': '#E2E8F0',
          'border-dark': '#1E293B',

          // Semantic
          'success': '#10B981',
          'warning': '#F59E0B',
          'error': '#EF4444',

          // Brand colors (third-party)
          'linkedin': '#0A66C2',
          'linkedin-dark': '#004182',
          'whatsapp': '#25D366',
        }
      },
      fontFamily: {
        // Single sans-serif (Inter) + JetBrains Mono for tech accents.
        // Legacy keys (serif/display/body) all alias to Inter so the existing
        // font-serif / font-display / font-body classes don't need to be touched.
        'serif': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Type scale tuned for Inter (denser than Instrument Serif at same px)
        'display-xl': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2rem, 4.25vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.022em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        // Mono sizes bumped for readability at low contrast (eyebrows, callouts, ghost buttons)
        'mono-sm': ['0.9375rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'mono-xs': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
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
        // Soft elevation shadows tuned for the navy/cyan palette.
        // Legacy 'brutal*' keys retained as aliases so existing markup
        // (e.g. ContactFormModal uses shadow-brutal-lg) keeps rendering.
        'soft': '0 4px 12px -2px rgba(10, 14, 26, 0.08)',
        'elevated': '0 12px 32px -8px rgba(10, 14, 26, 0.12)',
        'lifted': '0 24px 48px -16px rgba(10, 14, 26, 0.16)',
        'brutal': '0 4px 12px -2px rgba(10, 14, 26, 0.08)',
        'brutal-lg': '0 12px 32px -8px rgba(10, 14, 26, 0.12)',
        'glow-cyan': '0 0 40px -10px rgba(21, 94, 117, 0.32)',
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
