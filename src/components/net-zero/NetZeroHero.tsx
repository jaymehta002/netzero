"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
const NetZeroHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const controls = useAnimation();
  const router = useRouter();
  useEffect(() => {
    if (imageLoaded) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [imageLoaded, controls]);

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center md:justify-between px-4 sm:px-8 lg:px-16 py-12 lg:py-20 bg-gradient-to-br from-green-50 via-blue-50 to-gray-50">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 space-y-6 text-center lg:text-left  lg:mb-0"
      >
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-800 leading-tight"
        >
          NETZERO <span className="text-green-600">SOLUTIONS</span>
        </motion.h1>
        <motion.p
          whileHover={{ scale: 1.05 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-600 max-w-xl"
        >
          Crafting a Sustainable Future: Your Tailored Sustainability Roadmap
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#22c55e" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/projects")}
          className="bg-green-500 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg transition duration-300 text-base sm:text-lg"
        >
          Start Your Journey
        </motion.button>
      </motion.div>

      {/* Image Section with Loading Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.8 }}
        transition={{ duration: 0.8 }}
        className="relative w-full lg:w-1/2 h-full flex justify-center lg:justify-end items-center  lg:mt-0"
      >
        <motion.div
          animate={{ rotate: imageLoaded ? 360 : 0 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="w-full "
        >
          <Image
            src="/net-zero/hero.png"
            width={800}
            height={800}
            alt="Hero Image"
            className={`object-contain transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } w-full h-auto`}
            priority={true}
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NetZeroHero;
