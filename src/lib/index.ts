/**
 * Route constants for single-page navigation anchors.
 */
export const ROUTE_PATHS = {
  HOME: '/',
  HERO: '#hero',
  IMPACT: '#impact',
  OPEN_SOURCE: '#opensource',
  STACK: '#stack',
  CONTACT: '#contact',
} as const;

/**
 * Interface for project-related data.
 */
export interface Project {
  title: string;
  description: string;
  link: string;
  tag?: string;
  tech?: string[];
}

/**
 * Technical stack data with display names and potential icon references.
 */
export const TECH_STACK = [
  { name: 'React', icon: 'SiReact' },
  { name: 'React Native', icon: 'SiReact' },
  { name: 'Vue.js', icon: 'SiVuedotjs' },
  { name: 'TypeScript', icon: 'SiTypescript' },
  { name: 'JavaScript', icon: 'SiJavascript' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
  { name: 'Redux', icon: 'SiRedux' },
  { name: 'Pinia', icon: 'SiVuedotjs' },
  { name: 'Git', icon: 'SiGit' },
] as const;

/**
 * Impact metrics derived from professional experience and optimizations.
 */
export const IMPACT_METRICS = [
  {
    id: 'bundle',
    metric: '89.6%',
    description: 'Reducción en el tamaño del bundle principal utilizando técnicas avanzadas en Vue.js y PrimeVue.',
  },
  {
    id: 'speed',
    metric: '35%',
    description: 'Incremento en la velocidad de desarrollo del equipo mediante arquitecturas modulares (DDD).',
  },
  {
    id: 'users',
    metric: '5,000+',
    description: 'Usuarios activos servidos simultáneamente en plataformas transaccionales de alta disponibilidad.',
  },
  {
    id: 'revenue',
    metric: '$10M+',
    description: 'Volumen transaccional procesado anualmente a través de sistemas robustos y seguros.',
  },
] as const;

/**
 * Open source contributions and packages.
 */
export const OPEN_SOURCE_PROJECTS: Project[] = [
  {
    title: 'vue-pdf-form-viewer',
    description: 'Paquete de npm creado y publicado para facilitar la visualización de formularios PDF en entornos Vue.',
    link: 'https://www.npmjs.com/package/vue-pdf-form-viewer',
    tech: ['Vue.js', 'PDF.js', 'TypeScript'],
    tag: 'NPM Package',
  },
];

/**
 * Utility to handle smooth scrolling to anchors.
 */
export const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
