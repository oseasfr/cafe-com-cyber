import { MessageCircle, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

const ShareButtons = ({ title, url, description }: ShareButtonsProps) => {
  const fullUrl = typeof window !== 'undefined' ? window.location.origin + url : url;
  const shareText = description ? `${title} - ${description}` : title;

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    instagram: `https://www.instagram.com/`, // Instagram não tem API de compartilhamento direto, então redireciona para o perfil
  };

  const handleShare = (platform: 'whatsapp' | 'linkedin' | 'instagram') => {
    if (platform === 'instagram') {
      // Instagram não permite compartilhamento direto via URL
      // Abre o perfil da empresa
      window.open('https://www.instagram.com/cafecomcyber/', '_blank', 'noopener,noreferrer');
    } else {
      window.open(shareLinks[platform], '_blank', 'noopener,noreferrer');
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
          aria-label="Seguir no Instagram"
        >
          <Instagram className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ShareButtons;
