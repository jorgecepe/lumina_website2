# Instrucciones para Agregar Logos

## 📁 Dónde poner los archivos de logo

Coloca todos tus archivos de logo en la carpeta: `public/`

```
lumina-site/
└── public/
    ├── logo.svg          # Logo principal (recomendado formato SVG)
    ├── logo.png          # Logo alternativo en PNG
    ├── favicon.ico       # Favicon del sitio
    └── iso-color.svg     # Isotipo (símbolo solo)
```

## 🎨 Cómo activar el logo en el sitio

### 1. Header (Menú de Navegación)

**Archivo:** `src/components/Header.astro`

**Líneas 9-14:** Encontrarás este código:

```html
<!-- Logo -->
<a href="/" class="flex items-center space-x-2">
  <!-- Logo temporal (texto). Para usar imagen, descomenta la línea siguiente y agrega logo.svg o logo.png a public/ -->
  <!-- <img src="/logo.svg" alt="Lumina Consulting" class="h-10" /> -->
  <div class="text-2xl font-bold text-lumina-navy">
    Lumina <span class="text-lumina-bright-blue">Consulting</span>
  </div>
</a>
```

**Para activar tu logo:**

1. Sube tu logo a `public/logo.svg` (o `logo.png`)
2. Quita el comentario de la línea del `<img>`:
   ```html
   <img src="/logo.svg" alt="Lumina Consulting" class="h-10" />
   ```
3. Comenta o elimina el `<div>` de texto

**Resultado:**
```html
<!-- Logo -->
<a href="/" class="flex items-center space-x-2">
  <img src="/logo.svg" alt="Lumina Consulting" class="h-10" />
</a>
```

### 2. Favicon (Ícono del navegador)

**Archivo:** `src/layouts/Layout.astro`

**Línea 30:** Encontrarás:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

**Para activar tu favicon:**

1. Convierte tu logo/isotipo a favicon en varios tamaños
2. Sube los archivos a `public/`:
   - `favicon.ico` (16x16, 32x32, 48x48)
   - `favicon.svg` (formato SVG)
   - `apple-touch-icon.png` (180x180)

3. Actualiza en `src/layouts/Layout.astro`:
   ```html
   <link rel="icon" type="image/x-icon" href="/favicon.ico" />
   <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
   <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
   ```

### 3. Footer (Opcional)

Si quieres agregar el logo en el footer, edita `src/components/Footer.astro`:

```html
<div>
  <img src="/logo-white.svg" alt="Lumina Consulting" class="h-8 mb-4" />
  <p class="text-lumina-light-blue mb-4">
    Transformando datos dispersos en información estratégica
  </p>
</div>
```

## 🖼️ Formatos Recomendados

- **Logo principal:** SVG (escalable, peso ligero)
- **Logo alternativo:** PNG con fondo transparente
- **Favicon:** ICO + SVG
- **Open Graph (redes sociales):** PNG 1200x630px

## 🎨 Ajustar tamaño del logo

En el código del logo, puedes ajustar el tamaño con clases de Tailwind:

```html
<!-- Pequeño -->
<img src="/logo.svg" alt="Lumina Consulting" class="h-8" />

<!-- Mediano (default) -->
<img src="/logo.svg" alt="Lumina Consulting" class="h-10" />

<!-- Grande -->
<img src="/logo.svg" alt="Lumina Consulting" class="h-12" />

<!-- Ancho fijo -->
<img src="/logo.svg" alt="Lumina Consulting" class="w-40" />
```

## 📦 Checklist de Logos

Una vez que tengas tus archivos listos:

- [ ] `public/logo.svg` - Logo principal para header
- [ ] `public/logo-white.svg` - Logo blanco para footer (opcional)
- [ ] `public/favicon.ico` - Favicon estándar
- [ ] `public/favicon.svg` - Favicon SVG
- [ ] `public/apple-touch-icon.png` - Ícono iOS (180x180)
- [ ] `public/og-image.png` - Imagen para redes sociales (1200x630)

## 🚀 Después de agregar los logos

1. Guarda todos los archivos
2. Haz commit:
   ```bash
   git add .
   git commit -m "Agregar logos oficiales de Lumina Consulting"
   git push
   ```
3. Vercel desplegará automáticamente en 1-2 minutos
4. Verifica el sitio en `https://luminaconsulting.ai`

## 💡 Tips

- **SVG es mejor que PNG** para logos porque se ve perfecto en cualquier resolución
- **Usa fondo transparente** en PNG si no usas SVG
- **Optimiza las imágenes** antes de subirlas para mejor rendimiento
- **Prueba en móvil** para asegurarte de que el logo se vea bien en pantallas pequeñas

---

**¿Necesitas ayuda?** Consulta el archivo `EDITING_GUIDE.md` para más información sobre edición del sitio.
