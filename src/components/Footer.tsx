
import React from 'react';
import { Instagram, Linkedin, AtSign, Phone, MapPin, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';

// Contact data
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
    value: "mhmmdnanda",
    link: "https://www.linkedin.com/in/mhmmdnanda/",
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
    link: "tel:+6285382581084"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Palembang, ID",
    link: "https://maps.google.com/?q=Palembang,Indonesia",
    color: "#EA4335"
  }
];

// Contact item component
const ContactItem = ({ icon: Icon, label, value, link, color }) => {
  return (
    <a 
      href={link}
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex items-center gap-2 p-3 bg-quantum-gray/10 dark:bg-void-black/30 rounded-lg border border-transparent hover:border-gilded-parchment/30 transition-all duration-300"
    >
      <div className="flex-shrink-0">
        <Icon className="w-5 h-5 text-quantum-gray/70 dark:text-static-white/70 group-hover:text-gilded-parchment transition-colors duration-300" style={color ? { color } : {}} />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xs text-quantum-gray/60 dark:text-static-white/60">{label}</span>
        <span className="text-sm font-medium text-quantum-gray dark:text-static-white/80 group-hover:text-gilded-parchment transition-colors duration-300 truncate">
          {value}
        </span>
      </div>
    </a>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="pt-6 pb-8 bg-transparent relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="bg-static-white/50 dark:bg-void-black/50 border border-quantum-gray/10 dark:border-static-white/10 backdrop-blur-sm">
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-cormorant font-bold text-quantum-gray dark:text-static-white mb-4 text-center">
              Let's connect!
            </h2>
            
            {/* Contact Grid - Always display in 2 rows of 3 items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
      
      {/* Mobile Floating Action Button */}
      <a
        href="mailto:nchola@mhs.mdp.ac.id"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gilded-parchment flex items-center justify-center shadow-lg z-20 md:hidden"
      >
        <AtSign className="text-void-black w-5 h-5" />
        <span className="absolute inset-0 rounded-full bg-gilded-parchment animate-ping opacity-30"></span>
      </a>
    </footer>
  );
};

export default Footer;
