import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Smartphone, 
  Laptop, 
  TrendingUp, 
  Code, 
  Database, 
  Cloud, 
  Layers, 
  Cpu, 
  Globe, 
  Shield,
  Package,
  CreditCard,
  SmartphoneCharging,
  Zap,
  BarChart2,
  Search,
  DollarSign,
  Server,
  Layout,
  Type,
  Lock,
  AlertCircle,
  Feather,
  Mail,
  MessageSquare,
  GitBranch
} from 'lucide-react';

// Custom SVG Icons for technologies
const NextJsIcon = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6 fill-current">
    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6 fill-current">
    <path d="M64.4 16c-27.9 0-50.4 8.3-50.4 18.6S36.5 53.2 64.4 53.2c27.9 0 50.4-8.3 50.4-18.6S92.3 16 64.4 16zM89 48.6c0-3.6-10.8-6.5-24.1-6.5-13.3 0-24.1 2.9-24.1 6.5s10.8 6.5 24.1 6.5c13.3 0 24.1-2.9 24.1-6.5z" fill="#61dafb"></path>
    <path d="M89.1 63.1c0-4-11.2-7.2-25-7.2-13.8 0-25 3.2-25 7.2s11.2 7.2 25 7.2c13.8 0 25-3.2 25-7.2z" fill="#61dafb"></path>
    <path d="M89.1 77.9c0-4.1-11.2-7.5-25-7.5-13.8 0-25 3.4-25 7.5s11.2 7.5 25 7.5c13.8 0 25-3.4 25-7.5z" fill="#61dafb"></path>
    <g fill="#61dafb"><circle cx="64" cy="102.4" r="5.5"></circle><circle cx="89.1" cy="82.4" r="5.5"></circle><circle cx="89.1" cy="34.4" r="5.5"></circle><circle cx="38.9" cy="82.4" r="5.5"></circle><circle cx="38.9" cy="34.4" r="5.5"></circle></g>
  </svg>
);

const NodeJsIcon = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6 fill-current">
    <path fill="#83CD29" d="M112.8 31.2l-49.6-28.4c-2.1-1.2-4.5-1.2-6.6 0l-49.6 28.4c-2.1 1.2-3.4 3.4-3.4 5.8v56.8c0 2.4 1.3 4.6 3.4 5.8l49.6 28.4c2.1 1.2 4.5 1.2 6.6 0l49.6-28.4c2.1-1.2 3.4-3.4 3.4-5.8v-56.8c0-2.4-1.3-4.6-3.4-5.8zM63.8 12.1l38.5 22.1-12.9 7.4-25.6-14.7-25.6 14.7-12.9-7.4 38.5-22.1zm-51.6 78.1v-44l12.9 7.4v29.2l25.6 14.7v7.4l-38.5-22.1zm77.1 22.1v-7.4l25.6-14.7v-29.2l12.9-7.4v44l-38.5 22.1z"></path>
  </svg>
);

