import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import PillarsSection from "@/components/PillarsSection";
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PainSection />
        <PillarsSection />
        <JourneySection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
