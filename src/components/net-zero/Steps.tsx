import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Steps = () => {
  const process = [
    {
      title: "Comprehensive Assessment",
      description:
        "We conduct a thorough evaluation of your current sustainability performance to identify key areas for improvement.",
    },
    {
      title: "Ambitious Goal Setting",
      description:
        "Together, we develop achievable sustainability goals that align with your business objectives.",
    },
    {
      title: "Customized Strategy Development",
      description:
        "We create a tailored roadmap outlining the steps necessary to achieve your goals.",
    },
    {
      title: "Implementation Support",
      description:
        "Our team provides guidance and resources to help you execute your sustainability strategy effectively.",
    },
    {
      title: "Monitoring and Reporting",
      description:
        "We help you track progress, measure impact, and communicate results to stakeholders.",
    },
    {
      title: "Continuous Improvement",
      description:
        "We work with you to refine and adapt your strategy as needed, ensuring long-term success.",
    },
  ];

  return (
    <section className="relative container mx-auto px-4 py-12 md:py-24 process-section">
      {/* Background image that changes with scroll */}
      <motion.div className="absolute inset-0 -z-10 bg-cover bg-center" />
      <motion.h2
        initial={{ scale: 0 }}
        whileInView={{ scale: 1.1 }}
        transition={{ duration: 0.6, type: "linear" }}
        className="text-3xl md:text-6xl lg:text-8xl font-bold mb-10 md:mb-20 text-center text-emerald-600"
      >
        Our Net Zero Process
      </motion.h2>

      <div className="relative">
        {/* Vertical line in the center */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-emerald-200 transform md:-translate-x-1/2"></div>

        {/* Step-by-step process */}
        <div className="space-y-12 md:space-y-32">
          {process.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center process-step ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Card section */}
              <div className="w-full md:w-1/2 px-4 md:px-6 mb-4 md:mb-0">
                <Card className="transition-transform duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl font-semibold text-emerald-600">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Number and icon in the middle */}
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16 text-white bg-emerald-500 rounded-full border-white z-10 flex items-center justify-center text-lg md:text-xl font-bold absolute left-0 md:static transform -translate-x-2/3 md:translate-x-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {index + 1}
              </motion.div>

              {/* Empty space for alternating layout on larger screens */}
              <div className="hidden md:block w-1/2 px-6"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;