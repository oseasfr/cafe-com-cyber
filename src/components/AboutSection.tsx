import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-cyber-darker to-background">
      <div className="container">
        <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur">
          <CardContent className="p-12 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-cyber flex items-center justify-center mb-4">
              <Info className="h-8 w-8 text-primary animate-cyber-float" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="text-primary">Nós</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              O Café com Cyber é uma comunidade dedicada à disseminação de conhecimento em 
              segurança da informação. Nossa missão é criar um espaço colaborativo onde 
              profissionais e entusiastas de cybersecurity possam compartilhar experiências, 
              aprender e crescer juntos.
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber mt-6"
            >
              <Link to="/sobre-nos">
                Saiba mais
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
