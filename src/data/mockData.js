/**
 * Datos centralizados y estructurados del portfolio de Daniel
 * Diseñador Gráfico & Director de Arte — Mendoza, Argentina
 */

export const designerInfo = {
  name: 'Daniel',
  fullName: 'Daniel',
  tagline: 'Diseñador Gráfico & Director de Arte',
  shortBio:
    'Especialista en identidades visuales memorables, diseño de packaging, dirección de arte y universos tipográficos de alta sensibilidad estética.',
  extendedBio:
    'Con base en Mendoza, Argentina, desarrollo proyectos visuales para marcas, bodegas boutique, estudios creativos y startups. Mi enfoque une la calidez del diseño editorial y analógico con el dinamismo contemporáneo.',
  status: 'Disponible para nuevos proyectos',
  location: 'Mendoza, Argentina',
  experienceYears: '7+',
  completedProjects: '85+',
  designAwards: '14',
  clientSatisfaction: '99%',
  contact: {
    email: 'contacto@danieldesign.com',
    whatsappPhone: '+5492615551234',
    whatsappMessage: 'Hola Daniel, vi tu portfolio y me gustaría conversar sobre un proyecto de diseño gráfico.'
  },
  social: [
    { name: 'Instagram', handle: '@daniel.dsgn', url: 'https://instagram.com' },
    { name: 'Behance', handle: 'behance.net/daniel', url: 'https://behance.net' },
    { name: 'Dribbble', handle: 'dribbble.com/daniel', url: 'https://dribbble.com' },
    { name: 'LinkedIn', handle: 'linkedin.com/in/daniel-design', url: 'https://linkedin.com' }
  ]
};

export const services = [
  {
    id: 'branding',
    number: '01',
    title: 'Brand Identity',
    subtitle: 'Sistemas de Marca',
    description:
      'Construcción de universos de identidad: logotipo, sistema tipográfico, paletas armónicas y guías visuales.',
    tags: ['Identidad Visual', 'Guías de Marca', 'Sistemas Gráficos']
  },
  {
    id: 'packaging',
    number: '02',
    title: 'Packaging Design',
    subtitle: 'Diseño de Empaques',
    description:
      'Etiquetas de vino, cosmética y producto con acabados especiales, texturas nobles y presencia en anaquel.',
    tags: ['Etiquetas', 'Foil & Relieve', 'Sustentabilidad']
  },
  {
    id: 'editorial',
    number: '03',
    title: 'Editorial & Type',
    subtitle: 'Publicaciones & Tipografía',
    description:
      'Catálogos, libros de autor, revistas independientes y dirección tipográfica con retículas cuidadas.',
    tags: ['Maquetación', 'Retículas', 'Dirección Tipográfica']
  },
  {
    id: '3d-motion',
    number: '04',
    title: '3D Art & Motion',
    subtitle: 'Renders & Dirección Cinética',
    description:
      'Modelado de producto, texturas fotorrealistas y animaciones sutiles para elevar la presentación de marca.',
    tags: ['Render 3D', 'Motion Graphics', 'Key Visuals']
  }
];

export const portfolioCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'branding', label: 'Branding' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'editorial', label: 'Editorial' },
  { id: '3d', label: '3D & Motion' }
];

