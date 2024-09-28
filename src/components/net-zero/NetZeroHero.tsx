import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const NetZeroHero = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Refs for image and overlay
  const imageRef = useRef(null);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <motion.section
      className="relative h-screen flex items-end justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Framer Motion animation */}
      <motion.div
        className="absolute inset-0 z-0"
        ref={imageRef}
        style={{ y: parallaxY }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/net-zero.jpg"
          alt="Net Zero hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-20"
          style={{ opacity: overlayOpacity }}
        ></motion.div>
      </motion.div>

      {/* Centered Text */}
      <div className="container flex flex-col justify-between mx-auto px-4 z-10 text-white text-center">
        <motion.h1
          className="text-5xl md:text-[115px] font-bold mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          NETZERO - SOLUTIONS
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-2 items-center mx-8 justify-between">
          <motion.p
            className="text-xl md:text-2xl font-normal"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Crafting a Sustainable Future: Your Tailored Sustainability Roadmap
          </motion.p>
          <motion.p
            className="flex items-center gap-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            EXPLORE <ArrowDown />
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default NetZeroHero;
