import { motion } from 'framer-motion';
import { Cpu, Sliders, Users, PlugZap, LifeBuoy, Layers } from 'lucide-react';

const ServicesSection = () => {
  const servicesData = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Cutting-Edge Technology",
      description: "Stay ahead with the latest innovations in automation."
    },
    {
      icon: <Sliders className="h-6 w-6" />,
      title: "Tailored Solutions",
      description: "Each project is designed to meet your unique needs."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experienced Professionals",
      description: "Our skilled team ensures seamless implementation."
    },
    {
      icon: <PlugZap className="h-6 w-6" />,
      title: "Effortless Integration",
      description: "Our solutions work harmoniously with your existing systems."
    },
    {
      icon: <LifeBuoy className="h-6 w-6" />,
      title: "Reliable Support",
      description: "We provide dedicated post-installation assistance and maintenance."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Scalable Architecture",
      description: "Built to grow with your needs, from smart homes to smart cities."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-blue-50 dark:bg-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-6 text-blue-800"
          >
            Why Choose <span className="gradient-text">Mystic Info System</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-blue-700"
          >
            We deliver premium automation solutions with cutting-edge technology, 
            exceptional service, and meticulous attention to detail.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glow-card p-6 h-full bg-white border border-blue-100 shadow-md rounded-xl"
            >
              <div className="flex flex-col h-full">
                <div className="mb-5 p-3 rounded-lg bg-blue-100 inline-flex items-center justify-center w-12 h-12 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-mystic-200 flex-grow">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
