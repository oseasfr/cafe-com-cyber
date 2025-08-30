import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight, Shield, Lock, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from '../data/articles'; // Certifique-se de que o caminho está correto

const ArticlesSection = () => {
  // Removi a lista featuredArticles, agora usamos a lista 'articles' importada.
  // Se quiser destacar apenas alguns, você pode usar um filtro, por exemplo:
  const featuredArticles = articles.slice(0, 3); // Pega os 3 primeiros artigos

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
            // ... restante do código de renderização do card
            // (aqui, você precisa ter os ícones e outras propriedades no seu objeto de artigo)
            return (
              <Card key={article.id} className="group hover:shadow-cyber-soft transition-all duration-300 border-border/50 bg-card/50 backdrop-blur">
                <CardHeader className="space-y-4">
                  {/* ... conteúdo do cabeçalho do card */}
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {article.description}
                  </CardDescription>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    {/* ... */}
                  </div>

                  <Button asChild variant="ghost" className="w-full group/btn justify-between p-0 h-auto hover:bg-transparent">
                    <Link to={`/articles/${article.id}`} className="flex justify-between w-full">
                      <span className="text-sm font-medium group-hover/btn:text-primary transition-colors">
                        Ler artigo
                      </span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/articles">
              Ver Todos os Artigos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
