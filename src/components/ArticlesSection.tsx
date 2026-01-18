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
  const recentArticles = [...articles].sort((a, b) => {
    // Função auxiliar para normalizar a data e obter timestamp
    const getTimestamp = (publishedAt: string | undefined): number => {
      if (!publishedAt) return 0;
      
      // Se não tem timezone (formato "YYYY-MM-DDTHH:mm:ss"), adiciona Z para UTC
      let dateStr = publishedAt;
      if (dateStr.includes('T')) {
        const hasTimezone = dateStr.includes('Z') || dateStr.includes('+') || dateStr.match(/[+-]\d{2}:?\d{2}$/);
        if (!hasTimezone) {
          dateStr = dateStr + 'Z';
        }
      }
      
      return new Date(dateStr).getTime();
    };
    
    const dateA = getTimestamp(a.publishedAt);
    const dateB = getTimestamp(b.publishedAt);
    
    // Ordena: mais recente primeiro (data maior vem primeiro)
    return dateB - dateA;
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
              Conteúdo de qualidade produzido pela nossa comunidade de especialistas em cibersegurança
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {topRecentArticles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 120} className="h-full">
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
