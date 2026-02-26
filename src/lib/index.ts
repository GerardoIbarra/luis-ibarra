/**
 * Route constants for single-page navigation anchors.
 */
export const ROUTE_PATHS = {
  HOME: '/',
  HERO: '#hero',
  PROFILE: '#profile',
  PROJECTS: '#projects',
  EXPERTISE: '#expertise',
  CONTACT: '#contact',
} as const;

/**
 * Interface for project-related data - Mandatory Case Study Structure.
 */
export interface Project {
  title: string;
  tagline: string;
  context: string;     // Business Context
  scope: string;       // Engineering Scope
  architecture: string;
  performance: string; // Performance Strategy
  testing: string;     // Testing & QA
  security: string;
  impact: string[];    // Metrics
  stack: string[];
}

/**
 * Impact metrics for the home page highlights.
 */
export const IMPACT_METRICS = [
  {
    id: 'bundle',
    metric: '89.6%',
    label: 'Bundle Reduction',
    description: 'Achieved through aggressive Tree Shaking, Code Splitting, and lazy loading strategies.',
  },
  {
    id: 'velocity',
    metric: '35%',
    label: 'Velocity Increase',
    description: 'Boosted through Domain-Driven Design (DDD) and a modular component library.',
  },
  {
    id: 'revenue',
    metric: '$10M+',
    label: 'Annual Transactions',
    description: 'Yearly transactional volume processed through high-availability financial systems.',
  },
  {
    id: 'duplication',
    metric: '40%',
    label: 'Code Reuse',
    description: 'Reduction in duplication using an atomic design system of 50+ reusable components.',
  },
] as const;

/**
 * Selected Projects / Case Studies
 * Verified against CV: CentraMed, Solec, Milktech, Eversoft.
 */
export const SELECTED_PROJECTS: Project[] = [
  {
    title: 'CentraMed Healthcare OS',
    tagline: 'Enterprise diagnostic & patient management system with DDD architecture.',
    context: 'Healthcare enterprise platform serving thousands of medical professionals requiring real-time clinical data and scheduling.',
    scope: 'Senior Frontend Developer. Responsible for architecting and optimizing frontend applications using Vue.js 3 and PrimeVue.',
    architecture: 'Designed a scalable Domain-Driven Design (DDD) architecture with a modular component library to isolate clinical domain logic from UI.',
    performance: 'Implemented route-based code splitting and aggressive lazy loading to reduce main bundle size by 89.6%.',
    testing: 'Comprehensive suite including Unit testing for core logic and E2E testing for critical clinical workflows.',
    security: 'Implemented secure JWT authentication system with granular Role-Based Access Control (RBAC) and digital signature pad integration.',
    impact: [
      '89.6% reduction in main bundle size',
      '35% increase in development team velocity',
      'Served thousands of medical professionals with <200ms latency'
    ],
    stack: ['Vue.js 3', 'TypeScript', 'Pinia', 'Tailwind', 'PrimeVue', 'Vitest']
  },
  {
    title: 'Solec Enterprise Suite',
    tagline: 'High-performance responsive web applications for global enterprise clients.',
    context: 'Cross-browser compatible enterprise solutions requiring secure management of sensitive client data.',
    scope: 'Frontend Developer. Developed responsive web applications using Vue.js for global enterprise clients in Agile environments.',
    architecture: 'Modular Vue architecture with Vuex/Pinia state management, focusing on reusable component patterns and secure REST API layers.',
    performance: 'Applied bundle optimization techniques, code splitting, and lazy loading for optimized delivery on enterprise networks.',
    testing: 'Integrated into CI/CD pipelines with automated validation steps for cross-browser stability and performance gates.',
    security: 'Integrated secure JWT authentication systems for robust user management and data protection.',
    impact: [
      'Full cross-browser compatibility across enterprise fleets',
      'Zero security breaches through robust JWT implementation',
      'High responsiveness for global mobile workforces'
    ],
    stack: ['Vue.js', 'TypeScript', 'Vuex', 'REST API', 'Agile']
  },
  {
    title: 'Milktech Crypto Ecosystem',
    tagline: 'High-availability mobile payment platform for cryptocurrency assets.',
    context: 'Cryptocurrency-focused mobile application and dashboard for managing high-frequency crypto transactions and enterprise wallet reporting.',
    scope: 'Frontend Developer. Developed React Native mobile applications for managing digital assets, serving 5,000+ active users.',
    architecture: 'Built a 50+ reusable React Native component system using Redux Toolkit for complex asynchronous cryptocurrency state management.',
    performance: 'Optimized main thread performance through selective Redux Toolkit updates and virtualization for large blockchain transaction logs.',
    testing: 'Unit tested core financial and wallet logic to ensure zero transactional errors across $10M+ of annual volume.',
    security: 'Strict XSS/CSRF prevention, secure storage for digital asset credentials, and audited crypto-transaction flows.',
    impact: [
      '$10M+ annual transaction volume processed',
      '5,000+ active enterprise users sustained',
      '40% reduction in code duplication'
    ],
    stack: ['React Native', 'React', 'JavaScript', 'Redux Toolkit', 'Axios']
  },
  {
    title: 'Eversoft Platform',
    tagline: 'Full-stack enterprise solution with seamless data integration.',
    context: 'Internal enterprise platform requiring high-fidelity data flow between React frontends and Laravel backends.',
    scope: 'Full Stack Developer. Developed web applications ensuring seamless data flow and user experience.',
    architecture: 'Clean frontend segments integrated with Laravel REST API endpoints following Agile methodologies.',
    performance: 'Optimized API polling and data fetching to ensure real-time feel in data-heavy modules.',
    testing: 'Participated in code review processes and automated testing to maintain high standards.',
    security: 'Secure session management and authenticated API gatekeeping.',
    impact: [
      'Successful delivery of complex data-heavy modules',
      'Maintained high code quality through rigorous peer review',
      'Seamless frontend/backend integration'
    ],
    stack: ['React', 'Laravel', 'REST API', 'Agile']
  }
];

