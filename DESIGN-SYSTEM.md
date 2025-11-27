# Lumina Consulting - Design System

Sistema de diseño para mantener consistencia visual en todos los sitios y subsitios de Lumina Consulting.

## Tipografía

### Fuentes (Google Fonts)
```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
```

- **Display/Títulos**: `Plus Jakarta Sans` (weights: 500, 600, 700, 800)
- **Body/Texto**: `DM Sans` (weights: 400, 500, 600, 700)

### Configuración Tailwind
```js
fontFamily: {
  sans: ['DM Sans', 'system-ui', 'sans-serif'],
  display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
}
```

### Uso
- `font-display` para títulos h1, h2, h3
- `font-sans` (default) para párrafos y texto general

---

## Paleta de Colores

### Colores Principales
```js
colors: {
  'lumina-navy': '#0f172a',      // Fondo oscuro principal
  'lumina-navy-light': '#1e293b', // Fondo oscuro secundario
  'lumina-blue': '#3b82f6',       // Azul principal
  'lumina-accent': '#06b6d4',     // Cyan accent (destaque)
  'lumina-slate': '#64748b',      // Texto secundario
  'lumina-slate-light': '#94a3b8', // Texto terciario (sobre fondos oscuros)
  'lumina-success': '#10b981',    // Verde éxito
}
```

### Uso de Colores
| Elemento | Color |
|----------|-------|
| Fondo hero/CTA | `bg-lumina-navy` |
| Texto títulos | `text-lumina-navy` (claro) / `text-white` (oscuro) |
| Texto párrafos | `text-lumina-slate` |
| Texto sobre fondo oscuro | `text-lumina-slate-light` |
| Links/Acentos | `text-lumina-accent` |
| Checks/Success | `text-lumina-success` |
| Bordes sutiles | `border-lumina-blue/20` |

---

## Sombras

```js
boxShadow: {
  'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
  'glow-accent': '0 0 20px rgba(6, 182, 212, 0.2)',
  'elevated': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
  'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
  'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
}
```

---

## Animaciones

### Keyframes
```js
keyframes: {
  'fade-in': {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  'fade-in-up': {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'scale-in': {
    '0%': { opacity: '0', transform: 'scale(0.95)' },
    '100%': { opacity: '1', transform: 'scale(1)' },
  },
  'float': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
  'pulse-slow': {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.5' },
  },
}
```

### Animation Classes
```js
animation: {
  'fade-in': 'fade-in 0.5s ease-out',
  'fade-in-up': 'fade-in-up 0.6s ease-out',
  'scale-in': 'scale-in 0.4s ease-out',
  'float': 'float 6s ease-in-out infinite',
  'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
}
```

### Animation Delays (CSS)
```css
.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-400 { animation-delay: 400ms; }
.animation-delay-500 { animation-delay: 500ms; }
.animation-delay-600 { animation-delay: 600ms; }
```

---

## Scroll Animations

### CSS Classes
```css
.scroll-fade {
  @apply opacity-0 translate-y-8 transition-all duration-700 ease-out;
}

.scroll-fade.is-visible {
  @apply opacity-100 translate-y-0;
}
```

### JavaScript (Intersection Observer)
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.scroll-fade').forEach(el => observer.observe(el));
});
```

---

## Componentes

### Botones

```css
.btn-primary {
  @apply inline-flex items-center justify-center gap-2
         px-6 py-3 rounded-xl font-semibold
         bg-gradient-to-r from-lumina-blue to-lumina-accent
         text-white shadow-lg shadow-lumina-blue/25
         hover:shadow-xl hover:shadow-lumina-accent/30
         hover:-translate-y-0.5
         transition-all duration-300;
}

.btn-secondary {
  @apply inline-flex items-center justify-center gap-2
         px-6 py-3 rounded-xl font-semibold
         border-2 border-lumina-blue/30 text-lumina-navy
         hover:border-lumina-accent hover:text-lumina-accent
         transition-all duration-300;
}

.btn-accent {
  @apply inline-flex items-center justify-center gap-2
         px-6 py-3 rounded-xl font-semibold
         bg-lumina-accent text-white
         hover:bg-lumina-accent/90
         shadow-lg shadow-lumina-accent/25
         transition-all duration-300;
}
```

### Cards

```css
.card {
  @apply bg-white rounded-2xl p-6
         shadow-card hover:shadow-card-hover
         border border-gray-100
         transition-all duration-300;
}

