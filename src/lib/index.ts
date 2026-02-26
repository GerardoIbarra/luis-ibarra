/**
 * Route constants for single-page navigation anchors.
 */
export const ROUTE_PATHS = {
  HOME: '/',
  HERO: '#hero',
  ABOUT: '#about',
  PROJECTS: '#projects',
  EXPERTISE: '#expertise',
  LEADERSHIP: '#leadership',
  CONTACT: '#contact',
} as const;

/**
 * Interface for project-related data.
 */
export interface Project {
  title: string;
  tagline: string;
  problem: string;
  architecture: string;
  stack: string[];
  metrics: string[];
  decisions: string[];
  performance: string[];
  link?: string;
}

/**
 * Impact metrics derived from professional experience.
 */
export const IMPACT_METRICS = [
  {
    id: 'bundle',
    metric: '89.6%',
    label: 'Bundle Reduction',
    description: 'Reduced main bundle size using Tree Shaking, Code Splitting, and dependency optimization.',
  },
  {
    id: 'tasks',
    metric: '25%',
    label: 'Efficiency Boost',
    description: 'Improvement in task completion rates through UX/UI refactoring and performance tuning.',
  },
  {
    id: 'revenue',
    metric: '$10M+',
    label: 'Annual Processing',
    description: 'Total yearly transactional volume processed through high-availability enterprise systems.',
  },
  {
    id: 'components',
    metric: '50+',
    label: 'Reusable Components',
    description: 'Atomic design system components built for scalability and cross-project consistency.',
  },
] as const;

/**
 * Selected Projects / Case Studies
 * Strategically focused on Engineering Rigor: Architecture, Testing, Performance, and Security.
 */
export const SELECTED_PROJECTS: Project[] = [
  {
    title: 'CentraMed Healthcare OS',
    tagline: 'Enterprise diagnostic & patient management system with DDD architecture.',
    problem: 'Legacy system with high latency and siloed data causing critical delays in patient profiles and scheduling.',
    architecture: 'Modular Frontend using Domain-Driven Design (DDD). Isolated medical domain logic from UI. Implemented a private, audited UI Library for 3 nested sub-platforms.',
    stack: ['Vue.js 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'PrimeVue'],
    metrics: [
      'TTI reduced from 5.2s to 1.1s (89.6% bundle reduction)',
      'Development velocity increased by 35% via modular components',
      'Clinical data retrieval latency: <200ms'
    ],
    decisions: [
      'Migrated to Pinia for scalable, type-safe state management in complex medical workflows.',
      'Implemented secure JWT + RBAC to ensure granular HIPAA-compliant access for medical staff.',
      'Custom PDF engine for real-time clinical report generation and digital signature integration.'
    ],
    performance: [
      'Route-based code splitting and aggressive lazy loading for heavy dashboards.',
      'Intersection Observer for on-demand clinical image rendering.',
      'Zero-re-render strategy for real-time health monitor graphs.'
    ]
  },
  {
    title: 'Fintech Transaction Engine (Milktech)',
    tagline: 'High-availability payment platform processing $10M+ USD annually.',
    problem: 'Need for a 99.9% uptime dashboard to manage high-frequency transactions and enterprise client reporting.',
    architecture: 'Robust React platform with Redux-Saga for complex side-effects and transactional integrity.',
    stack: ['React', 'TypeScript', 'Redux', 'Laravel API', 'PostgreSQL'],
    metrics: [
      '$10M+ annual volume processed with zero transactional errors',
      '5,000+ active enterprise users sustained with 99.9% uptime',
      'Code duplication reduced by 40% using an atomic design system'
    ],
    decisions: [
      'Architected 50+ reusable, unit-tested React components as a company-wide core lib.',
      'Built a custom real-time reconciliation dashboard for financial audits.',
      'Implemented strict XSS/CSRF prevention layers for transactional endpoints.'
    ],
    performance: [
      'Virtualization for audit logs exceeding 10,000+ daily entries.',
      'Optimized Redux selective updates to prevent main-thread blocking during heavy data bursts.'
    ]
  }
];

/**
 * Technical Expertise Categories
 */
export const TECHNICAL_EXPERTISE = [
  {
    category: 'Frontend Architecture',
    skills: ['Modular Design', 'DDD', 'Micro-frontends', 'Design Systems', 'Atomic Design']
  },
  {
    category: 'Performance Engineering',
    skills: ['Bundle Optimization', 'Core Web Vitals', 'Lazy Loading', 'Caching Strategies', 'Code Splitting']
  },
  {
    category: 'Security & Auth',
    skills: ['JWT', 'RBAC', 'OAuth 2.0', 'XSS/CSRF Prevention', 'Secure Storage']
  },
  {
    category: 'State & API',
    skills: ['React Query', 'Zustand / Redux', 'Pinia', 'REST / GraphQL', 'WebSockets']
  },
  {
    category: 'Tooling & Workflow',
    skills: ['Vite / Webpack', 'CI/CD Pipelines', 'ESLint / Prettier', 'Jest / Vitest', 'Git Flow']
  }
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

