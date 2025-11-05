import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { PerformanceGallerySection } from "@/components/sections/PerformanceGallerySection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";

export const metadata: Metadata = {
  title: "Traditional Rwandan Dance Performances",
  description:
    "Book Inkumburwa z'Ibwanacyambwe for immersive traditional Rwandan dance, music, and storytelling experiences for your events and festivals.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <ServicesOverviewSection />
      <QuoteSection />
      <PerformanceGallerySection />
      <CTASection />
    </>
  );
}
