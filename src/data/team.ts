export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export const team: TeamMember[] = [
  {
    name: 'Claudia Romero Carrillo',
    role: 'Dirección de Proyecto',
    bio: 'Conecta patrimonio, cultura y narrativa. Lidera la visión transmedia de DescubreLoTuyo.',
    avatar: '/claudia.jpg',
  },
  {
    name: 'Jose Vizuete Montero',
    role: 'Guion y Relatos Sonoros',
    bio: 'Escribe y produce las audioguías. Convierte la historia en historias que se escuchan.',
    avatar: '/jose.jpg',
  },
  {
    name: 'Lucía Gómez Cabrera',
    role: 'Diseño y Redes',
    bio: 'Diseña la identidad visual y lleva el proyecto a TikTok e Instagram. El ojo de DLY.',
    avatar: '/lucia.jpg',
  },
  {
    name: 'Álvaro Aláez Burgos',
    role: 'Desarrollo y Tecnología',
    bio: 'Construye la plataforma web y los componentes interactivos, como el mapa sonoro.',
    avatar: '/alvaro.jpg',
  },
];
