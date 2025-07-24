import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    id: 1,
    title: "Planning & Discovery",
    description: "We analyze requirements and create project roadmap",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Creating wireframes, prototypes and visual designs",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Development",
    description: "Agile development with regular client updates",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Testing & Delivery",
    description: "Rigorous testing and final product deployment",
    img: "https://images.unsplash.com/photo-1629904853716-f0bc54eea499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
];

// Swing animation
const swingVariant = {
  animate: {
    rotate: [0, -5, 5, -5, 5, 0],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export default function WorkProcess() {
  return (
    <div className="py-20 bg-white text-center px-4">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-sm text-[#389291] font-medium"
      >
        Our Methodology
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12"
      >
        Our Proven <span className="italic text-[#389291]">Work Process</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center max-w-xs relative"
          >
            {/* Image with hover animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden"
            >
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Rope + Swinging Badge */}
            <motion.div
              className="flex flex-col items-center"
              variants={swingVariant}
              animate="animate"
            >
              <div className="w-[2px] h-6 bg-gray-300"></div>
              <div className="bg-[#3c5588] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                {step.id}
              </div>
            </motion.div>

            {/* Content */}
            <div className="mt-6 px-4">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 bg-[#3c5588] hover:bg-[#2c4468] text-white font-medium px-8 py-3 rounded-lg shadow-lg transition-colors duration-300"
      >
        Learn More About Our Process
      </motion.button>
    </div>
  );
}