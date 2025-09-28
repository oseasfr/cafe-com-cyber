// src/pages/UsefulLinks.tsx

import React from 'react';
// Importe Header e Footer se necessário, mas vou remover o conteúdo extra
// para que o Dashy seja o foco principal.

const UsefulLinks = () => {
  return (
    // Reduza o padding ou margin do div container para encostar o Dashy
    // Se quiser remover o espaço em branco acima, remova `py-10` ou ajuste para `pt-0`
    <div className="container mx-auto py-10 px-4" style={{ paddingTop: 0, paddingBottom: 0 }}> 
      
      {/* A área de título e descrição foi removida! 
      */}
      
      {/* O IFRAME DO DASHY */}
      <iframe
        src="https://oseasfr-dashy.vercel.app/"
        title="Dashy Useful Links"
        width="100%"
        height="1200px" 
        style={{ border: 'none', minHeight: '80vh', display: 'block' }} 
      >
        Seu navegador não suporta iframes.
      </iframe>
      
    </div>
  );
};

export default UsefulLinks;
