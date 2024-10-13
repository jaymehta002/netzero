import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectHero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Parallax effect for background image
    tl.to(imageRef.current, {
      yPercent: 30,
      ease: "none",
    });

    // Parallax effect for text content
    tl.to(
      contentRef.current,
      {
        yPercent: -30,
        ease: "none",
      },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute top-0 left-0 w-full h-120 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/project.jpg")',
          height: "100%", // Slightly taller to allow for parallax movement
        }}
      />

      {/* Fading Background Mask */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10" />

      {/* Content */}
      <motion.div
        ref={contentRef}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="md:text-6xl text-3xl font-bold mb-6 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-white">Carbon</span>{" "}
          <span className="text-green-300">Credits</span>
        </motion.h1>
        <motion.p
          className="md:text-2xl text-lg text-white max-w-2xl leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Generate carbon credits through our innovative projects and help shape
          a sustainable future.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ProjectHero;
