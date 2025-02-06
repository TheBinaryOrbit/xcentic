"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion";

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
]

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">Find answers to common questions about our services and processes.</p>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {faq.answer}
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ;