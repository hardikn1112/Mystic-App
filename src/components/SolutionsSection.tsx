import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Lock, Speaker, Cpu, ArrowRight, Check, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlidingGate from '../Assets/SlidingGate.jpg';
import SwingGate from '../Assets/SwingGate.jpg';
import FoldingGate from '../Assets/FoldingGate.jpg';
import SlidFoldGate from '../Assets/SlidFoldGate.jpeg';
import LightCont from '../Assets/LightCont.jpg';
import Thermostat from '../Assets/Thermostat.jpeg';
import SmartSecurity from '../Assets/SmartSecurity.jpg';
import SmartHome from '../Assets/SmartHome.jpg';
import CurtainAuto from '../Assets/CurtainAuto.jpg';
import CompHome from '../Assets/CompleteHome.jpg';
import AudioSys from '../Assets/AudioSys.jpeg';
import VisualExp from '../Assets/VisualExp.jpg';
import HomeTheat from '../Assets/HomeTheat.jpg';
import CustomHomeTheat from '../Assets/CustomHomeTheat.jpg';
import BiometricLock from '../Assets/BiometricLock.jpeg';
import TimeAtnd from '../Assets/TimeAtnd.jpg';
import FireAlarm from '../Assets/FireAlarm.jpg';
import CCTV  from '../Assets/CCTV.jpeg';
import PAS from '../Assets/PAS.jpg';

