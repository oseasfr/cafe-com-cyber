import React, { useEffect, useRef } from 'react';

const UsefulLinks = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const adjustIframeHeight = () => {
      if (iframeRef.current) {
        try {
          // Tenta ajustar a altura baseado no conteúdo do iframe
          const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
          if (iframeDocument) {
            const height = iframeDocument.body.scrollHeight;
            iframeRef.current.style.height = `${height + 20}px`; // +20px de margem de segurança
          }
        } catch (e) {
          // Se houver erro de CORS, mantém altura fixa
          console.log('Não foi possível ajustar altura automaticamente devido a CORS');
        }
      }
    };

    // Tenta ajustar após o carregamento
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', adjustIframeHeight);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', adjustIframeHeight);
      }
    };
  }, []);

  return (
    <div style={{ 
      padding: 0, 
      margin: 0, 
      minHeight: '100vh',
      overflow: 'hidden', // Previne scroll no container
      width: '100%'
    }}> 
      <iframe
        ref={iframeRef}
        src="https://dashy-ccc.vercel.app/"
        title="Links Úteis"
        style={{ 
          border: 'none',
          display: 'block',
          width: '100%',
          height: '100vh', // Usa viewport height ao invés de pixels fixos
          minHeight: '600px', // Altura mínima de segurança
          margin: 0,
          padding: 0,
          overflow: 'hidden' // Remove barras de rolagem do iframe
        }}
        scrolling="no" // Desabilita scroll interno do iframe
      >
        Seu navegador não suporta iframes.
      </iframe>
    </div>
  );
};

export default UsefulLinks;
