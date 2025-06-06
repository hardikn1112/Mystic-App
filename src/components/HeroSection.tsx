
import { motion } from 'framer-motion';
import { ArrowRight, HomeIcon, ShieldCheck, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-mystic-200 dark:border-mystic-800 bg-mystic-50 dark:bg-mystic-900/30">
              <span className="text-sm font-medium text-mystic-600 dark:text-mystic-400">
                Smart Home Solutions For Modern Living
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Transform Your Home With <span className="gradient-text">Intelligent Automation</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg">
              Mystic Info System delivers cutting-edge home automation solutions that blend 
              seamlessly with your lifestyle, providing unparalleled comfort, security, and efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-mystic-600 hover:bg-mystic-700 text-white font-medium flex items-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </motion.a>
              
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-mystic-400 dark:hover:border-mystic-700 font-medium"
              >
                Explore Services
              </motion.a>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-mystic-100 dark:bg-mystic-900 mb-2">
                  <HomeIcon className="h-5 w-5 text-mystic-600 dark:text-mystic-400" />
                </div>
                <h3 className="text-sm font-medium">Smart Home</h3>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-mystic-100 dark:bg-mystic-900 mb-2">
                  <ShieldCheck className="h-5 w-5 text-mystic-600 dark:text-mystic-400" />
                </div>
                <h3 className="text-sm font-medium">Security</h3>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-mystic-100 dark:bg-mystic-900 mb-2">
                  <Zap className="h-5 w-5 text-mystic-600 dark:text-mystic-400" />
                </div>
                <h3 className="text-sm font-medium">Energy</h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 aspect-video overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-mystic-600/30 to-blue-500/20 mix-blend-overlay"></div>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&h=800&auto=format&fit=crop"
                alt="Smart home automation"
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-mystic-400 dark:bg-mystic-600 blur-3xl opacity-60"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 4
              }}
            />
            
            <motion.div 
              className="absolute -left-6 -top-6 w-24 h-24 rounded-full bg-blue-500 dark:bg-blue-600 blur-3xl opacity-60"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 5,
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
