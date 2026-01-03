import { Link, useLocation } from 'react-router-dom';
import { Menu, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import React from "react";
import { useLanguage } from '@/hooks/useLanguage';

const Header = () => {
  const { t, language, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleHomeClick = () => {
    // Scroll to top of the page
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close mobile menu
  };

  // Função auxiliar para scroll com offset do header
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 64; // h-16 = 64px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (isHomePage) {
      // Se estiver na home, faz scroll suave para #about com offset
      setTimeout(() => scrollToSection('about'), 0);
    } else {
      // Se estiver em outra página, vai para a home com #about
      window.location.href = '/#about';
    }
  };

  const handlePasswordGeneratorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (isHomePage) {
      // Se estiver na home, faz scroll suave para #gerador-senhas com offset
      setTimeout(() => scrollToSection('gerador-senhas'), 0);
    } else {
      // Se estiver em outra página, vai para a home com #gerador-senhas
      window.location.href = '/#gerador-senhas';
    }
  };

  const handleArticlesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (isHomePage) {
      setTimeout(() => scrollToSection('articles'), 0);
    } else {
      window.location.href = '/#articles';
    }
  };

  const handleCommunityClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (isHomePage) {
      setTimeout(() => scrollToSection('community'), 0);
    } else {
      window.location.href = '/#community';
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo - Ícone fixo no topo */}
        <div className="flex items-center space-x-3">
          <Link to="/" onClick={handleHomeClick}>
            <img 
              src="/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png" 
              alt="Café com Cyber"
              className="h-10 w-10"
            />
          </Link>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Café com Cyber
            </h1>
            <p className="text-xs text-muted-foreground">Conteúdos diversos sobre Cybersecurity</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors" onClick={handleHomeClick}>
            {t('nav.home')}
          </Link>
          <a href={isHomePage ? "#articles" : "/#articles"} onClick={handleArticlesClick} className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.articles')}
          </a>
          <a href={isHomePage ? "#community" : "/#community"} onClick={handleCommunityClick} className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.community')}
          </a>
          <a href={isHomePage ? "#about" : "/#about"} onClick={handleAboutClick} className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.about')}
          </a>
          <Link to="/links-uteis" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.usefulLinks')}
          </Link>
          <a href={isHomePage ? "#gerador-senhas" : "/#gerador-senhas"} onClick={handlePasswordGeneratorClick} className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.passwordGenerator')}
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          {/* Language Selector */}
          <div className="flex items-center border-l pl-4 ml-2 space-x-2 border-border">
            <Languages className="h-4 w-4 text-muted-foreground" />
            <button 
              onClick={() => changeLanguage('pt')}
              className={`text-xs font-bold hover:text-primary transition-colors ${language === 'pt' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              PT
            </button>
            <span className="text-muted-foreground text-xs">|</span>
            <button 
              onClick={() => changeLanguage('en')}
              className={`text-xs font-bold hover:text-primary transition-colors ${language === 'en' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              EN
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container py-4 space-y-2">
            <Link to="/" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={handleHomeClick}>
              {t('nav.home')}
            </Link>
            <a href={isHomePage ? "#articles" : "/#articles"} onClick={handleArticlesClick} className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              {t('nav.articles')}
            </a>
            <a href={isHomePage ? "#community" : "/#community"} onClick={handleCommunityClick} className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              {t('nav.community')}
            </a>
            <a href={isHomePage ? "#about" : "/#about"} onClick={handleAboutClick} className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              {t('nav.about')}
            </a>
            <Link to="/links-uteis" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {t('nav.usefulLinks')}
            </Link>
            <a href={isHomePage ? "#gerador-senhas" : "/#gerador-senhas"} onClick={handlePasswordGeneratorClick} className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              {t('nav.passwordGenerator')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
