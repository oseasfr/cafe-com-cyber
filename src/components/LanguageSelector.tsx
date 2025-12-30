import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'pt' as const, name: 'Português', flag: '🇧🇷' },
  { code: 'en' as const, name: 'English', flag: '🇺🇸' },
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
            "h-8 w-8 p-0 hover:bg-accent/20 transition-all",
            language === lang.code 
              ? "bg-accent/30 scale-110" 
              : "opacity-60 hover:opacity-100"
          )}
          title={lang.name}
        >
          <span className="text-lg leading-none">{lang.flag}</span>
        </Button>
      ))}
    </div>
  );
};
