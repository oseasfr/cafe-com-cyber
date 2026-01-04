import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const ScrollToTopButton = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

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

  // Detecta scroll e seção atual
  useEffect(() => {
    const detectCurrentSection = () => {
      // Mostra os botões quando rola mais de 300px
      setIsVisible(window.pageYOffset > 300);

      // Detecta seção apenas na home
      if (!isHomePage) {
        setCurrentSection(null);
        return;
      }

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

  // Função para ir para a seção anterior (acima) ou topo
  const scrollUp = () => {
    // Se não está na home, sempre vai para o topo
    if (!isHomePage) {
      scrollToTop();
      return;
    }

    // Lógica para home (navegação entre seções)
    if (!currentSection) {
      // Se não está em nenhuma seção e está no topo, não faz nada
      // Se está após a última seção, vai para a última seção
      const lastSection = document.getElementById(sections[sections.length - 1]);
      if (lastSection && window.pageYOffset > lastSection.offsetTop) {
        scrollToSection(sections[sections.length - 1]);
        return;
      }
      // Se está antes da primeira seção, vai para o topo
      scrollToTop();
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

  // Função para ir para a próxima seção (abaixo) ou final da página
  const scrollDown = () => {
    // Se não está na home, rola para baixo ou vai para o final
    if (!isHomePage) {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;

      // Se está próximo do final, vai para o final absoluto
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      } else {
        // Rola uma tela para baixo
        window.scrollTo({
          top: scrollPosition + windowHeight - 100, // -100 para offset
          behavior: 'smooth'
        });
      }
      return;
    }

    // Lógica para home (navegação entre seções)
    if (!currentSection) {
      // Se não está em nenhuma seção, vai para a primeira
      scrollToSection(sections[0]);
      return;
    }

    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1]);
    } else {
      // Se está na última seção, vai para o final da página
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) {
    return null;
  }

  // Sempre mostra os dois botões (subir e descer) em todas as páginas
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      {/* Botão para subir (seção anterior ou topo) */}
      <Button
        onClick={scrollUp}
        className="rounded-full h-12 w-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800 hover:bg-gray-700 border border-gray-700"
        aria-label="Subir"
        title="Subir"
      >
        <ArrowUp className="h-4 w-4 text-white" />
      </Button>

      {/* Botão para descer (próxima seção ou final) */}
      <Button
        onClick={scrollDown}
        className="rounded-full h-12 w-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800 hover:bg-gray-700 border border-gray-700"
        aria-label="Descer"
        title="Descer"
      >
        <ArrowDown className="h-4 w-4 text-white" />
      </Button>
    </div>
  );
};

export default ScrollToTopButton;

