"use client";

export default function HeroScrollDemo() {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Background Video and Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/background.mp4"
          className="object-cover h-full w-full"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-8 lg:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight">
          Driving <span className="text-green-500">Sustainable</span> Change
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl mb-6 sm:mb-8">
          Your Partner for a Net-Zero Future
        </p>

        {/* Call-to-Action Button */}
        <a href="/contact" className="relative inline-block px-6 py-3 group">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-lg group-hover:bg-white/20 transition-colors duration-300 ease-in-out"></div>
          <div className="relative flex items-center space-x-2 text-white">
            <span className="font-medium">Get Started</span>
            {/* Arrow icon (replace with the correct icon as needed) */}
            <svg
              className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

// "use client";
// import { ArrowRight } from "lucide-react"; // Only import the ArrowRight icon
// import React from "react";
// import Link from "next/link"; // Use Next.js's Link component
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <motion.section className="relative h-[75vh] sm:h-[85vh] md:h-screen flex items-center justify-center">
//       {/* Background Video with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <video
//           src="/background.mp4"
//           className="object-cover h-full w-full"
//           autoPlay
//           loop
//           muted
//         />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center text-white">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
//           Driving <span className="text-primary">Sustainable</span> Change
//         </h1>
//         <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl">
//           Your Partner for a Net-Zero Future
//         </p>

//         {/* Call-to-Action Button */}
//         <Link href="/contact">
//           <span className="relative inline-block px-6 py-3 group">
//             {/* Blurred background */}
//             <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-lg group-hover:bg-white/20 transition-colors duration-300 ease-in-out"></div>

//             {/* Button content */}
//             <div className="relative flex items-center space-x-2 text-white">
//               <span className="font-medium">Get Started</span>
//               <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
//             </div>
//           </span>
//         </Link>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;
