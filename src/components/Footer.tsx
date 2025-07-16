
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
      className="group flex items-center gap-2 p-2 bg-background/10 dark:bg-background/10 rounded-lg border border-transparent hover:border-accent/30 transition-all duration-500"
    >
      <div className="flex-shrink-0">
        <Icon className="w-4 h-4 text-foreground/70 group-hover:text-accent transition-colors duration-500" style={color ? { color } : {}} />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-xs font-medium text-foreground group-hover:text-accent transition-colors duration-500 truncate">
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
    icon: <item.icon className="w-6 h-6 text-foreground" />,
    label: item.label,
    onClick: () => window.open(item.link, '_blank'),
    className: "hover:bg-accent/20"
  }));

  return (
    <footer id="footer" className="py-8 relative z-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 border-border backdrop-blur-sm overflow-hidden">
            <div className="p-4">
              <h2 className="text-lg font-cormorant font-bold text-foreground mb-4 text-center">
                Let's connect!
              </h2>
              
              {/* Desktop: Compact grid layout */}
              <div className="hidden md:block">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 max-w-2xl mx-auto">
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
                <div className="h-16 relative">
                  <Dock 
                    items={dockItems}
                    className="bg-background/80 backdrop-blur-sm"
                    distance={150}
                    magnification={60}
                    baseItemSize={40}
                    panelHeight={60}
                  />
                </div>
              </div>
            </div>

            {/* Footer bottom */}
            <div className="py-3 px-4 border-t border-border flex flex-col md:flex-row items-center justify-between bg-background/5">
              <p className="text-muted-foreground text-xs">
                &copy; {new Date().getFullYear()} Muhammad Nanda
              </p>
              
              {/* Location badge */}
              <div className="mt-1 md:mt-0 flex items-center text-xs text-muted-foreground">
                <span className="inline-block w-2 h-2 rounded-full bg-accent mr-1 animate-pulse"></span>
                <span>Palembang, ID</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
