import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, AtSign, Phone, MapPin, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ContactItem {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  link: string;
  color?: string;
}

// Contact item data array for cleaner code
const contactItems: ContactItem[] = [
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

// Contact item component with improved responsive design
const ContactItem: React.FC<ContactItem> = ({ icon: Icon, label, value, link, color }) => {
  return (
    <a 
      href={link}
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex items-center gap-2 p-2 md:p-3 bg-gray-800/10 dark:bg-gray-200/30 rounded-lg border border-transparent hover:border-amber-300/30 transition-all duration-500"
    >
      <div className="flex-shrink-0">
        <Icon 
          className="w-4 h-4 md:w-5 md:h-5 text-gray-500/70 dark:text-gray-100/70 group-hover:text-amber-300 transition-colors duration-500" 
          style={color ? { color } : {}}
        />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-xs text-gray-500/60 dark:text-white/60">{label}</span>
        <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-white/80 group-hover:text-amber-300 transition-colors duration-500 truncate">
          {value}
        </span>
      </div>
    </a>
  );
};

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Update isMobile state based on window width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer id="footer" className="pt-6 pb-8 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="bg-white/50 dark:bg-gray-900/50 border border-gray-200/10 dark:border-gray-700/10 backdrop-blur-sm">
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
              Let's connect!
            </h2>
            
            {/* Always 2 rows of 3 items on all screen sizes */}
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

          {/* Footer bottom */}
          <div className="py-3 md:py-4 px-4 md:px-6 border-t border-gray-200/10 dark:border-gray-700/10 flex flex-col md:flex-row items-center justify-between bg-gray-100/5 dark:bg-white/5">
            <p className="text-gray-500/60 dark:text-white/60 text-xs md:text-sm">
              &copy; {new Date().getFullYear()} Muhammad Nanda
            </p>
            
            {/* Location badge */}
            <div className="mt-1 md:mt-0 flex items-center text-xs text-gray-500/50 dark:text-white/50">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-300 mr-1 animate-pulse"></span>
              <span>Palembang, ID</span>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Mobile Floating Action Button - only show on mobile */}
      {isMobile && (
        <a
          href="mailto:nchola@mhs.mdp.ac.id"
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-amber-300 flex items-center justify-center shadow-lg z-20"
        >
          <AtSign className="text-gray-900 w-5 h-5" />
          <span className="absolute inset-0 rounded-full bg-amber-300 animate-ping opacity-30"></span>
        </a>
      )}
    </footer>
  );
};

export default Footer;