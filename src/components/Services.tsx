import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart2, Globe, Leaf } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ServiceItem = {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
};

const data: ServiceItem[] = [
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

const ServiceCard: React.FC<ServiceItem & { index: number }> = React.memo(
  ({ title, description, icon: Icon, index }) => {
    const router = useRouter();

    const handleClick = useCallback(() => {
      router.push("/net-zero");
    }, [router]);

    return (
      <motion.div
        onClick={handleClick}
        className="relative flex bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
      >
        <Icon className="text-secondary mb-4 h-24 w-24 mr-4" />
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-xl font-bold mb-3 text-black text-center sm:text-left">
            {title}
          </h3>
          <p className="text-gray-900 mb-4 text-sm text-center sm:text-left">
            {description}
          </p>
        </div>
      </motion.div>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("track");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const activeDescription = useMemo(
    () =>
      data.find((item) => item.title.toLowerCase() === activeTab)?.description,
    [activeTab]
  );

  return (
    <div className="relative overflow-hidden bg-gray-50 min-h-screen py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#61ff7e] to-[#04773b] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-800">
            Manage Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#61ff7e] to-[#04773b]">
              Carbon Footprint
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Empower your organization with our innovative tools to track,
            monitor, and report carbon emissions. Join the movement for a
            sustainable future.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 gap-8">
              {data.map((item, index) => (
                <ServiceCard key={item.title} {...item} index={index} />
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
                className="absolute inset-0 bg-gradient-to-r from-[#61ff7e] to-[#04773b] rounded-2xl opacity-70 blur-2xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
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
                className="rounded-2xl shadow-xl z-10 relative"
                priority
              />
            </div>

            <div className="mt-10">
              <div className="flex justify-center space-x-4">
                {data.map((item) => (
                  <motion.button
                    key={item.title.toLowerCase()}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === item.title.toLowerCase()
                        ? "bg-[#04773b] text-white shadow-lg"
                        : "bg-gray-300 text-gray-700 hover:bg-gray-400"
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
                  className="mt-6 text-center text-gray-600 text-lg"
                >
                  {activeDescription}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
