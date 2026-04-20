# Actualización del sitio luminaconsulting.ai, sugerencias 2026-04-19

> **Documento input para el proyecto Claude Code de `lumina-site/` (Astro 4.15 + Tailwind).**
> Autor: análisis de portafolio real de clientes 2026-04-19. Revisar y refinar con Jorge antes de implementar.

---

## 0. Contexto y diagnóstico en una línea

El sitio actual vende un Lumina de 2024 (BI + automatización para empresas medianas con Excel agotado). El portafolio real de 2026 es más amplio: agentes de IA productivos, RPA contra plataformas sin API, infraestructura cloud gestionada, integración multi-sociedad, hotelería y acuicultura. Esta actualización alinea la web con lo que ya estás entregando y cobrando.

---

## 1. Decisiones tomadas sin preguntar (revisar antes de implementar)

1. **Anonimización total de clientes en el sitio web.** Ningún cliente se nombra. Todos los casos de éxito usan descriptores de industria + tamaño + tipo de operación. Esto incluye Isidora 23 (su autorización es solo para mención oral en reuniones, no para web).
2. **Sin mención a SENCE en ningún lado** (estado en revisión interna del programa SENCE, no es momento de apoyarse en eso).
3. **Reemplazo de "retainer" con terminología local chilena**, según contexto:
   - "Asesoría continua por horas mensuales contratadas" cuando el modelo es horas-mes (ejemplo Vievet).
   - "Servicio mensual con SLA" cuando es fijo-por-servicio (ejemplo Focus).
   - "Acompañamiento mensual" o "consultor BI fraccional" para posicionamiento premium en `/acerca-de` y `/servicios`.
   - Evitar las palabras "retainer", "subscription", "membership".
4. **Pricing público en rangos UF orientativos** (no precios exactos). Esto auto-califica al prospecto antes del contacto. Si prefieres no exponer rangos, marcar como `[OMITIR_PRICING]` y dejar solo descriptores cualitativos.
5. **Mantener stack y diseño actual** (Astro + Tailwind + neo-brutalist). Todos los cambios son de contenido y estructura, no de UI.

---

## 2. Cambios prioritarios (alto impacto, bajo esfuerzo)

Si solo se implementa esto, el sitio ya queda alineado con la realidad. Detalle por archivo más abajo.

| Prioridad | Archivo | Cambio |
|---|---|---|
| P0 | `src/pages/index.astro` | Reescribir bloque de servicios con nueva taxonomía (4 líneas en vez de 7), agregar bloque de modalidades de contratación |
| P0 | `src/pages/servicios.astro` | Reescribir 7 servicios actuales agrupándolos en 4 líneas + agregar 2 servicios nuevos (RPA y AI conversacional) |
| P0 | `src/pages/casos-de-exito.astro` | Agregar 3 casos nuevos anonimizados (acuicultura, manufactura/Softland, hotelería) |
| P1 | `src/pages/index.astro` | Actualizar listado de industrias atendidas |
| P1 | Nuevas sub-páginas `/servicios/[slug]` | Crear las 2 nuevas (`agentes-ia-conversacionales`, `rpa-plataformas-sin-api`); refactor de `automatizacion-inteligente` |
| P2 | `src/pages/acerca-de.astro` | Reescribir posicionamiento de Jorge (incorporar dimensión operador, no solo consultor) |
| P2 | NodalTree, página dedicada o landing | Mejorar tratamiento del producto SaaS propio |

---

## 3. Nueva taxonomía de servicios (4 líneas en vez de 7)

### Por qué cambiar

Las 7 categorías actuales son válidas pero se solapan y enmascaran el portafolio real. La taxonomía interna que usas en el research de Cabaña del Lago (Process Automation, BI & Visualización, Advanced Analytics) ya está más cerca de la realidad. Esta es la versión completa y consistente con lo que entregas:

### Las 4 líneas de servicio nuevas

#### 1. Inteligencia de negocio y dashboards
**Slug propuesto:** `/servicios/business-intelligence`
**Reemplaza:** "Dashboards estratégicos" + "Control de gestión" (se fusionan).

**Copy corto (homepage card):**
> Dashboards conectados a tu ERP, sin Excel intermedio. Definimos contigo qué medir, lo construimos, y queda actualizado todos los días sin que nadie mueva un dedo.

