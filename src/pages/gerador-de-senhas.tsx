const GeradorSenhas = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <iframe
        src="https://cafecomcyber.com.br/gerador-de-senhas/"
        title="Gerador de Senhas"
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

export default GeradorSenhas;
