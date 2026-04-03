# Lumina Consulting — Contenido Final v1
## Documento de contenido + arquitectura para la nueva versión del sitio

> **Principio rector:** La homepage es un embudo, no un catálogo.
> Más servicios no significa más secciones — significa mejor organización.
> El trabajo de la homepage es generar una conversación, no explicar todo.

---

## PARTE 1: DECISIONES ESTRATÉGICAS

### 1.1 El problema
Lumina pasó de 4 a 7 servicios. Si ponemos 7 cards numeradas en la homepage, el resultado es una página que parece un directorio, no una consultora premium. El dueño de empresa mediana que llega al sitio necesita entender en 10 segundos qué hace Lumina y por qué debería hablar con Jorge.

### 1.2 La solución: 3 pilares, no 7 servicios
Los 7 servicios se agrupan en **3 pilares** para la homepage. El detalle de cada servicio vive en `/servicios` y en sus páginas individuales.

| Pilar | Servicios que incluye | Concepto |
|-------|----------------------|----------|
| **Visibilidad** | Dashboards + Control de gestión | "Ve cómo va tu negocio" |
| **Automatización** | Automatización inteligente + Inteligencia competitiva | "Lo repetitivo se hace solo" |
| **Construcción** | HR Analytics + Soluciones a medida + Capacitación | "Si no existe, lo construimos" |

### 1.3 Reglas de diseño (del critique)
- **Max 3 CTAs de WhatsApp** en homepage: hero, CTA final, botón flotante
- **Nav: 5 items** — Inicio, Servicios, Casos, Nosotros, Contacto
- **Cero grids de 4 cards numeradas repetidas** — cada sección tiene su propio layout
- **Mostrar, no describir** — screenshots > logos, nombres > anónimo
- **Progressive disclosure** — la homepage engancha, las sub-páginas profundizan

### 1.4 Navegación nueva

**Desktop (5 items):**
- Inicio
- Servicios (lleva a /servicios con los 7 servicios)
- Casos
- Nosotros
- Contacto

**Footer (links secundarios):**
- Blog, Recursos, FAQ, NodalTree, Privacidad, Términos

**Se elimina de la nav principal:** Blog, Recursos, FAQ, NodalTree, Portfolio

---

## PARTE 2: HOMEPAGE — sección por sección

---

### SECCIÓN 1: HERO
**Layout:** Asimétrico — texto (8 cols) + imagen (4 cols). Similar al actual pero con nuevo copy.

**Tag monospace:**
```
Datos · Automatización · Inteligencia de negocio
```

**Headline (serif, grande):**
```
Conectamos tus datos para que
dejes de adivinar
```

**Subtítulo:**
```
Conecto los sistemas que tu empresa ya usa — ERP, plataformas de venta,
bases de datos — los automatizo, y te doy la visibilidad que necesitas para
tomar decisiones con información real.
```

**CTA 1 (primario):** Conversemos → WhatsApp
**CTA 2 (secundario):** Ver servicios → /servicios

**Imagen:** Mantener el screenshot real del dashboard (chart2.png). Es más creíble que cualquier mockup.

**Nota de diseño:** El hero actual funciona bien. Solo cambia el copy. No agregar más elementos.

---

### SECCIÓN 2: PRUEBA SOCIAL COMPACTA
**Layout:** Franja horizontal con 3-4 números. NO cards. NO grid. Una línea de datos duros.

```
5+ industrias atendidas  ·  4,000+ empleados gestionados  ·  300+ vehículos monitoreados diariamente  ·  0 reportes manuales
```

**Nota de diseño:** Fondo `lum-ivory`, tipografía `font-display` grande para los números, `font-mono` pequeño para las etiquetas. Sin bordes, sin cards. Separadores con `·` o líneas verticales. Debe sentirse como un dato al pasar, no como una sección pesada. Máximo 1 línea en desktop.

---

### SECCIÓN 3: LOS 3 PILARES
**Layout:** 3 bloques apilados verticalmente, cada uno ocupa el ancho completo. NO un grid de 3 columnas. Cada bloque alterna la orientación (texto izquierda / texto derecha) para crear ritmo visual.

#### Pilar 1: Visibilidad
**Tag:** `VE TU NEGOCIO`
**Título:** Tu operación en una pantalla — actualizada, sin pedirle a nadie
**Texto:**
```
Conecto tu ERP, tus plataformas de venta y tus bases de datos a dashboards
que se actualizan solos. La gerencia ve ventas, márgenes, flujo de caja y
operación — consolidados, todos los días. Sin armar Excel, sin esperar al
cierre de mes.

Estado de resultados, presupuesto vs. real, KPIs con alertas. No solo
construyo dashboards — defino contigo qué medir y por qué.
```
**Dato duro:** "Empresa láctea con +60 años dejó Excel para sus comités de gestión"
**Link:** Ver servicio de dashboards → /servicios/dashboards-estrategicos
**Link:** Ver control de gestión → /servicios/control-de-gestion

