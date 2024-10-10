import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Get instant insights into your carbon emissions data.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Your information is protected with enterprise-grade security.",
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description:
        "Work together with your team to achieve sustainability goals.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us</h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          whileInView="visible"
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            hidden: { opacity: 0, y: 50 },
          }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </motion.div>

        <motion.div
          className="bg-white p-8 rounded-xl shadow-xl"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-semibold mb-6 text-center">
            Additional Benefits
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Customizable reporting",
              "Compliance with global standards",
              "User-friendly interface",
              "Integration with existing systems",
              "Expert support team",
              "Regular platform updates",
              "Comprehensive documentation",
              "Training and onboarding",
              "Community forums",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}) => (
  <motion.div
    className="flex flex-col items-center text-center p-4"
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="bg-emerald-100 rounded-full p-3 mb-4">
      <Icon className="h-6 w-6 text-emerald-600" />
    </div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default WhyChooseUs;