**Copy largo (`/servicios/business-intelligence`):**
> Conectamos tu ERP, plataformas de venta, contabilidad y fuentes externas en un solo modelo de datos. Construimos dashboards en Power BI o Looker Studio que se actualizan solos, con KPIs definidos contigo, presupuesto vs real, gestión por excepción y vistas separadas para gerencia, operación y socios.
>
> Especialidad en ERPs chilenos comunes (Softland, SAP B1) y plataformas verticales (VetPraxis, Cloudbeds, iHotelier, sistemas DMS automotrices). Si tu ERP no tiene API moderna, construimos la capa de extracción nosotros.

**Entregables típicos:** modelo dimensional, dashboards Power BI/Looker, vistas SQL sobre el ERP, automatización de refresh, capacitación al equipo.

---

#### 2. Automatización y agentes de IA
**Slug propuesto:** `/servicios/automatizacion-y-agentes-ia`
**Reemplaza:** "Automatización inteligente" (se expande).

**Copy corto (homepage card):**
> Robots, agentes de IA y flujos automáticos para que tu equipo deje de hacer trabajo mecánico. Desde flujos n8n hasta asistentes conversacionales conectados a tus sistemas.

**Copy largo (`/servicios/automatizacion-y-agentes-ia`):**
> Tres familias de soluciones, según el dolor:
>
> **Flujos automáticos** entre sistemas: pipelines de datos cron, sincronizaciones diarias, generación de reportes que llegan al correo correcto a la hora correcta. Stack: n8n, Python, GitHub Actions.
>
> **Agentes de IA con tu propia información**: chatbots con RAG sobre tus manuales, contratos, base de conocimiento. El asistente responde con tu data, no con respuestas genéricas. Stack: ChromaDB, sentence-transformers, FastAPI.
>
> **Asistentes conversacionales conectados a tu operación**: vía web o WhatsApp, respondiendo consultas, agendando, escalando a humano cuando corresponde. Conectados a tu PMS, CRM o motor de reservas.

**Entregables típicos:** flujo en producción con monitoreo, panel de control, retraining periódico del agente cuando aplica.

---

#### 3. Automatización de plataformas sin API (RPA + IA)
**Slug propuesto:** `/servicios/rpa-plataformas-sin-api`
**Es nuevo.** No tiene equivalente actual en el sitio.

**Copy corto (homepage card):**
> Si tu operación depende de subir, descargar o conciliar datos en plataformas que no tienen API (portales de clientes, sistemas legacy, plataformas regulatorias), automatizamos esa carga sin pedirle nada al proveedor de la plataforma.

**Copy largo (`/servicios/rpa-plataformas-sin-api`):**
> Muchas industrias dependen de plataformas que sus clientes o reguladores imponen y que no tienen API documentada: portales de cumplimiento, sistemas RRHH propios del cliente, ERPs cerrados, sistemas gubernamentales. La opción habitual es contratar a alguien para que lo haga manualmente, con la latencia y los errores que eso implica.
>
> Nosotros automatizamos esa capa con Playwright + análisis asistido por IA, manejando login, autenticación de dos factores cuando aplica, navegación, carga de archivos, detección de rechazos y alertas en caso de cambios en la plataforma. Cuando hay protección anti-bot agresiva (Cloudflare Turnstile, captchas), adaptamos la solución a un modelo asistido por humano para los pasos críticos.
>
> Entregamos un sistema con monitoreo continuo, ajustes incluidos cuando la plataforma cambia su interfaz, y trazabilidad auditada de cada operación realizada.

**Entregables típicos:** scrapers/RPA por plataforma, dashboard de cumplimiento, sistema de alertas, contrato de mantenimiento mensual (las UIs cambian).

---

#### 4. Soluciones a medida e infraestructura
**Slug propuesto:** `/servicios/soluciones-a-medida`
**Mantiene** el slug actual. Reemplaza "Soluciones a medida" + agrega "Infraestructura cloud gestionada".

**Copy corto (homepage card):**
> Aplicaciones web, integraciones de sistemas, agentes específicos, infraestructura cloud gestionada. Cuando lo estándar no calza, construimos lo que necesitas y lo mantenemos en producción.

