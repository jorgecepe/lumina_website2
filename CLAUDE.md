# Lumina Consulting - Contexto del Proyecto

## Descripción General
Sitio web corporativo para **Lumina Consulting**, una consultora chilena especializada en transformación digital para PyMEs y startups. El sitio funciona como landing page y herramienta de lead generation.

**Dominio:** luminaconsulting.ai
**Contacto:** jcepeda@luminaconsulting.ai | +56 9 9162 9095

## Stack Tecnológico
- **Framework:** Astro 4.15 (sitio estático pre-renderizado)
- **Estilos:** Tailwind CSS 3.4 + CSS personalizado
- **Lenguaje:** TypeScript + Astro components
- **Hosting:** Vercel (deployment automático desde GitHub)
- **Analytics:** Vercel Analytics

## Estructura del Proyecto
```
src/
├── pages/           # Páginas (rutas automáticas)
│   ├── index.astro          # Homepage
│   ├── servicios.astro      # Servicios detallados
│   ├── acerca-de.astro      # Quiénes somos
│   ├── casos-de-exito.astro # Testimonios
│   ├── contacto.astro       # Contacto y lead gen
│   ├── portfolio.astro      # Proyectos GitHub
│   ├── privacidad.astro     # Política privacidad
│   └── terminos.astro       # Términos de uso
├── components/      # Componentes reutilizables
│   ├── Header.astro         # Navegación sticky
│   ├── Footer.astro         # Pie de página + CTA WhatsApp
│   └── GitHubRepos.astro    # Fetch dinámico de repos
├── layouts/
│   └── Layout.astro         # Layout base (SEO, meta tags)
└── styles/
    └── global.css           # Estilos globales + Tailwind

public/              # Assets estáticos (logos, favicon, robots.txt)
```

## Paleta de Colores
```
lumina-navy: #1E3A8A           // Azul oscuro - textos principales
lumina-light-blue: #E1E7F9      // Azul claro - fondos alternos
lumina-bright-blue: #3B82F6     // Azul brillante - CTAs/botones
lumina-bright-blue-hover: #2563EB // Hover de botones
lumina-dark-gray: #374151       // Gris oscuro - textos secundarios
lumina-light-gray: #F3F4F6      // Gris claro - fondos neutros
```

## Servicios Ofrecidos
1. **Dashboards Estratégicos** - Automatización de reportes
2. **Análisis de Competencia** - Monitoreo automático de precios
3. **Gestión del Negocio** - Indicadores y visibilidad total
4. **Capacitación a Medida** - Formación con franquicia Sence

## Producto Principal
**NodalTree** - Plataforma SaaS (subdomain: nodaltree.luminaconsulting.ai)

## Comandos de Desarrollo
```bash
npm run dev      # Servidor desarrollo (localhost:4321)
npm run build    # Build de producción
npm run preview  # Preview del build
```

## Convenciones de Código
- Componentes Astro usan PascalCase
- Clases CSS con Tailwind utilities + custom classes (btn-primary, section-light)
- Tipografía: Inter (Google Fonts)
- Mobile-first responsive design
- SEO: Meta tags, Open Graph, Schema.org JSON-LD

## Integraciones
- **WhatsApp Business:** Botón flotante en todas las páginas
- **GitHub API:** Muestra repos públicos dinámicamente
- **Vercel Analytics:** Tracking automático de visitas

## Documentación Adicional
- `README.md` - Guía general
- `EDITING_GUIDE.md` - Cómo editar contenido
- `DEPLOYMENT.md` - Proceso de deployment
- `LOGO_INSTRUCTIONS.md` - Manejo de logos

## Notas para Claude
- El idioma principal es **español**
- El público objetivo son **PyMEs y startups en Chile/Latam**
- Los CTAs principales son **WhatsApp** y **Solicitar Asesoría**
- El tono debe ser **profesional pero accesible**
- Evitar jerga técnica excesiva en contenido visible al usuario
