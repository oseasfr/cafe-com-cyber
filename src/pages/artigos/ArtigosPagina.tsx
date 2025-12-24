// src/pages/artigos/ArtigosPagina.tsx
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NotFound from '../NotFound';
import { artigos } from '../../data/artigos'; 
// CORREÇÃO AQUI: ArticleContent -> ArtigoConteudo
import ArtigoConteudo from '@/components/ArtigoConteudo'; 

const ArtigosPagina = () => {
  const { artigoId } = useParams(); 
  const artigo = artigos.find(a => a.id === artigoId); 

  if (!artigo) {
    return <NotFound />;
  }

  return (
    <div>
      <Header />
      <main>
        {/* CORREÇÃO AQUI: ArticleContent -> ArtigoConteudo */}
        <ArtigoConteudo artigo={artigo} /> 
      </main>
      <Footer />
    </div>
  );
};

export default ArtigosPagina;
