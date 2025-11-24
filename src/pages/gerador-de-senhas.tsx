// src/pages/gerador-de-senhas.tsx
import React from 'react';

const GeradorDeSenhas = () => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      margin: 0, 
      padding: 0,
      overflow: 'hidden'
    }}>
      <iframe 
        src="https://gerador-de-senhas-cme.pages.dev/"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block'
        }}
        title="Gerador de Senhas"
        loading="lazy"
      />
    </div>
  );
};

export default GeradorDeSenhas;
