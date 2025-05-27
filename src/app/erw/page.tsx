'use client'
// pages/index.tsx
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';


import ProjectCard from '@/components/ProjectCard';
import PartnerLogos from '@/components/PartnerLogos';
import ImpactCounter from '@/components/ImpactCounter';
import VideoTestimonial from '@/components/VideoTestimonial';
import  Steps  from '@/components/net-zero/Steps';
import ProcessSteps from '@/components/erw/ProcessSteps';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const impactRef = useRef(null);
  const testimonialsRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  // Simplified animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  useEffect(() => {
    setIsLoaded(true);
    
    // GSAP animations for sections
    if (impactRef.current) {
      gsap.from('.impact-item', {
        scrollTrigger: {
          trigger: impactRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });
    }

    if (testimonialsRef.current) {
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 70%',
        },
        x: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });
    }

    if (projectsRef.current) {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 75%',
        },
        y: 80,
        opacity: 0,
        stagger: 0.3,
        duration: 0.8,
        ease: 'power2.out'
      });
    }

    if (ctaRef.current) {
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut'
      });
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Rajveer',
      location: 'MP',
      quote: 'Since adding the rock powder, my soil retains more water and the crop yield improved.',
      videoUrl: '/videos/testimonial1.mp4',
      thumbnail: '/images/rajveer-thumb.jpg',
    },
    {
      id: 2,
      name: 'Kavita',
      location: 'Chhattisgarh',
      quote: 'This method helps nature, helps our land, and helps us earn.',
      videoUrl: '/videos/testimonial2.mp4',
      thumbnail: '/images/kavita-thumb.jpg',
    },
    {
      id: 3,
      name: 'Shamim',
      location: 'UP',
      quote: 'We feel proud to be part of something that heals the earth.',
      videoUrl: '/videos/testimonial3.mp4',
      thumbnail: '/images/shamim-thumb.jpg',
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Project Nirmatva – Nimar Region',
      description: '1,500 acres, basalt application, >2,000 tCO₂e sequestered',
      image: '/images/project1.jpg',
      link: '/projects/nirmatva',
    },
    {
      id: 2,
      title: 'Uttar Pradesh Biochar Deployment',
      description: 'Community-led Biochar + training support',
      image: '/images/project2.jpg',
      link: '/projects/up-biochar',
    },
  ];

  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-white to-gray-50">
      <Head>
        <title>Terrasols | Enhanced Rock Weathering for Carbon Sequestration</title>
        <meta name="description" content="Terrasols deploys Enhanced Rock Weathering on farmlands across India—boosting productivity, improving soil health, and removing carbon at scale." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section - Redesigned */}
      

      {/* Process Steps Section */}
      <section className="h-screen">
        <div className="container mx-auto h-full">
          <motion.div 
            className="text-center pt-16 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              The Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A natural solution for carbon capture and soil enhancement
            </p>
          </motion.div>
          
          <ProcessSteps />
        </div>
      </section>

      

      {/* Video Testimonials */}
      <section 
        ref={testimonialsRef}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-green-800">Voices from the Field</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hear directly from the land stewards benefiting from ERW.</p>
          </motion.div>
          
          <div className="flex flex-wrap -mx-4 overflow-x-auto pb-4">
            {testimonials.map((testimonial) => (
              <VideoTestimonial 
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                quote={testimonial.quote}
                videoUrl={testimonial.videoUrl}
                thumbnail={testimonial.thumbnail}
                className="testimonial-card"
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <motion.button 
              className="inline-flex items-center text-green-700 font-semibold hover:text-green-900 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More Stories
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-green-800">Together for Climate Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Working with leading organizations to scale carbon removal and regenerative agriculture.
            </p>
          </motion.div>
          
          <PartnerLogos />
        </div>
      </section>

      {/* Why Choose Terrasols */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-green-800">Why Choose Terrasols</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-green-700">Transparent dMRV Monitoring</h3>
              <p className="text-gray-600">
                Advanced digital measurement, reporting, and verification ensures accurate carbon accounting and credibility.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-green-700">Farmer-first Partnerships</h3>
              <p className="text-gray-600">
                We work closely with farmers, respecting their knowledge and ensuring they benefit financially and agriculturally.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-3 text-green-700">Multiple Co-benefits</h3>
              <p className="text-gray-600">
                Beyond carbon sequestration, our approach improves water retention, soil biodiversity, and farmer income.
              </p>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-12 space-x-6">
            <motion.button 
              className="bg-transparent border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About Our Verification
            </motion.button>
            
            <motion.button 
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us
            </motion.button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section 
        ref={projectsRef}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-green-800">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore our impactful carbon removal initiatives across India.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                className="project-card"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Strip */}
      {/* <section 
        ref={ctaRef}
        className="py-16 bg-gradient-to-r from-green-900 to-green-700 text-white"
      >
        <div className="container mx-auto px-4 cta-content">
          <div className="text-center max-w-3xl mx-auto"> 
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Part of the Solution</h2>
            <p className="text-xl mb-8">Whether you're a business, farmer, or investor—your role matters.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                className="bg-white text-green-800 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy Carbon Credits
              </motion.button>
              
              <motion.button 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold py-3 px-8 rounded-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fund a Project
              </motion.button>
              
              <motion.button 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold py-3 px-8 rounded-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Involved
              </motion.button>
            </div>
          </div>
        </div>
      </section> */}

      {/* <Footer /> */}
    </div>
  );
} 