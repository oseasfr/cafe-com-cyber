import { MessageCircle, Linkedin, Instagram, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

const ShareButtons = ({ title, url, description }: ShareButtonsProps) => {
  const fullUrl = typeof window !== 'undefined' ? window.location.origin + url : url;
  const shareText = description ? `${title} - ${description}` : title;
  const [linkCopied, setLinkCopied] = useState(false);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
  };

  const handleShare = (platform: 'whatsapp' | 'linkedin' | 'instagram') => {
    if (platform === 'instagram') {
      handleInstagramShare();
    } else {
      window.open(shareLinks[platform], '_blank', 'noopener,noreferrer');
    }
  };

  const handleInstagramShare = async () => {
    try {
      // Copia o link para a área de transferência
      await navigator.clipboard.writeText(fullUrl);
      setLinkCopied(true);
      
      // Mostra notificação de sucesso
      toast.success('Link copiado!', {
        description: 'Abrindo mensagem direta do Instagram...',
        duration: 3000,
      });

      // Tenta abrir o app do Instagram (mobile)
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      if (isMobile) {
        // Tenta abrir o app do Instagram na tela de mensagem direta
        // O link já está copiado, então o usuário pode colar
        const appUrl = `instagram://direct-inbox`;
        window.location.href = appUrl;
        
        // Fallback: se o app não abrir, abre o Instagram web após um delay
        setTimeout(() => {
          window.open('https://www.instagram.com/direct/inbox/', '_blank', 'noopener,noreferrer');
        }, 1000);
      } else {
        // Desktop: abre o Instagram web na página de mensagens diretas
        window.open('https://www.instagram.com/direct/inbox/', '_blank', 'noopener,noreferrer');
      }

      // Reseta o estado após 3 segundos
      setTimeout(() => {
        setLinkCopied(false);
      }, 3000);
    } catch (error) {
      // Fallback se a API de clipboard não funcionar
      console.error('Erro ao copiar link:', error);
      toast.error('Erro ao copiar link', {
        description: 'Por favor, copie o link manualmente: ' + fullUrl,
        duration: 5000,
      });
      
      // Ainda tenta abrir o Instagram
      window.open('https://www.instagram.com/direct/inbox/', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="flex items-center gap-3 py-4 border-t border-b border-border">
      <span className="text-sm text-muted-foreground font-medium">Compartilhar:</span>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('whatsapp')}
          className="hover:bg-green-500/10 hover:border-green-500 hover:text-green-500 transition-colors"
          aria-label="Compartilhar no WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('linkedin')}
          className="hover:bg-blue-500/10 hover:border-blue-500 hover:text-blue-500 transition-colors"
          aria-label="Compartilhar no LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('instagram')}
          className="hover:bg-pink-500/10 hover:border-pink-500 hover:text-pink-500 transition-colors"
          aria-label="Compartilhar no Instagram"
          title="Link copiado! Cole na mensagem direta do Instagram"
        >
          {linkCopied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Instagram className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default ShareButtons;
