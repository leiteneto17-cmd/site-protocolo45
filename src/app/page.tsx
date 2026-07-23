import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ProductDemoSection from "@/components/ProductDemoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PillarsSection from "@/components/PillarsSection";
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FinalCtaSection from "@/components/FinalCtaSection";
import ContestCatalogSection from "@/components/ContestCatalogSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ContestCatalogSection />
        <ProductDemoSection />
        <PainSection />
        <PillarsSection />
        <HowItWorksSection />
        <JourneySection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
