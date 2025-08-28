import { Construction, Coffee, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="relative overflow-hidden bg-gradient-dark">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-cyber opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-cyber-float" />
          </div>

          <div className="container relative py-32">
            <div className="text-center space-y-12">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="p-8 rounded-full bg-card border border-border shadow-cyber">
                  <Construction className="h-20 w-20 text-primary animate-glow-pulse" />
                </div>
              </div>

              {/* Title */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Em Construção
                </h1>
                <div className="space-y-4 max-w-3xl mx-auto">
                  <p className="text-2xl lg:text-3xl font-semibold text-foreground">
                    Em breve nosso site estará pronto!
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Estamos trabalhando duro para trazer a melhor experiência em cybersecurity para você. 
                    Nossa plataforma está sendo desenvolvida com as mais modernas tecnologias e práticas de segurança.
                  </p>
                  <p className="text-primary font-medium">
                    Aguarde, algo incrível está chegando! ☕🔒
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex justify-center">
                <div className="flex items-center space-x-3 px-6 py-3 rounded-full bg-card/50 border border-border backdrop-blur">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-primary font-medium">Sistema em desenvolvimento</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button 
                  size="lg" 
                  onClick={() => window.location.href = '/'}
                  className="flex items-center space-x-2 shadow-cyber hover:shadow-cyber-glow transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Voltar ao Início</span>
                </Button>
              </div>

              {/* Brand */}
              <div className="flex justify-center pt-12">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Coffee className="h-5 w-5 text-primary" />
                  <span className="font-medium">Café com Cyber</span>
                </div>
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
