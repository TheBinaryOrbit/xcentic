import Enhanced from "@/components/Enhanced";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import HeroGeometric from "@/components/Hero";
import Domains from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <HeroGeometric />
      <Domains />
      <Enhanced />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
