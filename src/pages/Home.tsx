import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Mail,
  ChevronRight,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Code2,
  Lock,
  Terminal,
  Activity,
  Workflow,
  Search,
  BookOpen,
  FileText,
  Cpu,
  Shield,
  Briefcase,
  Smartphone,
  Users
} from 'lucide-react';
import {
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiVitest,
  SiNodedotjs,
  SiNuxt as SiNuxtdotjs
} from 'react-icons/si';
import {
  ROUTE_PATHS,
  SELECTED_PROJECTS,
  TECHNICAL_EXPERTISE,
  DEVELOPMENT_STACK,
  scrollToSection
} from '@/lib/index';
import { useTranslation } from 'react-i18next';

const ICON_MAP: Record<string, any> = {
  'TypeScript': SiTypescript,
  'React': SiReact,
  'Vue.js': SiVuedotjs,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Redux Toolkit': SiRedux,
  'Pinia': SiVite, 
  'Vite': SiVite,
  'Playwright': SiVite,
  'Vitest': SiVitest,
  'Node.js': SiNodedotjs,
  'Nuxt': SiNuxtdotjs
};
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full bg-background selection:bg-primary/5">
      {/* HERO SECTION - Ultra-Minimalist Entry */}
      <section
        id="hero"
        className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden border-b border-border/40"
      >
        {/* Subtle Engineering Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-[0.2]" />
        
        <div className="max-w-4xl mx-auto z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >


            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground leading-[0.95]">
              {t('hero.title')}
            </h1>
            
            <h2 className="text-xl md:text-3xl font-medium tracking-tight text-muted-foreground/90 mb-16 uppercase">
              {t('hero.name')}
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-xl mx-auto">
              <Button
                size="lg"
                className="w-full md:w-auto rounded-none font-mono text-[11px] tracking-widest uppercase px-12 h-14 bg-foreground text-background hover:bg-foreground/90 transition-all"
                onClick={() => scrollToSection(ROUTE_PATHS.PROJECTS)}
              >
                {t('hero.cta')}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest">{t('hero.scroll')}</span>
          <div className="w-px h-12 bg-linear-to-b from-primary/50 to-transparent" />
        </motion.div>
      </section>

      {/* ENGINEERING PROFILE - Technical and Professional */}
      <section id="profile" className="py-24 px-6 border-b border-border/50 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-primary mb-8">
            <Terminal className="w-5 h-5" />
            <h2 className="font-mono text-sm font-bold uppercase tracking-widest">{t('profile.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-sm text-foreground/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('profile.description1') }} />
              <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t('profile.description2') }} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-primary">{t('profile.architecture.title')}</h4>
                <p className="text-[11px] text-muted-foreground">{t('profile.architecture.desc')}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-primary">{t('profile.performance.title')}</h4>
                <p className="text-[11px] text-muted-foreground">{t('profile.performance.desc')}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-primary">{t('profile.security.title')}</h4>
                <p className="text-[11px] text-muted-foreground">{t('profile.security.desc')}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-primary">{t('profile.quality.title')}</h4>
                <p className="text-[11px] text-muted-foreground">{t('profile.quality.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES - Mandatory 7-Point Structure */}
      <section id="projects" className="section-container border-b border-border/50">
        <div className="mb-24">
          <h2 className="text-3xl font-bold font-mono uppercase tracking-tighter">{t('projects.title')}</h2>
        </div>

        <div className="space-y-40">
          {SELECTED_PROJECTS.map((project) => {
            const projectKey = project.title.toLowerCase().split(' ')[0]; // 'centramed', 'trofi', etc.
            const p = (key: string) => t(`projects.${projectKey}.${key}`);
            
            // Safety checks for translated arrays
            const impactRaw = t(`projects.${projectKey}.impact`, { returnObjects: true });
            const impact = Array.isArray(impactRaw) ? impactRaw : [];
            
            const detailedSectionsRaw = t(`projects.${projectKey}.detailedSections`, { returnObjects: true });
            const detailedSections = Array.isArray(detailedSectionsRaw) ? detailedSectionsRaw : null;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16"
              >
                {/* Left Column: Context, Scope, Architecture, Performance */}
                <div className="lg:col-span-12 xl:col-span-7 space-y-12">
                  <div className="space-y-4">
                    <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-widest text-primary border-primary/20">
                      {t('projects.badge')}
                    </Badge>
                    <h3 className="text-4xl font-bold">{project.title}</h3>
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">{p('tagline')}</p>
                  </div>

                  <div className="space-y-10 pt-4">
                    {/* A) Business Context */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold uppercase text-primary tracking-[0.2em] flex items-center gap-2">
                          <Briefcase className="w-3 h-3" /> {t('projects.sections.context')}
                        </h4>
                        <p className="text-[14px] leading-relaxed text-foreground/80">{p('context')}</p>
                    </div>

                    {/* B) Engineering Scope */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold uppercase text-primary tracking-[0.2em] flex items-center gap-2">
                          <FileText className="w-3 h-3" /> {t('projects.sections.scope')}
                        </h4>
                        <p className="text-[14px] leading-relaxed text-foreground/80 font-medium">{p('scope')}</p>
                    </div>

                    {/* C) Architecture */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold uppercase text-primary tracking-[0.2em] flex items-center gap-2">
                          <Layers className="w-3 h-3" /> {t('projects.sections.architecture')}
                        </h4>
                        <p className="text-[14px] leading-relaxed text-foreground/80">{p('architecture')}</p>
                    </div>

                    {/* D) Performance Strategy */}
                    <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold uppercase text-primary tracking-[0.2em] flex items-center gap-2">
                          <Cpu className="w-3 h-3" /> {t('projects.sections.performance')}
                        </h4>
                        <p className="text-[14px] leading-relaxed text-foreground/80">{p('performance')}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6">
                    {project.stack.map(s => (
                      <Badge key={s} variant="secondary" className="rounded-sm font-mono text-[10px] uppercase px-2 py-0.5">{s}</Badge>
                    ))}
                  </div>
                </div>

                {/* Right Column: Testing, Security, Impact */}
                <div className="lg:col-span-12 xl:col-span-5 space-y-10">
                  <div className="bg-secondary/10 p-8 rounded-lg border border-border/50 h-full flex flex-col justify-between">
                    <div className="space-y-10">
                      {/* E) Testing & QA */}
                      <div className="space-y-3">
                          <h4 className="text-xs font-mono font-bold uppercase text-primary tracking-[0.2em] flex items-center gap-2">
                            <Workflow className="w-3 h-3" /> {t('projects.sections.testing')}
                          </h4>
                          <p className="text-[13px] text-muted-foreground leading-relaxed">{p('testing')}</p>
                      </div>

                      {/* F) Security */}
                      <div className="space-y-3">
                          <h4 className="text-xs font-mono font-bold uppercase text-primary tracking-[0.2em] flex items-center gap-2">
                            <Lock className="w-3 h-3" /> {t('projects.sections.security')}
                          </h4>
                          <p className="text-[13px] text-muted-foreground leading-relaxed">{p('security')}</p>
                      </div>

                      {/* G) Impact (Metrics) */}
                      <div className="space-y-4">
                          <h4 className="text-xs font-mono font-bold uppercase text-primary tracking-[0.2em] flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3" /> {t('projects.sections.impact')}
                          </h4>
                          <ul className="space-y-3">
                            {impact.map((m, i) => (
                              <li key={i} className="text-[13px] font-mono leading-tight flex items-start gap-3">
                                <span className="text-primary mt-0.5">#</span>
                                <span>{m}</span>
                              </li>
                            ))}
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Full Width Bottom: Technical Deep Dive */}
                {detailedSections && (
                  <div className="lg:col-span-12 mt-12 pt-12 border-t border-border/40">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-primary mb-10 flex items-center gap-3">
                      <Code2 className="w-4 h-4" /> {t('projects.deepDive')}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                      {detailedSections.map((section: any) => (
                        <div key={section.category} className="space-y-4">
                          <h5 className="text-[11px] font-bold uppercase tracking-widest text-foreground/90 border-l-2 border-primary/40 pl-3">
                            {section.category}
                          </h5>
                          <ul className="space-y-2.5">
                            {section.items.map((item: string, i: number) => (
                              <li key={i} className="text-[12px] text-muted-foreground leading-relaxed flex items-start gap-2">
                                <span className="text-primary/40 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TECHNICAL EXPERTISE - Strategic Grouping */}
      <section id="skills" className="section-container border-b border-border/50 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-bold font-mono tracking-tighter">{t('skills.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECHNICAL_EXPERTISE.map((exp) => (
              <div
                key={exp.category}
                className="p-8 border border-border/50 bg-card/50 hover:bg-card transition-all group"
              >
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] mb-8 text-primary">
                   {exp.category}
                </h3>
                <ul className="space-y-5">
                  {exp.skills.map(skill => (
                    <li key={skill} className="text-[11px] font-mono text-muted-foreground group-hover:text-foreground/80 transition-colors uppercase flex items-center gap-3">
                      <div className="w-1 h-1 bg-primary/30 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* DEVELOPMENT STACK - Animated Framework Cards */}
      <section id="stack" className="py-32 px-6 border-b border-border/50 bg-secondary/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.6em] text-primary mb-4">{t('skills.badge')}</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {DEVELOPMENT_STACK.map((tech, idx) => {
              const Icon = ICON_MAP[tech.name] || SiTypescript;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.05,
                    transition: { duration: 0.2, type: "spring", stiffness: 400 }
                  }}
                  className="relative group p-8 bg-card border border-border/50 rounded-sm flex flex-col items-center justify-center gap-4 transition-all hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] overflow-hidden"
                >
                  {/* Hover Power-up Gradient */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    className="absolute inset-0 bg-primary pointer-events-none"
                  />
                  
                  <motion.div
                     initial={{ rotate: 0 }}
                     whileHover={{ rotate: 5 }}
                     transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                  
                  <div className="text-center space-y-1">
                    <div className="text-sm font-bold tracking-tight text-black dark:text-white">{tech.name}</div>
                    <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground opacity-60">
                      {tech.category}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 border-t border-border/50 bg-secondary/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-2 text-center md:text-left">
            <p className="font-bold text-lg">{t('footer.name')}</p>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{t('footer.portfolio')}</p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-3 text-[9px] font-mono text-primary/75 uppercase tracking-widest select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shrink-0" />
              <span>PWA Active // Offline-First // SW Enabled</span>
            </div>
          </div>
           <div className="flex flex-wrap justify-center gap-8">
            <a href="https://github.com/GerardoIbarra" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/luis-ibarra-65850211b" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">LinkedIn</a>
            <a href="mailto:luissustayd8@gmail.com" className="text-sm font-medium hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;



