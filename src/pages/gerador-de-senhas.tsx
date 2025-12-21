import Header from "@/components/Header";

export default function GeradorDeSenhas() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header showPasswordGenerator={true} />
      <iframe
        src="https://gerador-de-senhas-cme.pages.dev/"
        title="Gerador de Senhas"
        style={{
          flex: 1,
          width: '100%',
          border: 'none',
        }}
      />
    </div>
  );
}