export const portfolioProjects = [
  {
    id: 'aura-botanicals',
    category: 'packaging',
    title: 'Aura Botanicals',
    subtitle: 'Cosmética Orgánica / Packaging & Identidad',
    accent: '#c4b5fd', // Pastel Lilac
    year: '2026',
    client: 'Aura Labs',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1000&q=80&auto=format&fit=crop',
    aspectRatio: '4 / 3',
    description:
      'Sistema integral de packaging sostenible para una línea de alta cosmética botánica. Uso de sustratos de pulpa reciclada con estampado tipográfico en bajo relieve y sellos cromáticos minimalistas.',
    deliverables: ['Diseño de Envases', 'Key Visuals', 'Manual de Marca', 'Renders de Producto'],
    gallery: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=1200&q=85&auto=format&fit=crop'
    ]
  },
  {
    id: 'hyperion-audio',
    category: 'branding',
    title: 'Hyperion Audio',
    subtitle: 'Tecnología Sonora / Identidad de Marca',
    accent: '#bae6fd', // Pastel Sky
    year: '2025',
    client: 'Hyperion Acoustics',
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=1000&q=80&auto=format&fit=crop',
    aspectRatio: '4 / 3',
    description:
      'Rediseño visual para fabricante nórdico de auriculares para audiófilos. La identidad traduce frecuencias acústicas en formas geométricas de alto contraste y precisión milimétrica.',
    deliverables: ['Identidad Visual', 'Tipografía Personalizada', 'Papelería Corporativa', 'Assets Digitales'],
    gallery: [
      'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=85&auto=format&fit=crop'
    ]
  },
  {
    id: 'kroma-magazine',
    category: 'editorial',
    title: 'Kroma Magazine',
    subtitle: 'Publicación Semestral / Dirección de Arte & Grilla',
    accent: '#fbcfe8', // Pastel Rosé
    year: '2026',
    client: 'Kroma Publishing',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1000&q=80&auto=format&fit=crop',
    aspectRatio: '4 / 3',
    description:
      'Dirección de arte y maquetación para revista de arquitectura y diseño. Retícula asimétrica con contrastes tipográficos audaces y blancos generosos.',
    deliverables: ['Diseño Editorial', 'Sistema de Retícula', 'Curaduría Fotográfica', 'Diseño de Portadas'],
    gallery: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=85&auto=format&fit=crop'
    ]
  },
  {
    id: 'nexus-dimension',
    category: '3d',
    title: 'Nexus Dimension',
    subtitle: 'Escultura Digital / Renders 3D & Espacios',
    accent: '#a7f3d0', // Pastel Mint
    year: '2026',
    client: 'Nexus Interactive',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&q=80&auto=format&fit=crop',
    aspectRatio: '4 / 3',
    description:
      'Serie de key visuals y posters generativos en 3D que exploran la refracción de luz sobre materiales translúcidos y metales líquidos.',
    deliverables: ['Renders 3D 8K', 'Posters Conmemorativos', 'Micro-animaciones', 'Instalación Virtual'],
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&q=85&auto=format&fit=crop'
    ]
  },
  {
    id: 'vanguard-roasters',
    category: 'packaging',
    title: 'Vanguard Roasters',
    subtitle: 'Café de Especialidad / Packaging & Etiquetas',
    accent: '#fed7aa', // Pastel Peach
    year: '2025',
    client: 'Vanguard Coffee Co.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1000&q=80&auto=format&fit=crop',
    aspectRatio: '4 / 3',
    description:
      'Empaque coleccionable para lotes limitados de café de origen. Sistema codificado por colorimetría pastel y mapas topográficos impresos en serigrafía.',
    deliverables: ['Bolsas de Grano', 'Etiquetas Coleccionables', 'Caja de Envío', 'Tote Bags'],
    gallery: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=85&auto=format&fit=crop'
    ]
  },
  {
    id: 'monolith-architecture',
    category: 'branding',
    title: 'Monolith Studio',
    subtitle: 'Estudio de Arquitectura / Identidad & Papelería',
    accent: '#e9d5ff', // Pastel Lavender
    year: '2025',
    client: 'Monolith Atelier',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80&auto=format&fit=crop',
    aspectRatio: '4 / 3',
    description:
      'Identidad limpia y sosegada para un estudio de arquitectura contemporánea. Papelería en papel algodón con relieves en seco y monograma sobrio.',
    deliverables: ['Logotipo & Monograma', 'Papelería con Gofrado', 'Cartelería de Obra', 'Sitio Web'],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=85&auto=format&fit=crop'
    ]
  }
];

