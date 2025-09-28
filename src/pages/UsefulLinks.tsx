// src/pages/UsefulLinks.tsx

import React from 'react';
// Se você usa componentes como Header e Footer, importe-os aqui:
// import Header from '../components/Header'; 
// import Footer from '../components/Footer';

const UsefulLinks = () => {
  return (
    <div className="container mx-auto py-10 px-4"> 
      
      {/* Você pode adicionar seu Header aqui se não for global */}
      
      <h1 className="text-3xl font-bold mb-4">Central de Links e Ferramentas</h1>
      <p className="text-gray-600 mb-6">
        Este dashboard é powered by Dashy e contém todos os links e recursos importantes.
      </p>
      
      {/* O IFRAME DO DASHY - AJUSTE A ALTURA (height) CONFORME O SEU DASHBOARD */}
      <iframe
        src="https://oseasfr-dashy.vercel.app/"
        title="Dashy Useful Links"
        width="100%"
        height="1200px" 
        style={{ border: '1px solid #e2e8f0', borderRadius: '8px', minHeight: '80vh' }} 
      >
        Seu navegador não suporta iframes.
      </iframe>
      
      {/* Você pode adicionar seu Footer aqui se não for global */}
      
    </div>
  );
};

export default UsefulLinks;