**Copy largo (`/servicios/soluciones-a-medida`):**
> Cuando el dashboard, el agente o la automatización estándar no resuelven tu problema, construimos a medida. Ejemplos del portafolio:
>
> - Aplicaciones web internas con autenticación, integradas con tu CRM o ERP.
> - Servidores SFTP gestionados para integración con clientes corporativos o entidades públicas (Hetzner Cloud, ProFTPD, fail2ban, monitoreo).
> - Pipelines de datos custom con destino spreadsheet, base de datos o API propia.
> - Integraciones de pagos en arquitecturas societarias complejas (pago dividido entre sociedades, facturación dual IVA, conciliación automática).
>
> El servicio incluye infraestructura, despliegue, monitoreo y mantenimiento mensual.

---

### Servicios complementarios (mantener separados, menor jerarquía)

#### 5. Inteligencia competitiva
**Slug actual:** `/servicios/inteligencia-competitiva`
**Sin cambios estructurales.** Refrescar copy si quieres referenciar el caso del comparador automotriz diario en producción.

#### 6. HR Analytics y organigramas
**Slug actual:** `/servicios/hr-analytics`
**Sin cambios estructurales.** Es la puerta natural a NodalTree.

#### 7. Capacitación
**Slug actual:** `/servicios/capacitacion`
**Cambios:** **eliminar mención SENCE.** Reposicionar como capacitación corporativa basada en credencial académica (Universidad de los Andes, Microsoft PL-300). Mantener oferta para equipos de cliente.

**Copy nuevo sugerido:**
> Capacitación corporativa en Power BI, análisis de datos y automatización con herramientas modernas, dictada por el mismo consultor que enseña Advanced Data Analytics en la Universidad de los Andes. Sesiones presenciales o remotas, adaptadas al stack y los datos reales de tu equipo.

---

## 4. Modalidades de contratación (sección nueva)

**Dónde ponerla:** sección nueva en `/servicios.astro` (después del listado de servicios) y un bloque resumen en homepage.

**Por qué:** hoy el prospecto no tiene cómo intuir si Lumina cuesta 50 UF o 500. Mostrar las modalidades ayuda a auto-calificarse y reduce contactos no calificados.

**Copy sugerido:**

### Cómo trabajamos

Tres formatos según el momento del problema. La mayoría de las relaciones empiezan en uno y migran a otro con el tiempo.

| Formato | Cuándo aplica | Duración típica | Inversión orientativa |
|---|---|---|---|
| **Diagnóstico y sprint** | Quieres ver valor concreto rápido. Definimos el primer entregable, lo construimos y lo dejamos en producción. | 4 a 8 semanas | Desde 50 UF |
| **Programa por fases** | Hay un proyecto más grande con varios entregables encadenados. Cada fase se aprueba, se entrega y se factura antes de comenzar la siguiente. | 2 a 4 meses | 110 a 190 UF |
| **Acompañamiento mensual** | Ya tienes una operación corriendo y necesitas mantenimiento, mejoras continuas y disponibilidad para temas nuevos. Dos variantes: horas mensuales contratadas o servicio mensual con SLA fijo. | Renovable cada 3 a 6 meses | Desde 15 UF/mes |

> Todas las modalidades incluyen documentación técnica completa, código fuente, transferencia de conocimiento al equipo y sin lock-in de proveedor.

**Notas de implementación:**
- Si Jorge prefiere no exponer cifras, dejar la columna "Inversión orientativa" como "A definir según alcance" y mantener solo las modalidades.
- "Sin lock-in" es un mensaje fuerte y diferenciador frente a software enterprise. Mantener.

---

## 5. Casos de éxito ampliados (anonimizados)

**Archivo:** `src/pages/casos-de-exito.astro`

**Lo que está hoy:** 4 casos (red de automotoras, red de clínicas vet, holding inmobiliario, grupo financiero/NodalTree). Mantener los 4 actuales.

**Casos nuevos a agregar (3):**

### Caso 5: PYME chilena de iluminación LED para acuicultura

**Industria:** Manufactura para industria salmonera.

**Problema:** Mantener al día la documentación de operarios de campo en nueve plataformas distintas (una fuente interna, ocho plataformas regulatorias y de clientes). Cada cliente salmonero exige documentos en su propia plataforma con su propio formato y vencimiento. La operación dependía de una persona interna más una empresa externa con latencia de 48 horas. En el momento del diagnóstico: 37% de cumplimiento documental visible en el portal de uno de los principales clientes, dos documentos vencidos y acreditación próxima a expirar.

**Solución:** Sistema integral en cuatro etapas. Auditoría inicial de duplicados, gestor documental unificado sobre la fuente interna, incorporación de fuentes externas (mutual, capacitaciones), y carga automática a cinco plataformas con stack compartido vía RPA con Playwright.

