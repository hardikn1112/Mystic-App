
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-mystic-400 to-blue-500 bg-clip-text text-transparent">
              Mystic Infosystems
            </h3>
            <p className="text-slate-300 mb-6">
              Transforming homes with intelligent automation solutions for modern living.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-mystic-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-mystic-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-mystic-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-mystic-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Solutions', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-300 hover:text-mystic-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Solutions</h4>
            <ul className="space-y-2">
              {['Gate Automation', 'Home Automation', 'Home Theatre', 'Low Voltage Lab'].map((item) => (
                <li key={item}>
                  <a 
                    href="#solutions"
                    className="text-slate-300 hover:text-mystic-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <address className="not-italic text-slate-300">
              <p className="mb-2">123 Smart City</p>
              <p className="mb-4">Ahmedabad, Gujarat - 380005</p>
              <p className="mb-2">Phone: +91 94150xxxxx</p>
              <p>Email: contact@mysticinfosystems.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Mystic Infosystems. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-mystic-600 text-white transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