#### Pilar 2: Automatización
**Tag:** `AUTOMATIZA LO REPETITIVO`
**Título:** Tus reportes, alertas y flujos de datos — sin intervención manual
**Texto:**
```
Robots que corren a las 7 AM, agentes de IA que clasifican emails, reportes
que llegan solos a tu correo. Automatizo con n8n, Python y GitHub Actions
para que tu equipo deje de hacer trabajo mecánico.

Incluye inteligencia competitiva: monitoreo diario de precios y posicionamiento
de tu competencia, con alertas cuando algo se mueve.
```
**Dato duro:** "Red de automotoras: de 3 horas de trabajo manual diario a cero"
**Link:** Ver automatización → /servicios/automatizacion-inteligente
**Link:** Ver inteligencia competitiva → /servicios/inteligencia-competitiva

#### Pilar 3: Construcción
**Tag:** `SI NO EXISTE, LO CONSTRUIMOS`
**Título:** Aplicaciones, herramientas e integraciones a la medida de tu operación
**Texto:**
```
Cuando el problema no se resuelve con un dashboard ni con software del mercado,
lo construyo. Aplicaciones web, herramientas internas, integraciones entre
sistemas que no se hablan. Desde MVPs funcionales hasta productos SaaS.

También capacitación aplicada — con tus datos reales, no con ejemplos de libro.
Power BI, análisis de datos, automatización. Franquicia SENCE disponible.
```
**Dato duro:** "NodalTree reemplazó software de USD 15,000/año en un banco"
**Link:** Ver soluciones a medida → /servicios/soluciones-a-medida
**Link:** Ver capacitación → /servicios/capacitacion

**Nota de diseño:** Cada pilar es un bloque grande (full-width dentro del container). Usar borde izquierdo grueso con color diferente por pilar (coral, mocha, sage) para diferenciarlos. Los "datos duros" van en `font-mono` destacado. No numerar. No usar cards.

---

### SECCIÓN 4: QUIÉN SOY
**Layout:** Horizontal — foto (1/4) + texto (3/4). Similar al actual pero con texto expandido en primera persona.

**Tag:** `FUNDADOR`
**Título:** Jorge Cepeda

**Texto:**
```
15 años diseñando sistemas de control de gestión en la industria financiera
— los últimos en el holding de inversiones de un banco. Hoy aplico esa
experiencia a empresas medianas que necesitan la misma visibilidad y control,
sin los costos de las soluciones enterprise.
```

**Credenciales (badges, mantener formato actual):**
- MBA UC
- Profesor U. Andes
- Microsoft PL-300
- 15+ años experiencia

**Link:** Ver LinkedIn → linkedin.com/in/jorgecepeda/
**Link:** Más sobre Lumina → /acerca-de

**Nota de diseño:** Mantener la estructura actual que funciona bien. Solo actualizar el texto. NO agregar más badges — 4 es el máximo.

---

### SECCIÓN 5: CASOS DESTACADOS
**Layout:** 2-3 casos con borde izquierdo (mantener estilo actual). Agregar nombre/cargo.

**Tag:** `RESULTADOS REALES`
**Título:** Casos de éxito

#### Caso 1
**Badges:** `Automatización` `Automotriz`
**Título:** Red de Automotoras — 300+ vehículos monitoreados diariamente
**Texto:**
```
De revisar precios a mano a recibir un ranking automatizado a las 7 AM.
De 3 horas de trabajo manual a cero. Detección inmediata de errores de
publicación y precios fuera de mercado.
```
**Quote:** *"Es como tener un analista 24/7 trabajando para nosotros."*
**Atribución:** — Gerente Comercial, red de automotoras en Chile

#### Caso 2
**Badges:** `Dashboards` `Inmobiliario`
**Título:** Grupo Inmobiliario — 7 sociedades con visibilidad financiera unificada
**Texto:**
```
Datos dispersos en Softland, Cloudbeds y planillas. Hoy los socios ven flujo
de caja real y proyectado en un mail semanal automático — sin intervención manual.
```
**Quote:** *"Pasamos de pedir reportes a tener la información esperándonos."*
**Atribución:** — Socio administrador, grupo inmobiliario

#### Caso 3 (opcional en homepage — 2 puede ser suficiente)
**Badges:** `Control de gestión` `Alimentos`
**Título:** Empresa Láctea — De Excel a dashboards que se usan
**Texto:**
```
Empresa con +60 años y 3 marcas. Tenían Power BI pero nadie lo usaba.
Modelo dimensional completo conectado a SAP B1. El equipo dejó de depender
de Excel para los comités de gestión.
```

