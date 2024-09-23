import React from "react";
import { motion } from "framer-motion";
import { Zap, Users, Globe } from "lucide-react";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Expertise = () => {
  return (
    <motion.section
      className="py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          variants={fadeIn}
        >
          Our Expertise
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerChildren}
        >
          {[
            {
              title: "AI & Machine Learning",
              icon: Zap,
              description:
                "Harnessing the power of artificial intelligence to create smart, adaptive solutions.",
            },
            {
              title: "UX/UI Design",
              icon: Users,
              description:
                "Crafting intuitive and engaging user experiences that delight and inspire.",
            },
            {
              title: "Cloud Solutions",
              icon: Globe,
              description:
                "Building scalable, secure, and efficient cloud infrastructures for modern businesses.",
            },
          ].map((expertise, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-md"
              variants={fadeIn}
            >
              <expertise.icon size={48} className="mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{expertise.title}</h3>
              <p>{expertise.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;
