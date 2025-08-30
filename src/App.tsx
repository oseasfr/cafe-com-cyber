import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importação das páginas
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";
import ArticlePage from "./pages/articles/ArticlePage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Rota principal. O site vai carregar a página inicial. */}
            <Route path="/" element={<Index />} />
            
            {/* Rota para os artigos. */}
            <Route path="/articles/:articleId" element={<ArticlePage />} />

            {/* Deixei a rota de manutenção comentada. Se precisar, é só descomentar. */}
            {/* <Route path="/em-construcao" element={<UnderConstruction />} /> */}
            
            {/* Rota 404 para URLs não encontradas. */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
