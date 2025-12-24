import { Construction, Coffee, MessageCircle } from "lucide-react";
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
              {/* Logo */}
              <div className="flex justify-center">
                <img
                  src="/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png"
                  alt="Café com Cyber"
                  className="h-20 w-auto"
                />
              </div>

              {/* Title */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Site em Construção...
                </h1>
                <div className="space-y-4 max-w-2xl mx-auto">
                  <p className="text-xl text-muted-foreground">
                    Aqui teremos conhecimento em Segurança da Informação de forma colaborativa.
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
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber"
                  onClick={() =>
                    window.open("https://chat.whatsapp.com/DV1aSKqXnzU9yzLle4WpQ3", "_blank")
                  }
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Grupo do Whatsapp
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
