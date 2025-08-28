import { Construction, Coffee, Shield, Clock, Zap, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const UnderConstruction = () => {
  const [glowAnimation, setGlowAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowAnimation(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Segurança Avançada",
      description: "Implementando as melhores práticas de cybersecurity"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Código Limpo",
      description: "Desenvolvendo com padrões modernos e escaláveis"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Comunidade Ativa",
      description: "Preparando espaços para interação e colaboração"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-dark border-b border-border">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-cyber opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-cyber-float" />
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-cyber-float" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container relative py-24 lg:py-32">
            <div className="text-center space-y-8">
              {/* Main Icon */}
              <div className="flex justify-center">
                <div className={`relative p-6 rounded-full bg-card border border-border transition-all duration-1000 ${glowAnimation ? 'shadow-cyber-glow' : 'shadow-cyber'}`}>
                  <Construction className="h-16 w-16 text-primary animate-glow-pulse" />
                  <div className="absolute inset-0 rounded-full bg-gradient-glow opacity-20 animate-pulse" />
                </div>
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow-pulse">
                  Em Construção
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
                  Estamos preparando algo <span className="text-primary font-semibold">incrível</span> para a comunidade de cybersecurity
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex justify-center">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card/50 border border-border backdrop-blur">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">Sistema em desenvolvimento</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Progress Info */}
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                  Progresso do Desenvolvimento
                </h2>
                <p className="text-muted-foreground">
                  Nossa equipe está trabalhando 24/7 para entregar a melhor experiência
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="relative group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-cyber-soft"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div className="bg-card rounded-xl border border-border p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-foreground">Cronograma</h3>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Atualizado em tempo real</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <span className="font-medium text-foreground">Arquitetura & Design</span>
                    </div>
                    <span className="text-primary font-semibold">Concluído</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                      <span className="font-medium text-foreground">Desenvolvimento Backend</span>
                    </div>
                    <span className="text-accent font-semibold">Em progresso</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-muted-foreground/50 rounded-full" />
                      <span className="font-medium text-muted-foreground">Integração & Testes</span>
                    </div>
                    <span className="text-muted-foreground">Em breve</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-cyber border-t border-border">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="flex justify-center">
                <div className="flex items-center space-x-3 p-4 rounded-full bg-card/80 backdrop-blur border border-border">
                  <Coffee className="h-6 w-6 text-primary" />
                  <span className="font-medium text-foreground">Café com Cyber</span>
                </div>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Quer ser notificado quando estivermos prontos?
              </h2>
              
              <p className="text-muted-foreground">
                Seja o primeiro a acessar nosso novo portal de cybersecurity
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button 
                  size="lg" 
                  className="flex items-center space-x-2 shadow-cyber hover:shadow-cyber-glow transition-all duration-300"
                >
                  <Zap className="h-4 w-4" />
                  <span>Notificar-me</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = '/'}
                >
                  Voltar ao Início
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UnderConstruction;
