import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Coffee, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
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
          <div className="flex items-center justify-center mb-12">
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
              {t('notFound.title')}
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('notFound.description')}
            </p>
          </div>

          {/* CTA Button - Mesmo estilo da home page */}
          <div className="flex justify-center items-center">
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber">
                <Home className="mr-2 h-5 w-5" />
                {t('notFound.backToHome')}
              </Button>
            </Link>
          </div>

        </div>

        {/* Floating Elements - Mesmo da home page */}
        <div className="absolute top-20 left-10 opacity-30">
          <Shield className="h-8 w-8 text-primary animate-cyber-float" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-30">
          <Coffee className="h-8 w-8 text-accent animate-cyber-float" style={{ animationDelay: "1s" }} />
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
