"use client";

import React from "react";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Patch Animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-gradient-to-r from-green-400 to-blue-500 rounded-full filter blur-3xl opacity-30"
        initial={{ scale: 0.5, x: "-50%", y: "-50%", opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-gradient-to-r from-green-300 to-green-900 rounded-full filter blur-2xl opacity-30"
        initial={{ scale: 0.5, x: "50%", y: "50%", opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900">
          Our Story
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Terrasols Solutions Private Limited is a pioneering sustainability
          consultancy committed to driving positive change. With a team of
          seasoned professionals and a passion for innovation, we offer a
          comprehensive range of services tailored to meet the unique needs of
          our clients. Our approach combines cutting-edge technology with
          sustainable practices, ensuring that our solutions not only meet
          today&apos;s demands but also contribute to a healthier planet for
          future generations.
        </p>
      </div>
    </div>
  );
};

export default Story;
