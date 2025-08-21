import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight, Shield, Lock, Eye } from "lucide-react";

const ArticlesSection = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Fundamentos de Segurança em APIs REST",
      description: "Aprenda as melhores práticas para proteger suas APIs contra ataques comuns como injection, broken authentication e muito mais.",
      author: "Ana Santos",
      readTime: "8 min",
      category: "Web Security",
      icon: Shield,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      id: 2,
      title: "Zero Trust: O Futuro da Segurança Corporativa",
      description: "Entenda o modelo Zero Trust e como implementar uma arquitetura de segurança baseada na filosofia 'nunca confie, sempre verifique'.",
      author: "Carlos Lima",
      readTime: "12 min",
      category: "Architecture",
      icon: Lock,
      gradient: "from-accent/20 to-primary/20"
    },
    {
      id: 3,
      title: "OSINT: Técnicas de Investigação Digital",
      description: "Explore ferramentas e metodologias de Open Source Intelligence para investigações de segurança e análise de ameaças.",
      author: "Maria Silva",
      readTime: "15 min",
      category: "Intelligence",
      icon: Eye,
      gradient: "from-primary/20 to-cyber-glow/20"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-gradient-to-b from-background to-cyber-darker">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Artigos em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo de qualidade produzido pela nossa comunidade de especialistas em cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => {
            const IconComponent = article.icon;
            return (
              <Card key={article.id} className="group hover:shadow-cyber-soft transition-all duration-300 border-border/50 bg-card/50 backdrop-blur">
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${article.gradient} flex items-center justify-center group-hover:animate-glow-pulse`}>
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {article.description}
                  </CardDescription>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="ghost" className="w-full group/btn justify-between p-0 h-auto hover:bg-transparent">
                    <span className="text-sm font-medium group-hover/btn:text-primary transition-colors">
                      Ler artigo
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver Todos os Artigos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;