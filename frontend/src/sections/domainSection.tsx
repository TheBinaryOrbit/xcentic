'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  {
    title: "Mobile App Development",
    description:
      "We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.",
    icon: "📱",
  },
  {
    title: "Software Development",
    description:
      "From custom development to system upgrades, we craft software that enhances operational efficiency and drives innovation.",
    icon: "💻",
  },
  {
    title: "Digital Transformation",
    description:
      "We help businesses stay competitive by transforming legacy systems with modern, digital-first solutions that drive growth.",
    icon: "🌐",
  },
  {
    title: "Ideation And Design Strategy",
    description:
      "Our strategic ideation and design processes ensure that your digital products are not only functional but also well-resonated with users.",
    icon: "💡",
  },
  {
    title: "IT Consulting",
    description:
      "We provide expert IT consulting services to help your organization navigate complex technology decisions and align IT strategies with business objectives.",
    icon: "⚙️",
  },
  {
    title: "DevOps",
    description:
      "Our DevOps services streamline development and operations to accelerate your project timelines and improve the overall product quality.",
    icon: "🔄",
  },
  {
    title: "Cloud Managed Services",
    description:
      "We manage your cloud infrastructure end-to-end, ensuring it is optimized, secure, and cost-effective; allowing you to focus on strategic business activities.",
    icon: "☁️",
  },
];

const Domains: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".card");

    if (elements) {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-8 py-12 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <h1 className="text-3xl font-bold mb-8 text-left">Our Services</h1>
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domains;
