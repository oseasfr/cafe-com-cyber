import { Link } from 'react-router-dom';
import { articles } from '../../data/articles'; // Certifique-se de que o caminho está correto
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArticleCard } from '../../components/ArticleCard'; // Importa o componente ArticleCard

export default function ArticlesArchive() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Todos os Artigos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
