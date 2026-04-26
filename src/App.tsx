import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";

import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

/**
 * App Component
 * 
 * Central configuration for the Senior Frontend Developer Portfolio.
 * Implements routing, state providers, and the global layout.
 * 
 * © 2026 Luis Gerardo Ibarra Sustayd
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              {/* 
                Main route: Impact-oriented single-page portfolio.
              */}
              <Route path="/" element={<Home />} />
              
              {/* 
                Catch-all: Redirect to home to maintain a minimalist experience.
              */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter>
        
        {/* Global notification components */}
        <Toaster />
        <Sonner position="bottom-right" />
        
        {/* Vercel Analytics */}
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;