import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ProductDemoSection from "@/components/ProductDemoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PillarsSection from "@/components/PillarsSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FinalCtaSection from "@/components/FinalCtaSection";
import ContestCatalogSection from "@/components/ContestCatalogSection";
import ScopeSection from "@/components/ScopeSection";
import TrialSection from "@/components/TrialSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ScopeSection />
        {/* O produto vem antes do catálogo: a lista de missões é longa e,
            no celular, empurrava a prova do produto para baixo. */}
        <ProductDemoSection />
        <ContestCatalogSection />
        <PainSection />
        <PillarsSection />
        <HowItWorksSection />
        <TrialSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
