import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Importe todos os seus componentes de página
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";
import ArticlePage from "./pages/articles/ArticlePage";
import ArticlesArchive from "./pages/articles/ArticlesArchive";
import CommunityPage from "./pages/CommunityPage";
import UsefulLinks from "./pages/useful-links";

// 🚨 CORREÇÃO: O import agora usa o nome do arquivo com hífens
import GeradorDeSenhas from "./pages/gerador-de-senhas"; 

// 🚨 CONTROLE DE MANUTENÇÃO
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
  // BLOCO 1: SE MANUTENÇÃO ESTÁ ATIVA (TRUE)
  if (MAINTENANCE_MODE) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* TUDO VAI PARA EM CONSTRUÇÃO */}
              <Route path="*" element={<UnderConstruction />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  // BLOCO 2: SE MANUTENÇÃO ESTÁ DESATIVADA (FALSE)
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Rota principal que carrega a página inicial */}
            <Route path="/" element={<Index />} />
            
            {/* ROTA PARA O GERADOR: /gerador-de-senhas */}
            <Route path="/gerador-de-senhas" element={<GeradorDeSenhas />} />

            {/* Rota para os artigos, com um ID dinâmico */}
            <Route path="/articles/:articleId" element={<ArticlePage />} />

            {/* Rota para a página de arquivo de artigos */}
            <Route path="/articles" element={<ArticlesArchive />} />

            {/* Rota para a página da comunidade */}
            <Route path="/community" element={<CommunityPage />} />
            
            {/* Rota para os links úteis */}
            <Route path="/useful-links" element={<UsefulLinks />} />

            {/* A página "em-construcao" pode ser acessada por esta rota */}
            <Route path="/em-construcao" element={<UnderConstruction />} />
            
            {/* Página 404 - SEMPRE deve ser a última rota */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
