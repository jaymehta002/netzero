import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoTestimonial = ({
  name = "Sarah Johnson",
  location = "San Francisco, CA",
  quote = "This service completely transformed how we approach our business. The results exceeded all our expectations and the support team was incredible throughout the entire process.",
  videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  thumbnail = "https://images.unsplash.com/photo-1494790108755-2616c9a86d6b?w=800&h=600&fit=crop&crop=face",
  className = "",
  rating = 5
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setShowControls(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('play', handleVideoPlay);
      video.addEventListener('pause', handleVideoPause);
      
      return () => {
        video.removeEventListener('ended', handleVideoEnd);
        video.removeEventListener('play', handleVideoPlay);
        video.removeEventListener('pause', handleVideoPause);
      };
    }
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div id="video" className={`group w-full max-w-sm mx-auto ${className}`}>
      <div 
        className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Video Container */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-green-50 to-green-100">
          {/* Background Thumbnail */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
          
          {/* Video Element */}
          <video
            ref={videoRef}
            src={videoUrl}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
            muted={isMuted}
            playsInline
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Play Button Overlay */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
              onClick={togglePlay}
            >
              <div className="relative">
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
                <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-30 animation-delay-75" />
                
                {/* Play Button */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-full p-6 shadow-2xl transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-green-500 group-hover/play:text-white">
                  <Play className="w-8 h-8 text-green-700 group-hover/play:text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          )}

          {/* Video Controls */}
          {showControls && (
            <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
              isHovering || isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <div className="flex items-center justify-between bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2">
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

          {/* Status Indicator */}
          {/* <div className="absolute top-4 right-4">
            <div className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              ✓ Verified
            </div>
          </div> */}
        </div>

        {/* Content Section */}
        <div className="p-6 bg-gradient-to-br from-white to-green-50/50">
          {/* Rating */}
          {/* <div className="flex items-center gap-2 mb-4">
            <div className="flex">{renderStars(rating)}</div>
            <span className="text-sm text-gray-600 font-medium">{rating}.0</span>
          </div> */}

          {/* Quote */}
          {/* <blockquote className="text-gray-700 leading-relaxed mb-6 relative">
            <div className="absolute -top-2 -left-1 text-4xl text-green-200 font-serif">"</div>
            <p className="relative z-10 italic">{quote}</p>
            <div className="absolute -bottom-4 -right-1 text-4xl text-green-200 font-serif">"</div>
          </blockquote> */}

          {/* Profile */}
          <div className="flex items-center gap-4">
            {/* <div 
              className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-lg shadow-lg"
            >
              {name.charAt(0)}
            </div> */}
            <div>
              <h4 className="text-gray-900 font-semibold text-lg">{name}</h4>
              <p className="text-green-600 text-sm font-medium">{location}</p>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-green-100 to-transparent rounded-tl-full opacity-50" />
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400/30 transition-all duration-500 pointer-events-none" />
      </div>

      <style jsx>{`
        .animation-delay-75 {
          animation-delay: 75ms;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.1;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

// Demo Component with multiple testimonials
export default function VideoTestimonialsDemo() {
  const testimonials = [
    {
      name: "Saket Budh Sen",
      location: "Khandwa, MP",
      // quote: "I was skeptical at first, but after seeing the results in just the first month, I knew we made the right choice. Highly recommend to anyone looking for real growth.",
      videoUrl: "https://t3nt3smucs.ufs.sh/f/GP6ieuAM82aYSLUmInxk3lVyLFC1WjpZ2BOJvdbMQqHIK0Nz",
      thumbnail: "/testimonial/test1.png",
      rating: 5
    },
    {
      name: "Sunita Sondhia",
      location: "Khandwa, MP",
      quote: "This service completely transformed how we approach our business. The results exceeded all our expectations and the support team was incredible throughout the entire process.",
      videoUrl: "https://t3nt3smucs.ufs.sh/f/GP6ieuAM82aYpeQGIe3wDCXTStao2wuJGgNHO8KPe3MLrj1A",
      thumbnail: "/testimonial/test2.png",
      rating: 5
    },
    {
      name: "Satya Narayan Mehra",
      location: "Khandwa, MP",
      quote: "The attention to detail and personalized approach made all the difference. Our team couldn't be happier with the outcome and ongoing support we receive.",
      // videoUrl: "https://t3nt3smucs.ufs.sh/f/GP6ieuAM82aYnsG7BAH0rgDHs8RVoAxZm4fFj5UyLuaEBJd2",
      videoUrl: "https://t3nt3smucs.ufs.sh/f/GP6ieuAM82aYnQMKfJH0rgDHs8RVoAxZm4fFj5UyLuaEBJd2",
      thumbnail: "/testimonial/test3.png",
      rating: 5
    }
  ];

  return (
    <div className="h-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who've experienced incredible results
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <VideoTestimonial
              key={index}
              {...testimonial}
              className="transform transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}