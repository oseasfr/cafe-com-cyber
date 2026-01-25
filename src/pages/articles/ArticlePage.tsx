import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { articles } from '../../data/articles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ShareButtons from '../../components/ShareButtons';
import CommentsSection from '../../components/CommentsSection';
import AuthorHeader from '../../components/AuthorHeader';
import AuthorBioFooter from '../../components/AuthorBioFooter';
import { Button } from '../../components/ui/button';
import { ArrowLeft, Clock, User, Copy, Check, Sun, Moon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import NotFound from '../NotFound';

// Hook customizado para gerenciar tema apenas do artigo
function useArticleTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('article-theme') as 'light' | 'dark' | null;
      return saved || 'dark';
    }
    return 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('article-theme', newTheme);
    }
  };

  return { theme, toggleTheme };
}

// Componente para blocos de código com botão de copiar
const CodeBlock = ({ children, isLight }: { children: React.ReactNode, isLight: boolean }) => {
  const [copied, setCopied] = useState(false);

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
      <pre className={`p-4 rounded-lg overflow-x-auto mb-4 ${isLight ? 'bg-gray-100 text-gray-800' : 'bg-cyber-darker text-gray-100'}`}>
        {children}
      </pre>
      <button
        onClick={copyToClipboard}
        className={`absolute top-2 right-2 p-2 rounded-md transition-colors opacity-0 group-hover:opacity-100 z-10
          ${isLight 
            ? 'bg-gray-200 hover:bg-gray-300 border border-gray-300 text-gray-700 hover:text-gray-900' 
            : 'bg-cyber-darker/80 hover:bg-cyber-darker border border-border text-muted-foreground hover:text-foreground'
          }`}
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
};

export default function ArticlePage() {
  const { articleId } = useParams();
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return <NotFound />;
  }

  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Prepara o imageUrl para compartilhamento - sempre absoluto
  const getShareImageUrl = () => {
    return "https://cafecomcyber.com.br/lovable-uploads/icone-home.png";
  };

  // Prepara o imageUrl para exibição no artigo
  const getImageUrl = () => {
    if (!article.imageUrl) {
      return typeof window !== 'undefined' ? window.location.origin + '/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png' : '';
    }
    if (article.imageUrl.startsWith('http')) {
      return article.imageUrl;
    }
    const path = article.imageUrl.startsWith('/') ? article.imageUrl : '/' + article.imageUrl;
    return typeof window !== 'undefined' ? window.location.origin + path : path;
  };

  const imageUrl = getImageUrl();
  const shareImageUrl = getShareImageUrl();

  // Atualiza meta tags dinamicamente para compartilhamento
  useEffect(() => {
    document.title = `${article.title} | Café com Cyber`;

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

    updateMetaTag('og:title', article.title);
    updateMetaTag('og:description', article.description);
    updateMetaTag('og:type', 'article');
    updateMetaTag('og:url', window.location.href);
    updateMetaTag('og:image', shareImageUrl);

    updateMetaTag('twitter:title', article.title, false);
    updateMetaTag('twitter:description', article.description, false);
    updateMetaTag('twitter:image', shareImageUrl, false);
    updateMetaTag('twitter:site', '@cafecomcyber', false);

    updateMetaTag('description', article.description, false);

    return () => {
      document.title = 'Café com Cyber';
      updateMetaTag('og:title', 'Café com Cyber');
      updateMetaTag('og:description', 'Blog de cibersegurança com artigos, notícias e insights da comunidade de analistas com conhecimento em cybersecurity.');
      updateMetaTag('og:type', 'website');
      updateMetaTag('og:url', window.location.origin);
      updateMetaTag('og:image', 'https://cafecomcyber.com.br/lovable-uploads/icone-home.png');
    };
  }, [article, shareImageUrl]);

  const articleTheme = useArticleTheme();

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

        {/* Titulo do Artigo */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-4">
          {article.title}
        </h1>

        {/* Tags - Logo abaixo do titulo */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Header */}
        <AuthorHeader 
          authorName={article.author}
          date={article.date}
          readTime={article.readTime}
        />

        {/* Imagem de Capa */}
        <div className="relative aspect-video mb-8 rounded-xl overflow-hidden border border-border group">
          <img 
            src={imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Barra de Ações do Artigo (Compartilhamento e Tema) */}
        <div className="flex items-center justify-between py-4 border-y border-border mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-muted-foreground">Compartilhar:</span>
            <ShareButtons url={articleUrl} title={article.title} />
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={articleTheme.toggleTheme}
            className="flex items-center space-x-2"
          >
            {articleTheme.theme === 'dark' ? (
              <>
                <Sun className="h-4 w-4" />
                <span>Modo Claro</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4" />
                <span>Modo Escuro</span>
              </>
            )}
          </Button>
        </div>

        {/* Conteúdo do Artigo */}
        <article className={`prose prose-lg max-w-none mb-12 transition-colors duration-300
          ${articleTheme.theme === 'dark' 
            ? 'prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary' 
            : 'prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-primary'
          }`}>
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline ? (
                  <CodeBlock isLight={articleTheme.theme === 'light'}>
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </CodeBlock>
                ) : (
                  <code className={`${className} px-1.5 py-0.5 rounded-md ${articleTheme.theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-cyber-darker text-gray-100'}`} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {article.content}
          </ReactMarkdown>
        </article>

        {/* Author Bio Footer */}
        <AuthorBioFooter authorName={article.author} />

        {/* Seção de Comentários */}
        <div className="mt-12 pt-8 border-t border-border">
          <CommentsSection articleId={article.id} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
