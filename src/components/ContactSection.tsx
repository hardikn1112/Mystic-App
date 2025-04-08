
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Have a question or ready to upgrade your home? Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-mystic-100 dark:bg-mystic-900/50 p-3 text-mystic-600 dark:text-mystic-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <p className="text-slate-600 dark:text-slate-300">+91 94150xxxxx</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-mystic-100 dark:bg-mystic-900/50 p-3 text-mystic-600 dark:text-mystic-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-slate-600 dark:text-slate-300">contact@mysticinfosystems.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-mystic-100 dark:bg-mystic-900/50 p-3 text-mystic-600 dark:text-mystic-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-300">123 Smart City, Ahmedabad, Gujarat - 380005</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-mystic-500"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-mystic-500"
                    placeholder="Email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-mystic-500"
                    placeholder="+91 12345xxxxx"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-mystic-500"
                    placeholder="Ask your question..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-gradient-to-r from-mystic-500 to-blue-600 hover:from-mystic-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-medium flex justify-center items-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
