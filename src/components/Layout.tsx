import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTE_PATHS, scrollToSection } from '@/lib/index';
import { Button } from '@/components/ui/button';

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
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { label: 'Overview', href: ROUTE_PATHS.HERO },
    { label: 'Impact', href: ROUTE_PATHS.ABOUT },
    { label: 'Projects', href: ROUTE_PATHS.PROJECTS },
    { label: 'Expertise', href: ROUTE_PATHS.EXPERTISE },
    { label: 'Collaboration', href: ROUTE_PATHS.LEADERSHIP },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 transition-colors duration-500">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${
          scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection(ROUTE_PATHS.HERO)}
          >
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
               <span className="text-primary-foreground font-bold text-xs">LI</span>
            </div>
            <span className="font-bold tracking-tight text-lg hidden sm:block">
              Luis Ibarra
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all cursor-pointer relative py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-4 ml-4 border-l border-border pl-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-secondary"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                variant="default"
                size="sm"
                className="rounded-md"
                onClick={() => scrollToSection(ROUTE_PATHS.CONTACT)}
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-2">
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-20 left-0 right-0 bg-background border-b border-border px-6 py-8 flex flex-col gap-6 md:hidden shadow-2xl overflow-hidden"
            >
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl font-semibold text-foreground hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="default"
                className="w-full h-14 text-lg"
                onClick={() => handleNavClick(ROUTE_PATHS.CONTACT)}
              >
                Get in Touch
              </Button>
              <div className="flex gap-6 pt-6 border-t border-border">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:luissustayd8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {children}
      </main>

      <footer className="py-20 border-t border-border bg-secondary/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="font-bold text-2xl tracking-tighter">Luis Ibarra</div>
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left leading-relaxed">
              Senior Frontend Engineer specializing in enterprise architecture and performance engineering.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">LinkedIn</a>
            <a href="mailto:luissustayd8@gmail.com" className="text-sm font-medium hover:text-primary transition-colors">Email</a>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
              Designed for Impact • 2026
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              Build v2.1.0-release
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

