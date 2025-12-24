import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { articles } from '../../data/articles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, User } from 'lucide-react';
import NotFound from '../NotFound';

export default function ArticlePage() {
  const { articleId } = useParams();
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto max-w-4xl px-4 py-8">
        {/* Botão Voltar */}
        <div className="mb-6">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <Link to="/articles">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Artigos
            </Link>
          </Button>
        </div>

        {/* Título do Artigo */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-6">
          {article.title}
        </h1>

        {/* Informações do Autor e Tempo de Leitura */}
        <div className="flex items-center gap-4 text-muted-foreground mb-8 pb-6 border-b border-border">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="text-sm font-medium">{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{article.readTime}</span>
          </div>
          {article.category && (
            <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-md">
              {article.category}
            </span>
          )}
        </div>
        
        {/* Imagem de Capa do Artigo */}
        {article.imageUrl && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Conteúdo do Artigo */}
        <article className="prose prose-lg prose-invert max-w-none">
          <div className="text-foreground">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-foreground mt-8 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-foreground mt-6 mb-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-semibold text-foreground mt-4 mb-2" {...props} />,
                p: ({node, ...props}) => <p className="text-muted-foreground leading-relaxed mb-4" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 text-muted-foreground space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 text-muted-foreground space-y-2" {...props} />,
                li: ({node, ...props}) => <li className="ml-4" {...props} />,
                code: ({node, ...props}) => <code className="bg-cyber-darker px-2 py-1 rounded text-primary font-mono text-sm" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold text-foreground" {...props} />,
                a: ({node, ...props}) => <a className="text-primary hover:underline" {...props} />,
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Botão Voltar no Final */}
        <div className="mt-12 pt-8 border-t border-border">
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto"
          >
            <Link to="/articles">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ver Todos os Artigos
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
