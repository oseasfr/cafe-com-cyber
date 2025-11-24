// src/pages/gerador-de-senhas.tsx
import React, { useState } from 'react';

const GeradorDeSenhas = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      margin: 0, 
      padding: 0,
      position: 'relative'
    }}>
      {loading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>
          <h2>🔒 Carregando Gerador de Senhas...</h2>
        </div>
      )}
      
      <iframe 
        src="https://gerador-de-senhas-cme.pages.dev/"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: loading ? 'none' : 'block'
        }}
        title="Gerador de Senhas"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default GeradorDeSenhas;
