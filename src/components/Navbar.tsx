"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 0);
    });
  }, [scrollY]);
  return (
    <motion.header
      className="fixed w-full px-4 py-6 flex justify-between  items-center z-[999] transition-colors duration-300"
      initial={false}
      animate={{ opacity: 1 }}
      style={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.2)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none", // Ensures cross-browser support
      }}
    >
      <Link href="/" className="text-2xl font-bold text-primary">
        Terrasols.earth
      </Link>
      <button
        className="lg:hidden"
        // onClick={() =>
        //   document.getElementById("mobileMenu").classList.toggle("hidden")
        // }
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <ul
        id="mobileMenu"
        className="hidden w-full lg:flex lg:w-auto lg:space-x-8 mt-4 lg:mt-0"
      >
        <li>
          <Link
            href="/"
            className="block py-2 hover:text-gray-200 transition-colors"
            style={{
              color: isScrolled ? "black" : "white",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block py-2 hover:text-gray-200 transition-colors"
            style={{
              color: isScrolled ? "black" : "white",
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/net-zero"
            className="block py-2 hover:text-gray-200 transition-colors"
            style={{
              color: isScrolled ? "black" : "white",
            }}
          >
            Net Zero
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="block py-2   hover:text-gray-200 transition-colors"
            style={{
              color: isScrolled ? "black" : "white",
            }}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block py-2 hover:text-gray-200 transition-colors"
            style={{
              color: isScrolled ? "black" : "white",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </motion.header>
  );
};

export default Navbar;
