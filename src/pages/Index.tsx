import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArticlesSection from "@/components/ArticlesSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Lock } from "lucide-react";
import PasswordGenerator from "@/components/PasswordGenerator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <ArticlesSection />
      
      {/* Nova Seção: Gerador de Senhas */}
      <section id="ferramentas" className="py-16 bg-secondary/20 relative overflow-hidden">
        {/* Background Decorativo para a seção */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-medium">Ferramenta de Segurança</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Gerador de Senhas Seguras</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proteja suas contas com senhas geradas localmente no seu navegador.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <PasswordGenerator />
          </div>
        </div>
      </section>

      <CommunitySection />
      
      {/* Seção Sobre Nós */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sobre Nós</h2>
            <p className="text-lg text-muted-foreground mb-6">
              O Café com Cyber é uma iniciativa dedicada a democratizar o conhecimento em Segurança da Informação. Nossa missão é criar um espaço colaborativo onde profissionais, entusiastas e estudantes possam compartilhar experiências, aprender juntos e fortalecer a comunidade de cibersegurança no Brasil.
            </p>
            <Button variant="outline" className="gap-2">
              Saiba mais <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
