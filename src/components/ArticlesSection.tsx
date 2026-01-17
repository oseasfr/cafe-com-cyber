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
import ScrollReveal from "@/components/ScrollReveal";

const ArticlesSection = memo(() => {
  
  // Validação: verifica se há artigos disponíveis
  if (!articles || articles.length === 0) {
    return null; // Não renderiza nada se não houver artigos
  }

  // Ordena os artigos APENAS por data de publicação (mais recente primeiro)
  // Ignora featured e priority para exibir os mais recentes na home
  const now = new Date().getTime();
  const recentArticles = [...articles].sort((a, b) => {
    let dateA = 0;
    let dateB = 0;
    
    if (a.publishedAt) {
      // Trata timezone: se não tem Z, assume UTC
      const dateStr = a.publishedAt.includes('T') && !a.publishedAt.includes('Z') && !a.publishedAt.includes('+') && !a.publishedAt.includes('-', 10)
        ? a.publishedAt + 'Z'
        : a.publishedAt;
      dateA = new Date(dateStr).getTime();
      // Se a data for futura, considera como se fosse hoje para ordenação (vem por último)
      if (dateA > now) {
        dateA = now;
      }
    }
    
    if (b.publishedAt) {
      // Trata timezone: se não tem Z, assume UTC
      const dateStr = b.publishedAt.includes('T') && !b.publishedAt.includes('Z') && !b.publishedAt.includes('+') && !b.publishedAt.includes('-', 10)
        ? b.publishedAt + 'Z'
        : b.publishedAt;
      dateB = new Date(dateStr).getTime();
      // Se a data for futura, considera como se fosse hoje para ordenação (vem por último)
      if (dateB > now) {
        dateB = now;
      }
    }
    
    return dateB - dateA; // Mais recente primeiro
  });

  // Pega os 3 artigos mais recentes
  const topRecentArticles = recentArticles.slice(0, 3);

  return (
    <section
      id="articles"
      className="py-20 bg-gradient-to-b from-background to-cyber-darker"
    >
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Artigos em <span className="text-primary">Destaque</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conteúdo de qualidade produzido pela nossa comunidade de especialistas em cybersecurity
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {topRecentArticles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 120}>
              <ArticleCard article={article} />
            </ScrollReveal>
          ))}
        </div>
        {articles.length > 3 && (
          <ScrollReveal delay={360}>
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
          </ScrollReveal>
        )}
      </div>
    </section>
  );
});

ArticlesSection.displayName = 'ArticlesSection';

export default ArticlesSection;
