import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UsefulLinks = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
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
      <Footer />
    </div>
  );
};

export default UsefulLinks;
