import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArticlesSection from "@/components/ArticlesSection";
import DownloadsSection from "@/components/DownloadsSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">
        <HeroSection />
        <ArticlesSection />
        <DownloadsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
