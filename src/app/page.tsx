import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { PerformanceGallerySection } from "@/components/sections/PerformanceGallerySection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <ServicesOverviewSection />
      <TestimonialsSection />
      <QuoteSection />
      <PerformanceGallerySection />
      <CTASection />
    </>
  );
}
