import { AuthorBio } from '../../components/AuthorBio';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { articles } from '../../data/articles';
import Header from '../../components/Header.tsx';
import Footer from '../../components/Footer.tsx';

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
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          {article.title}
        </h1>

        <div className="flex items-center text-gray-500 mb-8">
          <span className="font-semibold">{article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.readTime}</span>
        </div>
        
        {article.imageUrl && (
          <img src={article.imageUrl} alt={article.title} className="w-full h-auto object-cover rounded-lg mb-8" />
        )}

        <div className="prose prose-lg max-w-none text-gray-700">
          <ReactMarkdown>
            {article.content}
          </ReactMarkdown>
        </div>
      </main>

      <Footer />
    </div>
  );
}
