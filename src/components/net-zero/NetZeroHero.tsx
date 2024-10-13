"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const NetZeroHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (imageLoaded) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [imageLoaded, controls]);

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden px-4 lg:px-12 bg-gradient-to-br from-blue-50 via-green-50 to-gray-50">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center lg:items-start justify-center lg:w-1/2 space-y-6 text-center lg:text-left mb-12 lg:mb-0"
      >
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800"
        >
          NETZERO <span className="text-green-600">SOLUTIONS</span>
        </motion.h1>
        <motion.p
          whileHover={{ scale: 1.05 }}
          className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-600 max-w-xl"
        >
          Crafting a Sustainable Future: Your Tailored Sustainability Roadmap
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#22c55e" }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Start Your Journey
        </motion.button>
      </motion.div>

      {/* Image Section with Loading Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.8 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 lg:w-1/2 h-full flex justify-center lg:justify-end items-center"
      >
        <motion.div
          animate={{ rotate: imageLoaded ? 360 : 0 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex justify-center items-center"
        >
          <Image
            src="/net-zero/hero.png"
            width={800}
            height={800}
            alt="Hero Image"
            className={`object-contain transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            priority={true}
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NetZeroHero;
