import { motion } from 'framer-motion';
import { FaCogs, FaLaptopCode, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import React from 'react';

const features = [
  {
    icon: <FaCogs className="text-white text-2xl" />,
    title: 'End-to-End Digital Solutions',
    desc: 'From strategy to deployment, Syconify covers the full lifecycle of your web, mobile, and cloud-based projects with scalable and secure systems.',
  },
  {
    icon: <FaLaptopCode className="text-white text-2xl" />,
    title: 'Pixel-Perfect Design & Development',
    desc: 'We craft visually engaging UI/UX with performance-first coding to ensure fast, responsive, and user-focused web & mobile applications.',
  },
  {
    icon: <FaShieldAlt className="text-white text-2xl" />,
    title: 'Security-Driven Architecture',
    desc: 'Security is built into everything we develop—from encrypted databases to secure hosting. Your data is our top priority.',
  },
  {
    icon: <FaHeadset className="text-white text-2xl" />,
    title: 'Dedicated Client Support',
    desc: 'Our team is available 24/7 for real-time support, ensuring your business runs smoothly with reliable guidance at every step.',
  }
];

export default function WhyChooseSection() {
  return (
    <div className="flex flex-col md:flex-row bg-white">
      {/* Left Image */}
      <div className="md:w-1/2">
        <img
          src="/why.webp"
          alt="team discussion"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 bg-[#389291] p-8 md:mt-10 md:mr-10 text-white">
        <h2 className="text-2xl font-bold mb-6">
          Why Choose <span className="text-white">Syconify Technologies?</span>
        </h2>

        <div className="space-y-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="bg-[#1a3a72] p-3 rounded shadow-md">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
