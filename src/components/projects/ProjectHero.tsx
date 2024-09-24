import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ProjectHero = () => {
  const heroRef = useRef(null);
  const elRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current, // Triggering based on the heroRef
        start: "top bottom",
        end: "bottom top", // Adjust the end position based on your layout
        scrub: true, // Smoothly animate the text as you scroll
      },
    });

    tl.fromTo(
      elRef.current,
      { x: 0, zoom: 0, opacity: 0 }, // Start from the left
      { x: 0, zoom: 1, opacity: 1, duration: 1.8 } // Move to its original position
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="bg-cover  bg-center h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center"
      >
        <motion.h1 ref={elRef} className="text-9xl font-bold mb-6">
          <span className="text-primary">Carbon</span>{" "}
          <span className="text-white bg-primary">Credits</span>
        </motion.h1>
        <motion.p className="text-4xl">
          Generate carbon credits through our innovative projects.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ProjectHero;
