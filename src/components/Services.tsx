import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  {
    title: "Sustainability Consulting",
    description:
      "Strategy development, climate risk assessment, and ESG reporting.",
    image: "/sustainability-consulting.jpg",
    content:
      "Our team of experts provides cutting-edge solutions to help businesses navigate the complex world of sustainability.",
    globe: true,
    link: "/net-zero", // Add the link for redirection
  },
  {
    title: "Carbon Credit Generation",
    description:
      "Project development, trading, and verification for emission offsetting.",
    image: "/assets/carbonCredit.png",
    content:
      "We specialize in developing and managing carbon offset projects across various sectors.",
    link: "/projects", // Add the link for redirection
  },
  {
    title: "Documentation and Registration",
    description:
      "Streamline ISO certifications and carbon footprint reporting.",
    image: "/assets/documentation.png",
    content:
      "Navigate the complex world of environmental certifications with ease.",
    link: "/projects", // Add the link for redirection
  },
];

const ServiceCard = ({
  service,
}: {
  service: {
    title: string;
    description: string;
    image: string;
    content: string;
    link: string;
  };
}) => {
  const router = useRouter();

  return (
    <motion.div className="relative w-full h-auto rounded-2xl p-5 xl:p-8 bg-gray-50 transition-transform duration-300">
      <h3 className="text-lg font-bold text-gray-700 py-5">{service.title}</h3>
      <p className="text-xs font-normal text-gray-500 mb-8">
        {service.description}
      </p>
      <button
        className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs font-semibold flex items-center justify-between transition-all duration-500 hover:bg-gray-200"
        onClick={() => router.push(service.link)} // Redirect to the service link
      >
        View More
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </motion.div>
  );
};

const Services = () => {
  const serviceRef = useRef(null);

  useEffect(() => {
    const element = serviceRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
      );
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-8xl font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">
            Our Services
          </h2>
          <p className="text-lg font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">
            Using technology to make finance simpler, smarter, and more
            rewarding.
          </p>
        </div>

        <motion.div
          ref={serviceRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
