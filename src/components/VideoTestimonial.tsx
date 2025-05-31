import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialData {
  name: string;
  location: string;
  videoUrl: string;
  thumbnail: string;
  quote: string;
}

const testimonials: TestimonialData[] = [
  {
    name: "Saket Budh Sen",
    location: "Khandwa, MP",
    videoUrl: "https://t3nt3smucs.ufs.sh/f/GP6ieuAM82aYSLUmInxk3lVyLFC1WjpZ2BOJvdbMQqHIK0Nz",
    thumbnail: "/testimonial/test1.png",
    quote: "In the first week of March, Terrasols applied basaltic rock on my field where I planted green peas and red lentils. Just three months later, I saw excellent results—better plant growth and higher yields. I’m now planning to expand this practice across my other fields."
  },
  {
    name: "Sunita Sondhia",
    location: "Khandwa, MP",
    videoUrl: "https://t3nt3smucs.ufs.sh/f/GP6ieuAM82aYpeQGIe3wDCXTStao2wuJGgNHO8KPe3MLrj1A",
    thumbnail: "/testimonial/test2.png",
    quote: "This season, I grew ladyfinger where Terrasols had applied basaltic rock powder. When I took my vegetables to the local market, buyers and even fellow farmers were amazed by the freshness and size. It felt great to be recognized for the quality of my produce."
  },
  {
    name: "Satya Narayan Mehra",
    location: "Khandwa, MP",
    videoUrl: "https://t3nt3smucs.ufs.sh/f/GP6ieuAM82aYnQMKfJH0rgDHs8RVoAxZm4fFj5UyLuaEBJd2",
    thumbnail: "/testimonial/test3.png",
    quote: "Terrasols spread basaltic rock powder in my cucumber field in early March. After the harvest, I noticed a clear improvement in both the quality and quantity of the produce. The plants were healthier, and the yield was better than previous seasons. I’m truly impressed with the results."
  }
];

interface VideoPlayerProps {
  testimonial: TestimonialData;
  isActive: boolean;
}

const VideoPlayer = ({ testimonial, isActive }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  }, [isMuted]);

  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      setShowControls(false);
    }
  }, [isActive]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setShowControls(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setShowControls(false);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Video Section */}
          <div className="relative">
            {/* Video Container - Proper aspect ratio */}
            <div className="relative aspect-video w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Background thumbnail */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
                  isPlaying ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ backgroundImage: `url(${testimonial.thumbnail})` }}
              />
              
              {/* Video element */}
              <video
                ref={videoRef}
                src={testimonial.videoUrl}
                className="absolute inset-0 w-full h-full object-contain bg-black"
                muted={isMuted}
                playsInline
                preload="metadata"
              />

              {/* Dark overlay for thumbnail */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/30" />
              )}

              {/* Play button overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={togglePlay}
                    className="group relative"
                  >
                    {/* Animated rings */}
                    <div className="absolute inset-0 bg-green-500/30 rounded-full animate-ping" />
                    <div className="absolute inset-2 bg-green-500/20 rounded-full animate-pulse" />
                    
                    {/* Main play button */}
                    <div className="relative bg-white rounded-full p-6 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500 group-hover:shadow-green-500/50">
                      <Play className="w-8 h-8 text-green-600 group-hover:text-white ml-1" fill="currentColor" />
                    </div>
                  </button>
                </div>
              )}

              {/* Video controls - positioned at bottom of video */}
              {showControls && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2">
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-green-400 transition-colors duration-200"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-green-400 transition-colors duration-200"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="text-white space-y-6">
            {/* Quote */}
            <div className="space-y-4">
              <Quote className="w-10 h-10 text-green-400" />
              <blockquote className="text-2xl lg:text-3xl xl:text-4xl text-gray-800 leading-relaxed">
                {testimonial.quote}
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-4 pt-6">
              <div 
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-cover bg-center border-4 border-green-400/30 shadow-lg"
                style={{ backgroundImage: `url(${testimonial.thumbnail})` }}
              />
              <div>
                <h3 className="text-xl lg:text-2xl text-gray-800 font-semibold mb-1">{testimonial.name}</h3>
                <p className="text-green-300 text-lg mb-2">{testimonial.location}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function VideoTestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [currentIndex, isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % testimonials.length);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
  }, [currentIndex, goToSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full ">
      {/* Header */}
      <div className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            What Our Partners Say
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real stories from valued partners who've experienced incredible results
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full" />
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <VideoPlayer 
                  testimonial={testimonial} 
                  isActive={index === currentIndex}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - positioned on the sides */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 lg:p-4 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed text-gray-800"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 lg:p-4 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed text-gray-800"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>

        {/* Dots Indicator - positioned at the bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-green-400 scale-125 shadow-lg'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}