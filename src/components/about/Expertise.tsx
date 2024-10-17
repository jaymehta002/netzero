"use client";

import { motion } from "framer-motion";
import { Leaf, Users, Rocket } from "lucide-react"; // Import icons
import Image from "next/image";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Satellite SVG component
const Satellite = () => (
  <Image src="/earth.svg" alt="Satellite" width={64} height={64} />
);

const Expertise = () => {
  return (
    <motion.section
      className="py-24 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      {/* Background blobs */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70"
            style={{
              background: `radial-gradient(circle, rgba(${
                Math.random() * 255
              },${Math.random() * 255},${Math.random() * 255},0.8) 0%, rgba(${
                Math.random() * 255
              },${Math.random() * 255},${Math.random() * 255},0) 70%)`,
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* <motion.div
          className="absolute z-10"
          style={
            {
              // top: "50%",
              // left: "33%",
              // marginTop: "-250px",
              // marginLeft: "-250px",
            }
          }
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            animate={{}}
            transition={
              {
                // duration: 20,
                // repeat: Infinity,
                // ease: "linear",
              }
            }
          >
            <Satellite />
          </motion.div>
        </motion.div> */}
        {/* <motion.div className="" variants={fadeIn}> */}
        <div className="flex items-center justify-center mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Satellite />
          </motion.div>
          {/* Moved Satellite component here */}
          <h3 className="text-6xl  font-extrabold  text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
            ur Expertise
          </h3>
        </div>
        {/* </motion.div> */}
        {/* Expertise Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={staggerChildren}
        >
          {[
            {
              title: "Tailored Sustainability Strategies",
              icon: <Leaf className="text-green-600 text-6xl mb-6" />,
              description:
                "Crafting customized plans for industry-specific sustainable development, ensuring a transformative impact for a greener future.",
            },
            {
              title: "Inclusive Participation",
              icon: <Users className="text-blue-600 text-6xl mb-6" />,
              description:
                "Engaging all stakeholders to build a collaborative and inclusive sustainable world for businesses, communities, and individuals alike.",
            },
            {
              title: "Technology-Driven Transformation",
              icon: <Rocket className="text-purple-600 text-6xl mb-6" />,
              description:
                "Harnessing digital solutions and advanced technologies to accelerate sustainability and drive impactful change across industries.",
            },
          ].map((expertise, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden group"
              variants={fadeIn}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div className="relative z-10">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {expertise.icon}
                </motion.div>
                <h3 className="font-bold text-2xl text-gray-900 mb-4">
                  {expertise.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {expertise.description}
                </p>
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-lg font-semibold transition duration-300 hover:from-green-600 hover:to-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;
