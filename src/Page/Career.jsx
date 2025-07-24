import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiExternalLink, FiClock, FiMapPin, FiDollarSign, 
  FiBriefcase, FiAward, FiUsers, FiLayers, FiChevronDown 
} from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPhp, FaJava, FaWordpress, FaAndroid, FaLeaf, FaMobile, FaFire, FaCss3, FaAd, FaFacebook } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiAdobephotoshop, SiGoogleads, SiHibernate } from 'react-icons/si';
import { DiDigitalOcean } from 'react-icons/di';

const Career = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const companyInfo = {
    name: "Syconify Technologies",
    description: "We're a full-service digital agency specializing in web and mobile development, digital marketing, and e-commerce solutions. Our team of 200+ experts delivers cutting-edge digital experiences to clients worldwide.",
    culture: [
      "Hybrid work model",
      "Continuous learning environment",
      "Quarterly hackathons",
      "Open contribution culture",
      "Flexible work schedules"
    ],
    benefits: [
      "Competitive salaries with bonuses",
      "Health insurance for family",
      "Professional development fund",
      "Paid certifications",
      "Performance-based rewards"
    ]
  };

  const jobs = [
    {
      id: 1,
      title: "MERN Stack Developer",
      company: "Syconify Technologies",
      type: "Full-time",
      location: "Remote (India)",
      salary: "₹800,000 - ₹1,200,000",
      experience: "3+ years",
      category: "development",
      description: "Develop and maintain full-stack applications using MongoDB, Express.js, React, and Node.js. You'll work on building scalable web applications and RESTful APIs.",
      responsibilities: [
        "Develop front-end using React with modern hooks",
        "Build back-end services with Node.js and Express",
        "Design and optimize MongoDB schemas",
        "Implement authentication with JWT",
        "Write unit and integration tests"
      ],
      requirements: [
        "Strong JavaScript/TypeScript skills",
        "Experience with Redux or Context API",
        "Knowledge of RESTful API design",
        "Understanding of database optimization",
        "Familiarity with Git workflows"
      ],
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" />, level: "Advanced" },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "Intermediate" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: "Intermediate" }
      ]
    },
    {
      id: 2,
      title: "PHP Developer",
      company: "Syconify Technologies",
      type: "Full-time",
      location: "Hybrid (Delhi)",
      salary: "₹600,000 - ₹900,000",
      experience: "2+ years",
      category: "development",
      description: "Develop and maintain PHP-based web applications and CMS solutions. Work with Laravel framework to build robust backend systems.",
      responsibilities: [
        "Develop web applications using PHP/Laravel",
        "Integrate with MySQL databases",
        "Create RESTful APIs for frontend consumption",
        "Optimize application performance",
        "Troubleshoot and debug issues"
      ],
      requirements: [
        "Strong PHP and OOP concepts",
        "Experience with Laravel framework",
        "Knowledge of MySQL database",
        "Understanding of MVC architecture",
        "Basic frontend skills (HTML/CSS/JS)"
      ],
      skills: [
        { name: "PHP", icon: <FaPhp className="text-purple-500" />, level: "Intermediate" },
        { name: "Laravel", icon: <SiExpress className="text-red-500" />, level: "Intermediate" },
        { name: "MySQL", icon: <DiDigitalOcean className="text-blue-500" />, level: "Basic" }
      ]
    },
    {
      id: 3,
      title: "Java Developer",
      company: "Syconify Technologies",
      type: "Full-time",
      location: "Bangalore",
      salary: "₹900,000 - ₹1,500,000",
      experience: "4+ years",
      category: "development",
      description: "Design and develop high-performance Java applications for enterprise clients. Work with Spring framework to build scalable solutions.",
      responsibilities: [
        "Develop Java applications using Spring Boot",
        "Design microservices architecture",
        "Implement security best practices",
        "Write unit tests with JUnit",
        "Collaborate with DevOps team"
      ],
      requirements: [
        "Strong Java and Spring framework knowledge",
        "Experience with Hibernate/JPA",
        "Understanding of microservices",
        "Knowledge of design patterns",
        "Familiarity with Docker"
      ],
      skills: [
        { name: "Java", icon: <FaJava className="text-red-400" />, level: "Advanced" },
        { name: "Spring", icon: <FaLeaf className="text-green-400" />, level: "Intermediate" },
        { name: "Hibernate", icon: <SiHibernate className="text-blue-300" />, level: "Intermediate" }
      ]
    },
    {
      id: 4,
      title: "Android Developer",
      company: "Syconify Technologies",
      type: "Contract",
      location: "Remote",
      salary: "₹500 - ₹1,000/hr",
      experience: "3+ years",
      category: "mobile",
      description: "Build and maintain Android applications using Kotlin and Java. Implement modern Android development practices and architecture components.",
      responsibilities: [
        "Develop Android apps using Kotlin/Java",
        "Implement MVVM architecture",
        "Integrate with REST APIs",
        "Optimize app performance",
        "Publish apps to Play Store"
      ],
      requirements: [
        "Strong Kotlin/Java skills",
        "Experience with Android SDK",
        "Knowledge of Jetpack components",
        "Understanding of Material Design",
        "Familiarity with Firebase"
      ],
      skills: [
        { name: "Kotlin", icon: <FaAndroid className="text-green-500" />, level: "Intermediate" },
        { name: "Android SDK", icon: <FaMobile className="text-blue-400" />, level: "Advanced" },
        { name: "Firebase", icon: <FaFire className="text-orange-400" />, level: "Basic" }
      ]
    },
    {
      id: 5,
      title: "WordPress Developer",
      company: "Syconify Technologies",
      type: "Part-time",
      location: "Remote",
      salary: "₹300 - ₹600/hr",
      experience: "2+ years",
      category: "development",
      description: "Develop custom WordPress themes and plugins. Work with clients to build and maintain their WordPress websites.",
      responsibilities: [
        "Develop custom WordPress themes",
        "Create plugins for custom functionality",
        "Optimize website performance",
        "Implement security best practices",
        "Provide technical support"
      ],
      requirements: [
        "Strong PHP and WordPress knowledge",
        "Experience with theme development",
        "Understanding of hooks and filters",
        "Knowledge of page builders",
        "Basic frontend skills"
      ],
      skills: [
        { name: "WordPress", icon: <FaWordpress className="text-blue-400" />, level: "Intermediate" },
        { name: "PHP", icon: <FaPhp className="text-purple-500" />, level: "Intermediate" },
        { name: "CSS", icon: <FaCss3 className="text-blue-300" />, level: "Basic" }
      ]
    },
    {
      id: 6,
      title: "Digital Marketing Specialist",
      company: "Syconify Technologies",
      type: "Full-time",
      location: "Mumbai",
      salary: "₹500,000 - ₹800,000",
      experience: "2+ years",
      category: "marketing",
      description: "Plan and execute digital marketing campaigns across various channels including SEO, PPC, and social media.",
      responsibilities: [
        "Manage Google/Facebook ad campaigns",
        "Optimize SEO strategies",
        "Create content marketing plans",
        "Analyze campaign performance",
        "Manage social media presence"
      ],
      requirements: [
        "Experience with Google Ads/Facebook Ads",
        "Knowledge of SEO best practices",
        "Understanding of analytics tools",
        "Content creation skills",
        "Creative thinking"
      ],
      skills: [
        { name: "SEO", icon: <SiGoogleads className="text-yellow-400" />, level: "Intermediate" },
        { name: "PPC", icon: <FaAd className="text-blue-500" />, level: "Intermediate" },
        { name: "Social Media", icon: <FaFacebook className="text-blue-600" />, level: "Basic" }
      ]
    }
  ];

  const filteredJobs = activeTab === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeTab);

  const handleApply = (jobTitle) => {
    const subject = `Application for ${jobTitle} position at ${companyInfo.name}`;
    const mailtoLink = `mailto:careers@digitalcraft.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      "Please include:\n\n1. Your resume/CV\n2. Portfolio/GitHub links\n3. Why you're interested in this role\n\nWe look forward to hearing from you!"
    )}`;
    window.location.href = mailtoLink;
  };

  const toggleJob = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === filteredJobs.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? filteredJobs.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3c626f] via-[#1e293b] to-[#497788] text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Company Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
            Careers at {companyInfo.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {companyInfo.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FiAward className="mr-2 text-cyan-300" />
                Our Culture
              </h3>
              <ul className="space-y-3">
                {companyInfo.culture.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-cyan-300 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FiBriefcase className="mr-2 text-cyan-300" />
                Benefits
              </h3>
              <ul className="space-y-3">
                {companyInfo.benefits.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-cyan-300 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Jobs Main Content */}
          <div className="lg:col-span-3">
            {/* Job Filters */}
            <motion.div 
              className="mb-8 flex space-x-2 overflow-x-auto pb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {['all', 'development', 'mobile', 'marketing'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setCurrentSlide(0);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {tab === 'all' ? 'All Positions' : 
                   tab === 'development' ? 'Development' : 
                   tab === 'mobile' ? 'Mobile' : 'Marketing'}
                </button>
              ))}
            </motion.div>

            {/* Mobile Carousel View */}
            <div className="lg:hidden relative">
              {filteredJobs.length > 0 ? (
                <>
                  <div className="overflow-hidden">
                    <motion.div
                      className="flex"
                      animate={{ 
                        x: `-${currentSlide * 100}%`,
                        transition: { type: 'spring', stiffness: 300, damping: 30 }
                      }}
                    >
                      {filteredJobs.map((job) => (
                        <div key={job.id} className="w-full flex-shrink-0 px-2">
                          <motion.div
                            layout
                            className="bg-gray-800 bg-opacity-70 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm"
                          >
                            <div 
                              className="p-6 cursor-pointer"
                              onClick={() => toggleJob(job.id)}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                  <p className="text-cyan-300 text-sm mt-1">{job.company}</p>
                                </div>
                                <div className="flex items-center">
                                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                    job.type === 'Full-time' 
                                      ? 'bg-green-900 text-green-300' 
                                      : job.type === 'Part-time'
                                      ? 'bg-purple-900 text-purple-300'
                                      : 'bg-yellow-900 text-yellow-300'
                                  }`}>
                                    {job.type}
                                  </span>
                                  <FiChevronDown 
                                    className={`ml-2 transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`}
                                  />
                                </div>
                              </div>

                              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                                <div className="flex items-center text-gray-300">
                                  <FiMapPin className="mr-2 text-cyan-300" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                  <FiDollarSign className="mr-2 text-cyan-300" />
                                  <span>{job.salary}</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                  <FiBriefcase className="mr-2 text-cyan-300" />
                                  <span>{job.experience}</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                  <FiClock className="mr-2 text-cyan-300" />
                                  <span>Posted 1 week ago</span>
                                </div>
                              </div>

                              {/* Skills Tags */}
                              <div className="mt-4 flex flex-wrap gap-2">
                                {job.skills.map((skill, i) => (
                                  <span 
                                    key={i} 
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200"
                                  >
                                    {skill.icon}
                                    <span className="ml-1.5">{skill.name}</span>
                                    <span className="ml-1 text-cyan-300">{skill.level}</span>
                                  </span>
                                ))}
                              </div>

                              {/* Expanded Content */}
                              <AnimatePresence>
                                {expandedJob === job.id && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-6 text-gray-300 space-y-4"
                                  >
                                    <div>
                                      <h4 className="font-semibold text-white mb-2">Description:</h4>
                                      <p>{job.description}</p>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-semibold text-white mb-2">Responsibilities:</h4>
                                      <ul className="space-y-2">
                                        {job.responsibilities.map((item, i) => (
                                          <li key={i} className="flex">
                                            <span className="text-cyan-300 mr-2">•</span>
                                            <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    <div>
                                      <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                                      <ul className="space-y-2">
                                        {job.requirements.map((item, i) => (
                                          <li key={i} className="flex">
                                            <span className="text-cyan-300 mr-2">•</span>
                                            <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>

                            <div className="px-6 pb-6">
                              <motion.button
                                whileHover={{ 
                                  scale: 1.02,
                                  boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleApply(job.title)}
                                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center"
                              >
                                Apply Now
                                <FiExternalLink className="ml-2" />
                              </motion.button>
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex justify-center mt-4 space-x-4">
                    <button 
                      onClick={prevSlide}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className="flex items-center">
                      {filteredJobs.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 mx-1 rounded-full ${currentSlide === index ? 'bg-cyan-400' : 'bg-gray-500'}`}
                        />
                      ))}
                    </div>
                    <button 
                      onClick={nextSlide}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <motion.div
                  className="bg-gray-800 bg-opacity-50 rounded-xl p-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">No positions available</h3>
                  <p className="text-gray-400">We don't have any open positions in this category right now.</p>
                </motion.div>
              )}
            </div>

            {/* Desktop Grid View */}
            <div className="hidden lg:block">
              <AnimatePresence>
                {filteredJobs.length > 0 ? (
                  <motion.div 
                    className="grid gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {filteredJobs.map((job) => (
                      <motion.div
                        key={job.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="bg-gray-800 bg-opacity-70 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm"
                      >
                        <div 
                          className="p-6 cursor-pointer"
                          onClick={() => toggleJob(job.id)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold text-white">{job.title}</h3>
                              <p className="text-cyan-300 text-sm mt-1">{job.company}</p>
                            </div>
                            <div className="flex items-center">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                job.type === 'Full-time' 
                                  ? 'bg-green-900 text-green-300' 
                                  : job.type === 'Part-time'
                                  ? 'bg-purple-900 text-purple-300'
                                  : 'bg-yellow-900 text-yellow-300'
                              }`}>
                                {job.type}
                              </span>
                              <FiChevronDown 
                                className={`ml-2 transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`}
                              />
                            </div>
                          </div>

                          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center text-gray-300">
                              <FiMapPin className="mr-2 text-cyan-300" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                              <FiDollarSign className="mr-2 text-cyan-300" />
                              <span>{job.salary}</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                              <FiBriefcase className="mr-2 text-cyan-300" />
                              <span>{job.experience}</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                              <FiClock className="mr-2 text-cyan-300" />
                              <span>Posted 1 week ago</span>
                            </div>
                          </div>

                          {/* Skills Tags */}
                          <div className="mt-4 flex flex-wrap gap-2">
                            {job.skills.map((skill, i) => (
                              <span 
                                key={i} 
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200"
                              >
                                {skill.icon}
                                <span className="ml-1.5">{skill.name}</span>
                                <span className="ml-1 text-cyan-300">{skill.level}</span>
                              </span>
                            ))}
                          </div>

                          {/* Expanded Content */}
                          <AnimatePresence>
                            {expandedJob === job.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-6 text-gray-300 space-y-4"
                              >
                                <div>
                                  <h4 className="font-semibold text-white mb-2">Description:</h4>
                                  <p>{job.description}</p>
                                </div>
                                
                                <div>
                                  <h4 className="font-semibold text-white mb-2">Responsibilities:</h4>
                                  <ul className="space-y-2">
                                    {job.responsibilities.map((item, i) => (
                                      <li key={i} className="flex">
                                        <span className="text-cyan-300 mr-2">•</span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                                  <ul className="space-y-2">
                                    {job.requirements.map((item, i) => (
                                      <li key={i} className="flex">
                                        <span className="text-cyan-300 mr-2">•</span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="px-6 pb-6">
                          <motion.button
                            whileHover={{ 
                              scale: 1.02,
                              boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleApply(job.title)}
                            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center"
                          >
                            Apply Now
                            <FiExternalLink className="ml-2" />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    className="bg-gray-800 bg-opacity-50 rounded-xl p-8 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">No positions available</h3>
                    <p className="text-gray-400">We don't have any open positions in this category right now.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* General Application */}
            <motion.div
              className="mt-12 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg p-8 text-center backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Don't see your perfect role?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're always looking for talented professionals in web development, mobile apps, and digital marketing. Send us your resume and we'll contact you when a matching position opens up.
              </p>
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleApply("General Application")}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-medium inline-flex items-center"
              >
                Submit General Application
                <FiExternalLink className="ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Career;