const ShopifyIcon = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6 fill-current">
    <path fill="#95BF47" d="M128 93.9V34.1c0-1.2-.9-2.1-2.1-2.1h-8.3c-1.2 0-2.1.9-2.1 2.1v59.8c0 1.2.9 2.1 2.1 2.1h8.3c1.2 0 2.1-.9 2.1-2.1z"></path>
    <path fill="#5E8E3E" d="M117.7 32h-8.3c-1.2 0-2.1.9-2.1 2.1v59.8c0 1.2.9 2.1 2.1 2.1h8.3c1.2 0 2.1-.9 2.1-2.1V34.1c0-1.2-.9-2.1-2.1-2.1z"></path>
    <path fill="#FFF" d="M109.4 34.1v59.8c0 1.2-.9 2.1-2.1 2.1H34.1c-1.2 0-2.1-.9-2.1-2.1V34.1c0-1.2.9-2.1 2.1-2.1h73.2c1.2 0 2.1.9 2.1 2.1z"></path>
    <path fill="#5E8E3E" d="M96.1 34.1v59.8c0 1.2-.9 2.1-2.1 2.1H21.7c-1.2 0-2.1-.9-2.1-2.1V34.1c0-1.2.9-2.1 2.1-2.1h72.3c1.2 0 2.1.9 2.1 2.1z"></path>
    <path fill="#FFF" d="M84.4 41.3v45.1c0 1.2-.9 2.1-2.1 2.1H41.3c-1.2 0-2.1-.9-2.1-2.1V41.3c0-1.2.9-2.1 2.1-2.1h41c1.2 0 2.1.9 2.1 2.1z"></path>
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
    <path d="M15.9.087c.394.256 9.194 5.966 9.7 6.343.507.377 1.178 1.413 1.413 2.075.236.662.425 2.075.472 2.92.05.845.05 12.194 0 13.039-.05.845-.236 2.258-.472 2.92-.235.662-.906 1.698-1.413 2.075-.506.377-9.306 6.087-9.7 6.343-.393.256-.786.384-1.18.384s-.786-.128-1.18-.384c-.393-.256-9.193-5.966-9.7-6.343-.506-.377-1.177-1.413-1.412-2.075-.236-.662-.425-2.075-.472-2.92-.05-.845-.05-12.194 0-13.039.047-.845.236-2.258.472-2.92.235-.662.906-1.698 1.412-2.075.507-.377 9.307-6.087 9.7-6.343.394-.256.787-.384 1.18-.384s.787.128 1.18.384zm-1.18 2.45c-.118.078-2.537 1.65-5.375 3.488-2.838 1.84-5.216 3.37-5.286 3.41-.07.04-.493.85-.94 1.8-.447.95-.813 1.84-.813 1.98 0 .14 1.65 8.57 3.666 18.733 2.016 10.163 3.703 18.6 3.748 18.75.046.15.17.28.276.28.107 0 9.387-6.04 9.567-6.16.07-.04.493-.85.94-1.8.446-.95.812-1.84.812-1.98 0-.14-1.65-8.57-3.666-18.733C17.31 8.777 15.623.34 15.577.19c-.045-.15-.17-.28-.276-.28-.054 0-.17.04-.257.118z" fill="#599636"></path>
    <path d="M16.62 16.33v9.12c0 .72-.1.86-.63.86-.37 0-.6-.15-1.36-.86-.68-.63-1.33-1.3-1.45-1.48-.12-.18-.86-.08-1.92.23-1.06.31-1.88.47-1.82.35.06-.12.7-.84 1.42-1.6.72-.76 1.3-1.48 1.3-1.6 0-.12-.17-.14-.56-.06-.38.08-1.08.2-1.54.28-.85.15-.86.15-.72-.23.1-.25 2.35-3.53 2.6-3.8.16-.17.35-.22.6-.17.25.05.8.3 1.22.56.42.26.77.47.78.47.01 0 .02 4.11.02 9.12z" fill="#c2bfbf"></path>
    <path d="M17.48 15.53c0 .4-.75 1.2-1.2 1.6-.2.17-.38.2-.56.1-.17-.1-.25-.35-.2-.6.05-.25.3-1.1.55-1.9.25-.8.48-1.45.53-1.45.04 0 .88.6 1.88 1.3.2.14.38.04.38-.04.95z" fill="#499d4a"></path>
  </svg>
);

