# Lumina Consulting - Contexto del Proyecto

## Descripción General
Sitio web para **Lumina Consulting**, agencia de inteligencia de negocio fundada por Jorge Cepeda. Lumina conecta los sistemas de datos de empresas medianas chilenas (ERPs, plataformas de venta, APIs públicas) y los convierte en información visual, automatizada y actualizada para la gerencia.

**Propuesta de valor:** "Abre una pantalla y ve cómo va tu negocio hoy — sin pedirle a nadie que haga un Excel."
**Cliente ideal:** Dueños y socios de empresas medianas (50-500 personas) en Chile.
**Sectores:** Automotriz, inmobiliario, retail, salud/veterinaria, servicios.

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

## Sistema de Diseño

**Ver `DESIGN-SYSTEM.md`** para especificaciones completas de:
- Tipografía (Instrument Serif + Outfit + JetBrains Mono + Bebas Neue)
- Paleta de colores neo-brutalist (coral, mocha, sage, cream, black)
- Sombras brutalist (solid box-shadows) y animaciones
- Componentes (botones, cards, badges, etc.)
- Grain texture y elementos decorativos geométricos

### Colores Principales (Neo-Brutalist)
```
lum-black: #1a1814             // Fondo oscuro principal
lum-charcoal: #2d2a26          // Fondo oscuro secundario
lum-cream: #F5F0EB             // Fondo claro principal
lum-coral: #FF6B35             // Accent principal
lum-mocha: #A47764             // Accent secundario
lum-sage: #7D8471              // Accent terciario
lum-slate: #64605A             // Texto secundario
```

## Servicios Ofrecidos (7)
1. **Dashboards y visibilidad** → `/servicios/dashboards-estrategicos`
2. **Control de gestión** → `/servicios/control-de-gestion`
3. **Automatización inteligente** → `/servicios/automatizacion-inteligente`
4. **Inteligencia competitiva** → `/servicios/inteligencia-competitiva`
5. **HR Analytics y organigramas** → `/servicios/hr-analytics`
6. **Soluciones a medida** → `/servicios/soluciones-a-medida`
7. **Capacitación** → `/servicios/capacitacion`

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
- Clases CSS con Tailwind utilities + custom classes (btn-primary, card, badge, etc.)
- Tipografía: Instrument Serif (títulos) + Outfit (cuerpo) + JetBrains Mono (tags/accents)
- Mobile-first responsive design
- SEO: Meta tags, Open Graph, Schema.org JSON-LD
- Usar iconos SVG en lugar de emojis
- Animaciones scroll-fade para elementos que aparecen al hacer scroll

## Integraciones
- **WhatsApp Business:** Botón flotante en todas las páginas
- **GitHub API:** Muestra repos públicos dinámicamente
- **Vercel Analytics:** Tracking automático de visitas

## Documentación Adicional
- `DESIGN-SYSTEM.md` - **Sistema de diseño completo** (colores, tipografía, componentes, animaciones)
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
