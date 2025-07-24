import { motion } from 'framer-motion';
import React from 'react';
import { FaLightbulb, FaCar } from 'react-icons/fa';

export default function ITServicesSection() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Image Section with fixed attachment */}
      <div className="relative h-[70vh] min-h-[500px] w-full mt-20 bg-fixed bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: 'url(/it.png)' }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content over image */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Tailored IT Solutions For Every
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white block mt-2">
              Startup, Growing Business & Enterprise
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg max-w-2xl text-gray-200"
          >
            Customized technology services designed to meet your unique business challenges and goals.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 mb-10 px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 transition duration-300 font-medium rounded-lg"
          >
            Contact Us Today
          </motion.button>
        </div>
      </div>

      {/* Floating Boxes Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-30 relative z-20">
        <div className="flex flex-col md:flex-row ">
          {/* Left Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1b2b48] text-white flex-1 p-6 shadow-lg"
          >
            <p className="text-sm text-gray-300 mb-2">Our Expertise</p>
            <h3 className="text-xl font-bold mb-4">
              Accelerate Your Digital Transformation <span className="italic">Seamlessly</span>
            </h3>

            <div className="mb-4 relative">
              <p className="text-sm">Cloud Solutions & Migration</p>
              <div className="w-full bg-gray-300 h-1 mt-1 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="bg-blue-500 h-1 relative"
                >
                  <motion.div
                    initial={{ x: -20 }}
                    animate={{ x: "calc(98% - 20px)" }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.3,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-3 text-yellow-400"
                  >
                    <FaLightbulb size={20} />
                  </motion.div>
                </motion.div>
              </div>
              <p className="text-right text-sm">98%</p>
            </div>

            <div className="relative">
              <p className="text-sm">Cybersecurity Services</p>
              <div className="w-full bg-gray-300 h-1 mt-1 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  className="bg-blue-500 h-1 relative"
                >
                  <motion.div
                    initial={{ x: -20 }}
                    animate={{ x: "calc(92% - 20px)" }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.6,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-3 text-red-400"
                  >
                    <FaCar size={20} />
                  </motion.div>
                </motion.div>
              </div>
              <p className="text-right text-sm">92%</p>
            </div>
          </motion.div>

          {/* Right Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#2b4c8c] text-white flex-1 p-6 shadow-lg"
          >
            <p className="italic text-sm mb-4">
              After struggling with multiple IT vendors, we finally found a partner who truly understands our business needs. Their team implemented a robust infrastructure that scaled with our growth while maintaining top-notch security. The level of professionalism and technical expertise exceeded all our expectations. They've become an invaluable extension of our team.
            </p>
            <div className="flex items-center mt-4 gap-2 text-yellow-400 text-lg">
              ★★★★★
            </div>
            <p className="font-semibold mt-2">Sarah Johnson</p>
            <p className="text-sm text-gray-200">CTO, TechForward Inc.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}