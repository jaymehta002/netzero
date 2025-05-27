import { motion } from 'framer-motion';
import ImpactCounter from '../ImpactCounter';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
};

export default function Impact() {
    return (
        <section className="py-20  text-white">
            <div className="container mx-auto px-4">
                <motion.div 
    className="text-center mb-16"
    {...fadeIn}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Our Impact in Numbers
    </h2>
    <p className="text-xl text-white/80 max-w-2xl mx-auto">
      Real results from our Enhanced Rock Weathering projects
    </p>
  </motion.div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <ImpactCounter
      icon="🪨" 
      value={12000} 
      suffix="+" 
      label="Tons of Rock Applied" 
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6" 
    />
    <ImpactCounter 
      icon="🌾" 
      value={1200} 
      suffix="+" 
      label="Acres Regenerated" 
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6" 
    />
    <ImpactCounter 
      icon="🌍" 
      value={5000} 
      suffix="+" 
      label="tCO₂e Sequestered" 
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6" 
    />
    <ImpactCounter 
      icon="👨‍🌾" 
      value={350} 
      suffix="+" 
      label="Farmers Engaged" 
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6" 
    />
  </div>
</div>
        </section>
    );
}