**Herramientas:** Python, PostgreSQL, n8n, Playwright, FastAPI.

**Resultados:** Cumplimiento documental medible en tiempo real, eliminación de la dependencia del proveedor manual de 48 horas de latencia, dashboard único de cumplimiento por cliente y trazabilidad auditada de cada operación.

---

### Caso 6: Fabricante chileno de pinturas industriales

**Industria:** Manufactura, FMCG industrial.

**Problema:** Información financiera y operacional dispersa en el ERP Softland, sin visibilidad consolidada. Reportes de ventas, margen, cobranza, inventario, EERR y balance generados manualmente en Excel. El equipo comercial y financiero no tenía una vista única para tomar decisiones rápidas.

**Solución:** Modelo dimensional sobre Softland (4 dimensiones, 10 hechos, 23 medidas DAX) con 7 páginas de Power BI cubriendo Ventas y Margen, Cobranza, EERR, Balance, Margen Detalle, Inventario y Alertas de reposición. Vistas SQL gestionadas como capa intermedia para aislar el modelo de cambios futuros del ERP.

**Herramientas:** Power BI, SQL Server, vistas SQL dbo.VW_*, pbi-tools.

**Resultados:** Reportería en producción reemplazando el ciclo manual mensual. Forecast de ventas por SKU en evaluación para una segunda fase.

---

### Caso 7: Operación de hospitalidad multi-propiedad

**Industria:** Hotelería y alojamiento.

**Problema:** Operación con múltiples propiedades, datos de reservas en un PMS (Cloudbeds), contabilidad en otro sistema y fuentes externas (UF, dólar, indicadores CMF). Sin visibilidad consolidada de rentabilidad por unidad ni del flujo de caja real proyectado.

**Solución:** Integración de cuatro fuentes en un modelo Power BI unificado con refresh automatizado. Dashboard de ocupación, anticipación de reservas, ingresos por habitación, rentabilidad por unidad y flujo de caja real vs proyectado. Capa de automatización adicional con Home Assistant para integración de sensores y automatizaciones de las propiedades.

**Herramientas:** Cloudbeds API, Power BI, integraciones contables, Home Assistant.

**Resultados:** Visibilidad operacional y financiera completa para los socios. Ciclo mensual de cierre acelerado y decisiones de pricing y operación con datos en tiempo real.

---

### Notas para el caso 4 actual (NodalTree)

Mantener el caso del grupo financiero pero refrescar el copy para reposicionar NodalTree como producto SaaS independiente con landing propia (ver sección 7). El caso de éxito puede mantenerse en `casos-de-exito.astro` enlazando a la página/landing de NodalTree.

---

## 6. Industrias atendidas (actualizar listado)

**Dónde aparece hoy:** mencionado en el CLAUDE.md (Automotriz, inmobiliario, retail, salud/veterinaria, servicios) y referenciado en homepage/casos.

**Lista propuesta nueva:**

- Automotriz (concesionarios, software DMS, retail de usados)
- Hotelería y alojamiento (hoteles, multi-propiedad, renta corta)
- Acuicultura y proveedores del rubro salmonero
- Manufactura industrial (FMCG, química, materiales)
- Veterinaria y servicios de salud
- Inmobiliario y holdings multi-sociedad
- Servicios financieros
- Sector público (vía consultoras IT integradoras)

**Decisión a tomar:**
- **Opción A**, dejar el listado en homepage como bloque pequeño de logos/iconos (sin nombres de cliente, solo industrias).
- **Opción B**, crear página `/industrias` con micropárrafo por vertical y casos relacionados. Más trabajo, mejor SEO long-tail (búsquedas tipo "consultora power bi salmonera chile").

Recomiendo Opción A en el primer pasada y Opción B como Fase 2 si la Opción A trae tráfico.

---

## 7. NodalTree, mejorar tratamiento

**Estado actual:** subdomain `nodaltree.luminaconsulting.ai`, mencionado en homepage y como caso.

**Sugerencias:**

1. Asegurar que la sección de NodalTree en homepage tenga al menos: descripción en una línea, 3 features clave, comparación contra software de USD 15.000/año, CTA "Probar gratis" o "Agendar demo".
2. Si el subdomain ya tiene landing propia, validar que tenga pricing público (gratis hasta X usuarios, plan pago desde Y CLP/mes). Pricing público diferencia del competidor, que solo cotiza por contacto.
3. Agregar trust signals: el caso del holding financiero (anonimizado), métricas concretas (4 horas → 10 minutos, sesgos identificados en +100 evaluadores).
4. Cross-link desde `/servicios/hr-analytics` a NodalTree y viceversa. Son productos complementarios.

