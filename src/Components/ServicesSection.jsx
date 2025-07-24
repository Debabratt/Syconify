import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ArrowRightCircle, ArrowLeftCircle, ShoppingCart, Smartphone, Laptop, TrendingUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const services = [
  {
    title: "eCommerce Development",
    content: "Complete eCommerce solutions with Shopify, WooCommerce, and custom platforms. We build secure, scalable online stores with seamless payment integration.",
    featured: true,
    icon: <ShoppingCart className="w-6 h-6 text-[#3c5588]" />,
    color: "bg-white",
    textColor: "text-[#3c5588]"
  },
  {
    title: "Mobile App Development",
    content: "Custom iOS and Android applications built with React Native and Flutter for cross-platform efficiency or native development for optimal performance.",
    icon: <Smartphone className="w-6 h-6 text-[#3c5588]" />,
    color: "bg-white",
    textColor: "text-[#3c5588]"
  },
  {
    title: "Web Development",
    content: "Responsive, modern websites using React, Next.js, and Node.js. From simple landing pages to complex web applications with CMS integration.",
    icon: <Laptop className="w-6 h-6 text-[#3c5588]" />,
    color: "bg-white",
    textColor: "text-[#3c5588]"
  },
  {
    title: "SEO & Digital Marketing",
    content: "Comprehensive SEO strategies, content marketing, and PPC campaigns to increase your online visibility and drive qualified traffic to your business.",
    icon: <TrendingUp className="w-6 h-6 text-[#3c5588]" />,
    color: "bg-white",
    textColor: "text-[#3c5588]"
  },
];

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Auto-rotate carousel for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === services.length - 1 ? 0 : prev + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMobile]);
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-8 bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/services.png')",
      }}
    >
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-8 h-8 rounded-full bg-blue-100 opacity-20 hidden lg:block"
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 right-20 w-12 h-12 rounded-full bg-blue-100 opacity-20 hidden lg:block"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.25, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Heading */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h4 
          className="text-[#3c5588] font-semibold mb-2"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h4>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#1e2c47]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Comprehensive Digital Solutions for Your{" "}
          <span className="text-[#3c5588] italic">Business Growth</span>
        </motion.h2>
      </motion.div>

      {/* Top 5 icons line */}
      <motion.div 
        className="relative flex justify-center items-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t border-dashed border-gray-300 z-0"></div>
        <div className="grid grid-cols-5 gap-4 z-10 max-w-6xl w-full px-4">
          {[
            <ShoppingCart className="w-10 h-10 text-[#3c5588]" />,
            <Smartphone className="w-10 h-10 text-[#3c5588]" />,
            <Laptop className="w-10 h-10 text-[#3c5588]" />,
            <TrendingUp className="w-10 h-10 text-[#3c5588]" />,
            <ArrowRightCircle className="w-10 h-10 text-[#3c5588]" />
          ].map((icon, i) => (
            <motion.div 
              key={i} 
              className="service-icon flex justify-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              viewport={{ once: true }}
            >
              <motion.div 
                whileHover={{
                  scale: 1.2,
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.6 }
                }}
                whileTap={{
                  scale: 0.9,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white shadow-lg rounded-lg p-3 border border-gray-200 cursor-pointer flex items-center justify-center"
              >
                {icon}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Service Cards - Desktop View */}
      {!isMobile && (
        <div className="grid grid-cols-1 md:mt-20 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`p-6 rounded-lg shadow-md ${service.color} border border-gray-100`}
            >
              <div className="mb-4 p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className={`font-semibold text-lg mb-4 ${service.textColor}`}>
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {service.content}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-500 cursor-pointer">
                Read More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Service Cards - Mobile Carousel */}
      {isMobile && (
        <div className="relative max-w-md mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence>
              <motion.div
                key={currentSlide}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-6 rounded-lg shadow-md ${services[currentSlide].color} border border-gray-100`}
              >
                <div className="mb-4 p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center">
                  {services[currentSlide].icon}
                </div>
                <h3 className={`font-semibold text-lg mb-4 ${services[currentSlide].textColor}`}>
                  {services[currentSlide].title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {services[currentSlide].content}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#008D84] cursor-pointer">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-6 gap-4">
            <button 
              onClick={() => setCurrentSlide(prev => (prev === 0 ? services.length - 1 : prev - 1))}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              <ArrowLeftCircle className="w-6 h-6 text-[#3c5588]" />
            </button>
            
            <div className="flex items-center gap-2">
              {services.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full ${currentSlide === i ? 'bg-[#3c5588]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => setCurrentSlide(prev => (prev === services.length - 1 ? 0 : prev + 1))}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              <ArrowRightCircle className="w-6 h-6 text-[#3c5588]" />
            </button>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-16 text-center text-gray-700">
        Ready to transform your digital presence?{" "}
        <button className="ml-2 inline-block bg-[#3c5588] text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Get Started Today
        </button>
      </div>
    </motion.section>
  );
}