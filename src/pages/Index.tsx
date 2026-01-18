import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArticlesSection from "@/components/ArticlesSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import PasswordGenerator from "@/components/PasswordGenerator";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Lock } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerHeight = 64;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">
        <HeroSection />
        <ArticlesSection />
        <CommunitySection />

        <section id="about" className="py-20 bg-background relative">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-cyber flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary animate-cyber-float" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-primary">Sobre Nós</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O Café com Cyber é uma iniciativa dedicada a democratizar o conhecimento em 
                  Segurança da Informação, através de um espaço colaborativo onde 
                  profissionais, entusiastas e estudantes possam compartilhar experiências, 
                  aprender juntos e fortalecer a comunidade.
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
            </ScrollReveal>
          </div>
        </section>

        <section id="gerador-senhas" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark"></div>
          <div className="absolute inset-0 bg-gradient-cyber opacity-30"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          </div>

          <div className="container relative z-10">
            <ScrollReveal>
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
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <PasswordGenerator />
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
