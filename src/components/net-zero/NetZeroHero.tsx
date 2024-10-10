import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const NetZeroHero = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.1]);

  // Ref for image
  const imageRef = useRef(null);

  return (
    <motion.section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Zoom and Parallax effect */}
      <motion.div
        className="absolute inset-0 z-0"
        ref={imageRef}
        style={{ y: parallaxY }}
        initial={{ scale: 1.2, opacity: 0 }}
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
          className="absolute inset-0 bg-gradient-to-b from-white via-transparent"
          style={{ opacity: overlayOpacity }}
        ></motion.div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center space-y-6">
        {/* Blended Text with mix-blend-mode */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-[100px] font-bold tracking-tight leading-tight mix-blend-multiply text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          NETZERO SOLUTIONS
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-2xl md:text-3xl max-w-2xl leading-relaxed text-white mix-blend-lighten"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Crafting a Sustainable Future: Your Tailored Sustainability Roadmap
        </motion.p>

        {/* CTA Button with Arrow Animation */}
        <motion.div
          className="mt-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <button className="text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold text-lg transition">
            Explore Solutions
          </button>
          <motion.div
            className="mt-6 text-white text-2xl"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <ArrowDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NetZeroHero;
