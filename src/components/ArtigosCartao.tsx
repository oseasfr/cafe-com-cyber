// src/components/ArtigosSessao.tsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
// 1. Importação do componente renomeado
import ArtigosCartao from "./ArtigosCartao"; 
// 2. Importação dos dados renomeados
import { artigos } from "../data/artigos"; 

// 3. Renomeação do componente
const ArtigosSessao = () => {
  // 4. Renomeação da variável
  const featuredArtigos = artigos.slice(0, 3); // Pega os 3 primeiros artigos

  return (
    <section 
      // 5. Renomeação do ID da âncora
      id="artigos" 
      className="py-20 bg-background"
    >
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Últimos <span className="text-primary">Artigos</span>
          </h2>
          <Link to="/artigos">
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Ver Todos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {/* 6. Uso da variável e prop renomeadas */}
          {featuredArtigos.map((artigo) => (
            // 7. Uso do componente renomeado e prop atualizada
            <ArtigosCartao key={artigo.id} artigo={artigo} />
          ))}
        </div>

        <div className="text-center">
          {/* 8. Rota atualizada */}
          <Link to="/artigos">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-cyber">
              Acesse o Arquivo de Artigos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// 9. Renomeação do export
export default ArtigosSessao;
