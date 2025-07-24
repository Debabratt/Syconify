import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    "Need Quotation",
    "Privacy Policy",
    "Disclaimer",
    "Terms and Conditions",
    "Careers",
  ];

  const companyLinks = [
    "Home",
    "About Us",
    "Company History",
    "Our Services",
    "FAQ",
    "Contact Us",
  ];

  return (
    <footer className="bg-[#0B0F0E] text-[#CCCCCC] py-16 px-6 border-t border-[#1A1F1E]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-7">
        {/* CTA Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-[#00B9AD] mb-4">Let’s Schedule a Call.</h3>
          <p className="text-sm mb-6">
            You are one step away from unlocking more revenue with smarter digital strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#00B9AD] hover:bg-[#008C83] text-black font-semibold px-6 py-2 rounded">
              Book a Call
            </button>
            <a
              href="tel:+919337546424"
              className="border border-[#00B9AD] hover:bg-[#00B9AD] hover:text-black text-[#00B9AD] px-6 py-2 rounded text-center"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>

        {/* Quick Links Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-[#00B9AD] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((item, index) => (
              <li key={index} className="hover:text-[#00FFE0] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Company Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-[#00B9AD] mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            {companyLinks.map((item, index) => (
              <li key={index} className="hover:text-[#00FFE0] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-[#00B9AD] mb-4">Contact Information</h3>
          <p className="text-sm mb-2">📍 Plot 37/2, Jagannath Vihar, Bhubaneswar, Odisha 751030</p>
          <p className="text-sm mb-2">📍 Branch: C-56/13, Sector 62, Noida, Uttar Pradesh 201301</p>
          <p className="text-sm mb-2">✉️ info@syconify.com</p>
          <p className="text-sm mb-4">📞 +91-9337546424</p>

          <div className="flex space-x-4 mt-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, index) => (
              <Icon
                key={index}
                className="w-5 h-5 text-white hover:text-[#00FFE0] cursor-pointer"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-12 border-t border-[#1F2A27] pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Syconify. All rights reserved.
      </div>
    </footer>
  );
}
