"use client";
import React from "react";
import { motion } from "framer-motion";

// Define animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Meet Our Visionaries
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        {[
          {
            name: "Emily Chen",
            role: "Founder & CEO",
            image:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
          },
          {
            name: "Michael Rodriguez",
            role: "Chief Technology Officer",
            image:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
          },
          {
            name: "Sarah Thompson",
            role: "Head of Design",
            image:
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
          },
        ].map((member, index) => (
          <motion.div key={index} className="text-center" variants={fadeIn}>
            <motion.img
              src={member.image}
              alt={`Portrait of ${member.name}`}
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
