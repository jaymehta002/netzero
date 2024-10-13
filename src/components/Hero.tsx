import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const WaveAnimation = React.memo(() => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 100]);
  const y3 = useTransform(scrollY, [0, 300], [0, 150]);

  const waves = useMemo(
    () => [
      {
        fill: "#4CAF50",
        opacity: 0.7,
        y: y1,
        duration: "10s",
      },
      {
        fill: "#66BB6A",
        opacity: 0.5,
        y: y2,
        duration: "8s",
      },
      {
        fill: "#81C784",
        opacity: 0.3,
        y: y3,
        duration: "12s",
      },
    ],
    [y1, y2, y3]
  );

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden h-64 sm:h-96 md:h-128 lg:h-160">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {waves.map((wave, index) => (
          <motion.path
            key={index}
            fill={wave.fill}
            fillOpacity={wave.opacity}
            d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,144C672,117,768,75,864,80C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            style={{ y: wave.y }}
          >
            <animate
              attributeName="d"
              dur={wave.duration}
              repeatCount="indefinite"
              values="
                M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,144C672,117,768,75,864,80C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,144C672,128,768,96,864,101.3C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,144C672,117,768,75,864,80C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </motion.path>
        ))}
      </svg>
    </div>
  );
});

WaveAnimation.displayName = "WaveAnimation";

const HeroSection = () => {
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

  const words = useMemo(() => ["Driving", "Sustainable", "Change"], []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <WaveAnimation />

      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-800"
          variants={itemVariants}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2 sm:mr-3"
              variants={itemVariants}
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
    </section>
  );
};

export default HeroSection;
