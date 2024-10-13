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
        trigger: heroRef.current,
        start: "top bottom", // When the top of the hero section reaches the bottom of the viewport
        end: "bottom top", // When the bottom of the hero section reaches the top of the viewport
        scrub: true, // Smooth animation on scroll
      },
    });

    // Parallax effect for background
    tl.to(heroRef.current, {
      backgroundPosition: "center 80%", // Moves background upwards during scroll
      ease: "none",
      duration: 1.8,
    });

    // Parallax effect for text
    tl.fromTo(elRef.current, { y: 0 }, { y: -50, ease: "none", duration: 1.8 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center p-8"
      style={{
        backgroundImage: 'url("/project.jpg")', // Replace with your background image
        backgroundAttachment: "fixed", // Parallax effect
      }}
    >
      {/* Fading Background Mask */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center" // Centers content vertically and horizontally
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          ref={elRef}
          className="md:text-6xl text-3xl font-bold mb-6 text-white" // Larger, bold heading
        >
          <span className="text-white">Carbon</span>{" "}
          <span className="text-green-300">Credits</span>
        </motion.h1>
        <motion.p className="md:text-2xl text-lg text-white max-w-2xl leading-relaxed">
          Generate carbon credits through our innovative projects and help shape
          a sustainable future.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ProjectHero;
