import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBullseye, FaLightbulb,FaSmile, FaHandshake, FaUsers, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3c626f] via-[#1e293b] to-[#497788] text-white overflow-hidden">
      
      {/* Breadcrumb Centered */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-gray-600 py-6"
      >
        <div className="max-w-4xl mx-auto flex justify-center items-center gap-2 text-sm text-gray-400">
          <Link to="/" className="flex items-center gap-1 hover:text-white font-serif transition">
            <FaHome />
            Home
          </Link>
          <span>/</span>
          <span className="text-cyan-400 font-medium font-serif">About Us</span>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center py-16 px-6"
      >
        <h1 className="text-5xl md:text-4xl font-bold mb-6">
          <span className="text-cyan-400">Crafting Digital</span>{" "}
          <span className="text-white">Excellence</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-300">
          Where innovative ideas meet flawless execution to create digital experiences that matter.
        </p>
      </motion.div>

      {/* Section 1 - Our Story (Text Left / Image Right) */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-1 bg-cyan-400"></div>
            <span className="text-cyan-400 font-medium">OUR STORY</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">From Vision to Reality</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Founded in 2022, <span className="text-cyan-300 font-semibold">Syconify</span> began as a small team of passionate developers with a shared vision: to build digital solutions that make a real impact.
          </p>
          <p className="text-gray-400">
            Today, we've grown into a full-service digital agency, but we've kept that startup spirit alive. We still believe the best solutions come from collaboration, creativity, and a willingness to challenge the status quo.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
          src="/about.jpg" // Replace with your image
            alt="Syconify Team"
            className="rounded-xl shadow-2xl border border-gray-700 w-full"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-cyan-600 p-4 rounded-lg shadow-lg"
          >
            <FaUsers className="text-3xl text-white" />
          </motion.div>
        </motion.div>
      </div>

      {/* Section 2 - Our Approach (Image Left / Text Right) */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center bg-[#1e293b]/50 rounded-xl my-10">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:order-1 order-2"
        >
          <img
            src="/client.jpg" // Replace with your image
            alt="Our Process"
            className="rounded-xl shadow-2xl border border-gray-700 w-full"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:order-2 order-1"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-1 bg-cyan-400"></div>
            <span className="text-cyan-400 font-medium">OUR APPROACH</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Built on Collaboration</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            We don't just build products - we build partnerships. Our client-centric approach ensures you're involved at every stage of the process.
          </p>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Agile methodologies for flexible development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Transparent communication at all levels</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Data-driven decision making</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Section 3 - Why Choose Us (Text Left / Image Right) */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-1 bg-cyan-400"></div>
            <span className="text-cyan-400 font-medium">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Beyond Expectations</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            We measure our success by your satisfaction. Here's what sets us apart:
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#1e293b] p-4 rounded-lg border border-gray-700"
            >
              <FaRocket className="text-cyan-400 text-2xl mb-2" />
              <h4 className="font-bold mb-1">Fast Delivery</h4>
              <p className="text-sm text-gray-400">Rapid deployment without compromising quality</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#1e293b] p-4 rounded-lg border border-gray-700"
            >
              <FaHandshake className="text-cyan-400 text-2xl mb-2" />
              <h4 className="font-bold mb-1">Trusted Partner</h4>
              <p className="text-sm text-gray-400">Long-term relationships built on trust</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="/success.jpg" // Replace with your image
            alt="Our Success"
            className="rounded-xl shadow-2xl border border-gray-700 w-full"
          />
          <motion.div 
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  className="absolute -bottom-6 -right-6 bg-gray-300 p-4 rounded-lg shadow-lg text-black"
>
  <div className="flex items-center gap-2">
    <FaSmile className="text-xl" />
    <div>
      <div className="text-2xl font-bold">98%</div>
      <div className="text-xs">Client Satisfaction</div>
    </div>
  </div>
</motion.div>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <motion.div
        className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-[#1e293b] p-8 rounded-xl border border-gray-700 relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-400/10 rounded-full"></div>
          <div className="flex items-center gap-3 text-cyan-300 text-2xl mb-4">
            <FaBullseye />
            <h5 className="text-xl font-bold">Our Mission</h5>
          </div>
          <p className="text-gray-400 relative z-10">
            To empower businesses of all sizes with transformative digital solutions that drive measurable results, through innovative technology and unparalleled expertise.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-[#1e293b] p-8 rounded-xl border border-gray-700 relative overflow-hidden"
        >
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-cyan-400/10 rounded-full"></div>
          <div className="flex items-center gap-3 text-cyan-300 text-2xl mb-4">
            <FaLightbulb />
            <h5 className="text-xl font-bold">Our Vision</h5>
          </div>
          <p className="text-gray-400 relative z-10">
            To redefine the digital landscape by creating solutions that not only meet today's needs but anticipate tomorrow's challenges, establishing new standards of excellence.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;