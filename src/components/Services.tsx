// "use client";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import Image from "next/image";

// const services = [
//   {
//     title: "Sustainability Consulting",
//     description:
//       "Strategy development, climate risk assessment, and ESG reporting.",
//     image: "/sustainablity.webp",
//     content:
//       "Our team of experts provides cutting-edge solutions to help businesses navigate the complex world of sustainability.",
//     globe: true,
//     link: "/net-zero",
//   },
//   {
//     title: "Carbon Credit Generation",
//     description:
//       "Project development, trading, and verification for emission offsetting.",
//     image: "/assets/carbonCredit.png",
//     content:
//       "We specialize in developing and managing carbon offset projects across various sectors.",
//     link: "/projects",
//   },
//   {
//     title: "Documentation and Registration",
//     description:
//       "Streamline ISO certifications and carbon footprint reporting.",
//     image: "/assets/documentation.png",
//     content:
//       "Navigate the complex world of environmental certifications with ease.",
//     link: "/projects",
//   },
// ];

// const ServiceCard = ({
//   service,
// }: {
//   service: {
//     title: string;
//     description: string;
//     image: string;
//     content: string;
//     link: string;
//   };
// }) => {
//   const router = useRouter();

//   return (
//     <motion.div
//       className="relative w-full h-auto rounded-2xl p-5 xl:p-8  transition-transform duration-300  overflow-hidden group"
//       whileHover={{ scale: 1.05 }}
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Image
//         width={500}
//         height={300}
//         src={service.image}
//         alt={service.title}
//         className="w-full  object-cover rounded-md mb-4"
//       />
//       <h3 className="text-lg font-bold text-gray-700 py-5">{service.title}</h3>
//       <p className="text-xs font-normal text-gray-500 mb-8">
//         {service.description}
//       </p>
//       <button
//         className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs font-semibold flex items-center justify-between transition-all duration-500 hover:bg-gray-200"
//         onClick={() => router.push(service.link)}
//       >
//         View More
//         <svg
//           width="6"
//           height="10"
//           viewBox="0 0 6 10"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
//             stroke="currentColor"
//             strokeWidth="1.6"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></path>
//         </svg>
//       </button>
//     </motion.div>
//   );
// };

// const Services = () => {
//   const serviceRef = useRef(null);

//   useEffect(() => {
//     const element = serviceRef.current;
//     if (!element) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         element,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
//       );
//     });

//     return () => ctx.revert(); // Cleanup on unmount
//   }, []);

//   return (
//     <section className="py-24 bg-gradient-to-r ">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-14 text-center">
//           <h2 className="text-4xl text-center md:text-8xl font-bold text-gray-900 leading-[3.25rem] mb-6 lg:max-w-3xl lg:mx-auto">
//             Our Services
//           </h2>
//           <p className="text-lg font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">
//             Terrasols Solutions Private Limited is a sustainability consulting
//             company dedicated to creating positive changes. We have a team of
//             experienced professionals and a strong focus on innovation. We
//             provide a wide range of services tailored to meet our clients&apos;
//             specific needs
//           </p>
//         </div>

//         <motion.div
//           ref={serviceRef}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
//         >
//           {services.map((service, index) => (
//             <ServiceCard key={index} service={service} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Services() {
  const data = [
    {
      title: "Sustainability Consulting",
      description:
        "Strategy development, climate risk assessment, and ESG reporting.",
      image: "/sustainablity.webp",
      content:
        "Our team of experts provides cutting-edge solutions to help businesses navigate the complex world of sustainability.",
      globe: true,
      link: "/net-zero",
    },
    {
      title: "Carbon Credit Generation",
      description:
        "Project development, trading, and verification for emission offsetting.",
      image: "/assets/carbonCredit.png",
      content:
        "We specialize in developing and managing carbon offset projects across various sectors.",
      link: "/projects",
    },
    {
      title: "Documentation and Registration",
      description:
        "Streamline ISO certifications and carbon footprint reporting.",
      image: "/assets/documentation.png",
      content:
        "Navigate the complex world of environmental certifications with ease.",
      link: "/projects",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12">
          {/* <h3 className="text-purple-600 font-semibold mb-4">OUR FEATURES</h3> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Track your Carbon Emission
          </h2>
          <p className="text-gray-600 mb-8">
            Terrasols Solutions Private Limited is a sustainability consulting
            company dedicated to creating positive changes. We have a team of
            experienced professionals and a strong focus on innovation. We
            provide a wide range of services tailored to meet our clients&apos;
            specific needs
          </p>
          <ul className="space-y-4">
            {data.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>{item.title}</strong>: {item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <Image
            src="/dashboard.png"
            alt="Portfolio Dashboard"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
