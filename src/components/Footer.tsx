import { Coffee, Github, Linkedin, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-cyber-darker border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/5d9ff38a-d664-47c2-bd17-2ea73ba5f9d4.png" 
                alt="Café com Cyber"
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-lg font-bold text-primary">Café com Cyber</h3>
                <p className="text-xs text-muted-foreground">Conteúdos diversos sobre Cybersecurity</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Disseminando conhecimento em segurança da informação de forma colaborativa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Início</a></li>
              <li><a href="#articles" className="text-muted-foreground hover:text-primary transition-colors">Artigos</a></li>
              <li><a href="#news" className="text-muted-foreground hover:text-primary transition-colors">Notícias</a></li>
              <li><a href="#community" className="text-muted-foreground hover:text-primary transition-colors">Comunidade</a></li>
              <li><a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Eventos</a></li>
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
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary"
                  onClick={() =>
                    window.open("https://www.linkedin.com/company/caf%C3%A9-com-cyber/", "_blank")
                  }
                >
  <Linkedin className="h-4 w-4" />
</Button>

                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>&copy; 2024 Café com Cyber. Feito com ☕ e 🔐</span>
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
