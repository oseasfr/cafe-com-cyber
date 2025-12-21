import React from 'react';

const UsefulLinks = () => {
  return (
    <div style={{ 
      padding: 0, 
      margin: 0, 
      minHeight: '100vh',
      width: '100%'
    }}> 
      <iframe
        src="https://dashy-ccc.vercel.app/"
        title="Links Úteis"
        style={{ 
          border: 'none',
          display: 'block',
          width: '100%',
          height: '100vh', // Volta para 100% da altura da tela
          minHeight: '600px',
          margin: 0,
          padding: 0,
          overflow: 'auto' // Permite rolagem interna no iframe
        }}
      >
        Seu navegador não suporta iframes.
      </iframe>
    </div>
   );
};

export default LinksUteis;
