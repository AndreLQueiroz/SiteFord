import LandingHeader from "../components/landing/LandingHeader";
import HeroSection from "../components/landing/HeroSection";
import StatsSection from "../components/landing/StatsSection";
import VehicleHighlight from "../components/landing/VehicleHighlight";
import FeaturesSection from "../components/landing/FeaturesSection";
import "../components/landing/landing.css";

export default function LandingPage() {
  return (
    <main className="landing-page">
      <LandingHeader />
      <HeroSection />
      <StatsSection />
      <VehicleHighlight />
      <FeaturesSection />
    </main>
  );
}