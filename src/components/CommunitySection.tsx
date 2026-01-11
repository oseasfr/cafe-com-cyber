import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Calendar, Trophy, Coffee, Lightbulb, Share2 } from "lucide-react";

const CommunitySection = () => {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: "Discussões Diárias",
      description: "Troque conhecimento sobre ameaças, ferramentas e técnicas de segurança"
    },
    {
      icon: Lightbulb,
      title: "Boas Práticas",
      description: "Compartilhe experiências do dia a dia e aprenda com a comunidade"
    },
    {
      icon: Calendar,
      title: "Eventos & Oportunidades",
      description: "Fique por dentro de eventos, vagas e iniciativas do setor"
    },
    {
      icon: Trophy,
      title: "Conscientização",
      description: "Promovemos a importância da segurança digital através de memes e alertas"
    }
  ];

  return (
    <section id="community" className="py-20 relative overflow-hidden">
      {/* Background Effects - Mesmo do HeroSection */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute inset-0 bg-gradient-cyber opacity-30"></div>
      
      {/* Animated Grid Background - Mesmo do HeroSection */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa <span className="text-primary">Comunidade</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Um espaço dedicado à troca de conhecimento sobre Cybersecurity com analistas apaixonados por segurança da informação
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-cyber-soft transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur hover:shadow-lg hover:shadow-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-cyber flex items-center justify-center group-hover:animate-glow-pulse mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Community Guidelines */}
          <Card className="max-w-4xl mx-auto border-primary/20 hover:border-primary/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-cyber flex items-center justify-center mb-4">
              <Coffee className="h-8 w-8 text-primary animate-cyber-float" />
            </div>
               <CardTitle className="text-2xl group-hover:text-primary transition-colors">Diretrizes da Comunidade</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Nossa comunidade é um espaço de aprendizado e colaboração. Respeite os membros, compartilhe conhecimento e mantenha um ambiente positivo e construtivo.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-sm text-primary">
                <Share2 className="h-4 w-4" />
                <span>Compartilhe conhecimento</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary">
                <Users className="h-4 w-4" />
                <span>Respeite a comunidade</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary">
                <Lightbulb className="h-4 w-4" />
                <span>Foque no aprendizado</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber"
              onClick={() =>
                window.open("https://chat.whatsapp.com/DV1aSKqXnzU9yzLle4WpQ3", "_blank")
              }
              >
              <MessageCircle className="mr-2 h-5 w-5" />
              Entrar no WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CommunitySection;
