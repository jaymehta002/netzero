"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  const textColor = useTransform(scrollY, [0, 100], ["#e0e0e0", "#333333"]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.8]);
  const navItemsY = useTransform(scrollY, [0, 100], [0, -10]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const navItems = ["Home", "About", "Net Zero", "Projects", "Contact"];

  return (
    <motion.header className="fixed w-full z-50" style={{ backgroundColor }}>
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex justify-between items-center">
          <motion.div style={{ scale: logoScale }}>
            <Link href="/" className="text-2xl font-bold">
              <Image src="/logo.svg" alt="Terrasols" width={150} height={50} />
            </Link>
          </motion.div>
          <motion.nav
            className="hidden md:flex space-x-6"
            style={{ y: navItemsY }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="text-lg font-medium hover:text-primary transition-colors"
                  style={{ color: textColor.get() }}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
          <motion.button
            className="md:hidden z-50"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: textColor.get() }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </motion.button>
        </div>
      </div>
      <motion.div
        className="fixed top-0 right-0 h-screen w-full md:w-64 bg-white shadow-lg p-6"
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex justify-center items-center flex-col space-y-16 mt-16">
          {navItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className="text-4xl  uppercase  font-medium text-gray-800 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
