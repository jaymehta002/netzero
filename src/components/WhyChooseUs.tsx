import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

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

const additionalBenefits = [
  "Customizable reporting",
  "Compliance with global standards",
  "User-friendly interface",
  "Integration with existing systems",
  "Expert support team",
  "Regular platform updates",
  "Comprehensive documentation",
  "Training and onboarding",
  "Community forums",
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <BackgroundBlobs />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h3
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </motion.div>

        <AdditionalBenefits />
      </div>
    </section>
  );
};

const FeatureItem = React.memo(
  ({
    icon: Icon,
    title,
    description,
  }: {
    icon: React.ElementType;
    title: string;
    description: string;
  }) => (
    <motion.div
      className="flex flex-col items-center text-center p-6 bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full p-4 mb-6"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="h-8 w-8 text-white" />
      </motion.div>
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
);

FeatureItem.displayName = "FeatureItem";

const AdditionalBenefits = React.memo(() => (
  <motion.div
    className="bg-white bg-opacity-80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <h4 className="text-3xl font-semibold mb-8 text-center">
      Additional Benefits
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {additionalBenefits.map((benefit, index) => (
        <BenefitItem key={index} benefit={benefit} index={index} />
      ))}
    </div>
  </motion.div>
));

AdditionalBenefits.displayName = "AdditionalBenefits";

const BenefitItem = React.memo(
  ({ benefit, index }: { benefit: string; index: number }) => (
    <motion.div
      className="flex items-center"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
      <span className="text-gray-700">{benefit}</span>
    </motion.div>
  )
);

BenefitItem.displayName = "BenefitItem";

const BackgroundBlobs = React.memo(() => (
  <motion.div
    className="absolute top-0 left-0 w-96 h-96 bg-emerald-300 rounded-full filter blur-3xl opacity-20"
    animate={{
      x: [0, 100, 0],
      y: [0, 50, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
));

BackgroundBlobs.displayName = "BackgroundBlobs";

export default WhyChooseUs;
