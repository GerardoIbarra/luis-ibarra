import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Mail,
  ArrowRight,
  ChevronRight,
  Zap,
  ShieldCheck,
  Layers,
  BarChart3,
  CheckCircle2,
  Code2,
  Users2,
  Cpu,
  Globe2,
  Lock,
  Terminal,
  Activity,
  Workflow,
  Search,
  BookOpen
} from 'lucide-react';
import {
  ROUTE_PATHS,
  IMPACT_METRICS,
  SELECTED_PROJECTS,
  TECHNICAL_EXPERTISE,
  scrollToSection
} from '@/lib/index';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-background selection:bg-primary/5">
      {/* Hero Section - Direct & Architectural */}
      <section
        id="hero"
        className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden border-b border-border/50"
      >
        <div className="max-w-5xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 font-mono text-xs uppercase tracking-[0.2em] border-primary/30 text-primary">
              Senior Frontend Architect // Guadalajara, MX
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Architecting scalable frontend systems via engineering rigor.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              Specialized in enterprise-grade architecture, performance budgeting, and robust security protocols. Moving beyond "visuals" to deliver measurable engineering integrity.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-sm font-mono text-sm px-8"
                onClick={() => scrollToSection(ROUTE_PATHS.PROJECTS)}
              >
                ./view-architecture-cases
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-sm font-mono text-sm px-8"
                onClick={() => scrollToSection(ROUTE_PATHS.CONTACT)}
              >
                ./get-in-touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Standards Section - CRITICAL FOR TECH LEADS */}
      <section id="standards" className="py-24 px-6 border-b border-border/50 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Terminal className="w-5 h-5" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest">Testing Strategy</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Adhering to the **Testing Pyramid**: Unit tests for domain logic (Jest/Vitest), Integration for complex flows, and Playwright for critical user journeys. **Target: 90%+ branch coverage.**
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Workflow className="w-5 h-5" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest">CI/CD & DX</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Automated pipelines with GitHub Actions. Zero-config deployments, lint-staged hooks, and **Lighthouse CI** gatekeeping to prevent regression in performance or accessibility.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary mb-2">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest">Security First</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Implementation of **JWT (HttpOnly Cookies)**, granular **RBAC**, and strict CSP headers. Regular dependency audits and sanitization to mitigate OWASP Top 10 risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects Case Studies - HIGH DENSITY */}
      <section id="projects" className="section-container border-b border-border/50">
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-mono uppercase tracking-tighter">System Architecture & Case Studies</h2>
        </div>

        <div className="space-y-32">
          {SELECTED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Project Info - Technical Specs */}
              <div className="lg:col-span-12 xl:col-span-7 space-y-10">
                <div className="p-1 border-l-2 border-primary pl-6">
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-lg text-primary font-mono lowercase tracking-tight">{project.tagline}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs font-bold uppercase text-muted-foreground/60 tracking-widest flex items-center gap-2">
                      <Layers className="w-3 h-3" /> System Architecture
                    </h4>
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                      {project.architecture}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs font-bold uppercase text-muted-foreground/60 tracking-widest flex items-center gap-2">
                      <Zap className="w-3 h-3" /> Technical Challenge
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-secondary/10 p-8 rounded-lg border border-border/50">
                  <div className="space-y-6">
                    <h4 className="font-mono text-xs font-bold uppercase text-primary tracking-widest flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3" /> Quality Gates / Metrics
                    </h4>
                    <ul className="space-y-3">
                      {project.metrics.map(m => (
                        <li key={m} className="text-[13px] font-mono flex items-start gap-3">
                          <code className="text-primary italic">#</code>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-mono text-xs font-bold uppercase text-primary tracking-widest flex items-center gap-2">
                      <Activity className="w-3 h-3" /> Vitals & Performance
                    </h4>
                    <ul className="space-y-3">
                      {project.performance.map(p => (
                        <li key={p} className="text-[13px] text-muted-foreground flex items-start gap-3">
                          <div className="w-1 h-1 bg-primary/40 rounded-full mt-2" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                   <h4 className="font-mono text-xs font-bold uppercase text-muted-foreground/60 tracking-widest">Crucial Engineering Decisions</h4>
                   <div className="flex flex-wrap gap-4">
                      {project.decisions.map(d => (
                        <div key={d} className="bg-background border border-border/50 p-4 rounded text-[13px] text-muted-foreground flex-1 min-w-[250px] leading-relaxed">
                          {d}
                        </div>
                      ))}
                   </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map(s => (
                    <Badge key={s} variant="secondary" className="rounded-sm font-mono text-[10px] uppercase">{s}</Badge>
                  ))}
                </div>
              </div>

              {/* Technical Visual Side - Diagram / Blueprint */}
              <div className="hidden xl:block xl:col-span-5 h-[600px] bg-secondary/5 rounded border border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 p-8 font-mono text-[11px] text-primary/40 overflow-hidden select-none opacity-50">
                  {`
                    // Domain Architecture Blueprint
                    class PlatformController {
                      constructor(service: DomainService) {
                        this.state = service.sync();
                      }
                      
                      async handleRequest(ctx: Context) {
                        const sanitized = SecurityScanner.sanitize(ctx.payload);
                        if (!AuthHandler.verify(ctx.token)) throw Error("RBAC_FAIL");
                        
                        return await PerformanceProfiler.track(() => {
                          return this.state.dispatch(sanitized);
                        });
                      }
                    }
                    
                    // Optimization Protocols
                    const strategy = (id) => id.lazy(import("./modules/${project.title.toLowerCase().replace(/\s+/g, '-')}"));
                  `}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg max-w-[80%] shadow-2xl">
                    <Code2 className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <p className="text-xs font-mono text-foreground mb-4 uppercase tracking-widest">Architectural Integrity Analysis</p>
                    <p className="text-[11px] text-muted-foreground text-left leading-relaxed">
                      Detailed system blueprint demonstrating component modularity, state flow isolation, and custom security middlewares. (Real implementation details available upon NDA).
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Expertise - Roadmap View */}
      <section id="expertise" className="section-container border-b border-border/50 bg-secondary/5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-bold font-mono tracking-tighter">Core Competencies // Engineering</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1">
            {TECHNICAL_EXPERTISE.map((exp, idx) => (
              <div
                key={exp.category}
                className="p-8 border border-border/50 bg-card/50 hover:bg-card transition-colors group"
              >
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest mb-6 text-primary">
                   {exp.category}
                </h3>
                <ul className="space-y-4">
                  {exp.skills.map(skill => (
                    <li key={skill} className="text-[11px] font-mono text-muted-foreground group-hover:text-foreground transition-colors uppercase">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Infrastructure Highlights */}
      <section className="section-container border-b border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
           <div className="space-y-8">
              <h2 className="text-3xl font-bold leading-tight">Infrastructure, Mentorship & Standard Protocols.</h2>
              <p className="text-muted-foreground leading-relaxed">
                Applying a full-stack mindset to frontend delivery. I ensure client-side security is as robust as the backend, implementing industry-standard protocols and mentoring teams towards high-quality output.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-2">
                    <h4 className="font-bold flex items-center gap-2 text-sm"><Lock className="w-4 h-4 text-primary" /> Secure Auth</h4>
                    <p className="text-xs text-muted-foreground">JWT, OAuth 2.0, RBAC, and Secure HttpOnly Cookie management.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold flex items-center gap-2 text-sm"><Search className="w-4 h-4 text-primary" /> Observability</h4>
                    <p className="text-xs text-muted-foreground">Integrating metrics (Sentry, NewRelic) for real-time monitoring.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold flex items-center gap-2 text-sm"><Users2 className="w-4 h-4 text-primary" /> Tech Lead</h4>
                    <p className="text-xs text-muted-foreground">Paired programming, thorough code reviews, and tech debt management.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold flex items-center gap-2 text-sm"><BookOpen className="w-4 h-4 text-primary" /> Standards</h4>
                    <p className="text-xs text-muted-foreground">Strict adherence to Clean Code, SOLID, and DRY principles.</p>
                  </div>
              </div>
           </div>
           
           <div className="bg-secondary/10 p-12 rounded-lg border border-border/50 flex flex-col justify-center">
              <div className="space-y-12">
                {IMPACT_METRICS.map(metric => (
                  <div key={metric.id} className="flex items-center gap-8">
                    <div className="text-4xl font-mono font-bold text-primary tracking-tighter w-32">{metric.metric}</div>
                    <div className="space-y-1">
                      <div className="text-xs font-bold font-mono uppercase tracking-[0.2em]">{metric.label}</div>
                      <div className="text-xs text-muted-foreground max-w-xs">{metric.description}</div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Contact Section - CTA for Engineering Leaders */}
      <section id="contact" className="py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border border-primary/30 p-16 rounded-sm text-center bg-primary/5 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready for Architectural Review?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
              Available for senior roles, tech lead transitions, and high-performance frontend consulting.
            </p>

            <div className="pt-8">
               <a
                href="mailto:luissustayd8@gmail.com"
                className="inline-flex items-center gap-4 text-2xl md:text-3xl font-mono font-bold hover:text-primary transition-colors border-b-2 border-primary/20 pb-2"
              >
                luissustayd8@gmail.com <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="flex justify-center gap-8 pt-12">
                <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-sm font-mono uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener" className="text-sm font-mono uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> GitHub
                </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-border/50 bg-secondary/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-2 text-center md:text-left">
            <p className="font-bold text-lg">Luis Ibarra</p>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Built for High-Standard Engineering Environments // 2026</p>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="font-mono text-[10px] uppercase tracking-widest"
            onClick={() => scrollToSection(ROUTE_PATHS.HERO)}
          >
            [返回顶部] // UP
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Home;


