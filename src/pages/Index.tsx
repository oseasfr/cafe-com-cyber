import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArticlesSection from "@/components/ArticlesSection";
import CommunitySection from "@/components/CommunitySection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">
        <HeroSection />
        <ArticlesSection />
        <CommunitySection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
