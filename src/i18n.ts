import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        hero: 'Hero',
        profile: 'Profile',
        history: 'History',
        skills: 'Skills',
        contact: "Let's Talk",
        getInTouch: 'Get in Touch'
      },
      hero: {
        title: 'Senior Frontend Engineer',
        name: 'Luis Gerardo Ibarra Sustayd',
        cta: 'Engineering Case Studies',
        cv: 'Download CV',
        scroll: 'Scroll to Explore'
      },
      profile: {
        title: 'Engineering Profile',
        description1: 'Specialized in <strong>Enterprise Application Architecture</strong>, bridging the gap between complex business requirements and high-performance technical delivery. Expertise in building scalable systems with a focus on Frontend Architecture, Security, and Performance Engineering.',
        description2: 'Extensive experience in <strong>Agile environments</strong>, participating in the full SDLC, from architectural design to automated testing (Unit/E2E) and CI/CD pipeline integration.',
        architecture: {
          title: 'Architecture',
          desc: 'Modular Design, Domain-Driven Design (DDD), Clean Architecture.'
        },
        performance: {
          title: 'Performance',
          desc: 'Bundle Optimization, Lazy Loading, Real-time Metrics.'
        },
        security: {
          title: 'Security',
          desc: 'JWT Authentication, RBAC, XSS/CSRF Prevention.'
        },
        quality: {
          title: 'Quality',
          desc: 'TDD, automated unit/E2E testing, CI/CD gates.'
        }
      },
      projects: {
        title: 'History',
        badge: 'Engineering Case Study',
        deepDive: 'Technical Deep Dive',
        sections: {
          context: 'A) Business Context',
          scope: 'B) Engineering Scope',
          architecture: 'C) Architecture',
          performance: 'D) Performance Strategy',
          testing: 'E) Testing & QA',
          security: 'F) Security',
          impact: 'G) Impact & Metrics'
        },
        centramed: {
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
            'Eliminated session race conditions using Web Locks & BroadcastChannel',
            'Automated complex medical billing (CPT codes) evaluation flows'
          ],
          detailedSections: [
            {
              category: 'Architecture & Stack',
              items: [
                'Defined full frontend architecture from scratch (Vue 3 + Composition API)',
                'Implemented scalable architecture with lazy loading and code splitting by routes',
                'Progressive migration to strict TypeScript (stores, composables, utils)',
                'Stack modernization with Vite + Tailwind CSS v4',
                'Pinia integration with domain-segmented stores',
                'API Factory (Axios) with automatic metadata injection (Timezone, User-Agent)'
              ]
            },
            {
              category: 'Authentication & Security',
              items: [
                'JWT-based authentication (client-side parsing, validation, and direct payload use)',
                'Automatic token renewal and inactive session logout with preventive alerts',
                'Atomic cross-tab sync using localStorage, BroadcastChannel, and Web Locks API',
                'Granular RBAC integrated into the router (any/all, selfOnly resolution)',
                'Security hardening with Content Security Policy (CSP) in staging/production'
              ]
            },
            {
              category: 'Data Engines & Processing',
              items: [
                'JSON → UI Dynamic Form Engine: +12 field types, cross-field reactive validations, autofill',
                'Infinite scroll in selects for high-volume clinical constants',
                'Clinical HTML Engine: DOMParser-based processing for zero-latency sanitization',
                'Local medical catalog (68KB) implementation for instant clinical constant access'
              ]
            },
            {
              category: 'Design System & UI',
              items: [
                'Development of ~50 domain-oriented clinical components',
                'Key components: InfiniteScrollSelect, PdfViewerEditable (annotations), SignatureDocument',
                'BaseDataTable optimized for high column density',
                'Dark/Light mode support with CSS variables and dynamic role-based sidebar'
              ]
            },
            {
              category: 'Medical Domain Logic',
              items: [
                'Medical billing motor (CPT codes): MDM-based and time-based evaluation',
                'Multi-coverage insurance system with primary/secondary/tertiary hierarchies',
                'Backward compatibility with legacy APIs',
                '360° clinical dashboard with critical data aggregation'
              ]
            },
            {
              category: 'Advanced Patterns & Orchestration',
              items: [
                'Coordinator Pattern in Pinia to decouple stores and centralize complex flows',
                'Logic abstraction in reusable composables (dependencies, autofill, specialized validations)',
                'Orchestration of complex flows: Document lifecycle and clinical module synchronization'
              ]
            },
            {
              category: 'Audit & Traceability',
              items: [
                'Audit Log system design: Activity timeline and reusable trigger components',
                'Data export modules for regulatory compliance'
              ]
            },
            {
              category: 'Quality & Testing',
              items: [
                'E2E Testing with Playwright and Unit Testing with Vitest',
                'Centralized validations with VeeValidate and global error handling (Axios interceptors)',
                'Pipeline with Husky, Conventional Commits, and Semantic Versioning'
              ]
            },
            {
              category: 'DevOps & Observability',
              items: [
                'Staging environment configuration with Docker',
                'Error and performance monitoring with Sentry',
                'Security header management via Vite configuration'
              ]
            },
            {
              category: 'UX & Performance',
              items: [
                'Table optimization for large data volumes',
                'Dynamic form UX improvements and efficient rendering in high-density views (dashboards, agendas)'
              ]
            }
          ]
        },
        trofi: {
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
          detailedSections: [
            {
              category: 'Mobile Engineering (React Native)',
              items: [
                'High-performance mobile app development with Expo for tournament management',
                'Full offline support implementation via React Query Persistence Client',
                'Data sync with AsyncStorage and network state handling via NetInfo',
                'Match management module (Advanced CRUD, scheduling, and real-time scores)'
              ]
            },
            {
              category: 'Web & i18n (Nuxt)',
              items: [
                'Corporate landing page built with Nuxt 3 focusing on high conversion',
                'Extreme SEO and Web Vitals optimization for user acquisition',
                'Multi-language (i18n) support implementation for international reach'
              ]
            },
            {
              category: 'Business Logic & Product',
              items: [
                'Integrated tournament administration system with role hierarchies',
                'Real-time match flow orchestration for users and organizers'
              ]
            }
          ]
        },
        solec: {
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
          ]
        },
        milktech: {
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
          ]
        },
        eversoft: {
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
          ]
        }
      },
      skills: {
        title: 'Technical Skills',
        badge: 'Skills'
      },
      footer: {
        name: 'Luis Gerardo Ibarra Sustayd',
        portfolio: 'Senior Frontend Engineer Portfolio // 2026'
      }
    }
  },
  es: {
    translation: {
      nav: {
        hero: 'Inicio',
        profile: 'Perfil',
        history: 'Historial',
        skills: 'Habilidades',
        contact: 'Hablemos',
        getInTouch: 'Contacto'
      },
      hero: {
        title: 'Ingeniero Frontend Senior',
        name: 'Luis Gerardo Ibarra Sustayd',
        cta: 'Casos de Estudio de Ingeniería',
        cv: 'Descargar CV',
        scroll: 'Desliza para Explorar'
      },
      profile: {
        title: 'Perfil de Ingeniería',
        description1: 'Especializado en <strong>Arquitectura de Aplicaciones Empresariales</strong>, cerrando la brecha entre requisitos de negocio complejos y entregas técnicas de alto rendimiento. Experto en construir sistemas escalables con enfoque en Arquitectura Frontend, Seguridad e Ingeniería de Rendimiento.',
        description2: 'Amplia experiencia en <strong>entornos Ágiles</strong>, participando en el SDLC completo, desde el diseño arquitectónico hasta pruebas automatizadas (Unit/E2E) e integración de pipelines CI/CD.',
        architecture: {
          title: 'Arquitectura',
          desc: 'Diseño Modular, Diseño Orientado al Dominio (DDD), Arquitectura Limpia.'
        },
        performance: {
          title: 'Rendimiento',
          desc: 'Optimización de Bundle, Lazy Loading, Métricas en tiempo real.'
        },
        security: {
          title: 'Seguridad',
          desc: 'Autenticación JWT, RBAC, Prevención XSS/CSRF.'
        },
        quality: {
          title: 'Calidad',
          desc: 'TDD, pruebas unitarias/E2E automatizadas, puertas CI/CD.'
        }
      },
      projects: {
        title: 'Historial',
        badge: 'Caso de Estudio de Ingeniería',
        deepDive: 'Inmersión Técnica',
        sections: {
          context: 'A) Contexto de Negocio',
          scope: 'B) Alcance de Ingeniería',
          architecture: 'C) Arquitectura',
          performance: 'D) Estrategia de Rendimiento',
          testing: 'E) Pruebas y QA',
          security: 'F) Seguridad',
          impact: 'G) Impacto y Métricas'
        },
        centramed: {
          tagline: 'EHR médico de alto rendimiento y dashboard clínico con sincronización atómica de sesiones y motores de renderizado dinámico.',
          context: 'Plataforma empresarial de salud que requiere agregación de datos clínicos en tiempo real, facturación médica compleja y visualización de datos de alta densidad para miles de profesionales.',
          scope: 'Ingeniero Frontend Senior y Arquitecto. Lideré la transición de la arquitectura frontend a Vue 3, definiendo estándares modulares, patrones de comunicación con API (API Factory) y estrategias de gestión de estado.',
          architecture: 'Diseñé una arquitectura escalable usando el Coordinator Pattern en Pinia y un Motor de Formularios Dinámicos (JSON-to-UI) con soporte para más de 12 tipos de campos y validaciones reactivas.',
          performance: 'Optimización de vistas clínicas de alta densidad mediante virtualización y división de código por rutas. Integración de un catálogo médico local de 68KB para acceso instantáneo a constantes clínicas.',
          testing: 'Implementación de una estrategia de pruebas integral con Playwright (E2E) y Vitest (Unitario), reforzada con Husky, Conventional Commits y Semantic Versioning.',
          security: 'Ingeniería de un sistema de sincronización cross-tab atómico usando Web Locks API y BroadcastChannel. Implementación de RBAC granular resuelto directamente desde JWT.',
          impact: [
            'Reducción del 89.6% en el bundle principal mediante optimización agresiva',
            'Incremento del 35% en la velocidad del equipo mediante el Clinical Design System',
            'Eliminación de race conditions en sesiones con Web Locks & BroadcastChannel',
            'Automatización de evaluación de facturación médica compleja (códigos CPT)'
          ],
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
                'Implementación de RBAC granular integrado al router (any/all, selfOnly, resolución directa JWT)',
                'Hardening de seguridad con Content Security Policy (CSP) en staging/producción'
              ]
            },
            {
              category: 'Motores & Procesamiento de Datos',
              items: [
                'JSON → UI Dynamic Form Engine: +12 tipos de campo, validaciones reactivas cross-field, autofill',
                'Infinite scroll en selects con grandes volúmenes de constantes clínicas',
                'Clinical HTML Engine: procesamiento de documentos con DOMParser para sanitización sin latencia',
                'Implementación de catálogo médico local (68KB) para acceso instantáneo a constantes'
              ]
            },
            {
              category: 'Design System & UI',
              items: [
                'Desarrollo de ~50 componentes reutilizables orientados al dominio clínico',
                'Componentes clave: InfiniteScrollSelect, PdfViewerEditable, SignatureDocument, BaseDataTable',
                'Soporte de tema claro/oscuro con variables CSS',
                'Rediseño de sidebar dinámico basado en roles y permisos'
              ]
            },
            {
              category: 'Lógica de Dominio Médico',
              items: [
                'Motor de facturación médica (CPT codes): Evaluación por MDM y por tiempo',
                'Sistema de seguros multi-cobertura: Jerarquía primaria/secundaria/terciaria y legacy API',
                'Dashboard clínico 360° con agregación de datos críticos para toma de decisiones'
              ]
            },
            {
              category: 'Patrones Avanzados & Orquestación',
              items: [
                'Implementación del Coordinator Pattern en Pinia para desacoplar stores',
                'Abstracción de lógica en composables reutilizables (dependencias, autofill, validaciones)',
                'Orquestación de flujos complejos: Ciclo de vida de documentos y sincronización entre módulos'
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
                'Validaciones centralizadas con VeeValidate y manejo global de errores (Axios interceptors)',
                'Pipeline con Husky, Conventional Commits y Semantic Versioning'
              ]
            },
            {
              category: 'DevOps & Observabilidad',
              items: [
                'Configuración de entorno staging con Docker',
                'Monitoreo de errores y performance con Sentry',
                'Gestión de headers de seguridad desde Vite'
              ]
            },
            {
              category: 'UX & Performance',
              items: [
                'Optimización de tablas para grandes volúmenes de datos',
                'Mejoras en experiencia de formularios dinámicos y renderizado eficiente en vistas de alta densidad'
              ]
            }
          ]
        },
        trofi: {
          tagline: 'Empoderando a los organizadores con control total y estructura profesional para simplificar la orquestación de ligas y torneos.',
          context: 'Un emprendimiento personal enfocado en proporcionar a los organizadores control absoluto y estructura profesional. Al centralizar la programación y los resultados en tiempo real, Trofi facilita significativamente la organización y escala de ligas y torneos complejos a través de un ecosistema móvil y web unificado.',
          scope: 'Co-fundador y Arquitecto Principal. Orquesté la entrega full-stack de la plataforma móvil y la presencia web, enfocándome en rendimiento extremo y resiliencia offline en entornos deportivos.',
          architecture: 'Ecosistema de doble stack: React Native (Expo) para el núcleo móvil y Nuxt 3 para la landing page de alto rendimiento. Especializado en gestión de partidos y ciclos de vida de torneos.',
          performance: 'Estrategia offline-first robusta usando persistencia de React Query y AsyncStorage para mantener funcionalidad crítica en estadios y campos deportivos.',
          testing: 'Validación automatizada de lógica compleja de puntuación y flujos E2E para registro de torneos.',
          security: 'Controles administrativos seguros y acceso basado en roles para organizadores.',
          impact: [
            '100% resiliencia offline mediante capas de persistencia avanzadas de React Query',
            'Orquestación exitosa de módulos de partidos en tiempo real para torneos activos',
            'Alcance internacional mediante implementación completa de multi-lenguaje (i18n)',
            'Landing page de Nuxt de alto rendimiento con SEO optimizado'
          ],
          detailedSections: [
            {
              category: 'Ingeniería Móvil (React Native)',
              items: [
                'Desarrollo de aplicación móvil de alto rendimiento con Expo para la gestión de torneos',
                'Soporte offline total mediante React Query Persistence Client',
                'Sincronización de datos con AsyncStorage y manejo de red con NetInfo',
                'Módulo de gestión de partidos (CRUD avanzado y resultados en tiempo real)'
              ]
            },
            {
              category: 'Web e i18n (Nuxt)',
              items: [
                'Landing page corporativa con Nuxt 3 enfocada en alta conversión',
                'Optimización extrema de SEO y Web Vitals',
                'Soporte multi-lenguaje (i18n) para alcance internacional'
              ]
            },
            {
              category: 'Lógica de Negocio y Producto',
              items: [
                'Sistema integral de administración de torneos con jerarquías de roles',
                'Orquestación de partidos en tiempo real para usuarios y organizadores'
              ]
            }
          ]
        },
        solec: {
          tagline: 'Aplicaciones web responsivas de alto rendimiento para clientes corporativos globales.',
          context: 'Soluciones empresariales compatibles con múltiples navegadores que requieren una gestión segura de datos sensibles.',
          scope: 'Desarrollador Frontend. Desarrollé aplicaciones web responsivas usando Vue.js para clientes corporativos globales en entornos Ágiles.',
          architecture: 'Arquitectura modular de Vue con gestión de estado Vuex/Pinia, centrada en patrones de componentes reutilizables y capas de API REST seguras.',
          performance: 'Aplicación de técnicas de optimización de bundle, división de código y carga diferida para entregas optimizadas en redes empresariales.',
          testing: 'Integrado en pipelines CI/CD con pasos de validación automatizados para estabilidad entre navegadores y puertas de rendimiento.',
          security: 'Integración de sistemas seguros de autenticación JWT para una gestión robusta de usuarios y protección de datos.',
          impact: [
            'Compatibilidad total entre navegadores en flotas empresariales',
            'Cero brechas de seguridad mediante una implementación robusta de JWT',
            'Alta responsividad para fuerzas de trabajo móviles globales'
          ]
        },
        milktech: {
          tagline: 'Plataforma de pagos móviles de alta disponibilidad para activos de criptomonedas.',
          context: 'Aplicación móvil y dashboard enfocados en criptomonedas para gestionar transacciones de alta frecuencia e informes de carteras empresariales.',
          scope: 'Desarrollador Frontend. Desarrollé aplicaciones móviles React Native para la gestión de activos digitales, atendiendo a más de 5,000 usuarios activos.',
          architecture: 'Construí un sistema de más de 50 componentes reutilizables de React Native usando Redux Toolkit para la gestión compleja de estados de criptomonedas.',
          performance: 'Optimización del hilo principal mediante actualizaciones selectivas de Redux Toolkit y virtualización para registros de transacciones blockchain extensos.',
          testing: 'Pruebas unitarias de la lógica financiera y de cartera principal para asegurar cero errores transaccionales en un volumen anual de más de $10M.',
          security: 'Prevención estricta de XSS/CSRF, almacenamiento seguro de credenciales de activos digitales y flujos de transacciones criptográficas auditados.',
          impact: [
            'Más de $10M de volumen transaccional anual procesado',
            'Soporte para más de 5,000 usuarios empresariales activos',
            'Reducción del 40% en la duplicación de código'
          ]
        },
        eversoft: {
          tagline: 'Solución empresarial full-stack con integración fluida de datos.',
          context: 'Plataforma empresarial interna que requiere un flujo de datos de alta fidelidad entre frontends de React y backends de Laravel.',
          scope: 'Desarrollador Full Stack. Desarrollé aplicaciones web asegurando un flujo de datos y una experiencia de usuario fluidos.',
          architecture: 'Segmentos frontend limpios integrados con endpoints de API REST de Laravel siguiendo metodologías Ágiles.',
          performance: 'Optimización de sondeo de API y obtención de datos para asegurar una sensación de tiempo real en módulos con alta densidad de datos.',
          testing: 'Participación en procesos de revisión de código y pruebas automatizadas para mantener altos estándares.',
          security: 'Gestión segura de sesiones y control de acceso a API autenticado.',
          impact: [
            'Entrega exitosa de módulos complejos con alta densidad de datos',
            'Mantenimiento de alta calidad de código mediante revisiones rigurosas',
            'Integración fluida entre frontend y backend'
          ]
        }
      },
      skills: {
        title: 'Habilidades Técnicas',
        badge: 'Habilidades'
      },
      footer: {
        name: 'Luis Gerardo Ibarra Sustayd',
        portfolio: 'Portafolio de Ingeniero Frontend Senior // 2026'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
