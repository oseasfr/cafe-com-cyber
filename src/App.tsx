import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";
import ArtigosPagina from "./pages/artigos/ArtigosPagina";
import ArtigosArquivos from "./pages/artigos/ArtigosArquivos";
import ComunidadePagina from "./pages/Comunidade";
import LinksUteis from "./pages/links-uteis";
import GeradorDeSenhas from "./pages/gerador-de-senhas"; 

const MAINTENANCE_MODE = true; 

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const queryClient = new QueryClient();

const App = () => {
  if (MAINTENANCE_MODE) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/gerador-de-senhas" element={<GeradorDeSenhas />} />
              <Route path="/links-uteis" element={<LinksUteis />} />
              <Route path="*" element={<UnderConstruction />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gerador-de-senhas" element={<GeradorDeSenhas />} />
            <Route path="/artigos/:artigoId" element={<ArtigosPagina />} />
            <Route path="/artigos" element={<ArtigosArquivos />} />
            <Route path="/Comunidade" element={<ComunidadePagina />} />
            <Route path="/links-uteis" element={<LinksUteis />} />
            <Route path="/em-construcao" element={<UnderConstruction />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
