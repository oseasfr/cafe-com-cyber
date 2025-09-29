import { Link } from 'react-router-dom';
import { Shield, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = () => {
    // Scroll to top of the page
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close mobile menu
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" onClick={handleHomeClick}>
            <img 
              src="/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png" 
              alt="Café com Cyber"
              className="h-10 w-10 rounded-full"
            />
          </Link>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Café com Cyber
            </h1>
            <p className="text-xs text-muted-foreground">Conteúdos diversos sobre Cybersecurity</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors" onClick={handleHomeClick}>
            Início
          </Link>
          <a href="#articles" className="text-sm font-medium hover:text-primary transition-colors">
            Artigos
          </a>
          <a href="#news" className="text-sm font-medium hover:text-primary transition-colors">
            Notícias
          </a>
          <a href="#community" className="text-sm font-medium hover:text-primary transition-colors">
            Comunidade
          </a>
          <a href="useful-links" className="text-sm font-medium hover:text-primary transition-colors">
            Links Úteis
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Search className="h-4 w-4" />
          </Button>
          
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
            <a href="#articles" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Artigos
            </a>
            <a href="#news" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Notícias
            </a>
            <a href="#community" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Comunidade
            </a>
            <a href="useful-links" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Links Úteis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