export const driftWallItems = [
  {
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=700&q=80&auto=format&fit=crop',
    title: 'Abstract Form 01'
  },
  {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&q=80&auto=format&fit=crop',
    title: 'Liquid Chromatics'
  },
  {
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=700&q=80&auto=format&fit=crop',
    title: 'Kinetic Poster 03'
  },
  {
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700&q=80&auto=format&fit=crop',
    title: 'Minimal Packaging'
  },
  {
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=700&q=80&auto=format&fit=crop',
    title: 'Typographic Layout'
  },
  {
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=700&q=80&auto=format&fit=crop',
    title: 'Sound Architecture'
  },
  {
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=700&q=80&auto=format&fit=crop',
    title: 'Craft Package'
  },
  {
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=700&q=80&auto=format&fit=crop',
    title: 'Glass Prism 3D'
  },
  {
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=700&q=80&auto=format&fit=crop',
    title: 'Editorial Spread'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80&auto=format&fit=crop',
    title: 'Geometric Studio'
  },
  {
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=700&q=80&auto=format&fit=crop',
    title: 'Oil & Geometry'
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80&auto=format&fit=crop',
    title: 'Hardware Identity'
  },
  {
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=700&q=80&auto=format&fit=crop',
    title: 'Catalog Print'
  },
  {
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=700&q=80&auto=format&fit=crop',
    title: 'Audio Visuals'
  },
  {
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=700&q=80&auto=format&fit=crop',
    title: 'Neon Gradient'
  }
];

export const creativeTools = [
  {
    name: 'Adobe Photoshop',
    short: 'Ps',
    category: 'Retoque & Texturas',
    color: '#38bdf8',
    bgColor: 'rgba(56, 189, 248, 0.15)',
    borderColor: 'rgba(56, 189, 248, 0.4)'
  },
  {
    name: 'Adobe Illustrator',
    short: 'Ai',
    category: 'Vector & Identidad',
    color: '#fb923c',
    bgColor: 'rgba(251, 146, 60, 0.15)',
    borderColor: 'rgba(251, 146, 60, 0.4)'
  },
  {
    name: 'Figma',
    short: 'Fg',
    category: 'Sistemas & UI',
    color: '#c084fc',
    bgColor: 'rgba(192, 132, 252, 0.15)',
    borderColor: 'rgba(192, 132, 252, 0.4)'
  },
  {
    name: 'Adobe InDesign',
    short: 'Id',
    category: 'Diseño Editorial',
    color: '#f472b6',
    bgColor: 'rgba(244, 114, 182, 0.15)',
    borderColor: 'rgba(244, 114, 182, 0.4)'
  },
  {
    name: 'Adobe After Effects',
    short: 'Ae',
    category: 'Motion Graphics',
    color: '#a78bfa',
    bgColor: 'rgba(167, 139, 250, 0.15)',
    borderColor: 'rgba(167, 139, 250, 0.4)'
  },
  {
    name: 'Cinema 4D',
    short: 'C4D',
    category: 'Modelado 3D',
    color: '#60a5fa',
    bgColor: 'rgba(96, 165, 250, 0.15)',
    borderColor: 'rgba(96, 165, 250, 0.4)'
  },
  {
    name: 'Blender',
    short: 'Bl',
    category: 'Shaders & Render',
    color: '#f97316',
    bgColor: 'rgba(249, 115, 22, 0.15)',
    borderColor: 'rgba(249, 115, 22, 0.4)'
  },
  {
    name: 'Spline',
    short: 'Sp',
    category: '3D Interactivo',
    color: '#4ade80',
    bgColor: 'rgba(74, 222, 128, 0.15)',
    borderColor: 'rgba(74, 222, 128, 0.4)'
  }
];

export const clientLogos = [
  { title: 'BODEGA ALTA VISTA', subtitle: 'Mendoza' },
  { title: 'AURA COSMETICS', subtitle: 'Brand Studio' },
  { title: 'KROMA PUBLISHING', subtitle: 'Editorial' },
  { title: 'VANGUARD COFFEE', subtitle: 'Specialty' },
  { title: 'MONOLITH ATELIER', subtitle: 'Architecture' },
  { title: 'NEXUS DIGITALS', subtitle: 'Creative Tech' },
  { title: 'VALLE DE UCO', subtitle: 'Winery' }
];
