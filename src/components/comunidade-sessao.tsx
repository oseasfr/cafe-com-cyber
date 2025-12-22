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
    <section id="community" className="py-20 bg-gradient-cyber">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa <span className="text-primary">Comunidade</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Um espaço dedicado à troca de conhecimento sobre Cybersecurity com analistas 
              apaixonados por segurança da informação
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center border-border/50 bg-card/30 backdrop-blur">
            <CardContent className="pt-6">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Analistas Ativos</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border/50 bg-card/30 backdrop-blur">
            <CardContent className="pt-6">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Discussões por Mês</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border/50 bg-card/30 backdrop-blur">
            <CardContent className="pt-6">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte Colaborativo</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border/50 bg-card/30 backdrop-blur">
            <CardContent className="pt-6">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">0%</div>
              <div className="text-sm text-muted-foreground">Debates Políticos</div>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-cyber-soft transition-all duration-300 border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-cyber flex items-center justify-center group-hover:animate-glow-pulse mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
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
        <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-cyber flex items-center justify-center mb-4">
              <Coffee className="h-8 w-8 text-primary animate-cyber-float" />
            </div>
            <CardTitle className="text-2xl">Diretrizes da Comunidade</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-muted-foreground leading-relaxed">
                Mantemos um ambiente colaborativo focado no aprendizado. Compartilhe conhecimento, 
                faça perguntas, divulgue eventos relevantes e vamos juntos construir uma comunidade 
                forte e engajada em cibersegurança.
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
              Grupo do Whatsapp
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CommunitySection;
