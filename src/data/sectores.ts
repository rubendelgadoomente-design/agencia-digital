export const sectores = {
  reformas: {
    nombre: "Empresas de Reformas",
    heroTitle: "No dejes tu agenda vacía. Consigue más obras en tu zona.",
    dolor: "¿Harto de competir por precio? Posicionamos tu empresa para que te llamen clientes que buscan calidad, no regateos.",
    oficio: "Reformista",
  },
  fontaneria: {
    nombre: "Fontaneros",
    heroTitle: "Domina las urgencias. SEO Local para Fontanería.",
    dolor: "Cuando hay una avería, el cliente llama al primero que sale en Google Maps. Nosotros te ponemos ahí.",
    oficio: "Fontanero",
  },
  instalaciones: {
    nombre: "Instaladores",
    heroTitle: "Multiplica tus instalaciones antes de que acabe la temporada.",
    dolor: "Sistematizamos tu captación para que tengas un flujo constante de clientes pidiendo presupuestos (toldos, clima, etc.).",
    oficio: "Instalador",
  },
  clinicas: {
    nombre: "Clínicas Locales",
    heroTitle: "Llena tu sala de espera con pacientes de tu ciudad.",
    dolor: "Tu competencia se lleva a los pacientes en Google Maps. Nosotros blindamos tu presencia digital.",
    oficio: "Director de Clínica",
  }
};

export type SectorSlug = keyof typeof sectores;
