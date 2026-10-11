# Daniel — Visual Designer & Art Director (Portfolio)

Portfolio web de alto impacto visual y rendimiento cinematográfico para **Daniel**, Diseñador Gráfico & Director de Arte. Desarrollado con **React 19 + Vite**, CSS modular puro y componentes interactivos cinéticos de **React Bits** (`TechText`, `DriftWall`, `CurvedLoop`, `ChromaGrid`, `LogoLoop`).

---

## 🚀 Arquitectura y Tecnologías

- **Entorno:** [Vite](https://vitejs.dev/) + [React 19](https://react.dev/)
- **Estilos:** CSS nativo puro y modularizado (`.css` dedicado por componente para evitar fugas de scope).
- **Tipografía (Google Fonts):**
  - **Syne** (700, 800) — Titulares expresivos y geométricos.
  - **Plus Jakarta Sans** (400, 500, 600, 700) — Interfaz y cuerpo de lectura.
  - **JetBrains Mono** (400, 500) — Fichas técnicas, metadatos y coordenadas.
- **Normalización Mobile:**
  - Eliminación obligatoria de recuadro azul táctil (`-webkit-tap-highlight-color: transparent` y `outline: none`).
  - Control estricto de desborde (`overflow-x: hidden`).
  - Servicios maquetados en cuadrícula compacta de 2 columnas en celulares (`repeat(2, 1fr)`).
  - Barras de métricas en una fila horizontal prolija con saltos estratégicos.
- **Seguridad en Enlaces:**
  - Todos los enlaces externos cuentan con `rel="noopener noreferrer"`.
  - Enlaces de WhatsApp sanitizados y codificados con `encodeURIComponent()`.
- **Iconografía:** `lucide-react`
- **Datos Centralizados:** `src/data/mockData.js`

---

## 📂 Estructura del Proyecto

```text
src/
├── assets/                  # Logos e imágenes estáticas
├── components/
│   ├── common/              # Componentes cinéticos de React Bits
│   │   ├── TechText.jsx & .css     # Titular interactivo con arrastre vectorial
│   │   ├── ChromaGrid.jsx & .css   # Grilla de proyectos con spotlight cromático
│   │   ├── LogoLoop.jsx & .css     # Marquesina infinita con desaceleración
│   │   ├── DriftWall.jsx & .css    # Muro 3D flotante con perspectiva y tilt
│   │   └── CurvedLoop.jsx & .css   # Separador cinético curvo
│   ├── layout/              # Componentes estructurales
│   │   ├── Navbar.jsx & .css       # Cabecera flotante glassmorphism + mobile drawer
│   │   ├── Footer.jsx & .css       # Pie de página y enlaces sociales
│   │   └── ProjectModal.jsx & .css # Lightbox inmersivo con galería de fotos
│   └── sections/            # Secciones principales
│       ├── Hero.jsx & .css         # Portada, TechText, status y métricas
│       ├── VisualDrift.jsx & .css  # Muro 3D interactivo (DriftWall)
│       ├── About.jsx & .css        # Bio, manifiesto y servicios (2 cols mobile)
│       ├── TickerBand.jsx & .css   # Separador curvo (CurvedLoop)
│       ├── Projects.jsx & .css     # Catálogo con filtros y modal fotográfico
│       ├── ToolsLogos.jsx & .css   # Stack de diseño gráfico y clientes (LogoLoop)
│       └── Contact.jsx & .css      # Call to action, WhatsApp sanitizado y redes
├── data/
│   └── mockData.js          # Datos estructurados únicos
├── index.css                # Normalización, tokens de diseño y fuentes
├── App.css                  # Layout raíz
├── App.jsx                  # Orquestador de la aplicación
└── main.jsx
```

---

## 🛠️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo local
npm run dev

# Verificación de linter (cero errores)
npm run lint

# Compilación de producción
npm run build

# Vista previa de la build
npm run preview
```

---

## 🌐 Guía de Despliegue en Vercel & Dominios

### 1. Despliegue en Vercel
1. Conecta el repositorio de GitHub/GitLab a [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Vercel aprovisionará automáticamente certificados **SSL/HTTPS gratuitos** mediante Let's Encrypt.

### 2. Configuración de Dominio Personalizado (ej. NIC Argentina / Tu Proveedor)
- En Vercel: Ve a **Settings > Domains** y añade tu dominio (ej. `danielvargas.design` o `danielvargas.com.ar`).
- En tu registrador DNS:
  - Registro **A** apuntando `@` a `76.76.21.21` (IP de Vercel).
  - Registro **CNAME** apuntando `www` a `cname.vercel-dns.com`.
  - Configurar redirección 301 de `www` al dominio raíz (o viceversa) dentro del panel de Vercel para optimización SEO.

---

## 📦 Empaquetado para Backup Definitivo

Para generar una copia limpia de respaldo excluyendo `node_modules` y `.git`:

```powershell
# PowerShell en Windows
Compress-Archive -Path src, public, index.html, package.json, package-lock.json, vite.config.js, eslint.config.js, README.md -DestinationPath backup-daniel-portfolio.zip
```