---

## 8. Cambios en `/acerca-de`

**Lo que está hoy** (según WebFetch del 2026-04-19): Jorge Cepeda, 15+ años en control de gestión financiero, MBA UC, PL-300, profesor UANDES. Posicionado como especialista en "Excel agotado".

**Cambios sugeridos:**

1. **Mantener todas las credenciales actuales.** Son fuertes y vigentes.
2. **Agregar una dimensión adicional al posicionamiento: operador, no solo consultor.** El portafolio incluye sistemas en producción 24/7, pipelines corriendo en cron, infraestructura cloud gestionada. Eso es operación, no solo consultoría. Copy sugerido para agregar:

> Lumina no entrega informes y se va. Operamos lo que construimos: pipelines en producción con monitoreo, agentes de IA con retraining, infraestructura cloud con SLA. Si el sistema falla a las 3 AM, alguien está mirando.

3. **Reformular el "elevator pitch" de Jorge** para incluir la doble naturaleza:

> Soy ingeniero comercial con 15 años en control de gestión financiero, los últimos en el holding de inversiones de un banco. Hace 4 años fundé Lumina para llevar ese tipo de visibilidad a empresas medianas, sin los costos ni la rigidez de un proyecto enterprise. En la práctica, eso significa que mismo día puedo estar en un comité de gerencia discutiendo qué medir, y por la noche desplegando el agente que lo automatiza.

4. **Sección "Cómo trabajamos" o "Principios"**, agregar:
   - Operamos lo que construimos.
   - Documentación y código fuente siempre quedan con el cliente.
   - Sin lock-in de proveedor.
   - Stack moderno (Python, n8n, Power BI, agentes de IA), no soluciones legacy reempaquetadas.
   - Trabajamos bajo NDA cuando el caso lo requiere (manejo de datos sensibles, compliance, sector público).

---

## 9. Cambios en homepage (`src/pages/index.astro`)

Síntesis de todo lo anterior aplicado al landing.

### Hero (mantener)

La propuesta de valor actual ("Abre una pantalla y ve cómo va tu negocio hoy, sin pedirle a nadie que haga un Excel") es buena. Mantener.

### Sección de servicios (reescribir)

Reemplazar las 7 cards actuales por **4 cards principales** (las 4 nuevas líneas) y **3 cards secundarias** (inteligencia competitiva, HR Analytics, capacitación) con tratamiento visual menor.

### Sección nueva, "Cómo trabajamos" (modalidades)

Insertar después de servicios, antes de casos de éxito. Tabla simplificada de 3 modalidades.

### Sección de industrias (actualizar)

Si hoy hay un bloque tipo "Industrias que atendemos", actualizar al listado nuevo de 8 verticales. Si no existe, agregarlo entre "Cómo trabajamos" y "Casos de éxito".

### Casos de éxito (resumir)

Mostrar los 7 casos como cards con 1 párrafo cada uno, con CTA "Ver caso completo" al detalle en `/casos-de-exito`.

### Footer y CTAs

Sin cambios. Mantener WhatsApp + "Solicitar Asesoría".

---

## 10. Glosario, terminología a usar y a evitar

| Evitar | Usar en su lugar |
|---|---|
| Retainer | Acompañamiento mensual / asesoría continua / horas mensuales contratadas / servicio mensual con SLA |
| Subscription, membership | Acompañamiento mensual |
| SENCE, franquicia tributaria | (no mencionar capacitación con financiamiento estatal por ahora) |
| Enterprise, solución enterprise | Solución corporativa, software corporativo |
| Quick win | Primer entregable, sprint inicial |
| Stakeholder | Interlocutor, contraparte, equipo cliente |
| Insights | Hallazgos, conclusiones, lectura del dato |

**Términos en inglés que SÍ usar** (son estándar y no tienen buen equivalente en español): Power BI, Looker Studio, dashboard, Power Query, RPA, API, ERP, RAG, agente de IA, pipeline, scraping, Playwright, n8n, Cloudbeds, Softland.

---

## 11. Cosas que NO cambiar

