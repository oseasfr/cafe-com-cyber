import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Coffee, BookOpen, Users, Home, ArrowLeft } from "lucide-react";
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        {/* Background Effects - Mesmo da home page */}
        <div className="absolute inset-0 bg-gradient-dark"></div>
        <div className="absolute inset-0 bg-gradient-cyber opacity-30"></div>
        
        {/* Animated Grid Background - Mesmo da home page */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        </div>

        <div className="container relative z-10 text-center space-y-8">
          {/* Logo animado - Mesmo da home page */}
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png" 
              alt="Café com Cyber"
              className="h-24 w-24 animate-pulsate-blue"
            />
          </div>
          
          {/* Error Code com gradiente - Mesmo estilo da home page */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-cyber-light via-primary to-accent bg-clip-text text-transparent">
                404
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Página não encontrada
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Parece que você pegou o caminho errado... Nosso mascote do café 
              não conseguiu encontrar a página que você procura. 
              Que tal tomar um café e tentar novamente?
            </p>
          </div>

          {/* CTA Buttons - Mesmo estilo da home page */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber">
                <Home className="mr-2 h-5 w-5" />
                Voltar para o Início
              </Button>
            </Link>
            <Link to="/articles">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <BookOpen className="mr-2 h-5 w-5" />
                Explorar Artigos
              </Button>
            </Link>
          </div>

          {/* Stats - Adaptado para 404 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">404</div>
              <div className="text-sm text-muted-foreground">Página não encontrada</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">☕</div>
              <div className="text-sm text-muted-foreground">Café com Cyber</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">🔍</div>
              <div className="text-sm text-muted-foreground">Busque novamente</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Possibilidades</div>
            </div>
          </div>
        </div>

        {/* Floating Elements - Mesmo da home page */}
        <div className="absolute top-20 left-10 opacity-30">
          <Shield className="h-8 w-8 text-primary animate-cyber-float" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-30">
          <Coffee className="h-8 w-8 text-accent animate-cyber-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="absolute top-1/2 left-20 opacity-20">
          <BookOpen className="h-6 w-6 text-primary animate-cyber-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="absolute top-1/3 right-20 opacity-20">
          <Users className="h-6 w-6 text-accent animate-cyber-float" style={{ animationDelay: "3s" }} />
        </div>

        {/* CSS para animações - Mesmo da home page */}
        <style>{`
          /* Animação para a sombra pulsante */
          @keyframes pulsate-blue {
            0%, 100% {
              filter: drop-shadow(0 0 5px hsl(220, 80%, 60%));
            }
            50% {
              filter: drop-shadow(0 0 15px hsl(220, 80%, 60%));
            }
          }
          .animate-pulsate-blue {
            animation: pulsate-blue 3s ease-in-out infinite;
          }

          /* Animação para os ícones flutuantes */
          @keyframes cyber-float {
            0%, 100% {
              transform: translateY(0) translateX(0) scale(1);
            }
            25% {
              transform: translateY(-5px) translateX(2px) scale(1.05);
            }
            50% {
              transform: translateY(0px) translateX(0px) scale(1);
            }
            75% {
              transform: translateY(5px) translateX(-2px) scale(1.05);
            }
          }
          .animate-cyber-float {
            animation: cyber-float 5s ease-in-out infinite;
          }
        `}</style>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
