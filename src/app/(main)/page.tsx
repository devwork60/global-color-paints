import AboutSection from "@/components/pages/landing-page/about/AboutSection";
import AudienceSection from "@/components/pages/landing-page/audience/AudienceSection";
import BrandsSection from "@/components/pages/landing-page/brands/BrandsSection";
import ClientsSection from "@/components/pages/landing-page/clients/ClientsSection";
import ColourSection from "@/components/pages/landing-page/colour/ColourSection";
import DealerSection from "@/components/pages/landing-page/dealer/DealerSection";
import Hero from "@/components/pages/landing-page/hero/Hero";
import Marquee from "@/components/pages/landing-page/marquee/Marquee";
import ProductRangeSection from "@/components/pages/landing-page/product-range/ProductRangeSection";
import WhySection from "@/components/pages/landing-page/why/WhySection";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Marquee />
      <BrandsSection />
      <AudienceSection />
      <ProductRangeSection />
      <ColourSection />
      <WhySection />
      <AboutSection />
      <ClientsSection />
      <DealerSection />
    </main>
  );
}
