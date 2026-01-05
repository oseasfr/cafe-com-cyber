import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PasswordGenerator from "@/components/PasswordGenerator";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

const GeradorSenhas = () => {
  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Seção: Gerador de Senhas */}
        <section id="gerador-senhas" className="py-24 relative overflow-hidden">
          {/* Background Effects - Mesmo padrão das outras seções */}
          <div className="absolute inset-0 bg-gradient-dark"></div>
          <div className="absolute inset-0 bg-gradient-cyber opacity-30"></div>
          
          {/* Animated Grid Background - Mesmo padrão das outras seções */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          </div>
          
          {/* Background Decorativo para a seção */}
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="container relative z-10">
            <div className="text-center mb-12 space-y-4">
              <div className="flex justify-center mb-4">
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <Shield className="h-4 w-4" />
                  Ferramenta de Segurança
                </Badge>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Gerador de <span className="text-primary">Senhas Seguras</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Proteja suas contas com senhas geradas localmente no seu navegador.
              </p>
            </div>
            
            <div className="flex justify-center">
              <PasswordGenerator />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GeradorSenhas;
