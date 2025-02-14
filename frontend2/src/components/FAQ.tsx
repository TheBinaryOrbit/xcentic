"use client"

import { useState } from "react";

const faqs = [
  {
    question: "How can Xcentic help my business with digital transformation?",
    answer: "We assess your current technology landscape, identify opportunities for growth, and implement customized digital solutions to streamline operations and enhance performance."
  },
  {
    question: "What industries do you serve?",
    answer: "We work across diverse industries, including finance, healthcare, retail, manufacturing, and logistics, delivering tailored digital solutions that drive impact."
  },
  {
    question: "How does AI benefit businesses?",
    answer: "AI enhances efficiency, automates repetitive tasks, and provides actionable insights, allowing businesses to focus on innovation and strategy."
  },
  {
    question: "Can you assist with cloud migration and security?",
    answer: "Absolutely! Our cloud-managed services ensure a smooth transition to the cloud while maintaining data security and compliance."
  },
  {
    question: "What makes Xcentic different from other IT service providers?",
    answer: "Our commitment to innovation, customer-centric approach, and deep industry expertise set us apart, ensuring transformative digital experiences for our clients."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index : any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">Find answers to common questions about our services and processes.</p>
        <div className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <button
                className="w-full text-left text-xl font-medium flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
              </button>
              <div
                className={`transition-all overflow-hidden ${openIndex === index ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"}`}
              >
                <p className="text-gray-700 text-lg">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
