"use client";

import { useEffect, useState } from "react";
import Enhanced from "@/components/Enhanced";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import HeroGeometric from "@/components/Hero";
import Domains from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  const video = "/assets/vid.mp4";
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent hydration mismatch

  return (
    <>
      {isVideoFinished ? (
        <>
          <Header />
          <HeroGeometric />
          <Domains />
          <Enhanced />
          <Testimonials />
          <FAQ />
          <Footer />
        </>
      ) : (
        <div className="fixed top-0 left-0 w-full h-full">
          <video
            loop={false}
            muted
            autoPlay
            src={video}
            className="w-full h-full object-cover absolute top-0 left-0"
            onEnded={() => setIsVideoFinished(true)}
          />
        </div>
      )}
    </>
  );
}