/**
 * Technical Expertise - Strategic Grouping
 */
export const TECHNICAL_EXPERTISE = [
  {
    category: 'Frontend Architecture',
    skills: ['Domain-Driven Design (DDD)', 'Modular Component Libraries', 'Atomic Design', 'System Blueprinting']
  },
  {
    category: 'Performance Engineering',
    skills: ['Bundle Optimization (Tree Shaking)', 'Code Splitting / Lazy Loading', 'Core Web Vitals Monitoring', 'Asset Pipelines']
  },
  {
    category: 'Testing & CI/CD',
    skills: ['Unit Testing (Vitest/Jest)', 'E2E Testing (Playwright)', 'GitHub Actions / CI Pipelines', 'Quality Gates']
  },
  {
    category: 'Security',
    skills: ['JWT / Secure Sessions', 'Role-Based Access Control (RBAC)', 'XSS / CSRF Prevention', 'Secure Data Storage']
  },
  {
    category: 'State Management',
    skills: ['Pinia / Vuex', 'Redux / Redux-Saga', 'React Query / SWR', 'Context API']
  },
  {
    category: 'Mobile Development',
    skills: ['React Native (iOS/Android)', 'Cross-platform optimization', 'Offline-first Strategies', 'App Store Delivery']
  },
  {
    category: 'Collaboration & Agile',
    skills: ['Technical Mentorship', 'Scrum / Kanban Mastery', 'Figma to Code', 'Git Flow / Trunk Based Development']
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

/**
 * Main Development Stack for the prominent display section.
 */
export const DEVELOPMENT_STACK = [
  { name: 'TypeScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Redux Toolkit', category: 'State' },
  { name: 'Pinia', category: 'State' },
  { name: 'Vite', category: 'Tooling' },
  { name: 'Playwright', category: 'Testing' },
  { name: 'Vitest', category: 'Testing' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Nuxt', category: 'Framework' }
] as const;
