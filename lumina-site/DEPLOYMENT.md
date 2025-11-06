# Guía de Deployment - Lumina Consulting Website

Esta guía te ayudará a desplegar tu sitio web en Vercel de forma 100% gratuita.

## 📋 Pre-requisitos

- Cuenta de GitHub (gratuita)
- Dominio luminaconsulting.ai (ya lo tienes)
- Repositorio GitHub con el código del sitio

## 🚀 Paso 1: Preparar el Repositorio en GitHub

### Opción A: Si ya tienes el código en GitHub

Si ya tienes el repositorio `jorgecepe/lumina_website`, simplemente asegúrate de que:

1. Todo el código del sitio esté en la carpeta `lumina-site/`
2. Haz commit y push de cualquier cambio pendiente:

```bash
cd lumina_website
git add .
git commit -m "Preparar sitio para deployment"
git push origin claude/consulting-services-website-011CUr3XjT6V6paytRvPSxQp
```

### Opción B: Si necesitas crear el repositorio

```bash
# En la carpeta lumina-site
cd lumina-site
git init
git add .
git commit -m "Initial commit: Lumina Consulting website"
git remote add origin https://github.com/jorgecepe/lumina_website.git
git push -u origin main
```

## 🌐 Paso 2: Crear Cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Sign Up"
3. Selecciona "Continue with GitHub"
4. Autoriza a Vercel para acceder a tus repositorios de GitHub

## 📦 Paso 3: Importar Proyecto a Vercel

1. Una vez dentro de Vercel, haz clic en **"Add New..."** → **"Project"**

2. Selecciona tu repositorio:
   - Busca `jorgecepe/lumina_website`
   - Haz clic en **"Import"**

3. Configurar el proyecto:
   - **Framework Preset**: Vercel debería detectar automáticamente "Astro"
   - **Root Directory**: Si tu código está en `lumina-site/`, selecciona esa carpeta
   - **Build Command**: `npm run build` (ya viene por defecto)
   - **Output Directory**: `dist` (ya viene por defecto)
   - **Install Command**: `npm install` (ya viene por defecto)

4. Click en **"Deploy"**

¡Vercel comenzará a construir y desplegar tu sitio! Esto tomará 1-2 minutos.

## 🎉 Paso 4: Verificar el Sitio

Cuando termine el deployment:

1. Vercel te mostrará una URL temporal como: `https://lumina-consulting-xxxx.vercel.app`
2. Haz clic en **"Visit"** para ver tu sitio en vivo
3. Verifica que todo se vea correctamente

## 🌍 Paso 5: Conectar tu Dominio Personalizado

Ahora vamos a conectar `luminaconsulting.ai`:

### En Vercel:

1. Ve a tu proyecto en Vercel
2. Click en **"Settings"** (arriba)
3. Click en **"Domains"** en el menú lateral
4. En "Add Domain", escribe: `luminaconsulting.ai`
5. Click en **"Add"**

Vercel te mostrará los registros DNS que necesitas configurar.

### Configurar DNS en tu Proveedor de Dominio:

Vercel te dará instrucciones específicas, pero típicamente necesitarás:

**Opción A: Registro A (Recomendado)**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Opción B: Registro CNAME**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 3600
```

### Pasos en tu Proveedor de Dominio:

1. Inicia sesión donde compraste `luminaconsulting.ai`
2. Busca "DNS Settings" o "Manage DNS"
3. Agrega los registros que Vercel te indicó
4. Guarda los cambios

⏰ **Nota**: Los cambios de DNS pueden tomar de 5 minutos a 48 horas en propagarse completamente (usualmente es rápido, ~15-30 minutos).

## ✅ Paso 6: Verificar el Dominio

1. Espera unos minutos
2. Visita `https://luminaconsulting.ai` en tu navegador
3. Deberías ver tu sitio en vivo!

Vercel automáticamente:
- ✅ Configura HTTPS/SSL (sitio seguro)
- ✅ Redirige www a dominio principal
- ✅ Optimiza el rendimiento global (CDN)

## 🔄 Paso 7: Configurar Deployments Automáticos

¡Ya está configurado! Cada vez que hagas push a tu rama principal:

```bash
git add .
git commit -m "Actualizar contenido"
git push
```

Vercel automáticamente:
1. Detecta el cambio
2. Construye el sitio
3. Lo despliega en producción
4. Todo en ~1-2 minutos

## 📊 Configurar Google Analytics (Opcional)

Para agregar Google Analytics al sitio:

1. Ve a [analytics.google.com](https://analytics.google.com)
2. Crea una propiedad para `luminaconsulting.ai`
3. Copia el ID de medición (G-XXXXXXXXXX)
4. Agrega este código en `src/layouts/Layout.astro` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

5. Haz commit y push de los cambios

## 🐛 Solución de Problemas

### El sitio no se despliega

- Verifica que `package.json` esté en la raíz correcta
- Revisa los logs de build en Vercel
- Asegúrate de que no haya errores de TypeScript

### El dominio no funciona

- Espera al menos 30 minutos para propagación DNS
- Verifica que los registros DNS estén correctos
- Usa [dnschecker.org](https://dnschecker.org) para verificar propagación

### Cambios no se reflejan

- Vercel hace caché agresivo
- Haz "hard refresh" en tu navegador: `Ctrl+Shift+R` (Windows) o `Cmd+Shift+R` (Mac)
- Verifica que el deployment haya terminado en Vercel

## 💰 Costos

- ✅ **Vercel Free Tier**: $0/mes (perfecto para este sitio)
- ✅ Incluye:
  - Bandwidth ilimitado
  - 100 GB de transferencia
  - Deployments ilimitados
  - HTTPS automático
  - CDN global

Solo pagas por tu dominio (que ya tienes).

## 📞 Soporte

Si tienes problemas:

1. Revisa la [documentación de Vercel](https://vercel.com/docs)
2. Revisa el archivo README.md del proyecto
3. Contacta al desarrollador

## 🎊 ¡Felicitaciones!

Tu sitio web profesional está ahora en vivo y accesible en todo el mundo. Cada cambio que hagas será automáticamente desplegado.

**URLs de tu sitio:**
- 🌐 Producción: https://luminaconsulting.ai
- 📊 Dashboard Vercel: https://vercel.com/dashboard

---

**Próximos pasos recomendados:**

1. ✅ Configura Google Analytics
2. ✅ Registra el sitio en Google Search Console
3. ✅ Comparte el sitio en redes sociales
4. ✅ Configura email profesional (jcepeda@luminaconsulting.ai)