const solutionsData = {
  "gate-automation": {
    title: "Gate Automation",
    description: "Secure, Smart & Effortless Access",
    intro: "At Mystic Info System, we offer premium gate automation solutions designed for security, convenience, and elegance in residential, commercial, and industrial spaces. We use high-quality Italian automation systems, ensuring superior performance, durability, and seamless operation.",
    features: [
      {
        title: "Sliding Gates",
        description: "Perfect for properties with limited space, our automated sliding gates offer:",
        benefits: [
          "Italian-engineered automation for smooth, silent operation",
          "Space-saving design with high-speed functionality",
          "Enhanced security with remote and smart control options"
        ],
        image: SlidingGate
      },
      {
        title: "Swing Gates",
        description: "A blend of elegance and strength, our automated swing gates provide:",
        benefits: [
          "Reliable Italian motor systems for effortless opening and closing",
          "Single or double-leaf options to match your space",
          "Strong, weather-resistant construction for long-lasting use"
        ],
        image: SwingGate
      },
      {
        title: "Folding Gates",
        description: "Designed for compact areas, our folding gates ensure:",
        benefits: [
          "Fast and smooth operation with advanced Italian automation",
          "Space-saving yet robust design for restricted areas",
          "High durability for residential, commercial, and industrial applications"
        ],
        image: FoldingGate
      },
      {
        title: "Sliding Folding Gates",
        description: "A perfect combination of sliding and folding mechanisms, our sliding folding gates offer:",
        benefits: [
          "Smart Italian technology for maximum efficiency and aesthetics",
          "High-speed functionality for wide entrances and high-traffic areas",
          "Customizable designs to match modern architecture"
        ],
        image: SlidFoldGate
      }
    ],
    whyChooseUs: [
      "Premium Italian Automation – We use world-class Italian systems known for their durability and innovation.",
      "Smart Access Control – Operate gates via remotes, keypads, sensors, or smartphone apps.",
      "Advanced Safety Features – Equipped with sensors, auto-reverse technology, and anti-crush mechanisms.",
      "Durable & Weatherproof – Built with high-quality materials to withstand harsh conditions.",
      "Expert Installation & Support – From consultation to installation and maintenance, we provide end-to-end service."
    ],
    callToAction: "Upgrade to Smart Gate Automation Today! Enhance your property's security and convenience with our premium Italian gate automation solutions."
  },
  "home-automation": {
    title: "Home Automation",
    description: "Smart, Efficient & Future-Ready Living",
    intro: "At Mystic Info System, we transform homes into intelligent living spaces with our state-of-the-art home automation solutions. Whether you seek comfort, security, or energy efficiency, our customized automation systems give you complete control over your home with just a touch.",
    features: [
      {
        title: "Smart Lighting Control",
        description: "Enhance ambiance and energy efficiency with:",
        benefits: [
          "Dimming & Tuning of Lights – Adjust brightness and color temperature to match your mood",
          "Automated Scheduling – Program lights to turn on/off at specific times",
          "Energy-Saving Modes – Reduce electricity consumption with intelligent automation"
        ],
        image: LightCont
      },
      {
        title: "Climate Control & Energy Efficiency",
        description: "Smart climate management for comfort and savings:",
        benefits: [
          "Smart Thermostats – Control based on occupancy and weather conditions",
          "Zoned Temperature Control – Set different temperatures for different rooms",
          "Energy Optimization – Reduce power wastage with automated scheduling"
        ],
        image: Thermostat
      },
      {
        title: "Security & Access Control",
        description: "Complete protection for your home:",
        benefits: [
          "Smart Door Locks & Video Intercoms – Secure access with biometric or smartphone control",
          "CCTV & Motion Sensors – Keep your home monitored 24/7 with real-time alerts",
          "Automated Gates & Garage Doors – Integrate with our Gate Automation solutions"
        ],
        image: SmartSecurity
      },
      {
        title: "Smart Entertainment & Home Theatre Integration",
        description: "Seamless control of your entertainment systems:",
        benefits: [
          "Multi-Room Audio & Video – Stream music and video across different rooms",
          "Automated Home Theatre Systems – Control lights, projectors, and sound systems",
          "Voice & App Control – Use Alexa, Google Assistant, or mobile apps for easy operation"
        ],
        image: SmartHome
      },
      {
        title: "Curtains and Blinds Automation",
        description: "Seamless control of your entertainment systems:",
        benefits: [
          "Automated Window Coverings – Control blinds and curtains remotely or set schedules",
          "Light & Heat Optimization – Adjust window coverings based on sunlight exposure",
          "Voice & App Control – Use Alexa, Google Assistant, or mobile apps for easy operation"
        ],
        image: CurtainAuto
      },
      {
        title: "Complete Home Integration",
        description: "Seamless control of your entertainment systems:",
        benefits: [
          "One-Touch Scene Control – Set predefined moods like 'Movie Mode' or 'Good Morning' with a single button",
          "Remote Monitoring & Control – Manage your home from anywhere via mobile apps",
          "AI & Voice Assistance – Seamless integration with Alexa, Google Home, and Siri"
        ],
        image: CompHome
      }
    ],
    automation: {
      wireless: {
        title: "Wireless Home Automation",
        description: "Our wireless solutions allow for quick and hassle-free integration without rewiring. We support:",
        features: [
          "Z-Wave – Reliable, secure, and scalable home automation protocol",
          "BLE (Bluetooth Low Energy) – Ideal for close-range smart control with minimal power consumption",
          "Wi-Fi – Enables seamless connectivity with smart home devices through your existing internet network"
        ]
      },
      wired: {
        title: "Wired Home Automation",
        description: "For high-end, stable, and professional-grade automation, we offer wired solutions using:",
        features: [
          "S-Bus Protocol – A robust and scalable system for lighting, security, and energy management",
          "KNX Protocol – A globally recognized standard for seamless integration of smart devices in modern homes"
        ]
      }
    },
    whyChooseUs: [
      "Cutting-Edge Technology – We provide the latest wired and wireless automation solutions for smart homes.",
      "Energy Efficiency – Reduce electricity consumption with intelligent automation and smart sensors.",
      "Customizable Solutions – We tailor automation systems to match your lifestyle and needs.",
      "Secure & Reliable – Advanced encryption and secure access ensure maximum protection.",
      "Expert Installation & Support – From consultation to installation and after-sales support, we handle everything."
    ],
    callToAction: "Experience the Future of Living Today! Upgrade your home with our smart, secure, and energy-efficient automation solutions."
  },
  "home-theatre": {
    title: "Home Theatre",
    description: "Immersive Entertainment at Its Best",
    intro: "Transform your space into a cinematic masterpiece with Mystic Info System's high-end home theatre solutions. Whether you're a movie enthusiast, a music lover, or a gaming fanatic, our state-of-the-art audio-visual systems deliver unmatched sound clarity, stunning visuals, and seamless integration for the ultimate home entertainment experience.",
    brands: [
      "Sonance – Premium architectural speakers for high-fidelity audio",
      "JBL – Powerful, dynamic sound systems for immersive experiences",
      "Harman Kardon – Elegant and rich soundscapes for refined acoustics",
      "Marantz – High-performance AV receivers and amplifiers for professional-grade setups",
      "Denon – Cutting-edge audio and AV receivers for exceptional surround sound"
    ],
    features: [
      {
        title: "High-Quality Audio Systems",
        description: "Experience sound like never before with:",
        benefits: [
          "Multi-Channel Surround Sound Systems – 5.1, 7.1, 9.2, and Dolby Atmos setups",
          "In-Wall & In-Ceiling Speakers – Discreet yet powerful sound solutions",
          "Subwoofers & Soundbars – Deep bass and crystal-clear audio for cinematic impact"
        ],
        image: AudioSys
      },
      {
        title: "Stunning Visual Experience",
        description: "Crystal-clear visuals that bring content to life:",
        benefits: [
          "4K & 8K Projectors – Razor-sharp visuals with lifelike clarity",
          "Ultra-HD Smart TVs – Seamless integration with your smart home system",
          "Motorized Projection Screens – Space-saving, automated screen solutions"
        ],
        image: VisualExp
      },
      {
        title: "Smart Home Theatre Automation",
        description: "Control every aspect of your entertainment experience:",
        benefits: [
          "One-Touch Control – Manage lighting, sound, and screen with a single remote",
          "Acoustic Room Optimization – Custom soundproofing for a true cinematic feel",
          "Voice & App Integration – Control using Alexa, Google Home, or Siri"
        ],
        image: HomeTheat
      },
      {
        title: "Custom Home Theatre Design",
        description: "Tailored solutions for any space:",
        benefits: [
          "Dedicated Theatre Rooms – Fully customized, soundproofed home theatres",
          "Media Rooms & Living Room Theatres – High-performance setups for any space",
          "Hidden & Motorized Solutions – Concealed speakers and retractable screens"
        ],
        image: CustomHomeTheat
      }
    ],
    whyChooseUs: [
      "Premium Brands & Technology – Industry-leading brands for unmatched performance",
      "All Audio Configurations – From 5.1 to 9.2 and beyond, we customize for your ideal sound experience",
      "Smart Integration – Seamless connectivity with home automation systems",
      "Expert Installation & Support – Professional setup, calibration, and after-sales service",
      "Luxury & Innovation – Elevate your home entertainment experience with cutting-edge solutions"
    ],
    callToAction: "Upgrade to the Ultimate Home Theatre Experience! Bring the magic of the big screen into your home with Mystic Info System's high-performance home theatre solutions."
  },
  "low-voltage-lab": {
    title: "Low Voltage Systems",
    description: "Smart, Secure & Efficient",
    intro: "At Mystic Info System, we offer advanced low-voltage solutions designed to enhance security, communication, and automation across residential, commercial, and industrial spaces. Our cutting-edge systems provide reliability, efficiency, and seamless integration with modern technology.",
    features: [
      {
        title: "Biometric Access Control",
        description: "Smart & Secure Entry with advanced solutions:",
        benefits: [
          "Fingerprint, Facial Recognition & RFID Access – Advanced authentication",
          "Time & Attendance Management – Real-time tracking for workforce monitoring",
          "Mobile & Card-Based Access – Flexible entry options for businesses and homes"
        ],
        image: BiometricLock
      },
      {
        title: "Time Attendance System",
        description: "Smart Biometric Entry System for easy attendance:",
        benefits: [
          "Biometric Clock-In & Out – Accurate time capture, preventing buddy punching",
          "Automated Payroll & Reporting – Streamlined data for workforce management",
          "Leave & Shift Integration – Simplified scheduling and absence tracking"
        ],
        image: TimeAtnd
      },
      {
        title: "Fire Alarm Systems",
        description: "Early Detection, Rapid Response for safety:",
        benefits: [
          "Smoke, Heat & Gas Detection Sensors – Instant hazard detection",
          "Automated Alarms & Emergency Alerts – Notifications via sirens and mobile",
          "Integration with Sprinklers & Emergency Exits – Auto-triggered response"
        ],
        image: FireAlarm
      },
      {
        title: "CCTV Surveillance",
        description: "24/7 Monitoring & Protection for peace of mind:",
        benefits: [
          "IP & Analog Cameras – High-definition security solutions for all environments",
          "Night Vision & Motion Detection – Clear visuals, even in low-light conditions",
          "Remote Access & Cloud Storage – View live feeds and recordings from anywhere"
        ],
        image: CCTV
      },
      {
        title: "Public Address Systems",
        description: "Clear & Reliable Communication across spaces:",
        benefits: [
          "Multi-Zone Paging & Emergency Announcements – Instant audio messaging",
          "Indoor & Outdoor Speaker Systems – High-quality sound distribution",
          "Wireless & Network-Based PA Systems – Scalable solutions for all needs"
        ],
        image: PAS
      }
    ],
    whyChooseUs: [
      "Integrated Solutions – Our systems work together for comprehensive security and automation",
      "Scalable Technology – Solutions that grow with your needs and adapt to changing requirements",
      "Certified Expertise – Trained professionals for installation and maintenance",
      "24/7 Support – Round-the-clock assistance for critical systems",
      "Compliance & Standards – All systems meet or exceed industry regulations and standards"
    ],
    callToAction: "Enhance Your Property's Security & Efficiency! Implement advanced low-voltage solutions from Mystic Info System for a safer, smarter environment."
  }
};


