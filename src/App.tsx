import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importação das páginas
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";
import ArticlePage from "./pages/articles/ArticlePage"; // <--- NOVO: Importando a página de artigo

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Redireciona página inicial para em-construção */}
            <Route path="/" element={<Navigate to="/em-construcao" replace />} />
            
            {/* Página em construção */}
            <Route path="/em-construcao" element={<UnderConstruction />} />
            
            {/* Página inicial (caso queira acessar diretamente) */}
            <Route path="/home" element={<Index />} />
            
            {/* ADICIONE SUAS NOVAS ROTAS AQUI, SEMPRE ACIMA DA ROTA 404 */}
            <Route path="/articles/:articleId" element={<ArticlePage />} /> {/* <--- NOVO: Rota para artigos */}
            
            {/* Página 404 - SEMPRE deve ser a última rota */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
