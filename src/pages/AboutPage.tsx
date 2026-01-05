import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Shield, Users, Lightbulb, Target, ArrowRight } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    // Rola para o topo quando a página carrega
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
    // Fallback para navegadores antigos
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 py-16" role="main">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png" 
              alt="Café com Cyber"
              className="h-24 w-24"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre o <span className="text-primary">Café com Cyber</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma iniciativa dedicada a democratizar o conhecimento em Segurança da Informação
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Mission */}
          <Card className="border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Origem</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                O Café com Cyber surgiu de uma necessidade de um espaço colaborativo, onde 
                a cibersegurança fosse acessível a todos pelo compartilhamento de conhecimento e experiências. Nossa comunidade 
                tem o intuido de trazer conteúdos de qualidade, discussões técnicas abertas entre os membros e colaboração contínua.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Nossos <span className="text-primary">Valores</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-cyber flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Segurança</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Promovemos práticas seguras e conscientização sobre ameaças cibernéticas
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-cyber flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Comunidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Construímos uma comunidade inclusiva e colaborativa para todos os níveis
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-cyber flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Conhecimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Compartilhamos conhecimento de forma acessível e prática
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What We Do */}
          <Card className="border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur">
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Através do nosso site e comunidade no WhatsApp, oferecemos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Artigos técnicos sobre cibersegurança escritos por especialistas</li>
                <li>Discussões diárias sobre ameaças, ferramentas e técnicas</li>
                <li>Compartilhamento de boas práticas e experiências do dia a dia</li>
                <li>Divulgação de eventos, vagas e oportunidades na área</li>
                <li>Conscientização sobre segurança digital através de conteúdo educativo</li>
                <li>Ferramentas úteis como gerador de senhas e links úteis</li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground mb-6">
              Junte-se à nossa comunidade e faça parte dessa jornada de aprendizado!
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber"
              onClick={() =>
                window.open("https://chat.whatsapp.com/DV1aSKqXnzU9yzLle4WpQ3", "_blank")
              }
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Conhecer a Comunidade
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

