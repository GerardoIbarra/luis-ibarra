import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTE_PATHS, scrollToSection } from '@/lib/index';
import { Button } from '@/components/ui/button';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import { TriforceIcon } from './icons/TriforceIcon';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check initial theme
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navItems = [
    { label: 'Inicio', href: ROUTE_PATHS.HERO },
    { label: 'Impacto', href: ROUTE_PATHS.IMPACT },
    { label: 'Open Source', href: ROUTE_PATHS.OPEN_SOURCE },
    { label: 'Stack', href: ROUTE_PATHS.STACK },
    { label: 'Contacto', href: ROUTE_PATHS.CONTACT },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-primary/30">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${
          scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection(ROUTE_PATHS.HERO)}
          >
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
              <TriforceIcon className="w-6 h-6 text-primary" />
            </div>
            <span className="font-sans font-bold tracking-tight text-lg hidden sm:block">
              Luis Ibarra
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            ))}
            <div className="flex items-center gap-4 border-l border-border pl-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-accent hover:text-primary transition-all"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-6 md:hidden shadow-xl"
            >
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.href)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex gap-6 pt-4 border-t border-border">
                <a href="https://github.com/GerardoIbarra" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/luis-ibarra-65850211b/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiLinkedin className="w-6 h-6" />
                </a>
                <a href="mailto:luissustayd8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-20">
        {children}
      </main>

      <footer className="py-12 border-t border-border mt-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-sans font-bold text-xl">Luis Ibarra</div>
            <p className="text-sm text-muted-foreground font-mono">
              © 2026 • Frontend Developer Senior
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a 
              href="https://github.com/GerardoIbarra" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <SiGithub /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/luis-ibarra-65850211b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <SiLinkedin /> LinkedIn
            </a>
            <a 
              href="mailto:luissustayd8@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Hyrule Inspired Design
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
