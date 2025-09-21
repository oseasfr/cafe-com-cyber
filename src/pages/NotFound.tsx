import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <Card className="w-full max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Imagem do café */}
              <div className="flex-shrink-0">
                <img 
                  src="/images-404/001-coffee.png" 
                  alt="Café com Cyber - Página não encontrada"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
                />
              </div>
              
              {/* Conteúdo de texto */}
              <div className="text-center lg:text-left flex-1">
                <div className="mb-6">
                  <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">
                    404
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Oops! Página não encontrada
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                    Parece que você pegou o caminho errado... Nosso mascote do café 
                    não conseguiu encontrar a página que você procura. 
                    Que tal tomar um café e tentar novamente?
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <Link to="/">
                      ☕ Voltar para o início
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                    <Link to="/articles">
                      📚 Ver artigos
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-8 text-sm text-muted-foreground">
                  <p>Se você acredita que isso é um erro, entre em contato conosco.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
