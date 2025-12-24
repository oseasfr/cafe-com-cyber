import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
