/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Lumina Consulting Brand Colors
        'lumina-navy': '#1E3A8A',
        'lumina-light-blue': '#E1E7F9',
        'lumina-bright-blue': '#3B82F6',
        'lumina-bright-blue-hover': '#2563EB',
        'lumina-dark-gray': '#374151',
        'lumina-light-gray': '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
