import { Link, useLocation } from 'react-router-dom';
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import React from "react";

const TYPEWRITER_TEXT = "Conteúdos diversos sobre Cibersegurança";
const TYPEWRITER_DELAY_MS = 80;
const TYPEWRITER_RESTART_DELAY_MS = 3000;

function TypewriterSubtitle() {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (displayed.length < TYPEWRITER_TEXT.length) {
      const timer = setTimeout(() => {
        setDisplayed(TYPEWRITER_TEXT.slice(0, displayed.length + 1));
      }, TYPEWRITER_DELAY_MS);
      return () => clearTimeout(timer);
    }
    // Texto completo: aguarda e reinicia
    const restartTimer = setTimeout(() => {
      setDisplayed("");
    }, TYPEWRITER_RESTART_DELAY_MS);
    return () => clearTimeout(restartTimer);
  }, [displayed]);

  return (
    <p className="text-xs text-muted-foreground font-mono">
      <span className="text-primary">&gt;</span>{" "}
      <span id="typewriter">{displayed}</span>
      <span className="cursor animate-blink" aria-hidden="true">_</span>
    </p>
  );
}

const Header = () => {
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

  const isLinksUteisPage = location.pathname === '/links-uteis';

  return (
    <header className={`${isLinksUteisPage ? 'relative' : 'sticky top-0'} z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo - Ícone fixo no topo */}
        <div className="flex items-center space-x-3">
          <Link to="/" onClick={handleHomeClick} className="group relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/icone-home.png" 
                alt="Café com Cyber"
                className="h-10 w-10 transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Café com Cyber
            </h1>
            <TypewriterSubtitle />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors" onClick={handleHomeClick}>
            Início
          </Link>
          <a href={isHomePage ? "#articles" : "/#articles"} onClick={handleArticlesClick} className="text-sm font-medium hover:text-primary transition-colors">
            Artigos
          </a>
          <a href={isHomePage ? "#community" : "/#community"} onClick={handleCommunityClick} className="text-sm font-medium hover:text-primary transition-colors">
            Comunidade
          </a>
          <a href={isHomePage ? "#about" : "/#about"} onClick={handleAboutClick} className="text-sm font-medium hover:text-primary transition-colors">
            Sobre Nós
          </a>
          <Link to="/links-uteis" className="text-sm font-medium hover:text-primary transition-colors">
            Links Úteis
          </Link>
          <a href={isHomePage ? "#gerador-senhas" : "/#gerador-senhas"} onClick={handlePasswordGeneratorClick} className="text-sm font-medium hover:text-primary transition-colors">
            Gerador de Senhas
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
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
              Início
            </Link>
            <a href={isHomePage ? "#articles" : "/#articles"} onClick={handleArticlesClick} className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Artigos
            </a>
            <a href={isHomePage ? "#community" : "/#community"} onClick={handleCommunityClick} className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Comunidade
            </a>
            <a href={isHomePage ? "#about" : "/#about"} onClick={handleAboutClick} className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Sobre Nós
            </a>
            <Link to="/links-uteis" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Links Úteis
            </Link>
            <a href={isHomePage ? "#gerador-senhas" : "/#gerador-senhas"} onClick={handlePasswordGeneratorClick} className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Gerador de Senhas
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
