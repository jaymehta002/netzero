import { useEffect, useState } from "react";

const PartnerCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Partner logos data with actual company images
  const partners = [
    { 
      id: 1, 
      name: "Bihar Agriculture University", 
      logo: "/logos/bau.png",
      alt: "Bihar Agriculture University"
    },
    { 
      id: 2, 
      name: "Assocham", 
      logo: "/logos/assocham.png",
      alt: "Assocham"
    },
    { 
      id: 3, 
      name: "CDR", 
      logo: "/logos/cdr.svg",
      alt: "CDR"
    },
    { 
      id: 4, 
      name: "Verra", 
      logo: "/logos/verra.png",
      alt: "verra"
    },
    { 
      id: 5, 
      name: "Carbon Standards International", 
      logo: "/logos/csi.png",
      alt: "Carbon Standards International"
    },
    { 
      id: 6, 
      name: "Gautam Bhuddha University", 
      logo: "/logos/gbu.png",
      alt: "Gautam Bhuddha University"
    },
    { 
      id: 7, 
      name: "Puro Earth", 
      logo: "/logos/sepuroven.png",
      alt: "Puro Earth"
    },
    { 
      id: 8, 
      name: "APSWDP", 
      logo: "/logos/apswdp.png",
      alt: "APSWDP"
    },
    { 
      id: 9, 
      name: "Jawaharlal Nehru University", 
      logo: "/logos/jnu.png",
      alt: "Jawaharlal Nehru University"
    },
    { 
      id: 10, 
      name: "Social Purpose", 
      logo: "/logos/social.png",
      alt: "Social Purpose logo"
    },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className={`mt-16 sm:mt-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Trusted by Industry Leaders
        </h3>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Join thousands of forward-thinking companies already making a difference through sustainable carbon removal
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl py-8 sm:py-12 shadow-lg">
        {/* Gradient overlays for smooth edge effect */}
        <div className="absolute top-0 left-0 w-20 sm:w-32 h-full bg-gradient-to-r from-green-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 sm:w-32 h-full bg-gradient-to-l from-emerald-50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Infinite scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 group"
            >
              <div className="flex flex-col items-center space-y-3 sm:space-y-4 p-4 sm:p-6 transition-all duration-300 hover:scale-110">
                {/* Company Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 p-2 sm:p-3">
                  <img 
                    src={partner.logo} 
                    alt={partner.alt}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                
                {/* Partner name */}
                <div className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg text-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartnerCarousel;