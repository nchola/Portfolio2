
import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, AtSign, Phone, MapPin, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Dock from '@/Animations/Dock/Dock';
import type { DockItemData } from '@/Animations/Dock/Dock';

// Contact item data array for cleaner code
const contactItems = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@nndncholaa",
    link: "https://www.instagram.com/nndncholaa/",
    color: "#E1306C"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "muhammad-nanda",
    link: "https://www.linkedin.com/in/muhammad-nanda/",
    color: "#0A66C2"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "nchola",
    link: "https://github.com/nchola"
  },
  {
    icon: AtSign,
    label: "Email",
    value: "nchola@mhs.mdp.ac.id",
    link: "mailto:nchola@mhs.mdp.ac.id"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+62)85382581084",
    link: "https://api.whatsapp.com/send?phone=6285382581084"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Palembang, ID",
    link: "https://maps.google.com/?q=Palembang,Indonesia",
    color: "#EA4335"
  }
];

// Contact item component with improved responsive design
const ContactItem = ({ icon: Icon, label, value, link, color }) => {
  return (
    <a 
      href={link}
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex items-center gap-2 p-2 md:p-3 bg-quantum-gray/10 dark:bg-void-black/30 rounded-lg border border-transparent hover:border-gilded-parchment/30 transition-all duration-500"
    >
      <div className="flex-shrink-0">
        <Icon className="w-4 h-4 md:w-5 md:h-5 text-quantum-gray/70 dark:text-static-white/70 group-hover:text-gilded-parchment transition-colors duration-500" style={color ? { color } : {}} />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xs text-quantum-gray/60 dark:text-static-white/60">{label}</span>
        <span className="text-xs md:text-sm font-medium text-quantum-gray dark:text-static-white/80 group-hover:text-gilded-parchment transition-colors duration-500 truncate">
          {value}
        </span>
      </div>
    </a>
  );
};

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Update isMobile state based on window width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Create dock items from contact items
  const dockItems: DockItemData[] = contactItems.map(item => ({
    icon: <item.icon className="w-6 h-6 text-static-white" />,
    label: item.label,
    onClick: () => window.open(item.link, '_blank'),
    className: "hover:bg-gilded-parchment/20"
  }));

  return (
    <footer id="footer" className="pt-12 pb-8 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="bg-static-white/50 dark:bg-void-black/50 border border-quantum-gray/10 dark:border-static-white/10 backdrop-blur-sm">
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-cormorant font-bold text-quantum-gray dark:text-static-white mb-4 text-center">
              Let's connect!
            </h2>
            
            {/* Desktop: Original grid layout */}
            <div className="hidden md:block">
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {contactItems.map((item, index) => (
                  <ContactItem 
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                    link={item.link}
                    color={item.color}
                  />
                ))}
              </div>
            </div>

            {/* Mobile: Dock layout */}
            <div className="md:hidden">
              <div className="h-20 relative">
                <Dock 
                  items={dockItems}
                  className="bg-void-black/80 backdrop-blur-sm"
                  distance={150}
                  magnification={60}
                  baseItemSize={40}
                  panelHeight={60}
                />
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="py-3 md:py-4 px-4 md:px-6 border-t border-quantum-gray/10 dark:border-static-white/10 flex flex-col md:flex-row items-center justify-between bg-quantum-gray/5 dark:bg-static-white/5">
            <p className="text-quantum-gray/60 dark:text-static-white/60 text-xs md:text-sm">
              &copy; {new Date().getFullYear()} Muhammad Nanda
            </p>
            
            {/* Location badge */}
            <div className="mt-1 md:mt-0 flex items-center text-xs text-quantum-gray/50 dark:text-static-white/50">
              <span className="inline-block w-2 h-2 rounded-full bg-gilded-parchment mr-1 animate-pulse"></span>
              <span>Palembang, ID</span>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;
