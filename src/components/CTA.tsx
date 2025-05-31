import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  DollarSign,
  Globe,
  Handshake,
  Heart,
  // Shield,
  Sprout,
  Target,
  // Zap
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link'
const TerrasolsSections = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredCTA, setHoveredCTA] = useState(null);

  const whyChooseCards = [
    {
      id: 1,
      icon: BarChart3,
      title: "Transparent dMRV Monitoring",
      description: "Digital monitoring, reporting, and verification systems provide real-time transparency and accountability for every carbon credit generated.",
      features: ["Real-time data tracking", "Blockchain verification", "Satellite monitoring", "AI-powered analytics"],
      stats: "99.9% Accuracy"
    },
    {
      id: 2,
      icon: Handshake,
      title: "Farmer-first Partnerships",
      description: "We put farmers at the center of everything we do, ensuring fair compensation and long-term sustainable relationships.",
      features: ["Fair payment systems", "Technical support", "Training programs", "Community building"],
      stats: "500+ Farmers"
    },
    {
      id: 3,
      icon: Sprout,
      title: "Multiple Co-benefits",
      description: "Beyond carbon sequestration, our projects deliver water retention, biodiversity enhancement, and increased farmer income.",
      features: ["Water conservation", "Biodiversity boost", "Soil health improvement", "Economic empowerment"],
      stats: "4X Benefits"
    }
  ];

  const ctaOptions = [
    {
      id: 1,
      icon: DollarSign,
      title: "Buy Carbon Credits",
      subtitle: "Offset your emissions with verified, high-quality carbon credits",
      description: "Purchase carbon credits that directly support regenerative agriculture and sustainable farming practices. Every credit purchased creates measurable environmental impact.",
      audience: "Businesses & Organizations",
      benefits: ["Immediate carbon offset", "Verified impact reports", "Bulk pricing available", "Custom solutions"],
      buttonText: "Purchase Credits",
      link: "/contact"
    },
    {
      id: 2,
      icon: Target,
      title: "Fund a Project",
      subtitle: "Invest in the future of sustainable agriculture",
      description: "Support specific regenerative farming projects and see the direct impact of your investment on communities and the environment.",
      audience: "Investors & Foundations", 
      benefits: ["Direct project funding", "Impact monitoring", "Tax benefits", "Partnership opportunities"],
      buttonText: "Fund Projects",
      link: "/contact"
    },
    {
      id: 3,
      icon: Heart,
      title: "Get Involved",
      subtitle: "Join our community of change-makers",
      description: "Become part of our mission through partnerships, volunteering, or spreading awareness about regenerative agriculture.",
      audience: "Individuals & Communities",
      benefits: ["Community access", "Educational resources", "Volunteer opportunities", "Networking events"],
      buttonText: "Join Community",
      link: "/contact"
    }
  ];

  // const trustIndicators = [
  //   { icon: Shield, label: "Verified", value: "100%" },
  //   { icon: Zap, label: "Fast", value: "24h Processing" },
  //   { icon: Globe, label: "Global", value: "50+ Countries" }
  // ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-12 sm:py-16 lg:py-20">
      {/* Why Choose Terrasols Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-24">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 sm:px-4 py-2 rounded-full font-medium mb-4 sm:mb-6 text-sm sm:text-base">
            <CheckCircle className="w-4 h-4" />
            Why Choose Terrasols
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Leading the Carbon Revolution
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We&apos;re not just generating carbon credits—we&apos;re transforming agriculture, 
            empowering farmers, and creating lasting environmental impact through innovative technology.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-4 sm:mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="group relative h-full"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setHoveredCard(card.id);
                  }
                }}
              >
                <div className={`relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden h-full ${
                  hoveredCard === card.id ? 'ring-2 ring-emerald-500/30' : ''
                }`}>
                  {/* Background Pattern */}
                  <div className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-emerald-50 to-green-50 opacity-60 rounded-bl-full transition-transform duration-500 group-hover:scale-150`} />
                  
                  {/* Stats Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                    {card.stats}
                  </div>

                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 relative z-10 pr-8">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed relative z-10">
                    {card.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 sm:space-y-3 relative z-10">
                    {card.features.map((feature, index) => (
                      <li key={`${card.id}-feature-${index}`} className="flex items-center text-xs sm:text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform transition-transform duration-300 ${
                    hoveredCard === card.id ? 'scale-x-100' : 'scale-x-0'
                  }`} />

                  {/* Decorative Corner */}
                  <div className="absolute -bottom-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-tl from-emerald-200 to-green-200 rounded-full opacity-50 transition-transform duration-500 group-hover:scale-150" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Be Part of the Solution Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 sm:px-4 py-2 rounded-full font-medium mb-4 sm:mb-6 text-sm sm:text-base">
            <Globe className="w-4 h-4" />
            Join the Movement
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Be Part of the Solution
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Whether you&apos;re a business, farmer, or investor—your role matters. 
            Choose how you want to make a difference in regenerative agriculture and climate action.
          </p>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ctaOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <div
                key={option.id}
                className="group relative h-full"
                onMouseEnter={() => setHoveredCTA(option.id)}
                onMouseLeave={() => setHoveredCTA(null)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setHoveredCTA(option.id);
                  }
                }}
              >
                <div className={`relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 overflow-hidden h-full flex flex-col ${
                  hoveredCTA === option.id ? 'ring-2 ring-green-500/30' : ''
                }`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 transition-opacity duration-500 ${
                    hoveredCTA === option.id ? 'opacity-100' : ''
                  }`} />

                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>

                  {/* Audience Tag */}
                  <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium mb-3 sm:mb-4 w-fit">
                    {option.audience}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 relative z-10">
                    {option.title}
                  </h3>
                  <p className="text-sm sm:text-base text-green-600 font-semibold mb-3 sm:mb-4 relative z-10">
                    {option.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed relative z-10 flex-grow">
                    {option.description}
                  </p>

                  {/* Benefits List */}
                  <div className="mb-6 sm:mb-8 relative z-10">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2 sm:mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {option.benefits.map((benefit, index) => (
                        <li key={`${option.id}-benefit-${index}`} className="flex items-start text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => window.location.href = option.link}
                    className={`w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 relative z-10 mt-auto text-sm sm:text-base ${
                      hoveredCTA === option.id ? 'from-green-700 to-emerald-700 scale-105' : ''
                    }`}
                  >
                    {option.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Decorative Elements */}
                  <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-green-200/50 to-emerald-200/50 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-150" />
                  <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-emerald-200/50 to-green-200/50 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-125" />
                  
                  {/* Progress Bar Animation */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500 ${
                    hoveredCTA === option.id ? 'w-full' : 'w-0'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-green-900 to-emerald-900 rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Trusted by Industry Leaders</h3>
            <p className="text-green-200 text-sm sm:text-base">Join thousands who are already making a difference</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="text-2xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                10,000+
              </div>
              <div className="text-green-200 text-xs sm:text-sm">Carbon Credits Generated</div>
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mt-2 transition-transform duration-300 group-hover:scale-150" />
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-green-200 text-xs sm:text-sm">Farmers Empowered</div>
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mt-2 transition-transform duration-300 group-hover:scale-150" />
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                25,000
              </div>
              <div className="text-green-200 text-xs sm:text-sm">Acres Regenerated</div>
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mt-2 transition-transform duration-300 group-hover:scale-150" />
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-green-200 text-xs sm:text-sm">Client Satisfaction</div>
              <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mt-2 transition-transform duration-300 group-hover:scale-150" />
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-6 sm:p-8 border border-green-100">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Make an Impact?</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Start your journey towards sustainable agriculture and carbon neutrality today. 
            Our team is ready to help you find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Get Started Today
            </button>
            <Link
              href="https://calendly.com/creategreenlife/30min"
              target="_blank"
              className="bg-white text-green-700 border-2 border-green-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerrasolsSections;