import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const ScrollToTopButton = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [canGoUp, setCanGoUp] = useState(false);
  const [canGoDown, setCanGoDown] = useState(false);

  // Lista de seções na ordem de aparição (apenas na home)
  const sections = ['articles', 'community', 'about', 'gerador-senhas'];

  // Função auxiliar para scroll com offset do header
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 64; // h-16 = 64px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Detecta em qual seção o usuário está
  useEffect(() => {
    if (!isHomePage) return;

    const detectCurrentSection = () => {
      const scrollPosition = window.pageYOffset + 100; // Offset para header
      
      // Verifica cada seção para ver qual está visível
      let current = null;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            current = sectionId;
            break;
          }
        }
      }

      setCurrentSection(current);
      
      // Determina se pode ir para cima ou para baixo
      if (current) {
        const currentIndex = sections.indexOf(current);
        setCanGoUp(currentIndex > 0);
        setCanGoDown(currentIndex < sections.length - 1);
      } else {
        // Se não está em nenhuma seção específica, permite navegação baseada na posição
        const firstSection = document.getElementById(sections[0]);
        const lastSection = document.getElementById(sections[sections.length - 1]);
        
        if (firstSection && lastSection) {
          setCanGoDown(window.pageYOffset < firstSection.offsetTop);
          setCanGoUp(window.pageYOffset > lastSection.offsetTop + lastSection.offsetHeight);
        }
      }

      // Mostra o botão quando rola mais de 300px
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', detectCurrentSection);
    detectCurrentSection(); // Chama na montagem

    return () => {
      window.removeEventListener('scroll', detectCurrentSection);
    };
  }, [isHomePage]);

  // Função para ir para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  // Função para ir para a seção anterior (acima)
  const scrollToPreviousSection = () => {
    if (!currentSection) {
      // Se não está em nenhuma seção, vai para a última
      scrollToSection(sections[sections.length - 1]);
      return;
    }

    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      scrollToSection(sections[currentIndex - 1]);
    } else {
      // Se está na primeira seção, vai para o topo
      scrollToTop();
    }
  };

  // Função para ir para a próxima seção (abaixo)
  const scrollToNextSection = () => {
    if (!currentSection) {
      // Se não está em nenhuma seção, vai para a primeira
      scrollToSection(sections[0]);
      return;
    }

    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1]);
    }
  };

  if (!isVisible) {
    return null;
  }

  // Se não está na home, mostra apenas o botão de voltar ao topo
  if (!isHomePage) {
    return (
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 rounded-full h-12 w-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
        aria-label="Ir para o topo"
        title="Ir para o topo"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    );
  }

  // Na home, mostra botões de navegação entre seções
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2">
      {/* Botão de seção anterior (acima) */}
      {canGoUp && (
        <Button
          onClick={scrollToPreviousSection}
          className="rounded-full h-12 w-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary/80 hover:bg-primary backdrop-blur-sm"
          aria-label="Seção anterior"
          title="Seção anterior"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}

      {/* Botão de voltar ao topo */}
      <Button
        onClick={scrollToTop}
        className="rounded-full h-12 w-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
        aria-label="Ir para o topo"
        title="Ir para o topo"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      {/* Botão de próxima seção (abaixo) */}
      {canGoDown && (
        <Button
          onClick={scrollToNextSection}
          className="rounded-full h-12 w-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary/80 hover:bg-primary backdrop-blur-sm"
          aria-label="Próxima seção"
          title="Próxima seção"
        >
          <ChevronDown className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

