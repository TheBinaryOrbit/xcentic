"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import PricingCard from "./PricingCard"

export default function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the perfect plan that suits your needs. Upgrade or downgrade at any time.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8"
        >
          <PricingCard
            title="Basic"
            price="$9"
            features={["10 Users", "10GB Storage", "Basic Support", "Email Integration"]}
          />
          <PricingCard
            title="Pro"
            price="$19"
            features={["50 Users", "100GB Storage", "Priority Support", "Advanced Analytics", "API Access"]}
            isPrimary={true}
          />
          <PricingCard
            title="Enterprise"
            price="$49"
            features={[
              "Unlimited Users",
              "1TB Storage",
              "24/7 Support",
              "Custom Solutions",
              "Dedicated Account Manager",
            ]}
          />
        </motion.div>
      </div>
    </section>
  )
}

