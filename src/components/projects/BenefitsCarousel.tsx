import React from "react";
import {
  Leaf,
  BarChart,
  Users,
  TrendingUp,
  ClipboardCheck,
  CheckCircle,
  BookOpen,
  FileText,
  Globe,
} from "lucide-react"; // Importing relevant Lucide icons

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode; // Added icon prop for dynamic icons
}

const features: Feature[] = [
  {
    title: "Sustainability Solutions",
    description:
      "Providing innovative tools to help you achieve long-term sustainability goals while reducing carbon footprints.",
    icon: <Leaf className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Carbon Credit Generation",
    description:
      "Helping businesses generate and manage carbon credits to promote eco-friendly initiatives and reduce their overall environmental impact.",
    icon: <BarChart className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Collaboration Platforms",
    description:
      "Foster seamless collaboration among teams to work on impactful sustainability projects and ideas.",
    icon: <Users className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Accurate Data & Reporting",
    description:
      "Leverage our platform to gain precise insights and reports that will help track, manage, and optimize carbon emissions.",
    icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Project Ideation & Innovation",
    description:
      "From ideation to execution, transform your sustainability projects with the latest strategies and expert guidance.",
    icon: <ClipboardCheck className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Compliance & Documentation",
    description:
      "Easily manage the documentation required for sustainability reporting and ensure your projects stay compliant with regulations.",
    icon: <FileText className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Green Building Rating",
    description:
      "Assisting companies in achieving eco-friendly certifications for sustainable building practices.",
    icon: <CheckCircle className="w-8 h-8 text-teal-500" />,
  },
  {
    title: "Training and Education",
    description:
      "Access to expert knowledge and training to boost sustainability practices in your community.",
    icon: <BookOpen className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Global Policy & Climate Risk",
    description:
      "Guiding companies through policy compliance and assessing climate risk management strategies.",
    icon: <Globe className="w-8 h-8 text-pink-500" />,
  },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className="relative flex flex-col items-start p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out hover:shadow-2xl">
      <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-1/2 bg-indigo-100 rounded-full p-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mt-10">
        {feature.title}
      </h3>
      <p className="mt-4 text-sm text-gray-600">{feature.description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 bg-green-100">
      {/* Wave background effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-40 fill-current text-white"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,213.3C840,213,960,171,1080,133.3C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug mb-6">
            Innovating for a Sustainable Future
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Empowering businesses and communities with tools to reduce carbon
            footprints, promote sustainability, and collaborate for a greener
            future.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
