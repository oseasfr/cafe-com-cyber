import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, Instagram, Youtube, Coffee, Shield } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  const handleHomeClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Link to="/" onClick={handleHomeClick}>
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
                <p className="text-xs text-muted-foreground">{t('footer.description')}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t('footer.navigation')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" onClick={handleHomeClick} className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.articles')}
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.community')}
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/links-uteis" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.usefulLinks')}
                </Link>
              </li>
              <li>
                <Link to="/gerador-de-senhas" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.passwordGenerator')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t('footer.socialMedia')}</h4>
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
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t('footer.contact')}</h4>
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
              <span>&copy; {new Date().getFullYear()} Café com Cyber. {t('footer.copyright')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>{t('footer.madeWith')}</span>
              <Coffee className="h-4 w-4" />
              <span>{t('footer.andSecurity')}</span>
              <Shield className="h-4 w-4 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
