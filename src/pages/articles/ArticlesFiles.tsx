import { articles } from '../../data/articles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArticleCard } from '@/components/ArticleCard';

export default function ArticlesArchive() {
  // Se não houver artigos, mostra mensagem
  if (!articles || articles.length === 0) {
    return (
      <>
        <Header />
        <main className="container mx-auto max-w-5xl px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Todos os Artigos</h1>
            <p className="text-muted-foreground">Nenhum artigo disponível no momento.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Ordena os artigos APENAS por data de publicação (mais recente primeiro)
  // Ignora featured e priority para exibir sempre os mais recentes primeiro
  const now = new Date().getTime();
  const sortedArticles = [...articles].sort((a, b) => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 py-16" role="main">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Todos os <span className="text-primary">Artigos</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa coleção completa de artigos sobre cybersecurity
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {articles.length} {articles.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {sortedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
