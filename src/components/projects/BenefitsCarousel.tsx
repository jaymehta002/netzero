import React, { useEffect, useRef } from "react";
import { Leaf, BarChart, Zap, Sprout, LucideIcon } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const benefits: Benefit[] = [
  {
    title: "Environmental Impact",
    description:
      "Reduce your carbon footprint and contribute to a cleaner, healthier planet.",
    icon: Leaf,
    color: "emerald",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Meet your carbon emissions reduction targets and avoid penalties.",
    icon: BarChart,
    color: "blue",
  },
  {
    title: "Enhanced Reputation",
    description:
      "Demonstrate your commitment to sustainability and corporate social responsibility.",
    icon: Zap,
    color: "purple",
  },
  {
    title: "Financial Returns",
    description:
      "Generate potential financial returns through carbon credit trading.",
    icon: Sprout,
    color: "green",
  },
];

const BenefitCard: React.FC<{ benefit: Benefit }> = ({ benefit }) => {
  return (
    <div
      className={`w-full h-full bg-white rounded-lg shadow-xl p-4 sm:p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl`}
    >
      <benefit.icon
        className={`w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 text-${benefit.color}-500`}
      />
      <h3
        className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-${benefit.color}-700 text-center`}
      >
        {benefit.title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 text-center">
        {benefit.description}
      </p>
    </div>
  );
};

const ResponsiveBenefitsCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(
      (card): card is HTMLDivElement => card !== null
    );

    if (cards.length === benefits.length) {
      const animateCards = () => {
        const isMobile = window.innerWidth < 640;
        const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

        gsap.set(cards, { x: 0, y: 0, opacity: 1 });

        ScrollTrigger.create({
          trigger: carouselRef.current,
          start: isMobile ? "top top" : "top center",
          end: isMobile ? "bottom top" : "bottom center",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            if (isMobile) {
              gsap.to(cards[0], { x: -100 * progress, opacity: 1 - progress });
              gsap.to(cards[1], { x: -50 * progress, opacity: 1 - progress });
              gsap.to(cards[2], { x: 50 * progress, opacity: 1 - progress });
              gsap.to(cards[3], { x: 100 * progress, opacity: 1 - progress });
            } else if (isTablet) {
              gsap.to(cards[0], { x: -150 * progress, opacity: 1 - progress });
              gsap.to(cards[1], { x: -75 * progress, opacity: 1 - progress });
              gsap.to(cards[2], { x: 75 * progress, opacity: 1 - progress });
              gsap.to(cards[3], { x: 150 * progress, opacity: 1 - progress });
            } else {
              gsap.to(cards[0], { x: -150 * progress, opacity: 1 - progress });
              gsap.to(cards[1], { x: -150 * progress, opacity: 1 - progress });
              gsap.to(cards[2], { x: 150 * progress, opacity: 1 - progress });
              gsap.to(cards[3], { x: 150 * progress, opacity: 1 - progress });
            }
          },
        });
      };

      animateCards();
      window.addEventListener("resize", animateCards);

      return () => {
        window.removeEventListener("resize", animateCards);
      };
    }
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-gray-800 text-center">
        Benefits of Carbon Credit Trading
      </h2>
      <div
        ref={carouselRef}
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
      >
        {benefits.map((benefit, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
            <BenefitCard benefit={benefit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveBenefitsCarousel;
