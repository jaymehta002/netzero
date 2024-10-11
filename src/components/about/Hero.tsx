"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const WorldMap = () => (
  <Image src="/world.svg" alt="World Map" width={1000} height={500} />
  // <svg
  //   viewBox="0 0 1000 500"
  //   className="w-full h-full opacity-20"
  //   fill="none"
  //   stroke="currentColor"
  //   strokeWidth="2"
  // >
  //   {/* World Map Path - Simplified Countries (Add more as needed) */}
  //   <motion.path
  //     d="M78,179 L131,179 L137,210 L120,239 L102,238 L89,250 L77,228 L68,230 L58,216 Z"
  //     initial={{ pathLength: 0, opacity: 0 }}
  //     animate={{ pathLength: 1, opacity: 1 }}
  //     transition={{ duration: 2, ease: "easeInOut" }}
  //   />
  //   <motion.path
  //     d="M462,37 L476,34 L478,23 L492,24 L495,32 L531,7 L551,16 L576,11 L585,18 L597,8 L616,15 L626,27 L643,29 L679,55 L684,81 L690,89 L734,96 L750,131 L762,140 L778,138 L796,149 L812,191 L795,212 L789,235 L781,251 L810,307 L839,324 L857,353 L851,370 L868,393 L875,420 L890,428 L872,439 L871,450 L899,472 L893,481 L903,490 L889,499 L864,494 L863,480 L847,470 L836,471 L824,462 L798,462 L780,449 L754,449 L743,438 L713,441 L697,429 L669,429 L653,423 L640,389 L620,376 L620,362 L606,354 L596,336 L586,331 L569,336 L566,343 L555,339 L540,344 L530,332 L514,340 L503,334 L492,342 L462,317 L449,318 L446,308 L433,308 L423,297 L411,298 L399,284 L379,279 L356,287 L349,279 L333,280 L323,274 L311,284 L286,276 L274,249 L264,239 L251,239 L241,229 L242,216 L233,209 L225,195 L199,188 L191,175 L186,156 L177,148 L171,131 L182,116 L201,110 L216,97 L234,96 L243,87 L260,86 L267,76 L281,71 L295,71 L320,86 L334,81 L344,85 L366,81 L374,85 L391,82 L404,88 L431,83 L444,68 L457,62 L468,50 Z"
  //     initial={{ pathLength: 0, opacity: 0 }}
  //     animate={{ pathLength: 1, opacity: 1 }}
  //     transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
  //   />
  //   {/* Add more countries or regions */}
  // </svg>
);

const FloatingParticle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-green-400 rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [0, -100, -200],
      x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
    }}
    transition={{
      duration: 4,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const EnhancedHero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const stats = [
    { value: "1M+", label: "CO₂ Saved" },
    { value: "50+", label: "Countries" },
    { value: "100K+", label: "Users" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-[#e3f2f9] to-[#c8e0eb] dark:from-[#1e2f37] dark:to-[#0f1d28] flex flex-col items-center justify-center">
      {/* Background Particles */}
      {[...Array(20)].map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.2} />
      ))}

      {/* Animated World Map */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <WorldMap />
      </div>

      {/* Main Content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="relative z-10 flex flex-col gap-8 items-center justify-center px-4 py-12"
      >
        {/* Headline */}
        <motion.h1
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className="text-5xl md:text-7xl font-black text-center text-gray-800 dark:text-white font-sans"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          Revolutionizing
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Green Technology
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className="font-medium text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 max-w-2xl"
        >
          Empowering a sustainable future with cutting-edge solutions and global
          impact.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
        >
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Join the Revolution
          </Button>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className="mt-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStatIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-400">
                {stats[currentStatIndex].value}
              </div>
              <div className="text-lg text-gray-500 dark:text-gray-400">
                {stats[currentStatIndex].label}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnhancedHero;
