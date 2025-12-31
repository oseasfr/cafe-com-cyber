import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { articles } from '@/data/articles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShareButtons from '@/components/ShareButtons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, User, Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import NotFound from '../NotFound';

// Componente para blocos de código com botão de copiar
function CodeBlock({ children, ...props }: any) {
  const [copied, setCopied] = useState(false);
  
  // Extrai o texto do código - pode ser string ou ReactNode
  const getCodeText = (node: any): string => {
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) {
      return node.map(getCodeText).join('');
    }
    if (node?.props?.children) {
      return getCodeText(node.props.children);
    }
    return String(node);
  };
  
  const code = getCodeText(children).replace(/\n$/, '');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="relative group">
      <pre className="bg-cyber-darker p-4 rounded-lg overflow-x-auto mb-4" {...props}>
        {children}
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 bg-cyber-darker/80 hover:bg-cyber-darker border border-border rounded-md text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100 z-10"
        title="Copiar código"
        aria-label="Copiar código"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export default function ArticlePage() {
  const { articleId } = useParams();
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return <NotFound />;
  }

  const articleUrl = `/articles/${article.id}`;
  const fullUrl = typeof window !== 'undefined' ? window.location.origin + articleUrl : articleUrl;
  const imageUrl = article.imageUrl 
    ? (article.imageUrl.startsWith('http') ? article.imageUrl : window.location.origin + article.imageUrl)
    : window.location.origin + '/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png';

  // Atualiza meta tags dinamicamente para compartilhamento
  useEffect(() => {
    // Atualiza título da página
    document.title = `${article.title} | Café com Cyber`;

    // Função para atualizar ou criar meta tag
    const updateMetaTag = (property: string, content: string, isProperty = true) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Open Graph tags
    updateMetaTag('og:title', article.title);
    updateMetaTag('og:description', article.description);
    updateMetaTag('og:type', 'article');
    updateMetaTag('og:url', fullUrl);
    updateMetaTag('og:image', imageUrl);
    updateMetaTag('og:site_name', 'Café com Cyber');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', false);
    updateMetaTag('twitter:title', article.title, false);
    updateMetaTag('twitter:description', article.description, false);
    updateMetaTag('twitter:image', imageUrl, false);
    updateMetaTag('twitter:site', '@cafecomcyber', false);

    // Meta description padrão
    updateMetaTag('description', article.description, false);

    // Cleanup: restaura meta tags padrão ao sair da página
    return () => {
      document.title = 'Café com Cyber';
      updateMetaTag('og:title', 'Café com Cyber');
      updateMetaTag('og:description', 'Blog de cybersecurity com artigos, notícias e insights da comunidade de analistas.');
      updateMetaTag('og:type', 'website');
      updateMetaTag('og:url', window.location.origin);
      updateMetaTag('og:image', window.location.origin + '/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png');
    };
  }, [article, fullUrl, imageUrl]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto max-w-4xl px-4 py-8">
        {/* Botão Voltar e Seletor de Tema */}
        <div className="mb-6 flex items-center justify-between">
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
          <ThemeToggle />
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
                code: ({node, className, children, ...props}: any) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="bg-cyber-darker px-2 py-1 rounded text-primary font-mono text-sm" {...props}>
                        {children}
                      </code>
                    );
                  }
                  // Para blocos de código, retorna o código com a classe
                  return (
                    <code className={`${className} block bg-cyber-darker p-4 rounded-lg text-primary font-mono text-sm overflow-x-auto mb-4`} {...props}>
                      {children}
                    </code>
                  );
                },
                pre: ({node, children, ...props}: any) => {
                  // Renderiza o bloco de código com botão de copiar
                  return <CodeBlock {...props}>{children}</CodeBlock>;
                },
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
