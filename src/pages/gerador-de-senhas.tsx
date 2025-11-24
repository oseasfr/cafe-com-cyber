// src/pages/gerador-de-senhas.tsx
import React from 'react';

const GeradorDeSenhas = () => {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src="https://gerador-de-senhas-cme.pages.dev/"
        title="Gerador de Senhas"
        style={{
          border: 'none',
          display: 'block',
          width: '100%',
          height: '100vh',
          minHeight: '600px',
          margin: 0,
          padding: 0,
          overflow: 'hidden'
        }}
        scrolling="no"
      >
        Seu navegador não suporta iframes.
      </iframe>
    </div>
  );
};

export default GeradorDeSenhas;