- Sistema de diseño neo-brutalist (colores, tipografía, sombras solid).
- Stack técnico (Astro, Tailwind, Vercel).
- Idioma español chileno.
- Hero copy actual.
- CTAs principales (WhatsApp + Solicitar Asesoría).
- Página de portfolio (GitHub repos dinámicos).
- Páginas legales (privacidad, términos).
- Subdomain de NodalTree.

---

## 12. Checklist sugerido para implementación con Claude Code

Orden recomendado, desde menor a mayor riesgo de breaking changes:

- [ ] Eliminar todas las menciones de SENCE en el sitio.
- [ ] Reemplazar "retainer" por terminología local en todas las páginas (búsqueda global).
- [ ] Actualizar copy de `/servicios/capacitacion` con la nueva versión sin SENCE.
- [ ] Reescribir las 7 cards de servicios en `/servicios.astro` y homepage agrupándolas en 4 líneas + 3 complementarias.
- [ ] Crear nueva sub-página `/servicios/automatizacion-y-agentes-ia` (puede reusar el slug actual `automatizacion-inteligente` o redirigir).
- [ ] Crear nueva sub-página `/servicios/rpa-plataformas-sin-api`.
- [ ] Refactor de `/servicios/dashboards-estrategicos` y `/servicios/control-de-gestion` fusionándolos en `/servicios/business-intelligence` (mantener redirects desde slugs antiguos por SEO).
- [ ] Agregar sección "Cómo trabajamos" en `/servicios.astro` y bloque resumen en homepage.
- [ ] Agregar 3 casos nuevos anonimizados en `/casos-de-exito.astro`.
- [ ] Actualizar listado de industrias en homepage.
- [ ] Actualizar `/acerca-de.astro` con dimensión operador + nuevos principios.
- [ ] Actualizar CLAUDE.md del proyecto con la nueva taxonomía de 4 servicios y nuevas industrias.
- [ ] Verificar que todos los cross-links internos siguen apuntando a las URLs correctas tras el refactor.
- [ ] QA en build (`npm run build`) y en preview local.
- [ ] Deploy a Vercel.

---

## 13. Decisiones que necesitan input de Jorge antes de implementar

1. **¿Exponer rangos UF de pricing en la sección modalidades, o dejar cualitativo?** (Sección 4.)
2. **¿NodalTree merece landing propia con pricing público, o se queda como sección dentro del sitio principal?** (Sección 7.)
3. **¿Crear página `/industrias` con micropárrafo por vertical (Opción B, sección 6), o dejar solo listado en homepage (Opción A)?**
4. **¿Cuál slug prefieres para la nueva línea de IA**: `automatizacion-y-agentes-ia` (largo, descriptivo) o algo más corto como `agentes-ia` o `automatizacion-ia`?
5. **¿Mantener la fusión Dashboards + Control de gestión en una sola línea (BI), o dejar las dos sub-páginas separadas y fusionarlas solo en la presentación?** Tema SEO: las dos sub-páginas separadas capturan más búsquedas long-tail.
6. **¿Estás cómodo con el copy "Si el sistema falla a las 3 AM, alguien está mirando"?** Es fuerte y verdadero, pero es un compromiso explícito de soporte. Confirmar antes de publicar.

---

## Apéndice A. Mapeo entre clientes reales y casos anonimizados

(Para referencia interna, no va al sitio.)

| Caso anonimizado en sitio | Cliente real |
|---|---|
| Red de automotoras (caso existente) | Valenzuela & Delarze |
| Red de clínicas veterinarias (caso existente) | Vievet |
| Holding inmobiliario / hospitalidad (caso 7 nuevo) | Isidora 23 |
| Grupo financiero (caso existente) | Cliente NodalTree |
| PYME iluminación LED acuicultura (caso 5 nuevo) | Bioled |
| Fabricante de pinturas industriales (caso 6 nuevo) | Tecnoquim |
| Distribuidora de lácteos (potencial caso 8 futuro) | Comercial del Campo (post-entrega) |
| Software DMS automotriz (potencial caso 9 futuro) | Netcar/Nolan (post-entrega) |
| Consultora IT con cliente público (potencial mención en `/servicios/soluciones-a-medida`) | Focus / MDSF |

Casos 5, 6 y 7 están listos para publicar. Los potenciales se agregan cuando los proyectos cierren entrega y haya más métricas.

---

**Fin del documento.** Cualquier duda o ajuste, comentar inline antes de pasar a Claude Code.
