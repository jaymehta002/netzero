import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const steps = [
    {
      title: "Project Development",
      description:
        "Develop high-quality carbon credit projects, like reforestation and renewable energy initiatives.",
      icon: "🌱",
    },
    {
      title: "Verification",
      description:
        "Ensure projects meet rigorous standards and are verified by independent third parties.",
      icon: "✔️",
    },
    {
      title: "Issuance & Trading",
      description:
        "Facilitate the issuance and trading of carbon credits to offset emissions.",
      icon: "💼",
    },
  ];

  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    stepsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 100,
            rotationX: 45,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="bg-white py-16 px-6 min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-emerald-600">
        Simple 3-Step Process
      </h2>

      {/* Step container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => {
              stepsRef.current[index] = el; // Fixed ref assignment without return
            }}
            className="bg-gray-50 rounded-lg shadow-lg p-8 text-center transition-transform transform hover:scale-110"
          >
            <div className="text-4xl mb-6">{step.icon}</div>
            <h3 className="text-2xl font-semibold text-emerald-600 mb-4">
              {step.title}
            </h3>
            <p className="text-gray-600 text-lg">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
