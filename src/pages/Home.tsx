import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiGithub,
  SiLinkedin,
  SiNpm
} from 'react-icons/si';
import { ExternalLink, Mail, ArrowRight, ChevronRight, Zap, Cpu, Globe, BarChart3, Star, Award, Trophy, Target } from 'lucide-react';
import { IMAGES } from '@/assets/images';
import {
  ROUTE_PATHS,
  TECH_STACK,
  IMPACT_METRICS,
  OPEN_SOURCE_PROJECTS,
  scrollToSection
} from '@/lib/index';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TriforceIcon } from '@/components/icons/TriforceIcon';

// Map tech names to icons for the tech stack grid
const ICON_MAP: Record<string, React.ElementType> = {
  'React': SiReact,
  'React Native': SiReact,
  'Vue.js': SiVuedotjs,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Tailwind CSS': SiTailwindcss,
  'Redux': SiRedux,
  'Pinia': SiVuedotjs,
  'Git': SiGit,
};

const METRIC_ICONS: Record<string, React.ElementType> = {
  bundle: Zap,
  speed: Cpu,
  users: Globe,
  revenue: BarChart3,
};


// Rupee SVG Component (Zelda currency - gaming element)
const RupeeIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2L8 6v4l4 4 4-4V6l-4-4z" />
    <path d="M8 14v6l4-2 4 2v-6" />
  </svg>
);

