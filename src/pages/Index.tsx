// src/pages/Index.tsx
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
// ALTERAÇÃO AQUI: ArticlesSection -> ArtigosSessao
import ArtigosSessao from "@/components/ArtigosSessao";
import DownloadsSection from "@/components/DownloadsSection";
import ComunidadeSessao from "@/components/ComunidadeSessao";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        {/* ALTERAÇÃO AQUI: ArticlesSection -> ArtigosSessao */}
        <ArtigosSessao />
        <DownloadsSection />
        <ComunidadeSessao />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
