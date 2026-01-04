import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Linkedin, Github, Instagram, Youtube, Coffee, Shield } from "lucide-react";
import CursosSection from "@/components/CursosSection";

const Footer = () => {
  const handleLinkClick = () => {
    // Função robusta para scroll no mobile e desktop
    const scrollToTop = () => {
      // Método 1: window.scrollTo (funciona na maioria dos casos)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior
      });
      
      // Método 2: Fallback direto para elementos (importante no mobile)
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
      
      // Método 3: Para iOS Safari e outros navegadores mobile
      // Tenta encontrar o elemento scrollable correto
      const scrollableElements = [
        document.documentElement,
        document.body,
        window
      ];
      
      scrollableElements.forEach(element => {
        if (element && typeof (element as any).scrollTo === 'function') {
          try {
            (element as any).scrollTo({ top: 0, left: 0, behavior: 'instant' });
          } catch (e) {
            // Ignora erros
          }
        }
      });
    };

    // Rola imediatamente
    scrollToTop();

    // Aguarda um pouco para garantir que a navegação tenha iniciado
    // e rola novamente (importante no mobile)
    setTimeout(scrollToTop, 100);
    setTimeout(scrollToTop, 300);
  };

  return (
    <>
      {/* Seção de Cursos */}
      <CursosSection />
      
      <footer className="border-t border-border bg-card/50 backdrop-blur">
        <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Link to="/" onClick={handleLinkClick}>
                <img 
                  src="/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png" 
                  alt="Café com Cyber"
                  className="h-10 w-10"
                />
              </Link>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Café com Cyber
                </h3>
                <p className="text-xs text-muted-foreground">Conteúdos diversos sobre Cybersecurity</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A sua dose diária de conhecimento em Segurança da Informação.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/articles" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Artigos
                </Link>
              </li>
              <li>
                <Link to="/community" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Comunidade
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/links-uteis" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Links Úteis
                </Link>
              </li>
              <li>
                <Link to="/gerador-de-senhas" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">
                  Gerador de Senhas
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Redes Sociais</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.linkedin.com/company/cafecomcyber/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/cafecomcyber" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/cafecomcyber_/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contato</h4>
            <p className="text-sm text-muted-foreground flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a 
                href="mailto:cafecomcyber@proton.me" 
                className="hover:text-primary transition-colors"
              >
                cafecomcyber@proton.me
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span>&copy; {new Date().getFullYear()} Café com Cyber. Todos os direitos reservados.</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Feito com</span>
              <Coffee className="h-4 w-4" />
              <span>e segurança</span>
              <Shield className="h-4 w-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
