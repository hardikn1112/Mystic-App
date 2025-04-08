
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Manoj Kumar",
    role: "Homeowner",
    content: "Mystic Infosystems transformed our home with their gate and security automation. Their team was professional, knowledgeable, and delivered exactly what we needed.",
    rating: 5
  },
  {
    name: "Shruti Giri",
    role: "Interior Designer",
    content: "I've recommended Mystic to all my clients. Their home automation solutions integrate perfectly with any interior design, and their attention to detail is unmatched.",
    rating: 5
  },
  {
    name: "Raghav Singh",
    role: "Technology Enthusiast",
    content: "As someone who loves tech, I had high expectations. Mystic exceeded them all. Their home theatre setup is state-of-the-art, and their support team is always there when needed.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Read testimonials from our satisfied clients about their experience with Mystic Infosystems.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-4 mb-6">
                
                <div>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="mb-4 text-slate-600 dark:text-slate-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-mystic-500 text-mystic-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
