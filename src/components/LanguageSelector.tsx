import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Componente SVG da bandeira do Brasil (simplificada)
const BrazilFlag: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 20 14"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="14" fill="#009739" />
    <path d="M10 7L3 3h14L10 7z" fill="#FEDD00" />
    <path d="M10 7L3 11h14L10 7z" fill="#012169" />
    <circle cx="10" cy="7" r="2.5" fill="#FEDD00" />
    <circle cx="10" cy="7" r="1.5" fill="#012169" />
  </svg>
);

// Componente SVG da bandeira dos EUA (simplificada)
const USAFlag: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 20 14"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="14" fill="#B22234" />
    <rect width="20" height="1" fill="#fff" y="1" />
    <rect width="20" height="1" fill="#fff" y="3" />
    <rect width="20" height="1" fill="#fff" y="5" />
    <rect width="20" height="1" fill="#fff" y="7" />
    <rect width="20" height="1" fill="#fff" y="9" />
    <rect width="20" height="1" fill="#fff" y="11" />
    <rect width="8" height="6.5" fill="#3C3B6E" />
  </svg>
);

const languages = [
  { 
    code: 'pt' as const, 
    name: 'Português', 
    flag: <BrazilFlag className="w-5 h-5" />
  },
  { 
    code: 'en' as const, 
    name: 'English', 
    flag: <USAFlag className="w-5 h-5" />
  },
];

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className={cn(
            "h-8 w-8 p-0 hover:bg-accent/20 transition-all flex items-center justify-center",
            language === lang.code 
              ? "bg-accent/30 scale-110" 
              : "opacity-60 hover:opacity-100"
          )}
          title={lang.name}
        >
          {lang.flag}
        </Button>
      ))}
    </div>
  );
};
