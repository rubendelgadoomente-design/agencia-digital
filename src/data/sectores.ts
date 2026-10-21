export interface SectorBenefit {
  titulo: string;
  texto: string;
}

export interface SectorData {
  nombre: string;
  heroTitle: string;
  dolor: string;
  oficio: string;
  descripcion: string;
  beneficios: SectorBenefit[];
}

export const sectores: Record<string, SectorData> = {
  reformas: {
    nombre: "Empresas de Reformas y Construcción",
    heroTitle: "No dejes tu agenda vacía. Consigue más obras en tu zona.",
    dolor: "¿Cansado de competir por precio en portales que te cobran por cada contacto? Posicionamos tu empresa para que los propietarios de la Sierra te llamen directamente a ti.",
    oficio: "Reformista",
    descripcion: "Ecosistema diseñado para albañiles, pintores y empresas de reformas integrales en la Sierra de Madrid.",
    beneficios: [
      {
        titulo: "Trato directo sin comisiones",
        texto: "Olvídate de pagar créditos a plataformas que venden el mismo contacto a 4 competidores. El propietario te llama en exclusiva a ti.",
      },
      {
        titulo: "Casos de éxito reales en la Sierra",
        texto: "Aplicamos el mismo sistema exacto de SEO local y Google Maps que ya funciona en Reparaciones Manzanares.",
      },
      {
        titulo: "Generador de presupuestos en PDF",
        texto: "Te incluimos la herramienta para calcular y enviar presupuestos profesionales con tu logotipo en 2 minutos desde el móvil.",
      },
      {
        titulo: "Obras de mayor presupuesto",
        texto: "Filtramos a clientes que buscan reformas integrales, cocinas y baños de calidad, no regateos de última hora.",
      },
    ],
  },
  fontaneria: {
    nombre: "Fontaneros y Calefactores",
    heroTitle: "Domina las urgencias. SEO Local para Fontanería en la Sierra.",
    dolor: "Cuando revienta una tubería o se apaga una caldera en invierno, el cliente llama al primer resultado que ve en Google Maps. Nosotros te colocamos en ese podio.",
    oficio: "Fontanero",
    descripcion: "Sistema especializado en urgencias 24h, desatascos, calderas y mantenimiento en la Sierra de Guadarrama.",
    beneficios: [
      {
        titulo: "Visibilidad inmediata en urgencias",
        texto: "Optimizamos tu ficha de Google Maps para que salgas en las búsquedas móviles con botón de llamada directa inmediata.",
      },
      {
        titulo: "Filtro de zonas y desplazamientos",
        texto: "Posicionamos tu radio de acción exacto (M-607, M-608) para que no pierdas horas en desplazamientos que no te son rentables.",
      },
      {
        titulo: "WhatsApp automatizado para avisos",
        texto: "Canal directo con plantilla de recogida de datos (dirección, foto de la avería) para atender avisos mientras estás en faena.",
      },
      {
        titulo: "Sustitución de calderas y termos",
        texto: "Páginas específicas para captar renovación de calderas y termos en chalets y unifamiliares de la comarca.",
      },
    ],
  },
  instalaciones: {
    nombre: "Instaladores (Clima, Aerotermia, Toldos)",
    heroTitle: "Multiplica tus instalaciones en chalets antes de temporada.",
    dolor: "Instalar aerotermia, climatización o cerramientos deja márgenes excelentes, pero depender solo del boca a boca deja meses a tus cuadrillas con huecos en la agenda.",
    oficio: "Instalador",
    descripcion: "Captación continua para profesionales de aire acondicionado, bombas de calor, pérgolas y cerramientos en la Sierra de Madrid.",
    beneficios: [
      {
        titulo: "Captación estacional anticipada",
        texto: "Posicionamos tu empresa antes de que llegue la ola de calor o el invierno para llenar tu calendario de instalaciones con antelación.",
      },
      {
        titulo: "Presupuestos de ticket alto en chalets",
        texto: "Atracción de propietarios de viviendas unifamiliares y parcelas en urbanizaciones que buscan calidad y eficiencia energética.",
      },
      {
        titulo: "Generador de presupuestos técnicos",
        texto: "Herramienta digital para configurar opciones (marcas, frigorías, acabados) y cerrar acuerdos en la primera visita técnica.",
      },
      {
        titulo: "Galería de montajes certificados",
        texto: "Muestra tus instalaciones reales y acabados profesionales para justificar presupuestos con margen sin competir por la opción más barata.",
      },
    ],
  },
  clinicas: {
    nombre: "Clínicas Dentales, Fisioterapia y Veterinarias",
    heroTitle: "Llena tu agenda con pacientes nuevos de tu municipio.",
    dolor: "¿Tus vecinos acuden a franquicias o a clínicas de Madrid capital porque no te encuentran en Google Maps? Blindamos tu presencia local para convertir búsquedas de salud en citas confirmadas.",
    oficio: "Responsable de Clínica",
    descripcion: "Ecosistema de captación y atención automatizada para centros de salud, clínicas dentales, fisioterapeutas y veterinarias en la Sierra de Madrid.",
    beneficios: [
      {
        titulo: "Pacientes nuevos desde Google Maps",
        texto: "Posicionamiento en el Top 3 local cuando los vecinos buscan 'dentista cerca de mí', 'fisioterapia en Colmenar' o 'veterinario urgencias'.",
      },
      {
        titulo: "Asistente de IA 24/7 en WhatsApp",
        texto: "Resuelve dudas frecuentes (horarios, preparación previa, seguros aceptados) y canaliza peticiones de cita las 24 horas del día, incluso festivos.",
      },
      {
        titulo: "Gestión y multiplicación de reseñas",
        texto: "Sistema automatizado para solicitar reseñas de 5 estrellas a pacientes satisfechos, construyendo una reputación intachable que genera confianza inmediata.",
      },
      {
        titulo: "Páginas por tratamiento y especialidad",
        texto: "Estructura web con páginas dedicadas para cada tratamiento (implantes, ortodoncia invisible, suelo pélvico, medicina felina) para captar búsquedas especializadas.",
      },
    ],
  },
};

export type SectorSlug = keyof typeof sectores;