const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} bg-mystic-600 p-1 rounded-full flex items-center justify-center outline-none focus:outline-none focus:ring-0 hover:bg-mystic-600`}
      style={{ ...style, display: "block", left: "-50px", zIndex: 10, width: "40px", height: "40px", outline: "none" }}
      onClick={onClick}
    >
      
    </button>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} bg-mystic-600 p-2 rounded-full flex items-center justify-center outline-none focus:outline-none focus:ring-0 hover:bg-mystic-600`}
      style={{ ...style, display: "block", right: "-50px", zIndex: 10, width: "40px", height: "40px", outline: "none" }}
      onClick={onClick}
    >
      
    </button>
  );
};

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState('gate-automation');

  const tabIcons = {
    "gate-automation": <Lock className="w-5 h-5" />,
    "home-automation": <Lightbulb className="w-5 h-5" />,
    "home-theatre": <Speaker className="w-5 h-5" />,
    "low-voltage-lab": <Cpu className="w-5 h-5" />
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <section id="solutions" className="py-24 bg-slate-50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Our Comprehensive <span className="gradient-text">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Discover our range of specialized automation solutions designed to enhance your lifestyle.
          </motion.p>
        </div>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-10 bg-transparent">
            {Object.keys(solutionsData).map((tab) => (
              <TabsTrigger 
                key={tab} 
                value={tab}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${
                  activeTab === tab 
                    ? 'bg-mystic-600 text-white' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tabIcons[tab]}
                {solutionsData[tab].title}
              </TabsTrigger>
            ))}
          </TabsList>
        
          {Object.keys(solutionsData).map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-12 max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold mb-2">{solutionsData[tab].title}</h3>
                    <h4 className="text-xl text-mystic-600 font-medium mb-4">{solutionsData[tab].description}</h4>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">{solutionsData[tab].intro}</p>
                    
                    {tab === 'home-theatre' && solutionsData[tab].brands && (
                      <div className="mb-10 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4">Premium Brands We Use</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {solutionsData[tab].brands.map((brand, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-mystic-500 flex-shrink-0 mt-1">🎵</span>
                              <span className="text-slate-700 dark:text-slate-300">{brand}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {tab === 'home-automation' && solutionsData[tab].automation && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900">
                          <CardContent className="p-6">
                            <h5 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">
                              {solutionsData[tab].automation.wireless.title}
                            </h5>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                              {solutionsData[tab].automation.wireless.description}
                            </p>
                            <ul className="space-y-2">
                              {solutionsData[tab].automation.wireless.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                        <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-purple-50 to-violet-50 dark:from-slate-800 dark:to-slate-900">
                          <CardContent className="p-6">
                            <h5 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">
                              {solutionsData[tab].automation.wired.title}
                            </h5>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                              {solutionsData[tab].automation.wired.description}
                            </p>
                            <ul className="space-y-2">
                              {solutionsData[tab].automation.wired.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Check className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                    
                    <h4 className="text-xl font-semibold mb-6">Our {solutionsData[tab].title} Solutions</h4>
                  </div>

                  <div className="w-full px-4">
                    <Slider {...sliderSettings}>
                      {solutionsData[tab].features.map((feature, index) => (
                        <div key={index} className="px-2">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="apple-card w-[300px] shadow-lg rounded-xl overflow-hidden mx-auto"
                          >
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-full object-cover"
                                onError={(e) => ((e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200')}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                              <h4 className="absolute bottom-4 left-4 text-white font-semibold text-lg">{feature.title}</h4>
                            </div>
                            <div className="p-5 bg-white dark:bg-slate-800">
                              <p className="text-slate-600 dark:text-slate-300 mb-4">{feature.description}</p>
                              <ul className="space-y-2">
                                {feature.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-mystic-500 flex-shrink-0 mt-1" />
                                    <span className="text-slate-700 dark:text-slate-300 text-sm">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </Slider>
                  </div>

                  <div className="mt-16 max-w-4xl mx-auto">
                    <h4 className="text-xl font-semibold mb-6">Why Choose Mystic Info System for {solutionsData[tab].title}?</h4>
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {solutionsData[tab].whyChooseUs.map((reason, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="bg-mystic-100 dark:bg-mystic-900/30 text-mystic-600 p-2 rounded-full flex-shrink-0">
                              <Check className="w-4 h-4" />
                            </div>
                            <span className="text-slate-700 dark:text-slate-300">{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-10 text-center">
                      <p className="text-lg font-medium text-mystic-600 mb-4">{solutionsData[tab].callToAction}</p>
                      <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 bg-mystic-600 hover:bg-mystic-700 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        Contact Us Today <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SolutionsSection;