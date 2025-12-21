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
import ArticlePage from "./pages/articles/ArticlePage";
import ArticlesArchive from "./pages/articles/ArticlesArchive";
import CommunityPage from "./pages/CommunityPage";
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
          // ...
          <BrowserRouter>
            <Routes>
              {/* EXCEÇÃO: ROTA PARA O GERADOR DE SENHAS */}
              <Route path="/gerador-de-senhas" element={<GeradorDeSenhas />} />
              {/* TUDO O MAIS VAI PARA EM CONSTRUÇÃO */}
              <Route path="*" element={<UnderConstruction />} />
            </Routes>
          </BrowserRouter>
// ...
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
            <Route path="/links-uteis" element={<LinksUteis />} />
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
