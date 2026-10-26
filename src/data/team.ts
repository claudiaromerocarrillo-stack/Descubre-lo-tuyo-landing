export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export const team: TeamMember[] = [
  {
    name: 'Lucía Fernández',
    role: 'Dirección de Proyecto',
    bio: 'Conecta patrimonio, cultura y narrativa. Lidera la visión transmedia de DescubreLoTuyo.',
    avatar:
      'https://images.pexels.com/photos/9502305/pexels-photo-9502305.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    name: 'Marco Ruiz',
    role: 'Guion y Relatos Sonoros',
    bio: 'Escribe y produce las audioguías. Convierte la historia en historias que se escuchan.',
    avatar:
      'https://images.pexels.com/photos/29615996/pexels-photo-29615996.png?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    name: 'Paula Vidal',
    role: 'Diseño y Redes',
    bio: 'Diseña la identidad visual y lleva el proyecto a TikTok e Instagram. El ojo de DLY.',
    avatar:
      'https://images.pexels.com/photos/16869444/pexels-photo-16869444.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    name: 'Diego Cantero',
    role: 'Desarrollo y Tecnología',
    bio: 'Construye la plataforma web y los componentes interactivos, como el mapa sonoro.',
    avatar:
      'https://images.pexels.com/photos/16160952/pexels-photo-16160952.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
];
