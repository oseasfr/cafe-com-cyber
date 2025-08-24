import { Button } from "@/components/ui/button";
import { Shield, Coffee, Users, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute inset-0 bg-gradient-cyber opacity-30"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="container relative z-10 text-center space-y-8">
        {/* Main Hero Content */}
        <div className="space-y-4">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png" 
              alt="Café com Cyber"
              className="h-24 w-24"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyber-light via-primary to-accent bg-clip-text text-transparent">
              Café com Cyber
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Seu hub de conhecimento em <span className="text-primary font-semibold">cybersecurity</span>. 
            Artigos, notícias e insights da comunidade de analistas.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber">
            <BookOpen className="mr-2 h-5 w-5" />
            Explorar Artigos
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Users className="mr-2 h-5 w-5" />
            Conhecer a Comunidade
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Analistas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Artigos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Discussões</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">∞</div>
            <div className="text-sm text-muted-foreground">Aprendizado</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <Shield className="h-8 w-8 text-primary animate-cyber-float" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-30">
        <Coffee className="h-8 w-8 text-accent animate-cyber-float" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
};

export default HeroSection;
