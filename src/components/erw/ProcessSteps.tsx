'use client'
import { ChevronRight, Droplets, Mountain, Sprout, TrendingUp, Wind } from 'lucide-react';
import { useState } from 'react';
import Impact from '../home/Impact';

const steps = [
  {
    title: "Basalt Selection",
    description: "Premium volcanic rock crushed to optimal size",
    icon: Mountain,
    color: "from-green-600 to-green-800",
    accentColor: "bg-green-600"
  },
  {
    title: "Field Application",
    description: "Strategic deployment across agricultural land",
    icon: Sprout,
    color: "from-green-500 to-green-700",
    accentColor: "bg-green-500"
  },
  {
    title: "Carbon Capture",
    description: "Natural weathering captures atmospheric CO₂",
    icon: Wind,
    color: "from-green-400 to-green-600",
    accentColor: "bg-green-400"
  },
  {
    title: "Soil Enhancement",
    description: "Improved water retention and mineral balance",
    icon: Droplets,
    color: "from-green-500 to-green-700",
    accentColor: "bg-green-500"
  },
  {
    title: "Yield Boost",
    description: "Enhanced crop productivity and quality",
    icon: TrendingUp,
    color: "from-green-600 to-green-800",
    accentColor: "bg-green-600"
  }
];

// const stats = [
//   { value: "200%", label: "Soil Health", icon: "🌱", color: "text-green-500" },
//   { value: "50%", label: "Less Water", icon: "💧", color: "text-green-400" },
//   { value: "30%", label: "More Yield", icon: "📈", color: "text-green-600" }
// ];

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="h-full bg-gradient-to-br from-green-800 via-green-900 to-green-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-green-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-green-100 to-green-50 bg-clip-text text-transparent mb-4">
            Enhanced Rock Weathering
          </h1>
          <p className="text-xl text-green-100/90 max-w-2xl mx-auto">
            Transforming agriculture while capturing carbon from the atmosphere
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto">
            
            {/* Process Flow - Horizontal Timeline */}
            <div className="relative mb-12">
              {/* Progress Bar Background */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-white/20 rounded-full"></div>
              
              {/* Active Progress Bar */}
              <div 
                className="absolute top-16 left-0 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              ></div>

              {/* Steps */}
              <div className="flex justify-between items-start relative">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isActive = index === activeStep;
                  const isPassed = index < activeStep;
                  
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center cursor-pointer group relative"
                      onClick={() => setActiveStep(index)}
                      onMouseEnter={() => setActiveStep(index)}
                    >
                      {/* Step Circle */}
                      <div className={`
                        w-32 h-32 rounded-full flex items-center justify-center mb-6 relative z-10 transition-all duration-500
                        ${isActive 
                          ? 'bg-gradient-to-br from-white to-green-100 shadow-2xl shadow-green-500/50 scale-110' 
                          : isPassed 
                            ? 'bg-gradient-to-br from-green-200 to-green-300 shadow-lg' 
                            : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                        }
                      `}>
                        <IconComponent 
                          className={`w-12 h-12 transition-colors duration-300 ${
                            isActive ? 'text-green-600' : isPassed ? 'text-green-700' : 'text-white/70'
                          }`} 
                        />
                        
                        {/* Step Number */}
                        <div className={`
                          absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                          ${isActive 
                            ? 'bg-green-600 text-white shadow-lg' 
                            : isPassed 
                              ? 'bg-green-500 text-white' 
                              : 'bg-white/20 text-white/70'
                          }
                        `}>
                          {isPassed ? '✓' : index + 1}
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className={`
                        text-center transition-all duration-500 transform
                        ${isActive ? 'scale-105 opacity-100' : 'opacity-80'}
                      `}>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className={`
                          text-sm leading-relaxed max-w-40 transition-all duration-300
                          ${isActive ? 'text-green-100' : 'text-white/60'}
                        `}>
                          {step.description}
                        </p>
                      </div>

                      {/* Connecting Arrow */}
                      {index < steps.length - 1 && (
                        <ChevronRight className={`
                          absolute top-16 -right-4 w-6 h-6 transition-all duration-300
                          ${index < activeStep ? 'text-green-400' : 'text-white/40'}
                        `} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active Step Details */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {steps[activeStep].title} Process
                </h3>
                <p className="text-lg text-green-100/90 max-w-3xl mx-auto leading-relaxed">
                  {steps[activeStep].title === "Basalt Selection" && "Carefully selected volcanic basalt rock is crushed to the optimal particle size, maximizing surface area for enhanced chemical weathering reactions and carbon dioxide absorption."}
                  {steps[activeStep].title === "Field Application" && "Using precision agriculture techniques, the crushed basalt is strategically distributed across farmland, ensuring uniform coverage and optimal integration with existing soil systems."}
                  {steps[activeStep].title === "Carbon Capture" && "As the basalt naturally weathers, it reacts with atmospheric CO₂ and rainwater, permanently storing carbon as stable mineral carbonates while releasing beneficial nutrients."}
                  {steps[activeStep].title === "Soil Enhancement" && "The weathering process significantly improves soil structure, water retention capacity, pH balance, and nutrient availability, creating an optimal growing environment."}
                  {steps[activeStep].title === "Yield Boost" && "Enhanced soil conditions lead to measurable improvements in crop productivity, quality, and resilience, providing tangible benefits to farmers and food security."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              style={{ animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className={`text-3xl font-bold mb-2 ${stat.color} text-white`}>
                +{stat.value}
              </div>
              <div className="text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
        {/* <Impact /> */}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}