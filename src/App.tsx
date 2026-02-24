import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";

const queryClient = new QueryClient();

/**
 * App Component
 * 
 * Configuración central de la aplicación para el portafolio de Luis Gerardo Ibarra Sustayd.
 * Implementa el enrutamiento, proveedores de estado y el sistema de temas (Zelda-inspired).
 * 
 * © 2026 Luis Gerardo Ibarra Sustayd
 */
const App = () => {
  // Sincronización inicial del tema guardado para evitar saltos visuales
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              {/* 
                Ruta principal: Single-page portfolio.
                Se utiliza el componente Home que contiene las secciones:
                #hero, #impact, #opensource, #stack, #contact
              */}
              <Route path="/" element={<Home />} />
              
              {/* 
                Catch-all: Redirigir a inicio en caso de rutas no encontradas 
                para mantener la experiencia minimalista de una sola página.
              */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter>
        
        {/* Componentes de notificación globales */}
        <Toaster />
        <Sonner position="bottom-right" />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;