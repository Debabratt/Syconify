import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn,
  FaTimes, FaBars, FaChevronDown
} from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="w-full">
      {/* 👇 Desktop Top Bar (UNCHANGED) 👇 */}
      <div className="hidden md:flex bg-[#0D0D0D] text-gray-300 text-sm justify-between px-4 py-2 items-center">
        <div className="flex items-center md:ml-20 space-x-4">
          <div className="flex items-center space-x-1">
            <span className='text-[#389291]'><FiPhone /></span>
            <span>+91-9337546424</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className='text-[#389291]'><FiMail /></span>
            <span>info@syconify.com</span>
          </div>
        </div>
        <div className="flex items-center md:mr-20 space-x-4">
          <FaFacebookF className="cursor-pointer hover:text-blue-400" />
          <FaInstagram className="cursor-pointer hover:text-pink-400" />
          <FaTwitter className="cursor-pointer hover:text-blue-300" />
          <FaLinkedinIn className="cursor-pointer hover:text-[#3498DB]" />
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#008D84] hover:bg-[#007a72] px-3 py-1 rounded text-white font-bold"
            >
              Get A Quote
            </motion.button>
          </Link>
        </div>
      </div>

      {/* 👇 Desktop Main Navbar (UNCHANGED) 👇 */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 shadow">
        <div className="flex items-center md:ml-20">
          <img src="/logo.png" alt="logo" className="h-18 w-auto" />
        </div>

        <div className="hidden md:flex space-x-6 font-2xl font-semibold text-[#008D84] mr-50">
          <Link to="/" className="hover:text-[#3498DB]">Home</Link>
          <Link to="/about" className="hover:text-[#3498DB]">About</Link>
          <div className="relative">
            <Link to="/services" className="flex items-center hover:text-[#3498DB]">
              Services
            </Link>
          </div>
          <Link to="/career" className="hover:text-[#3498DB]">Career</Link>
          <Link to="/contact" className="hover:text-[#3498DB]">Contact Us</Link>
        </div>

        {/* 👇 ONLY MOBILE CHANGES START HERE 👇 */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-[#008D84] text-2xl" />
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="block w-6 h-0.5 bg-[#008D84] rounded-full"></span>
              <span className="block w-6 h-0.5 bg-[#008D84] rounded-full"></span>
              <span className="block w-4 h-0.5 bg-[#008D84] rounded-full ml-auto"></span>
            </div>
          )}
        </button>
      </div>

      {/* 👇 New Mobile Menu Design 👇 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={closeMenu}
            />
            
            <motion.div
  initial={{ x: '-100%' }}
  animate={{ x: 0 }}
  exit={{ x: '-100%' }}
  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }} // Ease-out curve
  className="fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50"
>

              <div className="h-full flex flex-col">
                <div className="p-4 border-b">
                  <img src="/logo.png" alt="logo" className="h-10 w-auto" />
                </div>

                <div className="flex-1 overflow-y-auto py-2">
                  {[
                    { path: "/", label: "Home" },
                    { path: "/about", label: "About Us" },
                    { path: "/career", label: "Career" },
                    { path: "/contact", label: "Contact Us" }
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-6 py-3 text-[#008D84] font-2xl font-semibold hover:bg-gray-50"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="border-t border-b border-gray-100">
                    <button
                      className="w-full flex justify-between items-center px-6 py-3 text-[#008D84] font-2xl font-semibold hover:bg-gray-50"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                      <span>Services</span>
                      <FaChevronDown className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileServicesOpen && (
                      <div className="bg-gray-50">
                        {[
                          { path: "/services/web", label: "Web Development" },
                          { path: "/services/seo", label: "SEO" },
                          { path: "/services/mobile", label: "Mobile Apps" }
                        ].map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-8 py-2 text-sm text-[#1e3558] hover:bg-gray-100"
                            onClick={closeMenu}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 border-t">
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <FiPhone className="text-[#389291]" />
                    <span>+91-9337546424</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <FiMail className="text-[#389291]" />
                    <span>info@syconify.com</span>
                  </div>
                  <div className="flex justify-center gap-4 mb-4">
                    <FaFacebookF className="text-[#389291] hover:text-blue-400 cursor-pointer" />
                    <FaInstagram className="text-[#389291] hover:text-pink-400 cursor-pointer" />
                    <FaTwitter className="text-[#389291] hover:text-blue-300 cursor-pointer" />
                    <FaLinkedinIn className="text-[#389291] hover:text-blue-600 cursor-pointer" />
                  </div>
                  <Link to="/contact" onClick={closeMenu}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="w-full bg-[#008D84] hover:bg-[#007a72] px-3 py-2 rounded text-white font-bold"
                    >
                      Get A Quote
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}