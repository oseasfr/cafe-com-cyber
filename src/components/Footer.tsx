import { Link } from 'react-router-dom';
import { Coffee, Github, Linkedin, Instagram, Shield } from "lucide-react";

const Footer = () => {
  const handleHomeClick = () => {
    // Scroll para o topo da página
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-cyber-darker border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Link to="/" onClick={handleHomeClick}>
                <img 
                  src="/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png" 
                  alt="Café com Cyber"
                  className="h-10 w-10"
                />
              </Link>
              <div>
                <h3 className="text-lg font-bold text-primary">Café com Cyber</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Conhecimento em Segurança da Informação de forma colaborativa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" onClick={handleHomeClick} className="text-muted-foreground hover:text-primary transition-colors">Início</Link>
              </li>
              <li><a href="#articles" className="text-muted-foreground hover:text-primary transition-colors">Artigos</a></li>
              <li><a href="#news" className="text-muted-foreground hover:text-primary transition-colors">Notícias</a></li>
              <li><a href="#community" className="text-muted-foreground hover:text-primary transition-colors">Comunidade</a></li>
              <li><a href="useful-links" className="text-muted-foreground hover:text-primary transition-colors">Links Úteis</a></li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Tópicos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Web Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Network Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">OSINT</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Incident Response</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Compliance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Conecte-se</h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Participe da nossa comunidade e contribua para o crescimento 
                da área de cybersecurity.
              </p>
              
              <div className="flex space-x-2">
                <a href="https://github.com/cafecomcyber" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/company/cafecomcyber/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="http://instagram.com/cafecomcyber_" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>&copy; 2025 | Goiano Uai | Feito com <Coffee className="h-4 w-4 inline-block align-sub" /> e <Shield className="h-4 w-4 inline-block align-sub" /></span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Seguro por Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
