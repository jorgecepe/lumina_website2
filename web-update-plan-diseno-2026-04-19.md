# Plan de diseño web con Claude Design
> Preparado 2026-04-19 para relanzamiento de luminaconsulting.ai

Este documento es la guía paso a paso para usar [claude.ai/design](https://claude.ai/design) de forma eficiente (sin quemar tokens) y traer de vuelta mockups listos para implementar en Astro.

---

## 0. Decisiones tomadas (cerradas previamente)

| # | Tema | Decisión |
|---|---|---|
| 1 | Pricing | "Desde X UF" solo en `/servicios`, homepage sin cifras |
| 2 | NodalTree | Landing básica en subdomain (pricing público + demo agendable), tratamiento breve como caso + sección en sitio principal con CTA al subdomain |
| 3 | Industrias | Página única `/industrias` con 8 verticales en secciones, micropárrafo + casos linkeados |
| 4 | Slug IA | `/servicios/automatizacion-y-agentes-ia`, redirect 301 desde el slug antiguo |
| 5 | Fusión BI | Una sola página `/servicios/business-intelligence`, redirects 301 desde dashboards-estrategicos y control-de-gestion |
| 6 | Copy operador | "Los sistemas detectan las fallas antes que tu equipo, y las resolvemos dentro del SLA acordado" |

**Adicionales:**
- Eliminar toda mención de SENCE del sitio (incluido `public/llms.txt`).
- Chatbot RAG llegará en próximas semanas; reservar espacio en UI.
- Arreglar 4 URLs 404 reportadas en GSC, post-relanzamiento.

---

## 1. Fase 1: Setup del Design System (una sola vez, gasto bajo de tokens)

Esta fase es onboarding. **No gastes tokens generando nada acá.** El objetivo es que Claude Design entienda la identidad visual actual para que después respete el sistema neo-brutalist en los mockups.

### Pasos

1. Ir a [claude.ai/design](https://claude.ai/design).
2. En la parte inferior del panel izquierdo hacer click en **"Set up design system"** (NO en "+ Create" arriba: eso abre un proyecto que consume tokens).
3. Seleccionar o crear la organización "Lumina Consulting".
4. Cuando pida inputs, entregar los siguientes **en este orden de prioridad**:

#### Input 1: URL del sitio vivo (el más importante)

```
https://www.luminaconsulting.ai
```

Claude Design va a scrapear el sitio y extraer paleta, tipografía, patrones de fondo, gradientes e iconografía. Es el input más barato y más preciso porque lee el HTML final renderizado.

#### Input 2: Logos (subirlos si pregunta)

Rutas en el repo (arrastrar al uploader):
- `lumina-site/public/logo-wide.png` (horizontal, principal)
- `lumina-site/public/logo-single.svg` (icono solo)
- `lumina-site/public/logo-vertical.svg` (vertical)
- `lumina-site/public/favicon.png`

#### Input 3: Paleta (si la pide explícita)

- `lumina-site/public/color palette.png`

#### Input 4: Repo GitHub (opcional, solo si pregunta)

Si el repo es público y Claude Design pide URL, pásasela. **No es indispensable** porque con la URL del sitio ya tiene todo. Si el repo es privado, saltar este paso.

### Qué revisar antes de "Publish"

Cuando Claude Design muestre el sistema extraído, verificar:

- [ ] Paleta incluye al menos: `#FF6B35` (coral), `#1a1814` (black), `#F5F0EB` (cream), `#A47764` (mocha), `#7D8471` (sage).
- [ ] Tipografía identifica: Instrument Serif (títulos), Outfit (cuerpo), JetBrains Mono (accents), Bebas Neue (display).
- [ ] Componentes propuestos incluyen botones con sombras solid (4px offset, no blur). Ese es el sello neo-brutalist.
- [ ] No hay tipografía rara inventada. Si aparece algo como "Inter" o "Poppins" que no usas, corregir manualmente antes de publicar.

Una vez verificado, **click en "Published"** para que todos los proyectos nuevos hereden el sistema.

### Tiempo estimado y consumo

- Tiempo: 10 a 15 minutos.
- Tokens: bajo. Onboarding es setup, no generación iterativa.

---

## 2. Fase 2: Primer proyecto — Homepage nueva (alto consumo de tokens)

Esta fase sí consume tokens seriamente. Objetivo: generar el mockup de la homepage nueva, iterar hasta que quede, y usarla como ancla visual para las demás páginas.

### Pasos

1. Volver al dashboard de Claude Design.
2. En el panel izquierdo, en las tabs **"Prototype | Slide deck | From template | Other"**, click en **"Prototype"**.
3. Elegir **"High-fidelity"** (no "Wireframe"). Queremos mockup pulido con paleta y tipo real, no sketch.
4. En "Project name" escribir:

```
Lumina Homepage 2026 v1
```

5. Click en **"+ Create"**.
6. Se abre la vista de chat (izquierda) + canvas (derecha).
7. En el chat, **pegar el prompt completo de la sección 3 de este documento**.
8. Esperar a que genere (1 a 3 minutos típicamente).
9. Revisar el resultado contra los criterios de aceptación (sección 5).
10. Iterar con comentarios específicos (sección 4: cómo dar feedback sin quemar tokens).

---

## 3. Prompt principal para la homepage

> **Importante:** copiar este prompt completo, sin editar. Está optimizado para ser específico y denso. Prompts vagos fuerzan a Claude Design a iterar más veces, lo que gasta más tokens.

```
Diseña la homepage de luminaconsulting.ai, una consultora chilena de
Business Intelligence fundada por Jorge Cepeda (MBA UC, PL-300,
profesor UANDES, 15+ años en control financiero).

CONTEXTO DE MARCA
Lumina ayuda a empresas medianas chilenas (50 a 500 personas) a ver su
negocio con la misma claridad que tiene un holding. Conecta ERPs,
plataformas de venta, APIs y sistemas legacy en dashboards y agentes de
IA que se actualizan solos. Tono: profesional, directo, seguro.
Levemente irreverente. No cliché corporativo. No lleno de emojis.

AUDIENCIA
Dueños y socios de empresas medianas chilenas. Perfil: operan el negocio,
no son técnicos, están cansados de depender de Excel y del equipo que
lo mueve. Buscan visibilidad real y confiable, no vendedores de humo.

PROPUESTA DE VALOR (hero, mantener sin cambios)
H1: "Abre una pantalla y ve cómo va tu negocio hoy"
Subhead: "Sin pedirle a nadie que haga un Excel. Conectamos tus
sistemas, armamos los indicadores que importan, y los dejamos en
pantallas que se actualizan solas."
CTAs: "Solicitar asesoría" (primario) + "Conversar por WhatsApp"
(secundario).

ESTRUCTURA DE LA PÁGINA (en este orden)

Sección 1 — Hero
Full viewport. H1 grande en Instrument Serif. Subhead en Outfit.
Dos botones neo-brutalist con sombra solid 4px. Ilustración o patrón
geométrico a la derecha o como fondo discreto. Badge superior: "Chile,
desde 2021".

Sección 2 — Servicios principales (4 cards grandes)
Título de sección: "Cuatro líneas, un mismo objetivo: que veas y
muevas tu negocio con datos".

Card 1 — Inteligencia de negocio y dashboards
"Dashboards conectados a tu ERP, sin Excel intermedio. Definimos
contigo qué medir y lo dejamos actualizado todos los días sin que
nadie mueva un dedo."

Card 2 — Automatización y agentes de IA
"Robots, agentes de IA y flujos automáticos para que tu equipo deje
de hacer trabajo mecánico. Desde flujos n8n hasta asistentes
conversacionales conectados a tus sistemas."

Card 3 — Automatización de plataformas sin API (RPA + IA)
"Si tu operación depende de subir, descargar o conciliar datos en
plataformas que no tienen API, automatizamos esa carga sin pedirle
nada al proveedor."

Card 4 — Soluciones a medida e infraestructura
"Aplicaciones web, integraciones, agentes específicos, infraestructura
cloud gestionada. Cuando lo estándar no calza, construimos lo que
necesitas y lo mantenemos en producción."

Cada card: título, descripción corta, lista de 2 a 3 ejemplos
concretos, link "Ver servicio".

Sección 3 — Servicios complementarios (3 cards más chicas)
Tratamiento visual menor, fila horizontal.
- Inteligencia competitiva
- HR Analytics y organigramas (mención de NodalTree como producto)
- Capacitación corporativa (credencial UANDES y Microsoft PL-300,
  NO mencionar SENCE)

Sección 4 — Cómo trabajamos (modalidades, sin cifras)
Título: "Tres formatos según el momento del problema".
Tres cards o tres columnas:
- Diagnóstico y sprint (4 a 8 semanas, primer entregable rápido)
- Programa por fases (2 a 4 meses, proyectos grandes)
- Acompañamiento mensual (mantenimiento continuo, horas o SLA)
Nota al pie: "Todas las modalidades incluyen documentación, código
fuente, transferencia al equipo y sin lock-in de proveedor. Más
detalle y rangos de inversión en /servicios."

Sección 5 — Industrias que atendemos
8 chips o tiles compactos con iconos discretos, sin logos de clientes:
Automotriz, Hotelería y alojamiento, Acuicultura, Manufactura
industrial, Veterinaria, Inmobiliario, Servicios financieros, Sector
público.
Link: "Ver enfoque por industria".

Sección 6 — Casos de éxito (7 cards)
Todos anonimizados. Formato: descriptor de industria + tamaño + tipo
de operación. 1 párrafo por caso + métrica concreta + CTA "Ver caso
completo".

1. Red de automotoras (multi-sucursal)
2. Red de clínicas veterinarias (operación distribuida)
3. Holding inmobiliario multi-sociedad
4. Grupo financiero y evaluación de talento (enlace a NodalTree)
5. PYME chilena de iluminación LED para acuicultura (RPA + cumplimiento)
6. Fabricante chileno de pinturas industriales (BI sobre Softland)
7. Operación de hospitalidad multi-propiedad (Cloudbeds + Power BI)

Sección 7 — Operador, no solo consultor
Bloque con foto de Jorge y copy:
"Lumina no entrega informes y se va. Operamos lo que construimos:
pipelines en producción con monitoreo automatizado, agentes de IA
con retraining, infraestructura cloud con SLA. Los sistemas detectan
las fallas antes que tu equipo, y las resolvemos dentro del SLA
acordado."
CTA: "Conocer más sobre Jorge y el equipo".

Sección 8 — CTA final
Título corto y directo. Dos botones: WhatsApp y formulario de
contacto. Dejar espacio previsto para un widget de chatbot RAG
(aún no desarrollado) en esquina inferior derecha, tipo floating
button.

Footer estándar (links a servicios, industrias, casos, sobre, blog,
recursos, contacto, legal).

RESTRICCIONES DE DISEÑO
- Mantener el sistema neo-brutalist ya extraído en el design system.
- Paleta exacta: lum-black #1a1814, lum-cream #F5F0EB, lum-coral
  #FF6B35, lum-mocha #A47764, lum-sage #7D8471, lum-slate #64605A.
- Tipografía: Instrument Serif (H1, H2), Outfit (cuerpo), JetBrains
  Mono (badges, mono accents), Bebas Neue (display opcional).
- Sombras solid (box-shadow 4px 4px 0px black), nunca blur.
- Borders negros de 2px en cards y botones.
- Textura sutil de grano en fondos claros (ya existe en el sitio).
- Mobile-first. El mockup debe verse perfecto en 375px y 1440px.
- No gradientes modernos tipo SaaS. No glassmorphism.

RESTRICCIONES DE CONTENIDO
- Idioma: español chileno. Tono directo, no corporativo.
- NUNCA usar em-dashes largos con espacios (ej: " — "). Usar comas,
  paréntesis, puntos, o dos puntos.
- NO mencionar SENCE ni franquicia tributaria en capacitación.
- NO mencionar nombres reales de clientes. Todos los casos van
  anonimizados por industria y tamaño.
- NO usar la palabra "retainer". Usar "acompañamiento mensual".
- Evitar: "insights", "stakeholder", "quick win". Usar: "hallazgos",
  "interlocutor", "primer entregable".

ENTREGABLE
Una sola pantalla scrolleable (homepage completa) en desktop 1440px
y mobile 375px, como prototipo de alta fidelidad navegable.
```

---

## 4. Cómo iterar sin quemar tokens

Cada iteración cuesta. Estas reglas reducen consumo:

### Feedback eficiente

**Mal** (vago, fuerza a Claude Design a rehacer mucho):
> "No me gusta, hacelo más moderno."

**Bien** (específico, quirúrgico):
> "En la sección 2, cambiar el orden de las 4 cards: Inteligencia de
> negocio primero, luego Automatización, luego Soluciones a medida,
> RPA al final. Mantener el resto igual."

### Reglas operativas

1. **No generar de nuevo toda la página** si solo un bloque falla. Pedir cambio quirúrgico.
2. **Usar inline comments** directamente sobre el canvas en vez de describir en el chat. Claude Design los procesa con menos contexto.
3. **No pedir "otra versión"** a menos que la actual esté irrecuperable. Cada versión nueva es ~50-80% del costo de la primera.
4. **Si algo se ve mal en mobile,** pedir el ajuste específico ("en mobile, apilar las 4 cards de servicios verticalmente, título reducido a 40px"), no regenerar todo.
5. **Si una sección quedó perfecta, congelarla** y enfocar la iteración en las otras. Claude Design respeta secciones no mencionadas.

### Cuándo dar por hecha la homepage

- Criterios duros (sección 5 abajo) cumplidos.
- Mobile y desktop ambos correctos.
- Sin em-dashes, sin SENCE, sin nombres de cliente.
- 0 errores de contenido (typos, info incorrecta).

---

## 5. Criterios de aceptación para la homepage

Checklist antes de pasar a la siguiente pantalla:

### Estructurales
- [ ] 8 secciones en el orden indicado.
- [ ] Hero mantiene copy actual.
- [ ] 4 cards de servicios principales + 3 secundarias.
- [ ] Modalidades sin cifras (solo cualitativo).
- [ ] 8 industrias listadas.
- [ ] 7 casos de éxito.
- [ ] Bloque operador con copy nuevo.
- [ ] Espacio para chatbot RAG en esquina inferior derecha.

### De diseño
- [ ] Paleta neo-brutalist correcta.
- [ ] Tipografía Instrument Serif + Outfit visible.
- [ ] Sombras solid, no blur.
- [ ] Mobile 375px funciona.

### De contenido
- [ ] Sin em-dashes " — ".
- [ ] Sin "SENCE".
- [ ] Sin nombres reales de clientes.
- [ ] Sin "retainer", "insights", "stakeholder".

---

## 6. Fase 3: Pantallas derivadas (prompts cortos)

Una vez aprobada la homepage, **crear proyectos separados** para cada una de estas pantallas. Los prompts pueden ser más cortos porque el design system y el tono ya están establecidos.

Orden sugerido (por impacto):

1. `/servicios` (detalle de las 4 líneas + tabla de modalidades con UF).
2. `/servicios/business-intelligence` (la fusión: asesoría de KPIs + implementación).
3. `/servicios/automatizacion-y-agentes-ia` (3 sub-familias: flujos, agentes RAG, conversacionales).
4. `/servicios/rpa-plataformas-sin-api` (nueva).
5. `/industrias` (8 secciones en una página).
6. `/acerca-de` (reposicionamiento operador + equipo).
7. `/casos-de-exito` (7 casos desarrollados).
8. Subdomain NodalTree (landing básica).

Los prompts para cada una los armamos en este mismo archivo después de que la homepage esté validada.

---

## 7. Post-Claude Design: vuelta a Claude Code

Cuando tengas los mockups aprobados:

1. Exportar a HTML standalone desde Claude Design (mejor que capturas, porque conserva spacing exacto).
2. Abrir el repo en Claude Code.
3. Iterar los componentes Astro contra el HTML exportado, sección por sección.
4. Actualizar `CLAUDE.md` con la nueva taxonomía de 4 servicios.
5. Actualizar `DESIGN-SYSTEM.md` con lo formalizado en Claude Design (hoy está desactualizado).
6. Configurar redirects 301 en `astro.config.mjs` para los slugs fusionados.
7. Eliminar menciones SENCE en todo el sitio (incluido `public/llms.txt`).
8. QA en `npm run build` + preview local.
9. Deploy a Vercel.
10. En GSC: enviar sitemap de nuevo, pedir re-crawl de URLs clave, arreglar los 4 404.

---

## 8. Consejos finales para no quemar tokens

- **Empezar SIEMPRE con "Set up design system"** antes de crear proyectos. Es barato y hace que cada prompt posterior sea más corto (no hay que repetir paleta/tipografía).
- **Un proyecto = una pantalla.** Nunca pedir "toda la web" en un solo proyecto.
- **Primer prompt muy denso,** después iteraciones quirúrgicas.
- **Revisar antes de regenerar.** Si el 70% está bien, arreglar el 30% con edits puntuales, no regenerar.
- **Si el plan Max se agota**, Claude Design va a bloquear el proyecto temporalmente. En ese caso, pausar, volver al día siguiente (los créditos se renuevan cada 5 horas en Max).
- **Exportar cuando esté listo.** Mantener proyectos abiertos en Claude Design no consume tokens; consume tokens cada vez que le pides que genere o modifique algo.

---

**Fin del plan.** Si algo no calza con lo que ves en Claude Design (porque la herramienta es muy nueva y la UI puede cambiar), avisar y ajustamos el documento.
