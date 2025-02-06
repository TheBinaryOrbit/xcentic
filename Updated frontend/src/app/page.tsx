import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import FAQ from "@/sections/faq";
import  Footer  from "@/sections/footer";
import PricingSection from "@/sections/PricingSection";
import Enhanced from "@/sections/EnhancedDomains";
import Domains from "@/sections/domainSection";
import HeroGeometric from "@/sections/hero-geometric";

export default function Home() {
  return (
    <>
      <Header />
      <HeroGeometric />
      {/* <LogoTicker /> */}
      {/* <ProductShowcase /> */}
      <Domains />
      {/* <PricingSection /> */}
      <Enhanced />
      <Testimonials />
      <FAQ />
      {/* <ConnectAndElevate/> */}
      <Footer />
    </>
  );
}
