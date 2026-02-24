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
    description: 'Reduction in main bundle size using advanced techniques in Vue.js and PrimeVue.',
  },
  {
    id: 'speed',
    metric: '35%',
    description: 'Increase in team development speed through modular architectures (DDD).',
  },
  {
    id: 'users',
    metric: '5,000+',
    description: 'Concurrent active users served on high-availability transactional platforms.',
  },
  {
    id: 'revenue',
    metric: '$10M+',
    description: 'Annual transactional volume processed through robust and secure systems.',
  },
] as const;

/**
 * Open source contributions and packages.
 */
export const OPEN_SOURCE_PROJECTS: Project[] = [
  {
    title: 'vue-pdf-form-viewer',
    description: 'NPM package created and published to facilitate PDF form visualization in Vue environments.',
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
