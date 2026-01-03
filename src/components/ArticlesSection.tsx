import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles"; // Certifique-se de que o caminho está correto
import { ArticleCard } from "./ArticleCard"; // Importa o componente ArticleCard
import { memo } from "react";

const ArticlesSection = memo(() => {
  
  // Validação: verifica se há artigos disponíveis
  if (!articles || articles.length === 0) {
    return null; // Não renderiza nada se não houver artigos
  }

  const featuredArticles = articles.slice(0, 3); // Pega os 3 primeiros artigos

  return (
    <section
      id="articles"
      className="py-20 bg-gradient-to-b from-background to-cyber-darker"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Artigos em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdo de qualidade produzido pela nossa comunidade de
            especialistas em cybersecurity
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        {articles.length > 3 && (
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/articles">
                Ver Todos os Artigos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
});

ArticlesSection.displayName = 'ArticlesSection';

export default ArticlesSection;
