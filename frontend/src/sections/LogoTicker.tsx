"use client";
import achmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-quantum.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="flex overflow-clip [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-14 flex-none pr-14" 
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          >
            <Image
              src={achmeLogo}
              alt="Achme logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="Achme logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Achme logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Achme logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Achme logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Achme logo"
              className="logo-ticker-image"
            />


            {/* Second set of Logos for animation */}
            <Image
              src={achmeLogo}
              alt="Achme logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="Achme logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Achme logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Achme logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Achme logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Achme logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
