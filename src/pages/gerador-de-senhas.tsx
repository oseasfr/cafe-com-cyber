import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PasswordGenerator from "@/components/PasswordGenerator";

const GeradorSenhas = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Seção: Gerador de Senhas */}
        <section id="gerador-senhas" className="py-24 relative overflow-hidden">
          {/* Background Decorativo para a seção */}
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="container relative z-10">
            <div className="text-center mb-12 space-y-4">
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

export default GeradorSenhas;
