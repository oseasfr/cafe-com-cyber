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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
