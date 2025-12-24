// src/components/Footer.tsx
import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Link to="/">
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
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Início</Link></li>
              {/* ALTERAÇÃO AQUI: articles -> artigos */}
              <li><a href="artigos" className="text-muted-foreground hover:text-primary transition-colors">Artigos</a></li>
              <li><a href="#comunidade" className="text-muted-foreground hover:text-primary transition-colors">Comunidade</a></li>
              <li><Link to="/links-uteis" className="text-muted-foreground hover:text-primary transition-colors">Links Úteis</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.linkedin.com/company/cafecomcyber/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/oseasfr/cafe-com-cyber" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/cafecomcyber/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@cafecomcyber" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="h-4 w-4" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p className="text-sm text-muted-foreground flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contato@cafecomcyber.com.br</span>
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              <Link to="/security.txt" className="hover:text-primary transition-colors">
                security.txt
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          &copy; {new Date( ).getFullYear()} Café com Cyber. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
