import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BarChart2, Globe, Leaf } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#61ff7e] to-[#04773b] opacity-0"
        initial={false}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
      />
      <Icon className="text-[#04773b] mb-4 h-10 w-10" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex items-center text-[#04773b]"
          >
            <span className="mr-2">Learn More</span>
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Services() {
  const [activeTab, setActiveTab] = useState("track");

  const data = [
    {
      title: "Track",
      description:
        "Accurately measure emissions across all scopes—direct, indirect, and other sources—giving you a complete view of your carbon footprint.",
      image: "/track.webp",
      icon: BarChart2,
    },
    {
      title: "Monitor",
      description:
        "Access real-time data to continuously monitor your emissions, helping you make immediate, informed decisions for effective carbon management.",
      image: "/monitor.webp",
      icon: Leaf,
    },
    {
      title: "Report",
      description:
        "Generate customized reports that align with industry standards and global sustainability frameworks, ensuring compliance and demonstrating your commitment to reducing environmental impact.",
      image: "/report.webp",
      icon: Globe,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gray-100 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-[#61ff7e] to-[#04773b] opacity-10" />
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Track Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#61ff7e] to-[#04773b]">
              Carbon Emissions
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Easily manage and reduce your carbon footprint with our all-in-one
            platform. Get precise insights into your emissions, track progress,
            and ensure compliance for a sustainable future.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.map((item, index) => (
                <ServiceCard key={index} {...item} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#61ff7e] to-[#04773b] rounded-xl opacity-75 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <Image
                src="/dashboard.png"
                alt="Portfolio Dashboard"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>

            <div className="mt-8">
              <div className="flex justify-center space-x-4">
                {data.map((item) => (
                  <motion.button
                    key={item.title.toLowerCase()}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeTab === item.title.toLowerCase()
                        ? "bg-[#04773b] text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setActiveTab(item.title.toLowerCase())}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                  </motion.button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-center text-gray-700"
                >
                  {
                    data.find((item) => item.title.toLowerCase() === activeTab)
                      ?.description
                  }
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
