import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.1">
              <animate
                attributeName="stopColor"
                values="#4CAF50;#81C784;#4CAF50"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#4CAF50" stopOpacity="0.3">
              <animate
                attributeName="stopColor"
                values="#4CAF50;#66BB6A;#4CAF50"
                dur="10s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)">
          <animate
            attributeName="opacity"
            values="0.3;0.1;0.3"
            dur="5s"
            repeatCount="indefinite"
          />
        </rect>
        {[...Array(5)].map((_, index) => (
          <motion.circle
            key={index}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r={`${Math.random() * 5 + 2}%`}
            fill="#4CAF50"
            opacity={Math.random() * 0.2}
            animate={{
              cx: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              cy: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      <BackgroundAnimation />

      <motion.div
        className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-gray-800"
          variants={itemVariants}
        >
          {["Driving", "Sustainable", "Change"].map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-3"
              variants={wordVariants}
            >
              {word === "Sustainable" ? (
                <span className="text-green-600">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mb-6 sm:mb-8"
          variants={itemVariants}
        >
          Your Trusted Partner for a Sustainable Future
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href="/contact">
            <motion.span
              className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium overflow-hidden rounded-lg bg-green-500 text-white transition-all duration-300 ease-out hover:bg-green-600"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(76, 175, 80, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="relative z-10 flex items-center"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-green-500 rounded-full p-1"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1 h-2 bg-green-500 rounded-full mx-auto"
            animate={{
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
