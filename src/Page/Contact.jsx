import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowRight, FaLaptopCode, FaUserTie } from "react-icons/fa";
import axios from 'axios';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await axios.post(`/api/send-email`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject || `Message from ${formData.name}`,
        message: formData.message
      }, {
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.data.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError('Failed to send message. Please try again.');
      }
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        setSubmitError('Request took too long. Please try again.');
      } else {
        console.error('Submission error:', error);
        setSubmitError(error.response?.data?.message || 'An error occurred. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3c626f] via-[#1e293b] to-[#497788] text-white px-6 py-16 overflow-hidden">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-cyan-400">Let's Connect</span> with Syconify
      </motion.h2>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
        {/* Left: Contact Form */}
        <motion.div
          className="bg-[#1e293b]/70 p-8 rounded-2xl shadow-xl border border-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Send a Message</h3>
          
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-900/50 text-green-400 p-4 rounded-lg mb-6 border border-green-700"
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}

          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-900/50 text-red-400 p-4 rounded-lg mb-6 border border-red-700"
            >
              {submitError}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message..."
              rows={5}
              required
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <FaArrowRight className="ml-2" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Google Map */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-xl border border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <iframe
            title="Syconify Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.243860849115!2d85.8429371!3d20.2960582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19090e2d05c24f%3A0xf1d6f037ee39886e!2sJagannath%20Vihar%2C%20Bhubaneswar%2C%20Odisha%20751003!5e0!3m2!1sen!2sin!4v1721213669739!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="w-full h-full min-h-[450px] border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Office Address */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#1e293b]/70 p-6 rounded-xl border border-gray-700 shadow-md text-center"
        >
          <FaMapMarkerAlt className="text-cyan-400 text-3xl mx-auto mb-3" />
          <h4 className="font-semibold text-lg mb-2">Our Office</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Plot-37/2,<br />
            Jagannath Vihar, Bhubaneswar<br />
            Odisha, India
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#1e293b]/70 p-6 rounded-xl border border-gray-700 shadow-md text-center"
        >
          <FaLaptopCode className="text-cyan-400 text-3xl mx-auto mb-3" />
          <h4 className="font-semibold text-lg mb-2">Our Expertise</h4>
          <p className="text-gray-400 text-sm">Web & App Development, UI/UX, ECommerce, Branding & SEO</p>
        </motion.div>

        {/* Client Focus */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#1e293b]/70 p-6 rounded-xl border border-gray-700 shadow-md text-center"
        >
          <FaUserTie className="text-cyan-400 text-3xl mx-auto mb-3" />
          <h4 className="font-semibold text-lg mb-2">Client First</h4>
          <p className="text-gray-400 text-sm">We prioritize transparency, reliability, and long-term success.</p>
        </motion.div>

        {/* Availability */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#1e293b]/70 p-6 rounded-xl border border-gray-700 shadow-md text-center"
        >
          <FaClock className="text-cyan-400 text-3xl mx-auto mb-3" />
          <h4 className="font-semibold text-lg mb-2">Support Hours</h4>
          <p className="text-gray-400 text-sm">Monday to Saturday<br />10:00 AM - 7:00 PM</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;