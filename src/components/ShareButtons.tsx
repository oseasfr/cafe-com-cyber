import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { 
  Twitter, 
  Linkedin, 
  Link2, 
  Check,
  Facebook,
  Send,
  Eye,
  MessageCircle
} from 'lucide-react';
import { getArticleStats, type ArticleStats } from '../lib/api';

interface ShareButtonsProps {
  title: string;
  url: string;
  description: string;
  themeToggle?: React.ReactNode;
  articleId?: string;
  showStats?: boolean;
}

export default function ShareButtons({ 
  title, 
  url, 
  description, 
  themeToggle,
  articleId,
  showStats = true
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState<ArticleStats | null>(null);

  const fullUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${url}` 
    : url;

  // Busca estatísticas quando o componente monta
  useEffect(() => {
    if (articleId && showStats) {
      getArticleStats(articleId)
        .then(setStats)
        .catch(console.error);
    }
  }, [articleId, showStats]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const scrollToComments = () => {
    const commentsSection = document.getElementById('comments-section');
    if (commentsSection) {
      const headerHeight = 80;
      const elementPosition = commentsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${fullUrl}`)}`,
  };

  return (
    <div className="py-4">
      {/* Stats Row - Views e Comments (acima do divisor) */}
      {showStats && stats && (
        <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
          {/* Visualizações */}
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>{stats.views} Visualizaç{stats.views === 1 ? 'ão' : 'ões'}</span>
          </div>
          
          {/* Comentários - clicável */}
          <button
            onClick={scrollToComments}
            className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{stats.comments} Comentário{stats.comments !== 1 ? 's' : ''}</span>
          </button>
        </div>
      )}

      {/* Divisor */}
      <div className="border-t border-border pt-4">
        {/* Share Buttons Row */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground mr-2">Compartilhar:</span>
          
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            onClick={() => window.open(shareLinks.twitter, '_blank')}
            title="Compartilhar no X (Twitter)"
          >
            <Twitter className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            onClick={() => window.open(shareLinks.linkedin, '_blank')}
            title="Compartilhar no LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            onClick={() => window.open(shareLinks.facebook, '_blank')}
            title="Compartilhar no Facebook"
          >
            <Facebook className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            onClick={() => window.open(shareLinks.telegram, '_blank')}
            title="Compartilhar no Telegram"
          >
            <Send className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            onClick={() => window.open(shareLinks.whatsapp, '_blank')}
            title="Compartilhar no WhatsApp"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            onClick={handleCopyLink}
            title="Copiar link"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Link2 className="h-4 w-4" />}
          </Button>
          
          {themeToggle && (
            <div className="ml-auto">
              {themeToggle}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
