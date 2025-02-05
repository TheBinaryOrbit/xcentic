import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  isPrimary?: boolean
}

export default function PricingCard({ title, price, features, isPrimary = false }: PricingCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: isPrimary ? 1.05 : 1.02,
        rotateY: 5,
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
      className={`relative flex flex-col p-8 rounded-3xl shadow-2xl transition-all duration-300 w-full max-w-md ${
        isPrimary ? "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white" : "bg-gray-800 text-white"
      }`}
    >
      {isPrimary && (
        <div className="absolute inset-0 rounded-3xl bg-blue-500 opacity-20 blur-xl -z-10 animate-pulse"></div>
      )}
      <h3 className={`text-3xl font-bold mb-6 ${isPrimary ? "text-blue-200" : "text-blue-400"}`}>{title}</h3>
      <div className="text-5xl font-bold mb-8">
        {price}
        <span className="text-xl font-normal opacity-80">/mo</span>
      </div>
      <ul className="flex-grow mb-10 space-y-5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={`w-6 h-6 mr-4 ${isPrimary ? "text-blue-200" : "text-emerald-400"}`} />
            <span className={`text-lg ${isPrimary ? "text-gray-100" : "text-gray-300"}`}>{feature}</span>
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`py-4 px-8 rounded-xl font-semibold text-xl transition-colors ${
          isPrimary ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Choose Plan
      </motion.button>
    </motion.div>
  )
}

