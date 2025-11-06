# Guía de Edición - Sitio Web Lumina Consulting

Esta guía te enseñará cómo editar el contenido de tu sitio web sin necesidad de conocimientos técnicos avanzados.

## 📝 Editar Contenido de Páginas

### Página Principal (Home)

**Archivo**: `src/pages/index.astro`

Para editar el título principal:
```html
<h1 class="mb-6">
  Transformamos datos dispersos en información estratégica
</h1>
```

Simplemente cambia el texto entre `<h1>` y `</h1>`.

### Editar los 4 Beneficios (¿Por qué Lumina?)

Busca las secciones que dicen:
```html
<h3 class="mb-4">Eficiencia</h3>
<p class="text-lumina-dark-gray">
  Automatizamos procesos manuales que consumen tiempo valioso
</p>
```

Cambia el texto dentro de `<h3>` (título) y `<p>` (descripción).

### Editar Testimonios

En la página de Casos de Éxito (`src/pages/casos-de-exito.astro`):

```html
<p class="text-lg text-lumina-dark-gray italic mb-4">
  "Tu testimonio aquí..."
</p>
<p class="text-sm font-semibold text-lumina-navy">
  — Nombre, Cargo
</p>
```

## 🎨 Cambiar Colores

**Archivo**: `tailwind.config.mjs`

```javascript
colors: {
  'lumina-navy': '#1E3A8A',        // Azul oscuro principal
  'lumina-light-blue': '#E1E7F9',  // Azul claro (fondos)
  'lumina-bright-blue': '#3B82F6', // Azul brillante (botones)
  // ... más colores
}
```

Cambia los códigos hexadecimales (#XXXXXX) por los colores que prefieras.

## 📞 Cambiar Información de Contacto

### Número de WhatsApp

Busca y reemplaza en todos los archivos:
- Buscar: `56991629095`
- Reemplazar con: `TU_NUEVO_NUMERO`

### Email

Busca y reemplaza:
- Buscar: `contacto@luminaconsulting.ai`
- Reemplazar con: `tu@nuevo-email.com`

## 🖼️ Cambiar Imágenes y Logo

### Agregar el Logo

1. Coloca tus archivos de logo en la carpeta `public/`:
   - `public/logo.svg` o `public/logo.png`

2. En `src/components/Header.astro`, reemplaza:
```html
<div class="text-2xl font-bold text-lumina-navy">
  Lumina <span class="text-lumina-bright-blue">Consulting</span>
</div>
```

Por:
```html
<img src="/logo.svg" alt="Lumina Consulting" class="h-10" />
```

### Agregar Favicon

1. Coloca tu favicon en `public/favicon.ico`
2. En `src/layouts/Layout.astro`, ya está configurado para usarlo automáticamente

## ✏️ Agregar un Nuevo Servicio

En `src/pages/servicios.astro`, copia una sección de servicio existente:

```html
<section class="py-20 bg-white">
  <div class="container-custom">
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <div class="text-5xl mb-4">📊</div> <!-- Cambia el emoji -->
        <h2 class="mb-6">Nombre del Nuevo Servicio</h2>
      </div>

      <div class="space-y-6">
        <div>
          <h3 class="mb-3 text-lumina-bright-blue">Problema que Resuelve:</h3>
          <p class="text-lumina-dark-gray">
            Describe el problema aquí...
          </p>
        </div>

        <div>
          <h3 class="mb-3 text-lumina-bright-blue">Nuestra Solución:</h3>
          <p class="text-lumina-dark-gray">
            Describe tu solución aquí...
          </p>
        </div>

        <div class="bg-lumina-light-blue p-6 rounded-lg">
          <h3 class="mb-4">Beneficios para el Cliente:</h3>
          <ul class="space-y-2 text-lumina-dark-gray">
            <li>✓ Beneficio 1</li>
            <li>✓ Beneficio 2</li>
            <li>✓ Beneficio 3</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
```

## 📱 Editar Links de Redes Sociales

En el Footer (`src/components/Footer.astro`), puedes agregar:

```html
<div class="flex space-x-4 mt-4">
  <a href="https://linkedin.com/company/tu-empresa" target="_blank">
    <svg><!-- Ícono LinkedIn --></svg>
  </a>
  <a href="https://twitter.com/tu-usuario" target="_blank">
    <svg><!-- Ícono Twitter --></svg>
  </a>
</div>
```

## 🔧 Flujo de Trabajo para Actualizar el Sitio

1. **Edita los archivos** en tu editor de código favorito (VS Code recomendado)

2. **Guarda los cambios**

3. **Prueba localmente** (opcional):
```bash
npm run dev
```
Visita `http://localhost:4321` para ver los cambios

4. **Sube los cambios a GitHub**:
```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

5. **Vercel despliega automáticamente** en 1-2 minutos

6. **Verifica el sitio** en `https://luminaconsulting.ai`

## 📊 Estructura de Archivos Importantes

```
lumina-site/
├── src/
│   ├── pages/              # Páginas del sitio
│   │   ├── index.astro     # Página principal
│   │   ├── acerca-de.astro # Acerca de
│   │   ├── servicios.astro # Servicios
│   │   ├── casos-de-exito.astro
│   │   ├── portfolio.astro
│   │   └── contacto.astro
│   ├── components/         # Componentes reutilizables
│   │   ├── Header.astro    # Menú de navegación
│   │   └── Footer.astro    # Pie de página
│   ├── layouts/
│   │   └── Layout.astro    # Layout base (SEO, meta tags)
│   └── styles/
│       └── global.css      # Estilos globales
├── public/                 # Archivos estáticos
│   ├── favicon.ico
│   ├── robots.txt
│   └── [tus imágenes]
└── package.json            # Dependencias
```

## 💡 Tips Útiles

### 1. Copiar Emojis
- Usa [emojipedia.com](https://emojipedia.com) para encontrar emojis
- Simplemente copia y pega en tu HTML

### 2. Visualizar Cambios Antes de Publicar
```bash
npm run dev
```
Abre `http://localhost:4321` en tu navegador

### 3. Crear una Copia de Seguridad
Antes de hacer cambios grandes:
```bash
git branch backup-$(date +%Y%m%d)
```

### 4. Revertir Cambios
Si algo sale mal:
```bash
git checkout src/pages/index.astro  # Revierte archivo específico
```

## 🆘 Solución de Problemas

### El sitio se ve raro después de editar

1. Verifica que no hayas borrado accidentalmente:
   - Comillas `"`
   - Corchetes `<` o `>`
   - Llaves `{` o `}`

2. Revisa los logs de Vercel para ver errores

### No sé cómo hacer algo

1. Busca un ejemplo similar en otra página
2. Copia y modifica ese código
3. Consulta el README.md

## 🎓 Recursos de Aprendizaje

- [HTML Básico](https://developer.mozilla.org/es/docs/Learn/HTML)
- [Astro Docs](https://docs.astro.build) (en inglés)
- [Tailwind CSS](https://tailwindcss.com/docs) - Para estilos

## 📞 Contacto para Soporte Técnico

Si necesitas ayuda avanzada:
- Email: contacto@luminaconsulting.ai
- Deja un issue en GitHub

---

**Recuerda**: Siempre puedes experimentar sin miedo. Git y Vercel te permiten volver atrás si algo sale mal. ¡No tengas miedo de probar cosas nuevas!
