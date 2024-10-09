import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

const LandingGraph = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.3, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: 0.3, duration: 0.01 },
      },
    },
  };

  return (
    <motion.section
      className="container mx-auto py-16 px-4 lg:px-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl shadow-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="mb-12 text-center" variants={childVariants}>
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Reducing Carbon Emissions for a Sustainable Future
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          At Terrasols, we empower businesses to significantly reduce their
          carbon footprint. See how our solutions make a difference over time.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-10 items-center">
        <motion.div
          className="relative text-sm max-w-lg mx-auto lg:mx-0"
          variants={childVariants}
        >
          <svg
            viewBox="0 0 577 211"
            className="w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.rect
              variants={draw}
              initial="hidden"
              animate="visible"
              x="0.5"
              y="187"
              width="576"
              height="1"
              stroke="url(#paint0_linear_280_1304)"
            />
            <motion.line
              variants={draw}
              initial="hidden"
              animate="visible"
              x1="0.957328"
              y1="168.502"
              x2="502.957"
              y2="125.502"
              stroke="url(#paint1_linear_280_1304)"
              strokeDasharray="4 4"
            />
            <motion.path
              variants={draw}
              initial="hidden"
              animate="visible"
              d="M1.5 177C149.455 159.787 424 116 502.5 1"
              stroke="url(#paint2_linear_280_1304)"
              strokeDasharray="4 4"
            />
            <defs>
              <linearGradient
                id="paint0_linear_280_1304"
                x1="0.499992"
                y1="187.954"
                x2="576.5"
                y2="187.81"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#18181B" />
                <stop offset="0.177083" stopColor="#71717A" />
                <stop offset="1" stopColor="#09090B" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_280_1304"
                x1="1"
                y1="169"
                x2="503"
                y2="126"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3178C6" stopOpacity="0.25" />
                <stop offset="0.515625" stopColor="#10B981" />
                <stop offset="1" stopColor="#10B981" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_280_1304"
                x1="502.5"
                y1="0.9998"
                x2="2.49996"
                y2="187"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EF4444" />
                <stop offset="0.489583" stopColor="#EF4444" />
                <stop offset="1" stopColor="#EF4444" stopOpacity="0.25" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute left-0 top-0 text-gray-300"
          >
            <span className="flex items-center gap-1 font-semibold text-xl">
              <span>Carbon Emissions</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 11 14"
                  className="fill-current h-4 text-gray-300"
                >
                  <path d="M9.31328 2.625H9.75078V3.0625V9.1875V9.625H8.87578V9.1875V4.11797L1.96602 11.0277L1.65703 11.3367L1.03906 10.7187L1.34805 10.4098L8.25781 3.5H3.18828H2.75078V2.625H3.18828H9.31328Z" />
                </svg>
              </span>
            </span>
            <span className="text-gray-400 text-sm">(Lower is better)</span>

            <div className="mt-4">
              <div className="flex gap-1.5 items-center">
                <span className="w-3 h-3 inline-block bg-red-500 rounded-full"></span>
                <span className="text-gray-300 font-medium">
                  Without Terrasols
                </span>
              </div>
              <div className="flex gap-1.5 items-center mt-2">
                <span className="w-3 h-3 inline-block bg-green-500 rounded-full"></span>
                <span className="text-gray-300 font-medium">
                  With Terrasols
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto lg:mx-0"
          variants={childVariants}
        >
          <h3 className="text-3xl font-semibold mb-6 text-green-400">
            Transforming Sustainability Efforts
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            Our innovative solutions help businesses dramatically reduce their
            carbon emissions over time. Unlike the traditional approach, which
            often leads to increased emissions, Terrasols' strategies result in
            a consistent downward trend in your carbon footprint.
          </p>
          <motion.div
            className="relative inline-block"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.a
              href="/solutions"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-shadow duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Solutions
              <ArrowRight className="ml-2" size={20} />
            </motion.a>
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 bg-gray-800 p-6 rounded-xl"
        variants={childVariants}
      >
        <div className="flex items-start space-x-4">
          <Leaf className="text-green-400 flex-shrink-0 mt-1" size={24} />
          <div>
            <h4 className="text-xl font-semibold mb-2 text-green-400">
              Our Impact
            </h4>
            <p className="text-gray-300">
              By partnering with Terrasols, businesses have achieved an average
              40% reduction in carbon emissions within the first year. Our
              holistic approach not only benefits the environment but also
              improves operational efficiency and drives long-term growth.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default LandingGraph;
