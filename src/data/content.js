// =====================================================================
//  Todo el contenido editable de la landing vive en este archivo.
//  Cambia textos, precios y datos de contacto aquí sin tocar los componentes.
// =====================================================================

// DATOS DE CONTACTO (reemplazar por los reales antes de publicar)
export const CONTACT = {
  whatsapp: '51964975515', // formato internacional, sin + ni espacios
  email: 'reservas@marryme.pe',
  instagram: '@marryme.peru',
  location: 'Arequipa, Perú',
}

export const NAV = [
  { label: 'Propuesta', href: '#propuesta' },
  { label: 'Destinos', href: '#destinos' },
  { label: 'Planes', href: '#planes' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Preguntas', href: '#faq' },
]

// Resultados de la encuesta aplicada a 60 parejas (plan de negocio, sección 3.6)
export const STATS = [
  { value: '96.6%', label: 'está abierto a casarse en un destino distinto al de su residencia' },
  { value: '88.3%', label: 'contrataría una empresa que organice su boda de destino de forma integral' },
  { value: '68.3%', label: 'dice un rotundo sí a celebrar fuera de su lugar de residencia' },
]

export const VALUE = [
  {
    icon: 'Heart',
    title: 'Ceremonias a tu medida',
    text: 'Bodas simbólicas, renovación de votos y rituales de unión, con oficiantes bilingües y una puesta en escena que cuenta tu historia.',
  },
  {
    icon: 'Compass',
    title: 'Destino y viaje en uno',
    text: 'Hospedaje, traslados, catering y tours privados para ti y tus invitados, coordinados por un solo equipo.',
  },
  {
    icon: 'Mountain',
    title: 'Costa, Sierra y Selva',
    text: 'Cobertura multidestino para elegir el escenario que mejor represente a tu pareja, sin quedarte en lo de siempre.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Logística sin estrés',
    text: 'Permisos, proveedores locales y plan B climático resueltos. Tú solo te ocupas de disfrutar.',
  },
]

// "preferencia" = porcentaje de la encuesta (pregunta 4)
export const DESTINOS = [
  {
    id: 'cusco',
    name: 'Cusco y Valle Sagrado',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-RGy2rOjEjHBQADosMFkI3RgLO8OADoKILYOLrVkzpw&s=10',
    region: 'Sierra',
    preferencia: 43.3,
    text: 'Casonas coloniales, terrazas andinas y rituales de pago a la Tierra bajo montañas sagradas.',
  },
  {
    id: 'costa',
    name: 'Costa y playas',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOen6N_wK2Gi2nrUUjNiBVZERHATGMiVavudeF3r3kGhOMZhRVJV-rl_xE&s=10',
    region: 'Costa',
    preferencia: 30,
    text: 'Ceremonias al atardecer con el Pacífico de fondo, pies descalzos y brisa de mar.',
  },
  {
    id: 'arequipa',
    name: 'Arequipa y Colca',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfzikiIS9dIjHAYbC3MPi596CPc-Naox1Z3QJjX1rDyw&s=10',
    region: 'Sierra sur',
    preferencia: 20,
    text: 'Sillar blanco, volcanes y cañones imponentes para una boda con carácter propio.',
  },
  {
    id: 'selva',
    name: 'Selva amazónica',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRq6TQlXF6JO9CUxgGJ1r6oil6wxv5KG7_SYT9rTJ_MA&s=10',
    region: 'Selva',
    preferencia: 20,
    text: 'Una ceremonia íntima rodeada de vegetación, ríos y una naturaleza que abraza.',
  },
  {
    id: 'puno',
    name: 'Puno y Titicaca',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlR-WcGV0bNbKnvEr43imJDFmZyQV-8Za-jIZaKTRoyw&s=10',
    region: 'Altiplano',
    preferencia: 10,
    text: 'Islas flotantes, cultura viva y la luz única del lago navegable más alto del mundo.',
  },
]

// Todos los planes parten de la misma base integral (plan de negocio, sección 1.5)
export const BASE_INCLUYE = [
  'Diseño escénico de una ceremonia temática',
  'Selección del destino y escenario',
  'Coordinación de hospedaje',
  'Traslados necesarios',
  'Catering y bebidas',
  'Actividades turísticas del destino',
  'Cobertura fotográfica de la ceremonia',
]

// Precios referenciales basados en los rangos de disposición de pago de la encuesta.
// Ajústalos a tu estructura de costos real.
export const PLANES = [
  {
    id: 'basico',
    name: 'Básico',
    tagline: 'La esencia de tu historia',
    price: 'US$ 3,000',
    note: 'Pareja + hasta 20 invitados',
    featured: false,
    features: [
      '1 destino a elegir',
      'Ceremonia simbólica con temática base',
      'Oficiante bilingüe',
      'Coordinación de hospedaje para novios e invitados',
      'Traslados: aeropuerto, hotel y lugar de ceremonia',
      'Brindis y cena ligera',
      'Decoración esencial',
      'Fotografía de la ceremonia (galería digital)',
      '1 experiencia turística privada',
      'Soporte de concierge el día de la boda',
    ],
  },
  {
    id: 'estandar',
    name: 'Estándar',
    tagline: 'Personalizada y cultural',
    price: 'US$ 5,000',
    note: 'Pareja + hasta 40 invitados',
    featured: true,
    badge: 'Más elegido',
    features: [
      'Todo lo del plan Básico',
      'Ritual cultural a elección (pago a la Tierra, handfasting y más)',
      'Diseño escénico personalizado con tu paleta y tu historia',
      'Menú completo de catering con brindis',
      'Fotografía y video resumen de la ceremonia',
      '3 tours y experiencias privadas',
      'Traslados durante toda la estadía',
      'Itinerario de viaje para los invitados',
      'Gestión de permisos del lugar',
      'Concierge turístico durante toda la estancia',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Exclusividad total',
    price: 'US$ 8,000',
    note: 'Pareja + 60 a 80 invitados',
    featured: false,
    features: [
      'Todo lo del plan Estándar',
      'Multidestino: combina Costa, Sierra y Selva',
      'Diseño escénico de autor y ambientación a gran escala',
      'Música en vivo con artistas locales',
      'Gastronomía de autor con maridaje',
      'Fotografía, video cinematográfico, dron y cámara 360°',
      'Hospedaje boutique seleccionado',
      'Experiencias privadas a medida, sin límite',
      'Plan B climático y equipo de apoyo dedicado',
      'Concierge personal 24/7 y propuesta de luna de miel',
    ],
  },
]

export const PASOS = [
  {
    title: 'Conversemos',
    text: 'Nos cuentas cómo sueñan su ceremonia, cuántos invitados serán y el presupuesto aproximado.',
  },
  {
    title: 'Elegimos el destino',
    text: 'Te proponemos escenarios y fechas según clima, temporada y disponibilidad de proveedores.',
  },
  {
    title: 'Diseñamos la experiencia',
    text: 'Ceremonia, ambientación, alojamiento, traslados y actividades, todo en una sola propuesta.',
  },
  {
    title: 'Viajan y celebran',
    text: 'Nuestro concierge coordina cada detalle en el destino para que ustedes solo vivan el momento.',
  },
  {
    title: 'Guardan los recuerdos',
    text: 'Reciben su galería y los momentos principales de la experiencia para revivirla siempre.',
  },
]

export const FAQ = [
  {
    q: '¿La boda simbólica tiene validez legal?',
    a: 'No. Es una ceremonia simbólica o ritual de unión, por eso no requiere los trámites del matrimonio civil. Si desean además casarse civilmente, podemos orientarlos sobre el proceso.',
  },
  {
    q: '¿Puedo celebrar si no soy peruano o no vivo en Perú?',
    a: 'Sí. Atendemos a parejas nacionales e internacionales, con oficiantes bilingües y atención en español e inglés.',
  },
  {
    q: '¿Los planes se pueden personalizar?',
    a: 'Claro. Los planes son una base: podemos ajustar temática, escenario, actividades, ambientación y servicios complementarios según tus preferencias y presupuesto.',
  },
  {
    q: '¿En qué meses conviene casarse?',
    a: 'La temporada alta va de mayo a octubre, con más demanda y menos disponibilidad. Reservar con anticipación asegura mejores lugares y tarifas.',
  },
  {
    q: '¿Qué pasa si hay mal clima?',
    a: 'Trabajamos con planes alternativos para ceremonias al aire libre. En el plan Premium incluimos un plan B climático dedicado.',
  },
  {
    q: '¿Se pueden hacer ceremonias en áreas protegidas o zonas históricas?',
    a: 'Algunos lugares tienen normas y permisos especiales. Nosotros nos encargamos de gestionarlos con anticipación y de proponerte alternativas cuando no sea posible.',
  },
]
