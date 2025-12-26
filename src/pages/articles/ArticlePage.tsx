import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { articles } from '@/data/articles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShareButtons from '@/components/ShareButtons';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, User } from 'lucide-react';
import NotFound from '../NotFound';

export default function ArticlePage() {
  const { articleId } = useParams();
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return <NotFound />;
  }

  const articleUrl = `/articles/${article.id}`;

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
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-4">
          {article.title}
        </h1>

        {/* Tags - Logo abaixo do título */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Informações do Autor e Tempo de Leitura */}
        <div className="flex items-center gap-4 text-muted-foreground mb-4">
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

        {/* Botões de Compartilhamento - Topo */}
        <ShareButtons 
          title={article.title}
          url={articleUrl}
          description={article.description}
        />
        
        {/* Imagem de Capa do Artigo */}
        {article.imageUrl && (
          <div className="mb-8 rounded-lg overflow-hidden mt-6">
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
                h4: ({node, ...props}) => <h4 className="text-lg font-semibold text-foreground mt-4 mb-2" {...props} />,
                p: ({node, ...props}) => <p className="text-muted-foreground leading-relaxed mb-4" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 text-muted-foreground space-y-2 ml-4" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 text-muted-foreground space-y-2 ml-4" {...props} />,
                li: ({node, ...props}) => <li className="ml-2" {...props} />,
                code: ({node, className, ...props}: any) => {
                  const isInline = !className;
                  return isInline ? (
                    <code className="bg-cyber-darker px-2 py-1 rounded text-primary font-mono text-sm" {...props} />
                  ) : (
                    <code className="block bg-cyber-darker p-4 rounded-lg text-primary font-mono text-sm overflow-x-auto mb-4" {...props} />
                  );
                },
                pre: ({node, ...props}) => <pre className="bg-cyber-darker p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold text-foreground" {...props} />,
                em: ({node, ...props}) => <em className="italic text-foreground" {...props} />,
                a: ({node, ...props}) => <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4" {...props} />,
                hr: ({node, ...props}) => <hr className="border-border my-8" {...props} />,
                img: ({node, ...props}) => <img className="w-full h-auto rounded-lg my-4" {...props} />,
                table: ({node, ...props}) => <div className="overflow-x-auto my-4"><table className="min-w-full border border-border" {...props} /></div>,
                th: ({node, ...props}) => <th className="border border-border px-4 py-2 bg-muted text-foreground font-semibold" {...props} />,
                td: ({node, ...props}) => <td className="border border-border px-4 py-2 text-muted-foreground" {...props} />,
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Botões de Compartilhamento - Final */}
        <div className="mt-8">
          <ShareButtons 
            title={article.title}
            url={articleUrl}
            description={article.description}
          />
        </div>

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
