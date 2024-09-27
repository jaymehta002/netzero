import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SvgMaskImage() {
  const { scrollY } = useScroll();
  const sectionRef = useRef(null); // Reference to the section
  const [isLocked, setIsLocked] = useState(true); // State to control overlay visibility
  const [scrollThresholds, setScrollThresholds] = useState([0, 0]);

  // Use effect to calculate the scroll thresholds based on the section height
  useEffect(() => {
    const handleResize = () => {
      if (sectionRef.current) {
        const sectionHeight = (sectionRef.current as HTMLElement).offsetHeight; // Assert type to HTMLElement
        setScrollThresholds([sectionHeight * 0.7, sectionHeight]); // Set thresholds dynamically
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize); // Recalculate on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up
    };
  }, []);

  // Use transform to scale the SVG based on scroll position
  const scale = useTransform(scrollY, scrollThresholds, [1, 4]);

  // Effect to unlock the screen after the animation is complete
  useEffect(() => {
    if (scrollY.get() >= scrollThresholds[1]) {
      setIsLocked(false); // Unlock the scroll
    }
  }, [scrollY, scrollThresholds]);

  // Lock scrolling
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isLocked]);

  return (
    <div className="relative overflow-hidden w-full h-screen flex items-center justify-center bg-gray-100" ref={sectionRef}>
      {/* Full-Screen Overlay */}
      {isLocked && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <p className="text-xl font-bold">Loading...</p>
        </div>
      )}
      
      <motion.svg
        id="sw-js-blob-svg"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full z-0"
        style={{ scale }} // Dynamically adjust the SVG scale
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%" />
            <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%" />
          </linearGradient>
          {/* Define the clip path using the same blob path */}
          <clipPath id="clip-path">
            <path
              d="M15.8,-20.9C22.5,-20.2,31.4,-19.3,33.5,-15.2C35.5,-11.1,30.6,-3.7,29.6,4.4C28.6,12.4,31.6,21.2,29,26.3C26.4,31.3,18.2,32.7,11.4,31.3C4.6,29.8,-0.8,25.5,-7.3,24C-13.8,22.5,-21.5,23.9,-23.4,20.8C-25.3,17.7,-21.5,10.1,-21.2,3.8C-20.9,-2.5,-24.1,-7.5,-22.4,-9.7C-20.6,-12,-13.8,-11.4,-9.2,-13.2C-4.7,-14.9,-2.3,-18.9,1.1,-20.6C4.5,-22.3,9,-21.7,15.8,-20.9Z"
              transform="translate(100 100)"
            />
          </clipPath>
        </defs>
        {/* Background blob */}
        <path
          fill="url(#sw-gradient)"
          d="M15.8,-20.9C22.5,-20.2,31.4,-19.3,33.5,-15.2C35.5,-11.1,30.6,-3.7,29.6,4.4C28.6,12.4,31.6,21.2,29,26.3C26.4,31.3,18.2,32.7,11.4,31.3C4.6,29.8,-0.8,25.5,-7.3,24C-13.8,22.5,-21.5,23.9,-23.4,20.8C-25.3,17.7,-21.5,10.1,-21.2,3.8C-20.9,-2.5,-24.1,-7.5,-22.4,-9.7C-20.6,-12,-13.8,-11.4,-9.2,-13.2C-4.7,-14.9,-2.3,-18.9,1.1,-20.6C4.5,-22.3,9,-21.7,15.8,-20.9Z"
          transform="translate(100 100)"
        />
        {/* Image clipped to the blob shape */}
        <foreignObject x="0" y="0" width="100%" height="100%">
          <div
            style={{
              width: "100%",
              height: "100%",
              clipPath: "url(#clip-path)",
            }}
          >
            <Image
              src="/team/jay.png"
              alt="Masked Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </foreignObject>
      </motion.svg>
    </div>
  );
}
