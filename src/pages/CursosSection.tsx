import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursosSection from "@/components/CursosSection";

const CursosPage = () => {
  useEffect(() => {
    // Rola para o topo quando a página carrega
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
    // Fallback para navegadores antigos
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">
        <CursosSection />
      </main>
      <Footer />
    </div>
  );
};

export default CursosPage;

