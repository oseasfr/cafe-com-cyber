import { formatArticleDate } from '../lib/dateFormatter';

interface AuthorHeaderProps {
  author: string; // Nome completo (fallback)
  authorFirstName?: string;
  authorLastName?: string;
  authorAvatar?: string;
  authorSocialLink?: string;
  authorSocialType?: "linkedin" | "github";
  publishedAt?: string;
  readTime: string;
}

export function AuthorHeader({ 
  author, 
  authorFirstName, 
  authorLastName, 
  authorAvatar,
  authorSocialLink,
  authorSocialType,
  publishedAt, 
  readTime
}: AuthorHeaderProps) {
  const formattedDate = formatArticleDate(publishedAt);
  
  // Usa firstName/lastName se disponível, senão usa o nome completo
  const firstName = authorFirstName || author.split(' ')[0] || author;
  const lastName = authorLastName || author.split(' ').slice(1).join(' ') || '';
  const displayName = authorFirstName && authorLastName 
    ? `${authorFirstName} ${authorLastName}` 
    : author;
  const avatarUrl = authorAvatar || "/images/authors/default-avatar.jpg";

  return (
    <div className="text-gray-400 mb-8 flex items-center space-x-3">
      {/* Avatar do Autor */}
      <img
        src={avatarUrl}
        alt={`Foto de ${displayName}`}
        className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
        onError={(e) => {
          // Fallback para avatar padrão se imagem não carregar
          const target = e.target as HTMLImageElement;
          if (target.src !== "/images/authors/default-avatar.jpg") {
            target.src = "/images/authors/default-avatar.jpg";
          }
        }}
      />
      
      {/* Nome e Informações */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          {/* Nome do Autor (linkável se houver socialLink) */}
          {authorSocialLink ? (
            <a
              href={authorSocialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              {displayName}
            </a>
          ) : (
            <span className="text-sm font-medium text-gray-300">
              {displayName}
            </span>
          )}
        </div>
        <div className="flex items-center text-xs space-x-2 mt-1">
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
}
