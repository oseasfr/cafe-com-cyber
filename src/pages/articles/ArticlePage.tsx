import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { articles } from '../../data/articles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ShareButtons from '../../components/ShareButtons';
import { AuthorHeader } from '../../components/AuthorHeader';
import { AuthorBioFooter } from '../../components/AuthorBioFooter';
import { Button } from '../../components/ui/button';
import { ArrowLeft, Clock, User, Copy, Check, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
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
function CodeBlock({ children, theme, ...props }: any) {
  const [copied, setCopied] = useState(false);
  const isLight = theme === 'light';
  
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
      <pre className={`p-4 rounded-lg overflow-x-auto mb-4 ${isLight ? 'bg-gray-100 text-gray-800' : 'bg-cyber-darker text-primary'}`} {...props}>
        {children}
      </pre>
      <button
        onClick={copyToClipboard}
        className={`absolute top-2 right-2 p-2 rounded-md transition-colors opacity-0 group-hover:opacity-100 z-10 ${
          isLight 
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
}

export default function ArticlePage() {
  const { articleId } = useParams();
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return <NotFound />;
  }

  const articleUrl = `/articles/${article.id}`;
  const fullUrl = typeof window !== 'undefined' ? window.location.origin + articleUrl : articleUrl;
  
  // Prepara o imageUrl - garante que comece com / se for caminho relativo
  const getImageUrl = () => {
    if (!article.imageUrl) {
      return typeof window !== 'undefined' ? window.location.origin + '/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png' : '';
    }
    if (article.imageUrl.startsWith('http')) {
      return article.imageUrl;
    }
    // Garante que comece com / se não começar
    const path = article.imageUrl.startsWith('/') ? article.imageUrl : '/' + article.imageUrl;
    return typeof window !== 'undefined' ? window.location.origin + path : path;
  };
  
  const imageUrl = getImageUrl();

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

        {/* NOVO: Cabeçalho do Autor com Avatar, Nome, Data e ReadTime */}
        <AuthorHeader
          author={article.author}
          authorFirstName={article.authorFirstName}
          authorLastName={article.authorLastName}
          authorAvatar={article.authorAvatar}
          authorSocialLink={article.authorSocialLink}
          authorSocialType={article.authorSocialType}
          publishedAt={article.publishedAt}
          readTime={article.readTime}
        />

        {/* Botões de Compartilhamento e Tema - Topo */}
        <ShareButtons 
          title={article.title}
          url={articleUrl}
          description={article.description}
          themeToggle={<ArticleThemeToggle theme={articleTheme.theme} onToggle={articleTheme.toggleTheme} />}
        />
        
        {/* Imagem de Capa do Artigo */}
        {article.imageUrl && (
          <div className="mb-8 rounded-lg overflow-hidden mt-6">
            <img 
              src={imageUrl} 
              alt={article.title} 
              className="w-full h-auto max-h-48 sm:max-h-56 md:max-h-64 object-contain bg-muted/20"
            />
          </div>
        )}

        {/* Conteúdo do Artigo com Tema Isolado */}
        <ArticleContent article={article} theme={articleTheme.theme} />

        {/* Botões de Compartilhamento e Tema - Final */}
        <div className="mt-8">
          <ShareButtons 
            title={article.title}
            url={articleUrl}
            description={article.description}
            themeToggle={<ArticleThemeToggle theme={articleTheme.theme} onToggle={articleTheme.toggleTheme} />}
          />
        </div>

        {/* NOVO: Biografia do Autor no final */}
        <AuthorBioFooter
          author={article.author}
          authorFirstName={article.authorFirstName}
          authorLastName={article.authorLastName}
          authorAvatar={article.authorAvatar}
          authorBio={article.authorBio}
          authorSocialLink={article.authorSocialLink}
          authorSocialType={article.authorSocialType}
        />

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

// Componente de toggle de tema simplificado
function ArticleThemeToggle({ theme, onToggle }: { theme: 'light' | 'dark'; onToggle: () => void }) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onToggle}
      className="relative"
      aria-label="Alternar tema do artigo"
      title={theme === "dark" ? "Modo claro" : "Modo escuro"}
    >
      {theme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Alternar tema do artigo</span>
    </Button>
  );
}

// Componente que renderiza apenas o conteúdo do artigo com tema isolado
function ArticleContent({ article, theme }: { article: typeof articles[0]; theme: 'light' | 'dark' }) {
  const isLight = theme === 'light';

  return (
    <div 
      data-article-content
      className={`rounded-lg p-6 transition-colors ${
        isLight 
          ? 'bg-white text-gray-900 border border-gray-200 light' 
          : 'bg-transparent dark'
      }`}
    >
      <article className={`prose max-w-none ${isLight ? 'prose-slate' : 'prose-invert'}`}>
        <ReactMarkdown
          components={{
            h1: ({node, ...props}) => <h1 className={`text-3xl font-bold mt-8 mb-4 ${isLight ? 'text-gray-900' : 'text-foreground'}`} {...props} />,
            h2: ({node, ...props}) => <h2 className={`text-2xl font-bold mt-6 mb-3 ${isLight ? 'text-gray-800' : 'text-foreground'}`} {...props} />,
            h3: ({node, ...props}) => <h3 className={`text-xl font-semibold mt-4 mb-2 ${isLight ? 'text-gray-800' : 'text-foreground'}`} {...props} />,
            h4: ({node, ...props}) => <h4 className={`text-lg font-semibold mt-4 mb-2 ${isLight ? 'text-gray-800' : 'text-foreground'}`} {...props} />,
            p: ({node, ...props}) => <p className={`leading-relaxed mb-4 ${isLight ? 'text-gray-700' : 'text-muted-foreground'}`} {...props} />,
            ul: ({node, ...props}) => <ul className={`list-disc list-inside mb-4 space-y-2 ml-4 ${isLight ? 'text-gray-700' : 'text-muted-foreground'}`} {...props} />,
            ol: ({node, ...props}) => <ol className={`list-decimal list-inside mb-4 space-y-2 ml-4 ${isLight ? 'text-gray-700' : 'text-muted-foreground'}`} {...props} />,
            li: ({node, ...props}) => <li className="ml-2" {...props} />,
            code: ({node, className, children, ...props}: any) => {
              const isInline = !className;
              if (isInline) {
                return (
                  <code className={`px-2 py-1 rounded font-mono text-sm ${isLight ? 'bg-gray-100 text-blue-600' : 'bg-cyber-darker text-primary'}`} {...props}>
                    {children}
                  </code>
                );
              }
              return (
                <code className={`${className} block p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4 ${isLight ? 'bg-gray-100 text-gray-800' : 'bg-cyber-darker text-primary'}`} {...props}>
                  {children}
                </code>
              );
            },
            pre: ({node, children, ...props}: any) => {
              return <CodeBlock theme={theme} {...props}>{children}</CodeBlock>;
            },
            strong: ({node, ...props}) => <strong className={`font-bold ${isLight ? 'text-gray-900' : 'text-foreground'}`} {...props} />,
            em: ({node, ...props}) => <em className={`italic ${isLight ? 'text-gray-800' : 'text-foreground'}`} {...props} />,
            a: ({node, ...props}) => <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
            blockquote: ({node, ...props}) => <blockquote className={`border-l-4 pl-4 italic my-4 ${isLight ? 'border-gray-300 text-gray-700' : 'border-primary text-muted-foreground'}`} {...props} />,
            hr: ({node, ...props}) => <hr className={`my-8 ${isLight ? 'border-gray-200' : 'border-border'}`} {...props} />,
            img: ({node, ...props}) => <img className="w-full h-auto rounded-lg my-4" {...props} />,
            table: ({node, ...props}) => <div className={`overflow-x-auto my-4 ${isLight ? 'border border-gray-200' : ''}`}><table className={`min-w-full ${isLight ? 'border border-gray-200' : 'border border-border'}`} {...props} /></div>,
            th: ({node, ...props}) => <th className={`border px-4 py-2 font-semibold ${isLight ? 'border-gray-200 bg-gray-50 text-gray-900' : 'border-border bg-muted text-foreground'}`} {...props} />,
            td: ({node, ...props}) => <td className={`border px-4 py-2 ${isLight ? 'border-gray-200 text-gray-700' : 'border-border text-muted-foreground'}`} {...props} />,
          }}
        >
          {article.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}

