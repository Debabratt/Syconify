import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { FaHeadset, FaGlobe, FaUserTie } from 'react-icons/fa';

const heroData = [
  {
    bgImage: "/hero.webp",
    title: "A Creative Web Development & SEO",
    subtitle: "Crafting digital experiences that drive results",
    color: "from-[#389291]"
  },
  {
    bgImage: "/hero2.jpg",
    title: "Innovative Digital Solutions",
    subtitle: "Transforming ideas into powerful web experiences",
    color: "from-[#1e2c47]"
  },
  {
    bgImage: "/client.jpg",
    title: "Results-Driven Marketing",
    subtitle: "Boosting your online visibility and growth",
    color: "from-[#2a5a78]"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = heroData.map(slide => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.bgImage;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      await Promise.all(promises);
      setIsLoading(false);
    };

    preloadImages();

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="relative h-[90vh] bg-gray-800 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Background Transition */}
      <div className="relative h-[90vh] bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroData.map((slide, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center ">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white mb-4"
          >
            <h1 className="text-2xl md:text-5xl font-bold mb-4">
              {heroData[currentSlide].title}
            </h1>
            <p className="text-lg md:text-3xl max-w-2xl mx-auto">
              {heroData[currentSlide].subtitle}
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-[#008D84] hover:bg-[#52918d] text-white rounded-lg font-semibold shadow-lg transition-all"
          >
            Get Started
          </motion.button>
        </div>
      </div>

      {/* Floating Service Boxes */}
      <div className="md:-mt-17 relative left-1/2 transform -translate-x-1/2 w-[80%] grid grid-cols-1 md:grid-cols-3 ">
  {/* Transparent Workflow */}
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-[#389291] h-40 text-white flex items-center p-6 space-x-4 shadow-lg hover:shadow-xl transition-all "
  >
    <div className="text-3xl">
      <FaGlobe />
    </div>
    <div>
      <h3 className="text-lg font-bold">Transparent Workflow</h3>
      <p className="text-sm">Track every milestone, deliverable, and deadline in real-time.</p>
    </div>
  </motion.div>

  {/* Dedicated Point of Contact */}
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-[#1e2c47] text-white flex items-center p-6 space-x-4 shadow-lg hover:shadow-xl transition-all "
  >
    <div className="text-3xl">
      <FaHeadset />
    </div>
    <div>
      <h3 className="text-lg font-bold">1-on-1 Project Manager</h3>
      <p className="text-sm">Direct communication. No middlemen. Real accountability.</p>
    </div>
  </motion.div>

  {/* Code You Own */}
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-[#389291] text-white flex items-center p-6 space-x-4 shadow-lg hover:shadow-xl transition-all "
  >
    <div className="text-3xl">
      <FaUserTie />
    </div>
    <div>
      <h3 className="text-lg font-bold">100% Ownership</h3>
      <p className="text-sm">You get full access, rights, and control of your codebase.</p>
    </div>
  </motion.div>
</div>

    </div>
  );
}
