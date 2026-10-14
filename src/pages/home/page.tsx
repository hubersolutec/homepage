
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ApplicationLinks from './components/ApplicationLinks';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProvenResultsSection from './components/ProvenResultsSection';
import AITechnologySection from './components/AITechnologySection';
import HomeScreenSection from './components/HomeScreenSection';
import SolutionArchitectureSection from './components/SolutionArchitectureSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AITechnologySection />
      <HomeScreenSection />
      <SolutionArchitectureSection />
      <ApplicationLinks />
      <ProvenResultsSection />
      <Footer />
    </div>
  );
}

