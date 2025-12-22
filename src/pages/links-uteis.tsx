const UsefulLinks = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <iframe
        src="https://dashy-ccc.vercel.app/?homeUrl=https://www.cafecomcyber.com.br"
        title="Links Úteis"
        style={{ 
          flex: 1,
          width: '100%',
          border: 'none',
        }}
      >
        Seu navegador não suporta iframes.
      </iframe>
    </div>
  );
};

export default UsefulLinks;
