/**
 * Route constants for single-page navigation anchors.
 */
export const ROUTE_PATHS = {
  HOME: '/',
  HERO: '#hero',
  PROFILE: '#profile',
  PROJECTS: '#projects',
  SKILLS: '#skills',
  EXPERTISE: '#skills',
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
  detailedSections?: {
    category: string;
    items: string[];
  }[];
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
    tagline: 'High-performance medical EHR & clinical dashboard with atomic session synchronization and dynamic rendering engines.',
    context: 'Enterprise healthcare platform requiring real-time clinical data aggregation, complex medical billing, and high-density data visualization for thousands of professionals.',
    scope: 'Senior Frontend Engineer & Architect. Spearheaded the frontend architecture transition to Vue 3, defining modular standards, API communication patterns (API Factory), and state management strategies.',
    architecture: 'Designed a scalable architecture using the Coordinator Pattern in Pinia and a Dynamic Form Engine (JSON-to-UI) supporting 12+ field types and reactive cross-field validations.',
    performance: 'Optimized high-density clinical views through virtualization and route-based code splitting. Integrated a 68KB local medical catalog for zero-latency access to clinical constants.',
    testing: 'Implemented a comprehensive testing strategy with Playwright (E2E) and Vitest (Unit), enforced via Husky, Conventional Commits, and Semantic Versioning.',
    security: 'Engineered an atomic cross-tab synchronization system using Web Locks API and BroadcastChannel. Implemented granular RBAC resolved directly from JWT payloads without extra roundtrips.',
    impact: [
      '89.6% reduction in main bundle size through aggressive optimization',
      '35% increase in team velocity via a custom design system of 50+ clinical components',
      'Eliminated race conditions in session management using Web Locks API',
      'Automated complex MDM-based medical billing (CPT codes) evaluation'
    ],
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Vite', 'Tailwind CSS v4', 'Playwright', 'Vitest', 'Sentry', 'Docker'],
    detailedSections: [
      {
        category: 'Arquitectura & Stack',
        items: [
          'Definición de arquitectura frontend completa desde cero (Vue 3 + Composition API)',
          'Estructura modular, convenciones, comunicación con API y patrones de estado',
          'Implementación de arquitectura escalable con lazy loading y code splitting por rutas',
          'Migración progresiva a TypeScript estricto (stores, composables, utils)',
          'Modernización del stack con Vite + Tailwind CSS v4',
          'Integración de Pinia con stores segmentados por dominio',
          'Diseño de capa de servicios con API Factory (Axios) con inyección automática de metadatos'
        ]
      },
      {
        category: 'Autenticación & Seguridad',
        items: [
          'Implementación de autenticación basada en JWT (parseo, validación y uso directo en cliente)',
          'Renovación automática de tokens con margen de expiración y manejo de sesión',
          'Sincronización cross-tab atómica usando localStorage, BroadcastChannel y Web Locks API',
          'Sistema de logout por inactividad y alertas preventivas de sesión',
          'Implementación de RBAC granular integrado al router (Evaluación any / all, soporte selfOnly)',
          'Hardening de seguridad con Content Security Policy (CSP) en staging/producción'
        ]
      },
      {
        category: 'Motores & Procesamiento de Datos',
        items: [
          'JSON → UI Dynamic Form Engine: +12 tipos de campo, validaciones reactivas cross-field',
          'Clinical HTML Engine: procesamiento de documentos con DOMParser para sanitización sin latencia',
          'Implementación de catálogo médico local (68KB) para acceso instantáneo a constantes clínicas'
        ]
      },
      {
        category: 'Design System & UI',
        items: [
          'Desarrollo de ~50 componentes reutilizables orientados al dominio clínico',
          'InfiniteScrollSelect (paginación + performance)',
          'PdfViewerEditable (anotaciones + integración con estado global)',
          'SignatureDocument (firma digital)',
          'BaseDataTable (optimizada para alta densidad de columnas)',
          'Soporte de tema claro/oscuro con variables CSS',
          'Rediseño de sidebar dinámico basado en roles y permisos'
        ]
      },
      {
        category: 'Lógica de Dominio Médico',
        items: [
          'Motor de facturación médica (CPT codes): Evaluación por MDM y por tiempo',
          'Sistema de seguros multi-cobertura: Jerarquía primaria/secundaria/terciaria',
          'Dashboard clínico 360° con agregación de datos críticos para toma de decisiones'
        ]
      },
      {
        category: 'Patrones Avanzados & Orquestación',
        items: [
          'Implementación del Coordinator Pattern en Pinia para desacoplar stores',
          'Abstracción de lógica en composables reutilizables (dependencias, autofill, validaciones)',
          'Orquestación de flujos complejos: Ciclo de vida de documentos, sincronización entre módulos'
        ]
      },
      {
        category: 'Auditoría & Trazabilidad',
        items: [
          'Diseño de sistema de Audit Log: Timeline de actividad y componentes reutilizables',
          'Exportación de datos para cumplimiento normativo'
        ]
      },
      {
        category: 'Calidad & Testing',
        items: [
          'Testing E2E con Playwright y Testing unitario con Vitest',
          'Validaciones centralizadas con VeeValidate',
          'Manejo global de errores (Axios interceptors + handler central)',
          'Pipeline con Husky + Conventional Commits + Semantic Versioning'
        ]
      },
      {
        category: 'UX & Performance',
        items: [
          'Optimización de tablas para grandes volúmenes de datos',
          'Mejoras en experiencia de formularios dinámicos complejos',
          'Estrategias de renderizado eficiente en vistas de alta densidad (agenda, dashboards)'
        ]
      }
    ]
  },
  {
    title: 'Trofi Ecosystem',
    tagline: 'Empowering organizers with total control and professional structure to simplify league and tournament orchestration.',
    context: 'A personal entrepreneurial venture focused on providing organizers with absolute control and professional structure. By centralizing scheduling and real-time scoring, Trofi makes it significantly easier to organize and scale complex leagues and tournaments through a unified mobile and web ecosystem.',
    scope: 'Co-founder & Lead Architect. Orchestrated the full-stack delivery of the mobile platform and the web presence, focusing on extreme performance and offline resilience in sports environments.',
    architecture: 'Dual-stack ecosystem: React Native (Expo) for the mobile core and Nuxt 3 for the high-performance landing page. Specialized in real-time match management and tournament lifecycles.',
    performance: 'Engineered a robust offline-first strategy using React Query persistence and AsyncStorage to sustain mission-critical functionality in connectivity-challenged environments like stadiums.',
    testing: 'Automated validation for complex match scoring logic and E2E flows for tournament registration.',
    security: 'Secure administrative controls and role-based access for tournament organizers.',
    impact: [
      '100% Offline resilience via advanced React Query persistence layers',
      'Successful orchestration of real-time match modules for active tournaments',
      'International reach through full multi-language (i18n) implementation',
      'High-performance Nuxt landing page with optimized SEO'
    ],
    stack: ['React Native', 'Expo', 'Nuxt 3', 'i18n', 'React Query', 'TypeScript', 'Tailwind CSS'],
    detailedSections: [
      {
        category: 'Mobile Engineering (React Native)',
        items: [
          'Desarrollo de aplicación móvil de alto rendimiento con Expo para la gestión de torneos',
          'Implementación de soporte offline total mediante React Query Persistence Client',
          'Sincronización de datos con AsyncStorage y manejo de estado de red con NetInfo',
          'Módulo de gestión de partidos (CRUD avanzado, programación y resultados en tiempo real)'
        ]
      },
      {
        category: 'Web & i18n (Nuxt)',
        items: [
          'Landing page corporativa construida con Nuxt 3 con enfoque en alta conversión',
          'Optimización extrema de SEO y Web Vitals para captación de usuarios',
          'Implementación de soporte multi-lenguaje (i18n) para alcance internacional'
        ]
      },
      {
        category: 'Lógica de Negocio & Producto',
        items: [
          'Sistema integral de administración de torneos con jerarquías de roles',
          'Orquestación de flujos de partidos y resultados en tiempo real para usuarios y organizadores'
        ]
      }
    ]
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
    skills: ['Domain-Driven Design (DDD)', 'Spec-Driven Development', 'Modular UI & Design Systems', 'Framer Motion / Micro-interactions']
  },
  {
    category: 'Performance Engineering',
    skills: ['Bundle Optimization (Tree Shaking)', 'PWA & Service Workers (Workbox)', 'Modern Rendering (SSR / SSG)', 'Code Splitting & Lazy Loading']
  },
  {
    category: 'Testing & CI/CD',
    skills: ['Unit Testing (Vitest/Jest)', 'E2E Testing (Playwright)', 'GitHub Actions / CI Pipelines', 'Quality Gates']
  },
  {
    category: 'Security',
    skills: ['JWT / Secure Sessions', 'Role-Based Access Control (RBAC)', 'Web Locks & BroadcastChannel APIs', 'XSS / CSRF Prevention']
  },
  {
    category: 'State Management',
    skills: ['Pinia / Vuex', 'Redux / Redux-Saga', 'React Query / SWR', 'Context API']
  },
  {
    category: 'Mobile Development',
    skills: ['React Native (iOS/Android)', 'Expo EAS (CI/CD) & Fastlane', 'Native Bridging (Turbo Modules)', 'Offline-first Strategies']
  },
  {
    category: 'Collaboration & Agile',
    skills: ['AI-Assisted Workflows (MCP)', 'Technical Mentorship', 'Scrum / Kanban Mastery', 'Git Flow / Trunk Based Development']
  },
  {
    category: 'Domain Expertise',
    skills: ['HealthTech EHR/EMR Systems', 'FinTech ERP Architecture', 'High-Volume Transaction Systems', 'PACS/DICOM (Orthanc) Integration']
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
  { name: 'React Native', category: 'Mobile' },
  { name: 'Vue 3', category: 'Frontend' },
  { name: 'Nuxt.js', category: 'Framework' },
  { name: 'Tailwind CSS v4', category: 'Styling' },
  { name: 'PrimeVue', category: 'UI Library' },
  { name: 'Pinia', category: 'State' },
  { name: 'React', category: 'Frontend' },
  { name: 'Vite', category: 'Tooling' },
  { name: 'Playwright', category: 'Testing' },
  { name: 'Vitest', category: 'Testing' },
  { name: 'Redux Toolkit', category: 'State' }
] as const;