.feature-card {
  @apply bg-white rounded-2xl p-8
         shadow-card hover:shadow-card-hover
         border border-gray-100
         hover:border-lumina-accent/30
         transition-all duration-300
         relative overflow-hidden;
}

.feature-card::before {
  content: '';
  @apply absolute top-0 left-0 right-0 h-1
         bg-gradient-to-r from-lumina-blue to-lumina-accent
         opacity-0 transition-opacity duration-300;
}

.feature-card:hover::before {
  @apply opacity-100;
}
```

### Icon Container
```css
.icon-container {
  @apply w-14 h-14 rounded-2xl
         bg-gradient-to-br from-lumina-blue/10 to-lumina-accent/10
         flex items-center justify-center
         text-lumina-blue;
}
```

### Badges
```css
.badge {
  @apply inline-flex items-center gap-2
         px-4 py-2 rounded-full
         text-sm font-medium
         border;
}

.badge-accent {
  @apply inline-flex items-center gap-2
         px-4 py-2 rounded-full
         text-sm font-medium
         bg-lumina-accent/10 text-lumina-accent
         border border-lumina-accent/20;
}
```

### Testimonial Card
```css
.testimonial-card {
  @apply bg-gradient-to-br from-lumina-navy-light to-lumina-navy
         rounded-2xl p-8
         border border-white/10
         relative;
}

.testimonial-card::before {
  content: '"';
  @apply absolute -top-4 left-6
         text-6xl text-lumina-accent/20
         font-serif;
}
```

### Check List
```css
.check-list {
  @apply space-y-3;
}

.check-list li {
  @apply flex items-start gap-3 text-lumina-slate;
}

.check-list li::before {
  content: '';
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
  background-color: rgb(16 185 129 / 0.1);
  border-radius: 9999px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2310b981'%3E%3Cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-position: center;
  background-repeat: no-repeat;
}
```

---

## Glassmorphism

```css
.glass {
  @apply bg-white/80 backdrop-blur-md border border-white/20;
}

.glass-dark {
  @apply bg-lumina-navy/80 backdrop-blur-md border border-white/10;
}
```

---

## Backgrounds Decorativos

### Gradient Orbs (para hero sections)
```html
<div class="absolute inset-0 overflow-hidden">
  <div class="absolute top-1/4 -right-32 w-96 h-96 bg-lumina-blue/15 rounded-full blur-3xl" />
  <div class="absolute bottom-0 -left-32 w-96 h-96 bg-lumina-accent/10 rounded-full blur-3xl" />
</div>
```

### Grid Pattern
```css
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E");
```

### Divider Gradient
```css
.divider-gradient {
  @apply h-px bg-gradient-to-r from-transparent via-lumina-blue/20 to-transparent;
}
```

---

## Estructura de Secciones

### Hero Section (Dark)
```html
<section class="relative py-24 bg-lumina-navy overflow-hidden">
  <!-- Gradient orbs -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-1/4 -right-32 w-96 h-96 bg-lumina-blue/15 rounded-full blur-3xl" />
    <div class="absolute bottom-0 -left-32 w-96 h-96 bg-lumina-accent/10 rounded-full blur-3xl" />
  </div>
  <div class="container-custom relative">
    <!-- Content -->
  </div>
</section>
```

### Content Section (Light)
```html
<section class="py-24 bg-white">
  <div class="container-custom">
    <!-- Content with scroll-fade classes -->
  </div>
</section>
```

### CTA Section (Dark)
```html
<section class="py-24 bg-lumina-navy relative overflow-hidden">
  <!-- Similar to hero with gradient orbs -->
</section>
```

---

## Iconos SVG Comunes

### Check Icon
```html
<svg class="w-5 h-5 text-lumina-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>
```

### Arrow Right
```html
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
```

### WhatsApp
```html
<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
</svg>
```

---

## Container
```css
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
```

---

## Notas Importantes

1. **No usar emojis** - Siempre usar iconos SVG
2. **Scroll animations** - Agregar clase `scroll-fade` a elementos que aparecen al hacer scroll
3. **Animation delays** - Usar `animation-delay-100`, `animation-delay-200`, etc. para efectos staggered
4. **Glassmorphism en header** - El header debe tener `backdrop-blur` y ser fixed
5. **Gradient orbs** - Usar en hero sections y CTAs para dar profundidad
6. **Bordes sutiles** - Preferir `border-gray-100` o `border-lumina-blue/20` sobre bordes sólidos
