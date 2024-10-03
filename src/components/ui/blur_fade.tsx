"use client";

import { motion } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  x?: number;
  y?: number;
}

export default function BlurFade({
  children,
  className,
  x = 0,
  y = 20,
}: BlurFadeProps) {
  const blur = "10px";

  return (
    <motion.div
      initial={{ y: y, x: x, opacity: 0, filter: `blur(${blur})` }}
      whileInView={{ x: 0, y: 0, opacity: 1, filter: `blur(0px)` }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{
        duration: 0.8,
        ease: "easeIn",
        stiffness: 50,
        type: "spring",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
