import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

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
      videoRef.current.play().catch((error: Error) => {
        console.error("Video autoplay failed:", error);
        // Set a poster image as fallback
      });
    }

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="background1.webm" // Replace with actual poster image path in production
        >
          {/* In production, replace with actual video sources */}
          <source src="/background1.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Gradient overlay mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
      
      {/* Mesh grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10"></div>

      {/* Content container */}
      <div className="max-w-5xl mx-auto px-4 text-center z-20">
        <div className={`space-y-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Badge with animate pulse */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-white backdrop-blur-sm border border-white/10">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Removing carbon through nature</span>
            </span>
          </div>
          
          {/* Main heading with gradient text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
            <span className="block"> Enhanced Rock</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-500">Weathering</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl font-light text-white mb-2">
            for a <span className="font-semibold">Cooler Planet</span>
          </p>
          
          {/* Description */}
          <p className="text-lg text-white/80 mb-4 max-w-2xl mx-auto">
            Harnessing natural processes for permanent carbon removal, 
            enhancing soil health, and creating a sustainable future.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href='#erw' ><Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-medium px-6 py-6 h-12 rounded-lg flex items-center gap-2 text-base shadow-lg">
              Learn About ERW
              <ArrowRight className="w-4 h-4" />
            </Button></Link>
            <Link href='#video'><Button 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-6 py-6 h-12 rounded-lg flex items-center gap-2 text-base"
            >
              <Play className="w-4 h-4" />
              Watch Farmer Stories
            </Button></Link>
          </div>
          
          {/* Stats highlights */}
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 transition-all delay-300 duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-green-400">95%</div>
              <div className="text-sm text-white/70">Permanent Carbon Storage</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-green-400">10,000+</div>
              <div className="text-sm text-white/70">Acres Revitalized</div>
            </div>
            <div className="hidden md:block bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-green-400">500+</div>
              <div className="text-sm text-white/70">Partner Farmers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with improved animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs font-light">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-1.5 animate-scrollBounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;