// src/pages/artigos/ArtigosPagina.tsx
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NotFound from '../NotFound';
// ALTERAÇÃO 1: Importação de dados renomeada
import { artigos } from '../../data/artigos'; 
// Supondo que você tenha um componente para o conteúdo do artigo
import ArticleContent from '@/components/ArticleContent'; 

// ALTERAÇÃO 2: Renomeação do componente
const ArtigosPagina = () => {
  // ALTERAÇÃO 3: Renomeação do parâmetro de rota
  const { artigoId } = useParams(); 
  
  // ALTERAÇÃO 4: Renomeação da variável
  const artigo = artigos.find(a => a.id === artigoId); 

  if (!artigo) {
    return <NotFound />;
  }

  return (
    <div>
      <Header />
      <main>
        {/* ALTERAÇÃO 5: Uso da variável renomeada */}
        <ArticleContent artigo={artigo} /> 
      </main>
      <Footer />
    </div>
  );
};

// ALTERAÇÃO 6: Renomeação do export
export default ArtigosPagina;
