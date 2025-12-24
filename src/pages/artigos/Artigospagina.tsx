import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { articles } from '../../data/articles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AuthorBio } from '../../components/AuthorBio';

export default function ArticlePage() {
  const { articleId } = useParams();
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <>
        <Header />
        <main className="container mx-auto p-8 text-center">
          <h1 className="text-2xl font-bold text-red-500">Artigo não encontrado.</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div>
      <Header />

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
          {article.title}
        </h1>

        {/* Informações do Autor */}
        <div className="text-gray-400 mb-8 flex items-center space-x-2">
          <span className="text-sm">{article.author}</span>
          <span>•</span>
          <span className="text-sm">{article.readTime}</span>
        </div>
        
        {/* Imagem de Capa do Artigo */}
        {article.imageUrl && (
          <img src={article.imageUrl} alt={article.title} className="w-full h-auto object-cover rounded-lg mb-8" />
        )}

        {/* Conteúdo do Artigo */}
        <div className="prose prose-lg max-w-none text-gray-300">
          <ReactMarkdown>
            {article.content}
          </ReactMarkdown>
        </div>
      </main>

      <Footer />
    </div>
  );
}