const services = [
  {
    title: "eCommerce Development",
    content: "Transform your online business with our end-to-end eCommerce solutions. We specialize in creating high-converting digital storefronts that deliver exceptional user experiences. Our team builds on platforms like Shopify, WooCommerce, and custom solutions tailored to your specific business needs. We implement secure payment gateways, optimize checkout flows, and integrate advanced inventory management systems to streamline your operations.",
    icon: <ShoppingCart className="w-8 h-8" />,
    color: "text-cyan-400 to-cyan-400",
    features: [
      "Complete Shopify/WooCommerce customization with theme development and plugin creation",
      "Seamless integration of payment processors (Stripe, PayPal, Razorpay) with PCI compliance",
      "Advanced inventory management with real-time synchronization across channels",
      "Mobile-first responsive design with PWA capabilities for app-like experience",
      "Performance optimization including lazy loading, image compression, and CDN setup",
      "SEO-optimized product pages with structured data markup",
      "Multi-currency and multi-language support for global reach"
    ],
    stats: [
      { value: "3.2s", label: "Average page load time (faster than 95% of stores)" },
      { value: "72%", label: "Average conversion rate improvement" },
      { value: "24/7", label: "Monitoring and support" }
    ],
    techStack: [
      { icon: <ShopifyIcon />, name: "Shopify" },
      { icon: <Package className="w-6 h-6" />, name: "WooCommerce" },
      { icon: <Layers className="w-6 h-6" />, name: "Magento" },
      { icon: <CreditCard className="w-6 h-6" />, name: "Stripe" },
      { icon: <DollarSign className="w-6 h-6" />, name: "PayPal" },
      { icon: <Database className="w-6 h-6" />, name: "MySQL" },
      { icon: <Shield className="w-6 h-6" />, name: "Security" }
    ]
  },
  {
    title: "Mobile App Development",
    content: "Build powerful mobile experiences with our cross-platform and native app development expertise. We create apps that users love with beautiful interfaces, smooth animations, and flawless functionality. Whether you need a consumer-facing app, enterprise solution, or IoT integration, we deliver performant applications using React Native, Flutter, Swift, and Kotlin. Our process includes rigorous testing across devices and continuous deployment pipelines.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    features: [
      "Cross-platform development with React Native/Flutter for cost efficiency",
      "Native iOS (Swift) and Android (Kotlin) development for premium performance",
      "Custom UI/UX design with motion graphics and micro-interactions",
      "Secure backend API integration with JWT authentication",
      "App store optimization and deployment to Google Play and Apple App Store",
      "Push notification systems with deep linking capabilities",
      "Offline functionality and data synchronization"
    ],
    stats: [
      { value: "4.8", label: "Average app store rating across our portfolio" },
      { value: "2M+", label: "Combined downloads for client applications" },
      { value: "<50ms", label: "Average API response time" }
    ],
    techStack: [
      { icon: <SmartphoneCharging className="w-6 h-6" />, name: "React Native" },
      { icon: <Zap className="w-6 h-6" />, name: "Flutter" },
      { icon: <Code className="w-6 h-6" />, name: "Swift" },
      { icon: <Cpu className="w-6 h-6" />, name: "Kotlin" },
      { icon: <Cloud className="w-6 h-6" />, name: "Firebase" },
      { icon: <MongoIcon />, name: "MongoDB" },
      { icon: <Shield className="w-6 h-6" />, name: "App Security" }
    ]
  },
  {
    title: "Web Development",
    content: "From blazing-fast marketing sites to complex web applications, we build digital experiences that drive results. Using modern technologies like React, Next.js, and Node.js, we create performant, accessible, and scalable web solutions. Our websites are optimized for Core Web Vitals, built with SEO best practices, and secured against modern web threats. We specialize in headless architectures, Jamstack, and traditional CMS implementations.",
    icon: <Laptop className="w-8 h-8" />,
    color: "from-green-500 to-green-600",
    features: [
      "Modern React/Next.js frontends with TypeScript for type safety",
      "Node.js backend development with Express/Nest.js frameworks",
      "Headless CMS integration (Contentful, Sanity, Strapi)",
      "Web performance optimization to achieve 90+ Lighthouse scores",
      "Security hardening with CSP, CORS, and rate limiting",
      "Progressive Web App (PWA) implementation",
      "WebSocket integration for real-time features"
    ],
    stats: [
      { value: "99.9%", label: "Uptime guarantee with SLA-backed hosting" },
      { value: "<1s", label: "Time to First Byte (TTFB) average" },
      { value: "A+", label: "SSL Labs security rating" }
    ],
    techStack: [
      { icon: <NextJsIcon />, name: "Next.js" },
      { icon: <ReactIcon />, name: "React" },
      { icon: <NodeJsIcon />, name: "Node.js" },
      { icon: <Type className="w-6 h-6" />, name: "TypeScript" },
      { icon: <Server className="w-6 h-6" />, name: "Express" },
      { icon: <Layout className="w-6 h-6" />, name: "Tailwind CSS" },
      { icon: <Shield className="w-6 h-6" />, name: "Web Security" }
    ]
  },
  {
    title: "SEO & Digital Marketing",
    content: "Dominate search rankings and acquire high-value customers through our data-driven digital marketing strategies. Our full-funnel approach combines technical SEO, content marketing, and performance advertising to deliver measurable growth. We conduct in-depth competitor analysis, keyword research, and content gap analysis to create campaigns that outperform your competition. Our team stays updated with the latest algorithm changes to future-proof your strategy.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600",
    features: [
      "Comprehensive technical SEO audits and site structure optimization",
      "Data-backed content strategy with topical authority development",
      "White-hat link building through digital PR and content partnerships",
      "Performance marketing across Google Ads, Meta, and LinkedIn",
      "Conversion rate optimization through A/B testing",
      "Marketing automation setup (email sequences, lead nurturing)",
      "Advanced analytics with custom dashboards and attribution modeling"
    ],
    stats: [
      { value: "5.2x", label: "Average organic traffic growth for clients" },
      { value: "38%", label: "Average ROI increase on ad spend" },
      { value: "1.3s", label: "Average improvement in page speed after optimization" }
    ],
    techStack: [
      { icon: <TrendingUp className="w-6 h-6" />, name: "Google Analytics" },
      { icon: <Search className="w-6 h-6" />, name: "SEMrush" },
      { icon: <BarChart2 className="w-6 h-6" />, name: "Ahrefs" },
      { icon: <Globe className="w-6 h-6" />, name: "Google Ads" },
      { icon: <MessageSquare className="w-6 h-6" />, name: "Meta Ads" },
      { icon: <Mail className="w-6 h-6" />, name: "Mailchimp" },
      { icon: <GitBranch className="w-6 h-6" />, name: "GTM" }
    ]
  }
];

