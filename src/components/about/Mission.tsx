"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            {/* Mission Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-col justify-start lg:items-start items-center gap-4 flex"
            >
              {" "}
              <motion.h6
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-secondary text-2xl font-bold leading-relaxed relative"
              >
                Our Mission
                <motion.div
                  className="absolute left-0 bottom-0 h-1 bg-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }} // Animate the width for the underline effect
                  transition={{ duration: 0.5 }}
                />
              </motion.h6>
              <h2 className="text-secondary text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Powering a greener tomorrow
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                To empower businesses and organizations to achieve a sustainable
                future by providing innovative solutions, expert guidance, and
                cutting-edge technologies.
              </p>
            </motion.div>

            {/* Statistics Cards */}
            <div className="w-full flex-col justify-center items-start gap-6 flex">
              <motion.div
                className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.2 }}
              >
                {[
                  {
                    title: "4+ Years",
                    description:
                      "Our team has been working in the same field for 4 years.",
                  },
                  {
                    title: "6+ Projects",
                    description: "Various projects in different fields.",
                  },
                  {
                    title: "100%",
                    description:
                      "Our Dedication to Innovation Wins Understanding",
                  },
                  {
                    title: "99% Happy Clients",
                    description: "Mirrors our Focus on Client Satisfaction.",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      {stat.title}
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Read More Button */}
            <motion.button
              className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-1.5 text-secondary text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                Read More
              </span>
              <svg
                className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                  stroke="#088F8F"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:justify-start justify-center items-start flex">
            <Image
              className="sm:mt-5 sm:ml-5 rounded-3xl"
              src="/about.png"
              alt="About Us image"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
