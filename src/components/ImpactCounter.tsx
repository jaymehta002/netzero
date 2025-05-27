import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ImpactCounterProps {
  icon: string;
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export default function ImpactCounter({ icon, value, suffix = '', label, className = '' }: ImpactCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <motion.div
      ref={counterRef}
      className={`flex flex-col items-center p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-4xl font-bold mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg text-center">{label}</div>
    </motion.div>
  );
} 