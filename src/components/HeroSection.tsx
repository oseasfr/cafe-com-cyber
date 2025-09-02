import { Shield, Lock, Eye, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Grid and Blur */}
      <div className="absolute inset-0 z-0 bg-cyber-darker" />
      <div className="absolute inset-0 z-10 bg-[url('/lovable-uploads/491b635c-2045-420a-8d76-e1376d548325.png')] opacity-5"></div>
      
      {/* Animated Icons */}
      <div className="absolute top-1/4 left-10 z-20 animate-float-slow">
        <Shield className="h-20 w-20 text-primary opacity-20" />
      </div>
      <div className="absolute bottom-1/4 right-10 z-20 animate-float-slow">
        <Coffee className="h-20 w-20 text-primary opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-30 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Conectando Mentes em <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Cibersegurança
          </span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Encontre artigos, notícias e insights da comunidade para expandir seu
          conhecimento em <span className="text-primary font-semibold">Cibersegurança</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center items-center space-x-4 mb-16">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber">
            <Link to="/articles">
              <Shield className="mr-2 h-5 w-5" />
              Explorar Artigos
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/community">
              <Eye className="mr-2 h-5 w-5" />
              Conhecer a Comunidade
            </Link>
          </Button>
        </div>

        {/* Community Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Analistas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Artigos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Discussões</div>
          </div>
        </div>
      </div>

      {/* Tailwind CSS Animation */}
      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(0px) translateX(0px);
          }
          75% {
            transform: translateY(10px) translateX(-5px);
          }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
