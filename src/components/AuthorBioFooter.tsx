interface AuthorBioFooterProps {
  author: string; // Nome completo (fallback)
  authorFirstName?: string;
  authorLastName?: string;
  authorAvatar?: string;
  authorBio?: string;
  authorSocialLink?: string;
  authorSocialType?: "linkedin" | "github";
}

export function AuthorBioFooter({ 
  author,
  authorFirstName,
  authorLastName,
  authorAvatar,
  authorBio,
  authorSocialLink,
  authorSocialType
}: AuthorBioFooterProps) {
  // Se não houver biografia, não renderiza nada
  if (!authorBio && !author) {
    return null;
  }

  // Monta o nome completo
  const displayName = authorFirstName && authorLastName
    ? `${authorFirstName} ${authorLastName}`
    : author;
  const avatarUrl = authorAvatar || "/images/authors/default-avatar.jpg";

  return (
    <>
      {/* Separador */}
      <hr className="border-gray-700 my-8" />
      
      {/* Biografia do Autor */}
      <div className="flex items-start space-x-4 mb-8">
        {/* Avatar do Autor */}
        <img
          src={avatarUrl}
          alt={`Foto de ${displayName}`}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-600 flex-shrink-0"
          onError={(e) => {
            // Fallback para avatar padrão se imagem não carregar
            const target = e.target as HTMLImageElement;
            if (target.src !== "/images/authors/default-avatar.jpg") {
              target.src = "/images/authors/default-avatar.jpg";
            }
          }}
        />
        
        {/* Informações do Autor */}
        <div className="flex-1">
          {/* Nome do Autor (linkável se houver socialLink) */}
          {authorSocialLink ? (
            <a
              href={authorSocialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-white hover:text-primary transition-colors inline-block mb-2"
            >
              {displayName}
            </a>
          ) : (
            <h3 className="text-lg font-semibold text-white mb-2">
              {displayName}
            </h3>
          )}
          
          {/* Biografia */}
          {authorBio && (
            <p className="text-gray-400 text-sm leading-relaxed">
              {authorBio}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
