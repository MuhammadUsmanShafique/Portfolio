import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-blue-500/30">
      <HeroSection />
      <TechStack />
      <FeaturedProjects />
      <Footer />
    </main>
  );
}
