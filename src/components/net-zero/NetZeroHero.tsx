"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useSpring, animated } from "react-spring";

const NetZeroHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (imageLoaded) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [imageLoaded, controls]);

  const [{ rotateY }, set] = useSpring(() => ({ rotateY: 0 }));

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden px-4 lg:px-12 bg-gradient-to-br from-blue-50 via-green-50 to-gray-50">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              transition: {
                y: {
                  repeat: Infinity,
                  duration: 3 + Math.random() * 2,
                  ease: "easeInOut",
                },
                x: {
                  repeat: Infinity,
                  duration: 5 + Math.random() * 3,
                  ease: "easeInOut",
                },
                rotate: {
                  repeat: Infinity,
                  duration: 10 + Math.random() * 5,
                  ease: "linear",
                },
              },
            }}
          >
            <div
              className={`w-4 h-4 rounded-full ${
                index % 3 === 0
                  ? "bg-green-300"
                  : index % 3 === 1
                  ? "bg-blue-300"
                  : "bg-yellow-300"
              }`}
            />
          </motion.div>
        ))}
      </motion.div>

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
        animate={controls}
        transition={{ duration: 0.8 }}
        className="relative z-10 lg:w-1/2 h-full flex justify-center lg:justify-end items-center"
      >
        <animated.div
          style={{ transform: rotateY.interpolate((r) => `rotateY(${r}deg)`) }}
          onMouseMove={({ clientX, currentTarget }) => {
            const { left, width } = currentTarget.getBoundingClientRect();
            const x = clientX - left;
            set({ rotateY: (x / width) * 30 - 15 });
          }}
          onMouseLeave={() => set({ rotateY: 0 })}
          className="w-[80%] h-auto flex items-center justify-center"
        >
          {!imageLoaded && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 border-t-4 border-green-500 rounded-full"
            />
          )}
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
        </animated.div>
      </motion.div>

      {/* Floating Earth Animation */}
      <motion.div
        className="absolute top-10 right-10 z-20 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          },
          rotate: {
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          },
        }}
      >
        <Image
          src="/earth.png"
          width={100}
          height={100}
          alt="Floating Earth"
          className="opacity-70"
        />
      </motion.div>
    </section>
  );
};

export default NetZeroHero;