// Heart Container SVG (Zelda health - gaming element)
const HeartIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Gaming Achievement Badge Component
const AchievementBadge: React.FC<{ 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  metric: string;
  delay: number;
}> = ({ icon: Icon, title, description, metric, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, type: "spring", stiffness: 300, damping: 25 }}
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0 20px 40px -15px rgba(212,175,55,0.4)",
      transition: { duration: 0.2 }
    }}
    className="group"
  >
    <Card className="relative overflow-hidden border-none bg-gradient-to-br from-background via-background to-primary/5 hover:to-primary/10 transition-all duration-300">
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full" />
      <div className="absolute top-2 right-2">
        <TriforceIcon className="w-4 h-4 text-primary/30" />
      </div>
      <CardContent className="pt-8 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <Badge variant="outline" className="border-primary/30 text-primary text-xs font-mono">
            {title}
          </Badge>
        </div>
        <div className="font-mono text-3xl font-bold mb-2 tracking-tighter text-primary">
          {metric}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-primary fill-primary" />
          ))}
          <span className="ml-2 text-xs font-mono text-primary">LEGENDARY</span>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HERO_BG_3}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
        </div>

        {/* Floating Triforce Elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/4 left-1/4 opacity-10"
          >
            <TriforceIcon className="w-16 h-16 text-primary" />
          </motion.div>
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/3 right-1/4 opacity-10"
          >
            <TriforceIcon className="w-12 h-12 text-primary" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/3"
          >
            <RupeeIcon className="w-8 h-8 text-primary" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <TriforceIcon className="w-6 h-6 text-primary" />
            <Badge variant="outline" className="border-primary/30 text-primary font-mono text-xs">
              LEVEL 99 DEVELOPER
            </Badge>
            <TriforceIcon className="w-6 h-6 text-primary" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm text-primary mb-6"
          >
            &gt; Hello, world.
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4">
            Luis Gerardo Ibarra Sustayd
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-secondary mb-8">
            Frontend Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Más de 5 años creando aplicaciones web y móviles escalables. Me especializo en optimización de rendimiento, arquitecturas limpias y en entregar experiencias de usuario fluidas desde la primera línea de código.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary text-primary-foreground hover:opacity-90 transition-all hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.5)] dark:hover:shadow-[0_10px_30px_-10px_rgba(253,224,71,0.3)] group"
                onClick={() => scrollToSection(ROUTE_PATHS.IMPACT)}
              >
                <RupeeIcon className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                Ver mi trabajo 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-primary/20 hover:bg-primary/5"
              onClick={() => scrollToSection(ROUTE_PATHS.CONTACT)}
            >
              Contactar
            </Button>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/30"
        >
          <ChevronRight className="rotate-90 w-8 h-8" />
        </motion.div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        {/* Gaming Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ x: [-100, 100, -100] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 opacity-5"
          >
            <HeartIcon className="w-24 h-24 text-primary" />
          </motion.div>
          <motion.div
            animate={{ y: [-50, 50, -50] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-10 opacity-5"
          >
            <TriforceIcon className="w-32 h-32 text-primary" />
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <Trophy className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Logros Desbloqueados</h2>
              <Trophy className="w-8 h-8 text-primary" />
            </motion.div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada métrica representa un desafío superado y un nivel de experiencia alcanzado en el mundo del desarrollo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {IMPACT_METRICS.map((item, idx) => {
              const Icon = METRIC_ICONS[item.id] || BarChart3;
              const achievementTitles = {
                bundle: "Bundle Master",
                speed: "Speed Demon", 
                users: "User Whisperer",
                revenue: "Revenue Wizard"
              };
              return (
                <AchievementBadge
                  key={item.id}
                  icon={Icon}
                  title={achievementTitles[item.id as keyof typeof achievementTitles] || "Achievement"}
                  description={item.description}
                  metric={item.metric}
                  delay={idx * 0.15}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section id="opensource" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source</h2>
              <div className="h-1 w-20 bg-primary" />
            </div>
            <p className="text-muted-foreground max-w-md">
              Comprometido con la comunidad, compartiendo herramientas que resuelven problemas reales del día a día.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {OPEN_SOURCE_PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden border-border/50 bg-card/50 hover:bg-card transition-all">
                  <CardContent className="p-0 flex flex-col md:flex-row h-full">
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <img
                        src={IMAGES.WORKSPACE_2}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="md:w-2/3 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className="border-primary text-primary">
                            {project.tag}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <p className="text-muted-foreground mb-6 line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech?.map((t) => (
                            <span key={t} className="font-mono text-xs px-2 py-1 bg-muted rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors"
                      >
                        Ver en npm <SiNpm className="ml-2 w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Herramientas del día a día</h2>
            <p className="text-muted-foreground">Stack tecnológico para construir soluciones modernas y escalables.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {TECH_STACK.map((tech, idx) => {
              const Icon = ICON_MAP[tech.name] || SiJavascript;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    transition: { duration: 0.2, type: "spring", stiffness: 400 }
                  }}
                  className="relative flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.3)] dark:hover:shadow-[0_10px_30px_-15px_rgba(253,224,71,0.2)] group overflow-hidden"
                >
                  {/* Power-up effect on hover */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.1 }}
                    className="absolute inset-0 bg-primary rounded-xl"
                  />
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-2 right-2 opacity-20"
                  >
                    <RupeeIcon className="w-3 h-3 text-primary" />
                  </motion.div>
                  <Icon className="w-10 h-10 mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-xs font-mono font-medium text-center">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">¿Construimos algo juntos?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Siempre estoy abierto a discutir nuevos proyectos, arquitecturas o simplemente hablar de código.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-8">
            <motion.a
              href="mailto:luissustayd8@gmail.com"
              className="group flex items-center gap-4 text-2xl md:text-3xl font-bold hover:text-primary transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="relative p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-8 h-8 text-primary" />
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute -top-1 -right-1"
                >
                  <HeartIcon className="w-4 h-4 text-primary fill-primary" />
                </motion.div>
              </motion.div>
              luissustayd8@gmail.com
            </motion.a>

            <div className="flex gap-6 mt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-border hover:border-secondary hover:text-secondary transition-all"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
                aria-label="GitHub"
              >
                <SiGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-12 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <TriforceIcon className="w-4 h-4 text-primary" />
            <p className="text-muted-foreground text-sm">
              © 2026 Luis Gerardo Ibarra Sustayd. Hecho con pasión, TypeScript y un toque de magia de Hyrule.
            </p>
            <TriforceIcon className="w-4 h-4 text-primary" />
          </div>
          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection(ROUTE_PATHS.HERO)}
              className="text-sm font-mono hover:text-primary transition-colors"
            >
              Volver arriba
            </button>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
