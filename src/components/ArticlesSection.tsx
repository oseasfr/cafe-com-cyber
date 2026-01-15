import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { ArticleCard } from "./ArticleCard";
import { memo, useCallback, useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import useEmblaCarousel from "embla-carousel-react";

const ArticlesSection = memo(() => {
  if (!articles || articles.length === 0) {
    return null;
  }

  const hasMoreArticles = articles.length > 3;

  const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
      align: 'start',
      slidesToScroll: 1,
      loop: false,
      axis: 'x'
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

    return (
      <>
        <div className="flex justify-end mb-6">
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

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y md:touch-none">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pr-6"
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <section 
      id="articles" 
      className="py-20 bg-gradient-to-b from-background to-cyber-darker"
    >
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Artigos em <span className="text-primary">Destaque</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conteúdo de qualidade produzido pela nossa comunidade de especialistas em cybersecurity
            </p>
          </div>
        </ScrollReveal>

        {hasMoreArticles ? (
          <Carousel />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}

        {hasMoreArticles && (
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
