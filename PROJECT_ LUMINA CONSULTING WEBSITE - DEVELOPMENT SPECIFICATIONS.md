# PROJECT: LUMINA CONSULTING WEBSITE - DEVELOPMENT SPECIFICATIONS

## 1. GENERAL PROJECT INFORMATION

### 1.1 Client Description
**Company:** Lumina Consulting  
**Domain:** luminaconsulting.ai  
**Industry:** Automation and data analysis consulting  
**Target client:** SMEs and startups  

### 1.2 Project Objective
Develop a professional corporate website in Framer that serves as a landing page and lead generation tool for Lumina Consulting, a consultancy specialized in transforming scattered data into strategic information.

### 1.3 Project Scope
- Complete 5-page website
- Responsive design (desktop, tablet, mobile)
- SEO and LLM optimization
- Multi-language structure (initially Spanish only)
- WhatsApp Business integration
- Complete ownership transfer

---

## 2. TECHNICAL SPECIFICATIONS

### 2.1 Platform and Hosting
- **Platform:** Framer (framer.com)
- **Plan:** Mini ($5/month) - compatible with custom domain
- **Domain:** luminaconsulting.ai (already registered by client)
- **Email:** Integration with Zoho Mail (already configured)

### 2.2 URL Structure and Multi-language
```
Initial structure (Spanish):
- / (home)
- /sp/acerca-de
- /sp/servicios
- /sp/casos-de-exito
- /sp/contacto

Future multi-language structure:
- /sp/ (Spanish - default)
- /en/ (English - future)
- /sp/acerca-de, /sp/servicios, etc.
- /en/about, /en/services, etc.
```

**IMPORTANT:** Implement language selector in header (only Spanish active initially, prepared for English future)

### 2.3 Responsive Design
- **Desktop:** 1200px+ (complete layout)
- **Tablet:** 768px-1199px (grid adaptation)
- **Mobile:** 320px-767px (vertical layout, hamburger menu)

### 2.4 SEO and LLM Optimization
- Complete meta tags on all pages
- Semantic HTML5 structure
- Schema markup for company and services
- Open Graph tags for social media
- XML sitemap
- Optimized robots.txt
- Structured content for easy LLM indexing
- Descriptive alt text on all images
- Friendly and descriptive URLs
- **Google Analytics 4** linked to account: jorgecepe@gmail.com
- **Google Search Console** configured
- **Cookie banner** for compliance and future remarketing pixels

---

## 3. VISUAL IDENTITY AND BRANDING

### 3.1 Color Palette (HEX)
```css
/* Main colors */
--navy-blue: #1E3A8A;        /* Main text, important elements */
--light-blue: #E1E7F9;       /* Section backgrounds, soft elements */
--bright-blue: #3B82F6;      /* CTAs, links, interactive elements */
--bright-blue-hover: #2563EB; /* Hover states */

/* Support colors */
--dark-gray: #374151;        /* Secondary text */
--light-gray: #F3F4F6;       /* Neutral backgrounds */
--white: #FFFFFF;            /* Main backgrounds */
--black: #000000;            /* High contrast text */
```

### 3.2 Typography
- **Main font:** Inter (Google Fonts)
- **Hierarchy:**
  - H1: 48-60px, Semibold, Navy Blue
  - H2: 36-42px, Semibold, Navy Blue
  - H3: 24-30px, Medium, Navy Blue
  - Body: 16-18px, Regular, Dark Gray
  - Buttons: 16px, Semibold, White
  - Captions: 14px, Regular, Dark Gray

### 3.3 Logo Assets (included in delivery)
**Available files:**
- `logo full.png/svg` - Complete logo with text
- `logo-single.png/svg` - Lighthouse icon only
- `logo-wide-horizontal.png/svg` - Horizontal version
- `logo-vertical.png/svg` - Vertical version
- `ISO-color.png/svg` - Color icon
- `ISO-white.png/svg` - White icon
- `ISO-black.png/svg` - Black icon
- `northstar-duo.png/svg` - Icon variant
- `northstar-lightblue.png/svg` - Light blue icon
- `color palette.png` - Color palette reference

