import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Steps = () => {
  const process = [
    {
      title: "Comprehensive Assessment",
      description:
        "We conduct a thorough evaluation of your current sustainability performance to identify key areas for improvement.",
      icon: "/tree.svg",
    },
    {
      title: "Ambitious Goal Setting",
      description:
        "Together, we develop achievable sustainability goals that align with your business objectives.",
      icon: "/planet.svg",
    },
    {
      title: "Customized Strategy Development",
      description:
        "We create a tailored roadmap outlining the steps necessary to achieve your goals.",
      icon: "/sun.svg",
    },
    {
      title: "Implementation Support",
      description:
        "Our team provides guidance and resources to help you execute your sustainability strategy effectively.",
      icon: "/leaf.svg",
    },
    {
      title: "Monitoring and Reporting",
      description:
        "We help you track progress, measure impact, and communicate results to stakeholders.",
      icon: "/water-drop.svg",
    },
    {
      title: "Continuous Improvement",
      description:
        "We work with you to refine and adapt your strategy as needed, ensuring long-term success.",
      icon: "/recycle.svg",
    },
  ];

  return (
    <section className="relative container mx-auto px-4 py-16 md:py-24 process-section overflow-hidden">
      {/* Background SVGs */}
      <motion.img
        src="/sun.svg"
        className="absolute top-10 right-10 w-16 h-16 md:w-24 md:h-24 opacity-30"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.img
        src="/cloud.svg"
        className="absolute bottom-10 left-10 w-20 h-20 md:w-32 md:h-32 opacity-30"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <motion.h2
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 md:mb-20 text-center text-emerald-600 relative z-10"
      >
        Our Net Zero Process
      </motion.h2>

      <div className="relative">
        {/* Vertical line in the center (hidden on small screens) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200 hidden md:block"></div>

        {/* Step-by-step process */}
        <div className="space-y-12 md:space-y-32">
          {process.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center process-step ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Card section */}
              <div className="w-full md:w-5/12 px-4 mb-8 md:mb-0 relative z-10">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Card className="transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white/95 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl md:text-2xl font-semibold text-emerald-600 flex items-center">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm md:text-base">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Number and icon in the middle */}
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16 text-white bg-emerald-500 rounded-full border-4 border-white z-20 flex items-center justify-center text-lg md:text-xl font-bold shadow-md"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
              >
                {index + 1}
              </motion.div>

              {/* Empty space for alternating layout on larger screens */}
              <div className="hidden md:block w-5/12 px-4"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional decorative SVGs */}
      <motion.img
        src="/palm.svg"
        className="absolute z-0 top-1/4 left-5 w-12 h-12 md:w-20 md:h-20 opacity-30"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.img
        src="/earth.svg"
        className="absolute bottom-1/4 right-5 w-16 h-16 md:w-24 md:h-24 opacity-30"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default Steps;
