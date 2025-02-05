'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Artificial Intelligence",
    description:
      "We leverage AI to craft intelligent solutions that streamline operations and enhance decision-making capabilities.",
    icon: "🤖",
  },
  {
    title: "Generative AI",
    description:
      "We utilize Generative AI technology to create solutions that produce new content, automate creative processes and enhance user experiences.",
    icon: "✨",
  },
  {
    title: "Machine Learning",
    description:
      "We use ML to build intelligent systems that analyze data patterns and predict outcomes while continuously improving operations.",
    icon: "📊",
  },
  {
    title: "Data Analytics",
    description:
      "Our data analytics solutions enable organizations to extract actionable insights from complex datasets.",
    icon: "📈",
  },
  {
    title: "Cloud Computing",
    description:
      "We help businesses transition to the cloud, ensuring scalability, security, and cost-efficiency.",
    icon: "☁️",
  },
  {
    title: "Cybersecurity",
    description:
      "Our cybersecurity solutions protect your digital assets from evolving threats.",
    icon: "🔒",
  },
  {
    title: "IoT Solutions",
    description:
      "We develop IoT solutions that connect devices and streamline operations for smart ecosystems.",
    icon: "🌐",
  },
  {
    title: "Blockchain",
    description:
      "Our blockchain solutions ensure transparency, security, and efficiency in digital transactions.",
    icon: "🔗",
  },
  {
    title: "AR/VR",
    description:
      "We create immersive AR/VR experiences that transform how users interact with digital environments.",
    icon: "🕶️",
  },
];

const Enhanced: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".item");

    gsap.to(sections, {
      yPercent: -100 * (sections.length - 3),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // Adjusted to ensure smoother scrolling
        pin: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      <div className="flex h-screen max-w-screen-xl mx-auto">
        <div className="w-1/2 flex flex-col justify-center p-8">
          <h1 className="text-4xl font-bold leading-snug">
            We Create New Solutions And Transform Existing Ones With Technologies That Beat Industry-Best Timelines
          </h1>
        </div>
        <div className="w-1/2 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[300vh]">
            {items.map((item, index) => (
              <div
                key={index}
                className="item h-1/3 flex flex-col justify-center p-8 border-b border-gray-700"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enhanced;