**Recommended usage:**
- Header: `logo full.svg`
- Footer: `logo-wide-horizontal.svg`
- Favicon: `ISO-color.png` (convert to .ico and multiple sizes: 16x16, 32x32, 48x48)
- Social media: `ISO-color.png`
- Apple touch icon: `ISO-color.png` (180x180px)

---

## 4. PAGE STRUCTURE AND CONTENT

### 4.1 HOME PAGE (/)

#### Section 1: Hero
**Background:** Light Blue (#E1E7F9)
**Content:**
- **Title:** "Transformamos datos dispersos en información estratégica"
- **Subtitle:** "Ayudamos a PyMEs y startups a tomar decisiones ágiles, anticipar desafíos y enfocar su equipo en tareas de mayor valor a través de automatización inteligente y análisis de datos."
- **Main CTA:** "Contactar por WhatsApp" (link to WhatsApp Business)

#### Section 2: Value Proposition
**Background:** White
**Title:** "¿Por qué Lumina Consulting?"
**Layout:** 2x2 Grid (responsive to 1 column on mobile)

**Benefits:**
1. **Eficiencia** - "Automatizamos procesos manuales que consumen tiempo valioso"
2. **Claridad** - "Convertimos datos complejos en insights accionables"
3. **Crecimiento** - "Liberamos a tu equipo para enfocarse en tareas estratégicas"
4. **Tecnología** - "Combinamos visión de negocio con expertise técnico avanzado"

#### Section 3: Brief Description
**Background:** Light Blue (#E1E7F9)
**Content:** "En Lumina Consulting transformamos la reportería manual y los datos dispersos en información estratégica automatizada, confiable e inteligente. Combinando una profunda visión de negocio con expertise tecnológica avanzada (Python, Power BI, automatización e IA), permitimos a nuestros clientes tomar decisiones ágiles, anticipar desafíos y impulsar su crecimiento y rentabilidad."

#### Section 4: Services Preview
**Background:** White
**Title:** "Nuestros Servicios"
**Layout:** 2x2 Grid
**CTA:** "Ver Todos los Servicios" → /servicios

#### Section 5: Social Proof
**Background:** Light Blue (#E1E7F9)
**Title:** "Casos de Éxito"
**Content:** Brief mention of results
**CTA:** "Ver Casos de Éxito" → /casos-de-exito

#### Section 6: Final CTA
**Background:** Navy Blue (#1E3A8A)
**Title:** "¿Listo para transformar tus datos en información estratégica?"
**CTAs:** "Contactar por WhatsApp" + "Solicitar Diagnóstico Gratuito"

### 4.2 ABOUT PAGE (/sp/acerca-de)
[Complete content available in attached file: ContenidodelSitioWeb-LuminaConsulting.md]

### 4.3 SERVICES PAGE (/sp/servicios)
**4 main services:**
1. Strategic Dashboards and Report Automation
2. Automated Competitive Analysis
3. Business Management with Total Visibility
4. Custom Training Programs

[Detailed content in attached file]

### 4.4 SUCCESS CASES PAGE (/sp/casos-de-exito)
**2 documented cases:**
1. Automotive Network - Quality control automation
2. Veterinary Clinic - Financial and operational visibility

[Complete content with testimonials in attached file]

### 4.5 CONTACT PAGE (/sp/contacto)
- **Main information:**
  - WhatsApp: +56991629095
  - Email: contacto@luminaconsulting.ai
  - Location: Chile (remote services available)
- **Integrated WhatsApp Business** with predefined message
- **Contact form** (optional, simple)
- **Map or location information** (optional)
- **Business hours** and expected response time

---

## 5. TECHNICAL FUNCTIONALITIES

### 5.1 Navigation
- **Fixed header** with logo and main menu
- **Hamburger menu** on mobile
- **Language selector** (Spanish active, English prepared)
- **Footer** with secondary links and legal information

### 5.2 Interactions and Animations
- **Hover effects** on buttons and links
- **Smooth scrolling** between sections
- **Fade-in animations** on scroll
- **Loading states** for dynamic elements
- **Subtle micro-interactions** to improve UX

### 5.3 WhatsApp Business Integration
- **Floating WhatsApp button** (optional)
- **Direct links** with predefined message: "Hola, me interesa conocer más sobre los servicios de Lumina Consulting"
- **Number:** +56991629095

### 5.4 Performance Optimization
- **Optimized images** (WebP when possible)
- **Lazy loading** for images
- **CSS and JS minification**
- **Asset compression**
- **Optimized Core Web Vitals**

---

## 6. DELIVERABLES AND TRANSFER

### 6.1 Files to Deliver
- **Complete Framer project** with full access
- **Organized assets** (images, logos, icons)
- **Documentation** for adding new languages
- **Content update guide**
- **Complete project backup**

### 6.2 Ownership Transfer
- **Complete Framer project transfer** through owner change on platform
- **Process:** Freelancer must transfer project ownership to client's Framer account (jcepeda@luminaconsulting.ai)
- **No dependencies** on developer after transfer
- **Full access** for future modifications by client
- **Complete documentation** for future changes

---

## 7. SUGGESTED TIMELINE

### Phase 1: Setup and Structure
- Framer project configuration
- Page structure and navigation
- Responsive breakpoint configuration

### Phase 2: Design and Content
- Visual design implementation
- Content integration
- Responsive optimization

### Phase 3: Functionalities
- Interactions and animations
- WhatsApp integration
- SEO optimization

### Phase 4: Testing and Delivery
- Testing on different devices
- Performance optimization
- Documentation and transfer

---

## 8. ACCEPTANCE CRITERIA

### 8.1 Functionality
- ✅ Fully responsive site
- ✅ Functional navigation on all devices
- ✅ Operational WhatsApp links
- ✅ Language selector implemented
- ✅ Basic SEO implemented

### 8.2 Design
- ✅ Faithful to specified color palette
- ✅ Consistent typography
- ✅ Correctly implemented logos
- ✅ Professional spacing and layout

### 8.3 Performance
- ✅ Loading time < 3 seconds
- ✅ Core Web Vitals in green
- ✅ Mobile optimization

### 8.4 Transfer
- ✅ Project completely transferred
- ✅ Documentation delivered
- ✅ No developer dependencies

---

## 9. ADDITIONAL INFORMATION

### 9.1 Client Contact
- **Personal email:** jorgecepe@gmail.com
- **Website email:** jcepeda@luminaconsulting.ai
- **WhatsApp:** +56991629095
- **Availability:** Chile business hours (GMT-3)

### 9.2 Reference Files
- `ContenidodelSitioWeb-LuminaConsulting.md` - Complete content for all pages
- `Lumina-logo/` - Folder with all logo assets
- `color palette.png` - Color palette reference

### 9.3 Special Considerations
- Site must be corporate without mentioning personal names
- Focus on generating leads and credibility
- Prepared for future growth and scalability
- Optimized for B2B audience (SMEs and startups)
- **2 revision rounds** included
- **30 days of bug support** included
- **Additional support** quoted separately

---

## 10. LEGAL ASPECTS AND COMPLIANCE

### 10.1 Privacy Policy (Simplified)
**Location:** Footer link
**Basic content to include:**
- What data we collect (contact emails, analytics data)
- How we use data (commercial communication, site improvement)
- We don't sell data to third parties
- User rights (access, rectification, deletion)
- Cookie usage for analytics and remarketing
- Contact for inquiries: contacto@luminaconsulting.ai
- Applicable law: Chilean legislation

### 10.2 Terms of Use (Standard)
**Location:** Footer link
**Basic content:**
- Website usage conditions
- Lumina Consulting intellectual property
- Liability limitation
- Applicable law and jurisdiction (Chile)
- Terms modifications

### 10.3 Cookie Banner
**Implementation:** Discrete banner at bottom
**Suggested text:** "Utilizamos cookies para mejorar tu experiencia de navegación y para analytics. Al continuar navegando, aceptas nuestro uso de cookies. [Más información] [Aceptar]"
**Functionality:**
- Prepared for future Facebook/LinkedIn pixels
- Google Analytics integration
- Basic cookie regulation compliance

### 10.4 GDPR/LOPD Considerations
- Although site is primarily for Chilean market, include basic protections
- Explicit consent for non-essential cookies
- Contact option to exercise data rights

