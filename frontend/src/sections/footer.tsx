"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Slide-in animation for the heading
    gsap.fromTo(
      textRef.current,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play reverse play reverse", // Slide-in and slide-out
        },
      }
    );
  }, []);

  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Animated Heading */}
        <h2
          ref={textRef}
          className="text-5xl md:text-6xl font-normal text-white flex space-x-2"
        >
          {"XCENTIC".split("").map((letter, index) => (
            <span key={index} className="footer-letter">
              {letter}
            </span>
          ))}
        </h2>

        {/* Contact Options */}
        <div className="text-center md:text-right mt-6 md:mt-0 space-y-2 text-sm md:text-base">
          <p className="flex gap-1 ">
            <Mail />
            business@xcentic.in
          </p>
          <p className="flex gap-1 ">
            <Phone />
            +91 79069 43033
          </p>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-6 md:mt-0 w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 text-black shadow-lg transition-all duration-300"
        >
          <ArrowUp size={30} />
        </button>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs md:text-sm text-gray-500 mt-6">
        &copy; 2024 XCENTIC Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
