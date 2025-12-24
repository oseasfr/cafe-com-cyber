// src/pages/artigos/ArtigosArquivos.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// ALTERAÇÃO 1: Importação de dados renomeada
import { artigos } from '../../data/artigos'; 
// Supondo que você tenha um componente para o cartão do artigo
import ArtigosCartao from '@/components/ArtigosCartao'; 

// ALTERAÇÃO 2: Renomeação do componente
export default function ArtigosArquivos() {
  return (
    <div>
      <Header />
      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8">Arquivo de Artigos</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {/* ALTERAÇÃO 3: Uso da variável renomeada */}
          {artigos.map(artigo => (
            // ALTERAÇÃO 4: Uso do componente e prop renomeados
            <ArtigosCartao key={artigo.id} artigo={artigo} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
