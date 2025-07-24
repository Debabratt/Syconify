import { motion } from "framer-motion";
import React from "react";

export default function AboutSection() {
  return (
    <section className="px-6 md:mt-20 py-20 md:py-24 bg-white max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* Left Text Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2c47] mb-6">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-t from-gray-800 to-cyan-500">Syconify
</span>

 Technologies
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Founded in 2023, Syconify is a new-age software company delivering powerful IT solutions to clients around the world. From the USA and UK to India, Australia, and beyond — we help businesses transform digitally with cutting-edge development and marketing strategies. 
          <br /><br />
          At Syconify, we serve a broad range of industries including e-commerce, education, healthcare, real estate, legal, fintech, and more. Our team focuses on deeply understanding your business goals and crafting solutions that are scalable, secure, and user-focused.
        </p>

        {/* Bullet Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#1e2c47] font-medium">
          <ul className="list-disc list-inside space-y-1">
            <li>Custom Website & App Development</li>
            <li>Secure Hosting & Maintenance</li>
            <li>SEO & Digital Growth Strategy</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>Social Media & Branding Campaigns</li>
            <li>Responsive UI/UX Web Design</li>
            <li>CRM & SaaS Integration</li>
            <li className="text-[#008D84] cursor-pointer underline">Read More</li>
          </ul>
        </div>

        {/* Call Section */}
        <p className="mt-8 text-lg text-black">
          Call to ask any question:{" "}
          <span className="font-bold text-[#1e2c47]">+91 93375 46424</span>
        </p>
      </div>

      {/* Right Image Section */}
      <div className="relative">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-md mt-6"
        >
          <img
            src="/Services.webp"
            alt="Syconify IT Services"
            className="w-full object-cover rounded-xl"
          />
        </motion.div>

        {/* Floating Box */}
        <div className="absolute top-4 right-[-20px] bg-[#2f4fa0] text-white p-4 rounded-full shadow-lg w-48 text-sm text-center font-medium">
          Syconify — Your Trusted Tech Partner
        </div>
      </div>
    </section>
  );
}
