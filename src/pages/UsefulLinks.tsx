import React from 'react';

const UsefulLinks = () => {
  return (
    <div style={{ padding: 0, margin: 0, minHeight: '100vh' }}> 
      <iframe
        src="https://oseasfr-dashy.vercel.app/"
        title="Dashy Useful Links"
        width="100vw"
        height="1200px" 
        style={{ 
          border: 'none', 
          minHeight: '80vh', 
          display: 'block',
          marginLeft: '50%',
          transform: 'translateX(-50%)',
          width: '100vw', 
          maxWidth: '100vw'
        }} 
      >
        Seu navegador não suporta iframes.
      </iframe>
    </div>
  );
};

export default UsefulLinks;
