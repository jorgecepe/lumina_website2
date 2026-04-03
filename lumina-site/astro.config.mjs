import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.luminaconsulting.ai',
  integrations: [tailwind(), sitemap()],
  redirects: {
    '/servicios/automatizacion-reporteria': '/servicios/automatizacion-inteligente',
    '/servicios/analisis-competencia': '/servicios/inteligencia-competitiva',
    '/servicios/capacitacion-sence': '/servicios/capacitacion',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
