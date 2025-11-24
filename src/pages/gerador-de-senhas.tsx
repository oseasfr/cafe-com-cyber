// src/pages/gerador-de-senhas.tsx
import React, { useEffect, useRef } from 'react';

const GeradorDeSenhas = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const adjustIframeHeight = () => {
      if (iframeRef.current) {
        try {
          const iframeDocument =
            iframeRef.current.contentDocument ||
            iframeRef.current.contentWindow?.document;
          if (iframeDocument) {
            const height = iframeDocument.body.scrollHeight;
            iframeRef.current.style.height = `${height + 20}px`;
          }
        } catch (e) {
          console.log('Não foi possível ajustar altura automaticamente devido a CORS');
        }
      }
    };

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
    <div
      style={{
        padding: 0,
        margin: 0,
        minHeight: '100vh',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <iframe
        ref={iframeRef}
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
          overflow: 'hidden',
        }}
        scrolling="no"
      >
        Seu navegador não suporta iframes.
      </iframe>
    </div>
  );
};

export default GeradorDeSenhas;
