import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArticlesSection from "@/components/ArticlesSection";
import DownloadsSection from "@/components/DownloadsSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Ícone lateral fixo - Movido para fora do main para evitar problemas de overflow */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[60] hidden md:block">
        <Link to="/" className="block">
          <img 
            src="/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png" 
            alt="Café com Cyber"
            className="h-16 w-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulsate-blue"
            onError={(e) => {
              console.error('Erro ao carregar imagem do ícone lateral:', e);
            }}
          />
        </Link>
      </div>
      
      <Header />
      <main>
        <HeroSection />
        <ArticlesSection />
        <DownloadsSection />
        <CommunitySection />
      </main>
      <Footer />
      
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
      `}</style>
    </div>
  );
};

export default Index;