const ServiceShowcase = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="bg-gradient-to-br from-[#3c626f] via-[#1e293b] to-[#497788] text-white min-h-screen py-20 px-4 overflow-x-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Our <span className="text-cyan-400">Services</span>
        </h1>
        <p className="text-xl text-white/80">
          Comprehensive solutions tailored to your business needs
        </p>
      </motion.div>

      {/* Service Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-3xl mx-auto">
        {services.map((service, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveService(index)}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all ${
              activeService === index
                ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            {React.cloneElement(service.icon, { className: `w-5 h-5 ${activeService === index ? 'text-white' : 'text-current'}` })}
            {service.title}
          </motion.button>
        ))}
      </div>

      {/* Service Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <motion.div
          className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          key={`content-${activeService}`}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${services[activeService].color}`}>
              {services[activeService].icon}
            </div>
            <h2 className="text-3xl font-bold">{services[activeService].title}</h2>
          </div>

          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            {services[activeService].content}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {services[activeService].stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white/10 rounded-lg p-4 border border-white/10"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold bg-clip-text text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg bg-gradient-to-r ${services[activeService].color} text-white font-medium shadow-lg`}
          >
            Get Started with {services[activeService].title.split(' ')[0]}
          </motion.button>
        </motion.div>

        {/* Features */}
        <div className="space-y-6 relative">
          <h3 className="text-2xl font-bold text-cyan-400 mb-2">Key Features</h3>
          <div className="space-y-4">
            {services[activeService].features.map((feature, i) => (
              <motion.div
                key={i}
                className={`rounded-lg p-4 border border-white/10 cursor-pointer transition-all ${
                  hoveredFeature === i ? 'bg-white/10' : 'bg-white/5'
                }`}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full bg-cyan-400 ${hoveredFeature === i ? 'animate-pulse' : ''}`} />
                  <span className="text-white/90">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {services[activeService].techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  className="p-3 bg-white/10 rounded-lg border border-white/10 flex flex-col items-center group relative"
                  whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                >
                  {tech.icon}
                  <span className="absolute -bottom-8 text-xs bg-black/80 text-white px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceShowcase;