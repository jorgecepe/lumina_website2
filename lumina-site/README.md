# Lumina Consulting Website

Sitio web profesional para Lumina Consulting, desarrollado con Astro y Tailwind CSS.

## 🚀 Cómo Editar el Sitio

### Editar Contenido de Páginas

Todas las páginas están en la carpeta `src/pages/`:

- **Página Principal**: `src/pages/index.astro`
- **Acerca de**: `src/pages/acerca-de.astro`
- **Servicios**: `src/pages/servicios.astro`
- **Casos de Éxito**: `src/pages/casos-de-exito.astro`
- **Contacto**: `src/pages/contacto.astro`

Para editar el contenido, simplemente abre el archivo correspondiente y modifica el texto. El contenido está en español y es fácil de identificar.

### Editar Header y Footer

- **Header (menú de navegación)**: `src/components/Header.astro`
- **Footer (pie de página)**: `src/components/Footer.astro`

### Editar Colores

Los colores de la marca están definidos en `tailwind.config.mjs`:

```javascript
colors: {
  'lumina-navy': '#1E3A8A',
  'lumina-light-blue': '#E1E7F9',
  'lumina-bright-blue': '#3B82F6',
  'lumina-bright-blue-hover': '#2563EB',
  'lumina-dark-gray': '#374151',
  'lumina-light-gray': '#F3F4F6',
}
```

### Editar SEO (Meta Tags)

Cada página tiene sus propios meta tags en la sección de Layout:

```astro
<Layout
  title="Título de la página"
  description="Descripción de la página"
>
```

## 📦 Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🌐 Deployment en Vercel

### Primera vez (deployment inicial):

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta (puedes usar GitHub)
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Astro
5. Haz clic en "Deploy"

### Configurar tu dominio personalizado:

1. En el dashboard de Vercel, ve a Settings → Domains
2. Agrega `luminaconsulting.ai`
3. Sigue las instrucciones para configurar los DNS

### Actualizar el sitio:

Simplemente haz push a tu repositorio de GitHub:

```bash
git add .
git commit -m "Actualizar contenido"
git push
```

Vercel automáticamente detectará los cambios y desplegará la nueva versión.

## 📁 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── components/     # Componentes reutilizables
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/        # Layouts de página
│   │   └── Layout.astro
│   ├── pages/          # Páginas del sitio
│   │   ├── index.astro
│   │   ├── acerca-de.astro
│   │   ├── servicios.astro
│   │   ├── casos-de-exito.astro
│   │   ├── contacto.astro
│   │   ├── privacidad.astro
│   │   └── terminos.astro
│   └── styles/         # Estilos globales
│       └── global.css
├── astro.config.mjs    # Configuración de Astro
├── tailwind.config.mjs # Configuración de Tailwind
└── package.json        # Dependencias del proyecto
```

## 🎨 Paleta de Colores

- **Navy Blue** (#1E3A8A): Textos principales y elementos importantes
- **Light Blue** (#E1E7F9): Fondos de secciones
- **Bright Blue** (#3B82F6): Botones y enlaces
- **Dark Gray** (#374151): Textos secundarios
- **Light Gray** (#F3F4F6): Fondos neutros

## 📞 Soporte

Si necesitas ayuda con el sitio, contacta a:
- Email: contacto@luminaconsulting.ai
- WhatsApp: +56 9 9162 9095

## 🔧 Tecnologías Utilizadas

- **Astro**: Framework web moderno y rápido
- **Tailwind CSS**: Framework de CSS utility-first
- **TypeScript**: Para type-safety
- **Vercel**: Hosting y deployment

## 📝 Licencia

© 2025 Lumina Consulting. Todos los derechos reservados.
