import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const ERWSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Rock Application",
      description: "Crushed basalt rock is spread across agricultural land"
    },
    {
      step: "02", 
      title: "Natural Weathering",
      description: "Rain and soil chemistry accelerate rock breakdown"
    },
    {
      step: "03",
      title: "CO₂ Capture",
      description: "Chemical reactions permanently remove CO₂ from atmosphere"
    },
    {
      step: "04",
      title: "Soil Enhancement",
      description: "Releases essential minerals that improve soil fertility"
    }
  ];

  const benefits = [
    { icon: "🌱", title: "Carbon Removal", value: "1-4 tons CO₂/ha/year" },
    { icon: "🌿", title: "Soil pH Balance", value: "Reduces acidity" },
    { icon: "💧", title: "Water Retention", value: "+30% capacity" },
    { icon: "🌾", title: "Crop Yield", value: "+15-25% increase" }
  ];

  return (
    <motion.section 
      id="erw"
      className="min-h-screen relative flex flex-col justify-center overflow-hidden py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-900"
        // animate={{
        //   background: [
        //     'linear-gradient(135deg, #14532d 0%, #065f46 50%, #14532d 100%)',
        //     'linear-gradient(135deg, #166534 0%, #047857 50%, #166534 100%)',
        //     'linear-gradient(135deg, #14532d 0%, #065f46 50%, #14532d 100%)',
        //   ]
        // }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold mb-6 text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            What is{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-200">
              Enhanced Rock Weathering
            </span>
            ?
          </motion.h2>
          
          <motion.p 
            className="text-2xl md:text-3xl text-green-100 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A revolutionary climate solution that accelerates nature&apos;s own process of carbon capture while transforming agricultural productivity
          </motion.p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Process explanation */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-green-400/20">
              <h3 className="text-4xl font-bold text-white mb-8">How It Works</h3>
              
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    className="flex items-start gap-6"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-300 rounded-2xl flex items-center justify-center text-green-900 font-bold text-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.step}
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                      <p className="text-green-100 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Benefits and visual */}
          <motion.div
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Science explanation */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-green-400/20">
              <h3 className="text-3xl font-bold text-white mb-6">The Science</h3>
              <div className="space-y-4 text-green-100 leading-relaxed">
                <p>
                  Enhanced Rock Weathering mimics and accelerates a process that has been removing CO₂ from Earth&apos;s atmosphere for millions of years.
                </p>
                <p>
                  When certain rocks like basalt are crushed and spread on land, they react with CO₂ and water to form stable carbonates - permanently locking away carbon while releasing beneficial minerals.
                </p>
                <motion.div 
                  className="mt-6 p-4 bg-green-800/30 rounded-xl border-l-4 border-green-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-green-200 font-medium">
                    💡 This process removes CO₂ for thousands of years, making it a permanent climate solution
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-green-400/20 text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-green-300 font-bold text-lg">{benefit.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex flex-col sm:flex-row gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <Link href="/contact">
            <motion.button 
              className="bg-gradient-to-r from-green-400 to-emerald-300 text-green-900 text-xl font-bold py-4 px-12 rounded-2xl transition-all duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your ERW Project
              <svg className="w-6 h-6 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button></Link>

            {/* <motion.button 
              className="bg-white/20 backdrop-blur-sm text-white text-xl font-semibold py-4 px-12 rounded-2xl border-2 border-green-300/50 transition-all duration-300 hover:bg-white/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Studies
            </motion.button> */}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ERWSection;