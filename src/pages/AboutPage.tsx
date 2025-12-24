import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Coffee, Shield, Users, Lightbulb, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  const values = [
    {
      icon: Coffee,
      title: "Colaboração",
      description: "Acreditamos que o conhecimento compartilhado é mais poderoso. Juntos construímos uma comunidade forte e engajada."
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Promovemos práticas seguras e conscientização sobre os riscos digitais em todos os níveis."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Um espaço inclusivo onde todos são bem-vindos, independente do nível de experiência."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Exploramos novas tecnologias, ferramentas e metodologias para estar sempre à frente."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto max-w-4xl px-4 py-8" role="main">
        {/* Botão Voltar */}
        <div className="mb-6">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Início
            </Link>
          </Button>
        </div>

        {/* Título Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre o <span className="text-primary">Café com Cyber</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Seção Principal */}
        <div className="space-y-8 mb-12">
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                O <strong className="text-foreground">Café com Cyber</strong> nasceu da paixão por 
                segurança da informação e do desejo de criar um espaço onde conhecimento e experiência 
                possam ser compartilhados de forma colaborativa e acessível.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Somos uma comunidade formada por profissionais, estudantes e entusiastas de 
                cybersecurity que acreditam no poder da educação e da troca de experiências. 
                Nosso objetivo é democratizar o acesso ao conhecimento em segurança da informação, 
                tornando-o compreensível e aplicável para todos os níveis.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Através de artigos, discussões, eventos e recursos educativos, buscamos fortalecer 
                a comunidade brasileira de segurança da informação e contribuir para um ambiente 
                digital mais seguro.
              </p>
            </CardContent>
          </Card>
        </div>
        {/* CTA Final */}
        <div className="text-center mb-8">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Faça parte da nossa comunidade!</h3>
              <p className="text-muted-foreground mb-6">
                Junte-se a nós e contribua para o crescimento da área de cybersecurity no Brasil.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber"
                onClick={() =>
                  window.open("https://chat.whatsapp.com/DV1aSKqXnzU9yzLle4WpQ3", "_blank", "noopener,noreferrer")
                }
              >
                Conhecer a Comunidade
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
