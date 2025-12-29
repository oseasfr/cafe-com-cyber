import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArticlesSection from "@/components/ArticlesSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import PasswordGenerator from "@/components/PasswordGenerator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">
        <HeroSection />
        <ArticlesSection />
        <CommunitySection />
        
        {/* Seção Sobre Nós */}
        <section id="about" className="py-20 bg-background relative">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-cyber flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary animate-cyber-float" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">Sobre Nós</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Café com Cyber é uma iniciativa dedicada a democratizar o conhecimento em 
                Segurança da Informação. Nossa missão é criar um espaço colaborativo onde 
                profissionais, entusiastas e estudantes possam compartilhar experiências, 
                aprender juntos e fortalecer a comunidade de cibersegurança no Brasil.
              </p>
              <div className="pt-4">
                <Link to="/sobre-nos">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber"
                  >
                    Saiba mais
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Nova Seção: Gerador de Senhas */}
        <section id="gerador-senhas" className="py-24 relative overflow-hidden">
          {/* Background Decorativo para a seção */}
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="container relative z-10">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <Lock className="w-3 h-3" />
                Ferramenta de Segurança
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Gerador de Senhas <span className="text-primary">Seguras</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Proteja suas contas com senhas geradas localmente no seu navegador.
              </p>
            </div>
            
            <PasswordGenerator />
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
