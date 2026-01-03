import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Sobre Nós</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O Café com Cyber é uma iniciativa dedicada a democratizar o conhecimento em 
            Segurança da Informação. Nossa missão é criar um espaço colaborativo onde 
            profissionais, entusiastas e estudantes possam compartilhar experiências, 
            aprender juntos e fortalecer a comunidade de cibersegurança no Brasil.
          </p>
          <div className="pt-4">
            <Link to="/sobre-nos">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber"
              >
                Saiba mais
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

