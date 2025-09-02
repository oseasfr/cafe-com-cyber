import { Link } from 'react-router-dom';
import { Shield, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = () => {
    // Scroll para o topo da página
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Fecha o menu mobile
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
          <Link to="/articles" className="text-sm font-medium hover:text-primary transition-colors">
            Artigos
          </Link>
          <a href="#news" className="text-sm font-medium hover:text-primary transition-colors">
            Notícias
          </a>
          <a href="#community" className="text-sm font-medium hover:text-primary transition-colors">
            Comunidade
          </a>
          <a href="#events" className="text-sm font-medium hover:text-primary transition-colors">
            Eventos
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <a href="#community" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background h-11 rounded-md px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users mr-2 h-5 w-5">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Conhecer a Comunidade
          </a>

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
            <Link to="/articles" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Artigos
            </Link>
            <a href="#news" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Notícias
            </a>
            <a href="#community" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Comunidade
            </a>
            <a href="#events" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Eventos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
