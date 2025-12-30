import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Em vez de quebrar a aplicação, retorna valores padrão
    // Isso permite que a aplicação renderize mesmo se houver problema temporário
    console.warn('useLanguage called outside LanguageProvider, using default values');
    return {
      language: 'pt' as Language,
      setLanguage: () => {
        console.warn('setLanguage called but LanguageProvider is not available');
      },
    };
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Recupera o idioma do localStorage ou usa 'pt' como padrão
  // Usa verificação segura para localStorage (pode não estar disponível em SSR)
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('language');
        if (saved === 'pt' || saved === 'en') {
          return saved;
        }
      }
    } catch (error) {
      console.warn('Error accessing localStorage:', error);
    }
    return 'pt';
  });

  // Salva no localStorage quando mudar
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('language', language);
      }
      if (typeof document !== 'undefined') {
        document.documentElement.lang = language;
      }
    } catch (error) {
      console.warn('Error saving language to localStorage:', error);
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
