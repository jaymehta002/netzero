// components/PageTransition.js
"use client";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -50,
  },
};

const PageTransition = ({
  children,
  key,
}: {
  children: React.ReactNode;
  key: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.5 }} // Adjust duration as needed
        className="transition-container" // Optional: add styles for the container
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
