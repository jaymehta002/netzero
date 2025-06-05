import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Animation sequence for elements
  useEffect(() => {
    // Start animation sequence after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    // Start video playback
    if (videoRef.current) {
      videoRef.current.play().catch((error: any) => {
        console.error("Video autoplay failed:", error);
        // Set a poster image as fallback
      });
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="background1.webm"
          >
            <source src="/background1.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Gradient overlay mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        
        {/* Mesh grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10"></div>

        {/* Content container - with proper padding to avoid overlap */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 py-20 sm:py-24 lg:py-32">
          <div className={`space-y-4 sm:space-y-6 lg:space-y-8 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Badge with animate pulse */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/20">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-medium">Removing carbon through nature</span>
              </span>
            </div>
            
            {/* Main heading with gradient text - responsive sizing */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <span className="block">Enhanced Rock</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-500">Weathering</span>
            </h1>
            
            {/* Subheading - responsive sizing */}
            <p className="text-lg sm:text-xl md:text-2xl font-light text-white">
              for a <span className="font-semibold">Cooler Planet</span>
            </p>
            
            {/* Description - responsive sizing and max width */}
            <p className="text-base sm:text-lg text-white/80 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Harnessing natural processes for permanent carbon removal, 
              enhancing soil health, and creating a sustainable future.
            </p>
            
            {/* CTA buttons - improved responsive layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-medium px-6 py-3 sm:px-8 sm:py-4 h-12 sm:h-14 rounded-lg flex items-center justify-center gap-2 text-base shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                Learn About ERW
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-6 py-3 sm:px-8 sm:py-4 h-12 sm:h-14 rounded-lg flex items-center justify-center gap-2 text-base transition-all duration-300 hover:scale-105"
              >
                <Play className="w-4 h-4" />
                Watch Farmer Stories
              </Button>
            </div>
            
            {/* Stats highlights - improved responsive grid */}
            <div className={`grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-12 transition-all delay-300 duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400">95%</div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">Permanent Carbon Storage</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400">10,000+</div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">Acres Revitalized</div>
              </div>
              <div className="col-span-2 lg:col-span-1 bg-white/5 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400">500+</div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">Partner Farmers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - positioned to avoid overlap */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110">
            <span className="text-white/60 text-xs font-light hidden sm:block">Scroll to explore</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/40 flex justify-center transition-all duration-300 hover:border-white/60">
              <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-1.5 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-8px,0);
          }
          70% {
            transform: translate3d(0,-4px,0);
          }
          90% {
            transform: translate3d(0,-2px,0);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;