**Link:** Ver más casos → /casos-de-exito
**CTA:** NO poner WhatsApp aquí. El link a casos es suficiente.

**Nota de diseño:** Mantener el estilo de borde izquierdo que funciona. Agregar la atribución debajo del quote en `font-mono text-mono-xs`. Si los clientes no permiten nombre completo, usar "Gerente Comercial, industria automotriz" — cualquier atribución es mejor que ninguna.

---

### SECCIÓN 6: NODALTREE
**Layout:** Split — texto (1/2) + screenshot real (1/2). NO solo un logo.

**Badge:** `PRODUCTO PROPIO`
**Título:** NodalTree
**Subtítulo:** Organigramas inteligentes desde tus datos

**Texto:**
```
Tu organigrama siempre actualizado, sin PowerPoint, sin software caro.
Importa desde Excel, CSV o base de datos. Edición en vivo, exportación PDF.
Multi-tenancy: cada empresa con su espacio.
```

**Dato duro:** Usado por un banco con 4,000+ empleados. Reemplazó software de USD 15,000/año.

**CTA:** Probar NodalTree → nodaltree.luminaconsulting.ai

**Nota de diseño:** REEMPLAZAR el logo actual con un screenshot real de NodalTree mostrando un organigrama. Si no hay screenshot disponible, crear uno. Un screenshot de la herramienta funcionando es 10x más convincente que un logo en una caja.

---

### SECCIÓN 7: CTA FINAL
**Layout:** Full-width, fondo oscuro (`section-dark`). Simple y directo.

**Título:**
```
¿Cuánto te cuesta no ver cómo va tu negocio hoy?
```

**Subtítulo:**
```
Respondemos en menos de 24 horas. Sin compromiso.
```

**CTA 1 (primario):** Contactar por WhatsApp → wa.me/...
**CTA 2 (secundario):** Agendar llamada → /contacto

**Nota de diseño:** Esta es la ÚNICA otra sección con WhatsApp CTA (además del hero y el botón flotante). Total = 3. No más.

---

## PARTE 3: PÁGINA DE SERVICIOS (/servicios)

### Header
**Título:** Lo que hacemos
**Subtítulo:** Datos, automatización e inteligencia para empresas que quieren decidir mejor

### Los 7 servicios (cada uno como card con link a página propia)

1. **Dashboards y visibilidad**
   `/servicios/dashboards-estrategicos`
   Conecto tus sistemas y te muestro cómo va tu operación, actualizado todos los días.

2. **Control de gestión con datos**
   `/servicios/control-de-gestion` (NUEVO)
   No basta con ver números. Defino contigo qué medir, cómo interpretarlo y qué decisiones tomar.

3. **Automatización inteligente**
   `/servicios/automatizacion-inteligente` (renombrar de automatizacion-reporteria)
   Robots, agentes de IA y flujos automáticos para que tu equipo deje de hacer trabajo mecánico.

4. **Inteligencia competitiva**
   `/servicios/inteligencia-competitiva` (renombrar de analisis-competencia)
   Monitoreo diario de precios y posicionamiento de tu competencia, con alertas automáticas.

5. **HR Analytics y organigramas**
   `/servicios/hr-analytics` (mantener)
   Visibilidad sobre dotación, rotación, costos laborales y desempeño. Incluye NodalTree.

6. **Soluciones a medida**
   `/servicios/soluciones-a-medida` (NUEVO)
   Aplicaciones web, herramientas internas e integraciones cuando el problema necesita algo hecho a medida.

7. **Capacitación**
   `/servicios/capacitacion` (renombrar de capacitacion-sence)
   Power BI, análisis de datos, automatización. Con tus datos reales. Franquicia SENCE.

**Nota de diseño para /servicios:** Acá sí puede haber un grid, pero NO todas cards iguales. Opción: los 3 primeros servicios (core) como cards grandes, los 4 restantes como cards compactas debajo. Esto crea jerarquía visual.

---

## PARTE 4: PÁGINA DE CASOS (/casos-de-exito)

### Los 5 casos completos

Cada caso sigue la estructura: Industria / Desafío / Solución / Resultado / Quote

1. **Red de Automotoras** — Inteligencia competitiva + automatización
2. **Grupo Inmobiliario** — Transformación digital completa (dashboards + control + automatización)
3. **Grupo Financiero** — HR Analytics + NodalTree
4. **Empresa Láctea** — De Excel a dashboards funcionales
5. **Clínica Veterinaria** — Visibilidad financiera y operacional

**Nota:** El contenido detallado de cada caso está en el archivo 20260404-content-suggestions.md, secciones "Caso 1" a "Caso 5". Usar ese contenido tal cual — es concreto, tiene métricas, y suena real.

**Nota de diseño:** NO hacer 5 cards iguales. Opciones:
- El caso más fuerte (Automotoras) como hero/destacado al tope, los demás en grid de 2
- Alternar layouts: caso grande + dos casos compactos + caso grande + caso compacto
- Filtros por industria usando los badges existentes

---

## PARTE 5: PÁGINA NOSOTROS (/acerca-de)

### Estructura propuesta

1. **Quién soy** — En primera persona, el texto completo del archivo de contenido (sección 2)
2. **Enfoque** — Los 4 puntos: Estrategia + ejecución, Automatización real, Sin dependencia, Foco en empresas medianas
3. **Credenciales** — MBA UC, Profesor U. Andes, PL-300, 15+ años
4. **Stack técnico** — Power BI, Python, SQL, n8n, React/Next.js, Supabase (para dar confianza técnica)
5. **Industrias** — La lista de 7 industrias del archivo de contenido (sección 7)

**Nota:** La sección "Por qué Lumina" (6 diferenciadores) puede vivir acá o distribuirse entre homepage y /servicios. No necesita su propia sección en homepage — los datos duros en cada pilar ya comunican los diferenciadores.

---

## PARTE 6: PÁGINAS SECUNDARIAS

### FAQ (/faq)
Mantener. Actualizar preguntas para reflejar los 7 servicios.

### Blog (/blog)
Mantener. No requiere cambios inmediatos. Considerar artículos futuros sobre automatización y soluciones a medida.

### Recursos (/recursos)
Mantener. Considerar agregar una guía sobre automatización con n8n.

### Contacto (/contacto)
Mantener formulario. Asegurar que funcione correctamente.

### Versión en inglés (/en/*)
Actualizar después de estabilizar el español. No es prioridad inmediata.

---

## PARTE 7: CONTENIDO QUE SE ELIMINA

- ❌ Sección "Por qué Lumina" como grid de 4 cards numeradas en homepage (se reemplaza con los 3 pilares que ya incluyen los diferenciadores)
- ❌ Sección "Manifesto" ("Tus datos ya existen...") — era filler. Los pilares ahora hacen ese trabajo con contenido real
- ❌ Metodología de pasos (si existía) — demasiado genérico
- ❌ Texto en tercera persona ("En Lumina Consulting transformamos...") — todo en primera persona
- ❌ WhatsApp CTA después de servicios, en testimonios, y en footer (quedan solo 3: hero, CTA final, flotante)

---

## PARTE 8: RESUMEN DE CAMBIOS VS. SITIO ACTUAL

| Aspecto | Antes | Después |
|---------|-------|---------|
| Servicios en homepage | 4 cards numeradas | 3 pilares full-width |
| Servicios totales | 5 | 7 (en /servicios) |
| Casos en homepage | 2 anónimos | 2-3 con atribución |
| Casos totales | 2 | 5 (en /casos-de-exito) |
| Nav items | 9 | 5 |
| WhatsApp CTAs (homepage) | 6 | 3 |
| NodalTree | Logo en una caja | Screenshot + CTA |
| Tono | Mixto | Primera persona consistente |
| Layouts homepage | 2 grids numerados | Todos los layouts distintos |
| Secciones homepage | 8 | 7 (más conciso, más sustancia) |

---

## PARTE 9: ORDEN DE IMPLEMENTACIÓN SUGERIDO

1. **Actualizar nav** — de 9 a 5 items (rápido, alto impacto)
2. **Reescribir homepage** — las 7 secciones con nuevo contenido
3. **Crear páginas de servicio nuevas** — control-de-gestion, soluciones-a-medida
4. **Renombrar páginas existentes** — automatizacion-reporteria → automatizacion-inteligente, etc.
5. **Actualizar /casos-de-exito** — agregar los 3 casos nuevos
6. **Actualizar /acerca-de** — texto en primera persona
7. **Actualizar /servicios** — de 5 a 7 servicios con jerarquía visual
8. **Screenshot NodalTree** — conseguir/crear screenshot real
9. **Actualizar DESIGN-SYSTEM.md** — alinear con implementación real
10. **Versión en inglés** — al final, cuando el español esté estable

---

## NOTAS PARA IMPLEMENTACIÓN TÉCNICA

### Rutas nuevas que crear:
- `/servicios/control-de-gestion`
- `/servicios/soluciones-a-medida`
- `/servicios/automatizacion-inteligente` (renombrar)
- `/servicios/inteligencia-competitiva` (renombrar)
- `/servicios/capacitacion` (renombrar)

### Redirects necesarios (en Vercel o Astro):
- `/servicios/automatizacion-reporteria` → `/servicios/automatizacion-inteligente`
- `/servicios/analisis-competencia` → `/servicios/inteligencia-competitiva`
- `/servicios/capacitacion-sence` → `/servicios/capacitacion`

### Stack: sin cambios
- Astro 4.15 + Tailwind + TypeScript
- Hosting: Vercel
- Dominio: luminaconsulting.ai
