import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">{t('about.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.description')}
          </p>
          <div className="pt-4">
            <Link to="/sobre-nos">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber"
              >
                {t('about.learnMore')}
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

