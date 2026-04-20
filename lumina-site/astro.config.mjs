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
    '/servicios/dashboards-estrategicos': '/servicios/business-intelligence',
    '/servicios/control-de-gestion': '/servicios/business-intelligence',
    '/en/services/strategic-dashboards': '/en/services/business-intelligence',
    '/en/services/management-control': '/en/services/business-intelligence',
    '/servicios/automatizacion-inteligente': '/servicios/automatizacion-y-agentes-ia',
    '/en/services/reporting-automation': '/en/services/automation-and-ai-agents',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
