import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { ArticleCard } from "./ArticleCard";
import { memo, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const ArticlesSection = memo(() => {
  // Validação: verifica se há artigos disponíveis
  if (!articles || articles.length === 0) {
    return null;
  }

  const featuredArticles = articles.slice(0, 3); // Pega os 3 primeiros artigos
  const remainingArticles = articles.slice(3); // Artigos restantes para o carousel
  const hasMoreArticles = articles.length > 3;

  // Componente do Carousel
  const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
      align: 'start',
      slidesToScroll: 1,
      loop: false,
      axis: 'x' // Garante rolagem horizontal
    });

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
      if (!emblaApi) return;

      const updateScrollButtons = () => {
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
      };

      updateScrollButtons();
      emblaApi.on('select', updateScrollButtons);
      emblaApi.on('reInit', updateScrollButtons);

      return () => {
        emblaApi.off('select', updateScrollButtons);
        emblaApi.off('reInit', updateScrollButtons);
      };
    }, [emblaApi]);

    if (remainingArticles.length === 0) return null;

    return (
      <div className="mt-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-bold">
            Mais <span className="text-primary">Artigos</span>
          </h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="rounded-full"
              aria-label="Artigo anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="rounded-full"
              aria-label="Próximo artigo"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Viewport do carousel - overflow hidden é crítico */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Container flex do carousel */}
          <div className="flex touch-pan-y md:touch-none">
            {remainingArticles.map((article) => (
              <div 
                key={article.id} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pr-6"
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

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
            Conteúdo de qualidade produzido pela nossa comunidade de especialistas em cybersecurity
          </p>
        </div>

        {/* Grid dos 3 primeiros artigos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Carousel de artigos adicionais quando houver mais de 3 */}
        {hasMoreArticles && <Carousel />}

        {/* Botão para ver todos os artigos */}
        {hasMoreArticles && (
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
